/**
 * SimliConnection — pure-TS connection manager for Simli's WebRTC API.
 *
 * Mirrors the protocol documented at
 *   https://docs.simli.com/api-reference/simli-webrtc
 *
 * Flow (also in docs/SIMLI-DIRECT-INTEGRATION.md):
 *   1. POST /compose/token with { faceId, ... } → session_token
 *   2. WS  /compose/webrtc/p2p?session_token=...
 *   3. addTransceiver audio + video (both recvonly)
 *   4. createOffer → send { sdp, type } over WS
 *   5. server replies { sdp, type:'answer' } → setRemoteDescription
 *   6. on track event → expose the remote video MediaStream
 *   7. sendAudio(pcm) → write the PCM frame as a binary WS message
 *
 * Required package (not yet installed — see docs/SIMLI-DIRECT-INTEGRATION.md):
 *   npm i react-native-webrtc @config-plugins/react-native-webrtc react-native-get-random-values
 */

// react-native-webrtc is a soft / lazy dependency. We resolve it via
// require() inside `loadWebRTC()` only when `connect()` is actually
// called — that way Metro can bundle this file in builds where the
// package isn't installed (e.g. v1 preview/TestFlight where lipsync
// is disabled). If someone instantiates SimliConnection without the
// package present, connect() throws a clear error at runtime.
//
// See docs/SIMLI-DIRECT-INTEGRATION.md for install + dev-client rebuild.

type RTCPeerConnectionCtor = new (config?: unknown) => any;
let _RTCPeerConnection: RTCPeerConnectionCtor | null = null;
let _webrtcLoadError:   string | null = null;

function loadWebRTC(): RTCPeerConnectionCtor {
  if (_RTCPeerConnection) return _RTCPeerConnection;
  try {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const mod = require('react-native-webrtc');
    if (!mod?.RTCPeerConnection) throw new Error('react-native-webrtc exports missing');
    _RTCPeerConnection = mod.RTCPeerConnection as RTCPeerConnectionCtor;
    return _RTCPeerConnection;
  } catch (e) {
    _webrtcLoadError = e instanceof Error ? e.message : String(e);
    throw new Error(
      `react-native-webrtc not available: ${_webrtcLoadError}. ` +
      `Install per docs/SIMLI-DIRECT-INTEGRATION.md and rebuild the dev client.`,
    );
  }
}

const SIMLI_BASE = 'https://api.simli.ai';
const SIMLI_WS   = 'wss://api.simli.ai';

export interface SimliConfig {
  apiKey:           string;
  faceId:           string;
  handleSilence?:   boolean;   // default true
  maxSessionLength?: number;   // seconds; default 600
  maxIdleTime?:     number;    // seconds; default 120
}

export type SimliState = 'idle' | 'connecting' | 'connected' | 'closing' | 'closed' | 'error';

export interface SimliEvents {
  onState?:        (s: SimliState) => void;
  // MediaStream typed as `any` since react-native-webrtc isn't statically
  // imported. The runtime object is a real RN MediaStream when delivered.
  onRemoteStream?: (stream: any) => void;
  onError?:        (err: Error) => void;
}

/**
 * One connection per session. Construct → connect() → sendAudio()
 * many times → close().
 */
export class SimliConnection {
  private cfg:    SimliConfig;
  private events: SimliEvents;

  private state:  SimliState = 'idle';
  private pc:     any | null = null;        // RTCPeerConnection at runtime
  private ws:     WebSocket | null = null;
  private token:  string | null = null;
  private closedExplicitly = false;

  constructor(cfg: SimliConfig, events: SimliEvents = {}) {
    this.cfg = {
      handleSilence: true,
      maxSessionLength: 600,
      maxIdleTime: 120,
      ...cfg,
    };
    this.events = events;
  }

  getState(): SimliState { return this.state; }

  /** Start the session. Resolves once the WebRTC peer connection is connected. */
  async connect(): Promise<void> {
    if (this.state !== 'idle') throw new Error(`SimliConnection: already ${this.state}`);
    this.setState('connecting');

    try {
      this.token = await this.fetchSessionToken();
      this.pc    = this.createPeerConnection();
      // recvonly on both — outgoing audio goes via WS binary frames,
      // not the peer connection.
      this.pc.addTransceiver('audio', { direction: 'recvonly' });
      this.pc.addTransceiver('video', { direction: 'recvonly' });

      this.ws = await this.openSignallingSocket(this.token);
      const offer = await this.pc.createOffer({});
      await this.pc.setLocalDescription(offer);

      this.ws.send(JSON.stringify({ sdp: offer.sdp, type: 'offer' }));
      const answer = await this.waitForAnswer();
      await this.pc.setRemoteDescription(answer);
    } catch (err) {
      this.setState('error');
      this.events.onError?.(err instanceof Error ? err : new Error(String(err)));
      await this.close().catch(() => {});
      throw err;
    }
  }

  /**
   * Forward a PCM frame to Simli. Format: Int16 PCM, 16 kHz, mono.
   * Max 65,536 bytes per chunk (6,000 bytes ideal).
   */
  sendAudio(pcm: ArrayBuffer | Uint8Array): void {
    if (!this.ws || this.ws.readyState !== WebSocket.OPEN) return;
    if (this.state !== 'connected' && this.state !== 'connecting') return;
    const payload = pcm instanceof Uint8Array ? pcm : new Uint8Array(pcm);
    this.ws.send(payload);
  }

  async close(): Promise<void> {
    if (this.state === 'closing' || this.state === 'closed') return;
    this.closedExplicitly = true;
    this.setState('closing');
    try { this.ws?.close(); } catch {}
    try { this.pc?.close(); } catch {}
    this.ws = null;
    this.pc = null;
    this.setState('closed');
  }

  // ─── internals ──────────────────────────────────────────────────────────

  private setState(next: SimliState) {
    this.state = next;
    this.events.onState?.(next);
  }

  private async fetchSessionToken(): Promise<string> {
    const res = await fetch(`${SIMLI_BASE}/compose/token`, {
      method:  'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-simli-api-key': this.cfg.apiKey,
      },
      body: JSON.stringify({
        faceId:           this.cfg.faceId,
        handleSilence:    this.cfg.handleSilence,
        maxSessionLength: this.cfg.maxSessionLength,
        maxIdleTime:      this.cfg.maxIdleTime,
      }),
    });
    if (!res.ok) {
      throw new Error(`Simli token: ${res.status} ${await res.text().catch(() => '')}`);
    }
    const json = await res.json();
    const token = json?.session_token;
    if (typeof token !== 'string') throw new Error('Simli token: no session_token in response');
    return token;
  }

  private createPeerConnection(): any {
    const RTCPeerConnection = loadWebRTC();
    const pc = new RTCPeerConnection({
      // Default Google STUN — for v1. Can fetch /compose/ice later.
      iceServers: [{ urls: 'stun:stun.l.google.com:19302' }],
    });

    pc.addEventListener('connectionstatechange', () => {
      const cs = (pc as any).connectionState as string | undefined;
      if (cs === 'connected') this.setState('connected');
      else if (cs === 'failed' || cs === 'disconnected') {
        if (!this.closedExplicitly) {
          this.setState('error');
          this.events.onError?.(new Error(`peerConnection: ${cs}`));
        }
      }
    });

    pc.addEventListener('track', (ev: any) => {
      const stream: any | undefined = ev.streams?.[0];
      if (stream) this.events.onRemoteStream?.(stream);
    });

    return pc;
  }

  private openSignallingSocket(token: string): Promise<WebSocket> {
    return new Promise((resolve, reject) => {
      const url = `${SIMLI_WS}/compose/webrtc/p2p?session_token=${encodeURIComponent(token)}&enableSFU=false`;
      const ws  = new WebSocket(url);
      ws.binaryType = 'arraybuffer';
      const timer = setTimeout(() => reject(new Error('Simli WS: open timeout')), 10_000);

      ws.onopen = () => {
        clearTimeout(timer);
        resolve(ws);
      };
      ws.onerror = (e) => {
        clearTimeout(timer);
        reject(new Error(`Simli WS error: ${(e as any)?.message ?? 'unknown'}`));
      };
      ws.onclose = () => {
        if (!this.closedExplicitly) {
          this.setState('error');
          this.events.onError?.(new Error('Simli WS closed unexpectedly'));
        }
      };
    });
  }

  /** Wait for the signalling answer on the open WebSocket. */
  private waitForAnswer(): Promise<{ type: 'answer'; sdp: string }> {
    if (!this.ws) return Promise.reject(new Error('no ws'));
    const ws = this.ws;
    return new Promise((resolve, reject) => {
      const timer = setTimeout(() => reject(new Error('Simli WS: answer timeout')), 15_000);

      const handler = (ev: MessageEvent) => {
        // Binary frames here are unexpected at this stage; ignore them.
        if (typeof ev.data !== 'string') return;
        try {
          const msg = JSON.parse(ev.data);
          if (msg?.type === 'answer' && typeof msg.sdp === 'string') {
            clearTimeout(timer);
            ws.removeEventListener('message', handler as any);
            resolve(msg);
          }
        } catch {
          // Non-JSON message; ignore.
        }
      };
      ws.addEventListener('message', handler as any);
    });
  }
}

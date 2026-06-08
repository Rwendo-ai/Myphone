/**
 * ElevenLabs Conv AI WebSocket client — browser port of mobile lib/conv-ai-ws.ts.
 *
 * Differences from the RN version:
 *   - WebSocket: standard browser WebSocket (no RN error event quirks).
 *   - Audio I/O: Web Audio API + AudioWorklet for mic capture (downsamples
 *     to 16 kHz mono PCM16 in the worklet) and an AudioBufferSourceNode
 *     queue for playback of incoming PCM frames.
 *   - Base64: native btoa/atob (browsers always have them).
 *
 * Wire format (unchanged from upstream):
 *   - Send  : { user_audio_chunk: <base64 PCM16, 16 kHz mono> }
 *   - Recv  : { type: 'audio', audio_event: { audio_base_64: '...' } }
 *
 * Usage:
 *   const session = new VoiceWebSession({ agentId, apiKey }, { onConnected, ... });
 *   await session.start();                         // requests mic, opens WS
 *   ...
 *   session.stop();                                // tears down everything
 */

const WS_BASE = 'wss://api.elevenlabs.io/v1/convai/conversation';
const SIGNED_URL_ENDPOINT = '/api/voice-signed-url';
const SAMPLE_RATE = 16000;

export interface VoiceOverrides {
  systemPrompt?: string;
  firstMessage?: string;
  language?: string;
  voiceId?: string;
}

export interface VoiceConfig {
  agentId: string;
  /** When true, fetch a signed URL via /api/voice-signed-url first. */
  useSignedUrl?: boolean;
  overrides?: VoiceOverrides;
  dynamicVariables?: Record<string, string | number | boolean>;
}

export interface VoiceHandlers {
  onConnected?: (conversationId: string) => void;
  onDisconnected?: (code: number, reason: string) => void;
  onError?: (err: Error) => void;
  onUserTranscript?: (text: string) => void;
  onAgentResponse?: (text: string) => void;
  onAgentResponseDelta?: (delta: string) => void;
  onAgentSpeakingChange?: (speaking: boolean) => void;
  onInterruption?: () => void;
  onVadScore?: (score: number) => void;
}

interface InitMessage {
  type: 'conversation_initiation_client_data';
  conversation_config_override?: {
    agent?: { prompt?: { prompt: string }; first_message?: string; language?: string };
    tts?: { voice_id?: string };
  };
  dynamic_variables?: Record<string, string | number | boolean>;
}

export class VoiceWebSession {
  private ws: WebSocket | null = null;
  private closed = false;
  private conversationId = '';

  private audioCtx: AudioContext | null = null;
  private micStream: MediaStream | null = null;
  private micSource: MediaStreamAudioSourceNode | null = null;
  private micWorklet: AudioWorkletNode | null = null;
  private playbackTime = 0;

  constructor(
    private readonly config: VoiceConfig,
    private readonly handlers: VoiceHandlers,
  ) {}

  /**
   * Full session start: request mic permission, set up Web Audio, open WS.
   * Throws on any failure — caller catches and surfaces a useful message.
   */
  async start(): Promise<void> {
    if (this.ws) return;

    // Mic permission + audio context.
    if (!navigator.mediaDevices?.getUserMedia) {
      throw new Error('Voice requires microphone access — this browser does not support getUserMedia.');
    }
    try {
      this.micStream = await navigator.mediaDevices.getUserMedia({
        audio: {
          channelCount: 1,
          echoCancellation: true,
          noiseSuppression: true,
          autoGainControl: true,
        },
      });
    } catch {
      throw new Error('Microphone permission denied. Allow mic access and try again.');
    }

    const AC = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    this.audioCtx = new AC({ sampleRate: SAMPLE_RATE });
    // Some browsers start the context suspended until a user gesture; we're
    // called from a click handler so resume() is safe.
    if (this.audioCtx.state === 'suspended') {
      try { await this.audioCtx.resume(); } catch { /* ignore */ }
    }
    this.playbackTime = this.audioCtx.currentTime;

    // Inline an AudioWorklet for mic frame capture + downsampling.
    // We register it from a Blob URL to avoid shipping a separate static file.
    const workletSrc = `
      class MicWorklet extends AudioWorkletProcessor {
        constructor() {
          super();
          this._buf = [];
          this._target = 320; // 20ms @ 16kHz = 320 samples
        }
        process(inputs) {
          const input = inputs[0];
          if (!input || !input[0]) return true;
          const ch = input[0];
          // AudioContext is forced to 16kHz so no resampling needed here.
          for (let i = 0; i < ch.length; i++) this._buf.push(ch[i]);
          while (this._buf.length >= this._target) {
            const frame = this._buf.splice(0, this._target);
            const pcm = new Int16Array(frame.length);
            for (let i = 0; i < frame.length; i++) {
              const s = Math.max(-1, Math.min(1, frame[i]));
              pcm[i] = s < 0 ? s * 0x8000 : s * 0x7FFF;
            }
            this.port.postMessage(pcm.buffer, [pcm.buffer]);
          }
          return true;
        }
      }
      registerProcessor('mic-worklet', MicWorklet);
    `;
    const blob = new Blob([workletSrc], { type: 'application/javascript' });
    const blobUrl = URL.createObjectURL(blob);
    try {
      await this.audioCtx.audioWorklet.addModule(blobUrl);
    } finally {
      URL.revokeObjectURL(blobUrl);
    }

    this.micSource = this.audioCtx.createMediaStreamSource(this.micStream);
    this.micWorklet = new AudioWorkletNode(this.audioCtx, 'mic-worklet');
    this.micWorklet.port.onmessage = (ev) => {
      const buf = ev.data as ArrayBuffer;
      this.sendUserAudio(new Uint8Array(buf));
    };
    this.micSource.connect(this.micWorklet);
    // Connect to a silent sink so the worklet keeps pulling.
    const sink = this.audioCtx.createGain();
    sink.gain.value = 0;
    this.micWorklet.connect(sink).connect(this.audioCtx.destination);

    // Open the WebSocket.
    let url: string;
    if (this.config.useSignedUrl) {
      const signed = await this.fetchSignedUrl();
      url = signed;
    } else {
      url = `${WS_BASE}?agent_id=${encodeURIComponent(this.config.agentId)}`;
    }

    await new Promise<void>((resolve, reject) => {
      const ws = new WebSocket(url);
      this.ws = ws;
      ws.onopen = () => {
        this.sendInit();
        resolve();
      };
      ws.onmessage = (ev) => this.onMessage(ev);
      ws.onerror = () => {
        if (this.closed) return;
        const err = new Error('WebSocket error');
        this.handlers.onError?.(err);
        if (!this.ws || this.ws.readyState === WebSocket.CONNECTING) reject(err);
      };
      ws.onclose = (ev) => {
        this.ws = null;
        this.closed = true;
        this.handlers.onDisconnected?.(ev.code, ev.reason);
      };
    });
  }

  /** Cleanly close socket + tear down audio. */
  stop(): void {
    this.closed = true;
    try { this.ws?.close(1000, 'client_close'); } catch { /* ignore */ }
    this.ws = null;
    try { this.micWorklet?.disconnect(); } catch { /* ignore */ }
    try { this.micSource?.disconnect(); } catch { /* ignore */ }
    this.micWorklet = null;
    this.micSource = null;
    if (this.micStream) {
      this.micStream.getTracks().forEach((t) => t.stop());
      this.micStream = null;
    }
    if (this.audioCtx) {
      try { this.audioCtx.close(); } catch { /* ignore */ }
      this.audioCtx = null;
    }
  }

  triggerInterrupt(): void {
    this.send({ type: 'user_activity' });
  }

  sendUserMessage(text: string): void {
    this.send({ type: 'user_message', text });
  }

  isOpen(): boolean {
    return !!this.ws && this.ws.readyState === WebSocket.OPEN;
  }

  // ─── Internals ────────────────────────────────────────────────────────────

  private sendUserAudio(pcm: Uint8Array): void {
    if (!this.ws || this.ws.readyState !== WebSocket.OPEN) return;
    const b64 = uint8ToBase64(pcm);
    this.send({ user_audio_chunk: b64 });
  }

  private async fetchSignedUrl(): Promise<string> {
    const res = await fetch(SIGNED_URL_ENDPOINT, { method: 'POST' });
    if (!res.ok) {
      const t = await res.text().catch(() => '');
      throw new Error(`signed-url failed: ${res.status} ${t}`);
    }
    const json = await res.json() as { signed_url?: string };
    if (!json.signed_url) throw new Error('signed-url returned empty');
    return json.signed_url;
  }

  private sendInit(): void {
    const msg: InitMessage = { type: 'conversation_initiation_client_data' };
    const o = this.config.overrides;
    if (o) {
      const agent: NonNullable<NonNullable<InitMessage['conversation_config_override']>['agent']> = {};
      if (o.systemPrompt) agent.prompt = { prompt: o.systemPrompt };
      if (o.firstMessage) agent.first_message = o.firstMessage;
      if (o.language) agent.language = o.language;
      const tts: NonNullable<NonNullable<InitMessage['conversation_config_override']>['tts']> = {};
      if (o.voiceId) tts.voice_id = o.voiceId;
      msg.conversation_config_override = {};
      if (Object.keys(agent).length > 0) msg.conversation_config_override.agent = agent;
      if (Object.keys(tts).length > 0) msg.conversation_config_override.tts = tts;
    }
    if (this.config.dynamicVariables && Object.keys(this.config.dynamicVariables).length > 0) {
      msg.dynamic_variables = this.config.dynamicVariables;
    }
    this.send(msg);
  }

  private send(payload: object): void {
    if (!this.ws || this.ws.readyState !== WebSocket.OPEN) return;
    try { this.ws.send(JSON.stringify(payload)); } catch (e) {
      this.handlers.onError?.(e as Error);
    }
  }

  private onMessage(ev: MessageEvent): void {
    let data: unknown;
    try { data = typeof ev.data === 'string' ? JSON.parse(ev.data) : null; } catch { return; }
    if (!data || typeof data !== 'object') return;
    const msg = data as Record<string, unknown>;
    const type = msg.type as string | undefined;

    switch (type) {
      case 'conversation_initiation_metadata': {
        const meta = msg.conversation_initiation_metadata_event as { conversation_id?: string } | undefined;
        this.conversationId = meta?.conversation_id ?? '';
        this.handlers.onConnected?.(this.conversationId);
        break;
      }
      case 'audio': {
        const inner = msg.audio_event as { audio_base_64?: string } | undefined;
        const b64 = inner?.audio_base_64 ?? (msg.audio_base_64 as string | undefined);
        if (b64) this.playPcm(base64ToUint8(b64));
        break;
      }
      case 'user_transcript': {
        const inner = msg.user_transcription_event as { user_transcript?: string } | undefined;
        const text = inner?.user_transcript ?? (msg.user_transcript as string | undefined);
        if (text) this.handlers.onUserTranscript?.(text);
        break;
      }
      case 'agent_response': {
        const inner = msg.agent_response_event as { agent_response?: string } | undefined;
        const text = inner?.agent_response ?? (msg.agent_response as string | undefined);
        if (text) this.handlers.onAgentResponse?.(text);
        break;
      }
      case 'agent_response_correction': {
        this.handlers.onInterruption?.();
        break;
      }
      case 'agent_chat_response_part':
      case 'agent_response_part': {
        const part = (msg.text_response_part as { text?: string } | undefined)?.text
          ?? (msg.delta as string | undefined)
          ?? (msg.text as string | undefined)
          ?? '';
        if (part) this.handlers.onAgentResponseDelta?.(part);
        break;
      }
      case 'interruption': {
        this.handlers.onInterruption?.();
        this.handlers.onAgentSpeakingChange?.(false);
        // Truncate any queued playback.
        this.playbackTime = this.audioCtx?.currentTime ?? 0;
        break;
      }
      case 'vad_score': {
        const score = (msg.vad_score_event as { vad_score?: number } | undefined)?.vad_score
          ?? (msg.vad_score as number | undefined);
        if (typeof score === 'number') this.handlers.onVadScore?.(score);
        break;
      }
      case 'ping': {
        const eventId = (msg.ping_event as { event_id?: number } | undefined)?.event_id;
        this.send({ type: 'pong', event_id: eventId ?? 0 });
        break;
      }
      default:
        // Unhandled — fine.
        break;
    }
  }

  /**
   * Queue a PCM16 frame for playback. We schedule each chunk back-to-back on
   * an AudioBuffer queue so the agent's voice plays contiguously without
   * gaps. PCM is 16 kHz mono signed 16-bit.
   */
  private playPcm(pcm: Uint8Array): void {
    if (!this.audioCtx) return;
    const samples = pcm.byteLength / 2;
    if (samples <= 0) return;

    // Convert PCM16 → Float32 in [-1, 1].
    const view = new DataView(pcm.buffer, pcm.byteOffset, pcm.byteLength);
    const float = new Float32Array(samples);
    for (let i = 0; i < samples; i++) {
      const s = view.getInt16(i * 2, true);
      float[i] = s < 0 ? s / 0x8000 : s / 0x7FFF;
    }
    const buf = this.audioCtx.createBuffer(1, samples, SAMPLE_RATE);
    buf.copyToChannel(float, 0);
    const src = this.audioCtx.createBufferSource();
    src.buffer = buf;
    src.connect(this.audioCtx.destination);
    const now = this.audioCtx.currentTime;
    const startAt = Math.max(this.playbackTime, now);
    src.start(startAt);
    this.playbackTime = startAt + buf.duration;
    this.handlers.onAgentSpeakingChange?.(true);
    src.onended = () => {
      if (this.audioCtx && this.playbackTime <= this.audioCtx.currentTime + 0.05) {
        this.handlers.onAgentSpeakingChange?.(false);
      }
    };
  }
}

// ─── Base64 helpers (browser) ───────────────────────────────────────────────

function uint8ToBase64(bytes: Uint8Array): string {
  // Stack-safe chunked btoa.
  let str = '';
  const chunk = 0x8000;
  for (let i = 0; i < bytes.length; i += chunk) {
    str += String.fromCharCode(...bytes.subarray(i, i + chunk));
  }
  return btoa(str);
}

function base64ToUint8(b64: string): Uint8Array {
  const binary = atob(b64);
  const out = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) out[i] = binary.charCodeAt(i);
  return out;
}

/** True if voice mode can run in this browser (mic + AudioWorklet support). */
export function isVoiceSupported(): boolean {
  if (typeof window === 'undefined') return false;
  if (!navigator.mediaDevices?.getUserMedia) return false;
  const AC = window.AudioContext || (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
  if (!AC) return false;
  // AudioWorklet is the modern, post-2018 way. Older Safari needs polyfill.
  return typeof (AudioContext.prototype as unknown as { audioWorklet?: unknown }).audioWorklet !== 'undefined';
}

/**
 * ElevenLabs ElevenAgents WebSocket client (hand-rolled, RN-native).
 *
 * Why not the official SDK: `@elevenlabs/react-native@1.1.4` ships a broken
 * LiveKit/WebRTC integration on RN — see docs/stack/elevenlabs.md and GitHub
 * issues #515, #605, #641, #676. ElevenLabs support told us directly that
 * the WebSocket protocol works server-side and bypassing their SDK is the
 * supported path until their Q1-2026 RN re-architecture.
 *
 * Protocol reference: https://elevenlabs.io/docs/eleven-agents/libraries/web-sockets
 *
 * Wire format
 *   - Endpoint: wss://api.elevenlabs.io/v1/convai/conversation?agent_id={id}
 *               (public agents)  OR  the signed URL we fetch from REST.
 *   - Audio: 16-bit PCM, 16 kHz, mono, base64-encoded in `user_audio_chunk`.
 *   - Server audio comes back base64-encoded in `audio` events, same format.
 *
 * Pairs with `@speechmatics/expo-two-way-audio` for mic in / speaker out —
 * that module's onMicrophoneData event already gives us 16kHz/16-bit/mono
 * Uint8Array frames, and its playPCMData accepts the same format ElevenLabs
 * sends. Zero resampling, zero format conversion needed.
 */

const WS_BASE = 'wss://api.elevenlabs.io/v1/convai/conversation';
const SIGNED_URL_ENDPOINT = 'https://api.elevenlabs.io/v1/convai/conversation/get-signed-url';

export interface ConvAIOverrides {
  /** Replaces the agent's configured system prompt for this session. */
  systemPrompt?: string;
  /** Replaces the agent's configured first message (the greeting). */
  firstMessage?: string;
  /** ISO 639-1 — overrides the agent's default language. */
  language?: string;
  /** ElevenLabs voice id — overrides the agent's configured voice. */
  voiceId?: string;
}

export interface ConvAIConfig {
  agentId: string;
  /** xi-api-key, used to fetch a signed URL for private agents. */
  apiKey: string;
  /** If true, fetch a signed URL first (works for both public + private). */
  useSignedUrl?: boolean;
  overrides?: ConvAIOverrides;
  /** Filled into {{var_name}} placeholders in the agent's system prompt. */
  dynamicVariables?: Record<string, string | number | boolean>;
}

export interface ConvAIHandlers {
  /** Server says we're set up — overrides accepted, conversation started. */
  onConnected?: (conversationId: string) => void;
  /** WebSocket closed (clean or otherwise). */
  onDisconnected?: (code: number, reason: string) => void;
  /** Anything that prevented the session from working. */
  onError?: (err: Error) => void;
  /** Final user transcript for a turn — fires after the user stops speaking. */
  onUserTranscript?: (text: string) => void;
  /** Agent's final reply for a turn (after streaming completes). */
  onAgentResponse?: (text: string) => void;
  /** Streaming reply text deltas — for live caption display. */
  onAgentResponseDelta?: (delta: string) => void;
  /** PCM chunk to play through the speaker (already 16kHz/16-bit/mono). */
  onAudio?: (pcm: Uint8Array) => void;
  /**
   * Server says the user interrupted — agent's TTS should stop immediately.
   * The audio playback queue must be flushed.
   */
  onInterruption?: () => void;
  /** VAD score 0..1 — useful for orb pulse, optional. */
  onVadScore?: (score: number) => void;
}

interface InitMessage {
  type: 'conversation_initiation_client_data';
  conversation_config_override?: {
    agent?: {
      prompt?: { prompt: string };
      first_message?: string;
      language?: string;
    };
    tts?: { voice_id?: string };
  };
  dynamic_variables?: Record<string, string | number | boolean>;
}

export class ConvAISession {
  private ws: WebSocket | null = null;
  private closed = false;
  private conversationId = '';
  private agentResponseBuf = '';

  constructor(
    private readonly config: ConvAIConfig,
    private readonly handlers: ConvAIHandlers,
  ) {}

  async connect(): Promise<void> {
    if (this.ws) return;

    let url: string;
    if (this.config.useSignedUrl) {
      try {
        const signed = await this.fetchSignedUrl();
        url = signed;
      } catch (e) {
        this.handlers.onError?.(e as Error);
        throw e;
      }
    } else {
      url = `${WS_BASE}?agent_id=${encodeURIComponent(this.config.agentId)}`;
    }

    return new Promise((resolve, reject) => {
      const ws = new WebSocket(url);
      this.ws = ws;

      ws.onopen = () => {
        this.sendInit();
        resolve();
      };
      ws.onmessage = (ev) => this.onMessage(ev);
      ws.onerror = (ev: Event) => {
        // RN WebSocket onerror Event has a `message` property at runtime
        // even though it's not in the standard WebSocket Event type.
        const msg = (ev as unknown as { message?: string }).message ?? 'WebSocket error';
        const err = new Error(msg);
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

  private async fetchSignedUrl(): Promise<string> {
    const res = await fetch(
      `${SIGNED_URL_ENDPOINT}?agent_id=${encodeURIComponent(this.config.agentId)}`,
      { headers: { 'xi-api-key': this.config.apiKey } },
    );
    if (!res.ok) {
      throw new Error(`get-signed-url failed: ${res.status} ${await res.text()}`);
    }
    const json = (await res.json()) as { signed_url?: string };
    if (!json.signed_url) throw new Error('get-signed-url returned no signed_url');
    return json.signed_url;
  }

  private sendInit(): void {
    const msg: InitMessage = {
      type: 'conversation_initiation_client_data',
    };
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

  /**
   * Send a frame of mic-captured PCM. Caller is expected to feed every
   * frame from @speechmatics/expo-two-way-audio's onMicrophoneData event
   * straight through — no buffering, no resampling.
   */
  sendUserAudio(pcm: Uint8Array): void {
    if (!this.ws || this.ws.readyState !== WebSocket.OPEN) return;
    const b64 = uint8ToBase64(pcm);
    this.send({ user_audio_chunk: b64 });
  }

  /** Send a typed user message instead of (or in addition to) audio. */
  sendUserMessage(text: string): void {
    this.send({ type: 'user_message', text });
  }

  /** Force the agent to stop talking — equivalent of "tap to interrupt". */
  triggerInterrupt(): void {
    // Sending a synthetic user activity hint asks the server to cut TTS.
    // The protocol doc lists `user_activity` for this; the older path is
    // an empty `user_message`. We send both to be safe.
    this.send({ type: 'user_activity' });
  }

  /** Cleanly close the session. */
  close(): void {
    this.closed = true;
    if (this.ws) {
      try { this.ws.close(1000, 'client_close'); } catch {}
      this.ws = null;
    }
  }

  isOpen(): boolean {
    return !!this.ws && this.ws.readyState === WebSocket.OPEN;
  }

  conversationIdValue(): string {
    return this.conversationId;
  }

  // ─── Internals ────────────────────────────────────────────────────────────

  private send(payload: object): void {
    if (!this.ws || this.ws.readyState !== WebSocket.OPEN) return;
    try {
      this.ws.send(JSON.stringify(payload));
    } catch (e) {
      this.handlers.onError?.(e as Error);
    }
  }

  private onMessage(ev: WebSocketMessageEvent): void {
    let data: unknown;
    try {
      data = typeof ev.data === 'string' ? JSON.parse(ev.data) : null;
    } catch {
      return;
    }
    if (!data || typeof data !== 'object') return;
    const msg = data as Record<string, unknown>;
    const type = msg.type as string | undefined;

    switch (type) {
      case 'conversation_initiation_metadata': {
        const meta = msg.conversation_initiation_metadata_event as
          | { conversation_id?: string }
          | undefined;
        this.conversationId = meta?.conversation_id ?? '';
        this.handlers.onConnected?.(this.conversationId);
        break;
      }

      case 'audio': {
        // Two known shapes:
        //   { type:'audio', audio_event: { audio_base_64: '...' } }
        //   { type:'audio', audio_base_64: '...' }
        const inner = msg.audio_event as { audio_base_64?: string } | undefined;
        const b64 = inner?.audio_base_64 ?? (msg.audio_base_64 as string | undefined);
        if (b64) {
          const pcm = base64ToUint8(b64);
          this.handlers.onAudio?.(pcm);
        }
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
        if (text) {
          this.agentResponseBuf = '';
          this.handlers.onAgentResponse?.(text);
        }
        break;
      }

      case 'agent_response_correction': {
        // Server retracted the previous agent_response (interruption fallout).
        // We treat this as an interruption so the UI clears stale captions.
        this.agentResponseBuf = '';
        this.handlers.onInterruption?.();
        break;
      }

      case 'agent_chat_response_part':
      case 'agent_response_part': {
        // Streaming text deltas.
        const part = (msg.text_response_part as { text?: string } | undefined)?.text
          ?? (msg.delta as string | undefined)
          ?? (msg.text as string | undefined)
          ?? '';
        if (part) {
          this.agentResponseBuf += part;
          this.handlers.onAgentResponseDelta?.(part);
        }
        break;
      }

      case 'interruption': {
        this.handlers.onInterruption?.();
        break;
      }

      case 'vad_score': {
        const score = (msg.vad_score_event as { vad_score?: number } | undefined)?.vad_score
          ?? (msg.vad_score as number | undefined);
        if (typeof score === 'number') this.handlers.onVadScore?.(score);
        break;
      }

      case 'ping': {
        // Server keepalive — echo back as pong with the event id if present.
        const eventId = (msg.ping_event as { event_id?: number } | undefined)?.event_id;
        this.send({ type: 'pong', event_id: eventId ?? 0 });
        break;
      }

      case 'client_tool_call':
      case 'agent_tool_response':
      case 'mcp_tool_call':
      case 'guardrail_triggered':
      case 'agent_response_complete':
      case 'agent_response_metadata':
        // No-op for now. Worth logging in dev.
        break;

      default:
        // Unrecognised — log only in dev; many message variants aren't yet
        // typed and we don't want to spam logs in prod.
        if (__DEV__) console.log('[ConvAI] unhandled', type, msg);
        break;
    }
  }
}

// ─── Base64 helpers (no Buffer dep, Hermes-safe) ────────────────────────────

const B64_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';

/**
 * Encode a Uint8Array to base64. We could use btoa(String.fromCharCode(...buf))
 * but that overflows the call stack on large frames. This implementation is
 * stack-safe and roughly the same speed as a native btoa for the ~640-byte
 * (20 ms) frames the audio module emits.
 */
function uint8ToBase64(bytes: Uint8Array): string {
  let result = '';
  let i = 0;
  const len = bytes.length;

  for (; i + 2 < len; i += 3) {
    const a = bytes[i];
    const b = bytes[i + 1];
    const c = bytes[i + 2];
    result += B64_CHARS[a >> 2];
    result += B64_CHARS[((a & 0x03) << 4) | (b >> 4)];
    result += B64_CHARS[((b & 0x0f) << 2) | (c >> 6)];
    result += B64_CHARS[c & 0x3f];
  }
  if (i < len) {
    const a = bytes[i];
    if (i + 1 < len) {
      const b = bytes[i + 1];
      result += B64_CHARS[a >> 2];
      result += B64_CHARS[((a & 0x03) << 4) | (b >> 4)];
      result += B64_CHARS[(b & 0x0f) << 2];
      result += '=';
    } else {
      result += B64_CHARS[a >> 2];
      result += B64_CHARS[(a & 0x03) << 4];
      result += '==';
    }
  }
  return result;
}

const B64_LOOKUP = (() => {
  const t = new Uint8Array(256);
  for (let i = 0; i < B64_CHARS.length; i++) t[B64_CHARS.charCodeAt(i)] = i;
  return t;
})();

function base64ToUint8(b64: string): Uint8Array {
  // Strip padding for length math.
  let len = b64.length;
  let pad = 0;
  if (len > 0 && b64[len - 1] === '=') pad++;
  if (len > 1 && b64[len - 2] === '=') pad++;
  const outLen = (len * 3) >> 2;
  const out = new Uint8Array(outLen - pad);

  let p = 0;
  for (let i = 0; i < len; i += 4) {
    const a = B64_LOOKUP[b64.charCodeAt(i)];
    const b = B64_LOOKUP[b64.charCodeAt(i + 1)];
    const c = B64_LOOKUP[b64.charCodeAt(i + 2)];
    const d = B64_LOOKUP[b64.charCodeAt(i + 3)];
    out[p++] = (a << 2) | (b >> 4);
    if (p < out.length) out[p++] = ((b & 0x0f) << 4) | (c >> 2);
    if (p < out.length) out[p++] = ((c & 0x03) << 6) | d;
  }
  return out;
}

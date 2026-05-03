/**
 * Browser-global polyfills for the ElevenLabs / LiveKit voice stack in
 * React Native.
 *
 * `@elevenlabs/client` was written for the browser. It assumes Event,
 * CloseEvent, AudioContext, and document exist as globals. React Native
 * (Hermes) doesn't have those. `@livekit/react-native`'s registerGlobals
 * patches the WebRTC objects (RTCPeerConnection, MediaStream, etc.) but
 * not these.
 *
 * Without these stubs, @elevenlabs/client/dist/utils/WebRTCConnection.js
 * crashes the moment LiveKit's RemoteAudioTrack.attach() runs (it tries
 * document.createElement('audio')), and the resulting unhandled promise
 * rejection breaks the reconnect loop.
 *
 * IMPORTANT: this file must be imported BEFORE @elevenlabs/react-native.
 * VoiceImpl.tsx imports it as the first line.
 */

declare const global: any;

// ─── Event ────────────────────────────────────────────────────────────────
if (typeof global.Event === 'undefined') {
  class EventPolyfill {
    public readonly type: string;
    public readonly bubbles: boolean;
    public readonly cancelable: boolean;
    public readonly composed: boolean;
    public readonly timeStamp: number;
    public defaultPrevented = false;
    public target: unknown = null;
    public currentTarget: unknown = null;

    constructor(type: string, options: { bubbles?: boolean; cancelable?: boolean; composed?: boolean } = {}) {
      this.type = type;
      this.bubbles = !!options.bubbles;
      this.cancelable = !!options.cancelable;
      this.composed = !!options.composed;
      this.timeStamp = Date.now();
    }

    preventDefault(): void {
      if (this.cancelable) this.defaultPrevented = true;
    }
    stopPropagation(): void {}
    stopImmediatePropagation(): void {}
  }
  global.Event = EventPolyfill;
}

// ─── CloseEvent ───────────────────────────────────────────────────────────
if (typeof global.CloseEvent === 'undefined') {
  class CloseEventPolyfill extends global.Event {
    public readonly code: number;
    public readonly reason: string;
    public readonly wasClean: boolean;

    constructor(type: string, options: { code?: number; reason?: string; wasClean?: boolean } & Record<string, unknown> = {}) {
      super(type, options);
      this.code = options.code ?? 0;
      this.reason = options.reason ?? '';
      this.wasClean = options.wasClean ?? false;
    }
  }
  global.CloseEvent = CloseEventPolyfill;
}

// ─── MessageEvent ─────────────────────────────────────────────────────────
// Some libs construct MessageEvent for websocket data. RN's WebSocket emits
// these natively but if anything tries `new MessageEvent()` directly we
// need a stub.
if (typeof global.MessageEvent === 'undefined') {
  class MessageEventPolyfill extends global.Event {
    public readonly data: unknown;
    public readonly origin: string;
    public readonly lastEventId: string;
    constructor(type: string, options: { data?: unknown; origin?: string; lastEventId?: string } & Record<string, unknown> = {}) {
      super(type, options);
      this.data = options.data ?? null;
      this.origin = options.origin ?? '';
      this.lastEventId = options.lastEventId ?? '';
    }
  }
  global.MessageEvent = MessageEventPolyfill;
}

// ─── AudioContext (stub — analyser fails gracefully) ──────────────────────
// ElevenLabs tries to set up an input volume analyser using AudioContext.
// In RN there's no Web Audio API, but the SDK already wraps the analyser
// setup in a try/catch and degrades gracefully. We just need a constructor
// that throws so the catch fires (it already does, but without this stub
// the failure happens at property access, not constructor — different
// error path that doesn't catch).
if (typeof global.AudioContext === 'undefined') {
  class AudioContextStub {
    constructor() {
      throw new Error('AudioContext is not supported in React Native — use react-native-webrtc audio routing instead');
    }
  }
  global.AudioContext = AudioContextStub;
}

// ─── document (minimal DOM stub) ──────────────────────────────────────────
// LiveKit's Track.attach() calls document.createElement('audio') and tries
// to bind it to the track. In RN the audio is routed by the native WebRTC
// engine independently of any DOM element, so the element is functionally
// unused — we just need it to not throw.
if (typeof global.document === 'undefined') {
  const makeElement = (tag: string): Record<string, unknown> => ({
    tagName: tag.toUpperCase(),
    nodeName: tag.toUpperCase(),
    nodeType: 1,
    style: {},
    classList: { add: () => {}, remove: () => {}, contains: () => false, toggle: () => {} },
    children: [],
    childNodes: [],
    addEventListener: () => {},
    removeEventListener: () => {},
    setAttribute: () => {},
    getAttribute: () => null,
    removeAttribute: () => {},
    appendChild: <T>(child: T): T => child,
    removeChild: <T>(child: T): T => child,
    insertBefore: <T>(child: T): T => child,
    contains: () => false,
    focus: () => {},
    blur: () => {},
    click: () => {},
    play: () => Promise.resolve(),
    pause: () => {},
    load: () => {},
    src: '',
    srcObject: null as unknown,
    autoplay: false,
    controls: false,
    muted: false,
    volume: 1,
    currentTime: 0,
    duration: 0,
    paused: true,
    ended: false,
    readyState: 0,
    networkState: 0,
    error: null,
    dispatchEvent: () => true,
  });

  const documentStub = {
    createElement: makeElement,
    createElementNS: (_ns: string, tag: string) => makeElement(tag),
    createTextNode: (text: string) => ({ nodeType: 3, textContent: text, nodeValue: text }),
    createDocumentFragment: () => makeElement('fragment'),
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => true,
    documentElement: makeElement('html'),
    body: makeElement('body'),
    head: makeElement('head'),
    getElementById: () => null,
    getElementsByTagName: () => [],
    getElementsByClassName: () => [],
    querySelector: () => null,
    querySelectorAll: () => [],
    readyState: 'complete' as const,
    visibilityState: 'visible' as const,
    hidden: false,
  };
  global.document = documentStub;
}

// ─── window (alias for global, just in case) ──────────────────────────────
if (typeof global.window === 'undefined') {
  global.window = global;
}

// ─── Mark polyfills loaded so we can verify in dev ────────────────────────
global.__rwendoVoicePolyfillsLoaded = true;

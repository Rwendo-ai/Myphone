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

// ─── AudioContext (noop stub — won't throw) ───────────────────────────────
// LiveKit's acquireAudioContext() does NOT wrap construction in try/catch,
// so a throwing stub cascades to a full connection failure. Instead we
// provide a noop class that silently does nothing. Audio routing in RN
// happens through @livekit/react-native-webrtc's native engine, not the
// Web Audio API, so making AudioContext a noop is functionally correct.
if (typeof global.AudioContext === 'undefined') {
  const makeAnalyser = () => ({
    fftSize: 2048,
    frequencyBinCount: 1024,
    minDecibels: -100,
    maxDecibels: -30,
    smoothingTimeConstant: 0.8,
    getByteFrequencyData: () => {},
    getByteTimeDomainData: () => {},
    getFloatFrequencyData: () => {},
    getFloatTimeDomainData: () => {},
    connect: () => {},
    disconnect: () => {},
  });
  const makeGain = () => ({
    gain: { value: 1, setValueAtTime: () => {}, linearRampToValueAtTime: () => {} },
    connect: () => {},
    disconnect: () => {},
  });
  const makeNode = () => ({
    connect: () => {},
    disconnect: () => {},
  });
  class AudioContextStub {
    state = 'running';
    sampleRate = 48000;
    currentTime = 0;
    destination = makeNode();
    listener = {};
    onstatechange = null;
    constructor(_options?: unknown) {}
    createAnalyser() { return makeAnalyser(); }
    createGain() { return makeGain(); }
    createMediaStreamSource() { return makeNode(); }
    createMediaStreamDestination() { return { stream: { getAudioTracks: () => [], getVideoTracks: () => [], getTracks: () => [] }, ...makeNode() }; }
    createBiquadFilter() { return makeNode(); }
    createOscillator() { return { ...makeNode(), start: () => {}, stop: () => {}, frequency: { value: 440 } }; }
    createScriptProcessor() { return makeNode(); }
    resume() { return Promise.resolve(); }
    suspend() { return Promise.resolve(); }
    close() { return Promise.resolve(); }
    addEventListener() {}
    removeEventListener() {}
    dispatchEvent() { return true; }
  }
  global.AudioContext = AudioContextStub;
  global.webkitAudioContext = AudioContextStub;
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

// ─── window (with proper noop event methods) ──────────────────────────────
// LiveKit calls window.removeEventListener during disconnect cleanup. A bare
// `global.window = global` left removeEventListener undefined and crashed
// the cleanup. Provide explicit noop event methods + the document/navigator
// passthrough so SDK code can keep walking the chain.
if (typeof global.window === 'undefined') {
  const windowStub = {
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => true,
    document: global.document,
    navigator: global.navigator,
    location: { href: '', origin: '', protocol: 'https:', host: '', pathname: '/', search: '', hash: '' },
    innerWidth: 0,
    innerHeight: 0,
    devicePixelRatio: 1,
    requestAnimationFrame: (cb: (timestamp: number) => void) => setTimeout(() => cb(Date.now()), 16),
    cancelAnimationFrame: (id: number) => clearTimeout(id),
    setTimeout: global.setTimeout,
    clearTimeout: global.clearTimeout,
    setInterval: global.setInterval,
    clearInterval: global.clearInterval,
    AudioContext: global.AudioContext,
    Event: global.Event,
    CloseEvent: global.CloseEvent,
    MessageEvent: global.MessageEvent,
  };
  global.window = windowStub;
}

// ─── self (sometimes used as window alias) ────────────────────────────────
if (typeof global.self === 'undefined') {
  global.self = global.window;
}

// ─── Mark polyfills loaded so we can verify in dev ────────────────────────
global.__rwendoVoicePolyfillsLoaded = true;

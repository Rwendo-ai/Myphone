/**
 * useSimliAvatar — React hook that wraps SimliConnection.
 *
 * Companion of useConvAISession. Conv AI runs as today (mic + WS to
 * ElevenLabs, audio played locally). This hook opens a parallel WebRTC
 * connection to Simli and forwards every audio frame Conv AI produces
 * so Simli can drive the lipsynced face.
 *
 * Usage:
 *   const voice = useConvAISession({
 *     onAudioFrame: (pcm) => simli.pushAudio(pcm),  // <- forward audio
 *   });
 *   const simli = useSimliAvatar({
 *     faceId: 'archetype-face-id',
 *   });
 *
 *   useEffect(() => { if (voice.state === 'active') simli.start(); }, [voice.state]);
 *
 *   <LipsyncVideo
 *     tier="lipsync"
 *     assets={...}
 *     remoteStream={simli.remoteStream}
 *   />
 *
 * Requires `react-native-webrtc` to be installed and the dev-client
 * rebuilt — see docs/SIMLI-DIRECT-INTEGRATION.md.
 */

import { useCallback, useEffect, useRef, useState } from 'react';
import { SimliConnection, type SimliState } from '../lib/simli-webrtc';

const SIMLI_API_KEY = process.env.EXPO_PUBLIC_SIMLI_KEY ?? '';

export interface UseSimliAvatarParams {
  /** Simli face_id — comes from companion_archetypes.simli_face_id or
   *  custom_companions.simli_face_id. */
  faceId: string | null;
  /** Hand silence handling to Simli (it'll insert mouth-closed frames
   *  when audio stops). Default true. */
  handleSilence?: boolean;
  onError?: (err: Error) => void;
}

export interface SimliAvatarControls {
  state:         SimliState;
  /** The remote MediaStream containing the avatar video track. Pass
   *  to <RTCView> via `streamURL={remoteStream.toURL()}`. */
  remoteStream:  any | null;   // MediaStream from react-native-webrtc
  /** Open the session. Resolves once connected. */
  start: () => Promise<void>;
  /** Close cleanly. */
  stop: () => void;
  /** Forward a PCM Int16 16 kHz mono frame from Conv AI to Simli. */
  pushAudio: (pcm: ArrayBuffer | Uint8Array) => void;
}

export function useSimliAvatar(p: UseSimliAvatarParams): SimliAvatarControls {
  const { faceId, handleSilence = true, onError } = p;

  const [state, setState]               = useState<SimliState>('idle');
  const [remoteStream, setRemoteStream] = useState<any | null>(null);
  const connRef = useRef<SimliConnection | null>(null);

  // Tear down on unmount or face change.
  useEffect(() => {
    return () => {
      try { connRef.current?.close(); } catch {}
      connRef.current = null;
    };
  }, []);

  const start = useCallback(async () => {
    if (!SIMLI_API_KEY) { onError?.(new Error('EXPO_PUBLIC_SIMLI_KEY not set')); return; }
    if (!faceId)        { onError?.(new Error('useSimliAvatar: no faceId provided')); return; }
    if (connRef.current) return; // already running

    const conn = new SimliConnection(
      { apiKey: SIMLI_API_KEY, faceId, handleSilence },
      {
        onState:        setState,
        onRemoteStream: setRemoteStream,
        onError:        (e) => { setState('error'); onError?.(e); },
      },
    );
    connRef.current = conn;
    try {
      await conn.connect();
    } catch {
      // onError already fired through events.
      connRef.current = null;
    }
  }, [faceId, handleSilence, onError]);

  const stop = useCallback(() => {
    try { connRef.current?.close(); } catch {}
    connRef.current = null;
    setRemoteStream(null);
    setState('closed');
  }, []);

  const pushAudio = useCallback((pcm: ArrayBuffer | Uint8Array) => {
    connRef.current?.sendAudio(pcm);
  }, []);

  return { state, remoteStream, start, stop, pushAudio };
}

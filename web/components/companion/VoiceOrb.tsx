'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { VoiceWebSession, isVoiceSupported } from '@/lib/voice-web';
import type { ResolvedCompanion } from '@/lib/companion-web';
import { AI_FEATURE_TOKENS_PER_MIN } from '@/lib/ai-cost';

/**
 * Full-screen voice session UI.
 *
 * State machine:
 *   - 'starting'   : permission + audio init + WS connect in flight
 *   - 'active'     : session running; orb pulses while agent speaks
 *   - 'closing'    : tearing down (hang-up tapped)
 *   - 'error'      : surface message, give Retry/Back
 *
 * Billing: heartbeat every 30s POSTs /api/spend-voice-tokens (15 tokens).
 * If the server says out-of-tokens, session ends gracefully.
 */

const MIN_BALANCE = AI_FEATURE_TOKENS_PER_MIN.voice; // 30
const HEARTBEAT_MS = 30_000;

interface Props {
  userId: string;
  companion: ResolvedCompanion;
  initialBalance: number;
  onClose: () => void;
  onTranscript?: (role: 'user' | 'rwen', text: string) => void;
}

type Phase = 'preflight' | 'starting' | 'active' | 'closing' | 'error';

export default function VoiceOrb({
  userId: _userId,
  companion,
  initialBalance,
  onClose,
  onTranscript,
}: Props) {
  const [phase, setPhase] = useState<Phase>('preflight');
  const [error, setError] = useState<string | null>(null);
  const [agentSpeaking, setAgentSpeaking] = useState(false);
  const [statusLine, setStatusLine] = useState('Tap start when ready');
  const [lastUserLine, setLastUserLine] = useState<string>('');
  const [lastAgentLine, setLastAgentLine] = useState<string>('');
  const [balance, setBalance] = useState<number>(initialBalance);

  const sessionRef = useRef<VoiceWebSession | null>(null);
  const heartbeatRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const supported = typeof window !== 'undefined' && isVoiceSupported();

  // Teardown on unmount.
  useEffect(() => {
    return () => {
      try { sessionRef.current?.stop(); } catch { /* ignore */ }
      sessionRef.current = null;
      if (heartbeatRef.current) {
        clearInterval(heartbeatRef.current);
        heartbeatRef.current = null;
      }
    };
  }, []);

  async function start() {
    if (!supported) {
      setError('Voice requires a modern browser with microphone access.');
      setPhase('error');
      return;
    }
    if (balance < MIN_BALANCE) {
      setError(`Voice needs at least ${MIN_BALANCE} tokens. Top up first.`);
      setPhase('error');
      return;
    }

    setError(null);
    setPhase('starting');
    setStatusLine('Connecting…');

    const session = new VoiceWebSession(
      {
        agentId: 'placeholder', // resolved server-side via signed URL
        useSignedUrl: true,
        overrides: {
          voiceId: companion.voice_id,
          firstMessage: `Hey — ${companion.display_name} here. What's up?`,
        },
      },
      {
        onConnected: () => {
          setPhase('active');
          setStatusLine('Listening…');
          if (heartbeatRef.current) clearInterval(heartbeatRef.current);
          heartbeatRef.current = setInterval(async () => {
            try {
              const res = await fetch('/api/spend-voice-tokens', { method: 'POST' });
              if (res.status === 402) {
                setError("You're out of tokens. Top up to keep talking.");
                stop();
                return;
              }
              if (res.ok) {
                const j = await res.json();
                if (typeof j.balance === 'number') setBalance(j.balance);
              }
            } catch {
              // network blip — ignore and let the next tick try again
            }
          }, HEARTBEAT_MS);
        },
        onDisconnected: (code) => {
          if (heartbeatRef.current) {
            clearInterval(heartbeatRef.current);
            heartbeatRef.current = null;
          }
          setAgentSpeaking(false);
          if (phase !== 'closing' && code !== 1000) {
            // Only surface unexpected drops.
            setStatusLine('Disconnected');
          }
          setPhase('closing');
        },
        onError: (err) => {
          setError(err.message);
          setPhase('error');
        },
        onUserTranscript: (t) => {
          setLastUserLine(t);
          onTranscript?.('user', t);
        },
        onAgentResponse: (t) => {
          setLastAgentLine(t);
          onTranscript?.('rwen', t);
        },
        onAgentSpeakingChange: (speaking) => {
          setAgentSpeaking(speaking);
          setStatusLine(speaking ? `${companion.display_name} is speaking…` : 'Listening…');
        },
        onInterruption: () => {
          setAgentSpeaking(false);
        },
      },
    );

    sessionRef.current = session;
    try {
      await session.start();
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Could not start voice session.');
      setPhase('error');
    }
  }

  function stop() {
    setPhase('closing');
    try { sessionRef.current?.stop(); } catch { /* ignore */ }
    sessionRef.current = null;
    if (heartbeatRef.current) {
      clearInterval(heartbeatRef.current);
      heartbeatRef.current = null;
    }
    onClose();
  }

  const orbScale = agentSpeaking ? 1.15 : 1;
  const orbGlow = agentSpeaking ? 'shadow-[0_0_80px_30px_rgba(244,184,96,0.45)]' : 'shadow-[0_0_40px_10px_rgba(244,184,96,0.20)]';

  return (
    <div className="fixed inset-0 z-[70] bg-gradient-to-b from-primary to-[#06122A] text-white flex flex-col items-center justify-between py-10 px-6">
      <div className="text-center">
        <div className="text-sm text-white/60">{statusLine}</div>
        <div className="text-2xl font-bold mt-1">{companion.display_name}</div>
        <div className="text-xs text-white/50 mt-1">{balance.toLocaleString()} tokens · ~{Math.floor(balance / MIN_BALANCE)} min left</div>
      </div>

      <div className="flex flex-col items-center gap-6">
        <div
          className={`w-44 h-44 rounded-full bg-gradient-to-br from-secondary to-[#D38C2E] transition-all duration-300 ${orbGlow} flex items-center justify-center`}
          style={{ transform: `scale(${orbScale})` }}
        >
          <span className="text-6xl">{companion.preset.emoji}</span>
        </div>

        <div className="max-w-xs text-center min-h-[3em] text-white/80 text-sm">
          {phase === 'preflight' && (
            <>Press start to begin a voice call with {companion.display_name}. We charge 30 tokens / min.</>
          )}
          {phase === 'active' && (
            <>
              {lastUserLine && <div className="text-white/60 italic mb-1">“{lastUserLine}”</div>}
              {lastAgentLine && <div className="text-white">{lastAgentLine}</div>}
            </>
          )}
          {phase === 'error' && error && <div className="text-error">{error}</div>}
        </div>
      </div>

      <div className="flex flex-col items-center gap-3 w-full max-w-xs">
        {phase === 'preflight' && (
          <button
            onClick={start}
            disabled={!supported}
            className="w-full py-3 rounded-full bg-secondary text-primary font-bold disabled:opacity-50"
          >
            {supported ? 'Start voice' : 'Not supported on this browser'}
          </button>
        )}
        {phase === 'starting' && (
          <button disabled className="w-full py-3 rounded-full bg-white/10 text-white/60 font-bold">
            Connecting…
          </button>
        )}
        {phase === 'active' && (
          <button
            onClick={stop}
            className="w-full py-3 rounded-full bg-error text-white font-bold"
          >
            Hang up
          </button>
        )}
        {(phase === 'error' || phase === 'closing') && (
          <>
            {error?.toLowerCase().includes('token') && (
              <Link
                href="/cart"
                className="w-full py-3 rounded-full bg-secondary text-primary font-bold text-center"
              >
                Top up
              </Link>
            )}
            <button
              onClick={onClose}
              className="w-full py-3 rounded-full bg-white/10 text-white font-semibold"
            >
              Back to chat
            </button>
          </>
        )}
      </div>
    </div>
  );
}

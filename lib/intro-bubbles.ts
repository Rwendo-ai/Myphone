/**
 * Intro bubble registry + once-per-user gate.
 *
 * Every bubble has a stable `id`. When `useIntroBubble(id)` is called and
 * the user hasn't seen it yet, the consumer renders the bubble. After
 * dismissal (`markSeen(id)`), the AsyncStorage flag prevents future shows.
 *
 * Bubble copy lives here (not in screen files) so the full first-run tour
 * is auditable in one place. Only triggering screens (Travel hub, lesson,
 * Connections, Companion) need to import the registry + hook.
 *
 * Reset all bubbles via `resetIntroBubbles()` — useful for QA / re-onboarding.
 */

import { useEffect, useState, useCallback } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export type IntroBubbleId =
  | 'travel.country_picker'
  | 'travel.connections_card'
  | 'lesson.first_phase'
  | 'lesson.flip_cards_cta'
  | 'companion.text_vs_voice'
  | 'connections.compose'
  | 'connections.hashtags';

export interface IntroBubble {
  id: IntroBubbleId;
  title: string;
  body: string;
  /** Optional anchor hint — UI screen uses to position the bubble. The hook
   *  itself is anchor-agnostic; the renderer decides placement. */
  anchor?: 'top' | 'bottom' | 'center';
}

export const INTRO_BUBBLES: Record<IntroBubbleId, IntroBubble> = {
  'travel.country_picker': {
    id: 'travel.country_picker',
    title: 'Pick where you\'re going',
    body: 'Tap the country header to switch destinations. Phrasebook, Cultural Guide and Money & Market all update with your choice.',
    anchor: 'top',
  },
  'travel.connections_card': {
    id: 'travel.connections_card',
    title: 'Meet other travellers',
    body: 'Connections is the social feed for people heading where you\'re heading. 18+ only.',
    anchor: 'center',
  },
  'lesson.first_phase': {
    id: 'lesson.first_phase',
    title: 'Seven phases per lesson',
    body: 'Hook → Chunks → Pattern → Practice → Dialogue → Recall → Mission. Each phase has one job. Take it slow.',
    anchor: 'top',
  },
  'lesson.flip_cards_cta': {
    id: 'lesson.flip_cards_cta',
    title: 'Flip cards, anywhere',
    body: '50 vocab cards per unit. Tap to flip, tap the speaker for native pronunciation.',
    anchor: 'bottom',
  },
  'companion.text_vs_voice': {
    id: 'companion.text_vs_voice',
    title: 'Text or voice — your call',
    body: 'Tap the orb for live voice mode (full conversation). Type below for text-only chat. Both count toward your daily AI usage.',
    anchor: 'bottom',
  },
  'connections.compose': {
    id: 'connections.compose',
    title: 'Share your trip',
    body: 'Post about where you\'re heading or what you saw. Use #hashtags so others can find your story.',
    anchor: 'top',
  },
  'connections.hashtags': {
    id: 'connections.hashtags',
    title: 'Tap a hashtag',
    body: 'Tap any #tag to see every traveller post tagged the same way.',
    anchor: 'center',
  },
};

const STORAGE_KEY_PREFIX = 'intro_seen:';

/** Hook: returns whether to show the bubble + a markSeen callback.
 *  Loads asynchronously; while loading, `show` is false (don't flash on first
 *  paint then disappear). */
export function useIntroBubble(id: IntroBubbleId): {
  show: boolean;
  markSeen: () => void;
} {
  const [show, setShow] = useState(false);

  useEffect(() => {
    let cancelled = false;
    AsyncStorage.getItem(STORAGE_KEY_PREFIX + id).then((seen) => {
      if (cancelled) return;
      setShow(seen !== 'true');
    });
    return () => { cancelled = true; };
  }, [id]);

  const markSeen = useCallback(() => {
    AsyncStorage.setItem(STORAGE_KEY_PREFIX + id, 'true').catch(() => {});
    setShow(false);
  }, [id]);

  return { show, markSeen };
}

/** QA escape hatch — forget every bubble dismissal. Call from a debug menu. */
export async function resetIntroBubbles(): Promise<void> {
  const ids = Object.keys(INTRO_BUBBLES) as IntroBubbleId[];
  await Promise.all(ids.map((id) => AsyncStorage.removeItem(STORAGE_KEY_PREFIX + id)));
}

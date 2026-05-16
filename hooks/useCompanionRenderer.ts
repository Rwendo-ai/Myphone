/**
 * useCompanionRenderer — decides which face renderer the chat screen
 * should use for a given companion, and tracks the atlas status in
 * realtime so the renderer can flip the moment the worker finishes.
 *
 * Returns one of three renderers:
 *   - 'atlas'   → AtlasCompositor — Skia-driven viseme atlas (Phase 2)
 *                  Used when atlas_status='ready' AND atlas_url is set.
 *   - 'ambient' → AmbientFace — looping idle video / static image / emoji
 *                  fallback. The v1 launch product; always works.
 *   - 'three_d' → reserved for Rwen (Three.js morph-target driven). Not
 *                  yet implemented; returns 'ambient' as a safe shim.
 *
 * The hook subscribes to atlas_status via Supabase realtime so when the
 * worker finishes the job mid-session, the next render swaps to the
 * atlas without a manual refresh.
 *
 * See docs/stack/lipsync-atlas.md Section 11.3 for the design.
 */

import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';

export type CompanionRenderer = 'atlas' | 'ambient' | 'three_d';

export type AtlasStatus = 'not_started' | 'pending' | 'running' | 'ready' | 'failed';

export interface CompanionRendererState {
  renderer:     CompanionRenderer;
  atlasUrl:     string | null;
  atlasStatus:  AtlasStatus;
  loading:      boolean;
}

interface UseCompanionRendererArgs {
  /** 'custom' for custom_companions, 'archetype' for companion_archetypes. */
  kind:         'custom' | 'archetype';
  /** Row id in the matching table. */
  companionId:  string | null;
  /** Preset id used to recognise Rwen (only 'rwen' returns 'three_d'). */
  presetId?:    string | null;
}

const RWEN_PRESET_ID = 'rwen';

export function useCompanionRenderer(
  args: UseCompanionRendererArgs,
): CompanionRendererState {
  const { kind, companionId, presetId } = args;

  const [atlasUrl,    setAtlasUrl]    = useState<string | null>(null);
  const [atlasStatus, setAtlasStatus] = useState<AtlasStatus>('not_started');
  const [loading,     setLoading]     = useState<boolean>(true);

  useEffect(() => {
    let cancelled = false;
    if (!companionId) { setLoading(false); return; }

    const table = kind === 'custom' ? 'custom_companions' : 'companion_archetypes';

    // Initial fetch.
    (async () => {
      const { data, error } = await supabase
        .from(table)
        .select('atlas_url, atlas_status')
        .eq('id', companionId)
        .maybeSingle();
      if (cancelled) return;
      if (error || !data) {
        setAtlasUrl(null);
        setAtlasStatus('not_started');
      } else {
        setAtlasUrl(data.atlas_url ?? null);
        setAtlasStatus((data.atlas_status as AtlasStatus) ?? 'not_started');
      }
      setLoading(false);
    })();

    // Realtime subscription so we flip to 'atlas' the moment the worker
    // finishes the job mid-session.
    const channel = supabase
      .channel(`atlas-${kind}-${companionId}`)
      .on(
        'postgres_changes',
        { event: 'UPDATE', schema: 'public', table, filter: `id=eq.${companionId}` },
        (payload) => {
          if (cancelled) return;
          const row = payload.new as { atlas_url?: string | null; atlas_status?: AtlasStatus };
          if (typeof row.atlas_url    !== 'undefined') setAtlasUrl(row.atlas_url ?? null);
          if (typeof row.atlas_status !== 'undefined') setAtlasStatus(row.atlas_status ?? 'not_started');
        },
      )
      .subscribe();

    return () => {
      cancelled = true;
      supabase.removeChannel(channel);
    };
  }, [kind, companionId]);

  // Decide the renderer. Rwen is the only 'three_d' case; AtlasCompositor
  // isn't implemented yet so for now Rwen falls through to 'ambient' too.
  let renderer: CompanionRenderer = 'ambient';
  if (presetId === RWEN_PRESET_ID) {
    renderer = 'three_d';
  } else if (atlasStatus === 'ready' && atlasUrl) {
    renderer = 'atlas';
  }

  return { renderer, atlasUrl, atlasStatus, loading };
}

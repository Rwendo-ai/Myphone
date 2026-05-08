/**
 * Client wrapper for the `translate-post` Edge Function.
 *
 * Caching strategy: per-process Map keyed on `<post-id>:<target>`. Translations
 * persist for the app session; not stored on disk because the upstream cost
 * is small (~$0.0001 per 200-char post) and a fresh app launch is rare.
 *
 * If the function returns 500 because DEEPL_API_KEY isn't set yet, we
 * surface a friendly error and let the UI keep showing the original text.
 */

import { supabase } from './supabase';

const cache = new Map<string, string>();

export interface TranslateRequest {
  /** Post id used as the cache key (so a viewer's translation persists). */
  postId: string;
  /** The post body to translate. */
  text: string;
  /** ISO 639-1 target language (e.g. 'en', 'es', 'fr'). */
  targetLang: string;
  /** Optional source-language hint to skip detection. */
  sourceLang?: string;
}

export interface TranslateResponse {
  translated: string;
  detected_source_lang: string;
  cached: boolean;
}

export async function translatePost(req: TranslateRequest): Promise<TranslateResponse> {
  const cacheKey = `${req.postId}:${req.targetLang}`;
  const hit = cache.get(cacheKey);
  if (hit) return { translated: hit, detected_source_lang: '', cached: true };

  const { data, error } = await supabase.functions.invoke('translate-post', {
    body: {
      text: req.text,
      target_lang: req.targetLang,
      source_lang: req.sourceLang,
    },
  });
  if (error) throw new Error(error.message);
  if (data?.error) throw new Error(data.error);

  const result = data as TranslateResponse;
  cache.set(cacheKey, result.translated);
  return result;
}

/** Maps a Rwendo speaker pack ISO code → DeepL-friendly target. Some
 *  languages (Shona, Tagalog, Hindi) aren't supported by DeepL — caller
 *  should detect via `isSupportedTarget` and skip translation if not. */
export function isSupportedTarget(isoCode: string): boolean {
  const supported = new Set(['en', 'es', 'fr', 'de', 'it', 'nl', 'pt', 'ja', 'zh', 'ko', 'ru', 'tr', 'pl', 'ar', 'sv', 'da', 'fi', 'no']);
  return supported.has(isoCode.toLowerCase());
}

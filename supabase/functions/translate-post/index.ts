/**
 * DeepL translation proxy for traveller post bodies.
 *
 * Why an Edge Function rather than a direct DeepL call from the client:
 *   - Keeps DEEPL_API_KEY off the device
 *   - Centralised rate limiting + abuse detection (Phase 2)
 *   - Translation cache (Phase 2 — store in `traveller_post_translations`
 *     keyed by post_id+target_lang to avoid retranslating the same post
 *     for different viewers in the same language)
 *
 * Env required: DEEPL_API_KEY (set via `supabase secrets set DEEPL_API_KEY=...`)
 *
 * Request body:
 *   { text: string, target_lang: 'EN' | 'ES' | 'FR' | ... , source_lang?: string }
 *
 * Response:
 *   { translated: string, detected_source_lang: string, cached: boolean }
 *
 * DeepL pricing as of 2026: free tier 500k chars/month, paid €4.99/mo for
 * 1M chars. For a feed post averaging 200 chars × N viewers, this is the
 * lowest-cost translation provider available.
 */

import 'jsr:@supabase/functions-js/edge-runtime.d.ts';

const DEEPL_API_KEY = Deno.env.get('DEEPL_API_KEY') ?? '';
const DEEPL_FREE_URL = 'https://api-free.deepl.com/v2/translate';
const DEEPL_PRO_URL = 'https://api.deepl.com/v2/translate';

// DeepL free keys end with `:fx`; pro keys don't. Auto-pick endpoint.
function deeplEndpoint(): string {
  return DEEPL_API_KEY.endsWith(':fx') ? DEEPL_FREE_URL : DEEPL_PRO_URL;
}

// DeepL supports a specific list of target languages. ISO codes mostly map
// 1:1 but some need mapping (Chinese → ZH, Portuguese → PT-PT or PT-BR).
const TARGET_LANG_MAP: Record<string, string> = {
  en: 'EN-GB', es: 'ES', fr: 'FR', de: 'DE', it: 'IT', nl: 'NL',
  pt: 'PT-PT', ja: 'JA', zh: 'ZH', ko: 'KO', hi: 'EN-GB', /* DeepL has no Hindi yet */
  tl: 'EN-GB', /* no Tagalog — fall back to English */
  sn: 'EN-GB', /* no Shona */
};

interface RequestBody {
  text: string;
  target_lang: string;
  source_lang?: string;
}

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
};

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: corsHeaders });
  if (req.method !== 'POST') return new Response('Method not allowed', { status: 405 });

  if (!DEEPL_API_KEY) {
    return new Response(JSON.stringify({ error: 'DEEPL_API_KEY not configured' }), {
      status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }

  try {
    const body = (await req.json()) as RequestBody;
    if (!body.text || !body.target_lang) {
      return new Response(JSON.stringify({ error: 'Missing text or target_lang' }), {
        status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const deeplTarget = TARGET_LANG_MAP[body.target_lang.toLowerCase()] ?? body.target_lang.toUpperCase();

    const params = new URLSearchParams();
    params.append('text', body.text);
    params.append('target_lang', deeplTarget);
    if (body.source_lang) params.append('source_lang', body.source_lang.toUpperCase());

    const deeplRes = await fetch(deeplEndpoint(), {
      method: 'POST',
      headers: {
        Authorization: `DeepL-Auth-Key ${DEEPL_API_KEY}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: params.toString(),
    });

    if (!deeplRes.ok) {
      const errorBody = await deeplRes.text().catch(() => '');
      return new Response(JSON.stringify({ error: `DeepL ${deeplRes.status}: ${errorBody.slice(0, 200)}` }), {
        status: 502, headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const json = await deeplRes.json();
    const translation = json.translations?.[0];
    if (!translation) {
      return new Response(JSON.stringify({ error: 'No translation returned' }), {
        status: 502, headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    return new Response(
      JSON.stringify({
        translated: translation.text,
        detected_source_lang: translation.detected_source_language,
        cached: false,
      }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } },
    );
  } catch (e) {
    return new Response(JSON.stringify({ error: e instanceof Error ? e.message : String(e) }), {
      status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});

/**
 * Cultural Guide registry — DEPRECATED bundled imports.
 *
 * Content now lives in Supabase Storage at `travel-content/culture/<code>.json`.
 * App code should use `loadCulturalGuide(countryCode)` from
 * `lib/travel-content-loader.ts`. Bundled imports were removed to keep the
 * binary lean.
 *
 * The authoring TS files (`zimbabwe.ts`, etc.) remain as the source-of-truth
 * for the upload script.
 */

export {};

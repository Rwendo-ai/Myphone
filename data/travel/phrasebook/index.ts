/**
 * Phrasebook registry — DEPRECATED bundled imports.
 *
 * Phrasebook content now lives in Supabase Storage at
 * `travel-content/phrasebook/<countryCode>.json` and the app fetches lazily
 * via `lib/travel-content-loader.ts`. This file remains only for the upload
 * script (`scripts/upload-travel-content-to-storage.ts`) which reads the
 * authoring TS modules and pushes JSON.
 *
 * App code should NOT import from here — use `loadPhrasebook(countryCode)`
 * from the loader instead. Bundling these would re-bloat the app.
 */

export {}; // intentionally empty — no app-side exports

'use client';

import { createBrowserClient } from '@supabase/ssr';

// Browser-side Supabase client. Reads the anon/publishable key from the
// public env. Auth session is persisted to cookies via @supabase/ssr so
// server components and route handlers see the same session.
export function createSupabaseBrowser() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  );
}

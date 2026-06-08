import { createClient } from '@supabase/supabase-js';

// Service-role client. SERVER-ONLY — bypasses RLS, can write anywhere.
// ONLY use inside route handlers (api/*) for things like the Stripe
// webhook where we need to call SECURITY DEFINER RPCs (grant_tokens,
// admin_bump_xp) without a user JWT. Never expose to the browser.
export function createSupabaseAdmin() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    { auth: { autoRefreshToken: false, persistSession: false } },
  );
}

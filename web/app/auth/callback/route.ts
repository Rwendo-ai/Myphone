import { NextResponse } from 'next/server';
import { createSupabaseServer } from '@/lib/supabase-server';

// OAuth / email-confirm callback. Supabase redirects here with ?code=...
// after Google sign-in (or an email-confirm link); we exchange it for a
// session (sets cookies via @supabase/ssr) then bounce on.
//
// Redirect strategy: we issue a RELATIVE Location (e.g. "/home"). The
// browser resolves it against the address bar — which is the real public
// origin (https://rwendo.app) — so the final URL is always correct.
// Reconstructing an absolute origin server-side is the trap that sent
// users to http://localhost:3000 behind the NPM reverse proxy: Next.js
// sees the proxied request as arriving on localhost:3000 and there is no
// reliable way to recover the public origin from inside the handler.
// A relative redirect sidesteps the whole problem.

/** A relative redirect the browser resolves against its own origin. */
function relativeRedirect(path: string): NextResponse {
  // Guard against open-redirects: only allow same-site absolute paths.
  const safe = path.startsWith('/') && !path.startsWith('//') ? path : '/home';
  return new NextResponse(null, { status: 303, headers: { Location: safe } });
}

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const code = searchParams.get('code');
  const next = searchParams.get('next') ?? '/home';

  if (!code) return relativeRedirect(next);

  const supabase = await createSupabaseServer();
  const { error } = await supabase.auth.exchangeCodeForSession(code);
  if (error) {
    return relativeRedirect(`/sign-in?error=${encodeURIComponent(error.message)}`);
  }

  // First-time sign-ins (Google OAuth especially) have a profile row but
  // onboarding_complete=false. Send them through the wizard — language,
  // companion, age gate — instead of dumping them on /home half-set-up.
  // Honours an explicit ?next= only after onboarding is done.
  const { data: { user } } = await supabase.auth.getUser();
  if (user) {
    const { data: profile } = await supabase
      .from('profiles')
      .select('onboarding_complete')
      .eq('id', user.id)
      .maybeSingle();
    if (!profile?.onboarding_complete) return relativeRedirect('/onboarding');
  }

  return relativeRedirect(next);
}

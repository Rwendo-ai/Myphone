import { NextResponse } from 'next/server';
import { createSupabaseServer } from '@/lib/supabase-server';

// OAuth callback. Supabase redirects here with ?code=... after Google
// sign-in; we exchange it for a session (sets cookies via @supabase/ssr)
// then bounce to ?next= (default /home).
//
// Origin resolution: Next.js behind a reverse proxy (NPM/Nginx) sees the
// request as coming to localhost. We prefer NEXT_PUBLIC_APP_URL when set,
// then X-Forwarded-Proto + X-Forwarded-Host (set by NPM proxy_set_header),
// then fall back to the request's raw URL. Without this, the final
// redirect lands on http://localhost:3000 which only works in dev.
function publicOrigin(req: Request): string {
  const envUrl = process.env.NEXT_PUBLIC_APP_URL;
  if (envUrl) return envUrl.replace(/\/$/, '');
  const proto = req.headers.get('x-forwarded-proto');
  const host  = req.headers.get('x-forwarded-host') || req.headers.get('host');
  if (proto && host) return `${proto}://${host}`;
  return new URL(req.url).origin;
}

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const code = searchParams.get('code');
  const next = searchParams.get('next') ?? '/home';
  const origin = publicOrigin(req);

  if (code) {
    const supabase = await createSupabaseServer();
    const { error } = await supabase.auth.exchangeCodeForSession(code);
    if (error) {
      return NextResponse.redirect(`${origin}/sign-in?error=${encodeURIComponent(error.message)}`);
    }
  }

  return NextResponse.redirect(`${origin}${next}`);
}

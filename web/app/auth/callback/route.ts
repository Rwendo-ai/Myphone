import { NextResponse } from 'next/server';
import { createSupabaseServer } from '@/lib/supabase-server';

// OAuth callback. Supabase redirects here with ?code=... after Google
// sign-in; we exchange it for a session (sets cookies via @supabase/ssr)
// then bounce to /chat.
export async function GET(req: Request) {
  const { searchParams, origin } = new URL(req.url);
  const code = searchParams.get('code');
  const next = searchParams.get('next') ?? '/chat';

  if (code) {
    const supabase = await createSupabaseServer();
    const { error } = await supabase.auth.exchangeCodeForSession(code);
    if (error) {
      return NextResponse.redirect(`${origin}/sign-in?error=${encodeURIComponent(error.message)}`);
    }
  }

  return NextResponse.redirect(`${origin}${next}`);
}

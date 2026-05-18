import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { Session, User } from '@supabase/supabase-js';
import { supabase } from './supabase';

interface AuthState {
  session: Session | null;
  user: User | null;
  loading: boolean;
  onboardingComplete: boolean;
  setOnboardingComplete: (v: boolean) => void;
  signUp: (email: string, password: string, username: string) => Promise<{ error: string | null }>;
  signIn: (email: string, password: string) => Promise<{ error: string | null }>;
  signOut: () => Promise<void>;
  /** Verify a 6-digit OTP that Supabase emailed at signup. On success the
   *  user is signed in via the auth state listener — no further work here. */
  verifySignupOtp: (email: string, token: string) => Promise<{ error: string | null }>;
  /** Re-send the signup OTP if the original email got lost / expired. */
  resendSignupOtp: (email: string) => Promise<{ error: string | null }>;
}

const AuthContext = createContext<AuthState>({
  session: null, user: null, loading: true,
  onboardingComplete: false, setOnboardingComplete: () => {},
  signUp: async () => ({ error: null }),
  signIn: async () => ({ error: null }),
  signOut: async () => {},
  verifySignupOtp: async () => ({ error: null }),
  resendSignupOtp: async () => ({ error: null }),
});

// .maybeSingle() not .single() — .single() throws on zero rows. A brand-new
// user can briefly have no profiles row before the on-auth trigger inserts
// one; throwing here would leave setLoading(false) unreachable and freeze
// the app on the splash. RLS/network failures degrade to "not onboarded".
async function fetchOnboardingFlag(userId: string): Promise<boolean> {
  const { data, error } = await supabase
    .from('profiles')
    .select('onboarding_complete')
    .eq('id', userId)
    .maybeSingle();
  if (error) {
    console.warn('[auth] fetchOnboardingFlag error:', error.message);
    return false;
  }
  return data?.onboarding_complete ?? false;
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [session, setSession] = useState<Session | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [onboardingComplete, setOnboardingComplete] = useState(false);

  useEffect(() => {
    let cancelled = false;

    // Supabase v2 fires INITIAL_SESSION immediately with the persisted
    // session (or null) — so we don't need a separate getSession() call.
    // One listener handles boot + every subsequent auth change.
    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (event, sess) => {
      if (cancelled) return;
      try {
        setSession(sess);
        setUser(sess?.user ?? null);
        if (sess?.user) {
          const flag = await fetchOnboardingFlag(sess.user.id);
          if (!cancelled) setOnboardingComplete(flag);
        } else {
          setOnboardingComplete(false);
        }
      } catch (e) {
        console.warn('[auth] onAuthStateChange handler failed:', e);
      } finally {
        if (!cancelled) setLoading(false);
      }

      // Login XP — server enforces once-per-hour throttle.
      if (event === 'SIGNED_IN' && sess?.user) {
        import('./xp-events').then(({ awardXp }) => {
          awardXp('login').catch(() => {/* best-effort */});
        });
      }
    });

    return () => {
      cancelled = true;
      subscription.unsubscribe();
    };
  }, []);

  const signUp = async (email: string, password: string, username: string) => {
    const { error } = await supabase.auth.signUp({
      email, password,
      options: { data: { username } },
    });
    return { error: error?.message ?? null };
  };

  const signIn = async (email: string, password: string) => {
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    return { error: error?.message ?? null };
  };

  const signOut = async () => {
    // Lazy-import purchases to avoid pulling the native module into the
    // auth boot path; lazy-import oauth so an older APK without the
    // google-signin module doesn't crash the sign-out call.
    import('./purchases').then(({ logoutPurchases }) => logoutPurchases().catch(() => {}));
    import('./oauth').then(({ signOutGoogle }) => signOutGoogle().catch(() => {}));
    await supabase.auth.signOut();
    setOnboardingComplete(false);
  };

  const verifySignupOtp = async (email: string, token: string) => {
    const { error } = await supabase.auth.verifyOtp({ email, token, type: 'signup' });
    return { error: error?.message ?? null };
  };

  const resendSignupOtp = async (email: string) => {
    const { error } = await supabase.auth.resend({ type: 'signup', email });
    return { error: error?.message ?? null };
  };

  return (
    <AuthContext.Provider value={{
      session, user, loading,
      onboardingComplete, setOnboardingComplete,
      signUp, signIn, signOut,
      verifySignupOtp, resendSignupOtp,
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}

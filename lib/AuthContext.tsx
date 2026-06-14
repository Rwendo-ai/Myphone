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
//
// Hard 3s timeout: this runs on the boot path, so a request that hangs
// (flaky mobile network on cold start) must NOT block the splash from
// clearing. On timeout we degrade to "not onboarded" — the navigation
// guard recovers the moment the flag resolves on a later auth event.
async function fetchOnboardingFlag(userId: string): Promise<boolean> {
  try {
    const result = await Promise.race([
      supabase
        .from('profiles')
        .select('onboarding_complete')
        .eq('id', userId)
        .maybeSingle(),
      new Promise<null>((resolve) => setTimeout(() => resolve(null), 3000)),
    ]);
    if (!result) {
      console.warn('[auth] fetchOnboardingFlag timed out');
      return false;
    }
    if (result.error) {
      console.warn('[auth] fetchOnboardingFlag error:', result.error.message);
      return false;
    }
    return result.data?.onboarding_complete ?? false;
  } catch (e) {
    console.warn('[auth] fetchOnboardingFlag failed:', e);
    return false;
  }
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [session, setSession] = useState<Session | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [onboardingComplete, setOnboardingComplete] = useState(false);

  useEffect(() => {
    let cancelled = false;

    // Resolve a session into auth state, then clear `loading`. Safe to run
    // more than once — the getSession() seed and the INITIAL_SESSION event
    // can both arrive; whichever lands first unblocks the UI.
    async function resolve(sess: Session | null) {
      if (cancelled) return;
      setSession(sess);
      setUser(sess?.user ?? null);
      if (sess?.user) {
        const flag = await fetchOnboardingFlag(sess.user.id);
        if (!cancelled) setOnboardingComplete(flag);
      } else if (!cancelled) {
        setOnboardingComplete(false);
      }
      if (!cancelled) setLoading(false);
    }

    // Seed from persisted storage on cold start. We CANNOT rely on
    // onAuthStateChange's INITIAL_SESSION alone: in React Native (async
    // storage) that event can be delayed or skipped on a cold start,
    // leaving `loading` true forever — the app freezes on the splash and
    // only a force-quit + reopen "fixes" it. getSession() reads the stored
    // session directly so boot never hinges on the listener firing.
    supabase.auth.getSession()
      .then(({ data }) => resolve(data.session))
      .catch((e) => {
        console.warn('[auth] getSession failed:', e);
        if (!cancelled) setLoading(false);
      });

    // The listener still handles every subsequent auth change (and acts as
    // a second seed path if it beats getSession).
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, sess) => {
      void resolve(sess);

      // Login XP — server enforces once-per-hour throttle.
      if (event === 'SIGNED_IN' && sess?.user) {
        import('./xp-events').then(({ awardXp }) => {
          awardXp('login').catch(() => {/* best-effort */});
        });
      }
    });

    // Last-resort watchdog: whatever happens, never strand the user on the
    // splash. After 5s we clear `loading` and let the guard route on
    // whatever session state we have.
    const watchdog = setTimeout(() => {
      if (!cancelled) setLoading(false);
    }, 5000);

    return () => {
      cancelled = true;
      clearTimeout(watchdog);
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

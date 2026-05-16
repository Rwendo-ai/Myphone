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

export function AuthProvider({ children }: { children: ReactNode }) {
  const [session, setSession] = useState<Session | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [onboardingComplete, setOnboardingComplete] = useState(false);

  const checkOnboarding = async (userId: string) => {
    const { data } = await supabase
      .from('profiles')
      .select('onboarding_complete')
      .eq('id', userId)
      .single();
    setOnboardingComplete(data?.onboarding_complete ?? false);
  };

  useEffect(() => {
    let cancelled = false;

    // Initial session resolution. CRITICAL: we keep `loading=true` until
    // BOTH the session is known AND (if a user exists) the onboarding
    // flag is fetched. Previously these ran in parallel and the
    // NavigationGuard in app/_layout.tsx would see loading=false with
    // onboardingComplete still at its initial `false`, bouncing the
    // user back to /onboarding on every cold start. Fix: await
    // checkOnboarding before flipping loading off.
    (async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (cancelled) return;
      setSession(session);
      setUser(session?.user ?? null);
      if (session?.user) await checkOnboarding(session.user.id);
      if (cancelled) return;
      setLoading(false);
    })();

    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (event, session) => {
      // While an auth state change is being processed (sign-in / refresh /
      // user-update), block the navigation guard from making decisions
      // with stale onboardingComplete. Same race as the initial-load fix
      // above — without this, signing in via Google would briefly land
      // with the still-default onboardingComplete=false and bounce the
      // user to onboarding.
      if (event === 'SIGNED_IN' || event === 'TOKEN_REFRESHED' || event === 'USER_UPDATED') {
        setLoading(true);
      }
      setSession(session);
      setUser(session?.user ?? null);
      if (session?.user) await checkOnboarding(session.user.id);
      if (cancelled) return;
      setLoading(false);

      // Login XP — server enforces once-per-hour throttle.
      if (event === 'SIGNED_IN' && session?.user) {
        // Lazy-import to avoid a circular dep risk between AuthContext and
        // anything that ends up reading auth state during module init.
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
    // Reset RevenueCat to anonymous so the next sign-in starts clean.
    // Imported lazily to avoid a require cycle through purchases.ts.
    import('./purchases').then(({ logoutPurchases }) => logoutPurchases().catch(() => {}));
    await supabase.auth.signOut();
    setOnboardingComplete(false);
  };

  const verifySignupOtp = async (email: string, token: string) => {
    // Supabase 6-digit signup OTP. The `signup` type matches the template
    // body that contains `{{ .Token }}` (see Supabase Auth → Email Templates
    // → Confirm signup). Other types ('email_change', 'recovery') use the
    // same flow with their own templates.
    const { error } = await supabase.auth.verifyOtp({
      email,
      token,
      type: 'signup',
    });
    return { error: error?.message ?? null };
  };

  const resendSignupOtp = async (email: string) => {
    const { error } = await supabase.auth.resend({
      type: 'signup',
      email,
    });
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

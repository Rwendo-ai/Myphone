import { useEffect } from 'react';
import { Stack, router, useSegments } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { SettingsProvider, useSettings, RwenVoiceKey } from '../lib/SettingsContext';
import { AuthProvider, useAuth } from '../lib/AuthContext';
import { CartProvider } from '../lib/CartContext';
import { supabase } from '../lib/supabase';
import { fetchActiveCompanionPresetId } from '../lib/active-companion';
import { initPurchases, logoutPurchases } from '../lib/purchases';
import type { SpeakerPackId } from '../types/packs';
import '../lib/i18n';
import { setAppLanguage } from '../lib/i18n';

// Loads user profile settings (theme, avatar, voice, speaker pack) from
// Supabase after login. The speaker_pack_id load is critical — it drives
// the AI persona language, voice options, greetings, and the ElevenLabs
// session language code. Without it the user reverts to English on every
// fresh launch.
function ProfileLoader() {
  const { user } = useAuth();
  const { setThemeId, setAvatarUrl, setRwenVoice, setActiveCompanionPresetId, setSpeakerPack, setActiveCourseId, setOwnedCourseIds, setStarterCourseId } = useSettings();

  useEffect(() => {
    if (!user) return;
    supabase
      .from('profiles')
      .select('theme_id, avatar_url, rwen_voice_key, app_language, speaker_pack_id, active_course_ids')
      .eq('id', user.id)
      .single()
      .then(({ data }) => {
        if (!data) return;
        if (data.theme_id)        setThemeId(data.theme_id);
        if (data.avatar_url)      setAvatarUrl(data.avatar_url);
        if (data.rwen_voice_key)  setRwenVoice(data.rwen_voice_key as RwenVoiceKey);
        if (data.app_language)    setAppLanguage(data.app_language);
        if (data.speaker_pack_id) setSpeakerPack(data.speaker_pack_id as SpeakerPackId);

        // active_course_ids is stored prefixed ('course:language-shona'); the
        // runtime expects the bare course id ('language-shona'). Strip the
        // prefix when hydrating, then push to all three slots
        // (active/owned/starter) so Learn tab + entitlement helpers all see
        // the right pick. Without this the user's onboarding choice
        // evaporates on every fresh launch.
        const prefixedIds: string[] = data.active_course_ids ?? [];
        const runtimeIds = prefixedIds.map((p) => p.replace(/^course:/, ''));
        if (runtimeIds.length > 0) {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          setActiveCourseId(runtimeIds[0] as any);
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          setOwnedCourseIds(runtimeIds as any);
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          setStarterCourseId(runtimeIds[0] as any);
        }
      });

    // Active companion — driven from a separate table for multi-companion
    // support at higher tiers. Defaults to Rwen if no row.
    fetchActiveCompanionPresetId(user.id).then(setActiveCompanionPresetId);

    // Configure RevenueCat with the Supabase user.id as the appUserID so
    // entitlements + webhook events tie back to the same identity. Idempotent —
    // safe to call on every signed-in mount. Logs out cleanly handled in
    // AuthContext.signOut via logoutPurchases().
    initPurchases(user.id).catch((e) => console.warn('[purchases] init failed', e));
  }, [user?.id]);

  return null;
}

function NavigationGuard() {
  const { session, loading, onboardingComplete } = useAuth();
  const segments = useSegments() as string[];

  useEffect(() => {
    if (loading) return;

    const inAuthGroup  = segments[0] === '(auth)';
    const inLegalGroup = segments[0] === '(legal)';
    const onOnboarding = segments[1] === 'onboarding';

    if (inLegalGroup) return;

    if (!session) {
      if (!inAuthGroup) router.replace('/welcome');
      return;
    }

    if (!onboardingComplete && !onOnboarding) {
      router.replace('/onboarding');
      return;
    }

    if (onboardingComplete && inAuthGroup) {
      router.replace('/(tabs)');
    }
  }, [session, loading, onboardingComplete, segments]);

  return null;
}

export default function RootLayout() {
  return (
    <AuthProvider>
      <SettingsProvider>
        <CartProvider>
          <SafeAreaProvider>
            <StatusBar style="light" />
            <ProfileLoader />
            <NavigationGuard />
            <Stack screenOptions={{ headerShown: false }} />
          </SafeAreaProvider>
        </CartProvider>
      </SettingsProvider>
    </AuthProvider>
  );
}

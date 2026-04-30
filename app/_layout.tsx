import { useEffect } from 'react';
import { Stack, router, useSegments } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { SettingsProvider, useSettings, RwenVoiceKey } from '../lib/SettingsContext';
import { AuthProvider, useAuth } from '../lib/AuthContext';
import { supabase } from '../lib/supabase';

// Loads user profile settings (theme, avatar, voice) from Supabase after login
function ProfileLoader() {
  const { user } = useAuth();
  const { setThemeId, setAvatarUrl, setRwenVoice } = useSettings();

  useEffect(() => {
    if (!user) return;
    supabase
      .from('profiles')
      .select('theme_id, avatar_url, rwen_voice_key')
      .eq('id', user.id)
      .single()
      .then(({ data }) => {
        if (!data) return;
        if (data.theme_id)      setThemeId(data.theme_id);
        if (data.avatar_url)    setAvatarUrl(data.avatar_url);
        if (data.rwen_voice_key) setRwenVoice(data.rwen_voice_key as RwenVoiceKey);
      });
  }, [user?.id]);

  return null;
}

function NavigationGuard() {
  const { session, loading, onboardingComplete } = useAuth();
  const segments = useSegments();

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
        <SafeAreaProvider>
          <StatusBar style="light" />
          <ProfileLoader />
          <NavigationGuard />
          <Stack screenOptions={{ headerShown: false }} />
        </SafeAreaProvider>
      </SettingsProvider>
    </AuthProvider>
  );
}

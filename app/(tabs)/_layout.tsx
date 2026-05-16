import { Tabs } from 'expo-router';
import { Pressable, View, StyleSheet, Text, Image } from 'react-native';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import RwenImage from '../../components/rwen/RwenImage';
import { Colors } from '../../constants/colors';
import { useSettings } from '../../lib/SettingsContext';
import { useAuth } from '../../lib/AuthContext';
import { COMPANION_PRESETS } from '../../data/companions/presets';
import { resolveCompanion } from '../../lib/companion-customization';

function CompanionTabButton({ onPress }: { onPress?: () => void }) {
  const { activeCompanionPresetId } = useSettings();
  const { user } = useAuth();
  const presetId = activeCompanionPresetId ?? 'rwen';
  const preset = COMPANION_PRESETS[presetId];

  // Resolve the user's customization for this preset — if they've set
  // a face, we show that thumbnail on the tab button instead of the
  // preset's hardcoded emoji. Bowen 2026-05-16: "the emojie that is the
  // big center button is now stuck on books even though it should be
  // my companion face."
  //
  // We deliberately use thumbnail_url (~10 KB) not image_url here —
  // this button rerenders on every tab change, no need for the full
  // 500 KB portrait.
  const [thumbnailUrl, setThumbnailUrl] = useState<string | null>(null);

  useEffect(() => {
    if (!user || presetId === 'rwen') { setThumbnailUrl(null); return; }
    let cancelled = false;
    resolveCompanion(user.id, presetId)
      .then((r) => {
        if (cancelled) return;
        setThumbnailUrl(r.archetype?.thumbnail_url ?? r.archetype?.image_url ?? null);
      })
      .catch(() => {});
    return () => { cancelled = true; };
  }, [user, presetId]);

  return (
    <Pressable onPress={onPress} style={styles.rwenButtonWrapper}>
      <View style={styles.rwenButton}>
        {presetId === 'rwen' || !preset ? (
          <RwenImage pose="idle" size={52} />
        ) : thumbnailUrl ? (
          <Image source={{ uri: thumbnailUrl }} style={styles.companionThumb} />
        ) : (
          // No face customised yet — show the preset emoji as fallback.
          <View style={styles.companionEmojiWrap}>
            <Text style={styles.companionEmoji}>{preset.emoji}</Text>
          </View>
        )}
      </View>
    </Pressable>
  );
}

function TabIcon({ emoji, focused }: { emoji: string; focused: boolean }) {
  return (
    <Text style={{ fontSize: 22, opacity: focused ? 1 : 0.45 }}>{emoji}</Text>
  );
}

export default function TabLayout() {
  const { t } = useTranslation('common');
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabBar,
        tabBarActiveTintColor: Colors.secondary,
        tabBarInactiveTintColor: Colors.gray[400],
        tabBarLabelStyle: styles.label,
        tabBarShowLabel: true,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: t('nav.home'),
          tabBarIcon: ({ focused }) => <TabIcon emoji="🏠" focused={focused} />,
        }}
      />
      <Tabs.Screen
        name="learn"
        options={{
          title: t('nav.learn'),
          tabBarIcon: ({ focused }) => <TabIcon emoji="📚" focused={focused} />,
        }}
      />
      <Tabs.Screen
        name="companion"
        options={{
          title: t('nav.rwen'),
          tabBarLabel: '',
          tabBarIcon: () => null,
          tabBarButton: (props) => <CompanionTabButton onPress={props.onPress as (() => void) | undefined} />,
        }}
      />
      <Tabs.Screen
        name="companions"
        options={{
          title: 'Companions',
          tabBarIcon: ({ focused }) => <TabIcon emoji="🤖" focused={focused} />,
        }}
      />
      <Tabs.Screen
        name="travel"
        options={{
          title: t('nav.travel'),
          tabBarIcon: ({ focused }) => <TabIcon emoji="✈️" focused={focused} />,
        }}
      />
      {/* Profile is reached via the ProfilePicButton in every screen header
          (top-right corner). Removed from the tab bar but the route still
          exists at /profile. */}
      <Tabs.Screen name="profile" options={{ href: null }} />
      <Tabs.Screen name="dictionary" options={{ href: null }} />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: Colors.primary,
    borderTopColor: 'rgba(255,255,255,0.08)',
    borderTopWidth: 1,
    height: 72,
    paddingBottom: 8,
    paddingTop: 8,
  },
  label: {
    fontSize: 11,
    fontWeight: '600',
  },
  rwenButtonWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rwenButton: {
    width: 68,
    height: 68,
    borderRadius: 34,
    backgroundColor: Colors.primary,
    borderWidth: 3,
    borderColor: Colors.secondary,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    shadowColor: Colors.secondary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 12,
    elevation: 10,
  },
  companionEmojiWrap: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: Colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  companionEmoji: {
    fontSize: 30,
  },
  companionThumb: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: Colors.gray[200],
  },
});

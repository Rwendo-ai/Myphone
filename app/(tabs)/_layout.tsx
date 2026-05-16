import { Tabs } from 'expo-router';
import { Pressable, View, StyleSheet, Text, Image } from 'react-native';
import { useTranslation } from 'react-i18next';
import RwenImage from '../../components/rwen/RwenImage';
import { Colors } from '../../constants/colors';
import { useSettings } from '../../lib/SettingsContext';
import { COMPANION_PRESETS } from '../../data/companions/presets';

function CompanionTabButton({ onPress }: { onPress?: () => void }) {
  // Read the active companion's thumbnail synchronously from
  // SettingsContext. The chat tab is the single producer — it calls
  // resolveCompanion once on mount and writes the resulting
  // archetype.thumbnail_url into the context. The tab button (which
  // re-renders on every tab navigation) reads it without doing its
  // own async work — no Supabase round-trip on tap, no crash risk.
  const { activeCompanionPresetId, activeCompanionThumbUrl } = useSettings();
  const presetId = activeCompanionPresetId ?? 'rwen';
  const preset = COMPANION_PRESETS[presetId];

  return (
    <Pressable onPress={onPress} style={styles.rwenButtonWrapper}>
      <View style={styles.rwenButton}>
        {presetId === 'rwen' || !preset ? (
          <RwenImage pose="idle" size={52} />
        ) : activeCompanionThumbUrl ? (
          <Image source={{ uri: activeCompanionThumbUrl }} style={styles.companionThumb} />
        ) : (
          // No face customised (or hasn't loaded yet) — fall back to preset emoji.
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

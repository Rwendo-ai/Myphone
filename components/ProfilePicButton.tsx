import { Pressable, Image, View, Text, StyleSheet } from 'react-native';
import { router } from 'expo-router';
import { useSettings } from '../lib/SettingsContext';
import { useAuth } from '../lib/AuthContext';
import { useProgress } from '../hooks/useProgress';
import { Colors } from '../constants/colors';
import { FontSize, FontWeight, BorderRadius } from '../constants/theme';

interface Props {
  /** Optional override for tinting (use light variant on dark headers) */
  variant?: 'light' | 'dark';
  /** Size in pixels. Default 36. */
  size?: number;
}

/**
 * Circular profile-picture button rendered in the top-right corner of every
 * main screen header. Tapping it routes to /profile.
 *
 * Falls back to the user's first initial in a coloured circle when no avatar
 * has been uploaded.
 */
export default function ProfilePicButton({ variant = 'light', size = 36 }: Props) {
  const { avatarUrl } = useSettings();
  const { user } = useAuth();
  const { username } = useProgress();

  const displayName = username || user?.email?.split('@')[0] || 'L';
  const initial = displayName[0]?.toUpperCase() ?? 'L';

  const borderColor = variant === 'light' ? 'rgba(255,255,255,0.4)' : Colors.gray[300];

  return (
    <Pressable
      onPress={() => router.push('/profile')}
      style={[
        styles.button,
        {
          width: size,
          height: size,
          borderRadius: size / 2,
          borderColor,
        },
      ]}
      hitSlop={8}
      accessibilityLabel="Open profile"
    >
      {avatarUrl ? (
        <Image
          source={{ uri: avatarUrl }}
          style={{ width: size - 4, height: size - 4, borderRadius: (size - 4) / 2 }}
        />
      ) : (
        <View
          style={[
            styles.fallback,
            {
              width: size - 4,
              height: size - 4,
              borderRadius: (size - 4) / 2,
            },
          ]}
        >
          <Text style={[styles.initial, { fontSize: size * 0.45 }]}>{initial}</Text>
        </View>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  fallback: {
    backgroundColor: Colors.secondary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  initial: {
    color: Colors.white,
    fontWeight: FontWeight.bold,
  },
});

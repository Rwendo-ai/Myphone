import { Pressable, View, Text, StyleSheet } from 'react-native';
import { router } from 'expo-router';
import { useEntitlements } from '../hooks/useEntitlements';
import { Colors } from '../constants/colors';
import { FontSize, FontWeight } from '../constants/theme';

interface Props {
  /** Optional override for tinting — light on dark headers, dark on light. */
  variant?: 'light' | 'dark';
  /** Size in pixels. Default 36 — matches ProfilePicButton. */
  size?: number;
}

/**
 * Cart button rendered in the top-right of every main screen header. Tap
 * opens the Cart screen which handles all purchases (Pro tiers, token
 * packs, course unlocks).
 *
 * Badges:
 *   - Red dot with count when items are in cart (placeholder for now —
 *     real cart state lands when the multi-item flow is built).
 *   - Yellow exclamation when AI credit balance is running low (server-
 *     tracked balance; threshold tuned post-launch).
 */
export default function CartButton({ variant = 'light', size = 36 }: Props) {
  const { tier } = useEntitlements();

  // Placeholders — real cart state + token balance hook up when the
  // server-side ledger ships. For now: zero items, no warning.
  const itemCount = 0;
  const lowCredits = tier === 'free';

  const borderColor = variant === 'light' ? 'rgba(255,255,255,0.4)' : Colors.gray[300];
  const iconColor = variant === 'light' ? Colors.white : Colors.gray[800];

  return (
    <Pressable
      onPress={() => router.push('/cart')}
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
      accessibilityLabel="Open cart"
    >
      <Text style={[styles.icon, { fontSize: size * 0.5, color: iconColor }]}>🛒</Text>

      {itemCount > 0 && (
        <View style={[styles.badgeRed, { right: -2, top: -2 }]}>
          <Text style={styles.badgeText}>{itemCount > 9 ? '9+' : itemCount}</Text>
        </View>
      )}

      {itemCount === 0 && lowCredits && (
        <View style={[styles.badgeYellow, { right: -2, top: -2 }]}>
          <Text style={styles.badgeYellowText}>!</Text>
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
    backgroundColor: 'rgba(0,0,0,0.15)',
  },
  icon: {
    fontWeight: FontWeight.bold,
  },
  badgeRed: {
    position: 'absolute',
    minWidth: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: '#E63946',
    paddingHorizontal: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  badgeText: {
    color: Colors.white,
    fontSize: FontSize.xs,
    fontWeight: FontWeight.bold,
    lineHeight: 14,
  },
  badgeYellow: {
    position: 'absolute',
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: '#F4B400',
    alignItems: 'center',
    justifyContent: 'center',
  },
  badgeYellowText: {
    color: Colors.white,
    fontSize: FontSize.sm,
    fontWeight: FontWeight.bold,
    lineHeight: 16,
  },
});

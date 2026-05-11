import { View, StyleSheet, Platform } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import ProfilePicButton from './ProfilePicButton';
import CartButton from './CartButton';
import { Spacing } from '../constants/theme';

interface Props {
  /** Pass 'dark' on light-background screens. Default 'light' (dark hero). */
  variant?: 'light' | 'dark';
}

/**
 * Floating header bar shown on Home, AI Chat, Companions, and Travel
 * screens. Profile-picture button on the LEFT, cart button on the RIGHT.
 *
 * Positioned below the device's status-bar / notch so taps don't fight
 * with the OS chrome (the original right-corner position was too close
 * to the top edge on both Samsung One UI and iPhone notched models).
 *
 * Renders inside the SafeAreaView but with absolute positioning so it
 * overlays the scroll content. pointerEvents=box-none means non-button
 * areas pass touches through to the underlying view.
 */
export default function ScreenHeaderBar({ variant = 'light' }: Props) {
  const insets = useSafeAreaInsets();
  // Extra vertical breathing room so the buttons are well clear of the
  // status-bar / notch. On iPhones the notch sits inside the safe-area
  // top inset, so insets.top already handles it; we add a small
  // additional offset for tap-target comfort.
  const topOffset = (insets.top || (Platform.OS === 'android' ? 16 : 0)) + Spacing.md;

  return (
    <View
      style={[styles.bar, { top: topOffset }]}
      pointerEvents="box-none"
    >
      <ProfilePicButton variant={variant} />
      <CartButton variant={variant} />
    </View>
  );
}

const styles = StyleSheet.create({
  bar: {
    position: 'absolute',
    left: Spacing.lg,
    right: Spacing.lg,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    zIndex: 10,
  },
});

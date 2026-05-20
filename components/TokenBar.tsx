/**
 * TokenBar — chat-tab pill showing live AI-token balance.
 *
 * The "fill" represents balance relative to a reference high (the last time
 * we saw the balance increase, e.g. after a top-up). So tapping a 1,000-token
 * pack and spending 100 visibly empties 10% of the bar instead of being
 * lost in a 12,000-token whale-pack scale.
 *
 * Reads balance from useEntitlements (DB-mirror backed). Caller is expected
 * to call entitlements.refresh() after any AI interaction so the number
 * decrements. Tapping the bar opens the cart for top-up.
 *
 * Colour:
 *   green when comfortable
 *   amber when < 100 tokens
 *   red   when < 30 tokens (≈ 1 voice minute left)
 */

import { useEffect, useRef } from 'react';
import { Pressable, StyleSheet, Text, View, Animated } from 'react-native';
import { router } from 'expo-router';
import { Colors } from '../constants/colors';
import { Spacing, FontSize, FontWeight, BorderRadius } from '../constants/theme';

const AMBER_THRESHOLD = 100;
const RED_THRESHOLD   = 30;

export default function TokenBar({ balance }: { balance: number }) {
  // Reference high — the balance value the bar is full at. Bumps up whenever
  // balance increases (top-up), so the bar visibly fills then drops on use.
  const refHigh = useRef<number>(Math.max(balance, 1));
  if (balance > refHigh.current) refHigh.current = balance;

  const fillAnim = useRef(new Animated.Value(0)).current;
  const fillFraction = Math.max(0, Math.min(1, balance / refHigh.current));

  useEffect(() => {
    Animated.timing(fillAnim, {
      toValue: fillFraction,
      duration: 350,
      useNativeDriver: false,
    }).start();
  }, [fillFraction, fillAnim]);

  const colour =
    balance < RED_THRESHOLD   ? Colors.error   :
    balance < AMBER_THRESHOLD ? Colors.warning :
                                Colors.success;

  const widthInterp = fillAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0%', '100%'],
  });

  return (
    <Pressable
      style={styles.pill}
      onPress={() => router.push('/cart')}
      hitSlop={6}
    >
      <Text style={styles.icon}>🪙</Text>
      <View style={styles.barTrack}>
        <Animated.View style={[styles.barFill, { width: widthInterp, backgroundColor: colour }]} />
      </View>
      <Text style={styles.count}>{balance.toLocaleString()}</Text>
      <Text style={styles.topUp}>+</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  pill: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.sm,
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.xs,
    backgroundColor: 'rgba(0,0,0,0.35)',
    borderRadius: BorderRadius.full,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.15)',
  },
  icon: { fontSize: 14 },
  barTrack: {
    width: 60,
    height: 6,
    borderRadius: 3,
    backgroundColor: 'rgba(255,255,255,0.15)',
    overflow: 'hidden',
  },
  barFill: { height: '100%', borderRadius: 3 },
  count: {
    color: Colors.white,
    fontSize: FontSize.sm,
    fontWeight: FontWeight.semibold,
    minWidth: 36,
    textAlign: 'right',
  },
  topUp: {
    color: 'rgba(255,255,255,0.8)',
    fontSize: FontSize.md,
    fontWeight: FontWeight.bold,
    marginLeft: 2,
  },
});

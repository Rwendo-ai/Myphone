/**
 * Reinforcement card carousel for a Build Yourself module.
 *
 * Renders each card with a variant-appropriate layout — insight, scenario,
 * tip, decision, permission, tonight, capability, moment. Swipe / arrow
 * advances. No flip animation (these are read-and-sit cards, not lookup
 * cards) — every detail is visible at once.
 */

import { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Pressable, ScrollView, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router, useLocalSearchParams } from 'expo-router';

import { loadReinforcementCards } from '../../../lib/reinforcement-card-loader';
import { useSettings } from '../../../lib/SettingsContext';
import type { ReinforcementCard } from '../../../types/reinforcement-cards';
import { Colors } from '../../../constants/colors';
import { Spacing, FontSize, FontWeight, BorderRadius } from '../../../constants/theme';

export default function ReinforcementCardScreen() {
  const { courseId, module } = useLocalSearchParams<{ courseId: string; module: string }>();
  const moduleNum = Number(module);
  const { speaker } = useSettings();

  const [cards, setCards] = useState<ReinforcementCard[] | 'loading' | 'empty'>('loading');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let cancelled = false;
    loadReinforcementCards(courseId, moduleNum, speaker.id).then(c => {
      if (cancelled) return;
      if (!c || c.length === 0) setCards('empty');
      else setCards(c);
    });
    return () => { cancelled = true; };
  }, [courseId, moduleNum, speaker.id]);

  if (cards === 'loading') {
    return (
      <SafeAreaView style={[styles.safe, styles.center]} edges={['top']}>
        <ActivityIndicator color={Colors.white} />
        <Text style={styles.loadingText}>Loading cards…</Text>
      </SafeAreaView>
    );
  }

  if (cards === 'empty') {
    return (
      <SafeAreaView style={[styles.safe, styles.center]} edges={['top']}>
        <Text style={styles.emptyEmoji}>📇</Text>
        <Text style={styles.emptyTitle}>No cards yet for this module</Text>
        <Pressable style={styles.backBtn} onPress={() => router.back()}>
          <Text style={styles.backBtnText}>Back to unit</Text>
        </Pressable>
      </SafeAreaView>
    );
  }

  const card = cards[index];
  const isLast = index === cards.length - 1;

  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      <View style={styles.header}>
        <Pressable onPress={() => router.back()} hitSlop={8}>
          <Text style={styles.backArrow}>←</Text>
        </Pressable>
        <Text style={styles.headerTitle}>Card {index + 1} of {cards.length}</Text>
        <View style={{ width: 28 }} />
      </View>

      <ScrollView contentContainerStyle={styles.cardWrap}>
        <View style={styles.cardSurface}>
          <Text style={styles.variantBadge}>{labelFor(card.variant)}</Text>
          <Text style={styles.cardTitle}>{card.title}</Text>
          <Text style={styles.cardBody}>{card.body}</Text>

          {card.reflectionQuestion && (
            <View style={styles.fieldBlock}>
              <Text style={styles.fieldLabel}>Sit with this</Text>
              <Text style={styles.fieldBody}>{card.reflectionQuestion}</Text>
            </View>
          )}

          {card.sampleScript && (
            <View style={styles.fieldBlock}>
              <Text style={styles.fieldLabel}>Try saying</Text>
              <Text style={styles.fieldBody}>{card.sampleScript}</Text>
            </View>
          )}

          {card.moveUnderneath && (
            <View style={styles.fieldBlock}>
              <Text style={styles.fieldLabel}>The move underneath</Text>
              <Text style={styles.fieldBody}>{card.moveUnderneath}</Text>
            </View>
          )}

          {card.permission && (
            <View style={[styles.fieldBlock, styles.fieldBlockPermission]}>
              <Text style={styles.fieldLabel}>Permission</Text>
              <Text style={styles.fieldBody}>{card.permission}</Text>
            </View>
          )}

          {card.tryThis && (
            <View style={styles.fieldBlock}>
              <Text style={styles.fieldLabel}>Try this</Text>
              <Text style={styles.fieldBody}>{card.tryThis}</Text>
            </View>
          )}

          {card.tonightTactic && (
            <View style={styles.fieldBlock}>
              <Text style={styles.fieldLabel}>Tonight</Text>
              <Text style={styles.fieldBody}>{card.tonightTactic}</Text>
            </View>
          )}

          {card.evidencePrompt && (
            <View style={styles.fieldBlock}>
              <Text style={styles.fieldLabel}>Write down</Text>
              <Text style={styles.fieldBody}>{card.evidencePrompt}</Text>
            </View>
          )}

          {card.afterLine && (
            <View style={styles.fieldBlock}>
              <Text style={styles.fieldLabel}>If they don't take it well</Text>
              <Text style={styles.fieldBody}>{card.afterLine}</Text>
            </View>
          )}
        </View>
      </ScrollView>

      <View style={styles.navRow}>
        <Pressable
          style={[styles.navBtn, index === 0 && styles.navBtnDisabled]}
          onPress={() => index > 0 && setIndex(i => i - 1)}
          disabled={index === 0}
        >
          <Text style={styles.navBtnText}>← Prev</Text>
        </Pressable>
        <Pressable
          style={[styles.navBtn, isLast && styles.navBtnDisabled]}
          onPress={() => !isLast && setIndex(i => i + 1)}
          disabled={isLast}
        >
          <Text style={styles.navBtnText}>{isLast ? 'Done' : 'Next →'}</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

function labelFor(variant: ReinforcementCard['variant']): string {
  switch (variant) {
    case 'insight':    return 'INSIGHT';
    case 'scenario':   return 'SCENARIO';
    case 'tip':        return 'TIP';
    case 'decision':   return 'DECISION';
    case 'permission': return 'PERMISSION';
    case 'tonight':    return 'TONIGHT';
    case 'capability': return 'CAPABILITY';
    case 'moment':     return 'MOMENT';
  }
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: Colors.primary },
  center: { alignItems: 'center', justifyContent: 'center', gap: Spacing.md },
  loadingText: { color: 'rgba(255,255,255,0.7)', fontSize: FontSize.sm, marginTop: Spacing.sm },
  emptyEmoji: { fontSize: 48 },
  emptyTitle: { color: Colors.white, fontSize: FontSize.lg, fontWeight: FontWeight.bold },
  backBtn: { paddingHorizontal: Spacing.xl, paddingVertical: Spacing.md, backgroundColor: 'rgba(255,255,255,0.15)', borderRadius: BorderRadius.full, marginTop: Spacing.lg },
  backBtnText: { color: Colors.white, fontSize: FontSize.md, fontWeight: FontWeight.semibold },

  header: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: Spacing.lg, paddingVertical: Spacing.md },
  backArrow: { color: Colors.white, fontSize: FontSize.xxl },
  headerTitle: { color: 'rgba(255,255,255,0.75)', fontSize: FontSize.sm, fontWeight: FontWeight.semibold },

  cardWrap: { padding: Spacing.lg, paddingBottom: Spacing.xxl },
  cardSurface: {
    backgroundColor: Colors.white,
    borderRadius: BorderRadius.xl,
    padding: Spacing.lg,
    gap: Spacing.md,
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 2,
  },
  variantBadge: { color: Colors.primary, fontSize: FontSize.xs, fontWeight: FontWeight.bold, letterSpacing: 1.5 },
  cardTitle: { color: Colors.gray[800], fontSize: FontSize.xl, fontWeight: FontWeight.bold, lineHeight: 30 },
  cardBody: { color: Colors.gray[700], fontSize: FontSize.md, lineHeight: 24 },
  fieldBlock: { paddingTop: Spacing.sm, borderTopWidth: 1, borderTopColor: Colors.gray[200] },
  fieldBlockPermission: { backgroundColor: '#FFF8E1', padding: Spacing.md, borderRadius: BorderRadius.md, borderTopWidth: 0 },
  fieldLabel: { color: Colors.gray[500], fontSize: FontSize.xs, fontWeight: FontWeight.bold, letterSpacing: 1, marginBottom: Spacing.xs },
  fieldBody: { color: Colors.gray[800], fontSize: FontSize.md, lineHeight: 22, fontStyle: 'italic' },

  navRow: { flexDirection: 'row', padding: Spacing.lg, gap: Spacing.md, borderTopWidth: 1, borderTopColor: 'rgba(255,255,255,0.1)' },
  navBtn: { flex: 1, paddingVertical: Spacing.md, alignItems: 'center', borderRadius: BorderRadius.lg, backgroundColor: 'rgba(255,255,255,0.15)' },
  navBtnDisabled: { opacity: 0.3 },
  navBtnText: { color: Colors.white, fontSize: FontSize.md, fontWeight: FontWeight.bold },
});

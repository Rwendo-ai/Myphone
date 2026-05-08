/**
 * Money & Market — live FX + bargaining basics for the active destination.
 *
 * FX source: exchangerate.host (free, no key, no rate limit for v1 traffic).
 * One request on screen open; cached in component state. Refresh-on-pull.
 *
 * Cost-of-living: hard-coded curated tiers per country for v1. Phase 2 wires
 * a backend cache that refreshes from a paid CoL source.
 */

import { useEffect, useState, useCallback } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, Pressable, ActivityIndicator, RefreshControl } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';

import { useSettings } from '../../lib/SettingsContext';
import { useActiveTravelDestination } from '../../lib/travel-destination';
import { Colors } from '../../constants/colors';
import { Spacing, FontSize, FontWeight, BorderRadius } from '../../constants/theme';

const FX_API = 'https://api.exchangerate.host/latest';

// Curated cost-of-living anchors per country. Numeric values are in destination
// currency (so they match what a traveller actually pays). Phase 2 swaps to
// a server-backed source.
const COST_BY_COUNTRY: Record<string, Array<{ label: string; price: string; note?: string }>> = {
  ZW: [
    { label: 'Sadza meal (local)',    price: 'US$3-5',     note: 'USD widely accepted alongside ZiG' },
    { label: 'Coffee at a café',      price: 'US$2-3' },
    { label: 'Kombi ride within city', price: 'US$0.50-1' },
    { label: 'Taxi airport → Harare',  price: 'US$25-35' },
    { label: 'Mid-range hotel night',  price: 'US$60-100' },
  ],
  GB: [
    { label: 'Pub meal',              price: '£12-18' },
    { label: 'Coffee at a café',      price: '£3.50-4.50' },
    { label: 'London Tube zone 1-2',  price: '£2.80 (contactless)' },
    { label: 'Heathrow Express',      price: '£25 single' },
    { label: 'Mid-range hotel night', price: '£100-160' },
  ],
  FR: [
    { label: 'Café au comptoir',      price: '€2-2.50' },
    { label: 'Plat du jour',          price: '€14-20' },
    { label: 'Métro single',          price: '€2.10' },
    { label: 'CDG → Paris (RER B)',   price: '€11.80' },
    { label: 'Mid-range hotel night', price: '€110-170' },
  ],
  ES: [
    { label: 'Menú del día',          price: '€12-16' },
    { label: 'Café con leche',        price: '€1.80-2.50' },
    { label: 'Madrid metro single',   price: '€1.50-2.00' },
    { label: 'Mid-range hotel night', price: '€90-140' },
  ],
  PT: [
    { label: 'Prato do dia',          price: '€10-14' },
    { label: 'Bica (espresso)',       price: '€0.80-1.20' },
    { label: 'Lisbon metro single',   price: '€1.65' },
    { label: 'Mid-range hotel night', price: '€80-130' },
  ],
  IN: [
    { label: 'Thali (local)',         price: '₹150-300' },
    { label: 'Chai (street)',         price: '₹15-25' },
    { label: 'Auto-rickshaw (5 km)',  price: '₹80-150' },
    { label: 'Mid-range hotel night', price: '₹3,000-6,000' },
  ],
  CN: [
    { label: 'Noodle bowl',           price: '¥20-40' },
    { label: 'Coffee at a chain',     price: '¥25-35' },
    { label: 'Beijing subway',        price: '¥3-9' },
    { label: 'Mid-range hotel night', price: '¥400-800' },
  ],
  PH: [
    { label: 'Carinderia meal',       price: '₱100-180' },
    { label: 'Halo-halo',             price: '₱120-200' },
    { label: 'Jeepney ride',          price: '₱13-20' },
    { label: 'Mid-range hotel night', price: '₱3,500-6,500' },
  ],
  JP: [
    { label: 'Ramen bowl',            price: '¥900-1,400' },
    { label: 'Convenience store coffee', price: '¥120-200' },
    { label: 'Tokyo metro single',    price: '¥180-330' },
    { label: 'NRT → Tokyo (Skyliner)', price: '¥2,580' },
    { label: 'Mid-range hotel night', price: '¥12,000-22,000' },
  ],
  KR: [
    { label: 'Bibimbap',              price: '₩9,000-13,000' },
    { label: 'Café Americano',        price: '₩4,500-5,500' },
    { label: 'Seoul metro single',    price: '₩1,400-1,500' },
    { label: 'Mid-range hotel night', price: '₩120,000-180,000' },
  ],
};

interface FxResponse {
  base: string;
  date: string;
  rates: Record<string, number>;
}

export default function MoneyScreen() {
  const { activeCourseId, jurisdiction } = useSettings();
  const { destination } = useActiveTravelDestination(activeCourseId);

  // Home currency comes from the active jurisdiction (AU → AUD, GB → GBP, ...).
  // Falls back to USD if the jurisdiction's currency isn't set.
  const homeCurrency = jurisdiction.currency.code || 'USD';

  const [amount, setAmount] = useState<string>('100');
  const [rate, setRate] = useState<number | null>(null);
  const [fetchedAt, setFetchedAt] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchRate = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const url = `${FX_API}?base=${homeCurrency}&symbols=${destination.currencyCode}`;
      const res = await fetch(url);
      if (!res.ok) throw new Error(`FX fetch ${res.status}`);
      const json = (await res.json()) as FxResponse;
      const r = json.rates?.[destination.currencyCode];
      if (typeof r !== 'number') throw new Error('No rate returned');
      setRate(r);
      setFetchedAt(json.date || new Date().toISOString().slice(0, 10));
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Could not fetch FX');
    } finally {
      setLoading(false);
    }
  }, [homeCurrency, destination.currencyCode]);

  useEffect(() => { fetchRate(); }, [fetchRate]);

  const numericAmount = Number(amount) || 0;
  const converted = rate ? numericAmount * rate : null;

  const costRows = COST_BY_COUNTRY[destination.countryCode] ?? [];

  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      <View style={styles.header}>
        <Pressable onPress={() => router.back()}><Text style={styles.back}>‹ Travel</Text></Pressable>
        <Text style={styles.title}>Money & Market</Text>
        <View style={{ width: 60 }} />
      </View>

      <ScrollView
        contentContainerStyle={{ padding: Spacing.lg, paddingBottom: Spacing.xxl }}
        refreshControl={<RefreshControl refreshing={loading} onRefresh={fetchRate} tintColor={Colors.white} />}
      >
        <Text style={styles.destinationLabel}>{destination.flag}  {destination.countryName}</Text>

        <View style={styles.fxCard}>
          <Text style={styles.fxLabel}>{homeCurrency} → {destination.currencyCode}</Text>
          {error && <Text style={styles.errorText}>{error}</Text>}
          {!error && rate === null && <ActivityIndicator color={Colors.white} />}
          {rate !== null && (
            <>
              <View style={styles.fxConvertRow}>
                <View style={styles.fxInputWrap}>
                  <Text style={styles.fxInputCurrency}>{homeCurrency}</Text>
                  <TextInput
                    style={styles.fxInput}
                    value={amount}
                    onChangeText={setAmount}
                    keyboardType="numeric"
                    placeholder="100"
                    placeholderTextColor="rgba(255,255,255,0.3)"
                  />
                </View>
                <Text style={styles.fxArrow}>→</Text>
                <View style={styles.fxResultWrap}>
                  <Text style={styles.fxResultCurrency}>{destination.currencyCode}</Text>
                  <Text style={styles.fxResultValue}>
                    {converted !== null ? converted.toLocaleString(undefined, { maximumFractionDigits: 0 }) : '—'}
                  </Text>
                </View>
              </View>
              <Text style={styles.fxRate}>
                1 {homeCurrency} = {rate.toFixed(rate < 1 ? 4 : 2)} {destination.currencyCode}
                {fetchedAt && `  ·  as of ${fetchedAt}`}
              </Text>
            </>
          )}
        </View>

        {costRows.length > 0 && (
          <View style={styles.costSection}>
            <Text style={styles.sectionTitle}>What things cost</Text>
            <Text style={styles.sectionSub}>Curated for {destination.countryName} — typical prices a traveller actually pays</Text>
            <View style={styles.costList}>
              {costRows.map(row => (
                <View key={row.label} style={styles.costRow}>
                  <View style={{ flex: 1 }}>
                    <Text style={styles.costLabel}>{row.label}</Text>
                    {row.note && <Text style={styles.costNote}>{row.note}</Text>}
                  </View>
                  <Text style={styles.costPrice}>{row.price}</Text>
                </View>
              ))}
            </View>
          </View>
        )}

        <View style={styles.disclaimerCard}>
          <Text style={styles.disclaimerText}>
            FX rates are mid-market reference rates. Banks and card networks add a margin (typically 2-4%).
            Prices are typical traveller anchors and vary by season, neighbourhood, and venue.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: Colors.primary },
  header: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: Spacing.md, paddingVertical: Spacing.sm },
  back: { color: Colors.white, fontSize: FontSize.md, fontWeight: FontWeight.semibold, paddingVertical: Spacing.xs },
  title: { color: Colors.white, fontSize: FontSize.lg, fontWeight: FontWeight.bold },

  destinationLabel: { color: 'rgba(255,255,255,0.7)', fontSize: FontSize.sm, marginBottom: Spacing.md },

  fxCard: {
    backgroundColor: 'rgba(255,255,255,0.08)',
    borderRadius: BorderRadius.lg,
    padding: Spacing.lg,
    gap: Spacing.sm,
  },
  fxLabel: { color: 'rgba(255,255,255,0.6)', fontSize: FontSize.xs, fontWeight: FontWeight.bold, letterSpacing: 1 },
  fxConvertRow: { flexDirection: 'row', alignItems: 'center', gap: Spacing.sm, marginTop: Spacing.xs },
  fxInputWrap: { flex: 1, backgroundColor: 'rgba(0,0,0,0.2)', borderRadius: BorderRadius.md, paddingHorizontal: Spacing.sm, paddingVertical: Spacing.xs },
  fxInputCurrency: { color: 'rgba(255,255,255,0.5)', fontSize: FontSize.xs, fontWeight: FontWeight.bold },
  fxInput: { color: Colors.white, fontSize: FontSize.xl, fontWeight: FontWeight.bold, padding: 0 },
  fxArrow: { color: 'rgba(255,255,255,0.5)', fontSize: FontSize.lg },
  fxResultWrap: { flex: 1, backgroundColor: 'rgba(255,255,255,0.04)', borderRadius: BorderRadius.md, paddingHorizontal: Spacing.sm, paddingVertical: Spacing.xs },
  fxResultCurrency: { color: 'rgba(255,255,255,0.5)', fontSize: FontSize.xs, fontWeight: FontWeight.bold },
  fxResultValue: { color: Colors.white, fontSize: FontSize.xl, fontWeight: FontWeight.bold },
  fxRate: { color: 'rgba(255,255,255,0.5)', fontSize: FontSize.xs, marginTop: 4 },
  errorText: { color: '#FF8A80', fontSize: FontSize.sm },

  costSection: { marginTop: Spacing.xl, gap: Spacing.xs },
  sectionTitle: { color: Colors.white, fontSize: FontSize.lg, fontWeight: FontWeight.bold },
  sectionSub: { color: 'rgba(255,255,255,0.6)', fontSize: FontSize.xs, lineHeight: 16 },
  costList: { backgroundColor: 'rgba(255,255,255,0.06)', borderRadius: BorderRadius.lg, padding: Spacing.md, gap: Spacing.sm, marginTop: Spacing.sm },
  costRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', gap: Spacing.md },
  costLabel: { color: Colors.white, fontSize: FontSize.sm, fontWeight: FontWeight.semibold },
  costNote: { color: 'rgba(255,255,255,0.5)', fontSize: FontSize.xs, marginTop: 2 },
  costPrice: { color: Colors.xp, fontSize: FontSize.sm, fontWeight: FontWeight.bold },

  disclaimerCard: { marginTop: Spacing.lg, padding: Spacing.md, borderRadius: BorderRadius.md, backgroundColor: 'rgba(0,0,0,0.2)' },
  disclaimerText: { color: 'rgba(255,255,255,0.5)', fontSize: FontSize.xs, lineHeight: 18 },
});

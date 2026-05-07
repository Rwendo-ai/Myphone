/**
 * Flight search — Skyscanner affiliate gateway.
 *
 * The user fills in their search inside the app (familiar Rwendo UI), then
 * we hand off to Skyscanner via the in-app browser (expo-web-browser). This
 * is the same UX as Safari View Controller / Chrome Custom Tabs — it stays
 * within the app shell and returns cleanly when the user taps Done.
 *
 * Affiliate ID lives in EXPO_PUBLIC_SKYSCANNER_ASSOCIATE_ID. Until the
 * partner account is approved, the URL still resolves correctly without
 * the associate id; we just don't earn commission.
 */

import { useState, useMemo } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, Pressable, Alert, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import * as WebBrowser from 'expo-web-browser';

import { useSettings } from '../../lib/SettingsContext';
import { Colors } from '../../constants/colors';
import { Spacing, FontSize, FontWeight, BorderRadius } from '../../constants/theme';
import { getDestinationForCourse } from '../../data/travel/destinations';

const SKYSCANNER_ASSOCIATE_ID = process.env.EXPO_PUBLIC_SKYSCANNER_ASSOCIATE_ID ?? '';

// Best-effort home-airport guess from the active jurisdiction. Users can
// always overwrite the field. Full airport autocomplete is Phase 2.
const JURISDICTION_TO_HOME_IATA: Record<string, { city: string; iata: string }> = {
  AU: { city: 'Sydney',   iata: 'SYD' },
  GB: { city: 'London',   iata: 'LHR' },
  US: { city: 'New York', iata: 'JFK' },
  EU: { city: 'Paris',    iata: 'CDG' },
  ZW: { city: 'Harare',   iata: 'HRE' },
  PH: { city: 'Manila',   iata: 'MNL' },
  FR: { city: 'Paris',    iata: 'CDG' },
};

function buildSkyscannerUrl(opts: {
  fromIata: string;
  toIata: string;
  departIso: string;
  returnIso?: string;
  passengers: number;
  cabin: 'economy' | 'premiumeconomy' | 'business' | 'first';
}): string {
  const market = 'AU';
  const locale = 'en-AU';
  const currency = 'AUD';
  const dep = opts.departIso.replace(/-/g, '').slice(2); // YYMMDD format Skyscanner uses
  const ret = opts.returnIso ? opts.returnIso.replace(/-/g, '').slice(2) : '';
  const path = ret
    ? `transport/flights/${opts.fromIata}/${opts.toIata}/${dep}/${ret}/`
    : `transport/flights/${opts.fromIata}/${opts.toIata}/${dep}/`;
  const params = new URLSearchParams({
    adultsv2: String(opts.passengers),
    cabinclass: opts.cabin,
    market,
    locale,
    currency,
    rtn: opts.returnIso ? '1' : '0',
  });
  if (SKYSCANNER_ASSOCIATE_ID) params.set('associateid', SKYSCANNER_ASSOCIATE_ID);
  return `https://www.skyscanner.com.au/${path}?${params.toString()}`;
}

function isoTodayPlus(days: number): string {
  const d = new Date();
  d.setDate(d.getDate() + days);
  return d.toISOString().slice(0, 10);
}

export default function FlightsScreen() {
  const { activeCourseId, jurisdiction } = useSettings();
  const destination = getDestinationForCourse(activeCourseId);

  const home = JURISDICTION_TO_HOME_IATA[jurisdiction.id] ?? { city: 'Sydney', iata: 'SYD' };

  const [fromIata, setFromIata] = useState(home.iata);
  const [toIata, setToIata] = useState(destination.primaryCity.iata);
  const [depart, setDepart] = useState(isoTodayPlus(14));
  const [returnDate, setReturnDate] = useState<string>(isoTodayPlus(28));
  const [oneWay, setOneWay] = useState(false);
  const [passengers, setPassengers] = useState(1);
  const [cabin] = useState<'economy' | 'premiumeconomy' | 'business' | 'first'>('economy');

  const url = useMemo(
    () => buildSkyscannerUrl({
      fromIata: fromIata.toUpperCase(),
      toIata: toIata.toUpperCase(),
      departIso: depart,
      returnIso: oneWay ? undefined : returnDate,
      passengers,
      cabin,
    }),
    [fromIata, toIata, depart, returnDate, oneWay, passengers, cabin],
  );

  const search = async () => {
    if (!fromIata.trim() || !toIata.trim() || !depart) {
      Alert.alert('Missing details', 'Add a departure airport, destination airport, and date.');
      return;
    }
    try {
      await WebBrowser.openBrowserAsync(url, {
        toolbarColor: Colors.primary,
        controlsColor: Colors.white,
        showTitle: true,
        enableBarCollapsing: true,
        // iOS: open in SFSafariViewController (in-app, returns cleanly).
        // Android: open in Chrome Custom Tabs.
        ...(Platform.OS === 'ios' ? { dismissButtonStyle: 'done' as const } : {}),
      });
    } catch (e) {
      Alert.alert('Could not open Skyscanner', e instanceof Error ? e.message : 'Try again later.');
    }
  };

  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      <View style={styles.header}>
        <Pressable onPress={() => router.back()}><Text style={styles.back}>‹ Travel</Text></Pressable>
        <Text style={styles.title}>Flights</Text>
        <View style={{ width: 60 }} />
      </View>

      <ScrollView contentContainerStyle={{ padding: Spacing.lg, paddingBottom: Spacing.xxl }}>
        <Text style={styles.poweredBy}>Powered by Skyscanner</Text>

        <View style={styles.card}>
          <View style={styles.tripTypeRow}>
            <Pressable
              style={[styles.tripTypeBtn, !oneWay && styles.tripTypeBtnActive]}
              onPress={() => setOneWay(false)}
            >
              <Text style={[styles.tripTypeText, !oneWay && styles.tripTypeTextActive]}>Return</Text>
            </Pressable>
            <Pressable
              style={[styles.tripTypeBtn, oneWay && styles.tripTypeBtnActive]}
              onPress={() => setOneWay(true)}
            >
              <Text style={[styles.tripTypeText, oneWay && styles.tripTypeTextActive]}>One way</Text>
            </Pressable>
          </View>

          <Field label="From (airport code)" value={fromIata} onChangeText={setFromIata} placeholder="SYD" autoCapitalize="characters" maxLength={3} />
          <Field label={`To · ${destination.primaryCity.name}`} value={toIata} onChangeText={setToIata} placeholder={destination.primaryCity.iata} autoCapitalize="characters" maxLength={3} />
          <Field label="Depart (YYYY-MM-DD)" value={depart} onChangeText={setDepart} placeholder="2026-06-15" />
          {!oneWay && (
            <Field label="Return (YYYY-MM-DD)" value={returnDate} onChangeText={setReturnDate} placeholder="2026-06-29" />
          )}

          <View style={styles.passengersRow}>
            <Text style={styles.fieldLabel}>Passengers</Text>
            <View style={styles.stepper}>
              <Pressable style={styles.stepBtn} onPress={() => setPassengers(p => Math.max(1, p - 1))}>
                <Text style={styles.stepBtnText}>−</Text>
              </Pressable>
              <Text style={styles.stepValue}>{passengers}</Text>
              <Pressable style={styles.stepBtn} onPress={() => setPassengers(p => Math.min(9, p + 1))}>
                <Text style={styles.stepBtnText}>+</Text>
              </Pressable>
            </View>
          </View>
        </View>

        <Pressable style={styles.searchBtn} onPress={search}>
          <Text style={styles.searchBtnText}>Search flights →</Text>
        </Pressable>

        <Text style={styles.disclaimer}>
          Search results open in an in-app browser. Booking happens on Skyscanner's site —
          we earn a small commission when you book, at no extra cost to you.
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}

function Field(props: {
  label: string;
  value: string;
  onChangeText: (s: string) => void;
  placeholder?: string;
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
  maxLength?: number;
}) {
  return (
    <View style={styles.field}>
      <Text style={styles.fieldLabel}>{props.label}</Text>
      <TextInput
        style={styles.fieldInput}
        value={props.value}
        onChangeText={props.onChangeText}
        placeholder={props.placeholder}
        placeholderTextColor="rgba(255,255,255,0.3)"
        autoCapitalize={props.autoCapitalize ?? 'none'}
        autoCorrect={false}
        maxLength={props.maxLength}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: Colors.primary },
  header: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: Spacing.md, paddingVertical: Spacing.sm },
  back: { color: Colors.white, fontSize: FontSize.md, fontWeight: FontWeight.semibold, paddingVertical: Spacing.xs },
  title: { color: Colors.white, fontSize: FontSize.lg, fontWeight: FontWeight.bold },
  poweredBy: { color: 'rgba(255,255,255,0.5)', fontSize: FontSize.xs, marginBottom: Spacing.md },

  card: { backgroundColor: 'rgba(255,255,255,0.08)', borderRadius: BorderRadius.lg, padding: Spacing.lg, gap: Spacing.md },
  tripTypeRow: { flexDirection: 'row', gap: Spacing.sm },
  tripTypeBtn: { flex: 1, paddingVertical: Spacing.sm, borderRadius: BorderRadius.md, alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.15)' },
  tripTypeBtnActive: { backgroundColor: Colors.xp },
  tripTypeText: { color: 'rgba(255,255,255,0.7)', fontWeight: FontWeight.semibold, fontSize: FontSize.sm },
  tripTypeTextActive: { color: Colors.white },

  field: { gap: 4 },
  fieldLabel: { color: 'rgba(255,255,255,0.6)', fontSize: FontSize.xs, fontWeight: FontWeight.bold, letterSpacing: 0.5 },
  fieldInput: { color: Colors.white, fontSize: FontSize.md, padding: Spacing.sm, backgroundColor: 'rgba(0,0,0,0.2)', borderRadius: BorderRadius.md },

  passengersRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  stepper: { flexDirection: 'row', alignItems: 'center', gap: Spacing.md, backgroundColor: 'rgba(0,0,0,0.2)', borderRadius: BorderRadius.md, padding: 4 },
  stepBtn: { width: 32, height: 32, alignItems: 'center', justifyContent: 'center', borderRadius: BorderRadius.sm, backgroundColor: 'rgba(255,255,255,0.1)' },
  stepBtnText: { color: Colors.white, fontSize: FontSize.lg, fontWeight: FontWeight.bold },
  stepValue: { color: Colors.white, fontSize: FontSize.md, fontWeight: FontWeight.bold, minWidth: 24, textAlign: 'center' },

  searchBtn: { marginTop: Spacing.lg, backgroundColor: Colors.xp, paddingVertical: Spacing.md, borderRadius: BorderRadius.lg, alignItems: 'center' },
  searchBtnText: { color: Colors.white, fontSize: FontSize.md, fontWeight: FontWeight.bold },
  disclaimer: { marginTop: Spacing.lg, color: 'rgba(255,255,255,0.4)', fontSize: FontSize.xs, lineHeight: 18, textAlign: 'center' },
});

/**
 * Hotel search — Booking.com affiliate gateway.
 *
 * Same pattern as flights.tsx: in-app search form, hand off to Booking.com
 * via expo-web-browser. Affiliate ID lives in EXPO_PUBLIC_BOOKING_AID.
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

const BOOKING_AID = process.env.EXPO_PUBLIC_BOOKING_AID ?? '';

function buildBookingUrl(opts: {
  city: string;
  country: string;
  checkin: string;  // YYYY-MM-DD
  checkout: string; // YYYY-MM-DD
  guests: number;
  rooms: number;
}): string {
  const params = new URLSearchParams({
    ss: `${opts.city}, ${opts.country}`,
    checkin: opts.checkin,
    checkout: opts.checkout,
    group_adults: String(opts.guests),
    no_rooms: String(opts.rooms),
    group_children: '0',
    selected_currency: 'AUD',
    lang: 'en-au',
  });
  if (BOOKING_AID) params.set('aid', BOOKING_AID);
  return `https://www.booking.com/searchresults.html?${params.toString()}`;
}

function isoTodayPlus(days: number): string {
  const d = new Date();
  d.setDate(d.getDate() + days);
  return d.toISOString().slice(0, 10);
}

export default function HotelsScreen() {
  const { activeCourseId } = useSettings();
  const destination = getDestinationForCourse(activeCourseId);

  const [city, setCity] = useState(destination.primaryCity.name);
  const [checkin, setCheckin] = useState(isoTodayPlus(14));
  const [checkout, setCheckout] = useState(isoTodayPlus(17));
  const [guests, setGuests] = useState(2);
  const [rooms, setRooms] = useState(1);

  const url = useMemo(
    () => buildBookingUrl({
      city,
      country: destination.countryName,
      checkin,
      checkout,
      guests,
      rooms,
    }),
    [city, destination.countryName, checkin, checkout, guests, rooms],
  );

  const search = async () => {
    if (!city.trim() || !checkin || !checkout) {
      Alert.alert('Missing details', 'Add a city and dates to search.');
      return;
    }
    try {
      await WebBrowser.openBrowserAsync(url, {
        toolbarColor: Colors.primary,
        controlsColor: Colors.white,
        showTitle: true,
        enableBarCollapsing: true,
        ...(Platform.OS === 'ios' ? { dismissButtonStyle: 'done' as const } : {}),
      });
    } catch (e) {
      Alert.alert('Could not open Booking.com', e instanceof Error ? e.message : 'Try again later.');
    }
  };

  const cityChips = [destination.primaryCity, ...destination.secondaryCities];

  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      <View style={styles.header}>
        <Pressable onPress={() => router.back()}><Text style={styles.back}>‹ Travel</Text></Pressable>
        <Text style={styles.title}>Hotels</Text>
        <View style={{ width: 60 }} />
      </View>

      <ScrollView contentContainerStyle={{ padding: Spacing.lg, paddingBottom: Spacing.xxl }}>
        <Text style={styles.poweredBy}>Powered by Booking.com</Text>

        <View style={styles.card}>
          <Field label={`City · ${destination.countryName}`} value={city} onChangeText={setCity} placeholder={destination.primaryCity.name} />
          <View style={styles.cityChipRow}>
            {cityChips.map(c => (
              <Pressable key={c.iata} style={[styles.cityChip, city === c.name && styles.cityChipActive]} onPress={() => setCity(c.name)}>
                <Text style={[styles.cityChipText, city === c.name && styles.cityChipTextActive]}>{c.name}</Text>
              </Pressable>
            ))}
          </View>

          <Field label="Check in (YYYY-MM-DD)"  value={checkin}  onChangeText={setCheckin}  placeholder="2026-06-15" />
          <Field label="Check out (YYYY-MM-DD)" value={checkout} onChangeText={setCheckout} placeholder="2026-06-18" />

          <View style={styles.row}>
            <View style={styles.flex1}>
              <Text style={styles.fieldLabel}>Guests</Text>
              <Stepper value={guests} onChange={setGuests} min={1} max={12} />
            </View>
            <View style={styles.flex1}>
              <Text style={styles.fieldLabel}>Rooms</Text>
              <Stepper value={rooms} onChange={setRooms} min={1} max={6} />
            </View>
          </View>
        </View>

        <Pressable style={styles.searchBtn} onPress={search}>
          <Text style={styles.searchBtnText}>Search hotels →</Text>
        </Pressable>

        <Text style={styles.disclaimer}>
          Search results open in an in-app browser. Booking happens on Booking.com —
          we earn a commission when you stay, at no extra cost to you.
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}

function Field(props: { label: string; value: string; onChangeText: (s: string) => void; placeholder?: string }) {
  return (
    <View style={styles.field}>
      <Text style={styles.fieldLabel}>{props.label}</Text>
      <TextInput
        style={styles.fieldInput}
        value={props.value}
        onChangeText={props.onChangeText}
        placeholder={props.placeholder}
        placeholderTextColor="rgba(255,255,255,0.3)"
        autoCorrect={false}
        autoCapitalize="words"
      />
    </View>
  );
}

function Stepper({ value, onChange, min, max }: { value: number; onChange: (v: number) => void; min: number; max: number }) {
  return (
    <View style={styles.stepper}>
      <Pressable style={styles.stepBtn} onPress={() => onChange(Math.max(min, value - 1))}><Text style={styles.stepBtnText}>−</Text></Pressable>
      <Text style={styles.stepValue}>{value}</Text>
      <Pressable style={styles.stepBtn} onPress={() => onChange(Math.min(max, value + 1))}><Text style={styles.stepBtnText}>+</Text></Pressable>
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
  field: { gap: 4 },
  fieldLabel: { color: 'rgba(255,255,255,0.6)', fontSize: FontSize.xs, fontWeight: FontWeight.bold, letterSpacing: 0.5 },
  fieldInput: { color: Colors.white, fontSize: FontSize.md, padding: Spacing.sm, backgroundColor: 'rgba(0,0,0,0.2)', borderRadius: BorderRadius.md },

  cityChipRow: { flexDirection: 'row', flexWrap: 'wrap', gap: Spacing.xs, marginTop: -Spacing.xs },
  cityChip: { paddingHorizontal: Spacing.sm, paddingVertical: 4, borderRadius: BorderRadius.full, backgroundColor: 'rgba(255,255,255,0.08)' },
  cityChipActive: { backgroundColor: Colors.xp },
  cityChipText: { color: 'rgba(255,255,255,0.7)', fontSize: FontSize.xs, fontWeight: FontWeight.semibold },
  cityChipTextActive: { color: Colors.white },

  row: { flexDirection: 'row', gap: Spacing.md },
  flex1: { flex: 1, gap: 4 },

  stepper: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', backgroundColor: 'rgba(0,0,0,0.2)', borderRadius: BorderRadius.md, padding: 4 },
  stepBtn: { width: 32, height: 32, alignItems: 'center', justifyContent: 'center', borderRadius: BorderRadius.sm, backgroundColor: 'rgba(255,255,255,0.1)' },
  stepBtnText: { color: Colors.white, fontSize: FontSize.lg, fontWeight: FontWeight.bold },
  stepValue: { color: Colors.white, fontSize: FontSize.md, fontWeight: FontWeight.bold, flex: 1, textAlign: 'center' },

  searchBtn: { marginTop: Spacing.lg, backgroundColor: Colors.xp, paddingVertical: Spacing.md, borderRadius: BorderRadius.lg, alignItems: 'center' },
  searchBtnText: { color: Colors.white, fontSize: FontSize.md, fontWeight: FontWeight.bold },
  disclaimer: { marginTop: Spacing.lg, color: 'rgba(255,255,255,0.4)', fontSize: FontSize.xs, lineHeight: 18, textAlign: 'center' },
});

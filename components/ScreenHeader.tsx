import { View, Text, StyleSheet, Pressable } from 'react-native';
import { router } from 'expo-router';
import { Colors } from '../constants/colors';
import { Spacing, FontSize, FontWeight } from '../constants/theme';

export default function ScreenHeader({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <View style={styles.header}>
      <Pressable onPress={() => router.back()} style={styles.backBtn} hitSlop={12}>
        <Text style={styles.backText}>← Back</Text>
      </Pressable>
      <Text style={styles.title}>{title}</Text>
      {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  header: { backgroundColor: Colors.primary, padding: Spacing.lg, gap: 4 },
  backBtn: { marginBottom: Spacing.sm },
  backText: { color: 'rgba(255,255,255,0.7)', fontSize: FontSize.md },
  title: { fontSize: FontSize.xxl, fontWeight: FontWeight.bold, color: Colors.white },
  subtitle: { fontSize: FontSize.xs, color: 'rgba(255,255,255,0.6)' },
});

import { View, Text, StyleSheet, TextInput, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';
import { Colors } from '../../constants/colors';
import { Spacing, FontSize, FontWeight, BorderRadius } from '../../constants/theme';

const SAMPLE_ENTRIES = [
  { id: '1', shona: 'Mhoro', english: 'Hello', pronunciation: 'mm-HOH-roh', partOfSpeech: 'greeting' },
  { id: '2', shona: 'Ndatenda', english: 'Thank you', pronunciation: 'nda-TEN-da', partOfSpeech: 'phrase' },
  { id: '3', shona: 'Zvakanaka', english: 'Good / Fine', pronunciation: 'zva-ka-NA-ka', partOfSpeech: 'adjective' },
  { id: '4', shona: 'Ndinoenda', english: 'I am going', pronunciation: 'ndi-no-EN-da', partOfSpeech: 'verb phrase' },
  { id: '5', shona: 'Mhuri', english: 'Family', pronunciation: 'mm-HOO-ri', partOfSpeech: 'noun' },
  { id: '6', shona: 'Mvura', english: 'Water / Rain', pronunciation: 'mm-VOO-ra', partOfSpeech: 'noun' },
  { id: '7', shona: 'Chingwa', english: 'Bread', pronunciation: 'CHING-wa', partOfSpeech: 'noun' },
  { id: '8', shona: 'Baba', english: 'Father', pronunciation: 'BAH-ba', partOfSpeech: 'noun' },
];

export default function DictionaryScreen() {
  const [query, setQuery] = useState('');

  const filtered = SAMPLE_ENTRIES.filter(
    (e) =>
      e.shona.toLowerCase().includes(query.toLowerCase()) ||
      e.english.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Dictionary</Text>
        <Text style={styles.headerSub}>Shona ↔ English</Text>
      </View>

      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search Shona or English..."
          placeholderTextColor={Colors.gray[400]}
          value={query}
          onChangeText={setQuery}
          autoCorrect={false}
        />
      </View>

      <FlatList
        data={filtered}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <View style={styles.entryCard}>
            <View style={styles.entryMain}>
              <Text style={styles.shona}>{item.shona}</Text>
              <Text style={styles.pos}>{item.partOfSpeech}</Text>
            </View>
            <Text style={styles.pronunciation}>{item.pronunciation}</Text>
            <Text style={styles.english}>{item.english}</Text>
          </View>
        )}
        ListEmptyComponent={
          <Text style={styles.empty}>No results for "{query}"</Text>
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: Colors.primary },
  header: {
    backgroundColor: Colors.primary,
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.lg,
  },
  headerTitle: {
    fontSize: FontSize.xxl,
    fontWeight: FontWeight.bold,
    color: Colors.white,
  },
  headerSub: {
    fontSize: FontSize.sm,
    color: 'rgba(255,255,255,0.6)',
    marginTop: 2,
  },
  searchContainer: {
    backgroundColor: Colors.primary,
    paddingHorizontal: Spacing.lg,
    paddingBottom: Spacing.md,
  },
  searchInput: {
    backgroundColor: 'rgba(255,255,255,0.15)',
    color: Colors.white,
    borderRadius: BorderRadius.lg,
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.sm,
    fontSize: FontSize.md,
  },
  list: {
    backgroundColor: Colors.accent,
    padding: Spacing.lg,
    gap: Spacing.sm,
    flexGrow: 1,
  },
  entryCard: {
    backgroundColor: Colors.white,
    borderRadius: BorderRadius.lg,
    padding: Spacing.md,
    gap: 4,
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 1,
  },
  entryMain: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  shona: {
    fontSize: FontSize.xl,
    fontWeight: FontWeight.bold,
    color: Colors.primary,
  },
  pos: {
    fontSize: FontSize.xs,
    color: Colors.secondary,
    backgroundColor: 'rgba(74,144,217,0.1)',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: BorderRadius.full,
  },
  pronunciation: {
    fontSize: FontSize.sm,
    color: Colors.gray[400],
    fontStyle: 'italic',
  },
  english: {
    fontSize: FontSize.md,
    color: Colors.gray[700],
    fontWeight: FontWeight.medium,
  },
  empty: {
    textAlign: 'center',
    color: Colors.gray[400],
    marginTop: Spacing.xxl,
    fontSize: FontSize.md,
  },
});

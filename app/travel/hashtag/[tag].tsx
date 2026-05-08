/**
 * Hashtag-filtered feed — all posts containing #<tag>, newest first.
 * Routed from tap on a hashtag in any post body.
 */

import { useEffect, useState, useCallback } from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router, useLocalSearchParams } from 'expo-router';

import { supabase } from '../../../lib/supabase';
import { Colors } from '../../../constants/colors';
import { Spacing, FontSize, FontWeight, BorderRadius } from '../../../constants/theme';
import type { TravellerPost } from '../../../lib/travel-connections';

export default function HashtagFeedScreen() {
  const { tag } = useLocalSearchParams<{ tag: string }>();
  const [posts, setPosts] = useState<TravellerPost[]>([]);
  const [loading, setLoading] = useState(true);

  const load = useCallback(async () => {
    if (!tag) return;
    setLoading(true);
    try {
      // Postgres ilike with %#tag% — cheap full-table scan for v1; fine while
      // posts are sparse. Future: GIN index on extracted-hashtags array.
      const { data } = await supabase
        .from('traveller_posts')
        .select('*')
        .ilike('body', `%#${tag}%`)
        .order('created_at', { ascending: false })
        .limit(50);
      setPosts((data ?? []) as TravellerPost[]);
    } finally {
      setLoading(false);
    }
  }, [tag]);

  useEffect(() => { load(); }, [load]);

  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      <View style={styles.header}>
        <Pressable onPress={() => router.back()}><Text style={styles.back}>‹ Back</Text></Pressable>
        <Text style={styles.title}>#{tag}</Text>
        <View style={{ width: 60 }} />
      </View>

      {loading ? (
        <View style={styles.center}><ActivityIndicator color={Colors.white} /></View>
      ) : posts.length === 0 ? (
        <View style={styles.center}>
          <Text style={styles.emptyEmoji}>🌱</Text>
          <Text style={styles.emptyBody}>No posts yet for #{tag}.</Text>
        </View>
      ) : (
        <ScrollView contentContainerStyle={{ paddingBottom: Spacing.xxl, paddingHorizontal: Spacing.md }}>
          <Text style={styles.subtitle}>{posts.length} {posts.length === 1 ? 'post' : 'posts'}</Text>
          {posts.map(p => (
            <Pressable
              key={p.id}
              style={styles.postCard}
              onPress={() => router.push({ pathname: '/travel/post/[id]' as any, params: { id: p.id } })}
            >
              <Text style={styles.postBody}>{p.body}</Text>
              <Text style={styles.postMeta}>
                {new Date(p.created_at).toLocaleDateString()}
                {p.travel_dates ? ` · ${p.travel_dates}` : ''}
                {p.destination_city ? ` · ${p.destination_city}` : ''}
              </Text>
            </Pressable>
          ))}
        </ScrollView>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: Colors.primary },
  header: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: Spacing.md, paddingVertical: Spacing.sm },
  back: { color: Colors.white, fontSize: FontSize.md, fontWeight: FontWeight.semibold, paddingVertical: Spacing.xs },
  title: { color: Colors.white, fontSize: FontSize.lg, fontWeight: FontWeight.bold },
  center: { flex: 1, alignItems: 'center', justifyContent: 'center', gap: Spacing.md },
  emptyEmoji: { fontSize: 48 },
  emptyBody: { color: 'rgba(255,255,255,0.6)', fontSize: FontSize.sm, textAlign: 'center' },

  subtitle: { color: 'rgba(255,255,255,0.55)', fontSize: FontSize.sm, marginBottom: Spacing.sm },
  postCard: { marginBottom: Spacing.sm, padding: Spacing.md, backgroundColor: 'rgba(255,255,255,0.06)', borderRadius: BorderRadius.lg },
  postBody: { color: Colors.white, fontSize: FontSize.sm, lineHeight: 20 },
  postMeta: { color: 'rgba(255,255,255,0.45)', fontSize: FontSize.xs, marginTop: 4 },
});

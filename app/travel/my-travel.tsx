/**
 * My Travel — the user's own profile + posts + entry to edit prefs.
 *
 * If no profile exists yet, routes to the onboarding screen.
 * Otherwise: profile card at the top, list of own posts below, with delete.
 */

import { useEffect, useState, useCallback } from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable, ActivityIndicator, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router, useFocusEffect } from 'expo-router';

import { useAuth } from '../../lib/AuthContext';
import { Colors } from '../../constants/colors';
import { Spacing, FontSize, FontWeight, BorderRadius } from '../../constants/theme';
import {
  getMyProfile,
  getMyPosts,
  deletePost,
  type TravellerProfile,
  type TravellerPost,
} from '../../lib/travel-connections';

export default function MyTravelScreen() {
  const { user } = useAuth();
  const [profile, setProfile] = useState<TravellerProfile | null>(null);
  const [posts, setPosts] = useState<TravellerPost[]>([]);
  const [loading, setLoading] = useState(true);

  const load = useCallback(async () => {
    if (!user) return;
    setLoading(true);
    try {
      const [p, ps] = await Promise.all([getMyProfile(user.id), getMyPosts(user.id)]);
      setProfile(p);
      setPosts(ps);
    } catch (e) {
      console.warn('[my-travel] load failed', e);
    } finally {
      setLoading(false);
    }
  }, [user]);

  useFocusEffect(useCallback(() => { load(); }, [load]));

  const handleDelete = (post: TravellerPost) => {
    Alert.alert('Delete this post?', post.body.slice(0, 80), [
      { text: 'Cancel', style: 'cancel' },
      {
        text: 'Delete',
        style: 'destructive',
        onPress: async () => {
          try {
            await deletePost(post.id);
            setPosts(prev => prev.filter(p => p.id !== post.id));
          } catch (e) {
            Alert.alert('Could not delete', e instanceof Error ? e.message : 'Try again later.');
          }
        },
      },
    ]);
  };

  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      <View style={styles.header}>
        <Pressable onPress={() => router.back()}><Text style={styles.back}>‹ Travel</Text></Pressable>
        <Text style={styles.title}>My travel</Text>
        <View style={{ width: 60 }} />
      </View>

      {loading ? (
        <View style={styles.center}><ActivityIndicator color={Colors.white} /></View>
      ) : !profile ? (
        <View style={styles.center}>
          <Text style={styles.emptyEmoji}>📝</Text>
          <Text style={styles.emptyTitle}>Set up your traveller profile</Text>
          <Text style={styles.emptyBody}>Once it's set up, your trips and posts live here.</Text>
          <Pressable style={styles.primaryBtn} onPress={() => router.push('/travel/connections-onboarding')}>
            <Text style={styles.primaryBtnText}>Set up profile</Text>
          </Pressable>
        </View>
      ) : (
        <ScrollView contentContainerStyle={{ paddingBottom: Spacing.xxl }}>
          <View style={styles.profileCard}>
            <View style={styles.avatarLarge}>
              <Text style={styles.avatarLargeText}>{profile.display_name.slice(0, 1).toUpperCase()}</Text>
            </View>
            <Text style={styles.profileName}>{profile.display_name}</Text>
            <Text style={styles.profileMeta}>
              {profile.age ? `${profile.age} · ` : ''}
              {profile.gender ? capitalize(profile.gender.replace(/_/g, ' ')) : ''}
            </Text>
            {profile.bio && <Text style={styles.profileBio}>{profile.bio}</Text>}
            <View style={styles.publicTag}>
              <Text style={styles.publicTagText}>{profile.is_public ? 'Public profile' : 'Private profile'}</Text>
            </View>

            <Pressable style={styles.editBtn} onPress={() => router.push('/travel/connections-onboarding')}>
              <Text style={styles.editBtnText}>Edit profile & match preferences</Text>
            </Pressable>
          </View>

          <Text style={styles.sectionTitle}>Your posts</Text>
          {posts.length === 0 ? (
            <View style={styles.emptyPosts}>
              <Text style={styles.emptyPostsText}>You haven't posted yet. Head to Connections to share a trip.</Text>
            </View>
          ) : (
            posts.map(p => (
              <View key={p.id} style={styles.postCard}>
                <View style={{ flex: 1 }}>
                  <Text style={styles.postBody}>{p.body}</Text>
                  <Text style={styles.postMeta}>
                    {new Date(p.created_at).toLocaleDateString()}
                    {p.travel_dates ? ` · ${p.travel_dates}` : ''}
                    {p.destination_city ? ` · ${p.destination_city}` : ''}
                  </Text>
                </View>
                <Pressable style={styles.deleteBtn} onPress={() => handleDelete(p)}>
                  <Text style={styles.deleteBtnText}>×</Text>
                </Pressable>
              </View>
            ))
          )}
        </ScrollView>
      )}
    </SafeAreaView>
  );
}

function capitalize(s: string): string { return s.charAt(0).toUpperCase() + s.slice(1); }

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: Colors.primary },
  header: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: Spacing.md, paddingVertical: Spacing.sm },
  back: { color: Colors.white, fontSize: FontSize.md, fontWeight: FontWeight.semibold, paddingVertical: Spacing.xs },
  title: { color: Colors.white, fontSize: FontSize.lg, fontWeight: FontWeight.bold },
  center: { flex: 1, padding: Spacing.xl, alignItems: 'center', justifyContent: 'center', gap: Spacing.md },

  profileCard: { margin: Spacing.md, padding: Spacing.lg, backgroundColor: 'rgba(255,255,255,0.06)', borderRadius: BorderRadius.lg, alignItems: 'center', gap: Spacing.xs },
  avatarLarge: { width: 80, height: 80, borderRadius: 40, backgroundColor: Colors.xp, alignItems: 'center', justifyContent: 'center' },
  avatarLargeText: { color: Colors.white, fontSize: FontSize.xxl, fontWeight: FontWeight.extrabold },
  profileName: { color: Colors.white, fontSize: FontSize.lg, fontWeight: FontWeight.bold, marginTop: Spacing.sm },
  profileMeta: { color: 'rgba(255,255,255,0.6)', fontSize: FontSize.sm },
  profileBio: { color: Colors.white, fontSize: FontSize.sm, textAlign: 'center', lineHeight: 20, marginTop: Spacing.xs, marginHorizontal: Spacing.md },
  publicTag: { paddingHorizontal: Spacing.sm, paddingVertical: 3, borderRadius: BorderRadius.full, backgroundColor: 'rgba(255,255,255,0.1)', marginTop: Spacing.xs },
  publicTagText: { color: 'rgba(255,255,255,0.8)', fontSize: FontSize.xs, fontWeight: FontWeight.semibold },
  editBtn: { marginTop: Spacing.md, paddingHorizontal: Spacing.lg, paddingVertical: Spacing.sm, borderRadius: BorderRadius.full, backgroundColor: Colors.xp },
  editBtnText: { color: Colors.white, fontSize: FontSize.sm, fontWeight: FontWeight.bold },

  sectionTitle: { color: Colors.white, fontSize: FontSize.md, fontWeight: FontWeight.bold, paddingHorizontal: Spacing.md, marginTop: Spacing.md, marginBottom: Spacing.sm },

  emptyEmoji: { fontSize: 48 },
  emptyTitle: { color: Colors.white, fontSize: FontSize.lg, fontWeight: FontWeight.bold, textAlign: 'center' },
  emptyBody: { color: 'rgba(255,255,255,0.6)', fontSize: FontSize.sm, textAlign: 'center' },

  postCard: { marginHorizontal: Spacing.md, marginBottom: Spacing.sm, padding: Spacing.md, backgroundColor: 'rgba(255,255,255,0.06)', borderRadius: BorderRadius.lg, flexDirection: 'row', gap: Spacing.sm },
  postBody: { color: Colors.white, fontSize: FontSize.sm, lineHeight: 20 },
  postMeta: { color: 'rgba(255,255,255,0.45)', fontSize: FontSize.xs, marginTop: 4 },
  deleteBtn: { width: 32, height: 32, borderRadius: 16, alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0.2)' },
  deleteBtnText: { color: 'rgba(255,255,255,0.7)', fontSize: FontSize.lg, fontWeight: FontWeight.bold, lineHeight: 20 },

  emptyPosts: { padding: Spacing.lg, alignItems: 'center' },
  emptyPostsText: { color: 'rgba(255,255,255,0.55)', fontSize: FontSize.sm, textAlign: 'center', lineHeight: 18 },

  primaryBtn: { backgroundColor: Colors.xp, paddingVertical: Spacing.md, paddingHorizontal: Spacing.xl, borderRadius: BorderRadius.full, marginTop: Spacing.sm },
  primaryBtnText: { color: Colors.white, fontSize: FontSize.md, fontWeight: FontWeight.bold },
});

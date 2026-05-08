/**
 * User profile by @handle — view someone else's traveller profile, follow them,
 * see their posts. Routed from feed-card author taps.
 */

import { useEffect, useState, useCallback } from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable, ActivityIndicator, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router, useLocalSearchParams } from 'expo-router';

import { useAuth } from '../../../lib/AuthContext';
import { Colors } from '../../../constants/colors';
import { Spacing, FontSize, FontWeight, BorderRadius } from '../../../constants/theme';
import {
  getProfileByHandle,
  getMyPosts,
  getFollowCounts,
  isFollowing as checkIsFollowing,
  followUser,
  unfollowUser,
  type TravellerProfile,
  type TravellerPost,
} from '../../../lib/travel-connections';

export default function ProfileByHandleScreen() {
  const { handle } = useLocalSearchParams<{ handle: string }>();
  const { user } = useAuth();

  const [profile, setProfile] = useState<TravellerProfile | null>(null);
  const [posts, setPosts] = useState<TravellerPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [following, setFollowing] = useState(false);
  const [counts, setCounts] = useState({ followers: 0, following: 0 });
  const [busy, setBusy] = useState(false);

  const isOwnProfile = !!profile && !!user && profile.user_id === user.id;

  const load = useCallback(async () => {
    if (!handle) return;
    setLoading(true);
    try {
      const p = await getProfileByHandle(handle);
      if (!p) { setProfile(null); return; }
      const [posts, counts, isFollowingResult] = await Promise.all([
        getMyPosts(p.user_id, 50),
        getFollowCounts(p.user_id),
        user ? checkIsFollowing(user.id, p.user_id) : Promise.resolve(false),
      ]);
      setProfile(p);
      setPosts(posts);
      setCounts(counts);
      setFollowing(isFollowingResult);
    } finally {
      setLoading(false);
    }
  }, [handle, user]);

  useEffect(() => { load(); }, [load]);

  const toggleFollow = async () => {
    if (!user || !profile) return;
    setBusy(true);
    setFollowing(prev => !prev);
    setCounts(prev => ({ ...prev, followers: prev.followers + (following ? -1 : 1) }));
    try {
      if (following) await unfollowUser(user.id, profile.user_id);
      else await followUser(user.id, profile.user_id);
    } catch (e) {
      Alert.alert('Could not update', e instanceof Error ? e.message : 'Try again later.');
      load();
    } finally {
      setBusy(false);
    }
  };

  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      <View style={styles.header}>
        <Pressable onPress={() => router.back()}><Text style={styles.back}>‹ Back</Text></Pressable>
        <Text style={styles.title}>@{handle}</Text>
        <View style={{ width: 60 }} />
      </View>

      {loading ? (
        <View style={styles.center}><ActivityIndicator color={Colors.white} /></View>
      ) : !profile || !profile.is_public ? (
        <View style={styles.center}>
          <Text style={styles.emptyEmoji}>👻</Text>
          <Text style={styles.emptyTitle}>This profile isn't visible</Text>
          <Text style={styles.emptyBody}>The user has set their profile to private, or this handle doesn't exist.</Text>
        </View>
      ) : (
        <ScrollView contentContainerStyle={{ paddingBottom: Spacing.xxl }}>
          <View style={styles.profileCard}>
            <View style={styles.avatarLarge}>
              <Text style={styles.avatarLargeText}>{profile.display_name.slice(0, 1).toUpperCase()}</Text>
            </View>
            <Text style={styles.profileName}>{profile.display_name}</Text>
            <Text style={styles.profileHandle}>@{profile.handle}</Text>
            {profile.bio && <Text style={styles.profileBio}>{profile.bio}</Text>}

            <View style={styles.statsRow}>
              <View style={styles.statItem}>
                <Text style={styles.statValue}>{posts.length}</Text>
                <Text style={styles.statLabel}>Posts</Text>
              </View>
              <View style={styles.statItem}>
                <Text style={styles.statValue}>{counts.followers}</Text>
                <Text style={styles.statLabel}>Followers</Text>
              </View>
              <View style={styles.statItem}>
                <Text style={styles.statValue}>{counts.following}</Text>
                <Text style={styles.statLabel}>Following</Text>
              </View>
            </View>

            {!isOwnProfile && user && (
              <Pressable
                style={[styles.followBtn, following && styles.followBtnFollowing, busy && styles.followBtnDisabled]}
                onPress={toggleFollow}
                disabled={busy}
              >
                <Text style={[styles.followBtnText, following && styles.followBtnTextFollowing]}>
                  {following ? '✓ Following' : '+ Follow'}
                </Text>
              </Pressable>
            )}
          </View>

          <Text style={styles.sectionTitle}>Posts</Text>
          {posts.length === 0 ? (
            <View style={styles.emptyPosts}>
              <Text style={styles.emptyPostsText}>No posts yet.</Text>
            </View>
          ) : (
            posts.map(p => (
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
            ))
          )}
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
  center: { flex: 1, alignItems: 'center', justifyContent: 'center', gap: Spacing.md, padding: Spacing.lg },

  profileCard: { margin: Spacing.md, padding: Spacing.lg, backgroundColor: 'rgba(255,255,255,0.06)', borderRadius: BorderRadius.lg, alignItems: 'center', gap: Spacing.xs },
  avatarLarge: { width: 80, height: 80, borderRadius: 40, backgroundColor: Colors.xp, alignItems: 'center', justifyContent: 'center' },
  avatarLargeText: { color: Colors.white, fontSize: FontSize.xxl, fontWeight: FontWeight.extrabold },
  profileName: { color: Colors.white, fontSize: FontSize.lg, fontWeight: FontWeight.bold, marginTop: Spacing.sm },
  profileHandle: { color: 'rgba(255,255,255,0.6)', fontSize: FontSize.sm },
  profileBio: { color: Colors.white, fontSize: FontSize.sm, textAlign: 'center', lineHeight: 20, marginTop: Spacing.xs, marginHorizontal: Spacing.md },

  statsRow: { flexDirection: 'row', gap: Spacing.xl, marginTop: Spacing.sm, paddingTop: Spacing.sm, borderTopWidth: 1, borderTopColor: 'rgba(255,255,255,0.1)', alignSelf: 'stretch', justifyContent: 'center' },
  statItem: { alignItems: 'center', minWidth: 70 },
  statValue: { color: Colors.white, fontSize: FontSize.lg, fontWeight: FontWeight.bold },
  statLabel: { color: 'rgba(255,255,255,0.55)', fontSize: FontSize.xs },

  followBtn: { backgroundColor: Colors.xp, paddingHorizontal: Spacing.xl, paddingVertical: Spacing.sm, borderRadius: BorderRadius.full, marginTop: Spacing.md, minWidth: 140, alignItems: 'center' },
  followBtnFollowing: { backgroundColor: 'rgba(255,255,255,0.1)' },
  followBtnDisabled: { opacity: 0.5 },
  followBtnText: { color: Colors.white, fontWeight: FontWeight.bold, fontSize: FontSize.sm },
  followBtnTextFollowing: { color: 'rgba(255,255,255,0.9)' },

  sectionTitle: { color: Colors.white, fontSize: FontSize.md, fontWeight: FontWeight.bold, paddingHorizontal: Spacing.md, marginBottom: Spacing.sm },
  postCard: { marginHorizontal: Spacing.md, marginBottom: Spacing.sm, padding: Spacing.md, backgroundColor: 'rgba(255,255,255,0.06)', borderRadius: BorderRadius.lg },
  postBody: { color: Colors.white, fontSize: FontSize.sm, lineHeight: 20 },
  postMeta: { color: 'rgba(255,255,255,0.45)', fontSize: FontSize.xs, marginTop: 4 },
  emptyPosts: { padding: Spacing.lg, alignItems: 'center' },
  emptyPostsText: { color: 'rgba(255,255,255,0.55)', fontSize: FontSize.sm },

  emptyEmoji: { fontSize: 48 },
  emptyTitle: { color: Colors.white, fontSize: FontSize.md, fontWeight: FontWeight.bold, textAlign: 'center' },
  emptyBody: { color: 'rgba(255,255,255,0.6)', fontSize: FontSize.sm, textAlign: 'center', lineHeight: 18 },
});

/**
 * Connections — public feed of travellers + entry to onboarding for first-timers.
 *
 * Logic:
 *   1. If the user has no traveller_profiles row, show the onboarding CTA.
 *   2. Otherwise show the feed for the active destination, with a compose
 *      button at the top.
 *   3. Match-prefs filter is applied client-side on the loaded feed.
 *
 * Composing posts is inline (modal-style sheet) — kept lightweight for v1.
 */

import { useEffect, useState, useCallback } from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable, ActivityIndicator, RefreshControl, TextInput, Alert, KeyboardAvoidingView, Platform, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';

import { pickImage, uploadPostImage, postImageUrl, type ChosenImage } from '../../lib/post-images';

import { useAuth } from '../../lib/AuthContext';
import { useSettings } from '../../lib/SettingsContext';
import { supabase } from '../../lib/supabase';
import { ageFromDob } from '../../lib/active-companion';
import { useActiveTravelDestination } from '../../lib/travel-destination';
import { Colors } from '../../constants/colors';
import { Spacing, FontSize, FontWeight, BorderRadius } from '../../constants/theme';
import {
  getMyProfile,
  getMyMatchPrefs,
  getFeed,
  createPost,
  filterFeedByPrefs,
  likePost,
  unlikePost,
  type FeedPost,
  type TravellerProfile,
  type MatchPrefs,
} from '../../lib/travel-connections';

const CONNECTIONS_MIN_AGE = 18;

type FeedTab = 'discover' | 'following';

type ScreenState =
  | { kind: 'loading' }
  | { kind: 'age_gated' }
  | { kind: 'no_profile' }
  | { kind: 'ready'; profile: TravellerProfile; prefs: MatchPrefs | null; feed: FeedPost[] };

export default function ConnectionsScreen() {
  const { user } = useAuth();
  const { activeCourseId } = useSettings();
  const { destination } = useActiveTravelDestination(activeCourseId);

  const [state, setState] = useState<ScreenState>({ kind: 'loading' });
  const [refreshing, setRefreshing] = useState(false);
  const [composeOpen, setComposeOpen] = useState(false);
  const [feedTab, setFeedTab] = useState<FeedTab>('discover');

  const load = useCallback(async () => {
    if (!user) { setState({ kind: 'loading' }); return; }
    try {
      // Age gate first — Connections is 18+. Same conservative behaviour as
      // the romance preset gate: missing or unparseable DOB → blocked.
      const { data: profileRow } = await supabase
        .from('profiles').select('date_of_birth').eq('id', user.id).maybeSingle();
      const age = ageFromDob(profileRow?.date_of_birth);
      if (age === null || age < CONNECTIONS_MIN_AGE) {
        setState({ kind: 'age_gated' });
        return;
      }

      const profile = await getMyProfile(user.id);
      if (!profile) { setState({ kind: 'no_profile' }); return; }
      const [prefs, feed] = await Promise.all([
        getMyMatchPrefs(user.id),
        getFeed({
          destinationCountryCode: destination.countryCode,
          limit: 50,
          viewerId: user.id,
          followingOnly: feedTab === 'following',
        }),
      ]);
      const filtered = filterFeedByPrefs(feed, prefs, profile);
      setState({ kind: 'ready', profile, prefs, feed: filtered });
    } catch (e) {
      console.warn('[connections] load failed', e);
      setState({ kind: 'no_profile' });
    }
  }, [user, destination.countryCode, feedTab]);

  useEffect(() => { load(); }, [load]);

  const toggleLike = useCallback(async (post: FeedPost) => {
    if (!user) return;
    // Optimistic local update
    setState(prev => {
      if (prev.kind !== 'ready') return prev;
      return {
        ...prev,
        feed: prev.feed.map(p => p.id === post.id
          ? { ...p, likedByMe: !p.likedByMe, likeCount: p.likeCount + (p.likedByMe ? -1 : 1) }
          : p),
      };
    });
    try {
      if (post.likedByMe) await unlikePost(post.id, user.id);
      else await likePost(post.id, user.id);
    } catch (e) {
      // Roll back on error
      load();
    }
  }, [user, load]);

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    await load();
    setRefreshing(false);
  }, [load]);

  const handlePost = useCallback(async (body: string, dates: string, image: ChosenImage | null) => {
    if (!user) return;
    try {
      let imagePath: string | undefined;
      if (image) {
        imagePath = await uploadPostImage(user.id, image);
      }
      await createPost({
        author_id: user.id,
        body,
        destination_country_code: destination.countryCode,
        destination_city: destination.primaryCity.name,
        travel_dates: dates || undefined,
        image_path: imagePath,
      });
      setComposeOpen(false);
      load();
    } catch (e) {
      Alert.alert('Could not post', e instanceof Error ? e.message : 'Try again later.');
    }
  }, [user, destination, load]);

  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      <View style={styles.header}>
        <Pressable onPress={() => router.back()}><Text style={styles.back}>‹ Travel</Text></Pressable>
        <Text style={styles.title}>Connections</Text>
        <Pressable onPress={() => router.push('/travel/connections-onboarding')}>
          <Text style={styles.editPrefs}>⚙</Text>
        </Pressable>
      </View>

      {state.kind === 'loading' && (
        <View style={styles.center}><ActivityIndicator color={Colors.white} /></View>
      )}

      {state.kind === 'age_gated' && (
        <View style={styles.center}>
          <Text style={styles.emptyEmoji}>🔒</Text>
          <Text style={styles.emptyTitle}>Connections is 18+</Text>
          <Text style={styles.emptyBody}>
            Travel companion features that involve meeting other travellers are restricted to users 18 or older.
            {'\n\n'}
            The rest of Travel Mode — Phrasebook, Cultural Guide, Money & Market, Flights, Hotels, Safari & Parks —
            is open to everyone.
          </Text>
          <Pressable style={styles.primaryBtn} onPress={() => router.back()}>
            <Text style={styles.primaryBtnText}>Back to Travel</Text>
          </Pressable>
        </View>
      )}

      {state.kind === 'no_profile' && (
        <View style={styles.center}>
          <Text style={styles.emptyEmoji}>👋</Text>
          <Text style={styles.emptyTitle}>Join the Connections feed</Text>
          <Text style={styles.emptyBody}>
            Set up a quick traveller profile to see who else is heading to {destination.countryName}
            {' '}— and let them see your trip too.
          </Text>
          <Pressable style={styles.primaryBtn} onPress={() => router.push('/travel/connections-onboarding')}>
            <Text style={styles.primaryBtnText}>Set up profile</Text>
          </Pressable>
        </View>
      )}

      {state.kind === 'ready' && (
        <>
          <ScrollView
            contentContainerStyle={{ paddingBottom: Spacing.xxl }}
            refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} tintColor={Colors.white} />}
          >
            <View style={styles.intro}>
              <Text style={styles.flag}>{destination.flag}</Text>
              <Text style={styles.country}>Heading to {destination.countryName}?</Text>
              <Text style={styles.sub}>{state.feed.length} {state.feed.length === 1 ? 'post' : 'posts'}</Text>
            </View>

            <View style={styles.tabRow}>
              <Pressable style={[styles.tab, feedTab === 'discover' && styles.tabActive]} onPress={() => setFeedTab('discover')}>
                <Text style={[styles.tabText, feedTab === 'discover' && styles.tabTextActive]}>Discover</Text>
              </Pressable>
              <Pressable style={[styles.tab, feedTab === 'following' && styles.tabActive]} onPress={() => setFeedTab('following')}>
                <Text style={[styles.tabText, feedTab === 'following' && styles.tabTextActive]}>Following</Text>
              </Pressable>
            </View>

            <Pressable style={styles.composeBtn} onPress={() => setComposeOpen(true)}>
              <Text style={styles.composeBtnText}>+ Share your travel plans</Text>
            </Pressable>

            {state.feed.length === 0 ? (
              <View style={styles.empty}>
                <Text style={styles.emptyEmoji}>🌱</Text>
                <Text style={styles.emptyBody}>
                  {feedTab === 'following'
                    ? 'No posts from travellers you follow yet. Hop over to Discover to find people to follow.'
                    : `No posts yet for ${destination.countryName}. Be the first to share — others coming through will see it.`}
                </Text>
              </View>
            ) : (
              state.feed.map(p => <PostCard key={p.id} post={p} onLike={toggleLike} />)
            )}
          </ScrollView>

          {composeOpen && (
            <ComposeSheet
              destinationName={destination.countryName}
              onCancel={() => setComposeOpen(false)}
              onSubmit={handlePost}
            />
          )}
        </>
      )}
    </SafeAreaView>
  );
}

function PostCard({ post, onLike }: { post: FeedPost; onLike: (p: FeedPost) => void }) {
  const created = new Date(post.created_at);
  const ago = relativeTime(created);
  const author = post.author;
  return (
    <Pressable style={styles.postCard} onPress={() => router.push({ pathname: '/travel/post/[id]' as any, params: { id: post.id } })}>
      <Pressable
        style={styles.postHeader}
        onPress={author?.handle ? () => router.push({ pathname: '/travel/profile/[handle]' as any, params: { handle: author.handle! } }) : undefined}
      >
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>{(author?.display_name ?? '?').slice(0, 1).toUpperCase()}</Text>
        </View>
        <View style={{ flex: 1 }}>
          <Text style={styles.postAuthor}>{author?.display_name ?? 'Someone'}</Text>
          <Text style={styles.postMeta}>
            {author?.handle ? `@${author.handle} · ` : ''}{ago}{post.travel_dates ? ` · ${post.travel_dates}` : ''}
          </Text>
        </View>
      </Pressable>
      <PostBodyText body={post.body} />
      {post.image_path && (
        <Image
          source={{ uri: postImageUrl(post.image_path) }}
          style={styles.postImage}
          accessibilityLabel={post.image_alt ?? undefined}
        />
      )}
      <View style={styles.postActionsRow}>
        <Pressable style={styles.actionBtn} onPress={(e) => { e.stopPropagation?.(); onLike(post); }}>
          <Text style={[styles.actionIcon, post.likedByMe && styles.actionIconActive]}>{post.likedByMe ? '♥' : '♡'}</Text>
          <Text style={styles.actionCount}>{post.likeCount}</Text>
        </Pressable>
        <View style={styles.actionBtn}>
          <Text style={styles.actionIcon}>💬</Text>
          <Text style={styles.actionCount}>{post.commentCount}</Text>
        </View>
      </View>
    </Pressable>
  );
}

/** Renders post body with hashtag tap-targets. Splits text on # boundaries
 *  and renders #tags as styled, tappable spans that route to the hashtag
 *  feed at /travel/hashtag/[tag]. */
function PostBodyText({ body }: { body: string }) {
  const parts = body.split(/(#[A-Za-z0-9_]{2,30})/g);
  return (
    <Text style={styles.postBody}>
      {parts.map((part, i) => {
        if (part.startsWith('#') && part.length >= 3) {
          const tag = part.slice(1).toLowerCase();
          return (
            <Text
              key={i}
              style={styles.hashtag}
              onPress={() => router.push({ pathname: '/travel/hashtag/[tag]' as any, params: { tag } })}
            >
              {part}
            </Text>
          );
        }
        return <Text key={i}>{part}</Text>;
      })}
    </Text>
  );
}

function ComposeSheet({ destinationName, onCancel, onSubmit }: {
  destinationName: string;
  onCancel: () => void;
  onSubmit: (body: string, dates: string, image: ChosenImage | null) => void;
}) {
  const [body, setBody] = useState('');
  const [dates, setDates] = useState('');
  const [image, setImage] = useState<ChosenImage | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const choosePhoto = async () => {
    try {
      const picked = await pickImage();
      if (picked) setImage(picked);
    } catch (e) {
      Alert.alert('Could not open photo picker', e instanceof Error ? e.message : 'Try again.');
    }
  };

  const submit = async () => {
    setSubmitting(true);
    try {
      await onSubmit(body.trim(), dates.trim(), image);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined} style={styles.sheetOverlay}>
      <Pressable style={styles.sheetBackdrop} onPress={submitting ? undefined : onCancel} />
      <View style={styles.sheet}>
        <Text style={styles.sheetTitle}>Share your trip to {destinationName}</Text>
        <TextInput
          style={styles.sheetInput}
          placeholder="What are you up to? Looking to meet up? Need tips?"
          placeholderTextColor="rgba(255,255,255,0.3)"
          value={body}
          onChangeText={setBody}
          multiline
          maxLength={500}
        />
        <Text style={styles.sheetCharCount}>{body.length} / 500</Text>

        {image ? (
          <View style={styles.imagePreviewWrap}>
            <Image source={{ uri: image.uri }} style={styles.imagePreview} />
            <Pressable style={styles.imagePreviewRemove} onPress={() => setImage(null)}>
              <Text style={styles.imagePreviewRemoveText}>✕</Text>
            </Pressable>
          </View>
        ) : (
          <Pressable style={styles.imagePickerBtn} onPress={choosePhoto}>
            <Text style={styles.imagePickerText}>📷 Add a photo (optional)</Text>
          </Pressable>
        )}

        <TextInput
          style={styles.sheetDateInput}
          placeholder="When (e.g. June 2026, Jul 15-22)"
          placeholderTextColor="rgba(255,255,255,0.3)"
          value={dates}
          onChangeText={setDates}
          maxLength={40}
        />
        <View style={styles.sheetButtons}>
          <Pressable style={styles.sheetCancelBtn} onPress={onCancel} disabled={submitting}>
            <Text style={styles.sheetCancelText}>Cancel</Text>
          </Pressable>
          <Pressable
            style={[styles.sheetPostBtn, (!body.trim() || submitting) && styles.sheetPostBtnDisabled]}
            onPress={submit}
            disabled={!body.trim() || submitting}
          >
            <Text style={styles.sheetPostText}>{submitting ? 'Posting…' : 'Post'}</Text>
          </Pressable>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

function relativeTime(date: Date): string {
  const diff = Math.floor((Date.now() - date.getTime()) / 1000);
  if (diff < 60) return 'just now';
  if (diff < 3600) return `${Math.floor(diff / 60)} min ago`;
  if (diff < 86400) return `${Math.floor(diff / 3600)} hr ago`;
  if (diff < 604800) return `${Math.floor(diff / 86400)} d ago`;
  return date.toLocaleDateString();
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: Colors.primary },
  header: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: Spacing.md, paddingVertical: Spacing.sm },
  back: { color: Colors.white, fontSize: FontSize.md, fontWeight: FontWeight.semibold, paddingVertical: Spacing.xs },
  title: { color: Colors.white, fontSize: FontSize.lg, fontWeight: FontWeight.bold },
  editPrefs: { color: Colors.white, fontSize: FontSize.lg, paddingVertical: Spacing.xs, paddingHorizontal: Spacing.sm },

  center: { flex: 1, padding: Spacing.xl, alignItems: 'center', justifyContent: 'center', gap: Spacing.md },
  intro: { alignItems: 'center', padding: Spacing.lg, gap: 4 },
  flag: { fontSize: 36 },
  country: { color: Colors.white, fontSize: FontSize.lg, fontWeight: FontWeight.bold, textAlign: 'center' },
  sub: { color: 'rgba(255,255,255,0.55)', fontSize: FontSize.sm },

  emptyEmoji: { fontSize: 48 },
  emptyTitle: { color: Colors.white, fontSize: FontSize.lg, fontWeight: FontWeight.bold, textAlign: 'center' },
  emptyBody: { color: 'rgba(255,255,255,0.7)', fontSize: FontSize.sm, textAlign: 'center', lineHeight: 20, maxWidth: 320 },
  empty: { padding: Spacing.xl, alignItems: 'center', gap: Spacing.sm },

  composeBtn: { marginHorizontal: Spacing.md, marginBottom: Spacing.md, padding: Spacing.md, backgroundColor: Colors.xp, borderRadius: BorderRadius.lg, alignItems: 'center' },
  composeBtnText: { color: Colors.white, fontSize: FontSize.sm, fontWeight: FontWeight.bold },

  tabRow: { flexDirection: 'row', gap: Spacing.xs, marginHorizontal: Spacing.md, marginBottom: Spacing.sm, backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: BorderRadius.full, padding: 4 },
  tab: { flex: 1, paddingVertical: Spacing.xs, borderRadius: BorderRadius.full, alignItems: 'center' },
  tabActive: { backgroundColor: Colors.xp },
  tabText: { color: 'rgba(255,255,255,0.6)', fontSize: FontSize.sm, fontWeight: FontWeight.semibold },
  tabTextActive: { color: Colors.white, fontWeight: FontWeight.bold },

  postActionsRow: { flexDirection: 'row', gap: Spacing.lg, marginTop: Spacing.sm, paddingTop: Spacing.sm, borderTopWidth: 1, borderTopColor: 'rgba(255,255,255,0.06)' },
  actionBtn: { flexDirection: 'row', alignItems: 'center', gap: 4 },
  actionIcon: { color: 'rgba(255,255,255,0.7)', fontSize: FontSize.lg },
  actionIconActive: { color: '#FF5A7A' },
  actionCount: { color: 'rgba(255,255,255,0.7)', fontSize: FontSize.sm, fontWeight: FontWeight.semibold },

  hashtag: { color: Colors.xp, fontWeight: FontWeight.bold },

  postCard: { marginHorizontal: Spacing.md, marginBottom: Spacing.sm, padding: Spacing.md, backgroundColor: 'rgba(255,255,255,0.06)', borderRadius: BorderRadius.lg, gap: Spacing.sm },
  postHeader: { flexDirection: 'row', alignItems: 'center', gap: Spacing.sm },
  avatar: { width: 36, height: 36, borderRadius: 18, backgroundColor: Colors.xp, alignItems: 'center', justifyContent: 'center' },
  avatarText: { color: Colors.white, fontSize: FontSize.md, fontWeight: FontWeight.bold },
  postAuthor: { color: Colors.white, fontSize: FontSize.sm, fontWeight: FontWeight.bold },
  postMeta: { color: 'rgba(255,255,255,0.5)', fontSize: FontSize.xs, marginTop: 2 },
  postBody: { color: Colors.white, fontSize: FontSize.sm, lineHeight: 20 },
  postImage: { width: '100%', aspectRatio: 4/3, borderRadius: BorderRadius.md, backgroundColor: 'rgba(0,0,0,0.2)', marginTop: Spacing.xs },

  imagePickerBtn: { padding: Spacing.sm, borderRadius: BorderRadius.md, backgroundColor: 'rgba(255,255,255,0.06)', alignItems: 'center', borderWidth: 1, borderColor: 'rgba(255,255,255,0.1)', borderStyle: 'dashed' },
  imagePickerText: { color: 'rgba(255,255,255,0.7)', fontSize: FontSize.sm, fontWeight: FontWeight.semibold },
  imagePreviewWrap: { position: 'relative', borderRadius: BorderRadius.md, overflow: 'hidden' },
  imagePreview: { width: '100%', aspectRatio: 4/3 },
  imagePreviewRemove: { position: 'absolute', top: 6, right: 6, width: 28, height: 28, borderRadius: 14, backgroundColor: 'rgba(0,0,0,0.6)', alignItems: 'center', justifyContent: 'center' },
  imagePreviewRemoveText: { color: Colors.white, fontSize: FontSize.md, fontWeight: FontWeight.bold },

  primaryBtn: { backgroundColor: Colors.xp, paddingVertical: Spacing.md, paddingHorizontal: Spacing.xl, borderRadius: BorderRadius.full, marginTop: Spacing.sm },
  primaryBtnText: { color: Colors.white, fontSize: FontSize.md, fontWeight: FontWeight.bold },

  sheetOverlay: { ...StyleSheet.absoluteFillObject, justifyContent: 'flex-end' },
  sheetBackdrop: { ...StyleSheet.absoluteFillObject, backgroundColor: 'rgba(0,0,0,0.5)' },
  sheet: { backgroundColor: Colors.primary, borderTopLeftRadius: BorderRadius.xl, borderTopRightRadius: BorderRadius.xl, padding: Spacing.lg, gap: Spacing.sm },
  sheetTitle: { color: Colors.white, fontSize: FontSize.md, fontWeight: FontWeight.bold },
  sheetInput: { color: Colors.white, fontSize: FontSize.md, backgroundColor: 'rgba(0,0,0,0.2)', borderRadius: BorderRadius.md, padding: Spacing.md, minHeight: 100, textAlignVertical: 'top' },
  sheetCharCount: { color: 'rgba(255,255,255,0.4)', fontSize: FontSize.xs, alignSelf: 'flex-end' },
  sheetDateInput: { color: Colors.white, fontSize: FontSize.sm, backgroundColor: 'rgba(0,0,0,0.2)', borderRadius: BorderRadius.md, padding: Spacing.md },
  sheetButtons: { flexDirection: 'row', gap: Spacing.sm, marginTop: Spacing.xs },
  sheetCancelBtn: { flex: 1, padding: Spacing.md, alignItems: 'center', borderRadius: BorderRadius.md, backgroundColor: 'rgba(255,255,255,0.08)' },
  sheetCancelText: { color: 'rgba(255,255,255,0.7)', fontWeight: FontWeight.semibold },
  sheetPostBtn: { flex: 1, padding: Spacing.md, alignItems: 'center', borderRadius: BorderRadius.md, backgroundColor: Colors.xp },
  sheetPostBtnDisabled: { opacity: 0.4 },
  sheetPostText: { color: Colors.white, fontWeight: FontWeight.bold },
});

/**
 * Post detail screen — full post body + comment thread + add-comment field.
 * Routed from a feed-card tap. Comments are flat (no threading) for v1.
 */

import { useEffect, useState, useCallback } from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable, TextInput, ActivityIndicator, KeyboardAvoidingView, Platform, Alert, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router, useLocalSearchParams } from 'expo-router';

import { useAuth } from '../../../lib/AuthContext';
import { useSettings } from '../../../lib/SettingsContext';
import { supabase } from '../../../lib/supabase';
import { postImageUrl } from '../../../lib/post-images';
import { translatePost, isSupportedTarget } from '../../../lib/post-translate';
import { Colors } from '../../../constants/colors';
import { Spacing, FontSize, FontWeight, BorderRadius } from '../../../constants/theme';
import {
  getComments,
  addComment,
  likePost,
  unlikePost,
  type PostComment,
  type FeedPost,
} from '../../../lib/travel-connections';

export default function PostDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { user } = useAuth();
  const { speaker } = useSettings();

  const [post, setPost] = useState<FeedPost | null>(null);
  const [comments, setComments] = useState<PostComment[]>([]);
  const [loading, setLoading] = useState(true);
  const [draft, setDraft] = useState('');
  const [posting, setPosting] = useState(false);
  const [translatedBody, setTranslatedBody] = useState<string | null>(null);
  const [translating, setTranslating] = useState(false);
  const [translationError, setTranslationError] = useState<string | null>(null);

  const load = useCallback(async () => {
    if (!id) return;
    setLoading(true);
    try {
      // Pull the post + author + likes/comments in parallel.
      const [postResult, comments] = await Promise.all([
        supabase.from('traveller_posts').select('*').eq('id', id).maybeSingle(),
        getComments(id),
      ]);
      const p = postResult.data;
      if (!p) { setPost(null); return; }

      // Hydrate author + counts.
      const [authorResult, likesResult, viewerLikeResult] = await Promise.all([
        supabase.from('traveller_profiles').select('display_name, handle, photo_url, age, gender, current_country_code, is_public')
          .eq('user_id', p.author_id).maybeSingle(),
        supabase.from('traveller_post_likes').select('user_id', { count: 'exact', head: true }).eq('post_id', id),
        user
          ? supabase.from('traveller_post_likes').select('post_id').eq('post_id', id).eq('user_id', user.id).maybeSingle()
          : Promise.resolve({ data: null }),
      ]);
      const a = authorResult.data;
      setPost({
        ...p,
        author: a?.is_public
          ? { display_name: a.display_name, handle: a.handle, photo_url: a.photo_url, age: a.age, gender: a.gender, current_country_code: a.current_country_code }
          : undefined,
        likeCount: likesResult.count ?? 0,
        commentCount: comments.length,
        likedByMe: !!viewerLikeResult.data,
        followedByMe: false,
      });
      setComments(comments);
    } finally {
      setLoading(false);
    }
  }, [id, user]);

  useEffect(() => { load(); }, [load]);

  const submit = async () => {
    if (!user || !draft.trim() || !id) return;
    setPosting(true);
    try {
      await addComment(id, user.id, draft.trim());
      setDraft('');
      await load();
    } catch (e) {
      Alert.alert('Could not post', e instanceof Error ? e.message : 'Try again later.');
    } finally {
      setPosting(false);
    }
  };

  const toggleLike = async () => {
    if (!user || !post) return;
    setPost({ ...post, likedByMe: !post.likedByMe, likeCount: post.likeCount + (post.likedByMe ? -1 : 1) });
    try {
      if (post.likedByMe) await unlikePost(post.id, user.id);
      else await likePost(post.id, user.id);
    } catch {
      load();
    }
  };

  const handleTranslate = async () => {
    if (!post) return;
    if (translatedBody) { setTranslatedBody(null); return; } // toggle back to original
    setTranslating(true);
    setTranslationError(null);
    try {
      const result = await translatePost({ postId: post.id, text: post.body, targetLang: speaker.isoCode });
      setTranslatedBody(result.translated);
    } catch (e) {
      setTranslationError(e instanceof Error ? e.message : 'Translation unavailable');
    } finally {
      setTranslating(false);
    }
  };

  const canTranslate = !!post && isSupportedTarget(speaker.isoCode);

  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      <View style={styles.header}>
        <Pressable onPress={() => router.back()}><Text style={styles.back}>‹ Back</Text></Pressable>
        <Text style={styles.title}>Post</Text>
        <View style={{ width: 60 }} />
      </View>

      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined} style={{ flex: 1 }}>
        {loading ? (
          <View style={styles.center}><ActivityIndicator color={Colors.white} /></View>
        ) : !post ? (
          <View style={styles.center}>
            <Text style={styles.body}>Post not found</Text>
          </View>
        ) : (
          <ScrollView contentContainerStyle={{ paddingBottom: Spacing.lg }}>
            <View style={styles.postCard}>
              <Pressable
                style={styles.postHeader}
                onPress={post.author?.handle ? () => router.push({ pathname: '/travel/profile/[handle]' as any, params: { handle: post.author!.handle! } }) : undefined}
              >
                <View style={styles.avatar}>
                  <Text style={styles.avatarText}>{(post.author?.display_name ?? '?').slice(0, 1).toUpperCase()}</Text>
                </View>
                <View style={{ flex: 1 }}>
                  <Text style={styles.postAuthor}>{post.author?.display_name ?? 'Someone'}</Text>
                  <Text style={styles.postMeta}>
                    {post.author?.handle ? `@${post.author.handle}` : ''}
                    {post.travel_dates ? ` · ${post.travel_dates}` : ''}
                  </Text>
                </View>
              </Pressable>
              <Text style={styles.postBody}>{translatedBody ?? post.body}</Text>
              {canTranslate && (
                <Pressable style={styles.translateBtn} onPress={handleTranslate} disabled={translating}>
                  <Text style={styles.translateBtnText}>
                    {translating ? 'Translating…'
                      : translationError ? `⚠ ${translationError.slice(0, 40)}`
                      : translatedBody ? 'Show original'
                      : `Translate to ${speaker.isoCode.toUpperCase()}`}
                  </Text>
                </Pressable>
              )}
              {post.image_path && (
                <Image
                  source={{ uri: postImageUrl(post.image_path) }}
                  style={styles.postImage}
                  accessibilityLabel={post.image_alt ?? undefined}
                />
              )}
              <View style={styles.actions}>
                <Pressable style={styles.actionBtn} onPress={toggleLike}>
                  <Text style={[styles.actionIcon, post.likedByMe && styles.actionIconActive]}>{post.likedByMe ? '♥' : '♡'}</Text>
                  <Text style={styles.actionCount}>{post.likeCount}</Text>
                </Pressable>
                <View style={styles.actionBtn}>
                  <Text style={styles.actionIcon}>💬</Text>
                  <Text style={styles.actionCount}>{post.commentCount}</Text>
                </View>
              </View>
            </View>

            <Text style={styles.commentsHeader}>{comments.length} {comments.length === 1 ? 'comment' : 'comments'}</Text>
            {comments.map(c => (
              <View key={c.id} style={styles.commentCard}>
                <View style={styles.commentAvatar}>
                  <Text style={styles.commentAvatarText}>{(c.author?.display_name ?? '?').slice(0, 1).toUpperCase()}</Text>
                </View>
                <View style={{ flex: 1 }}>
                  <Text style={styles.commentAuthor}>
                    {c.author?.display_name ?? 'Someone'}
                    {c.author?.handle ? ` · @${c.author.handle}` : ''}
                  </Text>
                  <Text style={styles.commentBody}>{c.body}</Text>
                </View>
              </View>
            ))}
          </ScrollView>
        )}

        <View style={styles.composer}>
          <TextInput
            style={styles.composerInput}
            placeholder="Add a comment…"
            placeholderTextColor="rgba(255,255,255,0.3)"
            value={draft}
            onChangeText={setDraft}
            maxLength={500}
            multiline
          />
          <Pressable
            style={[styles.composerBtn, (!draft.trim() || posting) && styles.composerBtnDisabled]}
            disabled={!draft.trim() || posting}
            onPress={submit}
          >
            <Text style={styles.composerBtnText}>{posting ? '…' : 'Post'}</Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: Colors.primary },
  header: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: Spacing.md, paddingVertical: Spacing.sm },
  back: { color: Colors.white, fontSize: FontSize.md, fontWeight: FontWeight.semibold, paddingVertical: Spacing.xs },
  title: { color: Colors.white, fontSize: FontSize.lg, fontWeight: FontWeight.bold },
  body: { color: Colors.white, fontSize: FontSize.md },
  center: { flex: 1, alignItems: 'center', justifyContent: 'center' },

  postCard: { marginHorizontal: Spacing.md, marginBottom: Spacing.md, padding: Spacing.md, backgroundColor: 'rgba(255,255,255,0.06)', borderRadius: BorderRadius.lg, gap: Spacing.sm },
  postHeader: { flexDirection: 'row', alignItems: 'center', gap: Spacing.sm },
  avatar: { width: 40, height: 40, borderRadius: 20, backgroundColor: Colors.xp, alignItems: 'center', justifyContent: 'center' },
  avatarText: { color: Colors.white, fontSize: FontSize.md, fontWeight: FontWeight.bold },
  postAuthor: { color: Colors.white, fontSize: FontSize.md, fontWeight: FontWeight.bold },
  postMeta: { color: 'rgba(255,255,255,0.55)', fontSize: FontSize.xs, marginTop: 2 },
  postBody: { color: Colors.white, fontSize: FontSize.md, lineHeight: 22 },
  postImage: { width: '100%', aspectRatio: 4/3, borderRadius: BorderRadius.md, backgroundColor: 'rgba(0,0,0,0.2)', marginTop: Spacing.xs },
  translateBtn: { alignSelf: 'flex-start', paddingHorizontal: Spacing.sm, paddingVertical: 4, borderRadius: BorderRadius.full, backgroundColor: 'rgba(255,255,255,0.08)' },
  translateBtnText: { color: 'rgba(255,255,255,0.75)', fontSize: FontSize.xs, fontWeight: FontWeight.semibold },

  actions: { flexDirection: 'row', gap: Spacing.lg, paddingTop: Spacing.sm, borderTopWidth: 1, borderTopColor: 'rgba(255,255,255,0.06)' },
  actionBtn: { flexDirection: 'row', alignItems: 'center', gap: 4 },
  actionIcon: { color: 'rgba(255,255,255,0.7)', fontSize: FontSize.lg },
  actionIconActive: { color: '#FF5A7A' },
  actionCount: { color: 'rgba(255,255,255,0.7)', fontSize: FontSize.sm, fontWeight: FontWeight.semibold },

  commentsHeader: { color: 'rgba(255,255,255,0.7)', fontSize: FontSize.sm, fontWeight: FontWeight.bold, paddingHorizontal: Spacing.md, marginBottom: Spacing.sm },
  commentCard: { flexDirection: 'row', gap: Spacing.sm, paddingHorizontal: Spacing.md, marginBottom: Spacing.sm },
  commentAvatar: { width: 28, height: 28, borderRadius: 14, backgroundColor: 'rgba(255,255,255,0.1)', alignItems: 'center', justifyContent: 'center' },
  commentAvatarText: { color: Colors.white, fontSize: FontSize.xs, fontWeight: FontWeight.bold },
  commentAuthor: { color: Colors.white, fontSize: FontSize.xs, fontWeight: FontWeight.bold },
  commentBody: { color: 'rgba(255,255,255,0.9)', fontSize: FontSize.sm, lineHeight: 18, marginTop: 2 },

  composer: { flexDirection: 'row', alignItems: 'flex-end', gap: Spacing.sm, padding: Spacing.md, borderTopWidth: 1, borderTopColor: 'rgba(255,255,255,0.06)' },
  composerInput: { flex: 1, color: Colors.white, fontSize: FontSize.sm, padding: Spacing.sm, backgroundColor: 'rgba(0,0,0,0.25)', borderRadius: BorderRadius.md, maxHeight: 80 },
  composerBtn: { backgroundColor: Colors.xp, paddingHorizontal: Spacing.md, paddingVertical: Spacing.sm, borderRadius: BorderRadius.md },
  composerBtnDisabled: { opacity: 0.4 },
  composerBtnText: { color: Colors.white, fontWeight: FontWeight.bold, fontSize: FontSize.sm },
});

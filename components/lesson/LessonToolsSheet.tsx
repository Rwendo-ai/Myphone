import React, { useEffect, useMemo, useRef, useState } from 'react';
import {
  Modal,
  View,
  Text,
  StyleSheet,
  Pressable,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  ActivityIndicator,
  Alert,
} from 'react-native';
import { Colors } from '../../constants/colors';
import { Spacing, FontSize, FontWeight, BorderRadius } from '../../constants/theme';
import type { LessonData } from '../../types/lesson';
import {
  listDictionary,
  upsertDictionaryEntry,
  updateDictionaryEntry,
  deleteDictionaryEntry,
  type DictionaryEntry,
} from '../../lib/dictionary';
import { getLessonNote, saveLessonNote } from '../../lib/notes';
import { canUseAiFeature, type EntitlementContext } from '../../lib/entitlements';

type Tab = 'dictionary' | 'notes' | 'tutor';

interface Props {
  visible: boolean;
  onClose: () => void;
  userId: string;
  courseId: string;
  lesson: LessonData;
  entitlementContext: EntitlementContext;
}

export default function LessonToolsSheet({
  visible,
  onClose,
  userId,
  courseId,
  lesson,
  entitlementContext,
}: Props) {
  const [tab, setTab] = useState<Tab>('dictionary');

  return (
    <Modal visible={visible} transparent animationType="slide" onRequestClose={onClose}>
      <Pressable style={styles.backdrop} onPress={onClose}>
        <Pressable style={styles.sheet} onPress={(e) => e.stopPropagation()}>
          <View style={styles.handle} />
          <View style={styles.tabBar}>
            <TabButton label="Dictionary" active={tab === 'dictionary'} onPress={() => setTab('dictionary')} />
            <TabButton label="Notes" active={tab === 'notes'} onPress={() => setTab('notes')} />
            <TabButton label="Tutor" active={tab === 'tutor'} onPress={() => setTab('tutor')} />
          </View>

          <View style={styles.body}>
            {tab === 'dictionary' && (
              <DictionaryTab userId={userId} courseId={courseId} lesson={lesson} />
            )}
            {tab === 'notes' && (
              <NotesTab userId={userId} courseId={courseId} lessonId={lesson.id} />
            )}
            {tab === 'tutor' && (
              <TutorTab entitlementContext={entitlementContext} lesson={lesson} />
            )}
          </View>
        </Pressable>
      </Pressable>
    </Modal>
  );
}

function TabButton({ label, active, onPress }: { label: string; active: boolean; onPress: () => void }) {
  return (
    <Pressable style={[styles.tabBtn, active && styles.tabBtnActive]} onPress={onPress}>
      <Text style={[styles.tabBtnText, active && styles.tabBtnTextActive]}>{label}</Text>
    </Pressable>
  );
}

// ── Dictionary ──────────────────────────────────────────────────────────────

function DictionaryTab({
  userId,
  courseId,
  lesson,
}: {
  userId: string;
  courseId: string;
  lesson: LessonData;
}) {
  const [entries, setEntries] = useState<DictionaryEntry[]>([]);
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState<DictionaryEntry | null>(null);
  const [adding, setAdding] = useState<{ target_word: string } | null>(null);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    listDictionary(userId, courseId).then((rows) => {
      if (!cancelled) {
        setEntries(rows);
        setLoading(false);
      }
    });
    return () => {
      cancelled = true;
    };
  }, [userId, courseId]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return entries;
    return entries.filter(
      (e) =>
        e.target_word.toLowerCase().includes(q) ||
        e.native_word.toLowerCase().includes(q),
    );
  }, [entries, query]);

  const exactMatch = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return true;
    return entries.some(
      (e) =>
        e.target_word.toLowerCase() === q || e.native_word.toLowerCase() === q,
    );
  }, [entries, query]);

  const reload = async () => {
    const rows = await listDictionary(userId, courseId);
    setEntries(rows);
  };

  const handleAddSubmit = async (entry: { target_word: string; native_word: string; literal: string; notes: string }) => {
    if (!entry.target_word.trim() || !entry.native_word.trim()) return;
    const result = await upsertDictionaryEntry(userId, courseId, {
      target_word: entry.target_word,
      native_word: entry.native_word,
      literal: entry.literal,
      notes: entry.notes,
      source: 'manual',
    });
    if (result) {
      setAdding(null);
      setQuery('');
      await reload();
    }
  };

  const handleEditSubmit = async (entryId: string, patch: { target_word: string; native_word: string; literal: string; notes: string }) => {
    const result = await updateDictionaryEntry(entryId, patch);
    if (result) {
      setEditing(null);
      await reload();
    }
  };

  const handleDelete = (entry: DictionaryEntry) => {
    Alert.alert('Remove word', `Delete "${entry.target_word}" from your dictionary?`, [
      { text: 'Cancel', style: 'cancel' },
      {
        text: 'Delete',
        style: 'destructive',
        onPress: async () => {
          const ok = await deleteDictionaryEntry(entry.id);
          if (ok) await reload();
        },
      },
    ]);
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <View style={styles.searchRow}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search or add a word…"
          placeholderTextColor={Colors.gray[400]}
          value={query}
          onChangeText={setQuery}
          autoCorrect={false}
          autoCapitalize="none"
        />
      </View>

      {loading ? (
        <ActivityIndicator style={{ marginTop: Spacing.lg }} />
      ) : (
        <ScrollView style={{ flex: 1 }} keyboardShouldPersistTaps="handled">
          {!exactMatch && query.trim().length > 0 && (
            <Pressable
              style={styles.addCta}
              onPress={() => setAdding({ target_word: query.trim() })}
            >
              <Text style={styles.addCtaText}>+ Add "{query.trim()}"</Text>
              <Text style={styles.addCtaSub}>Not in your dictionary yet — tap to add</Text>
            </Pressable>
          )}

          {filtered.length === 0 && exactMatch && entries.length === 0 && (
            <Text style={styles.empty}>
              Your dictionary is empty. Words from lessons you complete will appear here.
            </Text>
          )}

          {filtered.map((entry) => (
            <Pressable
              key={entry.id}
              style={styles.entry}
              onPress={() => setEditing(entry)}
              onLongPress={() => handleDelete(entry)}
            >
              <View style={{ flex: 1 }}>
                <Text style={styles.entryTarget}>{entry.target_word}</Text>
                <Text style={styles.entryNative}>{entry.native_word}</Text>
                {entry.literal && <Text style={styles.entryLiteral}>{entry.literal}</Text>}
              </View>
              <Text style={styles.entryBadge}>
                {entry.source === 'lesson' ? '📘' : entry.source === 'ai' ? '🤖' : '✏️'}
              </Text>
            </Pressable>
          ))}
        </ScrollView>
      )}

      {adding && (
        <EntryFormModal
          title="Add word"
          initial={{ target_word: adding.target_word, native_word: '', literal: '', notes: '' }}
          targetLanguage={lesson.title.split('—')[0]?.trim() ?? 'Target'}
          onSubmit={handleAddSubmit}
          onCancel={() => setAdding(null)}
        />
      )}

      {editing && (
        <EntryFormModal
          title="Edit word"
          initial={{
            target_word: editing.target_word,
            native_word: editing.native_word,
            literal: editing.literal ?? '',
            notes: editing.notes ?? '',
          }}
          targetLanguage={lesson.title.split('—')[0]?.trim() ?? 'Target'}
          onSubmit={(v) => handleEditSubmit(editing.id, v)}
          onCancel={() => setEditing(null)}
        />
      )}
    </KeyboardAvoidingView>
  );
}

function EntryFormModal({
  title,
  initial,
  targetLanguage,
  onSubmit,
  onCancel,
}: {
  title: string;
  initial: { target_word: string; native_word: string; literal: string; notes: string };
  targetLanguage: string;
  onSubmit: (v: { target_word: string; native_word: string; literal: string; notes: string }) => void;
  onCancel: () => void;
}) {
  const [target, setTarget] = useState(initial.target_word);
  const [native, setNative] = useState(initial.native_word);
  const [literal, setLiteral] = useState(initial.literal);
  const [notes, setNotes] = useState(initial.notes);

  return (
    <Modal visible transparent animationType="fade" onRequestClose={onCancel}>
      <View style={styles.formBackdrop}>
        <View style={styles.formCard}>
          <Text style={styles.formTitle}>{title}</Text>

          <Text style={styles.formLabel}>Target word</Text>
          <TextInput
            style={styles.formInput}
            value={target}
            onChangeText={setTarget}
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="e.g. Mangwanani"
            placeholderTextColor={Colors.gray[400]}
          />

          <Text style={styles.formLabel}>Meaning (your language)</Text>
          <TextInput
            style={styles.formInput}
            value={native}
            onChangeText={setNative}
            placeholder="e.g. Good morning"
            placeholderTextColor={Colors.gray[400]}
          />

          <Text style={styles.formLabel}>Literal (optional)</Text>
          <TextInput
            style={styles.formInput}
            value={literal}
            onChangeText={setLiteral}
            placeholder="Word-for-word breakdown"
            placeholderTextColor={Colors.gray[400]}
          />

          <Text style={styles.formLabel}>Notes (optional)</Text>
          <TextInput
            style={[styles.formInput, { minHeight: 60 }]}
            value={notes}
            onChangeText={setNotes}
            multiline
            placeholder="Anything you want to remember"
            placeholderTextColor={Colors.gray[400]}
          />

          <View style={styles.formButtons}>
            <Pressable style={[styles.formBtn, styles.formBtnGhost]} onPress={onCancel}>
              <Text style={styles.formBtnGhostText}>Cancel</Text>
            </Pressable>
            <Pressable
              style={[styles.formBtn, styles.formBtnPrimary]}
              onPress={() => onSubmit({ target_word: target, native_word: native, literal, notes })}
            >
              <Text style={styles.formBtnPrimaryText}>Save</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
}

// ── Notes ───────────────────────────────────────────────────────────────────

function NotesTab({
  userId,
  courseId,
  lessonId,
}: {
  userId: string;
  courseId: string;
  lessonId: string;
}) {
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(true);
  const [savingState, setSavingState] = useState<'idle' | 'saving' | 'saved'>('idle');
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    getLessonNote(userId, courseId, lessonId).then((c) => {
      if (!cancelled) {
        setContent(c);
        setLoading(false);
      }
    });
    return () => {
      cancelled = true;
    };
  }, [userId, courseId, lessonId]);

  const onChange = (next: string) => {
    setContent(next);
    setSavingState('saving');
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(async () => {
      const ok = await saveLessonNote(userId, courseId, lessonId, next);
      setSavingState(ok ? 'saved' : 'idle');
    }, 800);
  };

  if (loading) return <ActivityIndicator style={{ marginTop: Spacing.lg }} />;

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <View style={styles.notesHeader}>
        <Text style={styles.notesHint}>Notes for this lesson — auto-saved</Text>
        <Text style={styles.notesStatus}>
          {savingState === 'saving' ? 'Saving…' : savingState === 'saved' ? 'Saved ✓' : ''}
        </Text>
      </View>
      <TextInput
        style={styles.notesArea}
        value={content}
        onChangeText={onChange}
        multiline
        textAlignVertical="top"
        placeholder="Anything you want to remember about this lesson…"
        placeholderTextColor={Colors.gray[400]}
      />
    </KeyboardAvoidingView>
  );
}

// ── Tutor (AI) ──────────────────────────────────────────────────────────────

function TutorTab({
  entitlementContext,
  lesson,
}: {
  entitlementContext: EntitlementContext;
  lesson: LessonData;
}) {
  const aiAccess = canUseAiFeature('text', entitlementContext);

  if (!aiAccess.allowed) {
    return (
      <View style={styles.lockedWrap}>
        <Text style={styles.lockedEmoji}>🔒</Text>
        <Text style={styles.lockedTitle}>AI tutor</Text>
        <Text style={styles.lockedBody}>
          Ask Rwen anything about this lesson. Available with the AI plan.
        </Text>
        <Text style={styles.lockedHint}>Upgrade in Profile → Plans</Text>
      </View>
    );
  }

  // Tier OK. Render the placeholder AI chat scaffold.
  // Full Claude wiring lands when the AI integration is fixed — see STATUS-2026-05-01.md.
  return <TutorChatScaffold lesson={lesson} />;
}

function TutorChatScaffold({ lesson }: { lesson: LessonData }) {
  const [messages, setMessages] = useState<{ role: 'user' | 'rwen'; text: string }[]>([
    {
      role: 'rwen',
      text: `Hi — I can help you with "${lesson.title}". Ask me anything about the chunks, the pattern, or how to use them.`,
    },
  ]);
  const [draft, setDraft] = useState('');
  const [thinking, setThinking] = useState(false);

  const send = () => {
    const text = draft.trim();
    if (!text) return;
    setMessages((prev) => [...prev, { role: 'user', text }]);
    setDraft('');
    setThinking(true);
    // TODO: wire to lib/claude.ts — currently the AI integration is being repaired.
    // Once fixed, replace this placeholder reply with the streamed Claude response.
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          role: 'rwen',
          text: "I'm being repaired right now — the AI tutor will be back online once the team finishes fixing the chat. Your question is held in this conversation, and will go away when you close the sheet.",
        },
      ]);
      setThinking(false);
    }, 600);
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView style={{ flex: 1 }} contentContainerStyle={{ paddingVertical: Spacing.sm }}>
        {messages.map((m, i) => (
          <View
            key={i}
            style={[
              styles.bubble,
              m.role === 'user' ? styles.bubbleUser : styles.bubbleRwen,
            ]}
          >
            <Text style={[styles.bubbleText, m.role === 'user' && styles.bubbleTextUser]}>
              {m.text}
            </Text>
          </View>
        ))}
        {thinking && <Text style={styles.thinking}>Rwen is thinking…</Text>}
      </ScrollView>
      <View style={styles.composer}>
        <TextInput
          style={styles.composerInput}
          value={draft}
          onChangeText={setDraft}
          placeholder="Ask about this lesson…"
          placeholderTextColor={Colors.gray[400]}
          onSubmitEditing={send}
          returnKeyType="send"
        />
        <Pressable style={styles.composerSend} onPress={send}>
          <Text style={styles.composerSendText}>Send</Text>
        </Pressable>
      </View>
      <Text style={styles.ephemeralHint}>
        This chat is private — nothing is saved once you close the Tools sheet.
      </Text>
    </KeyboardAvoidingView>
  );
}

// ── Styles ──────────────────────────────────────────────────────────────────

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    backgroundColor: 'rgba(15, 23, 42, 0.55)',
    justifyContent: 'flex-end',
  },
  sheet: {
    backgroundColor: Colors.white,
    borderTopLeftRadius: BorderRadius.xl,
    borderTopRightRadius: BorderRadius.xl,
    height: '82%',
    paddingHorizontal: Spacing.md,
    paddingBottom: Spacing.lg,
  },
  handle: {
    alignSelf: 'center',
    width: 44,
    height: 5,
    borderRadius: 999,
    backgroundColor: Colors.gray[300],
    marginTop: Spacing.sm,
    marginBottom: Spacing.md,
  },
  tabBar: {
    flexDirection: 'row',
    backgroundColor: Colors.gray[100],
    borderRadius: BorderRadius.md,
    padding: 4,
    marginBottom: Spacing.md,
  },
  tabBtn: {
    flex: 1,
    paddingVertical: Spacing.sm,
    borderRadius: BorderRadius.sm,
    alignItems: 'center',
  },
  tabBtnActive: {
    backgroundColor: Colors.white,
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 2,
    elevation: 1,
  },
  tabBtnText: {
    fontSize: FontSize.sm,
    fontWeight: FontWeight.medium,
    color: Colors.gray[600],
  },
  tabBtnTextActive: {
    color: Colors.primary,
  },
  body: {
    flex: 1,
  },

  // Dictionary
  searchRow: {
    marginBottom: Spacing.sm,
  },
  searchInput: {
    backgroundColor: Colors.gray[100],
    borderRadius: BorderRadius.md,
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.sm,
    fontSize: FontSize.md,
    color: Colors.gray[900],
  },
  addCta: {
    padding: Spacing.md,
    backgroundColor: Colors.gray[50],
    borderRadius: BorderRadius.md,
    borderWidth: 1,
    borderColor: Colors.secondary,
    borderStyle: 'dashed',
    marginBottom: Spacing.sm,
  },
  addCtaText: {
    fontSize: FontSize.md,
    fontWeight: FontWeight.medium,
    color: Colors.secondary,
  },
  addCtaSub: {
    fontSize: FontSize.xs,
    color: Colors.gray[600],
    marginTop: 2,
  },
  empty: {
    textAlign: 'center',
    color: Colors.gray[500],
    fontSize: FontSize.sm,
    marginTop: Spacing.lg,
    paddingHorizontal: Spacing.lg,
  },
  entry: {
    flexDirection: 'row',
    paddingVertical: Spacing.sm,
    paddingHorizontal: Spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: Colors.gray[100],
    alignItems: 'center',
  },
  entryTarget: {
    fontSize: FontSize.md,
    fontWeight: FontWeight.medium,
    color: Colors.gray[900],
  },
  entryNative: {
    fontSize: FontSize.sm,
    color: Colors.gray[700],
    marginTop: 2,
  },
  entryLiteral: {
    fontSize: FontSize.xs,
    color: Colors.gray[500],
    fontStyle: 'italic',
    marginTop: 2,
  },
  entryBadge: {
    fontSize: FontSize.md,
    marginLeft: Spacing.sm,
  },

  // Form modal
  formBackdrop: {
    flex: 1,
    backgroundColor: 'rgba(15, 23, 42, 0.55)',
    justifyContent: 'center',
    paddingHorizontal: Spacing.lg,
  },
  formCard: {
    backgroundColor: Colors.white,
    borderRadius: BorderRadius.lg,
    padding: Spacing.lg,
  },
  formTitle: {
    fontSize: FontSize.lg,
    fontWeight: FontWeight.bold,
    color: Colors.gray[900],
    marginBottom: Spacing.md,
  },
  formLabel: {
    fontSize: FontSize.xs,
    color: Colors.gray[600],
    marginTop: Spacing.sm,
    marginBottom: 4,
  },
  formInput: {
    borderWidth: 1,
    borderColor: Colors.gray[200],
    borderRadius: BorderRadius.sm,
    paddingHorizontal: Spacing.sm,
    paddingVertical: 8,
    fontSize: FontSize.md,
    color: Colors.gray[900],
  },
  formButtons: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: Spacing.md,
    gap: Spacing.sm,
  },
  formBtn: {
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.sm,
    borderRadius: BorderRadius.sm,
  },
  formBtnGhost: {
    backgroundColor: 'transparent',
  },
  formBtnGhostText: {
    color: Colors.gray[600],
    fontWeight: FontWeight.medium,
  },
  formBtnPrimary: {
    backgroundColor: Colors.primary,
  },
  formBtnPrimaryText: {
    color: Colors.white,
    fontWeight: FontWeight.bold,
  },

  // Notes
  notesHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: Spacing.sm,
  },
  notesHint: {
    fontSize: FontSize.xs,
    color: Colors.gray[500],
  },
  notesStatus: {
    fontSize: FontSize.xs,
    color: Colors.gray[500],
  },
  notesArea: {
    flex: 1,
    backgroundColor: Colors.gray[50],
    borderRadius: BorderRadius.md,
    padding: Spacing.md,
    fontSize: FontSize.md,
    color: Colors.gray[900],
  },

  // Tutor
  lockedWrap: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: Spacing.lg,
  },
  lockedEmoji: {
    fontSize: 48,
    marginBottom: Spacing.md,
  },
  lockedTitle: {
    fontSize: FontSize.xl,
    fontWeight: FontWeight.bold,
    color: Colors.gray[900],
    marginBottom: Spacing.sm,
  },
  lockedBody: {
    fontSize: FontSize.md,
    color: Colors.gray[600],
    textAlign: 'center',
    marginBottom: Spacing.md,
  },
  lockedHint: {
    fontSize: FontSize.sm,
    color: Colors.secondary,
    fontWeight: FontWeight.medium,
  },
  bubble: {
    maxWidth: '85%',
    paddingVertical: Spacing.sm,
    paddingHorizontal: Spacing.md,
    borderRadius: BorderRadius.lg,
    marginBottom: Spacing.sm,
  },
  bubbleUser: {
    alignSelf: 'flex-end',
    backgroundColor: Colors.primary,
  },
  bubbleRwen: {
    alignSelf: 'flex-start',
    backgroundColor: Colors.gray[100],
  },
  bubbleText: {
    fontSize: FontSize.md,
    color: Colors.gray[900],
  },
  bubbleTextUser: {
    color: Colors.white,
  },
  thinking: {
    fontSize: FontSize.sm,
    color: Colors.gray[500],
    fontStyle: 'italic',
    marginLeft: Spacing.md,
    marginBottom: Spacing.sm,
  },
  composer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.sm,
    paddingTop: Spacing.sm,
    borderTopWidth: 1,
    borderTopColor: Colors.gray[100],
  },
  composerInput: {
    flex: 1,
    backgroundColor: Colors.gray[100],
    borderRadius: BorderRadius.md,
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.sm,
    fontSize: FontSize.md,
    color: Colors.gray[900],
  },
  composerSend: {
    backgroundColor: Colors.primary,
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.sm,
    borderRadius: BorderRadius.md,
  },
  composerSendText: {
    color: Colors.white,
    fontWeight: FontWeight.bold,
  },
  ephemeralHint: {
    textAlign: 'center',
    fontSize: FontSize.xs,
    color: Colors.gray[500],
    marginTop: Spacing.sm,
  },
});

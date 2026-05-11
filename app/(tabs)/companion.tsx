import { View, Text, StyleSheet, TextInput, Pressable, ScrollView, KeyboardAvoidingView, Platform, ActivityIndicator, Alert, Animated, Easing } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState, useRef, useEffect, useCallback } from 'react';
import { useLocalSearchParams } from 'expo-router';
import { useTranslation } from 'react-i18next';
import RwenImage from '../../components/rwen/RwenImage';
import ScreenHeaderBar from '../../components/ScreenHeaderBar';
import { useAuth } from '../../lib/AuthContext';
import { useSettings } from '../../lib/SettingsContext';
import { useProgress } from '../../hooks/useProgress';
import { sendMessage, loadConversationHistory, ChatMessage } from '../../lib/claude';
import { buildCompanionGreeting } from '../../lib/companion-prompts';
import { resolvePreset } from '../../lib/active-companion';
import { speakText, stopSpeaking, startRecording, stopRecordingAndTranscribe, isCurrentlyRecording } from '../../lib/voice';
import { useConvAISession } from '../../hooks/useConvAISession';
import { useIntroBubble } from '../../lib/intro-bubbles';
import IntroBubble from '../../components/IntroBubble';
import { Colors } from '../../constants/colors';
import { Spacing, FontSize, FontWeight, BorderRadius } from '../../constants/theme';

interface DisplayMessage {
  id: string;
  role: 'user' | 'rwen';
  text: string;
}

type ConvoMode = 'text' | 'voice_push' | 'voice_auto';
type RwenState = 'idle' | 'thinking' | 'waving' | 'victory' | 'wrong' | 'arms_spread';

export default function CompanionScreen() {
  const { t } = useTranslation('rwen');
  const { t: tCommon } = useTranslation('common');
  // Phase F: lesson-context query param. When the user lands here from a
  // lesson-completion Phase 8 card, this carries the lesson topic so the
  // Claude system prompt can be primed with it.
  const { lessonContext } = useLocalSearchParams<{ lessonContext?: string }>();
  const { user } = useAuth();
  const { learnedLanguage, rwenVoice, theme, speaker, activeCompanionPresetId } = useSettings();
  const { username } = useProgress();

  const [messages,      setMessages]      = useState<DisplayMessage[]>([]);
  const [input,         setInput]         = useState('');
  const [loading,       setLoading]       = useState(false);
  const [historyLoaded, setHistoryLoaded] = useState(false);
  const [rwenState,     setRwenState]     = useState<RwenState>('waving');
  const [mode,          setMode]          = useState<ConvoMode>('text');
  const [isRecording,   setIsRecording]   = useState(false);
  const [isListening,   setIsListening]   = useState(false); // auto-listen mode
  const [convoActive,   setConvoActive]   = useState(false); // continuous convo on

  const scrollRef    = useRef<ScrollView>(null);
  const historyRef   = useRef<ChatMessage[]>([]);
  const autoLoopRef  = useRef(false); // controls the auto-convo loop
  const silenceTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // ─── Live voice (ElevenAgents Conv AI) ────────────────────────────────────
  // The hook handles native audio + WebSocket + persistence (single save path
  // through lib/conversation-memory.ts). We feed transcripts directly into
  // the same `messages` list as text chat so the user sees one timeline.
  const liveVoice = useConvAISession({
    onUserTranscript: (text) => {
      const msg: DisplayMessage = { id: `lv-u-${Date.now()}-${Math.random()}`, role: 'user', text };
      setMessages((prev) => [...prev, msg]);
      historyRef.current = [...historyRef.current, { role: 'user', content: text }];
      setTimeout(() => scrollRef.current?.scrollToEnd({ animated: true }), 80);
    },
    onAgentResponse: (text) => {
      const msg: DisplayMessage = { id: `lv-r-${Date.now()}-${Math.random()}`, role: 'rwen', text };
      setMessages((prev) => [...prev, msg]);
      historyRef.current = [...historyRef.current, { role: 'assistant', content: text }];
      setTimeout(() => scrollRef.current?.scrollToEnd({ animated: true }), 80);
    },
  });

  // Small inline orb pulse — only animates while voice is active.
  const inlineOrbScale = useRef(new Animated.Value(1)).current;
  const inlineOrbAnimRef = useRef<Animated.CompositeAnimation | null>(null);
  useEffect(() => {
    if (liveVoice.state === 'active') {
      if (inlineOrbAnimRef.current) return;
      const anim = Animated.loop(
        Animated.sequence([
          Animated.timing(inlineOrbScale, { toValue: 1.18, duration: 700, easing: Easing.inOut(Easing.ease), useNativeDriver: true }),
          Animated.timing(inlineOrbScale, { toValue: 1,    duration: 700, easing: Easing.inOut(Easing.ease), useNativeDriver: true }),
        ]),
      );
      anim.start();
      inlineOrbAnimRef.current = anim;
    } else {
      inlineOrbAnimRef.current?.stop();
      inlineOrbAnimRef.current = null;
      Animated.timing(inlineOrbScale, { toValue: 1, duration: 200, useNativeDriver: true }).start();
    }
  }, [liveVoice.state, inlineOrbScale]);

  const liveVoiceActive = liveVoice.state !== 'idle';

  // Tapping the voice button toggles the inline session — no screen push.
  const toggleLiveVoice = useCallback(() => {
    if (liveVoiceActive) liveVoice.stop();
    else liveVoice.start();
  }, [liveVoiceActive, liveVoice]);

  // Load conversation history. If we arrived from a lesson Phase 8 card,
  // ALWAYS show a context-aware greeting that names the lesson — even if
  // there's existing chat history — so the user knows the AI is tracking
  // what they just finished.
  useEffect(() => {
    if (!user || historyLoaded) return;
    loadConversationHistory(user.id).then((history) => {
      historyRef.current = history;

      // Lesson-context arrival: build a fresh greeting that references the
      // lesson topic. The AI is also primed via system prompt's lessonContext
      // field; this greeting is the user-visible counterpart.
      if (lessonContext) {
        const preset = resolvePreset('tendai'); // Tendai is the lesson companion
        const greeting = buildCompanionGreeting(
          preset,
          speaker,
          username || tCommon('fallback_name'),
          lessonContext,
        );
        const baseMessages: DisplayMessage[] = history.map((m, i) => ({
          id: String(i),
          role: m.role === 'assistant' ? 'rwen' : 'user',
          text: m.content,
        }));
        const greetingMsg: DisplayMessage = {
          id: `lesson-greeting-${Date.now()}`,
          role: 'rwen',
          text: greeting,
        };
        // Push greeting AFTER any existing history so the user sees it as
        // the most recent message — i.e. "I just got here from a lesson".
        setMessages([...baseMessages, greetingMsg]);
        // Persist the greeting to history so the AI sees it on next turn.
        historyRef.current = [...history, { role: 'assistant', content: greeting }];
      } else if (history.length > 0) {
        setMessages(history.map((m, i) => ({
          id: String(i),
          role: m.role === 'assistant' ? 'rwen' : 'user',
          text: m.content,
        })));
      } else {
        setMessages([{ id: '0', role: 'rwen', text: t('messages.welcome', { name: username || tCommon('fallback_name') }) }]);
      }

      setHistoryLoaded(true);
      setRwenState('idle');
      setTimeout(() => scrollRef.current?.scrollToEnd({ animated: false }), 100);
    });
  }, [user, historyLoaded, username, lessonContext, speaker, t, tCommon]);

  // ─── Core: process a user message ────────────────────────────────────────

  const processMessage = useCallback(async (text: string) => {
    if (!user || !text.trim()) return;

    setLoading(true);
    setRwenState('thinking');

    const userMsg: DisplayMessage = { id: Date.now().toString(), role: 'user', text: text.trim() };
    setMessages(prev => [...prev, userMsg]);
    setTimeout(() => scrollRef.current?.scrollToEnd({ animated: true }), 100);

    try {
      const reply = await sendMessage(user.id, text.trim(), historyRef.current, speaker, learnedLanguage.name, lessonContext, activeCompanionPresetId);

      historyRef.current = [
        ...historyRef.current,
        { role: 'user',      content: text.trim() },
        { role: 'assistant', content: reply },
      ];

      const rwenMsg: DisplayMessage = { id: (Date.now() + 1).toString(), role: 'rwen', text: reply };
      setMessages(prev => [...prev, rwenMsg]);
      setRwenState('idle');
      setTimeout(() => scrollRef.current?.scrollToEnd({ animated: true }), 100);

      // Speak and then auto-listen if in auto mode
      if (mode !== 'text') {
        await speakText(reply, rwenVoice);
        if (autoLoopRef.current) {
          await startAutoListen();
        }
      }
    } catch (e) {
      setMessages(prev => [...prev, { id: (Date.now() + 1).toString(), role: 'rwen', text: t('messages.error_generic') }]);
      setRwenState('idle');
    } finally {
      setLoading(false);
    }
  }, [user, mode, rwenVoice, t]);

  // ─── Auto-listen: record until silence, then process ─────────────────────

  const startAutoListen = useCallback(async () => {
    if (!autoLoopRef.current) return;

    setIsListening(true);
    setRwenState('arms_spread');

    await startRecording();

    // Stop recording after 8 seconds max (user can also tap to stop early)
    silenceTimer.current = setTimeout(async () => {
      if (isCurrentlyRecording()) {
        await stopAutoListen();
      }
    }, 8000);
  }, []);

  const stopAutoListen = useCallback(async () => {
    if (silenceTimer.current) {
      clearTimeout(silenceTimer.current);
      silenceTimer.current = null;
    }
    setIsListening(false);
    setRwenState('thinking');

    const text = await stopRecordingAndTranscribe();
    if (text && text.trim() && autoLoopRef.current) {
      await processMessage(text);
    } else if (autoLoopRef.current) {
      // Nothing heard — listen again
      setRwenState('idle');
      setTimeout(startAutoListen, 1000);
    }
  }, [processMessage, startAutoListen]);

  // ─── Start / stop continuous conversation ─────────────────────────────────

  const startConversation = useCallback(async () => {
    autoLoopRef.current = true;
    setConvoActive(true);
    setMode('voice_auto');

    // Rwen greets
    const greeting = t('messages.auto_listen_greeting');
    await speakText(greeting, rwenVoice);
    await startAutoListen();
  }, [rwenVoice, startAutoListen, t]);

  const stopConversation = useCallback(async () => {
    autoLoopRef.current = false;
    setConvoActive(false);
    setIsListening(false);
    setMode('text');
    if (silenceTimer.current) clearTimeout(silenceTimer.current);
    await stopSpeaking();
  }, []);

  // ─── Text send ────────────────────────────────────────────────────────────

  const sendText = useCallback(async () => {
    if (!input.trim() || loading) return;
    const text = input.trim();
    setInput('');
    await processMessage(text);
  }, [input, loading, processMessage]);

  // ─── Push-to-talk ─────────────────────────────────────────────────────────

  const handleMicPressIn = useCallback(async () => {
    setMode('voice_push');
    setIsRecording(true);
    await startRecording();
  }, []);

  const handleMicPressOut = useCallback(async () => {
    setIsRecording(false);
    const text = await stopRecordingAndTranscribe();
    if (text) { setInput(text); }
    setMode('text');
  }, []);

  // First-run bubble — explains text vs voice modes.
  const companionIntro = useIntroBubble('companion.text_vs_voice');

  // ─── Render ───────────────────────────────────────────────────────────────

  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      {companionIntro.show && (
        <IntroBubble id="companion.text_vs_voice" onDismiss={companionIntro.markSeen} />
      )}
      <ScreenHeaderBar variant="light" />

      {/* Header */}
      <View style={[styles.header, { backgroundColor: theme.gradient[0] }]}>
        <RwenImage pose={rwenState as any} size={48} />
        <View style={styles.headerText}>
          <Text style={styles.headerTitle}>{t('header.title')}</Text>
          <Text style={styles.headerSub}>
            {convoActive && isListening ? t('header.status_listening') :
             convoActive && loading     ? t('header.status_thinking') :
             convoActive               ? t('header.status_speaking') :
             loading                   ? t('header.status_loading')    :
             t('header.status_idle', { lang: learnedLanguage.name })}
          </Text>
        </View>

        {/* Clear-the-current-window button — wipes only the on-screen messages.
            Saved history (DB) and the next session's memory are untouched. The
            "delete saved history" action lives in profile under Account. */}
        <Pressable
          style={styles.headerClearBtn}
          onPress={() => {
            Alert.alert(
              'Clear this view?',
              'This only hides the messages on screen — your saved history is untouched. Pull up the chat next time and the agent will still remember what you talked about. Use Profile → Clear conversation history to actually erase from memory.',
              [
                { text: 'Cancel', style: 'cancel' },
                {
                  text: 'Clear view',
                  onPress: () => {
                    setMessages([{
                      id: `cleared-${Date.now()}`,
                      role: 'rwen',
                      text: t('messages.welcome', { name: username || tCommon('fallback_name') }),
                    }]);
                    historyRef.current = [];
                  },
                },
              ],
            );
          }}
          hitSlop={6}
        >
          <Text style={styles.headerClearIcon}>⌫</Text>
        </Pressable>
      </View>

      <KeyboardAvoidingView
        style={styles.flex}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 24}
      >
        {/* Messages */}
        <ScrollView
          ref={scrollRef}
          style={styles.messages}
          contentContainerStyle={styles.messagesContent}
          showsVerticalScrollIndicator={false}
          onContentSizeChange={() => scrollRef.current?.scrollToEnd({ animated: true })}
        >
          {messages.map((msg) => (
            <View key={msg.id} style={[styles.bubble, msg.role === 'user' ? styles.userBubble : styles.rwenBubble]}>
              <Text style={[styles.bubbleText, msg.role === 'user' && styles.userBubbleText]}>
                {msg.text}
              </Text>
            </View>
          ))}
          {loading && (
            <View style={styles.rwenBubble}>
              <ActivityIndicator color={Colors.gray[400]} size="small" style={{ padding: Spacing.sm }} />
            </View>
          )}
        </ScrollView>

        {/* When live voice is active, the composer is replaced by an inline
            orb panel — tap orb to interrupt, tap × in the header to end. The
            voice transcripts already stream into `messages` via the hook
            handlers above, so the user sees one unified timeline. */}
        {liveVoiceActive ? (
          <View style={styles.composerRow}>
            <View style={styles.liveVoicePanel}>
              {/* Orb — left side. Tap while agent is speaking to interrupt. */}
              <Pressable
                onPress={() => liveVoice.agentSpeaking && liveVoice.interrupt()}
                hitSlop={10}
              >
                <Animated.View
                  style={[
                    styles.liveVoiceOrb,
                    {
                      transform: [{ scale: inlineOrbScale }],
                      backgroundColor:
                        liveVoice.state === 'connecting' ? Colors.gray[400] :
                        liveVoice.state === 'closing'    ? Colors.gray[400] :
                        liveVoice.agentSpeaking          ? Colors.xp :
                                                            Colors.success,
                      opacity: liveVoice.state === 'connecting' || liveVoice.state === 'closing' ? 0.7 : 1,
                    },
                  ]}
                >
                  {(liveVoice.state === 'connecting' || liveVoice.state === 'closing') && (
                    <ActivityIndicator color={Colors.white} size="small" />
                  )}
                </Animated.View>
              </Pressable>

              {/* Status — middle. Two short lines. */}
              <View style={styles.liveVoiceText}>
                <Text style={styles.liveVoiceTitle}>
                  {liveVoice.error                 ? 'Voice error' :
                   liveVoice.state === 'connecting' ? 'Connecting…' :
                   liveVoice.state === 'closing'    ? 'Ending…' :
                   liveVoice.agentSpeaking          ? 'Speaking' :
                                                      'Listening'}
                </Text>
                <Text style={styles.liveVoiceSub}>
                  {liveVoice.error
                    ? liveVoice.error
                    : liveVoice.agentSpeaking
                      ? 'Tap orb to interrupt'
                      : 'Just talk — your words appear in chat'}
                </Text>
              </View>

              {/* Hang-up — right side. Ends the session. */}
              <Pressable
                onPress={liveVoice.stop}
                style={styles.liveVoiceHangup}
                hitSlop={10}
              >
                <Text style={styles.liveVoiceHangupIcon}>✕</Text>
              </Pressable>
            </View>
          </View>
        ) : (
          /* Default composer:
                [+]   text input   [mic]  [send-or-voice]
              The right-most button shows a send arrow when there's text to
              send, or a voice-mode launcher when the input is empty. */
          <View style={styles.composerRow}>
            <View style={styles.composer}>
              <Pressable
                style={styles.composerLeftBtn}
                onPress={() => Alert.alert(
                  'More options',
                  'Attach a photo, share a memory, or upload a file. Coming with the next update.',
                  [{ text: 'OK' }],
                )}
                hitSlop={8}
              >
                <Text style={styles.composerLeftIcon}>＋</Text>
              </Pressable>

              <TextInput
                style={styles.composerInput}
                placeholder={convoActive ? t('input.placeholder_convo_active') : t('input.placeholder_default')}
                placeholderTextColor={Colors.gray[400]}
                value={input}
                onChangeText={setInput}
                multiline
                returnKeyType="send"
                onSubmitEditing={sendText}
                editable={!loading && !convoActive}
              />

              {/* Voice options are hidden when entering from a lesson Phase 8.
                  Lesson chat is text-only — STT language detection is fragile
                  for cross-language users (e.g. Tagalog speaker says
                  "Magandang Umaga Po", STT defaults to English, replies
                  about "thank you very much"). Voice stays available in the
                  open Companion tab where the user is actively engaging
                  voice mode. */}
              {!lessonContext && (
                <Pressable
                  style={[styles.composerMicBtn, isRecording && styles.composerMicBtnActive]}
                  onPressIn={handleMicPressIn}
                  onPressOut={handleMicPressOut}
                  disabled={convoActive}
                  hitSlop={8}
                >
                  <Text style={styles.composerMicIcon}>{isRecording ? '🔴' : '🎙'}</Text>
                </Pressable>
              )}

              {/* In lesson context: always show the send button (disabled when empty).
                  Otherwise: send button when text present, voice launcher when empty. */}
              {(lessonContext || input.trim().length > 0) ? (
                <Pressable
                  style={[styles.composerActionBtn, (loading || !input.trim()) && styles.composerActionBtnDisabled]}
                  onPress={sendText}
                  disabled={!input.trim() || loading || convoActive}
                  hitSlop={8}
                >
                  <Text style={styles.composerActionIcon}>↑</Text>
                </Pressable>
              ) : (
                <Pressable
                  style={styles.composerActionBtn}
                  onPress={toggleLiveVoice}
                  hitSlop={8}
                >
                  <Text style={styles.composerActionIcon}>〰</Text>
                </Pressable>
              )}
            </View>
          </View>
        )}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe:   { flex: 1, backgroundColor: Colors.primary },
  flex:   { flex: 1 },
  header: {
    flexDirection: 'row', alignItems: 'center',
    gap: Spacing.md, paddingHorizontal: Spacing.lg,
    paddingTop: Spacing.xxl, paddingBottom: Spacing.md,
  },
  headerText:  { flex: 1 },
  headerTitle: { fontSize: FontSize.lg, fontWeight: FontWeight.bold, color: Colors.white },
  headerSub:   { fontSize: FontSize.xs, color: 'rgba(255,255,255,0.6)' },
  convoBtn: {
    width: 44, height: 44, borderRadius: BorderRadius.full,
    backgroundColor: 'rgba(255,255,255,0.15)',
    alignItems: 'center', justifyContent: 'center',
  },
  headerClearBtn: {
    width: 36, height: 36, borderRadius: 18,
    backgroundColor: 'rgba(255,255,255,0.12)',
    alignItems: 'center', justifyContent: 'center',
  },
  headerClearIcon: { fontSize: 16, color: 'rgba(255,255,255,0.85)' },
  convoBtnActive: { backgroundColor: Colors.error + '40', borderWidth: 1, borderColor: Colors.error },
  convoBtnDisabled: { backgroundColor: 'rgba(255,255,255,0.08)', borderWidth: 1, borderColor: 'rgba(255,255,255,0.15)', borderStyle: 'dashed' },
  convoBtnText: { fontSize: 20 },
  convoBanner: {
    flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
    paddingHorizontal: Spacing.lg, paddingVertical: Spacing.sm,
    borderBottomWidth: 1, borderBottomColor: 'rgba(255,255,255,0.1)',
  },
  convoBannerText: { fontSize: FontSize.sm, color: 'rgba(255,255,255,0.8)', fontWeight: FontWeight.medium },
  stopListenBtn: {
    backgroundColor: Colors.secondary, paddingHorizontal: Spacing.md,
    paddingVertical: 4, borderRadius: BorderRadius.full,
  },
  stopListenText: { color: Colors.white, fontSize: FontSize.xs, fontWeight: FontWeight.bold },
  messages:        { flex: 1, backgroundColor: Colors.accent },
  messagesContent: { padding: Spacing.lg, gap: Spacing.sm },
  bubble:      { maxWidth: '82%', borderRadius: BorderRadius.lg, padding: Spacing.md },
  rwenBubble:  {
    backgroundColor: Colors.white, alignSelf: 'flex-start',
    borderBottomLeftRadius: 4,
    shadowColor: Colors.black, shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05, shadowRadius: 4, elevation: 1,
  },
  userBubble:  { backgroundColor: Colors.secondary, alignSelf: 'flex-end', borderBottomRightRadius: 4 },
  bubbleText:  { fontSize: FontSize.md, color: Colors.gray[800], lineHeight: 22 },
  userBubbleText: { color: Colors.white },
  inputRow: {
    flexDirection: 'row', alignItems: 'flex-end',
    backgroundColor: Colors.white,
    paddingHorizontal: Spacing.md, paddingVertical: Spacing.sm,
    borderTopWidth: 1, borderTopColor: Colors.gray[100], gap: Spacing.sm,
  },
  micBtn: {
    width: 40, height: 40, borderRadius: BorderRadius.full,
    backgroundColor: Colors.gray[100], alignItems: 'center', justifyContent: 'center',
  },
  micBtnActive: { backgroundColor: '#FEE2E2' },
  micBtnText: { fontSize: 18 },
  input: {
    flex: 1, backgroundColor: Colors.gray[50], borderRadius: BorderRadius.lg,
    paddingHorizontal: Spacing.md, paddingVertical: Spacing.sm,
    fontSize: FontSize.md, color: Colors.gray[800], maxHeight: 100,
  },
  sendBtn: {
    width: 40, height: 40, borderRadius: BorderRadius.full,
    backgroundColor: Colors.secondary, alignItems: 'center', justifyContent: 'center',
  },
  sendBtnDisabled: { backgroundColor: Colors.gray[200] },
  sendBtnText: { color: Colors.white, fontSize: FontSize.lg, fontWeight: FontWeight.bold },

  // ChatGPT/Claude-style composer
  composerRow: {
    backgroundColor: Colors.gray[50],
    paddingHorizontal: Spacing.md,
    paddingTop: Spacing.sm,
    paddingBottom: Spacing.md,
  },
  composer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    backgroundColor: Colors.white,
    borderRadius: 28,
    paddingHorizontal: 6,
    paddingVertical: 6,
    gap: 4,
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 2,
    borderWidth: 1,
    borderColor: Colors.gray[200],
  },
  composerLeftBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  composerLeftIcon: {
    fontSize: 26,
    color: Colors.gray[500],
    fontWeight: FontWeight.regular,
    lineHeight: 28,
  },
  composerInput: {
    flex: 1,
    fontSize: FontSize.md,
    color: Colors.gray[900],
    maxHeight: 120,
    minHeight: 40,
    paddingHorizontal: Spacing.sm,
    paddingTop: Platform.OS === 'ios' ? 10 : 6,
    paddingBottom: Platform.OS === 'ios' ? 10 : 6,
  },
  composerMicBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  composerMicBtnActive: {
    backgroundColor: '#FEE2E2',
  },
  composerMicIcon: { fontSize: 18 },
  composerActionBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: Colors.gray[900],
    alignItems: 'center',
    justifyContent: 'center',
  },
  composerActionBtnDisabled: { backgroundColor: Colors.gray[300] },
  composerActionIcon: {
    color: Colors.white,
    fontSize: 22,
    fontWeight: FontWeight.bold,
    lineHeight: 22,
  },

  // Inline live-voice panel — replaces the composer when a session is active.
  liveVoicePanel: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.white,
    borderRadius: BorderRadius.lg,
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.sm,
    gap: Spacing.md,
    borderWidth: 1,
    borderColor: Colors.gray[200],
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 2,
  },
  liveVoiceOrb: {
    width: 56,
    height: 56,
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: Colors.success,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.4,
    shadowRadius: 12,
    elevation: 4,
  },
  liveVoiceText: { flex: 1 },
  liveVoiceTitle: { fontSize: FontSize.md, fontWeight: FontWeight.bold, color: Colors.gray[900] },
  liveVoiceSub:   { fontSize: FontSize.xs, color: Colors.gray[500], marginTop: 2 },
  liveVoiceHangup: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: Colors.error,
    alignItems: 'center',
    justifyContent: 'center',
  },
  liveVoiceHangupIcon: {
    color: Colors.white,
    fontSize: 22,
    fontWeight: FontWeight.bold,
    lineHeight: 22,
  },
});

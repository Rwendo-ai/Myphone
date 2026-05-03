import { View, Text, StyleSheet, TextInput, Pressable, ScrollView, KeyboardAvoidingView, Platform, ActivityIndicator, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState, useRef, useEffect, useCallback } from 'react';
import { useLocalSearchParams, router } from 'expo-router';
import { useTranslation } from 'react-i18next';
import RwenImage from '../../components/rwen/RwenImage';
import ProfilePicButton from '../../components/ProfilePicButton';
import { useAuth } from '../../lib/AuthContext';
import { useSettings } from '../../lib/SettingsContext';
import { useProgress } from '../../hooks/useProgress';
import { sendMessage, loadConversationHistory, ChatMessage } from '../../lib/claude';
import { speakText, stopSpeaking, startRecording, stopRecordingAndTranscribe, isCurrentlyRecording } from '../../lib/voice';
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

  // Load conversation history
  useEffect(() => {
    if (!user || historyLoaded) return;
    loadConversationHistory(user.id).then((history) => {
      historyRef.current = history;
      if (history.length > 0) {
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
  }, [user, historyLoaded, username]);

  // ─── Core: process a user message ────────────────────────────────────────

  const processMessage = useCallback(async (text: string) => {
    if (!user || !text.trim()) return;

    setLoading(true);
    setRwenState('thinking');

    const userMsg: DisplayMessage = { id: Date.now().toString(), role: 'user', text: text.trim() };
    setMessages(prev => [...prev, userMsg]);
    setTimeout(() => scrollRef.current?.scrollToEnd({ animated: true }), 100);

    try {
      const reply = await sendMessage(user.id, text.trim(), historyRef.current, speaker, lessonContext, activeCompanionPresetId);

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

  // ─── Render ───────────────────────────────────────────────────────────────

  return (
    <SafeAreaView style={styles.safe} edges={['top']}>

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

        {/* Voice mode → ElevenLabs Conversational AI via WebRTC (LiveKit).
           Requires the dev-client build (Expo Go won't load WebRTC). When the
           preview-build APK is installed, this opens the orb-mode voice screen. */}
        <Pressable
          style={styles.convoBtn}
          onPress={() => router.push('/companion/voice')}
        >
          <Text style={styles.convoBtnText}>🎙</Text>
        </Pressable>

        <ProfilePicButton variant="light" />
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

        {/* ChatGPT/Claude-style composer:
              [+]   text input   [mic]  [send-or-voice]
            The right-most button shows a send arrow when there's text to
            send, or a voice-mode launcher when the input is empty. */}
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

            <Pressable
              style={[styles.composerMicBtn, isRecording && styles.composerMicBtnActive]}
              onPressIn={handleMicPressIn}
              onPressOut={handleMicPressOut}
              disabled={convoActive}
              hitSlop={8}
            >
              <Text style={styles.composerMicIcon}>{isRecording ? '🔴' : '🎙'}</Text>
            </Pressable>

            {input.trim().length > 0 ? (
              <Pressable
                style={[styles.composerActionBtn, loading && styles.composerActionBtnDisabled]}
                onPress={sendText}
                disabled={!input.trim() || loading || convoActive}
                hitSlop={8}
              >
                <Text style={styles.composerActionIcon}>↑</Text>
              </Pressable>
            ) : (
              <Pressable
                style={styles.composerActionBtn}
                onPress={() => router.push('/companion/voice')}
                hitSlop={8}
              >
                <Text style={styles.composerActionIcon}>〰</Text>
              </Pressable>
            )}
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe:   { flex: 1, backgroundColor: Colors.primary },
  flex:   { flex: 1 },
  header: {
    flexDirection: 'row', alignItems: 'center',
    gap: Spacing.md, paddingHorizontal: Spacing.lg, paddingVertical: Spacing.md,
  },
  headerText:  { flex: 1 },
  headerTitle: { fontSize: FontSize.lg, fontWeight: FontWeight.bold, color: Colors.white },
  headerSub:   { fontSize: FontSize.xs, color: 'rgba(255,255,255,0.6)' },
  convoBtn: {
    width: 44, height: 44, borderRadius: BorderRadius.full,
    backgroundColor: 'rgba(255,255,255,0.15)',
    alignItems: 'center', justifyContent: 'center',
  },
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
});

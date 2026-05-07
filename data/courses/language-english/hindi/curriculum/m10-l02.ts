import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm10-l02-angry-frustrated',
  module: 10,
  lesson: 2,
  title: 'Anger & Frustration — ग़ुस्सा',
  estimatedMinutes: 5,
  xpReward: 30,

  hook: {
    rwenLine: "ग़ुस्सा English में: 'I'm angry', 'I'm frustrated'। पर office में 'I'm angry' सीधा rough लगता — 'I'm a bit frustrated about ___' ज़्यादा professional।",
    culturalNote: "हिंदी में 'मेरा खून खौल रहा है' (Bollywood-level), 'बहुत ग़ुस्सा आ रहा' — somatic + direct। UK/US offices में emotion soften करते — 'I'm a bit frustrated' से professional, 'I'm furious' से बचना। 'Calm down' (शांत हो जाओ) — careful, अगर किसी ग़ुस्से वाले को बोलो तो वो ज़्यादा भड़क सकता। बेहतर: 'Let's take a breath' (एक साँस लेते हैं)।",
  },

  chunks: [
    {
      id: 'im_angry',
      target: "I'm angry",
      native: 'मुझे ग़ुस्सा आ रहा है',
      literal: 'Mujhe gussa aa raha hai',
      emoji: '😠',
      phonetic: 'aym-ANG-gree',
      audioRef: null,
    },
    {
      id: 'im_frustrated',
      target: "I'm frustrated",
      native: 'मैं frustrated हूँ',
      literal: 'Main frustrated hoon',
      emoji: '😤',
      phonetic: 'aym-FRUS-tray-ted',
      audioRef: null,
    },
    {
      id: 'calm_down',
      target: 'Calm down',
      native: 'शांत हो जाओ',
      literal: 'Shaant ho jaao',
      emoji: '🌬️',
      phonetic: 'KAHM-down',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Strong emotions, soft delivery',
    explanation: "Office में 'frustrated' (हल्का) > 'angry' (तेज़)। 'A bit frustrated' से soft। Cause के लिए 'about + thing' ('about the deadline')। 'Calm down' careful — 'Let's take a breath' ज़्यादा polite।",
    examples: [
      { target: "I'm a bit frustrated about the deadline.",      native: 'Deadline को लेकर थोड़ा frustrated हूँ।' },
      { target: "I'm angry because they didn't tell me.",        native: 'ग़ुस्सा है कि उन्होंने बताया नहीं।' },
      { target: "Let's take a breath — calm down.",               native: 'एक साँस लेते हैं — शांत हो जाओ।' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'अंग्रेज़ी और हिंदी मिलाएँ',
      pairs: [
        { left: "I'm angry",         right: 'ग़ुस्सा है' },
        { left: "I'm frustrated",     right: 'frustrated हूँ' },
        { left: 'Calm down',           right: 'शांत हो जाओ' },
      ],
    },
    {
      type: 'translate',
      instruction: 'अंग्रेज़ी में लिखें — office में deadline बदली',
      prompt: 'नई deadline को लेकर थोड़ा frustrated हूँ।',
      correct: ["I'm a bit frustrated about the new deadline.", "I am a bit frustrated about the new deadline.", "I'm a little frustrated about the new deadline.", "i'm a bit frustrated about the new deadline."],
    },
    {
      type: 'translate',
      instruction: 'अंग्रेज़ी में लिखें',
      prompt: 'ग़ुस्सा है कि उन्होंने बताया नहीं।',
      correct: ["I'm angry because they didn't tell me.", "I am angry because they didn't tell me.", "I'm angry because they did not tell me.", "i'm angry because they didn't tell me."],
    },
    {
      type: 'build_sentence',
      instruction: "वाक्य: 'I'm a bit frustrated about this'",
      words: ['this.', 'about', "I'm", 'frustrated', 'a', 'bit'],
      correct: ["I'm", 'a', 'bit', 'frustrated', 'about', 'this.'],
      translation: 'इसके बारे में थोड़ा frustrated',
    },
    {
      type: 'fill_blank',
      instruction: 'किसी ग़ुस्से वाले को',
      sentence: "Let's take a breath — _____ down.",
      options: ['calm', 'sit', 'go'],
      correct: 'calm',
      context: "'Calm down' = शांत हो जाओ। Care से use करें।",
    },
    {
      type: 'multiple_choice',
      instruction: 'Office में manager से बात',
      question: "Manager ने तीसरी बार deadline बदली। Most professional?",
      options: [
        { text: "I'm a bit frustrated about the deadline changes — can we plan more clearly?", correct: true },
        { text: "I'm so angry I could scream.",                                                   correct: false },
        { text: "It's fine, no problem.",                                                          correct: false },
      ],
      explanation: "Office: 'frustrated' (soft), 'about the deadline changes' (cause), 'can we plan' (forward-looking)। 'It's fine' ('बिल्कुल ठीक है') असली नहीं।",
    },
  ],

  rwenDialogue: {
    intro: "London में manager के साथ 1-on-1। Project deadline तीसरी बार बदली है।",
    lines: [
      { speaker: 'npc', target: "Anything on your mind before we wrap up?", native: 'ख़त्म करने से पहले कुछ कहना है?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Yes, actually. I'm a bit frustrated about the deadline changes — can we plan more clearly going forward?", native: 'हाँ, असल में। Deadline बदलने से थोड़ा frustrated हूँ — आगे साफ़ plan कर सकते हैं?', correct: true, feedback: "बढ़िया — 'a bit frustrated' (soft), cause clear, forward solution।" },
          { target: "I'm so angry. This is a mess.", native: 'बहुत ग़ुस्सा है। सब बकवास है।', correct: false, feedback: "Office में rough — 'a bit frustrated about ___' use करें।" },
          { target: "It's all fine.", native: 'सब ठीक है।', correct: false, feedback: "बाद में problem बढ़ेगी। सच बोलें softly।" },
        ],
      },
      { speaker: 'npc', target: "Fair point. Let's set a clearer plan now.", native: 'सही बात। अभी साफ़ plan करते हैं।' },
      {
        speaker: 'rwen',
        rwenLine: "बढ़िया! Office में honesty + politeness — दोनों चलते।",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'बिना ऊपर देखे।',
    prompts: [
      { prompt: "I'm frustrated (अंग्रेज़ी में)",     correct: ["I'm frustrated", "I am frustrated", "i'm frustrated"] },
      { prompt: 'Calm down (अंग्रेज़ी में)',           correct: ['Calm down', 'calm down', 'Calm down.', 'calm down.'] },
    ],
  },

  mission: {
    title: 'आज का काम',
    task: "इस हफ़्ते की कोई frustration सोचें — office, घर, कहीं भी। English में लिखें: 'I'm a bit frustrated about ___ because ___.' पढ़ें — frustration थोड़ी कम होगी।",
    rwenSignoff: "कल — डर और चिंता।",
  },

  phase8: {
    scenario: "You're in a 1-on-1 with your English-speaking manager in London. The project deadline has been moved THREE times this month. You need to express frustration professionally and propose a clearer plan — without burning the relationship.",
    rwenRole: "James, 45, your line manager. Reasonable but stressed. Will appreciate honesty if delivered professionally. Will get defensive if you say 'I'm angry' bluntly.",
    successCriteria: "User uses 'I'm a bit frustrated about ___' (NOT 'I'm angry' alone). States specific cause. Proposes a forward-looking solution ('can we plan...', 'going forward...'). Stays in English throughout.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;

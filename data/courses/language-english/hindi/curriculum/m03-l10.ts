import { LessonData } from '../../../../../types/lesson';

/**
 * m03-l10 — Module 3 capstone.
 *
 * Integration lesson: pulls together verb "to be" (l01), age (l02),
 * job (l03), family (l04), hobbies (l05), languages (l06), where you
 * live (l07), personality (l08), and asking back (l09) into one full
 * two-way introduction.
 */
const lesson: LessonData = {
  id: 'm03-l10-conversation',
  module: 3,
  lesson: 10,
  title: 'Full introduction conversation',
  estimatedMinutes: 7,
  xpReward: 50,

  hook: {
    rwenLine: "आज Module 3 का आख़िरी सबक़ — सब कुछ एक साथ। नाम, काम, परिवार, शौक, भाषाएँ, शहर, और सामने वाले से सवाल — पूरी अंग्रेज़ी पहली मुलाक़ात।",
    culturalNote: "अंग्रेज़ी की पहली मुलाक़ात लगभग 2-3 मिनट की होती है — न बहुत छोटी, न बहुत लंबी। और सबसे ज़रूरी — दोनों तरफ़ से बात हो, सिर्फ़ तुम बोलते न रहो। यही professional networking और social meetings की रीति है।",
  },

  chunks: [
    {
      id: 'pleasure_to_meet_you',
      target: 'Pleasure to meet you',
      native: 'आपसे मिलकर ख़ुशी हुई',
      literal: 'Pleasure to meet you',
      emoji: '🤝',
      phonetic: 'प्लेज़र-टू-मीट-यू',
      audioRef: null,
    },
    {
      id: 'and_yourself',
      target: 'And yourself?',
      native: 'और आप?',
      literal: 'And yourself?',
      emoji: '↩️',
      phonetic: 'एंड-योर-सेल्फ',
      audioRef: null,
    },
    {
      id: 'lets_keep_in_touch',
      target: "Let's keep in touch",
      native: 'संपर्क में रहते हैं',
      literal: "Let us keep in touch",
      emoji: '📱',
      phonetic: 'लेट्स-कीप-इन-टच',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Two-way introduction (review + glue)',
    explanation: "अच्छी मुलाक़ात का format: (1) greeting + नाम — 'Hi, I'm ___.' (2) काम या शहर — 'I'm a ___ from ___.' (3) सवाल लौटाओ — 'And yourself?' (4) ख़ुशी जताओ — 'Pleasure to meet you'. (5) अगर दोस्ती बनी तो आख़िर में — 'Let's keep in touch'.",
    examples: [
      { target: "Hi, I'm Priya. I'm a software engineer from Pune.", native: 'नमस्ते, मैं प्रिया हूँ। मैं पुणे से software engineer हूँ।' },
      { target: 'And yourself?',                                       native: 'और आप?' },
      { target: "Pleasure to meet you. Let's keep in touch.",         native: 'आपसे मिलकर ख़ुशी हुई। संपर्क में रहते हैं।' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'मुलाक़ात के वाक्य मिलाओ',
      pairs: [
        { left: "I'm a software engineer", right: 'मैं software engineer हूँ' },
        { left: 'And yourself?',           right: 'और आप?' },
        { left: 'Pleasure to meet you',    right: 'आपसे मिलकर ख़ुशी हुई' },
        { left: "Let's keep in touch",      right: 'संपर्क में रहते हैं' },
      ],
    },
    {
      type: 'translate',
      instruction: 'अंग्रेज़ी में लिखो',
      prompt: 'आपसे मिलकर ख़ुशी हुई',
      correct: ['Pleasure to meet you', 'pleasure to meet you', 'Nice to meet you', 'nice to meet you'],
    },
    {
      type: 'translate',
      instruction: 'अंग्रेज़ी में लिखो',
      prompt: 'और आप?',
      correct: ['And yourself?', 'and yourself?', 'And you?', 'and you?'],
    },
    {
      type: 'fill_blank',
      instruction: 'सवाल लौटाने का तरीक़ा',
      sentence: "I'm an engineer. And ____?",
      options: ['yourself', 'you', 'your'],
      correct: 'yourself',
      context: "विनम्र तरीक़े से सवाल लौटाने के लिए 'And yourself?' सबसे अच्छा है।",
    },
    {
      type: 'build_sentence',
      instruction: 'अपना परिचय बनाओ',
      words: ["I'm", 'Priya', 'from', 'Pune'],
      correct: ["I'm", 'Priya', 'from', 'Pune'],
      translation: 'मैं प्रिया हूँ, पुणे से',
    },
    {
      type: 'build_sentence',
      instruction: 'विदाई का वाक्य बनाओ',
      words: ["Let's", 'keep', 'in', 'touch'],
      correct: ["Let's", 'keep', 'in', 'touch'],
      translation: 'संपर्क में रहते हैं',
    },
  ],

  rwenDialogue: {
    intro: "तुम Mumbai के एक hotel में professional networking event में हो। एक नया व्यक्ति तुम्हारे पास आया है — अंग्रेज़ी में बात कर रहा है। यही पूरी पहली मुलाक़ात है।",
    lines: [
      { speaker: 'npc', target: "Hi! I don't think we've met. I'm Sarah, I work in healthcare.", native: 'नमस्ते! लगता है हम पहले नहीं मिले। मैं Sarah हूँ, healthcare में हूँ।' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Hi Sarah, I'm Priya. I'm a software engineer from Pune. Pleasure to meet you — and yourself, where are you from?", native: 'नमस्ते Sarah, मैं प्रिया हूँ। पुणे से software engineer हूँ। आपसे मिलकर ख़ुशी हुई — और आप, कहाँ से हैं?', correct: true,  feedback: "बढ़िया — नाम, काम, शहर, ख़ुशी, और सवाल — सब एक साथ।" },
          { target: "Priya. Engineer.",                                                                                                  native: 'प्रिया। Engineer।',                                                                                                correct: false, feedback: "बहुत छोटा — networking event में पूरा वाक्य चाहिए।" },
          { target: "Hi, I'm Priya. Pleasure.",                                                                                          native: 'नमस्ते, मैं प्रिया हूँ। Pleasure।',                                                                              correct: false, feedback: "शुरुआत अच्छी पर 'Pleasure' अकेला अधूरा है — 'Pleasure to meet you' पूरा कहो।" },
        ],
      },
      { speaker: 'npc', target: "Oh, I'm originally from Chennai. So — what brings you here tonight?", native: 'अरे, मैं असल में चेन्नई से हूँ। तो — आज शाम यहाँ क्या लाया?' },
      {
        speaker: 'rwen',
        rwenLine: "शाबाश! सब कुछ एक साथ — नाम, काम, शहर, रीति, और सवाल लौटाना। Module 3 बहुत अच्छे से पूरा किया!",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'बिना पीछे देखे, अंग्रेज़ी में लिखो।',
    prompts: [
      { prompt: 'आपसे मिलकर ख़ुशी हुई (in English)',  correct: ['Pleasure to meet you', 'pleasure to meet you', 'Nice to meet you', 'nice to meet you'] },
      { prompt: 'और आप? (in English)',                  correct: ['And yourself?', 'and yourself?', 'And you?', 'and you?'] },
    ],
  },

  mission: {
    title: 'आज का काम',
    task: "आज किसी से अंग्रेज़ी में पूरी पहली मुलाक़ात करो — नाम, काम, शहर, ख़ुशी जताना, और सवाल लौटाना। आईने के सामने भी ठीक है — 60 सेकंड का target रखो।",
    rwenSignoff: "Module 3 पूरा! अब अंग्रेज़ी में अपना परिचय असल में आता है। Module 4 में मिलते हैं।",
  },

  phase8: {
    scenario: "It's the integration capstone. You're at a Friday-evening networking mixer at a Mumbai hotel. You walk up to someone you've never met — an English-speaker — and the goal is to have a full first-meeting introduction in English: name, work, origin, a bit of personality, and a question back.",
    rwenRole: "Daniel, 38, a regional sales lead visiting from Singapore for the week. Confident, asks two follow-ups, and tries to find common ground.",
    successCriteria: "User opens with name + role/origin in one fluent sentence, exchanges 'Pleasure to meet you' or equivalent, asks at least one open question back ('And yourself?' / 'Where are you from?'), and sustains the exchange for at least 4 turns without dropping the verb 'am' or the article 'a'.",
    estimatedMinutes: 4,
    bonusXp: 5,
  },
};

export default lesson;

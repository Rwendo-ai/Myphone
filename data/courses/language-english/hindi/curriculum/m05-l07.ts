import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm05-l07-friends',
  module: 5,
  lesson: 7,
  title: 'Friends as family — दोस्त जो परिवार जैसे हैं',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "जिगरी दोस्त — जो भाई-बहन से कम नहीं। English में: 'best friend', 'close friends', 'like family'। ये शब्द आपकी friendship की गहराई English-speaker को पहुँचा देते हैं।",
    culturalNote: "हिंदी में 'जिगरी दोस्त', 'गहरी दोस्ती', 'भाई जैसा' — सब रिश्तों को परिवार से जोड़ते हैं। English में same भावना है: 'They're like family to me' या 'He's like a brother'। US में दोस्तों के बच्चे आपको 'auntie' या 'uncle' बुलाते हैं — वो honorary रिश्ता बनाते हैं। Diaspora में अक्सर पुराने दोस्त ही परिवार बन जाते हैं — Diwali साथ, Holi साथ, बच्चों की कहानियाँ साथ।",
  },

  chunks: [
    {
      id: 'best_friend',
      target: 'Best friend',
      native: 'जिगरी दोस्त',
      literal: 'Jigri dost',
      emoji: '🤝',
      phonetic: 'BEST-frend',
      audioRef: null,
    },
    {
      id: 'close_friends',
      target: 'Close friends',
      native: 'गहरे दोस्त',
      literal: 'Gahre dost',
      emoji: '👯',
      phonetic: 'KLOHS-frends',
      audioRef: null,
    },
    {
      id: 'like_family',
      target: 'Like family',
      native: 'परिवार जैसे',
      literal: 'Parivaar jaise',
      emoji: '💞',
      phonetic: 'LAYK FAM-uh-lee',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Idiomatic family — \"like family\"',
    explanation: "अंग्रेज़ी में 'like' से comparison होता है — 'A is like B' मतलब A वैसा है जैसा B। दोस्त को परिवार के बराबर बताने के लिए: 'She's like family to me' या 'He's like a brother to me'। ध्यान दें: 'a' / 'an' नहीं — 'like family' (general, no article)।",
    examples: [
      { target: 'My best friend',              native: 'मेरा जिगरी दोस्त' },
      { target: "She's like a sister to me.", native: 'वो मेरे लिए बहन जैसी है।' },
      { target: 'They\'re like family.',         native: 'वो परिवार जैसे हैं।' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'अंग्रेज़ी शब्दों को हिंदी अर्थ से मिलाएँ',
      pairs: [
        { left: 'Best friend',     right: 'जिगरी दोस्त' },
        { left: 'Close friends',   right: 'गहरे दोस्त' },
        { left: 'Like family',     right: 'परिवार जैसे' },
      ],
    },
    {
      type: 'translate',
      instruction: 'अंग्रेज़ी में लिखें',
      prompt: 'राहुल मेरा स्कूल का जिगरी दोस्त है।',
      correct: ['Rahul is my best friend from school.', 'Rahul is my best friend from school', 'rahul is my best friend from school.'],
    },
    {
      type: 'translate',
      instruction: 'अंग्रेज़ी में लिखें — नई दोस्त को किसी के बारे में बता रहे हैं',
      prompt: 'वो मेरे लिए बहन जैसी है।',
      correct: ["She's like a sister to me.", 'She is like a sister to me.', "She's like a sister to me"],
    },
    {
      type: 'build_sentence',
      instruction: 'वाक्य बनाएँ: "We have been friends for ten years"',
      words: ['for', 'have', 'We', 'years.', 'been', 'ten', 'friends'],
      correct: ['We', 'have', 'been', 'friends', 'for', 'ten', 'years.'],
      translation: 'हम दस साल से दोस्त हैं',
    },
    {
      type: 'fill_blank',
      instruction: 'खाली जगह भरें — English idiom',
      sentence: "Priya isn't related to me, but she's _____ family.",
      options: ['as', 'like', 'same'],
      correct: 'like',
      context: "'Like' = 'जैसा/जैसे'। 'Like family', 'like a sister' — natural English idioms। 'As family' formal लगता है, 'same family' ग़लत।",
    },
    {
      type: 'multiple_choice',
      instruction: 'सही चुनें',
      question: "पाँच साल बाद एक पुरानी दोस्त से मिल रहे हैं। आप कितना miss किया, कैसे बताएँगे?",
      options: [
        { text: "I've missed you — you're like family to me.", correct: true },
        { text: "I miss. You family same.",                      correct: false },
        { text: "Yaad aati thi. Family.",                          correct: false },
      ],
      explanation: "'I've missed you' (present perfect — पहले से अब तक यादें), और 'you're like family to me' एक साथ — पूरी भावना दिखती है।",
    },
  ],

  rwenDialogue: {
    intro: "स्कूल की पुरानी दोस्त से कई साल बाद मिल रहे हैं — आख़िरी बार मिले बहुत साल हो गए। वो आपको देखकर ख़ुश है।",
    lines: [
      { speaker: 'npc', target: "Oh my word — it's been forever! How are you?", native: 'अरे यार — कितने साल हो गए! कैसी हो?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "I'm well — and I've missed you so much. You know you're like a sister to me.", native: 'मैं ठीक हूँ — और तुम्हें बहुत miss किया। तुम तो मेरे लिए बहन जैसी हो।', correct: true, feedback: "बढ़िया — 'I've missed you' पुरानी यादों को लाया, 'like a sister' से प्यार पहुँचा। दोस्ती फिर ज़िंदा हो गई।" },
          { target: "Good. Long time.",                                                                native: 'अच्छा। लंबा समय।',                                                                       correct: false, feedback: "बहुत छोटा — दोस्त भावना चाहती है। 'I've missed you' या 'It's so good to see you' जोड़ें।" },
          { target: "Yaad bahut aati thi.",                                                              native: 'याद बहुत आती थी।',                                                                            correct: false, feedback: "हिंदी में — English में बदलें: 'I've missed you so much.'" },
        ],
      },
      { speaker: 'npc', target: "Same here — you're family to me, you know that.", native: 'मेरे लिए भी — तुम परिवार हो, ये पता है।' },
      {
        speaker: 'rwen',
        rwenLine: "बहुत बढ़िया! 'Like family' idiom से जिगरी दोस्ती की भावना English में आ गई।",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'बिना ऊपर देखे।',
    prompts: [
      { prompt: 'My best friend (अंग्रेज़ी में)',  correct: ['My best friend', 'my best friend'] },
      { prompt: "She's like family (अंग्रेज़ी में)", correct: ["She's like family", 'She is like family', "She's like family.", 'She is like family.'] },
    ],
  },

  mission: {
    title: 'आज का काम',
    task: "अपने जिगरी दोस्त के बारे में सोचें। English में वाक्य लिखें: 'My best friend is [name]. We've been friends for [number] years. He/She is like a brother/sister to me.' ज़ोर से पढ़ें।",
    rwenSignoff: "कल — रिश्तों के verbs (visit, call, miss)।",
  },

  phase8: {
    scenario: "You bump into a school friend you haven't seen in many years. Catch up in English — how life has been, family, work — and express that they're still like family to you.",
    rwenRole: "Anjali, your old school friend, also Hindi-speaking but you're practising English together. Warm, asks 'Are you married?', 'Where are you living?', 'Do you remember Mr. Verma?'",
    successCriteria: "User uses 'best friend', 'old friend', or 'like family / like a sister/brother' at least once. Asks the friend at least one return question (not just answering). Uses present perfect once: 'I've missed you' or 'It's been [time]'.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;

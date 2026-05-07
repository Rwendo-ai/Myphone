import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm05-l08-family-actions',
  module: 5,
  lesson: 8,
  title: 'Family verbs — Visit, call, miss',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "परिवार के लिए तीन ज़रूरी verbs — मिलने जाना, फ़ोन करना, miss करना। English में: 'visit', 'call', 'miss'। पहले दो आसान हैं। 'Miss' थोड़ा tricky — हिंदी से अलग चलता है।",
    culturalNote: "Indian Diaspora — UK, US, Canada, Gulf — में रहने वाले लाखों लोग रोज़ माँ-बाप को WhatsApp call करते हैं। 'I call my mother every day' सबसे common वाक्यों में से एक है। 'I miss my family' OFW (Overseas Filipino Worker), Indian IT engineer, Gulf labourer — सब के मुँह से निकलता है। हिंदी में 'याद आना' subject बदल देता है — 'मुझे माँ की याद आती है' (माँ subject नहीं)। English में 'I miss my mother' (I = subject) — आप action कर रहे हैं, माँ नहीं। Gradient समझ लें।",
  },

  chunks: [
    {
      id: 'visit',
      target: 'Visit',
      native: 'मिलने जाना',
      literal: 'Milne jaana',
      emoji: '🏃🏽',
      phonetic: 'VIH-zit',
      audioRef: null,
    },
    {
      id: 'call',
      target: 'Call',
      native: 'फ़ोन करना',
      literal: 'Phone karna',
      emoji: '📞',
      phonetic: 'KAWL',
      audioRef: null,
    },
    {
      id: 'miss',
      target: 'Miss (someone)',
      native: 'याद आना / miss करना',
      literal: 'Yaad aana / miss karna',
      emoji: '🥺',
      phonetic: 'MIS',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Family verbs — visit, call, miss',
    explanation: "अंग्रेज़ी में ये verbs सीधे चलते हैं: 'I visit my mother', 'I call my father', 'I miss my sister'। ध्यान दें: 'miss' transitive है — 'I miss my sister' — 'I miss for my sister' ग़लत है। हिंदी का 'मुझे याद आती है' subject बदलता है, English में नहीं। Past tense: visited / called / missed.",
    examples: [
      { target: 'I visit my grandmother every Sunday.', native: 'मैं हर रविवार दादी से मिलने जाता हूँ।' },
      { target: 'I call my mother every day.',          native: 'मैं रोज़ माँ को फ़ोन करता हूँ।' },
      { target: 'I miss my brother.',                    native: 'मुझे भाई की याद आती है।' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'अंग्रेज़ी शब्दों को हिंदी अर्थ से मिलाएँ',
      pairs: [
        { left: 'Visit',  right: 'मिलने जाना' },
        { left: 'Call',   right: 'फ़ोन करना' },
        { left: 'Miss',   right: 'याद आना' },
      ],
    },
    {
      type: 'translate',
      instruction: 'अंग्रेज़ी में लिखें',
      prompt: 'मैं रोज़ सुबह माँ को फ़ोन करता हूँ।',
      correct: ['I call my mother every morning.', 'I call my mother every morning', 'i call my mother every morning.'],
    },
    {
      type: 'translate',
      instruction: 'अंग्रेज़ी में लिखें — हफ़्ते की plan बना रहे हैं',
      prompt: 'हम अगले हफ़्ते दादाजी से मिलने जाएँगे।',
      correct: ['We will visit our grandfather next week.', "We're visiting our grandfather next week.", 'We will visit our grandfather next week', "We will visit grandfather next week."],
    },
    {
      type: 'build_sentence',
      instruction: 'वाक्य बनाएँ: "I miss my children very much"',
      words: ['miss', 'I', 'much.', 'children', 'my', 'very'],
      correct: ['I', 'miss', 'my', 'children', 'very', 'much.'],
      translation: 'मुझे बच्चों की बहुत याद आती है',
    },
    {
      type: 'fill_blank',
      instruction: 'खाली जगह भरें — call का past tense',
      sentence: 'I _____ my brother yesterday — he was happy.',
      options: ['call', 'called', 'calls'],
      correct: 'called',
      context: "Yesterday = past time। 'Call' का past 'called' (regular -ed)। 'Calls' present है, 'call' base form।",
    },
    {
      type: 'multiple_choice',
      instruction: 'सही चुनें "मुझे माँ की बहुत याद आती है"',
      question: 'Which sentence best expresses "मुझे माँ की बहुत याद आती है"?',
      options: [
        { text: "I miss my mother very much.",        correct: true },
        { text: "I'm missing for my mother much.",     correct: false },
        { text: "My mother is missing me much.",        correct: false },
      ],
      explanation: "'I miss [person]' सही है — 'for' नहीं चलता। 'My mother is missing me' मतलब उल्टा हो जाता है — माँ miss कर रही हैं, आप नहीं।",
    },
  ],

  rwenDialogue: {
    intro: 'आप weekend की plan बना रहे हैं। परिवार से मिलने, फ़ोन करने, या किसी को miss करने की बात है।',
    lines: [
      { speaker: 'npc', target: "What are you doing this weekend?", native: 'इस weekend क्या plan है?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "I'm going to visit my grandmother on Saturday, and I'll call my brother on Sunday — I miss him.", native: 'शनिवार को दादी से मिलने जाऊँगा, और रविवार को भाई को फ़ोन करूँगा — उसकी बहुत याद आती है।', correct: true, feedback: "बढ़िया — visit, call, miss तीनों एक sentence में! 'I'll' से future plan साफ़।" },
          { target: "Visit. Call. Miss.",                                                                                native: 'मिलना। फ़ोन। याद।',                                                                            correct: false, feedback: "अकेले शब्द — 'I'll' या 'I'm going to' जोड़ें ताकि plan लगे।" },
          { target: "I miss my brother for visit.",                                                                       native: 'मुझे भाई की याद आती है मिलने।',                                                              correct: false, feedback: "जुड़ा-तुड़ा — एक-एक करके बोलें: 'I'm visiting my grandmother. I'll call my brother. I miss him.'" },
        ],
      },
      { speaker: 'npc', target: "Sounds like a lovely weekend with family.", native: 'परिवार के साथ अच्छा weekend लग रहा है।' },
      {
        speaker: 'rwen',
        rwenLine: "बहुत बढ़िया! तीनों verbs एक flow में आ गए — visit, call, miss।",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'बिना ऊपर देखे।',
    prompts: [
      { prompt: 'I miss my mother (अंग्रेज़ी में)',     correct: ['I miss my mother', 'I miss my mother.', 'i miss my mother'] },
      { prompt: 'I called my brother (past tense)',   correct: ['I called my brother', 'I called my brother.', 'i called my brother'] },
    ],
  },

  mission: {
    title: 'आज का काम',
    task: "एक family member choose करें। तय करें: मिलने जाना, फ़ोन करना, या miss करना? English में लिखें: 'I will call/visit my [person] this week. I miss them.' ज़ोर से पढ़ें। फिर सच में फ़ोन उठाएँ, call करें।",
    rwenSignoff: "कल — परिवार की कहानी English में सुनाना।",
  },

  phase8: {
    scenario: "You're making weekend plans with an English-speaking friend. Tell them what family-related things you'll do this weekend — who you'll visit, who you'll call, and who you've been missing lately.",
    rwenRole: "Sam, a colleague who likes hearing about people's weekends. Asks 'How is your grandmother?' and 'When did you last see your brother?'",
    successCriteria: "User uses at least two of: 'visit', 'call', 'miss' (in any tense). Names at least one family member. Uses 'I'll' or 'I'm going to' for at least one future plan. Doesn't drop into Hindi.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;

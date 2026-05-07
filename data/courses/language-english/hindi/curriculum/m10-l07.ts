import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm10-l07-past-stories',
  module: 10,
  lesson: 7,
  title: 'Telling past stories — पुरानी कहानियाँ',
  estimatedMinutes: 5,
  xpReward: 30,

  hook: {
    rwenLine: "बचपन की कहानी English में: 'When I was a child...', 'I'll never forget...', 'It was amazing'। तीन वाक्यों में पूरी memory।",
    culturalNote: "Indian families में बचपन की कहानी संस्कार-passing का तरीक़ा — दादी-नानी की कहानियों से नैतिकता आती। Bollywood कहानियाँ अक्सर लंबी, melodrama भरी। पर English में short, focused कहानी ज़्यादा शक्तिशाली: चलने का context (When I was a child), घटना (used to / went / saw), और reflection (It was amazing / I'll never forget)। तीन वाक्य = एक पूरी memory। 'मेरी दादी का दिल बहुत बड़ा था' translate करने पर 'My grandmother had a very big heart' — but English में और natural: 'She was the kindest person I knew' या 'She always made everyone feel welcome'।",
  },

  chunks: [
    {
      id: 'when_i_was_a_child',
      target: 'When I was a child',
      native: 'जब मैं बच्चा था',
      literal: 'Jab main bachcha tha',
      emoji: '👶🏽',
      phonetic: 'wen-AY-wuz-uh-CHAYLD',
      audioRef: null,
    },
    {
      id: 'never_forget',
      target: "I'll never forget...",
      native: 'मैं कभी नहीं भूलूँगा...',
      literal: 'Main kabhi nahin bhooloonga',
      emoji: '🌟',
      phonetic: 'AYL-NEV-er-fer-GET',
      audioRef: null,
    },
    {
      id: 'was_amazing',
      target: 'It was amazing',
      native: 'अद्भुत था',
      literal: 'Adbhut tha',
      emoji: '✨',
      phonetic: 'it-WUZ-uh-MAY-zing',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Past-tense narrative — three-line story',
    explanation: "तीन parts: (1) Setup ('When I was a child', 'A long time ago')। (2) Event (past tense — 'I went', 'we lived', 'my grandmother taught me')। (3) Reflection ('I'll never forget it', 'It was amazing', 'It changed me')।",
    examples: [
      { target: "When I was a child, my grandmother taught me to make rotis.", native: 'जब मैं बच्चा था, दादी ने रोटी बनाना सिखाया।' },
      { target: "I'll never forget the smell of the kitchen.",                  native: 'रसोई की ख़ुशबू कभी नहीं भूलूँगा।' },
      { target: 'It was amazing — I still make those rotis today.',             native: 'अद्भुत था — आज भी वो रोटी बनाता हूँ।' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'अंग्रेज़ी और हिंदी मिलाएँ',
      pairs: [
        { left: 'When I was a child',     right: 'जब बच्चा था' },
        { left: "I'll never forget",       right: 'कभी नहीं भूलूँगा' },
        { left: 'It was amazing',           right: 'अद्भुत था' },
      ],
    },
    {
      type: 'translate',
      instruction: 'अंग्रेज़ी में लिखें',
      prompt: 'जब मैं बच्चा था, हम गाँव में रहते थे।',
      correct: ['When I was a child, we lived in the village.', 'When I was a kid, we lived in the village.', 'When I was little, we lived in the village.', 'when i was a child, we lived in the village.'],
    },
    {
      type: 'translate',
      instruction: 'अंग्रेज़ी में लिखें',
      prompt: 'वो दिन कभी नहीं भूलूँगा। अद्भुत था।',
      correct: ["I'll never forget that day. It was amazing.", "I will never forget that day. It was amazing.", "I'll never forget that day — it was amazing.", "i'll never forget that day. it was amazing."],
    },
    {
      type: 'build_sentence',
      instruction: "वाक्य: 'When I was a child, my grandmother taught me'",
      words: ['child,', 'me.', 'a', 'When', 'taught', 'I', 'grandmother', 'was', 'my'],
      correct: ['When', 'I', 'was', 'a', 'child,', 'my', 'grandmother', 'taught', 'me.'],
      translation: 'जब मैं बच्चा था, दादी ने सिखाया',
    },
    {
      type: 'fill_blank',
      instruction: 'सही past tense',
      sentence: 'When I was a child, we _____ in the village every summer.',
      options: ['went', 'go', 'going'],
      correct: 'went',
      context: "Past — 'go → went'। 'When I was' से past शुरू हो गया, सब verbs past।",
    },
    {
      type: 'multiple_choice',
      instruction: 'Open mic 3-sentence story',
      question: "Storytelling night में बचपन की कहानी। Most natural?",
      options: [
        { text: "When I was a child, my grandmother used to tell me stories by the fire. I'll never forget the way she laughed. It was amazing — her laugh still lives in me.", correct: true },
        { text: "Child story grandmother fire laugh.",                                                                                                                            correct: false },
        { text: "Jab main bachcha tha, dadi kahaani sunaati thin.",                                                                                                                correct: false },
      ],
      explanation: "तीन वाक्य structure perfect — setup, event, reflection।",
    },
  ],

  rwenDialogue: {
    intro: "London में English-language storytelling open mic। Host ने 3-sentence बचपन story माँगी।",
    lines: [
      { speaker: 'npc', target: "Next up — share a childhood memory in three sentences. Take it away.", native: 'अगले — तीन वाक्यों में बचपन की कहानी।' },
      {
        speaker: 'user',
        userChoices: [
          { target: "When I was a child, my grandmother taught me to make rotis on Saturdays. I'll never forget the smell of the kitchen — flour, fire, her humming. It was amazing — I still make those rotis today.", native: 'जब बच्चा था, दादी हर शनिवार रोटी बनाना सिखातीं। रसोई की ख़ुशबू भूल नहीं सकता — आटा, आग, उनकी गुनगुनाहट। अद्भुत था — आज भी वो रोटी बनाता हूँ।', correct: true, feedback: "बढ़िया — तीनों parts perfect। दादी English में जिल गईं।" },
          { target: "Child grandmother roti story.", native: 'बच्चा दादी रोटी कहानी।', correct: false, feedback: "Sentences बनाएँ।" },
          { target: "Jab bachcha tha, dadi roti sikhati thin.", native: 'जब बच्चा था, दादी रोटी सिखाती थीं।', correct: false, feedback: "हिंदी में — पूरा English: 'When I was a child, my grandmother taught me to make rotis.'" },
        ],
      },
      { speaker: 'npc', target: "Beautiful — thank you for sharing.", native: 'सुंदर — share करने के लिए धन्यवाद।' },
      {
        speaker: 'rwen',
        rwenLine: "बढ़िया! तीन वाक्य = एक पूरी कहानी।",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'बिना ऊपर देखे।',
    prompts: [
      { prompt: 'When I was a child (अंग्रेज़ी में)',  correct: ['When I was a child', 'when i was a child', 'When I was a child,', 'When I was young'] },
      { prompt: "I'll never forget (अंग्रेज़ी में)",   correct: ["I'll never forget", "I will never forget", "i'll never forget"] },
    ],
  },

  mission: {
    title: 'आज का काम',
    task: "बचपन की एक कहानी सोचें। English में तीन वाक्य लिखें: (1) 'When I was a child, ___.' (2) 'I'll never forget ___.' (3) 'It was amazing.' पढ़ें।",
    rwenSignoff: "कल — आगे की उम्मीदें।",
  },

  phase8: {
    scenario: "You're at an English-language storytelling open mic. The host asks for a 3-sentence childhood memory. Take 90 seconds — set the time, tell what happened, end with a reflection.",
    rwenRole: "Maria, 35, storytelling night host. Warm, attentive. Asks gentle follow-ups: 'How old were you?', 'Do you still do it now?'",
    successCriteria: "User opens with 'When I was a child' or 'When I was young'. Uses past tense throughout (went, saw, was, had, taught). Closes with 'I'll never forget ___' or 'It was amazing'. Tells 3+ sentences. Stays in English.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;

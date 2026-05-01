import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm05-l08-family-actions',
  module: 5,
  lesson: 8,
  title: 'Visiter, Appeler, Manquer — and the great "miss" inversion',
  estimatedMinutes: 6,
  xpReward: 25,

  hook: {
    rwenLine: "Here is the trickiest sentence English speakers learn in French. 'I miss you' = 'Tu me manques.' Look at the words — literally, it's 'You are missed by me.' Subject and object are FLIPPED. Today we wrestle this one to the ground, because every French family conversation has it.",
    culturalNote: "In English: I miss YOU (you = object). In French: TU me manques — YOU (subject) are missing TO ME. The thing missed is the SUBJECT of the sentence. This trips up every English speaker for months. Once you internalise it, you sound suddenly French.",
  },

  chunks: [
    {
      id: 'visiter',
      target: 'Visiter',
      native: 'To visit',
      literal: 'To-visit',
      emoji: '🚪',
      phonetic: 'vee-zee-TAY',
      audioRef: null,
    },
    {
      id: 'appeler',
      target: 'Appeler',
      native: 'To call',
      literal: 'To-call',
      emoji: '📞',
      phonetic: 'ah-puh-LAY',
      audioRef: null,
    },
    {
      id: 'tu_me_manques',
      target: 'Tu me manques',
      native: 'I miss you',
      literal: 'You(subj) to-me are-missing',
      emoji: '💔',
      phonetic: 'too muh MAHNK',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Manquer — the inverted "miss"',
    explanation: "In French, the person being missed is the SUBJECT, the person doing the missing is an indirect object (me/te/lui/nous/vous/leur). 'Tu me manques' = 'You are missing TO me' = 'I miss you'. Think of it as 'you make me feel an absence'. Always flip the English in your head.",
    examples: [
      { target: 'Tu me manques', native: 'I miss you (you are missing to me)' },
      { target: 'Vous nous manquez', native: 'We miss you (you-formal are missing to us)' },
      { target: 'Ma sœur me manque', native: 'I miss my sister (my sister is missing to me)' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the French to its meaning',
      pairs: [
        { left: 'Visiter', right: 'To visit' },
        { left: 'Appeler', right: 'To call' },
        { left: 'Tu me manques', right: 'I miss you' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Your grandmother says: "I miss YOU." She means it about you. Pick the right form.',
      sentence: '_____ me manques, mon petit.',
      options: ['Tu', 'Je', 'Il'],
      correct: 'Tu',
      context: "She is missing YOU — so you are the SUBJECT. 'Tu me manques' = literally 'you are missing to me'.",
    },
    {
      type: 'translate',
      instruction: 'Type in French — careful with the inversion!',
      prompt: 'I miss you (informal, to one person)',
      correct: ['Tu me manques', 'tu me manques'],
    },
    {
      type: 'build_sentence',
      instruction: 'Build: "I miss my brother" — remember the inversion!',
      words: ['frère', 'manque.', 'me', 'Mon'],
      correct: ['Mon', 'frère', 'me', 'manque.'],
      translation: 'I miss my brother. (literally: My brother is missing to me.)',
    },
    {
      type: 'multiple_choice',
      instruction: "You're on the phone with your mother. She lives far away. You want to say 'I miss you' to her.",
      question: 'Which is correct?',
      options: [
        { text: 'Tu me manques, maman.', correct: true },
        { text: 'Je te manque, maman.', correct: false },
        { text: 'Je manque toi, maman.', correct: false },
      ],
      explanation: "'Je te manque' actually means 'You miss ME' — the inverted form. 'Je manque toi' is direct English-to-French and just wrong. The right form: 'Tu me manques' = I miss you.",
    },
    {
      type: 'translate',
      instruction: 'Type in French',
      prompt: 'I will visit my grandmother.',
      correct: ['Je vais visiter ma grand-mère.', 'je vais visiter ma grand-mère.', 'Je vais visiter ma grand-mere.', 'je vais visiter ma grand-mere.'],
    },
  ],

  rwenDialogue: {
    intro: "Phone call with your grand-mère. She's been waiting all week to hear from you.",
    lines: [
      {
        speaker: 'npc',
        target: 'Allô? Ah, c\'est toi! Tu me manques tellement.',
        native: 'Hello? Ah, it\'s you! I miss you so much.',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Toi aussi, grand-mère. Tu me manques.', native: 'Me too, grandma. I miss you.', correct: true, feedback: 'You did it. Tu me manques. The hardest sentence in French, said cleanly.' },
          { target: 'Je te manque aussi.', native: 'You miss me too.', correct: false, feedback: 'Careful — that means SHE misses YOU. You want to say YOU miss her: tu me manques.' },
          { target: 'Je manque toi aussi.', native: '(broken French)', correct: false, feedback: "That's English word order in French. Use the inverted form: tu me manques." },
        ],
      },
      {
        speaker: 'npc',
        target: 'Tu peux venir me visiter dimanche?',
        native: 'Can you come visit me Sunday?',
      },
      {
        speaker: 'rwen',
        rwenLine: "She said 'me visiter' — to visit me. The 'me' goes BEFORE the verb in French. You're now hearing pronoun placement without thinking. That's a real shift.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. The big one — type from memory.',
    prompts: [
      {
        prompt: 'I miss you (informal, in French)',
        correct: ['Tu me manques', 'tu me manques'],
      },
      {
        prompt: 'I miss my brother (in French)',
        correct: ['Mon frère me manque', 'mon frère me manque', 'Mon frère me manque.', 'mon frère me manque.'],
      },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Think of one person — family or friend — you genuinely miss. Whisper or text them: 'Tu me manques.' Three words, French inverted. Feel the strange shape of it on the second try.",
    rwenSignoff: "The hardest sentence in French is now in your mouth. À demain.",
  },

  phase8: {
    scenario: "Phone call with your grand-mère. She's lonely, you haven't called in three weeks, and the conversation is going to be emotional. She'll tell you she misses you, and you'll need to say it back — using the dreaded 'tu me manques' inversion. She'll also ask if you'll come visit. You need to handle BOTH manquer (with the right inversion) and visiter naturally.",
    rwenRole: "Mamie — your grandmother, ~80, voice warm and a little wavering. Will say 'tu me manques tellement' more than once. Asks about Sunday visits. Will gently giggle if you mix up 'tu me manques' / 'je te manque' but won't grade harshly — she just wants to hear your voice.",
    successCriteria: "User correctly says 'Tu me manques' (NOT 'Je te manque' or 'Je manque toi') at least once back to her. AND user uses either 'visiter' (e.g. 'je vais te visiter') or 'appeler' (e.g. 'je vais t'appeler') in a future-leaning sentence. Inversion correctness is the key gate.",
    estimatedMinutes: 4,
    bonusXp: 5,
  },
};

export default lesson;

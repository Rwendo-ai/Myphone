import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm04-l05-pronouns',
  module: 4,
  lesson: 5,
  title: 'Ako, Ikaw, Siya — I, You, He/She',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Tagalog has a small gift for English speakers: there's no 'he' or 'she'. Just 'siya' — for everyone. No guessing pronouns, no awkward defaults. The same little word covers your dad, your nanay, your friend, your cat. Liberating.",
    culturalNote: "Tagalog has zero grammatical gender in pronouns. 'Siya' is used for any human (and sometimes pets). When LGBTQ+ Filipinos talk about themselves and others, the language naturally avoids gendering — many find this culturally affirming. English speakers tend to feel a small jolt of relief on this lesson.",
  },

  chunks: [
    {
      id: 'ako',
      target: 'Ako',
      native: 'I (in focus)',
      literal: 'I',
      emoji: '🙋',
      phonetic: 'ah-KO',
      audioRef: null,
    },
    {
      id: 'ikaw',
      target: 'Ikaw',
      native: 'You (in focus, singular)',
      literal: 'You',
      emoji: '👉',
      phonetic: 'ee-KOW',
      audioRef: null,
    },
    {
      id: 'siya',
      target: 'Siya',
      native: 'He / she (no gender)',
      literal: '3rd-person',
      emoji: '🧑',
      phonetic: 'shee-YA',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Pronouns with no gender',
    explanation: "These three are the focus-form pronouns — they replace 'ang + noun'. 'Siya' covers both he and she; context tells you which. There's also 'ka' (a shortened 'you' that comes after the verb) — but 'ikaw' is what you say at the start of a sentence.",
    examples: [
      { target: 'Ako si Ben', native: 'I am Ben' },
      { target: 'Ikaw ba si Maria?', native: 'Are you Maria?' },
      { target: 'Siya ang guro', native: 'He/she is the teacher' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the Tagalog pronoun to its meaning',
      pairs: [
        { left: 'Ako', right: 'I' },
        { left: 'Ikaw', right: 'You' },
        { left: 'Siya', right: 'He / she' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Complete: "She/he is my friend"',
      sentence: '_____ ang kaibigan ko.',
      options: ['Siya', 'Ako', 'Ikaw'],
      correct: 'Siya',
      context: "Tagalog has no he/she split — 'siya' covers both.",
    },
    {
      type: 'translate',
      instruction: 'Type in Tagalog',
      prompt: 'I (focus pronoun)',
      correct: ['Ako', 'ako'],
    },
    {
      type: 'build_sentence',
      instruction: "Build: 'You are my friend'",
      words: ['kaibigan', 'Ikaw', 'ko', 'ang'],
      correct: ['Ikaw', 'ang', 'kaibigan', 'ko'],
      translation: 'You are my friend',
    },
    {
      type: 'multiple_choice',
      instruction: "Your friend is talking about her brother. Which pronoun does she use?",
      question: "'_____ ay matalino' = He is smart.",
      options: [
        { text: 'Siya', correct: true },
        { text: 'Ako', correct: false },
        { text: 'Ikaw', correct: false },
      ],
      explanation: "'Siya' = he or she. Tagalog doesn't gender pronouns at all.",
    },
    {
      type: 'translate',
      instruction: 'Type in Tagalog',
      prompt: 'He / she (no gender)',
      correct: ['Siya', 'siya'],
    },
  ],

  rwenDialogue: {
    intro: "Your titong is asking about your new co-worker. You've only met them once.",
    lines: [
      {
        speaker: 'npc',
        target: 'Sino ang bago sa opisina?',
        native: "Who's new at the office?",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Siya si Alex, kasama ko', native: "It's Alex, my colleague", correct: true, feedback: "Perfect — 'siya' works for any gender, you stay flexible." },
          { target: 'Ako si Alex', native: 'I am Alex', correct: false, feedback: "'Ako' = I. You're talking ABOUT Alex, not as Alex." },
          { target: 'Ikaw si Alex', native: 'You are Alex', correct: false, feedback: "'Ikaw' = you. You want 'siya' — he/she/they." },
        ],
      },
      {
        speaker: 'npc',
        target: 'Lalaki o babae si Alex?',
        native: 'Is Alex a man or a woman?',
      },
      {
        speaker: 'rwen',
        rwenLine: "See? You said 'siya' and your tito had to ASK the gender — because the pronoun didn't tell him. That's the freedom of Tagalog pronouns.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      {
        prompt: 'I (focus pronoun in Tagalog)',
        correct: ['Ako', 'ako'],
      },
      {
        prompt: 'He / she (in Tagalog — no gender)',
        correct: ['Siya', 'siya'],
      },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "When describing someone today (in your head, in a text, out loud), say 'siya' and notice the small relief of not having to pick. That's a feature, not a bug.",
    rwenSignoff: "Bukas ulit — see you tomorrow. The marker grammar is settling in.",
  },

  phase8: {
    scenario: "You're catching up with a Tagalog-speaking friend who hasn't met your new partner. They keep using 'siya' to ask about them — and you keep using 'siya' to answer. Halfway through, they finally ask the gender directly.",
    rwenRole: "Kaibigan Reina — your friend in her late 20s, curious, asks 'kumusta siya?' (how is he/she?), 'saan siya nakatira?' (where do they live?), then eventually 'lalaki ba siya o babae?' (man or woman?).",
    successCriteria: "User uses 'siya' to refer to their partner at least 3 times before any gender is mentioned. Bonus: user notices and comments on the genderless quality of 'siya'.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;

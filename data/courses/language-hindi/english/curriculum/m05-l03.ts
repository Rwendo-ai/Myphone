import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm05-l03-bhai-behen',
  module: 5,
  lesson: 3,
  title: 'Bhaiyā & Didī — Older Brother, Older Sister',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "English brother is brother. Hindi insists on knowing if he's older or younger. Bhaiyā is your older brother — and you'd never call him just 'bhāī' to his face. Didī is your older sister, and the same rule applies. The age relationship is baked right into the word.",
    culturalNote: "In an Indian joint family, older siblings carry near-parental authority. Bhaiyā/Didī are responsibility-laden titles — older siblings help with school fees, weddings, the works. Younger ones use these titles even with cousin-siblings, even with neighbours' children who are slightly older. Age IS rank.",
  },

  chunks: [
    {
      id: 'bhaiya',
      target: 'भैया (Bhaiyā)',
      native: 'Older brother (or any older male peer, respectfully)',
      literal: 'Bhāī (brother) extended to bhaiyā — older + warm',
      emoji: '👨‍👦',
      phonetic: 'BHAI-yaa',
      audioRef: null,
    },
    {
      id: 'didi',
      target: 'दीदी (Didī)',
      native: 'Older sister (or any older female peer, respectfully)',
      literal: 'Didī — older sister, the protector and confidante',
      emoji: '👩‍👧',
      phonetic: 'DEE-dee',
      audioRef: null,
    },
    {
      id: 'chota_bhai',
      target: 'छोटा भाई (Choṭā bhāī)',
      native: 'Younger brother',
      literal: 'Choṭā (small/younger) + bhāī (brother)',
      emoji: '🧒',
      phonetic: 'CHO-taa BHAA-ee',
      audioRef: null,
    },
  ],

  pattern: {
    name: "Older sibling = own word; younger sibling = 'choṭā/choṭī + sibling'",
    explanation: "Hindi names elder siblings with their OWN word (Bhaiyā, Didī) but younger siblings are described compositionally — choṭā bhāī (younger brother), choṭī bahan (younger sister). The asymmetry encodes hierarchy: elders deserve a dedicated title; younger ones are referenced relatively.",
    examples: [
      { target: 'Mere Bhaiyā', native: 'My older brother' },
      { target: 'Meri Didī', native: 'My older sister' },
      { target: 'Merā choṭā bhāī', native: 'My younger brother' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the sibling term to the precise relationship',
      pairs: [
        { left: 'Bhaiyā', right: 'Older brother' },
        { left: 'Didī', right: 'Older sister' },
        { left: 'Choṭā bhāī', right: 'Younger brother' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Your older sister just walked in. Greet her by title.',
      sentence: 'Namaste, _____!',
      options: ['Didī', 'Bhaiyā', 'Bua'],
      correct: 'Didī',
      context: 'Older sister = Didī. Older brother = Bhaiyā.',
    },
    {
      type: 'translate',
      instruction: 'Type in Romanized Hindi',
      prompt: 'Older brother',
      correct: ['Bhaiyā', 'Bhaiya', 'bhaiya'],
    },
    {
      type: 'multiple_choice',
      instruction: "You want to say 'my younger brother is at school' in Hindi. Which is correct?",
      question: 'Younger brother:',
      options: [
        { text: 'Choṭā bhāī', correct: true },
        { text: 'Bhaiyā', correct: false },
        { text: 'Didī', correct: false },
      ],
      explanation: "Choṭā bhāī = younger brother (literally 'small brother'). Bhaiyā = OLDER brother. Hindi insists on the age direction.",
    },
    {
      type: 'build_sentence',
      instruction: 'Build "My older sister lives in Mumbai"',
      words: ['Mumbai', 'rahti', 'mein', 'Meri', 'didī', 'hain.'],
      correct: ['Meri', 'didī', 'Mumbai', 'mein', 'rahti', 'hain.'],
      translation: 'My older sister lives in Mumbai.',
    },
    {
      type: 'translate',
      instruction: 'Type in Romanized Hindi',
      prompt: 'Older sister',
      correct: ['Didī', 'Didi', 'didi'],
    },
  ],

  rwenDialogue: {
    intro: "Rwen wants to introduce you to his three siblings — one older brother, one older sister, one little brother. Get the titles right.",
    lines: [
      {
        speaker: 'rwen',
        rwenLine: "Yeh mere Bhaiyā hain — Arjun. Yeh meri Didī hain — Anjali. Aur yeh merā choṭā bhāī hai — Rohan.",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Namaste Bhaiyā, namaste Didī, hello Rohan!', native: 'Hello older brother, hello older sister, hello Rohan!', correct: true, feedback: "Older siblings get their respect titles; younger one gets first name. That's exactly the cultural pattern." },
          { target: 'Namaste, brothers and sisters!', native: 'Hello, brothers and sisters (English flat).', correct: false, feedback: "English flattens the hierarchy. In Hindi the elder ones get distinct titles — Bhaiyā for the older brother, Didī for the older sister." },
          { target: 'Namaste choṭe bhāī, namaste choṭī bahan, hello Rohan!', native: 'Hello younger brother, hello younger sister, hello Rohan.', correct: false, feedback: "Wrong direction — Arjun and Anjali are OLDER, so it's Bhaiyā and Didī. 'Choṭā/choṭī' is for younger." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Bhaiyā ko tumhārā Hindi pasand āyā. Didī kah rahī hain — 'naye dost ko ghar mein swāgat hai.'",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'Older brother', correct: ['Bhaiyā', 'Bhaiya', 'bhaiya'] },
      { prompt: 'Older sister', correct: ['Didī', 'Didi', 'didi'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Think of the people who function as 'big sibling' in your life — could be a real older sibling, an older cousin, a senior at work. In Hindi they would be Bhaiyā or Didī. Try mentally giving them that title. Notice how it shifts the relationship.",
    rwenSignoff: "Bhaiyā-Didī — do shabd, ek pūrī riste ki dunyā. Phir milenge.",
  },

  phase8: {
    scenario: "It's the morning of Bhāī Dūj — the festival when sisters tie a tilak on their brothers' foreheads. Rwen's older sister Anjali (Didī) and his younger brother Rohan are in the courtyard. Anjali wants to put tilaks on you AND Rwen since you're family-by-friendship now. You need to greet each sibling by the correct title — and DON'T accidentally call Anjali 'Choṭī Didī'.",
    rwenRole: "Anjali Didī — Rwen's elder sister, ~32, software engineer in Bengaluru, home for the festival; warm but precise about Hindi — she'll gently re-cast wrong titles back at you as a quiet correction.",
    successCriteria: "User uses 'Didī' for the older sister Anjali (NOT 'choṭī bahan' which would be backwards), uses 'Rohan' or 'Choṭā bhāī' for the younger brother (NOT 'Bhaiyā' which would be backwards), and respects the age direction throughout.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;

import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm06-l02-numbers-20-100',
  module: 6,
  lesson: 2,
  title: 'Vingt à Cent — The Wild 70s, 80s, 90s',
  estimatedMinutes: 6,
  xpReward: 25,

  hook: {
    rwenLine: "Today we hit the most beautifully bizarre corner of French. Twenty? Easy. Thirty? Easy. Then France throws maths at you: 70 = 'sixty-ten'. 80 = 'four-twenties'. 90 = 'four-twenties-ten'. Every English speaker stumbles here. We'll make it click — once, for life.",
    culturalNote: "France kept Celtic-style base-20 counting for the 70s, 80s, and 90s. Belgium and Switzerland actually fixed it — they say 'septante' (70), 'octante/huitante' (80), 'nonante' (90). But in France, 'soixante-dix' and 'quatre-vingt-dix' are absolute and non-negotiable. Mastering them is a rite of passage.",
  },

  chunks: [
    {
      id: 'vingt_trente_quarante',
      target: 'vingt, trente, quarante, cinquante, soixante',
      native: '20, 30, 40, 50, 60',
      literal: 'twenty, thirty, forty, fifty, sixty',
      emoji: '🔢',
      phonetic: 'van, trahnt, kah-RAHNT, san-KAHNT, swa-SAHNT',
      audioRef: null,
    },
    {
      id: 'soixante_dix',
      target: 'soixante-dix',
      native: 'seventy (literally: sixty-ten)',
      literal: '60 + 10',
      emoji: '7️⃣',
      phonetic: 'swa-sahnt-DEESS',
      audioRef: null,
    },
    {
      id: 'quatre_vingts_quatre_vingt_dix',
      target: 'quatre-vingts, quatre-vingt-dix',
      native: 'eighty (4×20), ninety (4×20+10)',
      literal: 'four-twenties, four-twenties-ten',
      emoji: '8️⃣',
      phonetic: 'kat-ruh-VAN, kat-ruh-van-DEESS',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'The 70/80/90 maths trick',
    explanation: "Once you hit 70, French stops giving you a fresh word. 70 = 60+10, 71 = 60+11, ... 79 = 60+19. 80 = 4×20. 81 = 4×20+1, ... 90 = 4×20+10, ... 99 = 4×20+19. ONE quirk: 'quatre-vingts' has an 's' when it stands alone (= 80), but DROPS the 's' when followed by another number (quatre-vingt-un = 81).",
    examples: [
      { target: 'soixante-douze', native: '72 (= 60 + 12)' },
      { target: 'quatre-vingts', native: '80 (with -s, on its own)' },
      { target: 'quatre-vingt-quinze', native: '95 (= 4×20 + 15, no -s)' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the French number to the digit',
      pairs: [
        { left: 'trente', right: '30' },
        { left: 'soixante-dix', right: '70' },
        { left: 'quatre-vingts', right: '80' },
        { left: 'quatre-vingt-dix', right: '90' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Complete the calculation',
      sentence: '60 + 15 = soixante-_____',
      options: ['quinze', 'dix', 'cinq'],
      correct: 'quinze',
      context: "75 in French is literally 'sixty-fifteen' — soixante-quinze.",
    },
    {
      type: 'translate',
      instruction: 'Type the French number',
      prompt: '90 (ninety)',
      correct: ['quatre-vingt-dix', 'Quatre-vingt-dix'],
    },
    {
      type: 'build_sentence',
      instruction: 'Build the number 85 (4 × 20 + 5)',
      words: ['quatre-vingt-cinq'],
      correct: ['quatre-vingt-cinq'],
      translation: '85 — four-twenties-five (no -s before the next number)',
    },
    {
      type: 'multiple_choice',
      instruction: "Your French friend says she's 'soixante-treize' years old. How old is she?",
      question: 'Choose the correct age',
      options: [
        { text: '73', correct: true },
        { text: '63', correct: false },
        { text: '83', correct: false },
      ],
      explanation: "soixante (60) + treize (13) = 73. The 70s are built on 'soixante' + 10, 11, 12...",
    },
    {
      type: 'translate',
      instruction: 'Type the French number',
      prompt: '71 (seventy-one)',
      correct: ['soixante et onze', 'Soixante et onze'],
    },
  ],

  rwenDialogue: {
    intro: "You're at a French dinner party. Madame Léclerc, your host, asks how old your grandmother is. She's 87.",
    lines: [
      {
        speaker: 'npc',
        target: 'Et votre grand-mère, elle a quel âge?',
        native: 'And your grandmother, how old is she?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Elle a quatre-vingt-sept ans', native: 'She is 87', correct: true, feedback: 'Yes — 4×20+7, no -s before the seven. You nailed the trickiest range in French.' },
          { target: 'Elle a quatre-vingts-sept ans', native: '(extra -s)', correct: false, feedback: "Almost — drop the 's' on 'vingt' when another number follows: 'quatre-vingt-sept'." },
          { target: 'Elle a soixante-vingt-sept ans', native: '(invented number)', correct: false, feedback: "There's no 'soixante-vingt' in French. 80 = quatre-vingts (4 twenties)." },
        ],
      },
      {
        speaker: 'npc',
        target: 'Quatre-vingt-sept! Toujours en forme?',
        native: 'Eighty-seven! Still going strong?',
      },
      {
        speaker: 'rwen',
        rwenLine: "You just said the hardest number in French casually at a dinner table. That's the click. Once you've felt 'quatre-vingt-sept' come out clean, the rest is downhill.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: '70 (seventy in French)', correct: ['soixante-dix', 'Soixante-dix'] },
      { prompt: '80 (eighty, on its own)', correct: ['quatre-vingts', 'Quatre-vingts'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Say your age out loud in French — and one family member's age in the 70-99 range. Force your mouth through 'soixante-' or 'quatre-vingt-'. Repeat three times until it stops feeling like maths.",
    rwenSignoff: "À demain — we go even bigger: thousands and millions.",
  },

  phase8: {
    scenario: "You're at a French government office filling out a form. The agent asks for your age, your phone's last two digits, your house number, and your French friend's age — and at least two of these numbers must be in the 70-99 range. You answer aloud each time.",
    rwenRole: "Madame Bernard — a fonctionnaire (civil servant), 50s, polite but precise. She types as she listens and asks you to repeat anything unclear. She does NOT slow down to baby-mode.",
    successCriteria: "User correctly produces at least one number in the 70-79 range using 'soixante-' AND at least one in the 80-99 range using 'quatre-vingt-'. Bonus if they correctly drop the -s on 'quatre-vingt' when another digit follows.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;

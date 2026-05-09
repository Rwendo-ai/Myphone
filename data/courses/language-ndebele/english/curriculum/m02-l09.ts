import type { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm02-l09',
  module: 2,
  lesson: 9,
  title: 'Sala kuhle / Hamba kuhle — Goodbye',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Goodbyes in Ndebele split based on who's moving. 'Sala kuhle' = stay well — said to the person staying. 'Hamba kuhle' = go well — said to the person leaving. So the person who walks out the door says 'sala kuhle' to those staying. The host says 'hamba kuhle' to the leaver. Get this backwards and Ndebele speakers will gently smile and correct you.",
    culturalNote: "This split is one of the small markers Ndebele speakers notice in non-natives. Most beginners say 'hamba kuhle' to everyone or 'sala kuhle' to everyone. Getting the direction right — based on who's moving — is a quiet sign you've actually learned the language. It mirrors the same logic in Zulu and most Nguni languages. Plural versions: 'salani kuhle' (stay well, you all) and 'hambani kuhle' (go well, you all).",
  },

  chunks: [
    {
      id: 'sala_kuhle',
      target: 'Sala kuhle',
      native: 'Goodbye (said by leaver to stayer)',
      literal: 'Stay well — what the LEAVER says',
      emoji: '👋',
      phonetic: 'SAH-lah KOO-hleh',
      audioRef: null,
    },
    {
      id: 'hamba_kuhle',
      target: 'Hamba kuhle',
      native: 'Goodbye (said by stayer to leaver)',
      literal: 'Go well — what the STAYER says',
      emoji: '🚶',
      phonetic: 'HAHM-bah KOO-hleh',
      audioRef: null,
    },
    {
      id: 'salani_kuhle',
      target: 'Salani kuhle',
      native: 'Goodbye, you all (stay well)',
      literal: 'Stay well — plural form for groups staying',
      emoji: '👨‍👩‍👧‍👦',
      phonetic: 'sah-LAH-nee KOO-hleh',
      audioRef: null,
    },
    {
      id: 'hambani_kuhle',
      target: 'Hambani kuhle',
      native: 'Goodbye, you all (go well)',
      literal: 'Go well — plural form for groups leaving',
      emoji: '👋',
      phonetic: 'hahm-BAH-nee KOO-hleh',
      audioRef: null,
    },
    {
      id: 'sizabonana',
      target: 'Sizabonana',
      native: "We'll see each other again",
      literal: 'We-will-see-each-other — like "see you later"',
      emoji: '🔁',
      phonetic: 'see-zah-boh-NAH-nah',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Goodbye splits by who moves',
    explanation: "Decide who's leaving the conversation. The leaver says 'sala kuhle' (stay well) — addressing those left behind. The stayer says 'hamba kuhle' (go well) — addressing the one walking out. Plural versions add '-ni': 'salani kuhle' / 'hambani kuhle' for groups. Add 'sizabonana' (we'll see each other) for warmth — like 'see you'.",
    examples: [
      { target: '(leaving) Sala kuhle, mama.', native: 'Goodbye / stay well, mama.' },
      { target: '(staying) Hamba kuhle.', native: 'Goodbye / go well.' },
      { target: 'Sizabonana.', native: "We'll see each other again." },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match phrase to who says it',
      pairs: [
        { left: 'Sala kuhle', right: 'Said BY the leaver TO those staying' },
        { left: 'Hamba kuhle', right: 'Said BY the stayer TO the one leaving' },
        { left: 'Salani kuhle', right: 'Goodbye to a GROUP staying' },
        { left: 'Sizabonana', right: "We'll see each other again" },
      ],
    },
    {
      type: 'multiple_choice',
      instruction: "You're leaving a friend's house. They're staying. What do you say at the door?",
      question: 'Pick the right direction',
      options: [
        { text: 'Sala kuhle.', correct: true },
        { text: 'Hamba kuhle.', correct: false },
        { text: 'Salibonani.', correct: false },
      ],
      explanation: "YOU are leaving — so you say 'stay well' to them. They are staying. They'll reply with 'hamba kuhle' (go well) to you. Reverse this and it's the classic beginner mix-up.",
    },
    {
      type: 'multiple_choice',
      instruction: "Now reverse: a friend just left your house. You're standing at the gate watching them go. What do you call out?",
      question: 'Pick the right direction',
      options: [
        { text: 'Hamba kuhle!', correct: true },
        { text: 'Sala kuhle!', correct: false },
        { text: 'Yebo!', correct: false },
      ],
      explanation: "They're leaving — you stay — so you say 'go well' to them. The person moving is the one who gets 'hamba kuhle'.",
    },
    {
      type: 'translate',
      instruction: 'Type the Ndebele',
      prompt: "We'll see each other again (see you)",
      correct: ['Sizabonana', 'sizabonana'],
    },
  ],

  rwenDialogue: {
    intro: "You've finished a long lunch at a friend's family home. The whole family — three generations — is on the veranda as you head to your car.",
    lines: [
      {
        speaker: 'user',
        userChoices: [
          { target: 'Salani kuhle. Sizabonana.', native: "Stay well, you all. We'll see each other again.", correct: true, feedback: "Plural 'salani' for the group + warm 'sizabonana' close. The grandmother claps her hands lightly." },
          { target: 'Hamba kuhle.', native: 'Go well.', correct: false, feedback: "Wrong direction — YOU'RE leaving, they're staying. 'Hamba kuhle' would tell THEM to go, which makes no sense at their own house." },
          { target: 'Sala kuhle.', native: 'Stay well.', correct: false, feedback: "Right verb but singular. There are several of them — 'salani' (plural) is the natural fit." },
        ],
      },
      {
        speaker: 'npc',
        target: 'Hamba kuhle, ndodana yami. Sizabonana.',
        native: "Go well, my son. We'll see each other again.",
      },
      {
        speaker: 'rwen',
        rwenLine: "Notice the gogo's reply — she said 'hamba kuhle' (go well) because YOU'RE the one leaving. The split holds up perfectly. And she called you 'ndodana yami' — adoption-by-respect again.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'Goodbye — said BY the leaver to those staying', correct: ['Sala kuhle', 'sala kuhle'] },
      { prompt: 'Goodbye — said BY the stayer to the one leaving', correct: ['Hamba kuhle', 'hamba kuhle'] },
      { prompt: "We'll see each other again", correct: ['Sizabonana', 'sizabonana'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Next time you say goodbye to someone in person today, do it in Ndebele — but think first about who's moving. If you're walking out, 'sala kuhle'. If they are, 'hamba kuhle'. The pause to choose IS the lesson.",
    rwenSignoff: "Pick your goodbye by who moves. Hamba kuhle.",
  },

  phase8: {
    scenario: "You've spent the afternoon at a Ndebele friend's family compound in Tsholotsho. As you leave at sunset, you'll need to say goodbye separately to: (1) the grandmother on the porch, (2) your friend who's walking you to the gate, then (3) wave at the children at the gate as you drive off. Three different directions of movement.",
    rwenRole: "Multi-character: Gogo MaSibanda (staying on porch — gets 'sala kuhle, gogo'), your friend Sipho (walking with you partway — eventually you part), kids (staying at gate — get 'salani kuhle').",
    successCriteria: "User says 'Sala kuhle' (or 'Salani') to those staying, accepts 'Hamba kuhle' from them in return, uses the PLURAL 'salani' for the children as a group, and adds 'Sizabonana' for warmth at least once.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;

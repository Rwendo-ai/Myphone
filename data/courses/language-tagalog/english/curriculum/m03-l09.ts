import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm03-l09-asking-them',
  module: 3,
  lesson: 9,
  title: 'Pagtatanong sa kanila — Asking them',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "You've been answering questions for eight lessons — today you flip the table. The mark of a real conversation is the question you ask back. Tagaytay sunset, Mang Roy beside you. 'Kuwentuhan mo ako tungkol sa sarili mo,' you say — and the door swings open.",
    culturalNote: "Filipinos love being asked their story. 'Kuwento' = story. 'Kuwentuhan mo ako' = literally 'tell-story me' = 'tell me about yourself'. The phrase 'tungkol sa ___' (about ___) is the magic connector. Where someone grew up — 'saan ka lumaki' — usually unlocks the warmest part of the conversation: childhood memories of their hometown.",
  },

  chunks: [
    {
      id: 'kuwentuhan-mo-ako',
      target: 'Kuwentuhan mo ako tungkol sa sarili mo',
      native: 'Tell me about yourself',
      literal: 'Tell-story you me about [marker] self your',
      emoji: '🗣️',
      phonetic: 'kweh-tu-HAN mo a-KO toong-KOL sa sa-REE-lee mo',
      audioRef: null,
    },
    {
      id: 'ano-ang-istorya-mo',
      target: 'Ano ang istorya mo?',
      native: "What's your story?",
      literal: 'What [marker] story your?',
      emoji: '📖',
      phonetic: 'a-NO ang ees-TOR-ya mo',
      audioRef: null,
    },
    {
      id: 'saan-ka-lumaki',
      target: 'Saan ka lumaki?',
      native: 'Where did you grow up?',
      literal: 'Where you grew?',
      emoji: '🌳',
      phonetic: 'sa-AN ka loo-MA-kee',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Open questions',
    explanation: "Open questions invite stories, not yes/no. 'Saan' = where, 'Ano' = what, 'Kailan' = when, 'Bakit' = why, 'Paano' = how. 'Tungkol sa ___' = about ___. The pattern 'Kuwentuhan mo ako tungkol sa ___' is the master key — slot in anything you want to hear about: pamilya (family), trabaho (work), bayan mo (your hometown).",
    examples: [
      { target: 'Kuwentuhan mo ako tungkol sa pamilya mo', native: 'Tell me about your family' },
      { target: 'Saan ka lumaki?', native: 'Where did you grow up?' },
      { target: 'Bakit ka lumipat sa Maynila?', native: 'Why did you move to Manila?' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the Tagalog to its meaning',
      pairs: [
        { left: 'Kuwentuhan mo ako tungkol sa sarili mo', right: 'Tell me about yourself' },
        { left: 'Ano ang istorya mo?', right: "What's your story?" },
        { left: 'Saan ka lumaki?', right: 'Where did you grow up?' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Ask Mang Roy about his family',
      sentence: 'Kuwentuhan mo ako ___ sa pamilya mo.',
      options: ['tungkol', 'galing', 'ako'],
      correct: 'tungkol',
      context: "'Tungkol sa ___' = 'about ___'. The connector that turns 'tell me' into 'tell me about ___'.",
    },
    {
      type: 'translate',
      instruction: 'Type in Tagalog',
      prompt: 'Where did you grow up?',
      correct: ['Saan ka lumaki?', 'saan ka lumaki'],
    },
    {
      type: 'build_sentence',
      instruction: 'Ask for their story — put the words in order',
      words: ['ang', 'mo?', 'Ano', 'istorya'],
      correct: ['Ano', 'ang', 'istorya', 'mo?'],
      translation: "What's your story?",
    },
    {
      type: 'multiple_choice',
      instruction: "You want Mang Roy to share something real — not a yes/no answer. What's the best opener?",
      question: 'Choose the warmest open question',
      options: [
        { text: 'Kuwentuhan mo ako tungkol sa sarili mo.', correct: true },
        { text: 'Mabait ka ba?', correct: false },
        { text: 'May asawa ka ba?', correct: false },
      ],
      explanation: "The other two are yes/no — they close the door. 'Kuwentuhan mo ako' opens it.",
    },
    {
      type: 'translate',
      instruction: 'Type in Tagalog',
      prompt: 'Tell me about yourself',
      correct: ['Kuwentuhan mo ako tungkol sa sarili mo', 'kuwentuhan mo ako tungkol sa sarili mo'],
    },
  ],

  rwenDialogue: {
    intro: "Tagaytay, late afternoon. The sun is dipping behind Taal. Mang Roy is sipping his coffee in silence. You decide to flip the conversation — let him tell his story.",
    lines: [
      {
        speaker: 'user',
        userChoices: [
          { target: 'Mang Roy, kuwentuhan mo naman ako tungkol sa sarili mo. Saan ka lumaki?', native: 'Mang Roy, tell me about yourself. Where did you grow up?', correct: true, feedback: 'Beautiful — open invitation plus a specific door. He has somewhere to start.' },
          { target: 'May asawa ka ba?', native: 'Are you married?', correct: false, feedback: "Too direct as an opener — start with 'kuwentuhan mo ako' to let him choose what to share." },
          { target: 'Ano ang trabaho mo?', native: "What's your job?", correct: false, feedback: 'Closed and small — try the open story prompt instead.' },
        ],
      },
      {
        speaker: 'npc',
        target: 'Aba, sa Batangas pala ako lumaki, sa tabi ng dagat.',
        native: "Oh, I grew up in Batangas, by the sea.",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Wow, ang ganda siguro doon!', native: "Wow, it must be beautiful there!", correct: true, feedback: 'Perfect mirror — you reacted to his story, not just nodded.' },
          { target: 'Galing ako sa Australia.', native: "I'm from Australia.", correct: false, feedback: "He just shared — meet him where he is, don't pivot to yourself." },
          { target: 'Saan ka nakatira?', native: 'Where do you live?', correct: false, feedback: "He just told you about Batangas — react first, ask deeper later." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "That's it — that's a real conversation in Tagalog. You opened a door and walked through with him.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'Tell me about yourself (in Tagalog)', correct: ['Kuwentuhan mo ako tungkol sa sarili mo', 'kuwentuhan mo ako tungkol sa sarili mo'] },
      { prompt: 'Where did you grow up? (in Tagalog)', correct: ['Saan ka lumaki?', 'saan ka lumaki'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Ask one Filipino their story today — a colleague, a barista, an in-law on the next call. 'Kuwentuhan mo ako tungkol sa sarili mo.' Then listen.",
    rwenSignoff: "I'll ask you tomorrow what they said. Ingat — go well.",
  },

  phase8: {
    scenario: "Last evening at the Tagaytay language exchange. The sun is setting over Taal. Mang Roy and you are alone on the café terrace. You've spent weeks answering questions about yourself — tonight you turn it around and ask him about his life.",
    rwenRole: "Mang Roy — your warm Tagaytay host; he'll open up when prompted properly, share that he grew up in Batangas by the sea, has three grown kids, and once taught Filipino in Saudi Arabia for five years.",
    successCriteria: "User asks Mang Roy at least two open questions using 'Kuwentuhan mo ako tungkol sa ___', 'Saan ka lumaki?', or 'Ano ang istorya mo?' — and reacts to his answers (not just pivots to themselves) before asking the next.",
    estimatedMinutes: 4,
    bonusXp: 5,
  },
};

export default lesson;

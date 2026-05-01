import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm08-l10-conversation',
  module: 8,
  lesson: 10,
  title: 'Une journée — A whole day in French',
  estimatedMinutes: 9,
  xpReward: 50,

  hook: {
    rwenLine: "Today everything from Module 8 sits down at the same table. Être, avoir, faire, aller, vouloir, the morning reflexives, work hours, evenings, yesterday, tomorrow. One conversation, one day, all of it. This is the lesson where French stops being parts and starts being a person.",
    culturalNote: "When a French friend asks 'Raconte-moi ta journée!' — tell me about your day — they're not asking for a list. They want a small narrative: yesterday's leftovers, today's flow, tomorrow's plan. The French day has past, present, and near future stitched together. That's what the next nine minutes practise.",
  },

  chunks: [
    {
      id: 'raconte_moi_ta_journee',
      target: 'Raconte-moi ta journée',
      native: 'Tell me about your day',
      literal: 'Tell-me your day',
      emoji: '☕',
      phonetic: 'rah-KOHNT mwah tah zhoor-NAY',
      audioRef: null,
    },
    {
      id: 'jai_passe_une_bonne_journee',
      target: "J'ai passé une bonne journée",
      native: 'I had a good day',
      literal: 'I-have spent a good day',
      emoji: '😊',
      phonetic: 'zhay pah-SAY oon BUHN zhoor-NAY',
      audioRef: null,
    },
    {
      id: 'on_se_voit_demain',
      target: 'On se voit demain',
      native: 'See you tomorrow / We\'ll see each other tomorrow',
      literal: 'One self sees tomorrow',
      emoji: '🤗',
      phonetic: 'ohn suh VWAH duh-MAHN',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'A day-in-life — stringing tenses together',
    explanation: "A natural French recap of your day touches three time-zones: passé composé for yesterday/this morning ('j'ai mangé', 'je me suis levé'), present for the now ('je travaille', 'je suis fatigué'), and futur proche for what's next ('je vais dîner', 'demain je vais voir'). The glue between them is small: aujourd'hui, hier, demain, et après. Reflexives keep their pronoun in every tense.",
    examples: [
      { target: "Hier j'ai eu une longue journée. Aujourd'hui je suis crevé. Demain je vais me reposer.", native: "Yesterday I had a long day. Today I'm wiped. Tomorrow I'm going to rest." },
      { target: "Ce matin je me suis levé à 6h, j'ai pris le métro, et là je travaille.", native: "This morning I got up at 6, took the metro, and now I'm working." },
      { target: "On a bien mangé, c'était super, et on se voit demain!", native: "We ate well, it was great, and see you tomorrow!" },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the day-in-life phrase to its meaning',
      pairs: [
        { left: 'Raconte-moi ta journée', right: 'Tell me about your day' },
        { left: "J'ai passé une bonne journée", right: 'I had a good day' },
        { left: 'On se voit demain', right: 'See you tomorrow' },
        { left: "C'était une longue journée", right: 'It was a long day' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Pick the right tense for each time word',
      sentence: "Hier, j'_____ vu un super film.",
      options: ['ai', 'vais', 'suis'],
      correct: 'ai',
      context: "Hier = past. Passé composé with avoir: j'ai vu.",
    },
    {
      type: 'translate',
      instruction: 'Type in French',
      prompt: 'I had a good day',
      correct: ["J'ai passé une bonne journée", "j'ai passé une bonne journée"],
    },
    {
      type: 'build_sentence',
      instruction: 'Drag — "Tomorrow I\'m going to see my friends"',
      words: ['amis', 'mes', 'voir', 'vais', 'Demain', 'je'],
      correct: ['Demain', 'je', 'vais', 'voir', 'mes', 'amis'],
      translation: "Tomorrow I'm going to see my friends.",
    },
    {
      type: 'multiple_choice',
      instruction: "A friend ends a video call. You want to confirm tomorrow's catch-up.",
      question: 'Pick the warmest natural sign-off',
      options: [
        { text: "Allez, on se voit demain. Bonne soirée!", correct: true },
        { text: "Nous nous verrons demain.", correct: false },
        { text: "Au revoir.", correct: false },
      ],
      explanation: "'On se voit demain' is the everyday catch-up phrase — reflexive, futur proche-ish, warm. The futur simple option is technically correct but feels stiff between friends.",
    },
    {
      type: 'translate',
      instruction: 'Type in French — full day-in-life sentence',
      prompt: "Today I worked, and tomorrow I'm going to rest",
      correct: [
        "Aujourd'hui j'ai travaillé, et demain je vais me reposer",
        "aujourd'hui j'ai travaillé, et demain je vais me reposer",
        "Aujourd'hui j'ai travaillé et demain je vais me reposer",
      ],
    },
  ],

  rwenDialogue: {
    intro: "Late evening video call with your French friend Camille. She's curled up on her sofa with tea and asks the magic words: 'Raconte-moi ta journée.' You walk her through it — yesterday, today, tomorrow.",
    lines: [
      {
        speaker: 'npc',
        target: 'Allez, raconte-moi ta journée!',
        native: 'Come on, tell me about your day!',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: "Ce matin je me suis levé à 7h, j'ai travaillé toute la journée, et là je dîne. Demain je vais voir mes parents.", native: "This morning I got up at 7, I worked all day, and now I'm having dinner. Tomorrow I'm going to see my parents.", correct: true, feedback: "Three tenses, reflexive, time markers, all stitched together. That's the whole module in one breath. Bravo." },
          { target: "Je me lève à 7h, je travaille, je dîne, je vois mes parents.", native: "I get up at 7, I work, I have dinner, I see my parents.", correct: false, feedback: "All present tense — but the morning is already past, and the parents are tomorrow. Switch in passé composé and futur proche to mark the time." },
          { target: "Hier je vais me lever et demain j'ai travaillé.", native: "Yesterday I'm going to get up and tomorrow I worked.", correct: false, feedback: "Tenses crossed wires! Hier = passé composé (je me suis levé), demain = futur proche (je vais travailler)." },
        ],
      },
      {
        speaker: 'npc',
        target: 'Ah, super journée! Bon, on se voit demain alors?',
        native: 'Ah, great day! Right, see you tomorrow then?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: "Oui, à demain! Bonne soirée.", native: "Yes, see you tomorrow! Have a good evening.", correct: true, feedback: "Warm, complete, French to the bone. You closed the loop." },
          { target: "Oui, je vais te voir.", native: "Yes, I'm going to see you.", correct: false, feedback: "Grammatically fine but flat — French sign-offs are warmer. 'À demain' or 'on se voit demain' lands better." },
          { target: "Bye!", native: "Bye!", correct: false, feedback: "After all that French — finish in French! 'À demain' is the natural sign-off." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Look at you. Past, present, future, reflexives, faire, aller — all in one conversation. Module 8 belongs to you now.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      {
        prompt: "Tell me about your day (informal)",
        correct: ['Raconte-moi ta journée', 'raconte-moi ta journée', 'Raconte moi ta journée'],
      },
      {
        prompt: "This morning I got up at 7 and tomorrow I'm going to rest",
        correct: [
          "Ce matin je me suis levé à 7h et demain je vais me reposer",
          "ce matin je me suis levé à 7h et demain je vais me reposer",
          "Ce matin je me suis levée à 7h et demain je vais me reposer",
          "Ce matin, je me suis levé à 7h et demain je vais me reposer",
        ],
      },
    ],
  },

  mission: {
    title: "Today's Journey — Module 8 finale",
    task: "Tonight, narrate your whole day in French — out loud, silently, in a notebook, doesn't matter. Yesterday + today + tomorrow. Three time-zones, one story. This is what fluency feels like in slow-motion.",
    rwenSignoff: "Tu as terminé Module 8. Be proud — you can talk about your life now. À demain, et bravo.",
  },

  phase8: {
    scenario: "Late Sunday evening, video call with your French friend Camille from across the world. She has tea, you have coffee, and she opens with 'Raconte-moi ta journée!' Walk her through yesterday's evening, today's hours, tomorrow's plans. She'll ask follow-ups and share her own day in return. This is the final boss of Module 8.",
    rwenRole: "Camille — close French friend, early 30s, warm and curious; opens with 'Raconte-moi ta journée!', asks follow-ups in mixed tenses ('Tu as bien mangé?', 'Tu vas faire quoi demain?'), shares her own day in passé composé + futur proche, ends with 'on se voit cette semaine?'.",
    successCriteria: "User uses ALL THREE tenses across the conversation: passé composé (j'ai mangé / je me suis levé / j'ai vu), present (je travaille / je suis / j'ai), and futur proche (je vais + infinitive). At least one reflexive verb appears with correct pronoun. User uses 'à demain' or 'on se voit demain' to close. No major tense crossings (no 'hier je vais...' or 'demain j'ai mangé').",
    estimatedMinutes: 4,
    bonusXp: 5,
  },
};

export default lesson;

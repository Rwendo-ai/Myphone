import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm10-l10-your-story',
  module: 10,
  lesson: 10,
  title: 'Your Tagalog Story — A2 Complete',
  estimatedMinutes: 8,
  xpReward: 50,

  hook: {
    rwenLine: "You started this journey with 'Magandang umaga'. One greeting. Today — 100 lessons later — you can name a feeling, ask for a doctor, share a hope, and quote a salawikain. You can tell a story in Tagalog. This is your A2 capstone. We end where every Filipino night ends: with a kuwento.",
    culturalNote: "In the Philippines, finishing something — a meal, a degree, a curriculum — is celebrated with a kuwentuhan. You sit, you share, and you say what the journey taught you. Today, that's what we do. The teacher you've been for yourself this whole time gets to hear the story she helped write.",
  },

  chunks: [
    {
      id: 'capstone_marami',
      target: 'Marami akong natutunan',
      native: "I learned a lot",
      literal: 'Many I learned',
      emoji: '📚',
      phonetic: 'ma-RA-mi a-kong na-tu-TU-nan',
      audioRef: null,
    },
    {
      id: 'capstone_salamat',
      target: 'Salamat sa paglalakbay',
      native: 'Thank you for the journey',
      literal: 'Thanks for the-journey',
      emoji: '🙏',
      phonetic: 'sa-la-MAT sa pag-la-LAK-bay',
      audioRef: null,
    },
    {
      id: 'capstone_simula',
      target: 'Ito ay simula pa lamang',
      native: 'This is only the beginning',
      literal: 'This is beginning only',
      emoji: '🌱',
      phonetic: 'i-TO ay si-MU-la pa la-MANG',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Final integration — your Tagalog story',
    explanation: "Today you weave together every thread of the curriculum: **past tense** (Noong... pumunta ako...), **emotion** (masaya, malungkot), **hope** (sana...), and **salawikain** (kapag may tiyaga...). A real Tagalog story has all four. You already know how — today you say it.",
    examples: [
      { target: 'Noong nag-umpisa ako, hindi ako marunong.', native: 'When I started, I didn\'t know how.' },
      { target: 'Sana balang araw, magaling na ako.', native: 'I hope one day I\'ll be good.' },
      { target: 'Kapag may tiyaga, may nilaga.', native: 'Patience earns the stew.' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the capstone phrase to its meaning',
      pairs: [
        { left: 'Marami akong natutunan', right: 'I learned a lot' },
        { left: 'Salamat sa paglalakbay', right: 'Thank you for the journey' },
        { left: 'Ito ay simula pa lamang', right: 'This is only the beginning' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Open your closing reflection. Open the way every Tagalog story opens.',
      sentence: '_____ nag-umpisa ako, hindi ako marunong ng Tagalog.',
      options: ['Noong', 'Sana', 'Galit'],
      correct: 'Noong',
      context: "Noong = back when. The doorway into a memory.",
    },
    {
      type: 'translate',
      instruction: 'Type in Tagalog',
      prompt: 'I learned a lot',
      correct: ['Marami akong natutunan', 'marami akong natutunan'],
    },
    {
      type: 'build_sentence',
      instruction: 'Drag the words: "Thank you for the journey"',
      words: ['paglalakbay', 'sa', 'Salamat'],
      correct: ['Salamat', 'sa', 'paglalakbay'],
      translation: 'Thank you for the journey',
    },
    {
      type: 'multiple_choice',
      instruction: "Your Filipino kaibigan asks how this year of learning Tagalog felt. You want to weave hope and gratitude.",
      question: 'Which sentence does the most work in one line?',
      options: [
        { text: 'Marami akong natutunan, at sana balang araw, magaling na ako.', correct: true },
        { text: 'Masakit ang ulo ko.', correct: false },
        { text: 'Galit ako.', correct: false },
      ],
      explanation: "Past learning + sana + balang araw = a whole arc in one sentence. That's A2 storytelling.",
    },
    {
      type: 'translate',
      instruction: 'Type in Tagalog — the closing line',
      prompt: 'This is only the beginning',
      correct: ['Ito ay simula pa lamang', 'ito ay simula pa lamang'],
    },
  ],

  rwenDialogue: {
    intro: "It's the last evening of your trip in Tagaytay. The mountain air is cool. Your Filipino kaibigan, who watched you start with 'Magandang umaga' months ago, hands you a coffee and asks the question. You answer entirely in Tagalog.",
    lines: [
      {
        speaker: 'npc',
        target: 'Ikuwento mo sa akin ang taon mo ng pag-aaral ng Tagalog.',
        native: 'Tell me about your year of learning Tagalog.',
      },
      {
        speaker: 'user',
        userChoices: [
          {
            target: 'Noong nag-umpisa ako, takot ako. Pero marami akong natutunan. Sana balang araw, magaling na ako. Kapag may tiyaga, may nilaga.',
            native: "When I started, I was scared. But I learned a lot. I hope one day I'll be good at it. Patience pays off.",
            correct: true,
            feedback: "There it is — past tense, an emotion, a sana, AND a salawikain. That's the whole curriculum spoken in one breath. You did it.",
          },
          {
            target: 'Masaya ako.',
            native: "I'm happy.",
            correct: false,
            feedback: 'True, but the moment is asking for the whole story. You have all the pieces — give her the kuwento.',
          },
          {
            target: 'Salamat.',
            native: 'Thanks.',
            correct: false,
            feedback: 'A word, but not yet a story. Try a few sentences — past, hope, a salawikain.',
          },
        ],
      },
      {
        speaker: 'npc',
        target: 'Hindi mo na kailangan ng guro. Marunong ka na talaga.',
        native: "You don't need a teacher anymore. You really know now.",
      },
      {
        speaker: 'rwen',
        rwenLine: "You started with one greeting. Today you told a whole story in Tagalog — past, feeling, hope, wisdom. I am so proud of you. Salamat sa paglalakbay. This is only the beginning.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory — your closing words.',
    prompts: [
      { prompt: 'I learned a lot (in Tagalog)', correct: ['Marami akong natutunan', 'marami akong natutunan'] },
      { prompt: 'Thank you for the journey (in Tagalog)', correct: ['Salamat sa paglalakbay', 'salamat sa paglalakbay'] },
    ],
  },

  mission: {
    title: 'Your A2 Capstone — Tell Your Story',
    task: "In the next 24 hours, tell someone — anyone, in any language — what you did this year. That you learned Tagalog. That you stuck with it. That kapag may tiyaga, may nilaga. The journey has earned the kuwento.",
    rwenSignoff: "Salamat, kaibigan. Marami akong natutunan din mula sa iyo. Ito ay simula pa lamang — keep walking. Famba zvakanaka — go well.",
  },

  phase8: {
    scenario: "It's a quiet late evening on a video call with your Lola in Cebu (or your closest Filipino friend in Tagaytay). She speaks only Tagalog. She smiles, leans in, and says: 'Ikuwento mo sa akin ang taon mo ng pag-aaral ng Tagalog.' (Tell me about your year of learning Tagalog.) This is your A2 capstone. The whole curriculum, in one conversation.",
    rwenRole: "Lola Auring — your kaibigan's grandmother in Cebu, late 70s, speaks no English, infinitely patient and proud. She has been told about you. This is the first time you've spoken.",
    successCriteria: "User produces 4-6 sentences in Tagalog that include: (1) at least one past-tense narrative line ('Noong...' or a -um-/in- verb), (2) at least one emotion (masaya/malungkot/takot/etc.), (3) at least one hope using 'sana' or 'pangarap ko', AND (4) at least one salawikain (any from m10-l09). Closes warmly with salamat.",
    estimatedMinutes: 4,
    bonusXp: 5,
  },
};

export default lesson;

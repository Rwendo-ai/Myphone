import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm10-l08-kahani-sunao',
  module: 10,
  lesson: 8,
  title: 'Kahani Sunao — Telling a Story',
  estimatedMinutes: 6,
  xpReward: 30,

  hook: {
    rwenLine: "Indian families don't watch stories — they tell them. Across dinners, at weddings, on long train journeys. Today: how to begin a story in Hindi the way grandparents do — 'एक बार की बात है' (ek baar ki baat hai — once upon a time) — and how to keep the room with you while you tell it.",
    culturalNote: "The classical Hindi story-opener is 'एक राजा था...' (ek raja tha — there was a king...) or 'एक बार की बात है' (once there was a thing of...). Listeners traditionally respond 'haan' (yes) or 'phir?' (then?) every few sentences — they're not interrupting, they're keeping the story alive. Silence from a Hindi audience means you've lost them.",
  },

  chunks: [
    {
      id: 'ek_baar_ki_baat_hai',
      target: 'एक बार की बात है — Ek baar ki baat hai',
      native: 'Once upon a time / There was a time when',
      literal: 'One time of matter is',
      emoji: '📖',
      phonetic: 'ek BAAR kee baat hai',
      audioRef: null,
    },
    {
      id: 'main_chhota_tha',
      target: 'मैं छोटा था — Main chhota tha',
      native: 'I was young / I was small (male)',
      literal: 'I small was (male)',
      emoji: '⏳',
      phonetic: 'mayn CHHO-ta tha',
      audioRef: null,
    },
    {
      id: 'phir_kya_hua',
      target: 'फिर क्या हुआ? — Phir kya hua?',
      native: 'Then what happened?',
      literal: 'Then what happened',
      emoji: '👂',
      phonetic: 'PHIR kya hu-aa',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'The past-tense story frame — tha/thi (was) + hua (happened)',
    explanation: "Hindi storytelling rests on two past-tense verbs. था/थी (tha/thi — was) sets the scene: 'main chhota tha' (I was small). हुआ/हुई (hua/hui — happened) drives the events: 'kuch ajeeb hua' (something strange happened). Tha for state, hua for action — chain them and you have a story.",
    examples: [
      { target: 'Ek baar ki baat hai... — एक बार की बात है...', native: 'Once upon a time...' },
      { target: 'Main chhota tha, mera ghar Jaipur mein tha — मैं छोटा था, मेरा घर जयपुर में था', native: 'I was young, my home was in Jaipur' },
      { target: 'Ek din kuch ajeeb hua — एक दिन कुछ अजीब हुआ', native: 'One day something strange happened' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the storytelling phrase to its meaning',
      pairs: [
        { left: 'Ek baar ki baat hai', right: 'Once upon a time' },
        { left: 'Main chhota tha', right: 'I was young (male)' },
        { left: 'Phir kya hua?', right: 'Then what happened?' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Begin a story',
      sentence: 'Ek _____ ki baat hai...',
      options: ['baar', 'din', 'ghar'],
      correct: 'baar',
      context: 'Once upon a time...',
    },
    {
      type: 'translate',
      instruction: 'Type in Romanized Hindi',
      prompt: 'Once upon a time',
      correct: ['Ek baar ki baat hai', 'ek baar ki baat hai'],
    },
    {
      type: 'multiple_choice',
      instruction: "You're telling your story to a Hindi-speaking elder. They say 'phir kya hua?'. What do they want?",
      question: "What does 'phir kya hua?' signal?",
      options: [
        { text: 'They are listening and want you to keep going', correct: true },
        { text: 'They are bored and want you to stop', correct: false },
        { text: 'They are correcting your Hindi', correct: false },
      ],
      explanation: "'Phir kya hua?' (then what happened?) is the classical Hindi audience response — it means they are with you. Silence is the bad sign, not the question.",
    },
    {
      type: 'build_sentence',
      instruction: "Build 'When I was young, my home was in Mumbai'",
      words: ['Jab', 'main', 'chhota', 'tha,', 'mera', 'ghar', 'Mumbai', 'mein', 'tha.'],
      correct: ['Jab', 'main', 'chhota', 'tha,', 'mera', 'ghar', 'Mumbai', 'mein', 'tha.'],
      translation: 'When I was young, my home was in Mumbai',
    },
    {
      type: 'translate',
      instruction: 'Type in Romanized Hindi',
      prompt: 'Then what happened?',
      correct: ['Phir kya hua?', 'Phir kya hua', 'phir kya hua?', 'phir kya hua'],
    },
  ],

  rwenDialogue: {
    intro: "Rwen settles in like a child. He wants a story. From your life. In Hindi.",
    lines: [
      {
        speaker: 'rwen',
        rwenLine: "Mujhe ek kahani sunao. Aapke bachpan ki. Hindi mein. Ek baar ki baat hai...",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Ek baar ki baat hai. Main chhota tha. Mera ghar ek chhote shahar mein tha. Ek din kuch ajeeb hua...', native: "Once upon a time. I was young. My home was in a small town. One day something strange happened...", correct: true, feedback: "Classic four-beat opening — frame, age, place, hook. Rwen leans in: 'Phir kya hua?'" },
          { target: 'Main khush hoon', native: 'I am happy', correct: false, feedback: "Tell a story, not a feeling — 'Ek baar ki baat hai. Main chhota tha. Mera ghar... mein tha.'" },
          { target: 'Theek hai', native: "Okay", correct: false, feedback: "Begin properly — 'Ek baar ki baat hai. Main chhota tha...' Then go." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Phir kya hua? Hindi kahani sunaane ke liye banai gayi hai — Hindi was made for storytelling. Aap shuruwat kar chuke hain.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'Once upon a time', correct: ['Ek baar ki baat hai', 'ek baar ki baat hai'] },
      { prompt: 'Then what happened?', correct: ['Phir kya hua?', 'Phir kya hua', 'phir kya hua?', 'phir kya hua'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Tell a one-minute story from your childhood out loud, in Hindi. Begin with 'Ek baar ki baat hai. Main chhota tha...' Three sentences is enough. Listen to your own voice carrying a story in Hindi.",
    rwenSignoff: "Har zindagi ek kahani hai — every life is a story. Phir milenge.",
  },

  phase8: {
    scenario: "A Sunday family lunch at your great-aunt's flat in Old Delhi. The plates are cleared, chai is being poured, and Mausi-ji turns to you and says: 'Hum tumhari kahani sunna chahte hain — bachpan ki. Hindi mein bolna.' Tell us your story — childhood — in Hindi. The room goes quiet.",
    rwenRole: "Mausi-ji — your great-aunt, ~78, the family's keeper of stories; she will respond with 'haan' and 'phir?' every few lines if you're holding her, with silence if you're not.",
    successCriteria: "User opens with 'Ek baar ki baat hai' (NOT 'main bachpan mein...' which skips the frame), uses past-tense 'tha/thi' for state and 'hua/hui' for events, AND tells at least 3-4 sentences forming a tiny arc (setting → middle event → resolution or punchline). Bonus if they end on an emotion like 'aaj bhi yaad hai' (I still remember today).",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;

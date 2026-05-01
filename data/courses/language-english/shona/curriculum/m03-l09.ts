import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm03-l09-asking-them',
  module: 3,
  lesson: 9,
  title: 'Asking about them — Kubvunza nezvavo',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Hurukuro yakanaka inoda kupindurana — kwete iwe chete uchitaura. Nhasi tinodzidza kudzosera mibvunzo: 'Tell me about yourself', 'What's your story?', 'Where did you grow up?'. Iyi inoita kuti munhu mutsva anzwe kuti unokwanisa kudaira.",
    culturalNote: "MuChiShona, kubvunza nezvevatsva itsika yakanaka — inoratidza kuti unoda kuziva munhu. MuChiNgezi zvakafanana, asi mibvunzo inoda kuva yakaderera ('Tell me about yourself' inoshanda muma professional setting). 'What's your story?' inoshanda zvikuru pakati peshamwari — ratidza kunyaradza kunoita.",
  },

  chunks: [
    {
      id: 'tell_me_about_yourself',
      target: 'Tell me about yourself',
      native: 'Ndiudze nezvako',
      literal: 'Tell me about yourself',
      emoji: '👂',
      phonetic: 'tel-mee-uh-BOWT-yor-self',
      audioRef: null,
    },
    {
      id: 'whats_your_story',
      target: "What's your story?",
      native: 'Nyaya yako ndeye?',
      literal: 'What is your story?',
      emoji: '📖',
      phonetic: 'wuts-yor-STOR-ee',
      audioRef: null,
    },
    {
      id: 'where_did_you_grow_up',
      target: 'Where did you grow up?',
      native: 'Wakakurira kupi?',
      literal: 'Where did you grow up?',
      emoji: '🏡',
      phonetic: 'wair-did-yoo-GROH-up',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Open questions',
    explanation: "Mibvunzo yakavhurika (open questions) inotanga ne 'What', 'Where', 'How', 'Tell me ...'. Inounza mhinduro yakareba — kwete 'yes/no' chete. Mhuza ye 'Where did you grow up?' inotofanira kuva ne 'did' (past tense) pamberi pe 'you'. 'Tell me about yourself' inoshanda zvinoenderana — pasina mubvunzo wakatemwa.",
    examples: [
      { target: 'Tell me about yourself',     native: 'Ndiudze nezvako' },
      { target: "What's your story?",          native: 'Nyaya yako ndeye?' },
      { target: 'Where did you grow up?',      native: 'Wakakurira kupi?' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Sangana mibvunzo nezvayinoreva',
      pairs: [
        { left: 'Tell me about yourself', right: 'Ndiudze nezvako' },
        { left: "What's your story?",      right: 'Nyaya yako ndeye?' },
        { left: 'Where did you grow up?',  right: 'Wakakurira kupi?' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Nyora muChiNgezi',
      prompt: 'Ndiudze nezvako',
      correct: ['Tell me about yourself', 'tell me about yourself', 'Tell me about yourself.', 'tell me about yourself.'],
    },
    {
      type: 'translate',
      instruction: 'Nyora muChiNgezi',
      prompt: 'Wakakurira kupi?',
      correct: ['Where did you grow up?', 'where did you grow up?', 'Where did you grow up'],
    },
    {
      type: 'fill_blank',
      instruction: "Zadzisa mubvunzo wepast tense",
      sentence: "Where ____ you grow up?",
      options: ['did', 'do', 'are'],
      correct: 'did',
      context: "Mubvunzo une 'grow up' (past) — unoda 'did'.",
    },
    {
      type: 'build_sentence',
      instruction: 'Ronga mubvunzo',
      words: ['Tell', 'me', 'about', 'yourself'],
      correct: ['Tell', 'me', 'about', 'yourself'],
      translation: 'Ndiudze nezvako',
    },
    {
      type: 'build_sentence',
      instruction: 'Ronga mubvunzo wenyaya',
      words: ["What's", 'your', 'story'],
      correct: ["What's", 'your', 'story'],
      translation: 'Nyaya yako ndeye?',
    },
  ],

  rwenDialogue: {
    intro: "Wapindurana zita nemumwe muHarare. Iye akupa nyaya yake — zvino yatova nguva yekuti udzosere.",
    lines: [
      { speaker: 'npc', target: "So that's me. And you?", native: 'Saka ndizvo izvi. Iwe?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Tell me a bit more about yourself first — where did you grow up?", native: 'Ndiudze zvishoma nezvako tanga — wakakurira kupi?', correct: true,  feedback: "Wakwanisa — wakadzosera mubvunzo, watotaridza kuti unonzwa." },
          { target: "Me too.",                                                            native: 'Iniwo.',                                                       correct: false, feedback: "Yakapfupika — pasina mubvunzo, hurukuro inomira." },
          { target: "Where you grow up?",                                                 native: 'Wakakurira kupi?',                                              correct: false, feedback: "Wakanganwa 'did' — itoti 'Where did you grow up?'." },
        ],
      },
      { speaker: 'npc', target: "Oh — I grew up in Bulawayo, actually.", native: 'Aaa — ndakakurira kuBulawayo chaiko.' },
      {
        speaker: 'rwen',
        rwenLine: "Wakwanisa! Wakaita hurukuro yakaringana — wapindurana, wodzosera mubvunzo. Itsika yakanaka.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Pasina kutarisa kumashure. Nyora muChiNgezi.',
    prompts: [
      { prompt: 'Ndiudze nezvako (in English)',         correct: ['Tell me about yourself', 'tell me about yourself', 'Tell me about yourself.', 'tell me about yourself.'] },
      { prompt: 'Wakakurira kupi? (in English)',         correct: ['Where did you grow up?', 'where did you grow up?', 'Where did you grow up'] },
    ],
  },

  mission: {
    title: 'Basa raNhasi',
    task: "Pa hurukuro inotevera, edza kubvunza mibvunzo miviri yakavhurika muChiNgezi — 'Tell me about yourself' kana 'Where did you grow up?'. Tarisa kuti une 'did' kana wamubvunza zvekare.",
    rwenSignoff: "Wakwanisa. Tichaonana mangwana.",
  },

  phase8: {
    scenario: "You've just exchanged hellos with someone new at a community event. They've already shared a bit about themselves — now it's time to turn the small talk back to them.",
    rwenRole: "Sipho, 30, a friend-of-a-friend from Bulawayo who's just told you about their job. Open, willing to share more if asked.",
    successCriteria: "User asks at least two open questions ('Tell me about ...', 'Where did you ...?', 'What's your ...?'), uses 'did' correctly in past-tense questions, and reacts to one of Sipho's answers before asking the next.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;

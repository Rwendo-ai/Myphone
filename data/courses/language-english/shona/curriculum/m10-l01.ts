import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm10-l01-happy-sad',
  module: 10,
  lesson: 1,
  title: 'Happy & Sad — Kufara nekusuwa',
  estimatedMinutes: 5,
  xpReward: 30,

  hook: {
    rwenLine: "MuChiShona, manzwiro acho anowanzopfekedzwa muviri: 'ndine moyo unorwadza' (ndine moyo unorwadza), 'mwoyo wangu wakapfava'. MuChiNgezi, vanhu vanowanzotaurа ne adjective yakajeka: 'I'm happy', 'I'm sad'. Hapana kunyepedzera — chinangwa kukuonesa kuti uri sei.",
    culturalNote: "Kunenge kunzwika kusina hutsika kuChiShona kutaura 'I'm sad' kunaani — sezvinonzi tinotamba nemoyo. Asi muChiNgezi izvi zvinokurudzirwa, kunyanya kuvanachiremba vepfungwa (therapists), kushamwari yepedyo, kana mukati mefamily. 'It made me feel...' inopa nzira yetauro kushandura nyaya — chinhu chakaitika, ndakanzwa sei. Iyi pattern haipo zvakanyatsoda muChiShona — uchaona musiyano paunoirumura.",
  },

  chunks: [
    {
      id: 'im_happy',
      target: "I'm happy",
      native: 'Ndinofara',
      literal: 'I-am happy',
      emoji: '😊',
      phonetic: 'aym-HAP-ee',
      audioRef: null,
    },
    {
      id: 'im_sad',
      target: "I'm sad",
      native: 'Ndakasuwa',
      literal: 'I-am sad',
      emoji: '😔',
      phonetic: 'aym-SAD',
      audioRef: null,
    },
    {
      id: 'made_me_feel',
      target: 'It made me feel...',
      native: 'Zvakaita kuti ndinzwe...',
      literal: 'it-made that I-feel',
      emoji: '💭',
      phonetic: 'it-MAYD-mee-FEEL',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Emotion adjectives — direct, not somatic',
    explanation: "MuChiNgezi, manzwiro anotaurwa zvakananga ne 'I'm + adjective': 'I'm happy', 'I'm sad', 'I'm tired', 'I'm proud'. Hapana 'I have a heart that...' — hutsika ihwehwo (somatic) hauwanzo shanda. Wedzera 'today' kana 'a little' kuti urambidze: 'I'm a little sad today.' Pa nyaya inotsanangura, shandisa 'It made me feel ___' — chinhu chakaitika, manzwiro ako akashanduka.",
    examples: [
      { target: "I'm happy today.",                              native: 'Ndinofara nhasi.' },
      { target: "I'm a little sad — but I'll be okay.",          native: 'Ndakasuwa zvishoma — asi ndichanaka.' },
      { target: "It made me feel proud.",                        native: 'Zvakaita kuti ndinzwe ndichidada.' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Sangana mashoko echiNgezi nezviri muChiShona',
      pairs: [
        { left: "I'm happy",            right: 'Ndinofara' },
        { left: "I'm sad",              right: 'Ndakasuwa' },
        { left: 'It made me feel...',   right: 'Zvakaita kuti ndinzwe...' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Nyora muChiNgezi',
      prompt: 'Ndinofara nhasi.',
      correct: ["I'm happy today.", "I am happy today.", "i'm happy today.", "I'm happy today"],
    },
    {
      type: 'translate',
      instruction: 'Nyora muChiNgezi',
      prompt: 'Ndakasuwa zvishoma nhasi.',
      correct: ["I'm a little sad today.", "I am a little sad today.", "I'm a bit sad today.", "i'm a little sad today."],
    },
    {
      type: 'build_sentence',
      instruction: "Vaka chirevo: 'It made me feel happy'",
      words: ['feel', 'It', 'happy.', 'made', 'me'],
      correct: ['It', 'made', 'me', 'feel', 'happy.'],
      translation: 'Zvakaita kuti ndinzwe ndichifara',
    },
    {
      type: 'fill_blank',
      instruction: 'Zadzisa — manzwiro ako mushure mekutarisa nhau dzinosuwisa',
      sentence: "Watching the news, I felt _____.",
      options: ['sad', 'sadly', 'sadness'],
      correct: 'sad',
      context: "Mushure me 'I felt' tinoshandisa adjective (sad), kwete adverb (sadly) kana noun (sadness).",
    },
    {
      type: 'multiple_choice',
      instruction: 'Sarudza yakanaka',
      question: "A friend asks how you are. You're not okay but not terrible. What's most natural?",
      options: [
        { text: "I'm a little sad today, but I'll be okay.", correct: true },
        { text: "I have a heart that hurts.",                  correct: false },
        { text: "Sad me much.",                                  correct: false },
      ],
      explanation: "ChiNgezi chinoda direct adjective: 'I'm a little sad'. 'I have a heart that hurts' inozadzika muChiShona asi inonzwika senyaya yekudaro muChiNgezi — asi haina kushaisha, inongo nyatsoda kuturikira.",
    },
  ],

  rwenDialogue: {
    intro: "Wasangana neumwe shamwari yako anotaura ChiNgezi. Vakubvunza kuti uri sei nhasi — vari kuda mhinduro yepachokwadi, kwete 'I'm fine' yekungoita.",
    lines: [
      { speaker: 'npc', target: "How are you really feeling today?", native: 'Uri kunzwa sei chaizvo nhasi?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "I'm a little sad today. The news made me feel heavy.", native: 'Ndakasuwa zvishoma nhasi. Nhau dzakaita kuti ndinzwe ndichirema.', correct: true, feedback: "Wakwanisa — adjective yakajeka ('sad'), wedzera 'a little' kuti rerusire, uye 'It made me feel ___' inotsanangura. Yatambidza pachokwadi pasina kuwedzera." },
          { target: "I'm fine, thanks.", native: 'Ndiri zvakanaka, ndatenda.', correct: false, feedback: "Yakareruka asi shamwari iri kubvunza pachokwadi — edza 'I'm a little sad today' kana 'I'm okay, but...' kuti uvhure mukana wehurukuro." },
          { target: "Ndine moyo unorwadza.", native: 'Ndine moyo unorwadza.', correct: false, feedback: "ChiShona chete — shanduri yakawana muChiNgezi: 'I'm sad' kana 'My heart is heavy'. Asi pachokwadi 'I'm sad' ndiyo yakapusa." },
        ],
      },
      { speaker: 'npc', target: "Thanks for being honest. I'm here.", native: 'Ndatenda nekuva pachokwadi. Ndiri pano.' },
      {
        speaker: 'rwen',
        rwenLine: "Wakwanisa! 'I'm a little sad' inopa pachokwadi pasina kunyanya kurema. 'It made me feel heavy' inoshanda padivi pa 'sad' kutsanangura chiitiko. Pakati pemoyo wakapfeka, ChiNgezi chakajeka.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Pasina kutarisa kumashure. Nyora kubva mupfungwa.',
    prompts: [
      { prompt: "I'm happy (in English)",       correct: ["I'm happy", "I am happy", "i'm happy"] },
      { prompt: 'It made me feel sad (in English)', correct: ['It made me feel sad', 'it made me feel sad', 'It made me feel sad.', 'it made me feel sad.'] },
    ],
  },

  mission: {
    title: 'Basa raNhasi',
    task: "Funga manzwiro ako nhasi. Nyora pa diary kana phone notes muChiNgezi: 'Today I'm ___ because ___. It made me feel ___.' Hazvina kuda mukova mukuru — chinangwa kuita ChiNgezi kuva chombo chemoyo wako, kwete chemubvunzo chete.",
    rwenSignoff: "Mangwana — kutsamwa nekupfava muhutsika hweofficial. Tichaonana.",
  },

  phase8: {
    scenario: "You're meeting an English-speaking therapist (or trusted close friend) for the first time. They ask 'How are you really feeling today?' and gently want a real answer — not 'I'm fine'. Share two emotions and one event that affected you.",
    rwenRole: "Sarah, 40, English-speaking therapist. Calm, warm, never judges. Asks gentle follow-up questions like 'When did that start?' and 'How heavy does it feel?'",
    successCriteria: "User uses 'I'm + emotion adjective' (happy/sad/tired/anxious/proud). Uses 'It made me feel ___' to describe what caused it. Avoids only-Shona somatic phrasing. Speaks in 3+ sentences.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;

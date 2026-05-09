import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm07-l08-queue-line',
  module: 7,
  lesson: 8,
  title: 'The queue (UK) / the line (US) — Imikhosi yethu yinto engcwele',
  estimatedMinutes: 6,
  xpReward: 25,

  hook: {
    rwenLine:
      "I-queueing yase-UK yinto engcwele. Akusi-rule. Yi-religion. UmBrithwa angakubona ukulinda emikhosini imizuzu engaba ngu-30 ngokungeni nje, hatshi ngomsindo. Igama: 'queue' (UK) loba 'line' (US). Ungazami ukungena phambili — kuthiwa 'pushing in' loma 'cutting in line', kuyinto eyihlazo elikhulu.",
    culturalNote:
      "I-queueing yase-UK yinto eyodwa enhloko engehlekiswa. Phakathi kwesAfrica esinabakaki, kunzima ukubona umkhosi olandelana ngempela — silinda ekhululekile, sigwaza nje. Akungitshele ukuthi 'I'll just nip in here' uma usemkhosini we-UK — uzothola amehlo. UmBrithwa kayisho lutho — kepha ujika engqondo yonke ezowuthatha amaphuzu ngokuba u-'queue jumper'. ENYC — kayinhlukile ngokunjalo, kepha ungaphindekile. Ulwandle lwemikhosi lwakhona kuyichinga la pop-up vendor, kepha singathathela isikhathi. Imithetho emithathu: (1) yana lapho i-queue iphela, (2) ungabambi indawo eqenjini ungekho, (3) yangabe i-eye contact uma ufika — bonisa ukuthi ungenwe ngokuhle.",
  },

  chunks: [
    {
      id: 'is_this_the_queue',
      target: 'Is this the queue?',
      native: 'Ngumkhosi lo na?',
      literal: 'Is this the queue (UK)',
      emoji: '🚶‍♀️',
      phonetic: 'iz-this-thuh-KYOO',
      audioRef: null,
    },
    {
      id: 'are_you_in_line',
      target: 'Are you in line?',
      native: 'Usemkhosini?',
      literal: 'Are you in line (US)',
      emoji: '🚶',
      phonetic: 'ar-yoo-in-LAYN',
      audioRef: null,
    },
    {
      id: 'after_you',
      target: 'After you',
      native: 'Ngemva kwakho',
      literal: 'After you',
      emoji: '🙏',
      phonetic: 'AF-ter-YOO',
      audioRef: null,
    },
    {
      id: 'sorry_i_didnt_see',
      target: "Sorry, I didn't see the queue.",
      native: 'Ngiyaxolisa, bengingakuboni umkhosi.',
      literal: 'Sorry I did not see the queue',
      emoji: '😅',
      phonetic: 'SAW-ree-ay-DID-int-SEE',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Queue/line — UK vs US, plus the rescue line',
    explanation:
      "I-Brits bathi 'queue', i-Americans bathi 'line'. Imibuzo: 'Is this the queue?' (UK), 'Are you in line?' (US). Uma uphazamiseka ungene phambili (akwenzeki kahle), khipha i-rescue line: 'Sorry, I didn't see the queue — was someone before me?'. Lokhu kukubuyisa ngokuhloniphekayo. Ungaqali nge-fight nge 'I was here first'.",
    examples: [
      { target: 'Is this the queue for the till?',    native: 'Ngumkhosi we-till lo?' },
      { target: 'Are you in line for the bathroom?', native: 'Usemkhosini we-bathroom?' },
      { target: 'After you.',                          native: 'Ngemva kwakho.' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'I-UK ne-US — amagama ahlukile',
      pairs: [
        { left: 'queue (UK)',                  right: 'line (US)' },
        { left: 'Is this the queue?',           right: 'Are you in line?' },
        { left: 'queue jumper',                  right: 'Inkomba yokungena phambili' },
        { left: 'after you',                     right: 'umuntu omdala / ophambili kuqala' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Bhala ngesiNgisi (UK) — ufika kungumkhosi mude',
      prompt: 'Ngumkhosi lo na we-till?',
      correct: [
        'Is this the queue for the till?',
        'Is this the queue?',
        'Excuse me, is this the queue?',
        'is this the queue for the till?',
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Gcwalisa — Wena uphazamise ungena phambili',
      sentence: "Sorry, I ____ see the queue — was someone before me?",
      options: ["didn't", 'do not', 'no'],
      correct: "didn't",
      context: "'I didn't see ___' kungumchakeshelo wokuthi 'bengingakuboni'. Ihambisana ngo-past tense.",
    },
    {
      type: 'multiple_choice',
      instruction: 'Khetha okuhloniphana e-UK',
      question: 'I-Brits ulinde behleli emkhosini. Wena ufike, awukuboni umkhosi. Uthini?',
      options: [
        { text: 'Excuse me, is this the queue?',                            correct: true },
        { text: "I'm next!",                                                  correct: false },
        { text: 'Move, I am here.',                                            correct: false },
      ],
      explanation:
        "I-Brits balindele uvule ngo-'Excuse me' lokho ubuze umbuzo. Lokho kukuvula umnyango wonke.",
    },
    {
      type: 'build_sentence',
      instruction: 'Hlela amagama — yingozi yokungena phambili',
      words: ['queue', 'see', "didn't", 'I', 'the'],
      correct: ['I', "didn't", 'see', 'the', 'queue'],
      translation: 'Bengingakuboni umkhosi',
    },
  ],

  rwenDialogue: {
    intro:
      "USeTesco eLondon. I-till imikhosi mibili — owodwa kayisithatha ucabango, ungene. Owesilisa wa-Brithwa ekuqondisa.",
    lines: [
      {
        speaker: 'npc',
        target: "Erm… mate, the queue starts back there.",
        native: 'Mhm… mngane, umkhosi uqala ngale ngemuva.',
      },
      {
        speaker: 'user',
        userChoices: [
          {
            target: "Oh, sorry — I didn't see the queue. My mistake.",
            native: 'Hawu, ngiyaxolisa — bengingakuboni umkhosi. Iphutha lami.',
            correct: true,
            feedback: 'Mnandi — uvulile ngokuxolisa, wahlangabezana lokho akushilo. UmBrithwa uxolele.',
          },
          {
            target: 'I was here first.',
            native: 'Ngifike kuqala.',
            correct: false,
            feedback: 'Wenza ihlazo — ungeke ungazi i-rule yomkhosi. Khipha i-rescue line.',
          },
          {
            target: 'OK whatever.',
            native: 'OK kungelutho.',
            correct: false,
            feedback: 'Inolaka — kayinhle. Xolisa ngokushesha.',
          },
        ],
      },
      {
        speaker: 'npc',
        target: "No worries, mate. Easy mistake.",
        native: 'Akuhlangulekile, mngane. Iphutha elilula.',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Cheers — after you.', native: 'Ngiyabonga — ngemva kwakho.', correct: true,  feedback: 'Yikho — uthi "after you" ungeza kuye amphakamisi. UmBrithwa uthandazwa lokhu.' },
          { target: 'OK bye.',               native: 'OK sala kuhle.',                  correct: false, feedback: 'Engeza "after you" — kungumthetho ofanele.' },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine:
          'Phakade — i-queue ifaka mhlanga. Khumbula i-rescue line: "I didn\'t see the queue" + xolisa = umBrithwa ukubuyiselwa.',
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Ungabuki ngenhla — bhala ngenkumbulo.',
    prompts: [
      {
        prompt: "Is this the queue? (ngesiNgisi UK)",
        correct: [
          'Is this the queue?',
          'Excuse me, is this the queue?',
          'Is this the queue',
          'is this the queue?',
        ],
      },
      {
        prompt: "Sorry, I didn't see the queue. (ngesiNgisi)",
        correct: [
          "Sorry, I didn't see the queue.",
          "Sorry, I didn't see the line.",
          "I'm sorry, I didn't see the queue.",
          "sorry, i didn't see the queue.",
        ],
      },
    ],
  },

  mission: {
    title: 'Umsebenzi wakho lamuhla',
    task:
      "Lokhu yi-skill yokuziphatha. Phinda ngomlomo: 'Excuse me, is this the queue?' kabili. Phinda i-rescue line: 'Sorry, I didn't see the queue — was someone before me?' kabili. Lokhu yi-passport yakho ye-UK.",
    rwenSignoff: 'Kusasa — uma ulahlekile. Lakho kuyenzeka.',
  },

  phase8: {
    scenario:
      "You walk into a busy Pret A Manger in central London at lunch time. You think the queue starts at the counter, so you walk straight to it. A British customer politely points out that the queue actually winds back along the wall and you've cut in front of about eight people.",
    rwenRole:
      "Tom, 41, an accountant on his lunch break. Quintessentially British — polite but firm about queueing. Will accept a sincere apology gracefully but is genuinely annoyed by the queue jump.",
    successCriteria:
      "User apologises with 'Sorry, I didn't see the queue', acknowledges the mistake, says 'after you' or moves to the back, and thanks Tom for pointing it out. Does NOT defend their position or say 'I was here first'.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;

import type { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm01-l09-goodbye',
  module: 1,
  lesson: 9,
  title: 'Saying goodbye — Bye, Take care, See you',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "ESiNgisini, ukuvalelisa kuvalelisa ngokuhlukileyo nge-context. 'Bye' kuphephile nje. 'Take care' kufakelwa umoya. 'See you' kuyathembisa ukuthi nizahlangana futhi.",
    culturalNote: "ESiNdebele, u-'Salani kahle' lo-'Hambani kahle' bayahlukana ngokuthi nguwe ohamba kumbe nguwe ohlalayo. ESiNgisini, akula lokho — yonke into ifuthi. Ungaphenduki nge-options: 'Bye' (universal), 'See you' (lokho lifaka 'Sizobonana'), 'Take care' (kuneveli — kuyemfundisweni), 'Cheers' (UK casual = bye/thanks). U-'Goodbye' uphakeme kakhulu — usebenza ku-formal letter kumbe lapho usuyalala kanjalo. Ungaphenduli ngo-'Goodbye' ku-corner shop.",
  },

  chunks: [
    {
      id: 'bye',
      target: 'Bye',
      native: 'Salani kahle (universal)',
      literal: 'Bye',
      emoji: '👋',
      phonetic: 'BYE',
      audioRef: null,
    },
    {
      id: 'see_you',
      target: 'See you',
      native: 'Sizobonana',
      literal: 'See you',
      emoji: '👀',
      phonetic: 'see-YOO',
      audioRef: null,
    },
    {
      id: 'see_you_later',
      target: 'See you later',
      native: 'Sizobonana emva',
      literal: 'See you later',
      emoji: '⏰',
      phonetic: 'see-yu-LAY-ter',
      audioRef: null,
    },
    {
      id: 'take_care',
      target: 'Take care',
      native: 'Hamba kahle / Zinakekele',
      literal: 'Take care',
      emoji: '💛',
      phonetic: 'tayk-KAYR',
      audioRef: null,
    },
    {
      id: 'have_good_one',
      target: 'Have a good one',
      native: 'Ube nelitshani elihle',
      literal: 'Have a good one (US/AU casual)',
      emoji: '😎',
      phonetic: 'hav-uh-good-WUN',
      audioRef: null,
    },
    {
      id: 'goodbye',
      target: 'Goodbye',
      native: 'Salani kahle (formal)',
      literal: 'Goodbye',
      emoji: '🎩',
      phonetic: 'good-BYE',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Goodbye scale: casual → formal',
    explanation: "Inkuhle yokuvalelisa: 'See you!' / 'Cheers!' / 'Bye!' (kalula, between friends, ku-shop) → 'Take care' (kufakelwa umoya, with people you care about) → 'Have a good one' / 'Have a good day' (US/AU casual, customer service) → 'Goodbye' (formal, end of meeting kumbe ku-business letter). Ungavale ngokufana le-greeting yakho — 'Bye!' lapho uvule ngo-'Hi!'.",
    examples: [
      { target: 'Bye!',                          native: 'Salani kahle!' },
      { target: 'See you tomorrow.',              native: 'Sizobonana kusasa.' },
      { target: 'Take care.',                     native: 'Zinakekele.' },
      { target: 'Have a good day.',               native: 'Ube nosuku oluhle.' },
      { target: 'Goodbye, Mr Smith. (formal)',    native: 'Salani kahle, Mnumzana Smith.' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Hlanganisa',
      pairs: [
        { left: 'Bye',                  right: 'Salani kahle (kalula)' },
        { left: 'See you',              right: 'Sizobonana' },
        { left: 'Take care',            right: 'Zinakekele' },
        { left: 'Have a good day',      right: 'Ube nosuku oluhle' },
      ],
    },
    {
      type: 'multiple_choice',
      instruction: 'Khetha okufaneleyo',
      question: "Umngane wakho oligangu uhambisa wenzihambo. Yini ozayisho ekugcineni?",
      options: [
        { text: 'Take care.',         correct: true },
        { text: 'Goodbye.',           correct: false },
        { text: 'See you, sir.',      correct: false },
      ],
      explanation: '"Take care" kunezindlela zikamoya — kuyenza okuhle. "Goodbye" yi-formal kakhulu kumngane. "Sir" akufanele.',
    },
    {
      type: 'fill_blank',
      instruction: 'Gcwalisa — kalula',
      sentence: "____ tomorrow!",
      options: ['See you', "I'll be", 'Goodbye'],
      correct: 'See you',
      context: 'Uyahamba e-office, uzobuyela kusasa.',
    },
    {
      type: 'translate',
      instruction: 'Bhala ngesiNgisi (formal goodbye to manager)',
      prompt: 'Salani kahle (formal)',
      correct: ['Goodbye', 'Goodbye.', 'goodbye'],
    },
    {
      type: 'build_sentence',
      instruction: 'Hlela',
      words: ['weekend', 'a', 'good', 'Have'],
      correct: ['Have', 'a', 'good', 'weekend'],
      translation: 'Ube nempelaviki enhle',
    },
    {
      type: 'multiple_choice',
      instruction: 'Yi-7am, Friday — uyahamba e-shift yakho yebusuku, abasebenza-mngane bayahla emini. Yini ofanele uyitsho?',
      question: 'Khetha:',
      options: [
        { text: 'See you Monday — have a good weekend!',  correct: true },
        { text: 'Goodbye sir.',                            correct: false },
        { text: 'See you tomorrow.',                       correct: false },
      ],
      explanation: 'Yi-Friday, ngempela kumele ubonge i-weekend. "See you tomorrow" kungcono — bahlangana ngo-Monday.',
    },
  ],

  rwenDialogue: {
    intro: 'ELeeds, eshe yokugcina yosuku. Umngane wakho-mngane uyahamba ku-station, lawe uyangena kwakho.',
    lines: [
      { speaker: 'npc', target: "Right, I'll be off then. See you tomorrow?", native: 'Yebo, sengihamba. Sizobonana kusasa?' },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Yeah, see you tomorrow. Take care!',   native: 'Yebo, sizobonana kusasa. Hamba kahle!',   correct: true,  feedback: 'Yikho — ulungile, ufakela "see you" lo-"take care" — kunesimo somoya.' },
          { target: 'Goodbye.',                              native: 'Salani kahle.',                            correct: false, feedback: 'Yi-formal kakhulu — uyahlangana naye kusasa, hatshi futhi-naphakade.' },
          { target: 'Yes.',                                   native: 'Yebo.',                                    correct: false, feedback: 'Engeza okuthize — "see you" kumbe "bye". "Yes" kuphela kuphakeme.' },
        ],
      },
      { speaker: 'npc', target: 'Cheers, mate. Have a good evening!', native: 'Bonga, mngane. Ube nentambama enhle!' },
      {
        speaker: 'user',
        userChoices: [
          { target: 'You too — bye!',  native: 'Lawe futhi — salani!', correct: true,  feedback: 'Yikho! Ufakela "you too" + "bye" — i-natural close.' },
          { target: 'Bye sir.',         native: 'Salani Mnumzana.',     correct: false, feedback: 'Kungumngane — ungafaki "sir".' },
          { target: 'Goodbye, mate.',   native: 'Salani, mngane.',      correct: false, feedback: '"Goodbye + mate" izwakala iphithizele. Sebenzisa "Bye, mate" kumbe "Cheers, mate".' },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: 'Wenze kahle — wakhethile i-goodbye eqondileyo nge-context. Ngokujwayelekileyo, "Take care" liyaphumelela emhlabeni wonke.',
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Bhala ngenhliziyo.',
    prompts: [
      { prompt: "'Sizobonana' ngesiNgisi",       correct: ['See you', 'see you', "See you later"] },
      { prompt: "'Hamba kahle / Zinakekele' ngesiNgisi",  correct: ['Take care', 'take care', 'Take care.'] },
      { prompt: "'Ube nempelaviki enhle' ngesiNgisi",     correct: ['Have a good weekend', 'have a good weekend', 'Have a great weekend'] },
    ],
  },

  mission: {
    title: 'Umsebenzi',
    task: "Lamuhla, valelisa abantu ngezindlela ezithathu ezahlukileyo: 'Bye' kumthengisi, 'Take care' kumngane, 'Have a good day' kumuntu omtsha. Bona ukuthi indlela iyazi indlela.",
    rwenSignoff: 'Take care — sizobonana kusasa.',
  },

  phase8: {
    scenario: "ESydney, eAustralia. Yi-Friday 5pm — uyaphuma e-shift yakho. Asazi abantu abathathu: umphathi wakho (formal), umsebenzi-mngane (casual), customer wakho omthandayo (warm). Sebenzisa i-goodbye eqondileyo kumuntu ngamunye.",
    rwenRole: "I-3 NPCs ngokwendlela: (1) uMs Wilson umphathi, (2) uJake umsebenzi-mngane, (3) uMrs Chen customer. NguMs Wilson nguJake nguMrs Chen babize ngokulandelana kuyo le-AI.",
    successCriteria: "Umfundi asebenzise i-goodbye ehlukile kumuntu ngamunye: u-'Have a good weekend, Ms Wilson' (formal-warm), u-'See you Monday, mate!' (casual ku-Jake), u-'Take care, Mrs Chen' (warm to elder customer). HATSHI same goodbye kuye wonke.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;

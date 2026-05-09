import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm07-l07-left-right-straight',
  module: 7,
  lesson: 7,
  title: 'Left, right, straight on — Indlela yokuqondisa',
  estimatedMinutes: 6,
  xpReward: 25,

  hook: {
    rwenLine:
      "Ubuze indlela. Khathesi-ke uphendulwa. Amagama afanele uwazi: 'left' (kwesokunxele), 'right' (kwesokudla), 'straight on' kumbe 'straight ahead' (qonda phambili), 'turn around' (jika emumva). Lokho kuyahleleka maqondana.",
    culturalNote:
      "Iqonde kakhulu: e-UK abahambi le-roads ngakwesokunxele ('drive on the left'). e-US, e-Australia, e-Zimbabwe — abanye bahambisa kwesokudla ngalo. Lokhu kungaphazamisa lapho ujika emgwaqweni — kepha izinzwa zezindlela zifanayo. Ku-roundabouts (ezweni le-UK ngokukhetheka), abahambeli baqonda kwesokunxele baphuma kwabandakanye. UmBrithwa angakubonisa ngomunwe loma uthi: 'It's just over there, on your left.' Ungazami ukubuza eksinye ngomdwebo (drawing) — kuphazamise umuntu — beka indlebe, beka ingqondo. 'Down the road' kuyikuthi 'phansi komgwaqo'. 'Just past the corner' = ngale kwekhona.",
  },

  chunks: [
    {
      id: 'on_the_left',
      target: "It's on your left",
      native: 'Ikwesokunxele sakho',
      literal: 'It is on your left',
      emoji: '👈',
      phonetic: 'its-on-yor-LEFT',
      audioRef: null,
    },
    {
      id: 'on_the_right',
      target: "It's on your right",
      native: 'Ikwesokudla sakho',
      literal: 'It is on your right',
      emoji: '👉',
      phonetic: 'its-on-yor-RAYT',
      audioRef: null,
    },
    {
      id: 'straight_on',
      target: 'Straight on',
      native: 'Qonda phambili',
      literal: 'Straight on / Straight ahead',
      emoji: '⬆️',
      phonetic: 'STRAYT-on',
      audioRef: null,
    },
    {
      id: 'turn_around',
      target: 'Turn around',
      native: 'Jika emumva',
      literal: 'Turn around',
      emoji: '🔄',
      phonetic: 'TURN-uh-ROWND',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Direction words — turn, on, ahead',
    explanation:
      "Imithetho yokuqondisa: 'turn left/right' (jika kwesokunxele/kwesokudla), 'go straight on' (qonda phambili), 'on your left/right' (kwesokunxele sakho), 'past the ___' (ngale kwe-___). Sebenzisa 'turn' uma kufanele ujike, 'go straight' uma kufanele uqonde phambili. UmBrithwa lo 'straight on', ama-Americans bathi 'straight ahead'.",
    examples: [
      { target: 'Turn left at the lights.',     native: 'Jika kwesokunxele kulamalambu.' },
      { target: 'Go straight on for 100 metres.', native: 'Qonda phambili amamitha angu-100.' },
      { target: "It's on your right.",            native: 'Ikwesokudla sakho.' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Hlanganisa amagama lokuchasiselwa',
      pairs: [
        { left: 'left',           right: 'kwesokunxele' },
        { left: 'right',          right: 'kwesokudla' },
        { left: 'straight on',    right: 'qonda phambili' },
        { left: 'turn around',    right: 'jika emumva' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Bhala ngesiNgisi — utshelwa indlela',
      prompt: 'Jika kwesokudla, qonda phambili amabili amablock.',
      correct: [
        'Turn right, go straight on for two blocks.',
        'Turn right, go straight for two blocks.',
        'Turn right, then straight ahead for two blocks.',
        'Turn right, straight on, two blocks.',
        'turn right, go straight on for two blocks.',
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Gcwalisa — ushaywa indlela',
      sentence: "It's on your ____ — past the bank.",
      options: ['right', 'rightly', 'good'],
      correct: 'right',
      context: "'On your right' kusho 'kwesokudla sakho'. 'Rightly' kusho 'ngokufanele' — akusiyikuthi indawo.",
    },
    {
      type: 'multiple_choice',
      instruction: 'Khetha okufanele',
      question: "I-driver yakho ye-Uber yendlulile indawo. Uthini?",
      options: [
        { text: 'Could you turn around, please?',     correct: true },
        { text: 'Back!',                                correct: false },
        { text: 'Wrong way go!',                        correct: false },
      ],
      explanation:
        "'Could you turn around, please?' yi-formula yokuhloniphekayo yokuthi i-driver imeme aphenduke.",
    },
    {
      type: 'build_sentence',
      instruction: 'Hlela amagama — i-pharmacy',
      words: ['the', "It's", 'on', 'left', 'your'],
      correct: ["It's", 'on', 'your', 'left', 'the'],
      translation: 'Ikwesokunxele sakho',
    },
  ],

  rwenDialogue: {
    intro:
      "Ucele indlela kungunkulu eBondi, Sydney. Uyaphendula. Cabanga ungunkomba lokho akushoyo.",
    lines: [
      {
        speaker: 'npc',
        target: "Yeah, mate — easy. Go straight on for about 200 metres, then turn left at the lights. The beach is on your right.",
        native: 'Yebo, mngane — kulula. Qonda phambili amamitha angaba ngu-200, bese ujikela kwesokunxele lapho kulamalambu. Ulwandle lukwesokudla.',
      },
      {
        speaker: 'user',
        userChoices: [
          {
            target: 'Straight on, then left at the lights, beach on the right. Got it — thank you!',
            native: 'Qonda phambili, bese ngijika kwesokunxele lapho kulamalambu, ulwandle lukwesokudla. Ngithole — ngiyabonga!',
            correct: true,
            feedback: 'Mnandi — uphindephindiwe ukuze uqinisekise. UmBrithwa loba uma-Aussie kuyazwakala.',
          },
          {
            target: 'OK.',
            native: 'OK.',
            correct: false,
            feedback: 'Phindelekile kuhle ukuphindephinda izindlela ukuze uqinisekise.',
          },
          {
            target: 'Left right beach?',
            native: 'Kwesokunxele kwesokudla ulwandle?',
            correct: false,
            feedback: 'Inyenyiselwe — phindephinde nge-sentence epheleleyo.',
          },
        ],
      },
      {
        speaker: 'npc',
        target: "No worries. Enjoy the beach!",
        native: "Akuhlangulekile. Yithokozele ulwandle!",
      },
      {
        speaker: 'rwen',
        rwenLine:
          'Yiqiniso! Phindephinda lokho okutshelwayo — kuyakwenza ungalahleki.',
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Ungabuki ngenhla — bhala ngenkumbulo.',
    prompts: [
      {
        prompt: "Turn left (ngesiNgisi)",
        correct: ['Turn left', 'Turn left.', 'turn left'],
      },
      {
        prompt: 'Go straight on (ngesiNgisi)',
        correct: ['Go straight on', 'Go straight on.', 'Go straight ahead', 'Straight on', 'go straight on'],
      },
      {
        prompt: "It's on your right (ngesiNgisi)",
        correct: ["It's on your right", "It's on your right.", 'It is on your right', "it's on your right"],
      },
    ],
  },

  mission: {
    title: 'Umsebenzi wakho lamuhla',
    task:
      "Phakathi kwekhaya, qonda emnyangweni weguma. Sebenzisa amagama esiNgisi: 'turn right' (lapho kufanele ujike kwesokudla), 'straight on' (qonda phambili), 'turn left' (jika kwesokunxele). Yikho — i-vocab yenza umzimba wakho.",
    rwenSignoff: 'Kusasa — i-queue. UmBrithwa lo lokhu yikholo.',
  },

  phase8: {
    scenario:
      "You're standing on a Bondi Beach street corner in Sydney. You ask a local jogger how to get to the famous Icebergs swimming pool. They give you directions involving 'left', 'right', 'straight on', and a landmark. You need to confirm by repeating it back.",
    rwenRole:
      "Jess, 26, Aussie local out for a morning run. Friendly, casual, says 'no worries' and 'mate'. Will give clear directions but won't repeat them — you must echo to confirm.",
    successCriteria:
      "User asks 'how do I get to ___?', listens to directions, then repeats them back using 'left', 'right', 'straight on', or 'past the ___'. Closes with 'thank you' or 'cheers'.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;

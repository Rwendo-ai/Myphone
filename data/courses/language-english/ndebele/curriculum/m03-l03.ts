import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm03-l03-uk-foods',
  module: 3,
  lesson: 3,
  title: 'Common UK foods — Ukudla kweUK',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "EUK, kukhona ukudla obabantu abakuthandayo kakhulu — 'fish and chips', 'pie', 'chips'. Igama 'chips' (eUK) ngamatemu amakhulu, athosiweyo — akufanani le-USA!",
    culturalNote: "LOKHU YIQINISO: 'chips' eUK = amatemu (potato) amakhulu, athosiweyo, anjengama-fries la-McDonald's, kodwa makhulu. EUSA, 'chips' = ama-crisps eUK (lawo asebhasini). Yini lokho! Uma usengena erestaurant ye-American eLondon, bafuna 'fries' kuthiwa 'chips' yiUK kuphela. 'Fish and chips' = inhlanzi ethosiweyo lamatemu — ngumphefumulo we-British food, kakhulu uma uyiphakela ngephephandaba lephepha. 'Pie' kuyehluka ku-pie ye-American: 'meat pie' yi-savoury (alelapuya), ne-'apple pie' yi-sweet.",
  },

  chunks: [
    {
      id: 'fish_and_chips',
      target: 'fish and chips',
      native: 'inhlanzi lamatemu (athosiweyo)',
      literal: 'fish and chips (UK = thick fries)',
      emoji: '🐟',
      phonetic: 'fish-and-CHIPS',
      audioRef: null,
    },
    {
      id: 'chips_uk',
      target: 'chips',
      native: 'amatemu amakhulu athosiweyo (eUK)',
      literal: 'chips = thick fries (UK)',
      emoji: '🍟',
      phonetic: 'chips',
      audioRef: null,
    },
    {
      id: 'pie',
      target: 'pie',
      native: 'iphayi (legazi/eyeyezithelo)',
      literal: 'pie',
      emoji: '🥧',
      phonetic: 'pai',
      audioRef: null,
    },
    {
      id: 'sunday_roast',
      target: 'Sunday roast',
      native: 'inyama eyosiweyo yangeSonto',
      literal: 'Sunday roast',
      emoji: '🍖',
      phonetic: 'SUN-day-rohst',
      audioRef: null,
    },
    {
      id: 'crisps',
      target: 'crisps',
      native: "ama-crisps (kuthiwa 'chips' eUSA!)",
      literal: 'crisps (UK) = chips (US)',
      emoji: '🥨',
      phonetic: 'krisps',
      audioRef: null,
    },
  ],

  pattern: {
    name: "I'd like ___ / I'll have ___",
    explanation: "Ukufaka oda lokudla, sebenzisa 'I'd like' (= I would like) loba 'I'll have' (= I will have). Bobabili bafanele futhi bayahlonipha. Engeza 'please' ekugcineni — kuyimvubelo yokudla yesiNgisi.",
    examples: [
      { target: "I'd like fish and chips, please.", native: 'Ngifuna inhlanzi lamatemu, ngiyacela.' },
      { target: "I'll have a meat pie, please.",    native: 'Ngizathatha iphayi yenyama, ngiyacela.' },
      { target: "Just chips, please.",              native: 'Amatemu kuphela, ngiyacela.' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Hlanganisa ukudla kweUK lesiNdebele',
      pairs: [
        { left: 'fish and chips', right: 'inhlanzi lamatemu athosiweyo' },
        { left: 'pie',            right: 'iphayi' },
        { left: 'Sunday roast',   right: 'inyama yangeSonto' },
        { left: 'crisps',         right: "ama-crisps (kuthiwa 'chips' eUSA)" },
      ],
    },
    {
      type: 'multiple_choice',
      instruction: 'Khetha okulungileyo',
      question: "Erestaurant eLondon, ucela 'chips'. Uzakuyithola njalo?",
      options: [
        { text: "Amatemu amakhulu athosiweyo (njengama-fries amakhulu).", correct: true },
        { text: "Ama-crisps asebhasini ('chips' yeUSA).",                  correct: false },
        { text: "Isinkwa.",                                                correct: false },
      ],
      explanation: "EUK, 'chips' = amatemu amakhulu athosiweyo. Lokhu okwesibili (asebhasini) eUK kuthiwa 'crisps'. EUSA kuyahlangana — 'chips' yeUSA = 'crisps' yeUK. Lokhu kuyaphithanisa!",
    },
    {
      type: 'translate',
      instruction: 'Bhala ngesiNgisi',
      prompt: 'Ngifuna inhlanzi lamatemu, ngiyacela.',
      correct: ["I'd like fish and chips please", "I'd like fish and chips, please.", "I would like fish and chips please", "I'll have fish and chips please"],
    },
    {
      type: 'fill_blank',
      instruction: "Gcwalisa erestaurant",
      sentence: "I'd ___ a meat pie, please.",
      options: ["like", "want", "give"],
      correct: "like",
      context: "Ufuna ukufaka oda — yiphi indlela yenhlonipho?",
    },
  ],

  rwenDialogue: {
    intro: "Usengene erestaurant ye-fish and chips ('chippy') eLondon. Umphathi uyabuza.",
    lines: [
      { speaker: 'npc', target: "Hi love, what can I get you?", native: "Salibonani sthandwa, ngingakuthathela ini? ('love' kuyimvubelo nje)" },
      {
        speaker: 'user',
        userChoices: [
          { target: "I'd like fish and chips, please.", native: 'Ngifuna inhlanzi lamatemu, ngiyacela.', correct: true,  feedback: "Kuhle — 'I'd like ... please' ngumusho omuhle wokufaka oda." },
          { target: "Fish.",                            native: 'Inhlanzi.',                            correct: false, feedback: "Kuyaphelelekile — engeza 'I'd like' lo 'please'." },
          { target: "Give me fries.",                   native: 'Ngiphe amatemu.',                       correct: false, feedback: "EUK, kakuthiwa 'fries' — kuthiwa 'chips'. Futhi 'give me' kuyimphukamisa." },
        ],
      },
      { speaker: 'npc', target: "Salt and vinegar on the chips?", native: 'Itswayi le-vinegar kumatemu? (yindlela yeUK)' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Yes please, just a little salt.", native: 'Yebo ngiyacela, itswayi elincane kuphela.', correct: true,  feedback: "Kuhle — 'salt and vinegar' yindlela yeUK kuphela. Lokhu akukho eUSA!" },
          { target: "No vinegar.",                     native: 'Hatshi i-vinegar.',                        correct: true,  feedback: "Lokhu kulungile njalo — eUK abanye bayalithanda i-vinegar, abanye hatshi." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Bambelele lokhu: 'chips' eUK = amatemu amakhulu, 'crisps' eUK = lawo asebhasini. EUSA kuyahlukile! Akukho ndlela enye yokukhumbula — vela uzihlanganise lapho uphakhayo.",
        rwenAnimation: 'thinking',
      },
    ],
  },

  activeRecall: {
    instruction: 'Ungabuyeli emuva — phendula ngesiNgisi.',
    prompts: [
      { prompt: 'inhlanzi lamatemu (ngesiNgisi)',                            correct: ['fish and chips', 'Fish and chips'] },
      { prompt: "EUK, lawo asebhasini athosiweyo agama lawo lithini ngesiNgisi?", correct: ['crisps', 'Crisps'] },
    ],
  },

  mission: {
    title: 'Umsebenzi wakho lamhla',
    task: "Cabanga ngokungena ku-'chippy' eLondon. Bhala umusho wakho wokufaka oda: 'I'd like ___, please.' Khetha phakathi kwe-fish and chips, pie, kumbe chips kuphela.",
    rwenSignoff: "Wenzile kuhle. Kusasa sizadingida ukudla kwe-USA.",
  },

  phase8: {
    scenario: "You're at a traditional fish-and-chips shop ('chippy') in the seaside town of Brighton. The shop is busy. The server takes orders quickly. You want fish and chips with salt and vinegar (the British way). They will ask follow-ups about portion size and condiments.",
    rwenRole: "Dave, 50s, the chippy owner, friendly but quick. Speaks with a British accent. Will ask 'Salt and vinegar?' and 'Small or large chips?' as standard questions.",
    successCriteria: "User orders 'fish and chips' using 'I'd like' or 'I'll have' + 'please', does not say 'fries' (which is American), and answers Dave's questions about salt/vinegar and portion size.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;

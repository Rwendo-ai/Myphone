import type { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm06-l04-time-hours',
  module: 6,
  lesson: 4,
  title: 'Symptoms — describing pain (dull, sharp, throbbing)',
  estimatedMinutes: 7,
  xpReward: 35,

  hook: {
    rwenLine: "Udokotela uzakubuza, 'Can you describe the pain?' EsiNdebeleni sithi 'kuyaluma', 'kuyahluza', kumbe 'kuyatshaya' — kodwa esiNgisini kunamagama amathathu okuqala udokotela afuna ukuwezwa: 'dull' (engaqondananga, ehlala-hlala), 'sharp' (ekhaliphileyo), lo 'throbbing' (etshayayo njengenhliziyo).",
    culturalNote: "Lokhu kuyizifundo eziphathayo kuneminye ekhaya. EZimbabwe sivame ukuthi 'kubuhlungu' kanye nje, kuvalwa lapho. Kodwa eUK lase US, udokotela ufuna isithombe esicacile sezinhlobo zobuhlungu — ukuze ahlonze isifo. Uma uthi 'sharp pain in my chest', udokotela uzakukhumbula ngokushesha enye into. Uma uthi 'dull headache', okunye. Yikho lokhu kungalalethwa nje — kuyimpilo. Phinda futhi: udokotela kababuzi ukuthi 'mningi kanjani'? — ubuza 'on a scale of 1 to 10'. Lokho yenye into engejwayelekanga eZimbabwe.",
  },

  chunks: [
    {
      id: 'dull_pain',
      target: "It's a dull pain",
      native: 'Ubuhlungu obuhlala-hlala, obungaqondananga',
      literal: undefined,
      emoji: '😩',
      phonetic: 'its-uh-DUL-payn',
      audioRef: null,
    },
    {
      id: 'sharp_pain',
      target: "It's a sharp pain",
      native: 'Ubuhlungu obukhaliphileyo (njengommese)',
      literal: undefined,
      emoji: '⚡',
      phonetic: 'its-uh-SHARP-payn',
      audioRef: null,
    },
    {
      id: 'throbbing',
      target: 'A throbbing pain',
      native: 'Ubuhlungu obutshayayo (njengenhliziyo)',
      literal: undefined,
      emoji: '💥',
      phonetic: 'uh-THROB-ing-payn',
      audioRef: null,
    },
    {
      id: 'scale',
      target: 'On a scale of 1 to 10',
      native: 'Esikalini sika 1 kuya ku 10',
      literal: undefined,
      emoji: '🔢',
      phonetic: 'on-uh-SKAYL-uv-wun-tu-TEN',
      audioRef: null,
    },
    {
      id: 'comes_goes',
      target: 'It comes and goes',
      native: 'Buyeza, buyahamba',
      literal: undefined,
      emoji: '🔁',
      phonetic: 'it-kumz-and-GOHZ',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'I-adjective + pain — kucacisa udokotela isifo',
    explanation: "ESiNgisini sokwelapha, kunemikhondo emithathu eqondileyo: 'dull' (kuthwele kancane, akukhaliphi), 'sharp' (njengommese — kushuba, kuthatha umoya), lo 'throbbing' (kuyatshaya njengenhliziyo, kuvuthuza). Faka phambi ku-'pain': 'a dull pain', 'a sharp pain', 'a throbbing pain'. Ungaze uchaze indawo nge-'in my ___': 'a sharp pain in my side'.",
    examples: [
      { target: "It's a dull headache that comes and goes.",     native: 'Yikhanda elinciphileyo elifika lihambe.' },
      { target: 'A sharp pain in my lower back.',                  native: 'Ubuhlungu obukhaliphileyo emhlana wami ongezansi.' },
      { target: "I have a throbbing pain behind my eyes.",         native: 'Ngile-buhlungu obutshayayo ngemuva kwamehlo.' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Hlanganisa imikhondo yobuhlungu lencazelo',
      pairs: [
        { left: 'Dull',     right: 'Obungaqondananga / obuhlala-hlala' },
        { left: 'Sharp',    right: 'Obukhaliphileyo / njengommese' },
        { left: 'Throbbing', right: 'Obutshayayo njengenhliziyo' },
        { left: 'Comes and goes', right: 'Buyeza, buyahamba' },
      ],
    },
    {
      type: 'multiple_choice',
      instruction: 'Khetha okuqondileyo',
      question: "Ngilubomvu olukhulu olutshaya phakathi kwekhanda lami — njenge-pulse. Yikuphi engcono?",
      options: [
        { text: "It's a throbbing pain.", correct: true },
        { text: "It's a dull pain.",      correct: false },
        { text: "It's a sharp pain.",     correct: false },
      ],
      explanation: "'Throbbing' kutsho ukuthi kutshayayo njengenhliziyo kumbe i-pulse. 'Dull' kuyimoya nje, 'sharp' njengommese.",
    },
    {
      type: 'translate',
      instruction: 'Bhala ngesiNgisi',
      prompt: 'Ngile-buhlungu obukhaliphileyo emhlana.',
      correct: ['I have a sharp pain in my back', 'I have a sharp pain in my back.', 'i have a sharp pain in my back', "It's a sharp pain in my back"],
    },
    {
      type: 'fill_blank',
      instruction: 'Gcwalisa indawo engelalutho — udokotela ekubuza',
      sentence: "Doctor: 'On a scale of 1 to 10, how bad is the pain?' You: 'I'd say _____ a 7.'",
      options: ['about', 'are', 'too'],
      correct: 'about',
      context: "'About a 7' kutsho 'cishe i-7'. Yifomula evamile lapho ucela ukuphendula ngenanikazi ezingaqondananga ncamashi.",
    },
    {
      type: 'build_sentence',
      instruction: 'Hlela amagama — uchaza ubuhlungu',
      words: ['comes', 'goes', 'and', 'It'],
      correct: ['It', 'comes', 'and', 'goes'],
      translation: 'Buyeza, buyahamba',
    },
    {
      type: 'translate',
      instruction: 'Bhala ngesiNgisi',
      prompt: 'Yikhanda elifika lihambe.',
      correct: ["It's a headache that comes and goes", "It's a headache that comes and goes.", "It comes and goes", "i have a headache that comes and goes"],
    },
  ],

  rwenDialogue: {
    intro: 'Usemkhondisweni nedokotela weNHS GP eUK. Ulumiswa likhanda kungaphezu kwesonto. UDokotela uyabuza umbuzo wokuqala.',
    lines: [
      { speaker: 'npc', target: 'So, tell me about the pain. Can you describe it?', native: 'Khuluma ngobuhlungu. Ungabuchaza?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "It's a throbbing pain behind my right eye. It comes and goes — usually worse in the evening.", native: 'Ngile-buhlungu obutshayayo ngemuva kwelihlo lokunene. Buyeza, buyahamba — kakhulu ntambama.', correct: true, feedback: "Kuhle kakhulu — wachaza uhlobo, indawo, lendlela bukhomba ngayo. Udokotela uzakwenelisa ukuhlonza ngokushesha." },
          { target: 'It hurts very much.', native: 'Kubuhlungu kakhulu.', correct: false, feedback: "Akukucacisi. Udokotela ufuna 'dull, sharp, kumbe throbbing'. Khetha eyodwa." },
          { target: 'My head is alive with pain.', native: 'Ikhanda lami liyaphila ngobuhlungu.', correct: false, feedback: 'Akusebenzi esiNgisini. Sebenzisa amagama esiNgisi: dull / sharp / throbbing.' },
        ],
      },
      { speaker: 'npc', target: 'And on a scale of 1 to 10, where 10 is the worst pain you can imagine?', native: 'Esikalini sika 1 kuya ku 10, lapho 10 kungobuhlungu obumbi kakhulu obungazicabangela?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "I'd say about a 6 — it's bad but I can still work.", native: 'Ngingathi cishe i-6 — kubuhlungu kodwa ngisenelisa ukusebenza.', correct: true, feedback: "Kuhle — i-fomula '6' lichaza umbono ojikelezayo. Kuyacacela udokotela." },
          { target: 'Maximum pain!', native: 'Ubuhlungu obupheleleyo!', correct: false, feedback: "Cabanga ngomahluko. Uma ubukubi okwenyani, lokho akusiqondileyo. Yetha 7 noma 8 ukube ungenelisi ukusebenza." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Hayi yebo! 'Throbbing', 'comes and goes', kanye 'on a scale of 1 to 10' — yifomula yodokotela. Wonke uyazithanda — uzakuyizwa kakhulu eUK lase US.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Ungabuyeli phezulu — bhala ngenhliziyo.',
    prompts: [
      { prompt: 'Bhala ngesiNgisi: Ubuhlungu obukhaliphileyo.', correct: ['A sharp pain', 'a sharp pain', 'A sharp pain.', "It's a sharp pain"] },
      { prompt: 'Bhala ngesiNgisi: Buyeza, buyahamba.', correct: ['It comes and goes', 'It comes and goes.', 'comes and goes', 'it comes and goes'] },
      { prompt: 'Bhala ngesiNgisi: Esikalini sika 1 kuya ku 10.', correct: ['On a scale of 1 to 10', 'On a scale of 1 to 10.', 'on a scale of 1 to 10'] },
    ],
  },

  mission: {
    title: 'Umsebenzi wamuhla',
    task: "Khumbula isifo sokucina obuso bephula. Bhala isigaba esisodwa ngesiNgisi: 'It was a ___ pain in my ___. On a scale of 1 to 10, it was about a ___. It came and went.'",
    rwenSignoff: "Kusasa siya kupharmacy — 'chemist' eUK kanti 'drugstore' eUS. Awuphilanga? Phila kuhle.",
  },

  phase8: {
    scenario: "You're at an NHS walk-in centre with chest pain that started this morning. The doctor needs you to describe the pain so they can decide whether to send you for tests. Be specific — type, location, scale.",
    rwenRole: "Dr Adams, 45, calm and methodical UK GP. She'll ask 'where is it?', 'is it sharp or dull?', 'on a scale of 1 to 10?' and 'does anything make it worse?'",
    successCriteria: "User uses at least one of 'dull / sharp / throbbing' to describe the pain. States location ('in my chest', 'on the left side'). Gives a 1-10 rating. Mentions whether it 'comes and goes' or is 'constant'.",
    estimatedMinutes: 4,
    bonusXp: 5,
  },
};

export default lesson;

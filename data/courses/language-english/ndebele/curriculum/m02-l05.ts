import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm02-l05-telling-time',
  module: 2,
  lesson: 5,
  title: "Telling time — It's quarter past three",
  estimatedMinutes: 7,
  xpReward: 30,

  hook: {
    rwenLine: "Lamuhla sifunda ukutsho isikhathi ngesiNgisi: 'It's three o'clock', 'It's quarter past three', 'It's half past three'. Lokhu kuyaphathisa kakhulu uma uhambisa ibhasi loba ufana ku-appointment.",
    culturalNote: "EsiNdebeleni siyatsho 'siyihola lesithathu lemizuzu eyitshumi lanhlanu' (3:15) kumbe 'siphambili kwehola lesithathu'. Ngesi-Britain isiNgisi siyasebenzisa indlela yethando: 'quarter past three' (3:15), 'half past three' (3:30), 'quarter to four' (3:45). 'Quarter' lapha kayisihlalo — kuyincenye 1/4 yehola, okuyimizuzu eyitshumi lanhlanu. EUSA, abantu sebevame ukutsho '3:15' loba 'three fifteen' nje qha. Le ndlela yethando-Britain isaphetheleliswa esikhungweni sezimoto, ezikhungweni zezempilo, kanye-meetings. Funda zonke izindlela.",
  },

  chunks: [
    {
      id: 'oclock',
      target: "It's three o'clock",
      native: 'Sesiyihola lesithathu',
      literal: "It-is three o-clock",
      emoji: '🕒',
      phonetic: "its-three-uh-KLOK",
      audioRef: null,
    },
    {
      id: 'quarter_past',
      target: "It's quarter past three",
      native: 'Imizuzu eyitshumi lanhlanu emva kwehola lesithathu',
      literal: 'It-is quarter past three (3:15)',
      emoji: '🕒',
      phonetic: 'its-KWOR-ter-past-THREE',
      audioRef: null,
    },
    {
      id: 'half_past',
      target: "It's half past three",
      native: 'Imizuzu engamatshumi amathathu emva kwehola lesithathu',
      literal: 'It-is half past three (3:30)',
      emoji: '🕞',
      phonetic: 'its-HAF-past-THREE',
      audioRef: null,
    },
    {
      id: 'quarter_to',
      target: "It's quarter to four",
      native: 'Imizuzu eyitshumi lanhlanu engaphambili kwehola lesine',
      literal: 'It-is quarter to four (3:45)',
      emoji: '🕓',
      phonetic: 'its-KWOR-ter-too-FOR',
      audioRef: null,
    },
  ],

  pattern: {
    name: "Quarter past / half past / quarter to",
    explanation: "Indlela yokutsho isikhathi ngesi-Britain ihlukene phakathi: 'past' (emva) kusebenza phakathi kuka :01 kuze kufike :30. 'To' (kuya) kusebenza ku :31 kuya ku :59. 'Quarter' = 15 minutes (incenye yehola). 'Half' = 30 minutes (uhhafu). Yithi: 3:15 = quarter PAST three. 3:45 = quarter TO four (ngoba i-3:45 ikwazi ukuba ifutshane kuye 4:00). Lokhu kungaba nzima ekuqaleni — kodwa ngokukhuthala kuyazwakala.",
    examples: [
      { target: "It's quarter past three (3:15)",  native: 'Sesiyihola lesithathu lemizuzu eyitshumi lanhlanu' },
      { target: "It's half past three (3:30)",      native: 'Sesiphakathi kwamahola amathathu lamane' },
      { target: "It's quarter to four (3:45)",      native: 'Imizuzu eyitshumi lanhlanu phambili kwehola lesine' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Hlanganisa isikhathi ngesiNgisi lalokho akushoyo',
      pairs: [
        { left: "Three o'clock",       right: '3:00' },
        { left: 'Quarter past three',  right: '3:15' },
        { left: 'Half past three',     right: '3:30' },
        { left: 'Quarter to four',     right: '3:45' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: "Gcwalisa indawo engelalutho — sebenzisa 'past' loba 'to'",
      sentence: "It's quarter ____ four. (3:45)",
      options: ['to', 'past', 'after'],
      correct: 'to',
      context: "Ku 3:45, sengilethelele kakhulu kuya ku 4:00 — yikho usebenzisa 'to' (kuya).",
    },
    {
      type: 'translate',
      instruction: 'Bhala ngesiNgisi (3:30)',
      prompt: 'Sesiphakathi kwehola lesithathu lelesine',
      correct: ['half past three', "It's half past three", "Half past three", "Half past three.", "It's half past three.", "it's half past three"],
    },
    {
      type: 'multiple_choice',
      instruction: "Khetha isiphendulo esifaneleyo",
      question: "Iwashi lithi 5:45. Uthini ngesi-Britain isiNgisi?",
      options: [
        { text: "It's quarter to six.",  correct: true },
        { text: "It's quarter past five.", correct: false },
        { text: "It's half past five.",  correct: false },
      ],
      explanation: "5:45 yimizuzu eyitshumi lanhlanu phambili kuya ku-6:00 — yikho 'quarter to six'. 'Quarter past five' bekungaba 5:15. 'Half past five' bekungaba 5:30.",
    },
    {
      type: 'build_sentence',
      instruction: "Hlela amagama — utshela isikhathi (3:15)",
      words: ["It's", 'three', 'past', 'quarter'],
      correct: ["It's", 'quarter', 'past', 'three'],
      translation: 'Sesiphambili kwehola lesithathu ngemizuzu eyitshumi lanhlanu',
    },
  ],

  rwenDialogue: {
    intro: 'Use ku-bhasi rank e-Bulawayo, ucela usemtshelo wokubuya kwebhasi. Indoda ekhamba njalo ikutshela ngesiNgisi.',
    lines: [
      { speaker: 'npc', target: "Next bus is at quarter past three.", native: 'Ibhasi elandelayo iza ngo-3:15.' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Three fifteen — got it.",       native: '3:15 — ngiyakuzwa.',                              correct: true,  feedback: "Kuhle! 'Quarter past three' kufana 'three fifteen'. Konke ekutshoyo kuyinto eyodwa." },
          { target: "Three forty-five?",             native: '3:45?',                                            correct: false, feedback: "'Quarter past' (emva) ngu :15, hatshi :45. Buya ekuqaleni — past = +, to = -." },
          { target: "OK, three.",                     native: 'Kulungile, kuyihola lesithathu nje.',              correct: false, feedback: "Hayi — uthethe lo 'quarter past three' (3:15), hatshi 'three o'clock' (3:00). Imizuzu eyitshumi lanhlanu yenza umehluko." },
        ],
      },
      { speaker: 'npc', target: "Three fifteen, yes. Don't be late.", native: 'Yikho lokho, 3:15. Ungazi ngemvelisa.' },
      {
        speaker: 'rwen',
        rwenLine: "Ungaphumelele! 'Past' lo 'to' kuyazikhuluma — past = phambili kwemizuzu, to = ngakukabila kwemizuzu.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Ungabuyeli phezulu. Bhala ngokwezikhumbuzo zakho.',
    prompts: [
      { prompt: '3:15 (ngesiNgisi se-Britain)', correct: ['quarter past three', "It's quarter past three", 'Quarter past three'] },
      { prompt: '3:30 (ngesiNgisi se-Britain)', correct: ['half past three', "It's half past three", 'Half past three'] },
      { prompt: '3:45 (ngesiNgisi se-Britain)', correct: ['quarter to four', "It's quarter to four", 'Quarter to four'] },
    ],
  },

  mission: {
    title: 'Umsebenzi wanamuhla',
    task: "Bheka iwashi izikhathi ezintathu ezehlukileyo lamuhla, futhi tsho isikhathi ngesiNgisi ngamandla. Phinda kabili — kanye nge 'past' phinda nge 'to'. Yenze isikhathi sokuvuka, sokudla, kanye sokulala.",
    rwenSignoff: "Isikhathi siyahlangana esiNgisini ngendlela yethando ehlukileyo. Sizabonana kusasa.",
  },

  phase8: {
    scenario: "You're catching a coach from London Victoria to Manchester. You ask the ticket counter agent what time the next three coaches leave. They quote times in British style ('quarter past', 'half past', 'quarter to'). Confirm the time you understood and book a seat.",
    rwenRole: "Sandra, 45, a London coach station ticket agent. Friendly Cockney accent, speaks fast and uses 'quarter past two' rather than 'two fifteen'. Will repeat once if asked.",
    successCriteria: "User correctly converts at least one 'quarter past', 'half past', or 'quarter to' time and confirms it back to Sandra (e.g. 'so that's three forty-five' or 'so that's quarter to four'). Asks for clarification if needed.",
    estimatedMinutes: 4,
    bonusXp: 5,
  },
};

export default lesson;

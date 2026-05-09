import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm02-l04-months',
  module: 2,
  lesson: 4,
  title: 'Months — Inyanga zomnyaka',
  estimatedMinutes: 6,
  xpReward: 25,

  hook: {
    rwenLine: "Lamuhla siphinda izinyanga ezilitshumi lambili: January kuya kuDecember. Inyanga ngabe ziyabhalwa ngendlela eyodwa, kodwa zikhulunywa ngendlela ezimangalisayo.",
    culturalNote: "EsiNdebeleni 'February' ngu uNhlolanja — kucacile. Kodwa ngesiNgisi 'February' libhalwa F-E-B-R-U-A-R-Y kodwa abantu abanengi bakhuluma 'FEB-yoo-er-ee' (akula 'r' yokuqala). Lokhu kuvumelwa abakwa-Britain kanye lakwa-America. Inyanga eziyizinkinga ezinkulu zabaNdebele yi 'February' (FEB-roo-er-ee kumbe FEB-yoo-er-ee), kanye 'Wednesday'-style 'silent letters'. Zonke ezinye zilula — kodwa lalela ukuthi uthi 'August' ngu 'AW-gust' (akusi 'oh-gust').",
  },

  chunks: [
    {
      id: 'jan_feb_mar',
      target: 'January, February, March',
      native: 'uZibandlela, uNhlolanja, uNdasa',
      literal: '(Jan, Feb, Mar)',
      emoji: '❄️',
      phonetic: 'JAN-yoo-er-ee, FEB-roo-er-ee, march',
      audioRef: null,
    },
    {
      id: 'apr_may_jun',
      target: 'April, May, June',
      native: 'uMabasa, uNkwenkwezi, uNhlangulana',
      literal: '(Apr, May, Jun)',
      emoji: '🌸',
      phonetic: 'AY-prl, may, joon',
      audioRef: null,
    },
    {
      id: 'jul_aug_sep',
      target: 'July, August, September',
      native: 'uNtulikazi, uNcwaba, uMpandula',
      literal: '(Jul, Aug, Sep)',
      emoji: '☀️',
      phonetic: 'joo-LY, AW-gust, sep-TEM-ber',
      audioRef: null,
    },
    {
      id: 'oct_nov_dec',
      target: 'October, November, December',
      native: 'uMfumfu, uLwezi, uMpalakazi',
      literal: '(Oct, Nov, Dec)',
      emoji: '🍂',
      phonetic: 'ok-TOH-ber, no-VEM-ber, dee-SEM-ber',
      audioRef: null,
    },
  ],

  pattern: {
    name: "Ukubhalwa kwenyanga lokukhulunywa kwazo",
    explanation: "Konke ukukhulunywa kwenyanga ngesiNgisi okuxhwala kakhulu ku-AbaNdebele kungemukelwa kanjalo: 'February' = FEB-roo-er-ee (kumbe FEB-yoo-er-ee, le ndlela yesibili iqondisile e-Britain le-USA). 'August' = AW-gust, akusi 'oh-gust' loba 'a-yoo-gust'. 'July' lo 'June' bayehlukana — 'June' = joon (umsindo munye), 'July' = joo-LY (gcizelela ekugcineni). Zonke izinyanga zonke zibhalwa ngosiba olumkhulu ngesiNgisi: J-anuary, hatshi january.",
    examples: [
      { target: 'February — FEB-roo-er-ee',  native: 'uNhlolanja' },
      { target: 'August — AW-gust',          native: 'uNcwaba (akusi oh-gust)' },
      { target: 'June versus July',           native: 'joon versus joo-LY (gcizelelo ekugcineni)' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Hlanganisa inyanga ngesiNgisi lalokho akushoyo',
      pairs: [
        { left: 'January',  right: 'uZibandlela' },
        { left: 'February', right: 'uNhlolanja' },
        { left: 'August',   right: 'uNcwaba' },
        { left: 'December', right: 'uMpalakazi' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: "Gcwalisa indawo engelalutho — usebenzisa inyanga elandelayo",
      sentence: 'After January comes ____.',
      options: ['February', 'March', 'December'],
      correct: 'February',
      context: 'Ngemva kwenyanga yokuqala (January) kulandela enye yesibili (February).',
    },
    {
      type: 'multiple_choice',
      instruction: "Khetha indlela efaneleyo yokukhuluma 'February'",
      question: "Indlela efana neyabesilungu ekhuluma 'February' yiyiphi?",
      options: [
        { text: 'FEB-roo-er-ee (kumbe FEB-yoo-er-ee — bobabili balungile)', correct: true },
        { text: 'fee-bee-roo-AH-ree',                                        correct: false },
        { text: 'FAB-ree',                                                    correct: false },
      ],
      explanation: "'February' likhulunywa 'FEB-roo-er-ee' kumbe 'FEB-yoo-er-ee'. Indlela yesibili (le ngaphandle 'r' yokuqala) iyethulwa kakhulu — esimanjeni iqondisile.",
    },
    {
      type: 'translate',
      instruction: 'Bhala ngesiNgisi',
      prompt: 'uMpalakazi',
      correct: ['December', 'december', 'December.', 'december.'],
    },
    {
      type: 'build_sentence',
      instruction: 'Hlela amagama — utshela usuku lokuzalwa kwakho',
      words: ['birthday', 'is', 'in', 'My', 'July'],
      correct: ['My', 'birthday', 'is', 'in', 'July'],
      translation: 'Usuku lwami lokuzalwa lukuJulayi',
    },
  ],

  rwenDialogue: {
    intro: 'Use embese ungcwalisa iform ye-passport. Officer ucela inyanga yokuzalwa kwakho.',
    lines: [
      { speaker: 'npc', target: "Which month were you born?", native: 'Wazalwa ngenyanga bani?' },
      {
        speaker: 'user',
        userChoices: [
          { target: 'I was born in August.',        native: 'Ngazalwa ngoNcwaba.',        correct: true,  feedback: "Kuhle! 'AW-gust' lifaneleka — wenze ngokuphumelelayo." },
          { target: 'In oh-gust.',                   native: 'Ngo oh-gust.',               correct: false, feedback: "Akusi 'oh-gust' — yi 'AW-gust' (njenge'awe' okuncane)." },
          { target: 'Eight month.',                  native: 'Inyanga yesithupha (?).',    correct: false, feedback: "Esimangengiki — uthi 'August', kungasi 'eight month'. Inyanga zilamabizo athile." },
        ],
      },
      { speaker: 'npc', target: 'August. Day and year?', native: 'Ngo-Ncwaba. Usuku lomnyaka?' },
      {
        speaker: 'rwen',
        rwenLine: "Ungaphumelele! Inyanga zonke zilamabizo, hatshi izinombolo nje. 'August' kawukungifani 'eight'. Manje uyazama.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Ungabuyeli phezulu. Bhala ngokwezikhumbuzo zakho.',
    prompts: [
      { prompt: 'February (ngesiNgisi)', correct: ['February', 'february', 'February.', 'february.'] },
      { prompt: 'August (ngesiNgisi)',   correct: ['August', 'august', 'August.', 'august.'] },
      { prompt: 'November (ngesiNgisi)', correct: ['November', 'november', 'November.', 'november.'] },
    ],
  },

  mission: {
    title: 'Umsebenzi wanamuhla',
    task: "Tsho inyanga ezilitshumi lambili ngesiNgisi ngokulandelana, kabili. Gcizelela ku 'February' (FEB-roo-er-ee), 'August' (AW-gust), kanye 'July' (joo-LY).",
    rwenSignoff: "Inyanga zonke ziyazwakaleka esiNgisini ngokuhlukana — qhubeka uzizwa endlebeni yakho.",
  },

  phase8: {
    scenario: "You're filling out a visa application form at the British Embassy in Harare. The clerk asks you about your birth month, the month you want to travel, and the month you'll return. Use English month names correctly.",
    rwenRole: "Mr Williams, 50, a polite but no-nonsense visa clerk. He'll ask the three questions clearly and write down what you say — so if you say 'eight month' instead of 'August', he'll politely correct you.",
    successCriteria: "User says at least three different month names correctly, attempts the FEB-roo-er-ee or AW-gust pronunciation if those months come up, and doesn't say 'month-eight' or 'month-twelve' instead of names.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;

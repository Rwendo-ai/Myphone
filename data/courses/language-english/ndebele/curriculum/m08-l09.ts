import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm08-l09-salary-wage-paycheck',
  module: 8,
  lesson: 9,
  title: 'Salary / wage / paycheck',
  estimatedMinutes: 5,
  xpReward: 30,

  hook: {
    rwenLine: "Amagama amathathu emali yokuqashwa: 'salary' (umholo wenyanga / unyaka), 'wage' (umholo wehora), 'paycheck' (incwadi yokuhola — US). Asebenza ngokwehlukile.",
    culturalNote: "AMAGAMA AHLUKILE: (1) SALARY — yini oyiholayo nyaka noma nyanga, ngokuvamile umsebenzi we-professional / office (£35,000/year). 'I earn a salary of £35,000.' (2) WAGE — yini oyiholayo ngehora, kuvame umsebenzi we-shift (£11/hour ku-Tesco). 'I'm on minimum wage.' (3) PAYCHECK (US) / PAYSLIP (UK / AU) — incwadi okukhonjisa ku-imali ngeneyo (gross), intela ekhishiwe (deductions), kanye ne-balance (net). UQAPHELE: (1) Ku-job ad e-UK uzobona '£30,000 per annum' (= per year). (2) Ku-AU 'AU$70k pa' (per annum). (3) Ku-US '$50k/year' kanye no-'plus benefits' — ama-benefits angu-health insurance, 401k. (4) Iyini i-'gross' vs 'net'? GROSS = ngaphambi kwentela; NET = emva kokukhipha intela (yikho lokho ozofakwe ku-account yakho). (5) E-UK 'paid monthly' kuvame; e-US 'paid bi-weekly' (rendani-zinyanga); e-AU 'fortnightly' (-zonke izinyanga ezimbili). (6) IGAMA: 'minimum wage' = umholo ophansi okhonjwe ngumbuso. UK 2026 ngu-£12.21/hour ku-21+, US ngu-$7.25/hour federal kepha izwe lakhe ngalinye liphezulu, AU ngu-AU$24.10/hour (eliphakeme!).",
  },

  chunks: [
    {
      id: 'salary',
      target: 'Salary',
      native: 'Umholo wenyanga / wonyaka (umsebenzi we-office)',
      literal: 'salary',
      emoji: '💼',
      phonetic: 'SAL-uh-ree',
      audioRef: null,
    },
    {
      id: 'wage',
      target: 'Wage',
      native: 'Umholo wehora (ngokushintshanisa)',
      literal: 'wage',
      emoji: '⏰',
      phonetic: 'WAYJ',
      audioRef: null,
    },
    {
      id: 'paycheck',
      target: 'Paycheck (US) / Payslip (UK)',
      native: 'Incwadi yokuhola — ikhonjisa imali, intela',
      literal: 'pay / check (slip)',
      emoji: '🧾',
      phonetic: 'PAY-chek / PAY-slip',
      audioRef: null,
    },
    {
      id: 'gross_vs_net',
      target: 'Gross vs net',
      native: 'Gross = ngaphambi kwentela; Net = emva kwentela',
      literal: 'gross / net',
      emoji: '📊',
      phonetic: 'GROHS / NET',
      audioRef: null,
    },
    {
      id: 'minimum_wage',
      target: 'Minimum wage',
      native: 'Umholo ophansi okhonjwe ngumbuso',
      literal: 'minimum / wage',
      emoji: '⚖️',
      phonetic: 'MIN-i-mum-WAYJ',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Talking about pay',
    explanation: "(1) Igama 'I earn ___' = ngiyahola ___. 'I earn £35,000 a year.' (2) Iqembu lihlukile: 'How much do you earn?' kungaba ngenkani; sebenzisa 'What's the salary?' / 'What's the rate?' (mufanele). (3) Ku-job ad: '£35,000 per annum' (per year), '£15/hour', '$50k pa plus benefits'. (4) Ngeke usho 'I earn 35 thousand' uma ucabanga ngonyaka — kufanele usho 'a year' ekugcineni: 'I earn 35 thousand a year.' (5) IGAMA 'pay rise' (UK) / 'raise' (US) = ukunyuselwa.",
    examples: [
      { target: "I'm on £15 an hour.", native: 'Ngiku-£15 ngehora.' },
      { target: 'My salary is $60,000 a year.', native: 'Umholo wami ngu-$60,000 onyaka.' },
      { target: 'When do you get paid?', native: 'Uhola nini?' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Hlanganisa igama nesincazelo',
      pairs: [
        { left: 'Salary', right: 'Umholo wenyanga / wonyaka' },
        { left: 'Wage', right: 'Umholo wehora' },
        { left: 'Gross pay', right: 'Imali ngaphambi kwentela' },
        { left: 'Net pay', right: 'Imali emva kwentela (efika ku-account)' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Gcwalisa',
      sentence: "I'm on minimum _____ at the moment — £12.21 an hour.",
      options: ['wage', 'salary', 'paycheck'],
      correct: 'wage',
      context: "Umholo wehora = WAGE. Salary = nyanga / nyaka.",
    },
    {
      type: 'multiple_choice',
      instruction: 'Umsebenzi we-office e-Manchester. Wonke nyaka uhola £35,000.',
      question: 'How do you describe this?',
      options: [
        { text: "I earn a salary of £35,000 a year.", correct: true },
        { text: "My wage is 35 thousand.", correct: false },
        { text: "I have paycheck of 35 thousand.", correct: false },
      ],
      explanation: "Umsebenzi onyaka = SALARY. 'Wage' yi-hourly. 'Paycheck' yi-incwadi yokuhola, hhayi inani.",
    },
    {
      type: 'translate',
      instruction: 'Bhala ngesi-Ngisi (US)',
      prompt: 'Uhola nini? (umngani wakho)',
      correct: ['When do you get paid?', 'when do you get paid?', 'When do you get paid'],
    },
    {
      type: 'build_sentence',
      instruction: 'Yakha — Umholo wami ngu-$60k onyaka.',
      words: ['salary', 'My', 'is', '$60,000', 'a', 'year.'],
      correct: ['My', 'salary', 'is', '$60,000', 'a', 'year.'],
      translation: 'Umholo wami ngu-$60,000 onyaka.',
    },
  ],

  rwenDialogue: {
    intro: "Use-interview ye-job e-London. Umuntu okusebenzayo nawe uyabuza nge-current package yakho. Ufuna ukukhuluma ngokucacile.",
    lines: [
      { speaker: 'npc', target: "And what's your current salary, if you don't mind me asking?", native: 'Yiphi i-current salary yakho, uma ungenakho ukukhathazeka?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "I'm currently on £32,000 per annum, plus pension.", native: 'Ngiku-£32,000 onyaka, kuhlanganise ne-pension.', correct: true, feedback: "Kuhle — 'per annum' (yonyaka) yi-natural. 'Plus pension' kuyangezelwa." },
          { target: "I get money every month.", native: 'Ngithola imali nyanga.', correct: false, feedback: "Kushona kakhulu. Cacisa inani: 'I'm on £32,000 per annum.'" },
          { target: "I have wage of 32k.", native: '', correct: false, feedback: "Iqembu lihlanganile: 'wage' yi-hourly. Kufanele 'salary' OR cacisa: 'I'm on £32k a year.'" },
        ],
      },
      { speaker: 'npc', target: "And what salary are you looking for?", native: 'I-salary oyifunayo iyiphi?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "I'm looking for around £40,000 a year, depending on the benefits package.", native: 'Ngifuna ngo-£40,000 onyaka, kuya kwi-benefits package.', correct: true, feedback: "Kahle — 'depending on the benefits' kuyiqhubeka. Awulahli ku-£40k uma i-pension/leave inkulu." },
          { target: "I want more.", native: 'Ngifuna okwengeziwe.', correct: false, feedback: "Cacisa! 'I'm looking for £40,000.' Akukho into ekhuluma kabi ngokucacile." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Khumbula: SALARY (nyanga/nyaka, office), WAGE (hora, shift), PAYCHECK (incwadi). Uma ucacisa, awucacisile.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Ngaphandle kokubuka.',
    prompts: [
      { prompt: 'Word for hourly pay (English)', correct: ['wage', 'wages', 'a wage', 'hourly wage'] },
      { prompt: 'Word for yearly office pay (English)', correct: ['salary', 'a salary', 'annual salary'] },
    ],
  },

  mission: {
    title: 'Umsebenzi wanamuhla',
    task: "Khangela ama-job ad amathathu ku-LinkedIn / Indeed e-UK / US / AU. Bhala phansi: i-salary (annual), i-currency, ne-benefits. Bona umahluko phakathi 'salary' (£40k pa) ne-'wage' ($18/hour).",
    rwenSignoff: "Kusasa — i-lesson lokugcina lale module: i-shopping conversation eqhubekayo.",
  },

  phase8: {
    scenario: "You're chatting at a UK pub with a new friend who's just moved to Manchester from Sydney. They ask casually about pay in the UK vs Australia. Compare salary, wage, and minimum wage between the two countries.",
    rwenRole: "New friend from Sydney, late-20s. Curious about UK pay norms vs Australian. Asks honest, friendly questions.",
    successCriteria: "Student uses 'salary' (annual), 'wage' (hourly), and at least one of 'minimum wage' or 'gross/net' correctly. Compares one fact between UK (£12.21/hr min) and AU (AU$24/hr min).",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;

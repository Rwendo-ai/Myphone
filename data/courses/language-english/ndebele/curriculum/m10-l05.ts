import type { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm10-l05',
  module: 10,
  lesson: 5,
  title: "Disagreeing politely — \"I'm not sure I agree\", \"Maybe, but...\"",
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Ukuphikisana esiNgisini akusiyo into yokungahloniphi — kungumdlalo. Kodwa indlela yikho konke. 'No, you're wrong' kuyazwakala kabuhlungu. 'I'm not sure I agree' kuyazwakala njengomngane. 'Maybe, but...' iyahlonipha umqondo wakhe ngezikhathi uyiphakamisa eyakho.",
    culturalNote: "EUK kakhulu, abantu bayasathuza ngokuphikisana — kuyenza umuntu azwe ehlanganiswa noma ngabe usacacisa umqondo wakho. Yikho 'I'm not sure I agree' kungumdlalo we-mastery: yokuthi ucabanga okuyahlukileyo, ungazange uphakamise umunwe. EUS, kungaqondiswa kakhulu kanci, kodwa 'Maybe, but...' isebenza yonke indawo. Esikhungweni sokusebenza: 'I see your point, but...' inenkulumo. Kunye okuyilo: ungafundisi 'No' yodwa — kuyajiyelekile. ESiNdebele 'kodwa' kungumlawu omuhle; lapha esiNgisini, faka okuhle ngaphambi: 'I see what you mean, but...'",
  },

  chunks: [
    {
      id: 'not_sure_agree',
      target: "I'm not sure I agree",
      native: 'Angiqondi kahle ukuthi ngiyavuma',
      literal: "I'm not sure I agree",
      emoji: '🤷',
      phonetic: 'aym-not-SHOR-ay-uh-GREE',
      audioRef: null,
    },
    {
      id: 'maybe_but',
      target: 'Maybe, but...',
      native: 'Mhlawumbe, kodwa...',
      literal: 'Maybe, but...',
      emoji: '⚖️',
      phonetic: 'MAY-bee-but',
      audioRef: null,
    },
    {
      id: 'i_see_your_point',
      target: 'I see your point, but...',
      native: 'Ngiyabona umqondo wakho, kodwa...',
      literal: 'I see your point, but...',
      emoji: '👀',
      phonetic: 'ay-SEE-yur-POYNT-but',
      audioRef: null,
    },
    {
      id: 'on_the_contrary',
      target: 'Actually, I think...',
      native: 'Ngeqiniso, ngicabanga ukuthi...',
      literal: 'Actually, I think...',
      emoji: '🔄',
      phonetic: 'AK-shu-lee-ay-THINGK',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Disagreeing — soft start, then point',
    explanation: "I-formula yokuphikisana ngenhlonipho: (1) Vuma okuncane / hlonipha — 'I see your point' / 'Maybe' / 'I'm not sure'. (2) Beka i-pivot — 'but' / 'however'. (3) Veza umqondo wakho — 'I think...' / 'In my view...'. Iziphakamiso ezimbalwa: ungaqali ngo-'No' kumbe 'You're wrong'. Ungasebenzisi 'You don't understand' — kuhlukumeza. I-tone yakho yendaba ngangamandla amaphezulu.",
    examples: [
      { target: "I'm not sure I agree — I think we should try first.",     native: 'Angiqondi kahle ukuthi ngiyavuma — ngicabanga kufanele siqale ukuzama.' },
      { target: 'Maybe, but in my view it might be too early.',             native: 'Mhlawumbe, kodwa ngokumbono wami kungaba kungaphambili kakhulu.' },
      { target: 'I see your point, but I think there is another way.',      native: 'Ngiyabona umqondo wakho, kodwa ngicabanga kulendlela enye.' },
      { target: 'Actually, I think the second option is stronger.',         native: 'Ngeqiniso, ngicabanga inketho yesibili iqinile.' },
    ],
  },

  exercises: [
    {
      type: 'multiple_choice',
      instruction: 'Khetha indlela ehlonitshwayo yokuphikisana',
      question: "Umngane wakho uthi: 'We should leave at 7am.' Wena ucabanga 8am yikho okufaneleyo. Yiphi indlela ehlonitshwayo?",
      options: [
        { text: "No. Wrong. 8am.",                                                  correct: false },
        { text: "I see your point, but I think 8am might give us more time.",        correct: true },
        { text: "You don't know what you're saying.",                                correct: false },
      ],
      explanation: "Eyokuqala lo-yesithathu zihlukumeza. Eyesibili ivuma okuncane ('I see your point'), beke i-pivot ('but'), bese ibeka umbono ngokuhlonipha ('I think... might'). Lokhu yi-mastery.",
    },
    {
      type: 'translate',
      instruction: 'Bhala ngesiNgisi',
      prompt: 'Ngiyabona umqondo wakho, kodwa ngicabanga kulendlela engcono.',
      correct: [
        'I see your point, but I think there is a better way.',
        'I see your point, but I think there is another way.',
        "I see your point, but I think there's a better way.",
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Gcwalisa — uphikisana ngenhlonipho',
      sentence: "_____, but I'm not sure that's the best option.",
      options: ['Maybe', 'No', 'Wrong'],
      correct: 'Maybe',
      context: "U-'Maybe' uvuma okuncane, ehlonipha umqondo wakhe. U-'No' lo-'Wrong' bayahlukumeza. Le yi-formula ye-disagree-with-respect.",
    },
    {
      type: 'build_sentence',
      instruction: "Hlela: 'I'm not sure I agree with that'",
      words: ['agree', 'with', 'that.', "I'm", 'not', 'sure', 'I'],
      correct: ["I'm", 'not', 'sure', 'I', 'agree', 'with', 'that.'],
      translation: 'Angiqondi kahle ukuthi ngiyavuma lokho',
    },
  ],

  rwenDialogue: {
    intro: 'Usemhlanganweni womsebenzi. Umngane wakho ufaka umqondo ongawuvumiyo. Kufanele uphikisane ngenhlonipho.',
    lines: [
      { speaker: 'npc', target: "We should cut the budget by 20%. That'll solve everything.", native: "Kufanele sehlise i-budget ngama-20%. Lokhu kuzakwedlulisa konke." },
      {
        speaker: 'user',
        userChoices: [
          {
            target: "I see your point about cutting costs, but I'm not sure I agree with 20%. In my view, that might hurt the team. Maybe 10% would be safer?",
            native: "Ngiyabona umqondo wakho ngokwehlisa izindleko, kodwa angiqondi kahle ukuthi ngiyavuma ngo-20%. Ngokumbono wami, kungalimaza i-team. Mhlawumbe i-10% kungaphephileyo?",
            correct: true,
            feedback: "Yiwo umdlalo ophezulu — uvume okuncane, waphikisana ngenhlonipho, wabeka indlela enye. I-mastery yephika.",
          },
          {
            target: "No way. That's stupid.",
            native: "Akukho kanjalo. Kuyibhibhili.",
            correct: false,
            feedback: "Akuhloniphi. Sebenzisa 'I see your point, but...' okuwumdlalo we-professional.",
          },
          {
            target: "OK, fine.",
            native: "Kulungile.",
            correct: false,
            feedback: "Awuphikisananga lapho ungavumelani. Veza umqondo wakho ngenhlonipho — 'I'm not sure I agree' kuyenele.",
          },
        ],
      },
      { speaker: 'npc', target: "Hmm, that's a fair concern. Let's think about a smaller cut.", native: "Hawu, kuyizwakalela ngempela. Asicabange ngokwehlisa okuncane." },
      { speaker: 'rwen', rwenLine: "Bona — uphendulile ngokungavumelana, kodwa konke akubangwananga. Lokhu yikho okutshintsha amasiko ehombe.", rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: 'Ungabuyeli emuva.',
    prompts: [
      { prompt: "Bhala 'I'm not sure I agree' ngesiNgisi", correct: ["I'm not sure I agree", 'I am not sure I agree', "I'm not sure I agree."] },
      { prompt: "Bhala 'I see your point, but...' ngesiNgisi", correct: ['I see your point, but', 'I see your point but', 'I see your point, but...'] },
    ],
  },

  mission: {
    title: 'Umsebenzi wakho wamuhla',
    task: "Cinga isikhathi udinga ukuphikisana ngenhlonipho — engxoxweni, ku-WhatsApp, kumbe emsebenzini. Sebenzisa 'I see your point, but...' kumbe 'Maybe, but...'. Bona ukuthi i-mood ihamba njani.",
    rwenSignoff: "Kusasa — i-UK idioms. 'It's a piece of cake.'",
  },

  phase8: {
    scenario: "You're in a discussion (work or social) where someone shares an opinion you genuinely disagree with — for example, 'Working from home is bad for productivity.' Push back politely using the lesson's phrases.",
    rwenRole: "Tom, 40, an opinionated colleague who shares strong views in meetings. Listens if you push back well; gets defensive if you're rude.",
    successCriteria: "User disagrees AT LEAST ONCE using 'I'm not sure I agree', 'Maybe, but', 'I see your point, but', or 'Actually, I think'. Gives one reason for the disagreement. Avoids 'No, you're wrong'. Stays calm and in English.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;

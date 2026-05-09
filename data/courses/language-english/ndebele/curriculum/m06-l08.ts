import type { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm06-l08',
  module: 6,
  lesson: 8,
  title: 'Mental health vocabulary — anxious, depressed, stressed',
  estimatedMinutes: 7,
  xpReward: 35,

  hook: {
    rwenLine: "Lokhu kuyizifundo eqiniso — eUK lase US, abantu bakhuluma impilo yengqondo ngendlela ekhululekile. Amagama amathathu amqoka: 'anxious' (ukuthukutheka, ukukhathazeka), 'depressed' (ukuhlala phansi, ukungezwa injabulo), lo 'stressed' (ukucindezeleka). Awusilo umuntu omangalisileyo uma uziwiwa kanjalo.",
    culturalNote: "EZimbabwe sivame ukucabanga ukuthi 'mental health' yindaba enkulu — ukulahlekelwa yingqondo. Kodwa eUK lase US, lokhu kuhlukile ngokupheleleyo. 'I'm feeling anxious about my exam' yifomula evamile, ekhulunywa ngabafundi nsuku zonke. 'I'm a bit stressed' kungumthukutha emsebenzini. Akukutshela ukuthi ukhubazekile — kutsho ukuthi unjengomunye umuntu. UAbantu eUK lase US bayazi i-therapist (umelaphi wengqondo) — kungumsebenzi obhadalwa kahle, abantu abanengi bayaphumelela. Awunamahloni ukuthi ungakhuluma ngaye. EUK iNHS inikeza i-therapy ngokumahla ngezinye izikhathi. EUS, ngaphansi kwe-insurance enhle, kuyatholakala. KHUMBULA: uma ungakhululekile kakhulu, ushaya 999 (UK) / 911 (US) noma uhambele i-A&E / ER. Lapha kunabantu abakulindeleyo.",
  },

  chunks: [
    {
      id: 'anxious',
      target: "I'm feeling anxious",
      native: 'Ngikhathazekile / Ngigxizilelwe',
      literal: undefined,
      emoji: '😰',
      phonetic: 'aym-FEE-ling-ANG-shus',
      audioRef: null,
    },
    {
      id: 'depressed',
      target: "I'm feeling depressed",
      native: 'Ngiphethwe yi-depression / Ngehle inhliziyo',
      literal: undefined,
      emoji: '😞',
      phonetic: 'aym-FEE-ling-dee-PREST',
      audioRef: null,
    },
    {
      id: 'stressed',
      target: "I'm stressed out",
      native: 'Ngicindezelekile',
      literal: undefined,
      emoji: '😩',
      phonetic: 'aym-STREST-owt',
      audioRef: null,
    },
    {
      id: 'overwhelmed',
      target: "I'm feeling overwhelmed",
      native: 'Sengingaphethelelwe yizinto / Sengincindezelekile kakhulu',
      literal: undefined,
      emoji: '🌊',
      phonetic: 'aym-FEE-ling-oh-vuh-WELMD',
      audioRef: null,
    },
    {
      id: 'help',
      target: 'I think I need to talk to someone',
      native: 'Ngicabanga ukuthi ngidinga ukukhuluma lomuntu',
      literal: undefined,
      emoji: '🤝',
      phonetic: 'ay-think-ay-need-tu-TAWK',
      audioRef: null,
    },
  ],

  pattern: {
    name: "'I'm feeling ___' — ungasabi ukuyitsho",
    explanation: "EsiNgisini, ukukhuluma ngempilo yengqondo kusebenzisa u-'I'm feeling + adjective': 'I'm feeling anxious', 'I'm feeling stressed', 'I'm feeling low'. 'I'm feeling low' yifomula esoftileyo — kutsho 'angiphilanga kahle ngengqondo'. 'I think I need to talk to someone' yindlela engasabi ukucela usizo. Khumbula: lokhu akusiyo into oyifihlayo. Abantu bayazwisisa.",
    examples: [
      { target: "I'm feeling really anxious about the interview tomorrow.",  native: 'Ngikhathazekile kakhulu nge-interview yakusasa.' },
      { target: "I've been feeling low for a few weeks now.",                 native: 'Ngehle inhliziyo emasontweni amabili noma amathathu adluleyo.' },
      { target: "I'm a bit stressed with work — can we talk?",                native: 'Ngicindezelekile kancane ngomsebenzi — singakhuluma?' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Hlanganisa amagama lencazelo',
      pairs: [
        { left: 'Anxious',     right: 'Ukukhathazeka, ukuthukutheka' },
        { left: 'Depressed',   right: 'Ukwehla kwenhliziyo, ukungabi nentokozo' },
        { left: 'Stressed',    right: 'Ukucindezeleka' },
        { left: 'Overwhelmed', right: 'Ukuncipha ngenxa yezinto eziningi' },
      ],
    },
    {
      type: 'multiple_choice',
      instruction: 'Khetha okuhloniphekayo emsebenzini',
      question: "Umphathi wakho ukubuze 'How are you?' Awuphilanga kahle ngengqondo. Yiphi engcono?",
      options: [
        { text: "Honestly, I've been feeling a bit overwhelmed lately. Could we talk about workload?", correct: true },
        { text: "I'm depression with work.", correct: false },
        { text: "I'm fine, no problem.",      correct: false },
      ],
      explanation: "'I've been feeling a bit overwhelmed' yifomula efihliphekileyo, ehloniphekileyo, ekhulekayo. Engasoftisha ngo 'a bit'. 'Depression' yi-noun (isifo) — yi-adjective ngu 'depressed'.",
    },
    {
      type: 'translate',
      instruction: 'Bhala ngesiNgisi',
      prompt: 'Ngikhathazekile kakhulu nge-interview yakusasa.',
      correct: ["I'm feeling really anxious about the interview tomorrow.", "I'm really anxious about the interview tomorrow.", "I'm anxious about the interview tomorrow.", "i'm feeling really anxious about the interview tomorrow."],
    },
    {
      type: 'fill_blank',
      instruction: 'Gcwalisa indawo engelalutho',
      sentence: "I think I need to ____ to someone — a therapist or a friend.",
      options: ['talk', 'speak with', 'tell'],
      correct: 'talk',
      context: "'Talk to someone' yifomula evamile yokucela usizo lwengqondo. 'Speak with' kungaqondana, kodwa kuyaqina kakhulu. 'Tell someone' kungumlamatsho.",
    },
    {
      type: 'build_sentence',
      instruction: 'Hlela amagama',
      words: ['out', "I'm", 'stressed'],
      correct: ["I'm", 'stressed', 'out'],
      translation: 'Ngicindezelekile',
    },
    {
      type: 'multiple_choice',
      instruction: 'Khetha okuqondileyo',
      question: "Umngane wakho oseLondon utshele ukuthi 'I've been feeling really low.' Iphi impendulo enhle?",
      options: [
        { text: "Thanks for telling me. I'm here. Do you want to talk about it?", correct: true },
        { text: "Cheer up! Don't worry.",                                          correct: false },
        { text: "You should pray more.",                                            correct: false },
      ],
      explanation: "'Thanks for telling me. I'm here.' kuvula isifuba — kuyabatshengisa ukuthi uyazwa. 'Cheer up' kungeziqondananga — kuvala ingxoxo. 'You should pray' kuyincamashi yokweluleka — kungafaneli umngane omcakathayo.",
    },
  ],

  rwenDialogue: {
    intro: 'Useseduze nomngane omkhulu eUK — ngumuntu okhuluma isiNgisi kuphela. Awusalele kahle, awuhlangani lo-imali, awusebenzi kahle. Uyakubuza ukuthi unjani.',
    lines: [
      { speaker: 'npc', target: "You've been quiet lately. Are you okay? You can tell me — I'm not going to judge.", native: 'Awusakhulumi kakhulu manje. Ukhona kahle? Ungangitshela — angisakwehluleli.' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Honestly, I've been feeling really anxious and stressed lately. Work has been overwhelming and I'm not sleeping well.", native: 'Ngeqiniso, ngigxizilelwe futhi ngicindezelekile kakhulu manje. Umsebenzi unzima futhi angilali kahle.', correct: true, feedback: "Kuhle kakhulu — wavula isifuba, wasebenzisa amagama ahloniphekileyo, wachaza isizathu. Lokhu yikho i-real friendship yenza." },
          { target: "Nothing.", native: 'Akukho lutho.', correct: false, feedback: "Umngane wakho ukubuze ngenhle. Kayilwa kuvalwa — vulela ingane." },
          { target: "I'm fine.", native: 'Ngiphilile.', correct: false, feedback: "Lokhu kuyiqonso esoftileyo elingaqiniseki. Uma kunemfundiso, vula isifuba — kungumduli wokugcina ubudlelwano obumsulwa." },
          { target: "Mina ngigula engqondweni.", native: 'Mina ngigula engqondweni.', correct: false, feedback: "Khuluma ngesiNgisi: 'I've been feeling anxious' kumbe 'I've been feeling low'." },
        ],
      },
      { speaker: 'npc', target: "I'm so glad you told me. Have you thought about talking to someone — a GP or a counsellor? The NHS does free therapy if you ask.", native: 'Ngiyathokoza ngokungitshela. Sewacabanga ukukhuluma lomuntu — i-GP kumbe i-counsellor? I-NHS ihlinzeka ngokumahla i-therapy uma ucela.' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Yeah, I think I need to talk to someone. I'll see if I can get an appointment with my GP.", native: 'Yebo, ngicabanga ukuthi ngidinga ukukhuluma lomuntu. Ngizahlola uma ngingathola i-appointment lo-GP wami.', correct: true, feedback: "Hayi! Wamukela isiphakamiso, wachaza ukuthi yini eyokulandela. Yini elungile yokunyusa engqondo." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Wenze kuhle kakhulu. Lawa ngamagama amqoka kuphela — kodwa ezempilweni yengqondo asikukhulumi nje, siyayisebenza. Kawungedwa.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Bhala ngenhliziyo.',
    prompts: [
      { prompt: 'Bhala ngesiNgisi: Ngikhathazekile.', correct: ["I'm anxious", "I'm feeling anxious", "I am anxious", "i'm feeling anxious"] },
      { prompt: 'Bhala ngesiNgisi: Ngicindezelekile.', correct: ["I'm stressed", "I'm stressed out", "I'm feeling stressed", "i'm stressed"] },
      { prompt: 'Bhala ngesiNgisi: Ngicabanga ngifuna ukukhuluma lomuntu.', correct: ['I think I need to talk to someone', 'I think I need to talk to someone.', 'I need to talk to someone', 'i think i need to talk to someone'] },
    ],
  },

  mission: {
    title: 'Umsebenzi wamuhla',
    task: "Cabanga ukuthi ulala uphefumulela kanjani lamuhla. Bhala kuthadi yakho ngesiNgisi: 'Today I'm feeling ___ because ___.' Khetha igama elingelipha 'happy / sad / anxious / stressed / okay'. Lokhu kuyimpilo, hatshi ubuthakathaka.",
    rwenSignoff: "Kusasa siyacabangela impilo eqotho — exercise, sleep, diet.",
  },

  phase8: {
    scenario: "You're meeting an English-speaking close friend (or potential therapist intake) for the first honest conversation about how you're really doing. You've been feeling overwhelmed for weeks. They ask gently. Open up — name the feeling, describe what's been happening, ask for support.",
    rwenRole: "Sarah, 38, a kind English-speaking friend (or NHS counsellor). She'll listen, won't interrupt, and will ask 'how long has this been going on?' and 'what does support look like for you right now?'",
    successCriteria: "User uses 'I'm feeling + adjective' for at least one mental-health word (anxious / stressed / depressed / overwhelmed / low). Names what triggered it. Says 'I think I need to talk to someone' OR accepts an offer of support. Stays in English.",
    estimatedMinutes: 4,
    bonusXp: 5,
  },
  crisisHandoff: true,
};

export default lesson;

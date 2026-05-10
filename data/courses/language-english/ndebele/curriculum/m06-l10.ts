import type { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm06-l10-conversation',
  module: 6,
  lesson: 10,
  title: "Doctor's visit conversation",
  estimatedMinutes: 8,
  xpReward: 45,

  hook: {
    rwenLine: "Lesi yisifundo sokugcina seModule 6 — kanye sihlanganisa konke. I-doctor's visit yi-engxoxo encanyana ekulayini: ukungenisa, ukuchaza isifo, ukuphendula imibuzo, ukuhlanganiselwa, kanye nokuhamba. Khumbula amagama omakelo: 'Hello / Good morning, Doctor', 'I've been having...', 'How long?', 'Thank you, Doctor.'",
    culturalNote: "EUK noma eUS, ukuhlangana lo-doctor kuyathethelelana. Udokotela uzakuvula ngo 'What brings you in today?' kumbe 'How can I help?'. Lokhu kungumbuzo wokuvula — phendula ngokucacileyo nge-symptom yakho. Akumelanga uhlebulele isiNdebele lapha — udokotela kufanele azwa konke. Khumbula: udokotela uzakubuza imibuzo emine kumbe emihlanu — ngezikhathi, ngokuhuluka, ngezinto ozisebenzisile, kanye nesimo somzimba. Lokhu yisifundo sokugcina lapho sifaka konke esifunda kukho ku-Module 6.",
  },

  chunks: [
    {
      id: 'opening',
      target: "Hello, Doctor. Thank you for seeing me",
      native: 'Salibonani, Dokotela. Ngiyabonga ngokungibona',
      literal: undefined,
      emoji: '👋',
      phonetic: 'huh-LOH-DOK-tuh',
      audioRef: null,
    },
    {
      id: 'been_having',
      target: "I've been having pain in my...",
      native: 'Sengiyaphethwa ngubuhlungu ku-...',
      literal: undefined,
      emoji: '🩺',
      phonetic: 'aiv-bin-HAV-ing-PAYN',
      audioRef: null,
    },
    {
      id: 'how_long',
      target: 'For about two weeks now',
      native: 'Sekuwiki ezimbili manje',
      literal: undefined,
      emoji: '⏳',
      phonetic: 'fuh-uh-BOWT-too-WEEKS',
      audioRef: null,
    },
    {
      id: 'taken',
      target: "I've taken paracetamol but it hasn't helped much",
      native: "Sengithathile i-paracetamol kodwa akusilanga kakhulu",
      literal: undefined,
      emoji: '💊',
      phonetic: 'aiv-TAY-kuhn-PAR-uh-SET-uh-mol',
      audioRef: null,
    },
    {
      id: 'thank_you',
      target: 'Thank you, Doctor. Have a good day',
      native: 'Ngiyabonga, Dokotela. Ube losuku oluhle',
      literal: undefined,
      emoji: '🙏',
      phonetic: 'thank-yu-DOK-tuh',
      audioRef: null,
    },
  ],

  pattern: {
    name: "'I've been + verb + ing' — isenzeko esiqalile, sisaqhubeka",
    explanation: "ESiNgisini sokwelapha, indlela emqoka yokuchaza isifo yi-'I've been ___-ing': 'I've been having headaches', 'I've been feeling tired', 'I've been coughing'. Lokhu kuchaza into eyaqala kuhle phambilini, isaqhubeka. Yifomula ngempela udokotela ayifunayo. Khumbula isigcawu: 'I've + been + verb-ing' — uthi 'I've been', hatshi 'I have been' uphelele (kunemibono yokuxoxa). Ungasebenzisi 'I had pain' (it sounds like it stopped) — sebenzisa 'I've been having pain' (kuyaqhubeka).",
    examples: [
      { target: "I've been having chest pain for three days.",        native: 'Sengiphethwa ngubuhlungu besifuba izinsuku ezintathu.' },
      { target: "I've been feeling really tired lately.",              native: 'Sengizizwa ngidiniwe kakhulu manje.' },
      { target: "I've been coughing for over a week.",                 native: 'Sengikhwehlela isonto langaphezulu.' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Hlanganisa amagama lencazelo zaso',
      pairs: [
        { left: "I've been having pain",   right: 'Sengiphethwa ngubuhlungu' },
        { left: 'For about two weeks',     right: 'Sekuwiki ezimbili' },
        { left: "It hasn't helped much",   right: 'Akusilanga kakhulu' },
        { left: 'Thank you, Doctor',       right: 'Ngiyabonga, Dokotela' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Bhala ngesiNgisi',
      prompt: 'Sengiphethwa ngubuhlungu besifuba izinsuku ezintathu.',
      correct: ["I've been having chest pain for three days.", "I've been having chest pain for three days", "I have been having chest pain for three days.", "i've been having chest pain for three days."],
    },
    {
      type: 'multiple_choice',
      instruction: 'Khetha okuqondileyo',
      question: "UDokotela ubuza 'How long has this been going on?' Yiphi engcono?",
      options: [
        { text: "For about two weeks now.", correct: true },
        { text: 'Long time.',                correct: false },
        { text: 'I forgot.',                  correct: false },
      ],
      explanation: "'For about two weeks' yifomula eqondileyo. UDokotela udinga isikhathi esicacileyo (ngezinsuku, amasonto, izinyanga). 'Long time' kakucacanga kakhulu — nikeza inanikazi.",
    },
    {
      type: 'fill_blank',
      instruction: 'Gcwalisa indawo engelalutho',
      sentence: "I've ____ having headaches for the past week.",
      options: ['been', 'be', 'being'],
      correct: 'been',
      context: "'I've been + verb-ing' yifomula ye-present perfect continuous. 'I've + been + having' yiyo eyiphelele. 'Be' lo 'being' akusebenzi lapha.",
    },
    {
      type: 'build_sentence',
      instruction: 'Hlela amagama — uhlangana lo-doctor',
      words: ['Doctor', "Hello", 'me', ',', 'thank', 'seeing', 'for', 'you'],
      correct: ["Hello", ',', 'Doctor', '—', 'thank', 'you', 'for', 'seeing', 'me'],
      translation: 'Salibonani, Dokotela — ngiyabonga ngokungibona',
    },
    {
      type: 'translate',
      instruction: 'Bhala ngesiNgisi',
      prompt: 'Sengithathile i-paracetamol kodwa akusilanga.',
      correct: ["I've taken paracetamol but it hasn't helped", "I have taken paracetamol but it hasn't helped", "I've taken paracetamol but it hasn't helped.", "i've taken paracetamol but it hasn't helped"],
    },
  ],

  rwenDialogue: {
    intro: "Lapha use kwa-NHS GP eUK. Uphethwe likhanda kwasonto. UDokotela Adams uyakubingelela.",
    lines: [
      { speaker: 'npc', target: "Hello, come in. Take a seat. So, what brings you in today?", native: 'Salibonani, ngenani. Hlalani phansi. Yini ekuletheyo lamuhla?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Hello, Doctor. Thank you for seeing me. I've been having bad headaches for about two weeks now.", native: 'Salibonani, Dokotela. Ngiyabonga ngokungibona. Sengiphethwa likhanda kakubi cishe amaviki amabili manje.', correct: true, feedback: "Kuhle kakhulu! Wavula ngokuhloniphekayo, washo isimo, washo isikhathi. UDokotela uzaba lonke ulwazi alidingayo." },
          { target: 'My head is dying.', native: 'Ikhanda lami liyafa.', correct: false, feedback: "Akusebenzi esiNgisini. Sebenzisa 'I've been having bad headaches'." },
          { target: 'Hello.', native: 'Salibonani.', correct: false, feedback: "Useqala kahle, kodwa kufanele uchaze isifo. Tshono i-symptom yakho ngokushesha." },
        ],
      },
      { speaker: 'npc', target: "I'm sorry to hear that. Can you describe the pain?", native: 'Lusizi ukukuzwa. Ungachaza ubuhlungu?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "It's a dull, throbbing pain — usually on one side. It comes and goes, worse in the afternoon.", native: 'Yibuhlungu obuhlala-hlala obutshayayo — kakhulu ohlangothini olulodwa. Buyeza, buyahamba, kakhulu emini.', correct: true, feedback: "Hayi! Wasebenzisa 'dull', 'throbbing', 'comes and goes' — yifomula yodokotela. UDokotela kawazi ukuthi yi-migraine kumbe i-tension headache." },
          { target: 'Painful.', native: 'Kubuhlungu.', correct: false, feedback: "Kuyancinyela. UDokotela ufuna izinhlobo zobuhlungu — dull / sharp / throbbing." },
        ],
      },
      { speaker: 'npc', target: "Have you taken anything for it?", native: 'Sewathathile noma yini ngakho?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "I've taken paracetamol but it hasn't helped much.", native: 'Sengithathile i-paracetamol kodwa akusilanga kakhulu.', correct: true, feedback: "Kuhle — wachaza ukuthi okhethileyo akukusizanga. Lokhu kuyamtshela udokotela ukuthi kufanele aphakamise into ehlukile." },
        ],
      },
      { speaker: 'npc', target: "Okay. I'd like to check your blood pressure and ask a few more questions. It might be migraine — we'll see. I'll prescribe something stronger if needed.", native: 'Kulungile. Ngingathanda ukuhlola umfutho wegazi lakho lokubuza eminye imibuzo. Kungenzeka kuyi-migraine — sizabona. Ngizabhala into eqine kakhulu uma kudingakala.' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Thank you, Doctor.", native: 'Ngiyabonga, Dokotela.', correct: true, feedback: "Kuhle — phenduliseni ngokuhloniphekileyo." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Wenze ngempumelelo ngempela! Wavula ngenhle, wachaza isifo ngokucacileyo, wasebenzisa amagama ami onke akule-Module 6. Sewulungele ukuhamba kudokotela ngokwakho.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Bhala ngenhliziyo, ungabuyeli phezulu.',
    prompts: [
      { prompt: 'Bhala ngesiNgisi: Sengiphethwa likhanda amaviki amabili.', correct: ["I've been having headaches for two weeks", "I've been having headaches for two weeks.", "I have been having headaches for two weeks", "i've been having headaches for two weeks"] },
      { prompt: 'Bhala ngesiNgisi: Sengithathile i-paracetamol.', correct: ["I've taken paracetamol", "I've taken paracetamol.", 'I have taken paracetamol', "i've taken paracetamol"] },
      { prompt: 'Bhala ngesiNgisi: Ngiyabonga, Dokotela.', correct: ['Thank you, Doctor', 'Thank you Doctor', 'Thank you, Doctor.', 'thank you, doctor'] },
    ],
  },

  mission: {
    title: 'Umsebenzi wokugcina kwa-Module 6',
    task: "Cabanga isifo ozaba laso usuku oluthile (cha — owedlulileyo). Bhala umtimba pheleleyo we-doctor's visit ngesiNgisi: (1) ukubingelela kwakho, (2) 'I've been having ___ for ___', (3) ukuchaza ubuhlungu (dull / sharp / throbbing), (4) okusewuthathile, (5) ukubonga. Phinda ngomlomo kabili. Wamukela isiyalelo se-Module 6.",
    rwenSignoff: 'Hayi yebo! Sewufundile lonke i-Module 6. Sewungaya kudokotela uzimele eUK kumbe eUS. Phila kahle, ngizakubona ku-Module 7.',
  },

  phase8: {
    scenario: "You're at a UK NHS GP appointment. You've had ongoing back pain for a month — it started after lifting boxes at work. Walk through the full consultation: greet, describe, answer questions about pain (type, location, scale), say what you've tried, accept the doctor's plan.",
    rwenRole: "Dr Ahmed, 50, an experienced and kind UK GP. He'll ask the standard sequence: 'what brings you in?', 'how long?', 'describe the pain', 'on a scale of 1-10?', 'have you taken anything?', 'does anything make it worse?' Ends with a plan (physio, painkillers, follow-up).",
    successCriteria: "User opens with 'Hello, Doctor — thank you for seeing me' or similar. Uses 'I've been having ___ for ___'. Describes pain with at least one of dull/sharp/throbbing. Gives a 1-10 rating. Mentions what they've tried. Closes with 'Thank you, Doctor.' Stays in English throughout.",
    estimatedMinutes: 4,
    bonusXp: 5,
  },
};

export default lesson;

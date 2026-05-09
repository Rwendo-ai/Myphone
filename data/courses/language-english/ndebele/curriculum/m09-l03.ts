import type { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm09-l03',
  module: 9,
  lesson: 3,
  title: 'Job interview — strengths & weaknesses',
  estimatedMinutes: 7,
  xpReward: 35,

  hook: {
    rwenLine: "I-question yenkulu emhlanganweni we-job interview e-UK kumbe e-US: 'What are your strengths? What are your weaknesses?' Eyokuqala lula — uzichaza. Eyesibili lwehlukile — bafuna ukuthi uzicacise IPHUTHA lakho. Ungathi 'Akula buthakathaka' — bafanazwa ngokuthi awungenisi ngokuthembekileyo. Bafuna isiqiniso esincane esisetshenzelweyo.",
    culturalNote: "Esikhiweni sesiNdebele lesase-Africa kakhulu, ukuzichaza ngokulungile kungenziwe njengokuziqhenya (boasting). Lapha — ku-UK le-US — yiyo into elindelweyo. Akusisi-shintsho luwena, kuyi-genre. Sebenzisa amavi athi 'I'm good at...', 'One of my strengths is...', 'A weakness I'm working on is...'. Indlela yokuvuma iphutha kungenzi udobheke — kunyebenzi ngempela: 'I sometimes take on too much, but I've started using a to-do list.' Lokho yikho i-UK/US managers abakuthandayo: ukuzazi + ukuzilungisa.",
  },

  chunks: [
    {
      id: 'strengths',
      target: 'Strengths',
      native: 'Amandla / izinto ozenza kahle',
      literal: 'strengths',
      emoji: '💪',
      phonetic: 'STRENGTHS',
      audioRef: null,
    },
    {
      id: 'weaknesses',
      target: 'Weaknesses',
      native: 'Ubuthakathaka / izinto onganele kuzo',
      literal: 'weaknesses',
      emoji: '🎯',
      phonetic: 'WEEK-nis-iz',
      audioRef: null,
    },
    {
      id: 'im_good_at',
      target: "I'm good at",
      native: 'Ngingcono ku- / Ngiyenelisa ku-',
      literal: "I'm good at",
      emoji: '✅',
      phonetic: 'aym-GUUD-at',
      audioRef: null,
    },
    {
      id: 'working_on',
      target: "I'm working on",
      native: 'Ngiyazama ukuncipisa / ukulungisa',
      literal: "I'm working on",
      emoji: '🔧',
      phonetic: 'aym-WURK-ing-on',
      audioRef: null,
    },
    {
      id: 'reliable',
      target: 'Reliable',
      native: 'Othembekile (othembelwa)',
      literal: 'reliable',
      emoji: '🤝',
      phonetic: 'rih-LY-uh-bul',
      audioRef: null,
    },
  ],

  pattern: {
    name: "The strength/weakness sandwich",
    explanation: "Indlela yokuphendula amaqondo amabili. KU-STRENGTH: 'I'm good at [skill]. For example, [umzekelo omfutshane].' KU-WEAKNESS: 'One thing I'm working on is [iphutha eliqondileyo, hatshi elikhulu kakhulu]. I've started [okuthile ozakwenza ukulungisa].' Ungazikhetheli iphutha elilubonisa engasebenzi (njengokuthi 'angiyezwa abantu') kumbe iphutha elilingakhululeki ('I'm a perfectionist' — kalisetshenzeli, sekuyatshiyazwa). Kheta ubuthakathaka beqiniso obuncane, bese ubonisa ukuthi ubulungisa.",
    examples: [
      { target: "I'm good at communication. I work well with patients.",         native: 'Ngingcono ekukhulumiseni. Ngisebenza kahle lezigulane.' },
      { target: "One weakness — I sometimes take on too much. I'm using a to-do list now.", native: 'Iphutha elilodwa — ngezinye izikhathi ngithatha imisebenzi eminengi kakhulu. Sengisebenzisa uhlu lwemisebenzi manje.' },
      { target: "I'm reliable — I always come on time.",                          native: 'Ngiyathembeka — ngifika ngesikhathi nje.' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Hlanganisa amagama',
      pairs: [
        { left: 'Strengths',         right: 'amandla / izinto ozenza kahle' },
        { left: 'Weaknesses',        right: 'ubuthakathaka' },
        { left: "I'm good at",       right: 'ngiyenelisa ku-' },
        { left: 'Reliable',          right: 'othembekile' },
      ],
    },
    {
      type: 'multiple_choice',
      instruction: 'Khetha impendulo evumelekileyo',
      question: "I-interviewer iyabuza: 'What is your weakness?' Yiyo iphi impendulo elungileyo?",
      options: [
        { text: "I sometimes take on too much, but I've started using a to-do list.", correct: true },
        { text: "I have no weaknesses.",                                              correct: false },
        { text: "I'm a perfectionist — that's my only weakness.",                     correct: false },
      ],
      explanation: "'I have no weaknesses' kuvelelwa njengokungathembekisi. 'I'm a perfectionist' iyiphendulo evamile (cliché) — abaphathi sebeyibonile, abasayithandi. Indlela ekahle: phutha elincane lokwemphela + okuthile okusenzayo ukulungisa.",
    },
    {
      type: 'translate',
      instruction: 'Bhala ngesiNgisi (impendulo ye-interview)',
      prompt: 'Ngingcono ekusebenziseni labanye abantu.',
      correct: ["I'm good at working with people.", "I'm good at working with other people.", "I am good at working with people.", "I'm good at teamwork."],
    },
    {
      type: 'build_sentence',
      instruction: 'Hlela amagama — phakamisa iphutha lakho',
      words: ['working', 'on', 'I\'m', 'time', 'management'],
      correct: ["I'm", 'working', 'on', 'time', 'management'],
      translation: 'Ngiyazama ukulungisa ukubhekisisa isikhathi.',
    },
  ],

  rwenDialogue: {
    intro: "Usemhlanganweni we-job interview ye-care home eManchester. I-manager — uSarah — uphakathi kwemibuzo emikhulu.",
    lines: [
      { speaker: 'npc', target: "Tell me — what would you say is your biggest strength?", native: 'Ngitshele — ngothi yibuphi ubukhulu obuncono bakho?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "I'm good at communication. I work well with elderly patients — I listen first.",  native: 'Ngingcono ekukhulumeni. Ngisebenza kahle lezigulane ezindala — ngiyalalela kuqala.', correct: true,  feedback: 'Kuhle — uphendule ngegama elifanele (good at + skill), wakhomba umzekelo. Lokho yikho abakufunayo.' },
          { target: 'I am very strong.',                                                                native: 'Nginamandla kakhulu.',                                                                  correct: false, feedback: "'Strong' kuyi-physical strength. Lapha kufanele 'I'm good at [skill]'." },
          { target: 'I have no weakness.',                                                              native: 'Akula buthakathaka.',                                                                    correct: false, feedback: 'Kalibuzanga umbuzo lowo — kalibuze ubukhulu (strength), hatshi ubuthakathaka. Phinda phendula umbuzo abuze wona.' },
        ],
      },
      { speaker: 'npc', target: "Good. And what about a weakness — something you're working on?", native: 'Kuhle. Manje wena ubuthakathaka — into oyilungisayo?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "I sometimes try to do too much myself. I'm learning to ask for help.", native: 'Ngezinye izikhathi ngiyazama ukwenza okunengi mina ngedwa. Sengifunda ukucela usizo.', correct: true, feedback: 'Bukhulu — uphendule ngokwethembekileyo, wabonisa ukuthi uyazilungisa. Lokhu yikho ku-UK abakuthandayo.' },
          { target: "I have no weaknesses.",                                                  native: 'Akula buthakathaka.',                                                                  correct: false, feedback: 'I-Sarah uzakwesaba khona kanye — ungumuntu ongazinkulumi yini? Zimisele isiqiniso esincane.' },
        ],
      },
      { speaker: 'rwen', rwenLine: "Wabona indlela yokuphendula? Ungazinkanyezi kakhulu, kodwa ungazicacisi futhi. Phakathi kwakho.", rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: 'Ungabuyeli emuva.',
    prompts: [
      { prompt: "Bhala 'amandla / izinto ozenza kahle' ngesiNgisi", correct: ['Strengths', 'strengths', 'strength'] },
      { prompt: "Bhala 'ubuthakathaka' ngesiNgisi",                  correct: ['Weaknesses', 'weaknesses', 'weakness'] },
      { prompt: "Bhala 'Ngingcono ekukhulumeni' ngesiNgisi",         correct: ["I'm good at communication.", "I am good at communication.", "I'm good at communication"] },
    ],
  },

  mission: {
    title: 'Bhala impendulo zakho',
    task: "Lamuhla, bhala phansi: (1) izimo ezimbili ozenza kahle, (2) iphutha elilodwa elingaphandle, (3) okuthile osukuqalile ukulungisa lelo phutha. Bhala ngesiNgisi. Funda ngomhlola ngokuvuza phambili kwesibuko — phinda kasibili. Lokhu kuyakwakha ungalindeli i-interview ukuze uqale.",
    rwenSignoff: 'I-interview ihambisa ngomzwa, kodwa nawu — usungilungile.',
  },

  phase8: {
    scenario: "Usemhlanganweni we-mock job interview ku-care assistant role e-UK. I-interviewer izabuza imibuzo emithathu — strengths, weaknesses, le-'why this job?'. Phendula njengakwiqiniso le-interview, ngokwesiNgisi sokusebenzeleyo.",
    rwenRole: "Linda — uphathi we-care home, useminyakeni engama-50, uyahlelekile (no-nonsense) kodwa olomusa. Uzakubuza imibuzo emithathu, abuze imibuzo elandelayo nxa kufanele.",
    successCriteria: "Umfundi achaze ubukhulu nje obu-1 ngomzekelo. Aphendule ubuthakathaka ngephutha eliqondile + okuthile akwenzayo ukulungisa. Akhulume ngolwazi olunye ngomsebenzi (i-care work). Asebenzise igama-vocab le-strengths/weaknesses ngendlela elungelayo.",
    estimatedMinutes: 4,
    bonusXp: 5,
  },
};

export default lesson;

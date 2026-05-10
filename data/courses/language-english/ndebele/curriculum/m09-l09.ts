import type { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm09-l09-asking-help',
  module: 9,
  lesson: 9,
  title: 'Work-life balance',
  estimatedMinutes: 6,
  xpReward: 30,

  hook: {
    rwenLine: "I-'work-life balance' — igama elilodwa elingathunjelwa ngolula ngesiNdebele. Liyichaza umqondo: ukuthi umsebenzi awusayisahlangabezeli zonke izinsuku, kalifuni ukuthi ukubabayele iimpilo yakho. Ku-UK le-US, abasebenzi bayalibhala leli gama emhlanganweni — i-managers ezinkulu zibuyise lokho.",
    culturalNote: "Esikhiweni sesiNdebele se-Zimbabwe, umsebenzi mvamisa awulalele isikhathi — uma uphosa imali yokufundisa abantwana, kuyahamba. Lapha emhlabeni weUK / US, kuyaphezulu kakhulu ku-mental health, ku-burnout (ukuncipha kwamandla), ku-time-off. Ungasebenzi insuku zonke ngaphandle kokuphumula — i-manager wakho uzakhathazeka. Sebenzisa amagama: 'I'm taking some leave' (ngithatha ikhefu), 'I need to switch off' (ngifuna ukucima), 'I'm feeling burnt out' (ngiyancipha amandla). Lawomagama avumelekile — esibili sokuwasebenzisa kuyikuvula i-conversation. Ungesabi ukuthi i-manager izokuphethezela.",
  },

  chunks: [
    {
      id: 'work_life_balance',
      target: 'Work-life balance',
      native: 'Ukulingana phakathi komsebenzi lemphilo',
      literal: 'work / life / balance',
      emoji: '⚖️',
      phonetic: 'WURK-LYF-BAL-uns',
      audioRef: null,
    },
    {
      id: 'take_leave',
      target: 'Take leave / time off',
      native: 'Thatha ikhefu / isikhathi sokuphumula',
      literal: 'take / leave',
      emoji: '🏖️',
      phonetic: 'TAYK-LEEV',
      audioRef: null,
    },
    {
      id: 'burnt_out',
      target: 'Burnt out',
      native: 'Olucinywe (ngamandla, uncipha)',
      literal: 'burnt / out',
      emoji: '😴',
      phonetic: 'BURNT-OWT',
      audioRef: null,
    },
    {
      id: 'switch_off',
      target: 'Switch off',
      native: 'Cima (ungacabangi ngomsebenzi)',
      literal: 'switch / off',
      emoji: '🔌',
      phonetic: 'SWICH-OF',
      audioRef: null,
    },
    {
      id: 'overtime',
      target: 'Overtime',
      native: 'Isikhathi esidluleyo (umsebenzi ongaphezulu)',
      literal: 'over / time',
      emoji: '⏰',
      phonetic: 'OH-vur-TYM',
      audioRef: null,
    },
  ],

  pattern: {
    name: "Ukukhuluma ngesidingo sokuphumula",
    explanation: "Akusi-shintsho lwesakhiwo, kuyi-shintsho lwendlela. Indlela ekahle: 'I'm starting to feel burnt out — I think I need to take some leave.' (Ngiqala ukuncipha amandla — ngicabanga ukuthi ngifanele ngithathe ikhefu.) Ungazibhali izinto zikhulu — i-manager ifuna ukuzwa lo-signal. I-formula: (1) chaza umzwa wakho ngesivamile ('I'm feeling...'), (2) cebise isenzo esivumelekileyo ('I think I need to take some leave / cut back on overtime'). Lokhu kuyikutshintshana — kalisi-fight, kuyi-conversation.",
    examples: [
      { target: "I'm feeling a bit burnt out — could I take next Friday off?",       native: 'Ngizizwa nginciphile amandla — ngingenelisa ukuthatha uLwesihlanu olandelayo?' },
      { target: "I find it hard to switch off in the evenings.",                       native: 'Kunzima kimi ukucima ebusuku.' },
      { target: "I'm going to do less overtime this month — for my work-life balance.", native: 'Ngizakwenza i-overtime encane kulinyanga — ngenxa yokulingana komsebenzi lemphilo.' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Hlanganisa amagama',
      pairs: [
        { left: 'Work-life balance', right: 'ukulingana phakathi komsebenzi lemphilo' },
        { left: 'Burnt out',         right: 'oncipha amandla' },
        { left: 'Switch off',        right: 'cima (ungacabangi ngomsebenzi)' },
        { left: 'Overtime',          right: 'isikhathi esidluleyo' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Bhala ngesiNgisi',
      prompt: 'Ngifuna ukuthatha ikhefu kuviki ezayo.',
      correct: ['I want to take leave next week.', 'I want to take time off next week.', "I'd like to take leave next week.", "I'd like to take time off next week."],
    },
    {
      type: 'multiple_choice',
      instruction: 'Khetha okufanele',
      question: "Usebenzile insuku 6 kuviki kunyanga ezimbalwa. Uzizwa unciphile amandla. Ungatshelani umphathi?",
      options: [
        { text: "I'm feeling a bit burnt out — could we talk about my workload?", correct: true },
        { text: "I am tired of this job. I quit.",                                 correct: false },
        { text: "I am fine. No problem.",                                          correct: false },
      ],
      explanation: "Indlela yokuqala — uvumayo ukuthi unciphile amandla, ucela isikhathi sokuxoxa. I-managers e-UK / NHS bayohlonipha lokhu. Ukungavezi okutholayo (kungekho problem) kungaholela ekuncipheni okukhulu. Ukuyeka kuyibhubhisi.",
    },
    {
      type: 'fill_blank',
      instruction: 'Gcwalisa isikhala',
      sentence: "I find it hard to ______ in the evenings — I keep checking work emails.",
      options: ['switch off', 'sign in', 'log on'],
      correct: 'switch off',
      context: "'Switch off' = ukucima (ukungasebenzi ngomqondo). 'Sign in' / 'log on' = ukungena.",
    },
  ],

  rwenDialogue: {
    intro: "Sekuyiziyiviki ezimbili usebenza i-overtime ngosuku ngalunye. Uzizwa unciphile amandla. Umphathi wakho uMargaret uyakubuyela.",
    lines: [
      { speaker: 'npc', target: "Hi — I noticed you've been doing a lot of late shifts. How are you holding up?", native: 'Salibonani — ngibonile ukuthi usebenza i-shifts ezikhulu kakhulu. Uphila njani?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Honestly, I'm feeling a bit burnt out. Could I cut back on overtime next week?", native: 'Ngiqambela isiqiniso, ngizizwa nginciphile amandla. Ngingenelisa ukuncipha i-overtime kuviki ezayo?', correct: true,  feedback: "Kuhle — uvulelene ngokwethembekileyo. UMargaret kalindi enye into. Khathesi uzakulungiselela." },
          { target: "I'm fine. No problem.",                                                            native: 'Ngiyaphila. Akula problem.',                                                                          correct: false, feedback: 'Lokhu yikho i-managers abakuthandi — ukufihla ukuncipha amandla. Kuhola ekoneni okwedlulayo. Khuluma iqiniso.' },
          { target: "I am tired. I want to leave this job.",                                            native: 'Ngiyadinwa. Ngifuna ukuyeka umsebenzi.',                                                              correct: false, feedback: 'Ungayikhuli kakhulu — qala ngokucela ikhefu kumbe ukuncipha i-overtime. Ukuyeka yi-step yokugcina, hatshi yokuqala.' },
        ],
      },
      { speaker: 'npc', target: "Of course — that's important. Let's reduce your hours starting next week. Take care of yourself first.", native: 'Yiqondiso — kubalulekile lokho. Kasiwincipise i-hours zakho kusukela kuviki ezayo. Zinakekele kuqala.' },
      { speaker: 'rwen', rwenLine: "Wabona indlela: ukungafihli umzwa wakho yikho okwenza i-managers be-UK bahloniphe abasebenzi babo. Ukungavumi ukuncipha kuyibanga okukhulu lapha.", rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: 'Ungabuyeli emuva.',
    prompts: [
      { prompt: "Bhala 'ukulingana phakathi komsebenzi lemphilo' ngesiNgisi", correct: ['Work-life balance', 'work-life balance', 'Work life balance'] },
      { prompt: "Bhala 'oncipha amandla' ngesiNgisi",                          correct: ['Burnt out', 'burnt out', 'burned out'] },
      { prompt: "Bhala 'thatha ikhefu' ngesiNgisi",                            correct: ['Take leave', 'take leave', 'Take time off', 'take time off'] },
    ],
  },

  mission: {
    title: 'Bukela impilo yakho',
    task: "Lamuhla, qhamuka kunye lemibuzo emithathu: (1) Ngiyalisebenzela kanjani ikhefu? (2) Yiziphi izinsuku ezimbili ngeviki engidinga ukucima i-emails ngazo? (3) Yini engifuna ukuyenza ngalo nyanga ngenxa yempilo yami (hatshi yomsebenzi)? Bhala impendulo ngesiNgisi: 'I want to switch off on weekends.' / 'I'm taking leave in March.'",
    rwenSignoff: 'Impilo yakho yibhuluku elilodwa. Yenza ihlonipheke ekugcineni komsebenzi.',
  },

  phase8: {
    scenario: "Usengxoxweni nomngane wakho ku-WhatsApp. Uyakubuza ukuthi uphila kanjani emsebenzini wakho omtsha. Mtshele iqiniso — usebenze izinsuku ezinengi, uzizwa unciphile amandla, ufuna ukuthatha ikhefu. Sebenzisa igama-vocab le-work-life balance.",
    rwenRole: "Buhle — umngane wakho omdala, ohlala eUK kuminyaka 5, oyazi i-system. Uzakubuza ngokucabangela, akubuyisele ngezeluleko.",
    successCriteria: "Umfundi achaze umzwa wakhe ngokwethembekileyo. Asebenzise okungenani amathathu kwala mabhubhu: 'work-life balance', 'burnt out', 'switch off', 'take leave', 'overtime'. Acelise iseluleko kumngane.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;

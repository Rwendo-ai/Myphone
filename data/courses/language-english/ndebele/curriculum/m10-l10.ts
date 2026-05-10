import type { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm10-l10-your-story',
  module: 10,
  lesson: 10,
  title: 'Real conversation — Mastery capstone',
  estimatedMinutes: 8,
  xpReward: 75,

  hook: {
    rwenLine: "Lokhu yikho — i-graduation. Module 10 igqibile, lapha kakhulu, indlela yonke. ESiNdebele uya esikhungweni se-mastery: ukukhuluma njengomuntu wesi-Ngisi senjwayelo, ukuhlonipha imibono, ukucabangisisa, ukuhleka, ukuxhumana ngokuyiqiniso. Akudingi ukuba 'perfect'. Idingeka ukuba uxhumane.",
    culturalNote: "EZimbabwe siyaqhamuka, sigxile, sihlonipha. Esikhungweni sesiNgisi — eUK, eUS, eAU, kunoma ngabe yikuphi — uveza lokho esiNdebeleni: ubuntu, indawo yokuxoxa, ulwazi lokulalela. Ngokuphelileyo, ulwimi olungafundisiwe luyalulwiwa kuze kucasule — ukuyamukela ku-job interview, ku-WhatsApp lomngane, ku-meeting, kumphathi welo-call centre, kumdokotela owenza ukukubuza. Lokhu kungumkhumbi wakho. Ungeke uphelele — kodwa uyazi kakhulu kunalokho oyazi izolo. EZimbabwe baphi inkulu kakhulu — abantu ababhalile esikhungweni sesi-Ngisi futhi babuyile, abantu abakhuluma izinkulumo zombili ngamandla, abantu abafundisa amalanga aselungile. Lawe usungomunye wabo. Yamukele i-mastery.",
  },

  chunks: [
    {
      id: 'opener',
      target: "Hi! Thanks for meeting with me today.",
      native: 'Salibonani! Ngiyabonga ngokuhlangana lami lamuhla.',
      literal: 'Polite opener',
      emoji: '👋',
      phonetic: 'HAY-thanks-fur-MEE-ting-with-mee-tuh-DAY',
      audioRef: null,
    },
    {
      id: 'opinion',
      target: "In my view, although the project is challenging, I believe we can do it.",
      native: 'Ngokumbono wami, lanxa umsebenzi unzima, ngiyakholwa ukuthi singawenza.',
      literal: 'Opinion + contrast + belief (mastery sentence)',
      emoji: '💭',
      phonetic: 'in-may-VYU...',
      audioRef: null,
    },
    {
      id: 'disagree',
      target: "I see your point, but I'm not sure I agree — actually, I think we should wait.",
      native: 'Ngiyabona umqondo wakho, kodwa angiqondi kahle ukuthi ngiyavuma — ngeqiniso, ngicabanga kufanele silinde.',
      literal: 'Polite disagreement (full pattern)',
      emoji: '⚖️',
      phonetic: 'ay-SEE-yur-POYNT-but...',
      audioRef: null,
    },
    {
      id: 'idiom_close',
      target: "Honestly, this conversation has been a piece of cake. Let's touch base next week.",
      native: 'Ngeqiniso, le ngxoxo ibe lula kakhulu. Asihlangane ngeviki elizayo.',
      literal: 'Two idioms + close (UK + US blend)',
      emoji: '🎯',
      phonetic: 'ON-est-lee...',
      audioRef: null,
    },
    {
      id: 'graduation_close',
      target: "Whenever you need help, just call. I'll be there.",
      native: 'Noma ngabe nini udinga usizo, ngitshele. Ngizoba khona.',
      literal: 'Conditional + commitment (warm close)',
      emoji: '🤝',
      phonetic: 'wen-EV-uh-yu-NEED-help...',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Mastery — everything together',
    explanation: "I-mastery conversation iqukatha: (1) i-greeting eyifaneleyo (lesson 1), (2) imibuzo etshikamezayo ('What do you think?'), (3) imibono ('In my view, I believe'), (4) i-contrast ('although, however'), (5) i-conditionals ('if, unless, whenever'), (6) ukuphikisana ngenhlonipho ('I'm not sure I agree'), (7) ama-idioms (UK + US), (8) ama-phrasal verbs ('look up, put off'), (9) ukufunda ikamelo (lapho ulalele). Akusiyo iyiyodwa engumsebenzi — kuwo wonke umsebenzi onamandla.",
    examples: [
      { target: "What do you think? In my view, although it's tough, I believe we'll succeed.", native: 'Ucabangani? Ngokumbono wami, lanxa kunzima, ngiyakholwa ukuthi sizophumelela.' },
      { target: "I see your point, but I'm not sure I agree — let's touch base tomorrow.",      native: "Ngiyabona umqondo wakho, kodwa angiqondi kahle ukuthi ngiyavuma — asihlangane kusasa." },
      { target: "If you need help, whenever — just call. It's a piece of cake to set up.",       native: 'Uba udinga usizo, noma ngabe nini — ngitshele. Mlula kakhulu ukukulungisa.' },
    ],
  },

  exercises: [
    {
      type: 'fill_blank',
      instruction: 'Capstone — gcwalisa i-mastery sentence',
      sentence: "_____ my view, _____ the work is hard, I _____ we can finish on time.",
      options: ['In / although / believe', 'On / however / think', 'For / despite / believe'],
      correct: 'In / although / believe',
      context: "I-mastery: 'In my view' (formal opinion) + 'although' (concedes the difficulty) + 'I believe' (strongest commitment). Lokhu kuphethele konke imodule.",
    },
    {
      type: 'translate',
      instruction: 'Bhala ngesiNgisi (capstone)',
      prompt: 'Ngiyabona umqondo wakho, kodwa angiqondi kahle ukuthi ngiyavuma. Asihlangane ngeviki elizayo.',
      correct: [
        "I see your point, but I'm not sure I agree. Let's touch base next week.",
        "I see your point, but I'm not sure I agree. Let us touch base next week.",
      ],
    },
    {
      type: 'build_sentence',
      instruction: "Hlela i-mastery sentence: 'Whenever you need help, just call me'",
      words: ['call', 'me.', 'help,', 'just', 'need', 'you', 'Whenever'],
      correct: ['Whenever', 'you', 'need', 'help,', 'just', 'call', 'me.'],
      translation: 'Noma ngabe nini udinga usizo, ngitshele',
    },
    {
      type: 'multiple_choice',
      instruction: 'Capstone — khetha umphendulo we-mastery',
      question: "Umphathi waseLondon ubuza: 'What's your take on the new project?' Yiphi impendulo eveza i-mastery (i-opinion + i-contrast + i-idiom)?",
      options: [
        { text: "In my view, although it's challenging, I believe we can do it. Let's touch base next week to plan.", correct: true },
        { text: "Yes good. Project nice. OK.",                                                                                                          correct: false },
        { text: "Nginombono. Umsebenzi muhle. Asihlangane.",                                                                                            correct: false },
      ],
      explanation: "Eyokuqala iqukatha okuningi: (1) 'In my view' (lesson 4 — formal opinion), (2) 'although' (lesson 1 — contrast), (3) 'I believe' (lesson 4 — strong opinion), (4) 'touch base' (lesson 7 — US idiom). Yi-mastery enye ngomzwana. Eyesibili kuyaqondene; eyesithathu yangesiNdebele.",
    },
  ],

  rwenDialogue: {
    intro: 'Capstone — i-conversation eyiqiniso. Usemhlanganweni womsebenzi e-Manchester. Umphathi wakho, uSarah, uxoxa lawe ngomsebenzi onzima. Phakathi nengxoxo, kuzakuba lokuhlonipha, ukuphikisana, ukuhleka, ukuxoxa imicabango. Veza yonke i-mastery yakho.',
    lines: [
      {
        speaker: 'npc',
        target: "Right — thanks for coming in. So, what do you think of the new project? I want your honest view.",
        native: "Kuhle — ngiyabonga ngokuza. Pho, ucabangani ngomsebenzi omutsha? Ngifuna umbono wakho oqotho.",
      },
      {
        speaker: 'user',
        userChoices: [
          {
            target: "Thanks, Sarah. In my view, although the timeline is tight, I believe we can deliver — if the team is on the same page. However, I'm a bit worried about the budget.",
            native: 'Ngiyabonga, Sarah. Ngokumbono wami, lanxa isikhathi siyincane, ngiyakholwa ukuthi singasinikeza — uba i-team ivumelene. Kodwa-ke, ngikhathazeke kancane nge-budget.',
            correct: true,
            feedback: "Yiyo i-mastery! 'In my view' + 'although' + 'I believe' + 'if' + 'on the same page' (US idiom) + 'However' — yonke iModule 10 emizweni emibili. Lokhu yikho ekuxoxweni esikhungweni sesi-Ngisi.",
          },
          {
            target: "Project is hard. Money problem. We try.",
            native: 'Umsebenzi unzima. Inkinga yemali. Sizama.',
            correct: false,
            feedback: "Iqondene kakhulu — kufana lokuthi awunamicabango. Sebenzisa 'I think' kanye nje, faka i-reason: 'I think the project is challenging, but I believe we can do it.'",
          },
          {
            target: "Yes whatever you say boss.",
            native: 'Yebo nokungabe yini othi nguwe mphathi.',
            correct: false,
            feedback: "Awukhuluma uku-honest. USarah ufuna umbono wakho ngempela. Sebenzisa 'In my view...' bese uxoxa ngokuyiqiniso.",
          },
        ],
      },
      {
        speaker: 'npc',
        target: "Hm. Tom thinks the budget is fine — he says we just need to push harder. What's your reaction to that?",
        native: 'Hawu. UTom ucabanga ukuthi i-budget ilungile — uthi sidinga kuphela ukuphusha kakhulu. Yini umphendulo wakho ngalokho?',
      },
      {
        speaker: 'user',
        userChoices: [
          {
            target: "I see Tom's point, but I'm not sure I agree. In my view, pushing harder might burn the team out. Maybe, but only if we look at the numbers carefully — could we get a ballpark on overtime costs first?",
            native: "Ngiyabona umqondo kaTom, kodwa angiqondi kahle ukuthi ngiyavuma. Ngokumbono wami, ukuphusha kakhulu kungachelisa i-team. Mhlawumbe, kuphela uba sikhangela amanani ngokucabangisisa — singathola inombolo elinganisayo ye-overtime kuqala?",
            correct: true,
            feedback: "Yiwo umdlalo ophezulu — uphikise ngenhlonipho ('I see Tom's point, but'), wabeka i-pivot ('In my view'), wakhuluma i-conditional ('only if'), futhi wafaka i-US idiom ('ballpark'). I-mastery yengxoxo enzima.",
          },
          {
            target: "Tom is wrong. He doesn't understand.",
            native: 'UTom akalungile. Akaqondi.',
            correct: false,
            feedback: "Iqondene kakhulu — i-British workplace ifuna i-soft frame: 'I see Tom's point, but I'm not sure I agree.' Lokhu kuyiyo.",
          },
          {
            target: "OK whatever Tom says.",
            native: 'Kulungile noma ngabe yini eshiwo nguTom.',
            correct: false,
            feedback: 'Awukhulumi i-honest opinion yakho. USarah ufuna ucabangiselo lwakho. Phikisana ngenhlonipho.',
          },
        ],
      },
      {
        speaker: 'npc',
        target: "That's a fair point — I hadn't thought of overtime. Let me look into it. Anything else worrying you?",
        native: 'Lokhu yi-point efaneleyo — bengingacabanganga nge-overtime. Mangiyicinge. Kukhona okunye okukukhathazayo yini?',
      },
      {
        speaker: 'user',
        userChoices: [
          {
            target: "Honestly, the deadlines worry me. If we put off the testing phase, the launch will suffer. Whenever you have time, can we touch base on a backup plan? I'll just listen for now if Tom wants to add anything.",
            native: "Ngeqiniso, izikhathi zokugcina ziyangikhathaza. Uba silibazisa isigaba se-testing, ukukhululwa kuzolimaza. Noma ngabe nini ulesikhathi, singahlangana nge-backup plan? Ngizolalela kuphela okwamanje uba uTom efuna ukufaka okuthile.",
            correct: true,
            feedback: 'Yi-graduation-level conversation. Usebenzise ama-phrasal verbs ("put off"), i-conditional ("If"), "whenever", "touch base" (US idiom), futhi wafundisa ikamelo ("I\'ll just listen for now"). Yonke iModule 10 indawonye.',
          },
          {
            target: "Yes deadline bad. Test put off. Plan need.",
            native: 'Yebo isikhathi sokugcina sibi. Ukuhlola siliphazamise. Iplan iyadingeka.',
            correct: false,
            feedback: 'Awusongene amagama. Sebenzisa imisho epheleleyo: "If we put off testing, the launch will suffer."',
          },
          {
            target: "No, all is fine. No worry.",
            native: 'Hatshi, konke kulungile. Akukho ndaba.',
            correct: false,
            feedback: 'Awufakwa i-input — USarah ucela ukuhlonitshwa. Veza okubili ngokuhlonipho.',
          },
        ],
      },
      {
        speaker: 'npc',
        target: "Right — that's really helpful. You've hit the nail on the head with the testing concern. Let's touch base on Friday with the full plan.",
        native: 'Kuhle — kuyasiza ngempela. Ukhulume kahle nge-testing concern. Asihlangane ngoLwesihlanu nge-plan epheleleyo.',
      },
      {
        speaker: 'user',
        userChoices: [
          {
            target: "Sounds great — Friday works. Whenever you need anything before then, just give me a call. Thanks again for listening.",
            native: 'Kuzwakala kuhle — uLwesihlanu ulungile. Noma ngabe nini udinga okuthile kumnqamulwane, ngitshele nje. Ngiyabonga futhi ngokungilalela.',
            correct: true,
            feedback: 'I-perfect close — "Whenever" (conditional), "give me a call" (everyday), "Thanks for listening" (graceful). USarah uzakuba i-impressed.',
          },
          {
            target: "OK bye.",
            native: 'Kulungile sala kahle.',
            correct: false,
            feedback: 'Mfutshane kakhulu — yebanga umoya wengxoxo. Sebenzisa: "Sounds great. Friday works. Thanks!"',
          },
          {
            target: "Whenever if unless touch base however.",
            native: 'Noma ngabe nini uba ngaphandle sihlangane kodwa-ke.',
            correct: false,
            feedback: 'Wahlanganise wonke amagama — khetha aqondene lesimo: "Sounds great — Friday works."',
          },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "GRADUATION! Uxoxe njengomuntu owake wabhala unyaka eUK. Imibono yakho yamukelekiswa, waphikisana ngenhlonipho, wafaka ama-idioms ngokuyenjwayelo, wafunda ikamelo. Le yi-mastery. ESiNdebele esakho asilahlekanga — sikhulile, sikhonze esiNgisini. Manje uvula amanye amasango. Module 10 igqibile. Hambani kahle, ndoda yamasango.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Capstone recall — bhala ngenhliziyo, ungabuyeli emuva.',
    prompts: [
      { prompt: "Bhala 'In my view, although it's hard, I believe we can do it' ngesiNgisi", correct: ["In my view, although it's hard, I believe we can do it", 'In my view, although it is hard, I believe we can do it', "In my view although it's hard I believe we can do it"] },
      { prompt: "Bhala 'I see your point, but I'm not sure I agree' ngesiNgisi", correct: ["I see your point, but I'm not sure I agree", 'I see your point but I am not sure I agree', "I see your point, but I'm not sure I agree."] },
      { prompt: "Bhala 'Whenever you need help, just call' ngesiNgisi", correct: ['Whenever you need help, just call', 'Whenever you need help just call', 'Whenever you need help, just call.'] },
      { prompt: "Sebenzisa i-idiom: 'Wakhulume kahle' (You ___ on the ___)", correct: ['hit the nail on the head', 'You hit the nail on the head', 'You hit the nail on the head.'] },
    ],
  },

  mission: {
    title: 'I-graduation — umsebenzi wakho wokugcina',
    task: "Bhala ungxoxo emfutshane (5-7 lines) kumngane wakho weUK kumbe weUS — i-WhatsApp noma i-email. Sebenzisa: (1) i-greeting, (2) umbuzo otshikamezayo ('What do you think?'), (3) umbono ('In my view'), (4) i-conditional ('if' kumbe 'whenever'), (5) i-idiom (UK kumbe US), (6) i-close eyifudumele. Yifunde kabili. Bese uyithumele — kumbe uyibambe njenge-victory yakho. Module 10 igqibile. ULimi lwesiNgisi luphandle kuwe — manje hamba uyodlala ngalo emhlabeni.",
    rwenSignoff: "Lokhu yikho. Ungaqede unyaka. ESiNdebele sakho silaphakathi kwakho — futhi manje uphakathi kwemkhumbi we-fluency. Ngizakubona ku-AI conversation kwesokugcina. Hambani kahle, mfowethu/dadewethu.",
  },

  phase8: {
    scenario: "GRADUATION CONVERSATION. You're at a real milestone moment — choose ONE: (a) a UK job interview for a role you really want, (b) a US Zoom call with a new client where you're closing a deal, OR (c) a heartfelt catch-up with a close English-speaking friend you haven't seen in two years. Use EVERYTHING from Module 10 — opinions, contrast, conditionals, idioms (UK or US), polite disagreement, phrasal verbs, reading the room. The conversation should ebb and flow: introductions, deep questions, opinions, a moment of disagreement handled with grace, idioms slipped in naturally, and a warm close. Don't try to force every single phrase — let the conversation breathe.",
    rwenRole: "Adapts to your scenario choice: (a) Sarah, 50, a UK hiring manager who probes thoughtfully and expects balanced answers; (b) Mike, 42, a US client who values directness and uses business idioms heavily; (c) Emma, 31, a close UK friend who's missed you and wants the real story of how your year has been. All three will challenge your views politely, share something personal back, and give you space to read the room. They will follow up with 'Tell me more' if you stay shallow, and they will gently push back on weak claims so you have a chance to disagree politely.",
    successCriteria: "User uses AT LEAST FIVE of the following across the conversation: (1) an opinion phrase ('I think', 'I believe', 'In my view', 'It seems to me'), (2) a contrast conjunction ('although', 'however', 'despite', 'on the other hand'), (3) a conditional ('if', 'unless', 'whenever'), (4) a polite disagreement ('I'm not sure I agree', 'Maybe, but', 'I see your point'), (5) at least ONE UK or US idiom ('piece of cake', 'touch base', 'ballpark figure', 'hit the nail on the head', 'on the same page', 'Bob's your uncle'), (6) at least ONE phrasal verb ('look up', 'put off', 'come across', 'give in', 'jump in'), (7) reads the room at least once (steps back, listens, or matches the emotional tone). Asks at least ONE deep question ('What do you think?', 'How do you feel about...'). Stays in English the whole conversation — no falling back to Ndebele for full sentences. Closes warmly. The conversation lasts at least 3 minutes of real exchange.",
    estimatedMinutes: 4,
    bonusXp: 10,
  },
};

export default lesson;

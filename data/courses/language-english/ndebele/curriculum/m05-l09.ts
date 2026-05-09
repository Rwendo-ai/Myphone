import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm05-l09-marriage-divorce',
  module: 5,
  lesson: 9,
  title: 'Marriage, Wedding, Divorce',
  estimatedMinutes: 6,
  xpReward: 30,

  hook: {
    rwenLine: "EsiNdebeleni umtshado = the institution; umshado = the wedding ceremony. EsiNgisini sigcine ahlukene: 'marriage' (i-state, isimo) = umtshado kanye lobudlelwane bawo. 'Wedding' (i-event, umkhosi) = umkhosi wokutshada nangosuku lwawo. Kanti 'divorce' = ukwehlukana, ukuphela komshado. Khetha igama elifaneleyo.",
    culturalNote: "Emasikweni esiNdebele, umtshado wakhiwa ngamaphakathi amabili — eyokukhokhwa kwamabhadi (lobola) leyokungeniswa empilweni eyodwa. Lo nomkami benza isivumelwano phambi kukaNkulunkulu lephakathi lemuli — kuhambisana lokuthi 'umtshado uyahlonishwa kubo bonke' (KumaHebheru 13:4). Ukwehlukana yinkulu — esiNdebeleni siyabuhlonipha umshado kakhulu, kanti ukwehlukana akubukwa lula. EsiNgisini, 'divorce' yigama elingena lula emakhulumeni — kodwa ungalandeli leyo nkembu. Hlala lokuthi umshado uyisivumelwano sezikolokothiwe — futhi uma uhamba kakubi, ukuhambela ngokuhlonipha. Uma ulahlekelwa ngumshado, awushiywanga — uMose owabhala: 'uthando lukaThixo aluqedwa' (KumaRoma 8:38-39).",
  },

  chunks: [
    {
      id: 'marriage',
      target: 'Marriage',
      native: 'Umtshado (isimo, ubudlelwane)',
      literal: 'Marriage — the institution / state',
      emoji: '💍',
      phonetic: 'MAH-rij',
      audioRef: null,
    },
    {
      id: 'wedding',
      target: 'Wedding',
      native: 'Umshado (umkhosi)',
      literal: 'Wedding — the ceremony / event',
      emoji: '💒',
      phonetic: 'WED-ding',
      audioRef: null,
    },
    {
      id: 'married',
      target: 'Married',
      native: 'Otshadileyo / etshadileyo',
      literal: 'Married — adjective; "I am married"',
      emoji: '👰🏾‍♀️',
      phonetic: 'MAH-reed',
      audioRef: null,
    },
    {
      id: 'divorce',
      target: 'Divorce',
      native: 'Ukwehlukana (kwabashadileyo)',
      literal: 'Divorce — legal end of marriage',
      emoji: '💔',
      phonetic: 'di-VAWS',
      audioRef: null,
    },
    {
      id: 'engaged',
      target: 'Engaged',
      native: 'Othembisene umshado',
      literal: 'Engaged — promised, before wedding',
      emoji: '💎',
      phonetic: 'in-GAYJD',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Marriage vs wedding — state vs event',
    explanation: "'Marriage' yi-noun yokulanga isikhathi eside — i-state of being married (isimo) lo-the relationship (ubudlelwane). 'Wedding' yi-noun yelangathi elilodwa — usuku lomshado, umkhosi. Sebenzisa: 'Their marriage is strong' (ubudlelwane bahle) lo-'Their wedding was beautiful' (umkhosi wabo wawumuhle). Kohlukile! 'Married' yi-adjective: 'I'm married' (ngitshadile). 'Divorce' yiverbu lakho yinoun: 'They divorced' (behlukana) lo-'They got a divorce' (banehlukaniso).",
    examples: [
      { target: 'Their marriage has lasted thirty years.', native: 'Umtshado wabo umile iminyaka engama-30.' },
      { target: 'Our wedding was at the church.',           native: 'Umshado wethu ubuse-Church.' },
      { target: 'I am married.',                            native: 'Ngitshadile.' },
      { target: 'They got divorced last year.',             native: 'Behlukaniswe nyakuvile.' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Hlanganisa amagama',
      pairs: [
        { left: 'Marriage',  right: 'Umtshado (isimo)' },
        { left: 'Wedding',   right: 'Umshado (umkhosi)' },
        { left: 'Married',   right: 'Otshadileyo' },
        { left: 'Divorce',   right: 'Ukwehlukana' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Bhala ngesiNgisi',
      prompt: 'Umshado wami uzakuba ngoMashi.',
      correct: ['My wedding will be in March.', 'My wedding will be in March', 'my wedding will be in March.'],
    },
    {
      type: 'fill_blank',
      instruction: "Faka igama elifaneleyo — uxoxa ngokuhlonipheka kobudlelwane",
      sentence: "Their _____ has lasted forty years — they're an inspiration.",
      options: ['marriage', 'wedding', 'engagement'],
      correct: 'marriage',
      context: "'Marriage' yiyo elungile lapha — ngokuthi sikhuluma ngesimo (i-state) sokutshadana iminyaka engama-40, hatshi usuku lwakhona. 'Wedding' yi-event yodwa, ngolunye usuku.",
    },
    {
      type: 'translate',
      instruction: 'Bhala ngesiNgisi — uxoxa ngomngane',
      prompt: 'Yibo behlukaniswe nyakuvile — ngiyababulalisa.',
      correct: ['They got divorced last year — I feel for them.', 'They got divorced last year. I feel for them.', 'They divorced last year — I feel for them.'],
    },
    {
      type: 'build_sentence',
      instruction: 'Yakha umutsho — Sitshadile iminyaka engama-15',
      words: ['fifteen', 'married', 'years.', 'been', "We've", 'for'],
      correct: ["We've", 'been', 'married', 'for', 'fifteen', 'years.'],
      translation: 'Sitshadile iminyaka eli-15.',
    },
    {
      type: 'multiple_choice',
      instruction: 'Khetha eyiqiniso',
      question: "Umngane oyiNgisi uthi: 'Are you married?' Wena uyatshada eminyakeni emi-2 ezayo. Yini efaneleyo?",
      options: [
        { text: "No, but I'm engaged. We're getting married in two years.", correct: true },
        { text: "No, but soon married coming.",                              correct: false },
        { text: "Yes engaged.",                                              correct: false },
      ],
      explanation: "'No, but I'm engaged' yifaneleyo — uthi awukatshadi kodwa kanti uthembisene umshado. 'We're getting married in two years' kufaka isikhathi. Lokho yinhlonipho yobudlelwane — ucacisa ngokuhlonipha.",
    },
  ],

  rwenDialogue: {
    intro: "Umngane oyiNgisi ucela uthi umchaze ngebandla lakho — okwesiNdebele kuthwala ukucabanga ngokuhlonipheka komshado.",
    lines: [
      { speaker: 'npc', target: "Tell me about your wedding! How did it all go?", native: 'Ngitshele ngomshado wakho! Sasifana njani sonke?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Our wedding was beautiful — we got married at the church in Bulawayo. Our marriage is everything to us.", native: 'Umshado wethu ubumuhle — sasitshade eSontweni eseBulawayo. Umtshado wethu uyakho konke kithi.', correct: true, feedback: "Kuhle kakhulu — uphawule i-distinction: 'wedding' (umshado, umkhosi) lo-'marriage' (umtshado, isimo). Ukuhlonipheka komshado kuvelele." },
          { target: "Marriage was good. Wedding good.",                                                                          native: 'Umtshado ubuhle. Umshado uhle.',                                                                  correct: false, feedback: "Faka isenzo 'was' / 'were' kufaka i-flow: 'Our wedding was beautiful — our marriage is strong.' Kuhlukanise i-event lesimo." },
          { target: "Wedding done. Now married.",                                                                                native: 'Umshado uphelile. Sitshadile.',                                                                    correct: false, feedback: "Kufitshane — faka i-detail: 'We got married at the church. Our wedding was [adjective].' Lokho kuyenza umngane akwazi okuxhumeneyo." },
        ],
      },
      { speaker: 'npc', target: "I love that — a strong marriage is such a blessing.", native: 'Ngiyathandeka — umtshado oqinileyo uyisibusiso esikhulu.' },
      {
        speaker: 'rwen',
        rwenLine: "Wenze kuhle. 'Marriage' lo-'wedding' kuhlukene — loba bonke bafezekisa imicimbi yobungcwele yobudlelwane. UJesu wabhalwa: 'Lokho uNkulunkulu akuhlanganisileyo, akungahlukaniswa ngumuntu' (Mat 19:6).",
        rwenAnimation: 'gentle',
      },
    ],
  },

  activeRecall: {
    instruction: 'Bhala ngenhliziyo.',
    prompts: [
      { prompt: 'Marriage (ngesiNgisi)',  correct: ['Marriage', 'marriage'] },
      { prompt: 'Wedding (ngesiNgisi)',   correct: ['Wedding', 'wedding'] },
      { prompt: "I'm married (ngesiNgisi)", correct: ["I'm married", "I am married", "i'm married"] },
      { prompt: 'Divorce (ngesiNgisi)',   correct: ['Divorce', 'divorce'] },
    ],
  },

  mission: {
    title: 'Umsebenzi wanamhla',
    task: "Bhala umutsho omfitshane esiNgisini: 'I'm married / single / engaged' (khetha okufanele). Uma utshadile, faka: 'We've been married for ___ years.' Uma uthembile umshado, faka: 'We're getting married in ___.' Khuluma ngomlomo. Hlala lokuthi izwi 'wedding' lithatha usuku, kanti 'marriage' lithatha impilo yonke.",
    rwenSignoff: "Kusasa — umsebenzi wokuphela: yonke imuli yakho, ngo-paragraph oyedwa ngesiNgisi.",
  },

  crisisHandoff: true,

  phase8: {
    scenario: "You're chatting with an English-speaking friend who asks about your relationship status — married, single, engaged, divorced. Be honest and use the right English term. Share one detail about your wedding (if married) or how you met (if dating/engaged) or how you're doing (if divorced or widowed). Be warm.",
    rwenRole: "Anna, 38, a kind English-speaking friend who asks 'Are you married?' and listens with empathy whatever the answer. May ask 'Where did you have the wedding?' or 'How are you doing now?'",
    successCriteria: "User uses 'marriage' / 'wedding' / 'married' / 'divorced' / 'engaged' correctly — distinguishes marriage (state) from wedding (event). Uses one in a complete sentence. Shares one personal detail in a full sentence. If sharing about a difficult topic (divorce, widowhood), speaks with dignity, not avoidance.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;

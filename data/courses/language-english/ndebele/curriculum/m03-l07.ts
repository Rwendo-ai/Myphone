import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm03-l07-calling-server',
  module: 3,
  lesson: 7,
  title: 'At a restaurant — Ukubiza umuntu okuphakelayo',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "EsiNgisini, ungabizi 'Waiter!' kumbe utshikilize iminwe — kuyimphukamisa! Indlela engcono yokumbiza yi-'Excuse me ...' uphakamise isandla kancane. Kalusoni — wonke umuntu eUK leUSA ukwenza njalo.",
    culturalNote: "EZimbabwe lakwa-USA leUK, abantu bayemfana kakhulu erestaurant — abasenakukucitsha esikhundleni sakho. Ungayilindeli iziminithi ezingu-10! Endleleni yokuhlonipha kakhulu eUK: phakamisa isandla sakho ngokuthula, futhi ngokuzwana kwakho ngamehlo bathe 'Excuse me'. Ungatshikilizi iminwe — kuyahlukumeza kakhulu eUK. Igama 'waiter' livumelekile kodwa kalisathandwa kakhulu — abanye babiza nje 'excuse me' kungenagamna. EUSA, ku-diner-style, kuyaqondaka ukuthi 'Hi, can I get the check?' uma uphakamise isandla. Akekho ozakuyikhalalela — yindlela.",
  },

  chunks: [
    {
      id: 'excuse_me',
      target: 'Excuse me ...',
      native: 'Uxolo / Pho ...',
      literal: 'Excuse me',
      emoji: '🙋',
      phonetic: 'eks-KYOOZ-mee',
      audioRef: null,
    },
    {
      id: 'sorry',
      target: 'Sorry, ...',
      native: 'Uxolo, ... (kuyimqondiso emfishane)',
      literal: 'Sorry',
      emoji: '🤝',
      phonetic: 'SO-ree',
      audioRef: null,
    },
    {
      id: 'when_youve_got_a_moment',
      target: "When you've got a moment ...",
      native: 'Uma usuthole isikhathi ...',
      literal: 'When you have got a moment',
      emoji: '⏳',
      phonetic: 'wen-yoov-got-uh-MOH-ment',
      audioRef: null,
    },
    {
      id: 'over_here',
      target: 'Over here, please.',
      native: 'Lapha, ngiyacela.',
      literal: 'Over here please',
      emoji: '👋',
      phonetic: 'OH-ver-heer',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Ukubiza ngenhlonipho (calling for service)',
    explanation: "Indlela elungileyo: phakamisa isandla, hlangabezela amehlo, futhi tsho 'Excuse me' kumbe 'Sorry'. EsiNgisini, 'sorry' kayikho i-apologise — kuyimsebenzi womncedo wokuvula isikhathi. Engeza umsho wokucela: 'Could we have the menu?' / 'Could I have the bill?'. EUK, ungasebenzisi 'Waiter!' okuhle — kuzwakala kungahloniphi.",
    examples: [
      { target: "Excuse me — could we have the menu, please?",       native: 'Uxolo — singathola umenu, ngiyacela?' },
      { target: "Sorry, when you've got a moment, could we order?",  native: 'Uxolo, uma usuthole isikhathi, singafaka i-oda?' },
      { target: "Excuse me, over here please.",                       native: 'Uxolo, lapha ngiyacela.' },
    ],
  },

  exercises: [
    {
      type: 'multiple_choice',
      instruction: 'Khetha indlela elungileyo',
      question: "Useerestaurant eLondon, ufuna ukubiza umuntu okuphakelayo. Yiphi indlela elungileyo?",
      options: [
        { text: "Excuse me — could we have the menu, please?", correct: true },
        { text: "Waiter! Come here!",                          correct: false },
        { text: "Hey! Hey!",                                   correct: false },
      ],
      explanation: "'Excuse me' kuyahlonipha. 'Waiter!' kalisetshenziswa kakhulu eUK kulamuhla. 'Hey!' kuyimphukamisi.",
    },
    {
      type: 'translate',
      instruction: 'Bhala ngesiNgisi',
      prompt: 'Uxolo — singathola umenu, ngiyacela?',
      correct: ["Excuse me, could we have the menu please?", "Excuse me — could we have the menu, please?", "Excuse me, could we have the menu, please?"],
    },
    {
      type: 'fill_blank',
      instruction: "Gcwalisa lokhu kuhloniphekile",
      sentence: "____ me — when you've got a moment, could we order?",
      options: ['Excuse', 'Hey', 'Waiter'],
      correct: 'Excuse',
      context: "Ufuna ukubiza umuntu okuphakelayo ngenhlonipho.",
    },
    {
      type: 'match_pairs',
      instruction: 'Hlanganisa imisho yokubiza',
      pairs: [
        { left: "Excuse me",                       right: 'Uxolo (ukubiza)' },
        { left: "Sorry, when you've got a moment", right: 'Uma usuthole isikhathi' },
        { left: "Could we have the bill?",         right: 'Singathola incwadi yokukhokha?' },
        { left: "Over here, please.",              right: 'Lapha, ngiyacela.' },
      ],
    },
  ],

  rwenDialogue: {
    intro: "Useerestaurant eLondon. Useloyiselwe imizuzu engu-10. Ufuna ukubiza umphathi.",
    lines: [
      {
        speaker: 'user',
        userChoices: [
          { target: "Excuse me — when you've got a moment, could we order?", native: 'Uxolo — uma usuthole isikhathi, singafaka i-oda?', correct: true,  feedback: "Kuhle kakhulu — ngokuhlonipha okwedlulele. Lo ngumusho wesikole esiphakeme." },
          { target: "Waiter! Come!",                                          native: 'Mphathi! Woza!',                                  correct: false, feedback: "Lokhu kuyahlukumeza kakhulu eUK. Sebenzisa 'Excuse me'." },
          { target: "Hey, you!",                                              native: 'Wena!',                                            correct: false, feedback: "Hatshi! Kuyimphukamisi okukhulu. Iza, sebenzisa 'Excuse me'." },
        ],
      },
      { speaker: 'npc', target: "Of course, sorry for the wait — what can I get you?", native: 'Yebo ngeqiniso, uxolo ngokuloyiselwa — ngingakuthathela ini?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Could we have two menus, please?",  native: 'Singathola amamenu amabili, ngiyacela?', correct: true,  feedback: "Kuhle — 'Could we have' kuhloniphe ngokwedlulele." },
          { target: "Bring menus.",                       native: 'Letha amamenu.',                          correct: false, feedback: "Lokhu kalahloniphi — sebenzisa 'Could we have'." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Bambelele: 'Excuse me' lapha kuyimsiba ngenhlonipho. EUK, awufuni ukuba lo-foreigner okhuluma kakhulu — kuyangikuze.",
        rwenAnimation: 'thumbs_up',
      },
    ],
  },

  activeRecall: {
    instruction: 'Bhala ngesiNgisi.',
    prompts: [
      { prompt: 'Uxolo (ukubiza umphathi werestaurant) — ngesiNgisi', correct: ['Excuse me', 'excuse me'] },
      { prompt: 'Singathola umenu, ngiyacela? (ngesiNgisi)',           correct: ['Could we have the menu please?', 'Could we have the menu, please?', 'Can we have the menu please?'] },
    ],
  },

  mission: {
    title: 'Umsebenzi wakho lamhla',
    task: "Khangela imuvi efishane (sit-com kumbe drama) ye-British kumbe yeAmerican lapho abantu beserestaurant. Bopha indlela ababiza ngayo umphathi — ungezwa 'Excuse me' kakhulu.",
    rwenSignoff: "Kuhle kakhulu. Sizabonana kusasa.",
  },

  phase8: {
    scenario: "You're at a moderately busy restaurant in Edinburgh, Scotland. You've been waiting 12 minutes for someone to take your order. You need to call the waitress over without being rude — using polite British conventions.",
    rwenRole: "Fiona, 30s, a Scottish waitress, busy but apologetic. Will respond well to 'Excuse me' but not to 'Waiter!' or finger snapping (she'll let the user know if they try this).",
    successCriteria: "User uses 'Excuse me' (not 'Waiter!' or 'Hey'), and uses a polite request like 'Could we order' or 'Could I have' once Fiona arrives.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;

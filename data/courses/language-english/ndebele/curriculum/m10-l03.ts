import type { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm10-l03-fear-worry',
  module: 10,
  lesson: 3,
  title: 'Asking deep questions — "What do you think?"',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Ukubuza imibuzo etshikamezayo kuyenza ube ngumuntu lowomuntu okhulumisana laye. AbantuabesiNgisi ngokuvamileyo bayithanda imibuzo embili: 'What do you think?' (ucabangani?), 'How do you feel about ___?' (uzwa njani nge-___?). Lokhu yikho okutshintsha ingxoxo isuke ku-small talk iye edephini.",
    culturalNote: "EUK leUS, ukubuza 'What do you think?' yi-superpower. Iveza ukuthi uyahlonipha umqondo womunye, futhi izakwenza umngane wakho akuvulele ngendlela engazange ulindele. Esikhungweni sokusebenza, abaphathi abahle bayabuza i-team yabo: 'What's your take on this?' kunzima ukuthi uphakanyiswe ungayisebenzisi le mibuzo. Esikhathini esiseduzeni, izakhula imihlangano yakho yokuqala (first dates, networking events). Ungalethezi imibuzo le emumva kokuhlangana kokuqala — qala ngo-small talk, bese uxoxa ngokwenzakeleyo, bese ubuzela: 'What do you think?'",
  },

  chunks: [
    {
      id: 'what_do_you_think',
      target: 'What do you think?',
      native: 'Ucabangani?',
      literal: 'What do you think?',
      emoji: '🤔',
      phonetic: 'WOT-doo-yu-THINGK',
      audioRef: null,
    },
    {
      id: 'how_do_you_feel',
      target: 'How do you feel about it?',
      native: 'Uzwa njani ngakho?',
      literal: 'How do you feel about it?',
      emoji: '💭',
      phonetic: 'HOW-doo-yu-FEEL-uh-bawt-it',
      audioRef: null,
    },
    {
      id: 'whats_your_take',
      target: "What's your take on it?",
      native: 'Ungumbono wakho ngakho yini?',
      literal: 'Your perspective?',
      emoji: '🎯',
      phonetic: 'WOTS-yur-TAYK-on-it',
      audioRef: null,
    },
    {
      id: 'tell_me_more',
      target: 'Tell me more',
      native: 'Ngitshele kakhulu',
      literal: 'Tell me more',
      emoji: '👂',
      phonetic: 'TEL-mee-MOR',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Open vs closed questions',
    explanation: "Imibuzo ye-yes/no (closed) ivala ingxoxo: 'Did you like it?' — 'Yes.' EVALENI. Imibuzo ye-open ivula: 'What did you think of it?' — kuyaphendula ngokucabangisisa. Sebenzisa: What, How, Why kunokuthi Did, Do, Are. Emumva kwempendulo, sebenzisa 'Tell me more' kumbe 'Why do you say that?' — kuvula umnyango futhi.",
    examples: [
      { target: 'What do you think of London?',           native: 'Ucabangani ngeLondon?' },
      { target: 'How do you feel about the new job?',     native: 'Uzwa njani ngomsebenzi omutsha?' },
      { target: "What's your take on this idea?",         native: 'Ungumbono wakho ngalo mqondo yini?' },
      { target: 'Why do you say that? Tell me more.',     native: 'Kungani usho lokho? Ngitshele kakhulu.' },
    ],
  },

  exercises: [
    {
      type: 'multiple_choice',
      instruction: 'Khetha umbuzo ovula ingxoxo',
      question: "Umngane wakho usanda kubuya ezithulukweni eParis. Yiphi imibuzo evula ingxoxo?",
      options: [
        { text: 'Did you like it?',                correct: false },
        { text: 'What did you think of Paris?',     correct: true },
        { text: 'Was it good?',                     correct: false },
      ],
      explanation: "U-'Did you like it?' lo-'Was it good?' bayatholakala ngo-yes/no kuphela. U-'What did you think of Paris?' uphendulwa ngokuxoxa, ngamadeti, ngokucabangisisa. Lokhu yi-deep question.",
    },
    {
      type: 'translate',
      instruction: 'Bhala ngesiNgisi',
      prompt: 'Uzwa njani ngomsebenzi omutsha?',
      correct: [
        'How do you feel about the new job?',
        'How do you feel about your new job?',
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Gcwalisa isikhala — uvula ingxoxo',
      sentence: "That's interesting. _____ me more.",
      options: ['Tell', 'Say', 'Speak'],
      correct: 'Tell',
      context: "I-collocation eqondileyo yi-'Tell me more.' (HATSHI 'Say me more' okumelele i-Spanish/Portuguese, futhi HATSHI 'Speak me more').",
    },
    {
      type: 'build_sentence',
      instruction: "Hlela: 'What's your take on this?'",
      words: ['this?', 'on', 'take', 'your', "What's"],
      correct: ["What's", 'your', 'take', 'on', 'this?'],
      translation: 'Ungumbono wakho ngalokhu yini?',
    },
  ],

  rwenDialogue: {
    intro: 'Usemumvileni — ku-coffee break lomngane wakho omutsha emsebenzini. Ufuna ukukwazi ngokujulile.',
    lines: [
      { speaker: 'npc', target: "I just moved here from India three months ago. The weather is hard.", native: "Ngiqeda ukufika lapha ngivela eIndia eminyangeni emithathu eyedluleyo. Isimo sokomkhathi sinzima." },
      {
        speaker: 'user',
        userChoices: [
          {
            target: "Three months — that's still new! What do you think of the UK so far? And how do you feel about being so far from home?",
            native: "Ezimbalwa nje — usemutsha! Ucabangani ngeUK kuze kube manje? Futhi uzwa njani ngokuba khatshana lekhaya?",
            correct: true,
            feedback: "Kuhle kakhulu — imibuzo emibili etshikamezayo. Khanya — uzakwazi okwezangakanani ngomngane wakho omutsha kulawomashumi amabili amabili.",
          },
          {
            target: "Did you like it? Is it good? Are you OK?",
            native: "Wakuthanda yini? Kuhle yini? Ulungile yini?",
            correct: false,
            feedback: "Yonke imibuzo iphendulwa ngo-yes/no. Tshintsha umbono — sebenzisa 'What' lo-'How'.",
          },
          {
            target: "OK. Bye.",
            native: "Kulungile. Sala kahle.",
            correct: false,
            feedback: "Awumbuzanga lutho! Sebenzisa 'What do you think of the UK?' ukuvula ingxoxo.",
          },
        ],
      },
      { speaker: 'npc', target: "Wow, no one's asked me that. Honestly, the people are kind, but I miss home cooking the most...", native: "Hawu, akekho othe wangibuza lokho. Ngeqiniso, abantu balomusa, kodwa ngithanda kakhulu ukudla kwakithi..." },
      { speaker: 'rwen', rwenLine: "Bona — umbuzo owodwa otshikamezayo uvule ingxoxo eyiqiniso. Lokhu kuwumzimba wokuxoxa.", rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: 'Ungabuyeli emuva.',
    prompts: [
      { prompt: "Bhala umbuzo otshikamezayo ngomsebenzi womuntu", correct: ['What do you think of your job?', 'How do you feel about your job?', "What's your take on your job?"] },
      { prompt: "Bhala 'Tell me more' (uvula ingxoxo)", correct: ['Tell me more', 'Tell me more.', 'tell me more'] },
    ],
  },

  mission: {
    title: 'Umsebenzi wakho wamuhla',
    task: "Buza umuntu owodwa lamuhla 'What do you think of ___?' kumbe 'How do you feel about ___?'. Mlalele kahle. Sebenzisa 'Tell me more' uba bekhuluma kakhulu. Bona ukuthi ingxoxo isuka kanjani.",
    rwenSignoff: "Kusasa — uyaveza ozwa kungumbono wakho. 'I believe', 'In my view'.",
  },

  phase8: {
    scenario: "You're at a UK networking event. You've just met someone interesting. Use deep questions to learn about them: their work, how they feel about life in the UK, their thoughts on something topical. Avoid yes/no questions.",
    rwenRole: "Daniel, 35, a software developer at a London startup. Friendly but reserved — he opens up if you ask thoughtful questions, but stays surface-level for boring small talk.",
    successCriteria: "User asks at least TWO open questions using 'What do you think', 'How do you feel', or 'What's your take'. Uses 'Tell me more' once. Doesn't ask yes/no questions back-to-back.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;

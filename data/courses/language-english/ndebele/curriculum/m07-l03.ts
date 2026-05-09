import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm07-l03-underground-subway-trains',
  module: 7,
  lesson: 3,
  title: 'The Tube, the Subway, the train — Izitimela ezweni',
  estimatedMinutes: 6,
  xpReward: 25,

  hook: {
    rwenLine:
      "Indawo nendawo ile-yamayithi alo: eLondon yi-'Underground' kumbe 'the Tube'. eNew York yi-'Subway'. eSydney lutshanguli, kuyi-'train' nje. Sebenzisa elifaneleyo komayini ulapho khona — uzwakala mfundi wendawo.",
    culturalNote:
      "I-Tube yaseLondon ihlukile: ifuna i-Oyster card kumbe i-contactless bank card — ungakhokhi ngemali. Faka i-card ku-yellow reader ekhulekuza ungena lasekuhambeni — uma ungayifaki kabili, izokwehluleka. ESubway yaseNYC, uthengelana i-MetroCard kumbe usebenzise i-OMNY (contactless). ESydney, yi-Opal card. Imithetho emithathu ye-Tube: (1) hlangabezana kwesokudla ku-escalator, hambela kwesokunxele uma uphangisa, (2) ungakhulumi ngokuphakamileyo — i-Brits bayathula ku-Tube, (3) yekela abantu baphume kuqala ungene. Ku-Subway yaseNYC, kayinambeza — yenza ngokushesha, abantu bonke baphangisile.",
  },

  chunks: [
    {
      id: 'which_line',
      target: 'Which line goes to ___?',
      native: 'Yiluphi uhlu oluya e___?',
      literal: 'Iline eyiphi eya e-___?',
      emoji: '🚇',
      phonetic: 'witch-LAYN-gohz-too',
      audioRef: null,
    },
    {
      id: 'next_train',
      target: "When's the next train?",
      native: 'Sizofika nini esinye isitimela?',
      literal: 'Inext train ikuphi?',
      emoji: '🚆',
      phonetic: 'wenz-thuh-NEKST-trayn',
      audioRef: null,
    },
    {
      id: 'how_many_stops',
      target: 'How many stops?',
      native: 'Mangaki amaqembu okumisa?',
      literal: 'How-many stops',
      emoji: '🛑',
      phonetic: 'how-MEH-nee-STOPS',
      audioRef: null,
    },
    {
      id: 'is_this_correct',
      target: 'Does this train go to Oxford Circus?',
      native: 'Lesisitimela siya e-Oxford Circus?',
      literal: 'Is-this train going to Oxford Circus',
      emoji: '🚉',
      phonetic: 'duz-this-TRAYN-go',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Asking about transport — line, time, stops',
    explanation:
      "Imibuzo emithathu ezayisinda esitimeleni: (1) 'Which line goes to ___?' — yiyiphi i-line eya endaweni efuna ukuya, (2) 'When's the next train?' — sizofika nini, (3) 'How many stops?' — kumele ngehle ngamaqembu mangaki. Faka 'Excuse me' phambili uma ukhuluma lomuntu owedwa.",
    examples: [
      { target: 'Which line goes to King\'s Cross?',        native: 'Yiluphi uhlu oluya e-King\'s Cross?' },
      { target: "When's the next train to Brooklyn?",        native: 'Sizofika nini esinye isitimela esiya eBrooklyn?' },
      { target: 'How many stops to Bondi?',                  native: 'Mangaki amaqembu okumisa kuze kufike eBondi?' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Idolobha lendawo eyaziwa ngayo',
      pairs: [
        { left: 'London',  right: 'the Tube / the Underground' },
        { left: 'New York', right: 'the Subway' },
        { left: 'Sydney',   right: 'the train' },
        { left: 'card to tap', right: 'Oyster / OMNY / Opal' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Bhala ngesiNgisi — usemncane uTube uyathuthuka',
      prompt: 'Yiluphi uhlu oluya e-King\'s Cross?',
      correct: [
        "Which line goes to King's Cross?",
        "Which line to King's Cross?",
        "What line goes to King's Cross?",
        "which line goes to king's cross?",
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Gcwalisa — ususelapho i-Subway eNYC',
      sentence: "When's the ____ train?",
      options: ['next', 'first', 'big'],
      correct: 'next',
      context: "'Next' kusho 'esilandelayo'. Ufuna ukwazi ukuthi sizofika nini esinye.",
    },
    {
      type: 'multiple_choice',
      instruction: "Wena uphakathi we-Tube e-Tottenham Court Road. Ufuna eHolborn. Uthini?",
      question: 'Khetha umbuzo onhle:',
      options: [
        { text: "Excuse me, does this train go to Holborn?", correct: true },
        { text: 'Holborn?',                                       correct: false },
        { text: 'I want Holborn now go.',                          correct: false },
      ],
      explanation:
        "'Excuse me' uvula umbuzo, 'does this train go to ___?' kuphendulwa nge-yes/no — kuphangisa.",
    },
    {
      type: 'build_sentence',
      instruction: 'Hlela amagama — ubuza nge-stops',
      words: ['stops', 'How', 'to', 'many', 'Bondi'],
      correct: ['How', 'many', 'stops', 'to', 'Bondi'],
      translation: 'Mangaki amaqembu okumisa kuze kuyiwe eBondi?',
    },
  ],

  rwenDialogue: {
    intro:
      "Wena ku-King's Cross, London. Ufuna ukuhamba uye e-Liverpool Street ukuhlangana lomngane. Awazi ukuthi yiyiphi i-line. Ubuza umuntu osebenzayo (uniform yokuhamba) ku-station.",
    lines: [
      {
        speaker: 'npc',
        target: 'You alright? Need a hand?',
        native: 'Ungakahle? Ufuna usizo?',
      },
      {
        speaker: 'user',
        userChoices: [
          {
            target: "Excuse me, which line goes to Liverpool Street?",
            native: 'Uxolo, yiluphi uhlu oluya eLiverpool Street?',
            correct: true,
            feedback: "Mnandi — 'Excuse me' uvule kahle, umbuzo umfutshane.",
          },
          {
            target: 'Liverpool Street where train?',
            native: 'Liverpool Street ikuphi isitimela?',
            correct: false,
            feedback: "Ihlanganisiwe — 'Which line goes to ___?' kungumbuzo ofanele.",
          },
          {
            target: 'Tube?',
            native: 'iTube?',
            correct: false,
            feedback: 'Bekungenani — kayikho indlela yokwazi othi.',
          },
        ],
      },
      {
        speaker: 'npc',
        target: "Yeah, take the Circle line — eastbound, four stops. Platform 8.",
        native: 'Yebo, thatha i-Circle line — eya empumalanga, amaqembu amane. Iplatform 8.',
      },
      {
        speaker: 'user',
        userChoices: [
          {
            target: 'Thank you so much.',
            native: 'Ngiyabonga kakhulu.',
            correct: true,
            feedback: 'Yiyo i-Brit way — "thank you" kuphela.',
          },
          {
            target: 'OK bye.',
            native: 'OK sala kuhle.',
            correct: false,
            feedback: 'Engeza "thank you" — usuhulukile.',
          },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine:
          "I-Tube ifuna ukushesha lokho ukubonga okufutshane. 'Cheers' lakuyo kuhle — kayisiyikuthi 'cheers' kwakhuluma kwasebenzayo.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Ungabuki ngenhla — bhala ngenkumbulo.',
    prompts: [
      {
        prompt: "Which line goes to Oxford Circus? (ngesiNgisi)",
        correct: [
          "Which line goes to Oxford Circus?",
          'Which line to Oxford Circus?',
          'What line goes to Oxford Circus?',
          'which line goes to oxford circus?',
        ],
      },
      {
        prompt: "When's the next train? (ngesiNgisi)",
        correct: ["When's the next train?", 'When is the next train?', 'When does the next train come?', "when's the next train?"],
      },
    ],
  },

  mission: {
    title: 'Umsebenzi wakho lamuhla',
    task:
      "Cabanga ukuthi useLondon. Khetha amazwe amabili (i-Oxford Circus le-Liverpool Street, isib.). Buza ngomlomo: 'Excuse me, which line goes to ___?' kabili. Ngakwesinye, sebenzisa 'How many stops?'.",
    rwenSignoff: 'Kusasa — itekisi le-Uber. Indlela yokuthengisa indlela yakho.',
  },

  phase8: {
    scenario:
      "You're at King's Cross station in London at rush hour. You need to get to your hotel near Liverpool Street. You have an Oyster card. Stop a Transport for London staff member (high-vis jacket) and ask which line, how many stops, and confirm the platform.",
    rwenRole:
      "Dave, 52, TfL station assistant. Cockney accent, helpful but moves fast. Will give brief, accurate directions. Will say 'cheers, mate' when you thank him.",
    successCriteria:
      "User uses 'Excuse me' opener, asks 'which line' AND 'how many stops' (or platform), thanks him at the end. Doesn't try to use 'Subway' or 'metro' — uses 'Tube', 'Underground', or 'line'.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;

import type { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm10-l08-hope-future',
  module: 10,
  lesson: 8,
  title: 'Phrasal verbs — "look up", "give in", "put off"',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Ama-phrasal verbs angumonakalo wesiNgisi. 'Look' kanye + 'up' = 'cinga ku-internet/dictionary'. Hatshi 'cinga phezulu'. 'Give' kanye + 'in' = 'vuma uphahlulwe'. 'Put' kanye + 'off' = 'libazisa'. Yamukela kuhle: i-phrasal verb yiunit eyodwa, akusiwo amagama amabili angazimele.",
    culturalNote: "ESiNdebele asisebenzisi i-phrasal verbs ngendlela esiNgisini esisebenzisa ngayo. Uthi 'cinga', uthi 'libazisa' — ngegama elilodwa nje. ESiNgisini, ama-phrasal verbs angonke abantu basebenzisa ekukhulumeni — kakhulu kunokusebenzisa amagama omsebenzi alungile (formal). 'Postpone the meeting' (formal) vs 'Put off the meeting' (everyday). Ngokuvamileyo, abantu basesikhungweni sokukhuluma basebenzisa ama-phrasal verbs; ngosiba (writing) basebenzisa amagama anenkulumo ekulungiweyo. Funda zombili. Khangela: ezinye ziyahlukaniseka ('I looked it up', HATSHI 'I looked up it'), ezinye azihlukaniseki ('I came across her' kuphela). Lokhu yikho okwenze i-phrasal verbs ibe yindima yempucuko ye-mastery.",
  },

  chunks: [
    {
      id: 'look_up',
      target: 'Look up',
      native: 'Cinga (ku-dictionary noma ku-internet)',
      literal: 'Look up = search/find info',
      emoji: '🔍',
      phonetic: 'LUUK-up',
      audioRef: null,
    },
    {
      id: 'give_in',
      target: 'Give in',
      native: 'Vuma uphahlulwe / dela',
      literal: 'Give in = surrender/yield',
      emoji: '🏳️',
      phonetic: 'GIV-in',
      audioRef: null,
    },
    {
      id: 'put_off',
      target: 'Put off',
      native: 'Libazisa / hlehlisa',
      literal: 'Put off = postpone',
      emoji: '⏰',
      phonetic: 'PUT-of',
      audioRef: null,
    },
    {
      id: 'come_across',
      target: 'Come across',
      native: 'Hlangabezana ngengozi',
      literal: 'Come across = encounter unexpectedly',
      emoji: '🎯',
      phonetic: 'KUM-uh-kros',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Phrasal verbs — separable vs non-separable',
    explanation: "(1) I-Separable: ungafaka i-noun phakathi: 'I looked the word up' = 'I looked up the word.' Kodwa LAPHO usebenzisa i-pronoun (it, them, him), kufanele yifakwe phakathi: 'I looked it up' (HATSHI 'I looked up it'). 'Put off the meeting' = 'Put the meeting off' = 'Put it off' (kuphela). (2) I-Non-separable: i-verb le-particle ihlala ndawonye: 'I came across her at the market' (HATSHI 'I came her across'). 'Give in' yi-intransitive, ihlala kanjalo: 'He gave in' (akufuni i-object).",
    examples: [
      { target: "I'll look it up online.",                       native: 'Ngizoyicinga online.' },
      { target: 'Don\'t give in to pressure.',                   native: 'Ungavumi ngenxa yengcindezi.' },
      { target: "We had to put off the meeting until Friday.",    native: 'Bekufanele silibazise umhlangano kuze kube nguLwesihlanu.' },
      { target: 'I came across an old friend yesterday.',         native: 'Ngahlangabezana lomngane omdala ngengozi izolo.' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Hlanganisa i-phrasal verb lencazelo',
      pairs: [
        { left: 'Look up',     right: 'Cinga ku-internet' },
        { left: 'Give in',     right: 'Vuma uphahlulwe' },
        { left: 'Put off',     right: 'Libazisa' },
        { left: 'Come across', right: 'Hlangabezana ngengozi' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Khetha eyiyo (separable rule!)',
      sentence: "I didn't know the word, so I _____ in the dictionary.",
      options: ['looked it up', 'looked up it', 'look up it'],
      correct: 'looked it up',
      context: "I-pronoun ('it') KUFANELE iphakathi — 'looked it up' kuphela. 'Looked up it' kayisihambeli, 'look up it' i-tense ayilungile.",
    },
    {
      type: 'translate',
      instruction: 'Bhala ngesiNgisi',
      prompt: 'Bekufanele silibazise umhlangano kuze kube ngoLwesihlanu.',
      correct: [
        'We had to put off the meeting until Friday.',
        'We had to put the meeting off until Friday.',
        'We had to postpone the meeting until Friday.',
      ],
    },
    {
      type: 'build_sentence',
      instruction: "Hlela: 'I came across an old friend at the market'",
      words: ['the', 'an', 'across', 'old', 'friend', 'I', 'came', 'at', 'market.'],
      correct: ['I', 'came', 'across', 'an', 'old', 'friend', 'at', 'the', 'market.'],
      translation: 'Ngahlangabezana lomngane omdala emakethe',
    },
    {
      type: 'multiple_choice',
      instruction: "Khetha umsho oqondileyo",
      question: "Yiphi indlela eqondileyo yokutsho 'Ngalibazisa wona' (the meeting)?",
      options: [
        { text: 'I put off it.',         correct: false },
        { text: 'I put it off.',         correct: true },
        { text: 'I off put it.',          correct: false },
      ],
      explanation: "U-'Put off' yi-separable phrasal verb. Lapho usebenzisa i-pronoun ('it'), KUFANELE ifakwe phakathi: 'I put it off'. HATSHI 'I put off it' (kuyiphutha eli-common kakhulu).",
    },
  ],

  rwenDialogue: {
    intro: 'Umngane wakho ukubuza ngokuthi kungani ungezanga emhlanganweni izolo.',
    lines: [
      { speaker: 'npc', target: "Hey, why didn't you come yesterday? Was something wrong?", native: "Hawu, kungani ungezanga izolo? Bekulokuthile yini okungalunganga?" },
      {
        speaker: 'user',
        userChoices: [
          {
            target: "Sorry — I had to put it off because I came across an old friend at the airport. I didn't want to give in to her pressure to stay, but she insisted.",
            native: "Uxolo — bekufanele ngiyilibazise ngoba ngahlangabezana lomngane omdala esikhumulweni semindiza ngengozi. Bengingafuni ukuvuma yokuthi ngihlale, kodwa wagcizelela.",
            correct: true,
            feedback: "Mastery! Usebenzise ama-phrasal verbs amathathu emutshweni owodwa ngendlela enjwayelo: 'put it off', 'came across', 'give in to'. Lokhu yi-fluency.",
          },
          {
            target: "I put off it. I look up. I give in.",
            native: "Ngalibazisa lo. Ngacinga phezulu. Ngavuma ngaphakathi.",
            correct: false,
            feedback: "Ama-rules ahluleka — 'I put off it' kayilungi (kuyifanele 'I put it off'). 'Look up' kufuna i-object. 'Give in' kufuna i-context.",
          },
          {
            target: "Sick. Sorry.",
            native: "Bengigula. Uxolo.",
            correct: false,
            feedback: "Awusebenzisanga ama-phrasal verbs nhlobo. Sebenzisa okungenani: 'I had to put it off because...'",
          },
        ],
      },
      { speaker: 'npc', target: "No worries — let's catch up next week instead.", native: "Akukho ndaba — asixhumane ngeviki elizayo." },
      { speaker: 'rwen', rwenLine: "Khangela — i-rule yangaphakathi (separable, pronouns) ihambela ngokwenjwayelo. Lokhu yi-mastery yangokwenelisa.", rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: 'Ungabuyeli emuva.',
    prompts: [
      { prompt: "Bhala 'I'll look it up' ngesiNgisi", correct: ["I'll look it up", 'I will look it up', "I'll look it up."] },
      { prompt: "Tshintsha 'I postponed the meeting' isebenzise i-phrasal verb", correct: ['I put off the meeting', 'I put the meeting off', 'I put off the meeting.'] },
    ],
  },

  mission: {
    title: 'Umsebenzi wakho wamuhla',
    task: "Bhala imisho emine — eyodwa nge 'look up', eyodwa nge 'give in', eyodwa nge 'put off', eyodwa nge 'come across'. Qiniseka uzwa indlela ehambela ngayo i-pronoun ('it', 'them').",
    rwenSignoff: "Kusasa — ukufunda ikamelo. Nini ukuthula, nini ukukhuluma.",
  },

  phase8: {
    scenario: "You're catching up with a friend after a busy week. Tell them about something you postponed (put off), something you researched (looked up), something you ran into (came across), and a time you didn't give in. Use the phrasal verbs naturally.",
    rwenRole: "Alex, 30, your friend who loves storytelling and asks lots of follow-up questions. Will say 'Tell me more' if you sound robotic.",
    successCriteria: "User uses at least THREE of the four target phrasal verbs ('look up', 'give in', 'put off', 'come across'). Uses pronoun-placement correctly at least once ('I looked it up' style). Stays in English.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;

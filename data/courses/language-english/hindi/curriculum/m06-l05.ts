import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm06-l05-time-minutes',
  module: 6,
  lesson: 5,
  title: 'Half past, quarter to — मिनट',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "अब minutes में जाएँगे। 'Half past two' (ढाई बजे), 'quarter to nine' (नौ बजने में पंद्रह मिनट), 'five past six' (छह बजकर पाँच)। ये English में time की बारीकी हैं।",
    culturalNote: "हिंदी में 'ढाई बजे' (= 2:30) पूरी संख्या से बने एक शब्द में — 'half past two' English में दो शब्दों में। 'Quarter' (पाव/पंद्रह मिनट) — 'quarter past' = बजकर पंद्रह, 'quarter to' = बजने में पंद्रह। US में लोग 'five thirty' या 'eight forty-five' सीधे बोलते हैं — UK में 'half past five' और 'quarter to nine' ज़्यादा सुनाई देता है। दोनों चलते हैं — context के हिसाब से।",
  },

  chunks: [
    {
      id: 'half_past',
      target: 'Half past two',
      native: 'ढाई बजे',
      literal: 'Dhaai baje',
      emoji: '🕝',
      phonetic: 'haf-PAST-too',
      audioRef: null,
    },
    {
      id: 'quarter_to',
      target: 'Quarter to nine',
      native: 'नौ बजने में पंद्रह मिनट',
      literal: 'Nau bajne mein pandrah minute',
      emoji: '🕘',
      phonetic: 'KWOR-ter-too-nyn',
      audioRef: null,
    },
    {
      id: 'five_past',
      target: 'Five past six',
      native: 'छह बजकर पाँच मिनट',
      literal: 'Chhah bajkar paanch minute',
      emoji: '🕕',
      phonetic: 'fyv-past-siks',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Time fragments — past / to',
    explanation: "Minutes 1-30 हों: 'past' (बजकर) use करें। 31-59: 'to' (बजने में) use करें। 'Half past' = 30, 'quarter past/to' = 15। 'Five past three' = 3:05, 'twenty to eight' = 7:40। US style अलग — '3:05' = 'three oh five', '7:40' = 'seven forty'।",
    examples: [
      { target: "Half past four (4:30)",        native: 'साढ़े चार बजे' },
      { target: "Quarter past seven (7:15)",    native: 'सात बजकर पंद्रह मिनट' },
      { target: "Twenty to nine (8:40)",        native: 'नौ बजने में बीस मिनट' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'समय मिलाएँ',
      pairs: [
        { left: 'Half past two',     right: '2:30' },
        { left: 'Quarter to nine',   right: '8:45' },
        { left: 'Quarter past five', right: '5:15' },
        { left: 'Twenty to seven',   right: '6:40' },
      ],
    },
    {
      type: 'translate',
      instruction: 'अंग्रेज़ी में लिखें',
      prompt: 'ढाई बजे (2:30)',
      correct: ['Half past two', 'half past two', 'Two thirty'],
    },
    {
      type: 'fill_blank',
      instruction: 'खाली भरें — past या to?',
      sentence: "It's quarter ____ ten. (9:45)",
      options: ['past', 'to', 'before'],
      correct: 'to',
      context: "9:45 = 10 बजने में 15 मिनट। 30 के बाद 'to' लगता है।",
    },
    {
      type: 'build_sentence',
      instruction: "वाक्य बनाएँ — bus 5 minutes से miss हो गई",
      words: ['by', 'I', 'minutes.', 'missed', 'bus', 'the', 'five'],
      correct: ['I', 'missed', 'the', 'bus', 'by', 'five', 'minutes.'],
      translation: 'मेरी बस पाँच मिनट से छूट गई।',
    },
    {
      type: 'translate',
      instruction: 'अंग्रेज़ी में लिखें',
      prompt: 'नौ बजने में पंद्रह मिनट (8:45)',
      correct: ['Quarter to nine', 'quarter to nine', 'Eight forty-five'],
    },
    {
      type: 'translate',
      instruction: 'अंग्रेज़ी में लिखें — मिलने का time fix कर रहे हैं',
      prompt: 'साढ़े छह बजे मिलते हैं (6:30)',
      correct: ["Let's meet at half past six", "Let's meet at half past six.", "Meet at half past six", "Let's meet at six thirty"],
    },
  ],

  rwenDialogue: {
    intro: 'आप ऑफिस की bus miss कर बैठे हैं। English-speaking transport coordinator को फ़ोन करके बता रहे हैं।',
    lines: [
      { speaker: 'npc', target: "Why are you late?", native: 'देर क्यों हुई?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "I missed the bus by five minutes — it left at half past seven.",  native: 'पाँच मिनट से बस छूट गई — वो साढ़े सात पर निकल गई थी।', correct: true,  feedback: "बढ़िया — समय भी (half past seven) और कितनी देर हुई (by five minutes) सब साफ़।" },
          { target: "Bus go.",                                                            native: 'बस गई।',                                                  correct: false, feedback: 'बहुत छोटा — समय और कारण जोड़ें।' },
          { target: "I'm late because traffic.",                                          native: 'Traffic की वजह से late हो गया।',                                  correct: false, feedback: 'यह OK है पर समय नहीं है — सही time बोलें।' },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "बढ़िया! 'Half past' और 'by five minutes' — schedule की भाषा आ गई।",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'बिना ऊपर देखे, याद से लिखें।',
    prompts: [
      { prompt: 'Half past three (अंग्रेज़ी में) (3:30)', correct: ['Half past three', 'half past three', 'Three thirty'] },
      { prompt: "Quarter to seven (अंग्रेज़ी में) (6:45)", correct: ['Quarter to seven', 'quarter to seven', 'Six forty-five'] },
    ],
  },

  mission: {
    title: 'आज का काम',
    task: "कल सुबह घड़ी देखें — अगर पूरे घंटे पर नहीं — तो English में बोलें: \"It's half past seven\" या \"It's quarter to nine\"। आज तीन बार करें।",
    rwenSignoff: "एक मिनट भी बहुत है। कल मिलते हैं।",
  },

  phase8: {
    scenario: "You missed an English-speaking friend's birthday dinner by five minutes — the auto-rickshaw was late and now you're calling to apologise. Explain the timing of what happened: when the auto was supposed to come, when it actually came, and when you arrived.",
    rwenRole: "Megan, 30, your American friend who was hosting. A bit disappointed but understanding. Will ask 'what time?' multiple times.",
    successCriteria: "User uses at least two of: 'half past', 'quarter to/past', 'five past', or 'minutes late/by X minutes' to describe the timeline. Apologises with 'sorry'. Gives a specific arrival time.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;

import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm02-l08-how-much',
  module: 2,
  lesson: 8,
  title: 'How much? — कितने का है?',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "नमस्ते! market में या shop पर — दाम पूछना ज़रूरी है। English में: 'How much?'। साथ में 'It's expensive' / 'It's cheap' सीख लीजिए — bargaining शुरू करने के लिए।",
    culturalNote: "हम India में मोल-भाव में expert हैं — Sarojini से लेकर Chandni Chowk तक। पर अंग्रेज़ी देशों में बहुत जगहों पर fixed prices होती हैं — supermarket, mall, branded stores में bargain नहीं चलता। Tourist markets और flea markets में चलता है, पर tone नरम रखिए — 'It's expensive' मुस्कुराते हुए कहिए, सख़्ती से नहीं। 'Can you do cheaper?' काफ़ी polite तरीक़ा है।",
  },

  chunks: [
    {
      id: 'how_much',
      target: 'How much?',
      native: 'कितने का है?',
      literal: 'How much?',
      emoji: '💰',
      phonetic: 'HOW-much',
      audioRef: null,
    },
    {
      id: 'its_expensive',
      target: "It's expensive",
      native: 'महँगा है',
      literal: 'It-is expensive',
      emoji: '💸',
      phonetic: 'its-eks-PEN-siv',
      audioRef: null,
    },
    {
      id: 'its_cheap',
      target: "It's cheap",
      native: 'सस्ता है',
      literal: 'It-is cheap',
      emoji: '🪙',
      phonetic: 'its-CHEEP',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Currency questions',
    explanation: "'How much' दाम पूछने के लिए। जवाब लम्बा हो सकता है: 'It's twenty dollars' / 'It costs ten pounds'। दाम कम कराने के लिए: 'It's too expensive' या 'Can you do cheaper?'.",
    examples: [
      { target: 'How much is this?',          native: 'यह कितने का है?' },
      { target: 'How much does it cost?',     native: 'इसकी क़ीमत क्या है?' },
      { target: "It's too expensive for me.", native: 'मेरे लिए बहुत महँगा है।' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'English शब्दों को हिन्दी अर्थ से मिलाइए',
      pairs: [
        { left: 'How much?',     right: 'कितने का है?' },
        { left: "It's expensive", right: 'महँगा है' },
        { left: "It's cheap",     right: 'सस्ता है' },
      ],
    },
    {
      type: 'translate',
      instruction: 'English में लिखिए — आपने एक चीज़ market में उठाई है',
      prompt: 'यह कितने का है?',
      correct: ['How much is this?', 'How much is this', 'how much is this?', 'How much is it?', 'How much does this cost?'],
    },
    {
      type: 'fill_blank',
      instruction: 'खाली जगह भरिए — आप दाम ज़्यादा बता रहे हैं',
      sentence: "It's ____ expensive.",
      options: ['too', 'very much', 'so'],
      correct: 'too',
      context: "'Too expensive' = बहुत महँगा। दाम कम कराने का सबसे common तरीक़ा।",
    },
    {
      type: 'build_sentence',
      instruction: 'शब्दों को क्रम में लगाइए — आप दाम पूछ रहे हैं',
      words: ['this', 'How', 'is', 'much'],
      correct: ['How', 'much', 'is', 'this'],
      translation: 'यह कितने का है?',
    },
    {
      type: 'translate',
      instruction: 'English में लिखिए',
      prompt: 'मेरे लिए बहुत महँगा है',
      correct: ["It's too expensive for me", "It's too expensive for me.", "It is too expensive for me", "Too expensive for me", "it's too expensive for me"],
    },
    {
      type: 'translate',
      instruction: 'English में लिखिए — दाम कम करने को कह रहे हैं',
      prompt: 'क्या आप थोड़ा कम कर सकते हैं?',
      correct: ['Can you make it cheaper?', 'Can you make it cheaper', 'can you make it cheaper?', 'Can you do cheaper?', 'Cheaper, please?'],
    },
  ],

  rwenDialogue: {
    intro: "Jaipur के craft market में आपने एक sundar handmade डिब्बा उठाया है। दुकानदार English बोलता है (बहुत से tourists आते हैं)। दाम पूछिए, थोड़ा bargain कीजिए।",
    lines: [
      { speaker: 'npc', target: "Lovely piece, isn't it? Are you interested?", native: 'सुंदर है ना? लेना है?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Yes, how much is it?",   native: 'हाँ, कितने का है?',          correct: true,  feedback: 'बढ़िया — हाँ कह दी और दाम भी पूछ लिया।' },
          { target: "Cheap?",                   native: 'सस्ता है?',     correct: false, feedback: 'अधूरा सवाल — पहले दाम पूछिए, फिर बात कीजिए।' },
          { target: "I don't understand.",     native: 'मुझे समझ नहीं आया।',          correct: false, feedback: 'आप समझ गए — जवाब दीजिए और दाम पूछिए।' },
        ],
      },
      { speaker: 'npc', target: "Forty US dollars.", native: 'चालीस अमेरिकी डॉलर।' },
      {
        speaker: 'rwen',
        rwenLine: "शाबाश! अब आप 'It's too expensive' से दाम कम करवा सकते हैं। शुरुआती दाम पर हाँ कहना — पहली ग़लती।",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'देखे बिना — ऊपर scroll मत कीजिए। English में लिखिए।',
    prompts: [
      { prompt: 'How much? (in English)',      correct: ['How much?', 'How much', 'how much?', 'How much is it?'] },
      { prompt: "It's expensive (in English)", correct: ["It's expensive", "It's expensive.", "It is expensive", "it's expensive"] },
    ],
  },

  mission: {
    title: 'आज का काम',
    task: "आज किसी app पर, online shop पर, या phone call पर एक चीज़ का दाम पूछिए English में — 'How much?' से शुरू कीजिए। दाम सुनिए, react कीजिए।",
    rwenSignoff: "जो दाम पूछता है, वो ठगा नहीं जाता। मिलते हैं कल।",
  },

  phase8: {
    scenario: "You're at a Jaipur craft market and a tourist comes to your stall — but reverse roles for practice: YOU are the buyer asking the English-speaking vendor about a stone carving. Ask the price, push back if it's expensive, and either buy or walk away politely.",
    rwenRole: "James, 38, a stone carver and stall owner in Jaipur who deals with tourists in English. Friendly, will start high, will negotiate. Speaks plain English.",
    successCriteria: "User asks 'How much is it?', uses 'It's too expensive' or 'Can you make it cheaper?' to negotiate, either accepts a price or politely declines ('Maybe later' / 'No, thank you'). Doesn't agree to the first price silently.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;

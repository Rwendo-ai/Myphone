import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm09-l01-where-is',
  module: 9,
  lesson: 1,
  title: 'Where is...? — कहाँ है?',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "London पहुँच गए, NYC या airport पर — पहला सवाल हमेशा: 'Where is...?' (कहाँ है?)। यह सवाल आपको lost नहीं रहने देता।",
    culturalNote: "India में 'भैया, station कहाँ है?' पूछने में कोई दिक़्क़त नहीं — auto वाला, चायवाला, राहगीर — सब रुककर बताते हैं। UK/US में लोग जल्दी में हैं — पर अगर 'Excuse me' से शुरू करें, हमेशा help करते हैं। Indian Tourism में visitors locals को बहुत कुछ पूछते — आप वहाँ helpful बने थे, अब foreign में आप पूछने वाले हैं। Polite formula: 'Excuse me' + 'where is the ___?' = सब काम करता है।",
  },

  chunks: [
    {
      id: 'where_is_the_bank',
      target: 'Where is the bank?',
      native: 'Bank कहाँ है?',
      literal: 'Bank kahaan hai?',
      emoji: '🏦',
      phonetic: 'WHAIR-iz-thuh-BANK',
      audioRef: null,
    },
    {
      id: 'excuse_me_toilets',
      target: 'Excuse me, the toilets?',
      native: 'माफ़ कीजिए, toilet कहाँ है?',
      literal: 'Maaf keejiye, toilet kahaan hai',
      emoji: '🙏',
      phonetic: 'ek-SKYOOZ-mee-thuh-TOY-lets',
      audioRef: null,
    },
    {
      id: 'over_there',
      target: 'Over there',
      native: 'वहाँ',
      literal: 'Wahaan',
      emoji: '👉',
      phonetic: 'OH-ver-THAIR',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Locations — asking for a place',
    explanation: "Polite formula: 'Excuse me' + 'Where is the ___?'। 'The' लगता है क्योंकि specific जगह — एक bank, एक toilet। Quick answer: 'Over there' (वहाँ), 'Down the road' (नीचे की तरफ़)।",
    examples: [
      { target: 'Where is the bank?',           native: 'Bank कहाँ है?' },
      { target: 'Excuse me, the toilets?',      native: 'माफ़ कीजिए, toilet?' },
      { target: 'Where is the metro station?',   native: 'Metro station कहाँ है?' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'अंग्रेज़ी और हिंदी मिलाएँ',
      pairs: [
        { left: 'Where is the bank?',      right: 'Bank कहाँ है?' },
        { left: 'Excuse me, the toilets?', right: 'माफ़ कीजिए, toilet?' },
        { left: 'Over there',              right: 'वहाँ' },
      ],
    },
    {
      type: 'translate',
      instruction: 'अंग्रेज़ी में लिखें — Mumbai में bank ढूँढ रहे',
      prompt: 'Bank कहाँ है?',
      correct: [
        'Where is the bank?',
        'Where is the bank',
        'where is the bank?',
        'Excuse me, where is the bank?',
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'सवाल भरें',
      sentence: 'Excuse me, ____ is the metro station?',
      options: ['Where', 'When', 'Why'],
      correct: 'Where',
      context: "जगह का सवाल 'Where' से।",
    },
    {
      type: 'build_sentence',
      instruction: 'Hotel कहाँ है पूछना',
      words: ['the', 'is', 'Where', 'hotel'],
      correct: ['Where', 'is', 'the', 'hotel'],
      translation: 'Hotel कहाँ है?',
    },
    {
      type: 'translate',
      instruction: 'अंग्रेज़ी में लिखें — किसी ने जगह दिखाई',
      prompt: 'वहाँ',
      correct: ['Over there', 'Over there.', 'over there', "It's over there", "It's over there."],
    },
    {
      type: 'translate',
      instruction: 'अंग्रेज़ी में लिखें — polite तरीक़े से',
      prompt: 'माफ़ कीजिए, toilet कहाँ है?',
      correct: [
        'Excuse me, the toilets?',
        'Excuse me, where are the toilets?',
        'Excuse me, where is the toilet?',
        'Excuse me, the bathroom?',
        'excuse me, the toilets?',
      ],
    },
  ],

  rwenDialogue: {
    intro: "London Underground के Oxford Circus station पर हैं। Lost हो गए। राहगीर से पूछें।",
    lines: [
      { speaker: 'npc', target: "You alright? You look a bit lost.", native: 'आप ठीक हैं? Lost लग रहे।' },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Excuse me, where is the nearest tube station?', native: 'माफ़ कीजिए, सबसे क़रीबी tube station कहाँ है?', correct: true,  feedback: 'बढ़िया — "Excuse me" से शुरू, polite।' },
          { target: 'Tube?',                                          native: 'Tube?',                                          correct: false, feedback: 'अधूरा — पूरा सवाल पूछें।' },
          { target: 'I am lost help.',                                  native: 'मैं lost हूँ help।',                          correct: false, feedback: "Help कैसी चाहिए नहीं बताया। 'Where is the ___?' पूछें।" },
        ],
      },
      { speaker: 'npc', target: "Oh, just down there on the right — Bond Street, two minutes.", native: 'अरे, बस नीचे दाएँ — Bond Street, दो मिनट।' },
      {
        speaker: 'rwen',
        rwenLine: "बढ़िया! 'Where is the ___?' से travel शुरू।",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'बिना ऊपर देखे, याद से लिखें।',
    prompts: [
      { prompt: 'Where is the bank? (अंग्रेज़ी में)', correct: ['Where is the bank?', 'Where is the bank', 'where is the bank?', 'Excuse me, where is the bank?'] },
      { prompt: 'Over there (अंग्रेज़ी में)',          correct: ['Over there', 'Over there.', 'over there', "It's over there"] },
    ],
  },

  mission: {
    title: 'आज का काम',
    task: "अपने shहर में lost हो गए हो ऐसा सोचें। कल्पना में पूछें — 'Excuse me, where is the ___?' तीन बार। आज ज़ोर से बोलें।",
    rwenSignoff: "जो पूछता है, वो खोता नहीं। कल मिलते हैं।",
  },

  phase8: {
    scenario: "You're a Hindi-speaking traveller who just exited Oxford Circus tube station in central London. You need to find the nearest Pret A Manger to grab a sandwich, but you're disoriented and don't have data. Stop a passer-by and ask.",
    rwenRole: "James, 38, a London local on his lunch break. Friendly but a bit rushed. Speaks clear British English. Will give a quick directional answer.",
    successCriteria: "User opens with 'Excuse me', asks 'Where is the ___?' about a tube station, Pret, or coffee shop, follows up by understanding 'down there', 'on the right', or 'two minutes', and thanks him.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;

import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm03-l09-asking-them',
  module: 3,
  lesson: 9,
  title: 'Asking about them — सामने वाले से पूछना',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "अच्छी बातचीत दोनों तरफ़ से होती है — सिर्फ़ तुम बोलते रहो तो ठीक नहीं। आज सीखेंगे — सामने वाले से सवाल पूछना: 'Tell me about yourself', 'What's your story?', 'Where did you grow up?'।",
    culturalNote: "हिंदी में किसी से उसका हाल पूछना सहज है — पर अंग्रेज़ी में सवालों का तरीक़ा थोड़ा अलग है। 'Tell me about yourself' professional setting (interview, conference) में काम आता है। 'What's your story?' दोस्तों के बीच अच्छा है। ध्यान दो — 'Where did you grow up?' में 'did' ज़रूरी है (past tense) — 'Where you grow up?' अधूरा है।",
  },

  chunks: [
    {
      id: 'tell_me_about_yourself',
      target: 'Tell me about yourself',
      native: 'अपने बारे में बताओ',
      literal: 'Tell me about yourself',
      emoji: '👂',
      phonetic: 'टेल-मी-अबाउट-योर-सेल्फ',
      audioRef: null,
    },
    {
      id: 'whats_your_story',
      target: "What's your story?",
      native: 'तुम्हारी कहानी क्या है?',
      literal: 'What is your story?',
      emoji: '📖',
      phonetic: 'व्हट्स-योर-स्टोरी',
      audioRef: null,
    },
    {
      id: 'where_did_you_grow_up',
      target: 'Where did you grow up?',
      native: 'तुम कहाँ बड़े हुए?',
      literal: 'Where did you grow up?',
      emoji: '🏡',
      phonetic: 'व्हेयर-डिड-यू-ग्रो-अप',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Open questions',
    explanation: "Open questions (खुले सवाल) 'What', 'Where', 'How', 'Tell me ...' से शुरू होते हैं। इनका जवाब 'yes/no' नहीं, लंबा होता है। past tense के सवाल में 'did' लगाना ज़रूरी: 'Where did you grow up?'। 'Tell me about ...' में सवाल का form नहीं चाहिए — direct invitation है।",
    examples: [
      { target: 'Tell me about yourself',     native: 'अपने बारे में बताओ' },
      { target: "What's your story?",          native: 'तुम्हारी कहानी क्या है?' },
      { target: 'Where did you grow up?',      native: 'तुम कहाँ बड़े हुए?' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'सवाल और अर्थ मिलाओ',
      pairs: [
        { left: 'Tell me about yourself', right: 'अपने बारे में बताओ' },
        { left: "What's your story?",      right: 'तुम्हारी कहानी क्या है?' },
        { left: 'Where did you grow up?',  right: 'तुम कहाँ बड़े हुए?' },
      ],
    },
    {
      type: 'translate',
      instruction: 'अंग्रेज़ी में लिखो',
      prompt: 'अपने बारे में बताओ',
      correct: ['Tell me about yourself', 'tell me about yourself', 'Tell me about yourself.', 'tell me about yourself.'],
    },
    {
      type: 'translate',
      instruction: 'अंग्रेज़ी में लिखो',
      prompt: 'तुम कहाँ बड़े हुए?',
      correct: ['Where did you grow up?', 'where did you grow up?', 'Where did you grow up'],
    },
    {
      type: 'fill_blank',
      instruction: 'past tense का सवाल पूरा करो',
      sentence: "Where ____ you grow up?",
      options: ['did', 'do', 'are'],
      correct: 'did',
      context: "'grow up' (past) के साथ 'did' लगता है।",
    },
    {
      type: 'build_sentence',
      instruction: 'सवाल बनाओ',
      words: ['Tell', 'me', 'about', 'yourself'],
      correct: ['Tell', 'me', 'about', 'yourself'],
      translation: 'अपने बारे में बताओ',
    },
    {
      type: 'build_sentence',
      instruction: 'कहानी का सवाल बनाओ',
      words: ["What's", 'your', 'story'],
      correct: ["What's", 'your', 'story'],
      translation: 'तुम्हारी कहानी क्या है?',
    },
  ],

  rwenDialogue: {
    intro: "तुम Singapore conference में coffee break पर एक delegate से मिले हो। वो अपना परिचय दे चुका है — अब तुम्हारी बारी है उससे पूछने की।",
    lines: [
      { speaker: 'npc', target: "So that's me. And you?", native: 'तो ये मेरी कहानी। और तुम?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Tell me a bit more about yourself first — where did you grow up?", native: 'पहले अपने बारे में थोड़ा और बताओ — कहाँ बड़े हुए?', correct: true,  feedback: "बढ़िया — सवाल लौटा दिया, सुनने का इरादा भी दिख गया।" },
          { target: "Me too.",                                                            native: 'मैं भी।',                                              correct: false, feedback: "बहुत छोटा — सवाल के बिना बातचीत रुक जाएगी।" },
          { target: "Where you grow up?",                                                 native: 'तुम कहाँ बड़े हुए?',                                    correct: false, feedback: "'did' छूट गया — 'Where did you grow up?' सही है।" },
        ],
      },
      { speaker: 'npc', target: "Oh — I grew up in Penang, actually.", native: 'अरे — मैं असल में Penang में बड़ा हुआ।' },
      {
        speaker: 'rwen',
        rwenLine: "शाबाश! बातचीत संतुलित रखी — पहले सुना, फिर सवाल लौटाया। यही अच्छी अंग्रेज़ी small talk है।",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'बिना पीछे देखे, अंग्रेज़ी में लिखो।',
    prompts: [
      { prompt: 'अपने बारे में बताओ (in English)',         correct: ['Tell me about yourself', 'tell me about yourself', 'Tell me about yourself.', 'tell me about yourself.'] },
      { prompt: 'तुम कहाँ बड़े हुए? (in English)',          correct: ['Where did you grow up?', 'where did you grow up?', 'Where did you grow up'] },
    ],
  },

  mission: {
    title: 'आज का काम',
    task: "अगली अंग्रेज़ी बातचीत में दो open questions पूछो — 'Tell me about yourself' या 'Where did you grow up?'। past tense में 'did' लगाना मत भूलना।",
    rwenSignoff: "बहुत अच्छे। कल फिर मिलते हैं।",
  },

  phase8: {
    scenario: "You've just exchanged hellos with someone new at a tech meetup in Singapore. They've already shared a bit about themselves — now it's your turn to turn the small talk back to them.",
    rwenRole: "Wei Ming, 30, a Malaysian engineer at the meetup. Open, willing to share more if asked.",
    successCriteria: "User asks at least two open questions ('Tell me about ...', 'Where did you ...?', 'What's your ...?'), uses 'did' correctly in past-tense questions, and reacts to one of Wei Ming's answers before asking the next.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;

import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm08-l10-conversation',
  module: 8,
  lesson: 10,
  title: 'A day-in-life conversation — My day in English',
  estimatedMinutes: 7,
  xpReward: 50,

  hook: {
    rwenLine: "Module 8 ख़त्म! आज सब verbs एक साथ: 'I am', 'I have', 'I do', 'I make', 'I go', 'I come', 'I want', 'I need', past ('went, saw, had'), future ('will, going to')। एक पूरे दिन की बातचीत।",
    culturalNote: "Module 8 ने आपके English वाक्यों की SOV → SVO transformation की। हिंदी में 'मैं रोज़ ऑफ़िस जाता हूँ' — verb अंत में। English में 'I go to the office every day' — verb बीच में। यह सबसे बड़ी छलांग थी। अब past (went, saw, had, was) और future (will, going to) भी आपके पास हैं। पूरे A2 का verb-backbone आपका अपना। London zoom call हो या US meeting — आप अब time-travel कर सकते हैं वाक्यों में।",
  },

  chunks: [
    {
      id: 'review_morning_routine',
      target: 'I wake up at 6, take a shower, and have breakfast.',
      native: 'मैं 6 बजे उठता हूँ, नहाता हूँ, और नाश्ता करता हूँ।',
      literal: 'Morning routine',
      emoji: '🌅',
      phonetic: 'ay-WAYK-UP-at-SIX',
      audioRef: null,
    },
    {
      id: 'review_workday',
      target: 'I go to work, have meetings, and make plans.',
      native: 'मैं ऑफ़िस जाता हूँ, meetings होती हैं, और plans बनाता हूँ।',
      literal: 'Workday',
      emoji: '💼',
      phonetic: 'ay-GOH-too-WERK',
      audioRef: null,
    },
    {
      id: 'review_past_future',
      target: 'Yesterday I went home early; tomorrow I will work late.',
      native: 'कल मैं जल्दी घर आया; कल मैं देर तक काम करूँगा।',
      literal: 'Past + future',
      emoji: '🔄',
      phonetic: 'YES-ter-day-ay-WENT',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Verb fluency — Full day flow',
    explanation: "एक पूरा दिन: PRESENT ('I wake up', 'I go to work')। WANT/NEED ('I'd like coffee', 'I need a break')। PAST ('Yesterday I went/saw/had/was')। FUTURE ('Tomorrow I will/going to')। ये verbs आपकी English की रीढ़।",
    examples: [
      { target: 'I wake up at 6 and go to work at 8.',                 native: '6 बजे उठता हूँ, 8 बजे ऑफ़िस जाता हूँ।' },
      { target: 'Yesterday I had a meeting; it was long.',             native: 'कल meeting थी; लंबी थी।' },
      { target: "Tomorrow I'll see my friend, then I'll come home.",   native: 'कल दोस्त से मिलूँगा, फिर घर आऊँगा।' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'दिन के parts मिलाएँ',
      pairs: [
        { left: 'I wake up at 6',          right: 'सुबह' },
        { left: 'I have a meeting at 10',  right: 'दोपहर' },
        { left: 'I cook dinner at 7',      right: 'शाम' },
      ],
    },
    {
      type: 'translate',
      instruction: 'अंग्रेज़ी में लिखें — morning + work',
      prompt: 'मैं 6 बजे उठता हूँ, 8 बजे ऑफ़िस जाता हूँ।',
      correct: [
        'I wake up at 6, I go to work at 8.',
        'I wake up at 6 and go to work at 8.',
        'I wake up at 6 and I go to work at 8.',
        'i wake up at 6, i go to work at 8.',
      ],
    },
    {
      type: 'translate',
      instruction: 'अंग्रेज़ी में लिखें — past tense',
      prompt: 'कल मैंने दोस्त देखा, अच्छा था।',
      correct: [
        'Yesterday I saw a friend, it was great.',
        'Yesterday I saw a friend, it was good.',
        'I saw a friend yesterday, it was great.',
        'Yesterday I saw my friend, it was great.',
        'yesterday i saw a friend, it was great.',
      ],
    },
    {
      type: 'translate',
      instruction: 'अंग्रेज़ी में लिखें — future plan',
      prompt: 'कल मैं ऑफ़िस जाऊँगा, फिर शाम को खाना बनाऊँगा।',
      correct: [
        "Tomorrow I will go to work, then I'll cook dinner in the evening.",
        "Tomorrow I will go to work and cook dinner in the evening.",
        "Tomorrow I'll go to work, then I'll cook dinner in the evening.",
        "Tomorrow I'm going to go to work, then I'll cook dinner.",
        'tomorrow i will go to work, then i will cook dinner.',
      ],
    },
    {
      type: 'build_sentence',
      instruction: 'दिन का flow: सुबह → काम → शाम',
      words: ['work,', 'I', 'wake', 'I', 'and', 'come', 'home.', 'go', 'I', 'up,', 'to'],
      correct: ['I', 'wake', 'up,', 'I', 'go', 'to', 'work,', 'and', 'I', 'come', 'home.'],
      translation: 'मैं उठता हूँ, ऑफ़िस जाता हूँ, और घर आता हूँ।',
    },
    {
      type: 'fill_blank',
      instruction: 'Past tense सही चुनें',
      sentence: 'Yesterday I _____ a long meeting and it _____ tiring.',
      options: ['had / was', 'have / is', 'has / were'],
      correct: 'had / was',
      context: "Past: 'have' → 'had'; 'is' → 'was' (singular meeting)।",
    },
  ],

  rwenDialogue: {
    intro: "London में English-speaking दोस्त के साथ dinner पर। पूरा दिन — सुबह से रात — और कल-कल भी।",
    lines: [
      { speaker: 'npc', target: "So, walk me through your day. Morning to night.", native: 'अपना दिन बताइए। सुबह से रात तक।' },
      {
        speaker: 'user',
        userChoices: [
          { target: "I wake up at 6, take a shower, and have breakfast around 6:30. Then I go to work at 8 — I had a big meeting yesterday, it was tough. Tomorrow I'll work from home, then I'll cook dinner.", native: '6 बजे उठता हूँ, नहाता हूँ, 6:30 के आसपास नाश्ता। फिर 8 बजे ऑफ़िस जाता हूँ — कल बड़ी meeting थी, मुश्किल थी। कल घर से काम करूँगा, फिर खाना बनाऊँगा।', correct: true, feedback: "बढ़िया! Morning routine (present), past (yesterday — 'had', 'was'), future (tomorrow — 'will work', 'will cook')। पूरी day-in-life।" },
          { target: "Wake 6. Shower. Eat. Go work. Yesterday meeting tough. Tomorrow home cook.", native: 'उठा 6। नहाया। खाया। काम गया। कल meeting मुश्किल। कल घर खाना।', correct: false, feedback: "शब्द हैं पर structure नहीं। 'I' + verbs (is/was, will): 'I wake up... I go... yesterday I HAD... tomorrow I WILL...'।" },
        ],
      },
      { speaker: 'npc', target: "Wow, you're busy! What do you usually do to relax?", native: 'व्यस्त लगते हो! आराम कैसे करते हैं?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "In the evenings I watch TV or read. I'd like to see more friends, but I need more time!", native: 'शाम को TV देखता हूँ या पढ़ता हूँ। और दोस्तों से मिलना चाहता हूँ, पर समय चाहिए!', correct: true, feedback: "बढ़िया — 'I watch TV', \"I'd like\", 'I need' — Module 8 के verbs एक वाक्य में।" },
          { target: "I see TV. I want friends. No time.", native: 'TV देखता। दोस्त चाहिए। समय नहीं।', correct: false, feedback: "'I WATCH TV' (see नहीं), \"I'D LIKE to see friends\", 'I NEED time'।" },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Module 8 पूरा! Be/have/do/make/go/come/want/need/wake/cook/watch — और past (went/saw/had/was) + future (will/going to)। आप अब असल English बोलते हैं।",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'बिना ऊपर देखे, याद से लिखें।',
    prompts: [
      { prompt: 'Yesterday I went home early (अंग्रेज़ी में)', correct: ['Yesterday I went home early', 'Yesterday I went home early.', 'I went home early yesterday.', 'yesterday i went home early.'] },
      { prompt: 'Tomorrow I will work from home (अंग्रेज़ी में)', correct: ['Tomorrow I will work from home', 'Tomorrow I will work from home.', "Tomorrow I'll work from home.", "I'll work from home tomorrow.", "I'm going to work from home tomorrow.", 'tomorrow i will work from home.'] },
    ],
  },

  mission: {
    title: 'Module 8 का अंतिम काम — Day in life',
    task: "आज रात पाँच English वाक्य ज़ोर से: (1) 'I woke up at __' (past), (2) 'I went to __' (past), (3) 'It was __' (past), (4) 'Tomorrow I will __' (future), (5) 'I'm going to __' (future)। पूरा दिन English में।",
    rwenSignoff: "Module 8 पूरा — verbs आपकी backbone। सब English speakers यही use करते। Module 9 — directions और travel।",
  },

  phase8: {
    scenario: "Capstone. Dinner with an English-speaking friend in Mumbai. Walk through your full day — morning, work, past tense (yesterday), future (tomorrow), and evening routine. Should span 4 minutes.",
    rwenRole: "Olivia, 35, journalist, curious about your life. Asks lots of follow-ups politely.",
    successCriteria: "Student combines PRESENT (I wake up, I go to work, I cook dinner), PAST (Yesterday I went/saw/had/was), FUTURE (Tomorrow I will/going to). Uses 'I'd like' or 'I need', closes politely.",
    estimatedMinutes: 4,
    bonusXp: 5,
  },
};

export default lesson;

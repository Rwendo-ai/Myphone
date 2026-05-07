import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm05-l09-family-stories',
  module: 5,
  lesson: 9,
  title: 'Telling family stories — परिवार की कहानियाँ',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "हिंदी कहानियों की भाषा है — 'बहुत साल पहले...', 'दादी कहती थीं...', 'पापा हमेशा कहते हैं...'। English में same: 'A long time ago...', 'My grandmother used to...', 'He always says...'। कहानियाँ सब जगह पुल बनाती हैं।",
    culturalNote: "Indian families में कहानियाँ संस्कार पहुँचाने का तरीक़ा हैं — दादी की रामायण, नानी का स्वतंत्रता-संग्राम, पिताजी का छात्र-जीवन। English में 'used to' (किया करते थे) past habit दिखाता है — कुछ जो पहले होता था, अब नहीं। ये structure हिंदी में नहीं — हम 'किया करते थे' से वही पकड़ते हैं। English-speaking colleague को जब आप 'My grandmother used to make samosas every Sunday' कहते हैं, वो आपके बचपन की रसोई में पहुँच जाता है। यह translation नहीं — संस्कृति का transfer है।",
  },

  chunks: [
    {
      id: 'long_time_ago',
      target: 'A long time ago',
      native: 'बहुत साल पहले',
      literal: 'Bahut saal pehle',
      emoji: '🕰️',
      phonetic: 'uh-LAWNG-tahym-uh-GOH',
      audioRef: null,
    },
    {
      id: 'used_to',
      target: 'My grandmother used to...',
      native: 'मेरी दादी किया करती थीं...',
      literal: 'Meri dadi kiya karti thin (past habitual)',
      emoji: '👵🏽',
      phonetic: 'mahy GRAND-muh-thuh YOOST-too',
      audioRef: null,
    },
    {
      id: 'always_says',
      target: 'He always says...',
      native: 'वो हमेशा कहते हैं...',
      literal: 'Wo hamesha kehte hain',
      emoji: '💬',
      phonetic: 'hee AWL-wayz sez',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Past habits — used to / always says',
    explanation: "अंग्रेज़ी में 'used to + verb' past habit दिखाता है — कुछ जो पहले अक्सर होता था पर अब नहीं: 'My grandmother used to sing' (दादी गाया करती थीं — अब नहीं)। 'Always says' (present) — आदमी अभी भी कहता है। 'Used to say' — अब नहीं कहता। ध्यान दें: 'used to + verb' में verb पर 's' नहीं — 'he used to say' सही, 'he used to says' ग़लत।",
    examples: [
      { target: 'A long time ago, my grandmother lived in the village.', native: 'बहुत साल पहले, दादी गाँव में रहती थीं।' },
      { target: 'My grandfather used to tell us stories.',                native: 'दादाजी हमें कहानियाँ सुनाया करते थे।' },
      { target: 'My uncle always says: \'Patience is power.\'',           native: 'मेरे चाचा हमेशा कहते हैं: "धीरज ही शक्ति है।"' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'अंग्रेज़ी शब्दों को हिंदी अर्थ से मिलाएँ',
      pairs: [
        { left: 'A long time ago',         right: 'बहुत साल पहले' },
        { left: 'My grandmother used to',  right: 'दादी किया करती थीं' },
        { left: 'He always says',          right: 'वो हमेशा कहते हैं' },
      ],
    },
    {
      type: 'translate',
      instruction: 'अंग्रेज़ी में लिखें',
      prompt: 'दादाजी रात को आग के पास हमें कहानियाँ सुनाया करते थे।',
      correct: ['My grandfather used to tell us stories by the fire at night.', 'My grandfather used to tell us stories by the fire in the evening.', 'My grandfather used to tell us stories at night by the fire.'],
    },
    {
      type: 'translate',
      instruction: 'अंग्रेज़ी में लिखें',
      prompt: 'पापा हमेशा कहते हैं: "मेहनत ही असली पूँजी है।"',
      correct: ["My father always says: 'Work is not a fool's answer.'", 'My father always says: "Work is not a fool\'s answer."', "My father always says, 'Work is not a fool's answer.'"],
    },
    {
      type: 'build_sentence',
      instruction: 'वाक्य बनाएँ: "A long time ago, we lived in Lucknow"',
      words: ['Lucknow.', 'A', 'lived', 'long', 'time', 'in', 'we', 'ago,'],
      correct: ['A', 'long', 'time', 'ago,', 'we', 'lived', 'in', 'Lucknow.'],
      translation: 'बहुत साल पहले, हम लखनऊ में रहते थे',
    },
    {
      type: 'fill_blank',
      instruction: "खाली जगह भरें — 'used to' और 'always' के बीच",
      sentence: 'My grandmother _____ sing every Sunday at the temple — until she got too old.',
      options: ['used to', 'always', 'never'],
      correct: 'used to',
      context: "'Used to' past habit जो अब बंद हो गई — perfect यहाँ क्योंकि दादी अब नहीं गातीं। 'Always' present continuous habit के लिए।",
    },
    {
      type: 'multiple_choice',
      instruction: 'सही चुनें',
      question: "आप दादाजी की याद share कर रहे हैं — वो गुज़र चुके हैं। उन्होंने आपको cricket खेलना सिखाया था। कौन-सा वाक्य सबसे natural है?",
      options: [
        { text: "My grandfather used to take me to play cricket every Saturday.", correct: true },
        { text: "My grandfather always takes me to play cricket.",                  correct: false },
        { text: "My grandfather take me cricket past time.",                         correct: false },
      ],
      explanation: "जब वो नहीं हैं, 'used to' सही है — past habit जो ख़त्म हो गई। 'Always takes' (present) ग़लत क्योंकि वो अब नहीं हैं।",
    },
  ],

  rwenDialogue: {
    intro: "आप English-language storytelling night में हैं। Host ने मौक़ा दिया कि आप अपनी पसंदीदा परिवार-कहानी सुनाएँ।",
    lines: [
      { speaker: 'npc', target: "Tell us a family story — anything that's stayed with you.", native: 'परिवार की एक कहानी सुनाइए — जो भी मन में रह गई हो।' },
      {
        speaker: 'user',
        userChoices: [
          { target: "A long time ago, my grandmother used to make rotis every Saturday. She always said: 'A full belly makes a quiet child.' I still hear her voice.", native: 'बहुत साल पहले, मेरी दादी हर शनिवार रोटियाँ बनाया करती थीं। वो हमेशा कहती थीं: "भरा पेट चुप बच्चे का राज़ है।" आज भी उनकी आवाज़ सुनाई देती है।', correct: true, feedback: "बढ़िया — 'A long time ago' (शुरुआत), 'used to make' (past habit), 'always said' (उनकी कहावत), 'I still hear' (अंदर का जुड़ाव)। पूरी कहानी English में।" },
          { target: "Long ago grandmother make rotis always say full belly quiet child.",                                                                              native: 'बहुत पहले दादी बनाती रोटी हमेशा कहती पेट भरा बच्चा चुप।',                                                                              correct: false, feedback: "शब्द हैं पर flow नहीं — 'used to', 'always said', 'I still hear' से कहानी बनाएँ।" },
          { target: "Dadi rotiyan banati thi.",                                                                                                                       native: 'दादी रोटियाँ बनाती थीं।',                                                                                                                                    correct: false, feedback: "हिंदी में — सब English में बदलें: 'My grandmother used to make rotis.'" },
        ],
      },
      { speaker: 'npc', target: "That's beautiful — thank you for sharing.", native: 'बहुत प्यारा — share करने के लिए धन्यवाद।' },
      {
        speaker: 'rwen',
        rwenLine: "बहुत बढ़िया! 'Used to' से past habit और 'always said' से उनकी आवाज़ — दादी English में जिल गईं।",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'बिना ऊपर देखे।',
    prompts: [
      { prompt: 'My grandmother used to (अंग्रेज़ी में)',  correct: ['My grandmother used to', 'my grandmother used to'] },
      { prompt: 'A long time ago (अंग्रेज़ी में)',          correct: ['A long time ago', 'a long time ago', 'A long time ago,', 'a long time ago,'] },
    ],
  },

  mission: {
    title: 'आज का काम',
    task: "परिवार की एक कहानी सोचें — जो दिल में रह गई। Diary या phone notes में English में लिखें: 'A long time ago, my [person] used to ___. He/She always said: \"___\".' ज़ोर से पढ़ें।",
    rwenSignoff: "कल — capstone! परिवार पर पूरी English बातचीत।",
  },

  phase8: {
    scenario: "You're at an English-language storytelling night. The host invites you to share a real family story — something that has stayed with you. Tell it with detail: time, person, what they did, what they used to say.",
    rwenRole: "Maria, the storytelling night host. Warm, attentive. Asks gentle follow-ups: 'How old were you?', 'What did her voice sound like?', 'Do you still cook that recipe?'",
    successCriteria: "User uses 'A long time ago' OR 'When I was young'. Uses 'used to + verb' at least once. Quotes a family member with 'always said' or 'used to say'. Tells a coherent mini-story (3+ sentences). Avoids Hindi.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;

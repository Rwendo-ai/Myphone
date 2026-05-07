import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm05-l10-conversation',
  module: 5,
  lesson: 10,
  title: 'A family conversation — Capstone',
  estimatedMinutes: 7,
  xpReward: 50,

  hook: {
    rwenLine: "Module 5 ख़त्म! अब आप जानते हैं माँ-पिताजी, भैया-दीदी, बच्चे, दादा-दादी/नाना-नानी, चाचा-मामा, सास-ससुर, दोस्त, और परिवार के verbs (visit, call, miss)। आज का लक्ष्य: सब एक लंबी बातचीत में।",
    culturalNote: "Indian परिवार English से ज़्यादा rich है — हर रिश्ते का अपना नाम, अपना आदर। इस module में आपने कुछ खोया नहीं — आपने हिंदी की बारीकी English में पहुँचाने का तरीक़ा सीखा। जब आप 'my aunt — my father's sister' कहते हैं, आप 'बुआ' का मतलब बता रहे हैं — हिंदी की रिश्ते-शब्दावली English में जिला रहे हैं। दो भाषाओं को जानना मतलब दो दुनियाओं को जोड़ना।",
  },

  chunks: [
    {
      id: 'family_intro',
      target: "I have a big family. My parents and my two siblings live in Delhi.",
      native: 'मेरा बड़ा परिवार है। माता-पिता और मेरे दो भाई-बहन दिल्ली में रहते हैं।',
      literal: 'big family, parents, siblings',
      emoji: '👨‍👩‍👧‍👦',
      phonetic: 'ay hav uh BIG FAM-uh-lee...',
      audioRef: null,
    },
    {
      id: 'extended_family',
      target: "My grandmother lives in the village, and my aunt — my father's sister — lives in Jaipur.",
      native: 'मेरी दादी गाँव में रहती हैं, और मेरी बुआ — पिता की बहन — जयपुर में रहती हैं।',
      literal: 'grandmother, aunt with side clarification',
      emoji: '🏡',
      phonetic: 'mahy GRAND-muh-thuh livz...',
      audioRef: null,
    },
    {
      id: 'family_actions',
      target: "I visit them every month, I call my mother every day, and I miss my brother who lives abroad.",
      native: 'मैं हर महीने उनसे मिलने जाता हूँ, रोज़ माँ को फ़ोन करता हूँ, और भाई की याद आती है जो विदेश में रहता है।',
      literal: 'visit, call, miss — combined',
      emoji: '📞',
      phonetic: 'ay VIH-zit them...',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Family in flowing speech — capstone',
    explanation: "परिवार पर बातचीत में आप सब use करते हैं: possessives (my, our), kinship terms (mother, father, siblings, grandparents, aunts, uncles, in-laws), clarifiers (older/younger, on my mother's side), idioms (like family), past habits (used to), verbs (visit, call, miss)। Structure: 'I have...' से शुरू करें, detail (names, places) जोड़ें, और पता करते हुए (zviuro/feelings) बंद करें।",
    examples: [
      { target: 'I have a big family — my parents, two siblings, and many cousins.',     native: 'मेरा बड़ा परिवार है — माता-पिता, दो भाई-बहन, और बहुत सारे cousins।' },
      { target: "My grandmother used to live with us; she's like a second mother.",       native: 'मेरी दादी हमारे साथ रहा करती थीं; वो दूसरी माँ जैसी हैं।' },
      { target: "I miss my brother — I call him every Sunday.",                            native: 'भाई की याद आती है — हर रविवार फ़ोन करता हूँ।' },
    ],
  },

  exercises: [
    {
      type: 'fill_blank',
      instruction: 'सही शब्द चुनें — पूरा paragraph',
      sentence: "I have two _____ — an older brother and a _____ sister. My _____ live in Delhi.",
      options: ['siblings / younger / parents', 'siblings / older / children', 'children / younger / parents'],
      correct: 'siblings / younger / parents',
      context: "Siblings (भाई-बहन), younger (छोटी — older brother के साथ contrast में), parents (माता-पिता)।",
    },
    {
      type: 'translate',
      instruction: 'अंग्रेज़ी में लिखें (पूरे परिवार पर)',
      prompt: 'मेरी दादी कहती थीं कि जिगरी दोस्त परिवार जैसा होता है।',
      correct: ['My grandmother used to say that a best friend is like family.', 'My grandmother used to say a best friend is like family.', 'My grandmother used to say that your best friend is like family.'],
    },
    {
      type: 'translate',
      instruction: 'अंग्रेज़ी में लिखें',
      prompt: 'मेरी बुआ — पिता की बहन — UK में रहती हैं, और मुझे उनकी याद आती है।',
      correct: ["My aunt — my father's sister — lives in the UK, and I miss her.", "My aunt, my father's sister, lives in the UK, and I miss her.", "My aunt — my father's sister — lives abroad, and I miss her."],
    },
    {
      type: 'build_sentence',
      instruction: 'वाक्य बनाएँ: "My in-laws are visiting us this weekend"',
      words: ['weekend.', 'My', 'this', 'visiting', 'are', 'in-laws', 'us'],
      correct: ['My', 'in-laws', 'are', 'visiting', 'us', 'this', 'weekend.'],
      translation: 'मेरे सास-ससुर इस weekend हमसे मिलने आ रहे हैं',
    },
    {
      type: 'translate',
      instruction: 'अंग्रेज़ी में लिखें — पूरे Module 5 का mix',
      prompt: 'मेरे मामा — माँ के भाई — हमेशा कहते हैं: "परिवार ही ताक़त है।"',
      correct: ['My uncle, my mother\'s brother, always says: "Family is strength."', "My uncle — my mother's brother — always says: 'Family is strength.'", 'My maternal uncle always says: "Family is strength."'],
    },
    {
      type: 'multiple_choice',
      instruction: 'चुनें वो वाक्य जो परिवार की पूरी nuance पकड़ता हो',
      question: 'विदेशी दोस्त ने पूछा: "Tell me about your family." कौन-सा जवाब A2-level family vocabulary दिखाता है?',
      options: [
        { text: "I have a big family. My parents live in Delhi with my younger sister. My older brother is abroad — I miss him. My grandmother — my father's mother — used to live with us, and she still calls every week. My in-laws are kind. I visit everyone often.", correct: true },
        { text: "Big family. Parents Delhi. Brother far. Miss. Grandmother call. In-laws good.",                                                                                                                                                                            correct: false },
        { text: "Mera parivaar bada hai. Mata-pita Delhi mein hain.",                                                                                                                                                                       correct: false },
      ],
      explanation: "पहला answer सब समेटता है: parents, sibling nuance (younger/older), grandparent + side ('my father's mother'), in-laws, और verbs (miss, call, visit)। Module 5 का पूरा सार एक paragraph में।",
    },
  ],

  rwenDialogue: {
    intro: 'Capstone! आपको English-speaking दोस्त को अपना पूरा परिवार बताना है। शुरुआत करें, detail दें, complete करें।',
    lines: [
      {
        speaker: 'npc',
        target: "Tell me about your family — everyone, the whole picture.",
        native: 'अपने परिवार के बारे में बताइए — सब, पूरी picture।',
      },
      {
        speaker: 'user',
        userChoices: [
          {
            target: "I have a close family. My parents live in Delhi with my younger sister. My older brother lives in Canada — I miss him, but we call every Sunday. My grandmother — my father's mother — used to tell us stories every weekend; she's like a second mother to me. My aunt on my father's side, who we call 'bua', is visiting next week. We're a big family, and we visit each other often.",
            native: '...',
            correct: true,
            feedback: "बहुत बढ़िया — आपने सब समेटा: parents, siblings (younger), grandparent past habit (used to), kinship clarifier (father's mother, father's side, bua), verbs (miss, call, visit), idiom (like a second mother)। Capstone पूरा।",
          },
          {
            target: "I have parents. I have brother and sister. I have grandmother. Aunt and uncle. We talk sometimes.",
            native: '...',
            correct: false,
            feedback: "परिवार सब है पर nuance नहीं — 'older/younger', 'on my father's side', 'used to', या 'I miss them' जोड़ें। यही Module 5 की गहराई।",
          },
          {
            target: "Mera parivaar — mata-pita, bhaiya, dadi, bua. Sab ko pyaar karta hoon.",
            native: '...',
            correct: false,
            feedback: "हिंदी में — दोस्त नहीं समझेगा। पूरा English में: 'I have parents, an older brother, a grandmother, an aunt — and I love them all.'",
          },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Module 5 पूरा! आपका परिवार rich है — और अब आप वो richness English में पहुँचा सकते हैं बिना कुछ खोए। आप explain या detail जोड़ने का choice कर सकते हैं — सब आपके हाथ में।",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'बिना ऊपर देखे। Capstone recall.',
    prompts: [
      { prompt: "My grandmother used to ___ (कोई भी English verb)", correct: ['cook', 'sing', 'tell stories', 'live with us', 'bake', 'pray', 'teach me', 'say', 'come over'] },
      { prompt: 'I miss my brother (अंग्रेज़ी में)',                          correct: ['I miss my brother', 'I miss my brother.', 'i miss my brother'] },
    ],
  },

  mission: {
    title: 'Module 5 का अंतिम काम',
    task: "English में एक paragraph लिखें — कम से कम 5-7 lines परिवार पर। पूरे module से लें: माता-पिता, भाई-बहन (older/younger), अपने या भाई-बहन के बच्चे, दादी या दादाजी (used to), चाचा या मामा (clarify side), दोस्त (like family), और तीन verbs (visit/call/miss)। English-speaking दोस्त को share करें या practice के लिए संभाल कर रखें।",
    rwenSignoff: "Module 5 पूरा। आपका परिवार English में पहुँच गया। Module 6 — numbers, time, money।",
  },

  phase8: {
    scenario: "Capstone family conversation: an English-speaking friend wants to fully understand your family — parents, siblings, grandparents, aunts/uncles, in-laws, friends-like-family. Tell them everything in one flowing conversation. Bring the Hindi kinship richness through clarifying English.",
    rwenRole: "Emily, 32, your English-speaking friend who has just visited India for the first time and is fascinated by Indian family structure. Asks 'Wait — how is that aunt different from the other aunt?' and 'Do you all live close?' and 'Who do you miss most?'",
    successCriteria: "User uses 6+ family terms across the module: parents, sibling (older/younger), grandparent, aunt/uncle WITH clarifier (on my father's/mother's side), in-laws, OR friend-like-family. Uses 'used to' once. Uses at least two of visit/call/miss. Brings Hindi kinship nuance into English (e.g. 'my aunt — my father's sister'). Avoids dropping into Hindi for full sentences.",
    estimatedMinutes: 4,
    bonusXp: 5,
  },
};

export default lesson;

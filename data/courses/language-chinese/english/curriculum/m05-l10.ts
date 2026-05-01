import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm05-l10-conversation',
  module: 5,
  lesson: 10,
  title: 'Jiātíng Tánhuà — The Whole Family Conversation',
  estimatedMinutes: 8,
  xpReward: 50,

  hook: {
    rwenLine: "Lunar New Year reunion in Beijing. Your husband's whole extended family is in one apartment. The aunties want details — every detail — about YOUR family back home. Names, ages, jobs, who's married to whom. This is the moment everything from this module comes alive. Bàba, māma, gēge, nǎinai, wàigōng — every word a key, every key opening one door of conversation.",
    culturalNote: "The 'meet the foreign daughter-in-law' moment is a Chinese family ritual. The aunties WILL ask everything. This isn't intrusion — it's how they map you into the family. Answering with kinship terms, even imperfectly, signals that you respect their system. By the end of this module, you have the vocabulary to do exactly that.",
  },

  chunks: [
    {
      id: 'wo_de_jiārén',
      target: 'Wǒ de jiārén',
      native: 'My family (members)',
      literal: '(我的家人) lit: I-(possessive)-family-people',
      emoji: '👨‍👩‍👧‍👦',
      phonetic: 'WAW duh JYAH-run',
      audioRef: null,
    },
    {
      id: 'jia_li_you',
      target: 'Jiā lǐ yǒu...',
      native: 'In my family there are... (lit: family-inside has)',
      literal: '(家里有...) lit: family-inside-have',
      emoji: '🏠',
      phonetic: 'jyah lee YOH',
      audioRef: null,
    },
    {
      id: 'rang_wo_jieshao',
      target: 'Ràng wǒ jièshào yíxià',
      native: 'Let me introduce (a little)',
      literal: '(让我介绍一下) lit: let-me-introduce-a-little',
      emoji: '🤝',
      phonetic: 'rahng waw jyeh-SHOW yee-shyah',
      audioRef: null,
    },
  ],

  pattern: {
    name: "'Jiā lǐ yǒu...' — the family map opener",
    explanation: "When you list out your family, the cleanest opener in Chinese is 'wǒ jiā lǐ yǒu...' (我家里有... in my family there are...). It triggers a list of who-and-how-many. The 'lǐ' (里 inside) makes it feel like the family is a house you're peering into. Combine it with measure words and ages: 'Wǒ jiā lǐ yǒu wǔ ge rén — bàba, māma, yí ge gēge, yí ge mèimei, hé wǒ.'",
    examples: [
      { target: 'Wǒ jiā lǐ yǒu sì ge rén', native: 'In my family there are four people' },
      { target: 'Wǒ jiā lǐ yǒu yí ge gēge', native: 'In my family there is one older brother' },
      { target: "Ràng wǒ jièshào wǒ de jiārén", native: 'Let me introduce my family' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match each phrase to its function',
      pairs: [
        { left: 'Wǒ de jiārén', right: 'My family (members)' },
        { left: 'Jiā lǐ yǒu...', right: 'In my family there are...' },
        { left: 'Ràng wǒ jièshào yíxià', right: 'Let me introduce (briefly)' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Type in Mandarin',
      prompt: 'In my family there are five people',
      correct: ['Wǒ jiā lǐ yǒu wǔ ge rén', 'Wǒ jiā li yǒu wǔ ge rén', 'Wo jia li you wu ge ren', 'wo jia li you wu ge ren', 'wǒ jiā lǐ yǒu wǔ ge rén', '我家里有五个人'],
    },
    {
      type: 'fill_blank',
      instruction: 'Complete the introduction: "Let me introduce my family"',
      sentence: 'Ràng wǒ _____ yíxià wǒ de jiārén',
      options: ['jièshào', 'shuō', 'xiǎng'],
      correct: 'jièshào',
      context: "'Jièshào' (介绍) is 'to introduce' — used for people, places, ideas. 'Yíxià' softens the request to 'just a little / briefly'.",
    },
    {
      type: 'build_sentence',
      instruction: 'Drag the words: "My maternal grandmother is in Beijing"',
      words: ['Běijīng', 'wàipó', 'Wǒ', 'zài', 'de'],
      correct: ['Wǒ', 'de', 'wàipó', 'zài', 'Běijīng'],
      translation: 'My maternal grandmother is in Beijing',
    },
    {
      type: 'translate',
      instruction: 'Type in Mandarin',
      prompt: 'I have one older brother and one younger sister',
      correct: ['Wǒ yǒu yí ge gēge hé yí ge mèimei', 'Wo you yi ge gege he yi ge meimei', 'wo you yi ge gege he yi ge meimei', 'wǒ yǒu yí ge gēge hé yí ge mèimei', '我有一个哥哥和一个妹妹'],
    },
    {
      type: 'multiple_choice',
      instruction: "An auntie at New Year's asks 'Nǐ jiā lǐ yǒu jǐ ge rén?' How do you start your answer?",
      question: 'Pick the most natural opener',
      options: [
        { text: 'Wǒ jiā lǐ yǒu... — then list (number) ge rén and your relatives in order.', correct: true },
        { text: 'Bàba māma — and just stop there.', correct: false },
        { text: 'Wǒ shì yí ge rén — \'I am one person.\'', correct: false },
      ],
      explanation: "Echo back her structure: 'wǒ jiā lǐ yǒu (number) ge rén' then list. The Chinese conversational pattern likes echoes — they show you understood.",
    },
  ],

  rwenDialogue: {
    intro: "Lunar New Year Eve. Your husband's family apartment in Beijing is wall-to-wall relatives. Dumplings being folded, fireworks already going off outside. His Lǐ Āyí — a sharp-eyed auntie in her sixties — corners you near the kitchen with a teacup in one hand and curiosity in both eyes.",
    lines: [
      {
        speaker: 'npc',
        target: 'Lái lái — gēn wǒ shuō shuō, nǐ jiā lǐ yǒu shénme rén?',
        native: 'Come now — tell me, who is in your family?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Ràng wǒ jièshào yíxià. Wǒ jiā lǐ yǒu wǔ ge rén — bàba, māma, yí ge gēge, yí ge mèimei, hé wǒ', native: 'Let me introduce. In my family there are five people — dad, mum, one older brother, one younger sister, and me', correct: true, feedback: 'Magnificent — opener, count, then a clean list with correct age-marked sibling words. She nods deeply.' },
          { target: 'Wǒ yǒu jiārén', native: 'I have family', correct: false, feedback: "Too vague — she wants the map. Try opening with 'wǒ jiā lǐ yǒu... ge rén' and listing them out." },
          { target: 'Bàba māma gēge mèimei', native: 'Dad mum brother sister', correct: false, feedback: "You named them — but no count, no opener. Frame it: 'wǒ jiā lǐ yǒu sì ge rén — bàba, māma...'" },
        ],
      },
      {
        speaker: 'npc',
        target: 'Ó! Nǐ shì zhōngjiān de. Nǐ de yéye nǎinai ne?',
        native: "Ah! You're the middle one. What about your grandparents?",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Wǒ de yéye qùshì le. Wǒ de nǎinai zhù zài Yīngguó. Wǒ de wàigōng wàipó dōu zài Měiguó', native: "My (paternal) grandfather has passed. My (paternal) grandmother lives in England. My (maternal) grandparents are both in America", correct: true, feedback: "Stunning. You distinguished paternal from maternal, named four grandparents cleanly, and handled loss gracefully. The auntie's eyes are warm." },
          { target: 'Wǒ yǒu sì ge yéye', native: 'I have four grandfathers', correct: false, feedback: "You only have two grandfathers — yéye (paternal) and wàigōng (maternal). The other two are grandmothers — nǎinai and wàipó." },
          { target: 'Wǒ de yéye nǎinai dōu hěn hǎo', native: 'My (paternal) grandparents are both fine', correct: false, feedback: "She asked about ALL your grandparents. Don't forget the maternal side — wàigōng and wàipó. The Chinese kinship system expects both halves." },
        ],
      },
      {
        speaker: 'npc',
        target: 'Hǎo háizi. Yǒu jīhuì yídìng yào dài tāmen lái Zhōngguó, ràng wǒmen rènshi rènshi.',
        native: 'Good child. When you get the chance, you must bring them to China — let us meet them.',
      },
      {
        speaker: 'rwen',
        rwenLine: "Did you feel that shift? She called you 'hǎo háizi' — good child. The moment you mapped your family in proper Chinese kinship terms, you stopped being a foreigner being interrogated. You became someone whose family she now wants to know. That's what this entire module was building toward. You did it.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'In my family there are four people', correct: ['Wǒ jiā lǐ yǒu sì ge rén', 'Wo jia li you si ge ren', 'wo jia li you si ge ren', 'wǒ jiā lǐ yǒu sì ge rén', '我家里有四个人'] },
      { prompt: 'Let me introduce (briefly)', correct: ['Ràng wǒ jièshào yíxià', 'Rang wo jieshao yixia', 'rang wo jieshao yixia', 'ràng wǒ jièshào yíxià', '让我介绍一下'] },
    ],
  },

  mission: {
    title: "Today's Journey — Module 5 complete",
    task: "Out loud, in Mandarin, give a 60-second introduction to your whole family. Open with 'Ràng wǒ jièshào yíxià.' Then 'Wǒ jiā lǐ yǒu ___ ge rén.' Then list them all — bàba, māma, gēge or dìdi, jiějie or mèimei, yéye, nǎinai, wàigōng, wàipó. Use kinship terms correctly. This is your family map in Chinese now.",
    rwenSignoff: "Ten lessons. A whole vocabulary of belonging. You can now walk into any Chinese family room and name everyone in it. That's not small. Module 5 — done. Wǒ wèi nǐ jiāo'ào — I'm proud of you.",
  },

  phase8: {
    scenario: "Lunar New Year Eve in a Beijing high-rise apartment. Twenty-some relatives jammed into one home, dumplings being folded on every flat surface, the TV playing the Spring Festival Gala in the background, fireworks already cracking outside. Your husband's sharpest auntie — Lǐ Āyí — has cornered you with a fresh cup of tea. She wants the full family map. ALL of it. Names, ages, where they are, who's married, who has kids. This is your final test of Module 5: hold up your end of the conversation in fluent kinship terms.",
    rwenRole: "Lǐ Āyí (李阿姨) — your husband's auntie, mid-60s, sharp, warm, mildly intimidating. She'll grill you about (1) how many people are in your family, (2) your siblings with correct age-marking, (3) all four grandparents (paternal AND maternal — she'll catch it if you skip the wài- side), (4) any in-laws you have, and (5) one family story. She'll quietly score you on whether you used kinship words like a Chinese person would, or like a tourist.",
    successCriteria: "User opens with 'ràng wǒ jièshào' or 'wǒ jiā lǐ yǒu...' framing, correctly age-marks siblings (gēge/dìdi/jiějie/mèimei), distinguishes paternal (yéye/nǎinai) from maternal (wàigōng/wàipó) grandparents using the wài- prefix, references at least one family member with a verb from L8 (xiǎng / dǎ diànhuà / bàifǎng), and produces one short family memory or quote using 'yǐqián' or 'zǒngshì shuō'. The user does NOT default to English kinship words like 'brother' or 'grandma' when a Chinese term is the natural choice.",
    estimatedMinutes: 4,
    bonusXp: 5,
  },
};

export default lesson;

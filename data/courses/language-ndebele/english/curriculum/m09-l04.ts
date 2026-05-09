import type { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm09-l04',
  module: 9,
  lesson: 4,
  title: 'Lobola — bridewealth, joining families',
  estimatedMinutes: 8,
  xpReward: 35,

  hook: {
    rwenLine: "Lobola is the Ndebele cultural concept English-speakers most often misread. Outsiders sometimes call it 'paying for a wife'. That framing is wrong, and saying it out loud in Bulawayo will end a conversation. Today we learn what lobola actually does — and how to talk about it without causing harm.",
    culturalNote: "Lobola (or 'amalobolo') is a long, structured negotiation between two families when one of their children marry. Traditionally it involves cattle (izinkomo) — the unit of wealth in pre-colonial Ndebele society — though today money is common, often denominated in cattle-equivalents. What lobola does: it formally joins two families, not two individuals; it honours the bride's parents for raising her; it creates ongoing reciprocal obligations between the two families for generations; it makes the children of the marriage legitimate members of both lineages. It is NOT a one-time purchase. The bride is not 'sold'. If a marriage ends, parts of lobola may be returned, or not, depending on circumstances. Modern Ndebele women, including university-educated professionals, overwhelmingly say they want lobola paid — because it means their parents are honoured and the marriage is taken seriously by both lineages.",
  },

  chunks: [
    {
      id: 'lobola',
      target: 'lobola / amalobolo',
      native: 'bridewealth — the negotiated gifts that join two families in marriage',
      literal: '-lobola is also a verb: ukulobola = to negotiate / pay lobola',
      emoji: '🐄',
      phonetic: 'loh-BOH-lah / ah-mah-loh-BOH-loh',
      audioRef: null,
    },
    {
      id: 'izinkomo',
      target: 'izinkomo',
      native: 'cattle (the traditional currency of lobola)',
      literal: 'izi- (plural) + nkomo (head of cattle)',
      emoji: '🐂',
      phonetic: 'ee-zeen-KOH-moh',
      audioRef: null,
    },
    {
      id: 'umkhwenyana',
      target: 'umkhwenyana',
      native: 'son-in-law (the man marrying in)',
      literal: 'class 1 noun for the in-marrying husband',
      emoji: '🤵',
      phonetic: 'oom-kweh-NYAH-nah',
      audioRef: null,
    },
    {
      id: 'umalukazana',
      target: 'umalukazana',
      native: 'daughter-in-law (the woman marrying in)',
      literal: 'class 1 noun for the in-marrying wife',
      emoji: '👰',
      phonetic: 'oo-mah-loo-kah-ZAH-nah',
      audioRef: null,
    },
    {
      id: 'umkhongi',
      target: 'umkhongi',
      native: 'the go-between / negotiator who carries lobola talks',
      literal: 'a respected family elder who never speaks directly for the groom — he speaks for the family',
      emoji: '🤝',
      phonetic: 'oom-KON-gee',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Family-to-family, not person-to-person',
    explanation: "Notice the language. Ndebele does not say 'he is paying lobola'. It says 'his family is paying lobola'. The verb 'ukulobola' (to do lobola) is something whole lineages do, mediated by an umkhongi — a chosen go-between who never speaks for himself, only for the family that sent him. The bride and groom are barely present at the actual negotiations. This grammatical and cultural framing — collective, mediated, structured — is the opposite of a transaction. It is two families putting on the record that they are now bound to each other.",
    examples: [
      { target: 'Babalobola.', native: 'They (the family) are doing lobola.' },
      { target: 'Umkhongi uyakhuluma.', native: 'The go-between is speaking (for the family).' },
      { target: 'Izinkomo zikabandla.', native: 'The cattle of the family / community.' },
    ],
  },

  exercises: [
    {
      type: 'multiple_choice',
      instruction: 'Which framing is culturally accurate?',
      question: 'What does lobola actually do in Ndebele tradition?',
      options: [
        { text: 'It formally joins two families and honours the bride\'s parents — an ongoing relationship, not a purchase.', correct: true },
        { text: 'It is a one-time payment to buy a wife.', correct: false },
        { text: 'It is a wedding tax paid to the chief.', correct: false },
        { text: 'It is the equivalent of an engagement ring.', correct: false },
      ],
      explanation: "Lobola creates a permanent relationship of mutual obligation between the two families — children, condolences, contributions to funerals, sharing of harvests, all flow back and forth for generations. The 'purchase' framing is a colonial misreading.",
    },
    {
      type: 'match_pairs',
      instruction: 'Match the role to its meaning',
      pairs: [
        { left: 'umkhongi', right: 'go-between / negotiator (speaks for the family)' },
        { left: 'umkhwenyana', right: 'son-in-law' },
        { left: 'umalukazana', right: 'daughter-in-law' },
        { left: 'izinkomo', right: 'cattle (traditional currency of lobola)' },
      ],
    },
    {
      type: 'multiple_choice',
      instruction: 'Conversation safety',
      question: 'A Ndebele colleague tells you he is doing lobola for his fiancée this weekend. The MOST respectful thing to say is:',
      options: [
        { text: "'Halala! May your families come together well.' — congratulate him on the family union.", correct: true },
        { text: "'How much are you paying?' — ask the price.", correct: false },
        { text: "'Isn't that an outdated practice?' — challenge the tradition.", correct: false },
      ],
      explanation: "Lobola amounts are family business. Asking 'how much' is roughly as appropriate as asking how much someone earns. Treat it as the joining of two lineages — congratulate, don't interrogate.",
    },
    {
      type: 'translate',
      instruction: 'Type the Ndebele',
      prompt: 'son-in-law (the man marrying in)',
      correct: ['umkhwenyana', 'Umkhwenyana'],
    },
  ],

  rwenDialogue: {
    intro: "Your friend Thembi tells you her older brother Mthokozisi is going through lobola talks tomorrow. She wants to make sure you know what to say (and what not to say) when you see him at the family braai on Sunday.",
    lines: [
      { speaker: 'npc', target: 'UMthokozisi uyalobola kusasa.', native: 'Mthokozisi is doing lobola tomorrow.' },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Halala! Izindlu zenu zihlangana kuhle.', native: 'Congratulations! May your families come together well.', correct: true, feedback: "Thembi grins. 'Yebo — that is exactly what an aunt would say. He'll appreciate that.'" },
          { target: 'Uhlawula malini?', native: 'How much is he paying?', correct: false, feedback: "Thembi gets quiet. 'We don't ask that.' Lobola amounts are family-to-family. Asking is intrusive — you've stepped over a line." },
          { target: 'Lokho kudala.', native: "That's old-fashioned.", correct: false, feedback: "Thembi looks away. You've just told her her family's marriage tradition is backwards. That is a serious cultural injury, even if you didn't mean it. Lobola is alive and well-loved." },
        ],
      },
      { speaker: 'npc', target: 'Uzakuba ngumkhwenyana omuhle.', native: "He'll be a good son-in-law." },
      { speaker: 'rwen', rwenLine: "Lobola is one of the easiest places for outsiders to be accidentally rude. The rule: celebrate the families, never interrogate the price." },
    ],
  },

  activeRecall: {
    instruction: 'Recall from memory.',
    prompts: [
      { prompt: 'Bridewealth that joins two families', correct: ['lobola', 'amalobolo', 'Lobola'] },
      { prompt: 'Cattle (traditional lobola currency)', correct: ['izinkomo', 'Izinkomo'] },
      { prompt: 'The go-between who negotiates lobola for the family', correct: ['umkhongi', 'Umkhongi'] },
      { prompt: 'Son-in-law', correct: ['umkhwenyana', 'Umkhwenyana'] },
      { prompt: 'Daughter-in-law', correct: ['umalukazana', 'Umalukazana'] },
    ],
  },

  mission: {
    title: 'Reframe one assumption',
    task: "Today, mentally replace the phrase 'paying for a wife' (which you may have heard from outsiders) with 'joining two families'. If lobola comes up in a conversation this week — at work, online, with friends — try gently offering the family-joining framing. Don't lecture. Just let the better translation be heard.",
    rwenSignoff: "Lobola is older than money. Treat it that way and Ndebele people will trust you to talk about other deep things. Sala kuhle.",
  },

  phase8: {
    scenario: "Your friend's older sister, Sibongile (32, accountant in Bulawayo), is engaged. At a Saturday family lunch she asks you what you've been told about lobola, because she's noticed you stiffen when it comes up. She's curious, not angry. She wants to give you the real picture.",
    rwenRole: "Sibongile — 32, professional, university-educated, traditionally Ndebele, fiercely proud of lobola for her own marriage. She'll correct misconceptions warmly but firmly, and will respect you more if you ask honest questions than if you nod along.",
    successCriteria: "User reframes lobola away from 'buying a wife' toward 'joining two families', uses at least two of the key terms (lobola, izinkomo, umkhongi, umkhwenyana, umalukazana) accurately, and asks at least one respectful question rather than making a judgement.",
    estimatedMinutes: 4,
    bonusXp: 5,
  },
};

export default lesson;

import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm05-l09-mera-parivar',
  module: 5,
  lesson: 9,
  title: 'Merā Parivār — Talking About My Family',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "You now know more Hindi family vocabulary than most non-Indians ever learn. Today we put it to work — in actual sentences. 'Merā parivār' means 'my family'. Whether yours is a small nuclear unit in Sydney or a sprawling joint family in Patna, you can now describe it precisely in Hindi.",
    culturalNote: "When you meet someone in India, sharing your family is one of the fastest paths to connection. Indians will ASK about your parents, your siblings, your grandparents — not as small talk but as genuine interest in who shaped you. Being able to answer in Hindi turns a polite exchange into something memorable.",
  },

  chunks: [
    {
      id: 'parivar',
      target: 'परिवार (Parivār)',
      native: 'Family',
      literal: 'Parivār — the Hindi word for family unit',
      emoji: '👨‍👩‍👧‍👦',
      phonetic: 'pa-ri-VAAR',
      audioRef: null,
    },
    {
      id: 'mera_naam',
      target: 'मेरे ___ हैं (Mere ___ hain)',
      native: 'My ___ is/are (sentence frame for introducing family)',
      literal: 'Mere [relation] hain — masculine plural; for feminine use "Merī"',
      emoji: '🗣️',
      phonetic: 'MAY-ray ___ HAIN',
      audioRef: null,
    },
    {
      id: 'kitne_log',
      target: 'कितने लोग? (Kitne log?)',
      native: 'How many people? (asking about family size)',
      literal: 'Kitne (how many) + log (people)',
      emoji: '🔢',
      phonetic: 'KIT-nay LOG',
      audioRef: null,
    },
  ],

  pattern: {
    name: "The 'Mere/Merī ___ hain' frame for talking about family",
    explanation: "Use 'Mere' (masculine or respectful plural) and 'Merī' (feminine singular) before the relationship. 'Mere pitā-jī hain' (My father is). 'Merī mātā-jī hain' (My mother is). For listing several: 'Mere parivār mein…' (In my family there is…).",
    examples: [
      { target: 'Mere parivār mein chār log hain.', native: 'In my family there are four people.' },
      { target: 'Merī ek Didī hain.', native: 'I have one older sister.' },
      { target: 'Mere Dādā-jī Lucknow mein rahte hain.', native: 'My paternal grandfather lives in Lucknow.' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match each phrase to its meaning',
      pairs: [
        { left: 'Parivār', right: 'Family' },
        { left: 'Mere ___ hain', right: 'My ___ is/are' },
        { left: 'Kitne log?', right: 'How many people?' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'You\'re asked how many people are in your family. Frame the answer.',
      sentence: 'Mere parivār mein chār _____ hain.',
      options: ['log', 'beṭā', 'shādī'],
      correct: 'log',
      context: 'Family-size frame: Mere parivār mein [number] log hain.',
    },
    {
      type: 'translate',
      instruction: 'Type in Romanized Hindi',
      prompt: 'I have one older sister.',
      correct: ['Merī ek Didī hain.', 'Meri ek didi hain.', 'meri ek didi hain'],
    },
    {
      type: 'multiple_choice',
      instruction: 'Which sentence correctly says "My family lives in Pune"?',
      question: 'Choose the right Hindi sentence:',
      options: [
        { text: 'Merā parivār Pune mein rahtā hai.', correct: true },
        { text: 'Merā parivār Pune jātā hai.', correct: false },
        { text: 'Pune merā parivār.', correct: false },
      ],
      explanation: "'Merā parivār Pune mein rahtā hai' — my family LIVES in Pune. 'Jātā' would be 'goes to'. The third is just two phrases stuck together with no verb.",
    },
    {
      type: 'build_sentence',
      instruction: 'Build "In my family there are five people"',
      words: ['hain.', 'log', 'pānch', 'mein', 'Mere', 'parivār'],
      correct: ['Mere', 'parivār', 'mein', 'pānch', 'log', 'hain.'],
      translation: 'In my family there are five people.',
    },
    {
      type: 'translate',
      instruction: 'Type in Romanized Hindi',
      prompt: 'My family',
      correct: ['Merā parivār', 'Mera parivar', 'mera parivar'],
    },
  ],

  rwenDialogue: {
    intro: "Rwen's chachī (younger paternal aunt) is curious about you. She asks about your family back home.",
    lines: [
      {
        speaker: 'npc',
        target: 'Beṭā, tumhāre parivār mein kitne log hain?',
        native: 'Dear, how many people are in your family?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Mere parivār mein chār log hain — Mātā-jī, Pitā-jī, ek Didī aur main.', native: 'In my family there are four people — Mother, Father, one older sister, and me.', correct: true, feedback: "You answered the count AND named each person with their precise Hindi title. Chachī-jī smiles approvingly." },
          { target: 'Family small.', native: 'Family small.', correct: false, feedback: "Use the full Hindi frame — 'Mere parivār mein [number] log hain' — and name each person with their title (Mātā-jī, Pitā-jī, etc.)." },
          { target: 'Mere parivār mein bhāī.', native: 'In my family, brother.', correct: false, feedback: "Incomplete — you need a count and the verb 'hain'. Try: 'Mere parivār mein chār log hain — [list them].'" },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Chachī-jī ne dhyān se sunā. Tumne saari riste-naam yād rakhe — yeh badā kām hai.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'My family', correct: ['Merā parivār', 'Mera parivar', 'mera parivar'] },
      { prompt: 'In my family there are four people.', correct: ['Mere parivār mein chār log hain.', 'Mere parivar mein char log hain.', 'mere parivar mein char log hain'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Compose a 3-sentence introduction of your family in Hindi: how many people, who they are by Hindi title (Mātā-jī, Pitā-jī, Bhaiyā/Didī, etc.), and where they live. Say it aloud once. You're ready for the family conversation in m05-l10.",
    rwenSignoff: "Apnā parivār Hindi mein batānā — ek bahut barī upalabdhī hai. Phir milenge.",
  },

  phase8: {
    scenario: "Rwen's father (Pitā-jī Suresh) is sitting on the verandah on the third evening of Diwali with chai. He asks you about your own family back home — genuinely curious, the way Indian elders are. You have 2-3 minutes to describe your family using everything you've learned: number of people, titles for each (Mātā-jī, Pitā-jī, Didī, Bhaiyā, Dādā-jī, Nānī-jī, etc.), where they live.",
    rwenRole: "Pitā-jī Suresh — Rwen's father, ~58, retired civil servant; gentle, asks the kind of warm questions Indian elders ask, listens intently, will gently ask follow-ups about each family member. Tests whether you can sustain a Hindi family conversation rather than just produce the words.",
    successCriteria: "User opens with 'Mere parivār mein [N] log hain' or similar frame, names at least 3 family members using correct Hindi titles (NOT generic 'mom', 'dad', 'brother'), gets paternal/maternal vocabulary correct where it comes up (Dādā vs Nānā etc.), and stays in Hindi for the whole 2-3 minutes.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;

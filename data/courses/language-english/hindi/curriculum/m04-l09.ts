import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm04-l09-articles-mixed',
  module: 4,
  lesson: 9,
  title: 'Mixed practice — articles in flow',
  estimatedMinutes: 5,
  xpReward: 30,

  hook: {
    rwenLine: "Ab humare paas saare articles hain — a, an, the, no article. Inhe ek saath chalana sabse bada challenge hai — par practice se aa jayega.",
    culturalNote: "Hindi-speakers ke liye yeh sabse bada test hai: ek hi paragraph mein 'a/an', 'the', aur 'no article' — sab sahi laga rahe ho? Indian English (Hinglish) mein article-skip aur over-use dono common hain. BPO trainers kehte hain: 'Articles theek se laga doge to native sound karoge, warna immediately Indian-accent feeling aati hai.' Yeh A2-level se B1-level mein jaane ka pul hai.",
  },

  chunks: [
    {
      id: 'a_the_combo',
      target: 'I sent an email. The email had the report.',
      native: 'Maine ek email bheji. Us email mein report thi.',
      literal: 'an (intro) → the (after intro)',
      emoji: '📧',
      phonetic: 'I sent an EE-mayl...',
      audioRef: null,
    },
    {
      id: 'no_the_combo',
      target: 'Children love music. The children at this school sing.',
      native: 'Bachhe sangeet pasand karte hain. Is school ke bachhe gaate hain.',
      literal: 'general (no article) → specific (the)',
      emoji: '🎵',
      phonetic: 'CHIL-dren luv MYU-zik...',
      audioRef: null,
    },
    {
      id: 'mixed_flow',
      target: 'I have a dog. The dog likes water.',
      native: 'Mere paas ek kutta hai. Kutta paani pasand karta hai.',
      literal: 'a → the → no article (water)',
      emoji: '🐕',
      phonetic: 'I hav a dog...',
      audioRef: null,
    },
  ],

  pattern: {
    name: "Articles in flow — sabko ek saath chalana",
    explanation: "Bada rule: (1) Pehli baar mention — 'a/an'. (2) Doosri baar (already known) — 'the'. (3) General/abstract — no article. Ek hi vakya mein teen articles ho sakte hain — yeh skill BPO/IT English ka pillar hai.",
    examples: [
      { target: 'I bought a phone yesterday. The phone is excellent.', native: 'Maine kal ek phone khareeda. Wo phone bahut accha hai.' },
      { target: 'Music is universal. The music at this party is loud.', native: 'Sangeet universal hai. Is party ka sangeet zor se hai.' },
      { target: 'I have many friends. Some friends live in Mumbai.',   native: 'Mere bahut dost hain. Kuch dost Mumbai mein rehte hain.' },
    ],
  },

  exercises: [
    {
      type: 'fill_blank',
      instruction: 'Articles chuniye (a/an/the/—)',
      sentence: 'I saw _____ man at _____ market. _____ man was selling tomatoes.',
      options: ['a / the / The', 'the / a / A', 'a / a / A'],
      correct: 'a / the / The',
      context: 'Pehli baar man (a). Specific market (the). Same man again (The).',
    },
    {
      type: 'translate',
      instruction: 'English mein likhiye',
      prompt: 'Bachhe sangeet pasand karte hain.',
      correct: ['Children love music.', 'Children love music', 'children love music.'],
    },
    {
      type: 'fill_blank',
      instruction: 'Article chuniye',
      sentence: 'I drink _____ water every day. _____ water from this well is clean.',
      options: ['— / The', 'The / The', 'A / A'],
      correct: '— / The',
      context: 'General water — no article. Specific well ka water — the.',
    },
    {
      type: 'build_sentence',
      instruction: 'Banaiye: "She is a teacher at the school"',
      words: ['school.', 'teacher', 'is', 'She', 'a', 'the', 'at'],
      correct: ['She', 'is', 'a', 'teacher', 'at', 'the', 'school.'],
      translation: 'Wo us school mein teacher hai',
    },
    {
      type: 'multiple_choice',
      instruction: 'Sahi vakya kaunsa hai?',
      question: 'Choose the natural English:',
      options: [
        { text: 'I have a brother. The brother lives in London.', correct: true },
        { text: 'I have brother. Brother lives in London.', correct: false },
        { text: 'I have the brother. A brother lives in London.', correct: false },
      ],
      explanation: 'Pehli baar brother = "a brother". Already mentioned = "the brother". Articles ke bina natural English nahi banti.',
    },
    {
      type: 'translate',
      instruction: 'English mein likhiye',
      prompt: 'Mere paas ek seb hai. Vo seb laal hai.',
      correct: ['I have an apple. The apple is red.', 'I have an apple. The apple is red'],
    },
  ],

  rwenDialogue: {
    intro: "Aap ek IT email likh rahe ho jisme aaj ka problem aur solution explain karna hai. Articles flow karna chahiye — natural office English chahiye.",
    lines: [
      {
        speaker: 'npc',
        target: "Could you summarise what happened with the server today?",
        native: 'Aaj server ke saath kya hua, summary de sakte ho?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: "Yes, sir. We had an issue with the database. The issue caused some delays. I sent the team an update.", native: 'Ji haan sir. Database ke saath ek issue tha. Us issue se kuch delays hue. Maine team ko ek update bheji.', correct: true, feedback: "Bahut accha — 'an issue' (intro), 'the database' (specific), 'the issue' (already mentioned), 'some delays' (positive plural), 'an update' (intro). Articles flow ho rahe hain." },
          { target: "Yes sir. We had issue with database. Issue caused delays. I sent team update.", native: '...', correct: false, feedback: "Indian English mein article-drop common hai par yeh client ko unprofessional lagta hai. 'An issue', 'the database', 'the team', 'an update' lagao." },
          { target: "Yes sir. We had the issue with a database. A issue caused the delays.", native: '...', correct: false, feedback: "Pehli baar mention = 'an issue', 'a database' specific nahi to issue ke baad 'the database', second mention = 'the issue'." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Shabaash. Articles batate hain ki cheez nayi hai (a/an), purani hai (the), ya general hai (kuch nahi). Yeh aapki English ka skeleton hai.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Bina dekhe — articles fill kijiye.',
    prompts: [
      { prompt: '"I bought ___ apple. ___ apple was red." (fill both)', correct: ['an / The', 'an, The', 'an The', 'An The'] },
      { prompt: '"___ children at school love ___ music." (fill both, may include —)', correct: ['The / —', 'The —', 'the —', 'the / —'] },
    ],
  },

  mission: {
    title: 'Aaj ka Kaam',
    task: "Ek English news article ya company email padhiye. Har article (a/an/the/no article) ko underline karo. Apne aap se poochho: kyon yeh article? Yeh practice aapki English ko natural banayegi.",
    rwenSignoff: "Articles ko notice karna habit ban jaye — to use karna automatic ho jayega.",
  },

  phase8: {
    scenario: "Aap IT manager ko aaj ka issue/solution explain kar rahe ho. Articles ka mixed-use natural hona chahiye — a/an, the, aur no article — saare ek saath.",
    rwenRole: "IT manager who needs a clear, professional summary of today's incident — listens carefully for natural article use.",
    successCriteria: "User uses three or more different article types ('a/an' for first mention, 'the' for already-mentioned/specific, 'no article' for general/abstract) within the same conversation flow.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;

import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm03-l10-meri-kahani',
  module: 3,
  lesson: 10,
  title: 'Meri Kahani — My Story in Hindi',
  estimatedMinutes: 7,
  xpReward: 50,

  hook: {
    rwenLine: "Module 3 ends here. Not with a test, with a story — yours. Name, age, work, where you live, family, what you like, why you're learning Hindi. We string it all together. By the end of this lesson, you can introduce yourself fully, in Hindi, to anyone in India.",
    culturalNote: "A complete Indian self-introduction follows a rhythm: नमस्ते → name → place (current + native) → work → family → hobbies → why Hindi. Each piece earns the next question. It's never one breath — it's a small dance of statements and friendly follow-ups. By the end, you're not a stranger; you're someone with a story.",
  },

  chunks: [
    {
      id: 'aapse_milkar',
      target: 'आपसे मिलकर खुशी हुई — Aapse milkar khushi hui',
      native: 'Pleased to meet you',
      literal: 'You-from meeting happiness happened',
      emoji: '🤝',
      phonetic: 'AAP-say mil-KAR khu-SHEE hu-EE',
      audioRef: null,
    },
    {
      id: 'iss_liye',
      target: 'इसलिए... — Isliye...',
      native: 'That is why... / Therefore...',
      literal: 'For-this...',
      emoji: '💡',
      phonetic: 'is-LI-yay',
      audioRef: null,
    },
    {
      id: 'kyunki',
      target: 'क्योंकि... — Kyunki...',
      native: 'Because...',
      literal: 'Why-that...',
      emoji: '🔗',
      phonetic: 'KYOON-ki',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Connectors — kyunki (because) and isliye (therefore)',
    explanation: "Two key connectors that turn statements into stories. क्योंकि (kyunki) introduces a reason — 'I am learning Hindi BECAUSE I love Indian culture.' इसलिए (isliye) introduces a result — 'I love Indian culture, THEREFORE I am learning Hindi.' Same logic, opposite direction. Use either to add depth.",
    examples: [
      { target: 'मैं हिंदी सीख रहा हूँ क्योंकि मुझे India पसंद है — Main Hindi seekh raha hoon kyunki mujhe India pasand hai', native: 'I am learning Hindi because I like India' },
      { target: 'मुझे संगीत पसंद है, इसलिए मैं हिंदी सीख रहा हूँ — Mujhe sangeet pasand hai, isliye main Hindi seekh raha hoon', native: 'I like music, therefore I am learning Hindi' },
      { target: 'आपसे मिलकर खुशी हुई — Aapse milkar khushi hui', native: 'Pleased to meet you' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match each phrase to its meaning',
      pairs: [
        { left: 'Aapse milkar khushi hui', right: 'Pleased to meet you' },
        { left: 'Kyunki...', right: 'Because...' },
        { left: 'Isliye...', right: 'Therefore...' },
      ],
    },
    {
      type: 'multiple_choice',
      instruction: "You want to give a REASON for something. Which connector do you use?",
      question: 'Pick the right connector',
      options: [
        { text: 'Kyunki', correct: true },
        { text: 'Isliye', correct: false },
        { text: 'Aur', correct: false },
      ],
      explanation: "क्योंकि (kyunki) introduces a reason — 'because'. इसलिए (isliye) introduces a result — 'therefore'. और (aur) just means 'and'.",
    },
    {
      type: 'fill_blank',
      instruction: 'Connect a like to a result',
      sentence: 'Mujhe sangeet pasand hai, _____ main Hindi seekh raha hoon.',
      options: ['isliye', 'kyunki', 'aur'],
      correct: 'isliye',
      context: 'Music is the cause; learning Hindi is the result. Use isliye (therefore).',
    },
    {
      type: 'translate',
      instruction: 'Type in Hindi (romanized is fine)',
      prompt: 'Pleased to meet you',
      correct: ['Aapse milkar khushi hui', 'aapse milkar khushi hui', 'आपसे मिलकर खुशी हुई'],
    },
    {
      type: 'build_sentence',
      instruction: 'Build "Because I like music" (using kyunki + mujhe sangeet pasand hai)',
      words: ['hai', 'sangeet', 'mujhe', 'Kyunki', 'pasand'],
      correct: ['Kyunki', 'mujhe', 'sangeet', 'pasand', 'hai'],
      translation: 'Because I like music',
    },
    {
      type: 'translate',
      instruction: 'Type in Hindi (romanized is fine)',
      prompt: 'Therefore... (the connector word)',
      correct: ['Isliye', 'isliye', 'इसलिए'],
    },
  ],

  rwenDialogue: {
    intro: "Final dialogue of the module. I'm meeting you fresh — tell me your full story, in Hindi. Use everything you've learned.",
    lines: [
      {
        speaker: 'rwen',
        rwenLine: 'नमस्ते। अपने बारे में बताइए — नाम, उम्र, काम, परिवार, सब कुछ। (Namaste. Apne baare mein bataiye — naam, umar, kaam, parivaar, sab kuchh.)',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'मेरा नाम... है। मेरी उम्र... साल है। मैं... में रहता/रहती हूँ। मैं... हूँ। (Mera naam... hai. Meri umar... saal hai. Main... mein rehta/rehti hoon. Main... hoon.)', native: 'My name is... I am ... years old. I live in... I am [profession].', correct: true, feedback: "Name, age, place, work — that's the four-part opener. You've stitched four lessons into one breath." },
          { target: 'मेरा नाम... (Mera naam...)', native: 'My name is...', correct: false, feedback: "Good start — keep going. Add age, place, work, family." },
          { target: 'मुझे नहीं पता (Mujhe nahin pata)', native: "I don't know", correct: false, feedback: "You know your story — start with Mera naam... hai and build from there." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: 'और आप हिंदी क्यों सीख रहे/रही हैं? (Aur aap Hindi kyon seekh rahe/rahi hain?)',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'मुझे भारत पसंद है, इसलिए मैं हिंदी सीख रहा/रही हूँ। (Mujhe Bharat pasand hai, isliye main Hindi seekh raha/rahi hoon.)', native: 'I like India, therefore I am learning Hindi.', correct: true, feedback: "A reason and a result, joined with isliye. That's a complete thought in Hindi — and it's the answer that earns respect." },
          { target: 'मैं सीख रहा/रही हूँ (Main seekh raha/rahi hoon)', native: 'I am learning', correct: false, feedback: "True — add the reason: kyunki mujhe... pasand hai." },
          { target: 'मुझे नहीं पता (Mujhe nahin pata)', native: "I don't know", correct: false, feedback: "You do know — say WHY. Use kyunki or isliye to give a real reason." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: 'बहुत अच्छा! आपसे मिलकर खुशी हुई। (Bahut accha! Aapse milkar khushi hui.)',
      },
      {
        speaker: 'rwen',
        rwenLine: "Module 3 complete. You can introduce yourself, your work, your family, where you're from, what you like, and why you're here — all in Hindi. You're no longer a stranger in this language. Module 4 — pronouns, verbs, and the engine of Hindi grammar — is next.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'Pleased to meet you', correct: ['Aapse milkar khushi hui', 'aapse milkar khushi hui'] },
      { prompt: 'Because... (the connector)', correct: ['Kyunki', 'kyunki', 'क्योंकि'] },
    ],
  },

  mission: {
    title: "Your Module 3 Mission",
    task: "Say or write your full Hindi self-introduction out loud — name, age, work, place, family, hobbies, why Hindi. Use क्योंकि or इसलिए at least once. End with 'आपसे मिलकर खुशी हुई।' Make it real. Make it yours.",
    rwenSignoff: "You have a story. Now it lives in Hindi. Module 4 — the grammar engine — starts next. फिर मिलेंगे.",
  },

  phase8: {
    scenario: "An evening welcome dinner at a guesthouse in Udaipur. The hostess has invited her staff and a few neighbours to meet the long-term guest — you. The room quiets, she gestures to you with a smile, and asks (in Hindi) for you to introduce yourself fully to the table.",
    rwenRole: "Sunita-ji — guesthouse owner and host, ~50, bilingual but introducing you to staff and neighbours who speak only Hindi; warmly proud you're going to attempt this.",
    successCriteria: "User strings together a full intro in order: 'Namaste / Mera naam... hai | Meri umar... saal hai | Main... mein rehta/rehti hoon | Main... hoon (work) | Mere bhai/behen / Main shaadi-shuda hoon | Mujhe X pasand hai | Main Hindi seekh raha/rahi hoon kyunki/isliye...' — closing with 'Aapse milkar khushi hui'. Uses kyunki OR isliye at least once. No chunk dropped, gendered verbs correct throughout.",
    estimatedMinutes: 4,
    bonusXp: 5,
  },
};

export default lesson;

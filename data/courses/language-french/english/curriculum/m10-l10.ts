import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm10-l10-your-story',
  module: 10,
  lesson: 10,
  title: 'Votre histoire en français — Your story in French (A2 Complete)',
  estimatedMinutes: 10,
  xpReward: 50,

  hook: {
    rwenLine: "You started with Bonjour. Now you can tell a story. A real one — past, present, hope, and a proverb if the moment calls for it. Module 10, Lesson 10, the last page of the A2 curriculum. We've walked a long way together. Today you don't learn — you tell.",
    culturalNote: "A2 isn't fluency, but it's the level where French stops being a wall and starts being a door. You can ask, answer, describe a memory, name a feeling, plan a hope, and quote a proverb. People will correct you, but they will also lean in. That's the language earning your trust back.",
  },

  chunks: [
    {
      id: 'pendant_mon_annee',
      target: "Pendant mon année, j'ai...",
      native: "During my year, I...",
      literal: 'During my year, I-have',
      emoji: '📖',
      phonetic: 'pahn-DAHN moh nah-NAY zhay',
      audioRef: null,
    },
    {
      id: 'ce_que_jai_appris',
      target: "Ce que j'ai appris, c'est que...",
      native: "What I learned is that...",
      literal: 'That which I-have learned, it-is that',
      emoji: '💡',
      phonetic: 'suh kuh zhay ah-PREE seh kuh',
      audioRef: null,
    },
    {
      id: 'maintenant_je_sais',
      target: 'Maintenant, je sais...',
      native: 'Now, I know...',
      literal: 'Now, I know',
      emoji: '🌅',
      phonetic: 'mahn-tuh-NAHN zhuh SEH',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Final integration — the A2 storyteller',
    explanation: "A complete A2 story braids everything: imparfait (scene), passé composé (events), present (now), an emotion, a hope, and ideally a proverb. Six tools, one paragraph. You don't pick — you weave. 'Quand je suis arrivé(e)... j'avais peur... maintenant je sais... j'espère que... petit à petit, l'oiseau fait son nid.'",
    examples: [
      { target: "Quand je suis arrivé(e) en France, j'étais perdu(e)", native: 'When I arrived in France, I was lost (passé composé + imparfait)' },
      { target: "Ce que j'ai appris, c'est que la patience compte", native: 'What I learned is that patience matters' },
      { target: "Petit à petit, l'oiseau fait son nid", native: 'Little by little, the bird builds its nest (proverb close)' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the storyteller phrase to its meaning',
      pairs: [
        { left: "Pendant mon année, j'ai...", right: 'During my year, I...' },
        { left: "Ce que j'ai appris, c'est que...", right: 'What I learned is that...' },
        { left: 'Maintenant, je sais...', right: 'Now, I know...' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: "Tell what you've learned. Pick the right opener.",
      sentence: "_____ j'ai appris, c'est que la patience compte.",
      options: ['Ce que', 'Que', 'Quand'],
      correct: 'Ce que',
      context: "'Ce que j'ai appris' = 'what I learned' — the storytelling phrase that introduces a lesson. 'Que' alone wouldn't open the sentence; 'quand' means 'when'.",
    },
    {
      type: 'translate',
      instruction: "Type in French — open the storytelling about your year",
      prompt: "During my year, I...",
      correct: [
        "Pendant mon année, j'ai",
        "pendant mon année, j'ai",
        "Pendant mon année j'ai",
      ],
    },
    {
      type: 'build_sentence',
      instruction: 'Close your story with a hope. Put the words in order.',
      words: ['un', 'France', "J'espère", 'jour', 'en', 'revenir'],
      correct: ["J'espère", 'revenir', 'en', 'France', 'un', 'jour'],
      translation: 'I hope to return to France one day',
    },
    {
      type: 'multiple_choice',
      instruction: "You're closing a story about a hard but rewarding year. Which proverb is the perfect last line?",
      question: 'Pick the right closing proverb',
      options: [
        { text: "Petit à petit, l'oiseau fait son nid.", correct: true },
        { text: "Calme-toi.", correct: false },
        { text: "Je suis en colère.", correct: false },
      ],
      explanation: "Slow patient growth across a year = the bird-nest proverb. The other two have no place at the end of a personal story.",
    },
    {
      type: 'translate',
      instruction: 'Type in French — the line where you describe what you know now',
      prompt: "Now, I know I'm not the same",
      correct: [
        'Maintenant, je sais que je ne suis pas le même',
        'Maintenant, je sais que je ne suis pas la même',
        'maintenant, je sais que je ne suis pas le même',
        'maintenant, je sais que je ne suis pas la même',
        'Maintenant je sais que je ne suis pas le même',
        'Maintenant je sais que je ne suis pas la même',
      ],
    },
  ],

  rwenDialogue: {
    intro: "Final scene. You're sitting at a small café in Aix-en-Provence. It's the last week before you leave France. A regular at the next table — a man in his 60s reading a newspaper — looks over and says, gently: 'Tell me about your year.'",
    lines: [
      {
        speaker: 'npc',
        target: "Alors — racontez-moi votre année en France.",
        native: "So — tell me about your year in France.",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: "Quand je suis arrivé(e), j'avais peur. Je ne parlais pas bien. Mais petit à petit, l'oiseau fait son nid. Maintenant, je sais que c'était la meilleure année de ma vie. J'espère revenir.", native: "When I arrived, I was scared. I didn't speak well. But little by little, the bird builds its nest. Now, I know it was the best year of my life. I hope to come back.", correct: true, feedback: 'Past tenses, emotion, proverb, hope — five tools woven into one paragraph. That\'s an A2 storyteller.' },
          { target: "C'était bien.", native: "It was good.", correct: false, feedback: "Three months ago this would have been a victory. Today you can do so much more — let the year speak." },
          { target: "Je suis content.", native: "I'm happy.", correct: false, feedback: "True, but there's a whole year behind it. Frame the feeling inside the story." },
        ],
      },
      {
        speaker: 'npc',
        target: "C'est magnifique, ce que vous avez dit. Votre français est beau. Bonne continuation.",
        native: "What you said is beautiful. Your French is beautiful. May your journey continue.",
      },
      {
        speaker: 'rwen',
        rwenLine: "Look at what you just did. You started this curriculum unable to say Bonjour with confidence. You just told a stranger your year — past, feeling, proverb, hope — in French. We came a long way together. I'm proud of you. Truly.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. The last two recall prompts of the curriculum.',
    prompts: [
      {
        prompt: "What I learned is that... (storytelling opener, in French)",
        correct: [
          "Ce que j'ai appris, c'est que",
          "ce que j'ai appris, c'est que",
          "Ce que j'ai appris c'est que",
        ],
      },
      {
        prompt: "Now, I know (in French)",
        correct: ['Maintenant, je sais', 'maintenant, je sais', 'Maintenant je sais'],
      },
    ],
  },

  mission: {
    title: "Today's Journey — and your last with me for now",
    task: "Tonight, out loud, tell the story of your year of learning French. Past tense for what was. Passé composé for what happened. A feeling. A hope. One proverb. Four to six sentences. To a friend, to your phone camera, to the wall — it doesn't matter. Tell it. You earned it.",
    rwenSignoff: "Tu as commencé avec Bonjour. Tu finis en racontant ta vie. Je ne t'oublierai jamais. Petit à petit, l'oiseau a fait son nid. Bravo, mon ami(e). À très bientôt.",
  },

  phase8: {
    scenario: "Your last week in France. You're at a small café in Aix-en-Provence in the late afternoon — sun on the square, a glass of rosé, the smell of lavender. A regular at the next table — Monsieur Aubert, in his 60s, reading Le Monde — looks up and asks the question that closes the year: 'Racontez-moi votre année en France.' Tell me about your year. You have 4-6 sentences in front of you. This is the capstone.",
    rwenRole: "Monsieur Aubert — retired teacher, ~65, gentle and curious; uses 'vous' (he doesn't know you), will ask one warm follow-up ('et qu'est-ce qui vous a marqué le plus?' — what struck you most?), and end the conversation with 'merci de m'avoir partagé ça'. He listens like someone who has time.",
    successCriteria: "User produces 4-6 connected sentences about their year that include: (1) PAST TENSE — both passé composé AND imparfait used in the same story, (2) at least one EMOTION using either 'avoir peur', 'être content(e)', 'être triste', or 'être frustré(e)', (3) a HOPE using 'J'espère' (+ infinitive OR + que), and (4) AT LEAST ONE OF THE THREE PROVERBS from Lesson 9 used at a fitting moment. Stays in vous register throughout. This is the A2 final integration — the test isn't perfection, it's that all four threads are present and connected.",
    estimatedMinutes: 4,
    bonusXp: 5,
  },
};

export default lesson;

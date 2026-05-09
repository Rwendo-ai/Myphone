import type { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm10-l10',
  module: 10,
  lesson: 10,
  title: 'Tell a story to Rwen',
  estimatedMinutes: 10,
  xpReward: 50,

  hook: {
    rwenLine: "Module 10 finale. Today there is no new vocabulary. Just you, me, and a story you tell from start to finish — opener, four beats, moral, close. Everything we've learned for nine lessons compressed into one telling. I'll be your audience. Make me say 'Cosi!' loud enough to wake the neighbours.",
    culturalNote: "In Ndebele tradition, the apprentice storyteller tells her first complete tale to one trusted listener before she ever tells it to a circle. The first telling is private, scaffolded, kind. The second telling is to the children. The third telling is to the room. Today is your first telling.",
  },

  chunks: [
    {
      id: 'review_kwasukasukela',
      target: 'Kwasukasukela',
      native: 'Once upon a time (opener)',
      emoji: '📖',
      phonetic: 'kwah-soo-kah-soo-KEH-lah',
      audioRef: null,
    },
    {
      id: 'review_cosi',
      target: 'Cosi!',
      native: 'Yes! (audience reply)',
      emoji: '🙌',
      phonetic: '[c-click]OH-see',
      audioRef: null,
    },
    {
      id: 'review_connectors',
      target: 'Kuqala / Bese / Emva kwalokho / Ekugcineni',
      native: 'First / Then / After that / Finally',
      emoji: '🧱',
      phonetic: 'koo-KAH-lah / BEH-seh / eh-MVAH kwah-LOH-koh / eh-koo-g[c-click]EE-neh-nee',
      audioRef: null,
    },
    {
      id: 'review_isifundo',
      target: 'Isifundo salenganekwane yikuthi…',
      native: 'The lesson of this story is that…',
      emoji: '🎓',
      phonetic: 'ee-see-FOON-doh sah-leh-een-gah-neh-KWAH-neh yee-KOO-tee',
      audioRef: null,
    },
    {
      id: 'review_siyabonga',
      target: 'Siyabonga',
      native: 'Thank you (closing the story)',
      literal: 'siya- (we) + bonga (thank)',
      emoji: '🙏',
      phonetic: 'see-yah-BOH-ngah',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Full Module 10 telling — the spine',
    explanation: "A complete Ndebele short tale has six pieces, in order: (1) opener Kwasukasukela → audience Cosi! (2) setup — Kwakukhona X (there was once X) (3) four beats with sequence connectors — Kuqala, Bese, Kanti / Emva kwalokho, Ekugcineni (4) narrative past throughout — wa-/-a or nga-/-a if the story is yours (5) moral — Isifundo salenganekwane yikuthi… (6) thanks — Siyabonga. Six pieces. One spine. Anything you fit on it becomes a story.",
    examples: [
      { target: 'Kwasukasukela.  →  Cosi!', native: 'Opener and reply' },
      { target: 'Kuqala… Bese… Kanti… Ekugcineni…', native: 'Four-beat skeleton' },
      { target: 'Isifundo salenganekwane yikuthi… Siyabonga.', native: 'Moral, then thanks. Story closes.' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match each storytelling element to its place',
      pairs: [
        { left: 'Kwasukasukela', right: 'Opener' },
        { left: 'Cosi!', right: 'Audience reply during story' },
        { left: 'Bese', right: 'Mid-story connector ("then")' },
        { left: 'Isifundo salenganekwane yikuthi…', right: 'Moral frame at the end' },
        { left: 'Siyabonga', right: 'Thanks — closes the story' },
      ],
    },
    {
      type: 'multiple_choice',
      instruction: 'Pick the correct order',
      question: 'Which order describes a full Ndebele short tale?',
      options: [
        { text: 'Kwasukasukela → Cosi! → setup → 4 beats → Isifundo… → Siyabonga', correct: true },
        { text: 'Bayethe! → Kwasukasukela → setup → Cosi!', correct: false },
        { text: 'Sawubona → setup → moral → Sala kuhle', correct: false },
      ],
      explanation: "The Module 10 spine in order. Praise-poetry (Bayethe!) is a different tradition. Greetings open conversations, not stories.",
    },
    {
      type: 'build_sentence',
      instruction: 'Build the moral frame',
      words: ['salenganekwane', 'yikuthi', 'Isifundo'],
      correct: ['Isifundo', 'salenganekwane', 'yikuthi'],
      translation: 'The lesson of this story is that…',
    },
    {
      type: 'translate',
      instruction: 'Translate the closing word',
      prompt: 'Thank you (we thank).',
      correct: ['Siyabonga', 'siyabonga'],
    },
  ],

  rwenDialogue: {
    intro: "This is your first full telling. Rwen will play the audience — answering, prompting, and waiting for your moral. Take your time. Story is patient.",
    lines: [
      { speaker: 'rwen', rwenLine: "I'm sitting on the mat. The fire is low. The room is quiet. I'm ready when you are." },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Kwasukasukela.', native: 'Once upon a time.', correct: true, feedback: "Open. The room leans in." },
          { target: 'Sawubona.', native: 'Hi (greeting).', correct: false, feedback: "That's a greeting, not a story-opener. Try 'Kwasukasukela'." },
          { target: 'Bayethe!', native: 'Hail!', correct: false, feedback: "That's the praise-poetry salute. Folktales open with 'Kwasukasukela'." },
        ],
      },
      { speaker: 'rwen', rwenLine: 'Cosi!' },
      { speaker: 'rwen', rwenLine: "Now your setup. 'Kwakukhona…' — there was once… — and pick anyone: a hare, a sister, yourself. Phase 8 is where you tell the whole story. This is just the doorway." },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Kwakukhona umfana owahamba edolobheni…', native: 'There was once a boy who went to the city…', correct: true, feedback: "Setup landed. From here, four beats and a moral — Phase 8 will guide the rest." },
          { target: 'Ngiyahamba edolobheni.', native: 'I am going to the city. (present)', correct: false, feedback: "Storytelling needs narrative past — wa-/-a or nga-/-a. 'Wahamba' or 'Ngahamba', not 'Ngiyahamba'." },
        ],
      },
      { speaker: 'rwen', rwenLine: "You opened a story. That's the hardest line you'll ever say in isiNdebele — and you just said it. The rest comes in Phase 8.", rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: 'No looking. Final recall of Module 10.',
    prompts: [
      { prompt: 'How does a folktale OPEN? (one word)', correct: ['Kwasukasukela', 'kwasukasukela'] },
      { prompt: 'How does the audience reply during a folktale?', correct: ['Cosi', 'Cosi!', 'cosi'] },
      { prompt: 'What\'s the storyteller\'s frame for delivering the moral? (start with "Isifundo")', correct: ['Isifundo salenganekwane yikuthi', 'isifundo salenganekwane yikuthi'] },
      { prompt: 'How do you CLOSE the telling — the storyteller\'s thank-you word?', correct: ['Siyabonga', 'siyabonga'] },
    ],
  },

  mission: {
    title: "Module 10 Final Mission — tell ONE complete story to a real human",
    task: "Within 48 hours: pick one human (partner, friend, child, parent — anyone). Tell them ONE complete short story using the full spine. Open with 'Kwasukasukela', make them say 'Cosi!', use four sequence beats, deliver a moral with 'Isifundo salenganekwane yikuthi…', close with 'Siyabonga'. Story can be a folktale or your own life. Length: 90 seconds. The form is the gift — what you fit inside it is yours.",
    rwenSignoff: "Module 10 closes here. You went from 'Kwasukasukela' to telling a full story in ten lessons. You're not an imbongi yet — but you can sit at any inkundla and hold a room. That's the whole point. Sala kuhle, mxhumi-zindaba.",
  },

  phase8: {
    scenario: "Your full Module 10 finale. You tell Rwen ONE complete short story (folktale OR a personal story shaped as one) using the full Module 10 spine: Kwasukasukela opener, audience Cosi!, four-beat structure with sequence connectors (Kuqala, Bese, Kanti/Emva kwalokho, Ekugcineni), narrative-past verbs throughout, an Isifundo… moral, and a Siyabonga close. Rwen is your trusted first listener — engaged, gentle, honest.",
    rwenRole: "Patient first-audience — replies 'Cosi!' loudly at the opener and at pauses, prompts 'kwabe sekuthini?' if you stall, holds silence for the moral, and closes with 'Siyabonga, mxhumi-zindaba' (thank you, storyteller). Will give you ONE specific piece of feedback at the end about which part of the spine landed best.",
    successCriteria: "User opened with 'Kwasukasukela' and got a 'Cosi!' back, used at least 3 sequence connectors, used at least 4 narrative-past verbs (wa- or nga- prefix), delivered the moral with 'Isifundo salenganekwane yikuthi…', and closed with 'Siyabonga'. Total story length: 60-120 seconds.",
    estimatedMinutes: 4,
    bonusXp: 10,
  },
};

export default lesson;

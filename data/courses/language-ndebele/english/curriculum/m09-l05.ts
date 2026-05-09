import type { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm09-l05',
  module: 9,
  lesson: 5,
  title: 'iNgoma — drum, song, dance',
  estimatedMinutes: 7,
  xpReward: 35,

  hook: {
    rwenLine: "iNgoma is one Ndebele word that does the work of three English ones. It is the drum. It is the song. It is the dance. They are not separate things in Ndebele thought — they are one event. When the drum starts, the song starts, the body starts. You can't have one without the others.",
    culturalNote: "Ngoma sits at the heart of every Ndebele gathering — weddings, funerals, harvest celebrations, healing ceremonies, royal commemorations like uMzilikazi Day. The traditional drum is hand-played, often as a circle of drummers driving a chorus of singers and stamping dancers. The most famous Ndebele dance is iSitshikitsha — the warriors' dance — historically performed for the king, recognised by its ground-shaking foot stamps and shield work. Notice this lesson's word starts with 'ng' — a single consonant, pronounced like the 'ng' at the end of English 'sing', but at the start of a syllable. That sound is everywhere in isiNdebele.",
  },

  chunks: [
    {
      id: 'ingoma',
      target: 'iNgoma',
      native: 'drum / song / dance — one event',
      literal: 'i- (class 9 noun) + ngoma',
      emoji: '🥁',
      phonetic: 'een-GOH-mah',
      audioRef: null,
    },
    {
      id: 'isigubhu',
      target: 'isigubhu',
      native: 'drum (the physical instrument)',
      literal: 'isi- (class 7) + gubhu (drum body)',
      emoji: '🪘',
      phonetic: 'ee-see-GOO-boo',
      audioRef: null,
    },
    {
      id: 'ukugida',
      target: 'ukugida',
      native: 'to dance the traditional stamping dance',
      literal: 'uku- (infinitive) + gida (stamp / dance)',
      emoji: '👣',
      phonetic: 'oo-koo-GHEE-dah',
      audioRef: null,
    },
    {
      id: 'isitshikitsha',
      target: 'iSitshikitsha',
      native: 'the Ndebele warriors\' stamping dance',
      literal: 'the iconic dance of uMthwakazi, performed at royal events',
      emoji: '🛡️',
      phonetic: 'ee-see-tshee-KEE-tshah',
      audioRef: null,
    },
    {
      id: 'ukucula',
      target: 'ukucula',
      native: 'to sing — note the c-click',
      literal: 'uku- + cula (sing) — c is the dental click',
      emoji: '🎶',
      phonetic: 'oo-koo-[c-click]OO-lah',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'One event, three English words',
    explanation: "When a Ndebele speaker says 'siyaya engomeni' (we're going to the ngoma), they don't mean a concert, a dance class, or a drumming circle. They mean all three at once. This is why translating Ndebele music traditions into English flattens them — English has to choose 'song', 'dance', or 'drumming', and Ndebele refuses to choose. Hold this when you hear the word: ngoma is a unified event, not a category.",
    examples: [
      { target: 'Siyaya engomeni.', native: "We're going to the ngoma (the drum-song-dance event)." },
      { target: 'Bashaya isigubhu.', native: 'They are striking the drum.' },
      { target: 'Bayagida.', native: 'They are dancing (stamping).' },
      { target: 'Bayacula.', native: 'They are singing.' },
    ],
  },

  exercises: [
    {
      type: 'multiple_choice',
      instruction: 'Word range',
      question: "If a Ndebele aunt says 'iNgoma izaqala', what is starting?",
      options: [
        { text: 'The drum, song and dance — all together. The whole event.', correct: true },
        { text: 'A radio song.', correct: false },
        { text: 'Only the drum.', correct: false },
      ],
      explanation: "iNgoma is unified. When it starts, drumming, singing, and dancing all start at once — that's the whole point. English splitting it into 'song / dance / drumming' loses what it actually is.",
    },
    {
      type: 'match_pairs',
      instruction: 'Match the verb / noun to what it does',
      pairs: [
        { left: 'iSitshikitsha', right: "the Ndebele warriors' stamping dance" },
        { left: 'isigubhu', right: 'the drum (the instrument itself)' },
        { left: 'ukugida', right: 'to stamp-dance' },
        { left: 'ukucula', right: 'to sing (note the c-click)' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Type the Ndebele',
      prompt: 'They are striking the drum',
      correct: ['Bashaya isigubhu', 'bashaya isigubhu', 'Bashaya isigubhu.'],
    },
    {
      type: 'multiple_choice',
      instruction: 'Pronunciation check',
      question: "How is 'ukucula' (to sing) pronounced?",
      options: [
        { text: 'oo-koo + dental-click + oo-lah (the c is a click, not an English c)', correct: true },
        { text: 'oo-koo-KOO-lah (c sounds like English k)', correct: false },
        { text: 'oo-koo-SOO-lah (c sounds like English s)', correct: false },
      ],
      explanation: "Remember Module 1 — c, q, x are clicks in isiNdebele. 'ukucula' contains the dental click, the soft tsk-tsk sound. Ndebele people will hear immediately whether you've made the click or skipped it.",
    },
  ],

  rwenDialogue: {
    intro: "It's a Saturday. Your friend Nkosi pulls you outside — there's a wedding ngoma starting two streets over. Don't think too hard. Just go.",
    lines: [
      { speaker: 'npc', target: 'Iza! INgoma izaqala.', native: 'Come! The ngoma is starting.' },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Yebo, sihambe!', native: "Yes, let's go!", correct: true, feedback: "Nkosi grins. 'Hayi mfowethu — uzayifunda iSitshikitsha namhla!' (Today you'll learn iSitshikitsha!)" },
          { target: 'Ngiyacula?', native: 'Should I sing?', correct: false, feedback: "He laughs. 'You'll do everything — sing, drum, dance. That's what ngoma is.' But for now: just say yes and come." },
          { target: 'Cha, ngikhathele.', native: "No, I'm tired.", correct: false, feedback: "Nkosi shrugs and goes alone. You missed the ngoma. In Ndebele life, you miss a lot of culture by saying 'ngikhathele' too easily." },
        ],
      },
      { speaker: 'npc', target: 'Bashaya isigubhu — ulizwa?', native: 'They are striking the drum — do you hear it?' },
      { speaker: 'rwen', rwenLine: "When you arrive, watch the feet first. The stamp drives the song. The song drives the drum. Or the other way around. There is no first." },
    ],
  },

  activeRecall: {
    instruction: 'Recall from memory.',
    prompts: [
      { prompt: 'Drum / song / dance as one event', correct: ['ingoma', 'iNgoma', 'Ingoma'] },
      { prompt: 'The drum (the physical instrument)', correct: ['isigubhu', 'Isigubhu'] },
      { prompt: "The Ndebele warriors' stamping dance", correct: ['isitshikitsha', 'iSitshikitsha', 'Isitshikitsha'] },
      { prompt: 'To sing (uses the c-click)', correct: ['ukucula', 'Ukucula'] },
      { prompt: 'To stamp-dance', correct: ['ukugida', 'Ukugida'] },
    ],
  },

  mission: {
    title: 'Watch one iSitshikitsha clip',
    task: "Search YouTube for 'iSitshikitsha Ndebele dance' or 'Black Umfolosi'. Watch one clip the whole way through with no other tab open. Listen for the drum, the call-and-response singing, and watch the foot stamps. That is what 'iNgoma' means. You are watching the soul of uMthwakazi.",
    rwenSignoff: "Music in isiNdebele is not entertainment. It is how the nation remembers itself. Sala kuhle.",
  },

  phase8: {
    scenario: "You're at a small family wedding in Mzilikazi suburb of Bulawayo. The ngoma has started. An older auntie, MaNcube, is teaching you to clap the rhythm and asking why you're not dancing. She's playful and warm — she wants you in the circle, not on the edge.",
    rwenRole: "MaNcube — 60s, queen of every family ngoma she's ever attended, will mock-scold you affectionately if you stand too far back, will praise you genuinely if you try.",
    successCriteria: "User uses 'iNgoma' correctly (referring to the whole event, not just music), uses 'ukugida' or 'ukucula' in context, and accepts the invitation to join in (rather than refusing). Bonus if they ask about iSitshikitsha specifically.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;

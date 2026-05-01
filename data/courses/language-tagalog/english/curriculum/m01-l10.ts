import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm01-l10-conversation',
  module: 1,
  lesson: 10,
  title: 'A complete Filipino greeting',
  estimatedMinutes: 7,
  xpReward: 50,

  hook: {
    rwenLine: "Today we stitch it all together — greeting, wellness check, name, origin, thanks, goodbye. Nine lessons compress into one full Filipino exchange. By the end, you'll have run an entire conversation in Tagalog.",
    culturalNote: "A 'complete' Filipino greeting isn't a single phrase — it's a sequence. Greeting → wellness check → reply → mutual reply → name exchange → origin → small talk → thanks → goodbye with care. Skip any step and it feels truncated. Today you'll move through the whole flow.",
  },

  chunks: [
    {
      id: 'review_magandang_umaga_po_kumusta',
      target: 'Magandang umaga po. Kumusta po kayo?',
      native: 'Good morning (respectful). How are you (respectful)?',
      literal: 'Beautiful morning respect-marker. How respect-marker you-plural?',
      emoji: '🌅',
      phonetic: 'ma-gan-DANG u-MA-ga PO. ku-MUS-ta PO ka-YO',
      audioRef: null,
    },
    {
      id: 'review_ako_si_taga',
      target: 'Ako si Alex. Taga-Sydney po ako.',
      native: "I'm Alex. I'm from Sydney (respectful).",
      literal: 'I name-marker Alex. From-Sydney respect-marker I.',
      emoji: '🌏',
      phonetic: 'a-KO si a-LEKS. ta-GA SID-ni PO a-KO',
      audioRef: null,
    },
    {
      id: 'review_salamat_paalam',
      target: 'Maraming salamat po. Sige po, ingat kayo.',
      native: 'Thank you so much (respectful). OK (respectful), take care.',
      literal: 'Many thanks respect-marker. Go-ahead respect-marker, careful you-plural.',
      emoji: '🙏',
      phonetic: 'ma-RA-ming sa-LA-mat PO. SI-ge PO, i-NGAT ka-YO',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'The full politesse flow',
    explanation: "Every Filipino interaction with an elder or stranger follows the same arc: 1) Time-of-day greeting + po 2) Kumusta + po + kayo (wellness) 3) Reply + bounce-back 4) Name with 'si' 5) Origin with 'Taga-' 6) Thanks with 'po' 7) Goodbye with 'ingat'. Hit every beat and you sound fluent.",
    examples: [
      { target: 'Magandang umaga po', native: 'Step 1 — greeting' },
      { target: 'Ako si Alex. Taga-Sydney ako.', native: 'Step 4-5 — name + origin' },
      { target: 'Sige po, ingat kayo. Hanggang sa muli.', native: 'Step 7 — goodbye with care' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the Tagalog phrase to its conversational role',
      pairs: [
        { left: 'Magandang umaga po', right: 'Greeting (morning)' },
        { left: 'Kumusta po kayo?', right: 'Wellness check' },
        { left: 'Ako si Alex', right: 'Self-introduction' },
        { left: 'Taga-Sydney ako', right: 'Origin' },
        { left: 'Sige po, ingat kayo', right: 'Goodbye with care' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'You meet your tita-in-law for the first time. After greeting and kumusta, what comes next?',
      sentence: 'Ako _____ Alex. Taga-Sydney po ako.',
      options: ['si', 'po', 'taga'],
      correct: 'si',
      context: "Always 'si' before a personal name.",
    },
    {
      type: 'translate',
      instruction: 'Type the full respectful introduction in Tagalog (use the city Sydney)',
      prompt: "I'm from Sydney (respectful)",
      correct: ['Taga-Sydney po ako', 'taga-Sydney po ako', 'Taga Sydney po ako', 'taga sydney po ako'],
    },
    {
      type: 'build_sentence',
      instruction: 'Build the full goodbye for an elder',
      words: ['kayo', 'ingat', 'po,', 'Sige'],
      correct: ['Sige', 'po,', 'ingat', 'kayo'],
      translation: 'OK (respectful), take care (respectful)',
    },
    {
      type: 'translate',
      instruction: 'Type the full respectful greeting + wellness check in Tagalog (morning)',
      prompt: 'Good morning. How are you? (both respectful)',
      correct: [
        'Magandang umaga po. Kumusta po kayo?',
        'Magandang umaga po. Kumusta po kayo',
        'magandang umaga po. kumusta po kayo?',
        'magandang umaga po. kumusta po kayo',
        'Magandang umaga po, kumusta po kayo?',
        'Magandang umaga po kumusta po kayo',
      ],
    },
    {
      type: 'multiple_choice',
      instruction: "You've just met your tita's neighbour, an older lola. You said hello, exchanged kumustas, and gave your name and origin. She offered you halo-halo. You're leaving. What's the right closing sequence?",
      question: 'Pick the full closing',
      options: [
        { text: 'Maraming salamat po. Sige po, ingat kayo. Hanggang sa muli.', correct: true },
        { text: 'Bye, salamat.', correct: false },
        { text: 'Paalam.', correct: false },
      ],
      explanation: "Layered Filipino farewell: thanks (with po) + sige po, ingat kayo + hanggang sa muli. 'Bye' is too English; bare 'Paalam' is too final and skips the care.",
    },
  ],

  rwenDialogue: {
    intro: "It's the full test, kabayan. 8am at a fiesta in Cavite. Your tita drags you over to meet her best friend — a lola named Aling Rosa, 70s, sharp, warm. She has questions. Run the whole sequence: greet, kumusta, name, origin, thank her, leave gracefully.",
    lines: [
      {
        speaker: 'npc',
        target: 'O, sino ito?',
        native: 'Oh, who is this?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Magandang umaga po, lola. Ako si Alex. Taga-Sydney po ako.', native: "Good morning (respectful), grandma. I'm Alex. I'm from Sydney (respectful).", correct: true, feedback: 'Full opening — greeting, name with si, origin with Taga-, po woven through. Aling Rosa is already smiling.' },
          { target: 'Hi, Alex po, Sydney.', native: 'Hi, Alex (respectful), Sydney.', correct: false, feedback: 'Pieces are there but unstructured. Try the full frames: Magandang umaga po. Ako si Alex. Taga-Sydney po ako.' },
          { target: 'Ako si Alex.', native: "I'm Alex.", correct: false, feedback: "Right structure but skipped the greeting AND the origin. She wants the full flow." },
        ],
      },
      {
        speaker: 'npc',
        target: 'Ay, Sydney pala! Kumusta ka, anak?',
        native: 'Oh, Sydney! How are you, child?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Mabuti naman po, salamat. Kumusta po kayo, lola?', native: "I'm fine (respectful), thanks. How are you (respectful), grandma?", correct: true, feedback: "Beautiful — answered with po, then bounced the question back with kayo + po. That's a real Filipino exchange." },
          { target: 'Mabuti.', native: 'Good.', correct: false, feedback: 'Too clipped to a lola — soften with naman, add po, and bounce the question back.' },
          { target: 'Salamat po.', native: 'Thanks (respectful).', correct: false, feedback: "She asked how you are — answer with mabuti naman po, salamat, then ask her back." },
        ],
      },
      {
        speaker: 'npc',
        target: 'Mabuti naman din. Sige, kain ka muna ng halo-halo, anak.',
        native: "I'm fine too. Go on, eat some halo-halo first, child.",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Maraming salamat po, lola. Sige po, ingat kayo. Hanggang sa muli.', native: 'Thank you so much (respectful), grandma. OK (respectful), take care. Until next time.', correct: true, feedback: 'And the perfect closing — layered thanks, ingat, hanggang sa muli. You ran the whole flow without a stumble.' },
          { target: 'Paalam.', native: 'Goodbye.', correct: false, feedback: "Too formal/final for a fiesta — go with the warm sige po, ingat kayo, hanggang sa muli." },
          { target: 'Salamat.', native: 'Thanks.', correct: false, feedback: "She's a lola — at minimum maraming salamat po, then a proper farewell with ingat." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "You just had a complete Filipino conversation. Greeting, wellness, name, origin, thanks, goodbye — every beat with po. Module 1 is yours. Tagalog has welcomed you.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory — the full respectful versions.',
    prompts: [
      {
        prompt: 'Good morning. How are you? (both respectful, in Tagalog)',
        correct: [
          'Magandang umaga po. Kumusta po kayo?',
          'Magandang umaga po. Kumusta po kayo',
          'magandang umaga po. kumusta po kayo?',
          'magandang umaga po. kumusta po kayo',
          'Magandang umaga po, kumusta po kayo?',
          'Magandang umaga po kumusta po kayo',
        ],
      },
      {
        prompt: 'OK (respectful), take care. Until next time. (in Tagalog)',
        correct: [
          'Sige po, ingat kayo. Hanggang sa muli.',
          'Sige po, ingat kayo. Hanggang sa muli',
          'sige po, ingat kayo. hanggang sa muli',
          'Sige po ingat kayo Hanggang sa muli',
          'Sige po, ingat kayo, hanggang sa muli',
        ],
      },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Today, run the FULL flow with someone — even with Rwen in Phase 8. Greeting → kumusta → name → origin → thanks → goodbye, all in Tagalog, all with po. One complete Filipino exchange.",
    rwenSignoff: "Module 1 closes here. Maraming salamat sa paglalakbay — thanks for the journey. Sige po, ingat ka. Hanggang sa muli.",
  },

  phase8: {
    scenario: "It's 8am at a fiesta in Cavite. Your tita drags you across the courtyard to meet Aling Rosa, her best friend of 40 years — a sharp lola in her 70s with halo-halo bowls in her hands. You have a full conversation: greet her, exchange kumustas, give your name and origin, accept her halo-halo, thank her, and leave properly when your tita pulls you on to the next introduction.",
    rwenRole: "Aling Rosa — 70s, longtime parishioner and fiesta hostess, holds court with halo-halo and sharp affection; she runs every guest through the full Filipino sequence and silently judges any beat that's missing.",
    successCriteria: "User completes ALL of: (1) time-of-day greeting with 'po', (2) self-intro with 'Ako si [name]', (3) origin with 'Taga-[place] po ako', (4) reply to 'kumusta' with 'mabuti naman po, salamat' AND bounces it back with 'Kumusta po kayo?', (5) thanks with 'maraming salamat po', (6) goodbye including 'sige po, ingat kayo' and/or 'hanggang sa muli'. The 'po' must appear consistently throughout.",
    estimatedMinutes: 4,
    bonusXp: 5,
  },
};

export default lesson;

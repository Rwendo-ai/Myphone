import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm10-l05-pyaar-aur-fikr',
  module: 10,
  lesson: 5,
  title: 'Pyaar & Fikr — Care & Worry',
  estimatedMinutes: 5,
  xpReward: 30,

  hook: {
    rwenLine: "In Hindi, care and worry live next door to each other. 'मुझे आपकी फिक्र है' (mujhe aapki fikr hai — I worry about you) is one of the warmest sentences in the language. Saying you worry is saying you love. Today we learn the words that hold the people you can't stop thinking about.",
    culturalNote: "Indian families show love through fikr — concern, fussing, calling at odd hours to ask if you ate. To a Westerner this can feel like helicoptering; to a Hindi-speaker it IS love. The phrase 'apna khayal rakhna' (take care of yourself) is heard daily and means more than 'goodbye' — it means 'I'm carrying you in my head'.",
  },

  chunks: [
    {
      id: 'mujhe_aapki_fikr_hai',
      target: 'मुझे आपकी फिक्र है — Mujhe aapki fikr hai',
      native: 'I worry about you / I care about you',
      literal: 'To-me your worry is',
      emoji: '💚',
      phonetic: 'mu-JHAY AAP-kee fikr hai',
      audioRef: null,
    },
    {
      id: 'apna_khayal_rakhna',
      target: 'अपना ख्याल रखना — Apna khayal rakhna',
      native: 'Take care of yourself',
      literal: 'Own care keep',
      emoji: '🤗',
      phonetic: 'AP-na kha-YAAL RAKH-na',
      audioRef: null,
    },
    {
      id: 'main_pareshaan_hoon',
      target: 'मैं परेशान हूँ — Main pareshaan hoon',
      native: 'I am worried / I am troubled',
      literal: 'I worried am',
      emoji: '😟',
      phonetic: 'mayn pa-re-SHAAN hoon',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Care frames — pyaar (love), fikr (worry), khayal (mindfulness)',
    explanation: "Three Hindi care-words, three textures. Pyaar (प्यार) is open love — for partners, children, close friends. Fikr (फिक्र) is the love that worries — what parents and elders give. Khayal (ख्याल) is the love that remembers — 'apna khayal rakhna' (take care) and 'aapka khayal aaya' (I thought of you / you came to my mind). Same heart, different speeds.",
    examples: [
      { target: 'Mujhe aapki fikr hai — मुझे आपकी फिक्र है', native: 'I worry about you / I care about you' },
      { target: 'Aapka khayal aaya — आपका ख्याल आया', native: 'You came to my mind / I was thinking of you' },
      { target: 'Apna khayal rakhna — अपना ख्याल रखना', native: 'Take care of yourself' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the care phrase to its meaning',
      pairs: [
        { left: 'Mujhe aapki fikr hai', right: 'I worry about you / I care' },
        { left: 'Apna khayal rakhna', right: 'Take care of yourself' },
        { left: 'Main pareshaan hoon', right: 'I am worried / troubled' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Tell someone you were thinking of them',
      sentence: 'Aaj aapka _____ aaya.',
      options: ['khayal', 'gussa', 'shukriya'],
      correct: 'khayal',
      context: 'Today you came to my mind / I was thinking of you.',
    },
    {
      type: 'translate',
      instruction: 'Type in Romanized Hindi',
      prompt: 'Take care of yourself',
      correct: ['Apna khayal rakhna', 'apna khayal rakhna'],
    },
    {
      type: 'multiple_choice',
      instruction: "Your friend has been quiet for weeks. You want to gently check in. What do you write?",
      question: 'Open a caring check-in:',
      options: [
        { text: 'Mujhe aapki fikr hai. Aap theek to hain?', correct: true },
        { text: 'Theek hai, koi baat nahin', correct: false },
        { text: 'Main bahut khush hoon', correct: false },
      ],
      explanation: "'Mujhe aapki fikr hai. Aap theek to hain?' (I worry about you. Are you okay?) opens the door without pressing. The other two miss the moment.",
    },
    {
      type: 'build_sentence',
      instruction: "Build 'Take care of yourself, I worry about you'",
      words: ['Apna', 'khayal', 'rakhna,', 'mujhe', 'aapki', 'fikr', 'hai.'],
      correct: ['Apna', 'khayal', 'rakhna,', 'mujhe', 'aapki', 'fikr', 'hai.'],
      translation: 'Take care of yourself, I worry about you',
    },
    {
      type: 'translate',
      instruction: 'Type in Romanized Hindi',
      prompt: 'I worry about you / I care about you',
      correct: ['Mujhe aapki fikr hai', 'mujhe aapki fikr hai'],
    },
  ],

  rwenDialogue: {
    intro: "It's been a few days. Rwen has noticed you've been quiet.",
    lines: [
      {
        speaker: 'rwen',
        rwenLine: "Aaj kal aap kam dikhte ho. Sab theek hai? Mujhe aapki fikr ho rahi thi.",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Shukriya, Rwen. Aapka khayal aaya mujhe bhi. Main thoda pareshaan tha, lekin ab theek hoon. Apna khayal rakhna.', native: "Thank you, Rwen. You came to my mind too. I was a little troubled, but now I'm okay. Take care of yourself.", correct: true, feedback: "Received the worry, returned the warmth, named your truth, and closed with care. That's a complete Hindi exchange of fikr." },
          { target: 'Theek hoon', native: "I'm fine", correct: false, feedback: "Receive the care — 'Shukriya, Rwen. Mujhe bhi aapka khayal aaya. Main thoda pareshaan tha lekin ab theek hoon.'" },
          { target: 'Mujhe gussa aaya', native: 'I got angry', correct: false, feedback: "Match the register — Rwen offered fikr; offer it back: 'Shukriya. Aapka khayal aaya. Apna khayal rakhna.'" },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Hum ek-doosre ka khayal rakhte hain — we keep each other in mind. That's Hindi friendship.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'I worry about you / I care', correct: ['Mujhe aapki fikr hai', 'mujhe aapki fikr hai'] },
      { prompt: 'Take care of yourself', correct: ['Apna khayal rakhna', 'apna khayal rakhna'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Pick one person you haven't checked in on. Send them in Hindi: 'Aapka khayal aaya. Apna khayal rakhna.' (You came to my mind. Take care of yourself.) Eight words. Watch what comes back.",
    rwenSignoff: "Jisko hum yaad karte hain, woh hamare paas hi hai — those we remember are already with us.",
  },

  phase8: {
    scenario: "Wednesday night, video call from your mother in Jaipur. She's noticed you've been distant on the family WhatsApp and her tone is doing the classic Indian-mother thing — half-scolding, half-worried. You have to reassure her without dismissing her, in Hindi.",
    rwenRole: "Maa — your mother, ~58, will not accept 'theek hoon' alone; she needs to hear that you heard her worry and that you'll take care of yourself going forward.",
    successCriteria: "User receives her fikr explicitly ('aapka khayal aata hai mujhe' or similar — names HER care), admits the truth softly ('main thoda pareshaan tha'), and closes with the reciprocal 'aap bhi apna khayal rakhna' — care offered back, not just received.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;

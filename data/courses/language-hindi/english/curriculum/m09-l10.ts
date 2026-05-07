import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm09-l10-mumbai-journey',
  module: 9,
  lesson: 10,
  title: 'Navigating Mumbai — Full Journey',
  estimatedMinutes: 7,
  xpReward: 50,

  hook: {
    rwenLine: "Mumbai. 22 million people. Auto-rickshaws, kaali-peeli taxis, the Western Line, the Harbour Line, the Metro, and traffic that moves like a slow river. Today you stitch every Module 9 phrase together: from Chhatrapati Shivaji airport to a hotel in Colaba — auto, train, directions, check-in. All in Hindi.",
    culturalNote: "Mumbai is famously the friendliest big Indian city to navigate in Hindi (technically it's Marathi too, but Hindi works everywhere). Locals will literally walk you to your destination if you ask for directions in Hindi. The city rewards effort. To navigate Mumbai in Hindi is to belong to it for a moment.",
  },

  chunks: [
    {
      id: 'pahunch_gaye',
      target: 'पहुँच गए',
      native: "I have arrived / We've arrived",
      literal: 'Pahunch gaye — arrived (completed)',
      emoji: '🎉',
      phonetic: 'puh-HOONCH ga-YEH',
      audioRef: null,
    },
    {
      id: 'mujhe_jaana_hai',
      target: 'मुझे ... जाना है',
      native: 'I need to go to ...',
      literal: 'Mujhe ... jaana hai — to-me ... to-go is',
      emoji: '🚖',
      phonetic: 'MUJ-eh ... JAA-naa hai',
      audioRef: null,
    },
    {
      id: 'kitna_dur',
      target: 'अभी कितना दूर?',
      native: 'How far now? (mid-journey)',
      literal: 'Abhi kitne door — now how far?',
      emoji: '🛣️',
      phonetic: 'a-BHEE KIT-naa DOOR',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Mujhe [place] jaana hai — I need to go to [place]',
    explanation: "The most useful frame in any Indian transport conversation. 'Mujhe Colaba jaana hai' (I need to go to Colaba). 'Mujhe airport jaana hai' (I need to go to the airport). It opens every taxi, auto, and train conversation. Pair with destination, every time.",
    examples: [
      { target: 'Mujhe Colaba jaana hai', native: 'I need to go to Colaba' },
      { target: 'Mujhe airport jaana hai', native: 'I need to go to the airport' },
      { target: 'Pahunch gaye!', native: "We've arrived!" },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the journey phrase to its meaning',
      pairs: [
        { left: 'Mujhe ... jaana hai', right: 'I need to go to ...' },
        { left: 'Pahunch gaye', right: 'We have arrived' },
        { left: 'Abhi kitne door?', right: 'How far now?' },
      ],
    },
    {
      type: 'multiple_choice',
      instruction: "You've finally reached your hotel after a long auto ride. What do you exclaim?",
      question: "We've arrived:",
      options: [
        { text: 'Pahunch gaye!', correct: true },
        { text: 'Mujhe jaana hai', correct: false },
        { text: 'Kitne door?', correct: false },
      ],
      explanation: "'Pahunch gaye!' — past completion, 'we have arrived'. Use it when the journey is done. 'Mujhe jaana hai' is for the start of the journey, 'kitne door?' is mid-way.",
    },
    {
      type: 'translate',
      instruction: 'Type in Romanized Hindi',
      prompt: 'I need to go to Colaba',
      correct: ['Mujhe Colaba jaana hai', 'mujhe colaba jaana hai', 'Mujhe Colaba jaana hai.', 'mujhe colaba jaana hai.'],
    },
    {
      type: 'fill_blank',
      instruction: 'Tell the auto driver where you need to go',
      sentence: 'Mujhe Colaba _____ hai.',
      options: ['jaana', 'aana', 'rukna'],
      correct: 'jaana',
      context: 'I need to go to Colaba.',
    },
    {
      type: 'build_sentence',
      instruction: "Build 'Brother, I need to go to the airport. Will the meter run?'",
      words: ['Bhaiya,', 'mujhe', 'airport', 'jaana', 'hai.', 'Meter', 'chalega', 'kya?'],
      correct: ['Bhaiya,', 'mujhe', 'airport', 'jaana', 'hai.', 'Meter', 'chalega', 'kya?'],
      translation: 'Brother, I need to go to the airport. Will the meter run?',
    },
    {
      type: 'translate',
      instruction: 'Type in Romanized Hindi',
      prompt: 'How far now? (mid-journey)',
      correct: ['Abhi kitne door?', 'abhi kitne door?', 'Abhi kitne door', 'abhi kitne door'],
    },
  ],

  rwenDialogue: {
    intro: "The full Mumbai run: airport → auto-rickshaw → Colaba hotel. Three Hindi conversations, one journey. You're doing this.",
    lines: [
      {
        speaker: 'user',
        userChoices: [
          { target: 'Bhaiya, mujhe Colaba jaana hai. Meter chalega kya?', native: 'Brother, I need to go to Colaba. Will the meter run?', correct: true, feedback: "The complete auto opening: address, destination, meter check. He nods, starts the meter." },
          { target: 'Colaba', native: 'Colaba', correct: false, feedback: "Just the destination — no negotiation. Open with: 'Bhaiya, mujhe Colaba jaana hai. Meter chalega kya?'" },
          { target: 'Mujhe Colaba jaana hai', native: 'I need to go to Colaba', correct: false, feedback: "Half the script — add the meter check: 'Mujhe Colaba jaana hai. Meter chalega kya?'" },
        ],
      },
      {
        speaker: 'npc',
        target: 'हाँ मैडम, मीटर से चलूँगा। बैठिए।',
        native: "Yes madam, I'll go by the meter. Get in.",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Bhaiya, abhi kitne door? Aur Marine Drive ke baad seedhe jaana, fir daayen.', native: "Brother, how far now? And after Marine Drive go straight, then right.", correct: true, feedback: "Mid-journey check + clear directions for the final stretch. He's impressed — your Hindi is local-grade." },
          { target: 'Bas paas hi hai?', native: 'Just nearby?', correct: false, feedback: "Don't take his answer at face value — ask 'Abhi kitne door?' for a real number, then give your final directions." },
          { target: 'Seedhe', native: 'Straight', correct: false, feedback: "Add destination context — 'Marine Drive ke baad seedhe, fir daayen.' Stack the directions like you've been practising." },
        ],
      },
      {
        speaker: 'npc',
        target: 'पहुँच गए मैडम — कोलाबा।',
        native: "We've arrived madam — Colaba.",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Pahunch gaye! Dhanyavaad bhaiya. Kitne hue?', native: "We've arrived! Thank you brother. How much was it?", correct: true, feedback: "Arrival + thanks + payment. Clean closing. The meter is honest. You walk into the hotel still in Hindi mode." },
          { target: 'OK, thanks', native: 'OK, thanks (English)', correct: false, feedback: "Stay in Hindi to the end — 'Pahunch gaye! Dhanyavaad bhaiya. Kitne hue?'" },
          { target: 'Bye', native: 'Bye', correct: false, feedback: "Close in Hindi — 'Pahunch gaye! Dhanyavaad bhaiya. Kitne hue?' Pay him with the same language you greeted him with." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Pahunch gaye. You navigated Mumbai in Hindi — auto, meter, directions, payment. Module 9 complete. India is no longer foreign. Module 10 — relationships and emotion — begins next. Phir milenge.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'I need to go to Colaba', correct: ['Mujhe Colaba jaana hai', 'mujhe colaba jaana hai', 'Mujhe Colaba jaana hai.', 'mujhe colaba jaana hai.'] },
      { prompt: "We've arrived!", correct: ['Pahunch gaye!', 'pahunch gaye!', 'Pahunch gaye', 'pahunch gaye'] },
    ],
  },

  mission: {
    title: "Your Module 9 Mission",
    task: "Plan a Hindi journey today — real or imaginary. From where you are to somewhere specific. Use the full stack: 'Mujhe [place] jaana hai. Meter chalega kya? Seedhe jao, fir daayen mudo. Pahunch gaye!' One continuous Hindi journey, beginning to end.",
    rwenSignoff: "Pahunch gaye! You navigated Module 9. Every road in India now has a Hindi name for you. Module 10 — the heart — begins next. Phir milenge.",
  },

  phase8: {
    scenario: "Capstone run: from Chhatrapati Shivaji Maharaj International airport (Mumbai) you must reach a hotel in Colaba. You need to (1) hail an auto, ask 'meter chalega kya?', (2) state destination with 'Mujhe Colaba jaana hai', (3) navigate the driver mid-journey using seedhe / daayen / baayen / mira, (4) check distance with 'kitne door?', (5) close with 'pahunch gaye' + 'kitne hue?' (how much was it?). Multiple Hindi turns, one journey, no English fallback.",
    rwenRole: "Auto driver outside Mumbai's CSM airport — mid-30s, will run the meter only if you ask in Hindi, knows Colaba but needs your turn-by-turn for the final lanes, your final examiner for everything Module 9 has taught.",
    successCriteria: "User chains at least four Module 9 patterns into one continuous Hindi journey: 'Mujhe Colaba jaana hai' (destination) + 'Meter chalega kya?' (negotiation) + 'Seedhe jao, fir daayen mudo' (mid-journey directions) + 'Abhi kitne door?' (distance check) + 'Pahunch gaye! Kitne hue?' (arrival), without dropping into English even when the driver speaks English first.",
    estimatedMinutes: 4,
    bonusXp: 5,
  },
};

export default lesson;

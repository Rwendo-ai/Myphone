import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm02-l05-samajh-nahi-aaya',
  module: 2,
  lesson: 5,
  title: "Samajh Nahi Aaya — I Don't Understand",
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Native Hindi at full speed sounds like one continuous word. You're going to get lost — that's normal. These three phrases are your survival kit: name the gap, slow them down, get the repeat.",
    culturalNote: "Asking someone in India to slow down or repeat themselves is never rude — it's an invitation. People will often switch from Hindi to Hinglish to make sure you're following, or use hand gestures, or mime out the meaning. The thing not to do is nod along when you've lost the thread. Indian conversation is high-context: if you fake understanding now, the misunderstanding will compound later.",
  },

  chunks: [
    {
      id: 'samajh_nahi_aaya',
      target: 'मुझे समझ नहीं आया',
      native: "I don't understand",
      literal: 'Mujhe samajh nahi aaya — to-me understanding not came',
      emoji: '😕',
      phonetic: 'MU-jhe sa-MAJH na-HEE AA-yaa',
      audioRef: null,
    },
    {
      id: 'dheere_boliye',
      target: 'धीरे बोलिए, कृपया',
      native: 'Please speak slowly',
      literal: 'Dheere boliye kripaya — slow speak(formal) please',
      emoji: '🐢',
      phonetic: 'DHEE-re BO-li-ye KRIP-ya-aa',
      audioRef: null,
    },
    {
      id: 'phir_se',
      target: 'फिर से कहिए',
      native: 'Please say it again',
      literal: 'Phir se kahiye — again say(formal)',
      emoji: '🔄',
      phonetic: 'PHIR se KAH-i-ye',
      audioRef: null,
    },
  ],

  pattern: {
    name: '-iye — the formal command/request',
    explanation: "Hindi verbs take an '-iye' ending to form formal/polite commands and requests. 'Bolna' (to speak) → 'boliye' (please speak). 'Kahna' (to say) → 'kahiye' (please say). Same dial as kijiye, bataaiye. Pair any -iye verb with 'kripaya' for maximum politeness.",
    examples: [
      { target: 'धीरे बोलिए (Dheere boliye)', native: 'Please speak slowly' },
      { target: 'फिर से कहिए (Phir se kahiye)', native: 'Please say it again' },
      { target: 'बताइए (Bataaiye)', native: 'Please tell me' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the phrase to its meaning',
      pairs: [
        { left: 'समझ नहीं आया (Samajh nahi aaya)', right: "I don't understand" },
        { left: 'धीरे बोलिए (Dheere boliye)', right: 'Please speak slowly' },
        { left: 'फिर से कहिए (Phir se kahiye)', right: 'Please say it again' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Make the request polite and formal',
      sentence: 'धीरे _____, कृपया।',
      options: ['बोलिए (boliye)', 'बोलो (bolo)', 'बोल (bol)'],
      correct: 'बोलिए (boliye)',
      context: 'A shopkeeper is rattling off prices too fast to follow.',
    },
    {
      type: 'translate',
      instruction: 'Type in Hindi (Romanized is fine)',
      prompt: 'Please speak slowly',
      correct: ['धीरे बोलिए, कृपया', 'धीरे बोलिए', 'Dheere boliye kripaya', 'dheere boliye', 'Dheere boliye'],
    },
    {
      type: 'multiple_choice',
      instruction: "Someone speaks too fast and you missed everything. What's the cleanest combo?",
      question: 'Choose the best response',
      options: [
        { text: 'मुझे समझ नहीं आया। फिर से कहिए, कृपया। (Mujhe samajh nahi aaya. Phir se kahiye, kripaya.)', correct: true },
        { text: 'थोड़ा-थोड़ा (Thoda-thoda)', correct: false },
        { text: 'कोई बात नहीं (Koi baat nahi)', correct: false },
      ],
      explanation: "Naming the gap ('samajh nahi aaya') AND asking for the repeat ('phir se kahiye') is the full move. 'Thoda-thoda' = 'a little', 'koi baat nahi' = 'no problem' — neither helps you here.",
    },
    {
      type: 'build_sentence',
      instruction: 'Build "Please say it again"',
      words: ['कहिए (kahiye)', 'से (se)', 'फिर (Phir)'],
      correct: ['फिर (Phir)', 'से (se)', 'कहिए (kahiye)'],
      translation: 'Please say it again',
    },
    {
      type: 'translate',
      instruction: 'Type in Hindi (Romanized is fine)',
      prompt: "I don't understand",
      correct: ['मुझे समझ नहीं आया', 'Mujhe samajh nahi aaya', 'mujhe samajh nahi aaya', 'samajh nahi aaya'],
    },
  ],

  rwenDialogue: {
    intro: "You're at a Mumbai dabba shop and the owner is rattling off the day's specials at full speed. Slow this down.",
    lines: [
      {
        speaker: 'npc',
        target: 'आज के लिए वड़ा पाव, मिसल पाव, साबूदाना खिचड़ी, कांदा पोहा और पाव भाजी है। (Aaj ke liye vada pav, misal pav, sabudana khichdi, kanda poha aur pav bhaji hai.)',
        native: "For today there's vada pav, misal pav, sabudana khichdi, kanda poha and pav bhaji.",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'मुझे समझ नहीं आया। धीरे बोलिए, कृपया। (Mujhe samajh nahi aaya. Dheere boliye, kripaya.)', native: "I don't understand. Please speak slowly.", correct: true, feedback: "Exactly right — you named the gap and asked for what you need." },
          { target: 'समझ गया (Samajh gaya)', native: 'I understood', correct: false, feedback: "Only say that if you actually got it. Pretending now means worse confusion later." },
          { target: 'कोई बात नहीं (Koi baat nahi)', native: 'No problem', correct: false, feedback: "That's a reply to thanks or apology — not what you say when you're lost." },
        ],
      },
      {
        speaker: 'npc',
        target: 'अरे, ठीक है — वड़ा... पाव... मिसल... ठीक? (Are, theek hai — vada... pav... misal... theek?)',
        native: 'Oh, okay — vada... pav... misal... got it?',
      },
      {
        speaker: 'rwen',
        rwenLine: "Asking for slower speech isn't weakness — it's exactly what good learners do. You bought yourself a chance to actually follow.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'Please speak slowly', correct: ['धीरे बोलिए, कृपया', 'धीरे बोलिए', 'Dheere boliye kripaya', 'dheere boliye'] },
      { prompt: "I don't understand", correct: ['मुझे समझ नहीं आया', 'Mujhe samajh nahi aaya', 'mujhe samajh nahi aaya', 'samajh nahi aaya'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Listen to two minutes of Hindi audio today — a Bollywood song, a podcast, anything. When you lose the thread, say 'mujhe samajh nahi aaya, dheere boliye' out loud. Practice flagging it, even alone.",
    rwenSignoff: "Slow is smooth. Smooth is fluent. Phir milenge.",
  },

  phase8: {
    scenario: "You're squashed into a packed BEST bus on the Bandra-Worli sea link route in Mumbai and the conductor is firing fare options, change, and stop names at machine-gun speed — half Hindi, half Marathi. You can't catch a single word but the bus is about to lurch off and he's holding out his hand for money.",
    rwenRole: "Sandeep — BEST bus conductor, ~35, fast-talking and impatient with passengers who fumble; will respect a learner who admits the gap, won't respect a blank stare.",
    successCriteria: "User says 'Mujhe samajh nahi aaya' to name the problem, follows with 'Dheere boliye, kripaya' (NOT just 'phir se' — speed is the issue, not memory), and uses 'Phir se kahiye, kripaya' on the second pass when he still goes too fast.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;

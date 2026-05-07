import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm02-l10-survival-conversation',
  module: 2,
  lesson: 10,
  title: 'Survival Conversation — Putting It Together',
  estimatedMinutes: 7,
  xpReward: 50,

  hook: {
    rwenLine: "Nine tools in your kit. Today you chain them all into one real scenario — getting around an Indian city with nothing but the survival phrases you've learned this module. The test isn't the vocabulary. It's whether you can keep the conversation alive long enough to get what you need.",
    culturalNote: "Indian conversations rarely follow a script — they branch, loop, code-switch. The real survival skill is staying in the exchange when you've lost the thread: name the gap, ask for the repeat, hedge with 'shayad', commit with 'theek hai'. Politeness, honesty about what you don't know, and a willingness to keep trying will carry you further than any vocabulary list. The phrases in this module are the rope; you're learning the knots.",
  },

  chunks: [
    {
      id: 'jaana_chahta',
      target: 'मुझे ... जाना है',
      native: 'I want to go to ...',
      literal: 'Mujhe ... jaana hai — to-me ... going is',
      emoji: '🚶',
      phonetic: 'MU-jhe... JAA-naa hai',
      audioRef: null,
    },
    {
      id: 'kaise_jaaun',
      target: 'कैसे जाऊँ?',
      native: 'How do I get there?',
      literal: 'Kaise jaaun — how I-go(subjunctive)',
      emoji: '🗺️',
      phonetic: 'KAI-se JAA-oon',
      audioRef: null,
    },
    {
      id: 'aapki_madad',
      target: 'आपकी मदद के लिए धन्यवाद',
      native: 'Thank you for your help',
      literal: 'Aapki madad ke liye dhanyavaad — your help for thanks',
      emoji: '🙏',
      phonetic: 'AAP-kee ma-DAD ke LI-ye DHAN-ya-vaad',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Chaining survival phrases naturally',
    explanation: "Real conversations chain everything together: greet, politely ask, name the gap when you're lost, ask for clarification, confirm the answer, thank them properly. The trick is the order — greeting opens the door, the ask defines the need, the clarification keeps the exchange alive, the thanks closes it warmly.",
    examples: [
      { target: 'नमस्ते। कृपया मदद कीजिए। (Namaste. Kripaya madad kijiye.)', native: 'Hello. Please help me.' },
      { target: 'समझ नहीं आया — फिर से कहिए। (Samajh nahi aaya — phir se kahiye.)', native: "I don't understand — please say again." },
      { target: 'बहुत धन्यवाद। आप बहुत अच्छे हैं। (Bahut dhanyavaad. Aap bahut acche hain.)', native: 'Thank you very much. You are very kind.' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the survival phrase to its meaning',
      pairs: [
        { left: 'मुझे ... जाना है (Mujhe ... jaana hai)', right: 'I want to go to ...' },
        { left: 'कैसे जाऊँ? (Kaise jaaun?)', right: 'How do I get there?' },
        { left: 'आपकी मदद के लिए धन्यवाद (Aapki madad ke liye dhanyavaad)', right: 'Thank you for your help' },
      ],
    },
    {
      type: 'multiple_choice',
      instruction: "You're lost in Jaipur and need directions. What's your complete opening to a stranger?",
      question: 'Choose the cleanest opener',
      options: [
        { text: 'नमस्ते भैया। कृपया मदद कीजिए — मुझे हवा महल जाना है। (Namaste bhaiya. Kripaya madad kijiye — mujhe Hawa Mahal jaana hai.)', correct: true },
        { text: 'कैसे जाऊँ? (Kaise jaaun?)', correct: false },
        { text: 'समझ नहीं आया (Samajh nahi aaya)', correct: false },
      ],
      explanation: "Greet first ('namaste bhaiya'), then ask for help politely ('kripaya madad kijiye'), then name where you want to go ('mujhe Hawa Mahal jaana hai'). That's the full chain — start to ask, in three moves.",
    },
    {
      type: 'translate',
      instruction: 'Type in Hindi (Romanized is fine)',
      prompt: 'I want to go to ... (start of phrase)',
      correct: ['मुझे जाना है', 'मुझे ... जाना है', 'Mujhe jaana hai', 'mujhe jaana hai'],
    },
    {
      type: 'fill_blank',
      instruction: 'They speak too fast. What do you say?',
      sentence: 'समझ नहीं आया — _____ बोलिए, कृपया।',
      options: ['धीरे (dheere)', 'जल्दी (jaldi)', 'बहुत (bahut)'],
      correct: 'धीरे (dheere)',
      context: 'The autorickshaw driver gave directions in rapid-fire Hindi.',
    },
    {
      type: 'build_sentence',
      instruction: 'Build "Thank you for your help"',
      words: ['धन्यवाद (dhanyavaad)', 'के लिए (ke liye)', 'आपकी मदद (Aapki madad)'],
      correct: ['आपकी मदद (Aapki madad)', 'के लिए (ke liye)', 'धन्यवाद (dhanyavaad)'],
      translation: 'Thank you for your help',
    },
    {
      type: 'translate',
      instruction: 'Type in Hindi (Romanized is fine)',
      prompt: 'How do I get there?',
      correct: ['कैसे जाऊँ?', 'कैसे जाऊँ', 'Kaise jaaun?', 'kaise jaaun', 'kaise jaun'],
    },
  ],

  rwenDialogue: {
    intro: "You're in Jaipur, you've lost your way to Hawa Mahal, and your phone is dead. A man at a tea stall is your best shot. Run the full chain — greet, ask, clarify, thank.",
    lines: [
      {
        speaker: 'user',
        userChoices: [
          { target: 'नमस्ते भैया। कृपया मदद कीजिए — मुझे हवा महल जाना है। (Namaste bhaiya. Kripaya madad kijiye — mujhe Hawa Mahal jaana hai.)', native: 'Hello brother. Please help me — I want to go to Hawa Mahal.', correct: true, feedback: "Greeting + polite request + clear destination. Textbook opening." },
          { target: 'कैसे जाऊँ? (Kaise jaaun?)', native: 'How do I get there?', correct: false, feedback: "Too abrupt without a greeting and the destination. Lead with 'namaste bhaiya, kripaya...' and name the place." },
          { target: 'मदद चाहिए (Madad chahiye)', native: 'Need help', correct: false, feedback: "Bare bones. Greet first, then say 'kripaya madad kijiye' — politeness here is the whole point." },
        ],
      },
      {
        speaker: 'npc',
        target: 'अरे हाँ। यहाँ से सीधा जाइए, चौराहे पर बाएँ मुड़िए, फिर सामने ही दिख जाएगा। (Are haan. Yahaan se seedha jaaiye, chauraahe par baayen mudiye, phir saamne hi dikh jaayega.)',
        native: 'Oh yes. From here go straight, at the crossing turn left, then it will appear right in front.',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'समझ नहीं आया — धीरे बोलिए, कृपया। (Samajh nahi aaya — dheere boliye, kripaya.)', native: "I don't understand — please speak slowly.", correct: true, feedback: "Exactly right — kept the conversation alive by naming the gap and asking for what you need. He won't be offended." },
          { target: 'समझ गया (Samajh gaya)', native: 'I understood', correct: false, feedback: "Only if you actually did. If you didn't catch it all, say 'samajh nahi aaya, dheere boliye'." },
          { target: 'धन्यवाद (Dhanyavaad)', native: 'Thank you', correct: false, feedback: "Don't close the conversation before you have the directions! Ask for the slowdown first." },
        ],
      },
      {
        speaker: 'npc',
        target: 'ठीक है — सीधा... फिर बाएँ... फिर सामने। ठीक? (Theek hai — seedha... phir baayen... phir saamne. Theek?)',
        native: "Okay — straight... then left... then in front. Got it?",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'हाँ, समझ गया। बहुत धन्यवाद, आपकी मदद के लिए। (Haan, samajh gaya. Bahut dhanyavaad, aapki madad ke liye.)', native: 'Yes, I understood. Thank you very much for your help.', correct: true, feedback: "Confirm understanding, then thank warmly with the formal phrase. Module 2 complete. You survived — and thrived." },
          { target: 'धन्यवाद (Dhanyavaad)', native: 'Thank you', correct: false, feedback: "Good — and 'bahut dhanyavaad, aapki madad ke liye' is the warmer landing for someone who slowed down to repeat himself for you." },
          { target: 'कोई बात नहीं (Koi baat nahi)', native: "It's nothing", correct: false, feedback: "That's HIS line back to you — your line is to thank him." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Lost in Jaipur. Found your way — in Hindi. That's what survival language does. Module 3 — who you are, your name, your story — begins next. Phir milenge.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'I want to go to ... (start of phrase)', correct: ['मुझे जाना है', 'मुझे ... जाना है', 'Mujhe jaana hai', 'mujhe jaana hai'] },
      { prompt: 'Thank you for your help', correct: ['आपकी मदद के लिए धन्यवाद', 'Aapki madad ke liye dhanyavaad', 'aapki madad ke liye dhanyavaad'] },
    ],
  },

  mission: {
    title: "Your Module 2 Mission",
    task: "Imagine you're lost somewhere in India today — Mumbai, Delhi, Jaipur, anywhere. Run the full conversation in your head: namaste, kripaya madad kijiye, mujhe X jaana hai, samajh nahi aaya dheere boliye, theek hai, aapki madad ke liye dhanyavaad. End to end. Out loud if you can.",
    rwenSignoff: "You can survive anywhere now. Module 3 — telling people who you are — is next. Tab tak ke liye, phir milenge.",
  },

  phase8: {
    scenario: "It's 6pm in Marondera... wait — strike that — it's 6pm in old Jaipur and you've finished the City Palace tour but need to reach your guesthouse near Chandpole gate before the lanes get dark. Your phone GPS is dead, the auto stand is empty, and a woman is closing up her bangle stall on the main road. She's your last shot before nightfall. Run the full survival chain.",
    rwenRole: "Sunita Aunty — ~45, bangle-stall owner near Hawa Mahal, kind but cashing up and ready to leave; one shot to land the conversation cleanly before she locks the shutter and walks home.",
    successCriteria: "User chains all three chunks naturally: opens with 'Namaste aunty, kripaya madad kijiye — mujhe Chandpole jaana hai' (NOT just a cold 'kaise jaaun?'), uses 'kaise jaaun?' to clarify the route after she gestures, hedges with 'samajh nahi aaya, dheere boliye' if her directions go too fast, and closes with the full 'Aapki madad ke liye bahut dhanyavaad' (NOT bare 'dhanyavaad') — proving Module 2 chains end-to-end under real pressure.",
    estimatedMinutes: 4,
    bonusXp: 5,
  },
};

export default lesson;

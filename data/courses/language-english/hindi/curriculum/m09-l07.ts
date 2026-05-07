import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm09-l07-hotel',
  module: 9,
  lesson: 7,
  title: 'Hotel & Accommodation — होटल',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Hotel: 'I have a reservation', 'My room key', 'I'd like to check out'। ये Mumbai Taj से London Premier Inn तक सब जगह।",
    culturalNote: "India में होटल booking apps से होती — Booking.com, MakeMyTrip, Goibibo। Reception पर 'I have a booking under ___' पूरी English में। Indian hotels में English से चलता service — पर room में दिक़्क़त (AC, hot water) हो तो polite report करना: 'There's a problem with the ___'। Foreign trip पर check-in/check-out times strict। 'Late check-out, please' — एक्स्ट्रा request।",
  },

  chunks: [
    {
      id: 'reservation',
      target: 'I have a reservation.',
      native: 'मेरी booking है।',
      literal: 'Meri booking hai',
      emoji: '📋',
      phonetic: 'ay-HAV-uh-rez-er-VAY-shun',
      audioRef: null,
    },
    {
      id: 'room_key',
      target: 'My room key',
      native: 'मेरे room की चाबी',
      literal: 'Mere room ki chaabi',
      emoji: '🔑',
      phonetic: 'my-ROOM-KEE',
      audioRef: null,
    },
    {
      id: 'check_out',
      target: "I'd like to check out.",
      native: 'मुझे check out करना है।',
      literal: 'Mujhe check out karna hai',
      emoji: '🧳',
      phonetic: 'ayd-LAYK-too-CHEK-owt',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Hotel vocabulary',
    explanation: "Hotel के तीन parts: ENTRY ('I have a reservation under ___')। STAY ('Could I have my room key?' / 'There's a problem with the ___')। EXIT ('I'd like to check out')।",
    examples: [
      { target: 'I have a reservation.',    native: 'मेरी booking है।' },
      { target: 'My room key',               native: 'मेरे room की चाबी' },
      { target: "I'd like to check out.",     native: 'मुझे check out करना है।' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Hotel शब्द मिलाएँ',
      pairs: [
        { left: 'I have a reservation',  right: 'मेरी booking है' },
        { left: 'My room key',            right: 'मेरी चाबी' },
        { left: "I'd like to check out", right: 'check out करना है' },
      ],
    },
    {
      type: 'translate',
      instruction: 'अंग्रेज़ी में लिखें — reception पर booking बता रहे',
      prompt: 'मेरी booking Sharma नाम पर है।',
      correct: [
        'I have a reservation under Sharma.',
        'I have a reservation for Sharma.',
        'I have a booking under Sharma.',
        'i have a reservation under Sharma.',
      ],
    },
    {
      type: 'translate',
      instruction: 'अंग्रेज़ी में लिखें — चाबी काम नहीं कर रही',
      prompt: 'मेरी चाबी काम नहीं कर रही।',
      correct: [
        "My room key isn't working.",
        "My room key doesn't work.",
        "My key isn't working.",
        "my room key isn't working.",
        "My room key is not working.",
      ],
    },
    {
      type: 'build_sentence',
      instruction: 'Check out करना',
      words: ['to', 'like', 'check', "I'd", 'out'],
      correct: ["I'd", 'like', 'to', 'check', 'out'],
      translation: 'check out करना है',
    },
    {
      type: 'fill_blank',
      instruction: 'Reception पर पहली बात',
      sentence: 'Hi, I ____ a reservation under Verma.',
      options: ['have', 'do', 'am'],
      correct: 'have',
      context: "'I have a reservation' standard formula।",
    },
    {
      type: 'translate',
      instruction: 'अंग्रेज़ी में लिखें — AC में दिक़्क़त',
      prompt: "Room में AC में दिक़्क़त है।",
      correct: [
        "There's a problem with the AC in the room.",
        "There is a problem with the AC in the room.",
        "There's a problem with the air conditioning in the room.",
        "there's a problem with the AC in the room.",
        "The AC in the room isn't working.",
      ],
    },
  ],

  rwenDialogue: {
    intro: "London Premier Inn check-in। 10 घंटे flight से थके। Reception पर पहुँचे।",
    lines: [
      { speaker: 'npc', target: "Welcome to Premier Inn. Checking in?", native: 'Premier Inn में स्वागत। Check-in?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Yes, I have a reservation under Sharma.", native: 'हाँ, मेरी booking Sharma नाम पर है।', correct: true,  feedback: 'बढ़िया — साफ़ शुरुआत।' },
          { target: "Room.",                                       native: 'Room।',                                  correct: false, feedback: 'अधूरा — booking name दें।' },
          { target: "I sleep here.",                                native: 'यहाँ सोऊँगा।',                          correct: false, feedback: "'I have a reservation' से शुरू।" },
        ],
      },
      { speaker: 'npc', target: "Lovely. Here's your room key — room 412. Anything else?", native: 'अच्छा। यह आपकी चाबी — room 412। और कुछ?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Actually, yes — could I have a different room? There's a problem with the AC in 412.", native: 'असल में, हाँ — दूसरा room मिल सकता है? 412 में AC में दिक़्क़त है।', correct: true,  feedback: 'बढ़िया — polite पर clear।' },
          { target: "Room broken.",                                                                                       native: 'Room ख़राब।',                                                          correct: false, feedback: "'There's a problem with the ___' use करें।" },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "बढ़िया! Hotel की language London हो या Mumbai — same।",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'बिना ऊपर देखे, याद से लिखें।',
    prompts: [
      { prompt: 'I have a reservation (अंग्रेज़ी में)',   correct: ['I have a reservation', 'I have a reservation.', 'I have a booking', 'i have a reservation.'] },
      { prompt: "I'd like to check out (अंग्रेज़ी में)", correct: ["I'd like to check out", "I'd like to check out.", "I would like to check out.", "i'd like to check out."] },
    ],
  },

  mission: {
    title: 'आज का काम',
    task: "Hotel की कल्पना। English में पूरी बातचीत: 'Hi, I have a reservation under ___.' → 'Could I have my room key?' → 'There's a problem with the ___.' → 'I'd like to check out.' बिना देखे।",
    rwenSignoff: "Hotel की language जानने वाला आराम से सोता। कल मिलते हैं।",
  },

  phase8: {
    scenario: "You're checking into the Premier Inn London Waterloo. After getting your room, you discover the air conditioning isn't working. Go back to reception, raise the issue politely, and ask for either a fix or a different room.",
    rwenRole: "Priya, 28, hotel receptionist. Apologetic, problem-solver, will offer two options (engineer or move room). Clear British English.",
    successCriteria: "User opens with 'I have a reservation under ___', raises 'There's a problem with the AC' or similar, accepts one of the offered solutions, and thanks her.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;

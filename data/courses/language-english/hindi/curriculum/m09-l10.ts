import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm09-l10-conversation',
  module: 9,
  lesson: 10,
  title: 'A travel conversation — Travel की बातचीत',
  estimatedMinutes: 7,
  xpReward: 50,

  hook: {
    rwenLine: "Module 9 ख़त्म! आज सब मिलाएँ: जगह पूछना, direction लेना, distance, transport, ticket, hotel, मदद। एक पूरा travel — airport से hotel तक।",
    culturalNote: "Indian travelers globally बहुत active — UK, US, Gulf, Singapore, Australia। Diaspora और tourists हर साल लाखों। Module 9 आपकी travel survival kit है। 'Excuse me', 'please', 'thank you', 'could you' — ये four जादुई शब्द हर airport, station, hotel, concierge पर काम करते। आप अब अकेले foreign trip कर सकते — confidence से।",
  },

  chunks: [
    {
      id: 'review_arrived_directions',
      target: "Excuse me, I just arrived. Where is the Underground?",
      native: 'माफ़ कीजिए, अभी पहुँचा हूँ। Underground कहाँ है?',
      literal: 'Excuse me + arrival + direction',
      emoji: '🛬',
      phonetic: 'ek-SKYOOZ-mee-ay-just-uh-RYVD',
      audioRef: null,
    },
    {
      id: 'review_ticket_distance',
      target: "One ticket to King's Cross, please. How far is it?",
      native: "King's Cross का एक ticket, please। कितनी दूर?",
      literal: 'Ticket + distance',
      emoji: '🎫',
      phonetic: 'wun-TIK-it-too-KINGZ-KROS-PLEEZ',
      audioRef: null,
    },
    {
      id: 'review_hotel_help',
      target: "I have a reservation. Could you write down the WiFi password?",
      native: 'मेरी booking है। WiFi password लिखकर देंगे?',
      literal: 'Hotel + help',
      emoji: '📶',
      phonetic: 'ay-HAV-uh-rez-er-VAY-shun',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Full travel flow',
    explanation: "Travel के चार parts: ARRIVE — 'Excuse me, where is the ___?'। MOVE — 'One ticket to ___, please.' / 'How far?' / 'Turn left'। CHECK-IN — 'I have a reservation under ___'। ASK — 'Could you help me / write it down / recommend ___?'।",
    examples: [
      { target: "Excuse me, I just arrived. Where is the Underground?",            native: 'माफ़ कीजिए, अभी पहुँचा। Underground कहाँ?' },
      { target: "One ticket to King's Cross, please. How far is it?",                native: "King's Cross का ticket। कितनी दूर?" },
      { target: "I have a reservation. Could you write down the WiFi password?",  native: 'Booking है। WiFi password लिखकर?' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Travel parts मिलाएँ',
      pairs: [
        { left: 'Where is the ___?',           right: 'पहुँचने पर — जगह पूछना' },
        { left: 'One ticket to ___, please',    right: 'Station — ticket' },
        { left: 'I have a reservation',          right: 'Hotel — check-in' },
      ],
    },
    {
      type: 'translate',
      instruction: 'अंग्रेज़ी में लिखें — Heathrow पहुँचे',
      prompt: 'माफ़ कीजिए, अभी पहुँचा हूँ। Underground कहाँ है?',
      correct: [
        "Excuse me, I just arrived. Where is the Underground?",
        "Excuse me, I've just arrived. Where is the Underground?",
        "Excuse me, I just arrived. Where is the tube?",
        "excuse me, I just arrived. Where is the Underground?",
        "Excuse me, I just got here. Where is the Underground?",
      ],
    },
    {
      type: 'translate',
      instruction: "अंग्रेज़ी में लिखें — Heathrow Express पर",
      prompt: "King's Cross का एक ticket, please। कितनी दूर?",
      correct: [
        "One ticket to King's Cross, please. How far is it?",
        "One ticket to King's Cross, please. How far?",
        "A ticket to King's Cross, please. How far is it?",
        "Could I have one ticket to King's Cross, please? How far is it?",
        "one ticket to King's Cross, please. How far is it?",
      ],
    },
    {
      type: 'translate',
      instruction: 'अंग्रेज़ी में लिखें — hotel में WiFi',
      prompt: 'मेरी booking है। WiFi password लिखकर देंगे?',
      correct: [
        "I have a reservation. Could you write down the WiFi password?",
        "I have a booking. Could you write down the WiFi password?",
        "I have a reservation. Could you write down the wifi password?",
        "I have a reservation. Could you write the WiFi password down?",
        "i have a reservation. could you write down the wifi password?",
      ],
    },
    {
      type: 'build_sentence',
      instruction: 'Hotel में पहुँचे',
      words: ['have', 'reservation', 'a', 'I'],
      correct: ['I', 'have', 'a', 'reservation'],
      translation: 'मेरी booking है',
    },
    {
      type: 'fill_blank',
      instruction: 'Concierge से recommendation',
      sentence: 'Could you ____ a good restaurant nearby?',
      options: ['recommend', 'remember', 'remove'],
      correct: 'recommend',
      context: "'Could you recommend ___?' polite।",
    },
  ],

  rwenDialogue: {
    intro: "Heathrow Terminal 5 पर पहुँचे — पहली UK trip। Hotel King's Cross है। पूरी journey English में।",
    lines: [
      { speaker: 'npc', target: "Welcome to Heathrow! First time in the UK?", native: 'Heathrow में स्वागत! पहली UK trip?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Yes — excuse me, where is the Underground? I'm going to King's Cross.", native: "हाँ — माफ़ कीजिए, Underground कहाँ है? King's Cross जा रहा हूँ।", correct: true,  feedback: 'बढ़िया — "Excuse me", direction, destination।' },
          { target: "Tube?",                                                                            native: 'Tube?',                                                              correct: false, feedback: 'अधूरा।' },
        ],
      },
      { speaker: 'npc', target: "Right this way — Piccadilly line, blue. The ticket counter is on the right.", native: 'इधर — Piccadilly line, नीला। Ticket counter दाएँ।' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Thank you. One ticket to King's Cross, please. How much is it?", native: "धन्यवाद। King's Cross का एक ticket, please। कितने का?", correct: true,  feedback: 'बढ़िया — ticket और दाम।' },
          { target: "Money King's Cross.",                                                  native: "पैसा King's Cross।",                                            correct: false, feedback: "अधूरा।" },
        ],
      },
      { speaker: 'npc', target: "That'll be £25, please. The next train is in 8 minutes from platform 6.", native: "£25 हुए। अगली train 8 मिनट में platform 6 से।" },
      {
        speaker: 'user',
        userChoices: [
          { target: "Thank you. How far is the platform from here?", native: 'धन्यवाद। Platform यहाँ से कितनी दूर?', correct: true,  feedback: 'बढ़िया — सवाल continue।' },
          { target: "Where train.",                                          native: 'कहाँ train।',                                  correct: false, feedback: 'अधूरा।' },
        ],
      },
      { speaker: 'npc', target: "Just around the corner — 30 seconds. Have a great trip!", native: 'बस मोड़ पर — 30 सेकंड। अच्छी yatra!' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Thank you so much. Have a good day!", native: 'बहुत धन्यवाद। अच्छा दिन हो!', correct: true,  feedback: 'बढ़िया — polite ending।' },
          { target: "Bye.",                                       native: 'Bye।',                                  correct: false, feedback: "'Thank you' जोड़ें।" },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Module 9 पूरा! Airport से platform तक — सब English में। यह skill London, NYC, Singapore — हर जगह काम।",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'बिना ऊपर देखे, याद से लिखें।',
    prompts: [
      { prompt: "Excuse me, where is the Underground? (अंग्रेज़ी में)", correct: ["Excuse me, where is the Underground?", "Excuse me, where is the tube?", "Excuse me, where is the Underground", "excuse me, where is the Underground?"] },
      { prompt: "I have a reservation (अंग्रेज़ी में)",                  correct: ['I have a reservation', 'I have a reservation.', 'I have a booking', 'i have a reservation.'] },
    ],
  },

  mission: {
    title: 'Module 9 का अंतिम काम — Travel conversation',
    task: "कल्पना — airport पर पहुँचे। English में पूरी बातचीत: 'Excuse me, where is the Underground?' → 'One ticket to ___, please.' → 'How far?' → 'I have a reservation under ___.' → 'Could you write down the WiFi password?' बिना देखे।",
    rwenSignoff: "Module 9 पूरा। Airport से hotel तक English में। Module 10 — emotions और कहानियाँ।",
  },

  phase8: {
    scenario: "Capstone. You've just landed at Heathrow on your first trip to the UK, with a hotel booking at Premier Inn King's Cross. Run the full journey end-to-end in English: ask for directions to the Underground, buy a tube ticket, ask how far, check into the hotel, ask the receptionist for the WiFi and one tourist recommendation. The whole thing should naturally span 4 minutes.",
    rwenRole: "Three NPCs: a Heathrow info desk staffer (welcoming, points to the tube), a tube ticket seller (efficient, transactional), and Priya the Premier Inn receptionist (warm, helpful). Each will respond naturally to your pace.",
    successCriteria: "Full journey: opens with 'Excuse me, where is the Underground?', buys 'one ticket to King's Cross', asks 'How far?', states 'I have a reservation', asks 'Could you write down the WiFi password?' or recommends, thanks each NPC. Combines chunks from Module 9 lessons 1-9.",
    estimatedMinutes: 4,
    bonusXp: 5,
  },
};

export default lesson;

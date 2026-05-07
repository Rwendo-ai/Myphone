import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm08-l10-mera-din',
  module: 8,
  lesson: 10,
  title: 'Mera Din — Describe Your Day',
  estimatedMinutes: 8,
  xpReward: 50,

  hook: {
    rwenLine: "From subah uthna (waking up) to raat sona (sleeping at night), your whole day now lives in Hindi verbs. Module 8 ends here — with a full day narrated. We chain nine verbs you've learned (uthna, jaana, khaana, peena, kaam karna, padhna, dekhna, sunna, sona) into one continuous story. Verb at the end. Gender on the verb. Tense by tense. This is the shape of fluency.",
    culturalNote: "In Indian conversation — at the dinner table, on a long train ride, in a WhatsApp voice note to a sibling — narrating your day is a daily ritual. 'Aaj kya kiya?' (What did you do today?) is asked in every joint family every evening. Answering in Hindi rather than 'aaj busy thaa' (today was busy) earns you genuine inclusion in the day's accounting.",
  },

  chunks: [
    {
      id: 'mera_din',
      target: 'मेरा दिन — Mera din',
      native: 'My day',
      literal: 'mera (my, masculine) + din (day)',
      emoji: '☀️',
      phonetic: 'MAY-ra DIN',
      audioRef: null,
    },
    {
      id: 'roz',
      target: 'रोज़ — Roz',
      native: 'Every day / daily',
      literal: 'roz — daily, used with habitual verbs',
      emoji: '🔁',
      phonetic: 'ROHZ',
      audioRef: null,
    },
    {
      id: 'pure_din',
      target: 'पूरे दिन — Poore din',
      native: 'The whole day / all day',
      literal: 'poora (whole) + din (day) — oblique form',
      emoji: '📅',
      phonetic: 'POO-ray DIN',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Chaining a day — habitual / continuous / past in sequence',
    explanation: "A full day in Hindi uses three tenses fluidly: HABITUAL ('Main roz subah 6 baje uthta hoon' — every day I wake at 6) for routine, PAST ('Aaj maine chai pi') for what already happened today, and CONTINUOUS ('Abhi main Hindi padh raha hoon' — right now I am studying Hindi) for the moment of speaking. Switch between them as you narrate.",
    examples: [
      { target: 'मैं रोज़ 6 बजे उठता हूँ — Main roz 6 baje uthta hoon', native: 'I wake at 6 every day (habitual)' },
      { target: 'आज मैंने चाय पी और दफ़्तर गया — Aaj maine chai pi aur daftar gaya', native: "Today I drank chai and went to the office (past)" },
      { target: 'अभी मैं हिंदी पढ़ रहा हूँ — Abhi main Hindi padh raha hoon', native: 'Right now I am studying Hindi (continuous)' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the day-narration phrase to its meaning',
      pairs: [
        { left: 'Main roz uthta hoon', right: 'I wake every day (habitual)' },
        { left: 'Aaj maine chai pi', right: 'Today I drank chai (past)' },
        { left: 'Abhi main padh raha hoon', right: 'Right now I am reading (continuous)' },
      ],
    },
    {
      type: 'multiple_choice',
      instruction: "Which sequence describes a typical Indian working day in correct order?",
      question: 'Morning to night:',
      options: [
        { text: 'Subah uthna → chai peena → daftar jaana → kaam karna → ghar aana → khaana khaana → sona', correct: true },
        { text: 'Sona → daftar jaana → uthna → khaana khaana → ghar aana', correct: false },
        { text: 'Khaana khaana → uthna → sona → daftar jaana', correct: false },
      ],
      explanation: "Wake (uthna) → chai (peena) → office (jaana) → work (kaam karna) → come home (aana) → eat (khaana) → sleep (sona). Nine Module-8 verbs, one human day.",
    },
    {
      type: 'translate',
      instruction: 'Type in Romanized Hindi (man speaking)',
      prompt: 'I wake at 6am every day',
      correct: ['Main roz subah 6 baje uthta hoon', 'main roz subah 6 baje uthta hoon'],
    },
    {
      type: 'fill_blank',
      instruction: 'Complete the day-summary',
      sentence: 'Aaj maine bahut _____ kiya.',
      options: ['kaam', 'kaaam', 'kaame'],
      correct: 'kaam',
      context: 'Today I did a lot of work.',
    },
    {
      type: 'build_sentence',
      instruction: "Build 'Today I drank chai and went to the office' (using past)",
      words: ['Aaj', 'maine', 'chai', 'pi', 'aur', 'daftar', 'gaya.'],
      correct: ['Aaj', 'maine', 'chai', 'pi', 'aur', 'daftar', 'gaya.'],
      translation: 'Today I drank chai and went to the office (man speaking)',
    },
    {
      type: 'translate',
      instruction: 'Type in Romanized Hindi (woman speaking)',
      prompt: 'Right now I am studying Hindi',
      correct: ['Abhi main Hindi padh rahi hoon', 'abhi main Hindi padh rahi hoon', 'abhi main hindi padh rahi hoon'],
    },
  ],

  rwenDialogue: {
    intro: "Sunday 9pm. The whole joint family is on the sofa after dinner. Dadi-ji turns to you: tell her about your day, mera beta — start to finish.",
    lines: [
      {
        speaker: 'npc',
        target: 'बेटा, मुझे अपने दिन के बारे में बताओ। सुबह से रात तक — पूरा दिन।',
        native: 'Beta, tell me about your day. From morning to night — the whole day.',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Dadi-ji, main roz subah 6 baje uthta hoon. Aaj maine chai pi, daftar gaya, Python par kaam kiya. Shaam ko ghar aaya, khaana khaaya. Abhi main Hindi padh raha hoon. Raat 11 baje sounga.', native: "Dadi-ji, I wake at 6 every day. Today I drank chai, went to the office, worked on Python. In the evening I came home, ate dinner. Right now I'm studying Hindi. I will sleep at 11pm.", correct: true, feedback: "Habitual + past + continuous + future, all in one answer. Nine Module-8 verbs chained naturally. Module 8 complete." },
          { target: 'Maine kaam kiya', native: 'I worked (too short)', correct: false, feedback: "Dadi-ji asked for the WHOLE day. Chain at least five verbs: uthna → peena → jaana → kaam karna → khaana → sona. Tell the story." },
          { target: 'Main subah uthta hoon', native: 'I wake in the morning (just one verb)', correct: false, feedback: "More! 'Main roz uthta hoon. Aaj maine chai pi, daftar gaya. Abhi padh raha hoon. Raat ko sounga.' Past, present, future all together." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Mera din, in nine verbs and three tenses. From 'Namaste' in m01-l01 to a full daily narration here. Module 9 — directions and travel — opens tomorrow. Aap shabaash.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'I wake at 6am every day (man speaking)', correct: ['Main roz subah 6 baje uthta hoon', 'main roz subah 6 baje uthta hoon'] },
      { prompt: 'Right now I am studying Hindi (woman speaking)', correct: ['Abhi main Hindi padh rahi hoon', 'abhi main Hindi padh rahi hoon', 'abhi main hindi padh rahi hoon'] },
    ],
  },

  mission: {
    title: "Your Module 8 Mission",
    task: "Tonight before sleep, narrate your real day in Hindi: 'Main roz [time] uthta/uthti hoon. Aaj maine [past actions]. Abhi main [current action] kar raha/rahi hoon. Raat [time] baje sounga/soungi.' Past + present + future. Your day, in Hindi.",
    rwenSignoff: "Module 8 complete. Daily verbs — the muscle of the language. Module 9 — directions, kombis, autos, trains — opens next. Subah milenge.",
  },

  phase8: {
    scenario: "Sunday night, 9:30pm WhatsApp voice note from your sister, who's been quietly proud of your Hindi progress. She says: 'Bhaiya/didi, give me your full day — start to end — in Hindi. Aaj kya kiya, abhi kya kar rahe ho, kal kya karoge?' She wants past, present-continuous, and future in one chained narration, with at least five Module-8 verbs in sequence.",
    rwenRole: "Sister — peer 'tum' register, encouraging, fluent. She'll celebrate effort and gently correct ergative slips (maine vs main) without breaking flow. Voice note, so you'll narrate aloud.",
    successCriteria: "User chains at least five past-tense verbs from Module 8 (uthna, peena, jaana, kaam karna, khaana, padhna, dekhna, sunna, sona) for what was done today — using ergative correctly where needed (maine + object + past form). Adds one present-continuous ('Abhi main ___ kar raha/rahi hoon') for what's happening right now. Closes with at least one future ('Kal main ___ karunga/karungi') for tomorrow. Gender consistent throughout.",
    estimatedMinutes: 4,
    bonusXp: 5,
  },
};

export default lesson;

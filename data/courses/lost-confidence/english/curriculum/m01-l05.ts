import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm01-l05-asking-for-help',
  module: 1,
  lesson: 5,
  title: "Asking for Help When You're the One Who Used to Give It",
  estimatedMinutes: 9,
  xpReward: 35,

  hook: {
    rwenLine: "Today's the day you become someone who lets one other person see this. Not all of it. Not the polished version. Just one specific true thing, told to one specific person, in three sentences. This is the hardest lesson in the course for many people. We'll go slowly.",
    culturalNote: "Brené Brown's research on shame and connection found a single move that reliably reduces shame: telling someone. Not telling everyone — telling one person who will respond with empathy. Kristin Neff's work shows the same: self-compassion is rarely first practised alone; it is borrowed from another person until you can produce it for yourself. Holt-Lunstad's meta-analyses on loneliness show isolation is a serious health risk on the order of smoking. None of this is sentimental. It is structural. Humans were not designed to repair confidence in private.",
  },

  chunks: [
    {
      id: 'silent_shame',
      target: 'Silent shame',
      native: "Carrying the hard thing alone, often disguised as 'I don't want to burden anyone'",
      literal: "Brené Brown — shame thrives in silence, secrecy, and judgement; it dies on contact with empathy",
      emoji: '🤐',
      phonetic: "The sentence 'I don't want to burden anyone' often means 'I am ashamed.'",
      audioRef: null,
    },
    {
      id: 'one_person',
      target: 'One person',
      native: "Not the world. Not your whole network. One specific person you can name, who has shown they can hold something hard without flinching",
      literal: "Brown's empirical finding: a single empathic listener does the work; broadcasting does not",
      emoji: '👤',
      phonetic: "You do not need everyone. You need one. Picking the right one is the lesson.",
      audioRef: null,
    },
    {
      id: 'three_sentences',
      target: 'Three sentences',
      native: "A small, specific, plain message: what happened, how it has landed, what you would value (or that you are not asking for anything)",
      literal: "NVC-adjacent (Rosenberg): observation + feeling + request, scaled down for asking-for-help",
      emoji: '✉️',
      phonetic: "Short messages get sent. Long ones get drafted forever.",
      audioRef: null,
    },
  ],

  pattern: {
    name: 'One person, three sentences',
    explanation: "The reason the message stays drafted is that the user is trying to write the perfect version, often to the wrong person, often hoping for the wrong thing. The technique is small: pick one person who has shown they can hold something hard. Write three sentences. (1) What happened, plainly. (2) How it has landed for you. (3) What you'd value from them — even if it's just 'I'm not asking for advice; I just wanted you to know.' Send it. The hard part is sending. The receiving is usually easier than you fear.",
    examples: [
      { target: "After getting fired in his fifties — drafting an essay-length email to twelve people about market dynamics.", native: "Three sentences to one trusted ex-colleague: 'I was let go in March after fourteen years. I'm okay financially for now but it has hit me harder than I expected. Could we get coffee sometime in the next two weeks?'" },
      { target: "After a miscarriage — saying nothing for months because 'people don't want to hear it.'", native: "Three sentences to one close friend: 'We lost the pregnancy in February. I've been pretending I'm fine and I am not. I don't need you to fix anything; I just don't want to keep carrying it alone.'" },
      { target: "After a public business failure — posting a polished LinkedIn post about resilience instead.", native: "Three sentences to one mentor: 'The company shut down last month. I'm carrying more shame than I want to admit. Could I get half an hour of your time, no agenda?'" },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match each term to its meaning',
      pairs: [
        { left: 'Silent shame', right: "Carrying the hard thing alone, often disguised as 'I don't want to burden anyone'" },
        { left: 'One person', right: 'A specific named individual who can hold something hard without flinching' },
        { left: 'Three sentences', right: 'A short plain message: what happened, how it landed, what you would value' },
      ],
    },
    {
      type: 'multiple_choice',
      instruction: 'Which of these is most likely to do the work the lesson is asking for?',
      question: 'Pick the option closest to one-person, three-sentences',
      options: [
        { text: "Posting a long, vulnerable update on social media so everyone knows what you've been going through.", correct: false },
        { text: "Sending one trusted friend a three-line message saying what happened, how it has landed, and that you'd value seeing them.", correct: true },
        { text: "Writing a private journal entry in detail and reading it back to yourself.", correct: false },
      ],
      explanation: "The first is broadcasting — Brown's research is specific that this does not do the same work as one-to-one telling. The third is internal work, which has its own value but does not break silent shame. The middle option is the move: specific person, specific message, sent.",
    },
    {
      type: 'fill_blank',
      instruction: "Complete Brené Brown's principle",
      sentence: "Shame thrives in silence, secrecy, and judgement; it dies on contact with _____.",
      options: ['empathy', 'truth', 'sunlight'],
      correct: 'empathy',
      context: "Truth without empathy can deepen shame. The specific antidote is empathic response — being witnessed without being judged. That is why picking the right person matters more than picking the perfect words.",
    },
    {
      type: 'translate',
      instruction: 'In one number — how many people do you need to tell for the work to start?',
      prompt: 'The number:',
      correct: ['1', 'one'],
    },
    {
      type: 'build_sentence',
      instruction: 'Build the technique',
      words: ['three', 'sentences', 'one', 'person'],
      correct: ['one', 'person', 'three', 'sentences'],
      translation: 'Four words. The hardest part of recovery, in four words.',
    },
    {
      type: 'translate',
      instruction: "Name one person who has shown they can hold something hard without flinching. (First name only, in your head if you'd rather not type.)",
      prompt: 'The person:',
      correct: [],
    },
  ],

  rwenDialogue: {
    intro: "Let's draft the three sentences together. We don't have to send them today. We just have to write them.",
    lines: [
      {
        speaker: 'rwen',
        rwenLine: "Think of one person you have not told. Someone who already has earned the right to know — a friend, a sibling, a former colleague, a mentor. Not the most impressive person you know. The kindest available one.",
      },
      {
        speaker: 'rwen',
        rwenLine: "Sentence one: what happened, plainly. One line, past tense. Hold it in mind.",
      },
      {
        speaker: 'rwen',
        rwenLine: "Sentence two: how it has landed for you. The honest version. 'I have been more ___ than I let on.' 'It has hit me harder than I expected.' Hold it.",
      },
      {
        speaker: 'rwen',
        rwenLine: "Sentence three: what you'd value, or that you are not asking for anything. 'Could we get a coffee.' 'I don't need advice; I just didn't want to keep carrying it alone.' Hold it.",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: "I have the three sentences. I will send them today.", native: '', correct: true, feedback: "Send before you re-edit. Editing is where the message dies. The version that exists in three minutes is better than the version that never gets sent." },
          { target: "I have the three sentences. I'll send them this week.", native: '', correct: true, feedback: "Set a specific day. 'This week' tends to become next week. Pick a moment — Sunday evening, Wednesday lunch — and put the message in front of yourself then. The version you wrote today is the version to send." },
          { target: "I picked the person but I can't write the sentences yet.", native: '', correct: true, feedback: "That counts. Picking the person is half the work. The sentences will come, often when you are not trying. Carry the question — 'what would I tell them' — for a few days and a draft will arrive." },
          { target: "I don't have a person. I genuinely don't know who I'd tell.", native: '', correct: true, feedback: "That is real, and it is not unusual after a knock — especially if you used to be the one giving help, or if your social world has thinned. The next move is not the message. The next move is rebuilding the kind of friendship where this conversation can happen — one coffee, one walk, one small low-stakes contact at a time. We will return to this." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Asking for help when you are the one who used to give it is among the hardest things adults learn to do. You did the drafting today. That is real progress, whether or not you press send.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back.',
    prompts: [
      {
        prompt: "How many people do you need to tell for the work to start?",
        correct: ['1', 'one', 'one person'],
      },
      {
        prompt: "Brené Brown: shame dies on contact with ___.",
        correct: ['empathy'],
      },
    ],
  },

  mission: {
    title: "Today's Practice",
    task: "Today, write the three sentences. To one person. Even if you do not send them. Open the message thread or email window where you would actually send them. Type. Save it as a draft if you must. The drafting is the work.",
    rwenSignoff: "Three sentences. One person. About five minutes. Drafting counts. Sending is bonus.",
  },

  phase8: {
    scenario: "The user has just finished Lesson 5. Rwen offers a 4-minute coaching conversation walking the user through naming one person and drafting the three sentences. The aim is for the user to leave with the actual three-sentence draft, written, addressed to a specific named person.",
    rwenRole: "Rwen — soft, slow, careful with shame. Does NOT pressure the user to send. Does NOT minimise how hard this is ('just text them, easy'). Does NOT add advice the user did not ask for. If the user says 'I don't have a person', Rwen takes that seriously and helps them name the smallest social move that could lead toward one — not a grand reconnection, but a coffee, a walk, a single low-stakes contact.",
    successCriteria: "User (1) names one specific person, (2) drafts three short sentences in plain language (what happened / how it landed / what they'd value), and (3) decides whether they will send today, this week, or hold the draft. Bonus if they catch a 'I don't want to burden them' sentence and recognise it as silent shame.",
    estimatedMinutes: 4,
    bonusXp: 10,
  },
};

export default lesson;

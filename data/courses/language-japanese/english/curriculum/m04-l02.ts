import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm04-l02-wa-vs-ga',
  module: 4,
  lesson: 2,
  title: 'は vs が — Topic Versus Subject',
  estimatedMinutes: 5,
  xpReward: 30,

  hook: {
    rwenLine: "This is THE intermediate hurdle for English speakers. は (wa) and が (ga) both seem to mark the doer of the verb — and English has only one word, 'the subject'. Today you learn the difference: は says 'as for X, here's the news', が says 'X — and only X — is the one that did it'.",
    culturalNote: "Even advanced learners trip on this for years. The good news: native speakers will understand you with either particle in most early sentences. The better news: feeling the difference unlocks Japanese sentences that English literally cannot translate cleanly. You're entering a grammatical space your first language did not give you.",
  },

  chunks: [
    {
      id: 'ga_particle',
      target: 'が (ga)',
      native: 'Subject marker — "the one who"',
      literal: 'New information; the answer to "who?" or "what?"',
      emoji: '🎯',
      phonetic: 'ga',
      audioRef: null,
    },
    {
      id: 'dare_ga',
      target: '誰がパンを食べましたか。',
      native: 'Who ate the bread?',
      literal: 'dare (who) + ga (subject) + pan (bread) + o + tabemashita (ate) + ka (?)',
      emoji: '❓',
      phonetic: 'da-re ga pan o ta-be-ma-shi-ta ka',
      audioRef: null,
    },
    {
      id: 'watashi_ga',
      target: '私が食べました。',
      native: 'I ate (it). / I am the one who ate.',
      literal: 'watashi (I) + ga (it was me) + tabemashita (ate)',
      emoji: '🙋',
      phonetic: 'wa-ta-shi ga ta-be-ma-shi-ta',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'は = topic ("as for"), が = subject ("the one who")',
    explanation: 'Use は when X is already known and you are saying something about X. Use が when X is the new piece of information — the answer to who/what. Question words 誰 (who), 何 (what), どれ (which) ALWAYS take が, never は.',
    examples: [
      { target: '私は田中です。', native: 'As for me, (I) am Tanaka. (introducing myself — topic)' },
      { target: '田中さんが来ました。', native: 'Tanaka (it was Tanaka) came. (new info — subject)' },
      { target: '誰が食べましたか。', native: 'Who ate (it)? (question word → が, never は)' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match each particle to its job',
      pairs: [
        { left: 'は', right: 'Topic — "as for X"' },
        { left: 'が', right: 'Subject — "the one who"' },
        { left: '誰が', right: 'Who? (question word always takes が)' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Fill the blank — question word rule',
      sentence: '誰___学生ですか。',
      options: ['が', 'は', 'を'],
      correct: 'が',
      context: 'Who is a student? (Question words 誰/何/どれ always take が, never は.)',
    },
    {
      type: 'multiple_choice',
      instruction: 'Choose the natural translation',
      question: 'Someone asks: "Who came?" The answer "Tanaka came" is:',
      options: [
        { text: '田中さんが来ました。', correct: true },
        { text: '田中さんは来ました。', correct: false },
        { text: '田中さんを来ました。', correct: false },
      ],
      explanation: '"Who came" was the question, so Tanaka is NEW info — the answer to "who". が, not は.',
    },
    {
      type: 'translate',
      instruction: 'Type in Japanese',
      prompt: 'Who ate the bread? (use the question-word + が rule)',
      correct: ['誰がパンを食べましたか。', '誰がパンを食べましたか', 'だれがパンをたべましたか。'],
    },
    {
      type: 'build_sentence',
      instruction: 'Build "I am the one who ate" (it was me)',
      words: ['食べました。', 'が', '私'],
      correct: ['私', 'が', '食べました。'],
      translation: 'I ate (it). / I am the one who ate.',
    },
    {
      type: 'multiple_choice',
      instruction: 'Pick the right particle',
      question: 'Self-introduction: "I\'m Sato." 私___佐藤です。',
      options: [
        { text: 'は (topic — "as for me")', correct: true },
        { text: 'が (subject — "the one who is")', correct: false },
        { text: 'を (object)', correct: false },
      ],
      explanation: 'Self-introductions use は. You\'re setting yourself as the topic, not picking yourself out as new information among options.',
    },
  ],

  rwenDialogue: {
    intro: 'You are sitting in your Japanese class and the sensei runs a quick drill on the は/が distinction.',
    lines: [
      {
        speaker: 'rwen',
        rwenLine: '質問です。"Who is the teacher?" を日本語で。誰__先生ですか。',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: '誰が先生ですか。', native: 'Who is the teacher? (が — question word rule)', correct: true, feedback: 'Exactly. 誰 is a question word, so が is mandatory. は is impossible here.' },
          { target: '誰は先生ですか。', native: 'Who is the teacher? (wrong particle)', correct: false, feedback: '誰は does not exist in Japanese. Question words always take が — 誰が, 何が, どれが.' },
          { target: '先生は誰ですか。', native: 'As for the teacher, who is it?', correct: false, feedback: 'Grammatically valid but the sensei asked for "誰__先生ですか". The blank after 誰 must be が.' },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: 'そうです。は is for "as for X". が is for "X is the one". Question words always take が.',
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'The subject-marker particle (pronounced ga)', correct: ['が'] },
      { prompt: 'Who ate the bread? (full sentence in Japanese)', correct: ['誰がパンを食べましたか。', '誰がパンを食べましたか', 'だれがパンをたべましたか。'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: 'Catch yourself in two situations today. (1) Introduce yourself in your head: 私は___です — that\'s は. (2) Imagine someone asking 誰がそれをやりましたか? (who did that?) — answer 私がやりました — that\'s が. Feel the difference.',
    rwenSignoff: "は and が are the same in English. They are not the same in Japanese. You see it now. がんばって。",
  },

  phase8: {
    scenario: "It's a study session at a Japanese language café in Shibuya. Your tutor sets up three quick role-plays: (1) you introduce yourself to a stranger, (2) someone asks 誰がこのケーキを食べましたか (who ate this cake?) and you confess, (3) someone asks 田中さんはどこですか (where's Tanaka?) and you answer with what Tanaka is doing. Each role-play forces you to choose は or が correctly.",
    rwenRole: 'Aiko-san — a 30-year-old language tutor, friendly, very direct, who reacts in mock horror if you say 誰は or 私は食べました when the question was 誰が.',
    successCriteria: 'User uses は to introduce themselves (私は…です), が to claim the action when answering "who" (私が食べました), and produces 誰が (NOT 誰は) when forming a who-question — three sentences, three correct particle choices, with at least one correct use of each of は and が.',
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;

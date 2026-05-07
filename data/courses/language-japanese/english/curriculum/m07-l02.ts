import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm07-l02-onaka-suita',
  module: 7,
  lesson: 2,
  title: 'お腹すいた — Hunger and Thirst',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Before you order, you announce. お腹すいた — my stomach is empty. のど渇いた — my throat is dry. In Japanese, hunger and thirst aren't conditions you have; they're things that happened to your stomach and throat. Once you say it, the country has a reflex: someone produces food.",
    culturalNote: "お腹すいた is casual — you say it to friends, family, your partner. The polite version is お腹がすきました. Same with thirst: のど渇いた (casual) vs のどが渇きました (polite). Default polite with strangers and staff; downshift only with people you're close to. Saying nothing and being hungry is its own faux pas — Japanese hosts can't read minds.",
  },

  chunks: [
    {
      id: 'onaka_suita',
      target: 'お腹すいた',
      native: "I'm hungry (casual)",
      literal: 'onaka suita — stomach became-empty',
      emoji: '😋',
      phonetic: 'oh-NA-ka su-i-ta',
      audioRef: null,
    },
    {
      id: 'nodo_kawaita',
      target: 'のど渇いた',
      native: "I'm thirsty (casual)",
      literal: 'nodo kawaita — throat became-dry',
      emoji: '💧',
      phonetic: 'NO-do ka-WAI-ta',
      audioRef: null,
    },
    {
      id: 'onaka_ippai',
      target: 'お腹いっぱい',
      native: "I'm full",
      literal: 'onaka ippai — stomach full',
      emoji: '😌',
      phonetic: 'oh-NA-ka ip-PAI',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Body part + state-verb — how Japanese describes hunger',
    explanation: "Japanese describes hunger and thirst by naming the body part and what happened to it: 'stomach became-empty' / 'throat became-dry'. The English 'I am hungry' would translate literally as 'as for me, stomach got empty'. Once you see the pattern, the words stop feeling random.",
    examples: [
      { target: 'お腹すいた', native: 'My stomach got empty (= I am hungry)' },
      { target: 'のど渇いた', native: 'My throat got dry (= I am thirsty)' },
      { target: 'お腹いっぱい', native: 'My stomach is full' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the phrase to its meaning',
      pairs: [
        { left: 'お腹すいた', right: "I'm hungry" },
        { left: 'のど渇いた', right: "I'm thirsty" },
        { left: 'お腹いっぱい', right: "I'm full" },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Tell your friend you need water',
      sentence: 'のど_____、水ほしい。',
      options: ['渇いた', 'すいた', 'いっぱい'],
      correct: '渇いた',
      context: "You've been walking around Shibuya for two hours in August.",
    },
    {
      type: 'translate',
      instruction: 'Type in Romaji — casual',
      prompt: "I'm hungry",
      correct: ['onaka suita', 'Onaka suita', 'onakasuita'],
    },
    {
      type: 'build_sentence',
      instruction: 'Wave off a third helping politely',
      words: ['お腹', 'いっぱい', '、', 'もう'],
      correct: ['もう', 'お腹', 'いっぱい', '、'],
      translation: "I'm already full,",
    },
    {
      type: 'multiple_choice',
      instruction: "You're at a host family's dinner table. The mother is about to plate up your fourth bowl of rice. You can't eat any more. What do you say?",
      question: 'Politely signal you have had enough',
      options: [
        { text: 'お腹いっぱいです、ありがとうございます', correct: true },
        { text: 'お腹すいた', correct: false },
        { text: 'のど渇いた', correct: false },
      ],
      explanation: "お腹いっぱい (full) softened with です + ありがとうございます is the polite stop signal. お腹すいた means hungry — the opposite — and のど渇いた is thirst.",
    },
    {
      type: 'translate',
      instruction: 'Type in Romaji — casual',
      prompt: "I'm thirsty",
      correct: ['nodo kawaita', 'Nodo kawaita', 'nodokawaita'],
    },
  ],

  rwenDialogue: {
    intro: "It's 1pm and you're walking through Yoyogi Park with a Japanese friend. You haven't eaten since 7am. She glances at you.",
    lines: [
      {
        speaker: 'npc',
        target: 'どうしたの？元気ない？',
        native: "What's wrong? You seem low energy.",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'お腹すいた…何か食べたい', native: "I'm hungry... I want to eat something", correct: true, feedback: "Honest and casual — exactly the register for a friend. She immediately suggests a soba place across the road." },
          { target: 'お腹いっぱい', native: "I'm full", correct: false, feedback: "That's the opposite — you'd say that after eating, not before. Try お腹すいた." },
          { target: '大丈夫', native: "I'm fine", correct: false, feedback: "The British 'I'm fine' instinct kicks in — but if you're hungry, say so. お腹すいた is the move; she can do something about it." },
        ],
      },
      {
        speaker: 'npc',
        target: 'じゃ、そばでも食べに行こうか',
        native: "Okay, shall we go grab some soba?",
      },
      {
        speaker: 'rwen',
        rwenLine: "Stop apologising for needing things in Japanese — there's a phrase for every state and people use them flatly. お腹すいた gets you fed. のど渇いた gets you water. The country runs on these little signals.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: "I'm hungry (casual)", correct: ['onaka suita', 'Onaka suita', 'onakasuita', 'お腹すいた'] },
      { prompt: "I'm thirsty (casual)", correct: ['nodo kawaita', 'Nodo kawaita', 'nodokawaita', 'のど渇いた'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Today, when you next feel hungry — actually feel it — say お腹すいた out loud. When you next reach for water, のど渇いた. Bind the words to the sensations once and you'll never have to translate them again.",
    rwenSignoff: "Hunger speaks first in any language. また明日.",
  },

  phase8: {
    scenario: "It's a Sunday afternoon hike in Kamakura with two Japanese friends. You've been walking for three hours, the sun is brutal, and you're running out of energy — but you haven't said anything because you don't want to slow them down. They've just stopped at a bench under the trees and one of them is unwrapping rice balls.",
    rwenRole: "Yuki — your friend, late 20s, casual and direct; she'll happily share onigiri and water but only if you actually say what you need.",
    successCriteria: "User uses casual register with friends — 'お腹すいた' and 'のど渇いた' (NOT the polite -ました forms, which would feel oddly formal among peers), and uses 'お腹いっぱい' to wave off the fourth onigiri rather than forcing it down out of politeness.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;

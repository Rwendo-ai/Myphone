# Rwendo Lesson Template
## The exact JSON structure every lesson follows

This is the contract between content authors and the lesson engine. Every lesson is a single JSON file in this shape. Authors write content, engineers build the renderer once.

---

## File Naming Convention

```
/language-packs/shona-english/lessons/
  m01-greetings/
    01-mangwanani.json        ← Module 1, Lesson 1
    02-respect-prefixes.json
    03-afternoon-greetings.json
    ...
```

Module folders use `m{XX}-{slug}`. Lesson files use `{XX}-{slug}.json`.

---

## Lesson JSON Structure

```json
{
  "id": "m01-l01-mangwanani",
  "module": 1,
  "lesson": 1,
  "title": "Mangwanani — Good Morning",
  "estimatedMinutes": 5,
  "xpReward": 25,
  "prerequisites": [],

  "hook": {
    "scene": "morning_village",
    "rwenLine": "Mangwanani! In Shona, every greeting is a wellness check — never just 'hi'. Skipping a greeting is rude. Today, we wake the day together.",
    "culturalNote": "Shona greetings are deeply tied to *tsika* — respect. We always ask how someone has woken or spent the day."
  },

  "chunks": [
    {
      "id": "mangwanani",
      "shona": "Mangwanani",
      "english": "Good morning",
      "literal": "(it has) dawned",
      "emoji": "🌅",
      "audioRef": null,
      "phonetic": "mang-gwa-NA-ni"
    },
    {
      "id": "mamuka_sei",
      "shona": "Mamuka sei?",
      "english": "How did you wake? (respectful)",
      "literal": "You(plural) woke how?",
      "emoji": "👀",
      "audioRef": null,
      "phonetic": "ma-MU-ka SAY"
    },
    {
      "id": "ndamuka_kana_mamukawo",
      "shona": "Ndamuka, kana mamukawo",
      "english": "I woke (well), if you also woke (well)",
      "literal": "I-woke, if you(pl)-woke-also",
      "emoji": "✨",
      "audioRef": null,
      "phonetic": "nda-MU-ka KA-na ma-MU-ka-wo"
    }
  ],

  "pattern": {
    "name": "Person markers",
    "explanation": "Notice the prefix changes who you mean. **Ma-** = you(plural/respectful). **W-** = you(singular/informal). **Nd-** = I.",
    "examples": [
      { "shona": "Mamuka", "english": "You(respectful) woke" },
      { "shona": "Wamuka", "english": "You(friend) woke" },
      { "shona": "Ndamuka", "english": "I woke" }
    ]
  },

  "exercises": [
    {
      "type": "match_pairs",
      "instruction": "Match the Shona phrase to its meaning",
      "pairs": [
        { "left": "Mangwanani", "right": "Good morning" },
        { "left": "Mamuka sei?", "right": "How did you wake? (respectful)" },
        { "left": "Ndamuka", "right": "I woke" }
      ]
    },
    {
      "type": "fill_blank",
      "instruction": "Complete the greeting",
      "sentence": "Mangwanani, _____ sei?",
      "options": ["mamuka", "wamuka", "ndamuka"],
      "correct": "mamuka",
      "context": "You're greeting a shopkeeper — use respectful form."
    },
    {
      "type": "translate",
      "instruction": "Type in Shona",
      "english": "Good morning",
      "correct": ["Mangwanani"],
      "acceptableVariants": ["mangwanani"]
    },
    {
      "type": "build_sentence",
      "instruction": "Drag the words to greet your elder respectfully",
      "words": ["Mangwanani", "mamuka", "sei"],
      "correct": ["Mangwanani", "mamuka", "sei"],
      "translation": "Good morning, how did you wake? (respectful)"
    },
    {
      "type": "multiple_choice",
      "instruction": "What's the correct response to 'Mamuka sei?'",
      "question": "An elder greets you. What do you say?",
      "options": [
        { "text": "Ndamuka, kana mamukawo", "correct": true },
        { "text": "Wamuka", "correct": false },
        { "text": "Mangwanani", "correct": false }
      ],
      "explanation": "You mirror the respect — use 'mamukawo' (also you-respectful)."
    },
    {
      "type": "translate",
      "instruction": "Type in Shona — respectful form",
      "english": "How did you wake?",
      "correct": ["Mamuka sei?", "Mamuka sei"],
      "acceptableVariants": ["mamuka sei?", "mamuka sei"]
    }
  ],

  "rwenDialogue": {
    "intro": "Imagine you've just walked into a village. An elder is sitting under a tree. Greet them.",
    "lines": [
      {
        "speaker": "elder",
        "shona": "Mangwanani",
        "english": "Good morning",
        "userResponse": null
      },
      {
        "speaker": "user",
        "userChoices": [
          { "shona": "Mangwanani, mamuka sei?", "correct": true, "feedback": "Perfect — respectful and warm." },
          { "shona": "Mangwanani, wamuka sei?", "correct": false, "feedback": "Almost — but elders deserve the respectful 'ma-' form." },
          { "shona": "Ndamuka", "correct": false, "feedback": "That's how you reply, not how you greet first." }
        ]
      },
      {
        "speaker": "elder",
        "shona": "Ndamuka, kana mamukawo",
        "english": "I woke (well), if you also woke (well)",
        "userResponse": null
      },
      {
        "speaker": "rwen",
        "shona": null,
        "english": "Beautiful. You greeted with tsika — respect. The elder feels seen.",
        "rwenAnimation": "celebrate"
      }
    ]
  },

  "activeRecall": {
    "instruction": "No looking back. Type from memory.",
    "prompts": [
      { "english": "Good morning (greeting)", "correct": ["Mangwanani"] },
      { "english": "How did you wake? (to a respected elder)", "correct": ["Mamuka sei?", "Mamuka sei"] }
    ]
  },

  "mission": {
    "title": "Today's Journey",
    "task": "Greet someone — anyone — with 'Mangwanani' today. Even silently to yourself in the mirror counts.",
    "rwenSignoff": "I'll ask you tomorrow. Famba zvakanaka — go well."
  },

  "completionRewards": {
    "xp": 25,
    "streakProtected": true,
    "badge": null,
    "rwenColourShift": "warm_orange"
  }
}
```

---

## Exercise Type Definitions

### `match_pairs`
User drags items from left column to match items in right column. Always 3-5 pairs. Auto-shuffles right column on render.

### `fill_blank`
Sentence with one missing word. User selects from 3 options. The wrong options should be plausible (other person markers, similar words) — never random gibberish.

### `translate`
User types the answer. Accept multiple correct answers, ignore case, ignore trailing punctuation. Use `acceptableVariants` for forgiving grading.

### `build_sentence`
User drags words into correct order. Words shown shuffled. Optional bonus: include 1-2 distractor words that don't belong.

### `multiple_choice`
2-4 options, only one correct. Always include `explanation` for the correct answer — shown after user picks.

### Future: `listen_type` (Phase 2)
Audio plays, user types what they hear. Same grading as `translate`.

### Future: `speak_phrase` (Phase 2)
User taps mic and speaks. Deepgram transcribes. Claude scores pronunciation 0-100.

---

## Authoring Notes

1. **Always 3 chunks per lesson.** Not 2, not 4. The cognitive science demands 3.
2. **At least 2 exercises must be `translate` or `build_sentence`.** Recall > recognition.
3. **Rwen dialogue is mandatory** — even if simple. It's the emotional anchor.
4. **Mission must be specific and small.** "Use Mangwanani once today" not "practise greetings".
5. **Phonetic spelling uses CAPS for stressed syllable.** This carries forward into the voice era.
6. **`audioRef` will be populated in Phase 2** — leave null in text era.

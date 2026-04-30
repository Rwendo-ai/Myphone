# Claude API (Anthropic) — Rwendo AI Brain

## What it does in Rwendo
Powers all intelligent conversation in the app: Rwen's personality and responses, language tutoring, pronunciation feedback explanations, adaptive lesson difficulty, and the Replika-style companion mode.

## Current Models (as of 2026-04)
| Model | Speed | Cost | Use in Rwendo |
|-------|-------|------|---------------|
| `claude-haiku-4-5-20251001` | Fastest | Cheapest | Default conversation, real-time Rwen chat |
| `claude-sonnet-4-6` | Balanced | Mid | Deep companion sessions, pronunciation analysis |
| `claude-opus-4-7` | Slowest | Most expensive | Future premium tier option |

**Default for MVP:** Haiku for all real-time interactions. Sonnet for background tasks (lesson generation, content moderation).

## Key Use Cases

### 1. Rwen Conversation Engine
```
System prompt establishes:
- Rwen's personality (warm, curious, encouraging, gently playful)
- User's profile (name, age, level, learning goals)
- Active language pair (Shona-English)
- Conversation mode (lesson / free chat / companion)

User message → Claude → Rwen response text → ElevenLabs TTS → audio played
```

### 2. Pronunciation Feedback
- Deepgram transcribes user speech
- Claude receives: target phrase, transcribed attempt, phoneme diff
- Claude returns: natural-language encouragement + specific correction
- Rwen delivers the feedback in-character

### 3. Adaptive Lesson Difficulty
- Claude analyses user's recent error patterns (passed as context)
- Returns: difficulty recommendation, focus areas, next lesson type
- Runs as a background call after every 5 lessons

### 4. Onboarding Conversation
- Claude drives the Rwen onboarding dialogue
- Extracts: name, age range, goals, preferred learning style
- Structured output (JSON mode) used to populate user profile

## Prompt Caching
All system prompts use Anthropic prompt caching (`cache_control: ephemeral`):
- Rwen's base personality prompt (~2000 tokens) cached across requests
- User profile context cached per session
- Reduces cost by ~80% on repeated conversation turns

## Safety & Content Moderation
- Companion mode: Claude's built-in safety handles inappropriate requests
- Age gating: system prompt includes user age — Claude adjusts content accordingly
- No jailbreak surface: all prompts server-side, never exposed to client

## Cost Controls
- Token budget enforced per request (max_tokens cap)
- Session cost tracked server-side, deducted from credits in real time
- Hard stop if credits reach zero — graceful "top up" prompt shown
- Monthly spend alerts via Anthropic console

## Structured Output Pattern
For any Claude call that feeds app logic (not display text), use JSON mode:
```typescript
const response = await anthropic.messages.create({
  model: "claude-haiku-4-5-20251001",
  max_tokens: 256,
  messages: [...],
  // Include JSON instruction in system prompt
})
```

## Gotchas
- Haiku has a smaller context window — keep conversation history trimmed to last 10 turns
- Prompt caching only applies if the cached portion is identical — don't inject dynamic data into cached blocks
- Claude will refuse some companion mode requests — handle refusals gracefully in Rwen's character
- API keys must never leave the server — all Claude calls go through Rwendo backend

## Docs
- https://docs.anthropic.com
- https://docs.anthropic.com/en/docs/build-with-claude/prompt-caching
- https://docs.anthropic.com/en/api/messages

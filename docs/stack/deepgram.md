# Deepgram — Rwendo Speech-to-Text & Pronunciation

## What it does in Rwendo
Transcribes user speech during pronunciation practice and AI conversation. Provides word-level timestamps and confidence scores used to measure pronunciation accuracy.

## Why Deepgram over Whisper
| Factor | Deepgram | Whisper (OpenAI) |
|--------|---------|-----------------|
| Latency | ~200ms real-time | ~1-3s batch |
| Streaming | Yes (WebSocket) | No (batch only) |
| Word-level confidence | Yes | Limited |
| Cost at scale | Pay-per-minute, competitive | Per-minute, similar |
| Self-host option | No | Yes (open source) |

Deepgram wins for real-time conversation. Whisper is a fallback if costs become an issue.

## Key Features Used

### 1. Pronunciation Scoring
- User speaks a target Shona/English phrase
- Deepgram returns: transcript + word-level confidence scores + phoneme timing
- Server compares to expected phrase, calculates accuracy score (0–100)
- Score + diff sent to Claude for natural-language feedback

### 2. Live Conversation Transcription
- WebSocket streaming during Rwen conversations
- Interim results shown as live captions (optional UI)
- Final transcript sent to Claude for response generation

### 3. Language Detection
- Used during onboarding to confirm user's spoken language
- Helps calibrate initial difficulty level

## API Pattern
```typescript
// Streaming transcription
const dgClient = createClient(DEEPGRAM_API_KEY)

const connection = dgClient.listen.live({
  model: 'nova-2',
  language: 'en',          // switch to 'sn' for Shona if supported
  punctuate: true,
  interim_results: true,
  utterance_end_ms: 1000,
})

connection.on(LiveTranscriptionEvents.Transcript, (data) => {
  const transcript = data.channel.alternatives[0].transcript
  const confidence = data.channel.alternatives[0].confidence
  // handle transcript
})
```

## Shona Language Support
- Deepgram does not natively support Shona as of 2026 — verify current model list
- Workaround: use English model for phoneme analysis (Shona shares many phonemes)
- Long-term: fine-tune a custom Deepgram model on Shona audio data
- Flag this as a known limitation — pronunciation scoring for Shona will be approximate at MVP

## Cost
- Nova-2 model: ~$0.0043/minute streaming
- At 10 minutes/day/user → ~$0.043/user/day
- Included in credit deduction calculation server-side

## Gotchas
- Deepgram API key must stay server-side — proxy all audio through Rwendo backend
- Mobile microphone audio needs to be 16kHz mono PCM for best results — pre-process on device
- Interim results fire frequently — debounce UI updates to avoid flicker
- WebSocket connection drops on mobile background — handle reconnect gracefully

## Docs
- https://developers.deepgram.com/docs
- https://developers.deepgram.com/docs/live-streaming-audio
- https://developers.deepgram.com/reference/listen-live

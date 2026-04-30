# ElevenLabs — Rwendo Voice & TTS

## What it does in Rwendo
Gives Rwen a real voice. Powers text-to-speech for all of Rwen's spoken responses, native speaker pronunciation examples in lessons, and the AI avatar voice in paid tiers.

## Key Features Used

### 1. Rwen's Voice
- Custom voice designed for Rwen — warm, gender-neutral, slight African cadence
- Created via ElevenLabs Voice Design or cloned from a voice actor recording
- Consistent across all app interactions — Rwen always sounds like Rwen
- Emotion tags used to shift tone: `<excited>`, `<soft>`, `<encouraging>`

### 2. Native Speaker Pronunciation
- Pre-generated audio for all dictionary entries and lesson words
- Stored in Supabase Storage / Cloudflare CDN — not generated in real time
- Both Shona and English native speaker voices

### 3. Real-time Avatar Voice (Phase 2)
- Streaming TTS for live Rwen conversations
- Low-latency streaming API used (not batch) — target <500ms first audio chunk
- Screen-on mode: full avatar lip-sync + voice
- Screen-off mode: voice only (cheaper, no avatar rendering)

## API Usage Pattern
```typescript
// Pre-generated (dictionary/lessons) — batch, store result
const audio = await elevenlabs.textToSpeech.convert(RWEN_VOICE_ID, {
  text: "Mangwanani! Zita rako ndiani?",
  model_id: "eleven_turbo_v2_5",  // fastest, cheapest
  voice_settings: { stability: 0.7, similarity_boost: 0.8 }
})

// Real-time conversation — streaming
const stream = await elevenlabs.textToSpeech.stream(RWEN_VOICE_ID, {
  text: responseText,
  model_id: "eleven_turbo_v2_5",
})
```

## Models
| Model | Use | Latency | Cost |
|-------|-----|---------|------|
| `eleven_turbo_v2_5` | Real-time Rwen chat | ~300ms | Low |
| `eleven_multilingual_v2` | Native speaker audio generation | Higher | Mid |

## Cost Management
- Pre-generate all static audio (lessons, dictionary) — store once, serve forever
- Only use real-time TTS for live conversation (pay-as-you-go tier)
- Character count tracked server-side — included in credit deduction calculation
- Cache Rwen's common phrases (greetings, encouragements) — don't regenerate

## Shona Language Support
- ElevenLabs multilingual model supports a wide range of phonemes
- Shona pronunciation may need validation by native speaker — flag errors and regenerate
- Use IPA notation in prompts if standard spelling produces wrong pronunciation

## Gotchas
- ElevenLabs API key must stay server-side — never in the React Native app
- Streaming audio on React Native requires `expo-av` with careful buffer handling
- Voice cloning requires consent agreement — ensure voice actor signs off
- Generated audio files can be large — compress to MP3 128kbps before storing

## Docs
- https://elevenlabs.io/docs
- https://elevenlabs.io/docs/api-reference/text-to-speech
- https://elevenlabs.io/docs/api-reference/streaming

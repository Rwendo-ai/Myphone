# ElevenLabs Conversational AI — Rwendo Implementation Guide

## What It Is
ElevenLabs Conversational AI (ElevenAgents) provides real-time voice conversation through:
- Fine-tuned Speech-to-Text (continuous, detects when user stops talking)
- Claude or GPT as the AI brain (we use Claude)
- Low-latency Text-to-Speech (Rwen's voice)
- Proprietary turn-taking — no button pressing, natural conversation

## Why This vs Our Current Approach
Current: Hold mic → record → upload → transcribe → Claude → TTS → play (3-5 seconds)
ElevenAgents: Speak → instant response → Rwen speaks (0.3-0.8 seconds, feels real)

## Pricing
| Mode | Cost | Notes |
|---|---|---|
| Standard (GPT-3.5) | $0.08/min | Not our choice |
| Turbo (GPT-4o-mini) | $0.10/min | Not our choice |
| **Premium (Claude)** | **$0.12/min** | Our target |

**Cost modelling for Rwendo:**
- Average companion session: 10 minutes
- 30 sessions/month (daily user): 300 min × $0.12 = **$36 USD/month per heavy user**
- Casual user (3 sessions/week): 120 min × $0.12 = **$14.40 USD/month**
- Set monthly limit: 60 min included → ~$7.20 USD cost → sell at $25 AUD (~$16 USD) = good margin
- Top-up: 30 min = $3.60 USD cost → sell at AUD $8

## Agent Setup (ElevenLabs Dashboard)
1. Go to ElevenLabs → **Conversational AI** → **Create Agent**
2. Name: "Rwen"
3. **LLM**: Select Claude Sonnet 4 (claude-sonnet-4-6)
4. **System Prompt**: Rwen's personality (warm, Shona-aware, language coach)
5. **Voice**: Select Rwen's chosen voice (George, Charlie, etc.)
6. **First Message**: "Mhoro! I'm Rwen. Ready to practice Shona?"
7. Save → copy **Agent ID**

## React Native Integration
ElevenLabs has a native React Native SDK:
```bash
npm install @11labs/react-native
```

WebSocket endpoint:
```
wss://api.elevenlabs.io/v1/convai/conversation?agent_id={AGENT_ID}
```

Basic usage:
```typescript
import { useConversation } from '@11labs/react-native';

const conversation = useConversation({
  agentId: process.env.EXPO_PUBLIC_ELEVENLABS_AGENT_ID,
  onMessage: (message) => console.log(message),
});

await conversation.startSession();
await conversation.endSession();
```

## Rwendo Tier Mapping
| Tier | AUD/mo | Included | Voice Mode |
|---|---|---|---|
| Free | $0 | Lessons only | None |
| Text AI | $10 | 500 text messages | Text only |
| Voice | $15 | 200 TTS messages (push-to-talk) | Push-to-talk |
| Companion | $25 | 60 min real conversation | ElevenAgents |
| Premium | $45 | 120 min + avatar lipsync | ElevenAgents + Sync.io |

## Cost Margins at Each Tier (per user/month)
| Tier | Revenue | API Cost | Gross Margin |
|---|---|---|---|
| Text AI ($10 AUD) | ~$6.50 | ~$1.20 (Claude) | 82% |
| Voice ($15 AUD) | ~$10 | ~$3.50 (Claude + ElevenLabs TTS) | 65% |
| Companion ($25 AUD) | ~$16 | ~$7.20 (ElevenAgents 60min) | 55% |
| Premium ($45 AUD) | ~$29 | ~$14-18 (ElevenAgents + Sync.io) | 38-52% |

## Top-Up Packs
- 30 extra conversation minutes: AUD $8
- 100 extra TTS messages: AUD $4
- 20 extra avatar sessions: AUD $6

## Next Steps
1. Create Agent in ElevenLabs dashboard with Claude + Rwen system prompt
2. Get Agent ID
3. Install @11labs/react-native
4. Replace current push-to-talk with Conversational AI session
5. Gate behind Companion tier (RevenueCat purchase check)

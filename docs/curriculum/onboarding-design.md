# Rwendo Onboarding Design
*Version 2.0 — Complete user journey documentation*

---

## Philosophy

The onboarding is the most important part of the app. Every question asked serves two purposes:
1. **Personalise the experience** — app language, content, AI prompts
2. **Build the AI context profile** — the more we know, the more powerful Claude's responses

Every answer feeds directly into Rwen's system prompt. A student who says "I want to learn Shona to connect with my grandmother" gets a fundamentally different Rwen than someone learning for business.

---

## The Two-Phase Structure

**Phase 1: Get Signed Up** (captures who they are)
**Phase 2: Qualify & Personalise** (captures what they need)

Auth happens at the END of Phase 1 — after we know their interface language but before we know their path. This means we can show the auth screen in their language.

---

## PHASE 1: GET SIGNED UP

### Step 1.1 — Interface Language
**Screen:** "What language do you speak?"
**Purpose:** Sets the app's UI language for ALL subsequent screens
**Options:** English 🇬🇧 | Shona 🇿🇼 | (future: French, etc.)
**Result:** `app_language` = 'english' | 'shona'
**Note:** From this point, ALL text renders in the chosen language

---

### Step 1.2 — Create Account
**Screen:** "Create your account"
**Options:**
- Continue with Google
- Continue with Apple (iOS only)
- Continue with Email

**Email flow:**
- Email address
- Password (must contain: uppercase, lowercase, number, special character)
  - Live validation with green/red indicators per rule
- Confirm password

**After email sign-up:** Confirmation email sent → "Check your email" screen with resend option

---

### Step 1.3 — Confirm Email (email path only)
**Screen:** "Check your inbox"
- Display: "We sent a link to [email]"
- Resend button (60 second cooldown)
- "Already confirmed? Continue →"

---

## PHASE 2: QUALIFY & PERSONALISE

### Step 2.1 — Name
**Screen:** "What should Rwen call you?"
**Field:** First name only (or nickname)
**Stored as:** `display_name`
**Used in:** All AI prompts, greetings, lesson hooks

---

### Step 2.2 — Gender Identity
**Screen:** "How do you identify?"
**Options:**
- Male
- Female
- Non-binary
- Prefer not to say

**Used in:** Pronouns in AI responses, avatar defaults

---

### Step 2.3 — Age
**Screen:** "How old are you?"
**Input:** Age selector or birth year
**Logic:**
- **18+:** Full app, all features available
- **13-17:** Learn language only (no companion/emotional connection features), parental consent prompt
  - Option A: Parent creates account, generates child code → child uses code
  - Option B: "Coming soon — ask a parent to set up your account"
- **Under 13:** "Rwendo is not available for users under 13. Please come back when you're older."

**Age gates:**
- AI Companion (friend/emotional) → 18+
- Language learning → 13+
- Travel features → 13+

---

### Step 2.4 — Why Rwendo?
**Screen:** "What brings you to Rwendo?"
**Select one (or up to 2):**

| Choice | Icon | What it unlocks |
|---|---|---|
| Learn a language | 📚 | Language learning path |
| AI companion | 🦎 | Companion path |
| Travel to Zimbabwe | ✈️ | Travel path (+ optional language) |
| Connect with family/culture | 🌍 | Cultural connection sub-path |
| Professional/business | 💼 | Professional language path |

**Note:** Multiple selections possible. Primary determines main path, secondary adds context to AI prompt.

---

## PATH A: LEARN A LANGUAGE

### A.1 — Choose Language Pack
**Screen:** "What language do you want to learn?"
- Shona 🇿🇼 (available)
- English 🇬🇧 (available if spoke Shona)
- French 🇫🇷 (coming soon)
- [Future packs]

### A.2 — Current Ability
**Screen:** "How much [language] do you know?"
- Complete beginner — "I know zero words"
- Absolute basics — "I know hello and goodbye"
- Some knowledge — "I can have simple conversations"
- Intermediate — "I can hold a conversation but make mistakes"

**Used in:** Starting module, AI prompt difficulty level

### A.3 — Reason for Learning
**Screen:** "Why do you want to learn [language]?"
*(Select all that apply)*
- Connecting with family or partner
- Visiting Zimbabwe / travelling
- Cultural interest and heritage
- Work or business
- Academic study
- Just for fun / challenge
- I was raised speaking it but forgot

**Used in:** Lesson tone, cultural notes emphasis, Rwen's conversation style

### A.4 — Time Commitment
**Screen:** "How much time can you give Rwendo each day?"
- 5 minutes — "Quick learner"
- 10 minutes — "Steady pace"
- 20 minutes — "Serious student"
- 30+ minutes — "Fully committed"

**Used in:** Lesson pacing, daily XP goals, streak expectations

### A.5 — Biggest Challenge
**Screen:** "What worries you most about learning a new language?"
- Pronunciation — "I can't make the sounds"
- Grammar — "The rules confuse me"
- Vocabulary — "I forget words quickly"
- Confidence — "I'm scared to speak"
- Consistency — "I always give up"

**Used in:** Rwen's coaching style, encouragement focus areas

### A.6 — Connection Question
**Screen:** "Is there someone specific you want to speak [language] with?"
*(Optional — skip available)*
- A family member
- A partner or friend
- Work colleagues
- Future people I'll meet
- No specific person
- [Free text: "Tell Rwen who" — feeds into AI prompt]

**AI Prompt Impact:** If user says "my grandmother Ambuya" — Rwen references this. "You're getting closer to talking to your Ambuya. She'll be so proud."

---

## PATH B: AI COMPANION

### B.1 — Companion Language
**Screen:** "What language should Rwen speak to you in?"
(Same as app language usually, but can differ)

### B.2 — Type of Companion
**Screen:** "What kind of companion do you need Rwen to be?"

| Type | Description | 18+ only? |
|---|---|---|
| Friend | Someone to talk to, share your day, laugh with | No |
| Emotional support | A patient listener for hard days | 18+ recommended |
| Deeper connection | A meaningful ongoing relationship | 18+ |
| Study buddy | Keep me accountable and learning | No |
| Work support | Help me think through professional challenges | No |

### B.3a — If Friend
- "What do you usually talk to friends about?" (multi-select)
  - Daily life and what happened today
  - Goals and ambitions
  - Things that made me laugh
  - Music, movies, culture
  - Thoughts and opinions
  - Everything

### B.3b — If Emotional Support
- "What do you find hardest right now?" (optional, skip available)
  - Loneliness
  - Anxiety or stress
  - Big life changes
  - I just want someone to talk to
  - Prefer not to say
- "How do you prefer to be supported?"
  - Just listen, don't give advice
  - Give me honest feedback
  - Help me see a positive angle
  - Ask me questions to figure it out

### B.3c — If Work Support
- "What kind of work do you do?" (free text, optional)
- "What do you need most help with?"
  - Thinking through problems
  - Preparing for conversations or meetings
  - Processing a difficult work situation
  - Goal setting and accountability
  - General chat to decompress

### B.4 — Rwen's Personality Preference
**Screen:** "What personality do you want Rwen to have?"
*(Slider or select)*
- More serious ←→ More playful
- More listener ←→ More talker
- More structured ←→ More spontaneous

### B.5 — Voice Selection
**Screen:** "Choose Rwen's voice"
- George (warm, British storyteller) 👨
- Charlie (energetic, confident) 👨
- Alice (clear, engaging educator) 👩
- Jessica (playful, bright, warm) 👩

---

## PATH C: TRAVEL

### C.1 — Destination
**Screen:** "Where are you headed?"
- Zimbabwe (Harare, Bulawayo, Victoria Falls, Great Zimbabwe)
- Multiple African countries
- Not sure yet, just exploring

### C.2 — Timeline
**Screen:** "When are you travelling?"
- Within 1 month
- 1-3 months
- 3-6 months
- 6+ months / not booked yet

### C.3 — Previous Experience
- First time in Zimbabwe
- I've been before
- I lived there / have family there

### C.4 — Purpose of Travel
*(Multi-select)*
- Tourism and sightseeing
- Family visit
- Business
- Safari / wildlife
- Volunteering
- Study or research

### C.5 — Language for Travel
- "Do you also want to learn some Shona for your trip?" → branches to Language path A

---

## AI PROFILE CONSTRUCTION

At the end of onboarding, all answers are combined into a `user_profile` JSON stored in Supabase:

```json
{
  "display_name": "Ben",
  "gender": "male",
  "age_range": "25-34",
  "app_language": "english",
  "primary_path": "learn",
  "secondary_path": "companion",
  "learning": {
    "language": "shona",
    "ability": "beginner",
    "reasons": ["connecting_family", "travel"],
    "time_commitment": "10min",
    "challenges": ["pronunciation", "consistency"],
    "personal_connection": "My grandmother Ambuya who lives in Harare"
  },
  "companion": {
    "type": "friend",
    "topics": ["daily_life", "goals"],
    "rwen_personality": { "serious_playful": 0.7, "listener_talker": 0.4 }
  }
}
```

This JSON feeds directly into Rwen's Claude system prompt on every conversation.

---

## RWEN SYSTEM PROMPT (generated from profile)

```
You are Rwen, talking to Ben (male, learning Shona, beginner level).

Ben is learning Shona to connect with his grandmother who lives in Harare.
He struggles most with pronunciation and staying consistent.
He has 10 minutes a day to learn.

His personality match: you should be fairly playful (7/10) and a balanced listener/talker.
He wants you to help him feel confident, not embarrassed about mistakes.

When relevant, mention his grandmother — "Your Ambuya will love this phrase."
Reference his progress and streak. Celebrate small wins enthusiastically.
...
```

---

## CHILDREN'S FLOW (13-17)

```
Age check → 13-17 detected
→ "Rwendo's companion features need a parent's OK"
→ "Ask a parent to visit rwendo.app/parent"
→ Parent creates account → generates 6-digit child code
→ Child enters code → lite version unlocked
→ Features: Language learning only, no companion/emotional features
→ Age-appropriate Rwen personality (enthusiastic teacher, not friend/companion)
```

**Under 13:**
→ "Come back when you're a bit older. Rwendo will be waiting!"

---

## FLOW MAPS

### Map A: Learn Language
```
Welcome
  ↓
[1.1] Choose interface language (English/Shona)
  ↓
[1.2] Create account (Google/Apple/Email+password)
  ↓
[1.3] Confirm email (if email path)
  ↓
[2.1] Your name
  ↓
[2.2] Gender identity
  ↓
[2.3] Age check → 13-17: lite mode | 18+: full | <13: blocked
  ↓
[2.4] Why Rwendo? → Learn Language selected
  ↓
[A.1] Which language to learn
  ↓
[A.2] Current ability level
  ↓
[A.3] Reasons for learning
  ↓
[A.4] Daily time commitment
  ↓
[A.5] Biggest challenge
  ↓
[A.6] Personal connection (optional)
  ↓
[B-step] Choose Rwen's voice
  ↓
→ HOME DASHBOARD (personalised)
```

### Map B: AI Companion
```
Welcome
  ↓
[1.1-1.3] Language + Auth (same as above)
  ↓
[2.1-2.4] Name, gender, age, Why Rwendo → AI Companion selected
  ↓
[B.2] Type of companion (Friend / Emotional / Work)
  ↓
[B.3a/b/c] Sub-questions based on companion type
  ↓
[B.4] Rwen's personality sliders
  ↓
[B.5] Voice selection
  ↓
→ RWEN CHAT (companion experience launches immediately)
```

### Map C: Travel
```
Welcome
  ↓
[1.1-2.4] Language + Auth + Why Rwendo → Travel selected
  ↓
[C.1] Destination
  ↓
[C.2] Timeline
  ↓
[C.3] Previous experience
  ↓
[C.4] Purpose
  ↓
[C.5] Also learn Shona? → Yes: branches to [A.1-A.6] → No: skip
  ↓
[B.5] Voice selection
  ↓
→ TRAVEL DASHBOARD (coming soon content + language lessons if selected)
```

---

## TECHNICAL IMPLEMENTATION NOTES

### Database additions needed:
```sql
alter table public.profiles add column:
  - display_name text
  - gender text  
  - age_range text
  - app_language text default 'english'
  - primary_path text default 'learn'
  - learning_language text
  - ability_level text
  - learning_reasons text[]
  - time_commitment text
  - challenges text[]
  - personal_connection text
  - companion_type text
  - companion_topics text[]
  - rwen_personality jsonb
  - onboarding_complete boolean default false
```

### Onboarding completion:
- `onboarding_complete = false` → NavigationGuard always sends to onboarding
- `onboarding_complete = true` → normal app flow
- Prevents users bypassing onboarding

### Profile → AI prompt:
- `lib/claude.ts` buildSystemPrompt() reads from user profile
- Called fresh on each conversation session
- Updates automatically as profile data changes

---

## STATUS

| Section | Status |
|---|---|
| Step 1.1 Language selection | ⬜ Needs rebuild |
| Step 1.2 Auth (Google/Apple/Email) | ✅ Email done, Google/Apple ⬜ |
| Step 1.3 Email confirmation | ✅ Done |
| Step 2.1 Name | ✅ Collected at sign-up |
| Step 2.2 Gender | ⬜ Needs building |
| Step 2.3 Age verification | ⬜ Needs building |
| Step 2.4 Why Rwendo (path choice) | ✅ Basic version done |
| Path A: Learn Language full flow | ⬜ Needs building |
| Path B: AI Companion full flow | ⬜ Needs building |
| Path C: Travel | ⬜ Needs building |
| Profile → AI prompt pipeline | ✅ Basic version done |
| Children's lite mode | ⬜ Future |

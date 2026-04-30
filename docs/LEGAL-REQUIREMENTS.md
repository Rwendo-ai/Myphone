# Rwendo — Legal Requirements & Compliance Checklist
*Version 1.0 — Last updated: 2026-04-29*
*⚠️ This document is for planning purposes. Consult a qualified lawyer before launch.*

---

## UPDATE INSTRUCTIONS
When updating this file, also update:
- [ ] `docs/DOCS-INDEX.md` → update last updated date
- [ ] `docs/legal/privacy-policy.md` → if new legal requirements affect the policy
- [ ] `docs/legal/terms-of-service.md` → if new requirements affect ToS
- [ ] `PROJECT_OVERVIEW.md` → legal section checklist

---

## CRITICAL PRE-LAUNCH CHECKLIST

| # | Requirement | Status | Priority |
|---|---|---|---|
| 1 | Privacy Policy (all 10 sections) | ⬜ | 🔴 Critical |
| 2 | Terms of Service with AI disclaimers | ⬜ | 🔴 Critical |
| 3 | Child-friendly Privacy Policy | ⬜ | 🔴 Critical |
| 4 | Age gate (neutral, cookie-protected) | ⬜ | 🔴 Critical |
| 5 | Voice consent checkbox (BIPA) | ⬜ | 🔴 Critical |
| 6 | In-app AI disclosure ("You are talking to AI") | ⬜ | 🔴 Critical |
| 7 | Apple App Store age rating (13+ or 16+) | ⬜ | 🔴 Critical |
| 8 | Google Play IARC rating + Data Safety section | ⬜ | 🔴 Critical |
| 9 | DPAs with Supabase, ElevenLabs, RevenueCat | ⬜ | 🔴 Critical |
| 10 | Subscription cancellation flow (Apple + Google) | ⬜ | 🔴 Critical |
| 11 | Parental consent flow (under 13) | ⬜ | 🟡 Before full launch |
| 12 | Data breach response plan | ⬜ | 🟡 Before full launch |
| 13 | GDPR Data Protection Impact Assessment (DPIA) | ⬜ | 🟡 Before EU launch |
| 14 | Mental health crisis disclaimer | ⬜ | 🟡 Before companion launch |

---

## 1. APPLE APP STORE REQUIREMENTS

### Age Rating
- **Required rating: 13+ or 16+**
- 13+ if no mature content in AI conversations
- 16+ if emotional companion features are prominent
- Set in App Store Connect → App Information → Age Rating
- **New 2025 tiers:** 4+, 9+, 13+, 16+, 18+ (Apple expanded ratings)

### Guideline 5.1.2(i) — Third-Party AI Disclosure (MANDATORY from Nov 2025)
- Must explicitly disclose user data sent to Anthropic (Claude API)
- Obtain explicit user permission before any data flows to AI
- Show clear consent UI: *"Your conversations are sent to Anthropic's Claude AI to provide responses"*
- Disclose in both app UI and Privacy Policy

### In-App Purchase / Subscriptions
- Show: subscription name, duration, price, renewal terms — BEFORE purchase
- Free trial terms must be prominent (not buried)
- Cancellation must be easy: Settings → [App Name] → Manage Subscription
- Users can cancel via iOS Settings (Apple handles this)

### Privacy Nutrition Labels (App Store Connect)
- Must complete Data Use questionnaire for every data type collected
- Be specific: conversation history, voice, name, age, gender, device ID

---

## 2. GOOGLE PLAY REQUIREMENTS

### Content Rating (IARC Questionnaire)
- Complete at: Play Console → App Content → Ratings
- **Expected rating: Everyone 10+ or Teen**
- Must re-rate if app content changes significantly

### Data Safety Section (MANDATORY since July 2022)
- Disclose ALL data types: personal info, audio, conversations
- Name all sharing partners: Anthropic, Supabase, ElevenLabs, RevenueCat
- State whether data is used for app functionality vs. tracking
- State encryption and deletion practices

### Families Policy (if targeting under 13)
- Use ONLY child-safe approved SDKs
- No behavioural advertising to under-13s
- No data collection without verifiable parental consent
- Separate app version or age-gate required

### Play Billing
- RevenueCat routes through Google Play Billing ✅
- Cannot use external payment processor instead of Play Billing (violates policy)

---

## 3. COPPA — USA CHILDREN'S ONLINE PRIVACY PROTECTION ACT

**Applies to:** Any app used by US residents under 13, regardless of developer location.

### Age Gate Requirements
- ❌ Simple "I am over 12" checkbox is NOT sufficient
- ✅ Ask for birth date or birth year
- ✅ Use a cookie to prevent back-button circumvention
- ✅ Must be neutral — do not incentivise selecting older age

### What Triggers Parental Consent
Under 13 detected → STOP data collection → get verifiable parental consent FIRST

**Acceptable consent methods (strongest first):**
1. Credit card verification + confirmation
2. Face-match with government ID
3. Video call with parent
4. Telephone call with follow-up confirmation
5. Signed consent via postal mail
6. Email with confirmation link (weakest, not for sensitive data)

### Data Restrictions for Under-13s
- ❌ Cannot collect voice/biometric data without parental consent
- ❌ Cannot store conversation history without parental consent
- ❌ Cannot use data for marketing/profiling
- ✅ Can collect: name, age (to verify), learning progress — WITH consent

### Penalties
- **Up to $53,088 per violation** (2026 rate, indexed annually)
- FTC can pursue class actions
- Private right of action in some states

---

## 4. GDPR — EUROPEAN UNION

### Lawful Basis (pick appropriate for each data use)
- **Contract:** Core service delivery (login, lessons)
- **Consent:** Voice recordings, optional features, AI companion
- **Legitimate interests:** Security, fraud prevention, analytics

### Voice Data = Special Category (Article 9)
- Voice is biometric data under GDPR when used for identification
- Requires **explicit consent** (not just implied)
- Requires a **Data Protection Impact Assessment (DPIA)**
- Cannot process without one of the Article 9(2) exceptions

### Data Processing Agreements (Article 28) — REQUIRED
Must have signed DPAs with:
- ✅ Supabase — [supabase.com/privacy](https://supabase.com/privacy)
- ⬜ Anthropic — check their API terms for DPA availability
- ⬜ ElevenLabs — check their API terms for DPA
- ✅ RevenueCat — [revenuecat.com/privacy](https://revenuecat.com/privacy)

### Data Subject Rights (must implement in-app)
| Right | Implementation |
|---|---|
| Access (Art. 15) | Settings → Download My Data |
| Deletion (Art. 17) | Settings → Delete Account ✅ (built) |
| Correction (Art. 16) | Settings → Edit Profile |
| Portability (Art. 20) | Export as JSON/CSV |
| Object (Art. 21) | Opt out of analytics |

### Data Retention Schedule
| Data Type | Retention Period |
|---|---|
| Conversation history | 12 months then delete/anonymise |
| Voice recordings | 24 hours max (delete after STT) |
| Account data | Until deletion + 30 days |
| Payment records | 7 years (tax compliance) |
| Analytics | 12 months (user-linked) |

### Data Breach Notification (Article 33)
- Notify supervisory authority **within 72 hours** of discovery
- Notify affected users "without undue delay" if high risk
- Maintain internal breach register

### International Transfers
- Data leaving EU to USA (Anthropic, ElevenLabs, Supabase):
  - Use **EU-US Data Privacy Framework**, OR
  - **Standard Contractual Clauses (SCCs)**
- Verify each vendor has adequate transfer mechanism

---

## 5. AUSTRALIAN PRIVACY ACT

### Australian Privacy Principles (APPs)
- **APP 1:** Publish clear, plain-language privacy policy
- **APP 3:** Collect only necessary data; get consent
- **APP 5:** Tell users what data is collected and why
- **APP 6:** Use data only for stated purpose

### Small Business Exception
- Under $3M revenue: many APPs don't apply to core business
- **HOWEVER:** Notifiable Data Breaches scheme applies regardless of size
- **HOWEVER:** Handling health/sensitive data = APPs apply regardless

### Notifiable Data Breaches
- If breach poses "serious risk of harm" → notify affected individuals promptly
- Notify OAIC Commissioner if notifying 1,000+ individuals
- No strict 72-hour window (but "without unreasonable delay")

### Children's Online Privacy Code 2026 (Coming)
- Final code expected December 2026
- Will require: child-friendly privacy policy, parental consent for profiling, privacy impact assessments
- **Start building compliance now** — especially parental consent flows

---

## 6. EU AI ACT

### Risk Classification for Rwendo
- **Limited Risk** (Article 50) — AI systems interacting with humans
- NOT High Risk (would require conformity assessment, risk management)

### Article 50 Transparency Obligations (MANDATORY)
- ✅ Clearly inform users they are interacting with AI
- ✅ Disclose which AI system is being used (Claude by Anthropic)
- ✅ Explain capabilities and limitations
- ✅ Explain how to report errors

**Required in-app disclosure:**
> "You are chatting with Rwen, powered by Anthropic's Claude AI. Claude is an artificial intelligence and may make mistakes. Not a substitute for professional education or mental health services."

---

## 7. FTC GUIDANCE — AI COMPANIONS (USA)

### Mandatory Disclosures
- Clearly disclose AI nature (not human)
- Disclose data collection and third-party sharing
- Disclose Anthropic's role in processing conversations

### Prohibited Practices
- ❌ Emotional manipulation to drive subscription upgrades
- ❌ Implying AI can replace human relationships
- ❌ Implying AI provides therapy or mental health services
- ❌ Targeting vulnerable users (minors, lonely individuals) with manipulative tactics

### Mental Health Disclaimer (required if emotional support implied)
> "Chatting with Rwen is not a substitute for professional mental health treatment. If you are in crisis, contact your local emergency services or crisis line."

---

## 8. VOICE & BIOMETRIC DATA — ILLINOIS BIPA

**Applies to:** Any user in Illinois regardless of developer location.

### Requirements
- Voiceprints = biometric identifiers under BIPA (740 ILCS 14/10)
- **Before collecting voice:**
  - Provide written disclosure of purpose and retention period
  - Obtain written consent (in-app checkbox counts)
- **Publish retention policy:** in Privacy Policy
- **Delete voice data:** when purpose fulfilled OR within 3 years of last interaction

### Rwendo Implementation
- Show consent checkbox before first voice use
- Text: *"Voice recordings are processed by ElevenLabs for speech-to-text conversion and deleted within 24 hours. No voiceprint is stored."*
- Document 24-hour deletion policy in Privacy Policy

### Penalties
- $1,000–$5,000 per violation (or actual damages)
- Class action risk for mass non-compliance

### Other States with Similar Laws
- Texas (HB 4) — voiceprint consent required
- Washington (SB 5267) — voiceprint restricted
- **Recommendation:** BIPA-level compliance covers all US state biometric laws

---

## 9. SUBSCRIPTION LEGAL REQUIREMENTS

### Universal Requirements (Apple + Google + Law)
- ✅ Show subscription price, duration, renewal terms BEFORE purchase
- ✅ Free trial terms displayed prominently (not buried)
- ✅ Affirmative opt-in (no pre-checked boxes)
- ✅ Easy cancellation (same ease as sign-up)
- ✅ Renewal reminder notification 3-7 days before charge
- ✅ Confirmation receipt after renewal charge

### Australian Consumer Law (ACL)
- Auto-renewal clauses are **unfair** if:
  - Customer can't cancel easily online
  - No advance renewal notice given
  - No reasonable cancellation window (minimum 48 hours)
- ACCC 2025 guidance: must offer in-app cancellation if in-app sign-up

### State Laws (USA Auto-Renewal Laws)
- California, New York, Colorado, Illinois, Virginia + others
- All require: conspicuous disclosure + easy cancellation + pre-renewal notice
- RevenueCat handles most of this automatically ✅

---

## 10. TERMS OF SERVICE — REQUIRED CLAUSES

### AI Disclaimer (MANDATORY)
```
Rwendo uses Anthropic's Claude AI to generate responses. You are interacting 
with an artificial intelligence, not a human teacher or therapist. Claude AI 
may provide inaccurate information. Do not rely on Rwendo for professional, 
medical, legal, or mental health advice.
```

### Emotional AI Disclaimer (for Companion tier)
```
Rwen is an AI companion for language learning and general conversation. 
Rwen cannot replace human relationships, professional counselling, or 
mental health services. If you are experiencing a mental health crisis, 
please contact your local crisis line or emergency services.
```

### Age Restriction
```
Rwendo is intended for users aged 13+. Users under 13 require verified 
parental consent. Users under 18 may have certain features restricted.
```

### Data Ownership
```
Your conversation data is owned by you. Rwendo processes it to provide 
the service. We do not sell your data. Conversations are processed by 
Anthropic (Claude API) — Anthropic does not use API conversations to 
train its models.
```

### Limitation of Liability
```
Rwendo is provided "as-is". Maximum liability: subscription fees paid in 
the 12 months prior to any claim (or $0 for free tier users).
```

---

## 11. PRIVACY POLICY — REQUIRED SECTIONS

### Data Collected
- Personal: name, email, age, gender
- Learning: language preferences, lesson progress, conversation history
- Voice: recordings (processed and deleted within 24 hours)
- Technical: device ID, IP address, crash logs
- Payment: transaction history (via RevenueCat, not stored by us)

### Third Parties
| Vendor | Data Shared | Purpose | Their Privacy Policy |
|---|---|---|---|
| Anthropic (Claude) | Conversations | AI responses | privacy.claude.com |
| ElevenLabs | Voice audio | Speech-to-text, TTS | elevenlabs.io/privacy |
| Supabase | Account + progress | Database | supabase.com/privacy |
| RevenueCat | Subscription status | Billing | revenuecat.com/privacy |

**Note on Anthropic:** API conversations are NOT used to train Claude models. Data retained up to 30 days for safety monitoring only.

### Children's Section
- Under 13: parental consent required before any data collection
- Under 18: restricted features, no behavioural advertising
- Parents can request access, correction, or deletion of child's data

### International Transfers
- Data processed in USA (Anthropic, ElevenLabs)
- EU users: protected via EU-US Data Privacy Framework + SCCs
- Australian users: vendors comply with Australian Privacy Act equivalents

### User Rights
- Download data: Settings → Privacy → Download My Data
- Delete account: Settings → Account → Delete Account ✅
- Correct data: Settings → Edit Profile
- Opt out of analytics: Settings → Privacy → Analytics

---

## 12. ANTHROPIC API — KEY LEGAL FACTS

- ✅ API conversations are NOT used to train Claude models (confirm in privacy policy)
- ✅ Anthropic retains API data up to 30 days for safety/abuse monitoring only
- ✅ Must disclose Anthropic's role to users (both Apple guideline + GDPR requirement)
- ⬜ Check if Anthropic provides a GDPR-compliant DPA for API customers

**Required disclosure in Privacy Policy:**
> "Conversations are processed by Anthropic's Claude API. Anthropic does not use API data to train its AI models. Data is retained by Anthropic for up to 30 days for safety monitoring, then deleted."

---

## 13. IMPLEMENTATION PRIORITY ORDER

### Before Beta Testing
1. Add in-app AI disclosure banner ("You are talking to AI")
2. Add voice consent checkbox before first voice use
3. Add mental health disclaimer to companion chat

### Before App Store Submission
1. Write Privacy Policy (all 10 sections)
2. Write Terms of Service
3. Write child-friendly Privacy Policy
4. Complete Apple age rating questionnaire (aim 13+)
5. Complete Google Play IARC + Data Safety section
6. Implement proper age gate with date picker + cookie protection
7. Sign DPAs with Supabase, ElevenLabs, RevenueCat

### Before Monetisation Launch
1. Subscription flow: show all terms before purchase
2. Renewal notification system (3-7 days before charge)
3. Easy in-app cancellation flow

### Before Under-13 Features
1. Verifiable parental consent mechanism
2. Separate child-friendly privacy policy
3. Feature restrictions for under-18 accounts
4. Parent account + child code generation system

### Before EU Launch
1. GDPR DPIA for voice processing
2. EU-specific consent flows
3. Data portability (export as JSON/CSV)
4. EU supervisory authority registration (if required)

### Ongoing (Post-Launch)
1. Monitor Australian Children's Online Privacy Code (final December 2026)
2. Track FTC AI companion guidance evolution
3. Annual privacy policy review
4. Breach response plan + 72-hour notification process

---

## 14. PROFESSIONAL ADVICE NEEDED

These areas require a qualified lawyer to advise specifically:

- [ ] Privacy Policy drafting and review
- [ ] Terms of Service drafting
- [ ] COPPA parental consent mechanism validation
- [ ] GDPR DPA negotiation with vendors
- [ ] App Store/Play Store category classification
- [ ] Age verification mechanism legal sufficiency
- [ ] Mental health liability exposure (companion feature)
- [ ] Children's safety feature design (COPPA + Australian code)
- [ ] Governing law and jurisdiction selection
- [ ] Arbitration clause design

**Recommended:** Engage a tech/privacy lawyer experienced in mobile apps and AI before App Store submission. Cost: AUD $2,000-$5,000 for initial document suite. Much cheaper than a regulatory action.

---

## SOURCES

- Apple App Store Review Guidelines 5.1.2(i) — Nov 2025
- FTC COPPA Rule (16 CFR 312)
- GDPR Articles 6, 9, 13, 17, 20, 28, 33, 35, 50
- EU AI Act Articles 6, 50 (2024)
- Illinois BIPA 740 ILCS 14
- Australian Privacy Act 1988 (Cth) — APPs
- Australian Children's Online Privacy Code 2026 (exposure draft)
- Australian Consumer Law — Schedule 2
- FTC AI Companion Inquiry — September 2025
- Anthropic Privacy Center — API data policy

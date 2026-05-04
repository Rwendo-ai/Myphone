# Track — Hard Conversations at Work

*8 lessons. One unit. 5–10 minutes a day. Sits under the "Build Yourself" umbrella alongside Knowing Yourself.*

Document version: 1.0 — 2026-05-04
Authoring model: Claude Opus 4.7
Source language: English (single source-of-truth; runtime translation by Claude)
Schema: `types/lesson.ts` (`LessonData`)
Course pack: `data/courses/hard-conversations-work/index.ts` (`meta.type: 'self-development'`)

---

## 1. Track philosophy

Most workplace conflict is not caused by bad people; it is caused by good people avoiding hard conversations until the hard conversation becomes a worse one. This track teaches the user to walk into the conversation they have been postponing — with a coworker, a manager, a direct report, a client — without abandoning themselves and without burning the relationship. It is anchored in Marshall Rosenberg's Nonviolent Communication (observation–feeling–need–request), the *Crucial Conversations* framework (Patterson, Grenny, McMillan, Switzler) for the moment when stakes go up and reasoning goes down, adult attachment science for understanding why a difficult email can hijack an otherwise competent professional, and the Stoic dichotomy of control for the parts of the workplace the user genuinely cannot change. The audience is anyone who works alongside other humans — a teacher in Manila, a clinician in Glasgow, a tradie in Brisbane, a shopkeeper in Bulawayo, a remote engineer in Lisbon. The skill is the same in every setting; only the room changes.

---

## 2. The 8 lessons

The arc moves from **internal preparation** (getting your own nervous system and intent in order) → **structural skill** (the four-part NVC sentence) → **domain-specific conversations** (feedback up, feedback down, declining, peer conflict, recovery from screw-ups, asking for more). Lesson 8 is integrative.

| # | Title | Anchor traditions |
|---|-------|-------------------|
| 1 | Before You Open Your Mouth | Stoic dichotomy of control (Epictetus); polyvagal nervous-system regulation (Porges); Crucial Conversations "start with heart" |
| 2 | Observation Without Evaluation | NVC step 1 (Rosenberg); CBT — the difference between data and interpretation |
| 3 | The Feeling and the Need Underneath | NVC steps 2–3 (Rosenberg); Universal Human Needs taxonomy; Brené Brown on vulnerability at work |
| 4 | A Real Request, Not a Demand | NVC step 4 (Rosenberg); behavioural specificity (Patterson, *Crucial Conversations*); negotiation literature on concrete asks |
| 5 | Raising Something With Your Manager | Adult attachment under hierarchy (Levine & Heller; Bowlby); psychological safety (Edmondson); status-aware framing |
| 6 | Giving Feedback That Doesn't Crush | Kim Scott's *Radical Candor* (with caveats); SBI model (Center for Creative Leadership); attachment-aware delivery |
| 7 | Saying No, Walking Back, Owning a Mistake | Sue Bryant on declining gracefully; the non-defensive apology (Aaron Lazare; Harriet Lerner); shame vs guilt (Brené Brown) |
| 8 | The Conversation You've Been Avoiding | Integration — applying the full four-part move + nervous-system prep to one real conversation the user has this week |

---

## 3. Pedagogical decisions specific to this track

These are the choices that distinguish this micro-course from generic communication training.

1. **NVC is the spine; everything else hangs off it.**
   The four-part move (observation → feeling → need → request) is repeated across lessons in increasingly stress-laden contexts. By Lesson 8 the user can recognise it as muscle memory rather than a formula. The schema `chunks` slot maps cleanly onto NVC's named parts.

2. **Workplace examples include partial failures, not clean wins.**
   Worked dialogues show the user catching themselves mid-evaluation, restarting after a defensive reply, sending a not-quite-right Slack message and following up. Real workplaces are messy and a course that pretends otherwise is useless after the first try. Anchored in Edmondson's psychological-safety research: people learn from "intelligent failures," not from sanitised exemplars.

3. **Power and hierarchy are named, not euphemised.**
   Lesson 5 directly addresses the asymmetry of speaking up to a manager — including the somatic markers of attachment activation (heart racing, throat tightening, mind blanking). We do not pretend "everyone is on the same team." We give the user tools that work *because* the manager has more positional power, not in spite of it.

4. **The Stoic dichotomy of control is load-bearing for the parts that won't change.**
   Some workplaces are genuinely dysfunctional. A four-part message will not fix a bullying culture, an underpaying employer, or a grieving colleague's bad week. We teach the user to do their part well *and* to recognise the part that is not theirs to control. Lesson 1 introduces this; Lesson 7 returns to it for the "I screwed up" case.

5. **No US-tech idioms.**
   No "1:1s", "OKRs", "pings", "syncs", "ICs vs EMs", "skip-level". Examples use generic roles (your manager, a coworker, a client, your team) and generic settings (a hallway, a video call, a message thread, a shift handover). A teacher, a nurse, a builder, and a developer should all see themselves.

6. **Identity-first framing.**
   Each lesson opens with a small identity claim ("Today's the day you become someone who can name what they observed without telling the other person what it meant"). Anchored in habit science (Clear, Fogg) and self-determination theory: people sustain skills they recognise as part of who they are, not as performances they have to keep up.

7. **Every mission is a real conversation, not a journaling exercise.**
   This course's missions are all *interpersonal*. The user is asked to draft a sentence they will actually send, identify a specific person they will speak to, or rehearse a message they have been postponing. Knowing Yourself is largely solitary; this track is not.

8. **Attachment language is taught without diagnosis.**
   We name the patterns (people who go quiet under stress, people who sharpen, people who flee the thread) without giving the user a label for themselves or their colleagues. The aim is recognition, not categorisation. Anchored in Levine & Heller's *Attached* — but applied to the workplace, where the literature is thinner and the inferences must be lighter.

9. **Cultural humility on conflict norms.**
   Direct verbal confrontation is more acceptable in some cultures (e.g. parts of Northern Europe, urban North America) than others (much of East and Southeast Asia, many African contexts, parts of the UK and Australia depending on workplace). We frame skills as *available tools* the user calibrates to their setting, not a one-size template. The mission instructions explicitly invite the user to choose channel (face-to-face, message, written) appropriate to their workplace.

---

## 4. Critical self-review

### Truth — settled vs contested evidence

**Settled / well-evidenced:**
- The structural value of separating observation from evaluation is supported across CBT, NVC, mediation literature, and Crucial Conversations field research. People who can describe data before interpreting it produce better outcomes in conflict.
- Psychological safety as a predictor of team effectiveness (Edmondson, Google's *Project Aristotle*) is one of the better-replicated findings in organisational psychology.
- Non-defensive apologies (Lazare; Lerner) outperform defensive ones in restoring trust — this is well-supported in both clinical and organisational contexts.

**Contested or oversold (flagged in the relevant lesson):**
- **Radical Candor** (Lesson 6) is a popular framework but not an evidence-based one in the academic sense. Kim Scott's "care personally / challenge directly" matrix is a useful heuristic; it is not a validated taxonomy. We use it as a frame, attribute it explicitly, and pair it with the more conservative SBI (Situation–Behavior–Impact) model from CCL, which has a longer track record.
- **Adult attachment styles applied to work** (Lessons 1, 5) extends a body of research originally about romantic and parent–child relationships. The clinical extension to workplace dynamics is plausible but not as well-evidenced as the original literature. We use the language descriptively ("under stress some people lean in, others lean out") rather than diagnostically.
- **Polyvagal theory** (Lesson 1) — its clinical utility is well-attested but its underlying neuroanatomy is debated. We teach the regulation moves (long exhale, feet on the floor, name the state) which work regardless of which model of the autonomic nervous system one prefers.
- **NVC as a moral framework** — Rosenberg's claims about "violence" in everyday language are sometimes contested as overreaching. We use NVC's structure (which is the part that holds up) and avoid the moralising frame.

### Where this track is most likely to slip
- The line between "raise it directly" and "let it go" is genuinely culturally and contextually variable. We teach calibration, not a rule. A reader who interprets us as saying "always speak up" has misread the course.
- Power asymmetry can make the four-part move *unsafe* in some workplaces (precarious workers, abusive managers, retaliation cultures). Lesson 5 names this explicitly and routes the user to escalate or exit-plan rather than persist.
- Identity-first framing risks landing as performative if the lesson body doesn't earn it. The cure is concrete, sensory, workplace-specific examples — not motivational language.

### Recommendations for delivery improvements specific to this track
- **Mission accountability.** Phase 8 (the AI follow-up) is unusually load-bearing here because the missions are interpersonal and harder to verify. The Rwen prompt for each lesson's `phase8.successCriteria` should accept "I rehearsed it but haven't sent it yet" as a partial success — pushing too hard toward completion would corrode trust.
- **Pre-emptive de-escalation copy.** Some users will arrive after a recent workplace fight, dysregulated. Lesson 1 should be reachable as an entry point regardless of where the user is in the sequence, and Rwen's tone in this track should bias toward grounding before pedagogy.
- **Mission outcome variance.** Workplace conversations sometimes go badly even when done correctly. The Lesson 8 wrap-up explicitly normalises this and pre-empts the "the course doesn't work" narrative.
- **Optional extension hooks.** A natural next track is "Hard Conversations at Home" — same NVC spine, different domain. The two should cross-reference in the catalog.

---

*End of plan. Lessons follow as TypeScript files in `data/courses/hard-conversations-work/english/curriculum/`.*

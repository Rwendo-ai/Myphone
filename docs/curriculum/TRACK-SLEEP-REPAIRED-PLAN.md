# Sleep, Repaired — Track Plan

*8 lessons. One unit. 5–10 minutes a day. A behavioural, evidence-based micro-course for anyone whose sleep has gone sideways.*

Document version: 2.0 — 2026-05-05 (Christian-foundation editorial pass)
Authoring model: Claude Opus 4.7
Source language: English (single source-of-truth; runtime translation by Claude)
Schema: `types/lesson.ts` (`LessonData`)
Course pack: `data/courses/sleep-repaired/`
Pack umbrella: Build Yourself (self-development)

---

## Editorial foundation

All authoring in this track follows [CHRISTIAN-FOUNDATION-SPEC.md](./CHRISTIAN-FOUNDATION-SPEC.md). Christian foundation underneath, neutral surface, no overt religious language, no other-religion framing. **Read that spec before authoring or rewriting any lesson.** This track was found clean in the 2026-05-05 audit (CBT-I, chronobiology, ACT — all compatible). The spec applies to any future authoring.

---

## 1. Track philosophy

Sleep, Repaired is not a sleep-hygiene checklist, a magnesium-supplement hot take, or a "ten habits of high performers" wellness pamphlet. It is a short, honest, behaviourally-grounded course for the person whose sleep has actually broken — the parent of a one-year-old, the night-shift nurse, the 3am-wide-awake worrier, the peri-menopausal woman whose body has changed the rules without permission, the late-night phone scroller who knows exactly what they're doing and does it anyway. It treats the user as an adult whose body is doing reasonable things in unreasonable circumstances. It teaches the smallest set of behaviours that genuinely move sleep — most of them drawn from CBT-I, which has more long-term evidence than any sleeping pill ever marketed. It is candid where popular sleep advice is hand-wavy: the screen story is more nuanced than influencers admit, naps are more situational, and "8 hours" is a population average, not a personal target. Five to ten minutes a day. Eight days. A relationship with sleep that fits a body, a life, and the night you actually have.

---

## 2. Audience

This course is written shoulder-to-shoulder with three named users in mind:

- **Aroha**, 34, mother of a 14-month-old who hasn't slept through the night yet. Her sleep is hostage to a body smaller than hers. She does not need to be told to "go to bed earlier."
- **Marcus**, 42, ICU nurse on rotating nights. His circadian biology is being asked to do something it was never designed to do. He needs strategies, not shame.
- **Priya**, 47, six months into the kind of insomnia that has its own personality. She has tried melatonin, magnesium, weighted blankets, "no screens after 7," and a prescription for Zopiclone she is afraid to keep taking. She needs CBT-I, not another supplement.

The course must be useful to all three by the end of lesson 8. If it would only land for a hypothetical childless first-shift knowledge worker with a king-size bed, it has failed.

---

## 3. The 8 lessons

### Unit 1 — Sleep, Repaired
Emoji: `🌙`
Learning arc: From "I'm bad at sleep" to "I treat sleep as a skill — biological, behavioural, repairable in steps." The user moves from passive sufferer to someone with a working model of their own sleep system, a small set of evidence-based moves, and the confidence to know when to involve a doctor.

- Lesson 1 — Sleep Is a Skill, Not a Stroke of Luck
- Lesson 2 — What Sleep Actually Does (and Why You Can't Skip It)
- Lesson 3 — Your Body Clock Is Not Your Enemy
- Lesson 4 — The Wind-Down Hour You Don't Have
- Lesson 5 — The Screen Question, Honestly
- Lesson 6 — What to Do at 3am
- Lesson 7 — The Anxiety–Sleep Loop, and How to Step Out of It
- Lesson 8 — When the Body Won't Cooperate — Babies, Shifts, and Long Insomnia

---

## 4. Anchor traditions

| Tradition | Used for | Honest framing |
|---|---|---|
| **Matthew Walker — *Why We Sleep*** | The function of sleep, REM/NREM architecture, glymphatic clearance | Walker is a useful starting science populariser, but several of his more dramatic claims (the "every aspect of health worsens with under-7-hour sleep" line; some specific cancer/Alzheimer's framings) have been challenged in peer review (Alexey Guzey 2019; subsequent corrections). We cite Walker for direction-of-effect and core architecture. We do **not** repeat his strongest fear-based claims uncritically. The mainstream consensus is that sleep is critical for memory consolidation, immune function, and metabolic regulation — but population effect sizes are smaller than Walker's framing implies. |
| **Russell Foster — chronobiology (*Life Time*)** | The body clock, chronotypes, the actual biology of "morning person / night owl" | Used straight. Foster's work on the suprachiasmatic nucleus and melanopsin-driven entrainment is uncontroversial and beautifully accessible. |
| **CBT-I (Carney & Manber, Espie, Perlis)** | The most evidence-based intervention for chronic insomnia. Stimulus control, sleep restriction, cognitive restructuring | The American College of Physicians (2016) recommends CBT-I as the **first-line** treatment for chronic insomnia, ahead of sleep medication. Many users have never heard of it. This is the most important thing the course can teach. |
| **Acceptance & Commitment Therapy applied to insomnia** (Hertenstein et al; Lundh; ACBS literature) | The anxiety–sleep loop. The "trying hard to sleep stops sleep" phenomenon. Paradoxical intention. | Anchored — the wakefulness of insomnia is partly maintained by the effort to suppress wakefulness. Acceptance reduces the loop. |
| **Cognitive shuffle (Luc Beaudoin)** | A practical technique for the 3am racing mind — generates randomly-associated benign images that mimic sleep-onset cognition. | Modestly evidenced but practical and harmless. Cited as a technique to try, not a guaranteed cure. |
| **Practical chronotype awareness (Roenneberg, "social jetlag")** | The explicit message that night owls are not lazy. Chronotype is partly genetic (PER, CLOCK gene variants). | Used to defuse moralism around bedtime — there is no virtuous bedtime, only one that aligns with biology and obligations. |

---

## 5. Pedagogical decisions

These are the explicit choices that distinguish this course from the wellness-influencer genre.

1. **CBT-I is the spine, not a footnote.** Most popular sleep content focuses on hygiene tips (avoid caffeine, dim the lights). These are useful but weak in isolation. The behavioural cores of CBT-I — **stimulus control** (bed = sleep + sex only), **sleep restriction** (paradoxically, less time in bed often produces more sleep), **cognitive defusion from sleep-related catastrophising** — are far more powerful, and underrepresented in popular discourse. Lessons 4, 6, and 7 carry this load.

2. **The screen question is not "screens are evil."** The evidence on blue light's hormonal effect is real but modest at typical exposure levels (Heath et al. 2014; recent reviews suggest content arousal — what you watch and how it makes you feel — is a larger contributor to sleep onset latency than the light wavelength itself). We say this plainly in Lesson 5. We do not pretend a 2700K bulb is dangerous.

3. **Walker is cited carefully.** The course uses his direction-of-effect framing for the function of sleep but does not repeat his most fear-based claims. Where he overreaches, we mark it ("the dose-response is real but the absolute risks are smaller than the framing suggests").

4. **Identity-first framing.** Per the brief: "Today's the day you become someone who treats sleep as a skill, not a stroke of luck." The course works on the user's identity around sleep — from "broken sleeper" to "person practising sleep" — because identity-based change persists where motivation-based change collapses (Clear; Fogg).

5. **Three named worked cases.** Aroha (parent), Marcus (shift worker), Priya (chronic insomnia) reappear across lessons. Their constraints are different. The course refuses to give one-size advice that only works for the easiest case.

6. **Honest about medical limits.** This is a behavioural course. It is not medical advice. Lessons 7 and 8 explicitly direct users to a doctor where symptoms suggest sleep apnea (loud snoring + daytime sleepiness + observed apneas), severe long-term insomnia, restless legs, or possible mood disorder. We will not let a user with apnea spend three months on cognitive shuffles when they need a CPAP referral.

7. **Acceptance over effort.** Trying to sleep is the surest way to stay awake. This is a strange truth and the course teaches it the way ACT teaches it — by leaning toward, not away from, the wakefulness in the room.

8. **No supplement boosterism.** Magnesium, melatonin, valerian, ashwagandha — the evidence is uneven and mostly small-effect. We mention melatonin's narrow real use case (jet lag, certain shift-work scenarios) and otherwise stay out of the supplement aisle. Behavioural change beats every supplement on long-term evidence.

---

## 6. Schema reuse

| Schema field            | In a Sleep, Repaired lesson                                     |
|------------------------ |------------------------------------------------------------------|
| `chunks` (3 items)      | 3 named concepts/skills the lesson teaches                       |
| `chunk.target`          | The named concept (e.g. "Sleep pressure", "Stimulus control")    |
| `chunk.native`          | One-line plain-English definition                                |
| `chunk.literal`         | The tradition / source (e.g. "CBT-I — Carney & Manber")          |
| `chunk.phonetic`        | A short mnemonic or restatement                                  |
| `pattern`               | The underlying principle that ties the three chunks together     |
| `exercises`             | Reflection prompts, scenarios, recall                            |
| `rwenDialogue`          | Worked scenario or coaching micro-dialogue                       |
| `activeRecall`          | Recall the concept's definition or apply it                      |
| `mission`               | A 5-minute action the user takes today                           |
| `phase8`                | AI coaching conversation applying today's lesson                 |

---

## 7. Critical review

### Truth — are claims evidence-grounded?

**Where I am careful:**
- Walker's strongest claims (e.g. "every aspect of biology worsens under 7 hours") are cited as direction-of-effect, not absolute risk. Lesson 2 explicitly says so.
- The blue-light story (Lesson 5) is presented with the actual mainstream reading: real but modest mechanism; content arousal probably matters more.
- CBT-I (Lessons 4, 6, 7) is cited as American College of Physicians first-line. This is the most defensible claim in the course.
- Sleep apnea, restless legs, and severe insomnia are flagged for medical review (Lesson 8). The course will not pretend behaviour fixes apnea.

**Where I should be more careful:**
- Cognitive shuffle (Beaudoin) has small published evidence; we cite it as a technique to try, not a settled treatment.
- Chronotype's heritability is real but the "lark vs owl" simplification is a useful pedagogical model, not a clean genotype. Lesson 3 says so.

### Value to three real users

- **Aroha (parent of a non-sleeper):** lessons 1, 4, 6, 7, 8 carry her. Lesson 8 is explicit that her job is not to fix the unfixable but to protect the sleep she can.
- **Marcus (shift worker):** lessons 3 and 8 carry him. Lesson 3 names the biological cost honestly. Lesson 8 gives him the harm-reduction toolkit (anchor sleep, strategic light, the 20-minute prophylactic nap).
- **Priya (long insomnia):** lessons 4, 6, 7 are the spine. Stimulus control, getting out of bed at 3am instead of fighting it, paradoxical intention, and acceptance of wakefulness as the route through. Lesson 8 directs her to a CBT-I trained clinician if eight weeks of self-applied CBT-I haven't moved the needle.

### Pedagogy — does the 7-phase Rwendo Method work for sleep?

It works cleanly. The hook → chunks → pattern → practice → dialogue → recall → mission → phase8 cadence is well-suited to behavioural skill teaching, which is what CBT-I is. The 5–10 minute constraint forces the kind of brevity that sleep self-help routinely fails at.

The one strain: `build_sentence` is awkward when arranging conceptual claims, but used sparingly it works (e.g. arranging the claim "trying to sleep is the surest way to stay awake"). The schema otherwise needs no modification.

---

*End of plan. Lessons follow as TypeScript files in `data/courses/sleep-repaired/english/curriculum/`.*

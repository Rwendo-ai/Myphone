/**
 * Lesson manifest for know-yourself.
 *
 * Source-of-truth lives in Supabase Storage at:
 *   course-content/lessons/know-yourself/<speakerId>/<lessonId>.json
 *
 * This manifest carries ONLY the metadata the Learn tab needs to render
 * the unit list (id, module, lesson, title, xpReward) so we don't have
 * to bundle every lesson's full content in the JS binary.
 *
 * Unit 1 lesson bodies are authored + in storage. Units 2-10 have titles
 * from docs/curriculum/KNOWING-YOURSELF-CURRICULUM-PLAN.md §3 — body
 * content is authored module-by-module in subsequent sessions. The unit
 * list renders all 100 titles immediately so the curriculum is visible
 * end-to-end while authoring proceeds.
 *
 * Module-cap conversation lessons (m??-l10) get 50 XP per the schema
 * standard; the rest are 25.
 */

export interface LessonMeta {
  id: string;
  module: number;
  lesson: number;
  title: string;
  xpReward: number;
  /** Content version for cache invalidation. */
  version?: number;
}

export const LESSON_MANIFEST: LessonMeta[] = [
  // ── Unit 1 — Attention as the Foundation ──────────────────────────────
  { id: 'm01-l01-looking-and-seeing',       module: 1, lesson: 1,  title: "The Difference Between Looking and Seeing", xpReward: 25, version: 1 },
  { id: 'm01-l02-one-breath-on-purpose',    module: 1, lesson: 2,  title: "One Breath, On Purpose",                    xpReward: 25, version: 1 },
  { id: 'm01-l03-thought-isnt-verdict',     module: 1, lesson: 3,  title: "A Thought Isn't a Verdict",                 xpReward: 25, version: 1 },
  { id: 'm01-l04-already-back',             module: 1, lesson: 4,  title: "When You Notice You're Distracted, You're Already Back", xpReward: 25, version: 1 },
  { id: 'm01-l05-five-senses-check',        module: 1, lesson: 5,  title: "The Five-Senses Check",                     xpReward: 25, version: 1 },
  { id: 'm01-l06-attention-becomes-life',   module: 1, lesson: 6,  title: "What You Pay Attention to Becomes Your Life", xpReward: 25, version: 1 },
  { id: 'm01-l07-the-pause',                module: 1, lesson: 7,  title: "The Pause Between Stimulus and Response",   xpReward: 25, version: 1 },
  { id: 'm01-l08-boredom-is-information',   module: 1, lesson: 8,  title: "Boredom Is Information",                    xpReward: 25, version: 1 },
  { id: 'm01-l09-staying-with-what-you-avoid', module: 1, lesson: 9, title: "Staying With What You'd Rather Avoid",    xpReward: 25, version: 1 },
  { id: 'm01-l10-attention-as-practice',    module: 1, lesson: 10, title: "Attention as a Practice, Not a Performance", xpReward: 50, version: 1 },

  // ── Unit 2 — The Body You Live In ─────────────────────────────────────
  { id: 'm02-l01-where-in-your-body',       module: 2, lesson: 1,  title: "Where in Your Body You Are Right Now",      xpReward: 25 },
  { id: 'm02-l02-body-scan',                module: 2, lesson: 2,  title: "The Body Scan, Without Mysticism",          xpReward: 25 },
  { id: 'm02-l03-three-nervous-states',     module: 2, lesson: 3,  title: "Three States of Your Nervous System",       xpReward: 25 },
  { id: 'm02-l04-long-exhale',              module: 2, lesson: 4,  title: "Long Exhales Are Your Brake Pedal",         xpReward: 25 },
  { id: 'm02-l05-what-tension-tells',       module: 2, lesson: 5,  title: "What Tension Is Trying to Tell You",        xpReward: 25 },
  { id: 'm02-l06-halt-check',               module: 2, lesson: 6,  title: "Hunger, Tiredness, Loneliness — the HALT Check", xpReward: 25 },
  { id: 'm02-l07-sleep-not-optional',       module: 2, lesson: 7,  title: "Sleep Is Not Optional",                     xpReward: 25 },
  { id: 'm02-l08-movement-as-mood',         module: 2, lesson: 8,  title: "Movement as a Mood Tool",                   xpReward: 25 },
  { id: 'm02-l09-co-regulation',            module: 2, lesson: 9,  title: "Co-Regulation: Why Being Near a Calm Person Helps", xpReward: 25 },
  { id: 'm02-l10-body-like-friend',         module: 2, lesson: 10, title: "Reading Your Body Like a Friend",           xpReward: 50 },

  // ── Unit 3 — Feelings, Honestly ───────────────────────────────────────
  { id: 'm03-l01-im-fine-incomplete',       module: 3, lesson: 1,  title: "\"I'm Fine\" Is Almost Never the Whole Story", xpReward: 25 },
  { id: 'm03-l02-feeling-vocabulary',       module: 3, lesson: 2,  title: "A Vocabulary Bigger Than Three Words",      xpReward: 25 },
  { id: 'm03-l03-anger-signal',             module: 3, lesson: 3,  title: "What Anger Is Trying to Tell You",          xpReward: 25 },
  { id: 'm03-l04-sadness-signal',           module: 3, lesson: 4,  title: "What Sadness Is Trying to Tell You",        xpReward: 25 },
  { id: 'm03-l05-fear-signal',              module: 3, lesson: 5,  title: "What Fear Is Trying to Tell You",           xpReward: 25 },
  { id: 'm03-l06-shame-not-guilt',          module: 3, lesson: 6,  title: "Shame Is Not Guilt",                        xpReward: 25 },
  { id: 'm03-l07-joy-deserves-attention',   module: 3, lesson: 7,  title: "Joy Deserves Attention Too",                xpReward: 25 },
  { id: 'm03-l08-two-feelings-at-once',     module: 3, lesson: 8,  title: "Feeling Two Things at Once",                xpReward: 25 },
  { id: 'm03-l09-self-compassion',          module: 3, lesson: 9,  title: "Self-Compassion When You'd Rather Self-Criticise", xpReward: 25 },
  { id: 'm03-l10-hurt-by-people-you-love',  module: 3, lesson: 10, title: "You Will Be Hurt by People You Love",       xpReward: 50 },

  // ── Unit 4 — The Stories You Tell Yourself ────────────────────────────
  { id: 'm04-l01-thought-not-thinker',      module: 4, lesson: 1,  title: "The Thought Is Not the Thinker",            xpReward: 25 },
  { id: 'm04-l02-top-cognitive-distortions', module: 4, lesson: 2, title: "The Top Ten Cognitive Distortions",         xpReward: 25 },
  { id: 'm04-l03-all-or-nothing',           module: 4, lesson: 3,  title: "All-or-Nothing Thinking",                   xpReward: 25 },
  { id: 'm04-l04-mind-reading',             module: 4, lesson: 4,  title: "Mind-Reading and Other Acts of Fiction",    xpReward: 25 },
  { id: 'm04-l05-catastrophising',          module: 4, lesson: 5,  title: "Catastrophising vs. Honest Risk Assessment", xpReward: 25 },
  { id: 'm04-l06-should-trap',              module: 4, lesson: 6,  title: "The \"Should\" Trap",                       xpReward: 25 },
  { id: 'm04-l07-identity-statements',      module: 4, lesson: 7,  title: "Identity Statements Are Just Sentences",    xpReward: 25 },
  { id: 'm04-l08-question-you-avoid',       module: 4, lesson: 8,  title: "The Question You Avoid Asking",             xpReward: 25 },
  { id: 'm04-l09-two-column-journaling',    module: 4, lesson: 9,  title: "Two-Column Journaling for Stuck Thoughts",  xpReward: 25 },
  { id: 'm04-l10-growth-mindset',           module: 4, lesson: 10, title: "Growth Mindset Without the Bumper Sticker", xpReward: 50 },

  // ── Unit 5 — What You Actually Want ───────────────────────────────────
  { id: 'm05-l01-goal-vs-value',            module: 5, lesson: 1,  title: "The Difference Between a Goal and a Value", xpReward: 25 },
  { id: 'm05-l02-eulogy-exercise',          module: 5, lesson: 2,  title: "The Eulogy Exercise",                       xpReward: 25 },
  { id: 'm05-l03-top-five-values',          module: 5, lesson: 3,  title: "Your Top Five Values, Stress-Tested",       xpReward: 25 },
  { id: 'm05-l04-pretend-not-to-want',      module: 5, lesson: 4,  title: "The Things You Pretend Not to Want",        xpReward: 25 },
  { id: 'm05-l05-intrinsic-vs-extrinsic',   module: 5, lesson: 5,  title: "Intrinsic vs. Extrinsic Motivation",        xpReward: 25 },
  { id: 'm05-l06-underused-strengths',      module: 5, lesson: 6,  title: "Character Strengths You Underuse",          xpReward: 25 },
  { id: 'm05-l07-regret-minimisation',      module: 5, lesson: 7,  title: "The Regret-Minimisation Frame",             xpReward: 25 },
  { id: 'm05-l08-behaviour-vs-values',      module: 5, lesson: 8,  title: "When Your Behaviour Disagrees with Your Values", xpReward: 25 },
  { id: 'm05-l09-meaning-is-made',          module: 5, lesson: 9,  title: "Meaning Is Made, Not Found",                xpReward: 25 },
  { id: 'm05-l10-personal-compass',         module: 5, lesson: 10, title: "A One-Sentence Personal Compass",           xpReward: 50 },

  // ── Unit 6 — Other People ─────────────────────────────────────────────
  { id: 'm06-l01-three-attachments',        module: 6, lesson: 1,  title: "The Three Adult Attachment Patterns",       xpReward: 25 },
  { id: 'm06-l02-under-threat',             module: 6, lesson: 2,  title: "How You Show Up When You're Threatened",    xpReward: 25 },
  { id: 'm06-l03-projection',               module: 6, lesson: 3,  title: "The People You Project Onto",               xpReward: 25 },
  { id: 'm06-l04-inner-critic-is-part',     module: 6, lesson: 4,  title: "Your Inner Critic Is a Part, Not You",      xpReward: 25 },
  { id: 'm06-l05-inner-protector',          module: 6, lesson: 5,  title: "Your Inner Protector Is Doing Its Job",     xpReward: 25 },
  { id: 'm06-l06-same-old-argument',        module: 6, lesson: 6,  title: "When You Repeat the Same Argument, It's Old", xpReward: 25 },
  { id: 'm06-l07-what-you-owe',             module: 6, lesson: 7,  title: "What You Owe People and What You Don't",    xpReward: 25 },
  { id: 'm06-l08-loneliness-signal',        module: 6, lesson: 8,  title: "Loneliness Is a Signal, Not a Verdict",     xpReward: 25 },
  { id: 'm06-l09-forgiveness',              module: 6, lesson: 9,  title: "Forgiveness Without Forgetting",            xpReward: 25 },
  { id: 'm06-l10-front-row',                module: 6, lesson: 10, title: "The People You Want in the Front Row",      xpReward: 50 },

  // ── Unit 7 — Saying What You Mean ─────────────────────────────────────
  { id: 'm07-l01-four-parts-message',       module: 7, lesson: 1,  title: "The Four Parts of a Real Message",          xpReward: 25 },
  { id: 'm07-l02-observation-without-eval', module: 7, lesson: 2,  title: "Observation Without Evaluation",            xpReward: 25 },
  { id: 'm07-l03-name-feeling',             module: 7, lesson: 3,  title: "Naming the Feeling Underneath",             xpReward: 25 },
  { id: 'm07-l04-need-beneath',             module: 7, lesson: 4,  title: "The Need Beneath the Complaint",            xpReward: 25 },
  { id: 'm07-l05-requests-vs-demands',      module: 7, lesson: 5,  title: "Requests vs. Demands",                      xpReward: 25 },
  { id: 'm07-l06-saying-no',                module: 7, lesson: 6,  title: "Saying No Without Apology",                 xpReward: 25 },
  { id: 'm07-l07-repair-attempt',           module: 7, lesson: 7,  title: "The Repair Attempt",                        xpReward: 25 },
  { id: 'm07-l08-real-apology',             module: 7, lesson: 8,  title: "When You Were Wrong: A Real Apology",       xpReward: 25 },
  { id: 'm07-l09-listening-without-fixing', module: 7, lesson: 9,  title: "Listening Without Fixing",                  xpReward: 25 },
  { id: 'm07-l10-conversation-avoided',     module: 7, lesson: 10, title: "The Conversation You've Been Avoiding",     xpReward: 50 },

  // ── Unit 8 — The Habits That Carry You ────────────────────────────────
  { id: 'm08-l01-identity-before-action',   module: 8, lesson: 1,  title: "Identity Comes Before Action",              xpReward: 25 },
  { id: 'm08-l02-tiniest-habit',            module: 8, lesson: 2,  title: "The Tiniest Habit That Counts",             xpReward: 25 },
  { id: 'm08-l03-cue-routine-reward',       module: 8, lesson: 3,  title: "The Cue, the Routine, the Reward",          xpReward: 25 },
  { id: 'm08-l04-environment-design',       module: 8, lesson: 4,  title: "Designing Your Environment So the Right Thing Is Easy", xpReward: 25 },
  { id: 'm08-l05-missed-day',               module: 8, lesson: 5,  title: "How to Recover from a Missed Day",          xpReward: 25 },
  { id: 'm08-l06-cost-of-self-criticism',   module: 8, lesson: 6,  title: "The Cost of Self-Criticism in Behaviour Change", xpReward: 25 },
  { id: 'm08-l07-habit-stacking',           module: 8, lesson: 7,  title: "Habit Stacking",                            xpReward: 25 },
  { id: 'm08-l08-habits-to-subtract',       module: 8, lesson: 8,  title: "The Habits You Need to Subtract",           xpReward: 25 },
  { id: 'm08-l09-discipline-vs-devotion',   module: 8, lesson: 9,  title: "The Difference Between Discipline and Devotion", xpReward: 25 },
  { id: 'm08-l10-becoming',                 module: 8, lesson: 10, title: "Becoming, Not Achieving",                   xpReward: 50 },

  // ── Unit 9 — Time, Attention, and What You Choose ─────────────────────
  { id: 'm09-l01-where-hours-go',           module: 9, lesson: 1,  title: "Where Your Hours Actually Go",              xpReward: 25 },
  { id: 'm09-l02-cost-of-constant-input',   module: 9, lesson: 2,  title: "The Cost of Constant Input",                xpReward: 25 },
  { id: 'm09-l03-monotasking',              module: 9, lesson: 3,  title: "Monotasking, Without Apology",              xpReward: 25 },
  { id: 'm09-l04-flow-not-busy',            module: 9, lesson: 4,  title: "Flow Is Not the Same as Busy",              xpReward: 25 },
  { id: 'm09-l05-savouring',                module: 9, lesson: 5,  title: "Savouring: The Skill of Letting Good Things Land", xpReward: 25 },
  { id: 'm09-l06-rest-not-reward',          module: 9, lesson: 6,  title: "Rest Is Not a Reward for Productivity",     xpReward: 25 },
  { id: 'm09-l07-yes-by-accident',          module: 9, lesson: 7,  title: "The Things You Said Yes To by Accident",    xpReward: 25 },
  { id: 'm09-l08-weekly-review',            module: 9, lesson: 8,  title: "A Weekly Review That Isn't a To-Do List",   xpReward: 25 },
  { id: 'm09-l09-honest-hour',              module: 9, lesson: 9,  title: "What You'd Do With an Honest Hour",         xpReward: 25 },
  { id: 'm09-l10-time-cannot-earn-back',    module: 9, lesson: 10, title: "Time Is the One Thing You Cannot Earn Back", xpReward: 50 },

  // ── Unit 10 — The Examined Life ───────────────────────────────────────
  { id: 'm10-l01-you-will-die',             module: 10, lesson: 1,  title: "You Will Die",                              xpReward: 25 },
  { id: 'm10-l02-view-from-above',          module: 10, lesson: 2,  title: "The View from Above",                       xpReward: 25 },
  { id: 'm10-l03-what-lasts',               module: 10, lesson: 3,  title: "What Lasts and What Doesn't",               xpReward: 25 },
  { id: 'm10-l04-grief-receipt-of-love',    module: 10, lesson: 4,  title: "Grief Is the Receipt of Love",              xpReward: 25 },
  { id: 'm10-l05-shadow',                   module: 10, lesson: 5,  title: "The Shadow You'd Rather Not See",           xpReward: 25 },
  { id: 'm10-l06-gratitude-without-toxic',  module: 10, lesson: 6,  title: "Gratitude Without Toxic Positivity",        xpReward: 25 },
  { id: 'm10-l07-long-view-bad-day',        module: 10, lesson: 7,  title: "The Long View on a Bad Day",                xpReward: 25 },
  { id: 'm10-l08-life-you-stand-behind',    module: 10, lesson: 8,  title: "A Life You Can Stand Behind",               xpReward: 25 },
  { id: 'm10-l09-true-at-the-end',          module: 10, lesson: 9,  title: "What You Want to Be True at the End",       xpReward: 25 },
  { id: 'm10-l10-beginning-again',          module: 10, lesson: 10, title: "Beginning Again, on Purpose",               xpReward: 50 },
];

export default LESSON_MANIFEST;

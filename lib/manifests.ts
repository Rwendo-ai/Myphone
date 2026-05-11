import { LESSON_MANIFEST as SHONA_MANIFEST }            from '../data/courses/language-shona/manifest';
import { LESSON_MANIFEST as ENGLISH_MANIFEST }          from '../data/courses/language-english/manifest';
import { LESSON_MANIFEST as FRENCH_MANIFEST }           from '../data/courses/language-french/manifest';
import { LESSON_MANIFEST as CHINESE_MANIFEST }          from '../data/courses/language-chinese/manifest';
import { LESSON_MANIFEST as TAGALOG_MANIFEST }          from '../data/courses/language-tagalog/manifest';
import { LESSON_MANIFEST as HINDI_MANIFEST }            from '../data/courses/language-hindi/manifest';
import { LESSON_MANIFEST as SPANISH_MANIFEST }          from '../data/courses/language-spanish/manifest';
import { LESSON_MANIFEST as PORTUGUESE_MANIFEST }       from '../data/courses/language-portuguese/manifest';
import { LESSON_MANIFEST as JAPANESE_MANIFEST }         from '../data/courses/language-japanese/manifest';
import { LESSON_MANIFEST as KOREAN_MANIFEST }           from '../data/courses/language-korean/manifest';
import { LESSON_MANIFEST as NDEBELE_MANIFEST }          from '../data/courses/language-ndebele/manifest';
import { LESSON_MANIFEST as KNOW_YOURSELF_MANIFEST }    from '../data/courses/know-yourself/manifest';
import { LESSON_MANIFEST as HARD_CONV_MANIFEST }        from '../data/courses/hard-conversations-work/manifest';
import { LESSON_MANIFEST as PARENTING_MANIFEST }        from '../data/courses/parenting-under-pressure/manifest';
import { LESSON_MANIFEST as MONEY_MANIFEST }            from '../data/courses/money-and-meaning/manifest';
import { LESSON_MANIFEST as GRIEF_MANIFEST }            from '../data/courses/grief-honestly/manifest';
import { LESSON_MANIFEST as SLEEP_MANIFEST }            from '../data/courses/sleep-repaired/manifest';
import { LESSON_MANIFEST as LOST_CONFIDENCE_MANIFEST }  from '../data/courses/lost-confidence/manifest';
import { LESSON_MANIFEST as CARING_MANIFEST }           from '../data/courses/caring-aging-parent/manifest';
import type { LessonMeta } from '../data/courses/language-shona/manifest';
import type { ModuleMeta } from '../data/lessons';

export type { LessonMeta };

// Per-course module meta for self-development tracks. Each track
// currently ships a single Module 1; titles/descriptions/emojis here
// match the curriculum plans in docs/curriculum/. When new modules are
// authored, add their entries here.
const SELF_DEV_MODULE_META: Record<string, Record<number, ModuleMeta>> = {
  'know-yourself': {
    1:  { title: 'Attention as the Foundation',         description: 'Becoming the one who notices, not just thinks',       emoji: '🪟' },
    2:  { title: 'The Body You Live In',                description: 'Read your body for information, not as your enemy',   emoji: '🫀' },
    3:  { title: 'Feelings, Honestly',                  description: 'A working vocabulary for what you actually feel',     emoji: '🌊' },
    4:  { title: 'The Stories You Tell Yourself',       description: 'Catch the thought before it becomes a verdict',      emoji: '📖' },
    5:  { title: 'What You Actually Want',              description: 'Values you would defend in a hard conversation',     emoji: '🧭' },
    6:  { title: 'Other People',                        description: 'Attachment, projection, and the room you bring',      emoji: '🫂' },
    7:  { title: 'Saying What You Mean',                description: 'NVC, repair, asking, saying no',                      emoji: '🗣️' },
    8:  { title: 'The Habits That Carry You',           description: 'Tiny, identity-based, kind to yourself',              emoji: '🌱' },
    9:  { title: 'Time, Attention, and What You Choose', description: 'The medium every other skill lives inside',          emoji: '⏳' },
    10: { title: 'The Examined Life',                    description: 'Mortality, meaning, and the long view',              emoji: '🌌' },
  },
  'hard-conversations-work': {
    1: { title: 'Foundations', description: 'Setting up the conversations no one teaches you', emoji: '💬' },
  },
  'parenting-under-pressure': {
    1: { title: 'Foundations', description: 'When the kid melts down and so do you', emoji: '👶' },
  },
  'money-and-meaning': {
    1: { title: 'Foundations', description: 'Money as a mirror, not a moral test', emoji: '💸' },
  },
  'grief-honestly': {
    1: { title: 'Foundations', description: 'Letting grief be what it actually is', emoji: '🕯️' },
  },
  'sleep-repaired': {
    1: { title: 'Foundations', description: 'CBT-I principles, no woo', emoji: '🌙' },
  },
  'lost-confidence': {
    1: { title: 'Foundations', description: 'When you used to be sharp and now you doubt it', emoji: '🌱' },
  },
  'caring-aging-parent': {
    1: { title: 'Foundations', description: 'The conversations you can\'t avoid forever', emoji: '🤝' },
  },
};

export function getCourseModuleMeta(courseId: string | null | undefined): Record<number, ModuleMeta> | undefined {
  if (!courseId) return undefined;
  return SELF_DEV_MODULE_META[courseId];
}

export function getLessonManifest(courseId: string | null | undefined): LessonMeta[] | undefined {
  switch (courseId) {
    case 'language-shona':            return SHONA_MANIFEST;
    case 'language-english':          return ENGLISH_MANIFEST;
    case 'language-french':           return FRENCH_MANIFEST;
    case 'language-chinese':          return CHINESE_MANIFEST;
    case 'language-tagalog':          return TAGALOG_MANIFEST;
    case 'language-hindi':            return HINDI_MANIFEST;
    case 'language-spanish':          return SPANISH_MANIFEST;
    case 'language-portuguese':       return PORTUGUESE_MANIFEST;
    case 'language-japanese':         return JAPANESE_MANIFEST;
    case 'language-korean':           return KOREAN_MANIFEST;
    case 'language-ndebele':          return NDEBELE_MANIFEST;
    case 'know-yourself':             return KNOW_YOURSELF_MANIFEST;
    case 'hard-conversations-work':   return HARD_CONV_MANIFEST;
    case 'parenting-under-pressure':  return PARENTING_MANIFEST;
    case 'money-and-meaning':         return MONEY_MANIFEST;
    case 'grief-honestly':            return GRIEF_MANIFEST;
    case 'sleep-repaired':            return SLEEP_MANIFEST;
    case 'lost-confidence':           return LOST_CONFIDENCE_MANIFEST;
    case 'caring-aging-parent':       return CARING_MANIFEST;
    default:                          return undefined;
  }
}

import { MemoryFact } from '../../../../types/ai-companion';

/**
 * The shape of structured memory Rwen accumulates per user. Each fact
 * has a stable key + a human-readable label for the Memory panel + a
 * category for grouping.
 *
 * Rwen extracts facts via a periodic Claude pass over the user's
 * conversation history (Phase J infra). The user can read/edit/delete
 * any fact in the Memory panel.
 *
 * v1 ships ~30 facts per the PRODUCT-DESIGN.md §2.2 authoring scope.
 */
const memorySchema: MemoryFact[] = [
  // PEOPLE
  { key: 'partner_name',           label: 'Your partner\'s name',                  category: 'people',     editable: true },
  { key: 'sister_name',            label: 'Your sister\'s name',                    category: 'people',     editable: true },
  { key: 'brother_name',           label: 'Your brother\'s name',                   category: 'people',     editable: true },
  { key: 'mother_name',            label: 'Your mother\'s name',                    category: 'people',     editable: true },
  { key: 'father_name',            label: 'Your father\'s name',                    category: 'people',     editable: true },
  { key: 'children_count_names',   label: 'Your kids',                              category: 'people',     editable: true },
  { key: 'best_friend_name',       label: 'Your best friend',                       category: 'people',     editable: true },

  // WORK / CONTEXT
  { key: 'occupation',             label: 'What you do',                            category: 'work',       editable: true },
  { key: 'work_satisfaction',      label: 'How work is going',                      category: 'work',       editable: true },
  { key: 'studying',               label: 'What you\'re studying',                  category: 'work',       editable: true },
  { key: 'home_country',           label: 'Where you\'re from',                     category: 'context',    editable: false },
  { key: 'home_city',              label: 'Where you live',                         category: 'context',    editable: true },

  // GOALS
  { key: 'reason_for_learning',    label: 'Why you\'re learning',                   category: 'goals',      editable: true },
  { key: 'time_horizon_visit',     label: 'When you\'re visiting Zimbabwe',         category: 'goals',      editable: true },
  { key: 'fluency_target',         label: 'How fluent you want to get',             category: 'goals',      editable: true },
  { key: 'specific_phrase_goal',   label: 'A phrase you want to say to someone',    category: 'goals',      editable: true },

  // PREFERENCES
  { key: 'morning_routine',        label: 'How you start your day',                 category: 'preferences', editable: true },
  { key: 'comfort_food',           label: 'Your comfort food',                      category: 'preferences', editable: true },
  { key: 'happy_place',            label: 'Where you feel most yourself',           category: 'preferences', editable: true },
  { key: 'humour_style',           label: 'What makes you laugh',                   category: 'preferences', editable: true },
  { key: 'avoid_topics',           label: 'Topics you don\'t want to discuss',      category: 'preferences', editable: true },
  { key: 'preferred_pace',         label: 'How fast you like Rwen to move',         category: 'preferences', editable: true },

  // MILESTONES
  { key: 'first_lesson_date',      label: 'When you started Rwendo',                category: 'milestones', editable: false },
  { key: 'longest_streak',         label: 'Your longest streak',                    category: 'milestones', editable: false },
  { key: 'biggest_breakthrough',   label: 'The moment something clicked',           category: 'milestones', editable: true },

  // ROLLING / CONTEXT
  { key: 'recent_topic',           label: 'What you mentioned recently',            category: 'context',    editable: true },
  { key: 'recent_mood',            label: 'How you said you were doing',            category: 'context',    editable: true },
  { key: 'this_week_focus',        label: 'What you\'re focused on this week',      category: 'context',    editable: true },
  { key: 'unresolved_thread',      label: 'Something you wanted to come back to',   category: 'context',    editable: true },
];

export default memorySchema;

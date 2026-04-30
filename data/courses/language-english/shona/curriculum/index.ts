import { LessonData } from '../../../../../types/lesson';
import m01l01 from './m01-l01';

/**
 * language-english / Shona-speaker variant curriculum.
 *
 * v1: ONE example lesson. Full 100-lesson curriculum is Phase K of
 * PRODUCT-DESIGN.md §8 — ~5-7 days of AI-authored + human-reviewed
 * content per the §4.4 pipeline.
 */
export const lessons: Record<string, LessonData> = {
  'm01-l01-hello': m01l01,
};

export default lessons;

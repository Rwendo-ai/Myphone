import { LessonData } from '../../types/lesson';
import shonaEnglish from './shona-english';

const PACKS: Record<string, Record<string, LessonData>> = {
  'shona-english': shonaEnglish,
};

export function getCurriculumLesson(packId: string, lessonId: string): LessonData | undefined {
  return PACKS[packId]?.[lessonId];
}

export function getRegisteredPackIds(): string[] {
  return Object.keys(PACKS);
}

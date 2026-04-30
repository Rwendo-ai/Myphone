export type Language = 'shona' | 'english';

export type LessonType = 'vocabulary' | 'phrase' | 'grammar' | 'listening' | 'speaking';

export type DifficultyLevel = 'beginner' | 'intermediate' | 'advanced';

export interface User {
  id: string;
  email: string;
  username: string;
  xp: number;
  streakDays: number;
  learningLanguage: Language;
  nativeLanguage: Language;
  createdAt: string;
}

export interface Lesson {
  id: string;
  title: string;
  description: string;
  type: LessonType;
  difficulty: DifficultyLevel;
  xpReward: number;
  isCompleted: boolean;
  isLocked: boolean;
  unitId: string;
}

export interface Unit {
  id: string;
  title: string;
  description: string;
  lessons: Lesson[];
  isCompleted: boolean;
}

export interface DictionaryEntry {
  id: string;
  shona: string;
  english: string;
  pronunciation: string;
  partOfSpeech: string;
  exampleShona: string;
  exampleEnglish: string;
  audioUrl?: string;
}

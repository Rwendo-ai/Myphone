import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import * as Localization from 'expo-localization';

import enCommon from '../data/speakers/english/locale/common.json';
import enAuth from '../data/speakers/english/locale/auth.json';
import enLearn from '../data/speakers/english/locale/learn.json';
import enRwen from '../data/speakers/english/locale/rwen.json';
import enAchievements from '../data/speakers/english/locale/achievements.json';

import snCommon from '../data/speakers/shona/locale/common.json';
import snAuth from '../data/speakers/shona/locale/auth.json';
import snLearn from '../data/speakers/shona/locale/learn.json';
import snRwen from '../data/speakers/shona/locale/rwen.json';
import snAchievements from '../data/speakers/shona/locale/achievements.json';

import frCommon from '../data/speakers/french/locale/common.json';
import frAuth from '../data/speakers/french/locale/auth.json';
import frLearn from '../data/speakers/french/locale/learn.json';
import frRwen from '../data/speakers/french/locale/rwen.json';
import frAchievements from '../data/speakers/french/locale/achievements.json';

import zhCommon from '../data/speakers/chinese/locale/common.json';
import zhAuth from '../data/speakers/chinese/locale/auth.json';
import zhLearn from '../data/speakers/chinese/locale/learn.json';
import zhRwen from '../data/speakers/chinese/locale/rwen.json';
import zhAchievements from '../data/speakers/chinese/locale/achievements.json';

import tlCommon from '../data/speakers/tagalog/locale/common.json';
import tlAuth from '../data/speakers/tagalog/locale/auth.json';
import tlLearn from '../data/speakers/tagalog/locale/learn.json';
import tlRwen from '../data/speakers/tagalog/locale/rwen.json';
import tlAchievements from '../data/speakers/tagalog/locale/achievements.json';

// i18n resources are still keyed by ISO code for compatibility with i18next's
// language conventions (en/sn/fr/zh/tl). Each speaker pack's `isoCode` field
// maps from the speaker pack ID ('english' / 'shona' / ...) to the i18n
// language key.
export const SUPPORTED_LANGUAGES = ['en', 'sn', 'fr', 'zh', 'tl'] as const;
export type SupportedLanguage = (typeof SUPPORTED_LANGUAGES)[number];

const NAMESPACES = ['common', 'auth', 'learn', 'rwen', 'achievements'] as const;

const resources = {
  en: {
    common: enCommon,
    auth: enAuth,
    learn: enLearn,
    rwen: enRwen,
    achievements: enAchievements,
  },
  sn: {
    common: snCommon,
    auth: snAuth,
    learn: snLearn,
    rwen: snRwen,
    achievements: snAchievements,
  },
  fr: {
    common: frCommon,
    auth: frAuth,
    learn: frLearn,
    rwen: frRwen,
    achievements: frAchievements,
  },
  zh: {
    common: zhCommon,
    auth: zhAuth,
    learn: zhLearn,
    rwen: zhRwen,
    achievements: zhAchievements,
  },
  tl: {
    common: tlCommon,
    auth: tlAuth,
    learn: tlLearn,
    rwen: tlRwen,
    achievements: tlAchievements,
  },
};

const deviceLanguage = Localization.getLocales()[0]?.languageCode ?? 'en';
const initialLanguage = (SUPPORTED_LANGUAGES as readonly string[]).includes(deviceLanguage)
  ? deviceLanguage
  : 'en';

i18n.use(initReactI18next).init({
  resources,
  lng: initialLanguage,
  fallbackLng: 'en',
  defaultNS: 'common',
  ns: NAMESPACES as unknown as string[],
  interpolation: { escapeValue: false },
  compatibilityJSON: 'v4',
});

// Called from ProfileLoader once profile.app_language is fetched.
// Maps the legacy column values ('english' / 'shona' / 'french' / 'chinese' /
// 'tagalog') to ISO codes.
export function setAppLanguage(lang: string | null | undefined) {
  if (!lang) return;
  const iso =
    lang === 'english' ? 'en' :
    lang === 'shona'   ? 'sn' :
    lang === 'french'  ? 'fr' :
    lang === 'chinese' ? 'zh' :
    lang === 'tagalog' ? 'tl' :
    lang;
  if (!(SUPPORTED_LANGUAGES as readonly string[]).includes(iso)) return;
  if (i18n.language !== iso) i18n.changeLanguage(iso);
}

export default i18n;

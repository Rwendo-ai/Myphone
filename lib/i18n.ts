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

// i18n resources are still keyed by ISO code for compatibility with i18next's
// language conventions (en/sn). Each speaker pack's `isoCode` field maps from
// the speaker pack ID ('english' / 'shona') to the i18n language key.
export const SUPPORTED_LANGUAGES = ['en', 'sn'] as const;
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
// Maps the legacy column values ('english' / 'shona') to ISO codes.
export function setAppLanguage(lang: string | null | undefined) {
  if (!lang) return;
  const iso =
    lang === 'english' ? 'en' :
    lang === 'shona'   ? 'sn' :
    lang;
  if (!(SUPPORTED_LANGUAGES as readonly string[]).includes(iso)) return;
  if (i18n.language !== iso) i18n.changeLanguage(iso);
}

export default i18n;

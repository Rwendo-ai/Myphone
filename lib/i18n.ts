import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import * as Localization from 'expo-localization';

import enCommon from '../locales/en/common.json';
import enAuth from '../locales/en/auth.json';
import enLearn from '../locales/en/learn.json';
import enRwen from '../locales/en/rwen.json';
import enAchievements from '../locales/en/achievements.json';

import snCommon from '../locales/sn/common.json';
import snAuth from '../locales/sn/auth.json';
import snLearn from '../locales/sn/learn.json';
import snRwen from '../locales/sn/rwen.json';
import snAchievements from '../locales/sn/achievements.json';

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

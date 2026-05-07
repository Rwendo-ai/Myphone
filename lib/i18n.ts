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

import hiCommon from '../data/speakers/hindi/locale/common.json';
import hiAuth from '../data/speakers/hindi/locale/auth.json';
import hiLearn from '../data/speakers/hindi/locale/learn.json';
import hiRwen from '../data/speakers/hindi/locale/rwen.json';
import hiAchievements from '../data/speakers/hindi/locale/achievements.json';

import esCommon from '../data/speakers/spanish/locale/common.json';
import esAuth from '../data/speakers/spanish/locale/auth.json';
import esLearn from '../data/speakers/spanish/locale/learn.json';
import esRwen from '../data/speakers/spanish/locale/rwen.json';
import esAchievements from '../data/speakers/spanish/locale/achievements.json';

import ptCommon from '../data/speakers/portuguese/locale/common.json';
import ptAuth from '../data/speakers/portuguese/locale/auth.json';
import ptLearn from '../data/speakers/portuguese/locale/learn.json';
import ptRwen from '../data/speakers/portuguese/locale/rwen.json';
import ptAchievements from '../data/speakers/portuguese/locale/achievements.json';

import jaCommon from '../data/speakers/japanese/locale/common.json';
import jaAuth from '../data/speakers/japanese/locale/auth.json';
import jaLearn from '../data/speakers/japanese/locale/learn.json';
import jaRwen from '../data/speakers/japanese/locale/rwen.json';
import jaAchievements from '../data/speakers/japanese/locale/achievements.json';

import koCommon from '../data/speakers/korean/locale/common.json';
import koAuth from '../data/speakers/korean/locale/auth.json';
import koLearn from '../data/speakers/korean/locale/learn.json';
import koRwen from '../data/speakers/korean/locale/rwen.json';
import koAchievements from '../data/speakers/korean/locale/achievements.json';

// i18n resources are still keyed by ISO code for compatibility with i18next's
// language conventions. Each speaker pack's `isoCode` field maps from the
// speaker pack ID to the i18n language key.
export const SUPPORTED_LANGUAGES = ['en', 'sn', 'fr', 'zh', 'tl', 'hi', 'es', 'pt', 'ja', 'ko'] as const;
export type SupportedLanguage = (typeof SUPPORTED_LANGUAGES)[number];

const NAMESPACES = ['common', 'auth', 'learn', 'rwen', 'achievements'] as const;

const resources = {
  en: { common: enCommon, auth: enAuth, learn: enLearn, rwen: enRwen, achievements: enAchievements },
  sn: { common: snCommon, auth: snAuth, learn: snLearn, rwen: snRwen, achievements: snAchievements },
  fr: { common: frCommon, auth: frAuth, learn: frLearn, rwen: frRwen, achievements: frAchievements },
  zh: { common: zhCommon, auth: zhAuth, learn: zhLearn, rwen: zhRwen, achievements: zhAchievements },
  tl: { common: tlCommon, auth: tlAuth, learn: tlLearn, rwen: tlRwen, achievements: tlAchievements },
  hi: { common: hiCommon, auth: hiAuth, learn: hiLearn, rwen: hiRwen, achievements: hiAchievements },
  es: { common: esCommon, auth: esAuth, learn: esLearn, rwen: esRwen, achievements: esAchievements },
  pt: { common: ptCommon, auth: ptAuth, learn: ptLearn, rwen: ptRwen, achievements: ptAchievements },
  ja: { common: jaCommon, auth: jaAuth, learn: jaLearn, rwen: jaRwen, achievements: jaAchievements },
  ko: { common: koCommon, auth: koAuth, learn: koLearn, rwen: koRwen, achievements: koAchievements },
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
// Maps the legacy DB column values to ISO codes.
export function setAppLanguage(lang: string | null | undefined) {
  if (!lang) return;
  const iso =
    lang === 'english'    ? 'en' :
    lang === 'shona'      ? 'sn' :
    lang === 'french'     ? 'fr' :
    lang === 'chinese'    ? 'zh' :
    lang === 'tagalog'    ? 'tl' :
    lang === 'hindi'      ? 'hi' :
    lang === 'spanish'    ? 'es' :
    lang === 'portuguese' ? 'pt' :
    lang === 'japanese'   ? 'ja' :
    lang === 'korean'     ? 'ko' :
    lang;
  if (!(SUPPORTED_LANGUAGES as readonly string[]).includes(iso)) return;
  if (i18n.language !== iso) i18n.changeLanguage(iso);
}

export default i18n;

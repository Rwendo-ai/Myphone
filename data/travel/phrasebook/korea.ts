/**
 * Travel Phrasebook — South Korea (Korean / Hangul).
 *
 * Curated for the traveller, not the language learner — these are the ~48
 * phrases someone needs in their first 48 hours on the ground. Grouped by
 * situation. The free tier surfaces the first 26 (basics + airport + food +
 * emergency); the full set unlocks when the user owns the corresponding
 * language course.
 *
 * Honorifics: defaults to 합쇼체 / 해요체 (polite formal) — the safest register
 * for a traveller talking to strangers, taxi drivers, hotel staff, and
 * shopkeepers. Casual forms (반말) are intentionally avoided.
 *
 * Cultural notes worth knowing (not phrases — context for the traveller):
 *   • Tipping is NOT customary. Service is included; pressing money on staff
 *     can cause embarrassment.
 *   • Restaurants have a call-button on the table (or you call out 여기요!).
 *     Don't raise your hand silently — staff won't come.
 *   • 반찬 (banchan) — the small side dishes — are FREE and refillable. Just
 *     ask: 반찬 좀 더 주세요.
 *   • T-money is the rechargeable card for buses, subway, and many taxis.
 *     Top up at any convenience store (GS25, CU, 7-Eleven).
 *   • A small bow (15°) is the everyday greeting; a deeper bow (30–45°) is
 *     reserved for elders, formal apology, or first introductions.
 *   • 감사합니다 (gam-sa-ham-ni-da) is the formal "thank you" — use with
 *     strangers, staff, elders. 고마워요 (go-ma-wo-yo) is warmer and casual
 *     — use with peers and people you've grown friendly with.
 *
 * `audioPath` is filled in once we generate ElevenLabs MP3s (Phase 2).
 * Until then the phrasebook reads silently — we still ship the text so the
 * phrasebook is useful immediately.
 */

import type { PhrasebookCategory } from './types';

const KOREA_PHRASEBOOK: PhrasebookCategory[] = [
  {
    id: 'basics',
    title: 'Basics',
    emoji: '👋',
    free: true,
    phrases: [
      { id: 'b01', target: '안녕하세요',     native: 'Hello / good day',                   phonetic: 'Annyeonghaseyo' },
      { id: 'b02', target: '감사합니다',     native: 'Thank you (formal)',                 phonetic: 'Gamsahamnida' },
      { id: 'b03', target: '고마워요',       native: 'Thanks (warm, casual-polite)',       phonetic: 'Gomawoyo' },
      { id: 'b04', target: '죄송합니다',     native: "I'm sorry / excuse me",              phonetic: 'Joesonghamnida' },
      { id: 'b05', target: '네',             native: 'Yes',                                phonetic: 'Ne' },
      { id: 'b06', target: '아니요',         native: 'No',                                 phonetic: 'Aniyo' },
      { id: 'b07', target: '안녕히 가세요',  native: 'Goodbye (to one leaving)',           phonetic: 'Annyeonghi gaseyo' },
      { id: 'b08', target: '안녕히 계세요',  native: 'Goodbye (to one staying)',           phonetic: 'Annyeonghi gyeseyo' },
    ],
  },
  {
    id: 'airport',
    title: 'Airport & taxi',
    emoji: '🛫',
    free: true,
    phrases: [
      { id: 't01', target: '택시 어디예요?',          native: 'Where is the taxi?',                phonetic: 'Taeksi eodiyeyo?' },
      { id: 't02', target: '지하철역이 어디예요?',    native: 'Where is the subway station?',      phonetic: 'Jihacheoryeogi eodiyeyo?' },
      { id: 't03', target: '얼마예요?',                native: 'How much is it?',                   phonetic: 'Eolmayeyo?' },
      { id: 't04', target: '여기서 세워주세요',        native: 'Please stop here',                  phonetic: 'Yeogiseo sewojuseyo' },
      { id: 't05', target: '티머니 카드 주세요',       native: 'A T-money card, please',            phonetic: 'Ti-meoni kadeu juseyo' },
      { id: 't06', target: '충전해 주세요',            native: 'Please top it up (recharge)',       phonetic: 'Chungjeonhae juseyo' },
    ],
  },
  {
    id: 'food',
    title: 'Food & restaurant',
    emoji: '🍽️',
    free: true,
    phrases: [
      { id: 'f01', target: '이거 주세요',                       native: 'I’ll have this, please',           phonetic: 'Igeo juseyo' },
      { id: 'f02', target: '물 주세요',                         native: 'Water, please',                    phonetic: 'Mul juseyo' },
      { id: 'f03', target: '계산서 주세요',                     native: 'The bill, please',                 phonetic: 'Gyesanseo juseyo' },
      { id: 'f04', target: '저는 채식주의자예요',               native: "I'm vegetarian",                   phonetic: 'Jeoneun chaesikjuuijayeyo' },
      { id: 'f05', target: '땅콩 알레르기가 있어요',             native: 'I have a peanut allergy',          phonetic: 'Ttangkong allereugiga isseoyo' },
      { id: 'f06', target: '반찬 좀 더 주세요',                  native: 'More side dishes, please (free)',  phonetic: 'Banchan jom deo juseyo' },
    ],
  },
  {
    id: 'emergency',
    title: 'Emergency',
    emoji: '🚨',
    free: true,
    phrases: [
      { id: 'e01', target: '도와주세요!',          native: 'Help me!',              phonetic: 'Dowajuseyo!' },
      { id: 'e02', target: '아파요',               native: "I'm sick / it hurts",   phonetic: 'Apayo' },
      { id: 'e03', target: '병원이 어디예요?',     native: 'Where is the hospital?', phonetic: 'Byeongwoni eodiyeyo?' },
      { id: 'e04', target: '구급차를 불러주세요',  native: 'Please call an ambulance', phonetic: 'Gugeupchareul bulleojuseyo' },
      { id: 'e05', target: '경찰을 불러주세요',    native: 'Please call the police', phonetic: 'Gyeongchareul bulleojuseyo' },
      { id: 'e06', target: '여권을 잃어버렸어요',  native: 'I lost my passport',     phonetic: 'Yeogwoneul ireobeoryeosseoyo' },
    ],
  },
  {
    id: 'directions',
    title: 'Directions',
    emoji: '🧭',
    free: false,
    phrases: [
      { id: 'd01', target: '어디예요?',           native: 'Where is it?',           phonetic: 'Eodiyeyo?' },
      { id: 'd02', target: '어떻게 가요?',         native: 'How do I get there?',    phonetic: 'Eotteoke gayo?' },
      { id: 'd03', target: '왼쪽',                native: 'Left',                   phonetic: 'Oenjjok' },
      { id: 'd04', target: '오른쪽',              native: 'Right',                  phonetic: 'Oreunjjok' },
      { id: 'd05', target: '직진하세요',           native: 'Go straight',            phonetic: 'Jikjinhaseyo' },
      { id: 'd06', target: '길을 잃었어요',        native: "I'm lost",               phonetic: 'Gireul ireosseoyo' },
    ],
  },
  {
    id: 'hotel',
    title: 'Hotel & stays',
    emoji: '🏨',
    free: false,
    phrases: [
      { id: 'h01', target: '예약이 있어요',              native: 'I have a reservation',          phonetic: 'Yeyagi isseoyo' },
      { id: 'h02', target: '와이파이 비밀번호가 뭐예요?', native: "What's the Wi-Fi password?",    phonetic: 'Waipai bimilbeonhoga mwoyeyo?' },
      { id: 'h03', target: '방 좀 볼 수 있어요?',         native: 'May I see the room?',           phonetic: 'Bang jom bol su isseoyo?' },
      { id: 'h04', target: '체크아웃 할게요',             native: "I'd like to check out",         phonetic: 'Chekeu-aut halgeyo' },
      { id: 'h05', target: '뜨거운 물이 안 나와요',       native: 'There is no hot water',         phonetic: 'Tteugeoun muri an nawayo' },
    ],
  },
  {
    id: 'manners',
    title: 'Manners & culture',
    emoji: '🤲',
    free: false,
    phrases: [
      { id: 'm01', target: '잠시만요',             native: 'One moment, please / excuse me',                phonetic: 'Jamsimanyo' },
      { id: 'm02', target: '실례합니다',           native: 'Excuse me (to get attention politely)',         phonetic: 'Sillyehamnida' },
      { id: 'm03', target: '여기요',               native: 'Over here! (calling restaurant staff)',         phonetic: 'Yeogiyo' },
      { id: 'm04', target: '괜찮아요',             native: "It's okay / no thanks (declining politely)",    phonetic: 'Gwaenchanayo' },
      { id: 'm05', target: '처음 뵙겠습니다',       native: 'Pleased to meet you (first meeting, formal)',   phonetic: 'Cheoeum boepgesseumnida' },
      { id: 'm06', target: '먼저 드세요',           native: 'Please eat first (deferring to elders)',        phonetic: 'Meonjeo deuseyo' },
    ],
  },
  {
    id: 'numbers',
    title: 'Numbers & money',
    emoji: '💵',
    free: false,
    phrases: [
      { id: 'n01', target: '카드 돼요?',                 native: 'Do you take card?',         phonetic: 'Kadeu dwaeyo?' },
      { id: 'n02', target: '현금만 돼요',                native: 'Cash only',                 phonetic: 'Hyeongeumman dwaeyo' },
      { id: 'n03', target: '잔돈 있어요?',               native: 'Do you have change?',       phonetic: 'Jandon isseoyo?' },
      { id: 'n04', target: '이만 원 이하로 주세요',       native: 'Under ₩20,000, please',     phonetic: 'Iman won ihalo juseyo' },
      { id: 'n05', target: '영수증 주세요',              native: 'Receipt, please',           phonetic: 'Yeongsujeung juseyo' },
    ],
  },
];

export default KOREA_PHRASEBOOK;

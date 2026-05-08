/**
 * Travel Phrasebook — Japan (Japanese).
 *
 * Curated for the traveller, not the language learner — these are the ~48
 * phrases someone needs in their first 48 hours on the ground. Grouped by
 * situation. The free tier surfaces the first 4 categories (basics, airport,
 * food, emergency); the rest unlock when the user owns the corresponding
 * language course.
 *
 * Politeness note: phrases default to teineigo (polite form). Japan rewards
 * politeness heavily — you almost never go wrong sounding too formal as a
 * traveller. すみません is used liberally as "excuse me / sorry / thank you".
 *
 * `audioPath` is filled in once we generate ElevenLabs MP3s (Phase 2).
 * Until then the phrasebook reads silently — we still ship the text so the
 * phrasebook is useful immediately.
 */

import type { PhrasebookCategory } from './types';

const JAPAN_PHRASEBOOK: PhrasebookCategory[] = [
  {
    id: 'basics',
    title: 'Basics',
    emoji: '👋',
    free: true,
    phrases: [
      { id: 'b01', target: 'こんにちは',           native: 'Hello',                              phonetic: 'Konnichiwa' },
      { id: 'b02', target: 'ありがとうございます', native: 'Thank you (polite)',                 phonetic: 'Arigatou gozaimasu' },
      { id: 'b03', target: 'さようなら',           native: 'Goodbye',                            phonetic: 'Sayounara' },
      { id: 'b04', target: 'はい',                 native: 'Yes',                                phonetic: 'Hai' },
      { id: 'b05', target: 'いいえ',               native: 'No',                                 phonetic: 'Iie' },
      { id: 'b06', target: 'すみません',           native: 'Excuse me / sorry / thanks (multipurpose)', phonetic: 'Sumimasen' },
      { id: 'b07', target: 'おはようございます',   native: 'Good morning',                       phonetic: 'Ohayou gozaimasu' },
      { id: 'b08', target: '英語を話せますか?',    native: 'Do you speak English?',              phonetic: 'Eigo o hanasemasu ka?' },
    ],
  },
  {
    id: 'airport',
    title: 'Airport & transport',
    emoji: '🛫',
    free: true,
    phrases: [
      { id: 't01', target: 'タクシーはどこですか?',         native: 'Where is the taxi?',          phonetic: 'Takushii wa doko desu ka?' },
      { id: 't02', target: '駅はどこですか?',               native: 'Where is the station?',       phonetic: 'Eki wa doko desu ka?' },
      { id: 't03', target: 'いくらですか?',                 native: 'How much is it?',             phonetic: 'Ikura desu ka?' },
      { id: 't04', target: 'ここで止めてください',          native: 'Please stop here',            phonetic: 'Koko de tomete kudasai' },
      { id: 't05', target: 'スイカをチャージしたいです',    native: 'I want to top up my Suica (IC card)', phonetic: 'Suika o chaaji shitai desu' },
      { id: 't06', target: 'スイカを買えますか?',           native: 'Can I buy a Suica card?',     phonetic: 'Suika o kaemasu ka?' },
    ],
  },
  {
    id: 'food',
    title: 'Food & restaurants',
    emoji: '🍽️',
    free: true,
    phrases: [
      { id: 'f01', target: 'これをください',                native: 'This one, please',            phonetic: 'Kore o kudasai' },
      { id: 'f02', target: 'お水をください',                native: 'Water, please',               phonetic: 'Omizu o kudasai' },
      { id: 'f03', target: 'お会計をお願いします',          native: 'The bill, please',            phonetic: 'Okaikei o onegai shimasu' },
      { id: 'f04', target: 'アレルギーがあります',          native: 'I have an allergy',           phonetic: 'Arerugii ga arimasu' },
      { id: 'f05', target: 'ベジタリアンです',              native: "I'm vegetarian",              phonetic: 'Bejitarian desu' },
      { id: 'f06', target: 'おすすめは何ですか?',           native: "What do you recommend?",      phonetic: 'Osusume wa nan desu ka?' },
    ],
  },
  {
    id: 'emergency',
    title: 'Emergency',
    emoji: '🚨',
    free: true,
    phrases: [
      { id: 'e01', target: '助けて!',                       native: 'Help!',                       phonetic: 'Tasukete!' },
      { id: 'e02', target: '病院はどこですか?',             native: 'Where is the hospital?',      phonetic: 'Byouin wa doko desu ka?' },
      { id: 'e03', target: '警察を呼んでください',          native: 'Please call the police',      phonetic: 'Keisatsu o yonde kudasai' },
      { id: 'e04', target: '救急車を呼んでください',        native: 'Please call an ambulance',    phonetic: 'Kyuukyuusha o yonde kudasai' },
      { id: 'e05', target: '具合が悪いです',                native: "I don't feel well",           phonetic: 'Guai ga warui desu' },
      { id: 'e06', target: '薬局はどこですか?',             native: 'Where is the pharmacy?',      phonetic: 'Yakkyoku wa doko desu ka?' },
    ],
  },
  {
    id: 'directions',
    title: 'Directions',
    emoji: '🧭',
    free: false,
    phrases: [
      { id: 'd01', target: 'トイレはどこですか?',           native: 'Where is the toilet?',        phonetic: 'Toire wa doko desu ka?' },
      { id: 'd02', target: 'どうやって行きますか?',         native: 'How do I get there?',         phonetic: 'Dou yatte ikimasu ka?' },
      { id: 'd03', target: '左',                            native: 'Left',                        phonetic: 'Hidari' },
      { id: 'd04', target: '右',                            native: 'Right',                       phonetic: 'Migi' },
      { id: 'd05', target: '迷いました',                    native: "I'm lost",                    phonetic: 'Mayoimashita' },
      { id: 'd06', target: 'コンビニはどこですか?',         native: 'Where is the convenience store?', phonetic: 'Konbini wa doko desu ka?' },
    ],
  },
  {
    id: 'hotel',
    title: 'Hotel & stays',
    emoji: '🏨',
    free: false,
    phrases: [
      { id: 'h01', target: '予約があります',                native: 'I have a reservation',        phonetic: 'Yoyaku ga arimasu' },
      { id: 'h02', target: 'Wi-Fiはありますか?',            native: 'Is there Wi-Fi?',             phonetic: 'Wai-Fai wa arimasu ka?' },
      { id: 'h03', target: '部屋を見せてください',          native: 'Please show me the room',     phonetic: 'Heya o misete kudasai' },
      { id: 'h04', target: 'チェックアウトをお願いします',  native: "Check out, please",           phonetic: 'Chekku-auto o onegai shimasu' },
      { id: 'h05', target: 'お湯が出ません',                native: 'There is no hot water',       phonetic: 'Oyu ga demasen' },
    ],
  },
  {
    id: 'manners',
    title: 'Manners & culture',
    emoji: '🤲',
    free: false,
    phrases: [
      { id: 'm01', target: 'ありがとうございます',          native: 'Thank you (use liberally)',                       phonetic: 'Arigatou gozaimasu' },
      { id: 'm02', target: 'すみません',                    native: 'Excuse me / light apology / "thanks for the trouble"', phonetic: 'Sumimasen' },
      { id: 'm03', target: 'ごめんなさい',                  native: 'I am sorry (sincere apology, heavier than sumimasen)', phonetic: 'Gomen nasai' },
      { id: 'm04', target: 'お願いします',                  native: 'Please (when asking for something)',              phonetic: 'Onegai shimasu' },
      { id: 'm05', target: 'よろしくお願いします',          native: 'Pleased to meet you / thanks in advance (a small bow goes with this)', phonetic: 'Yoroshiku onegai shimasu' },
      { id: 'm06', target: '靴を脱ぎますか?',               native: 'Should I take off my shoes? (homes & some restaurants)', phonetic: 'Kutsu o nugimasu ka?' },
    ],
  },
  {
    id: 'numbers',
    title: 'Numbers & money',
    emoji: '💴',
    free: false,
    phrases: [
      { id: 'n01', target: '2000円以下',                    native: 'Under 2000 yen',              phonetic: 'Nisen-en ika' },
      { id: 'n02', target: 'カードでお支払いできますか?',   native: 'Can I pay by card?',          phonetic: 'Kaado de oshiharai dekimasu ka?' },
      { id: 'n03', target: '両替できますか?',               native: 'Can I exchange money?',       phonetic: 'Ryougae dekimasu ka?' },
      { id: 'n04', target: '現金のみですか?',               native: 'Cash only?',                  phonetic: 'Genkin nomi desu ka?' },
      { id: 'n05', target: 'レシートをください',            native: 'A receipt, please',           phonetic: 'Reshiito o kudasai' },
    ],
  },
];

export default JAPAN_PHRASEBOOK;

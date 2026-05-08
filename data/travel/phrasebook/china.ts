/**
 * Travel Phrasebook — China (Mandarin Chinese, Simplified).
 *
 * Curated for the traveller, not the language learner — these are the phrases
 * someone needs in their first 48 hours on the ground in mainland China.
 * Grouped by situation. The free tier surfaces the first four categories
 * (basics + airport + food + emergency); the full set unlocks when the user
 * owns the corresponding language course.
 *
 * Mandarin is tonal, so every phrase ships with pinyin tone marks
 * (ā á ǎ à) — without tones the speaker will not be understood.
 *
 * China-specific reality baked in:
 *  - Mobile payments dominate (WeChat Pay / Alipay) — cash often refused.
 *    Phrases included for "Can I scan?" and "Can I pay cash?".
 *  - Tipping is NOT customary — phrase to politely decline included.
 *  - Ride-hailing means Didi (滴滴) — taxi flag-down is fading.
 *  - 您 (nín) is the polite form of 你 (nǐ); use 您 with elders / staff / strangers.
 *
 * `audioPath` is filled in once we generate ElevenLabs MP3s (Phase 2).
 * Until then the phrasebook reads silently — we still ship the text so the
 * phrasebook is useful immediately.
 */

import type { PhrasebookCategory } from './types';

const CHINA_PHRASEBOOK: PhrasebookCategory[] = [
  {
    id: 'basics',
    title: 'Basics',
    emoji: '👋',
    free: true,
    phrases: [
      { id: 'b01', target: '你好',         native: 'Hello',                       phonetic: 'Nǐ hǎo' },
      { id: 'b02', target: '您好',         native: 'Hello (polite)',              phonetic: 'Nín hǎo' },
      { id: 'b03', target: '谢谢',         native: 'Thank you',                   phonetic: 'Xièxie' },
      { id: 'b04', target: '不客气',       native: "You're welcome",              phonetic: 'Bú kèqi' },
      { id: 'b05', target: '对不起',       native: 'Sorry',                       phonetic: 'Duìbuqǐ' },
      { id: 'b06', target: '是 / 不是',    native: 'Yes / No',                    phonetic: 'Shì / Bú shì' },
      { id: 'b07', target: '我不会说中文', native: "I don't speak Chinese",       phonetic: 'Wǒ bú huì shuō Zhōngwén' },
      { id: 'b08', target: '再见',         native: 'Goodbye',                     phonetic: 'Zàijiàn' },
    ],
  },
  {
    id: 'airport',
    title: 'Airport, taxi & metro',
    emoji: '🛫',
    free: true,
    phrases: [
      { id: 't01', target: '出租车在哪里?',   native: 'Where is the taxi stand?',          phonetic: 'Chūzūchē zài nǎlǐ?' },
      { id: 't02', target: '我要叫滴滴',     native: "I'll order a Didi",                  phonetic: 'Wǒ yào jiào Dīdī' },
      { id: 't03', target: '请到这个地址',   native: 'Please take me to this address',     phonetic: 'Qǐng dào zhè gè dìzhǐ' },
      { id: 't04', target: '多少钱?',        native: 'How much?',                          phonetic: 'Duōshǎo qián?' },
      { id: 't05', target: '地铁站在哪里?',  native: 'Where is the metro station?',        phonetic: 'Dìtiězhàn zài nǎlǐ?' },
      { id: 't06', target: '请在这里停车',   native: 'Please stop here',                   phonetic: 'Qǐng zài zhèlǐ tíngchē' },
    ],
  },
  {
    id: 'food',
    title: 'Food & drink',
    emoji: '🍽️',
    free: true,
    phrases: [
      { id: 'f01', target: '我要吃这个',       native: 'I want to eat this',                       phonetic: 'Wǒ yào chī zhè gè' },
      { id: 'f02', target: '一瓶水, 谢谢',     native: 'A bottle of water, please',                phonetic: 'Yì píng shuǐ, xièxie' },
      { id: 'f03', target: '不要辣',           native: 'Not spicy',                                phonetic: 'Bú yào là' },
      { id: 'f04', target: '我对花生过敏',     native: "I'm allergic to peanuts",                  phonetic: 'Wǒ duì huāshēng guòmǐn' },
      { id: 'f05', target: '我吃素',           native: "I'm vegetarian",                           phonetic: 'Wǒ chī sù' },
      { id: 'f06', target: '买单',             native: 'The bill / check, please',                 phonetic: 'Mǎidān' },
    ],
  },
  {
    id: 'emergency',
    title: 'Emergency',
    emoji: '🚨',
    free: true,
    phrases: [
      { id: 'e01', target: '救命!',           native: 'Help!',                              phonetic: 'Jiùmìng!' },
      { id: 'e02', target: '我需要医生',      native: 'I need a doctor',                    phonetic: 'Wǒ xūyào yīshēng' },
      { id: 'e03', target: '我病了',          native: "I'm sick",                           phonetic: 'Wǒ bìng le' },
      { id: 'e04', target: '请叫救护车',      native: 'Please call an ambulance',           phonetic: 'Qǐng jiào jiùhùchē' },
      { id: 'e05', target: '请叫警察',        native: 'Please call the police',             phonetic: 'Qǐng jiào jǐngchá' },
      { id: 'e06', target: '我的护照丢了',    native: "I've lost my passport",              phonetic: 'Wǒ de hùzhào diū le' },
    ],
  },
  {
    id: 'directions',
    title: 'Directions',
    emoji: '🧭',
    free: false,
    phrases: [
      { id: 'd01', target: '在哪里?',         native: 'Where is it?',                       phonetic: 'Zài nǎlǐ?' },
      { id: 'd02', target: '怎么走?',         native: 'How do I get there?',                phonetic: 'Zěnme zǒu?' },
      { id: 'd03', target: '左边 / 右边',     native: 'Left / right',                       phonetic: 'Zuǒbiān / Yòubiān' },
      { id: 'd04', target: '一直走',          native: 'Go straight',                        phonetic: 'Yìzhí zǒu' },
      { id: 'd05', target: '我迷路了',        native: "I'm lost",                           phonetic: 'Wǒ mílù le' },
      { id: 'd06', target: '远不远?',         native: 'Is it far?',                         phonetic: 'Yuǎn bù yuǎn?' },
    ],
  },
  {
    id: 'hotel',
    title: 'Hotel & stays',
    emoji: '🏨',
    free: false,
    phrases: [
      { id: 'h01', target: '我有预订',          native: 'I have a reservation',              phonetic: 'Wǒ yǒu yùdìng' },
      { id: 'h02', target: '有Wi-Fi吗? 密码是?', native: 'Is there Wi-Fi? What is the password?', phonetic: 'Yǒu Wi-Fi ma? Mìmǎ shì?' },
      { id: 'h03', target: '我可以看房间吗?',   native: 'May I see the room?',               phonetic: 'Wǒ kěyǐ kàn fángjiān ma?' },
      { id: 'h04', target: '我要退房',          native: 'I want to check out',               phonetic: 'Wǒ yào tuìfáng' },
      { id: 'h05', target: '没有热水',          native: 'There is no hot water',             phonetic: 'Méiyǒu rèshuǐ' },
    ],
  },
  {
    id: 'manners',
    title: 'Manners & culture',
    emoji: '🤲',
    free: false,
    phrases: [
      { id: 'm01', target: '请',               native: 'Please',                              phonetic: 'Qǐng' },
      { id: 'm02', target: '不好意思',         native: 'Excuse me / sorry to trouble you',    phonetic: 'Bù hǎo yìsi' },
      { id: 'm03', target: '谢谢您',           native: 'Thank you (polite)',                  phonetic: 'Xièxie nín' },
      { id: 'm04', target: '麻烦您了',         native: 'Sorry to bother you',                 phonetic: 'Máfan nín le' },
      { id: 'm05', target: '认识您很高兴',     native: 'Pleased to meet you',                 phonetic: 'Rènshi nín hěn gāoxìng' },
      { id: 'm06', target: '我们不用付小费',   native: "We don't need to tip (it's not customary)", phonetic: 'Wǒmen bú yòng fù xiǎofèi' },
    ],
  },
  {
    id: 'numbers',
    title: 'Numbers & money',
    emoji: '💵',
    free: false,
    phrases: [
      { id: 'n01', target: '二十块以下',         native: 'Under twenty yuan',                  phonetic: 'Èrshí kuài yǐxià' },
      { id: 'n02', target: '太贵了, 便宜一点',   native: "Too expensive, a bit cheaper",       phonetic: 'Tài guì le, piányi yìdiǎn' },
      { id: 'n03', target: '我可以扫码吗?',     native: 'Can I scan (WeChat / Alipay)?',      phonetic: 'Wǒ kěyǐ sǎomǎ ma?' },
      { id: 'n04', target: '可以刷卡吗?',       native: 'Can I pay by card?',                 phonetic: 'Kěyǐ shuākǎ ma?' },
      { id: 'n05', target: '请找零',            native: 'Please give me change',              phonetic: 'Qǐng zhǎolíng' },
    ],
  },
];

export default CHINA_PHRASEBOOK;

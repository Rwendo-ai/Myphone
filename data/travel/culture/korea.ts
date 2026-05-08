/**
 * Cultural Guide — South Korea.
 *
 * Etiquette, scams, customs, holidays, dress, tipping. Authored from research
 * + native review. Each section is short prose so we can render the same
 * structure for every country we add.
 */

import type { CulturalGuide } from './types';

const KOREA_GUIDE: CulturalGuide = {
  countryCode: 'KR',
  countryName: 'South Korea',
  intro:
    'South Korea runs on hierarchy, hospitality, and a remarkable level of public order. ' +
    'A small bow, two hands offered for a card or a glass, and a willingness to share food from a common pot will mark you as someone who paid attention. ' +
    'Age determines speech and seating in ways that surprise visitors at first — once you see it, the whole social grammar clicks into place.',
  sections: [
    {
      id: 'greetings',
      title: 'Greetings come first',
      emoji: '🤝',
      body:
        'A bow of about 15-30 degrees is the default greeting — deeper for elders, shallower among peers. Handshakes are widely accepted from foreigners and are often combined with a small bow. ' +
        'Use BOTH hands when receiving a business card, a gift, or a glass from someone older or senior; the same applies when giving. ' +
        '\nAge is hierarchy here. Koreans will often ask "how old are you?" early in a conversation — it is not nosy, it is how they know which speech level to use with you. ' +
        '"Annyeonghaseyo" (hello) is universal and works in every situation.',
    },
    {
      id: 'tipping',
      title: 'Tipping',
      emoji: '💵',
      body:
        'Tipping is NOT customary in South Korea. Service is bundled into the price and staff are not expecting extra. ' +
        'Some upscale international hotels add a service charge to the bill — that is the extent of it. ' +
        'Do not tip at restaurants, cafés, or taxis; it tends to confuse rather than please. Just pay what is on the bill and say "gamsahamnida" (thank you).',
    },
    {
      id: 'currency',
      title: 'Money & cards',
      emoji: '💴',
      body:
        'The currency is the South Korean won (KRW, ₩). Card adoption is near 100% — almost everywhere takes contactless, including taxis, market stalls in Seoul, and tiny coffee shops. ' +
        'A T-money card is essential: top it up at any convenience store and it works on subway, buses, and most convenience-store purchases nationwide. ' +
        '\nCash is still useful at traditional street markets and rural areas. ATMs at Woori, KEB Hana, and Shinhan banks reliably accept foreign cards; many other ATMs do not.',
    },
    {
      id: 'safety',
      title: 'Safety & scams',
      emoji: '🛡️',
      body:
        'South Korea is extremely safe by global standards. Solo women walk home at any hour without issue in most neighbourhoods. CCTV is everywhere, and street crime against tourists is rare. ' +
        '\nNorth-South tensions show up in the news but not in daily life — locals barely notice. ' +
        'The drinking culture (soju, makgeolli, beer) means weekend nights in Hongdae or Gangnam are loud and chaotic, but rarely dangerous. ' +
        'The most likely "scam" you will encounter is an overpriced tourist-area restaurant; the actual risk to your wallet or safety is very low.',
    },
    {
      id: 'food',
      title: 'Eating',
      emoji: '🍽️',
      body:
        'Banchan — the small side dishes that arrive at the start — are refilled for free; ask politely for more if you want it. ' +
        'Pour drinks for OTHERS, never for yourself, and especially do this for elders. Use TWO hands when pouring or receiving from someone older. ' +
        '\nAt a Korean BBQ table, the server often cooks the meat for you — don\'t reach across to flip it yourself unless invited to. ' +
        'Spicy is everywhere (gochujang, kimchi, gochugaru) — there is usually a milder option if you ask. ' +
        '\nNEVER stick chopsticks vertically into a bowl of rice — it resembles a funeral offering and will make people wince. ' +
        'Communal pots of jjigae (stew) are shared at the table; your spoon dipping in is normal and expected. ' +
        'You usually pay at the register on the way out, not at the table.',
    },
    {
      id: 'dress',
      title: 'Dress',
      emoji: '👗',
      body:
        'Modern but modest. Koreans dress sharply — clean, well-fitting clothes are the norm in cities. ' +
        'Shoulders and cleavage are kept discreet, especially outside nightlife districts. Long pants for men in nicer restaurants. ' +
        '\nShoes come off at private homes, traditional restaurants, temples, and many guesthouses — most places provide lockers or shelves at the entrance. ' +
        'Wearing hanbok (traditional dress) for festivals or palace visits is welcomed and even rewarded with free palace entry.',
    },
    {
      id: 'photography',
      title: 'Photography',
      emoji: '📷',
      body:
        'Streets are generally fine. On the subway, signs explicitly forbid photographing other passengers — Korean privacy law is strict and enforced. ' +
        'Inside palaces and most museums, photography is allowed unless signed otherwise. ' +
        '\nAt K-pop concerts, recording is forbidden and security will eject you for it. ' +
        'NEVER photograph the National Assembly, military installations, or US bases.',
    },
    {
      id: 'language',
      title: 'Language tips',
      emoji: '🗣️',
      body:
        'Korean (written in Hangul) is the only official language. English is moderate in tourist areas of Seoul and Busan and weaker elsewhere — translation apps (Papago, Google Translate) work very well, including the camera-on-menu feature. ' +
        '\nKorean has four main honorific levels: 합쇼체 (formal), 해요체 (polite informal), 해체 (casual), and 반말 (intimate / between close friends or to those much younger). As a traveller you default to 해요체 — it is polite and never rude in any context. ' +
        '\nMany younger Koreans speak passable English thanks to a heavy emphasis on English in schools, and will often help you out if you start in Korean and switch.',
    },
    {
      id: 'holidays',
      title: 'Public holidays to know',
      emoji: '📅',
      body:
        '1 Jan (New Year\'s Day), Seollal — Lunar New Year (variable Jan/Feb, 3+ days), 1 Mar (Independence Movement Day), 5 May (Children\'s Day), Buddha\'s Birthday (variable, May), 6 Jun (Memorial Day), 15 Aug (Liberation Day), Chuseok — Korean Thanksgiving (variable Sep/Oct, 3+ days), 3 Oct (National Foundation Day), 9 Oct (Hangeul Day), 25 Dec (Christmas). ' +
        '\nSeollal and Chuseok trigger MASS migrations as the country goes home to family. Hotels in Seoul get pricey, road traffic is famously insane, and intercity trains book out weeks ahead. ' +
        'AVOID booking domestic travel during these windows unless you have planned around them.',
    },
  ],
};

export default KOREA_GUIDE;

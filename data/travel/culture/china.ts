/**
 * Cultural Guide — China (mainland).
 *
 * Etiquette, scams, customs, holidays, dress, tipping. Authored from research
 * + native review. Each section is short prose so we can render the same
 * structure for every country we add.
 */

import type { CulturalGuide } from './types';

const CHINA_GUIDE: CulturalGuide = {
  countryCode: 'CN',
  countryName: 'China',
  intro:
    'Mainland China is vast, fast-moving, and almost entirely cashless. A traveller who downloads a VPN before arrival, links a foreign card to WeChat Pay, and learns to greet elders with a touch of formality will move through the country with surprising ease. ' +
    'Small habits — accepting business cards with both hands, never sticking chopsticks upright in rice, agreeing a taxi via Didi rather than the curb — separate the prepared visitor from the lost one. The reward is one of the safest, most efficient travel countries on earth.',
  sections: [
    {
      id: 'greetings',
      title: 'Greetings & introductions',
      emoji: '🤝',
      body:
        'Handshakes are common but should be gentle, not firm — a crushing grip reads as aggressive, not confident. Bowing is not required (that\'s Japan); a slight nod of the head is plenty. ' +
        '\nBusiness cards and gifts are exchanged with BOTH hands, card facing the recipient. Take a moment to read a card before pocketing it — sliding it away instantly is rude. ' +
        '"Ni hao" (你好) is the universal hello. For elders or formal settings, use "Nín hǎo" (您好) — the polite "you" form. It costs nothing and lands well.',
    },
    {
      id: 'tipping',
      title: 'Tipping',
      emoji: '💵',
      body:
        'Tipping is NOT customary anywhere in mainland China. Restaurants, hotels, taxis — none of them expect it, and many staff will chase you down to return change you "forgot." ' +
        '\nThe one exception is multi-day tour guides and drivers: ¥100-200 per day to the lead guide, slightly less to the driver, handed over at the end of the trip. ' +
        'Outside of that, leaving extra cash can actually insult the staff — they read it as you assuming they\'re underpaid. Pay the bill, smile, leave.',
    },
    {
      id: 'currency',
      title: 'The cashless reality',
      emoji: '💴',
      body:
        'The currency is the Renminbi (RMB), also called the Yuan or CNY (¥). But more importantly: China is virtually cashless. WeChat Pay and Alipay run everything — street food, taxis, vending machines, temple donations. ' +
        '\nGood news: since 2024, foreign Visa and Mastercard can be linked directly inside WeChat Pay and Alipay. Set this up BEFORE you arrive. It\'s the single biggest unlock for the trip. ' +
        '\nCash is still legally accepted everywhere but increasingly awkward — vendors may not have change for a ¥100 note. ATMs at Bank of China and ICBC accept international cards (best rates). Currency exchange at major hotels works but the rates are worse. Avoid airport exchange counters.',
    },
    {
      id: 'safety',
      title: 'Safety & scams',
      emoji: '🛡️',
      body:
        'China is among the safest countries on earth for travellers. Petty theft is rare, violent crime against foreigners is almost unheard of, and solo women routinely walk home at night without incident. CCTV is everywhere, which is its own conversation, but the practical effect is a very low-crime environment. ' +
        '\nThe scams that DO exist cluster around tourist zones: the "art student" scam in Shanghai and Beijing (a friendly young person invites you to a tea ceremony, then hits you with a ¥2,000 bill), and illegal taxis at airports quoting fantasy prices. Use Didi (the local Uber) for every ride — it kills both scams instantly. ' +
        '\nIn winter, Beijing pollution can spike — a basic mask (KN95) is sometimes warranted on bad-air days. Check the AQI on your phone.',
    },
    {
      id: 'food',
      title: 'Eating',
      emoji: '🍽️',
      body:
        'China has eight regional cuisines (Sichuan, Cantonese, Shandong, Jiangsu, Zhejiang, Fujian, Hunan, Anhui) and they vary wildly — Sichuan numbing-spicy, Cantonese delicate and sweet, Shandong heavy and savoury. Spice and oil tolerance differ by region; ask if you\'re unsure. ' +
        '\nTap water is NOT safe to drink — boiled or bottled only. Hot water (open boiled) is the default drink served at restaurants; cold water is uncommon and slightly suspect to locals. ' +
        '\nNEVER stick chopsticks upright into a bowl of rice — this mirrors funeral incense and is the single biggest table-manner mistake foreigners make. Rest them across the bowl or on the holder. Offer dishes to others with both hands. The lazy Susan in the middle of the table rotates — wait your turn, don\'t reach across.',
    },
    {
      id: 'dress',
      title: 'Dress',
      emoji: '👗',
      body:
        'Cities are casual — jeans, t-shirts, sneakers are fine in Beijing, Shanghai, Shenzhen, Guangzhou. Modesty matters in temples: cover shoulders and knees, take hats off inside halls. ' +
        '\nLayer for the north — Beijing winters are bitterly cold (regularly below freezing), summers are hot and humid. Shanghai is milder but still has real winter. The south (Guangzhou, Hong Kong) is subtropical year-round. ' +
        '\nComfortable shoes are essential — you will walk and stand more than you expect. Cobblestones, temple steps, subway stations the size of airports.',
    },
    {
      id: 'photography',
      title: 'Photography',
      emoji: '📷',
      body:
        'Photograph almost everything — markets, food, skylines, locals (who often happily pose). Street photography is broadly fine and locals tend to be relaxed about it. ' +
        '\nDO NOT photograph: military installations, government buildings, police, or anything that looks "official." On the subway, photography is technically allowed but security guards may stop you anyway — easier to put the phone away. ' +
        'Above all, DO NOT photograph protests or political events of any kind. Quietly walk past, do not film, do not post.',
    },
    {
      id: 'language',
      title: 'Language tips',
      emoji: '🗣️',
      body:
        'Mandarin is the national language, written in simplified Chinese characters. Cantonese is spoken in Guangdong and Hong Kong (it\'s a separate language, not a dialect — mutually unintelligible with Mandarin). ' +
        '\nPinyin (romanised Mandarin) is on most signs, and English signage is widespread in Beijing, Shanghai, Shenzhen and Guangzhou. Outside the major cities, English drops off fast. ' +
        '\nDownload these BEFORE you arrive: Google Translate (offline Chinese pack + camera mode for menus), Pleco (the best offline Chinese dictionary), and a VPN. ' +
        '\nVPN NOTE: Google, Gmail, Facebook, Instagram, WhatsApp, X, and most Western news are blocked in mainland China. You CANNOT download a VPN once you\'re inside the country — the app stores hide them. Install ExpressVPN, NordVPN or Astrill before you board the plane.',
    },
    {
      id: 'holidays',
      title: 'Public holidays to know',
      emoji: '📅',
      body:
        'Chinese New Year / Spring Festival (variable, late Jan or Feb — 7+ days), Tomb-Sweeping Day (early April), Labour Day (1-3 May), Dragon Boat Festival (variable, June), Mid-Autumn Festival (variable, Sep/Oct), National Day / Golden Week (1-7 October). ' +
        '\nAVOID booking travel during Spring Festival or National Day Golden Week. Trains sell out months ahead, hotel prices triple, and every tourist site in the country is packed shoulder-to-shoulder. It\'s the largest annual human migration on the planet — fascinating to read about, miserable to be inside.',
    },
  ],
};

export default CHINA_GUIDE;

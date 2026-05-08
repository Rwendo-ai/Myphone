/**
 * Cultural Guide — India.
 *
 * Etiquette, scams, customs, holidays, dress, tipping. Authored from research
 * + native review. Each section is short prose so we can render the same
 * structure for every country we add.
 */

import type { CulturalGuide } from './types';

const INDIA_GUIDE: CulturalGuide = {
  countryCode: 'IN',
  countryName: 'India',
  intro:
    'India rewards travellers who slow down and pay attention. The country runs on relationships, regional pride, and small rituals — ' +
    'a Namaste before the handshake, the right hand for eating, shoes off at the temple door. ' +
    'Get those right and doors open everywhere; ignore them and you stay on the tourist surface. The diversity is the point: every state is its own country in food, language, and festival.',
  sections: [
    {
      id: 'greetings',
      title: 'Greetings come first',
      emoji: '🤝',
      body:
        'Namaste — palms together at chest, slight bow — is universal, respectful, and works across every region, religion, and age group. It\'s also a safe choice when you\'re unsure. ' +
        'Handshakes are common in business and cities, but NEVER initiate a handshake with someone of the opposite gender unless they offer first — many traditional people don\'t, and forcing it causes real discomfort. ' +
        '\nThe "ji" suffix shows respect — Sir-ji, Ma\'am-ji, Auntie-ji, Uncle-ji. Sprinkle it on names and titles when speaking to elders and you\'ll be marked as someone who came to learn.',
    },
    {
      id: 'tipping',
      title: 'Tipping',
      emoji: '💵',
      body:
        '10% at sit-down restaurants if a service charge isn\'t already on the bill (check). ' +
        '₹50-100 for a porter at the train station or hotel. ₹100-200 per day for hotel housekeeping, left on the pillow at the end of the stay. ' +
        'Tour guides: ₹500-1000 per day, more for multi-day trips with the same person. ' +
        '\nTipping is openly acknowledged ("baksheesh") in much of north India — it\'s not awkward to ask, and not awkward to refuse a service that demands it.',
    },
    {
      id: 'currency',
      title: 'The currency situation',
      emoji: '💴',
      body:
        'India uses the rupee (INR, ₹). Cash is essential for small purchases — chai stalls, autos, street food, rural markets. ' +
        'Domestic payments increasingly run on UPI (PhonePe, Paytm, Google Pay) but most foreign tourists can\'t easily set this up — your home bank cards usually won\'t link. ' +
        '\nCards work in hotels, malls, airline counters, and chain restaurants. ATMs are everywhere — withdraw at SBI, HDFC, or ICICI for safety and reliability, and avoid standalone "white-label" ATMs in remote areas. ' +
        'Carry small notes (₹10, ₹20, ₹50, ₹100) — change for a ₹500 note can be a problem at small vendors.',
    },
    {
      id: 'safety',
      title: 'Safety & scams',
      emoji: '🛡️',
      body:
        'India is generally safe but stay alert in crowds. Pickpockets work the major train stations — New Delhi, Mumbai CST, Howrah — and the tourist circuits in Old Delhi and Jaipur. ' +
        '\nThe classic tour scam: a friendly stranger near a major sight tells you the entrance is closed/moved/being renovated, then steers you to "their cousin\'s" travel agency. Pre-book through registered companies and ignore unsolicited "help." ' +
        'Solo female travel: Delhi and parts of Goa carry specific risks; Kerala, Tamil Nadu, and most of the south are markedly safer. Use prepaid taxi booths at airports/stations, Uber/Ola in cities, and avoid empty trains/streets after dark. ' +
        '\nDelhi belly: most travellers get it eventually. Bottled or filtered water only, no street water/ice, peel-able fruits, hot-cooked food. Carry rehydration salts.',
    },
    {
      id: 'food',
      title: 'Eating',
      emoji: '🍽️',
      body:
        'Vegetarian (शाकाहारी) is not a niche — over 30% of the population is fully vegetarian, and many others avoid meat on certain days. "Pure veg" restaurants don\'t serve eggs either; check if you need them. ' +
        'Right hand for eating — the left is considered unclean. Wash hands before AND after meals; most homes and restaurants have a basin for this. ' +
        '\nSpice tolerance varies regionally — Andhra and Rajasthan run hot, Gujarat sweeter, the south uses coconut and tamarind. Drink lassi or chai with spicy food, not water (water makes capsaicin worse). ' +
        '\nAvoid raw vegetables and salads outside good hotels — they\'re rinsed in tap water. NEVER refuse offered food or drink in a home; accept a small portion even if you\'re full. Refusing is read as rejection of the host.',
    },
    {
      id: 'dress',
      title: 'Dress',
      emoji: '👗',
      body:
        'Conservative is the default, especially for women. Shoulders covered, knees covered, particularly at religious sites and in smaller towns. A scarf (dupatta) is useful for covering hair at temples, gurdwaras, and dargahs. ' +
        'Men: long pants for temples and most religious sites. Shorts are read as beachwear almost everywhere except the beach. ' +
        '\nShoes off at temples (always), at homes (usually), and sometimes at small shops with a raised threshold. Watch what locals do at the door. ' +
        'Wearing a saree or salwar kameez to a festival is welcomed, not awkward — people will compliment you. ' +
        'Shorts and sleeveless tops are fine on Goa beaches but not in towns, temples, or rural areas.',
    },
    {
      id: 'photography',
      title: 'Photography',
      emoji: '📷',
      body:
        'Generally fine, but ALWAYS ask before taking portraits — especially of women, elders, and rural people. Most will say yes and many will pose; some won\'t, and pushing it is wrong. ' +
        '\nReligious sites: usually no photography inside the inner sanctum, often no photos at all — check the signs at the entrance. Outside is normally fine. ' +
        'Military bases, airports, government buildings, nuclear facilities, and border zones: NO photos. This is enforced. ' +
        '\nCaste-sensitive: do not photograph Dalits, slum residents, or visibly poor people in order to "document poverty" — it\'s exploitative and increasingly called out. Weddings and festivals: ask the family or host before pointing a camera, even if it looks public.',
    },
    {
      id: 'language',
      title: 'Language tips',
      emoji: '🗣️',
      body:
        'Hindi (Devanagari script) is the most widely spoken national language; English is co-official and used heavily in business, hospitality, and tourism. Between the two you can travel almost anywhere. ' +
        'India has 22 officially scheduled languages — Tamil, Telugu, Bengali, Marathi, Punjabi, Kannada, Malayalam, Gujarati, and others are huge in their home states. ' +
        '\nIn the south (Tamil Nadu especially) regional language pride runs deep — English is often more reliable than Hindi, and trying Hindi first can land flat. Greet in Hindi where it fits, but defer to English when you sense the room. ' +
        'A "Namaste" and a "Dhanyavaad" (thank you) almost always land well.',
    },
    {
      id: 'holidays',
      title: 'Public holidays to know',
      emoji: '📅',
      body:
        'Republic Day (26 Jan), Holi (variable Feb/Mar — the colours festival), Good Friday (variable), Eid al-Fitr (variable), Independence Day (15 Aug), Janmashtami (variable Aug/Sep), Gandhi Jayanti (2 Oct), Diwali (variable Oct/Nov — the biggest festival of the year), Christmas (25 Dec). ' +
        '\nOn top of those, every state has its own calendar — Pongal in Tamil Nadu, Onam in Kerala, Durga Puja in West Bengal, Ganesh Chaturthi in Maharashtra, Baisakhi in Punjab. Ask locally before you travel; a regional festival can shut a city or fill it with millions. ' +
        '\nHoli and Diwali especially: hotels book out months in advance and prices spike. Trains and flights around Diwali are the busiest week of the Indian year — book early or wait it out.',
    },
  ],
};

export default INDIA_GUIDE;

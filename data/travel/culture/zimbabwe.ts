/**
 * Cultural Guide — Zimbabwe.
 *
 * Etiquette, scams, customs, holidays, dress, tipping. Authored from research
 * + native review. Each section is short prose so we can render the same
 * structure for every country we add.
 */

import type { CulturalGuide } from './types';

const ZIMBABWE_GUIDE: CulturalGuide = {
  countryCode: 'ZW',
  countryName: 'Zimbabwe',
  intro:
    'Zimbabwe is a country of warm welcomes, complicated currency, and unfailingly polite first introductions. ' +
    'A few small habits — greeting before transacting, accepting items with both hands, eating sadza with the right hand only — ' +
    'will mark you as someone who came to learn, not just to look. The reward is real conversation, not the surface tourist version.',
  sections: [
    {
      id: 'greetings',
      title: 'Greetings come first',
      emoji: '🤝',
      body:
        'Always greet before asking for anything — directions, prices, a coffee. "Mhoro, makadii?" (Hello, how are you?) before "where is the bus station?" is the difference between getting helped and getting tolerated. ' +
        'When someone older greets you, return the greeting with a slight bow of the head and clasp your right elbow with your left hand. This signals respect. Skipping greetings is read as rudeness in most of the country.',
    },
    {
      id: 'tipping',
      title: 'Tipping',
      emoji: '💵',
      body:
        '10% at sit-down restaurants if service was good and a service charge isn\'t already on the bill (check). ' +
        'US$1-2 for a hotel porter or housekeeping per day. Taxis don\'t expect tips but rounding up is appreciated. ' +
        'Tour guides on a multi-day safari: US$10-15 per guest per day to the lead guide, US$5-8 to the support staff (collected at the end).',
    },
    {
      id: 'currency',
      title: 'The currency situation',
      emoji: '💴',
      body:
        'Zimbabwe uses the ZiG (Zimbabwe Gold) introduced in 2024, alongside the US dollar which remains widely accepted in cash. ' +
        'Practical advice: bring small US dollar notes (US$1, US$5, US$10) for everyday spending. Larger notes are sometimes refused by smaller vendors. ' +
        'ATMs are unreliable for foreign cards — withdraw at major banks in Harare or Bulawayo, never depend on a single ATM. ' +
        'Card payments work in upmarket hotels and supermarkets but fail at smaller shops and rural lodges. Cash is king.',
    },
    {
      id: 'safety',
      title: 'Safety & scams',
      emoji: '🛡️',
      body:
        'Zimbabwe is generally safe for travellers, especially compared to its neighbours. Walking around Harare CBD in the day is fine; avoid empty streets after dark and use ride apps (inDriver, Hwindi) at night. ' +
        '\nCommon scams: airport "officials" offering to help with bags then demanding tips; taxi drivers quoting one rate and changing on arrival (always agree the price BEFORE getting in); ' +
        'fake police asking for "fines" — real police don\'t collect cash on the side of the road. ' +
        'Politely refuse, ask for an official station, and most of these scams evaporate.',
    },
    {
      id: 'food',
      title: 'Eating',
      emoji: '🍽️',
      body:
        'Sadza (a thick maize porridge) is the national dish — eaten with the right hand, rolled into a ball, dipped into a stew or relish. ' +
        'Trying it is welcomed and remembered. Decline politely if you can\'t (allergies etc) — Zimbabweans are gracious hosts. ' +
        '\nDon\'t drink tap water unless you\'re at a major hotel — bottled water is widely available and cheap. ' +
        'Markets are vibrant and worth the trip; bargaining is expected for crafts and curios but NOT for food.',
    },
    {
      id: 'dress',
      title: 'Dress',
      emoji: '👗',
      body:
        'Zimbabweans dress modestly and well — clean, ironed clothes are a basic standard everywhere except the bush. ' +
        'For women: shoulders covered in churches and at family gatherings, knee-length skirts/shorts in cities (no rule, just polite). ' +
        'Men: collared shirts in nicer restaurants. Beachy/swimwear stays at the resort or pool. ' +
        '\nFor safari: neutral colours (khaki, olive, brown) — not white or bright colours, which make you visible to wildlife.',
    },
    {
      id: 'photography',
      title: 'Photography',
      emoji: '📷',
      body:
        'Always ask before photographing people, especially elders and rural communities. Many will say yes; some won\'t, and a small thank-you tip (US$1) is polite if they pose. ' +
        '\nDO NOT photograph: government buildings, soldiers, police, the State House, airports, dams, bridges, or anything that looks "official." This rule is enforced and people have been detained for ignoring it. ' +
        'Wildlife and landscapes are unrestricted.',
    },
    {
      id: 'language',
      title: 'Language tips',
      emoji: '🗣️',
      body:
        'English is widely spoken, especially in cities and tourism. Shona and Ndebele are the most common local languages. ' +
        '\nA few Shona phrases — "Mhoro" (hello), "Ndatenda" (thank you), "Pamusoroi" (excuse me) — go a remarkable distance. ' +
        'Most people will smile, switch to better English, and treat you like a friend rather than a customer.',
    },
    {
      id: 'holidays',
      title: 'Public holidays to know',
      emoji: '📅',
      body:
        '1 Jan (New Year), 18 Apr (Independence Day), 1 May (Workers\' Day), 25 May (Africa Day), 11/12 Aug (Heroes\'/Defence Forces Days), 22 Dec (Unity Day), 25/26 Dec (Christmas/Boxing Day). ' +
        'Many businesses close on these days. Easter (variable) is also widely observed. ' +
        '\nIf you\'re travelling around Heroes\' Day or Independence, expect parades and patriotic events — interesting to see, but transport books up early.',
    },
  ],
};

export default ZIMBABWE_GUIDE;

/**
 * Cultural Guide — Zimbabwe (Ndebele cultural sphere).
 *
 * Companion to the broader Zimbabwe guide, focused on Matabeleland — the
 * western half of the country, with Bulawayo as its cultural capital. Same
 * schema as zimbabwe.ts so the renderer is shared. Authored from research
 * + native review.
 */

import type { CulturalGuide } from './types';

const ZIMBABWE_NDEBELE_GUIDE: CulturalGuide = {
  countryCode: 'ZW-ND',
  countryName: 'Zimbabwe (Ndebele)',
  intro:
    'Matabeleland — the western half of Zimbabwe — is its own cultural world, with its own language, history, and pace. ' +
    'The Ndebele trace their roots to uMzilikazi kaMashobane, who led his people north from Zululand in the 1830s and founded the Mthwakazi nation. His son Lobengula ruled from Bulawayo until the 1890s. ' +
    'Today Bulawayo is still the cultural capital — slower, more orderly, and proud of an identity distinct from the Shona-speaking east. ' +
    'Zimbabwe is one country with two great cultural rivers running through it; travellers who arrive in Matabeleland expecting a copy of Harare will miss the place entirely. ' +
    'A few small habits — greeting in isiNdebele before you transact, accepting things with the right hand, eating umngqusho without making a face — will mark you as someone who came to learn.',
  sections: [
    {
      id: 'greetings',
      title: 'Greetings come first',
      emoji: '🤝',
      body:
        'Always greet before asking for anything — directions, prices, a coffee. "Salibonani" (hello, to more than one person, or polite) and "Sawubona" (hello, to one person) come before any other words. Skipping the greeting is read as rudeness. ' +
        'A common follow-up is "Linjani?" (how are you all?) or "Bayini lo?" — literally "how are they?", asking after the family. Asking after the family before business is the Ndebele way. ' +
        '\nWhen greeting an elder, offer your right hand and support your right forearm with your left hand — touching the elder\'s right hand with both of yours is the deepest sign of reverence. Lower your gaze briefly as you approach. ' +
        'Never hand or receive anything important with your left hand alone.',
    },
    {
      id: 'tipping',
      title: 'Tipping',
      emoji: '💵',
      body:
        '10% at sit-down restaurants in Bulawayo if service was good and a service charge isn\'t already on the bill (check). ' +
        'US$1-2 for a hotel porter or housekeeping per day. Taxis don\'t expect tips but rounding up is appreciated. ' +
        'Tour guides in Matobo Hills or Hwange: US$10-15 per guest per day to the lead guide, US$5-8 to the support staff (collected at the end). ' +
        'Tipping convention is the same as the rest of Zimbabwe — this is country-wide practice, not a regional difference.',
    },
    {
      id: 'currency',
      title: 'The currency situation',
      emoji: '💴',
      body:
        'Same as the rest of Zimbabwe: the ZiG (Zimbabwe Gold, introduced 2024) circulates alongside the US dollar, which remains widely accepted in cash. ' +
        'Practical advice: bring small US dollar notes (US$1, US$5, US$10) for everyday spending. Larger notes are sometimes refused by smaller vendors. ' +
        'ATMs are unreliable for foreign cards — withdraw at major banks in central Bulawayo, never depend on a single ATM. ' +
        '\nOne regional note: some Bulawayo businesses prefer ZiG more readily than their Harare counterparts — a quiet point of regional pride. ' +
        'Card payments work at upmarket hotels, malls (Ascot, Bulawayo Centre) and supermarkets but fail at smaller shops and rural lodges. Cash is king.',
    },
    {
      id: 'safety',
      title: 'Safety & scams',
      emoji: '🛡️',
      body:
        'Bulawayo is widely considered the safest big city in Zimbabwe — quieter, more orderly, and with notably less petty crime than Harare. Walking the CBD by day is fine; use ride apps (inDriver, Hwindi) at night. ' +
        'Matobo Hills is safe for travellers, especially on guided visits to the rock art sites and Cecil Rhodes\' grave. Hwange is safe in established camps and fenced areas — never wander outside lodges after dark. ' +
        '\nCommon scams (same as elsewhere in Zimbabwe): airport "officials" offering to help with bags then demanding tips; taxi drivers quoting one rate and changing on arrival (always agree the price BEFORE getting in); ' +
        'fake police asking for "fines" — real police don\'t collect cash on the side of the road. Politely refuse, ask to be taken to a real station, and most evaporate.',
    },
    {
      id: 'food',
      title: 'Eating',
      emoji: '🍽️',
      body:
        'Inkobe (Ndebele equivalent of sadza, the thick maize staple) is eaten daily — rolled in the right hand and dipped into stew. The signature Ndebele dish is umngqusho — samp (cracked maize) and beans, slow-cooked, often with peanuts or pumpkin leaves. ' +
        'Cattle culture runs deep here: izinkomo (cattle) are wealth, gifts, and ceremony all at once, and beef is at the centre of feasts. Umqombothi — traditional sorghum beer, the "q" is a click — is shared at gatherings; if offered, accept the cup with both hands. ' +
        '\nEat with the right hand. Refusing food in a Ndebele home is read as a serious snub — decline only for genuine reasons (allergy, religious fast) and explain warmly. ' +
        'Don\'t drink tap water unless you\'re at a major hotel. Bargaining is expected for crafts and curios but NOT for food.',
    },
    {
      id: 'dress',
      title: 'Dress',
      emoji: '👗',
      body:
        'Ndebele dress norms mirror the rest of Zimbabwe — modest, clean, ironed. Shoulders covered in churches and at family gatherings; knee-length skirts/shorts in cities are polite; collared shirts for men in nicer restaurants. ' +
        '\nTraditional dress (worn at ceremonies, weddings, heritage events): for women, the isidwaba — a pleated leather skirt — paired with the ibhayi, a cloth wrap over the shoulders, and beadwork. For men, amabheshu — a skin apron worn at the waist — with regalia for ceremonies. ' +
        'Travellers don\'t need traditional dress, but if you\'re invited to a ceremony, dress conservatively in neutral tones. ' +
        'For safari in Matobo or Hwange: neutral colours (khaki, olive, brown), not white or bright colours.',
    },
    {
      id: 'photography',
      title: 'Photography',
      emoji: '📷',
      body:
        'Always ask before photographing people, especially elders and rural communities. Many will say yes; some won\'t, and a small thank-you tip (US$1) is polite if they pose. ' +
        '\nMatobo Hills holds some of the most important rock art in southern Africa and is sacred ground. DO NOT photograph rock art panels without permission from your local guide — some sites are off-limits to cameras entirely, and the guides will tell you which. Respect the rule even when no one is watching. ' +
        'Royal and historical sites — Lobengula\'s ruins at Old Bulawayo, the indaba tree, ceremonial grounds — require explicit permission before photos. ' +
        '\nDO NOT photograph: government buildings, soldiers, police, airports, dams, bridges, or anything "official." This rule is enforced country-wide and people have been detained for ignoring it. Wildlife and landscapes are unrestricted.',
    },
    {
      id: 'language',
      title: 'Language tips',
      emoji: '🗣️',
      body:
        'isiNdebele is one of Zimbabwe\'s official languages, alongside Shona and English. It belongs to the Nguni family — the same group as Zulu and Xhosa — and shares their three click consonants: c (dental), q (palatal), x (lateral). The clicks are part of Ndebele identity; English-isms work in a pinch but are not the same. ' +
        'English is widely spoken in Bulawayo, especially in business and tourism. ' +
        '\nA few isiNdebele phrases that travel a long way: "Salibonani" (hello, to many or polite), "Sawubona" (hello, to one), "Ngiyabonga" (thank you), "Uxolo" (sorry / excuse me), "Yebo" (yes), "Hatshi" (no). ' +
        'Practising the clicks, even imperfectly, is appreciated — locals will smile and help you tune them in.',
    },
    {
      id: 'holidays',
      title: 'Public holidays to know',
      emoji: '📅',
      body:
        'National holidays are the same as the rest of Zimbabwe: 1 Jan (New Year), 18 Apr (Independence Day), 1 May (Workers\' Day), 25 May (Africa Day), 11/12 Aug (Heroes\'/Defence Forces Days), 22 Dec (Unity Day), 25/26 Dec (Christmas/Boxing Day). Easter (variable) is widely observed. Many businesses close. ' +
        '\nMatabeleland-specific: uMthwakazi heritage events cluster around Heroes\' Day in Bulawayo — cultural performances, royal commemorations, and indaba gatherings honouring uMzilikazi and Lobengula. ' +
        'Inxwala, the historical first-fruits ceremony of the Ndebele kings, is no longer held in its full royal form (it ended with Lobengula\'s era) but ceremonial commemorations and cultural revivals around it occur in some years — worth asking locally if you\'re visiting in late summer. ' +
        'If you\'re in Bulawayo around Heroes\' Day, expect parades, music, and a strong sense of regional pride. Transport books up early.',
    },
  ],
};

export default ZIMBABWE_NDEBELE_GUIDE;

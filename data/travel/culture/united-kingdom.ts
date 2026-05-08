/**
 * Cultural Guide — United Kingdom.
 *
 * Etiquette, scams, customs, holidays, dress, tipping. Authored from research
 * + native review. Each section is short prose so we can render the same
 * structure for every country we add.
 */

import type { CulturalGuide } from './types';

const UK_GUIDE: CulturalGuide = {
  countryCode: 'GB',
  countryName: 'United Kingdom',
  intro:
    'The UK runs on politeness, queues, and quiet understatement. A good visitor learns the small rituals fast — wait your turn, say "please" and "thank you" without thinking, never skip the queue, and treat strangers with mild, friendly distance. ' +
    'Master those, and you\'ll find Britain warmer than its reputation: the dry humour, the pub conversation, the willingness to walk you to a station rather than just point. The country rewards patience, not enthusiasm.',
  sections: [
    {
      id: 'greetings',
      title: 'Greetings & politeness',
      emoji: '🤝',
      body:
        'A handshake works for first introductions; among friends, a quick "you alright?" or "alright?" is the standard hello (it isn\'t a real question — answer "yeah, you?" and move on). Do NOT cheek-kiss strangers — it\'s reserved for close friends and family, and even then varies by region and class. ' +
        '\nQueueing is a sacred social contract. Skipping a queue, even by accident, will earn you sharp looks and the occasional muttered comment. Say "please", "thank you", "sorry" constantly — Brits apologise when you bump into them, when they bump into you, and pre-emptively before asking anything at all. It\'s not weakness, it\'s lubrication.',
    },
    {
      id: 'tipping',
      title: 'Tipping',
      emoji: '💵',
      body:
        '10-12.5% at sit-down restaurants if a service charge isn\'t already on the bill — and check, because it often is (look for "service charge" or "optional gratuity"). If service charge is included, no extra tip required. ' +
        '\nTaxis and black cabs: round up, or add £1-2 for a short ride. Hotel housekeeping: £1-2 per day left in the room. Hairdressers/barbers: ~10%. ' +
        '\nNO tipping at pubs — it\'s not the custom and can come across as awkward. If a bartender has been particularly good, the traditional gesture is to offer to buy them a drink ("and one for yourself?"). They\'ll usually decline politely or take the cash equivalent (often around 50p-£1). Coffee shops: tip jar if you feel like it, otherwise nothing.',
    },
    {
      id: 'currency',
      title: 'The currency situation',
      emoji: '💴',
      body:
        'GBP — the pound sterling (£). Contactless cards and phone-pay (Apple Pay, Google Pay) work almost everywhere — buses, taxis, market stalls, pubs. Cards are accepted at well over 99% of places; cash is genuinely optional in most cities, though carrying £20-40 for emergencies is sensible. ' +
        '\nATMs are called "cashpoints". Bank-branded ones (Barclays, HSBC, Lloyds, NatWest) are free; standalone machines in convenience stores often charge £1.50-£2.50 — it\'ll warn you on screen. Avoid currency exchange at airports — the rates are dreadful. Use a fee-free travel card (Wise, Revolut, Chase) or just pay by contactless. ' +
        '\nScotland uses GBP but issues its own banknotes (Bank of Scotland, Royal Bank of Scotland, Clydesdale Bank). They are legal tender and valid throughout the UK, but English shopkeepers occasionally refuse them out of ignorance — it\'s annoying but rarely worth a fight. Spend Scottish notes in Scotland or convert at any bank.',
    },
    {
      id: 'safety',
      title: 'Safety & scams',
      emoji: '🛡️',
      body:
        'The UK is generally very safe. Violent crime against tourists is rare. The main risks are pickpocketing in tourist-heavy zones — Covent Garden, Oxford Street, Camden Market, Borough Market, the Tube during rush hour. Keep your phone out of your back pocket and your bag zipped in front of you in crowds. ' +
        '\nOn London Underground escalators: stand on the RIGHT, walk on the LEFT. Blocking the left side is the fastest way to mark yourself as a tourist (and irritate commuters). ' +
        '\nEmergency number is 999 (or 112). Walking after dark is fine in most central areas; avoid arguing with drunk groups outside pubs at closing time. ' +
        '\nCommon scams: "petition" gangs near Westminster, the London Eye, and outside the British Museum — clipboards, sob stories, then they pickpocket while you\'re signing. Three-card-Monte and shell-game players on Westminster Bridge — it\'s rigged, walk past. Fake "charity" muggers blocking pavement — ignore and keep walking.',
    },
    {
      id: 'food',
      title: 'Eating & drinking',
      emoji: '🍽️',
      body:
        'British food has had a quiet revival — gastropubs, neighbourhood bistros, and serious modern British cooking are everywhere. The traditional dishes worth trying: a Sunday roast (beef, lamb, pork or chicken with roast potatoes, Yorkshire pudding, vegetables, gravy — usually only on Sundays); fish and chips (best from a chippy near the sea); a full English breakfast (bacon, sausage, eggs, baked beans, grilled tomato, mushrooms, black pudding, toast — order it with a pot of tea). ' +
        '\nCurry is unofficially the national dish — Brick Lane in London, the Curry Mile in Manchester, and Birmingham\'s Balti Triangle are pilgrimages. ' +
        '\nAfternoon tea (sandwiches, scones with clotted cream and jam, cakes, tea, around 3-5pm) is a tourist ritual but a lovely one — book ahead at hotels. "High tea" is something else entirely (a working-class evening meal) and is rarely served properly anymore — don\'t confuse them. ' +
        '\nIn pubs: cask ale (warm-ish, flat-ish, brilliant) is real beer; lager is what most people drink. "A cuppa" means a cup of tea, almost always with milk. Tap water is excellent and free in any restaurant or pub — just ask for "tap water, please" or you\'ll be charged for bottled.',
    },
    {
      id: 'dress',
      title: 'Dress',
      emoji: '👗',
      body:
        'Layers, always. UK weather changes hourly — a sunny morning becomes rain by lunch. Pack a waterproof jacket, an umbrella (the small folding kind), and clothes you can add or remove without thinking. Shoes that handle wet pavement matter more than shoes that look perfect. ' +
        '\nDress code is mostly smart-casual everywhere. Jeans and a decent shirt get you into 95% of restaurants and bars. ' +
        '\nNightclubs in cities (especially Manchester, Liverpool, Newcastle, central London) often have strict door policies — no trainers, no sportswear, sometimes no jeans. Check ahead. ' +
        '\nA few traditional restaurants and hotels still require jacket-and-tie (Rules in Covent Garden, the Ritz dining room, some gentlemen\'s clubs). Their websites will say so — believe them, they will turn you away.',
    },
    {
      id: 'photography',
      title: 'Photography',
      emoji: '📷',
      body:
        'Mostly fine. Tourist sites, royal parades, the Changing of the Guard, Trooping the Colour — all photograph-friendly. Big Ben, Tower Bridge, Buckingham Palace, the lot. ' +
        '\nDon\'t loiter photographing government buildings in central London — Whitehall, MI5, MI6, Parliament security perimeters, military installations. Counter-terrorism laws (Section 43/44) allow officers to ask what you\'re doing; they rarely do, but excessive photography of secure buildings will get you a polite-but-firm conversation. Just don\'t. ' +
        '\nTube/Underground photography is technically restricted by TfL bylaws but enforcement is essentially nil unless you\'re using flash or a tripod, or filming for commercial use. ' +
        '\nALWAYS ask before photographing children, even in public — UK norms around this are stricter than most countries, and parents will (rightly) confront you.',
    },
    {
      id: 'language',
      title: 'Language tips',
      emoji: '🗣️',
      body:
        'English is the official language but accents are real and regional and sometimes baffling — Geordie (Newcastle), Scouse (Liverpool), Glaswegian (Glasgow), West Country (Devon/Cornwall), Brummie (Birmingham), Cockney (East London). If you can\'t understand someone, just ask politely — they\'re used to it. ' +
        '\nUseful slang: "cheers" = thanks AND goodbye (and very occasionally "to your health"); "lovely" = okay, fine, great, that\'ll do; "brilliant" = good/fine, not "amazing"; "alright?" = hello; "no worries" / "no bother" = it\'s fine. "Quid" = pound. "Mate" = friend (used loosely, including with strangers in friendly contexts). ' +
        '\nUK vs US English differences worth knowing: lift (elevator), lorry (truck), boot (trunk of a car), bonnet (hood), petrol (gas), pavement (sidewalk), biscuit (cookie), chips (fries), crisps (chips), jumper (sweater), trousers (pants — and "pants" in UK English means underwear, so be careful), queue (line), loo/toilet (restroom — don\'t ask for the "bathroom" in a pub, it\'s odd). ' +
        '\nPoliteness is grammatical. Don\'t say "give me a coffee" — say "could I get a coffee, please?" or "would you mind if I…". The indirect form is the norm; direct requests sound aggressive.',
    },
    {
      id: 'holidays',
      title: 'Public holidays to know',
      emoji: '📅',
      body:
        '1 Jan (New Year\'s Day), Good Friday + Easter Monday (variable, March/April), Early May Bank Holiday (first Mon of May), Spring Bank Holiday (last Mon of May), Summer Bank Holiday (last Mon of August — last Mon of July in Scotland), 25 Dec (Christmas Day), 26 Dec (Boxing Day). Northern Ireland and Scotland have a few extras (St Patrick\'s Day, St Andrew\'s Day, 2 Jan). ' +
        '\nOn Bank Holidays many shops, banks, and offices close, but pubs, restaurants, and most major attractions stay open. Public transport runs on a Sunday/reduced timetable — check before travelling. Boxing Day sales are massive — January\'s used to be the big one, but it\'s shifted earlier. ' +
        '\nBonfire Night (5 November, also called Guy Fawkes Night) is NOT a public holiday but is culturally huge — fireworks, bonfires, sparklers in every town. If you\'re visiting in early November, find a public display. It\'s one of the best nights of the British calendar.',
    },
  ],
};

export default UK_GUIDE;

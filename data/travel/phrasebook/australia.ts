/**
 * Travel Phrasebook — Australia (English).
 *
 * Like the UK entry: target is the actual Aussie phrasing, native is
 * the plain-English explanation of what it means or when to use it.
 * Aussie English has its own slang, a culture of casual address, and
 * a few etiquette landmines visitors don't see coming.
 */

import type { PhrasebookCategory } from './types';

const AUSTRALIA_PHRASEBOOK: PhrasebookCategory[] = [
  {
    id: 'basics',
    title: 'Basics',
    emoji: '👋',
    free: true,
    phrases: [
      { id: 'b01', target: 'G\'day',                               native: 'Hello — works any time, anywhere. "G\'day mate" is the full version' },
      { id: 'b02', target: 'How ya going?',                        native: 'How are you? — a greeting, not a real question. Reply "yeah good, you?"' },
      { id: 'b03', target: 'No worries',                           native: 'You\'re welcome / it\'s fine / no problem — used constantly' },
      { id: 'b04', target: 'Cheers',                               native: 'Thanks (also said when clinking glasses)' },
      { id: 'b05', target: 'Ta',                                   native: 'Casual "thanks" — very common in shops, cafés', phonetic: 'tah' },
      { id: 'b06', target: 'Reckon',                               native: '"I think" — "I reckon we should go" = "I think we should go"' },
      { id: 'b07', target: 'Heaps',                                native: '"Lots of" — "heaps of people", "thanks heaps"' },
      { id: 'b08', target: 'See ya / Catch ya later',              native: 'Casual goodbye' },
    ],
  },
  {
    id: 'food',
    title: 'Food, cafés & pubs',
    emoji: '☕',
    free: true,
    phrases: [
      { id: 'f01', target: 'Flat white',                           native: 'The default Aussie espresso drink — espresso + steamed milk, less foam than a latte' },
      { id: 'f02', target: 'Long black',                           native: 'Espresso shot over hot water — closest to American filter coffee' },
      { id: 'f03', target: 'A schooner of [beer], thanks',         native: 'Medium-size beer (425ml). Smaller "middy"; bigger "pint" exists in some states' },
      { id: 'f04', target: 'Can I get the bill, please?',          native: '"Bill" not "check". Many cafés expect you to pay at the counter on the way out' },
      { id: 'f05', target: 'BYO',                                  native: '"Bring Your Own (wine)" — many restaurants allow it for a small corkage fee' },
      { id: 'f06', target: 'Snag',                                 native: 'Sausage — "throw another snag on the barbie" is real and unironic' },
      { id: 'f07', target: 'Maccas',                               native: 'McDonald\'s. The official name in Australia is McDonald\'s, but no-one says it' },
      { id: 'f08', target: 'Tomato sauce',                         native: 'Ketchup. Don\'t ask for "ketchup" — they\'ll know what you mean but smile' },
      { id: 'f09', target: 'Aussie breakfast',                     native: 'Eggs + bacon + sausage + grilled tomato + mushrooms + toast — pub/café staple' },
      { id: 'f10', target: 'Smashed avo',                          native: 'Avocado on toast — the running joke about millennial spending. Order it' },
    ],
  },
  {
    id: 'transport',
    title: 'Transport & directions',
    emoji: '🚗',
    free: true,
    phrases: [
      { id: 't01', target: 'Opal card',                            native: 'Sydney tap-card for trains, buses, ferries. Melbourne has Myki, Brisbane has Go Card' },
      { id: 't02', target: 'CBD',                                  native: 'Central Business District — what Aussies call downtown. "Heading into the CBD"' },
      { id: 't03', target: 'Servo',                                native: 'Service station / gas station / petrol station' },
      { id: 't04', target: 'Bottle-o',                             native: 'Bottle shop — where you buy alcohol (NOT sold in supermarkets in most states)' },
      { id: 't05', target: 'Maccas run',                           native: 'Trip to McDonald\'s — usually late-night, often drive-thru' },
      { id: 't06', target: 'Arvo',                                 native: '"Afternoon" — "see you this arvo"' },
      { id: 't07', target: 'How far is it?',                       native: 'Distances are vast. "Just down the road" might be 50km in the Outback' },
      { id: 't08', target: 'Roo crossing',                         native: 'Kangaroos crossing — common road sign in rural Australia, especially at dusk' },
    ],
  },
  {
    id: 'beach',
    title: 'Beach & outdoors',
    emoji: '🏖️',
    free: true,
    phrases: [
      { id: 'o01', target: 'Slip Slop Slap',                       native: 'Sun-safety motto: slip on a shirt, slop on sunscreen, slap on a hat. Australian sun burns hard' },
      { id: 'o02', target: 'Swim between the flags',               native: 'Lifeguarded zone at patrolled beaches — red and yellow flags. Outside them = no rescue' },
      { id: 'o03', target: 'Bushwalk',                             native: 'Hike / trek through the bush (forested or rural land). Different to "hiking" connotation' },
      { id: 'o04', target: 'Esky',                                 native: 'Cooler / ice-box — central to any barbie or beach trip' },
      { id: 'o05', target: 'Thongs',                               native: 'Flip-flops. Yes, you will hear "I left my thongs at the door" — NOT what an American thinks' },
      { id: 'o06', target: 'Stinger season',                       native: 'Oct-May in northern Australia — jellyfish (irukandji, box). Swim only in stinger nets' },
      { id: 'o07', target: 'Fair dinkum',                          native: 'Genuine / real / authentic — "is this fair dinkum?" = "is this real?"' },
      { id: 'o08', target: 'Sunnies',                              native: 'Sunglasses — Australian sun is intense year-round' },
    ],
  },
  {
    id: 'social',
    title: 'Mateship & small talk',
    emoji: '🍺',
    free: true,
    phrases: [
      { id: 's01', target: 'Mate',                                 native: 'Universal friendly address — strangers, friends, the barista. Not just for men' },
      { id: 's02', target: 'How\'s your weekend been?',             native: 'Standard Mon-morning ice-breaker. Acceptable reply: "yeah, pretty good thanks"' },
      { id: 's03', target: 'Sort yourself out',                    native: 'Get yourself ready / organised — "sort yourself out a beer" = "grab yourself one"' },
      { id: 's04', target: 'She\'ll be right',                     native: 'It will be fine / don\'t worry about it. National philosophy' },
      { id: 's05', target: 'Going off',                            native: 'Something is loud / exciting / out of control — "the pub is going off"' },
      { id: 's06', target: 'Shout',                                native: 'Round of drinks paid by one person. "My shout" = I\'m buying. Reciprocate on the next round' },
      { id: 's07', target: 'Bring a plate',                        native: 'BYO food contribution to a gathering — bring a dish to share, not literally a plate' },
      { id: 's08', target: 'Knock-off',                            native: 'End of work — "knock-off time" = "finishing time"' },
    ],
  },
  {
    id: 'emergency',
    title: 'Emergency',
    emoji: '🚨',
    free: true,
    phrases: [
      { id: 'e01', target: 'Triple zero (000)',                    native: 'Australian emergency number — police, ambulance, fire. 112 also works on mobiles' },
      { id: 'e02', target: 'I need an ambulance',                  native: 'Ambulance ride is NOT free unless covered by health insurance — can be $1000+' },
      { id: 'e03', target: 'Bushfire warning',                     native: 'Take seriously — check the Fires Near Me NSW / equivalent app for the state you\'re in' },
      { id: 'e04', target: 'I\'ve been bitten by a [snake/spider]', native: 'Australia has the world\'s most venomous snakes. Stay still, call 000, photograph the snake if safe' },
      { id: 'e05', target: 'Chemist',                              native: 'Pharmacy / drugstore — Chemist Warehouse and Priceline are common chains' },
      { id: 'e06', target: 'Medicare',                             native: 'Australia\'s public health system — you need travel insurance unless reciprocal cover applies' },
    ],
  },
  {
    id: 'money',
    title: 'Money & shopping',
    emoji: '💰',
    free: true,
    phrases: [
      { id: 'm01', target: 'Tap to pay',                           native: 'Contactless card payment — universal in Australia. Cash is now rare in cities' },
      { id: 'm02', target: 'No tipping needed',                    native: 'Tipping is NOT expected (minimum wage is high). Some round up the bill in restaurants — optional' },
      { id: 'm03', target: 'GST included',                         native: '10% Goods & Services Tax is included in the displayed price — what you see is what you pay' },
      { id: 'm04', target: 'Public holiday surcharge',              native: 'Restaurants/cafés add 10-15% on Sundays + public holidays. Look for it on the menu' },
      { id: 'm05', target: 'Got a hot tip?',                       native: 'In gambling contexts — horse racing, lotteries. Australians punt a lot' },
      { id: 'm06', target: 'Buggered',                             native: 'Broken / exhausted — "the printer\'s buggered" = "it\'s broken"' },
    ],
  },
];

export default AUSTRALIA_PHRASEBOOK;

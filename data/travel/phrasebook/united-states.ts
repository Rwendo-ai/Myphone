/**
 * Travel Phrasebook — United States (English).
 *
 * Target is the American phrasing, native is the plain-English
 * explanation. The US is huge and regional — the South, the West, the
 * Midwest, New England all have their own slang. Phrases here are
 * standard American English unless flagged regional.
 */

import type { PhrasebookCategory } from './types';

const UNITED_STATES_PHRASEBOOK: PhrasebookCategory[] = [
  {
    id: 'basics',
    title: 'Basics',
    emoji: '👋',
    free: true,
    phrases: [
      { id: 'b01', target: 'Hi / Hey',                             native: 'Casual hello — "hey" is more common in conversation, "hi" is universal' },
      { id: 'b02', target: 'How are you doing?',                   native: 'Standard greeting. Reply: "good, thanks, you?" — short and reciprocal' },
      { id: 'b03', target: 'What\'s up?',                          native: 'Casual greeting (not literally "what is happening"). Reply: "not much, you?"' },
      { id: 'b04', target: 'You\'re welcome / No problem',         native: 'Reply to thanks. "No problem" is more casual; older generations prefer "you\'re welcome"' },
      { id: 'b05', target: 'Excuse me',                            native: 'Used for getting attention, apology, "let me pass" — three meanings, same words' },
      { id: 'b06', target: 'Sure',                                 native: '"Yes" — extremely common reply. "Sure, sure thing, of course"' },
      { id: 'b07', target: 'Awesome',                              native: 'Default positive reaction — "awesome, great, perfect". US English uses it constantly' },
      { id: 'b08', target: 'Have a nice day',                      native: 'Standard service farewell. Generic but always meant warmly. Reply: "you too, thanks"' },
    ],
  },
  {
    id: 'food',
    title: 'Restaurants & cafés',
    emoji: '🍔',
    free: true,
    phrases: [
      { id: 'f01', target: 'Can I get a coffee, please?',          native: '"Coffee" by default = filter / drip coffee. Espresso = ask for "espresso shot"' },
      { id: 'f02', target: 'To go / for here',                     native: 'Take away vs eat in. Cashier always asks. "To go" = US, "to take away" = elsewhere' },
      { id: 'f03', target: 'Check, please',                        native: 'Ask for the bill. Server brings it to your table — they will not bring unless asked' },
      { id: 'f04', target: '20% tip is standard',                  native: 'Tipping in the US is essentially mandatory — 18-20% for good service. Less = bad signal' },
      { id: 'f05', target: 'Soda / pop / Coke',                    native: 'Carbonated soft drink. "Soda" = East Coast/West. "Pop" = Midwest. "Coke" = South (any soft drink)' },
      { id: 'f06', target: 'Cookie',                               native: 'Biscuit. (UK "biscuit" = sweet cookie; US "biscuit" = a soft savoury bread)' },
      { id: 'f07', target: 'Sub / hoagie / grinder',               native: 'Submarine sandwich. Name depends on region — same thing' },
      { id: 'f08', target: 'Half-and-half',                        native: 'Coffee creamer — half milk, half cream. "Cream and sugar?" is the standard offer' },
      { id: 'f09', target: 'Sunny side up / over easy',            native: 'Egg preparations — "sunny side up" = yolk visible, "over easy" = flipped briefly' },
      { id: 'f10', target: 'Bring me the dressing on the side',    native: 'Common request — salad dressing in a separate cup so you control the amount' },
    ],
  },
  {
    id: 'transport',
    title: 'Transport & directions',
    emoji: '🚗',
    free: true,
    phrases: [
      { id: 't01', target: 'Subway',                               native: 'Underground / metro train — NYC, Boston, DC, Chicago. Don\'t say "Tube"' },
      { id: 't02', target: 'Yellow cab',                           native: 'Traditional NYC taxi. Uber/Lyft have largely replaced them in most cities' },
      { id: 't03', target: 'Gas station',                          native: 'Petrol station. "Gas" not "petrol". Major chains: Shell, Chevron, Exxon, BP' },
      { id: 't04', target: 'Highway / Freeway / Interstate',       native: '"Highway" = most regions. "Freeway" = California / west coast. "I-95" = Interstate 95' },
      { id: 't05', target: 'Stop sign',                            native: 'Mandatory full stop at four-way intersections. Don\'t roll through — common ticket' },
      { id: 't06', target: 'Right on red',                         native: 'You can turn right on a red light (after stopping) in most states, unless signed otherwise' },
      { id: 't07', target: 'Carpool lane',                         native: 'Highway lane reserved for cars with 2+ passengers. Marked with a diamond' },
      { id: 't08', target: 'Tolls',                                native: 'Many highways are tolled — EZ-Pass / SunPass etc. handle automatically. Rental cars charge for transponders' },
    ],
  },
  {
    id: 'money',
    title: 'Money & tipping',
    emoji: '💵',
    free: true,
    phrases: [
      { id: 'm01', target: '15-20% tip on the pre-tax total',      native: 'Restaurant servers — 20% is the norm in cities. 15% if service was poor. Tipping is income' },
      { id: 'm02', target: '$1-2 per drink at a bar',              native: 'Bartender tip — even for a beer. Card or cash, but bartenders prefer cash' },
      { id: 'm03', target: '15-20% in cabs / Uber',                native: 'Add a tip when paying. Uber app prompts you' },
      { id: 'm04', target: '$1-2 per bag for hotel porters',       native: 'Bellhop tip when they take your bag to the room' },
      { id: 'm05', target: 'Tax is added at checkout',              native: 'Unlike Europe / Australia, US sales tax is NOT included in displayed prices. Add ~5-10% (varies by state)' },
      { id: 'm06', target: 'Dollar',                               native: 'Just "dollar" — "bucks" is casual ("ten bucks"). Banknotes: $1, $5, $10, $20, $50, $100' },
    ],
  },
  {
    id: 'shopping',
    title: 'Shopping & retail',
    emoji: '🛍️',
    free: true,
    phrases: [
      { id: 's01', target: 'Mall',                                 native: 'Shopping mall — anchor of US suburban retail. "I\'ll meet you at the mall"' },
      { id: 's02', target: 'Sneakers',                             native: 'Athletic shoes / trainers. Universally "sneakers", though "tennis shoes" used too' },
      { id: 's03', target: 'Pants',                                native: 'US: trousers. UK: underwear. Get this one wrong and people will laugh' },
      { id: 's04', target: 'Cell phone / mobile',                  native: 'Cell phone is the standard US term. "Cellphone bill, cellphone service"' },
      { id: 's05', target: 'Restroom',                             native: 'Polite term for toilet/bathroom in public spaces. "Where\'s the restroom?"' },
      { id: 's06', target: 'Cart',                                 native: 'Shopping cart (US) = trolley (UK/AU)' },
      { id: 's07', target: 'Black Friday',                         native: 'Day after Thanksgiving (late Nov) — biggest sale day of the year. Cyber Monday follows' },
      { id: 's08', target: 'Outlet mall',                          native: 'Discount mall outside cities — brand-name retailers at 30-70% off. Worth the drive' },
    ],
  },
  {
    id: 'emergency',
    title: 'Emergency',
    emoji: '🚨',
    free: true,
    phrases: [
      { id: 'e01', target: 'Call 911',                             native: 'US emergency number — police, ambulance, fire. State your location FIRST' },
      { id: 'e02', target: 'ER / Emergency Room',                  native: 'Hospital emergency department. Walk in or arrive by ambulance' },
      { id: 'e03', target: 'I don\'t have US insurance',           native: 'Crucial to say — US healthcare is expensive without insurance. ER visit = $1000+, ambulance = $1500+' },
      { id: 'e04', target: 'CVS / Walgreens / Rite Aid',           native: 'Major pharmacy chains — 24/7 in many cities. Buy over-the-counter meds without prescription' },
      { id: 'e05', target: 'Lost my passport',                     native: 'Contact your country\'s embassy/consulate. Most major cities have one' },
      { id: 'e06', target: 'I feel sick / I don\'t feel good',     native: 'Standard phrasing. Don\'t say "I feel unwell" — sounds formal/odd to American ears' },
    ],
  },
  {
    id: 'social',
    title: 'Small talk & social',
    emoji: '🤝',
    free: true,
    phrases: [
      { id: 'o01', target: 'Where are you from?',                  native: 'Standard ice-breaker. Americans ask freely — not rude. Reply with country, then city' },
      { id: 'o02', target: 'What do you do?',                      native: 'Means: what\'s your job? Common second question after "where are you from?"' },
      { id: 'o03', target: 'Y\'all',                               native: '"You all" — Southern US (and increasingly nationwide). Plural "you"' },
      { id: 'o04', target: 'Oh my god',                            native: 'Used constantly for surprise / emphasis. Not generally religious' },
      { id: 'o05', target: 'Take care',                            native: 'Casual goodbye — friendly, slightly more meaningful than "see ya"' },
      { id: 'o06', target: 'Bless your heart',                     native: 'Southern phrase — can be sincere kindness OR pity-disguised-as-kindness. Context matters' },
      { id: 'o07', target: 'Touch base',                           native: 'Business-speak for "follow up" / "check in". You\'ll hear it a lot in offices' },
      { id: 'o08', target: 'Have a good one',                      native: 'Common service farewell — "have a good day/evening/weekend". Reply: "you too"' },
    ],
  },
];

export default UNITED_STATES_PHRASEBOOK;

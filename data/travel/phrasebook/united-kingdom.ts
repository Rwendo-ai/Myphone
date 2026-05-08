/**
 * Travel Phrasebook — United Kingdom (English).
 *
 * The UK is unusual in this app: the "language" is English, which most
 * travellers technically already speak. The real friction is cultural —
 * British politeness norms, pub etiquette, the Tube, queueing, and the
 * dozens of British-isms that mean nothing to a Shona / Tagalog / French /
 * Mandarin speaker who learned American English.
 *
 * So the `target` column is the phrase as a Brit would actually say it,
 * and the `native` column is the plain-English explanation of what it
 * means or when to use it. Phonetic is reserved for words that look
 * nothing like they sound (Leicester, Worcestershire, Edinburgh).
 *
 * `audioPath` is filled in once we generate ElevenLabs MP3s (Phase 2).
 */

import type { PhrasebookCategory } from './types';

const UK_PHRASEBOOK: PhrasebookCategory[] = [
  {
    id: 'basics',
    title: 'Basics',
    emoji: '👋',
    free: true,
    phrases: [
      { id: 'b01', target: 'Hello / Hiya',                      native: 'Hello (any time of day; "hiya" is casual)' },
      { id: 'b02', target: 'You alright?',                      native: 'How are you? (a greeting, not a real question — answer "yeah, you?")' },
      { id: 'b03', target: 'Cheers',                            native: 'Thanks / goodbye / no worries — used constantly' },
      { id: 'b04', target: 'Ta',                                native: 'Thanks (very casual, mostly northern England)',                phonetic: 'tah' },
      { id: 'b05', target: 'Sorry',                             native: 'Used for "excuse me", "pardon?", and actual apology — say it often' },
      { id: 'b06', target: 'Yes please / no thanks',            native: 'Always add "please" or "thanks" — bare yes/no sounds rude' },
      { id: 'b07', target: 'No worries',                        native: '"You are welcome" / "it is fine" — common reply to thanks' },
      { id: 'b08', target: 'See you later',                     native: 'Casual goodbye (does NOT mean later today — just "bye")' },
    ],
  },
  {
    id: 'airport',
    title: 'Airport & transport',
    emoji: '🛫',
    free: true,
    phrases: [
      { id: 't01', target: 'Where is the taxi rank?',           native: 'Where can I find a taxi? ("rank" = taxi queue/stand)' },
      { id: 't02', target: 'Can I get an Oyster card, please?', native: 'Tap-card for the London Tube and buses — cheaper than paper tickets' },
      { id: 't03', target: 'Mind the gap',                      native: 'You will hear this on the Tube — step over the gap to the platform' },
      { id: 't04', target: 'Stand on the right',                native: 'Escalator rule on the Underground — left side is for walking' },
      { id: 't05', target: 'Single to King’s Cross, please', native: 'A one-way ticket ("single" = one-way, "return" = round-trip)' },
      { id: 't06', target: 'Could you stop here, please?',      native: 'Polite way to ask a taxi/Uber driver to stop — always add "please"' },
    ],
  },
  {
    id: 'food',
    title: 'Food, pubs & cafés',
    emoji: '🍽️',
    free: true,
    phrases: [
      { id: 'f01', target: 'A pint of lager, please',           native: 'Order at the bar — they do not bring menus to your table in pubs' },
      { id: 'f02', target: 'Can I get a tap water, please?',    native: 'Tap water is free everywhere — you must specify "tap" or they bring bottled' },
      { id: 'f03', target: 'I’m vegetarian / I’m vegan', native: 'Standard — most menus mark dishes "v" or "ve"' },
      { id: 'f04', target: 'Could we have the bill, please?',   native: '"Bill" not "check" — and they will not bring it until you ask' },
      { id: 'f05', target: 'Shall I start a tab?',              native: 'Pub staff may ask this — means leave your card and pay at the end' },
      { id: 'f06', target: 'Builder’s tea, please',         native: 'Strong black tea with milk — the standard British cuppa' },
    ],
  },
  {
    id: 'emergency',
    title: 'Emergency',
    emoji: '🚨',
    free: true,
    phrases: [
      { id: 'e01', target: 'Help!',                              native: 'Universal — same in any UK city' },
      { id: 'e02', target: 'Call 999',                           native: 'UK emergency number for police, ambulance, fire (also 112 works)' },
      { id: 'e03', target: 'I need a doctor / I need an ambulance', native: 'NHS A&E ("Accident & Emergency") = the ER' },
      { id: 'e04', target: 'I’ve been robbed',              native: 'Report at any police station, or call 101 (non-emergency police)' },
      { id: 'e05', target: 'I feel unwell',                      native: 'Common phrasing — "unwell" sounds less alarming than "sick"' },
      { id: 'e06', target: 'Where is the nearest chemist?',      native: '"Chemist" = pharmacy/drugstore — Boots is the big chain' },
    ],
  },
  {
    id: 'directions',
    title: 'Directions',
    emoji: '🧭',
    free: false,
    phrases: [
      { id: 'd01', target: 'Excuse me, where is…?',         native: 'Always start with "excuse me" — never just point and ask' },
      { id: 'd02', target: 'How do I get to…?',             native: 'Standard way to ask for directions to a place' },
      { id: 'd03', target: 'Is it within walking distance?',     native: 'British understatement — "yeah, ten minutes" can mean 30' },
      { id: 'd04', target: 'I’m lost',                      native: 'Locals are usually genuinely helpful if you ask politely' },
      { id: 'd05', target: 'Left / right / straight on',         native: '"Straight on" not "straight ahead" — and watch for roundabouts' },
      { id: 'd06', target: 'On the pavement',                    native: '"Pavement" = sidewalk. The "footpath" is a countryside walking trail' },
    ],
  },
  {
    id: 'hotel',
    title: 'Hotel & stays',
    emoji: '🏨',
    free: false,
    phrases: [
      { id: 'h01', target: 'I have a booking under…',       native: '"Booking" not "reservation" — both work but "booking" is standard' },
      { id: 'h02', target: 'What’s the Wi-Fi password?',    native: 'Usually free; sometimes printed on a card at reception' },
      { id: 'h03', target: 'Could I see the room first?',        native: 'Polite phrasing — "could I" is softer than "can I"' },
      { id: 'h04', target: 'I’d like to check out, please', native: 'Checkout is usually 10 or 11am — ask about late checkout if needed' },
      { id: 'h05', target: 'There’s no hot water',          native: 'Older buildings have boilers that run out — reception can usually fix it' },
    ],
  },
  {
    id: 'manners',
    title: 'Manners & culture',
    emoji: '🤲',
    free: false,
    phrases: [
      { id: 'm01', target: 'Please / thank you',                 native: 'Add to every request, every time — non-negotiable in the UK' },
      { id: 'm02', target: 'Sorry, could I just squeeze past?',  native: 'Apologise even when it is not your fault — it is the British way' },
      { id: 'm03', target: 'After you',                          native: 'Let others go first — through doors, at queues, on stairs' },
      { id: 'm04', target: 'Are you in the queue?',              native: 'NEVER skip a queue — ask if unsure where it ends',                phonetic: 'kyoo' },
      { id: 'm05', target: 'Lovely, thanks',                     native: 'Generic positive reply — "lovely" is used for anything pleasant' },
      { id: 'm06', target: 'No, you’re alright, thanks',    native: 'Polite refusal — "I’m alright" means "no thank you"' },
    ],
  },
  {
    id: 'numbers',
    title: 'Numbers & money',
    emoji: '💷',
    free: false,
    phrases: [
      { id: 'n01', target: 'Under twenty quid',                  native: '"Quid" = pounds (£). "A fiver" = £5, "a tenner" = £10' },
      { id: 'n02', target: 'Do you take card?',                  native: 'Almost everywhere does — contactless tap is the norm, even for £1' },
      { id: 'n03', target: 'Have you got change for a twenty?',  native: 'Smaller shops may not — supermarkets always do' },
      { id: 'n04', target: 'Contactless, please',                native: 'Tap your card or phone — Apple Pay / Google Pay accepted nearly everywhere' },
      { id: 'n05', target: 'How much is that, please?',          native: 'Always end with "please" — even at self-checkout staff hear you' },
    ],
  },
];

export default UK_PHRASEBOOK;

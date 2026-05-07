/**
 * Travel Phrasebook — Zimbabwe (Shona).
 *
 * Curated for the traveller, not the language learner — these are the 50
 * phrases someone needs in their first 48 hours on the ground. Grouped by
 * situation. The free tier surfaces the first 20 (basics + emergency);
 * the full set unlocks when the user owns the corresponding language course.
 *
 * `audioPath` is filled in once we generate ElevenLabs MP3s (Phase 2).
 * Until then the phrasebook reads silently — we still ship the text so the
 * phrasebook is useful immediately.
 */

import type { TravelPhrase, PhrasebookCategory } from './types';

const ZIMBABWE_PHRASEBOOK: PhrasebookCategory[] = [
  {
    id: 'basics',
    title: 'Basics',
    emoji: '👋',
    free: true,
    phrases: [
      { id: 'b01', target: 'Mhoro', native: 'Hello',                          phonetic: 'mm-HO-roh' },
      { id: 'b02', target: 'Makadii?', native: 'How are you?',                phonetic: 'mah-KAH-dee' },
      { id: 'b03', target: 'Ndiri bho', native: "I'm well",                   phonetic: 'ndee-ree bo' },
      { id: 'b04', target: 'Ndatenda', native: 'Thank you',                   phonetic: 'nda-TEN-da' },
      { id: 'b05', target: 'Pamusoroi', native: 'Excuse me / sorry',          phonetic: 'pa-moo-SOH-roy' },
      { id: 'b06', target: 'Ehe', native: 'Yes' },
      { id: 'b07', target: 'Kwete', native: 'No' },
      { id: 'b08', target: 'Sara zvakanaka', native: 'Goodbye (to one staying)', phonetic: 'SAH-ra zvah-kah-NAH-ka' },
    ],
  },
  {
    id: 'airport',
    title: 'Airport & taxi',
    emoji: '🛫',
    free: true,
    phrases: [
      { id: 't01', target: 'Ndingawane sei taxi?', native: 'Where can I find a taxi?' },
      { id: 't02', target: 'Endai kuHarare', native: 'Take me to Harare' },
      { id: 't03', target: 'Marii?', native: 'How much?',                     phonetic: 'mah-REE' },
      { id: 't04', target: 'Zvakawandisa', native: "That's too much" },
      { id: 't05', target: 'Ndapota chinjai', native: 'Please give me change' },
      { id: 't06', target: 'Mira pano', native: 'Stop here' },
    ],
  },
  {
    id: 'food',
    title: 'Food & market',
    emoji: '🍽️',
    free: true,
    phrases: [
      { id: 'f01', target: 'Ndinoda kudya', native: 'I want to eat' },
      { id: 'f02', target: 'Mvura, ndapota', native: 'Water, please' },
      { id: 'f03', target: 'Sadza neyo?', native: 'What goes with the sadza?' },
      { id: 'f04', target: 'Inongotapira chete', native: 'Just a little spicy' },
      { id: 'f05', target: 'Ndakaguta', native: "I'm full" },
      { id: 'f06', target: 'Bhirari, ndapota', native: 'The bill, please' },
    ],
  },
  {
    id: 'emergency',
    title: 'Emergency',
    emoji: '🚨',
    free: true,
    phrases: [
      { id: 'e01', target: 'Ndobatsirei!', native: 'Help me!' },
      { id: 'e02', target: 'Ndinoda chiremba', native: 'I need a doctor' },
      { id: 'e03', target: 'Ndarwara', native: "I'm sick" },
      { id: 'e04', target: 'Mapurisa', native: 'Police' },
      { id: 'e05', target: 'Ndabirwa', native: "I've been robbed" },
      { id: 'e06', target: 'Ndinoda hembe', native: 'I need an ambulance' },
    ],
  },
  {
    id: 'directions',
    title: 'Directions',
    emoji: '🧭',
    free: false,
    phrases: [
      { id: 'd01', target: 'Kupi?', native: 'Where?' },
      { id: 'd02', target: 'Iri kupi?', native: 'Where is it?' },
      { id: 'd03', target: 'Iri pedyo here?', native: 'Is it close?' },
      { id: 'd04', target: 'Ndiri kurasika', native: "I'm lost" },
      { id: 'd05', target: 'Ndinotambira sei?', native: 'How do I get there?' },
      { id: 'd06', target: 'Kuruboshwe / kurudyi', native: 'Left / right' },
    ],
  },
  {
    id: 'hotel',
    title: 'Hotel & stays',
    emoji: '🏨',
    free: false,
    phrases: [
      { id: 'h01', target: 'Ndine reservation', native: 'I have a reservation' },
      { id: 'h02', target: 'Pane Wi-Fi here?', native: 'Is there Wi-Fi?' },
      { id: 'h03', target: 'Ndinoda kuona kamuri', native: 'I want to see the room' },
      { id: 'h04', target: 'Ndichabuda mangwana', native: "I'll check out tomorrow" },
      { id: 'h05', target: 'Pasina mvura inopisa', native: 'There is no hot water' },
    ],
  },
  {
    id: 'manners',
    title: 'Manners & culture',
    emoji: '🤲',
    free: false,
    phrases: [
      { id: 'm01', target: 'Ndapota', native: 'Please' },
      { id: 'm02', target: 'Pamusoroi', native: 'Excuse me (to elders)' },
      { id: 'm03', target: 'Tapindirana', native: "Pleased to meet you" },
      { id: 'm04', target: 'Ndinokuremekedzai', native: 'I respect you' },
      { id: 'm05', target: 'Mauya', native: 'Welcome (to a guest)' },
      { id: 'm06', target: 'Famba zvakanaka', native: 'Travel well' },
    ],
  },
  {
    id: 'numbers',
    title: 'Numbers & money',
    emoji: '💵',
    free: false,
    phrases: [
      { id: 'n01', target: 'Pasi pemadhora mashanu', native: 'Under five dollars' },
      { id: 'n02', target: 'Ndine madhora gumi', native: 'I have ten dollars' },
      { id: 'n03', target: 'Ndingatenge nemari ipi?', native: 'What can I pay with?' },
      { id: 'n04', target: 'Munogamuchira USD here?', native: 'Do you accept USD?' },
      { id: 'n05', target: 'Pamhembe pemari yenyu', native: 'Beside your money (= bring change)' },
    ],
  },
];

export default ZIMBABWE_PHRASEBOOK;

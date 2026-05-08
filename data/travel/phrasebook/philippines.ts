/**
 * Travel Phrasebook — Philippines (Tagalog / Filipino).
 *
 * Curated for the traveller, not the language learner — these are the ~48
 * phrases someone needs in their first 48 hours on the ground. Grouped by
 * situation. The free tier surfaces the first four categories (basics +
 * airport + food + emergency); the full set unlocks when the user owns
 * the corresponding language course.
 *
 * Notes on Filipino usage:
 *  - "po" and "opo" are respect markers — adding "po" at the end of any
 *    sentence is the single biggest signal of politeness, especially when
 *    addressing elders or strangers. Travellers should over-use "po", not
 *    under-use it.
 *  - Taglish (mixing Tagalog + English) is normal and expected — locals
 *    code-switch constantly. Phrases below reflect what people actually say.
 *  - "Para po!" is the universal jeepney-stop call.
 *
 * `audioPath` is filled in once we generate ElevenLabs MP3s (Phase 2).
 */

import type { PhrasebookCategory } from './types';

const PHILIPPINES_PHRASEBOOK: PhrasebookCategory[] = [
  {
    id: 'basics',
    title: 'Basics',
    emoji: '👋',
    free: true,
    phrases: [
      { id: 'b01', target: 'Kumusta', native: 'Hello / How are you?',         phonetic: 'koo-MOOS-tah' },
      { id: 'b02', target: 'Mabuti naman, salamat', native: "I'm well, thanks", phonetic: 'mah-BOO-tee nah-MAHN, sah-LAH-maht' },
      { id: 'b03', target: 'Salamat po', native: 'Thank you (polite)',         phonetic: 'sah-LAH-maht poh' },
      { id: 'b04', target: 'Paalam', native: 'Goodbye',                        phonetic: 'pah-AH-lahm' },
      { id: 'b05', target: 'Oo', native: 'Yes',                                phonetic: 'OH-oh' },
      { id: 'b06', target: 'Hindi', native: 'No',                              phonetic: 'hin-DEE' },
      { id: 'b07', target: 'Ingat', native: 'Take care',                       phonetic: 'EE-ngaht' },
      { id: 'b08', target: 'Walang anuman', native: "You're welcome",          phonetic: 'wah-LAHNG ah-noo-MAHN' },
    ],
  },
  {
    id: 'airport',
    title: 'Airport & jeepney',
    emoji: '🛫',
    free: true,
    phrases: [
      { id: 't01', target: 'Saan po ang taxi?', native: 'Where is the taxi?',  phonetic: 'sah-AHN poh ahng TAHK-see' },
      { id: 't02', target: 'Pumupunta ba ito sa Makati?', native: 'Does this go to Makati?' },
      { id: 't03', target: 'Magkano po?', native: 'How much?',                 phonetic: 'mahg-KAH-noh poh' },
      { id: 't04', target: 'Para po!', native: 'Stop here, please! (jeepney)', phonetic: 'PAH-rah poh' },
      { id: 't05', target: 'Tigil dito, salamat', native: 'Stop here, thanks' },
      { id: 't06', target: 'Bayad po', native: "Here's my fare (passing it forward on the jeepney)", phonetic: 'BAH-yahd poh' },
    ],
  },
  {
    id: 'food',
    title: 'Food & carinderia',
    emoji: '🍽️',
    free: true,
    phrases: [
      { id: 'f01', target: 'Gusto kong kumain', native: 'I want to eat',       phonetic: 'goos-TOH kohng koo-MAH-in' },
      { id: 'f02', target: 'Tubig po, paki', native: 'Water, please',          phonetic: 'TOO-big poh, PAH-kee' },
      { id: 'f03', target: 'Isang halo-halo po', native: 'One halo-halo, please' },
      { id: 'f04', target: 'May allergy ako sa mani', native: "I'm allergic to peanuts" },
      { id: 'f05', target: 'Hindi masyadong maanghang', native: 'Not too spicy' },
      { id: 'f06', target: 'Bayad na po', native: 'The bill, please',          phonetic: 'BAH-yahd nah poh' },
    ],
  },
  {
    id: 'emergency',
    title: 'Emergency',
    emoji: '🚨',
    free: true,
    phrases: [
      { id: 'e01', target: 'Tulong!', native: 'Help!',                         phonetic: 'TOO-lohng' },
      { id: 'e02', target: 'May sakit ako', native: "I'm sick",                phonetic: 'my SAH-kit AH-koh' },
      { id: 'e03', target: 'Kailangan ko ng doktor', native: 'I need a doctor' },
      { id: 'e04', target: 'Tawagin ang pulis', native: 'Call the police' },
      { id: 'e05', target: 'Tawagin ang ambulansya', native: 'Call an ambulance' },
      { id: 'e06', target: 'Ninakawan ako', native: "I've been robbed" },
    ],
  },
  {
    id: 'directions',
    title: 'Directions',
    emoji: '🧭',
    free: false,
    phrases: [
      { id: 'd01', target: 'Nasaan po?', native: 'Where is it?',               phonetic: 'nah-sah-AHN poh' },
      { id: 'd02', target: 'Paano pumunta sa...?', native: 'How do I get to...?' },
      { id: 'd03', target: 'Kaliwa', native: 'Left',                           phonetic: 'kah-lee-WAH' },
      { id: 'd04', target: 'Kanan', native: 'Right',                           phonetic: 'KAH-nahn' },
      { id: 'd05', target: 'Diretso lang', native: 'Straight ahead' },
      { id: 'd06', target: 'Naliligaw ako', native: "I'm lost",                phonetic: 'nah-lee-LEE-gow AH-koh' },
    ],
  },
  {
    id: 'hotel',
    title: 'Hotel & stays',
    emoji: '🏨',
    free: false,
    phrases: [
      { id: 'h01', target: 'May reservation ako', native: 'I have a reservation' },
      { id: 'h02', target: 'May Wi-Fi po ba?', native: 'Is there Wi-Fi?' },
      { id: 'h03', target: 'Pwede bang makita ang kuwarto?', native: 'May I see the room?' },
      { id: 'h04', target: 'Anong oras ang check-out?', native: 'What time is check-out?' },
      { id: 'h05', target: 'Walang mainit na tubig', native: 'There is no hot water' },
    ],
  },
  {
    id: 'manners',
    title: 'Manners & "po"',
    emoji: '🤲',
    free: false,
    phrases: [
      { id: 'm01', target: 'Po', native: 'Respect marker — add to the end of any sentence', phonetic: 'poh' },
      { id: 'm02', target: 'Opo', native: 'Yes (respectful, to elders)',       phonetic: 'OH-poh' },
      { id: 'm03', target: 'Pasensya na po', native: "Sorry / I'm sorry (polite)", phonetic: 'pah-SEHN-shah nah poh' },
      { id: 'm04', target: 'Paumanhin po', native: 'Excuse me / pardon me',    phonetic: 'pah-oo-mahn-HEEN poh' },
      { id: 'm05', target: 'Pakiusap', native: 'Please (when asking a favour)', phonetic: 'pah-kee-OO-sahp' },
      { id: 'm06', target: 'Mabuhay!', native: 'Welcome! / Long live!',        phonetic: 'mah-BOO-hai' },
    ],
  },
  {
    id: 'numbers',
    title: 'Numbers & money',
    emoji: '💵',
    free: false,
    phrases: [
      { id: 'n01', target: 'Pasok lang sa P500', native: 'Within a 500-peso budget' },
      { id: 'n02', target: 'Tatanggap ba kayo ng card?', native: 'Do you accept card?' },
      { id: 'n03', target: 'Pwede bang baryahin?', native: 'Can you break this into smaller change?' },
      { id: 'n04', target: 'Wala akong barya', native: "I don't have small change" },
      { id: 'n05', target: 'Magkano lahat?', native: 'How much is the total?' },
    ],
  },
];

export default PHILIPPINES_PHRASEBOOK;

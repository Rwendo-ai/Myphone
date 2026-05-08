/**
 * Travel Phrasebook — France (French).
 *
 * Curated for the traveller, not the language learner — these are the 48
 * phrases someone needs in their first 48 hours on the ground. Grouped by
 * situation. The free tier surfaces the first 26 (basics + airport + food +
 * emergency); the full set unlocks when the user owns the corresponding
 * language course.
 *
 * Politeness rule for France: ALWAYS open with "Bonjour" before asking
 * anything — entering a shop, stopping a stranger, addressing a waiter.
 * Skipping the greeting is the single biggest faux pas a visitor makes.
 *
 * "Vous" (formal) is used here by default — travellers should stick with
 * vous for anyone they don't know. "Tu" is reserved for friends, family,
 * and children. Using "tu" with a stranger reads as rude.
 *
 * `audioPath` is filled in once we generate ElevenLabs MP3s (Phase 2).
 * Until then the phrasebook reads silently — we still ship the text so the
 * phrasebook is useful immediately.
 */

import type { PhrasebookCategory } from './types';

const FRANCE_PHRASEBOOK: PhrasebookCategory[] = [
  {
    id: 'basics',
    title: 'Basics',
    emoji: '👋',
    free: true,
    phrases: [
      { id: 'b01', target: 'Bonjour',          native: 'Hello / Good day (always start with this)', phonetic: 'bohn-ZHOOR' },
      { id: 'b02', target: 'Bonsoir',          native: 'Good evening (after ~6pm)',                 phonetic: 'bohn-SWAHR' },
      { id: 'b03', target: 'Ça va ?',          native: 'How are you? / How is it?',                 phonetic: 'sah VAH' },
      { id: 'b04', target: 'Ça va bien, merci', native: "I'm well, thanks",                          phonetic: 'sah vah bee-AN, mair-SEE' },
      { id: 'b05', target: 'Merci beaucoup',   native: 'Thank you very much',                        phonetic: 'mair-SEE bo-KOO' },
      { id: 'b06', target: 'Oui',              native: 'Yes',                                        phonetic: 'WEE' },
      { id: 'b07', target: 'Non',              native: 'No',                                         phonetic: 'NOH' },
      { id: 'b08', target: 'Au revoir',        native: 'Goodbye',                                    phonetic: 'oh ruh-VWAHR' },
    ],
  },
  {
    id: 'airport',
    title: 'Airport & taxi',
    emoji: '🛫',
    free: true,
    phrases: [
      { id: 't01', target: 'Bonjour, où est la station de taxi ?', native: 'Hello, where is the taxi rank?',       phonetic: 'oo eh la stah-see-ON duh tak-SEE' },
      { id: 't02', target: 'Le RER pour Paris, c’est où ?',         native: 'Where is the RER train to Paris?',     phonetic: 'luh air-uh-AIR poor pa-REE' },
      { id: 't03', target: 'C’est combien ?',                       native: 'How much is it?',                       phonetic: 'say com-bee-AN' },
      { id: 't04', target: 'C’est trop cher',                       native: "That's too expensive",                  phonetic: 'say tro SHAIR' },
      { id: 't05', target: 'Arrêtez-vous ici, s’il vous plaît',     native: 'Stop here, please',                     phonetic: 'ah-reh-TAY voo ee-SEE' },
      { id: 't06', target: 'Le compteur, s’il vous plaît',          native: 'Use the meter, please (taxi)',          phonetic: 'luh kohn-TURR' },
    ],
  },
  {
    id: 'food',
    title: 'Food & café',
    emoji: '🍽️',
    free: true,
    phrases: [
      { id: 'f01', target: 'Je voudrais un café, s’il vous plaît', native: "I'd like a coffee, please",            phonetic: 'zhuh voo-DRAY un ka-FAY' },
      { id: 'f02', target: 'Une carafe d’eau, s’il vous plaît',     native: 'A jug of (free tap) water, please',    phonetic: 'oon ka-RAHF doh' },
      { id: 'f03', target: 'L’addition, s’il vous plaît',           native: 'The check, please',                    phonetic: 'lah-dee-see-ON' },
      { id: 'f04', target: 'Je suis allergique aux noix',           native: "I'm allergic to nuts",                 phonetic: 'zhuh swee al-air-ZHEEK oh NWAH' },
      { id: 'f05', target: 'Sans gluten, s’il vous plaît',          native: 'Gluten-free, please',                  phonetic: 'sahn gloo-TEN' },
      { id: 'f06', target: 'C’était délicieux, merci',              native: 'That was delicious, thank you',        phonetic: 'say-TAY day-lee-see-UH' },
    ],
  },
  {
    id: 'emergency',
    title: 'Emergency',
    emoji: '🚨',
    free: true,
    phrases: [
      { id: 'e01', target: 'Au secours !',                  native: 'Help!',                                phonetic: 'oh suh-KOOR' },
      { id: 'e02', target: 'J’ai besoin d’un médecin',      native: 'I need a doctor',                      phonetic: 'zhay buh-ZWAN dun mayd-SAN' },
      { id: 'e03', target: 'Où est l’hôpital ?',            native: 'Where is the hospital?',               phonetic: 'oo eh loh-pee-TAHL' },
      { id: 'e04', target: 'Appelez la police !',           native: 'Call the police!',                     phonetic: 'ap-uh-LAY la po-LEES' },
      { id: 'e05', target: 'On m’a volé mon sac',           native: 'I’ve been robbed (my bag was stolen)', phonetic: 'on mah vo-LAY mon SAK' },
      { id: 'e06', target: 'Je suis malade',                native: "I'm sick",                             phonetic: 'zhuh swee mah-LAHD' },
    ],
  },
  {
    id: 'directions',
    title: 'Directions',
    emoji: '🧭',
    free: false,
    phrases: [
      { id: 'd01', target: 'Où est… ?',                            native: 'Where is…?',                       phonetic: 'OO eh' },
      { id: 'd02', target: 'Comment aller à la Tour Eiffel ?',      native: 'How do I get to the Eiffel Tower?', phonetic: 'ko-mahn ah-LAY ah la toor ay-FELL' },
      { id: 'd03', target: 'À gauche / à droite',                   native: 'Left / right',                     phonetic: 'ah GOSH / ah DRWAHT' },
      { id: 'd04', target: 'Tout droit',                            native: 'Straight ahead',                   phonetic: 'too DRWAH' },
      { id: 'd05', target: 'Je suis perdu(e)',                      native: "I'm lost",                         phonetic: 'zhuh swee pair-DOO' },
      { id: 'd06', target: 'C’est loin d’ici ?',                    native: 'Is it far from here?',             phonetic: 'say LWAN dee-SEE' },
    ],
  },
  {
    id: 'hotel',
    title: 'Hotel & stays',
    emoji: '🏨',
    free: false,
    phrases: [
      { id: 'h01', target: 'J’ai une réservation',               native: 'I have a reservation',         phonetic: 'zhay oon ray-zair-vah-see-ON' },
      { id: 'h02', target: 'Quel est le mot de passe Wi-Fi ?',    native: 'What is the Wi-Fi password?',  phonetic: 'kel eh luh moh duh PASS' },
      { id: 'h03', target: 'Je peux voir la chambre ?',           native: 'May I see the room?',          phonetic: 'zhuh puh VWAHR la SHAHM-bruh' },
      { id: 'h04', target: 'Je libère la chambre demain',         native: "I'll check out tomorrow",      phonetic: 'zhuh lee-BAIR la shahm-bruh duh-MAN' },
      { id: 'h05', target: 'Il n’y a pas d’eau chaude',           native: 'There is no hot water',        phonetic: 'eel nyah pah doh SHOHD' },
    ],
  },
  {
    id: 'manners',
    title: 'Manners & culture',
    emoji: '🤲',
    free: false,
    phrases: [
      { id: 'm01', target: 'S’il vous plaît',                          native: 'Please (formal — use this with strangers)', phonetic: 'seel voo PLAY' },
      { id: 'm02', target: 'Excusez-moi',                              native: 'Excuse me (to get attention)',              phonetic: 'ex-koo-ZAY mwah' },
      { id: 'm03', target: 'Pardon',                                   native: 'Sorry (after bumping someone)',             phonetic: 'par-DOHN' },
      { id: 'm04', target: 'Vous parlez anglais ?',                    native: 'Do you speak English? (formal)',            phonetic: 'voo par-LAY ahn-GLAY' },
      { id: 'm05', target: 'Je ne parle pas bien français, désolé(e)', native: "I don't speak French well, sorry",          phonetic: 'zhuh nuh parl pah bee-AN frahn-SAY' },
      { id: 'm06', target: 'Non merci, ça ira',                        native: 'No thanks, I’m fine (polite refusal)',      phonetic: 'noh mair-SEE, sah ee-RAH' },
    ],
  },
  {
    id: 'numbers',
    title: 'Numbers & money',
    emoji: '💶',
    free: false,
    phrases: [
      { id: 'n01', target: 'Moins de vingt euros',         native: 'Under twenty euros',                 phonetic: 'mwan duh VAN uh-ROH' },
      { id: 'n02', target: 'Je peux payer par carte ?',    native: 'Can I pay by card?',                 phonetic: 'zhuh puh pay-YAY par KART' },
      { id: 'n03', target: 'Vous avez la monnaie ?',       native: 'Do you have change?',                phonetic: 'voo zah-VAY la mo-NAY' },
      { id: 'n04', target: 'Gardez la monnaie',            native: 'Keep the change',                    phonetic: 'gar-DAY la mo-NAY' },
      { id: 'n05', target: 'Voici un petit pourboire',     native: 'Here is a small tip',                phonetic: 'vwah-SEE un puh-TEE poor-BWAHR' },
    ],
  },
];

export default FRANCE_PHRASEBOOK;

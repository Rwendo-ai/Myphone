/**
 * Travel Phrasebook — Zimbabwe (isiNdebele).
 *
 * Curated for the traveller, not the language learner — these are the 48
 * phrases someone needs in their first 48 hours on the ground in Bulawayo
 * and Matabeleland. Grouped by situation. The free tier surfaces the first
 * 26 (basics + airport + food + emergency); the full set unlocks when the
 * user owns the corresponding language course.
 *
 * Ndebele has three click consonants — `c` (dental click, like English
 * "tsk"), `q` (palatal click, like a bottle pop), and `x` (lateral click,
 * like clucking to a horse). Phonetic guides flag these as [c-click],
 * [q-click], [x-click] so travellers can attempt them confidently.
 *
 * `audioPath` is filled in once we generate ElevenLabs MP3s (Phase 2).
 * Until then the phrasebook reads silently — we still ship the text so the
 * phrasebook is useful immediately.
 */

import type { PhrasebookCategory } from './types';

const ZIMBABWE_NDEBELE_PHRASEBOOK: PhrasebookCategory[] = [
  {
    id: 'basics',
    title: 'Basics',
    emoji: '👋',
    free: true,
    phrases: [
      { id: 'b01', target: 'Salibonani',  native: 'Hello (to one or many — default greeting)', phonetic: 'sah-lee-boh-NAH-nee' },
      { id: 'b02', target: 'Sawubona',    native: 'Hello (to one person)',            phonetic: 'sah-woo-BOH-nah' },
      { id: 'b03', target: 'Yebo',        native: 'Yes',                              phonetic: 'YEH-boh' },
      { id: 'b04', target: 'Hatshi',      native: 'No',                               phonetic: 'HAH-tshee' },
      { id: 'b05', target: 'Ngiyabonga',  native: 'Thank you',                        phonetic: 'ngee-yah-BOHN-gah' },
      { id: 'b06', target: 'Uxolo',       native: 'Excuse me / sorry',                phonetic: 'oo-[x-click]OH-loh' },
      { id: 'b07', target: 'Sala kuhle',  native: 'Goodbye (to one staying)',         phonetic: 'SAH-lah KOO-hleh' },
      { id: 'b08', target: 'Uphilile?',   native: 'Are you well? / How are you?',     phonetic: 'oo-pee-LEE-leh' },
    ],
  },
  {
    id: 'airport',
    title: 'Airport & taxi',
    emoji: '🛫',
    free: true,
    phrases: [
      { id: 't01', target: 'Ngingayithola ngaphi itekisi?', native: 'Where do I find a taxi?',  phonetic: 'ngeen-gah-yee-TOH-lah ngah-pee ee-teh-KEE-see' },
      { id: 't02', target: 'KoBulawayo',                    native: 'To Bulawayo',              phonetic: 'koh-boo-lah-WAH-yoh' },
      { id: 't03', target: 'Kuyimalini?',                   native: 'How much?',                phonetic: 'koo-yee-mah-LEE-nee' },
      { id: 't04', target: 'Kwedlulisile',                  native: "That's too much",          phonetic: 'kweh-dloo-lee-SEE-leh' },
      { id: 't05', target: 'Ngicela usinga lwami',          native: 'Give me my change please', phonetic: 'ngee-[c-click]EH-lah oo-SEEN-gah lwah-mee' },
      { id: 't06', target: 'Mana lapha',                    native: 'Stop here',                phonetic: 'MAH-nah LAH-pah' },
    ],
  },
  {
    id: 'food',
    title: 'Food & market',
    emoji: '🍽️',
    free: true,
    phrases: [
      { id: 'f01', target: 'Ngifuna ukudla',     native: 'I want to eat',                       phonetic: 'ngee-FOO-nah oo-KOO-dlah' },
      { id: 'f02', target: 'Amanzi ngicela',     native: 'Water please',                        phonetic: 'ah-MAHN-zee ngee-[c-click]EH-lah' },
      { id: 'f03', target: 'Isitshwala lani?',   native: 'What goes with the porridge (sadza)?', phonetic: 'ee-see-TSHWAH-lah LAH-nee' },
      { id: 'f04', target: 'Kubabe kancane nje', native: 'Just a little spicy',                 phonetic: 'koo-BAH-beh kahn-[c-click]AH-neh n-jeh' },
      { id: 'f05', target: 'Ngisuthi',           native: "I'm full",                            phonetic: 'ngee-SOO-tee' },
      { id: 'f06', target: 'Ibhili ngicela',     native: 'The bill please',                     phonetic: 'ee-BEE-lee ngee-[c-click]EH-lah' },
    ],
  },
  {
    id: 'emergency',
    title: 'Emergency',
    emoji: '🚨',
    free: true,
    phrases: [
      { id: 'e01', target: 'Ngisizeni!',           native: 'Help me!',           phonetic: 'ngee-see-ZEH-nee' },
      { id: 'e02', target: 'Ngidinga udokotela',   native: 'I need a doctor',    phonetic: 'ngee-DEEN-gah oo-doh-koh-TEH-lah' },
      { id: 'e03', target: 'Ngiyagula',            native: "I'm sick",           phonetic: 'ngee-yah-GOO-lah' },
      { id: 'e04', target: 'Amapholisa',           native: 'Police',             phonetic: 'ah-mah-poh-LEE-sah' },
      { id: 'e05', target: 'Ngiphangiwe',          native: "I've been robbed",   phonetic: 'ngee-pahn-GEE-weh' },
      { id: 'e06', target: 'Ngidinga i-ambulensi', native: 'I need an ambulance', phonetic: 'ngee-DEEN-gah ee-ahm-boo-LEN-see' },
    ],
  },
  {
    id: 'directions',
    title: 'Directions',
    emoji: '🧭',
    free: false,
    phrases: [
      { id: 'd01', target: 'Ngaphi?',                  native: 'Where?',              phonetic: 'ngah-PEE' },
      { id: 'd02', target: 'Kungaphi?',                native: 'Where is it?',        phonetic: 'koon-gah-PEE' },
      { id: 'd03', target: 'Kuseduze yini?',           native: 'Is it close?',        phonetic: 'koo-seh-DOO-zeh YEE-nee' },
      { id: 'd04', target: 'Ngilahlekile',             native: "I'm lost",            phonetic: 'ngee-lah-leh-KEE-leh' },
      { id: 'd05', target: 'Ngingafika njani lapho?',  native: 'How do I get there?', phonetic: 'ngeen-gah-FEE-kah n-JAH-nee LAH-poh' },
      { id: 'd06', target: 'Kwesokunxele / kwesokudla', native: 'Left / right',       phonetic: 'kweh-soh-koo-[x-click]EH-leh / kweh-soh-KOO-dlah' },
    ],
  },
  {
    id: 'hotel',
    title: 'Hotel & stays',
    emoji: '🏨',
    free: false,
    phrases: [
      { id: 'h01', target: 'Ngile-reservation',           native: 'I have a reservation',     phonetic: 'ngee-leh-reh-zeh-VAY-shun' },
      { id: 'h02', target: 'Ikhona iWi-Fi?',              native: 'Is there Wi-Fi?',          phonetic: 'ee-KOH-nah ee-wai-fai' },
      { id: 'h03', target: 'Ngifuna ukubona ikamelo',     native: 'I want to see the room',   phonetic: 'ngee-FOO-nah oo-koo-BOH-nah ee-kah-MEH-loh' },
      { id: 'h04', target: 'Ngizaphuma kusasa',           native: "I'll check out tomorrow",  phonetic: 'ngee-zah-POO-mah koo-SAH-sah' },
      { id: 'h05', target: 'Awekho amanzi atshisayo',     native: 'There is no hot water',    phonetic: 'ah-WEH-koh ah-MAHN-zee ah-tshee-SAH-yoh' },
    ],
  },
  {
    id: 'manners',
    title: 'Manners & culture',
    emoji: '🤲',
    free: false,
    phrases: [
      { id: 'm01', target: 'Ngicela',           native: 'Please',                                phonetic: 'ngee-[c-click]EH-lah' },
      { id: 'm02', target: 'Uxolo baba / mama', native: 'Excuse me, sir / madam (to elders)',    phonetic: 'oo-[x-click]OH-loh BAH-bah / MAH-mah' },
      { id: 'm03', target: 'Ngijabule ukukwazi', native: 'Pleased to meet you',                  phonetic: 'ngee-jah-BOO-leh oo-koo-KWAH-zee' },
      { id: 'm04', target: 'Ngiyakuhlonipha',   native: 'I respect you',                         phonetic: 'ngee-yah-koo-hloh-NEE-pah' },
      { id: 'm05', target: 'Wamukelekile',      native: 'Welcome (to a guest)',                  phonetic: 'wah-moo-keh-leh-KEE-leh' },
      { id: 'm06', target: 'Hamba kuhle',       native: 'Travel well / go well (to one going)',  phonetic: 'HAHM-bah KOO-hleh' },
    ],
  },
  {
    id: 'numbers',
    title: 'Numbers & money',
    emoji: '💵',
    free: false,
    phrases: [
      { id: 'n01', target: 'Ngaphansi kwamadola amahlanu', native: 'Under five dollars',                   phonetic: 'ngah-PAHN-see kwah-mah-DOH-lah ah-mah-HLAH-noo' },
      { id: 'n02', target: 'Ngilamadola alitshumi',         native: 'I have ten dollars',                  phonetic: 'ngee-lah-mah-DOH-lah ah-lee-TSHOO-mee' },
      { id: 'n03', target: 'Ngingakhokha ngani?',           native: 'What can I pay with?',                phonetic: 'ngeen-gah-KOH-kah NGAH-nee' },
      { id: 'n04', target: 'Liyayemukela i-USD?',           native: 'Do you accept USD?',                  phonetic: 'lee-yah-yeh-moo-KEH-lah ee-yoo-ess-dee' },
      { id: 'n05', target: 'Eceleni kwemali yenu',          native: 'Beside your money (= bring change)', phonetic: 'eh-[c-click]EH-leh-nee kweh-MAH-lee YEH-noo' },
    ],
  },
];

export default ZIMBABWE_NDEBELE_PHRASEBOOK;

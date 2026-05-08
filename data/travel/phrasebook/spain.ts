/**
 * Travel Phrasebook — Spain (European / Castilian Spanish).
 *
 * Curated for the traveller, not the language learner — these are the 48
 * phrases someone needs in their first 48 hours on the ground in Spain.
 * Grouped by situation. The free tier surfaces the first four categories
 * (basics, airport, food, emergency); the rest unlock with the Spanish
 * language course.
 *
 * Castilian notes baked into the wording:
 * - "Vosotros" appears for you-plural informal (Spain only — Latin America
 *   uses "ustedes" for everyone).
 * - The "c/z" before e/i is pronounced like English "th" (the Castilian
 *   ceceo). Phonetics reflect that — e.g. "gracias" is "GRAH-thee-as".
 * - Meal timing is late: lunch ~14:00, dinner from ~21:00. A phrase about
 *   the kitchen still being open is included because tourists routinely
 *   hit empty dining rooms at 19:00.
 * - Tapas culture: asking what tapa comes with the drink is normal,
 *   especially in Andalucía, León and Granada where it's often free.
 * - Siesta closures (roughly 14:00–17:00) still apply outside big cities.
 * - Tipping is small — round up the bill or leave a euro or two. No 15–20%.
 *
 * `audioPath` is filled in once we generate ElevenLabs MP3s (Phase 2).
 */

import type { PhrasebookCategory } from './types';

const SPAIN_PHRASEBOOK: PhrasebookCategory[] = [
  {
    id: 'basics',
    title: 'Basics',
    emoji: '👋',
    free: true,
    phrases: [
      { id: 'b01', target: 'Hola', native: 'Hello',                              phonetic: 'OH-la' },
      { id: 'b02', target: 'Gracias', native: 'Thank you',                       phonetic: 'GRAH-thee-as' },
      { id: 'b03', target: 'Por favor', native: 'Please',                        phonetic: 'por fah-VOR' },
      { id: 'b04', target: 'Adiós', native: 'Goodbye',                           phonetic: 'ah-dee-OS' },
      { id: 'b05', target: 'Sí', native: 'Yes',                                  phonetic: 'see' },
      { id: 'b06', target: 'No', native: 'No' },
      { id: 'b07', target: 'Lo siento', native: "I'm sorry",                     phonetic: 'lo see-EN-toh' },
      { id: 'b08', target: 'No hablo español', native: "I don't speak Spanish",  phonetic: 'no AH-bloh es-pan-YOL' },
    ],
  },
  {
    id: 'airport',
    title: 'Airport & taxi',
    emoji: '🛫',
    free: true,
    phrases: [
      { id: 't01', target: '¿Dónde está el taxi?', native: 'Where is the taxi?', phonetic: 'DON-deh es-TA el TAK-see' },
      { id: 't02', target: '¿Dónde está el metro?', native: 'Where is the metro?' },
      { id: 't03', target: '¿Cuánto cuesta?', native: 'How much does it cost?',  phonetic: 'KWAN-toh KWES-ta' },
      { id: 't04', target: 'Pare aquí, por favor', native: 'Stop here, please',  phonetic: 'PAH-reh ah-KEE' },
      { id: 't05', target: 'Lléveme a esta dirección', native: 'Take me to this address' },
      { id: 't06', target: '¿Acepta tarjeta?', native: 'Do you accept card?' },
    ],
  },
  {
    id: 'food',
    title: 'Food & tapas',
    emoji: '🍽️',
    free: true,
    phrases: [
      { id: 'f01', target: 'Quiero esto, por favor', native: 'I want this, please', phonetic: 'kee-EH-roh ES-toh' },
      { id: 'f02', target: 'Agua, por favor', native: 'Water, please',           phonetic: 'AH-gwa por fah-VOR' },
      { id: 'f03', target: 'La cuenta, por favor', native: 'The bill, please',   phonetic: 'la KWEN-ta' },
      { id: 'f04', target: 'Soy vegetariano', native: "I'm vegetarian (m)",      phonetic: 'soy beh-heh-tah-ree-AH-noh' },
      { id: 'f05', target: 'Soy alérgico a los frutos secos', native: "I'm allergic to nuts" },
      { id: 'f06', target: '¿Qué tapa viene con la bebida?', native: 'Which tapa comes with the drink?' },
    ],
  },
  {
    id: 'emergency',
    title: 'Emergency',
    emoji: '🚨',
    free: true,
    phrases: [
      { id: 'e01', target: '¡Ayuda!', native: 'Help!',                           phonetic: 'ah-YOO-da' },
      { id: 'e02', target: 'Necesito un médico', native: 'I need a doctor',      phonetic: 'neh-the-SEE-toh oon MEH-dee-koh' },
      { id: 'e03', target: 'Llame a una ambulancia', native: 'Call an ambulance' },
      { id: 'e04', target: 'Llame a la policía', native: 'Call the police',      phonetic: 'YAH-meh a la po-lee-THEE-a' },
      { id: 'e05', target: 'Me han robado', native: "I've been robbed",          phonetic: 'meh an roh-BAH-doh' },
      { id: 'e06', target: 'Estoy enfermo', native: "I'm sick (m)",              phonetic: 'es-TOY en-FAIR-moh' },
    ],
  },
  {
    id: 'directions',
    title: 'Directions',
    emoji: '🧭',
    free: false,
    phrases: [
      { id: 'd01', target: '¿Dónde está...?', native: 'Where is...?',            phonetic: 'DON-deh es-TA' },
      { id: 'd02', target: '¿Cómo llego a...?', native: 'How do I get to...?',   phonetic: 'KOH-moh YEH-go a' },
      { id: 'd03', target: 'A la izquierda', native: 'To the left',              phonetic: 'a la eeth-kee-AIR-da' },
      { id: 'd04', target: 'A la derecha', native: 'To the right',               phonetic: 'a la deh-REH-cha' },
      { id: 'd05', target: 'Todo recto', native: 'Straight ahead',               phonetic: 'TOH-doh REK-toh' },
      { id: 'd06', target: 'Estoy perdido', native: "I'm lost (m)",              phonetic: 'es-TOY pair-DEE-doh' },
    ],
  },
  {
    id: 'hotel',
    title: 'Hotel & stays',
    emoji: '🏨',
    free: false,
    phrases: [
      { id: 'h01', target: 'Tengo una reserva', native: 'I have a reservation',  phonetic: 'TEN-go OO-na reh-SAIR-ba' },
      { id: 'h02', target: '¿Cuál es la contraseña del Wi-Fi?', native: "What's the Wi-Fi password?" },
      { id: 'h03', target: '¿Puedo ver la habitación?', native: 'Can I see the room?' },
      { id: 'h04', target: '¿A qué hora es la salida?', native: 'What time is checkout?' },
      { id: 'h05', target: 'No hay agua caliente', native: 'There is no hot water', phonetic: 'no eye AH-gwa kah-lee-EN-teh' },
    ],
  },
  {
    id: 'manners',
    title: 'Manners & culture',
    emoji: '🤲',
    free: false,
    phrases: [
      { id: 'm01', target: 'Disculpe', native: 'Excuse me (formal — usted)',     phonetic: 'dis-KOOL-peh' },
      { id: 'm02', target: 'Perdona', native: 'Excuse me (informal — tú)',       phonetic: 'pair-DOH-na' },
      { id: 'm03', target: 'Buen provecho', native: 'Enjoy your meal',           phonetic: 'bwen pro-BEH-cho' },
      { id: 'm04', target: '¿Vosotros venís?', native: 'Are you (plural) coming? — Spain only' },
      { id: 'm05', target: '¿Está abierto? Pensaba que cerraban por la tarde', native: 'Are you open? I thought you closed in the afternoon' },
      { id: 'm06', target: '¿La cocina sigue abierta?', native: 'Is the kitchen still open?' },
    ],
  },
  {
    id: 'numbers',
    title: 'Numbers & money',
    emoji: '💵',
    free: false,
    phrases: [
      { id: 'n01', target: 'Menos de veinte euros', native: 'Under €20',          phonetic: 'MEH-nos deh BAIN-teh eh-OO-ros' },
      { id: 'n02', target: '¿Aceptan tarjeta?', native: 'Do you accept card?',    phonetic: 'ath-EP-tan tar-HEH-ta' },
      { id: 'n03', target: '¿Tiene cambio?', native: 'Do you have change?',       phonetic: 'tee-EH-neh KAM-bee-oh' },
      { id: 'n04', target: 'Quédese con el cambio', native: 'Keep the change (a small tip)' },
      { id: 'n05', target: 'Es demasiado caro', native: "It's too expensive",     phonetic: 'es deh-mah-see-AH-doh KAH-ro' },
    ],
  },
];

export default SPAIN_PHRASEBOOK;

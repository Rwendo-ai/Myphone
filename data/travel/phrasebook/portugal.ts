/**
 * Travel Phrasebook — Portugal (European Portuguese).
 *
 * Curated for the traveller, not the language learner — these are the ~48
 * phrases someone needs in their first 48 hours on the ground. Grouped by
 * situation. The free tier surfaces the first four categories (basics,
 * airport, food, emergency); the rest unlocks when the user owns the
 * corresponding language course.
 *
 * European Portuguese specifically — not Brazilian. So 'comboio' (not 'trem'),
 * 'casa de banho' (not 'banheiro'), 'pequeno-almoço' (not 'café da manhã'),
 * 'telemóvel' (not 'celular'). Waiters are called with 'Faz favor' (never
 * 'garçom' or 'moço'). 'Obrigado' / 'Obrigada' is gendered — speaker says it
 * based on their own gender.
 *
 * `audioPath` is filled in once we generate ElevenLabs MP3s (Phase 2).
 * Until then the phrasebook reads silently — we still ship the text so the
 * phrasebook is useful immediately.
 */

import type { PhrasebookCategory } from './types';

const PORTUGAL_PHRASEBOOK: PhrasebookCategory[] = [
  {
    id: 'basics',
    title: 'Basics',
    emoji: '👋',
    free: true,
    phrases: [
      { id: 'b01', target: 'Olá', native: 'Hello',                                phonetic: 'oh-LAH' },
      { id: 'b02', target: 'Bom dia', native: 'Good morning',                     phonetic: 'bohn DEE-ah' },
      { id: 'b03', target: 'Boa tarde', native: 'Good afternoon',                 phonetic: 'BOH-ah TAR-deh' },
      { id: 'b04', target: 'Obrigado / Obrigada', native: 'Thank you (m / f speaker)', phonetic: 'oh-bree-GAH-doo / oh-bree-GAH-dah' },
      { id: 'b05', target: 'Sim', native: 'Yes',                                  phonetic: 'seeng' },
      { id: 'b06', target: 'Não', native: 'No',                                   phonetic: 'now (nasal)' },
      { id: 'b07', target: 'Desculpe', native: 'Sorry / excuse me',               phonetic: 'desh-KOOL-peh' },
      { id: 'b08', target: 'Adeus', native: 'Goodbye',                            phonetic: 'ah-DEH-oosh' },
    ],
  },
  {
    id: 'airport',
    title: 'Airport & taxi',
    emoji: '🛫',
    free: true,
    phrases: [
      { id: 't01', target: 'Onde é o comboio?', native: 'Where is the train?',    phonetic: 'OHN-deh eh oo kom-BOY-oo' },
      { id: 't02', target: 'Preciso de um táxi', native: 'I need a taxi',          phonetic: 'preh-SEE-zoo deh oong TAK-see' },
      { id: 't03', target: 'Quanto custa?', native: 'How much does it cost?',     phonetic: 'KWAN-too KOOSH-tah' },
      { id: 't04', target: 'Pare aqui, por favor', native: 'Stop here, please',    phonetic: 'PAH-reh ah-KEE poor fah-VOR' },
      { id: 't05', target: 'Para o aeroporto', native: 'To the airport',          phonetic: 'PAH-rah oo ah-eh-roo-POR-too' },
      { id: 't06', target: 'É muito caro', native: "That's too expensive",        phonetic: 'eh MWEEN-too KAH-roo' },
    ],
  },
  {
    id: 'food',
    title: 'Food & cafés',
    emoji: '🍽️',
    free: true,
    phrases: [
      { id: 'f01', target: 'Queria uma bica, por favor', native: 'I would like an espresso, please', phonetic: 'keh-REE-ah OO-mah BEE-kah poor fah-VOR' },
      { id: 'f02', target: 'Água, por favor', native: 'Water, please',            phonetic: 'AH-gwah poor fah-VOR' },
      { id: 'f03', target: 'A conta, por favor', native: 'The bill, please',      phonetic: 'ah KOHN-tah poor fah-VOR' },
      { id: 'f04', target: 'Sou vegetariano / vegetariana', native: "I'm vegetarian (m / f)", phonetic: 'soh veh-zheh-tah-ree-AH-noo / -nah' },
      { id: 'f05', target: 'Tenho alergia a…', native: "I'm allergic to…",        phonetic: 'TEN-yoo ah-LEHR-zhee-ah ah' },
      { id: 'f06', target: 'Dois pastéis de nata, por favor', native: 'Two custard tarts, please', phonetic: 'doysh pash-TAYSH deh NAH-tah poor fah-VOR' },
    ],
  },
  {
    id: 'emergency',
    title: 'Emergency',
    emoji: '🚨',
    free: true,
    phrases: [
      { id: 'e01', target: 'Socorro!', native: 'Help!',                           phonetic: 'soo-KOH-rroo' },
      { id: 'e02', target: 'Preciso de um médico', native: 'I need a doctor',      phonetic: 'preh-SEE-zoo deh oong MEH-dee-koo' },
      { id: 'e03', target: 'Chamem uma ambulância', native: 'Call an ambulance',   phonetic: 'SHAH-meng OO-mah am-boo-LAN-see-ah' },
      { id: 'e04', target: 'Polícia!', native: 'Police!',                         phonetic: 'poo-LEE-see-ah' },
      { id: 'e05', target: 'Fui roubado / roubada', native: "I've been robbed (m / f)", phonetic: 'fwee roh-BAH-doo / roh-BAH-dah' },
      { id: 'e06', target: 'Estou doente', native: "I'm sick",                    phonetic: 'shtoh doo-EN-teh' },
    ],
  },
  {
    id: 'directions',
    title: 'Directions',
    emoji: '🧭',
    free: false,
    phrases: [
      { id: 'd01', target: 'Onde fica…?', native: 'Where is…?',                   phonetic: 'OHN-deh FEE-kah' },
      { id: 'd02', target: 'Como chego a…?', native: 'How do I get to…?',          phonetic: 'KOH-moo SHEH-goo ah' },
      { id: 'd03', target: 'À esquerda', native: 'To the left',                   phonetic: 'ah esh-KEHR-dah' },
      { id: 'd04', target: 'À direita', native: 'To the right',                   phonetic: 'ah dee-RAY-tah' },
      { id: 'd05', target: 'Em frente', native: 'Straight ahead',                 phonetic: 'eng FREN-teh' },
      { id: 'd06', target: 'Estou perdido / perdida', native: "I'm lost (m / f)",  phonetic: 'shtoh per-DEE-doo / per-DEE-dah' },
    ],
  },
  {
    id: 'hotel',
    title: 'Hotel & stays',
    emoji: '🏨',
    free: false,
    phrases: [
      { id: 'h01', target: 'Tenho uma reserva', native: 'I have a reservation',    phonetic: 'TEN-yoo OO-mah reh-ZEHR-vah' },
      { id: 'h02', target: 'Há Wi-Fi?', native: 'Is there Wi-Fi?',                 phonetic: 'ah WEE-fee' },
      { id: 'h03', target: 'Posso ver o quarto?', native: 'May I see the room?',   phonetic: 'POH-soo vehr oo KWAR-too' },
      { id: 'h04', target: 'Vou sair amanhã', native: "I'm checking out tomorrow", phonetic: 'voh sah-EER ah-MAN-yah' },
      { id: 'h05', target: 'Não há água quente', native: 'There is no hot water',  phonetic: 'now ah AH-gwah KEN-teh' },
    ],
  },
  {
    id: 'manners',
    title: 'Manners & culture',
    emoji: '🤲',
    free: false,
    phrases: [
      { id: 'm01', target: 'Por favor', native: 'Please',                         phonetic: 'poor fah-VOR' },
      { id: 'm02', target: 'Com licença', native: 'Excuse me (passing through)',   phonetic: 'kong lee-SEN-sah' },
      { id: 'm03', target: 'Obrigado', native: 'Thank you (male speaker)',         phonetic: 'oh-bree-GAH-doo' },
      { id: 'm04', target: 'Obrigada', native: 'Thank you (female speaker)',       phonetic: 'oh-bree-GAH-dah' },
      { id: 'm05', target: 'Faz favor!', native: 'Excuse me! (calling a waiter)',  phonetic: 'fash fah-VOR' },
      { id: 'm06', target: 'Muito prazer', native: 'Pleased to meet you',          phonetic: 'MWEEN-too prah-ZEHR' },
    ],
  },
  {
    id: 'numbers',
    title: 'Numbers & money',
    emoji: '💵',
    free: false,
    phrases: [
      { id: 'n01', target: 'Menos de vinte euros', native: 'Less than €20',        phonetic: 'MEH-noosh deh VEEN-teh EH-oo-roosh' },
      { id: 'n02', target: 'Aceita cartão?', native: 'Do you accept card?',        phonetic: 'ah-SAY-tah kar-TOWNG' },
      { id: 'n03', target: 'Tem troco?', native: 'Do you have change?',           phonetic: 'teng TROH-koo' },
      { id: 'n04', target: 'Só dinheiro', native: 'Cash only',                    phonetic: 'soh deen-YAY-roo' },
      { id: 'n05', target: 'Posso pagar com Multibanco?', native: 'Can I pay by debit card?', phonetic: 'POH-soo pah-GAR kong mool-tee-BAN-koo' },
    ],
  },
];

export default PORTUGAL_PHRASEBOOK;

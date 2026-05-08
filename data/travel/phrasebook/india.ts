/**
 * Travel Phrasebook — India (Hindi).
 *
 * Curated for the traveller, not the language learner — these are the ~48
 * phrases someone needs in their first 48 hours on the ground. Grouped by
 * situation. The free tier surfaces the first 26 (basics + airport + food +
 * emergency); the full set unlocks when the user owns the corresponding
 * language course.
 *
 * Hindi script (Devanagari) is shown in `target`; `phonetic` carries the
 * romanized form so travellers can read it aloud without script knowledge.
 * Hinglish (English mixed into Hindi) is authentic to traveller usage and
 * preserved here where it reflects how people actually speak — e.g. "Wi-Fi
 * hai?", "Card chalega?", "Meter chalao".
 *
 * Cultural priorities: the suffix "जी" (ji) signals respect and is added
 * after names or sentences when addressing elders or strangers; vegetarian
 * (शाकाहारी) is critical given the prevalence of vegetarianism; bargaining,
 * spice tolerance, bottled-water emphasis and auto-rickshaw meter requests
 * are all surfaced explicitly.
 *
 * `audioPath` is filled in once we generate ElevenLabs MP3s (Phase 2).
 * Until then the phrasebook reads silently — we still ship the text so the
 * phrasebook is useful immediately.
 */

import type { PhrasebookCategory } from './types';

const INDIA_PHRASEBOOK: PhrasebookCategory[] = [
  {
    id: 'basics',
    title: 'Basics',
    emoji: '🙏',
    free: true,
    phrases: [
      { id: 'b01', target: 'नमस्ते',           native: 'Hello / greetings',            phonetic: 'Namaste' },
      { id: 'b02', target: 'धन्यवाद',          native: 'Thank you',                    phonetic: 'Dhanyavaad' },
      { id: 'b03', target: 'अलविदा',           native: 'Goodbye',                      phonetic: 'Alvida' },
      { id: 'b04', target: 'हाँ',              native: 'Yes',                          phonetic: 'Haan' },
      { id: 'b05', target: 'नहीं',             native: 'No',                           phonetic: 'Nahin' },
      { id: 'b06', target: 'क्षमा करें',        native: 'Excuse me / sorry',            phonetic: 'Kshama karein' },
      { id: 'b07', target: 'आप कैसे हैं?',      native: 'How are you?',                 phonetic: 'Aap kaise hain?' },
      { id: 'b08', target: 'मैं ठीक हूँ',       native: "I'm well",                     phonetic: 'Main theek hoon' },
    ],
  },
  {
    id: 'airport',
    title: 'Airport & taxi',
    emoji: '🛫',
    free: true,
    phrases: [
      { id: 't01', target: 'ऑटो / टैक्सी कहाँ मिलेगी?', native: 'Where do I find an auto / taxi?', phonetic: 'Auto / taxi kahaan milegi?' },
      { id: 't02', target: 'कितना?',                   native: 'How much?',                       phonetic: 'Kitna?' },
      { id: 't03', target: 'मीटर चलाओ',                native: 'Use the meter (please)',          phonetic: 'Meter chalao' },
      { id: 't04', target: 'बहुत महंगा है',            native: "That's too expensive",            phonetic: 'Bahut mehenga hai' },
      { id: 't05', target: 'मेट्रो स्टेशन कहाँ है?',     native: 'Where is the metro station?',     phonetic: 'Metro station kahaan hai?' },
      { id: 't06', target: 'यहाँ रुको',                 native: 'Stop here',                       phonetic: 'Yahaan ruko' },
    ],
  },
  {
    id: 'food',
    title: 'Food & market',
    emoji: '🍽️',
    free: true,
    phrases: [
      { id: 'f01', target: 'मुझे ... चाहिए',            native: 'I want / I need ...',             phonetic: 'Mujhe ... chahiye' },
      { id: 'f02', target: 'पानी, दीजिए',              native: 'Water, please (bottled)',         phonetic: 'Paani, deejiye' },
      { id: 'f03', target: 'मैं शाकाहारी हूँ',           native: "I'm vegetarian",                  phonetic: 'Main shaakaahaari hoon' },
      { id: 'f04', target: 'तेज़ नहीं, कम मसाला',       native: 'Not too spicy, less masala',      phonetic: 'Tez nahin, kam masala' },
      { id: 'f05', target: 'बिल लाइए',                 native: 'The bill, please',                phonetic: 'Bill laaiye' },
      { id: 'f06', target: 'बहुत स्वादिष्ट है',          native: "It's delicious",                  phonetic: 'Bahut swaadisht hai' },
    ],
  },
  {
    id: 'emergency',
    title: 'Emergency',
    emoji: '🚨',
    free: true,
    phrases: [
      { id: 'e01', target: 'बचाओ!',                    native: 'Help!',                           phonetic: 'Bachao!' },
      { id: 'e02', target: 'मुझे डॉक्टर चाहिए',          native: 'I need a doctor',                 phonetic: 'Mujhe doctor chahiye' },
      { id: 'e03', target: 'पुलिस को बुलाओ',           native: 'Call the police',                 phonetic: 'Police ko bulao' },
      { id: 'e04', target: 'अस्पताल कहाँ है?',           native: 'Where is the hospital?',          phonetic: 'Aspataal kahaan hai?' },
      { id: 'e05', target: 'मुझे चोट लगी है',           native: "I'm hurt / I've been injured",    phonetic: 'Mujhe chot lagi hai' },
      { id: 'e06', target: 'मेरा बैग चोरी हो गया',        native: 'My bag was stolen',               phonetic: 'Mera bag chori ho gaya' },
    ],
  },
  {
    id: 'directions',
    title: 'Directions',
    emoji: '🧭',
    free: false,
    phrases: [
      { id: 'd01', target: '... कहाँ है?',              native: 'Where is ...?',                   phonetic: '... kahaan hai?' },
      { id: 'd02', target: 'मैं कैसे जाऊँ?',             native: 'How do I get there?',             phonetic: 'Main kaise jaaoon?' },
      { id: 'd03', target: 'बाएँ',                     native: 'Left',                            phonetic: 'Baayein' },
      { id: 'd04', target: 'दाएँ',                     native: 'Right',                           phonetic: 'Daayein' },
      { id: 'd05', target: 'सीधे जाओ',                 native: 'Go straight',                     phonetic: 'Seedhe jao' },
      { id: 'd06', target: 'मैं खो गया हूँ',            native: "I'm lost",                        phonetic: 'Main kho gaya hoon' },
    ],
  },
  {
    id: 'hotel',
    title: 'Hotel & stays',
    emoji: '🏨',
    free: false,
    phrases: [
      { id: 'h01', target: 'मेरी बुकिंग है',             native: 'I have a booking',                phonetic: 'Meri booking hai' },
      { id: 'h02', target: 'Wi-Fi का पासवर्ड क्या है?',   native: "What's the Wi-Fi password?",      phonetic: 'Wi-Fi ka password kya hai?' },
      { id: 'h03', target: 'क्या मैं कमरा देख सकता हूँ?', native: 'Can I see the room?',             phonetic: 'Kya main kamra dekh sakta hoon?' },
      { id: 'h04', target: 'मैं कल चेक-आउट करूँगा',     native: "I'll check out tomorrow",         phonetic: 'Main kal check-out karoonga' },
      { id: 'h05', target: 'गरम पानी नहीं है',          native: 'There is no hot water',           phonetic: 'Garam paani nahin hai' },
    ],
  },
  {
    id: 'manners',
    title: 'Manners & culture',
    emoji: '🤲',
    free: false,
    phrases: [
      { id: 'm01', target: 'जी',                       native: 'Yes / respectful "sir/madam" suffix', phonetic: 'Ji' },
      { id: 'm02', target: 'धन्यवाद जी',                native: 'Thank you (respectful)',          phonetic: 'Dhanyavaad ji' },
      { id: 'm03', target: 'माफ़ कीजिए',                native: 'Forgive me / pardon me',          phonetic: 'Maaf keejiye' },
      { id: 'm04', target: 'नमस्ते जी',                 native: 'Greetings, sir / madam (to elders)', phonetic: 'Namaste ji' },
      { id: 'm05', target: 'आपसे मिलकर खुशी हुई',       native: 'Pleased to meet you',             phonetic: 'Aapse milkar khushi hui' },
      { id: 'm06', target: 'कृपया',                    native: 'Please',                          phonetic: 'Kripya' },
    ],
  },
  {
    id: 'numbers',
    title: 'Numbers & money',
    emoji: '💵',
    free: false,
    phrases: [
      { id: 'n01', target: '₹500 से कम',                native: 'Under ₹500',                      phonetic: 'Paanch sau rupaye se kam' },
      { id: 'n02', target: 'कार्ड चलेगा?',              native: 'Do you take card?',               phonetic: 'Card chalega?' },
      { id: 'n03', target: 'खुले पैसे हैं?',             native: 'Do you have change?',             phonetic: 'Khule paise hain?' },
      { id: 'n04', target: 'थोड़ा कम कीजिए',           native: 'Lower the price a little',        phonetic: 'Thoda kam keejiye' },
      { id: 'n05', target: 'UPI चलता है?',              native: 'Do you accept UPI?',              phonetic: 'UPI chalta hai?' },
    ],
  },
];

export default INDIA_PHRASEBOOK;

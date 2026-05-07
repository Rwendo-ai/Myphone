import { SpeakerPack } from '../../../types/packs';

const greetings: SpeakerPack['greetings'] = {
  morning:   { word: 'おはよう',   phrase: 'おはようございます' },
  afternoon: { word: 'こんにちは', phrase: 'こんにちは' },
  evening:   { word: 'こんばんは', phrase: 'こんばんは' },
};

export default greetings;

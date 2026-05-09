import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm05-l02-children',
  module: 5,
  lesson: 2,
  title: 'Children — Son & Daughter',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "EsiNdebeleni umntwana = umntwana, futhi indodana = umfana, indodakazi = intombazana. EsiNgisini sinamagama amathathu: 'child' (gender-neutral), 'son' (umfana), 'daughter' (intombazana). 'Children' lyiplural ka-'child' — kodwa ungaphathekanga, ngoba 'childs' AYISIYO igama elilungileyo. Yi-irregular plural.",
    culturalNote: "EsiNdebeleni umuntu omdala angathi 'umntwana wami' kungani omunye uneminyaka engama-30. Igama lithwala ukuhlonipha, hatshi iminyaka. EsiNgisini akuvamile kakhulu — 'my child' kuvuma ku-mom or dad ekhulumayo, kodwa awukwazi ukubuyela kumzukulu wakho oneminyaka engama-30 uthi 'my child' kuye. Khona-ke iBhayibhili lithi: 'Abantwana bayilifa likaJehova' (AmaHubo 127:3) — abantwana akusilo ifa lakho lodwa, bayisipho saseZulwini.",
  },

  chunks: [
    {
      id: 'child',
      target: 'Child',
      native: 'Umntwana (oyedwa)',
      literal: 'Child — singular, gender-neutral',
      emoji: '🧒🏾',
      phonetic: 'CHIYELD',
      audioRef: null,
    },
    {
      id: 'children',
      target: 'Children',
      native: 'Abantwana (banengi)',
      literal: 'Children — irregular plural',
      emoji: '👨‍👩‍👧‍👦',
      phonetic: 'CHIL-druhn',
      audioRef: null,
    },
    {
      id: 'son',
      target: 'Son',
      native: 'Indodana',
      literal: 'Son — male child',
      emoji: '👦🏾',
      phonetic: 'SUN',
      audioRef: null,
    },
    {
      id: 'daughter',
      target: 'Daughter',
      native: 'Indodakazi',
      literal: 'Daughter — female child',
      emoji: '👧🏾',
      phonetic: 'DAW-tuh',
      audioRef: null,
    },
  ],

  pattern: {
    name: "Irregular plural — child / children",
    explanation: "Iningi lamagama esiNgisini uyengeza '-s' ukuze enze i-plural: book → books, sister → sisters. Kodwa amanye amagama omdabu (ke-Old English) abamba ipattern eyahlukile: child → children, man → men, woman → women, foot → feet. Awukwazi ukuthi 'childs' — kuthiwa 'children'. Hlala ngalesi sandiso.",
    examples: [
      { target: 'I have one child.',     native: 'Ngilomntwana oyedwa.' },
      { target: 'I have three children.', native: 'Ngilabantwana abathathu.' },
      { target: 'My son is at school.',   native: 'Indodana yami isesikolo.' },
      { target: 'My daughter sings.',     native: 'Indodakazi yami iyacula.' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Hlanganisa amagama',
      pairs: [
        { left: 'Child',     right: 'Umntwana' },
        { left: 'Children',  right: 'Abantwana' },
        { left: 'Son',       right: 'Indodana' },
        { left: 'Daughter',  right: 'Indodakazi' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Faka igama elilungileyo — i-plural ka-child',
      sentence: 'I have two _____ — a son and a daughter.',
      options: ['childs', 'children', 'childrens'],
      correct: 'children',
      context: "'Childs' AYISIYO igama. I-plural yelichild yi-'children' — irregular plural ngokwesiNgisi sasendulo. 'Childrens' lakho akusiyo — kakade 'children' iyiplural.",
    },
    {
      type: 'translate',
      instruction: 'Bhala ngesiNgisi',
      prompt: 'Indodana yami iyathandwa nguJesu.',
      correct: ['My son is loved by Jesus.', 'My son is loved by Jesus', 'my son is loved by Jesus.'],
    },
    {
      type: 'translate',
      instruction: 'Bhala ngesiNgisi — ufaka indodakazi yakho komunye umngane',
      prompt: 'Lo yindodakazi yami, igama layo nguTandiwe.',
      correct: ['This is my daughter, her name is Tandiwe.', 'This is my daughter — her name is Tandiwe.', 'This is my daughter; her name is Tandiwe.'],
    },
    {
      type: 'build_sentence',
      instruction: 'Yakha umutsho — abantwana abathathu',
      words: ['have', 'children.', 'I', 'three'],
      correct: ['I', 'have', 'three', 'children.'],
      translation: 'Ngilabantwana abathathu.',
    },
    {
      type: 'multiple_choice',
      instruction: 'Khetha eyiqiniso',
      question: 'Yiwo amaphi amagama esiNgisini afanele wokukhuluma ngabantwana?',
      options: [
        { text: 'Child / Children / Son / Daughter — yonke iqondile.',                correct: true },
        { text: 'Child / Childs / Son / Daughter — i-plural yi-childs.',               correct: false },
        { text: 'Kid / Kids — kuphela; ungathi "child" engumtsha.',                     correct: false },
      ],
      explanation: "'Child' (singular), 'children' (plural — irregular!), 'son', 'daughter' — yonke iqondile. 'Kid' / 'kids' kuvamisile lakho lulahlekile, kodwa kungezwakala kungahloniphi kakhulu. Esimosweni ezijwayelekile, sebenzisa 'child / children'.",
    },
  ],

  rwenDialogue: {
    intro: "Uxoxa lomeluleki wesikolo wesiNgisi mayelana labantwana bakho — uthwele isikhwama sezikhumbuzo zabo.",
    lines: [
      { speaker: 'npc', target: "How many children do you have?", native: 'Banengi kanjani abantwana bakho?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "I have two children — a son and a daughter.", native: 'Ngilabantwana ababili — indodana lendodakazi.', correct: true,  feedback: "Kuhle. Usebenzise 'children' (i-plural elungileyo) waphinda wabuya wachaza ngabodwa: son lendodakazi." },
          { target: "I have two childs.",                          native: 'Ngilamachilds amabili.',                       correct: false, feedback: "'Childs' AYISIYO igama. Yi-'children' — irregular plural eqondileyo." },
          { target: "Two abantwana.",                              native: 'Babili abantwana.',                              correct: false, feedback: "Faka isenzo: 'I have...' Bese ufaka 'children' yesiNgisi." },
        ],
      },
      { speaker: 'npc', target: "How old is your daughter?", native: 'Indodakazi yakho ineminyaka emingaki?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "My daughter is seven years old.",  native: 'Indodakazi yami ineminyaka eyisikhombisa.', correct: true, feedback: "Kuhle — usebenzise '...is X years old' ngendlela elungileyo." },
          { target: "Daughter seven.",                   native: 'Indodakazi isikhombisa.',                  correct: false, feedback: "Faka 'My daughter is seven years old.' — isenzo 'is' siyadingakala." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Wenze kuhle. Inkulumo yabantwana esiNgisini iqala ngo-'I have...' iphethe ngamanani lamagama athi 'son' / 'daughter' / 'children'.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Bhala ngenhliziyo, ngaphandle kokubuyela emuva.',
    prompts: [
      { prompt: 'Children (ngesiNgisi)',         correct: ['Children', 'children'] },
      { prompt: 'Son (ngesiNgisi)',              correct: ['Son', 'son'] },
      { prompt: 'My daughter (ngesiNgisi)',      correct: ['My daughter', 'my daughter'] },
    ],
  },

  mission: {
    title: 'Umsebenzi wanamhla',
    task: "Khuluma ngokuzwakalayo: 'I have ___ children.' Faka inombolo. Bese uthi: 'My son is ___' lo-'My daughter is ___' (faka iminyaka noma into ekuthandayo ngabo). Uma ungelabantwana, khuluma ngabantwana bomngane wakho — 'My friend has two children.' Vula umlomo, uvumeze esiNgisini.",
    rwenSignoff: "Kusasa — abafowethu nodadewethu (siblings).",
  },

  phase8: {
    scenario: "You're at a parent-teacher meeting at an English-medium school in Harare. The teacher wants to know about your children — how many you have, their ages, anything important about them. Answer warmly and clearly.",
    rwenRole: "Mrs. Hadebe, 45, a calm, friendly Zimbabwean teacher who switches into English for the formal meeting. She'll ask 2-3 simple questions about each child.",
    successCriteria: "User uses 'I have X children' (correct irregular plural). Distinguishes 'son' and 'daughter' correctly. Uses 'my' before each kinship term. Answers age questions with 'My X is Y years old.'",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;

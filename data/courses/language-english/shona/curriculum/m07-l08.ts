import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm07-l08-shona-food',
  module: 7,
  lesson: 8,
  title: 'Sharing Shona food in English — Kutsanangura sadza nemufushwa',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Mhoro! Chidzidzo chinokosha. Vanhu vekuUK kana USA havazivi sadza, mufushwa, kana mukaranga. Iwe ndiwe unozvitsanangurira — mazita echiShona ane simba, asi unoda magwaro mashoma echiNgezi kuti vavanzwisise.",
    culturalNote: "Cherechedza: usashandura mazita echiShona kuita 'maize meal porridge' kana 'African polenta' chete. Tanga nezita rechiShona — 'sadza' — wozotsanangura. Iyi inguva yekuratidza chikafu chedu sezviri — kwete kuchichinja kuti chinzwike sechikafu cheEurope. Vanofunga 'kimchi', 'sushi', 'paella' havadururi mazita avo — neisuwo. Sadza isadza. Tsanangura zvinoshandiswa, kunaka, uye nemamiriro acho.",
  },

  chunks: [
    {
      id: 'sadza',
      target: "Sadza — Zimbabwe's staple food",
      native: 'Sadza',
      literal: 'Sadza (thick maize meal porridge)',
      emoji: '🍲',
      phonetic: 'SAD-zah',
      audioRef: null,
    },
    {
      id: 'mufushwa',
      target: 'Mufushwa — sun-dried vegetables',
      native: 'Mufushwa',
      literal: 'Sun-dried vegetable leaves',
      emoji: '🌿',
      phonetic: 'moo-FOO-shwah',
      audioRef: null,
    },
    {
      id: 'mukaranga',
      target: 'Mukaranga — pumpkin leaves with peanut butter',
      native: 'Mukaranga',
      literal: 'Pumpkin leaves with peanut butter',
      emoji: '🥬',
      phonetic: 'moo-kah-RAHN-gah',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Naming foreign foods — keep the Shona name, then explain',
    explanation: "Mutsetse: <Shona name> — <short English explanation>. Mazita haatori shanduriswa. Wedzera tsananguro pfupi: 'Sadza — it's a thick maize meal porridge' kana 'Mufushwa — sun-dried vegetable leaves'. Iyi inonzi 'Sadza is a thick porridge made from maize meal. We eat it with our hands, with relish on the side.'",
    examples: [
      { target: 'Sadza is a thick maize meal porridge — like polenta but firmer.',          native: 'Sadza ipuriji yemupunga — sezvinoita polenta asi yakaomesa.' },
      { target: 'Mufushwa is sun-dried greens — we cook them with peanut butter.',          native: 'Mufushwa muriwo wakaomeswa — tinobika nedovi.' },
      { target: 'Mukaranga is pumpkin leaves cooked with peanut butter.',                    native: 'Mukaranga muriwo wemboga une dovi.' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Sangana zita rechiShona netsananguro yechiNgezi',
      pairs: [
        { left: 'Sadza',      right: 'Maize meal porridge' },
        { left: 'Mufushwa',   right: 'Sun-dried vegetables' },
        { left: 'Mukaranga',  right: 'Pumpkin leaves with peanut butter' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Nyora muChiNgezi — uri kutsanangura sadza',
      prompt: 'Sadza ipuriji yemupunga.',
      correct: [
        'Sadza is a maize meal porridge.',
        'Sadza is maize meal porridge.',
        'Sadza is a thick maize porridge.',
        'Sadza is a porridge made from maize meal.',
        'sadza is a maize meal porridge.',
      ],
    },
    {
      type: 'translate',
      instruction: 'Nyora muChiNgezi — uri kutsanangura mufushwa',
      prompt: 'Mufushwa muriwo wakaomeswa nezuva.',
      correct: [
        'Mufushwa is sun-dried vegetables.',
        'Mufushwa is sun-dried greens.',
        'Mufushwa is dried vegetable leaves.',
        'Mufushwa is sun-dried leaves.',
        'mufushwa is sun-dried vegetables.',
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Zadzisa — uri kutaurira shamwari yeUK kuti tinodya sei sadza',
      sentence: 'We eat sadza ____ our hands — with a relish on the side.',
      options: ['with', 'in', 'on'],
      correct: 'with',
      context: "'With our hands' = nemaoko edu. Itsika yeZimbabwe.",
    },
    {
      type: 'build_sentence',
      instruction: 'Ronga tsananguro yesadza',
      words: ['is', 'maize', 'porridge', 'meal', 'Sadza', 'a'],
      correct: ['Sadza', 'is', 'a', 'maize', 'meal', 'porridge'],
      translation: 'Sadza ipuriji yemupunga',
    },
    {
      type: 'multiple_choice',
      instruction: 'Sarudza yakanaka',
      question: "Shamwari yeUK abvunza nezvesadza. Unoda kuratidza zita rechiShona, kwete kuchirepedzeresa kunge polenta. Unoti chii?",
      options: [
        { text: "It's called sadza — it's a thick maize meal porridge.", correct: true },
        { text: "It's polenta basically.",                                  correct: false },
        { text: "Maize stuff.",                                             correct: false },
      ],
      explanation: "'It's called sadza' inoratidza kukoshesa zita redu. Tsananguro inotevera kuti vanzwisise — kwete kuchichinja zita.",
    },
  ],

  rwenDialogue: {
    intro: "Uri pa-dinner party muLondon. Mumwe abvunza kuti chii chaunodya kumusha kweZimbabwe. Tsanangura sadza, mufushwa.",
    lines: [
      { speaker: 'npc', target: "I've never had Zimbabwean food. What's the main thing you eat?", native: 'Handisati ndamboravira chikafu cheZimbabwe. Chikuru chaunodya ndechipi?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Sadza — it's a thick maize meal porridge. We eat it with mufushwa, sun-dried greens.", native: 'Sadza — ipuriji yemupunga yakaomesa. Tinodya nemufushwa.', correct: true,  feedback: 'Wakwanisa — wakaratidza zita rechiShona, watsanangura zvakajeka, watsoredza nemufushwa.' },
          { target: "Polenta basically.",                                                                       native: 'Polenta basically.',                                       correct: false, feedback: "Wakaramba zita redu — sadza isadza. Tanga nezita, wozotsanangura." },
          { target: "Food.",                                                                                     native: 'Chikafu.',                                                  correct: false, feedback: "Pfupi zvakanyanya — wakapihwa mukana wekutsanangura, asi hapana zvawakareva." },
        ],
      },
      { speaker: 'npc', target: "Mufushwa? How do you cook that?", native: 'Mufushwa? Unobika sei ichocho?' },
      {
        speaker: 'rwen',
        rwenLine: "Wakwanisa! Watyora — mazita echiShona ane simba muChiNgezi. Sadza isadza, mufushwa imufushwa. Tinozvikoshesa.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Pasina kutarisa kumashure. Nyora kubva pamusoro pengwaro.',
    prompts: [
      { prompt: 'Sadza is a maize meal porridge (in English)', correct: ['Sadza is a maize meal porridge', 'Sadza is a maize meal porridge.', 'Sadza is maize meal porridge', 'sadza is a maize meal porridge.'] },
      { prompt: 'Mufushwa is sun-dried vegetables (in English)', correct: ['Mufushwa is sun-dried vegetables', 'Mufushwa is sun-dried vegetables.', 'Mufushwa is sun-dried greens', 'mufushwa is sun-dried vegetables.'] },
    ],
  },

  mission: {
    title: 'Basa raNhasi',
    task: "Nhasi, taura pamuromo muChiNgezi tsananguro yesadza, mufushwa, kana mukaranga — usingashandurire zita rechiShona. Cherechedza: zita rechiShona, '—', tsananguro pfupi. Mutsetse uyu unokushandura kuva ambassador wechikafu chedu.",
    rwenSignoff: "Tichaonana mangwana — tinodzidza kugamuchira vaeni.",
  },

  phase8: {
    scenario: "Highlight lesson. You're at a dinner party in London. A British colleague who's never been to Africa is genuinely curious about Zimbabwean food. Explain sadza and mufushwa using the Shona names — don't translate them away.",
    rwenRole: "Hannah, 38, your colleague's wife. Asks thoughtful follow-ups: 'How do you eat it?', 'What does it taste like?', 'Is mufushwa hard to find here?'. Genuinely interested.",
    successCriteria: "User keeps the Shona names ('sadza', 'mufushwa') intact, follows each name with a brief English explanation, handles at least one follow-up question. Doesn't reduce sadza to 'polenta' or 'African food'.",
    estimatedMinutes: 4,
    bonusXp: 5,
  },
};

export default lesson;

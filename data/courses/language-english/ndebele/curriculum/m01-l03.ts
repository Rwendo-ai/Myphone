import type { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm01-l03',
  module: 1,
  lesson: 3,
  title: 'Thank you / Sorry — UK vs US "sorry"',
  estimatedMinutes: 6,
  xpReward: 30,

  hook: {
    rwenLine: "EUK, u-'Sorry' uyezwakala kakhulu — ungazwa umuntu eyithi 'sorry' lapho engenzanga lutho. Yikuhlonipha, kayisikuvuma icala.",
    culturalNote: "ESiNdebele, ukucela uxolo kukhomba ukuthi wenze okubi. ESiNgisini se-UK, u-'Sorry' usuke usebenza njengo-'excuse me' — ukuthela isikhathi, ukushona phambi komuntu, kungitsho lapho omunye umuntu ekushaya. EUS lapha akukhonjwa kanjalo — bayasebenzisa u-'Excuse me' kakhulu, lo-'Sorry' kumelele ukuvuma icala. Lokhu kungazidida labafundi abasanda kufika.",
  },

  chunks: [
    {
      id: 'thank_you',
      target: 'Thank you',
      native: 'Ngiyabonga',
      literal: undefined,
      emoji: '🙏',
      phonetic: 'thank-YOO',
      audioRef: null,
    },
    {
      id: 'thanks',
      target: 'Thanks',
      native: 'Bonga (kalula)',
      literal: undefined,
      emoji: '👍',
      phonetic: 'THANKS',
      audioRef: null,
    },
    {
      id: 'cheers',
      target: 'Cheers',
      native: 'Ngiyabonga (kuluhle eUK)',
      literal: 'Cheers (UK casual = thanks)',
      emoji: '🍻',
      phonetic: 'CHEERZ',
      audioRef: null,
    },
    {
      id: 'sorry',
      target: 'Sorry',
      native: 'Ngiyaxolisa / Uxolo',
      literal: undefined,
      emoji: '😅',
      phonetic: 'SOR-ee',
      audioRef: null,
    },
    {
      id: 'excuse_me',
      target: 'Excuse me',
      native: 'Uxolo (ngedluli)',
      literal: 'Excuse me',
      emoji: '🙋',
      phonetic: 'eks-KYOOZ-mee',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Sorry — UK vs US',
    explanation: "EUK: u-'Sorry' usebenza yonke indawo — ekudlulayo, ekuthelayo, ekugcineni isandla, ngaphandle kokuvuma icala. EUS: u-'Sorry' useneresponi-bility — kungaba ukuvuma icala. EUS sebenzisa 'Excuse me' kakhulu. U-'Cheers' yi-UK casual ngokuthi 'thanks' — ungayisebenzisi eUS, abakezwa ukuthi ungatsho.",
    examples: [
      { target: 'Thank you',                  native: 'Ngiyabonga' },
      { target: 'Thanks',                     native: 'Bonga' },
      { target: 'Cheers (UK)',                native: 'Ngiyabonga (kalula, ePub, e-shop)' },
      { target: 'Sorry (UK = excuse me)',     native: 'Uxolo (ngedluli)' },
      { target: 'Excuse me (US-friendly)',    native: 'Uxolo (ngenza indlela)' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Hlanganisa',
      pairs: [
        { left: 'Thank you',  right: 'Ngiyabonga' },
        { left: 'Cheers',     right: 'Ngiyabonga (UK kalula)' },
        { left: 'Sorry',      right: 'Uxolo (UK)' },
        { left: 'Excuse me',  right: 'Uxolo (ngedluli)' },
      ],
    },
    {
      type: 'multiple_choice',
      instruction: 'EManchester ePub. Umuntu ufaka isidlo sakho phambili kwakho — ushaya ulinde lawe ngengoxa elokhu uthengisa. Yini ezatshiwo nguye?',
      question: 'Ungalindela ukuzwa lokho:',
      options: [
        { text: "Cheers, mate.",                correct: true },
        { text: 'Thank you very much, sir.',    correct: false },
        { text: 'I appreciate this gesture.',   correct: false },
      ],
      explanation: "EUK pubs lo-shops, u-'Cheers' yiwo umlozi we-'thanks'. Hatshi formal — kuyajwayelekile.",
    },
    {
      type: 'fill_blank',
      instruction: 'Wedlula umuntu epheveni eLondon. Yini ozayitsho?',
      sentence: '____, can I just squeeze past?',
      options: ['Sorry', 'Thanks', 'Cheers'],
      correct: 'Sorry',
      context: 'EUK, u-"Sorry" usebenza ekudlulayo umuntu — akukucela uxolo ngokukufanayo, kungumdlozi.',
    },
    {
      type: 'translate',
      instruction: 'Bhala ngesiNgisi (UK casual)',
      prompt: 'Ngiyabonga (kuluhle, kungumlomo)',
      correct: ['Cheers', 'cheers', 'Thanks', 'thanks'],
    },
    {
      type: 'multiple_choice',
      instruction: 'EUS, eNew York. Ufuna ukudlula umuntu emgwaqweni. Yini ofanele uyitsho?',
      question: 'Sebenzisa lokhu:',
      options: [
        { text: 'Excuse me.',  correct: true },
        { text: 'Sorry.',      correct: false },
        { text: 'Cheers.',     correct: false },
      ],
      explanation: "EUS, u-'Sorry' uvuma icala, awusebenzisi ukuvula indlela. Sebenzisa 'Excuse me' kuphela. U-'Cheers' eUS ungezwakala wonyamalala — abazi ukuthi utshoni.",
    },
    {
      type: 'build_sentence',
      instruction: 'Hlela',
      words: ['much', 'you', 'Thank', 'very'],
      correct: ['Thank', 'you', 'very', 'much'],
      translation: 'Ngiyabonga kakhulu',
    },
  ],

  rwenDialogue: {
    intro: 'EBristol, esitolo se-corner shop. Uthwele i-bag yokuthengisa, ufuna ukudlula i-aisle ehlubekile.',
    lines: [
      { speaker: 'npc', target: 'No worries — go ahead.', native: 'Akusilutho — qhubeka.' },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Sorry, can I just get past?', native: 'Uxolo, ngingadlula?',         correct: true,  feedback: 'Yikho! UK polite — u-"Sorry" lapha awumeli icala, ufanele.' },
          { target: 'Move please.',                  native: 'Khwesha, ngiyacela.',           correct: false, feedback: 'Kuludludla kakhulu eUK. Sebenzisa "Sorry" kumbe "Excuse me".' },
          { target: 'Excuse me, move.',              native: 'Uxolo, khwesha.',               correct: false, feedback: '"Excuse me" inhle, kodwa "move" kuludludla. Engeza umbuzo: "can I get past?".' },
        ],
      },
      { speaker: 'npc', target: 'There you go.', native: 'Hambela kahle.' },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Cheers!',                      native: 'Ngiyabonga!',                     correct: true,  feedback: 'Sokufundwa kahle! "Cheers" yi-UK casual = thanks. Lapha kuyafanele.' },
          { target: 'Thank you very much indeed.',  native: 'Ngiyabonga kakhulu ngempela.',     correct: false, feedback: 'Ayikubi, kodwa kungezwakala kuphakeme kakhulu — "Cheers" inele.' },
          { target: 'Sorry.',                       native: 'Uxolo.',                          correct: false, feedback: 'Ulungisa idlebe — la kufanele ubonge, hatshi uxolise.' },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Wenze kahle. EUK, u-'Sorry' lo-'Cheers' bayasebenza imihla yonke. EUS, kungahle akhone — uzofunda lokhu.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Bhala ngenhliziyo.',
    prompts: [
      { prompt: "Bhala 'Ngiyabonga' (kalula, UK)", correct: ['Cheers', 'cheers', 'Thanks', 'thanks'] },
      { prompt: "EUK, ungafuna ukudlula umuntu — ungatshoni?", correct: ['Sorry', 'sorry', 'Excuse me', 'excuse me'] },
      { prompt: "Bhala 'Ngiyabonga kakhulu' ngokuphelele",  correct: ['Thank you very much', 'thank you very much'] },
    ],
  },

  mission: {
    title: 'Umsebenzi',
    task: "Lamuhla, sebenzisa u-'Sorry' lapho ungenzanga lutho — ngokulindela umuntu, ngokuhamba phambi kwakhe. Bona ukuthi unjani ku-flow yengxoxo.",
    rwenSignoff: "Cheers — sizahlangana kusasa.",
  },

  phase8: {
    scenario: "ESoutham­pton, e-charity shop ekoneni. Ufuna ukuthengisa ijezi yebhuluku eyiwe ku-rail; uyifaka ku-counter, kodwa uthela isikhathi se-customer omunye odlulayo. Yenza i-three-line exchange ngo-'Sorry' lo-'Cheers'.",
    rwenRole: "Margaret — volunteer e-charity shop, eminyakeni engaba ngu-65, owelizweni leMidlands. Olomusa, ozwakala kahle.",
    successCriteria: "Umfundi asebenzise 'Sorry' lapho engenzanga lutho (njengokungena phambi kuka-customer), achaze ukuthengisa kwakhe ngokuzwakala, futhi avale nge-'Cheers' kumbe 'Thanks' (HATSHI nge-'Thank you very much indeed' okubonakala kuphakeme kakhulu kuleyondawo).",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;

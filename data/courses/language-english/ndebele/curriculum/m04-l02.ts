import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm04-l02-hands-arms-legs',
  module: 4,
  lesson: 2,
  title: 'Hands, arms, legs',
  estimatedMinutes: 5,
  xpReward: 30,

  hook: {
    rwenLine: "Izandla, ingalo, lemilenze — yikho okusebenzayo nsuku zonke. Lapha eUK uzakhuluma ngezandla zakho lapho ulobenzela kungasebenzi, kumbe lapho uchaza umthwalo eMatron lapho usebenza.",
    culturalNote: "Ezindaweni zomsebenzi eUK njenge-care home, NHS, kumbe ku-construction, kuvame ukuxoxa ngomzimba: 'I cut my hand', 'my arm is sore from lifting', 'I twisted my leg'. Le-vocabulary ayisiyo ye-medical kuphela — ifuneka kanjalo kwi-injury report. Khumbula: kuthi 'arm' kuye phansi kuze kufike kwisandla, ku-hand yikho kuphela isandla esisetshenziswayo. Kahle ngalokho.",
  },

  chunks: [
    {
      id: 'hand',
      target: 'Hand',
      native: 'Isandla',
      literal: 'one hand — plural is "hands"',
      emoji: '✋',
      phonetic: 'HAND',
      audioRef: null,
    },
    {
      id: 'arm',
      target: 'Arm',
      native: 'Ingalo',
      literal: 'shoulder to wrist',
      emoji: '💪',
      phonetic: 'AHRM',
      audioRef: null,
    },
    {
      id: 'leg',
      target: 'Leg',
      native: 'Umlenze',
      literal: 'hip to ankle — full leg',
      emoji: '🦵',
      phonetic: 'LEG',
      audioRef: null,
    },
    {
      id: 'foot',
      target: 'Foot',
      native: 'Unyawo',
      literal: 'one foot — plural is "feet" (irregular!)',
      emoji: '🦶',
      phonetic: 'FUUT',
      audioRef: null,
    },
  ],

  pattern: {
    name: "Plurals: regular vs irregular",
    explanation: "'Hand' → 'hands', 'arm' → 'arms', 'leg' → 'legs' — kuyinto elula, faka -s. Kodwa 'foot' → 'feet' — yi-irregular. Lokhu akusebenzi nge-rule, kufanele uyikhumbule. Esimweni esisodwa esinjeya: 'tooth' → 'teeth'. Ungatsho 'foots' kumbe 'tooths' — yikho akukho esiNgisini.",
    examples: [
      { target: 'My hand hurts',        native: 'Isandla sami siyangiphatha' },
      { target: 'Both my arms are tired', native: 'Ingalo zami zombili zikhathele' },
      { target: 'My feet are cold',     native: 'Inyawo zami ziyaqanda' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Hlanganisa amagama lentanyongo zawo',
      pairs: [
        { left: 'Hand', right: 'Isandla' },
        { left: 'Arm',  right: 'Ingalo' },
        { left: 'Leg',  right: 'Umlenze' },
        { left: 'Foot', right: 'Unyawo' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Khetha igama eliqondileyo (singular kumbe plural)',
      sentence: 'I cut my _____ at work yesterday.',
      options: ['hand', 'hands', 'foot'],
      correct: 'hand',
      context: 'Nxa usika isandla esisodwa, sebenzisa "hand" (singular). Sebenzisa "my hand" — ku-injury report kuvame leli phrase.',
    },
    {
      type: 'translate',
      instruction: 'Bhala ngesiNgisi',
      prompt: 'Inyawo zami zikhathele (the irregular plural!)',
      correct: ['My feet are tired', 'my feet are tired'],
    },
    {
      type: 'multiple_choice',
      instruction: 'Iyiphi i-plural eqondileyo ka-"foot"?',
      question: 'I walked all day. Now my _____ hurt.',
      options: [
        { text: 'feet', correct: true },
        { text: 'foots', correct: false },
        { text: 'foot', correct: false },
      ],
      explanation: "'Foot' yi-irregular plural — kuthiwa 'feet'. Lokhu ku-vital ku-medical setting kanjalo kunsuku zonke: 'my feet hurt' (lokhu kuvame kakhulu eUK lapho uhambisa kakhulu).",
    },
  ],

  rwenDialogue: {
    intro: "Usebenza ku-care home eBirmingham. Lwiwumiyethe ngokuphakamisa umuntu — ingalo yakho iyaqaqamba. Manager wakho ufuna i-incident report.",
    lines: [
      {
        speaker: 'npc',
        target: "I heard you hurt yourself moving Mr Williams. What happened?",
        native: 'Ngizwile uzilimazile ulokufuduka uMnu. Williams. Kwenzakaleni?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: "I lifted him too quickly. My arm and back are sore.", native: 'Ngimphakamisile masinya. Ingalo yami lomhlana wami siyaqaqamba.', correct: true, feedback: "Kahle. 'My arm and back' — ku-clear le-injury. Manager uzakwazi ukugcwalisa i-form." },
          { target: "Arm is paining and back also.", native: 'Ingalo iyezwa ubuhlungu lomhlana futhi.', correct: false, feedback: "Faka 'my' — 'my arm and back are sore'. Akwenelanga ukuthi 'arm is paining' esiNgisini." },
          { target: "I have arm pain and leg pain.", native: 'Ngilesidlokoba sengingaliphakamisa.', correct: false, feedback: "Akwakhi okudingayo — kufanele uthi yiziphi izitho ezilinyalayo. Sebenzisa 'my arm' lo 'my back' (hatshi 'leg' nxa ungalimanga unyawo)." },
        ],
      },
      {
        speaker: 'npc',
        target: "Okay. Can you still use your hands properly?",
        native: 'Kulungile. Usengazisebenzisa kahle izandla zakho?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: "Yes, my hands are fine. Only my arm is sore.", native: 'Yebo, izandla zami zilungile. Yingalo yami kuphela eqaqambayo.', correct: true, feedback: "Kuhle — 'my hands' (plural ngoba ezimbili) lo 'my arm' (singular ngoba yinye)." },
          { target: "Yes, my hand is fine.", native: 'Yebo, isandla sami silungile.', correct: false, feedback: "Mostly kahle, kodwa nxa zombili zilungile, sebenzisa 'my hands' (plural)." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Wenzile kakuhle. Ingalo, isandla, izandla — uyazwakala ku-Manager. Lokhu kuhlola u-care record wakho ngendlela elungileyo.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Bhala ngekhanda — ungabuyeli phezulu.',
    prompts: [
      { prompt: 'Isandla esisodwa (ngesiNgisi)', correct: ['Hand', 'hand'] },
      { prompt: 'Inyawo (zombili — irregular plural!)', correct: ['Feet', 'feet'] },
      { prompt: 'Ingalo (singular)', correct: ['Arm', 'arm'] },
    ],
  },

  mission: {
    title: 'Umsebenzi wanamhlanje',
    task: "Phakamisa isandla sakho ubone usithi: 'this is my hand'. Phinde leyo nxa uphakamisa ingalo yakho ('my arm'), umlenze ('my leg'), lonyawo ('my foot'). Khumbula: 'feet' (ezimbili) hatshi 'foots'.",
    rwenSignoff: "Le vocabulary izaktholisa esikhungweni sokusebenza nakwidokotela. Khusasa — kufundiswe izitho ezikukhulu zomzimba.",
  },

  phase8: {
    scenario: "Care home injury report eBirmingham. User wenze accident encinyane elifutshane lapha — ingalo iyezwa ubuhlungu. Manager uzobuza ukuthi yikuphi okwenzakeleyo lokuthi yiziphi izitho ezilinyalayo.",
    rwenRole: "Sarah, 45, care home manager, professional but supportive. Wants short clear answers about which body parts are affected — needs them for a workplace injury form.",
    successCriteria: "User correctly names at least three body parts with possessive 'my' (e.g. 'my arm', 'my hand', 'my back', 'my leg', 'my feet'), uses irregular plural 'feet' (not 'foots') if mentioning both feet, distinguishes singular ('hand') from plural ('hands') correctly.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;

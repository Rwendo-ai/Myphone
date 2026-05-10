import type { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm10-l06-doctor',
  module: 10,
  lesson: 6,
  title: "UK idioms — \"It's a piece of cake\", \"Bob's your uncle\"",
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Ama-idioms angumphefumulo wolimi. Esikhiweni sesiNdebele kulokuthi 'isandla siyageza esinye' — esiNgisini abantu bayasebenzisa ezabo. EUK, 'It's a piece of cake' (lula kakhulu), 'Bob's your uncle' (uqedile, kulungile!), 'It cost an arm and a leg' (kubize kakhulu). Uba uzizwa, ungumuntu we-deep level.",
    culturalNote: "EUK, ama-idioms ayikhethiwe kakhulu. 'It's a piece of cake' yokucacisa ukuthi umsebenzi mlula. 'Bob's your uncle' kunzima — yi-British classic — kuthiwa kuzwakala ekupheleni kwesiqondiso 'do A, do B, do C — and Bob's your uncle!' (kungathi 'usuqedile!'). 'It cost an arm and a leg' kufana lokukhuluma ngokubiza kwemali. Ungasebenzisi ama-idioms abantu abenzi — 'Bob's your uncle' ngokuvamileyo abasayisebenzisi izinto kabili-kabili lapho zifanayo. Ekuqaleni, izwa kuphela — wena vele ulalele futhi ungenze ihaba uba ungayazi. UB-1 noma U-A2 abantu bayasivumela uba ungazimisele. Uba ulinde i-UK, le yi-superpower yakho yokuhlangana labantu emaphabhini.",
  },

  chunks: [
    {
      id: 'piece_of_cake',
      target: "It's a piece of cake",
      native: 'Lula kakhulu / akusinzima',
      literal: 'A piece of cake (very easy)',
      emoji: '🍰',
      phonetic: 'its-uh-PEES-uv-KAYK',
      audioRef: null,
    },
    {
      id: 'bobs_your_uncle',
      target: "Bob's your uncle",
      native: 'Usuqedile / kulungile manje',
      literal: "Bob's your uncle (= done!)",
      emoji: '🎩',
      phonetic: 'BOBS-yur-UN-kul',
      audioRef: null,
    },
    {
      id: 'arm_and_a_leg',
      target: 'It cost an arm and a leg',
      native: 'Kubize kakhulu / imali eninganana',
      literal: 'Cost an arm and a leg (very expensive)',
      emoji: '💸',
      phonetic: 'it-KOST-an-ARM-an-uh-LEG',
      audioRef: null,
    },
    {
      id: 'pop_round',
      target: 'Pop round / pop in',
      native: 'Sondela / fika kancane',
      literal: 'Pop round (UK, casual visit)',
      emoji: '🚪',
      phonetic: 'POP-rownd',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'UK idioms — sound natural',
    explanation: "Ama-idioms wesiNgisi awathethelelwa ngokuhlanganiselwa amagama — yifaniselo eseyihlalele yodwa. 'It's a piece of cake' = mlula. 'Bob's your uncle' = usuqedile (fakwa ekugcineni kwemibuzo). 'It cost an arm and a leg' = imali eninganana. 'Pop round' = fika ekhaya kancane (UK casual). Ungalindi ukuthi ulobane mhlolo lokho — phendula ngokubona, lalela kabili-kabili abantu basebenzisa kanjani.",
    examples: [
      { target: "Don't worry — the test is a piece of cake.",                native: 'Ungakhathazi — i-test mlula kakhulu.' },
      { target: "Just press the button, and Bob's your uncle!",              native: 'Cindezela inkinobho nje, usuqedile!' },
      { target: 'My new phone cost an arm and a leg.',                       native: 'Ifoni yami entsha ibize imali eninganana.' },
      { target: "Pop round for tea on Saturday?",                            native: 'Sondela ngokutshani ngeMgqibelo?' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Hlanganisa i-idiom lencazelo',
      pairs: [
        { left: "A piece of cake",        right: 'Lula kakhulu' },
        { left: "Bob's your uncle",       right: 'Usuqedile' },
        { left: 'Cost an arm and a leg',  right: 'Imali eninganana' },
        { left: 'Pop round',              right: 'Fika kancane (UK)' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Khetha i-idiom efaneleyo',
      sentence: "I learned to drive in two weeks — it was _____.",
      options: ['a piece of cake', 'an arm and a leg', "Bob's your uncle"],
      correct: 'a piece of cake',
      context: "Sikhuluma ngo-mlula. 'A piece of cake' = lula kakhulu. 'An arm and a leg' kufana lokubiza, 'Bob's your uncle' yokupheza i-instruction.",
    },
    {
      type: 'translate',
      instruction: "Bhala ngesiNgisi (sebenzisa 'cost an arm and a leg')",
      prompt: 'Imota yami entsha yabize imali eninganana.',
      correct: [
        'My new car cost an arm and a leg.',
        'My new car cost me an arm and a leg.',
      ],
    },
    {
      type: 'multiple_choice',
      instruction: 'Khetha eyiyo — uchaza i-recipe',
      question: "Ufundisa umngane kubhaka i-cake. Yiphi i-UK idiom efaneleyo ekugcineni?",
      options: [
        { text: "Mix the eggs, add flour, bake for 30 minutes — and Bob's your uncle!", correct: true },
        { text: "Mix the eggs, add flour, bake for 30 minutes — and a piece of cake!",   correct: false },
        { text: "Mix the eggs, add flour, bake for 30 minutes — and arm and leg!",       correct: false },
      ],
      explanation: "U-'Bob's your uncle' uphethwa ngendlela 'do A, do B, and Bob's your uncle!' = 'usuqedile!'. U-'A piece of cake' kuyenze kuvele kubelula ('mlula'); HATSHI yi-cake yangempela. U-'An arm and a leg' yokubiza.",
    },
  ],

  rwenDialogue: {
    intro: 'Usemumvileni emakethe, uxoxa lomuntu omuhle ngomsebenzi wakho omutsha.',
    lines: [
      { speaker: 'npc', target: "How's the new job? Is the work hard?", native: "Umsebenzi omutsha uhamba njani? Iyaba nzima yini?" },
      {
        speaker: 'user',
        userChoices: [
          {
            target: "Honestly, it's a piece of cake compared to my old one. The pay is great, but the rent in this area cost an arm and a leg!",
            native: "Ngeqiniso, mlula kakhulu uma uqathaniswa lowodala. I-pay imuhle, kodwa irenti yendawo le ibize imali eninganana!",
            correct: true,
            feedback: "I-mastery — usebenzise ama-idioms amabili ngendlela eyenjwayelo. UmuntuwaseBritain uzakuthatha njengomngane.",
          },
          {
            target: "Work easy. Money expensive house. Cake.",
            native: "Umsebenzi mlula. Imali ibiza kakhulu indlu. Cake.",
            correct: false,
            feedback: "Awusongene amagama. I-idioms zifuna i-sentence ephelele: 'It's a piece of cake', 'It cost an arm and a leg'.",
          },
          {
            target: "Bob your uncle the cake leg.",
            native: "Bob umalume wakho ikhekhe umlenze.",
            correct: false,
            feedback: "Wahlanganise zonke ama-idioms — kayisebenzi kanjalo. Ihlukanise: 'It's a piece of cake' (mlula). 'Bob's your uncle' yokupheza.",
          },
        ],
      },
      { speaker: 'npc', target: "Ha! I know that feeling. Pop round for tea sometime!", native: "Ha! Ngiyazi lokho. Sondela ngokutshani isikhathi esithile!" },
      { speaker: 'rwen', rwenLine: "Khangela — usebenzise i-British idioms ngokuvamileyo. UmuntuwaseUK uzwa: 'lo umuntu uyazwana lathi.'", rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: 'Ungabuyeli emuva.',
    prompts: [
      { prompt: "Bhala i-idiom ye 'kulula kakhulu' ngesiNgisi", correct: ["It's a piece of cake", "a piece of cake", "It's a piece of cake."] },
      { prompt: "Bhala i-idiom ye 'kubize kakhulu' ngesiNgisi", correct: ['cost an arm and a leg', 'It cost an arm and a leg', 'It costs an arm and a leg'] },
    ],
  },

  mission: {
    title: 'Umsebenzi wakho wamuhla',
    task: "Khetha eyodwa kwama-idioms — 'a piece of cake', 'cost an arm and a leg', kumbe 'Bob's your uncle'. Yifake emisihweni emithathu eyahlukene yakho. Bhala phansi futhi ufunde ngomlomo.",
    rwenSignoff: "Kusasa — ama-idioms aseUS. 'Hit the nail on the head.'",
  },

  phase8: {
    scenario: "You're chatting with a British friend at a pub. They ask about your new job, your flat, and your weekend plans. Slip in 2-3 UK idioms naturally — 'a piece of cake', 'Bob's your uncle', 'cost an arm and a leg', 'pop round'.",
    rwenRole: "Lucy, 32, a born-and-bred Mancunian. Friendly, uses idioms heavily. Will pick up if you sound stiff and gently encourage you to relax.",
    successCriteria: "User uses at least TWO UK idioms naturally in context. Doesn't force all four into one sentence. Sounds conversational. Stays in English.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;

import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm10-l02-angry-frustrated',
  module: 10,
  lesson: 2,
  title: 'Anger & Frustration — Kutsamwa nekufinhwa',
  estimatedMinutes: 5,
  xpReward: 30,

  hook: {
    rwenLine: "MuChiNgezi, kutsamwa kunotaurwa zvakajeka: 'I'm angry', 'I'm frustrated'. Asi pa basa kana panyika dzeUK/USA/SA, kunyange uchitsamwa, hutsika hwakaomarara — 'I'm a bit frustrated about ___' inotambirika kupfuura 'I'm angry' yega. 'Calm down' chinhu chinotaurirwa — chenjera, kana ukati 'calm down' kune mumwe akatsamwa, anogona kuwedzera kutsamwa.",
    culturalNote: "MuChiShona, kutsamwa kunowanzo bvuma 'mwoyo wangu wakatsva' kana 'ndakatsamwa zvikuru' — somatic+direct. MuChiNgezi pa basa, mhutu ndeyekuderedza ('a bit frustrated') uye kutsanangura chikonzero ('about the deadline change'), kwete kungoti 'I'm angry'. Chinangwa: kutaura kushushikana pasina kupisira hurukuro.",
  },

  chunks: [
    {
      id: 'im_angry',
      target: "I'm angry",
      native: 'Ndakatsamwa',
      literal: 'I-am angry',
      emoji: '😠',
      phonetic: 'aym-ANG-gree',
      audioRef: null,
    },
    {
      id: 'im_frustrated',
      target: "I'm frustrated",
      native: 'Ndafinhwa',
      literal: 'I-am frustrated',
      emoji: '😤',
      phonetic: 'aym-FRUS-tray-ted',
      audioRef: null,
    },
    {
      id: 'calm_down',
      target: 'Calm down',
      native: 'Dzikama',
      literal: 'be-calm down',
      emoji: '🌬️',
      phonetic: 'KAHM-down',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Strong emotions, soft delivery',
    explanation: "Pa basa kana munhu asingakuzivi zvakanyanya, pakati pe 'I'm angry' ne 'I'm frustrated' sarudza 'frustrated' — yakatsetseka. Wedzera 'a bit' kuti uderedze: 'I'm a bit frustrated about ___'. Kana uchidoda kutsanangura chikonzero, shandisa 'about + chinhu' kana 'because + chirevo'. 'Calm down' inogona kunzwika seinotambidza unyanzvi — chenjera nayo; 'Let's take a breath' inoreruka.",
    examples: [
      { target: "I'm a bit frustrated about the deadline.",      native: 'Ndafinhwa zvishoma ne deadline.' },
      { target: "I'm angry because they didn't tell me.",        native: 'Ndakatsamwa nokuti havana kundiudza.' },
      { target: "Let's take a breath — calm down.",               native: 'Tifemerei zvishoma — dzikama.' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Sangana mashoko echiNgezi nezviri muChiShona',
      pairs: [
        { left: "I'm angry",         right: 'Ndakatsamwa' },
        { left: "I'm frustrated",     right: 'Ndafinhwa' },
        { left: 'Calm down',           right: 'Dzikama' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Nyora muChiNgezi — uri pabasa, deadline yashandurwa',
      prompt: 'Ndafinhwa zvishoma ne deadline yatsva.',
      correct: ["I'm a bit frustrated about the new deadline.", "I am a bit frustrated about the new deadline.", "I'm a little frustrated about the new deadline.", "i'm a bit frustrated about the new deadline."],
    },
    {
      type: 'translate',
      instruction: 'Nyora muChiNgezi',
      prompt: 'Ndakatsamwa nokuti havana kundiudza.',
      correct: ["I'm angry because they didn't tell me.", "I am angry because they didn't tell me.", "I'm angry because they did not tell me.", "i'm angry because they didn't tell me."],
    },
    {
      type: 'build_sentence',
      instruction: "Vaka chirevo: 'I'm a bit frustrated about this'",
      words: ['this.', 'about', "I'm", 'frustrated', 'a', 'bit'],
      correct: ["I'm", 'a', 'bit', 'frustrated', 'about', 'this.'],
      translation: 'Ndafinhwa zvishoma nezvechinhu ichi',
    },
    {
      type: 'fill_blank',
      instruction: 'Zadzisa — kutaura nemumwe wakatsamwa, ushandise mashoko anodzikamisa',
      sentence: "Let's take a breath — _____ down.",
      options: ['calm', 'sit', 'go'],
      correct: 'calm',
      context: "'Calm down' = dzikama. 'Take a breath + calm down' chombo chinodzikamisa pasina kuratidza utsi.",
    },
    {
      type: 'multiple_choice',
      instruction: 'Sarudza chinosvika muoffice',
      question: "Your manager changed the deadline for the third time. You're meeting them. What's most professional?",
      options: [
        { text: "I'm a bit frustrated about the deadline changes — can we plan more clearly?", correct: true },
        { text: "I'm so angry I could scream.",                                                   correct: false },
        { text: "It's fine, no problem.",                                                          correct: false },
      ],
      explanation: "Pa basa: ratidza pachokwadi ('frustrated'), pa hukama hwakajeka ('about the deadline changes'), wedzera chibvumirano chinoshanda ('can we plan more clearly?'). Kunyepedzera ('it's fine') kunoputika gare gare.",
    },
  ],

  rwenDialogue: {
    intro: "Uri pa1-on-1 ne manager wako paLondon. Mavadeadline mashanduke katatu mwedzi uno. Watora kashoma kekutaura.",
    lines: [
      { speaker: 'npc', target: "Anything on your mind before we wrap up?", native: 'Pane chamuri kufunga tisati tapedza here?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Yes, actually. I'm a bit frustrated about the deadline changes — can we plan more clearly going forward?", native: 'Hongu, kuva nepachokwadi. Ndafinhwa zvishoma nemashandurwo edeadline — tinogona kuronga zvakanyatsojeka here mberi?', correct: true, feedback: "Wakwanisa — 'a bit frustrated' (yakatsetseka), 'about the deadline changes' (chiri kushaisha), 'can we plan' (chinangwa chichienderera mberi). Iyi i ChiNgezi pabasa pakanaka." },
          { target: "I'm so angry. This is a mess.", native: 'Ndakatsamwa zvikuru. Izvi imhirizhonga.', correct: false, feedback: "Pachokwadi asi pasina hutsika hwepabasa — manager achaita defensive. Pinza ne 'a bit frustrated about ___' kuti hurukuro irambe yakavhurika." },
          { target: "It's all fine.", native: 'Zvose zvakanaka.', correct: false, feedback: "Kunyepedzera — gare gare zvichawanikwa. Ratidza pachokwadi: 'I'm a bit frustrated about the deadline changes.'" },
        ],
      },
      { speaker: 'npc', target: "Fair point. Let's set a clearer plan now.", native: 'Inoshaisha. Ngatironge hurongwa hwakajeka iye zvino.' },
      {
        speaker: 'rwen',
        rwenLine: "Wakwanisa! 'A bit frustrated' iyona pace — pachokwadi pasina kupisira moto. Wakaratidza chii (deadline changes) uye chinodiwa (clearer plan). ChiNgezi pa basa chinoda kupfava, kwete kunyepedzera.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Pasina kutarisa kumashure.',
    prompts: [
      { prompt: "I'm frustrated (in English)",     correct: ["I'm frustrated", "I am frustrated", "i'm frustrated"] },
      { prompt: 'Calm down (in English)',           correct: ['Calm down', 'calm down', 'Calm down.', 'calm down.'] },
    ],
  },

  mission: {
    title: 'Basa raNhasi',
    task: "Funga chinhu chimwe chiri kukufinhа vhiki rino — pabasa, mumba, kwese. Nyora chirevo chimwe muChiNgezi: 'I'm a bit frustrated about ___ because ___.' Verenga muromo zvishoma — uchaona kuti kunyange kunyora kunopfava mafungiro.",
    rwenSignoff: "Mangwana — kutya nekunetseka. Manzwiro echihofori — asi anotaurwa.",
  },

  phase8: {
    scenario: "You're in a 1-on-1 with your English-speaking manager in London. The project deadline has been moved THREE times this month. You need to express frustration professionally and propose a clearer plan — without burning the relationship.",
    rwenRole: "James, 45, your line manager. Reasonable but stressed. Will appreciate honesty if delivered professionally. Will get defensive if you say 'I'm angry' bluntly.",
    successCriteria: "User uses 'I'm a bit frustrated about ___' (NOT 'I'm angry' alone). States specific cause. Proposes a forward-looking solution ('can we plan...', 'going forward...'). Stays in English throughout.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;

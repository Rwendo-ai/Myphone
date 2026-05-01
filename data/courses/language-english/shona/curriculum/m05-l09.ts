import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm05-l09-family-stories',
  module: 5,
  lesson: 9,
  title: 'Telling family stories — Nyaya dzepamhuri',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "ChiShona chiri shoko renyaya — kare-kare ne 'mbuya vaisi...' ne 'anogara achiti...'. MuChiNgezi: 'A long time ago...', 'My grandmother used to...', 'He always says...'. Nyaya dzakaita basa rimwe chete.",
    culturalNote: "MuChiShona, kutaura nyaya yepamhuri inhanho ye uchenjeri — yakareva tsika, mafungiro, ne kuita zvakanaka. MuChiNgezi, 'used to' (vaisitaura) inotakura tsika yakapfuura — chinhu chaiitwa kazhinji asi chisingaitwi nhasi. Iyi pattern haina kunaka muChiShona — tine 'aisi' / 'vaisi'. Kufunga 'used to' kunoita kuti uone musiyano — chiripo ChiShona chinotaura, asi chinoshanda zvakasiyana.",
  },

  chunks: [
    {
      id: 'long_time_ago',
      target: 'A long time ago',
      native: 'Kare-kare',
      literal: 'long-long',
      emoji: '🕰️',
      phonetic: 'uh-LAWNG-tahym-uh-GOH',
      audioRef: null,
    },
    {
      id: 'used_to',
      target: 'My grandmother used to...',
      native: 'Mbuya vaisi...',
      literal: 'past habitual marker',
      emoji: '👵🏾',
      phonetic: 'mahy GRAND-muh-thuh YOOST-too',
      audioRef: null,
    },
    {
      id: 'always_says',
      target: 'He always says...',
      native: 'Anogara achiti...',
      literal: 'he-stays saying',
      emoji: '💬',
      phonetic: 'hee AWL-wayz sez',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Past habits — used to / always says',
    explanation: "MuChiNgezi, 'used to + verb' inoratidza chinhu chaiitwa kazhinji nguva yakapfuura asi chisingachaitwi nhasi: 'My grandmother used to sing' (mbuya vaiimba — havasati vachiimba). 'Always says' (chizvino) inoshanda kana munhu achichi taura nhasi. 'Used to say' (akapfuura) — kana asisataure izvozvo. Cherechedza: pasina 's' pa 'used to + verb' kunyange uchitaura nezve ake (he used to say, kwete he used to says).",
    examples: [
      { target: 'A long time ago, my grandmother lived in the village.', native: 'Kare-kare, mbuya vaigara kumusha.' },
      { target: 'My grandfather used to tell us stories.',                native: 'Sekuru vaisitiudza nyaya.' },
      { target: 'My uncle always says: \'Patience is power.\'',           native: 'Sekuru vangu vanogara vachiti: "Mwoyo murefu isimba."' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Sangana mashoko echiNgezi nezviri muChiShona',
      pairs: [
        { left: 'A long time ago',         right: 'Kare-kare' },
        { left: 'My grandmother used to',  right: 'Mbuya vaisi' },
        { left: 'He always says',          right: 'Anogara achiti' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Nyora muChiNgezi',
      prompt: 'Sekuru vaisitiudza nyaya pamoto manheru.',
      correct: ['My grandfather used to tell us stories by the fire at night.', 'My grandfather used to tell us stories by the fire in the evening.', 'My grandfather used to tell us stories at night by the fire.'],
    },
    {
      type: 'translate',
      instruction: 'Nyora muChiNgezi',
      prompt: "Baba vangu vanogara vachiti: 'Basa harizi mhinduro yebenzi.'",
      correct: ["My father always says: 'Work is not a fool's answer.'", 'My father always says: "Work is not a fool\'s answer."', "My father always says, 'Work is not a fool's answer.'"],
    },
    {
      type: 'build_sentence',
      instruction: 'Vaka chirevo: "A long time ago, we lived in Mutare"',
      words: ['Mutare.', 'A', 'lived', 'long', 'time', 'in', 'we', 'ago,'],
      correct: ['A', 'long', 'time', 'ago,', 'we', 'lived', 'in', 'Mutare.'],
      translation: 'Kare-kare, taigara muMutare',
    },
    {
      type: 'fill_blank',
      instruction: "Zadzisa — pakati pe 'used to' ne 'always'",
      sentence: 'My grandmother _____ sing every Sunday at church — until she got too old.',
      options: ['used to', 'always', 'never'],
      correct: 'used to',
      context: "'Used to' inoratidza tsika yakapfuura yasipo nhasi — perfect pano nokuti mbuya havachimbi. 'Always' inoshanda paChizvino kana paIstoria isina zvakaperera.",
    },
    {
      type: 'multiple_choice',
      instruction: 'Sarudza yakanaka',
      question: "You're sharing a memory of your grandfather, who passed away. He used to teach you to fish. Which sentence is most natural?",
      options: [
        { text: "My grandfather used to take me fishing every Saturday.", correct: true },
        { text: "My grandfather always takes me fishing.",                  correct: false },
        { text: "My grandfather take me fishing past time.",                 correct: false },
      ],
      explanation: "Kana sekuru vako vakapinda, 'used to' ndiyo inonatural — inoratidza kuti chinhu chaiitwa asi hachichaitwi. 'Always takes' (chizvino) yakanganisa nokuti vapfuura.",
    },
  ],

  rwenDialogue: {
    intro: "Uri pa English-language storytelling night. Vaposhi vari kupa mukana wekuti utaure nyaya yepamhuri yako yakanaka chose.",
    lines: [
      { speaker: 'npc', target: "Tell us a family story — anything that's stayed with you.", native: 'Tiudze nyaya yepamhuri — chinhu chero chakaramba mauri.' },
      {
        speaker: 'user',
        userChoices: [
          { target: "A long time ago, my grandmother used to bake bread every Saturday. She always said: 'A full belly makes a quiet child.' I still hear her voice.", native: 'Kare-kare, mbuya vaisibika chingwa Mugovera weguni. Vaigara vachiti: "Dumbu rakaguta rinopa mwana wakanyarara." Ndichiri kunzwa izwi ravo.', correct: true, feedback: "Yakwana — 'A long time ago' (kutangiswa), 'used to bake' (tsika yakapfuura), 'always said' (kutaura kwainoitika), 'I still hear' (chizvino chemwoyo). Nyaya yangwarira pamafungiro." },
          { target: "Long ago grandmother bake bread always say full belly quiet child.",                                                                              native: 'Kare-kare mbuya bika chingwa kazhinji ti dumbu rakaguta mwana wakanyarara.',                                                                              correct: false, feedback: "Mashoko aripo asi pasina mufambo — wedzera 'used to', 'always said', 'I still hear' kuti chirevo chinzwike senyaya kwete sechisangano chemashoko." },
          { target: "Mbuya vaisibika chingwa.",                                                                                                                       native: 'Mbuya vaisibika chingwa.',                                                                                                                                    correct: false, feedback: "ChiShona chete — vateereri vari ku ChiNgezi. Shandura: 'My grandmother used to bake bread.'" },
        ],
      },
      { speaker: 'npc', target: "That's beautiful — thank you for sharing.", native: 'Zvakanaka — tinotenda nekutigovera.' },
      {
        speaker: 'rwen',
        rwenLine: "Wakwanisa! 'Used to' inoratidza tsika yapfuura, 'always said' inotakura izwi rasiri kuporera. Mbuya vako varatidzwa muChiNgezi nemwoyo.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Pasina kutarisa.',
    prompts: [
      { prompt: 'My grandmother used to (in English)',  correct: ['My grandmother used to', 'my grandmother used to'] },
      { prompt: 'A long time ago (in English)',          correct: ['A long time ago', 'a long time ago', 'A long time ago,', 'a long time ago,'] },
    ],
  },

  mission: {
    title: 'Basa raNhasi',
    task: "Funga nyaya imwe yepamhuri yako — chinhu chinoramba mauri. Edzana kunyora pa diary kana phone notes muChiNgezi: 'A long time ago, my [person] used to ___. He/She always said: \"___\".' Verenga muromo zvishoma kana waita.",
    rwenSignoff: "Mangwana — capstone! Hurukuro yose nezvepamhuri muChiNgezi.",
  },

  phase8: {
    scenario: "You're at an English-language storytelling night. The host invites you to share a real family story — something that has stayed with you. Tell it with detail: time, person, what they did, what they used to say.",
    rwenRole: "Maria, the storytelling night host. Warm, attentive. Asks gentle follow-ups: 'How old were you?', 'What did her voice sound like?', 'Do you still cook that recipe?'",
    successCriteria: "User uses 'A long time ago' OR 'When I was young'. Uses 'used to + verb' at least once. Quotes a family member with 'always said' or 'used to say'. Tells a coherent mini-story (3+ sentences). Avoids Shona.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;

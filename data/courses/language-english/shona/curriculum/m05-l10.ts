import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm05-l10-conversation',
  module: 5,
  lesson: 10,
  title: 'A family conversation — Capstone',
  estimatedMinutes: 7,
  xpReward: 50,

  hook: {
    rwenLine: "Wapfuura Module 5! Iye zvino unoziva amai/baba, mukoma/munin'ina, vana, mbuya/sekuru, tete/sekuru, vamwene/vatezvara, shamwari, ne zviito zvepamhuri (visit, call, miss). Chinangwa chenhasi: zvose mu hurukuro imwe yakareba.",
    culturalNote: "Mhuri yedu yeChiShona ine udzamu hwakapfuma kupfuura ChiNgezi — zita rega rega rinotaura chinzvimbo, ukuru, kana side. Mu Module ino, hauna kurasikirwa nezvauri — wakatengesa pfungwa dzeChiShona kuita Chinaye chinozotaurika muChiNgezi. Kana waita chirevo cha 'my aunt — my father's sister', uri kuratidzwa kuti unoziva 'tete' inoreva chii. Kuziva mariro miri ndiwo udzamu hwemurume.",
  },

  chunks: [
    {
      id: 'family_intro',
      target: "I have a big family. My parents and my two siblings live in Harare.",
      native: 'Ndine mhuri yakakura. Vabereki vangu nevana vamai vangu vaviri vanogara muHarare.',
      literal: 'big family, parents, siblings',
      emoji: '👨‍👩‍👧‍👦',
      phonetic: 'ay hav uh BIG FAM-uh-lee...',
      audioRef: null,
    },
    {
      id: 'extended_family',
      target: "My grandmother lives in the village, and my aunt — my father's sister — lives in Mutare.",
      native: 'Mbuya vangu vanogara kumusha, uye tete vangu — hanzvadzi yababa — vanogara muMutare.',
      literal: 'grandmother, aunt with side clarification',
      emoji: '🏡',
      phonetic: 'mahy GRAND-muh-thuh livz...',
      audioRef: null,
    },
    {
      id: 'family_actions',
      target: "I visit them every month, I call my mother every day, and I miss my brother who lives abroad.",
      native: 'Ndinovashanya mwedzi mumwe nemumwe, ndinofonera amai vangu zuva rega rega, uye ndinosuwa mukoma wangu anogara kunze kwenyika.',
      literal: 'visit, call, miss — combined',
      emoji: '📞',
      phonetic: 'ay VIH-zit them...',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Family in flowing speech — capstone',
    explanation: "Mukati mehurukuro nezvepamhuri, unoshandisa zvose: possessives (my, our), kinship terms (mother, father, siblings, grandparents, aunts, uncles, in-laws), clarifiers (older/younger, on my mother's side), idioms (like family), past habits (used to), zviito (visit, call, miss). Chimiro: tanga pa 'I have...', enda pa detail (names, places), pedzisa pa zvauri kuita kana zvauri kunzwa.",
    examples: [
      { target: 'I have a big family — my parents, two siblings, and many cousins.',     native: 'Ndine mhuri yakakura — vabereki vangu, vana vamai vaviri, nehama dzakawanda.' },
      { target: "My grandmother used to live with us; she's like a second mother.",       native: 'Mbuya vaisigara nesu; vakaita seamai vechipiri.' },
      { target: "I miss my brother — I call him every Sunday.",                            native: 'Ndinosuwa mukoma wangu — ndinomufonera Svondo rega rega.' },
    ],
  },

  exercises: [
    {
      type: 'fill_blank',
      instruction: 'Sarudza shoko rakanaka — yose mu paragraph',
      sentence: "I have two _____ — an older brother and a _____ sister. My _____ live in Harare.",
      options: ['siblings / younger / parents', 'siblings / older / children', 'children / younger / parents'],
      correct: 'siblings / younger / parents',
      context: "Siblings (vana vamai), younger (mudiki — chero kuti uchazo siyanisa ne older brother), parents (vabereki).",
    },
    {
      type: 'translate',
      instruction: 'Nyora muChiNgezi (zvichipfuura mhuri yose)',
      prompt: 'Mbuya vangu vaisitaura kuti shamwari yepamoyo iri sehama.',
      correct: ['My grandmother used to say that a best friend is like family.', 'My grandmother used to say a best friend is like family.', 'My grandmother used to say that your best friend is like family.'],
    },
    {
      type: 'translate',
      instruction: 'Nyora muChiNgezi',
      prompt: 'Tete vangu — hanzvadzi yababa — vanogara kuChirungu, uye ndinovasuwa.',
      correct: ["My aunt — my father's sister — lives in the UK, and I miss her.", "My aunt, my father's sister, lives in the UK, and I miss her.", "My aunt — my father's sister — lives abroad, and I miss her."],
    },
    {
      type: 'build_sentence',
      instruction: 'Vaka: "My in-laws are visiting us this weekend"',
      words: ['weekend.', 'My', 'this', 'visiting', 'are', 'in-laws', 'us'],
      correct: ['My', 'in-laws', 'are', 'visiting', 'us', 'this', 'weekend.'],
      translation: 'Vavakwasha vangu vari kuuya kuzotishanya svondo rino',
    },
    {
      type: 'translate',
      instruction: 'Nyora muChiNgezi — chirevo chinosanganisa Module 5',
      prompt: 'Sekuru vangu, vehama yamai, vanogara vachiti: "Mhuri ndiyo simba."',
      correct: ['My uncle, my mother\'s brother, always says: "Family is strength."', "My uncle — my mother's brother — always says: 'Family is strength.'", 'My maternal uncle always says: "Family is strength."'],
    },
    {
      type: 'multiple_choice',
      instruction: 'Sarudza chirevo chakatakura nuance yose ye mhuri',
      question: 'A foreign friend asks: "Tell me about your family." Which response best demonstrates A2-level family vocabulary?',
      options: [
        { text: "I have a big family. My parents live in Harare with my younger sister. My older brother is abroad — I miss him. My grandmother — my father's mother — used to live with us, and she still calls every week. My in-laws are kind. I visit everyone often.", correct: true },
        { text: "Big family. Parents Harare. Brother far. Miss. Grandmother call. In-laws good.",                                                                                                                                                                            correct: false },
        { text: "Mhuri yangu yakakura. Vabereki vangu vari muHarare nemunin'ina wangu wechisikana.",                                                                                                                                                                       correct: false },
      ],
      explanation: "Mhinduro yekutanga inotakura zvose: parents, sibling nuance (younger/older), grandparent ne side clarifier ('my father's mother'), in-laws, ne zviito (miss, call, visit). Yapfuura miri yedzidzo yose yeModule 5 mu paragraph imwe.",
    },
  ],

  rwenDialogue: {
    intro: 'Capstone! Wakumbirwa kutsanangura mhuri yako yose ku shamwari yeChiNgezi. Tanga, isa detail, dzokorora.',
    lines: [
      {
        speaker: 'npc',
        target: "Tell me about your family — everyone, the whole picture.",
        native: 'Ndiudze nezvemhuri yako — vose, mufananidzo wose.',
      },
      {
        speaker: 'user',
        userChoices: [
          {
            target: "I have a close family. My parents live in Harare with my younger sister. My older brother lives in South Africa — I miss him, but we call every Sunday. My grandmother — my father's mother — used to tell us stories every weekend; she's like a second mother to me. My aunt on my father's side, who we call 'tete', is visiting next week. We're a big family, and we visit each other often.",
            native: '...',
            correct: true,
            feedback: "Wakwanisa zvikuru — wakatakura zvose: parents, siblings (younger), grandparent yakapfuura (used to), kinship clarifier (father's mother, father's side, tete), zviito (miss, call, visit), idiom (like a second mother). Capstone yapasiswa.",
          },
          {
            target: "I have parents. I have brother and sister. I have grandmother. Aunt and uncle. We talk sometimes.",
            native: '...',
            correct: false,
            feedback: "Mhuri yose iri pano asi pasina nuance — wedzera 'older/younger', 'on my father's side', 'used to', kana 'I miss them'. Iko ndoiwo udzamu hwa Module 5.",
          },
          {
            target: "Mhuri yangu — vabereki, mukoma, mbuya, tete. Vose ndinovada.",
            native: '...',
            correct: false,
            feedback: "ChiShona chete — shamwari yeChiNgezi haichanzwisise. Shandura zvose: 'I have parents, an older brother, a grandmother, an aunt — and I love them all.'",
          },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Wapedza Module 5. Mhuri yako ine udzamu — uye iye zvino unokwanisa kutakura udzamu uhwo muChiNgezi pasina kushaiwa zita rezvauri kuda kutaura. Wave kusarudza kutsanangura kana kuwedzera detail — chinhu chichange chiri pamavoko ako.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Pasina kutarisa. Capstone recall.',
    prompts: [
      { prompt: "My grandmother used to ___ (give any verb in English)", correct: ['cook', 'sing', 'tell stories', 'live with us', 'bake', 'pray', 'teach me', 'say', 'come over'] },
      { prompt: 'I miss my brother (in English)',                          correct: ['I miss my brother', 'I miss my brother.', 'i miss my brother'] },
    ],
  },

  mission: {
    title: 'Basa rePedzisira reModule 5',
    task: "Nyora paragraph imwe muChiNgezi nezvemhuri yako — kunyange 5-7 mitsetse. Tora kubva pamodule yose: vabereki, vana vamai (older/younger), vana vako kana vehama, mbuya kana sekuru (used to), tete kana sekuru (clarify side), shamwari (like family), ne zviito zvitatu (visit/call/miss). Tumira shamwari yeChiNgezi kana yauri kuda kushandisa muChiNgezi nayo.",
    rwenSignoff: "Wapedza Module 5. Mhuri yako yatosvika muChiNgezi nemwoyo. Module 6 inopa nyaya — nyika, mafambiro, ne zvauri kufunga.",
  },

  phase8: {
    scenario: "Capstone family conversation: an English-speaking friend wants to fully understand your family — parents, siblings, grandparents, aunts/uncles, in-laws, friends-like-family. Tell them everything in one flowing conversation. Bring the Shona kinship richness through clarifying English.",
    rwenRole: "Emily, 32, your English-speaking friend who has just visited Zimbabwe for the first time and is fascinated by Shona family structure. Asks 'Wait — how is that aunt different from the other aunt?' and 'Do you all live close?' and 'Who do you miss most?'",
    successCriteria: "User uses 6+ family terms across the module: parents, sibling (older/younger), grandparent, aunt/uncle WITH clarifier (on my father's/mother's side), in-laws, OR friend-like-family. Uses 'used to' once. Uses at least two of visit/call/miss. Brings Shona kinship nuance into English (e.g. 'my aunt — my father's sister'). Avoids dropping into Shona for full sentences.",
    estimatedMinutes: 4,
    bonusXp: 5,
  },
};

export default lesson;

import type { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm09-l08',
  module: 9,
  lesson: 8,
  title: 'uMzilikazi and uLobengula — the founding kings',
  estimatedMinutes: 9,
  xpReward: 40,

  hook: {
    rwenLine: "Two names, one nation. uMzilikazi crossed the Limpopo and built uMthwakazi out of nothing. His son uLobengula carried it for a generation, then watched it fall to colonial guns. To learn isiNdebele without these two names is to learn the language with the soul cut out.",
    culturalNote: "uMzilikazi kaMatshobana (c.1790–1868) was a young Khumalo chief in the Zulu kingdom of Shaka. After a falling-out with Shaka in the 1820s, uMzilikazi led his Khumalo following north — through the Transvaal, dodging Boer Voortrekker columns and Zulu reprisals — and finally crossed the Limpopo River into present-day Zimbabwe in the early 1830s. He consolidated multiple peoples (Nguni, Sotho-Tswana, Kalanga, Shona) into a new nation: amaNdebele of uMthwakazi, with its capital at koBulawayo. He died in 1868. His son uLobengula kaMzilikazi (c.1845–1894) became iNkosi after a succession struggle and ruled until the First Matabele War (1893–94), when Cecil Rhodes' British South Africa Company invaded with Maxim machine guns. uLobengula's capital was burned. He fled north and disappeared in 1894 — his death and burial place remain disputed. With his fall, uMthwakazi lost its sovereignty. Both names are spoken with deep respect today. Note: uMzilikazi is buried in the Matobo Hills, sacred ground; uLobengula's burial place is unknown.",
  },

  chunks: [
    {
      id: 'umzilikazi',
      target: 'uMzilikazi',
      native: 'uMzilikazi — founding king of uMthwakazi (c.1790–1868)',
      literal: 'u- (proper noun) + Mzilikazi — name meaning "the great path / great trail"',
      emoji: '👑',
      phonetic: 'oom-zee-lee-KAH-zee',
      audioRef: null,
    },
    {
      id: 'ulobengula',
      target: 'uLobengula',
      native: "uLobengula — last king (c.1845–1894), uMzilikazi's son",
      literal: 'u- + Lobengula — son of uMzilikazi, ruled 1870–1894',
      emoji: '🛡️',
      phonetic: 'oo-loh-ben-GOO-lah',
      audioRef: null,
    },
    {
      id: 'inkosi',
      target: 'iNkosi',
      native: 'king / chief',
      literal: 'class 9 noun — title of both uMzilikazi and uLobengula',
      emoji: '👑',
      phonetic: 'een-KOH-see',
      audioRef: null,
    },
    {
      id: 'kobulawayo',
      target: 'koBulawayo',
      native: "the royal capital — today's Bulawayo",
      literal: 'ko- (locative) + Bulawayo — meaning "the place of slaughter / killing"',
      emoji: '🏛️',
      phonetic: 'koh-boo-lah-WAH-yoh',
      audioRef: null,
    },
    {
      id: 'amatobo',
      target: 'amaTobo / Matobo',
      native: "the Matobo Hills — sacred ground, uMzilikazi's burial place",
      literal: 'ama- (plural) + Tobo (bald rocks) — granite koppies south of Bulawayo',
      emoji: '⛰️',
      phonetic: 'ah-mah-TOH-boh',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'The u- prefix and royal naming',
    explanation: "Ndebele royal names always take the 'u-' proper-noun prefix and are often followed by 'ka-' (son of) plus the father's name. uMzilikazi kaMatshobana = uMzilikazi, son of Matshobana. uLobengula kaMzilikazi = uLobengula, son of uMzilikazi. This naming chain is how every Ndebele person, royal or not, is properly placed in their lineage. When you hear someone introduced this way at a formal event, you are hearing two generations announced at once.",
    examples: [
      { target: 'uMzilikazi kaMatshobana', native: 'uMzilikazi son of Matshobana' },
      { target: 'uLobengula kaMzilikazi', native: 'uLobengula son of uMzilikazi' },
      { target: 'iNkosi yamaNdebele', native: 'the king of the Ndebele people' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match each name to who they were',
      pairs: [
        { left: 'uMzilikazi', right: 'founding king of uMthwakazi, crossed the Limpopo in the 1830s' },
        { left: 'uLobengula', right: 'last Ndebele king, fell to British colonial forces in 1893–94' },
        { left: 'koBulawayo', right: 'the royal capital — today the city of Bulawayo' },
        { left: 'amaTobo', right: "the Matobo Hills — uMzilikazi's burial ground" },
      ],
    },
    {
      type: 'multiple_choice',
      instruction: 'History',
      question: "Where did uMzilikazi cross with his Khumalo following to found uMthwakazi?",
      options: [
        { text: 'The Limpopo River — coming north from Zululand into present-day Zimbabwe in the early 1830s.', correct: true },
        { text: 'The Zambezi River — coming south from Zambia.', correct: false },
        { text: 'The Atlantic Ocean.', correct: false },
        { text: 'He never moved — uMthwakazi was always in Matabeleland.', correct: false },
      ],
      explanation: "uMzilikazi was Khumalo, a Zulu chief originally. After breaking with Shaka, he led his people north through the Transvaal and across the Limpopo in the 1830s, gathering and incorporating other peoples on the way. uMthwakazi was forged in motion.",
    },
    {
      type: 'multiple_choice',
      instruction: 'History',
      question: "What ended uLobengula's reign in 1893–94?",
      options: [
        { text: 'The First Matabele War — Cecil Rhodes\' British South Africa Company invaded with Maxim machine guns.', correct: true },
        { text: 'A succession dispute among his sons.', correct: false },
        { text: 'A drought.', correct: false },
      ],
      explanation: "Rhodes' BSAC, having tricked uLobengula into the Rudd Concession in 1888, invaded uMthwakazi in 1893. The Maxim machine gun broke the iziMpi (regiments). koBulawayo was burned. uLobengula fled north and died in 1894 — his burial place still disputed today. This is a colonial wound that remains alive in Ndebele memory.",
    },
    {
      type: 'translate',
      instruction: 'Type the Ndebele',
      prompt: 'the king of the Ndebele',
      correct: ['iNkosi yamaNdebele', 'iNkosi yamandebele', 'Inkosi yamaNdebele'],
    },
  ],

  rwenDialogue: {
    intro: "You travel to the Matobo Hills, south of Bulawayo. A guide, Baba Mpofu, takes you up to the granite where uMzilikazi is buried. He speaks slowly, gravely.",
    lines: [
      { speaker: 'npc', target: 'Lapha — kulala uMzilikazi kaMatshobana.', native: 'Here — uMzilikazi son of Matshobana lies.' },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Ngiyabonga, baba. Lokhu kuyindawo engcwele.', native: 'Thank you, baba. This is sacred ground.', correct: true, feedback: "Baba Mpofu nods slowly. 'Yebo. Phinde uthule kancane.' — Yes. Be silent for a moment longer." },
          { target: '(takes selfie)', native: '(no Ndebele)', correct: false, feedback: "Baba Mpofu raises his hand. 'Hatshi. Lapha asisithathi izithombe.' — No. We don't take pictures here. You've stepped over a serious boundary." },
          { target: 'Wabhubhile nini?', native: 'When did he die?', correct: false, feedback: "Fair question, but the moment is for silence first. Ask later. The Matobo Hills are not a museum — they are a burial ground that is still tended." },
        ],
      },
      { speaker: 'npc', target: 'AmaNdebele angekhe akhohlwe iNkosi yethu.', native: 'The Ndebele people will never forget our king.' },
      { speaker: 'rwen', rwenLine: "uMzilikazi has been dead since 1868. uLobengula since 1894. They are still spoken of in the present tense at gatherings. That is what nationhood feels like." },
    ],
  },

  activeRecall: {
    instruction: 'Recall from memory.',
    prompts: [
      { prompt: 'The founding king of uMthwakazi (crossed the Limpopo in the 1830s)', correct: ['uMzilikazi', 'umzilikazi', 'Umzilikazi', 'uMzilikazi kaMatshobana'] },
      { prompt: 'The last Ndebele king (fell in 1893–94)', correct: ['uLobengula', 'ulobengula', 'Ulobengula', 'uLobengula kaMzilikazi'] },
      { prompt: 'King / chief', correct: ['iNkosi', 'inkosi', 'Inkosi'] },
      { prompt: "uMzilikazi's burial place — sacred granite hills south of Bulawayo", correct: ['amaTobo', 'Matobo', 'amatobo', 'Matobo Hills'] },
      { prompt: 'The royal capital — today the city of Bulawayo', correct: ['koBulawayo', 'kobulawayo', 'Bulawayo'] },
    ],
  },

  mission: {
    title: "Read one short biography",
    task: "Look up uMzilikazi (or uLobengula) on Wikipedia or the South African History Online site. Read for 10 minutes. Pay attention to: (1) the route uMzilikazi took from Zululand to Bulawayo, (2) what the Rudd Concession of 1888 did to uLobengula, (3) where uLobengula is believed to have died. You will hear all three referenced in Ndebele life — at funerals, at uMzilikazi Day, in song lyrics.",
    rwenSignoff: "These names are not history. They are still alive in the language. Sala kuhle, mfowethu.",
  },

  phase8: {
    scenario: "You're sitting with Baba Mpofu, a senior guide at Matobo Hills (in his 60s, lifelong custodian of cultural heritage there). After visiting uMzilikazi's gravesite he wants to test what you've understood about the founding-king history. He's not testing your facts so much as your reverence.",
    rwenRole: "Baba Mpofu — 60s, Matobo guide, son of Matobo guides, knows the king-history in his bones. Generous teacher. Will close down quickly if he senses you're treating this as tourism.",
    successCriteria: "User correctly identifies uMzilikazi as the founding king (c.1830s, crossed the Limpopo) and uLobengula as his son and the last king (fell 1893–94). Uses 'iNkosi' at least once. Treats the conversation with weight, not as trivia. Bonus if they correctly identify Matobo as uMzilikazi's burial place.",
    estimatedMinutes: 4,
    bonusXp: 5,
  },
};

export default lesson;

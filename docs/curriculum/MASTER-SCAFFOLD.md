# Master Curriculum Scaffold — All 400 Lessons

> The contract for the 400-lesson authoring run.
> Each subagent reads its assigned section + LEARNING_METHODOLOGY.md + lesson-template.md, then produces lesson files matching `LessonData` from `types/lesson.ts`.

**Last updated:** 2026-05-01
**Status tracker:** [AUTHORING-PROGRESS.md](./AUTHORING-PROGRESS.md)

---

## How this document is used

For each (course, speaker) variant authored in the Phase B-C run:

1. **Read** the methodology ([LEARNING_METHODOLOGY.md](./LEARNING_METHODOLOGY.md)) and lesson template ([lesson-template.md](./lesson-template.md)).
2. **Read** the reference lesson `data/courses/language-shona/english/curriculum/m01-l01.ts` for the canonical TypeScript shape.
3. **Locate** your assigned course/module section below. Every lesson has: ID, title, the 3 target-language chunks (with native gloss), the grammar pattern's name, a one-line cultural hook, and a one-line mission seed.
4. **Author** each lesson as `data/courses/{COURSE_ID}/{SPEAKER_ID}/curriculum/m{NN}-l{NN}.ts` exporting a `LessonData`. Every lesson MUST include the `phase8` field with `bonusXp: 5` (5 XP gated behind the paid AI tier).
5. **Update** `data/courses/{COURSE_ID}/{SPEAKER_ID}/curriculum/index.ts` mapping every lesson ID to its export.
6. **Update** [AUTHORING-PROGRESS.md](./AUTHORING-PROGRESS.md) with what landed.

### Conventions across all courses

- **3 chunks per lesson, no more, no less.** Methodology Pillar 10 (Rule of Three).
- **6 exercises per lesson**, mixing at least 3 of the 5 types (`match_pairs`, `fill_blank`, `translate`, `build_sentence`, `multiple_choice`). At least 2 must be `translate` or `build_sentence` (recall > recognition).
- **Cultural framing per (target, speaker) pair.** A French speaker learning Shona gets French cultural references; an English speaker learning French gets English cultural references. Don't translate the Hook from another variant — author fresh.
- **XP curve:** standard lessons 25 XP; module-cap conversation lessons (m\*-l10) 50 XP; modules 9-10 lessons 30-35 XP for complexity. Phase 8 always +5 bonus.
- **Phase 8 scenario** must put Rwen in a clear role with a concrete success criterion that exercises THIS lesson's chunks — not a generic "talk to Rwen".

---

## 1. language-shona — English speaker learning Shona (100 lessons)

**Status:** All 100 lessons authored as TypeScript. **Action:** RETROFIT — add `phase8` field to every lesson. Do not rewrite content.

Module breakdown is in `data/lessons.ts` UNITS array (greetings / survival / identity / noun-classes / family / numbers / food / verbs / directions / emotions). Each lesson file at `data/courses/language-shona/english/curriculum/m{NN}-l{NN}.ts` already has the full 7-phase content. The retrofit job is: read each file, infer scenario / rwenRole / successCriteria from the lesson's chunks + dialogue, append a phase8 block before the closing `};`. Bonus XP is always 5.

**Phase 8 patterns by module** (use these as scenario templates, customise per lesson):

| Module | Scenario seed | Rwen's role |
|---|---|---|
| 1 — Greetings | Different settings (market, family compound, taxi rank) at appropriate time of day | Market vendor / taxi driver / village elder / family member, 30-65yo |
| 2 — Survival | Asking for help when lost / confused / stuck | Helpful stranger / shopkeeper / kombi conductor |
| 3 — Identity | Meeting someone new — name, origin, work | Fellow passenger / wedding guest / new colleague |
| 4 — Noun classes | Pointing at things, asking about names of objects | Curious child / patient teacher |
| 5 — Family | Visiting Rwen's relatives | Auntie (tete) / uncle (sekuru) / grandmother (mbuya) |
| 6 — Numbers/Time/Money | Buying at the market, telling time | Vendor / friend at the bus stop |
| 7 — Food | Sharing a meal, ordering, hosting | Cook / fellow guest / host's daughter |
| 8 — Verbs | Describing your day, planning tomorrow | Friend catching up / coworker |
| 9 — Directions | Asking the way, taking a kombi | Kombi conductor / passer-by |
| 10 — Emotions/Stories | Sharing how you feel, listening to a proverb | Friend who notices / wise elder telling stories |

---

## 2. language-english — Shona speaker learning English (100 lessons)

**Status:** 1 lesson authored (m01-l01-hello). **Action:** AUTHOR 99 new lessons.

Cultural framing is from a SHONA speaker's perspective. The Hook narratives, dialogue scenarios, and cultural notes should reflect a Zimbabwean or Shona-diaspora user encountering English — not "English-speaker explaining English to a Shona learner". Examples:

- Hook for "Please/Thank you" lesson: how English politeness markers map (or don't) to Shona's *ndapota* / *ndatenda* register
- Dialogue scenarios: meeting an English-speaking tourist in Harare, calling a UK-based relative, navigating an English-language form

### Module 1 — Kwaziso & Hellos

| Lesson | ID | Title | Chunks (target → native) | Pattern | Mission seed |
|---|---|---|---|---|---|
| 1 | m01-l01-hello | Hello — Mhoro | Hello/Mhoro · How are you?/Makadii? · I'm fine, thanks/Ndiri zvakanaka, ndatenda | Standard greeting pair | Greet someone in English today |
| 2 | m01-l02-hi-bye | Hi & Bye — Casual greetings | Hi/Hesi · Bye/Sara zvakanaka · See you later/Tichaonana | Casual register | Use "Hi" with a friend |
| 3 | m01-l03-good-morning | Good morning — Mangwanani | Good morning/Mangwanani · Did you sleep well?/Marara sei? · I slept well/Ndakarara zvakanaka | Time-of-day greeting | Greet a colleague with "Good morning" |
| 4 | m01-l04-good-afternoon | Good afternoon — Masikati | Good afternoon/Masikati · How's your day?/Maswera sei? · Going well/Zviri kufamba | Time-of-day shifts | Use "Good afternoon" after midday |
| 5 | m01-l05-good-evening | Good evening — Manheru | Good evening/Manheru · How was your day?/Maswera sei? · It was good/Zvanga zvakanaka | Past tense in greetings | Greet family with "Good evening" tonight |
| 6 | m01-l06-name | What's your name? — Zita rako ndiani? | What's your name?/Zita rako ndiani? · My name is .../Zita rangu ndi... · Nice to meet you/Ndafara kukuziva | Possessives my/your | Introduce yourself to one English speaker |
| 7 | m01-l07-where-from | Where are you from? — Wabva kupi? | Where are you from?/Wabva kupi? · I'm from .../Ndinobva ku... · I live in .../Ndinogara ku... | Prepositions from/in | Tell someone where you're from |
| 8 | m01-l08-how-are-you-formal | Polite "How are you?" forms | How do you do?/Makadii zvakanaka here? · Pleased to meet you/Ndafara kukuziva · I hope you're well/Ndinotarisira muri zvakanaka | Formal vs casual | Greet someone formally |
| 9 | m01-l09-goodbye | Goodbye — Sara/Famba zvakanaka | Goodbye/Sara zvakanaka · See you tomorrow/Tichaonana mangwana · Take care/Chenjerai | Imperative goodbye | Say "Goodbye" properly today |
| 10 | m01-l10-conversation | The Greeting Conversation | (review) | Full greeting flow | Have a complete English greeting |

### Module 2 — Survival Phrases

| L | ID | Title | Chunks | Pattern | Mission |
|---|---|---|---|---|---|
| 1 | m02-l01-please | Please — Ndapota | Please/Please · Excuse me/Excuse me · Sorry/Sorry | Politeness markers | Use "please" once today |
| 2 | m02-l02-thank-you | Thank you — Ndatenda | Thank you/Thank you · You're welcome/You're welcome · Thanks a lot/Thanks a lot | Acknowledgement chain | Thank someone in English |
| 3 | m02-l03-help | Can you help me? — Mungandibatsire here? | Can you help me?/Mungandibatsire here? · I need help/Ndinoda rubatsiro · I'm lost/Ndarasika | Modal verb "can" | Ask for help in English |
| 4 | m02-l04-do-you-speak | Do you speak English? — Munotaura ChiNgezi here? | Do you speak English?/Munotaura ChiNgezi here? · A little/Zvishoma · Slowly please/Zvishoma shoma | Question word "do" | Ask a stranger if they speak English |
| 5 | m02-l05-i-dont-understand | I don't understand — Handinzwisise | I don't understand/Handinzwisise · Repeat please/Dzokorora · What did you say?/Wati chii? | Negation with "don't" | Use this phrase if confused |
| 6 | m02-l06-yes-no | Yes & No — Hongu uye Aiwa | Yes/Hongu · No/Aiwa · Maybe/Pamwe | Affirmation/negation | Notice yes/no in English today |
| 7 | m02-l07-where-is | Where is...? — ...iri kupi? | Where is the bathroom?/Toilet iri kupi? · Where is the exit?/Pekubudira ndepapi? · Over there/Apo | Locative "where" | Ask for a location in English |
| 8 | m02-l08-how-much | How much? — Marii? | How much?/Marii? · It's expensive/Idhura · It's cheap/Hairipi mari | Currency questions | Ask the price of something |
| 9 | m02-l09-emergency | Emergency phrases — Mhoro mhinduro | Help!/Ndibatsireiwo! · Call the police/Daidza mapurisa · I need a doctor/Ndinoda chiremba | Imperative urgency | Memorise these — hope you never use them |
| 10 | m02-l10-conversation | Survival in conversation | (review) | Full survival flow | Navigate an English problem |

### Module 3 — Self & Introductions

| L | ID | Title | Chunks | Pattern | Mission |
|---|---|---|---|---|---|
| 1 | m03-l01-i-am | I am... — Ndini... | I am/Ndini · I'm a student/Ndini mudzidzi · I'm from Zimbabwe/Ndinobva kuZimbabwe | Verb "to be" | Say three sentences with "I am" |
| 2 | m03-l02-age | How old are you? — Une makore mangani? | How old are you?/Une makore mangani? · I'm X years old/Ndine makore X · Twenty-five/Makumi maviri nemashanu | Numbers in age | Tell someone your age in English |
| 3 | m03-l03-job | What do you do? — Unoita basa rei? | What do you do?/Unoita basa rei? · I'm a teacher/Ndini mudzidzisi · I work in IT/Ndinoshanda muIT | Occupations | Describe your work |
| 4 | m03-l04-family-status | Married? Children? | Are you married?/Wakaroora here? · I have two children/Ndine vana vaviri · I'm single/Handisati ndaroora | Family status questions | Discuss family politely |
| 5 | m03-l05-hobbies | Hobbies — Zvinokufadza | I like .../Ndinoda... · I enjoy .../Ndinofarira... · In my free time/Munguva yangu yekuzorora | "Like" + gerund | Share one hobby |
| 6 | m03-l06-languages | Languages I speak — Mitauro yandinotaura | I speak Shona/Ndinotaura ChiShona · A little English/ChiNgezi zvishoma · And some others/Nemimwe | Listing skills | List all the languages you know |
| 7 | m03-l07-where-i-live | Where I live — Kwandinogara | I live in Harare/Ndinogara muHarare · I grew up in .../Ndakakurira ku... · For ten years/Kwemakore gumi | "For" duration | Describe where you live |
| 8 | m03-l08-personality | Describing yourself — Kuzvitaridza | I'm friendly/Ndine ushamwari · I'm shy sometimes/Ndinonyara dzimwe nguva · I love learning/Ndinoda kudzidza | Adjectives for self | Pick three words about you |
| 9 | m03-l09-asking-them | Asking about them — Kubvunza nezvavo | Tell me about yourself/Ndiudze nezvako · What's your story?/Nyaya yako ndeye? · Where did you grow up?/Wakakurira kupi? | Open questions | Ask one person their story |
| 10 | m03-l10-conversation | Full introduction conversation | (review) | Two-way introduction | Have a full introduction in English |

### Module 4 — Articles, Plurals & "The"

| L | ID | Title | Chunks | Pattern | Mission |
|---|---|---|---|---|---|
| 1 | m04-l01-a-an | A vs An — A book / An apple | A book/Bhuku · An apple/Apuro · A house/Imba | Indefinite articles | Notice a/an in 5 sentences today |
| 2 | m04-l02-the | The — When to use it | The book/Bhuku · The Zimbabwe team/Timu yeZimbabwe · The morning/Mangwanani | Definite article | Spot "the" in conversation |
| 3 | m04-l03-no-article | No article — Plural & abstract | Books/Mabhuku · Love/Rudo · Children/Vana | Zero article | Use a plural without "the" |
| 4 | m04-l04-plurals-regular | Plurals — adding -s | Cat → cats/Katsi → katsi · Day → days/Zuva → mazuva · Friend → friends/Shamwari → shamwari | Regular plural -s | Make 5 plurals |
| 5 | m04-l05-plurals-irregular | Irregular plurals — children, men | Child → children · Man → men · Person → people | Irregular plurals | Memorise 3 irregulars |
| 6 | m04-l06-this-that | This & That — These & Those | This book/Bhuku iri · That house/Imba iyo · These children/Vana ava | Demonstratives | Point and name 3 things |
| 7 | m04-l07-some-any | Some & Any — countables | Some water/Mvura · Any questions?/Mibvunzo? · Some friends/Shamwari | Quantifiers | Ask "Any...?" today |
| 8 | m04-l08-much-many | Much vs Many | Much water/Mvura yakawanda · Many friends/Shamwari dzakawanda · How much?/Zvakawandasei? | Count vs uncount | Use much/many correctly |
| 9 | m04-l09-articles-mixed | Mixed practice | (review) | All articles | Read an English text and notice articles |
| 10 | m04-l10-conversation | Articles in real talk | (review) | Article fluency | Hold a conversation noticing articles |

### Module 5 — Family

| L | ID | Title | Chunks | Pattern | Mission |
|---|---|---|---|---|---|
| 1 | m05-l01-mother-father | Mother & Father | Mother/Amai · Father/Baba · My parents/Vabereki vangu | Family possessives | Talk about your parents |
| 2 | m05-l02-siblings | Brothers & Sisters | Brother/Mukoma (older), munin'ina (younger) · Sister/Hanzvadzi · I have two siblings/Ndine vana vamai | Sibling nuance | Describe your siblings |
| 3 | m05-l03-children | Sons & Daughters | Son/Mwana mukomana · Daughter/Mwana musikana · Children/Vana | Naming kids | Describe family with children |
| 4 | m05-l04-grandparents | Grandparents | Grandmother/Mbuya · Grandfather/Sekuru · Grandchild/Muzukuru | Generational | Tell a grandparent story |
| 5 | m05-l05-aunts-uncles | Aunts & Uncles | Aunt/Tete (paternal) or maiguru/mainini · Uncle/Sekuru or babamukuru/babamunini · Cousin/Hama | Kinship complexity | Use one English kin term |
| 6 | m05-l06-in-laws | In-laws — A polite topic | Mother-in-law/Vamwene · Father-in-law/Vatezvara · Spouse/Murume kana mukadzi | Marriage-family | Mention an in-law |
| 7 | m05-l07-friends | Friends as family | Best friend/Shamwari yepamoyo · Close friends/Shamwari dzepedyo · Like family/Sehama | Idiomatic family | Describe your closest friend |
| 8 | m05-l08-family-actions | Family verbs | Visit/Shanya · Call/Fonera · Miss someone/Suwa | Family verbs | Call/visit one family member |
| 9 | m05-l09-family-stories | Telling family stories | A long time ago/Kare-kare · My grandmother used to .../Mbuya vaisi... · He always says .../Anogara achiti... | Past habits | Share a family memory |
| 10 | m05-l10-conversation | A family conversation | (review) | Whole family talk | Discuss family in English |

### Module 6 — Numbers, Time, Money

| L | ID | Title | Chunks | Pattern | Mission |
|---|---|---|---|---|---|
| 1 | m06-l01-numbers-1-10 | Numbers 1-10 | One/Imwe · Five/Shanu · Ten/Gumi | Cardinal counting | Count to 10 in English |
| 2 | m06-l02-numbers-20-100 | Numbers 11-100 | Twenty/Makumi maviri · Fifty/Makumi mashanu · One hundred/Zana | Tens pattern | Say your age and your phone area code |
| 3 | m06-l03-big-numbers | Hundreds, Thousands, Millions | One thousand/Chiuru · Ten thousand/Zviuru gumi · One million/Miriyoni | Large numbers | Read a big number aloud |
| 4 | m06-l04-time-hours | What time? — Hours | What time is it?/Inguva yakadii? · It's 7 o'clock/Nguva inomwe · A.M. / P.M. | Time-telling | Tell the current time |
| 5 | m06-l05-time-minutes | Half past, quarter to | Half past two/Nguva mbiri nehafu · Quarter to nine/Mininitsi gumi nemashanu pamberi pemapfumbamwe · Five past six/Mininitsi mashanu kupfuura nguva nhanhatu | Time fragments | Tell time precisely |
| 6 | m06-l06-days-week | Days of the week | Monday/Muvhuro · Friday/Chishanu · Sunday/Svondo | Week cycle | Say today and tomorrow |
| 7 | m06-l07-months-seasons | Months & Seasons | January/Ndira · Rainy season/Mwaka wemvura · Summer/Zhizha | Calendar | State your birth month |
| 8 | m06-l08-money-prices | Money — How much is it? | How much?/Marii? · It costs $20/Inopiwa madhora makumi maviri · It's expensive/Idhura | Price questions | Ask price of something in English |
| 9 | m06-l09-shopping-numbers | Numbers in shopping | Two for ten dollars/Zviviri pamadhora gumi · Discount/Dhisikaunti · Total/Zvose pamwe chete | Shopping math | Negotiate or read a price |
| 10 | m06-l10-conversation | Money & time conversation | (review) | Practical numbers | Have a number-heavy English chat |

### Module 7 — Food & Eating Out

| L | ID | Title | Chunks | Pattern | Mission |
|---|---|---|---|---|---|
| 1 | m07-l01-im-hungry | Hungry & Thirsty | I'm hungry/Ndine nzara · I'm thirsty/Ndine nyota · I want water/Ndinoda mvura | Stative "I am" | Say what you want |
| 2 | m07-l02-foods | Common foods | Bread/Chingwa · Rice/Mupunga · Meat/Nyama | Food nouns | Name 5 foods in English |
| 3 | m07-l03-restaurant | At a restaurant | Table for two/Tafura yevaviri · Menu please/Menyu ndapota · The bill/Bhiro | Restaurant vocab | Order in English (real or pretend) |
| 4 | m07-l04-ordering | Ordering food | I'd like .../Ndingade... · Could I have .../Ndingawana... · Without onions/Pasina hanyanisi | Polite request | Order one specific dish |
| 5 | m07-l05-likes-food | I like / I don't like food | I love it/Ndinoda chaizvo · I don't like .../Handifariri... · It's delicious/Inoteyera | Preferences | Say what you love eating |
| 6 | m07-l06-cooking | Cooking verbs | Cook/Bika · Chop/Cheka · Boil/Vira | Action verbs | Describe one dish you cook |
| 7 | m07-l07-tea-drinks | Tea, Coffee, Drinks | Tea with milk/Tii nemukaka · Black coffee/Kofi yakasviba · A glass of water/Girazi remvura | Drinks | Order a drink |
| 8 | m07-l08-shona-food | Sharing Shona food in English | Sadza/Sadza (Zimbabwean staple) · Mufushwa/Sun-dried vegetables · Mukaranga/Pumpkin leaves with peanut butter | Naming foreign foods | Explain sadza to a foreigner |
| 9 | m07-l09-hosting | Hosting in English | Welcome/Mauya · Sit down please/Garai pasi · Help yourself/Bata zvauri kuda | Host phrases | Welcome someone in English |
| 10 | m07-l10-conversation | A meal conversation | (review) | Whole meal talk | Have a meal-time English chat |

### Module 8 — Daily Verbs

| L | ID | Title | Chunks | Pattern | Mission |
|---|---|---|---|---|---|
| 1 | m08-l01-be-have | "To be" & "to have" | I am happy/Ndinofara · You have a friend/Une shamwari · They are tired/Vakaneta | Two core verbs | Use "be" and "have" 5 times |
| 2 | m08-l02-do-make | "To do" & "to make" | I do my homework/Ndinoita basa rangu · She makes tea/Anogadzira tii · Don't worry/Usanetseke | Do vs make | Describe one task you do today |
| 3 | m08-l03-go-come | "To go" & "to come" | I go to work/Ndinoenda kubasa · Come here/Huya pano · We're coming/Tiri kuuya | Movement | Use "come" and "go" |
| 4 | m08-l04-want-need | "To want" & "to need" | I want coffee/Ndinoda kofi · I need a break/Ndinoda kuzorora · I'd like tea/Ndingade tii | Politeness in want | Ask for what you want |
| 5 | m08-l05-wake-up | Daily routine — morning | I wake up at 6/Ndinomuka na6 · I take a shower/Ndinogeza · I eat breakfast/Ndinodya kudya kwemangwanani | Time + verb | Describe your morning |
| 6 | m08-l06-work-school | Work & school | I go to work/Ndinoenda kubasa · I study English/Ndinodzidza ChiNgezi · I have a meeting/Ndine musangano | Workday verbs | Describe your work day |
| 7 | m08-l07-evening-routine | Evening — Coming home | I come home/Ndinodzoka kumba · I cook dinner/Ndinobika · I watch TV/Ndinotarisa TV | Evening verbs | Describe your evening |
| 8 | m08-l08-yesterday | Past tense — Yesterday I... | Yesterday I went/Nezuro ndakaenda · I saw .../Ndakaona... · It was .../Zvanga zvi... | Simple past | Tell what you did yesterday |
| 9 | m08-l09-tomorrow | Future — Tomorrow I... | Tomorrow I will .../Mangwana ndichaita... · I'm going to .../Ndichaita... · See you tomorrow/Tichaonana mangwana | Simple future | Plan tomorrow in English |
| 10 | m08-l10-conversation | A day-in-life conversation | (review) | Verb fluency | Walk through your day in English |

### Module 9 — Directions & Travel

| L | ID | Title | Chunks | Pattern | Mission |
|---|---|---|---|---|---|
| 1 | m09-l01-where-is | Where is...? | Where is the bank?/Bhangi riri kupi? · Excuse me, the toilets?/Tichikumbira, dzimba dzemadzimai? · Over there/Apo | Locations | Ask for one location |
| 2 | m09-l02-directions | Left, Right, Straight | Turn left/Tendeukira kuruboshwe · Go straight/Enda zvakananga · It's on the right/Iri kurudyi | Direction verbs | Give someone directions |
| 3 | m09-l03-distance | How far? — Near, Far | How far?/Iri kure here? · Five minutes' walk/Zvinotora maminitsi mashanu kufamba · Just around the corner/Pakona apa | Distance | Estimate distance to somewhere |
| 4 | m09-l04-transport | Bus, Taxi, Train | The bus/Bhazi · Taxi/Tekisi · The train/Chitima | Transport nouns | Name 3 ways you travel |
| 5 | m09-l05-buying-ticket | Buying a ticket | One ticket to Harare/Tikiti rimwe rekuenda kuHarare · Round trip/Kuenda nekudzoka · How much?/Marii? | Travel transactions | Practise buying one ticket |
| 6 | m09-l06-airport | At the airport | Boarding pass/Tikiti rekupinda · Departure gate/Pekubudira · Customs/Customs | Air travel | Imagine the airport in English |
| 7 | m09-l07-hotel | Hotel & Accommodation | Reservation/Bhuking · Room key/Kiyi yekamuri · Check out/Kubuda muhotera | Hotel vocab | Pretend to check in |
| 8 | m09-l08-emergency-travel | Lost & Travel emergencies | I'm lost/Ndarasika · I missed my train/Ndapotsa chitima changu · I lost my bag/Ndarasa bhegi rangu | Crisis travel | Memorise these phrases |
| 9 | m09-l09-asking-help | Asking for help while travelling | Could you help me?/Mungandibatsire? · I don't know this area/Handizivi nzvimbo iyi · Could you write it down?/Mungandinyorere here? | Travel help | Ask one travel question |
| 10 | m09-l10-conversation | A travel conversation | (review) | Travel fluency | Plan a trip in English |

### Module 10 — Emotions, Health, Stories

| L | ID | Title | Chunks | Pattern | Mission |
|---|---|---|---|---|---|
| 1 | m10-l01-happy-sad | Happy & Sad | I'm happy/Ndinofara · I'm sad/Ndakasuwa · It made me feel .../Zvakaita kuti ndinzwe... | Emotion adjectives | Name today's feeling |
| 2 | m10-l02-angry-frustrated | Anger & Frustration | I'm angry/Ndakatsamwa · I'm frustrated/Ndafinhwa · Calm down/Dzikama | Strong emotions | Express one frustration politely |
| 3 | m10-l03-fear-worry | Fear & Worry | I'm scared/Ndatya · I'm worried about .../Ndine hanya ne... · Don't worry/Usanetseke | Fear vocab | Tell someone what worries you |
| 4 | m10-l04-sick | Being Sick | I don't feel well/Handisi kunzwa zvakanaka · I have a headache/Ndine bambo musoro · I need a doctor/Ndinoda chiremba | Health phrases | Imagine the doctor in English |
| 5 | m10-l05-body | Body Parts | Head/Musoro · Stomach/Dumbu · Arm/Ruoko | Body nouns | Point and name 5 body parts |
| 6 | m10-l06-doctor | At the Doctor | It hurts here/Inorwadza pano · For three days/Kwemazuva matatu · Take this medicine/Tora mushonga uyu | Medical setting | Pretend to see a doctor in English |
| 7 | m10-l07-past-stories | Telling past stories | When I was a child/Pandanga ndichiri mwana · I'll never forget .../Handifi ndakanganwa... · It was amazing/Zvanga zvichikatyamadza | Past-tense narrative | Tell a 3-sentence story |
| 8 | m10-l08-hope-future | Hope & Future | I hope to .../Ndinotarisira... · One day I'll .../Rimwe zuva ndicha... · I dream of .../Ndinorota... | Future hopes | Share one hope |
| 9 | m10-l09-proverbs | Sharing Shona proverbs in English | "Chara chimwe hachitswanyi inda" → "One finger can't crush a louse" (cooperation) · "Mwana washe muranda kumwe" → "A chief's child is a servant elsewhere" (humility) · "Rume rimwe harikombi churu" → "One man cannot surround an anthill" (need others) | Proverbs as cultural bridge | Share one proverb in English |
| 10 | m10-l10-your-story | Your English Story — A2 Complete | (review) | Final integration | Tell a 5-minute story in English |

---

## 3. language-french — English speaker learning French (100 lessons)

**Status:** Course pack does not exist. **Action:** CREATE the course (`data/courses/language-french/index.ts` with English variant) and AUTHOR all 100 lessons.

Cultural framing is from an ENGLISH speaker's perspective (a learner from US/UK/AU). The Hook narratives anchor in moments learners can imagine — a Paris café, a Lyon market, a Quebec winter, a Marseille bouillabaisse. The pattern progression respects French grammar's specific challenges: gender (le/la), liaison, *tu* vs *vous*, conjugation of -er/-ir/-re verbs.

### Module 1 — Bonjour & Politesse

| L | ID | Title | Chunks | Pattern | Mission |
|---|---|---|---|---|---|
| 1 | m01-l01-bonjour | Bonjour — Hello | Bonjour/Hello (good day) · Salut/Hi · Bonsoir/Good evening | Time-of-day greeting | Greet someone with "Bonjour" today |
| 2 | m01-l02-ca-va | Ça va? — How are you? | Ça va?/How's it going? · Ça va bien/Going well · Ça va, et toi?/Good, and you? | Casual reciprocity | Ask "Ça va?" once |
| 3 | m01-l03-comment-allez | Comment allez-vous? — Polite | Comment allez-vous?/How are you? (polite) · Très bien, merci/Very well, thank you · Et vous?/And you? | Vous formality | Use "vous" with a stranger |
| 4 | m01-l04-merci | Merci — Thank you | Merci/Thank you · Merci beaucoup/Thanks a lot · De rien/You're welcome | Politeness chain | Say "merci" 3 times today |
| 5 | m01-l05-sil-vous-plait | S'il vous plaît — Please | S'il vous plaît/Please (formal) · S'il te plaît/Please (informal) · Pardon/Excuse me | Tu vs vous in requests | Use "s'il vous plaît" once |
| 6 | m01-l06-name | Comment vous appelez-vous? | Comment vous appelez-vous?/What's your name? · Je m'appelle .../My name is... · Enchanté(e)/Pleased to meet you | Reflexive verbs | Introduce yourself in French |
| 7 | m01-l07-where-from | D'où venez-vous? | D'où venez-vous?/Where are you from? · Je viens de .../I come from... · J'habite à .../I live in... | "De" + place | Tell someone where you're from |
| 8 | m01-l08-tu-vous | Tu vs Vous — When to switch | Tu peux me tutoyer/You can use "tu" with me · On se dit tu?/Shall we use "tu"? · D'accord/OK | Formality negotiation | Notice tu/vous in real talk |
| 9 | m01-l09-au-revoir | Au revoir — Goodbye | Au revoir/Goodbye · À demain/See you tomorrow · Bonne journée/Have a good day | Farewell wishes | Say "Bonne journée" today |
| 10 | m01-l10-conversation | A complete French greeting | (review) | Full politesse flow | Have a complete French greeting |

### Module 2 — Survival Phrases

| L | ID | Title | Chunks | Pattern | Mission |
|---|---|---|---|---|---|
| 1 | m02-l01-excusez-moi | Excusez-moi — Excuse me | Excusez-moi/Excuse me · Pardon/Sorry · Désolé(e)/I'm sorry | Polite intrusion | Use "Excusez-moi" once |
| 2 | m02-l02-je-ne-comprends | Je ne comprends pas | Je ne comprends pas/I don't understand · Plus lentement/More slowly · Pouvez-vous répéter?/Can you repeat? | Negation ne...pas | Use this phrase if confused |
| 3 | m02-l03-parlez-vous-anglais | Parlez-vous anglais? | Parlez-vous anglais?/Do you speak English? · Un peu/A little · Pas bien/Not well | Question inversion | Ask one stranger this |
| 4 | m02-l04-yes-no | Oui & Non — Yes & No | Oui/Yes · Non/No · Peut-être/Maybe | Affirmation | Notice oui/non in 5 sentences |
| 5 | m02-l05-help | Au secours! — Help! | Au secours!/Help! · J'ai besoin d'aide/I need help · Pouvez-vous m'aider?/Can you help me? | Asking help | Memorise these |
| 6 | m02-l06-where-is | Où est...? — Where is...? | Où est la gare?/Where's the station? · Où sont les toilettes?/Where are the toilets? · Là-bas/Over there | "Où" question | Ask for one location |
| 7 | m02-l07-how-much | Combien? — How much? | Combien?/How much? · Ça coûte combien?/How much does it cost? · Trop cher/Too expensive | Price questions | Ask price of one thing |
| 8 | m02-l08-i-want | Je voudrais — I'd like | Je voudrais/I would like · Un café s'il vous plaît/A coffee please · Je prends ça/I'll have that | Polite want | Order something polite |
| 9 | m02-l09-emergency | Au feu! Police! Médecin! | Au feu!/Fire! · Appelez la police/Call the police · J'ai besoin d'un médecin/I need a doctor | Emergency imperatives | Memorise — hopefully unused |
| 10 | m02-l10-conversation | Survival in conversation | (review) | Full survival | Navigate a French problem |

### Module 3 — Self & Introductions

| L | ID | Title | Chunks | Pattern | Mission |
|---|---|---|---|---|---|
| 1 | m03-l01-je-suis | Je suis... — I am | Je suis étudiant(e)/I'm a student · Je suis canadien(ne)/I'm Canadian · Je suis fatigué(e)/I'm tired | Verb être | Use "je suis" 3 times |
| 2 | m03-l02-age | Quel âge avez-vous? | Quel âge avez-vous?/How old? · J'ai 30 ans/I'm 30 · Je suis né(e) en .../I was born in... | Avoir for age | Tell your age |
| 3 | m03-l03-job | Que faites-vous? — What do you do? | Que faites-vous?/What do you do? · Je travaille dans .../I work in... · Je suis professeur/I'm a teacher | Faire & être | Describe your job |
| 4 | m03-l04-family-status | Marié? Enfants? | Vous êtes marié(e)?/Are you married? · J'ai deux enfants/I have two children · Je suis célibataire/I'm single | Family questions | Discuss family |
| 5 | m03-l05-hobbies | Loisirs — Hobbies | J'aime lire/I like reading · J'adore le sport/I love sport · J'aime bien la musique/I quite like music | Aimer + infinitive | Share one hobby |
| 6 | m03-l06-languages | Les langues que je parle | Je parle anglais/I speak English · Un peu de français/A little French · Je veux apprendre/I want to learn | Parler + language | List your languages |
| 7 | m03-l07-where-i-live | Où j'habite | J'habite à Sydney/I live in Sydney · Depuis 5 ans/For 5 years · Avant, j'habitais à .../Before I lived in... | Depuis duration | Describe your home |
| 8 | m03-l08-personality | Décrivez-vous | Je suis sympa/I'm nice · Un peu timide/A bit shy · Curieux/curieuse de nature/Naturally curious | Adjective agreement | Pick three words about you |
| 9 | m03-l09-asking-them | Parlez-moi de vous | Parlez-moi de vous/Tell me about yourself · Quelle est votre histoire?/What's your story? · Vous êtes d'où exactement?/Where exactly are you from? | Open questions | Ask one French speaker their story |
| 10 | m03-l10-conversation | Full introduction | (review) | Two-way intro | Have a full intro |

### Module 4 — Le, La, Les & Genders

| L | ID | Title | Chunks | Pattern | Mission |
|---|---|---|---|---|---|
| 1 | m04-l01-le-la | Le vs La — Genders | Le livre/The book (m) · La table/The table (f) · L'ami(e)/The friend (m/f, eliding) | Article gender | Notice gender of 5 nouns |
| 2 | m04-l02-un-une | Un & Une — A | Un homme/A man · Une femme/A woman · Un café/A coffee | Indefinite gender | Order with "un" or "une" |
| 3 | m04-l03-les | Les — The (plural) | Les enfants/The children · Les amis/The friends · Les filles/The girls | Plural definite | Use "les" 3 times |
| 4 | m04-l04-des | Des — Some / any plural | Des pommes/Some apples · Des questions/Some questions · Avez-vous des amis?/Do you have friends? | Plural indefinite | Make plural sentences |
| 5 | m04-l05-this-that | Ce, Cette, Ces — This/These | Ce livre/This book · Cette ville/This city · Ces gens/These people | Demonstrative gender | Point and name 3 things |
| 6 | m04-l06-mon-ma | Mon, Ma, Mes — My | Mon ami/My (male) friend · Ma sœur/My sister · Mes parents/My parents | Possessive gender | Use mon/ma/mes |
| 7 | m04-l07-ton-ta | Ton, Ta, Tes / Votre, Vos | Ton frère/Your brother · Votre maison/Your house (formal) · Tes amis/Your friends | Tu vs vous possessives | Try both registers |
| 8 | m04-l08-de-du | De vs Du — Of / from | De Paris/From Paris · Du fromage/Some cheese · De la musique/Some music | Partitive | Order food with "du/de la" |
| 9 | m04-l09-articles-mixed | All articles together | (review) | Article fluency | Notice articles in 5 sentences |
| 10 | m04-l10-conversation | A gender-aware conversation | (review) | Real talk | Hold a French conversation |

### Module 5 — La Famille

| L | ID | Title | Chunks | Pattern | Mission |
|---|---|---|---|---|---|
| 1 | m05-l01-parents | La mère et le père | Ma mère/My mother · Mon père/My father · Mes parents/My parents | Family possessives | Talk about your parents |
| 2 | m05-l02-siblings | Frères et sœurs | Mon frère/My brother · Ma sœur/My sister · J'ai deux frères/I have two brothers | Sibling vocab | Describe your siblings |
| 3 | m05-l03-children | Fils et filles | Mon fils/My son · Ma fille/My daughter · Nos enfants/Our children | Naming kids | Talk about kids |
| 4 | m05-l04-grandparents | Grands-parents | Ma grand-mère/Grandmother · Mon grand-père/Grandfather · Mes petits-enfants/Grandchildren | Hyphenated kin | Tell a grandparent story |
| 5 | m05-l05-aunts-uncles | Tante & Oncle | Ma tante/My aunt · Mon oncle/My uncle · Mon cousin / Ma cousine/My cousin | Cousin gender | Describe extended family |
| 6 | m05-l06-in-laws | Belle-famille | Belle-mère/Mother-in-law · Beau-père/Father-in-law · Mon mari / Ma femme/My husband/wife | In-law nuance | Mention an in-law |
| 7 | m05-l07-friends | Les amis | Mon meilleur ami/My best (m) friend · Ma meilleure amie/My best (f) friend · Comme ma famille/Like my family | "Comme" comparison | Describe your closest friend |
| 8 | m05-l08-family-actions | Visiter, appeler, manquer | Visiter/Visit · Appeler/Call · Manquer/Miss (Tu me manques = I miss you) | French "miss" inversion | Tell someone "tu me manques" |
| 9 | m05-l09-family-stories | Raconter une histoire de famille | Il y a longtemps/Long ago · Ma grand-mère faisait .../My grandmother used to... · Il dit toujours .../He always says... | Imparfait habit | Share a family memory |
| 10 | m05-l10-conversation | Une conversation familiale | (review) | Whole family talk | Discuss family in French |

### Module 6 — Numbers, Time, Money

| L | ID | Title | Chunks | Pattern | Mission |
|---|---|---|---|---|---|
| 1 | m06-l01-numbers-1-10 | Un à Dix | Un/One · Cinq/Five · Dix/Ten | Cardinal counting | Count to 10 in French |
| 2 | m06-l02-numbers-20-100 | Vingt à Cent | Vingt/Twenty · Cinquante/Fifty · Cent/One hundred | Tens (irregular 70/80/90) | Say your age and house number |
| 3 | m06-l03-big-numbers | Mille, Million, Milliard | Mille/One thousand · Un million/One million · Un milliard/One billion | Large numbers (no "s" on mille) | Read a big number |
| 4 | m06-l04-time-hours | Quelle heure est-il? | Quelle heure est-il?/What time is it? · Il est sept heures/It's 7 o'clock · Du matin / Du soir/A.M. / P.M. | Heure expression | Tell the time |
| 5 | m06-l05-time-minutes | Demie, Quart, Moins | Sept heures et demie/Half past 7 · Huit heures moins le quart/Quarter to 8 · Cinq heures cinq/5 past 5 | Time fragments | Tell time precisely |
| 6 | m06-l06-days-week | Jours de la semaine | Lundi/Monday · Vendredi/Friday · Dimanche/Sunday | No capitals on days | Say today and tomorrow |
| 7 | m06-l07-months-seasons | Mois et saisons | Janvier/January · Le printemps/Spring · L'hiver/Winter | Seasons + en | State birth month |
| 8 | m06-l08-money-prices | Argent — Combien ça coûte? | Combien ça coûte?/How much does it cost? · Vingt euros/Twenty euros · C'est cher/It's expensive | Euro pricing | Ask the price |
| 9 | m06-l09-shopping-numbers | Au marché — Numbers | Trois pour dix euros/Three for ten · Une réduction/A discount · Au total/In total | Bargain phrases | Negotiate or read a price |
| 10 | m06-l10-conversation | Money & time conversation | (review) | Practical numbers | Have a number-heavy chat |

### Module 7 — À Table

| L | ID | Title | Chunks | Pattern | Mission |
|---|---|---|---|---|---|
| 1 | m07-l01-faim-soif | J'ai faim, j'ai soif | J'ai faim/I'm hungry · J'ai soif/I'm thirsty · Je voudrais de l'eau/I'd like some water | Avoir for states | Say what you need |
| 2 | m07-l02-foods | Aliments courants | Le pain/Bread · Le riz/Rice · Le fromage/Cheese | Food nouns | Name 5 foods |
| 3 | m07-l03-restaurant | Au restaurant | Une table pour deux/Table for two · La carte s'il vous plaît/Menu please · L'addition/The bill | Restaurant vocab | Pretend to be at one |
| 4 | m07-l04-ordering | Commander | Je voudrais .../I'd like... · Je prends .../I'll take... · Sans oignons/Without onions | Polite order | Order a dish |
| 5 | m07-l05-likes-food | J'aime / Je n'aime pas | J'adore/I love it · Je n'aime pas .../I don't like... · C'est délicieux/It's delicious | Negation in preferences | Say what you love eating |
| 6 | m07-l06-cooking | Cuisiner — verbs | Cuire/Cook · Couper/Chop · Mélanger/Mix | Cooking verbs | Describe one dish you cook |
| 7 | m07-l07-tea-drinks | Le café, le thé, le vin | Un café au lait/Coffee with milk · Un thé/A tea · Un verre de vin/A glass of wine | Drinks order | Order a drink |
| 8 | m07-l08-french-food | Cuisine française | La baguette/Baguette · Le croissant/Croissant · La crème brûlée/Crème brûlée | Foreign food names | Tell someone your favourite French food |
| 9 | m07-l09-hosting | Recevoir des invités | Bienvenue/Welcome · Asseyez-vous/Sit down · Servez-vous/Help yourself | Host phrases | Welcome someone in French |
| 10 | m07-l10-conversation | Une conversation à table | (review) | Whole meal talk | Have a meal-time chat |

### Module 8 — Verbes du Quotidien

| L | ID | Title | Chunks | Pattern | Mission |
|---|---|---|---|---|---|
| 1 | m08-l01-etre-avoir | Être & Avoir — The two pillars | Je suis/I am · J'ai/I have · Tu es / Tu as/You are/have | Two core verbs | Use both verbs 5 times |
| 2 | m08-l02-faire | Faire — To do/make | Je fais du sport/I do sport · Faire la cuisine/To cook · Que fais-tu?/What are you doing? | Faire idioms | Use "faire" 3 ways |
| 3 | m08-l03-aller | Aller — To go | Je vais/I go · Aller à Paris/Go to Paris · On y va/Let's go | Aller + à | Use "aller" 3 times |
| 4 | m08-l04-vouloir | Vouloir — To want | Je veux/I want · Je voudrais/I'd like · Tu veux .../Do you want... | Polite want | Ask for what you want |
| 5 | m08-l05-wake-up | Routine matinale | Je me réveille à 7h/I wake at 7 · Je me douche/I shower · Je prends le petit-déjeuner/I have breakfast | Reflexive verbs | Describe your morning |
| 6 | m08-l06-work-school | Le travail | Je vais au bureau/I go to the office · Je travaille de 9h à 17h/I work 9-5 · J'ai une réunion/I have a meeting | Work verbs | Describe your work day |
| 7 | m08-l07-evening-routine | Le soir | Je rentre/I come home · Je dîne/I have dinner · Je regarde la télé/I watch TV | Evening verbs | Describe your evening |
| 8 | m08-l08-yesterday | Hier — Past with avoir | Hier j'ai vu .../Yesterday I saw... · J'ai mangé .../I ate... · C'était bien/It was good | Passé composé with avoir | Tell yesterday's story |
| 9 | m08-l09-tomorrow | Demain — Future | Demain je vais .../Tomorrow I'll... · La semaine prochaine .../Next week... · À demain/See you tomorrow | Aller + infinitive (futur proche) | Plan tomorrow |
| 10 | m08-l10-conversation | A day-in-life conversation | (review) | Verb fluency | Walk through your day |

### Module 9 — Directions, Métro & Travel

| L | ID | Title | Chunks | Pattern | Mission |
|---|---|---|---|---|---|
| 1 | m09-l01-where-is | Où est...? | Où est la banque?/Where's the bank? · Où sont les toilettes?/Where are the toilets? · Là-bas/Over there | Locations | Ask for one location |
| 2 | m09-l02-directions | Gauche, Droite, Tout droit | Tournez à gauche/Turn left · Continuez tout droit/Go straight · C'est à droite/It's on the right | Direction imperatives | Give directions |
| 3 | m09-l03-distance | C'est loin? — Near, Far | C'est loin?/Is it far? · À cinq minutes à pied/Five min walk · Juste au coin/Just round the corner | Distance | Estimate distance |
| 4 | m09-l04-transport | Métro, Bus, Train | Le métro/The metro · Le bus/The bus · Le train/The train | Transport nouns | Name 3 ways you travel |
| 5 | m09-l05-buying-ticket | Acheter un billet | Un aller simple pour Lyon/One way to Lyon · Un aller-retour/Round trip · Combien?/How much? | Travel transactions | Buy one ticket (real or play) |
| 6 | m09-l06-airport | À l'aéroport | La carte d'embarquement/Boarding pass · La porte/The gate · La douane/Customs | Air travel | Imagine the airport |
| 7 | m09-l07-hotel | À l'hôtel | Une réservation/A reservation · La clé de la chambre/Room key · Je voudrais payer/I'd like to pay | Hotel vocab | Pretend to check in |
| 8 | m09-l08-emergency-travel | En voyage — emergencies | Je suis perdu(e)/I'm lost · J'ai raté mon train/I missed my train · J'ai perdu mon sac/I lost my bag | Past tense + crisis | Memorise these |
| 9 | m09-l09-asking-help | Demander de l'aide en voyage | Pourriez-vous m'aider?/Could you help me? · Je ne connais pas le quartier/I don't know this area · Pourriez-vous l'écrire?/Could you write it down? | Polite request | Ask one travel question |
| 10 | m09-l10-conversation | A travel conversation | (review) | Travel fluency | Plan a French trip |

### Module 10 — Émotions & Histoire

| L | ID | Title | Chunks | Pattern | Mission |
|---|---|---|---|---|---|
| 1 | m10-l01-happy-sad | Heureux & Triste | Je suis content(e)/I'm happy · Je suis triste/I'm sad · Ça m'a rendu(e) heureux(se)/It made me happy | Adjective agreement | Name today's feeling |
| 2 | m10-l02-angry | En colère | Je suis en colère/I'm angry · Je suis frustré(e)/I'm frustrated · Calme-toi/Calm down | Strong emotions | Express politely |
| 3 | m10-l03-fear | Peur & Inquiétude | J'ai peur/I'm scared · Je suis inquiet/inquiète/I'm worried · Ne t'inquiète pas/Don't worry | Avoir peur | Tell what worries you |
| 4 | m10-l04-sick | Être malade | Je ne me sens pas bien/I don't feel well · J'ai mal à la tête/I have a headache · Je dois voir un médecin/I need a doctor | "Avoir mal" idiom | Imagine the doctor |
| 5 | m10-l05-body | Le corps humain | La tête/Head · Le ventre/Stomach · Le bras/Arm | Body nouns | Point and name 5 parts |
| 6 | m10-l06-doctor | Chez le médecin | Ça fait mal ici/It hurts here · Depuis trois jours/For three days · Prenez ce médicament/Take this medicine | Medical setting | Pretend to see a doctor |
| 7 | m10-l07-past-stories | Raconter au passé | Quand j'étais enfant .../When I was a child... · Je n'oublierai jamais .../I'll never forget... · C'était incroyable/It was incredible | Imparfait + passé | Tell a 3-sentence story |
| 8 | m10-l08-hope-future | L'espoir | J'espère .../I hope... · Un jour je .../One day I'll... · Je rêve de .../I dream of... | Espérer + infinitive | Share a hope |
| 9 | m10-l09-proverbs | Proverbes français | "Petit à petit, l'oiseau fait son nid" — Little by little, the bird builds its nest (patience) · "Qui vivra verra" — Who lives will see (wait and see) · "À cœur vaillant rien d'impossible" — To a brave heart, nothing is impossible | French wisdom | Share one proverb |
| 10 | m10-l10-your-story | Votre histoire en français — A2 Complete | (review) | Final integration | Tell a 5-min story in French |

---

## 4. language-chinese — English speaker learning Mandarin (100 lessons)

**Status:** Course pack does not exist. **Action:** CREATE the course (`data/courses/language-chinese/index.ts` with English variant) and AUTHOR all 100 lessons.

Cultural framing is from an ENGLISH speaker's perspective. Use Pinyin with tone marks for chunks (target = pinyin + Chinese characters in literal/notes). The pattern progression respects Mandarin's specific challenges: tones, measure words, classifiers, no plurals, sentence-final particles. Hooks anchor in moments — Beijing hutong morning, Shanghai office lift, Chengdu hotpot, Cantonese tea house.

### Module 1 — Nǐ Hǎo & Politeness

| L | ID | Title | Chunks | Pattern | Mission |
|---|---|---|---|---|---|
| 1 | m01-l01-nihao | Nǐ hǎo — Hello | Nǐ hǎo (你好)/Hello · Nǐ hǎo ma? (你好吗?)/How are you? · Wǒ hěn hǎo (我很好)/I'm well | Tones overview (4 tones) | Greet someone with "Nǐ hǎo" |
| 2 | m01-l02-zaoshang | Zǎoshang hǎo — Good morning | Zǎoshang hǎo (早上好)/Good morning · Wǎnshàng hǎo (晚上好)/Good evening · Zàijiàn (再见)/Goodbye | Compound greetings | Greet at morning vs evening |
| 3 | m01-l03-xiexie | Xièxie — Thank you | Xièxie (谢谢)/Thank you · Bù kèqi (不客气)/You're welcome · Duōxiè (多谢)/Many thanks | Politeness chain | Say "xièxie" today |
| 4 | m01-l04-qing | Qǐng — Please | Qǐng (请)/Please · Qǐng wèn... (请问)/Excuse me (when asking) · Bù hǎoyìsi (不好意思)/Sorry/excuse me | Polite request markers | Use "qǐng wèn" once |
| 5 | m01-l05-name | Nǐ jiào shénme? — What's your name? | Nǐ jiào shénme míngzi? (你叫什么名字?)/What's your name? · Wǒ jiào... (我叫...)/My name is... · Hěn gāoxìng rènshi nǐ (很高兴认识你)/Pleased to meet you | "Jiào" (called) | Introduce yourself in Chinese |
| 6 | m01-l06-where-from | Nǐ shì nǎ guó rén? — Where from? | Nǐ shì nǎ guó rén? (你是哪国人?)/What's your nationality? · Wǒ shì... rén (我是...人)/I'm... (nationality) · Wǒ cóng... lái (我从...来)/I come from... | "Shì" (am/is) | Tell your nationality |
| 7 | m01-l07-pleased | Hěn gāoxìng — Pleased / Glad | Hěn gāoxìng (很高兴)/Very glad · Wǒ yě shì (我也是)/Me too · Huānyíng (欢迎)/Welcome | "Hěn" amplifier | Welcome someone |
| 8 | m01-l08-yes-no | Shì & Bú shì — Yes & No | Shì (是)/Yes (am/is) · Bú shì (不是)/No (not am/is) · Duì (对)/Correct (right) | "Shì" yes/no | Use shì/bú shì |
| 9 | m01-l09-zaijian | Zàijiàn — Goodbye | Zàijiàn (再见)/Goodbye · Míngtiān jiàn (明天见)/See you tomorrow · Bǎozhòng (保重)/Take care | Farewell wishes | Say "zàijiàn" properly |
| 10 | m01-l10-conversation | A complete Chinese greeting | (review) | Full politeness | Have a complete Chinese greeting |

### Module 2 — Survival Phrases

| L | ID | Title | Chunks | Pattern | Mission |
|---|---|---|---|---|---|
| 1 | m02-l01-duibuqi | Duìbuqǐ — Sorry | Duìbuqǐ (对不起)/Sorry · Méi guānxi (没关系)/It's fine · Bù hǎoyìsi (不好意思)/Excuse me | Apology chain | Use one apology |
| 2 | m02-l02-bu-dong | Wǒ bù dǒng — I don't understand | Wǒ bù dǒng (我不懂)/I don't understand · Qǐng zài shuō yí biàn (请再说一遍)/Please repeat · Màn yìdiǎn (慢一点)/Slowly | Negation "bù" | Use this if confused |
| 3 | m02-l03-yingyu | Nǐ huì shuō Yīngyǔ ma? | Nǐ huì shuō Yīngyǔ ma? (你会说英语吗?)/Do you speak English? · Yìdiǎn diǎn (一点点)/A little bit · Bù tài hǎo (不太好)/Not very well | "Huì" can/know | Ask one stranger |
| 4 | m02-l04-yes-no-q | Question particle "ma" | Hǎo ma? (好吗?)/Is it good? · Duì ma? (对吗?)/Is it correct? · Kěyǐ ma? (可以吗?)/May I? | "Ma" turns statement into question | Use "ma" 3 times |
| 5 | m02-l05-help | Bāngzhù — Help | Bāngzhù wǒ (帮助我)/Help me · Wǒ xūyào bāngmáng (我需要帮忙)/I need help · Wǒ mí lù le (我迷路了)/I'm lost | Asking help | Memorise these |
| 6 | m02-l06-where-is | ...zài nǎlǐ? — Where is...? | Cèsuǒ zài nǎlǐ? (厕所在哪里?)/Where's the toilet? · Yínháng zài nǎlǐ? (银行在哪里?)/Where's the bank? · Zài nàlǐ (在那里)/Over there | "Zài" (located at) + "nǎlǐ" | Ask for one location |
| 7 | m02-l07-how-much | Duōshao qián? — How much? | Duōshao qián? (多少钱?)/How much money? · Tài guì le (太贵了)/Too expensive · Piányi yìdiǎn (便宜一点)/Cheaper please | Yuan price | Ask price of one thing |
| 8 | m02-l08-i-want | Wǒ yào... — I want | Wǒ yào... (我要...)/I want... · Wǒ xiǎng... (我想...)/I'd like... · Méi yǒu (没有)/Don't have / no | "Yào" vs "xiǎng" | Order one thing |
| 9 | m02-l09-emergency | Jiùmìng! — Help! / Emergency | Jiùmìng! (救命!)/Help! · Jiào jǐngchá (叫警察)/Call police · Wǒ xūyào yīshēng (我需要医生)/I need a doctor | Emergency imperative | Memorise — hopefully unused |
| 10 | m02-l10-conversation | Survival in conversation | (review) | Full survival | Navigate one Chinese problem |

### Module 3 — Self & Introductions

| L | ID | Title | Chunks | Pattern | Mission |
|---|---|---|---|---|---|
| 1 | m03-l01-wo-shi | Wǒ shì — I am | Wǒ shì xuésheng (我是学生)/I am a student · Wǒ shì lǎoshī (我是老师)/I am a teacher · Wǒ shì Měiguó rén (我是美国人)/I am American | "Shì" + noun | Use "wǒ shì" 3 times |
| 2 | m03-l02-age | Nǐ duō dà? — How old? | Nǐ duō dà le? (你多大了?)/How old? · Wǒ sānshí suì (我三十岁)/I'm 30 · Wǒ shì 1995 nián chūshēng (我是1995年出生)/Born in 1995 | "Suì" (years old) | Tell your age |
| 3 | m03-l03-job | Nǐ zuò shénme gōngzuò? | Nǐ zuò shénme gōngzuò? (你做什么工作?)/What's your job? · Wǒ shì gōngchéngshī (我是工程师)/I'm an engineer · Wǒ zài... gōngzuò (我在...工作)/I work at... | "Zuò" (do) + "gōngzuò" | Describe your job |
| 4 | m03-l04-family-status | Jiéhūn? Háizi? | Nǐ jiéhūn le ma? (你结婚了吗?)/Married? · Wǒ yǒu liǎng ge háizi (我有两个孩子)/I have two kids · Wǒ dānshēn (我单身)/I'm single | Family status | Discuss family |
| 5 | m03-l05-hobbies | Àihào — Hobbies | Wǒ xǐhuān... (我喜欢...)/I like... · Wǒ xǐhuān kàn shū (我喜欢看书)/I like reading · Yùndòng (运动)/Sport | "Xǐhuān" + verb | Share one hobby |
| 6 | m03-l06-languages | Wǒ huì shuō... — Languages | Wǒ huì shuō Yīngyǔ (我会说英语)/I speak English · Yìdiǎn Zhōngwén (一点中文)/A little Chinese · Wǒ xiǎng xuéxí (我想学习)/I want to learn | "Huì" + language | List your languages |
| 7 | m03-l07-where-i-live | Wǒ zhù zài... | Wǒ zhù zài Sydney (我住在悉尼)/I live in Sydney · Wǒ zài zhèlǐ wǔ nián le (我在这里五年了)/Here for 5 years · Yǐqián wǒ zhù zài... (以前我住在...)/Before I lived in... | Duration "le" | Describe your home |
| 8 | m03-l08-personality | Wǒ shì... rén — Describing self | Wǒ hěn yǒushàn (我很友善)/I'm friendly · Yǒu yìdiǎn hàixiū (有一点害羞)/A bit shy · Hěn hàoqí (很好奇)/Very curious | "Hěn" + adjective | Pick three words about you |
| 9 | m03-l09-asking-them | Gàosu wǒ — Tell me about you | Gàosu wǒ nǐ de gùshi (告诉我你的故事)/Tell me your story · Nǐ cóng nǎlǐ lái? (你从哪里来?)/Where do you come from? · Nǐ shì zěnme yàng de rén? (你是怎么样的人?)/What kind of person are you? | Question words | Ask one Chinese speaker their story |
| 10 | m03-l10-conversation | Full introduction | (review) | Two-way intro | Have a full intro in Chinese |

### Module 4 — Tones & Measure Words

| L | ID | Title | Chunks | Pattern | Mission |
|---|---|---|---|---|---|
| 1 | m04-l01-tones | The 4 Tones | mā (high) · má (rising) · mǎ (dipping) · mà (falling) | Tone discrimination | Practise the 4 tones daily |
| 2 | m04-l02-tone-words | Tone-changes meaning | mǎi (买 buy) vs mài (卖 sell) · qǐng (请 please) vs qíng (情 feeling) · shū (书 book) vs shù (树 tree) | Minimal pairs | Hear tones in 5 words |
| 3 | m04-l03-measure-ge | Measure word "ge" — General | Yí ge rén (一个人)/One person · Liǎng ge háizi (两个孩子)/Two kids · Sān ge wèntí (三个问题)/Three questions | "Ge" measure word | Use "ge" 5 times |
| 4 | m04-l04-measure-zhi | Measure word "zhī" — Animals | Yì zhī māo (一只猫)/One cat · Liǎng zhī gǒu (两只狗)/Two dogs · Sān zhī niǎo (三只鸟)/Three birds | "Zhī" for animals | Count 3 animals |
| 5 | m04-l05-measure-ben | Measure word "běn" — Books | Yì běn shū (一本书)/One book · Sān běn cídiǎn (三本词典)/Three dictionaries · Wǔ běn xiǎoshuō (五本小说)/Five novels | "Běn" for bound items | Count books on your shelf |
| 6 | m04-l06-measure-zhang | Measure word "zhāng" — Flat | Yì zhāng zhǐ (一张纸)/One sheet of paper · Sān zhāng piào (三张票)/Three tickets · Liǎng zhāng zhuōzi (两张桌子)/Two tables | "Zhāng" for flat objects | Count 3 flat objects |
| 7 | m04-l07-measure-bei | Measure word "bēi" — Cups | Yì bēi shuǐ (一杯水)/One cup of water · Liǎng bēi kāfēi (两杯咖啡)/Two coffees · Sān bēi chá (三杯茶)/Three teas | "Bēi" for liquid containers | Order 2 cups |
| 8 | m04-l08-this-that | Zhè & Nà — This & That | Zhè ge (这个)/This (one) · Nà ge (那个)/That (one) · Zhèxiē (这些)/These | "Zhè/nà" + measure | Point and name 3 things |
| 9 | m04-l09-mixed | Mixed measure-word practice | (review) | All measure words | Notice measure words in speech |
| 10 | m04-l10-conversation | Tone-aware conversation | (review) | Real talk with tones | Hold a tone-careful conversation |

### Module 5 — Jiārén (Family)

| L | ID | Title | Chunks | Pattern | Mission |
|---|---|---|---|---|---|
| 1 | m05-l01-baba-mama | Bàba & Māma | Bàba (爸爸)/Father · Māma (妈妈)/Mother · Wǒ de bàba māma (我的爸爸妈妈)/My parents | Reduplication | Talk about your parents |
| 2 | m05-l02-siblings | Gēge & Mèimei | Gēge (哥哥)/Older brother · Mèimei (妹妹)/Younger sister · Dìdi (弟弟)/Younger brother | Age-based kin distinction | Describe your siblings (age order) |
| 3 | m05-l03-children | Érzi & Nǚ'ér | Érzi (儿子)/Son · Nǚ'ér (女儿)/Daughter · Háizi (孩子)/Child | Naming kids | Talk about kids |
| 4 | m05-l04-grandparents | Yéye & Nǎinai | Yéye (爷爷)/Father's father · Nǎinai (奶奶)/Father's mother · Wàigōng & wàipó (外公外婆)/Mother's parents | Paternal vs maternal | Tell grandparent story |
| 5 | m05-l05-aunts-uncles | Aunts & Uncles in Chinese | Shūshu (叔叔)/Uncle (father's younger brother) · Bóbo (伯伯)/Father's older brother · Āyí (阿姨)/Aunt | Detailed kinship | Use one term |
| 6 | m05-l06-in-laws | In-laws | Yuèfù & yuèmǔ (岳父岳母)/Wife's parents · Gōnggōng & pópo (公公婆婆)/Husband's parents · Zhàngfu / qīzi (丈夫/妻子)/Husband/wife | Marriage kin | Mention an in-law |
| 7 | m05-l07-friends | Péngyou — Friends | Wǒ zuì hǎo de péngyou (我最好的朋友)/My best friend · Hǎo péngyou (好朋友)/Good friends · Xiàng jiārén yíyàng (像家人一样)/Like family | "Xiàng...yíyàng" simile | Describe your closest friend |
| 8 | m05-l08-family-actions | Bàifǎng, dǎ diànhuà, xiǎng | Bàifǎng (拜访)/Visit · Dǎ diànhuà (打电话)/Call (lit: "hit phone") · Xiǎng (想)/Miss / think of | Compound verbs | Call/think of one family member |
| 9 | m05-l09-family-stories | Jiātíng gùshi — Family stories | Hěn jiǔ yǐqián (很久以前)/Long ago · Wǒ nǎinai yǐqián... (我奶奶以前...)/My grandmother used to... · Tā zǒngshì shuō (他总是说)/He always says | "Yǐqián" past habit | Share a family memory |
| 10 | m05-l10-conversation | Jiātíng tánhuà | (review) | Whole family talk | Discuss family in Chinese |

### Module 6 — Shùzì, Shíjiān, Qián (Numbers, Time, Money)

| L | ID | Title | Chunks | Pattern | Mission |
|---|---|---|---|---|---|
| 1 | m06-l01-numbers-1-10 | Yī to Shí | Yī (一)/One · Wǔ (五)/Five · Shí (十)/Ten | Cardinal counting | Count to 10 in Chinese |
| 2 | m06-l02-numbers-20-100 | Èr-shí to Yì-bǎi | Èr-shí (二十)/Twenty · Wǔ-shí (五十)/Fifty · Yì bǎi (一百)/One hundred | Tens (10×N) | Say age + house number |
| 3 | m06-l03-big-numbers | Qiān, Wàn, Yì | Yì qiān (一千)/Thousand · Yí wàn (一万)/Ten thousand · Yí yì (一亿)/Hundred million | "Wàn" base 4 system | Read a big number |
| 4 | m06-l04-time-hours | Jǐ diǎn? — What time? | Jǐ diǎn? (几点?)/What time? · Qī diǎn (七点)/7 o'clock · Shàngwǔ / xiàwǔ (上午/下午)/AM / PM | "Diǎn" hour | Tell the time |
| 5 | m06-l05-time-minutes | Bàn, Sān-shí fēn | Qī diǎn bàn (七点半)/Half past 7 · Bā diǎn shí fēn (八点十分)/Ten past 8 · Chà yí kè (差一刻)/Quarter to | Time fragments | Tell time precisely |
| 6 | m06-l06-days-week | Xīngqī — Days of week | Xīngqī yī (星期一)/Monday · Xīngqī wǔ (星期五)/Friday · Xīngqī tiān/rì (星期天/日)/Sunday | Numbered days | Say today and tomorrow |
| 7 | m06-l07-months-seasons | Yuè & Jì — Months & Seasons | Yī yuè (一月)/January · Sì jì (四季)/Four seasons · Chūntiān (春天)/Spring | Numbered months | State your birth month |
| 8 | m06-l08-money-prices | Duōshao qián? — Money | Duōshao qián? (多少钱?)/How much? · Wǔshí kuài (五十块)/50 yuan (colloquial) · Tài guì le (太贵了)/Too expensive | "Kuài" (yuan) | Ask price |
| 9 | m06-l09-shopping-numbers | Mǎi dōngxi — Shopping numbers | Yí ge wǔ kuài, sān ge shí kuài (一个五块,三个十块)/One for 5, three for 10 · Dǎ zhé (打折)/Discount · Yígòng (一共)/In total | Bargain phrases | Read a price tag |
| 10 | m06-l10-conversation | Money & time conversation | (review) | Practical numbers | Have a number-heavy chat |

### Module 7 — Chīfàn (Eating)

| L | ID | Title | Chunks | Pattern | Mission |
|---|---|---|---|---|---|
| 1 | m07-l01-hungry | Wǒ è le — I'm hungry | Wǒ è le (我饿了)/I'm hungry · Wǒ kě le (我渴了)/I'm thirsty · Wǒ yào shuǐ (我要水)/I want water | "Le" change of state | Say what you need |
| 2 | m07-l02-foods | Cháng jiàn cài — Common foods | Mǐfàn (米饭)/Rice · Miàntiáo (面条)/Noodles · Jīròu (鸡肉)/Chicken | Food nouns | Name 5 foods |
| 3 | m07-l03-restaurant | Zài fànguǎn — At a restaurant | Liǎng wèi (两位)/Table for two (lit: two people) · Càidān (菜单)/Menu · Mǎidān (买单)/The bill | Restaurant vocab | Pretend to be at one |
| 4 | m07-l04-ordering | Diǎn cài — Ordering | Wǒ yào zhè ge (我要这个)/I want this · Lái yí ge... (来一个...)/Bring one... · Bú yào yāncōng (不要洋葱)/Without onions | "Lái" colloquial | Order one dish |
| 5 | m07-l05-likes-food | Hào chī — Tasty | Hěn hào chī (很好吃)/Very tasty · Wǒ bù xǐhuān... (我不喜欢...)/I don't like... · Wǒ chī sù (我吃素)/I'm vegetarian | Negation in preferences | Say what you love eating |
| 6 | m07-l06-cooking | Pēngrèn — Cooking verbs | Zhǔ (煮)/Boil · Chǎo (炒)/Stir-fry · Zhēng (蒸)/Steam | Cooking verbs | Describe one dish you cook |
| 7 | m07-l07-tea-drinks | Chá, Kāfēi — Tea & Coffee | Yì bēi chá (一杯茶)/A cup of tea · Hēi kāfēi (黑咖啡)/Black coffee · Yì bēi shuǐ (一杯水)/Glass of water | Drink + measure word | Order a drink |
| 8 | m07-l08-chinese-food | Zhōngguó cài — Chinese food | Jiǎozi (饺子)/Dumplings · Huǒguō (火锅)/Hotpot · Gōngbǎo jīdīng (宫保鸡丁)/Kung Pao chicken | Famous dishes | Name 3 Chinese dishes |
| 9 | m07-l09-hosting | Zuòkè — Being hosted | Huānyíng (欢迎)/Welcome · Qǐng zuò (请坐)/Please sit · Bù yào kèqi (不要客气)/Don't be polite (help yourself) | Host phrases | Welcome someone |
| 10 | m07-l10-conversation | Yìqǐ chīfàn — Eating together | (review) | Whole meal talk | Have a meal-time chat |

### Module 8 — Riccháng dòngzuò (Daily Verbs)

| L | ID | Title | Chunks | Pattern | Mission |
|---|---|---|---|---|---|
| 1 | m08-l01-shi-you | Shì & Yǒu — Be & Have | Wǒ shì... (我是)/I am · Wǒ yǒu... (我有)/I have · Tā méi yǒu (他没有)/He doesn't have | Two core verbs | Use both verbs 5 times |
| 2 | m08-l02-zuo | Zuò — Do/make | Wǒ zuò gōngkè (我做功课)/I do homework · Tā zuò fàn (她做饭)/She cooks · Nǐ zuò shénme? (你做什么?)/What are you doing? | "Zuò" idioms | Use "zuò" 3 ways |
| 3 | m08-l03-qu-lai | Qù & Lái — Go & Come | Wǒ qù gōngsī (我去公司)/I go to work · Tā lái le (他来了)/He's coming · Wǒmen zǒu ba (我们走吧)/Let's go | Movement verbs | Use both today |
| 4 | m08-l04-want | Yào & Xiǎng — Want | Wǒ yào kāfēi (我要咖啡)/I want coffee · Wǒ xiǎng xiūxi (我想休息)/I'd like to rest · Yào bú yào? (要不要?)/Do you want? | Yào (must) vs xiǎng (would-like) | Ask for what you want |
| 5 | m08-l05-wake-up | Zǎoshang — Morning routine | Wǒ liù diǎn qǐchuáng (我六点起床)/I wake at 6 · Wǒ xǐ liǎn (我洗脸)/I wash my face · Wǒ chī zǎofàn (我吃早饭)/I eat breakfast | Morning verbs | Describe your morning |
| 6 | m08-l06-work-school | Gōngzuò — Work | Wǒ qù gōngsī (我去公司)/I go to office · Wǒ cóng jiǔ diǎn dào wǔ diǎn (我从九点到五点)/I work 9 to 5 · Wǒ yǒu huìyì (我有会议)/I have a meeting | Time range "cóng...dào" | Describe your work day |
| 7 | m08-l07-evening | Wǎnshang — Evening | Wǒ huí jiā (我回家)/I go home · Wǒ zuò wǎnfàn (我做晚饭)/I make dinner · Wǒ kàn diànshì (我看电视)/I watch TV | Evening verbs | Describe your evening |
| 8 | m08-l08-yesterday | Zuótiān — Yesterday | Zuótiān wǒ qù le... (昨天我去了...)/Yesterday I went... · Wǒ chī le... (我吃了...)/I ate... · Hěn hǎo (很好)/It was good | Past with "le" | Tell what you did yesterday |
| 9 | m08-l09-tomorrow | Míngtiān — Tomorrow | Míngtiān wǒ huì... (明天我会...)/Tomorrow I'll... · Xià ge xīngqī (下个星期)/Next week · Míngtiān jiàn (明天见)/See you tomorrow | "Huì" future modal | Plan tomorrow |
| 10 | m08-l10-conversation | Yī tiān shēnghuó — A day's life | (review) | Verb fluency | Walk through your day in Chinese |

### Module 9 — Fāngxiàng, Lǚxíng (Directions, Travel)

| L | ID | Title | Chunks | Pattern | Mission |
|---|---|---|---|---|---|
| 1 | m09-l01-where-is | ...Zài nǎlǐ? — Where is...? | Yínháng zài nǎlǐ? (银行在哪里?)/Where's the bank? · Cèsuǒ zài nǎlǐ? (厕所在哪里?)/Where's the toilet? · Zài nàlǐ (在那里)/Over there | "Zài" + location word | Ask for one location |
| 2 | m09-l02-directions | Zuǒ, Yòu, Zhí — L/R/Straight | Zuǒ zhuǎn (左转)/Turn left · Yòu zhuǎn (右转)/Turn right · Zhí zǒu (直走)/Go straight | Directional verbs | Give directions |
| 3 | m09-l03-distance | Yuǎn ma? — Far? Near? | Yuǎn ma? (远吗?)/Is it far? · Wǔ fēnzhōng zǒu lù (五分钟走路)/Five minutes walk · Hěn jìn (很近)/Very close | Distance | Estimate distance |
| 4 | m09-l04-transport | Dìtiě, Gōnggòng qìchē, Huǒchē | Dìtiě (地铁)/Subway · Gōnggòng qìchē (公共汽车)/Bus · Huǒchē (火车)/Train | Transport nouns | Name 3 ways you travel |
| 5 | m09-l05-buying-ticket | Mǎi piào — Buying a ticket | Yì zhāng dào Běijīng (一张到北京)/One ticket to Beijing · Lái huí (来回)/Round trip · Duōshao qián? (多少钱?)/How much? | "Zhāng" measure for ticket | Buy one ticket (real or play) |
| 6 | m09-l06-airport | Zài jīchǎng — Airport | Dēngjī pái (登机牌)/Boarding pass · Dēngjī kǒu (登机口)/Departure gate · Hǎiguān (海关)/Customs | Air travel vocab | Imagine the airport |
| 7 | m09-l07-hotel | Zhù bīnguǎn — Hotel | Yùdìng (预定)/Reservation · Fángjiān yàoshi (房间钥匙)/Room key · Tuì fáng (退房)/Check out | Hotel vocab | Pretend to check in |
| 8 | m09-l08-emergency-travel | Zài lǚxíng zhōng — Travel emergencies | Wǒ mí lù le (我迷路了)/I'm lost · Wǒ wù le huǒchē (我误了火车)/I missed my train · Wǒ diū le bāo (我丢了包)/I lost my bag | Crisis travel | Memorise these |
| 9 | m09-l09-asking-help | Qǐng bāng máng — Asking help | Qǐng bāng wǒ máng (请帮我忙)/Please help me · Wǒ bù shúxī zhèlǐ (我不熟悉这里)/I don't know this area · Néng bāng wǒ xiě xià lái ma? (能帮我写下来吗?)/Could you write it down? | Polite request | Ask one travel question |
| 10 | m09-l10-conversation | Yí cì lǚxíng tánhuà — Travel conversation | (review) | Travel fluency | Plan a Chinese trip |

### Module 10 — Qínggǎn, Jiànkāng, Gùshi

| L | ID | Title | Chunks | Pattern | Mission |
|---|---|---|---|---|---|
| 1 | m10-l01-happy-sad | Gāoxìng & Nánguò — Happy/Sad | Wǒ hěn gāoxìng (我很高兴)/I'm happy · Wǒ hěn nánguò (我很难过)/I'm sad · Tā ràng wǒ hěn gāoxìng (它让我很高兴)/It made me happy | "Ràng" (cause) | Name today's feeling |
| 2 | m10-l02-angry | Shēngqì — Anger | Wǒ shēngqì le (我生气了)/I'm angry · Wǒ hěn shīwàng (我很失望)/I'm disappointed · Lěngjìng yìdiǎn (冷静一点)/Calm down | Strong emotions | Express politely |
| 3 | m10-l03-fear | Pà & Dānxīn — Fear & Worry | Wǒ pà... (我怕)/I'm afraid of... · Wǒ dānxīn... (我担心)/I'm worried about... · Bié dānxīn (别担心)/Don't worry | "Pà" + object | Tell what worries you |
| 4 | m10-l04-sick | Wǒ bù shūfu — I'm not well | Wǒ bù shūfu (我不舒服)/I don't feel well · Wǒ tóu téng (我头疼)/I have a headache · Wǒ yào kàn yīshēng (我要看医生)/I need a doctor | Body + "téng" (hurt) | Imagine the doctor |
| 5 | m10-l05-body | Shēntǐ — Body parts | Tóu (头)/Head · Dùzi (肚子)/Stomach · Gēbei (胳膊)/Arm | Body nouns | Point and name 5 parts |
| 6 | m10-l06-doctor | Kàn yīshēng — At the doctor | Zhèlǐ téng (这里疼)/It hurts here · Sān tiān le (三天了)/For three days · Chī zhè ge yào (吃这个药)/Take this medicine | Duration "...le" | Pretend to see a doctor |
| 7 | m10-l07-past-stories | Jiǎng gùshi — Telling stories | Wǒ xiǎo de shíhou... (我小的时候)/When I was young... · Wǒ yǒngyuǎn bú huì wàngjì... (我永远不会忘记...)/I'll never forget... · Hěn qíguài (很奇怪)/Very strange | "...de shíhou" (when) | Tell a 3-sentence story |
| 8 | m10-l08-hope-future | Wǒ xīwàng — I hope | Wǒ xīwàng... (我希望)/I hope... · Yǒu yì tiān wǒ huì... (有一天我会...)/One day I'll... · Wǒ mèngxiǎng (我梦想)/I dream of | "Xīwàng" + clause | Share a hope |
| 9 | m10-l09-proverbs | Chéngyǔ — Chinese proverbs | "Mǎ dào chénggōng (马到成功)" — May success arrive on horseback (instant success) · "Yī jiàn rúgù (一见如故)" — Old friends at first sight (instant kinship) · "Jiā hé wàn shì xīng (家和万事兴)" — When family is harmonious, all things flourish | Chinese 4-character idioms | Share one chéngyǔ |
| 10 | m10-l10-your-story | Nǐ de Zhōngwén gùshi — Your Chinese story (A2 complete) | (review) | Final integration | Tell a 5-min Chinese story |

---

*End of master scaffold. 400 lessons defined.*

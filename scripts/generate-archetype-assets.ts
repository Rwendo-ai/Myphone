/**
 * Generate the 20 archetype asset packs for Lipsync + Lipsync Plus tiers.
 *
 * For each archetype:
 *   1. Generate portrait via fal.ai Flux 1.1 Pro (3:4 aspect, ~$0.04)
 *   2. Generate 10s idling video via fal.ai Kling 1.6 image-to-video (~$1.85)
 *      Longer duration + tighter motion prompt + AmbientFace crossfade
 *      together give us seamless loops without per-clip post-processing.
 *   3. Upload both to Supabase Storage:
 *        companion-assets/archetypes/<id>/portrait.jpg
 *        companion-assets/archetypes/<id>/idling.mp4
 *   4. Write the public URLs back to public.companion_archetypes
 *
 * Usage:
 *   npx tsx scripts/generate-archetype-assets.ts                  # all 20
 *   npx tsx scripts/generate-archetype-assets.ts --only aiko      # single
 *   npx tsx scripts/generate-archetype-assets.ts --only aiko,sage # subset
 *   npx tsx scripts/generate-archetype-assets.ts --portraits-only # skip video
 *   npx tsx scripts/generate-archetype-assets.ts --dry-run        # no API calls
 *
 * Cost: ~$1 per archetype with portrait + video; ~$0.04 portrait-only.
 * Full 20 = ~$20 of fal.ai credit.
 *
 * Env required: FAL_KEY, SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY (set in
 * .env.local; not committed).
 */
import * as dotenv from 'dotenv';
import { createClient } from '@supabase/supabase-js';
import { fal } from '@fal-ai/client';

dotenv.config({ path: '.env.local' });
dotenv.config();

const FAL_KEY                   = process.env.FAL_KEY;
const SUPABASE_URL              = process.env.SUPABASE_URL;
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!FAL_KEY)                   throw new Error('FAL_KEY not set (put it in .env.local)');
if (!SUPABASE_URL)              throw new Error('SUPABASE_URL not set');
if (!SUPABASE_SERVICE_ROLE_KEY) throw new Error('SUPABASE_SERVICE_ROLE_KEY not set');

fal.config({ credentials: FAL_KEY });
const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);

// ─── The 20 archetypes ────────────────────────────────────────────────────

interface Archetype {
  id: string;
  name: string;
  portraitPrompt: string;
  /** Optional override for the video motion prompt. Defaults to a calm,
   *  mouth-closed idle so Sync Labs can drive the lipsync from there. */
  motionPrompt?: string;
}

// Tighter than v1 — Kling 1.6 drifts even when you ask for "no motion",
// so we explicitly cap *every* axis it tries to animate, request very
// rare blinks (2-3 in a 10s window) instead of the constant blinking it
// defaults to, and tell it to return to the starting pose. The
// AmbientFace component does a final crossfade in playback so loop
// seams are hidden no matter what — but a tighter source means the
// crossfade has less work to do.
const DEFAULT_MOTION =
  'Extremely subtle ambient motion only. Barely perceptible breathing. ' +
  'Very rare blinks — at most one blink every 4-5 seconds, both eyes fully ' +
  'closing and reopening together. NO head movement, NO head tilt, NO yaw, ' +
  'NO shoulder movement. NO smile change. NO expression change at all. ' +
  'Mouth remains firmly closed throughout, lips pressed together, no tongue, ' +
  'no teeth visible at any point. Pose, gaze direction and framing identical ' +
  'from first frame to last — return to the exact same neutral starting pose ' +
  'so the clip loops cleanly. Calm static portrait, cinematic film grain.';

const ARCHETYPES: Archetype[] = [
  // ─── Core 10 ────────────────────────────────────────────────────────────
  {
    id: 'sarah', name: 'Sarah',
    portraitPrompt: 'A professional studio headshot of a friendly 32-year-old Caucasian woman, blonde hair tied back, wearing a smart blazer. Neutral expression, mouth closed, facing camera directly. Soft cinematic lighting, blurred office background, 8k resolution, photorealistic.',
  },
  {
    id: 'marcus', name: 'Marcus',
    portraitPrompt: 'A professional studio headshot of a fit 28-year-old African American man, short buzz cut, wearing a premium athletic shirt. Neutral expression, mouth closed, facing camera directly. High-contrast studio lighting, minimalist gym background, photorealistic.',
  },
  {
    id: 'aiko', name: 'Aiko',
    portraitPrompt: 'A professional studio headshot of a 24-year-old Japanese woman with stylish short hair and modern glasses. Calm closed-mouth expression, lips gently pressed together, no teeth visible, no smile. Body squared to camera, shoulders parallel to the frame, front-facing symmetrical pose. Tack-sharp focus, crisp ultra-detailed portrait, high resolution. Neon-accented soft lighting, high-tech laboratory background, ultra-detailed.',
  },
  {
    id: 'yuki', name: 'Yuki',
    portraitPrompt: 'A professional studio headshot of a wise 65-year-old Japanese man, distinguished grey hair, wearing a traditional linen shirt. Neutral expression, mouth closed, facing camera directly. Warm natural sunlight, blurred garden background, photorealistic.',
  },
  {
    id: 'olu', name: 'Olu',
    portraitPrompt: 'A professional studio headshot of a 45-year-old Nigerian man, bald head, wearing a tailored suit. Neutral expression, mouth closed, lips gently pressed together, no teeth visible. Body squared to camera, shoulders parallel to the frame, front-facing symmetrical pose, facing camera directly. Dramatic rim lighting, dark corporate background, 8k resolution.',
  },
  {
    id: 'lin', name: 'Lin',
    portraitPrompt: 'A professional studio headshot of a 22-year-old Chinese woman, long dark hair with a colourful streak, wearing a creative denim jacket. Calm closed-mouth expression, lips gently pressed together, no teeth visible, no smile, facing camera directly. Soft artistic lighting, blurred art studio background, photorealistic.',
  },
  {
    id: 'carlos', name: 'Carlos',
    portraitPrompt: 'A professional studio headshot of a 30-year-old Hispanic man with a friendly face and light stubble, wearing a casual polo shirt. Neutral expression, mouth closed, facing camera directly. Bright morning light, blurred cafe background, photorealistic.',
  },
  {
    id: 'aisha', name: 'Aisha',
    portraitPrompt: 'A professional studio headshot of a 26-year-old Middle Eastern woman with long dark wavy hair, intelligent dark eyes, wearing a smart casual blouse, no head covering, no religious symbols. Calm closed-mouth expression, lips gently pressed together, no teeth visible, no smile, facing camera directly. Soft library lighting, blurred bookshelf background, ultra-high detail.',
  },
  {
    id: 'erik', name: 'Erik',
    portraitPrompt: 'A professional studio headshot of a 42-year-old Swedish man with blue eyes and a rugged beard, wearing a flannel shirt. Neutral expression, mouth closed, facing camera directly. Overcast natural lighting, blurred mountain background, photorealistic.',
  },
  {
    id: 'priya', name: 'Priya',
    portraitPrompt: 'A professional studio headshot of a 35-year-old Indian woman, elegant features, long dark hair styled loosely, wearing a soft modern cream-coloured blouse and a delicate gold chain. No bindi, no red dot, no forehead markings, no tilaka, no religious symbols, plain bare forehead. Calm closed-mouth expression, lips gently pressed together, no teeth visible, no smile. Body squared to camera, shoulders parallel to the frame, facing camera directly. Soft warm lighting, blurred home interior background, 8k resolution.',
  },

  // ─── Niche 10 ───────────────────────────────────────────────────────────
  {
    id: 'joon', name: 'Joon',
    portraitPrompt: 'A professional studio headshot of a 17-year-old Korean teenage boy, black hair with subtle blue streaks, wearing a black hoodie with subtle gaming logos, premium gaming headset resting around his neck. Neutral expression, mouth closed, facing camera directly. RGB ambient lighting in soft purple and blue, blurred gaming-setup background with monitors and LED-lit shelves, photorealistic, 8k resolution.',
  },
  {
    id: 'margaret', name: 'Margaret',
    portraitPrompt: 'A professional studio headshot of an elegant 72-year-old British woman, silver-white hair in a neat low bun, wearing a tweed blazer and pearl earrings. Neutral expression, mouth closed, facing camera directly. Soft golden window light, blurred study background with leather-bound books and a vintage globe, photorealistic, 8k resolution.',
  },
  {
    id: 'nova', name: 'Nova',
    portraitPrompt: 'A professional studio headshot of an androgynous 27-year-old mixed-race person, sleek platinum undercut hair, subtle iridescent cybernetic skin markings along the jawline and temple, wearing a minimalist black collarless top. Calm closed-mouth expression, lips gently pressed together, no teeth visible, no smile. Body squared to camera, shoulders parallel to the frame, front-facing symmetrical pose, head looking straight at the camera. Cool blue rim lighting, blurred futuristic minimalist interior background, photorealistic, ultra-high detail, 8k.',
  },
  {
    id: 'giulio', name: 'Giulio',
    portraitPrompt: 'A professional studio headshot of a warm 52-year-old Italian man, salt-and-pepper hair and short beard, wearing a crisp white chef\'s jacket buttoned at the top, a clean kitchen towel over one shoulder. Neutral expression, mouth closed, facing camera directly. Warm cinematic kitchen lighting, blurred professional kitchen background with hanging copper pans, photorealistic, 8k.',
  },
  {
    id: 'astra', name: 'Astra',
    portraitPrompt: 'A professional studio headshot of a 26-year-old mixed-race woman of Black and East Asian heritage, long dark wavy hair, vintage-inspired knit sweater. Lips firmly sealed and pressed together, mouth completely closed, no parted lips, no teeth visible, no smile whatsoever, calm serious expression. Body squared to camera, shoulders parallel to the frame, front-facing symmetrical pose, facing camera directly. Warm amber stage-style lighting, blurred recording-studio background with an acoustic guitar visible on a stand, photorealistic, 8k resolution.',
  },
  {
    id: 'hassan', name: 'Hassan',
    portraitPrompt: 'A professional studio headshot of a 48-year-old Egyptian man, neatly trimmed dark beard with a touch of grey, wearing a soft beige cardigan over an open-collar shirt. Calm warm neutral expression, mouth closed, facing camera directly. Soft warm lamp lighting, blurred private office background with a comfortable armchair and a leafy plant, photorealistic, 8k resolution.',
  },
  {
    id: 'bea', name: 'Bea',
    portraitPrompt: 'A professional studio headshot of a 36-year-old Cuban-American woman, dark curly shoulder-length hair, wearing a colourful patterned button-down shirt. Calm closed-mouth expression with bright mischievous eyes, lips gently pressed together, no teeth visible, no smile, facing camera directly. Warm theatrical lighting, blurred small comedy club background with a brick wall and microphone stand, photorealistic, 8k.',
  },
  {
    id: 'eleanor', name: 'Eleanor',
    portraitPrompt: 'A professional studio headshot of a 68-year-old African American woman, short silver natural curls, wearing a warm rust-coloured cashmere sweater and simple gold earrings. Grounded warm neutral expression, mouth closed, facing camera directly. Soft golden-hour window light, blurred home interior background with framed family photos, photorealistic, 8k resolution.',
  },
  {
    id: 'mateo', name: 'Mateo',
    portraitPrompt: 'A professional studio headshot of a 34-year-old Mexican man, tousled dark hair, wire-frame glasses, light stubble, wearing a worn dark canvas work shirt. Curious neutral expression, mouth closed, lips gently pressed together, no teeth visible. Body squared to camera, shoulders parallel to the frame, front-facing symmetrical pose, facing camera directly. Single warm overhead workshop lamp lighting, blurred garage workshop background with tools, soldering iron, and scattered electronics, photorealistic, 8k.',
  },
  {
    id: 'tane', name: 'Tane',
    portraitPrompt: 'A professional studio headshot of a 40-year-old Polynesian man, short dark hair and a friendly weathered face, wearing a crisp commercial pilot\'s uniform with epaulettes and a clean white shirt under a navy jacket. Neutral expression, mouth closed, lips gently pressed together, no teeth visible. Body squared to camera, shoulders parallel to the frame, front-facing symmetrical pose, facing camera directly. Soft cinematic lighting, blurred airport terminal background with a glimpse of an aircraft through the window, photorealistic, 8k resolution.',
  },

  // ─── Non-human 10 ───────────────────────────────────────────────────────
  // Stylised animal / fantasy companions. Same square-on framing rules as
  // the human archetypes so Simli's Trinity model can still drive lipsync
  // from the mouth area. Mouth closed for the portrait; idling video does
  // the breathing + blinking.
  {
    id: 'rex', name: 'Rex',
    portraitPrompt: 'A charming front-facing portrait of a golden retriever dog, head facing the camera squarely, ears alert, kind warm brown eyes looking directly at viewer, mouth closed in a calm gentle expression, no panting, no tongue visible, no teeth visible, fluffy golden fur softly lit. Head and upper chest framed in the centre. Soft natural daylight, blurred sunny park background with green grass and tree shapes, photorealistic, 8k resolution, cinematic depth of field.',
    motionPrompt: 'subtle natural breathing through the nose, soft natural blinking, ears occasionally twitching, no head movement, no expression change, mouth remains closed and calm, no panting, no tongue, calm static portrait, cinematic film grain',
  },
  {
    id: 'luna_dog', name: 'Luna',
    portraitPrompt: 'A charming front-facing portrait of a small white Maltese-poodle mix dog, fluffy curly white fur, sparkling dark eyes looking directly at the camera, head squared to the camera, mouth firmly closed, no tongue visible, no teeth visible, soft adorable expression. Head and upper shoulders centred in frame. Soft warm window light, blurred cozy living-room background with a soft cream-coloured blanket, photorealistic, 8k resolution.',
    motionPrompt: 'subtle natural breathing, soft natural blinking, occasional gentle ear flick, no head movement, mouth remains closed, no panting, no tongue, calm static portrait, cinematic film grain',
  },
  {
    id: 'kermit', name: 'Kermit',
    portraitPrompt: 'A whimsical front-facing portrait of a friendly cartoon-style green tree frog, large round expressive amber eyes with vertical pupils, wide bright-green smooth skin, head squared to the camera, mouth firmly closed in a calm thoughtful expression, no tongue visible, no teeth visible. Head and shoulders framed in centre. Soft tropical lighting, blurred lush rainforest background with green leaves and dappled sun, ultra-high detail, 8k resolution, stylised but realistic.',
    motionPrompt: 'subtle natural breathing visible in the throat, slow natural blinking with both eyes, no head movement, mouth remains firmly closed and calm, no tongue, no swallowing, calm static portrait, cinematic film grain',
  },
  {
    id: 'whiskers', name: 'Whiskers',
    portraitPrompt: 'A charming front-facing portrait of a tabby cat with grey-and-black striped fur and bright green eyes looking directly at the viewer, head squared to the camera, ears alert, mouth firmly closed in a calm dignified expression, no teeth visible, whiskers softly visible. Head and upper chest centred in frame. Soft window light, blurred cozy bookshelf background with warm paper tones, photorealistic, 8k resolution.',
    motionPrompt: 'subtle natural breathing, slow languid blinking, occasional whisker twitch, no head movement, no expression change, mouth remains firmly closed, calm regal static portrait, cinematic film grain',
  },
  {
    id: 'mochi', name: 'Mochi',
    portraitPrompt: 'A charming front-facing portrait of a fluffy white Persian cat with round bright blue eyes, head squared to the camera, ears soft and alert, mouth firmly closed in a calm sweet expression, no teeth visible, dense long white fur softly lit. Head and shoulders centred in frame. Soft pink-tinted lighting, blurred soft pastel bedroom background with a velvet cushion, photorealistic, 8k resolution.',
    motionPrompt: 'subtle natural breathing, soft slow blinking, occasional whisker twitch, no head movement, mouth remains firmly closed, calm gentle static portrait, cinematic film grain',
  },
  {
    id: 'coco_koala', name: 'Coco',
    portraitPrompt: 'A charming front-facing portrait of a friendly young koala, soft grey-and-cream fur, round fluffy ears, large dark expressive eyes looking directly at the viewer, head squared to the camera, prominent black nose, mouth firmly closed in a calm gentle expression, no teeth visible, no leaves in mouth. Head and upper chest centred in frame. Soft eucalyptus-canopy lighting, blurred Australian bushland background with greyish-green leaves, photorealistic, 8k resolution.',
    motionPrompt: 'subtle natural breathing, slow gentle blinking with both eyes, ears occasionally twitching softly, no head movement, mouth remains firmly closed and calm, calm static portrait, cinematic film grain',
  },
  {
    id: 'storm', name: 'Storm',
    portraitPrompt: 'A noble front-facing portrait of a black Friesian horse, glossy long flowing mane, deep dark intelligent eyes looking directly at the viewer, head squared to the camera, alert ears forward, mouth firmly closed and calm, no teeth visible, no lip movement, no nostril flare. Head and upper neck centred in frame. Soft golden-hour light, blurred meadow background with rolling green hills, photorealistic, 8k resolution, cinematic.',
    motionPrompt: 'subtle natural breathing through the nostrils, slow gentle blinking, occasional ear flick, mane softly stirring, no head movement, mouth remains firmly closed, calm noble static portrait, cinematic film grain',
  },
  {
    id: 'barnaby', name: 'Barnaby',
    portraitPrompt: 'A charming front-facing portrait of a classic vintage-style teddy bear, soft caramel-coloured plush fur with slightly worn texture from love, kind black button eyes, small stitched smile-like seam that stays gently closed and neutral (no open mouth, no teeth), tiny red velvet bow at the neck. Head and shoulders centred in frame, soft warm nursery lighting, blurred shelf background with story books and a small lamp, photorealistic plush textile rendering, 8k resolution, cinematic.',
    motionPrompt: 'subtle gentle breathing motion as if alive, soft natural blinking of the button eyes (very slight glint), no head movement, no expression change, mouth/seam remains firmly closed and calm, plush fur softly catching the light, calm static portrait, cinematic film grain',
  },
  {
    id: 'blossom', name: 'Blossom',
    portraitPrompt: 'A whimsical front-facing portrait of an anthropomorphic sunflower companion: a large round sunflower head with bright golden petals and a dark seed-textured centre, with two large warm friendly eyes and a tiny calm closed mouth (no teeth, no tongue) gently visible on the seed centre, on a soft green stem with two leaves curving like shoulders. Head squared to the camera, framed in the centre. Soft sunny meadow lighting, blurred wildflower-field background, photorealistic-stylised, 8k resolution.',
    motionPrompt: 'petals gently swaying as if in a soft breeze, slow gentle blinking of the friendly eyes, no head movement, mouth on the seed centre remains firmly closed and calm, calm static portrait, cinematic film grain',
  },
  {
    id: 'zorp', name: 'Zorp',
    portraitPrompt: 'A whimsical front-facing portrait of a friendly cartoon-style alien companion: pale soft-mint smooth skin, large luminous black-and-violet almond eyes looking directly at the viewer with a curious kind expression, small antennae with soft glowing tips, head squared to the camera, mouth firmly closed in a calm small neutral line (no teeth, no tongue, no parted lips), wearing a sleek matte-black collarless tunic. Head and upper shoulders centred in frame. Cool soft violet rim lighting, blurred minimalist spaceship interior background, ultra-high detail, 8k, stylised but realistic.',
    motionPrompt: 'subtle natural breathing, slow gentle blinking of both eyes, antennae tips softly pulsing with a faint glow, no head movement, mouth remains firmly closed and calm, calm static portrait, cinematic film grain',
  },
];

// ─── CLI args ──────────────────────────────────────────────────────────────

interface Args {
  only?: string[];
  portraitsOnly: boolean;
  videosOnly: boolean;
  dryRun: boolean;
  bucket: string;
}

function parseArgs(): Args {
  const args = process.argv.slice(2);
  const out: Args = { portraitsOnly: false, videosOnly: false, dryRun: false, bucket: 'companion-assets' };
  for (let i = 0; i < args.length; i++) {
    const a = args[i];
    if (a === '--only')          out.only          = args[++i].split(',').map((s) => s.trim());
    else if (a === '--portraits-only') out.portraitsOnly = true;
    else if (a === '--videos-only')    out.videosOnly    = true;
    else if (a === '--dry-run')  out.dryRun        = true;
  }
  if (out.portraitsOnly && out.videosOnly) {
    throw new Error('--portraits-only and --videos-only are mutually exclusive');
  }
  return out;
}

// ─── Helpers ───────────────────────────────────────────────────────────────

async function downloadToBuffer(url: string): Promise<Buffer> {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`download ${url} failed: ${res.status}`);
  const ab = await res.arrayBuffer();
  return Buffer.from(ab);
}

async function uploadToStorage(
  bucket: string,
  storagePath: string,
  buffer: Buffer,
  contentType: string,
): Promise<string> {
  const { error } = await supabase.storage
    .from(bucket)
    .upload(storagePath, buffer, { contentType, upsert: true });
  if (error) throw new Error(`upload ${storagePath}: ${error.message}`);
  const { data } = supabase.storage.from(bucket).getPublicUrl(storagePath);
  return data.publicUrl;
}

// ─── Asset generation per archetype ────────────────────────────────────────

async function generatePortrait(arch: Archetype, args: Args): Promise<string> {
  if (args.dryRun) {
    console.log(`  [dry-run] would call fal-ai/flux-pro/v1.1 with prompt for ${arch.name}`);
    return 'https://example.com/dry-run-portrait.jpg';
  }
  // Flux 1.1 Pro on fal.ai. 3:4 portrait via the named image_size preset.
  const result = await fal.subscribe('fal-ai/flux-pro/v1.1', {
    input: {
      prompt:                arch.portraitPrompt,
      image_size:            'portrait_4_3',
      num_images:            1,
      safety_tolerance:      '2',
      output_format:         'jpeg',
    },
    logs: false,
  });
  // deno-lint-ignore no-explicit-any
  const img = (result.data as any).images?.[0];
  if (!img?.url) throw new Error(`fal portrait response missing image url: ${JSON.stringify(result.data)}`);
  return img.url as string;
}

async function generateIdlingVideo(arch: Archetype, imageUrl: string, args: Args): Promise<string> {
  if (args.dryRun) {
    console.log(`  [dry-run] would call fal-ai/kling-video/v1.6/standard/image-to-video for ${arch.name}`);
    return 'https://example.com/dry-run-idling.mp4';
  }
  // Kling 1.6 Standard image-to-video on fal.ai. Aspect inherits from the
  // source image. We use 10s duration (the longer of Kling's two options)
  // because a longer loop is less visually obvious — the crossfade in
  // AmbientFace then hides whatever drift remains. The added cost over
  // 5s is small (~$0.40 vs $0.95) for a noticeable quality win.
  const result = await fal.subscribe('fal-ai/kling-video/v1.6/standard/image-to-video', {
    input: {
      image_url: imageUrl,
      prompt:    arch.motionPrompt ?? DEFAULT_MOTION,
      duration:  '10',
      // Negative prompt — kept here as a fal-supported field. Kling
      // listens to negative prompts and they materially reduce drift.
      negative_prompt:
        'head movement, head tilt, head turn, smiling, teeth, open mouth, ' +
        'tongue, talking, speaking, lip movement, mouth opening, eyebrow ' +
        'raise, eye widening, looking around, dramatic motion, exaggerated ' +
        'expression, camera movement, zoom, pan',
    },
    logs: false,
  });
  // deno-lint-ignore no-explicit-any
  const vid = (result.data as any).video;
  if (!vid?.url) throw new Error(`fal video response missing video url: ${JSON.stringify(result.data)}`);
  return vid.url as string;
}

async function processArchetype(arch: Archetype, args: Args) {
  const ts = new Date().toISOString().substring(11, 19);
  console.log(`\n[${ts}] ▶ ${arch.id} (${arch.name})`);

  // 1. Portrait — generate fresh, OR reuse existing from DB if videos-only
  let portraitUrl: string;          // URL fed into Kling (fal.media or supabase)
  let storedPortraitUrl: string | null = null;

  if (args.videosOnly) {
    // Reuse existing portrait stored in Supabase Storage
    const { data, error } = await supabase
      .from('companion_archetypes')
      .select('image_url')
      .eq('id', arch.id)
      .single();
    if (error || !data?.image_url) throw new Error(`no existing portrait for ${arch.id} — generate it first`);
    portraitUrl = data.image_url as string;
    console.log(`  reusing existing portrait: ${portraitUrl.substring(0, 80)}…`);
  } else {
    console.log(`  generating portrait via fal.ai/flux-pro/v1.1…`);
    portraitUrl = await generatePortrait(arch, args);
    console.log(`  portrait generated: ${portraitUrl.substring(0, 80)}…`);

    if (!args.dryRun) {
      const buf = await downloadToBuffer(portraitUrl);
      storedPortraitUrl = await uploadToStorage(
        args.bucket,
        `archetypes/${arch.id}/portrait.jpg`,
        buf,
        'image/jpeg',
      );
      console.log(`  portrait uploaded → ${storedPortraitUrl}`);
    }
  }

  // 2. Idling video (optional)
  let storedVideoUrl: string | null = null;
  if (!args.portraitsOnly) {
    console.log(`  generating 10s idling video via Kling 1.6 (will take ~60-120s)…`);
    const videoUrl = await generateIdlingVideo(arch, portraitUrl, args);
    console.log(`  video generated: ${videoUrl.substring(0, 80)}…`);

    if (!args.dryRun) {
      const buf = await downloadToBuffer(videoUrl);
      storedVideoUrl = await uploadToStorage(
        args.bucket,
        `archetypes/${arch.id}/idling.mp4`,
        buf,
        'video/mp4',
      );
      console.log(`  video uploaded → ${storedVideoUrl}`);
    }
  }

  // 3. DB write
  if (!args.dryRun) {
    const patch: Record<string, unknown> = { updated_at: new Date().toISOString() };
    if (storedPortraitUrl) {
      patch.image_url     = storedPortraitUrl;
      patch.thumbnail_url = storedPortraitUrl; // use same for thumbnail in v1
    }
    if (storedVideoUrl) patch.idling_video_url = storedVideoUrl;
    const { error } = await supabase
      .from('companion_archetypes')
      .update(patch)
      .eq('id', arch.id);
    if (error) throw new Error(`db update ${arch.id}: ${error.message}`);
    console.log(`  db updated ✓`);
  }

  console.log(`  ✓ ${arch.id} done`);
}

// ─── Main ──────────────────────────────────────────────────────────────────

(async () => {
  const args = parseArgs();
  const targets = args.only
    ? ARCHETYPES.filter((a) => args.only!.includes(a.id))
    : ARCHETYPES;

  if (targets.length === 0) {
    console.error(`No archetypes match --only filter.`);
    process.exit(1);
  }

  console.log(`Generating ${targets.length} archetype(s):`);
  console.log(`  ${targets.map((a) => a.id).join(', ')}`);
  console.log(`  mode: ${args.dryRun ? 'DRY RUN' : 'LIVE'}`);
  console.log(`  scope: ${args.portraitsOnly ? 'portraits only' : 'portraits + videos'}`);
  const perAsset = args.portraitsOnly ? 0.04 : args.videosOnly ? 0.95 : 1.0;
  const estCost  = targets.length * perAsset;
  if (!args.dryRun) {
    console.log(`  estimated cost: ~$${estCost.toFixed(2)} of fal.ai credit`);
  }
  console.log('');

  let successCount = 0;
  let failedIds: string[] = [];

  for (const arch of targets) {
    try {
      await processArchetype(arch, args);
      successCount++;
    } catch (e: any) {
      console.error(`  ✗ ${arch.id} failed: ${e?.message ?? String(e)}`);
      failedIds.push(arch.id);
    }
  }

  console.log(`\n────────────────────────────`);
  console.log(`Done. ${successCount}/${targets.length} succeeded.`);
  if (failedIds.length > 0) {
    console.log(`Failed: ${failedIds.join(', ')}`);
    console.log(`Retry with: --only ${failedIds.join(',')}`);
    process.exit(1);
  }
})();

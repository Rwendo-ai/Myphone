/**
 * VOICE LIBRARY — single source of truth for ElevenLabs stock voices.
 *
 * Today (pre-this-file) the app has two parallel voice lists:
 *   - RWEN_VOICES in lib/SettingsContext.tsx (the 4 voices the TTS picker uses)
 *   - STOCK_VOICES in lib/custom-companions.ts (the 12 voices the build wizard uses)
 *
 * Going forward, all new pickers should import VOICE_LIBRARY from here.
 * The legacy constants are kept in place to avoid breaking existing callers
 * during the transition — they should eventually be replaced by selections
 * from this library.
 *
 * Every entry is a real public ElevenLabs voice (verified IDs from the
 * default voice library). The `previewUrl` field is intentionally optional
 * — when ElevenLabs preview URLs are wired through, populate them here;
 * for now the live `speakText` helper can generate a short sample on demand.
 *
 * No package install required. This file is pure data + small helpers.
 */

export interface VoiceOption {
  /** ElevenLabs voice_id — pass directly to ElevenLabs TTS / Conv AI agent overrides. */
  id: string;
  /** Display label, e.g. "George — warm storyteller". */
  name: string;
  /** Coarse gender bucket for filtering ("neutral" reserved for androgynous voices). */
  gender: 'male' | 'female' | 'neutral';
  /** 1-3 word vibe descriptor used in the picker. */
  vibe: string;
  /** Apparent age band — most of the catalogue is "adult". */
  ageBand: 'young' | 'adult' | 'mature';
  /** True if the voice works well with eleven_multilingual_v2 (most do). */
  isMultilingual: boolean;
  /** Optional ElevenLabs preview clip URL — populate when wired. */
  previewUrl?: string;
}

/**
 * The library. 30+ voices spanning gender + age + vibe so the picker has
 * enough variety for the customization sheet.
 *
 * NOTE: any ID in `defaultVoiceId` on a preset in data/companions/presets.ts
 * should be present here too — the preset's voice should be visible as an
 * option in the picker.
 */
export const VOICE_LIBRARY: VoiceOption[] = [
  // ── Male ────────────────────────────────────────────────────────────────
  { id: 'JBFqnCBsd6RMkjVDRZzb', name: 'George — warm storyteller',     gender: 'male',   vibe: 'warm storyteller',     ageBand: 'adult',   isMultilingual: true  },
  { id: 'IKne3meq5aSn9XLyUdCD', name: 'Charlie — energetic, confident', gender: 'male',   vibe: 'energetic confident',  ageBand: 'young',   isMultilingual: true  },
  { id: 'TX3LPaxmHKxFdv7VOQHJ', name: 'Liam — articulate, young',      gender: 'male',   vibe: 'articulate young',     ageBand: 'young',   isMultilingual: true  },
  { id: 'nPczCjzI2devNBz1zQrb', name: 'Brian — deep, narrator',        gender: 'male',   vibe: 'deep narrator',        ageBand: 'adult',   isMultilingual: true  },
  { id: 'pqHfZKP75CvOlQylNhV4', name: 'Bill — friendly, grandfatherly', gender: 'male',   vibe: 'friendly grandfatherly', ageBand: 'mature', isMultilingual: true  },
  { id: 'cjVigY5qzO86Huf0OWal', name: 'Eric — friendly, conversational', gender: 'male', vibe: 'friendly conversational', ageBand: 'adult', isMultilingual: true  },
  { id: 'CwhRBWXzGAHq8TQ4Fs17', name: 'Roger — clear, confident',      gender: 'male',   vibe: 'clear confident',      ageBand: 'adult',   isMultilingual: true  },
  { id: 'iP95p4xoKVk53GoZ742B', name: 'Chris — natural, casual',       gender: 'male',   vibe: 'natural casual',       ageBand: 'adult',   isMultilingual: true  },
  { id: 'onwK4e9ZLuTAKqWW03F9', name: 'Daniel — authoritative news',   gender: 'male',   vibe: 'authoritative news',   ageBand: 'adult',   isMultilingual: true  },
  { id: '29vD33N1CtxCmqQRPOHJ', name: 'Drew — well-rounded, mellow',   gender: 'male',   vibe: 'mellow well-rounded',  ageBand: 'adult',   isMultilingual: true  },
  { id: 'ErXwobaYiN019PkySvjV', name: 'Antoni — well-rounded young',   gender: 'male',   vibe: 'well-rounded young',   ageBand: 'young',   isMultilingual: true  },
  { id: 'VR6AtKlNQGY9gqf1xX5Y', name: 'Arnold — crisp, authoritative', gender: 'male',   vibe: 'crisp authoritative',  ageBand: 'adult',   isMultilingual: true  },
  { id: 'pNInz6obpgDQGcFmaJgB', name: 'Adam — deep, narrator',         gender: 'male',   vibe: 'deep narrator',        ageBand: 'adult',   isMultilingual: true  },
  { id: 'TxGEqnHWrfWFTfGW9XjX', name: 'Josh — warm, casual',           gender: 'male',   vibe: 'warm casual',          ageBand: 'young',   isMultilingual: true  },
  { id: 'yoZ06aMxZJJ28mfd3POQ', name: 'Sam — laid back, raspy',        gender: 'male',   vibe: 'laid back raspy',      ageBand: 'young',   isMultilingual: true  },
  { id: 'bIHbv24MWmeRgasZH58o', name: 'Will — friendly, upbeat',       gender: 'male',   vibe: 'friendly upbeat',      ageBand: 'young',   isMultilingual: true  },

  // ── Female ──────────────────────────────────────────────────────────────
  { id: 'cgSgspJ2msm6clMCkdW9', name: 'Jessica — playful, bright',     gender: 'female', vibe: 'playful bright',       ageBand: 'young',   isMultilingual: true  },
  { id: 'Xb7hH8MSUJpSbSDYk0k2', name: 'Alice — clear, engaging',       gender: 'female', vibe: 'clear engaging',       ageBand: 'adult',   isMultilingual: true  },
  { id: 'EXAVITQu4vr4xnSDxMaL', name: 'Sarah — gentle, thoughtful',    gender: 'female', vibe: 'gentle thoughtful',    ageBand: 'adult',   isMultilingual: true  },
  { id: 'oWAxZDx7w5VEj9dCyTzz', name: 'Grace — bright, professional', gender: 'female', vibe: 'bright professional',  ageBand: 'adult',   isMultilingual: true  },
  { id: 'XB0fDUnXU5powFXDhCwa', name: 'Charlotte — soft, attentive',   gender: 'female', vibe: 'soft attentive',       ageBand: 'young',   isMultilingual: true  },
  { id: '9BWtsMINqrJLrRacOk9x', name: 'Aria — expressive, social',     gender: 'female', vibe: 'expressive social',    ageBand: 'adult',   isMultilingual: true  },
  { id: 'FGY2WhTYpPnrIDTdsKH5', name: 'Laura — sunny, articulate',     gender: 'female', vibe: 'sunny articulate',     ageBand: 'young',   isMultilingual: true  },
  { id: 'XrExE9yKIg1WjnnlVkGX', name: 'Matilda — friendly, warm',      gender: 'female', vibe: 'friendly warm',        ageBand: 'adult',   isMultilingual: true  },
  { id: 'pjcYQlDFKMbcOUp6F5GD', name: 'Lily — soft, English',          gender: 'female', vibe: 'soft English',         ageBand: 'adult',   isMultilingual: true  },
  { id: '21m00Tcm4TlvDq8ikWAM', name: 'Rachel — calm, narrator',       gender: 'female', vibe: 'calm narrator',        ageBand: 'adult',   isMultilingual: true  },
  { id: 'AZnzlk1XvdvUeBnXmlld', name: 'Domi — strong, confident',      gender: 'female', vibe: 'strong confident',     ageBand: 'young',   isMultilingual: true  },
  { id: 'MF3mGyEYCl7XYWbV9V6O', name: 'Elli — emotional, expressive',  gender: 'female', vibe: 'emotional expressive', ageBand: 'young',   isMultilingual: true  },

  // ── Neutral / others ────────────────────────────────────────────────────
  { id: 'SAz9YHcvj6GT2YYXdXww', name: 'River — calm, neutral',         gender: 'neutral', vibe: 'calm neutral',        ageBand: 'adult',   isMultilingual: true  },
];

// ─── Helpers ────────────────────────────────────────────────────────────────

/** Find a voice by id. Falls back to the first library entry (George) if
 *  the id is unknown — never returns undefined so callers can blindly read
 *  `.name` etc. */
export function getVoice(id: string | null | undefined): VoiceOption {
  if (id) {
    const hit = VOICE_LIBRARY.find((v) => v.id === id);
    if (hit) return hit;
  }
  return VOICE_LIBRARY[0];
}

/** Filter by gender — used by the customization sheet's tab filter. */
export function getVoicesByGender(gender: VoiceOption['gender']): VoiceOption[] {
  return VOICE_LIBRARY.filter((v) => v.gender === gender);
}

/** Filter by age band — handy for matching a voice to an archetype's apparent age. */
export function getVoicesByAgeBand(ageBand: VoiceOption['ageBand']): VoiceOption[] {
  return VOICE_LIBRARY.filter((v) => v.ageBand === ageBand);
}

/** Default fallback when nothing's selected anywhere — George, warm storyteller. */
export const DEFAULT_VOICE_ID = 'JBFqnCBsd6RMkjVDRZzb';

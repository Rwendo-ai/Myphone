/**
 * Cultural Guide content types.
 *
 * Each country has a single CulturalGuide object with an intro + sections.
 * Sections render as collapsible accordion rows in the UI. Body strings are
 * plain prose; we don't ship markdown rendering yet — keep it readable.
 */

export interface CulturalGuideSection {
  id: string;
  title: string;
  emoji: string;
  body: string;
}

export interface CulturalGuide {
  countryCode: string;
  countryName: string;
  /** One-paragraph framing — what makes this country worth understanding. */
  intro: string;
  sections: CulturalGuideSection[];
}

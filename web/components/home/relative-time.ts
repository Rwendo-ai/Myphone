// Tiny relative-time helper. No deps — uses Intl.RelativeTimeFormat.
// "5m ago" / "3h ago" / "2d ago" style; falls back to a locale date for
// anything older than 14 days.

const RTF = new Intl.RelativeTimeFormat('en', { numeric: 'auto' });

const MIN = 60;
const HOUR = 60 * MIN;
const DAY = 24 * HOUR;
const WEEK = 7 * DAY;

export function relativeTime(isoOrDate: string | Date, now: Date = new Date()): string {
  const then = typeof isoOrDate === 'string' ? new Date(isoOrDate) : isoOrDate;
  const diffSec = Math.round((then.getTime() - now.getTime()) / 1000);
  const abs = Math.abs(diffSec);

  if (abs < 45)     return RTF.format(Math.round(diffSec), 'second');
  if (abs < HOUR)   return RTF.format(Math.round(diffSec / MIN), 'minute');
  if (abs < DAY)    return RTF.format(Math.round(diffSec / HOUR), 'hour');
  if (abs < WEEK * 2) return RTF.format(Math.round(diffSec / DAY), 'day');

  return then.toLocaleDateString(undefined, { month: 'short', day: 'numeric' });
}

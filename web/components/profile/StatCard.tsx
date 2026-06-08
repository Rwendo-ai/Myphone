import Link from 'next/link';

// Stat card for the profile header row. Optional link makes the card
// tappable — used for "Top up" on the Tokens card.
export default function StatCard({
  label,
  value,
  hint,
  href,
  hrefLabel,
}: {
  label: string;
  value: string;
  hint?: string;
  href?: string;
  hrefLabel?: string;
}) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
      <div className="text-white/60 text-sm">{label}</div>
      <div className="text-3xl font-bold mt-1">{value}</div>
      {href && hrefLabel ? (
        <Link href={href} className="text-secondary text-sm hover:underline mt-2 inline-block">
          {hrefLabel} →
        </Link>
      ) : hint ? (
        <div className="text-white/40 text-xs mt-2">{hint}</div>
      ) : null}
    </div>
  );
}

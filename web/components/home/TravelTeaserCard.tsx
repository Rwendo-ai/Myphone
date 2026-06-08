import Link from 'next/link';

export default function TravelTeaserCard({
  currentCity,
  currentCountryCode,
}: {
  currentCity: string | null;
  currentCountryCode: string | null;
}) {
  const here = currentCity ?? currentCountryCode ?? null;

  return (
    <Link
      href="/travel"
      className="block bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/10 transition"
    >
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-[11px] uppercase tracking-wider text-secondary font-semibold">
            Travel
          </p>
          <h2 className="text-xl font-bold mt-1">
            {here ? `Travellers near ${here}` : 'Meet travellers'}
          </h2>
          <p className="text-sm text-white/60 mt-1">
            See who&apos;s heading where, share where you&apos;re going.
          </p>
        </div>
        <span className="text-3xl shrink-0" aria-hidden>✈️</span>
      </div>
    </Link>
  );
}

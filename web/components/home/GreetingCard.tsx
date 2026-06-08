import TokenBar from '@/components/TokenBar';

function timeOfDayGreeting(): string {
  const hour = new Date().getHours();
  if (hour < 12) return 'Good morning';
  if (hour < 17) return 'Good afternoon';
  return 'Good evening';
}

export default function GreetingCard({
  displayName,
  xp,
  credits,
}: {
  displayName: string;
  xp: number;
  credits: number;
}) {
  return (
    <section className="bg-white/5 border border-white/10 rounded-2xl p-5">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm text-white/60">{timeOfDayGreeting()}</p>
          <h1 className="text-3xl font-extrabold mt-0.5">{displayName}</h1>
          <div className="mt-3 inline-flex items-center gap-2 text-sm">
            <span className="text-secondary font-bold">{xp.toLocaleString()} XP</span>
          </div>
        </div>
        <TokenBar balance={credits} />
      </div>
    </section>
  );
}

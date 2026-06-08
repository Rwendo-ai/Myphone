import Link from 'next/link';

export default function ContinueLearningCard({ packLabel }: { packLabel: string }) {
  return (
    <Link
      href="/learn"
      className="block bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/10 transition"
    >
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-[11px] uppercase tracking-wider text-secondary font-semibold">
            Continue learning
          </p>
          <h2 className="text-xl font-bold mt-1">{packLabel}</h2>
          <p className="text-sm text-white/60 mt-1">Pick up where you left off</p>
        </div>
        <div className="w-10 h-10 rounded-full bg-secondary text-primary flex items-center justify-center font-bold text-lg shrink-0">
          →
        </div>
      </div>
    </Link>
  );
}

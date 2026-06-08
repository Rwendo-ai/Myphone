export default function StreakCard({
  lessonsToday,
  xpToday,
}: {
  lessonsToday: number;
  xpToday: number;
}) {
  return (
    <section className="bg-white/5 border border-white/10 rounded-2xl p-5">
      <h2 className="text-lg font-bold mb-3">Today&apos;s streak</h2>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <div className="text-3xl font-extrabold">
            {lessonsToday}
            <span className="text-white/40 text-base font-medium ml-1">
              {lessonsToday === 1 ? 'lesson' : 'lessons'}
            </span>
          </div>
          <p className="text-xs text-white/50 mt-1 uppercase tracking-wider">completed</p>
        </div>
        <div>
          <div className="text-3xl font-extrabold text-secondary">
            +{xpToday.toLocaleString()}
            <span className="text-white/40 text-base font-medium ml-1">xp</span>
          </div>
          <p className="text-xs text-white/50 mt-1 uppercase tracking-wider">earned today</p>
        </div>
      </div>
    </section>
  );
}

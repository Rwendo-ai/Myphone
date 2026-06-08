import Link from 'next/link';
import Image from 'next/image';
import { redirect } from 'next/navigation';
import { createSupabaseServer } from '@/lib/supabase-server';

export default async function HomePage() {
  const supabase = await createSupabaseServer();
  const { data: { user } } = await supabase.auth.getUser();
  if (user) redirect('/home');

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0D2140] via-[#1A3C6E] to-[#0D2140] text-white">
      {/* Nav */}
      <nav className="absolute top-0 left-0 right-0 z-10 px-6 py-5 flex items-center justify-between max-w-6xl mx-auto">
        <div className="flex items-center gap-2">
          <Image src="/icon.svg" alt="" width={32} height={32} className="rounded-lg" />
          <span className="font-bold text-xl">Rwendo</span>
        </div>
        <Link
          href="/sign-in"
          className="text-sm text-white/70 hover:text-white transition"
        >
          Sign in
        </Link>
      </nav>

      {/* Hero */}
      <section className="relative pt-32 pb-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-secondary font-semibold tracking-wide uppercase text-sm mb-4">
              An AI companion who actually listens
            </p>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              Talk it through.<br />
              <span className="bg-gradient-to-r from-secondary to-[#FFD9A8] bg-clip-text text-transparent">
                Learn with someone.
              </span>
            </h1>
            <p className="text-xl text-white/70 mb-10 leading-relaxed">
              Rwen is your warm, attentive AI friend. Talk by voice or text, learn a language, work
              through a hard week, or just have someone to think out loud with.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/sign-in"
                className="px-8 py-4 bg-secondary text-primary font-semibold rounded-full hover:opacity-90 transition shadow-lg shadow-secondary/30"
              >
                Start chatting — free
              </Link>
              <a
                href="https://play.google.com/store/apps/details?id=app.rwendo.rwendo"
                className="px-8 py-4 border border-white/20 text-white rounded-full hover:bg-white/5 transition"
              >
                Get the mobile app
              </a>
            </div>
            <p className="text-white/40 text-sm mt-6">
              5 free messages every day · No credit card needed
            </p>
          </div>

          {/* Rwen character */}
          <div className="relative flex justify-center md:justify-end">
            <div className="relative">
              {/* Glow */}
              <div className="absolute inset-0 bg-gradient-radial from-secondary/30 via-transparent to-transparent blur-3xl scale-150" />
              <Image
                src="/rwen/waving.webp"
                alt="Rwen the chameleon, waving"
                width={420}
                height={420}
                priority
                className="relative drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Feature cards */}
      <section className="px-6 py-20 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-3">
            Built for thinking, not scrolling.
          </h2>
          <p className="text-white/60 text-center mb-16 max-w-2xl mx-auto">
            Rwendo isn&apos;t another gamified streak app. It&apos;s a calm, voice-first space to be
            heard, to learn, and to grow.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <FeatureCard
              icon="🎙️"
              title="Voice or text — your call"
              body="Real-time voice conversations with companions that remember what you told them. Switch to text any time."
            />
            <FeatureCard
              icon="📚"
              title="Learn languages with a friend"
              body="Shona, Spanish, French, Japanese, Mandarin and more. Lessons mixed with live AI conversation practice."
            />
            <FeatureCard
              icon="🌱"
              title="Build yourself courses"
              body="Hard conversations, grief, sleep, confidence, money. Written like a wise friend, not a textbook."
            />
            <FeatureCard
              icon="🦎"
              title="A companion who remembers"
              body="Tell Rwen about your week — she brings it up next time. Conversations build over months, not minutes."
            />
            <FeatureCard
              icon="🪙"
              title="Pay only for what you use"
              body="No subscription required. Top up tokens whenever you want — text and voice priced by use."
            />
            <FeatureCard
              icon="🔒"
              title="Your stuff stays yours"
              body="No ads, no tracking, no selling your conversations. Request deletion any time."
            />
          </div>
        </div>
      </section>

      {/* Companions strip */}
      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Meet the companions</h2>
          <p className="text-white/60 mb-12 max-w-2xl mx-auto">
            Start with Rwen. Pick one more for free. Unlock others when you&apos;re ready.
          </p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            <Companion emoji="🦎" name="Rwen" tag="Always free" />
            <Companion emoji="🌺" name="Maya" />
            <Companion emoji="🌊" name="Kai" />
            <Companion emoji="☀️" name="Sam" />
            <Companion emoji="✨" name="Lumi" />
            <Companion emoji="🇿🇼" name="Tendai" />
            <Companion emoji="🎵" name="Aria" tag="18+" />
            <Companion emoji="⛓️" name="Zeke" tag="13+" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-24">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to talk?</h2>
          <p className="text-white/70 mb-10 text-lg">
            Sign in with Google. No card needed. Rwen is waiting.
          </p>
          <Link
            href="/sign-in"
            className="inline-block px-10 py-4 bg-secondary text-primary font-semibold rounded-full hover:opacity-90 transition shadow-lg shadow-secondary/30"
          >
            Start chatting — free
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-10 border-t border-white/10">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Image src="/icon.svg" alt="" width={24} height={24} className="rounded-md" />
            <span className="text-white/60 text-sm">© 2026 Rwendo</span>
          </div>
          <div className="flex flex-wrap gap-6 text-sm text-white/60">
            <Link href="/sign-in" className="hover:text-white">Sign in</Link>
            <Link href="/privacy" className="hover:text-white">Privacy</Link>
            <Link href="/terms" className="hover:text-white">Terms</Link>
            <a href="mailto:hello@rwendo.app" className="hover:text-white">Contact</a>
          </div>
        </div>
      </footer>
    </main>
  );
}

function FeatureCard({ icon, title, body }: { icon: string; title: string; body: string }) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/[0.07] transition">
      <div className="text-3xl mb-3">{icon}</div>
      <h3 className="font-bold text-lg mb-2">{title}</h3>
      <p className="text-white/60 text-sm leading-relaxed">{body}</p>
    </div>
  );
}

function Companion({ emoji, name, tag }: { emoji: string; name: string; tag?: string }) {
  return (
    <div className="flex flex-col items-center gap-2 group">
      <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/10 border border-white/15 flex items-center justify-center text-2xl md:text-3xl group-hover:bg-white/15 transition">
        {emoji}
      </div>
      <div className="text-sm font-semibold">{name}</div>
      {tag && <div className="text-xs text-secondary">{tag}</div>}
    </div>
  );
}

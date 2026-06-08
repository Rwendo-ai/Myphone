'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

// Bottom tab bar mirroring the mobile app's 5-tab layout.
//
// Order matches mobile: Home, Learn, Chat (Rwen — centre, oversized),
// Travel, Profile. Active tab gets full opacity + accent color.
//
// The Chat / Companion tab is intentionally centre and larger — it's
// the headline feature; the mobile app uses a round Rwen-bordered
// button there. Web does the same with a circular icon.

interface Tab { href: string; label: string; icon: string; center?: boolean }
const TABS: Tab[] = [
  { href: '/home',    label: 'Home',    icon: '🏠' },
  { href: '/learn',   label: 'Learn',   icon: '📚' },
  { href: '/chat',    label: 'Rwen',    icon: '🦎', center: true },
  { href: '/travel',  label: 'Travel',  icon: '✈️' },
  { href: '/profile', label: 'You',     icon: '👤' },
];

export default function TabBar() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-30 bg-primary/95 backdrop-blur border-t border-white/10">
      <div className="max-w-2xl mx-auto flex items-end justify-around px-2 py-2 pb-[max(0.5rem,env(safe-area-inset-bottom))]">
        {TABS.map((tab) => {
          const active = pathname === tab.href || pathname?.startsWith(tab.href + '/');
          if (tab.center) {
            return (
              <Link
                key={tab.href}
                href={tab.href}
                className={`-mt-6 w-16 h-16 rounded-full border-[3px] ${active ? 'border-secondary' : 'border-white/30'} bg-primary flex items-center justify-center shadow-lg shadow-secondary/30 transition`}
                aria-label={tab.label}
              >
                <span className="text-3xl">{tab.icon}</span>
              </Link>
            );
          }
          return (
            <Link
              key={tab.href}
              href={tab.href}
              className={`flex-1 flex flex-col items-center gap-0.5 py-1 ${active ? 'opacity-100' : 'opacity-50 hover:opacity-80'} transition`}
            >
              <span className="text-2xl">{tab.icon}</span>
              <span className={`text-[10px] font-semibold ${active ? 'text-secondary' : 'text-white/80'}`}>{tab.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

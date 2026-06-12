'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

// Side menu replacing the old bottom tab bar.
//
// Desktop (md+): persistent left sidebar, always visible.
// Mobile: slim top bar with a hamburger that slides the same menu in
// from the left as an overlay drawer.
//
// Order matches mobile app: Home, Learn, Rwen (chat — the headline
// feature, visually elevated with a gold-ringed avatar), Travel,
// Profile. Cart sits in a secondary section below.

interface NavItem { href: string; label: string; icon: string; hero?: boolean; children?: Array<{ href: string; label: string }> }
const PRIMARY: NavItem[] = [
  { href: '/home',    label: 'Home',    icon: '🏠' },
  { href: '/learn',   label: 'Learn',   icon: '📚' },
  { href: '/chat',    label: 'Rwen',    icon: '🦎', hero: true },
  {
    href: '/travel',  label: 'Travel',  icon: '✈️',
    // Sub-items appear while inside the section — the side menu's
    // advantage over a 5-slot bottom bar.
    children: [
      { href: '/travel/phrasebook',  label: 'Phrasebook' },
      { href: '/travel/culture',     label: 'Culture' },
      { href: '/travel/money',       label: 'Money' },
      { href: '/travel/safari',      label: 'Safari' },
      { href: '/travel/connections', label: 'Connections' },
    ],
  },
  { href: '/profile', label: 'Profile', icon: '👤' },
];
const SECONDARY: NavItem[] = [
  { href: '/dictionary', label: 'Dictionary', icon: '📖' },
  { href: '/cart', label: 'Cart', icon: '🛒' },
];

function NavLinks({ pathname, onNavigate }: { pathname: string | null; onNavigate?: () => void }) {
  const renderItem = (item: NavItem) => {
    const active = pathname === item.href || pathname?.startsWith(item.href + '/');
    if (item.hero) {
      return (
        <Link
          key={item.href}
          href={item.href}
          onClick={onNavigate}
          className={`flex items-center gap-3 px-3 py-2.5 rounded-xl transition ${
            active ? 'bg-secondary/15' : 'hover:bg-white/5'
          }`}
        >
          <span
            className={`w-10 h-10 rounded-full border-2 ${
              active ? 'border-secondary' : 'border-white/30'
            } bg-primary flex items-center justify-center shadow-lg shadow-secondary/30 text-xl shrink-0`}
          >
            {item.icon}
          </span>
          <span className={`font-bold ${active ? 'text-secondary' : 'text-white'}`}>{item.label}</span>
        </Link>
      );
    }
    const showChildren = active && !!item.children?.length;
    return (
      <div key={item.href}>
        <Link
          href={item.href}
          onClick={onNavigate}
          className={`flex items-center gap-3 px-3 py-2.5 rounded-xl transition ${
            active ? 'bg-white/10 text-secondary' : 'text-white/70 hover:bg-white/5 hover:text-white'
          }`}
        >
          <span className="text-xl w-10 text-center shrink-0">{item.icon}</span>
          <span className="font-semibold text-sm">{item.label}</span>
        </Link>
        {showChildren && (
          <div className="ml-12 mt-1 mb-1 flex flex-col gap-0.5 border-l border-white/10 pl-3">
            {item.children!.map((c) => {
              const childActive = pathname === c.href || pathname?.startsWith(c.href + '/');
              return (
                <Link
                  key={c.href}
                  href={c.href}
                  onClick={onNavigate}
                  className={`px-2 py-1.5 rounded-lg text-sm transition ${
                    childActive ? 'text-secondary font-semibold' : 'text-white/60 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {c.label}
                </Link>
              );
            })}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="flex flex-col h-full">
      <Link href="/home" onClick={onNavigate} className="flex items-center gap-2.5 px-3 py-4 mb-2">
        <span className="text-2xl">🦎</span>
        <span className="text-lg font-extrabold tracking-wide">Rwendo</span>
      </Link>
      <nav className="flex flex-col gap-1 px-2">{PRIMARY.map(renderItem)}</nav>
      <div className="mx-4 my-3 border-t border-white/10" />
      <nav className="flex flex-col gap-1 px-2">{SECONDARY.map(renderItem)}</nav>
    </div>
  );
}

export default function SideNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <>
      {/* Desktop: persistent left sidebar */}
      <aside className="hidden md:block fixed left-0 top-0 bottom-0 z-30 w-60 bg-primary/95 backdrop-blur border-r border-white/10 overflow-y-auto">
        <NavLinks pathname={pathname} />
      </aside>

      {/* Mobile: top bar with hamburger */}
      <header className="md:hidden fixed top-0 left-0 right-0 z-30 h-14 bg-primary/95 backdrop-blur border-b border-white/10 flex items-center px-3 gap-3">
        <button
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          className="w-10 h-10 rounded-xl hover:bg-white/10 transition flex items-center justify-center"
        >
          <span className="flex flex-col gap-[5px]">
            <span className="block w-5 h-0.5 bg-white rounded" />
            <span className="block w-5 h-0.5 bg-white rounded" />
            <span className="block w-5 h-0.5 bg-white rounded" />
          </span>
        </button>
        <Link href="/home" className="flex items-center gap-2">
          <span className="text-xl">🦎</span>
          <span className="font-extrabold tracking-wide">Rwendo</span>
        </Link>
      </header>

      {/* Mobile: slide-in drawer */}
      {open && (
        <div className="md:hidden fixed inset-0 z-40">
          <div className="absolute inset-0 bg-black/60" onClick={close} aria-hidden />
          <aside className="absolute left-0 top-0 bottom-0 w-64 bg-primary border-r border-white/10 overflow-y-auto shadow-2xl">
            <NavLinks pathname={pathname} onNavigate={close} />
          </aside>
        </div>
      )}
    </>
  );
}

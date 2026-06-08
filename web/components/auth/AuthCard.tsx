'use client';

import type { ReactNode } from 'react';

// Frosted card wrapper used by both /sign-in and /onboarding so they
// share the visual language (gradient bg + glass card). Centralised
// here so a future style tweak only touches one file.
export function AuthCard({
  title,
  subtitle,
  children,
  wide = false,
}: {
  title?: string;
  subtitle?: string;
  children: ReactNode;
  wide?: boolean;
}) {
  return (
    <main className="flex items-center justify-center min-h-screen bg-gradient-to-b from-primary to-[#0D2140] px-6 py-12">
      <div
        className={`w-full ${wide ? 'max-w-lg' : 'max-w-sm'} bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur`}
      >
        {title && <h1 className="text-3xl font-bold mb-2 text-center">{title}</h1>}
        {subtitle && <p className="text-white/60 text-center mb-8">{subtitle}</p>}
        {children}
      </div>
    </main>
  );
}

'use client';

import type { ReactNode } from 'react';

// Single styled OAuth/provider button used on /sign-in. variant=primary
// (white) for the recommended provider, variant=ghost (frosted) for
// secondary ones. `disabled` doubles as "coming soon" for crypto.
export function ProviderButton({
  onClick,
  children,
  variant = 'ghost',
  disabled = false,
  loading = false,
  icon,
}: {
  onClick: () => void;
  children: ReactNode;
  variant?: 'primary' | 'ghost';
  disabled?: boolean;
  loading?: boolean;
  icon?: ReactNode;
}) {
  const base =
    'w-full py-3 px-4 font-semibold rounded-full transition flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed';
  const variantClass =
    variant === 'primary'
      ? 'bg-white text-primary hover:opacity-90'
      : 'bg-white/10 text-white border border-white/15 hover:bg-white/15';
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled || loading}
      className={`${base} ${variantClass}`}
    >
      {icon && <span className="w-5 h-5 flex items-center justify-center">{icon}</span>}
      <span>{loading ? 'Redirecting…' : children}</span>
    </button>
  );
}

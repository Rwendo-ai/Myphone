'use client';

// "Danger zone" panel — clear chat + delete account. Both buttons are
// inert in v1 (show "Coming soon" alert) because the destructive flows
// need server-side care that's out of scope for this slice. Buttons
// exist so the UI is feature-complete vs the mobile profile screen.
export default function DangerZone() {
  return (
    <div className="border border-error/30 bg-error/5 rounded-2xl p-5">
      <div className="text-error font-semibold mb-3">Danger zone</div>
      <div className="grid gap-2">
        <button
          onClick={() => alert('Coming soon — full chat history clear lands in a follow-up.')}
          className="w-full text-left px-4 py-3 rounded-lg bg-white/5 hover:bg-white/10 transition border border-white/10"
        >
          <div className="text-white text-sm font-medium">Clear conversation history</div>
          <div className="text-white/50 text-xs">Permanently delete every text and voice turn. Coming soon.</div>
        </button>
        <button
          onClick={() => alert('Coming soon — account deletion lands in a follow-up.')}
          className="w-full text-left px-4 py-3 rounded-lg bg-white/5 hover:bg-white/10 transition border border-error/20"
        >
          <div className="text-error text-sm font-medium">Delete account</div>
          <div className="text-white/50 text-xs">Permanently remove your account and all data. Coming soon.</div>
        </button>
      </div>
    </div>
  );
}

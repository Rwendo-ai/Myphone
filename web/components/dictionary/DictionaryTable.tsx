'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { getCourseById } from '@/lib/courses-web';

export interface DictionaryEntry {
  id: string;
  courseId: string;
  target: string;
  native: string;
  literal: string | null;
  lessonId: string | null;
  addedAt: string;
}

// Searchable, course-filterable word table. Search matches both the
// target word and the translation, accent/case-insensitive.
export default function DictionaryTable({ entries }: { entries: DictionaryEntry[] }) {
  const [query, setQuery] = useState('');
  const [courseFilter, setCourseFilter] = useState<string>('');

  const courses = useMemo(() => {
    const ids = [...new Set(entries.map((e) => e.courseId).filter(Boolean))];
    return ids.map((id) => ({ id, name: getCourseById(id)?.name ?? id, emoji: getCourseById(id)?.emoji ?? '📘' }));
  }, [entries]);

  const norm = (s: string) =>
    s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');

  const filtered = useMemo(() => {
    const q = norm(query.trim());
    return entries.filter((e) => {
      if (courseFilter && e.courseId !== courseFilter) return false;
      if (!q) return true;
      return norm(e.target).includes(q) || norm(e.native).includes(q);
    });
  }, [entries, query, courseFilter]);

  if (entries.length === 0) {
    return (
      <div className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center">
        <div className="text-4xl mb-3">📖</div>
        <p className="text-white/80 font-semibold mb-1">No words yet</p>
        <p className="text-white/50 text-sm mb-5">
          Finish your first lesson and every new word lands here automatically.
        </p>
        <Link
          href="/learn"
          className="inline-block px-6 py-2.5 bg-secondary text-primary font-semibold rounded-full hover:opacity-90 transition"
        >
          Start a lesson
        </Link>
      </div>
    );
  }

  return (
    <div>
      <div className="flex flex-col sm:flex-row gap-2 mb-4">
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search words or meanings…"
          className="flex-1 px-4 py-2.5 bg-white/10 border border-white/15 rounded-xl text-white placeholder:text-white/40 focus:outline-none focus:border-secondary"
        />
        {courses.length > 1 && (
          <div className="flex gap-1.5 flex-wrap">
            <FilterChip active={courseFilter === ''} onClick={() => setCourseFilter('')} label="All" />
            {courses.map((c) => (
              <FilterChip
                key={c.id}
                active={courseFilter === c.id}
                onClick={() => setCourseFilter(c.id)}
                label={`${c.emoji} ${c.name}`}
              />
            ))}
          </div>
        )}
      </div>

      <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
        {filtered.length === 0 && (
          <p className="text-white/50 text-sm text-center py-8">Nothing matches “{query}”.</p>
        )}
        {filtered.map((e) => (
          <div key={e.id} className="px-5 py-3 border-b border-white/5 last:border-b-0 flex items-baseline justify-between gap-4">
            <div className="min-w-0">
              <span className="text-secondary font-semibold">{e.target}</span>
              {e.literal && <span className="text-white/40 text-xs ml-2 italic">lit. {e.literal}</span>}
            </div>
            <div className="text-white/70 text-sm text-right shrink-0">{e.native}</div>
          </div>
        ))}
      </div>
      <p className="text-white/40 text-xs mt-3 text-right">
        {filtered.length} of {entries.length} words
      </p>
    </div>
  );
}

function FilterChip({ active, onClick, label }: { active: boolean; onClick: () => void; label: string }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`px-3 py-2 rounded-full text-xs font-medium border transition whitespace-nowrap ${
        active
          ? 'bg-secondary/20 border-secondary text-secondary'
          : 'bg-white/5 border-white/15 text-white/60 hover:bg-white/10'
      }`}
    >
      {label}
    </button>
  );
}

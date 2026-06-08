// Tiny zero-dependency markdown → JSX renderer.
//
// Handles the subset of CommonMark that our legal documents use:
//   - # / ## / ### / #### headers
//   - paragraphs (blank-line-separated)
//   - **bold** + *italic* inline
//   - [text](url) links
//   - bullet lists ("- ..." or "* ...")
//   - numbered lists ("1. ...", continues numbering by source order)
//   - horizontal rules ("---")
//   - inline `code` spans
//
// Deliberate non-goals: tables, images, nested lists, fenced code blocks,
// footnotes. Legal pages don't use them. Keeping the surface small avoids
// pulling in a 50KB+ markdown library for two pages.

import React from 'react';

type Inline = string | React.ReactNode;

/** Convert a single line of inline markdown (bold, italic, links, code)
 *  into an array of React children. */
function renderInline(text: string, keyBase: string): Inline[] {
  const out: Inline[] = [];
  // Regex covers: **bold**, *italic*, `code`, [text](url) — picked greedily
  // left-to-right via a single scan.
  const re = /\*\*([^*]+)\*\*|\*([^*]+)\*|`([^`]+)`|\[([^\]]+)\]\(([^)]+)\)/g;
  let last = 0;
  let m: RegExpExecArray | null;
  let i = 0;
  while ((m = re.exec(text))) {
    if (m.index > last) out.push(text.slice(last, m.index));
    const k = `${keyBase}-${i++}`;
    if (m[1] !== undefined) out.push(<strong key={k} className="font-semibold text-white">{m[1]}</strong>);
    else if (m[2] !== undefined) out.push(<em key={k} className="italic">{m[2]}</em>);
    else if (m[3] !== undefined) out.push(<code key={k} className="bg-white/10 rounded px-1 py-0.5 text-xs">{m[3]}</code>);
    else if (m[4] !== undefined && m[5] !== undefined) out.push(<a key={k} href={m[5]} className="text-secondary underline hover:opacity-80">{m[4]}</a>);
    last = re.lastIndex;
  }
  if (last < text.length) out.push(text.slice(last));
  return out;
}

export function Markdown({ source }: { source: string }) {
  const lines = source.replace(/\r\n/g, '\n').split('\n');
  const nodes: React.ReactNode[] = [];

  let i = 0;
  let key = 0;
  let paragraph: string[] = [];
  let ulItems: string[] = [];
  let olItems: string[] = [];

  function flushParagraph() {
    if (!paragraph.length) return;
    nodes.push(
      <p key={`p-${key++}`} className="text-white/80 leading-relaxed mb-4">
        {renderInline(paragraph.join(' '), `p-${key}`)}
      </p>,
    );
    paragraph = [];
  }

  function flushUl() {
    if (!ulItems.length) return;
    nodes.push(
      <ul key={`ul-${key++}`} className="list-disc list-outside ml-6 mb-4 space-y-1 text-white/80">
        {ulItems.map((it, idx) => (
          <li key={idx}>{renderInline(it, `ul-${key}-${idx}`)}</li>
        ))}
      </ul>,
    );
    ulItems = [];
  }

  function flushOl() {
    if (!olItems.length) return;
    nodes.push(
      <ol key={`ol-${key++}`} className="list-decimal list-outside ml-6 mb-4 space-y-1 text-white/80">
        {olItems.map((it, idx) => (
          <li key={idx}>{renderInline(it, `ol-${key}-${idx}`)}</li>
        ))}
      </ol>,
    );
    olItems = [];
  }

  function flushAll() { flushParagraph(); flushUl(); flushOl(); }

  while (i < lines.length) {
    const raw = lines[i];
    const line = raw.trim();

    // Blank line — break the current block
    if (line === '') { flushAll(); i++; continue; }

    // Horizontal rule
    if (/^---+$/.test(line)) {
      flushAll();
      nodes.push(<hr key={`hr-${key++}`} className="border-white/10 my-8" />);
      i++; continue;
    }

    // Headers
    const hMatch = line.match(/^(#{1,4})\s+(.+)$/);
    if (hMatch) {
      flushAll();
      const level = hMatch[1].length;
      const text = hMatch[2];
      const cls = level === 1 ? 'text-3xl font-bold mt-8 mb-4 text-white'
                : level === 2 ? 'text-2xl font-bold mt-8 mb-3 text-white'
                : level === 3 ? 'text-xl  font-semibold mt-6 mb-2 text-white'
                              : 'text-lg  font-semibold mt-4 mb-2 text-white';
      const k = `h-${key++}`;
      const inner = renderInline(text, k);
      nodes.push(
        level === 1 ? <h1 key={k} className={cls}>{inner}</h1> :
        level === 2 ? <h2 key={k} className={cls}>{inner}</h2> :
        level === 3 ? <h3 key={k} className={cls}>{inner}</h3> :
                       <h4 key={k} className={cls}>{inner}</h4>
      );
      i++; continue;
    }

    // Bullet list item
    const ulMatch = line.match(/^[-*]\s+(.+)$/);
    if (ulMatch) {
      flushParagraph(); flushOl();
      ulItems.push(ulMatch[1]);
      i++; continue;
    }

    // Numbered list item
    const olMatch = line.match(/^\d+\.\s+(.+)$/);
    if (olMatch) {
      flushParagraph(); flushUl();
      olItems.push(olMatch[1]);
      i++; continue;
    }

    // Otherwise — paragraph line. End any open list first.
    flushUl(); flushOl();
    paragraph.push(line);
    i++;
  }
  flushAll();

  return <>{nodes}</>;
}

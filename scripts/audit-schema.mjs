// One-off schema audit. Run with: node scripts/audit-schema.mjs
// Reads SUPABASE_URL + service_role JWT from .env.local. Read-only.

import { readFileSync } from 'node:fs';
import { createClient } from '@supabase/supabase-js';

const env = Object.fromEntries(
  readFileSync('.env.local', 'utf8')
    .split('\n')
    .filter(Boolean)
    .filter(l => !l.startsWith('#'))
    .map(l => {
      const i = l.indexOf('=');
      return [l.slice(0, i).trim(), l.slice(i + 1).trim()];
    })
);

const url = env.SUPABASE_URL;
const key = env.SUPABASE_SERVICE_ROLE_KEY ?? env.SUPABASE_SECRET_KEY;
if (!url || !key) {
  console.error('Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY in .env.local');
  process.exit(1);
}

console.log('Using key role:', JSON.parse(Buffer.from(key.split('.')[1], 'base64url').toString()).role);
console.log('URL:', url);
console.log('');

const supabase = createClient(url, key, {
  auth: { persistSession: false, autoRefreshToken: false },
});

// Try a raw SQL query via PostgREST directly to bypass schema cache
async function rawSql(query) {
  const res = await fetch(`${url}/rest/v1/rpc/exec_sql`, {
    method: 'POST',
    headers: {
      'apikey': key,
      'Authorization': `Bearer ${key}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query }),
  });
  return { status: res.status, text: await res.text() };
}

// Use the postgrest information_schema to discover what's actually there
async function listAllTables() {
  // information_schema.tables — universal, doesn't depend on app schema
  const { data, error } = await supabase
    .schema('information_schema')
    .from('tables')
    .select('table_schema, table_name, table_type')
    .eq('table_schema', 'public')
    .order('table_name');
  return { data, error };
}

async function listColumnsForTable(table) {
  const { data, error } = await supabase
    .schema('information_schema')
    .from('columns')
    .select('column_name, data_type, is_nullable')
    .eq('table_schema', 'public')
    .eq('table_name', table)
    .order('ordinal_position');
  return { data, error };
}

async function tryDirectFetch(path) {
  const res = await fetch(`${url}/rest/v1/${path}?limit=1`, {
    headers: { 'apikey': key, 'Authorization': `Bearer ${key}` },
  });
  return { status: res.status, body: await res.text() };
}

console.log('=== 1. Public schema tables (via information_schema) ===');
const t = await listAllTables();
if (t.error) {
  console.log('ERROR:', t.error);
} else if (!t.data || t.data.length === 0) {
  console.log('(empty — public schema has no tables visible)');
} else {
  for (const row of t.data) {
    console.log(`  ${row.table_name.padEnd(30)} ${row.table_type}`);
  }
}

console.log('\n=== 2. Direct REST GET on key tables ===');
for (const table of ['profiles', 'available_packs', 'user_packs', 'jurisdictions', 'subscriptions', 'lesson_progress']) {
  const r = await tryDirectFetch(table);
  let preview = r.body.length > 200 ? r.body.slice(0, 200) + '...' : r.body;
  console.log(`  ${table.padEnd(20)} HTTP ${r.status}  ${preview}`);
}

console.log('\n=== 3. profiles columns (if visible) ===');
const c = await listColumnsForTable('profiles');
if (c.error) {
  console.log('ERROR:', c.error);
} else if (!c.data || c.data.length === 0) {
  console.log('(no columns — table may not exist, or no read access)');
} else {
  for (const col of c.data) {
    console.log(`  ${col.column_name.padEnd(30)} ${col.data_type}`);
  }
}

console.log('\n=== 4. available_packs columns ===');
const c2 = await listColumnsForTable('available_packs');
if (c2.error) {
  console.log('ERROR:', c2.error);
} else if (!c2.data || c2.data.length === 0) {
  console.log('(no columns — table may not exist, or no read access)');
} else {
  for (const col of c2.data) {
    console.log(`  ${col.column_name.padEnd(30)} ${col.data_type}`);
  }
}

console.log('\n=== 5. Storage buckets ===');
const b = await supabase.storage.listBuckets();
if (b.error) console.log('ERROR:', b.error.message);
else for (const bk of b.data ?? []) console.log(`  ${bk.name} (public=${bk.public})`);

console.log('\n=== Done ===');

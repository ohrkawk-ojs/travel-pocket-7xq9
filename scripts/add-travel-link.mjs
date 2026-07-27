#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';

const args = parseArgs(process.argv.slice(2));
const root = process.cwd();
const file = path.join(root, 'src/data/travel-links.ts');
const today = new Date().toISOString().slice(0, 10);

if (!args.title && !args.url) {
  console.error('Usage: node scripts/add-travel-link.mjs --title "도톤보리" --category place --url https://... --memo "저녁" --tag 오사카 --important');
  process.exit(1);
}

const source = fs.readFileSync(file, 'utf8');
const item = {
  id: args.id || slugify(args.title || hostname(args.url)),
  title: args.title || hostname(args.url),
  category: normalizeCategory(args.category || 'other'),
  url: args.url,
  memo: args.memo,
  tags: collect(args.tag || args.tags),
  important: Boolean(args.important),
  addedAt: args.addedAt || today,
};

if (args.place || args.address || args.maps || args.lat || args.lng) {
  item.place = {
    name: args.place || args.title,
    address: args.address,
    googleMapsUrl: args.maps,
    lat: args.lat ? Number(args.lat) : undefined,
    lng: args.lng ? Number(args.lng) : undefined,
  };
}

if (source.includes(`id: '${item.id}'`) || (item.url && source.includes(`url: '${item.url}'`))) {
  console.log(`SKIP duplicate: ${item.id}`);
  process.exit(0);
}

const entry = toTsObject(item);
const next = source.replace(/\n\];\s*$/, `,\n${entry}\n];\n`);
fs.writeFileSync(file, next);
console.log(`ADDED ${item.id}`);

function parseArgs(argv) {
  const out = {};
  for (let i = 0; i < argv.length; i++) {
    const token = argv[i];
    if (!token.startsWith('--')) continue;
    const key = token.slice(2);
    const next = argv[i + 1];
    if (!next || next.startsWith('--')) out[key] = true;
    else out[key] = next, i++;
  }
  return out;
}
function collect(value) { return value ? String(value).split(',').map((s) => s.trim()).filter(Boolean) : undefined; }
function hostname(value) { try { return new URL(value).hostname; } catch { return '새 링크'; } }
function slugify(value) { return String(value).toLowerCase().normalize('NFKD').replace(/[^a-z0-9가-힣]+/g, '-').replace(/^-|-$/g, '').slice(0, 60) || `link-${Date.now()}`; }
function normalizeCategory(value) {
  const map = { 장소:'place', 지도:'place', 숙소:'hotel', 호텔:'hotel', 교통:'transport', 항공:'transport', 맛집:'food', 카페:'food', 티켓:'ticket', 예약:'ticket', 쇼핑:'shopping', 메모:'memo', 기타:'other' };
  return map[value] || value;
}
function q(value) { return `'${String(value).replace(/\\/g, '\\\\').replace(/'/g, "\\'")}'`; }
function toTsObject(obj) {
  const lines = ['  {'];
  for (const [key, value] of Object.entries(obj)) {
    if (value === undefined || value === false || (Array.isArray(value) && value.length === 0)) continue;
    if (Array.isArray(value)) lines.push(`    ${key}: [${value.map(q).join(', ')}],`);
    else if (typeof value === 'object') {
      lines.push(`    ${key}: {`);
      for (const [k, v] of Object.entries(value)) if (v !== undefined) lines.push(`      ${k}: ${typeof v === 'number' ? v : q(v)},`);
      lines.push('    },');
    }
    else if (typeof value === 'boolean') lines.push(`    ${key}: ${value},`);
    else lines.push(`    ${key}: ${q(value)},`);
  }
  lines.push('  }');
  return lines.join('\n');
}

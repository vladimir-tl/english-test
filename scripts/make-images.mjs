// Renders the favicon PNGs and the Open Graph image into public/. Run: node scripts/make-images.mjs
import sharp from 'sharp';
import { readFile } from 'node:fs/promises';

const icon = await readFile(new URL('../public/favicon.svg', import.meta.url));
await sharp(icon).resize(32, 32).png().toFile('public/favicon-32.png');
await sharp(icon).resize(180, 180).png().toFile('public/apple-touch-icon.png');

const levels = [['A1', 250, false], ['A2', 350, false], ['B1', 450, true]]
  .map(([id, y, on]) => `
    <rect x="720" y="${y}" width="380" height="80" rx="18" fill="${on ? '#e6ebfb' : '#fff'}" stroke="${on ? '#3b5bdb' : '#dfe3ea'}" stroke-width="${on ? 4 : 2}"/>
    <rect x="740" y="${y + 16}" width="72" height="48" rx="12" fill="#3b5bdb" opacity="${on ? 1 : 0.35}"/>
    <text x="776" y="${y + 49}" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="26" fill="#fff">${id}</text>
    <rect x="832" y="${y + 24}" width="${on ? 200 : 160}" height="10" rx="5" fill="#1c2333" opacity=".25"/>
    <rect x="832" y="${y + 46}" width="${on ? 120 : 96}" height="10" rx="5" fill="#1c2333" opacity=".12"/>`)
  .join('');

const og = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="#f7f8fa"/>
  <g transform="translate(90 90) scale(2.5)">${icon.toString().replace(/<\/?svg[^>]*>/g, '')}</g>
  <text x="190" y="152" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="40" fill="#1c2333">english-test.ee</text>
  <text x="90" y="300" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="72" fill="#1c2333">Free English</text>
  <text x="90" y="385" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="72" fill="#3b5bdb">level test</text>
  <text x="90" y="470" font-family="Helvetica, Arial, sans-serif" font-size="34" fill="#6b7280">A1–B1 · English for IT</text>
  <rect x="690" y="200" width="440" height="360" rx="28" fill="#fff" stroke="#dfe3ea" stroke-width="2"/>
  ${levels}
</svg>`;
await sharp(Buffer.from(og)).png().toFile('public/og.png');
console.log('Images written to public/');

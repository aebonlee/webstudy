import { createCanvas, GlobalFonts } from '@napi-rs/canvas';
import { writeFileSync } from 'fs';
import { join } from 'path';

// Register Korean fonts
GlobalFonts.registerFromPath('C:/Windows/Fonts/malgunbd.ttf', 'MalgunBold');
GlobalFonts.registerFromPath('C:/Windows/Fonts/malgun.ttf', 'Malgun');

const width = 1200;
const height = 630;
const canvas = createCanvas(width, height);
const ctx = canvas.getContext('2d');

// Seed-based pseudo-random for reproducible results
let seed = 42;
function rand() {
  seed = (seed * 16807 + 0) % 2147483647;
  return seed / 2147483647;
}

// ── Background gradient (135deg, matching site hero) ──
const gradient = ctx.createLinearGradient(0, 0, width, height);
gradient.addColorStop(0, '#001D5E');
gradient.addColorStop(0.4, '#0046C8');
gradient.addColorStop(1, '#4A8FE7');
ctx.fillStyle = gradient;
ctx.fillRect(0, 0, width, height);

// ── Constellation network (nodes + connecting lines) ──
const nodes = [];
for (let i = 0; i < 35; i++) {
  nodes.push({
    x: rand() * width,
    y: rand() * height,
    r: rand() * 2.5 + 1,
    a: rand() * 0.25 + 0.05,
  });
}
// Draw connection lines between nearby nodes
for (let i = 0; i < nodes.length; i++) {
  for (let j = i + 1; j < nodes.length; j++) {
    const dx = nodes[i].x - nodes[j].x;
    const dy = nodes[i].y - nodes[j].y;
    const dist = Math.sqrt(dx * dx + dy * dy);
    if (dist < 200) {
      const alpha = (1 - dist / 200) * 0.08;
      ctx.strokeStyle = `rgba(255, 255, 255, ${alpha})`;
      ctx.lineWidth = 0.8;
      ctx.beginPath();
      ctx.moveTo(nodes[i].x, nodes[i].y);
      ctx.lineTo(nodes[j].x, nodes[j].y);
      ctx.stroke();
    }
  }
}
// Draw nodes with glow
for (const n of nodes) {
  const ng = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, n.r * 4);
  ng.addColorStop(0, `rgba(150, 200, 255, ${n.a * 0.6})`);
  ng.addColorStop(1, 'rgba(150, 200, 255, 0)');
  ctx.fillStyle = ng;
  ctx.beginPath();
  ctx.arc(n.x, n.y, n.r * 4, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = `rgba(255, 255, 255, ${n.a + 0.15})`;
  ctx.beginPath();
  ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
  ctx.fill();
}

// ── Decorative circles (matching hero section) ──
const circles = [
  { x: 1080, y: 80,  r: 220, a: 0.08 },
  { x: 80,   y: 560, r: 180, a: 0.06 },
  { x: 960,  y: 530, r: 130, a: 0.05 },
];
for (const c of circles) {
  ctx.strokeStyle = `rgba(255, 255, 255, ${c.a})`;
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.arc(c.x, c.y, c.r, 0, Math.PI * 2);
  ctx.stroke();

  const cg = ctx.createRadialGradient(c.x, c.y, 0, c.x, c.y, c.r);
  cg.addColorStop(0, `rgba(255, 255, 255, ${c.a * 0.5})`);
  cg.addColorStop(1, 'rgba(255, 255, 255, 0)');
  ctx.fillStyle = cg;
  ctx.beginPath();
  ctx.arc(c.x, c.y, c.r, 0, Math.PI * 2);
  ctx.fill();
}

// ── Floating code snippets (left side) ──
ctx.save();
ctx.globalAlpha = 0.09;
ctx.font = '400 13px monospace';
ctx.textAlign = 'left';
ctx.fillStyle = '#FFFFFF';
const codeLines = [
  'const server = express();',
  'app.get("/api", handler);',
  'await db.query(sql);',
  'res.json({ ok: true });',
  'export default router;',
  'npm run deploy',
  'git push origin main',
];
codeLines.forEach((line, i) => {
  ctx.fillText(line, 40, 100 + i * 22);
});
ctx.restore();

// ── Floating code snippets (right side) ──
ctx.save();
ctx.globalAlpha = 0.09;
ctx.font = '400 13px monospace';
ctx.textAlign = 'right';
ctx.fillStyle = '#FFFFFF';
const codeLines2 = [
  'import { supabase } from "./db";',
  'const { data } = await fetch(url);',
  'docker build -t app .',
  'render deploy --prod',
  'SELECT * FROM users;',
  'JWT.verify(token, secret);',
];
codeLines2.forEach((line, i) => {
  ctx.fillText(line, width - 40, 420 + i * 22);
});
ctx.restore();

// ── Terminal window (top-left corner) ──
ctx.save();
ctx.globalAlpha = 0.12;
const termX = 50, termY = 360, termW = 260, termH = 130;
// Terminal bg
ctx.fillStyle = 'rgba(0, 0, 0, 0.4)';
roundRect(ctx, termX, termY, termW, termH, 8);
ctx.fill();
// Terminal title bar
ctx.fillStyle = 'rgba(255, 255, 255, 0.15)';
ctx.fillRect(termX, termY, termW, 22);
// Traffic lights
const tlY = termY + 11;
ctx.fillStyle = '#FF5F57'; ctx.beginPath(); ctx.arc(termX + 14, tlY, 4, 0, Math.PI * 2); ctx.fill();
ctx.fillStyle = '#FEBC2E'; ctx.beginPath(); ctx.arc(termX + 28, tlY, 4, 0, Math.PI * 2); ctx.fill();
ctx.fillStyle = '#28C840'; ctx.beginPath(); ctx.arc(termX + 42, tlY, 4, 0, Math.PI * 2); ctx.fill();
// Terminal text
ctx.fillStyle = '#4ADE80';
ctx.font = '400 11px monospace';
ctx.textAlign = 'left';
ctx.fillText('$ npm run build', termX + 12, termY + 44);
ctx.fillStyle = '#FFFFFF';
ctx.fillText('✓ Built in 2.4s', termX + 12, termY + 62);
ctx.fillText('✓ 30+ topics compiled', termX + 12, termY + 80);
ctx.fillStyle = '#4ADE80';
ctx.fillText('$ npm run deploy', termX + 12, termY + 102);
ctx.fillStyle = '#60A5FA';
ctx.fillText('▸ deploying...', termX + 12, termY + 118);
ctx.restore();

// ── Code bracket decorations (right side) ──
ctx.save();
ctx.globalAlpha = 0.1;
ctx.strokeStyle = '#FFFFFF';
ctx.lineWidth = 2;
ctx.font = '400 80px monospace';
ctx.textAlign = 'center';
ctx.fillStyle = 'rgba(255, 255, 255, 0.06)';
ctx.fillText('{', 1100, 200);
ctx.fillText('}', 1140, 360);
ctx.fillText('</', 1060, 280);
ctx.restore();

// ── Center glow behind title ──
const glow = ctx.createRadialGradient(width / 2, 250, 0, width / 2, 250, 320);
glow.addColorStop(0, 'rgba(74, 143, 231, 0.3)');
glow.addColorStop(0.6, 'rgba(74, 143, 231, 0.08)');
glow.addColorStop(1, 'rgba(74, 143, 231, 0)');
ctx.fillStyle = glow;
ctx.fillRect(0, 0, width, height);

// ── Title: "Vibe Backend Study" ──
ctx.textAlign = 'center';
ctx.textBaseline = 'middle';

// Title glow layers
for (let i = 3; i >= 1; i--) {
  ctx.fillStyle = `rgba(100, 180, 255, ${0.03 * i})`;
  ctx.font = '700 72px "MalgunBold", sans-serif';
  ctx.fillText('Vibe Backend Study', width / 2, 210 + i * 0.5);
}

// Text shadow
ctx.fillStyle = 'rgba(0, 0, 0, 0.2)';
ctx.font = '700 72px "MalgunBold", sans-serif';
ctx.fillText('Vibe Backend Study', width / 2 + 2, 212);

// Main title
ctx.fillStyle = '#FFFFFF';
ctx.fillText('Vibe Backend Study', width / 2, 210);

// ── Subtitle ──
ctx.fillStyle = 'rgba(255, 255, 255, 0.92)';
ctx.font = '400 28px "Malgun", sans-serif';
ctx.fillText('바이브코딩 백엔드 완전정복', width / 2, 290);

// ── Divider with gradient ──
const divGrad = ctx.createLinearGradient(350, 0, 850, 0);
divGrad.addColorStop(0, 'rgba(255, 255, 255, 0)');
divGrad.addColorStop(0.2, 'rgba(100, 180, 255, 0.6)');
divGrad.addColorStop(0.5, 'rgba(255, 255, 255, 0.7)');
divGrad.addColorStop(0.8, 'rgba(100, 180, 255, 0.6)');
divGrad.addColorStop(1, 'rgba(255, 255, 255, 0)');
ctx.strokeStyle = divGrad;
ctx.lineWidth = 1.5;
ctx.beginPath();
ctx.moveTo(350, 338);
ctx.lineTo(850, 338);
ctx.stroke();
// Center diamond on divider
ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
ctx.save();
ctx.translate(600, 338);
ctx.rotate(Math.PI / 4);
ctx.fillRect(-4, -4, 8, 8);
ctx.restore();

// ── Tag pills ──
const tags = ['서버', 'API', 'GitHub', 'Supabase', 'Render.com', '배포'];
const pillGap = 14;
const pillPadX = 20;
const pillH = 34;
const pillFont = '400 15px "Malgun", sans-serif';
ctx.font = pillFont;
const pillWidths = tags.map(t => ctx.measureText(t).width + pillPadX * 2);
const totalPillW = pillWidths.reduce((a, b) => a + b, 0) + pillGap * (tags.length - 1);
let pillX = (width - totalPillW) / 2;
const pillY = 370;

for (let i = 0; i < tags.length; i++) {
  const pw = pillWidths[i];
  const r = pillH / 2;

  // Pill glow
  const pglow = ctx.createLinearGradient(pillX, pillY, pillX + pw, pillY + pillH);
  pglow.addColorStop(0, 'rgba(100, 180, 255, 0.15)');
  pglow.addColorStop(1, 'rgba(255, 255, 255, 0.08)');
  ctx.fillStyle = pglow;
  ctx.beginPath();
  ctx.moveTo(pillX + r, pillY);
  ctx.lineTo(pillX + pw - r, pillY);
  ctx.arc(pillX + pw - r, pillY + r, r, -Math.PI / 2, Math.PI / 2);
  ctx.lineTo(pillX + r, pillY + pillH);
  ctx.arc(pillX + r, pillY + r, r, Math.PI / 2, -Math.PI / 2);
  ctx.closePath();
  ctx.fill();

  // Pill border
  const pborder = ctx.createLinearGradient(pillX, pillY, pillX + pw, pillY + pillH);
  pborder.addColorStop(0, 'rgba(100, 180, 255, 0.3)');
  pborder.addColorStop(1, 'rgba(255, 255, 255, 0.12)');
  ctx.strokeStyle = pborder;
  ctx.lineWidth = 1;
  ctx.stroke();

  // Pill text
  ctx.fillStyle = 'rgba(255, 255, 255, 0.92)';
  ctx.font = pillFont;
  ctx.textAlign = 'center';
  ctx.fillText(tags[i], pillX + pw / 2, pillY + pillH / 2 + 1);
  pillX += pw + pillGap;
}

// ── Bottom info ──
ctx.textAlign = 'center';
ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
ctx.font = '400 16px "Malgun", sans-serif';
ctx.fillText('30+ 토픽  ·  100+ 코드 예제  ·  실전 프로젝트', width / 2, 440);

// ── Site URL ──
ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
ctx.font = '400 14px "Malgun", sans-serif';
ctx.fillText('webstudy.dreamitbiz.com', width / 2, 585);

// ── Bottom accent line (glowing) ──
const bottomGrad = ctx.createLinearGradient(0, 0, width, 0);
bottomGrad.addColorStop(0, 'rgba(0, 70, 200, 0.3)');
bottomGrad.addColorStop(0.3, '#4A8FE7');
bottomGrad.addColorStop(0.5, '#88BBFF');
bottomGrad.addColorStop(0.7, '#4A8FE7');
bottomGrad.addColorStop(1, 'rgba(0, 70, 200, 0.3)');

// Glow layer
ctx.fillStyle = bottomGrad;
ctx.fillRect(0, height - 6, width, 6);

// Top edge highlight
const topGrad = ctx.createLinearGradient(0, 0, width, 0);
topGrad.addColorStop(0, 'rgba(74, 143, 231, 0)');
topGrad.addColorStop(0.5, 'rgba(74, 143, 231, 0.4)');
topGrad.addColorStop(1, 'rgba(74, 143, 231, 0)');
ctx.fillStyle = topGrad;
ctx.fillRect(0, 0, width, 2);

// ── Vignette effect ──
const vignette = ctx.createRadialGradient(width / 2, height / 2, height * 0.4, width / 2, height / 2, height * 0.9);
vignette.addColorStop(0, 'rgba(0, 0, 0, 0)');
vignette.addColorStop(1, 'rgba(0, 0, 0, 0.25)');
ctx.fillStyle = vignette;
ctx.fillRect(0, 0, width, height);

// ── Save ──
const buffer = canvas.toBuffer('image/png');
const outPath = join(import.meta.dirname, '..', 'public', 'og-image.png');
writeFileSync(outPath, buffer);
console.log(`OG image saved: ${outPath} (${(buffer.length / 1024).toFixed(1)} KB)`);

// Helper: rounded rectangle
function roundRect(c, x, y, w, h, r) {
  c.beginPath();
  c.moveTo(x + r, y);
  c.lineTo(x + w - r, y);
  c.arc(x + w - r, y + r, r, -Math.PI / 2, 0);
  c.lineTo(x + w, y + h - r);
  c.arc(x + w - r, y + h - r, r, 0, Math.PI / 2);
  c.lineTo(x + r, y + h);
  c.arc(x + r, y + h - r, r, Math.PI / 2, Math.PI);
  c.lineTo(x, y + r);
  c.arc(x + r, y + r, r, Math.PI, -Math.PI / 2);
  c.closePath();
}

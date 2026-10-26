// Gera public/og/<id>.png (1200x630) a partir das capturas reais em src/assets/projects.
// Uso: node scripts/og-images.mjs   (só quando uma captura mudar; os PNGs ficam versionados)
import { mkdir, readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = fileURLToPath(new URL("..", import.meta.url));
const out = path.join(root, "public", "og");
const mark = await readFile(path.join(root, "docs", "visual-audit", "monograma", "gfc-mark.svg"));
// project id -> arquivo da captura
const shots = {
  aila: "aila.png",
  maximiza: "maximiza.png",
  pasteur: "pasteur.png",
  esports: "esports.png",
  jac: "jac.png",
  "lion-fanstone": "lion-fanstone.png",
  coneleste: "coneleste.png",
  "farm-xp": "farm-xp.png",
  "fanstone-legacy": "fanstone-legacy.png",
};

await mkdir(out, { recursive: true });
const W = 1200, H = 630, PAD = 56, BOX_W = W - PAD * 2, BOX_H = 420;

for (const [id, file] of Object.entries(shots)) {
  const shot = await sharp(path.join(root, "src", "assets", "projects", file))
    .resize(BOX_W, BOX_H, { fit: "cover", position: "top" })
    .composite([{ input: Buffer.from(`<svg width="${BOX_W}" height="${BOX_H}"><rect width="100%" height="100%" rx="16" ry="16"/></svg>`), blend: "dest-in" }])
    .png()
    .toBuffer();
  const logo = await sharp(mark).resize({ height: 72 }).png().toBuffer();
  const bg = Buffer.from(
    `<svg width="${W}" height="${H}"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#182936"/><stop offset="1" stop-color="#101b24"/></linearGradient></defs><rect width="100%" height="100%" fill="url(#g)"/></svg>`,
  );
  await sharp(bg)
    .composite([
      { input: shot, left: PAD, top: PAD },
      { input: logo, left: PAD, top: PAD + BOX_H + 40 },
    ])
    .png({ compressionLevel: 9 })
    .toFile(path.join(out, `${id}.png`));
  console.log("og", id);
}

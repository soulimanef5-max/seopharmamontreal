// Contrôle éditorial des articles du blogue, lancé avant chaque build.
// Bloque : chiffre (%, millions, milliards) sans lien source sur la même ligne.
// Avertit : tirets longs, caractères invisibles, tics de style IA.
// Exception assumée : ajouter <!-- chiffre-ok --> sur la ligne.
import { readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const DIR = 'src/content/blog';
const FIGURE = /\d[\d\s.,]*\s?(%|millions?\b|milliards?\b|billions?\b)/i;
const SOURCE = /\]\(https?:\/\//;
const INVISIBLE = /[\u200B-\u200F\u2028-\u202F\u2060-\u206F\uFEFF\u00AD]/;
const TICS = [
  'la bonne nouvelle', 'bonne nouvelle :', 'good news', "c'est précisément", 'formidable',
  'extraordinairement', 'en résumé', 'in summary', "here's the thing", 'delve', 'game-changer',
  'ne se contente pas de', 'not just about', 'dans le paysage', 'in today\'s',
];

let errors = 0;
let warnings = 0;
for (const file of readdirSync(DIR).filter((f) => f.endsWith('.md'))) {
  readFileSync(join(DIR, file), 'utf8').split('\n').forEach((line, i) => {
    const where = `${file}:${i + 1}`;
    if (FIGURE.test(line) && !SOURCE.test(line) && !line.includes('<!-- chiffre-ok -->')) {
      console.error(`ERREUR  ${where}  chiffre sans source : ${line.trim().slice(0, 120)}`);
      errors++;
    }
    if (/[\u2014\u2013]/.test(line)) { console.warn(`avert.  ${where}  tiret long`); warnings++; }
    if (INVISIBLE.test(line)) { console.warn(`avert.  ${where}  caractère invisible`); warnings++; }
    const lower = line.toLowerCase();
    for (const tic of TICS) {
      if (lower.includes(tic)) { console.warn(`avert.  ${where}  tic : « ${tic} »`); warnings++; }
    }
  });
}

console.log(`check-content : ${errors} erreur(s), ${warnings} avertissement(s)`);
if (errors) process.exit(1);

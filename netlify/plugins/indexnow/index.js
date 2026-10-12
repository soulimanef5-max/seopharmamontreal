// Après un déploiement de production réussi, soumet les URL du sitemap à IndexNow (Bing, Yandex…).
import { readFileSync } from 'node:fs';
import { join } from 'node:path';

const HOST = 'seopharmamontreal.com';
const KEY = 'b08016d8fec60ed378bf9a4fc71af2f7';

export const onSuccess = async ({ constants }) => {
  if (process.env.CONTEXT !== 'production') return;
  try {
    const xml = readFileSync(join(constants.PUBLISH_DIR, 'sitemap-0.xml'), 'utf8');
    const urlList = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
    const res = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify({ host: HOST, key: KEY, keyLocation: `https://${HOST}/${KEY}.txt`, urlList }),
    });
    console.log(`IndexNow : ${urlList.length} URL soumises, réponse ${res.status}`);
  } catch (err) {
    console.log(`IndexNow : échec non bloquant (${err.message})`);
  }
};

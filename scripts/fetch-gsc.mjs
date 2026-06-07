// Récupère les stats Google Search Console via l'API officielle et écrit gsc.json.
// Zéro dépendance : JWT RS256 signé avec node:crypto, fetch natif (Node 20+).
// Auth : service account dont l'email est ajouté comme utilisateur de la propriété GSC.
// Secret attendu : GCP_SA_KEY = contenu JSON de la clé du service account.

import crypto from 'node:crypto';
import { writeFileSync } from 'node:fs';

const SITE = 'sc-domain:seopharmamontreal.com';
const SCOPE = 'https://www.googleapis.com/auth/webmasters.readonly';

function b64url(input) {
  return Buffer.from(input).toString('base64url');
}

// ── Date helpers (UTC, YYYY-MM-DD) ─────────────────────────────────────────
function ymd(d) {
  return d.toISOString().slice(0, 10);
}
function daysAgo(n) {
  const d = new Date();
  d.setUTCDate(d.getUTCDate() - n);
  return ymd(d);
}

// ── 1) Charger le service account ──────────────────────────────────────────
const raw = process.env.GCP_SA_KEY;
if (!raw) {
  console.error('ERREUR : variable GCP_SA_KEY absente.');
  process.exit(1);
}
const sa = JSON.parse(raw);

// ── 2) Signer un JWT RS256 et obtenir un access token ──────────────────────
async function getAccessToken() {
  const now = Math.floor(Date.now() / 1000);
  const header = b64url(JSON.stringify({ alg: 'RS256', typ: 'JWT' }));
  const claim = b64url(JSON.stringify({
    iss: sa.client_email,
    scope: SCOPE,
    aud: 'https://oauth2.googleapis.com/token',
    iat: now,
    exp: now + 3600,
  }));
  const signature = crypto
    .createSign('RSA-SHA256')
    .update(`${header}.${claim}`)
    .sign(sa.private_key);
  const jwt = `${header}.${claim}.${Buffer.from(signature).toString('base64url')}`;

  const res = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
      assertion: jwt,
    }),
  });
  const json = await res.json();
  if (!json.access_token) {
    console.error('ERREUR token OAuth :', JSON.stringify(json));
    process.exit(1);
  }
  return json.access_token;
}

// ── 3) Interroger l'API Search Analytics ───────────────────────────────────
async function query(token, body) {
  const url = `https://searchconsole.googleapis.com/webmasters/v3/sites/${encodeURIComponent(SITE)}/searchAnalytics/query`;
  const res = await fetch(url, {
    method: 'POST',
    headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
  const json = await res.json();
  if (json.error) {
    console.error('ERREUR GSC API :', JSON.stringify(json.error));
    process.exit(1);
  }
  return json.rows || [];
}

// ── 4) Exécution ───────────────────────────────────────────────────────────
const token = await getAccessToken();

// GSC a ~2-3 j de latence : on prend une fenêtre large, la routine choisit le jour le plus récent non vide.
const [seriesByDate, byQuery, byPage] = await Promise.all([
  query(token, { startDate: daysAgo(9), endDate: daysAgo(1), dimensions: ['date'] }),
  query(token, { startDate: daysAgo(3), endDate: daysAgo(1), dimensions: ['date', 'query'], rowLimit: 100 }),
  query(token, { startDate: daysAgo(2), endDate: daysAgo(1), dimensions: ['date', 'page'], rowLimit: 100 }),
]);

const out = {
  generated_at: new Date().toISOString(),
  site: SITE,
  window: { start: daysAgo(9), end: daysAgo(1) },
  series_by_date: seriesByDate,
  by_query: byQuery,
  by_page: byPage,
};

writeFileSync('gsc.json', JSON.stringify(out, null, 2));
console.log(`OK — gsc.json écrit : ${seriesByDate.length} jours, ${byQuery.length} requêtes, ${byPage.length} pages.`);

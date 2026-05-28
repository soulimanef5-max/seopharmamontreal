/**
 * OG image generator — Satori + @resvg/resvg-js
 * Produit un PNG 1200×630 branded (navy #0F172A + gold #CA8A04)
 * Utilisé au build pour générer /og/<lang>/<slug>.png
 */
import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';
import { readFileSync } from 'fs';
import { join } from 'path';

// ── Fonts (lus depuis @fontsource/figtree installé localement) ────────────
const cwd = process.cwd();
// .woff (pas .woff2) — satori ne décompresse pas brotli nativement
const fontBold = readFileSync(join(cwd, 'node_modules/@fontsource/figtree/files/figtree-latin-700-normal.woff'));
const fontReg  = readFileSync(join(cwd, 'node_modules/@fontsource/figtree/files/figtree-latin-400-normal.woff'));

// ── Petit helper createElement (évite la dépendance React) ────────────────
function el(type: string, props: Record<string, unknown>, ...children: unknown[]): unknown {
  const flat = children.flat().filter((c) => c != null);
  return {
    type,
    key: null,
    props: {
      ...props,
      ...(flat.length ? { children: flat.length === 1 ? flat[0] : flat } : {}),
    },
  };
}

// ── Interface publique ────────────────────────────────────────────────────
export interface OgImageOptions {
  title:     string;
  subtitle?: string;
  tag?:      string;
  lang?:     'fr' | 'en';
}

// ── Générateur principal ──────────────────────────────────────────────────
export async function generateOgImage({
  title,
  subtitle,
  tag,
  lang = 'fr',
}: OgImageOptions): Promise<Buffer> {
  // Tronquer si trop long
  const h1 = title.length   > 65  ? title.slice(0, 62)   + '…' : title;
  const sub = (subtitle && subtitle.length > 110)
    ? subtitle.slice(0, 107) + '…'
    : subtitle ?? (lang === 'fr'
        ? 'Consultant SEO/GEO | Pharma · PSN · Dispositifs Médicaux | Montréal'
        : 'SEO/GEO Consultant | Pharma · NHP · Medical Devices | Montréal');

  const h1FontSize = h1.length > 48 ? 46 : 54;

  // ── Arbre visuel ─────────────────────────────────────────────────────────
  const root = el(
    'div',
    {
      style: {
        width: '1200px', height: '630px',
        display: 'flex', flexDirection: 'column',
        background: '#0F172A', fontFamily: 'Figtree',
        padding: '56px 64px 48px',
        position: 'relative', overflow: 'hidden',
      },
    },

    // Barre gold en haut
    el('div', { style: { position: 'absolute', top: 0, left: 0, right: 0, height: '5px', background: '#CA8A04' } }),

    // Cercle décoratif bas-droite
    el('div', {
      style: {
        position: 'absolute', bottom: '-130px', right: '-90px',
        width: '420px', height: '420px', borderRadius: '50%',
        background: 'rgba(202,138,4,0.05)',
        border: '1px solid rgba(202,138,4,0.08)',
      },
    }),

    // ── Ligne logo + tag ────────────────────────────────────────────────
    el(
      'div',
      { style: { display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '44px' } },

      // Badge "SF"
      el(
        'div',
        {
          style: {
            width: '44px', height: '44px', borderRadius: '10px',
            background: 'rgba(202,138,4,0.15)',
            border: '1.5px solid rgba(202,138,4,0.3)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '14px', fontWeight: '700', color: '#FCD34D',
            letterSpacing: '-0.01em',
          },
        },
        'SF',
      ),

      // Nom de marque
      el(
        'div',
        { style: { display: 'flex', fontSize: '20px', fontWeight: '700', letterSpacing: '-0.02em' } },
        el('span', { style: { color: 'white' } }, 'SEO'),
        el('span', { style: { color: '#CA8A04' } }, 'Pharma'),
        el('span', { style: { color: 'white' } }, 'Montréal'),
      ),

      // Pill tag (si fourni)
      ...(tag
        ? [el(
            'div',
            {
              style: {
                marginLeft: '8px', padding: '4px 14px',
                background: 'rgba(202,138,4,0.15)',
                border: '1px solid rgba(202,138,4,0.3)',
                borderRadius: '20px',
                fontSize: '13px', fontWeight: '700',
                color: '#FCD34D', letterSpacing: '0.06em',
              },
            },
            tag,
          )]
        : []),
    ),

    // ── Titre + sous-titre ───────────────────────────────────────────────
    el(
      'div',
      { style: { flex: '1', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '18px' } },
      el(
        'h1',
        {
          style: {
            margin: '0',
            fontSize: `${h1FontSize}px`,
            fontWeight: '700', color: 'white',
            lineHeight: '1.15', letterSpacing: '-0.025em',
          },
        },
        h1,
      ),
      el(
        'p',
        {
          style: {
            margin: '0',
            fontSize: '20px', fontWeight: '400',
            color: 'rgba(255,255,255,0.5)', lineHeight: '1.55',
          },
        },
        sub,
      ),
    ),

    // ── Pied : auteur + domaine ──────────────────────────────────────────
    el(
      'div',
      {
        style: {
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          paddingTop: '20px',
          borderTop: '1px solid rgba(255,255,255,0.1)',
        },
      },
      el(
        'div',
        { style: { display: 'flex', alignItems: 'center', gap: '10px' } },
        el(
          'div',
          {
            style: {
              width: '36px', height: '36px', borderRadius: '50%',
              background: 'rgba(202,138,4,0.2)',
              border: '1.5px solid rgba(202,138,4,0.4)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '12px', fontWeight: '700', color: '#FCD34D',
            },
          },
          'SF',
        ),
        el(
          'div',
          { style: { display: 'flex', flexDirection: 'column', gap: '2px' } },
          el('span', { style: { fontSize: '15px', fontWeight: '700', color: 'white' } }, 'Soulimane Farah'),
          el(
            'span',
            { style: { fontSize: '12px', color: 'rgba(255,255,255,0.45)' } },
            lang === 'fr'
              ? 'Consultant SEO/GEO Pharma · Montréal'
              : 'SEO/GEO Pharma Consultant · Montréal',
          ),
        ),
      ),
      el('span', { style: { fontSize: '14px', color: 'rgba(255,255,255,0.3)' } }, 'seopharmamontreal.com'),
    ),
  );

  // ── Rendu SVG → PNG ───────────────────────────────────────────────────
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const svg = await satori(root as any, {
    width:  1200,
    height: 630,
    fonts: [
      { name: 'Figtree', data: fontBold, weight: 700, style: 'normal' },
      { name: 'Figtree', data: fontReg,  weight: 400, style: 'normal' },
    ],
  });

  const resvg = new Resvg(svg, { fitTo: { mode: 'width', value: 1200 } });
  return Buffer.from(resvg.render().asPng());
}

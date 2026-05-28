/**
 * Route Astro statique : /og/<lang>/<slug>.png
 *
 * Génère au build une image OG PNG (1200×630) pour chaque page :
 *   /og/fr/home.png        → page d'accueil FR
 *   /og/en/home.png        → home page EN
 *   /og/fr/<post-id>.png   → article de blog FR
 *   /og/en/<post-id>.png   → article de blog EN
 */
import type { APIRoute, GetStaticPaths } from 'astro';
import { getCollection } from 'astro:content';
import { generateOgImage } from '../../utils/og-image';

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getCollection('blog');

  return [
    // ── Pages d'accueil ──────────────────────────────────────────────────
    {
      params: { path: 'fr/home' },
      props: {
        title:    'Expert SEO/GEO pour le secteur santé à Montréal',
        subtitle: 'Stratégie YMYL, E-E-A-T et visibilité LLM pour PME pharma, PSN et dispositifs médicaux.',
        lang:     'fr',
      },
    },
    {
      params: { path: 'en/home' },
      props: {
        title:    'Pharma & Health SEO/GEO Consultant in Montréal',
        subtitle: 'YMYL, E-E-A-T and LLM visibility strategy for pharma SMEs, NHPs and medical devices.',
        lang:     'en',
      },
    },
    // ── Articles de blog ─────────────────────────────────────────────────
    ...posts.map((post) => ({
      params: { path: `${post.data.lang}/${post.id}` },
      props: {
        title:    post.data.title,
        subtitle: post.data.description,
        lang:     post.data.lang,
        tag:      post.data.tags?.[0] as string | undefined,
      },
    })),
  ];
};

export const GET: APIRoute = async ({ props }) => {
  const { title, subtitle, lang, tag } = props as {
    title:     string;
    subtitle?: string;
    lang:      'fr' | 'en';
    tag?:      string;
  };

  const png = await generateOgImage({ title, subtitle, lang, tag });

  return new Response(png, {
    headers: {
      'Content-Type':  'image/png',
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  });
};

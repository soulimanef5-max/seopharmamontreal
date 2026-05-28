import { ui, defaultLang, type Lang } from './ui';

export function getLangFromUrl(url: URL): Lang {
  const [, first] = url.pathname.split('/');
  if (first === 'en') return 'en';
  return defaultLang;
}

export function useTranslations(lang: Lang) {
  return ui[lang];
}

/** Returns the alternate-language URL for a given page URL */
export function getAlternateUrl(url: URL): string {
  const lang = getLangFromUrl(url);
  const path = url.pathname;
  if (lang === 'en') {
    // Remove /en prefix
    return path.replace(/^\/en/, '') || '/';
  }
  // Add /en prefix
  return `/en${path === '/' ? '' : path}`;
}

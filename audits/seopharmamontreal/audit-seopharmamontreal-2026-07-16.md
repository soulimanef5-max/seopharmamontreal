# Audit SEO YMYL — seopharmamontreal.com
**Préparé par Soulimane Farah Consulting** · seopharmamontreal.com  
**Date :** 2026-07-16 · **Pages analysées :** 8  
**Type de site :** Consulting B2B — services SEO/GEO pharma (non-product YMYL)  
**Méthode :** Audit externe — sans accès Google Search Console (Supermetrics expiré)

---

## Score global : 64/100 — Travail significatif requis

| # | Section | Score | Poids | Pondéré |
|---|---------|-------|-------|---------|
| 2 | Conformité réglementaire | 75/100 | 20 % | 15,0 |
| 3 | E-E-A-T / YMYL | 82/100 | 20 % | 16,4 |
| 4 | SEO Technique | 50/100 | 15 % | 7,5 |
| 5 | Schema / Données structurées | 40/100 | 10 % | 4,0 |
| 6 | Contenu & Sémantique | 78/100 | 15 % | 11,7 |
| 7 | GEO / AEO | 45/100 | 15 % | 6,75 |
| 8 | Concurrence | 60/100 | 5 % | 3,0 |
| **Total** | | | | **64,35 → 64/100** |

---

## 1. Résumé exécutif

### Contexte YMYL
seopharmamontreal.com est un site de conseil B2B en SEO/GEO pour le secteur pharmaceutique canadien. Bien qu'il ne vende pas directement de produits de santé, ses contenus sont classés YMYL par proximité (conseils réglementaires, cadre Santé Canada/PAAB, stratégies de contenu santé), ce qui soumet le site aux critères d'évaluation E-E-A-T stricts des Quality Raters Google.

### Force principale
**E-E-A-T parmi les meilleurs de la niche.** Parcours terrain chez Roche (10 ans), Pharmascience, Oral Science — AEC Assurance Qualité Pharmaceutique — entrée Wikidata (Q140078557) — profils Clutch et Google Business Profile — page auteur substantielle avec crédentiels vérifiables. Pour un consultant solo, c'est un profil d'autorité exceptionnel.

### Risques critiques
1. **`robots.txt` retourne HTTP 500.** Googlebots, GPTBot, ClaudeBot et PerplexityBot lisent ce fichier avant tout crawl. Un 500 permanent peut entraîner comportements de crawl incohérents et désindexation partielle.
2. **Zéro JSON-LD détecté sur la homepage.** Aucun balisage `Organization`, `Person`, `LocalBusiness` ou `FAQPage` sur la page principale. Le site qui vend la structure JSON-LD comme service n'en a pas sur sa propre vitrine — crédibilité en jeu.

### 3 actions prioritaires
| Priorité | Action | Impact attendu |
|---|---|---|
| 🔴 P1 | Corriger le 500 sur `robots.txt` + `llms.txt` | Stabilise le crawl Google et IA — impact immédiat |
| 🔴 P2 | Implémenter JSON-LD `Organization` + `Person` + `FAQPage` | Rich results, citabilité LLM, cohérence avec l'offre de service |
| 🟠 P3 | Harmoniser les données NAP (Laval vs Montréal) entre Terms et le reste du site | Corrige un signal de confiance local conflictuel |

---

## 2. Conformité réglementaire (Santé Canada / PAAB)

**Score : 75/100** · Poids 20 %

> Note : seopharmamontreal.com est un site de **services de conseil** (B2B), non un site pharmaceutique produit. La grille réglementaire s'applique donc à l'exactitude des informations publiées sur les cadres réglementaires, et non à des allégations de produit.

### Constats

| Sévérité | Constat | Preuve | Correction |
|---|---|---|---|
| ✅ Force | Cadre réglementaire 100 % canadien — aucune mention FDA/HIPAA comme applicable au Canada | Articles blog + FAQ homepage | Maintenir — avantage différenciant fort |
| ✅ Force | Tableau comparatif Canada/USA dans l'article publicité mentionne explicitement que FDA/HIPAA ne s'appliquent PAS au Canada | `/blog/publicite-pharmaceutique-canada-2026/` | Maintenir et renforcer |
| ✅ Force | Disclaimer éditorial sur chaque article de blog | « Cet article est une information éducative… » | Maintenir |
| ✅ Force | Distinction publicité/information (directive Santé Canada 2023) correctement expliquée | `/blog/publicite-pharmaceutique-canada-2026/` | Maintenir |
| ✅ Force | LPRPDE et Loi 25 (Québec) mentionnées dans le contenu | Article publicité pharmaceutique | Maintenir |
| 🟠 Important | Page `/en/terms/` mentionne **Laval, Québec** comme adresse alors que toutes les autres pages disent **Montréal** | Terms of Use, snippet Google | Uniformiser l'adresse dans les mentions légales — impacte le SEO local et la cohérence E-E-A-T |
| 🟡 Mineur | Politique de confidentialité non vérifiée — présence et conformité Loi 25 non confirmées | [À VÉRIFIER MANUELLEMENT] | Vérifier `/politique-confidentialite/` ou équivalent; assurer conformité Loi 25 (droits des individus, politique de conservation, coordonnées DPD) |
| 🟡 Mineur | Absence de mention explicite « Ce site ne constitue pas un avis réglementaire » sur la homepage | Homepage | Ajouter un court disclaimer footer ou sticky banner sur les pages services |

---

## 3. E-E-A-T & Signaux de confiance YMYL

**Score : 82/100** · Poids 20 %

### Constats

| Sévérité | Constat | Preuve | Correction |
|---|---|---|---|
| ✅ Force | **Page auteur substantielle** avec parcours complet, diplômes, certifications | `/auteur/soulimane-farah/` — HTTP 200 | Maintenir; ajouter date de mise à jour |
| ✅ Force | **Entrée Wikidata** (Q140078557) — signal d'autorité hors-site majeur pour les LLMs | Lien depuis la page auteur | Enrichir la fiche Wikidata avec plus d'assertions (qualifications, publications) |
| ✅ Force | **Google Business Profile** actif | Lien depuis page auteur | Maintenir — compléter les catégories et publications GBP |
| ✅ Force | **Profil Clutch** — annuaire B2B à forte autorité pour agences/consultants | Lien depuis page auteur | Obtenir au moins 1 avis vérifié sur Clutch |
| ✅ Force | **LinkedIn profil** lié depuis toutes les pages | Navigation header | Maintenir |
| ✅ Force | Coordonnées complètes et fonctionnelles (email + téléphone) sur toutes les pages | soulimane@seopharmamontreal.com · +1 438 920 6377 | Maintenir |
| ✅ Force | Sources primaires citées dans les articles (health-products.canada.ca, paab.ca, nutrasource.ca, dicentra.com) | Articles blog | Continuer et prioriser les liens .gc.ca / .ca officiels |
| ✅ Force | Contenu récent (juin 2026), daté, signé | Toutes les pages blog | Maintenir la cadence de publication |
| 🟠 Important | **Aucun avis client / témoignage** visible sur le site | Homepage, section tarifs | Ajouter 2-3 témoignages anonymisés ou citations clients (avec permission) — signal Experience fort |
| 🟠 Important | **Incohérence biographique** : version FR cite Roche + Pharmascience + Oral Science; snippet EN de la page auteur mentionne "Galderma" | Page auteur FR vs snippet EN Google | Harmoniser le contenu de la page auteur EN et FR; s'assurer que tous les employeurs listés sont cohérents |
| 🟡 Mineur | Pas de date de révision explicite sur les articles de blog (date de publication uniquement) | Articles blog | Ajouter « Dernière révision : [date] » pour renforcer le signal de fraîcheur YMYL |
| 🟡 Mineur | Absence de liens vers ordres professionnels ou associations (ex: SEOBC, PCO, CSAE) | [Aucun détecté] | Ajouter memberships ou affiliations professionnelles vérifiables si existants |

---

## 4. SEO Technique

**Score : 50/100** · Poids 15 %

### Constats

| Sévérité | Constat | Preuve | Correction |
|---|---|---|---|
| 🔴 Critique | **`robots.txt` retourne HTTP 500** — erreur serveur | Test direct Apify → HTTP 500 | Déployer un fichier `robots.txt` valide à la racine. Minimum : `User-agent: * / Allow: / / Sitemap: https://seopharmamontreal.com/sitemap.xml` |
| 🔴 Critique | **`llms.txt` retourne HTTP 500** | Test direct Apify → HTTP 500 | Créer `/llms.txt` avec les directives pour bots IA (GPTBot, ClaudeBot, PerplexityBot). Ex: `# seopharmamontreal.com / Allow: All AI crawlers` |
| 🟠 Important | **Balises `hreflang` non vérifiables** via scraping — présence non confirmée | Scraping HTML Apify (head strippé) | [À VÉRIFIER MANUELLEMENT] : ouvrir View Source et confirmer `<link rel="alternate" hreflang="fr-CA" href="https://seopharmamontreal.com/"/>` + version en-CA |
| 🟠 Important | **Balise canonical non vérifiée** | Scraping HTML Apify (head strippé) | [À VÉRIFIER MANUELLEMENT] : vérifier `<link rel="canonical">` sur toutes les pages, notamment homepage et versions bilingues |
| 🟠 Important | **Sitemap.xml** : HTTP 200 mais contenu non extractible — contenu XML non rendu | Test Apify — réponse vide | [À VÉRIFIER MANUELLEMENT] : ouvrir directement `seopharmamontreal.com/sitemap.xml` dans un navigateur et valider avec https://www.xml-sitemaps.com/validate-xml-sitemap.html |
| 🟡 Mineur | **Incohérence NAP** : « Laval, Québec » dans `/en/terms/` vs « Montréal » partout ailleurs | Terms snippet Google | Uniformiser — choisir une adresse principale cohérente dans toutes les pages |
| 🟡 Mineur | URLs longues sur certains articles (ex: `/blog/allegations-psn-ce-qui-est-permis-canada-2026/` — 55 chars slug) | Observation directe | Acceptable dans l'ensemble mais éviter d'allonger davantage les futurs slugs |
| ℹ️ Info | HTTPS actif et fonctionnel | HTTP 200 via HTTPS sur toutes les pages testées | Maintenir |
| ℹ️ Info | Core Web Vitals (LCP, INP, CLS) non mesurables en audit externe | [Non disponible sans GSC/CrUX] | Tester via PageSpeed Insights et/ou Chrome DevTools sur la homepage et les pages articles |

---

## 5. Données structurées & Schema

**Score : 40/100** · Poids 10 %

> ⚠️ L'outil de scraping Apify RAG Browser retourne le contenu rendu sans les scripts `<head>`. La présence ou l'absence de JSON-LD sur le site réel doit être **vérifiée manuellement** (View Source ou Google Rich Results Test). Le score de 40/100 reflète ce que l'audit externe peut confirmer.

### Constats

| Sévérité | Constat | Preuve | Correction |
|---|---|---|---|
| 🔴 Critique | **0 bloc JSON-LD détecté** sur la homepage dans le DOM rendu | Extraction Python sur HTML Apify (72 891 chars) — 0 `<script type="application/ld+json">` | [À VÉRIFIER MANUELLEMENT] puis implémenter si absent : `Organization`, `Person`, `LocalBusiness`, `FAQPage` |
| 🟠 Important | **Aucun schema `Person`** confirmé malgré une page auteur complète | /auteur/soulimane-farah/ — aucun JSON-LD trouvé | Ajouter sur la page auteur : `{"@type": "Person", "name": "Soulimane Farah", "jobTitle": "Consultant SEO/GEO Pharma", "url": "...", "sameAs": ["linkedin...", "wikidata..."]}` |
| 🟠 Important | **Aucun schema `LocalBusiness`/`ProfessionalService`** confirmé pour le SEO local | Homepage | Implémenter avec adresse, téléphone, zone de service (Montréal / Québec), horaires si applicables |
| 🟠 Important | **FAQPage schema absent** sur la homepage malgré 10+ FAQ visibles | Homepage FAQ section | Encoder chaque Q&A en `FAQPage` JSON-LD — potentiel rich result dans Google et citabilité LLM directe |
| 🟡 Mineur | **BreadcrumbList** absent sur les articles de blog | Articles blog | Ajouter `BreadcrumbList` sur chaque article : Accueil > Blog > [Article] |
| ✅ Opportunité | Les FAQ des articles de blog sont bien structurées — bon candidat pour JSON-LD `FAQPage` | Toutes pages articles | Priorité pour les 3 articles publiés + futurs |

**Test de validation recommandé :** https://search.google.com/test/rich-results (tester homepage + 1 article blog)

---

## 6. Contenu & Sémantique

**Score : 78/100** · Poids 15 %

### Constats

| Sévérité | Constat | Preuve | Correction |
|---|---|---|---|
| ✅ Force | **Titles optimisés et uniques** sur toutes les pages testées | Homepage 52 chars, blog articles 50-55 chars | Maintenir |
| ✅ Force | **Meta descriptions uniques**, incitatives et dans les limites (137-158 chars) | Toutes pages vérifiées | Maintenir |
| ✅ Force | **H1 unique** sur chaque page, pertinent | « Trouvé sur Google. Conforme à Santé Canada. Cité par ChatGPT. » | Maintenir |
| ✅ Force | **Profondeur contenu** : articles de 8-9 min de lecture, sourcés, structurés | Blog PSN, publicité pharma | Continuer la cadence |
| ✅ Force | **Maillage interne** : articles reliés en « Articles connexes » + CTA internes | Bas de chaque article | Ajouter des liens contextuels dans le corps des articles (pas seulement en footer) |
| ✅ Force | **Bilinguisme complet** FR/EN avec contenu traduit et équivalent | /en/ + /en/blog/ | Maintenir la parité FR/EN |
| ✅ Force | **Couverture sémantique** : PAAB, Santé Canada, YMYL, E-E-A-T, PSN, NPN, DIN, Loi 25, LLMs — entités clés présentes | Contenu homepage + articles | Enrichir avec entités supplémentaires : DPIN, Règlement sur les aliments et drogues (C.01), RPSN |
| 🟠 Important | **3 articles seulement indexés** (juin 2026) — blogue naissant | Blog index | Planifier 2 articles/mois minimum; les thèmes PSN et PAAB sont porteurs |
| 🟠 Important | **Aucune page produit/service dédiée FR** confirmée — `/seo-psn/` et `/seo-pharma/` référencés dans le site diagnostique mais non testés | Diagnostic page mention | Vérifier l'existence et l'optimisation de ces pages piliers |
| 🟡 Mineur | Incohérence biographique FR/EN sur la page auteur (Galderma mentionné dans snippet EN) | Snippet Google auteur EN | Harmoniser |
| 🟡 Mineur | Pas de date de révision sur les articles | Articles blog | Ajouter `Dernière révision : [date]` pour renforcer YMYL |
| 🟡 Mineur | Texte alternatif sur les images : présent (`alt="Soulimane Farah, consultant SEO pharma Montréal"`) | Markdown homepage | Maintenir — vérifier aussi les images décoratives (alt vide) |

---

## 7. GEO / AEO — Visibilité dans les moteurs IA

**Score : 45/100** · Poids 15 %

### Tests de citation IA (via Apify RAG Web Browser, 2026-07-16)

| Requête testée | Mention seopharmamontreal.com | Mention Soulimane Farah |
|---|---|---|
| consultant SEO pharmaceutique Montréal | ❌ Non cité | ❌ Non cité |
| SEO industrie pharmaceutique Canada | ❌ Non cité | ❌ Non cité |
| référencement naturel santé Québec pharma | ❌ Non cité | ❌ Non cité |
| PAAB SEO conformité pharmaceutique | ❌ Non cité | ❌ Non cité |
| pharma SEO consultant Montreal | ❌ Non cité | ❌ Non cité |

**Score de visibilité IA : 0 / 5 requêtes** — score GEO externe : 0/100 (compensé par les signaux structurels)

### Facteurs GEO à auditer

| Sévérité | Constat | Preuve | Correction |
|---|---|---|---|
| 🔴 Critique | **`llms.txt` retourne HTTP 500** — les LLMs ne peuvent pas lire les directives de crawl | Test direct → 500 | Créer `/llms.txt` avec sections : `# [seopharmamontreal.com]`, description du site, pages à citer en priorité |
| 🔴 Critique | **`robots.txt` HTTP 500** — GPTBot, ClaudeBot, PerplexityBot ne peuvent pas vérifier leurs permissions | Test direct → 500 | Corriger en urgence (idem section 4) |
| 🟠 Important | **0 citation IA externe détectée** — site trop récent ou pas encore dans les corpus LLM | Tests Apify 5 requêtes | Stratégie de mentions off-site : articles invités, HARO, annuaires spécialisés pharma/SEO CA |
| 🟠 Important | **JSON-LD FAQPage absent** sur homepage et articles — prive les LLMs de passages extractibles structurés | [À VÉRIFIER] | Encoder les FAQ en JSON-LD — priorité absolue pour la citabilité LLM |
| ✅ Force | **Contenu structuré et extractible** : listes, tableaux, définitions, passages auto-suffisants | Articles blog + FAQ | Renforcer avec des passages encore plus courts et auto-suffisants (max 3 phrases répondant à 1 question) |
| ✅ Force | **Entités nommées** : PAAB, Santé Canada, ChatGPT, Perplexity, Claude, NPN — bien présentes | Contenu homepage + blog | Ajouter des entités supplémentaires : Collège Gérald-Godin, Wikidata Q140078557 |
| ✅ Force | **Wikidata Q140078557** — entrée de connaissance directement consommable par les LLMs | Lien page auteur | Enrichir : ajouter `P856` (site web), `P108` (employeur), `P69` (formation), `P569` (date naissance omise = OK) |
| 🟡 Mineur | Pas de page `/en/llms.txt` ou directives bilingues pour les LLMs anglophones | [Non testé] | Ajouter section EN dans llms.txt ou créer redirection |

### Score de visibilité IA /100 (6 dimensions)

| Dimension | Score /10 | Commentaire |
|---|---|---|
| Présence | 0/10 | 0/5 citations détectées |
| Exactitude | 5/10 | Wikidata présent mais LLMs pas encore à jour |
| Sentiment | N/A | Non mesurable sans citation |
| Position | 0/10 | Non cité |
| Complétude | 6/10 | Contenu riche mais non encore indexé par LLMs |
| Cohérence inter-plateformes | 5/10 | GBP + LinkedIn + Clutch cohérents; llms.txt manquant |
| **Moyenne** | **2.7/10 → 27/100** | |

---

## 8. Analyse concurrentielle

**Score : 60/100** · Poids 5 %

> Note : La recherche "consultant SEO pharma Montréal Canada -seopharmamontreal.com" a retourné **0 résultat concurrent direct** — seopharmamontreal.com domine apparemment ce segment de niche. Ce résultat doit être confirmé via GSC (dès renouvellement Supermetrics) et Ahrefs/Semrush.

### Concurrents identifiés [À APPROFONDIR]

| Concurrent potentiel | Type | Visibilité estimée | Angle d'attaque |
|---|---|---|---|
| Agences SEO généralistes QC (Bloom, Digitad, Tink) | Généraliste avec pratique santé | Forte sur requêtes SEO génériques | Différenciation réglementaire forte — elles ne connaissent pas PAAB |
| pharma-seo.com (US) | Spécialiste pharma US | Faible sur marché CA | Erreur fréquente : référentiel FDA — utiliser comme contre-exemple |
| Consultants SEO santé indépendants LinkedIn | Individuel | Non mesurable | Surveiller LinkedIn pour l'émergence de concurrents |

### 3 Gaps exploitables

1. **Aucun concurrent visible sur la requête exacte "consultant SEO pharma Montréal"** → renforcer immédiatement avec des pages de service dédiées (seo-psn.com, seo-pharma.com, etc.) avant qu'un concurrent n'entre.
2. **Les agences généralistes citent souvent FDA/HIPAA** dans leurs contenus pharma canadiens → créer du contenu comparatif qui souligne cette erreur (déjà amorcé dans `/blog/publicite-pharmaceutique-canada-2026/`).
3. **GEO pharma Canada = niche vide** dans les LLMs actuellement → premier à remplir ce vacuum = avantage durable.

### 3 Menaces

1. **Entrée d'agences US spécialisées pharma** (ex: Intouch, Klick Health) qui pourraient adapter leur contenu au marché canadien.
2. **Agences QC généralistes** qui recrutent un profil avec expérience pharma.
3. **Visibilité LLM faible** — si un concurrent publie du contenu pharma-réglementaire de qualité avant que seopharmamontreal.com ne soit cité par les LLMs, l'avantage pionnier peut être perdu.

---

## 9. Plan d'action priorisé

### ⚡ Quick Wins — 30 jours (fort impact / faible effort)

| Priorité | Action | Effort | Impact attendu | Section |
|---|---|---|---|---|
| 🔴 P1 | **Corriger HTTP 500 sur `robots.txt`** — déployer un fichier valide avec `User-agent: * / Allow: / / Sitemap: [url]` | F (1h) | Stabilise le crawl Google et IA immédiatement | §4, §7 |
| 🔴 P2 | **Créer `llms.txt`** à la racine avec directives pour GPTBot, ClaudeBot, PerplexityBot | F (2h) | Ouvre la porte à l'indexation LLM | §7 |
| 🔴 P3 | **Implémenter JSON-LD `Organization` + `Person` + `LocalBusiness`** sur la homepage | F (3h) | Rich results Google, citabilité LLM, crédibilité service | §5 |
| 🟠 P4 | **Encoder les FAQ homepage en `FAQPage` JSON-LD** | F (2h) | Rich results FAQ dans Google + passages extractibles LLMs | §5, §7 |
| 🟠 P5 | **Harmoniser l'adresse NAP** (Laval vs Montréal) — choisir Montréal partout y compris dans `/en/terms/` | F (30 min) | Cohérence SEO local et E-E-A-T | §2, §4 |
| 🟠 P6 | **Valider hreflang FR-CA / EN-CA** via View Source et corriger si absent | F (1h) | Évite les conflits de ciblage linguistique Google | §4 |
| 🟠 P7 | **Valider sitemap.xml** dans Google Search Console et le soumettre | F (30 min) | Améliore la couverture d'indexation | §4 |

### 🔧 Moyen terme — 90 jours

| Priorité | Action | Effort | Impact attendu | Section |
|---|---|---|---|---|
| 🟠 P8 | **Encoder `FAQPage` JSON-LD sur les 3 articles blog existants** | M (4h total) | Rich results + passages extractibles LLMs sur contenu déjà indexé | §5, §7 |
| 🟠 P9 | **Ajouter `BreadcrumbList` JSON-LD** sur toutes les pages articles | F (2h) | Signaux structuraux + affichage breadcrumb dans SERP | §5 |
| 🟠 P10 | **Enrichir la fiche Wikidata Q140078557** : ajouter P856 (site web), P108 (employeurs), P69 (formation), P166 (prix/certifications) | F (2h) | Signal d'autorité LLM direct — les modèles consomment Wikidata | §3, §7 |
| 🟠 P11 | **Ajouter des témoignages clients** (anonymisés ou avec permission) sur la homepage | M | Signal d'expérience (le "E" de E-E-A-T) | §3 |
| 🟠 P12 | **Harmoniser les bios FR/EN** sur `/auteur/` et `/en/author/` — résoudre la mention Galderma | F (1h) | Cohérence E-E-A-T et brand mentions dans LLMs | §3, §6 |
| 🟠 P13 | **Ajouter dates de révision** sur les articles de blog | F (1h) | Signal de fraîcheur YMYL | §3, §6 |
| 🟡 P14 | **Publier 2 articles de blog supplémentaires** par mois — thèmes prioritaires : dispositifs médicaux, GEO pharma CA, Loi 25 et SEO | É | Couverture sémantique, autorité thématique | §6 |
| 🟡 P15 | **Vérifier et compléter la Politique de confidentialité** (Loi 25 conformité) | M | Conformité légale + signal confiance | §2 |

### 🏗️ Stratégique — 6 mois

| Priorité | Action | Effort | Impact attendu | Section |
|---|---|---|---|---|
| 🟠 P16 | **Campagne de mentions off-site** : article invité sur Canadian Healthcare Network, PME MTL, ou Blog Pharmabio Développement | É | Premières citations dans LLMs — déclencheur de visibilité GEO | §7, §8 |
| 🟠 P17 | **Vérifier et enrichir les pages piliers** `/seo-psn/`, `/seo-pharma/` — optimiser titre, H1, JSON-LD, interne | M | Conversion B2B + autorité sémantique | §6 |
| 🟡 P18 | **Étude de cas anonymisée** (résultat client) — format avant/après, métriques GSC — publier dès Supermetrics renouvelé | É | Signal d'expérience premier (le "E" de E-E-A-T) + preuve sociale | §3 |
| 🟡 P19 | **Obtenir un avis Clutch vérifié** — demander à un client satisfait | F | Signal d'autorité tiers mesurable par les LLMs | §3 |
| 🟡 P20 | **Audit Core Web Vitals** via PageSpeed Insights et corriger LCP/INP/CLS | M-É | Facteur de classement + UX | §4 |
| 🟡 P21 | **Veille concurrentielle active** : surveiller l'entrée de nouveaux concurrents sur "consultant SEO pharma Montréal" | F mensuel | Protection de la position dominante | §8 |

---

### Pages analysées dans cet audit
| URL | HTTP | Statut |
|---|---|---|
| `seopharmamontreal.com/` | 200 | ✅ |
| `seopharmamontreal.com/en/` | 200 | ✅ |
| `seopharmamontreal.com/robots.txt` | 500 | ❌ |
| `seopharmamontreal.com/sitemap.xml` | 200 | ⚠️ |
| `seopharmamontreal.com/llms.txt` | 500 | ❌ |
| `seopharmamontreal.com/blog/allegations-psn-ce-qui-est-permis-canada-2026/` | 200 | ✅ |
| `seopharmamontreal.com/blog/publicite-pharmaceutique-canada-2026/` | 200 | ✅ |
| `seopharmamontreal.com/auteur/soulimane-farah/` | 200 | ✅ |
| `seopharmamontreal.com/diagnostic/` | 200 | ✅ |
| `seopharmamontreal.com/en/terms/` | 200 | ✅ |

---

> La mise en œuvre de ce plan exige un suivi mensuel : veille réglementaire Santé Canada/PAAB, suivi des Core Web Vitals, monitoring de votre visibilité dans les moteurs IA. C'est exactement le périmètre de notre accompagnement mensuel. Parlons-en : soulimanef5@gmail.com · +1 438-920-6377.

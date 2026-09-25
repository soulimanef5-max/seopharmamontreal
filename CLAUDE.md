# Principes de travail (agent)

> Ces principes privilégient la prudence sur la vitesse. Pour une tâche triviale, utiliser son jugement plutôt que d'appliquer la procédure à la lettre.

## 0. Mémoire à jour — À LIRE EN PREMIER
- Au démarrage, lire le fichier Google Drive **`memory_LATEST.md`** (nom fixe) : c'est la mémoire à jour de Soulimane Farah Consulting, source unique. Ignorer les vieux `memory_BACKUP_*` datés.
- Ne JAMAIS écrire de mémoire ni de données perso (prospects, sujet Galderma) dans ce repo : il est public. Ça vit uniquement dans le fichier Drive privé.

## 1. Réfléchir avant de coder
- Expliciter les hypothèses au lieu de choisir en silence entre plusieurs interprétations.
- Si une demande est ambiguë (URL FR `/` vs `/fr/`, paire hreflang inexistante…), poser la question AVANT d'écrire.
- Signaler un chemin plus simple s'il existe.

## 2. Simplicité d'abord
- Code minimal qui résout le problème. Rien de spéculatif.
- Pas d'abstraction, de flag ou de gestion de cas qui n'arriveront pas.
- Test : si ça peut être 2× plus court, réécrire.

## 3. Modifications chirurgicales
- Ne toucher qu'au strict nécessaire ; ne pas refactorer le code qui marche.
- Respecter le style existant des composants Astro même si je ferais autrement.
- Ne retirer que les imports/blocs rendus obsolètes par MON changement.

## 4. Exécution pilotée par l'objectif
- Transformer chaque tâche en critère vérifiable, puis boucler jusqu'à validation.
- Critère par défaut sur ce projet (SEO technique impeccable) :
  `npx astro build` local PUIS audit `dist/` — canonical auto-référent unique,
  hreflang réciproques fr-CA/en-CA/x-default, 1 H1/page, sitemap à jour.
- Grouper tous les fixes en UN seul push/déploiement (minutes Netlify serrées).

export const languages = { fr: 'Français', en: 'English' };
export const defaultLang = 'fr' as const;
export type Lang = keyof typeof languages;

export const ui = {
  fr: {
    nav: {
      services:    'Services',
      processus:   'Processus',
      faq:         'FAQ',
      tarifs:      'Tarifs',
      rdv:         'RDV',
      blog:        'Blog',
      contact:     'Contact',
      cta:         'Audit gratuit',
    },

    hero: {
      badge:    'Consultant SEO/GEO | Pharma · PSN · Dispositifs Médicaux | Montréal',
      title1:   'Dominez Google',
      title2:   'en SEO pharma',
      title3:   'à Montréal',
      subtitle: 'Stratégie SEO/GEO sur mesure pour PME pharma, PSN et dispositifs médicaux. Conforme E-E-A-T, YMYL et Santé Canada — visible sur Google ET les LLMs (ChatGPT, Perplexity, Claude).',
      cta1:     'Obtenir un audit gratuit',
      cta2:     'Voir les services',
      proof1:   '150+ points d\'audit vérifiés',
      proof2:   'Réponse garantie sous 24h',
      proof3:   'Sans engagement',
    },

    problem: {
      overline: 'Le défi que vous connaissez bien',
      title:    'Pourquoi votre site santé stagne — et comment y remédier',
      lead:     'Le secteur pharma est l\'un des plus exigeants pour Google. Voici les trois obstacles rencontrés systématiquement par les PME pharmaceutiques.',
      pains: [
        {
          title: 'Votre contenu santé est pénalisé',
          body:  'Google applique ses critères YMYL (Your Money Your Life) avec une sévérité accrue au secteur médical. Sans expertise E-E-A-T démontrée, vos pages perdent en autorité — même avec un bon contenu.',
        },
        {
          title: 'Vous perdez face aux grandes chaînes',
          body:  'Jean Coutu, Pharmaprix et les grandes enseignes dominent les résultats avec des budgets SEO massifs. Les PME pharma ont besoin d\'une stratégie locale et de niche pour s\'imposer durablement.',
        },
        {
          title: 'Votre présence GEO locale est invisible',
          body:  'Le Pack 3 de Google Maps génère 44 % des clics locaux. Sans optimisation Google Business Profile et stratégie GEO, vos clients cibles à Montréal ne vous trouvent tout simplement pas.',
        },
      ],
    },

    services: {
      overline: 'Mes services',
      title:    'Une stratégie SEO pensée pour le secteur santé',
      lead:     'Chaque service est conçu pour les contraintes réglementaires et les exigences qualité spécifiques au marché pharmaceutique canadien.',
      cta:      'En savoir plus',
      items: [
        {
          tag:   'Analyse',
          title: 'Audit SEO/GEO Pharma',
          desc:  'Analyse complète de votre visibilité Google et LLMs, conformité Santé Canada, feuille de route priorisée livrée en 7 jours.',
          features: [
            'Analyse Google Search Console + LLMs',
            'Audit conformité Santé Canada',
            'Benchmark 3 concurrents directs',
            'Visibilité ChatGPT, Perplexity, Claude',
            'Feuille de route priorisée (7 jours)',
            'Appel de présentation inclus (60 min)',
          ],
        },
        {
          tag:   'YMYL',
          title: 'Stratégie Contenu YMYL',
          desc:  'Contenu conforme Santé Canada et E-E-A-T Google pour PME pharma, PSN et dispositifs médicaux.',
          features: [
            'Stratégie de clusters thématiques santé',
            'Rédaction conforme Santé Canada & E-E-A-T',
            'Fiches PSN, dispositifs médicaux, Rx',
            'Optimisation sémantique médicale',
            'Maillage interne orienté conversion',
            'Suivi positions mensuelles',
          ],
        },
        {
          tag:   'LLM / GEO',
          title: 'Visibilité LLM (GEO/LLMO)',
          desc:  'Optimisation pour ChatGPT, Perplexity, Claude, Gemini. Structure extractible, FAQ schema, llms.txt.',
          features: [
            'Optimisation ChatGPT, Perplexity, Claude, Gemini',
            'Structure de contenu extractible',
            'FAQ schema markup (JSON-LD)',
            'Création du fichier llms.txt',
            'Brand mentions & signaux d\'autorité LLM',
            'Rapport de visibilité LLM mensuel',
          ],
        },
      ],
    },

    stats: {
      overline: 'Pourquoi ça compte',
      title:    'Le SEO médical, une discipline à part entière',
      lead:     'Des chiffres sectoriels qui expliquent pourquoi une stratégie YMYL spécialisée fait toute la différence.',
      items: [
        { value: '150+', label: 'points contrôlés lors de chaque audit SEO technique' },
        { value: '44 %', label: 'des clics locaux vont au Pack 3 Google Maps (source : Google)' },
        { value: '3–6',  label: 'mois pour des résultats organiques significatifs et durables' },
        { value: '24h',  label: 'délai de réponse garanti pour chaque demande de client' },
      ],
    },

    process: {
      overline: 'Comment ça fonctionne',
      title:    'Mon processus SEO/GEO pharma : audit, stratégie, résultats',
      lead:     'Pas de jargon inutile. Un processus structuré, transparent, conçu pour les équipes marketing pharma qui manquent de temps.',
      steps: [
        {
          number:      '01',
          title:       'Audit SEO complet',
          duration:    '2 jours ouvrables',
          desc:        'Analyse approfondie de votre site : technique, contenu, autorité, profil de liens et positionnement local. Vous recevez un rapport priorisé avec un plan d\'action clair.',
          deliverable: 'Rapport d\'audit + feuille de route',
        },
        {
          number:      '02',
          title:       'Stratégie personnalisée',
          duration:    '1 semaine',
          desc:        'Construction d\'une stratégie SEO/GEO adaptée à votre niche thérapeutique, vos objectifs de croissance et les contraintes réglementaires de votre secteur au Québec.',
          deliverable: 'Plan de contenu + architecture cible',
        },
        {
          number:      '03',
          title:       'Implémentation & suivi',
          duration:    'Mensuel',
          desc:        'Exécution rigoureuse, suivi des positions et du trafic, rapports mensuels transparents. Vous avez accès à votre tableau de bord en temps réel à tout moment.',
          deliverable: 'Dashboard live + rapport mensuel',
        },
      ],
    },

    faq: {
      overline: 'Questions fréquentes',
      title:    'FAQ — SEO pharma, YMYL et visibilité dans les LLMs',
      lead:     'Vous débutez avec le SEO ou vous avez des questions spécifiques au secteur pharma ? Voici les réponses honnêtes.',
      items: [
        {
          q: 'Pourquoi un spécialiste SEO pharma plutôt qu\'une agence généraliste ?',
          a: 'Le secteur santé est classé YMYL (Your Money Your Life) par Google, ce qui implique des règles d\'évaluation bien plus strictes que pour un site e-commerce classique. Un consultant spécialisé comprend les contraintes de Santé Canada, le vocabulaire médical, les limites légales de la publicité pharmaceutique et les signaux E-E-A-T attendus. Une agence généraliste peut créer du contenu inadapté qui nuit à votre positionnement.',
        },
        {
          q: 'En combien de temps peut-on espérer des résultats ?',
          a: 'Le SEO est un investissement à moyen terme. Les premières améliorations techniques sont visibles en quelques semaines, mais des résultats organiques significatifs (progression de positions, augmentation du trafic) se constatent généralement entre 3 et 6 mois. Chaque cas est unique selon la concurrence, l\'état actuel du site et le budget alloué.',
        },
        {
          q: 'Qu\'est-ce que le contenu YMYL et en quoi me concerne-t-il ?',
          a: 'YMYL (Your Money Your Life) désigne les pages dont le contenu peut affecter la santé, la sécurité financière ou le bien-être des utilisateurs. Google y applique des critères d\'évaluation particulièrement rigoureux. Tout site pharmaceutique, de santé naturelle ou de dispositifs médicaux est concerné. Un contenu mal structuré ou sans démonstration d\'expertise peut être pénalisé même s\'il est techniquement correct.',
        },
        {
          q: 'Puis-je annuler mon forfait mensuel à tout moment ?',
          a: 'Oui. Aucun contrat longue durée n\'est imposé. Les forfaits mensuels fonctionnent sur la base d\'un préavis de 30 jours. Mon objectif est que vous restiez parce que les résultats parlent d\'eux-mêmes, pas parce qu\'un contrat vous y oblige.',
        },
      ],
    },

    about: {
      overline: 'À propos',
      title:    'Le seul consultant SEO/GEO à Montréal qui connaît vos SOPs',
      p1:       'Roche Pharmaceuticals (10 ans), Pharmascience, Galderma, Oral Science — BPF/GMP, PSN, dispositifs médicaux. Ensuite 10 ans en marketing stratégique digital. Bilingue FR/EN.',
      credentials: [
        'AEC Assurance Qualité Pharmaceutique — Collège Gérald-Godin',
        'Certifié Auditeur Qualité',
        'Certifié AI-driven SEO',
        'Certifié Google Analytics 4',
      ],
      p2:       'Ce que ça veut dire pour vous :',
      skills: [
        'Une stratégie SEO qui performe sur Google',
        'Un contenu conforme aux exigences de Santé Canada',
        'Une visibilité dans les LLMs (ChatGPT, Claude, Perplexity)',
        'Zéro apprentissage de votre secteur à vos frais',
      ],
      stats: [
        { value: '10 ans',  label: 'Roche · Pharmascience · Galderma · Oral Science' },
        { value: 'AEC AQ',  label: 'Assurance Qualité Pharmaceutique' },
        { value: 'GA4 + AI', label: 'Certifié Google Analytics & AI SEO' },
        { value: 'FR / EN', label: 'Bilingue · Montréal, QC' },
      ],
      quote:       '"Pendant que vos concurrents expliquent ce qu\'est un PSN à leur agence SEO, je travaille déjà sur votre stratégie."',
      quoteAuthor: '— Soulimane Farah',
      cta:         'Discuter de votre projet',
    },

    pricing: {
      overline: 'Tarifs transparents',
      title:    'Tarifs SEO/GEO Pharma — Forfaits flexibles sans engagement',
      lead:     'Pas de contrats longue durée cachés. Facturation mensuelle, annulation à tout moment. Tous les prix sont en CAD et excluent les taxes applicables.',
      note:     'Tous les forfaits incluent un appel de démarrage. Besoin d\'une offre sur mesure ?',
      noteLink: 'Contactez-moi',
      plans: [
        {
          name:     'Audit SEO Santé',
          price:    '997',
          period:   'one-time',
          tag:      null,
          desc:     'Point de départ idéal pour comprendre l\'état de votre visibilité et obtenir une feuille de route concrète.',
          features: [
            'Audit technique complet (150+ points)',
            'Analyse de contenu YMYL',
            'Audit du profil GEO local',
            'Analyse concurrentielle (3 compétiteurs)',
            'Rapport priorisé avec plan d\'action',
            'Appel de présentation (60 min)',
          ],
          cta:      'Commander l\'audit',
          featured: false,
        },
        {
          name:     'SEO Mensuel',
          price:    '1 497',
          period:   '/mois',
          tag:      'Le plus populaire',
          desc:     'Accompagnement continu pour des résultats durables. Idéal pour les PME pharma en croissance.',
          features: [
            'Tout ce qui est dans l\'audit',
            'Optimisation technique mensuelle',
            '2 articles de contenu YMYL/mois',
            'Gestion Google Business Profile',
            'Suivi positions hebdomadaire',
            'Dashboard en temps réel',
            'Rapport mensuel détaillé',
          ],
          cta:      'Démarrer maintenant',
          featured: true,
        },
        {
          name:     'Accompagnement Premium',
          price:    '2 997',
          period:   '/mois',
          tag:      null,
          desc:     'Stratégie SEO intégrale avec gestion complète de votre présence digitale santé.',
          features: [
            'Tout ce qui est dans le SEO Mensuel',
            '4 articles + 1 page de service/mois',
            'Stratégie de netlinking santé',
            'Optimisation complète du site',
            'Veille concurrentielle active',
            'Support prioritaire 48h',
            'Accès consultant illimité',
          ],
          cta:      'Demander un devis',
          featured: false,
        },
      ],
    },

    contact: {
      overline:  'Première consultation gratuite',
      title:     'Prêt à dominer Google dans votre secteur santé ?',
      subtitle:  'Partagez votre situation en 2 minutes. Je vous reviens avec une analyse préliminaire et des recommandations concrètes — sans engagement.',
      promises: [
        'Réponse garantie sous 24h ouvrables',
        'Analyse préliminaire offerte (valeur 250 $)',
        'Aucun engagement contractuel dès le départ',
        'Confidentialité totale de vos données',
      ],
      phone:        '+1 438 920 6377',
      directLabel:  'Contact direct',
      form: {
        title:       'Obtenir mon audit SEO gratuit',
        subtitle:    'Remplissez ce formulaire — je vous contacte sous 24h.',
        prenom:      'Prénom',
        nom:         'Nom',
        entreprise:  'Entreprise',
        email:       'Courriel professionnel',
        secteur:     'Secteur d\'activité',
        secteurOpts: [
          'Pharmacie indépendante',
          'Produits de santé naturels',
          'Dispositifs médicaux',
          'Clinique / Cabinet médical',
          'Autre secteur santé',
        ],
        message:     'Votre situation actuelle',
        messagePh:   'Décrivez brièvement votre défi SEO ou vos objectifs de visibilité...',
        submit:      'Obtenir mon audit gratuit',
        privacy:     'Vos données sont confidentielles et ne seront jamais partagées.',
      },
    },

    footer: {
      description: 'Consultant SEO/GEO freelance spécialisé dans le secteur pharma, santé naturelle et dispositifs médicaux à Montréal, Québec.',
      navTitle:    'Navigation',
      servicesTitle: 'Services',
      copyright:   '© {year} SEO Pharma Montréal. Tous droits réservés.',
      privacy:     'Politique de confidentialité',
      terms:       'Conditions d\'utilisation',
    },

    booking: {
      overline: 'Prise de rendez-vous',
      title:    'Réservez votre consultation gratuite',
      lead:     'Choisissez un créneau disponible directement dans mon agenda. Appel de 30 minutes, sans engagement, pour discuter de votre projet SEO/GEO.',
    },

    blog: {
      overline:   'Blog',
      title:      'Blog SEO Pharma — Guides et analyses pour le secteur santé',
      lead:       'Articles, guides et analyses sur le SEO médical, le contenu YMYL et la visibilité locale pour les entreprises pharmaceutiques au Québec.',
      readMore:   'Lire l\'article',
      backHome:   '← Retour à l\'accueil',
      backBlog:   '← Retour au blog',
      minRead:    'min de lecture',
      noArticles: 'Aucun article pour l\'instant. Revenez bientôt.',
    },
  },

  // ─────────────────────────────────── ENGLISH ──────────────────────────────
  en: {
    nav: {
      services:  'Services',
      processus: 'Process',
      faq:       'FAQ',
      tarifs:    'Pricing',
      rdv:       'Book',
      blog:      'Blog',
      contact:   'Contact',
      cta:       'Free Audit',
    },

    hero: {
      badge:    'SEO/GEO Consultant | Pharma · NHP · Medical Devices | Montréal',
      title1:   'Dominate Google',
      title2:   'in pharma SEO',
      title3:   'in Montréal',
      subtitle: 'Custom SEO/GEO strategy for pharma SMEs, NHPs and medical devices. E-E-A-T, YMYL and Health Canada compliant — visible on Google AND LLMs (ChatGPT, Perplexity, Claude).',
      cta1:     'Get a Free Audit',
      cta2:     'View Services',
      proof1:   '150+ audit points verified',
      proof2:   '24h guaranteed response',
      proof3:   'No commitment',
    },

    problem: {
      overline: 'A challenge you know well',
      title:    'Why your health website stagnates — and how to fix it',
      lead:     'The pharma sector is one of the most demanding for Google. Here are the three obstacles consistently faced by pharmaceutical SMEs.',
      pains: [
        {
          title: 'Your health content is penalized',
          body:  'Google applies its YMYL (Your Money Your Life) criteria with heightened scrutiny in the medical sector. Without demonstrated E-E-A-T expertise, your pages lose authority — even with good content.',
        },
        {
          title: 'You\'re losing to large pharmacy chains',
          body:  'Jean Coutu, Pharmaprix and large chains dominate results with massive SEO budgets. Pharma SMEs need a local and niche strategy to establish lasting presence.',
        },
        {
          title: 'Your local GEO presence is invisible',
          body:  'Google Maps Pack 3 generates 44% of local clicks. Without Google Business Profile optimization and a GEO strategy, your target customers in Montréal simply can\'t find you.',
        },
      ],
    },

    services: {
      overline: 'My services',
      title:    'An SEO strategy built for the health sector',
      lead:     'Each service is designed around the regulatory constraints and quality requirements specific to the Canadian pharmaceutical market.',
      cta:      'Learn more',
      items: [
        {
          tag:   'Analysis',
          title: 'Pharma SEO/GEO Audit',
          desc:  'Full visibility analysis on Google and LLMs, Health Canada compliance, prioritized roadmap delivered in 7 days.',
          features: [
            'Google Search Console + LLMs analysis',
            'Health Canada compliance audit',
            '3 direct competitor benchmark',
            'Visibility in ChatGPT, Perplexity, Claude',
            'Prioritized roadmap (7 days)',
            'Presentation call included (60 min)',
          ],
        },
        {
          tag:   'YMYL',
          title: 'YMYL Content Strategy',
          desc:  'Health Canada and Google E-E-A-T compliant content for pharma SMEs, NHPs and medical devices.',
          features: [
            'Health topic cluster strategy',
            'Health Canada & E-E-A-T compliant writing',
            'NHP, medical device, Rx product pages',
            'Medical semantic optimization',
            'Conversion-focused internal linking',
            'Monthly position tracking',
          ],
        },
        {
          tag:   'LLM / GEO',
          title: 'LLM Visibility (GEO/LLMO)',
          desc:  'Optimization for ChatGPT, Perplexity, Claude, Gemini. Extractable structure, FAQ schema, llms.txt.',
          features: [
            'ChatGPT, Perplexity, Claude, Gemini optimization',
            'Extractable content structure',
            'FAQ schema markup (JSON-LD)',
            'llms.txt file creation',
            'Brand mentions & LLM authority signals',
            'Monthly LLM visibility report',
          ],
        },
      ],
    },

    stats: {
      overline: 'Why it matters',
      title:    'Medical SEO: a discipline of its own',
      lead:     'Industry figures that explain why a specialized YMYL strategy makes all the difference.',
      items: [
        { value: '150+', label: 'points checked in every technical SEO audit' },
        { value: '44%',  label: 'of local clicks go to Google Maps Pack 3 (source: Google)' },
        { value: '3–6',  label: 'months to significant, lasting organic results' },
        { value: '24h',  label: 'guaranteed response time for every client request' },
      ],
    },

    process: {
      overline: 'How it works',
      title:    'My Pharma SEO/GEO Process: Audit, Strategy, Results',
      lead:     'No unnecessary jargon. A structured, transparent process designed for pharma marketing teams with limited time.',
      steps: [
        {
          number:      '01',
          title:       'Full SEO Audit',
          duration:    '2 business days',
          desc:        'In-depth analysis of your site: technical, content, authority, link profile and local positioning. You receive a prioritized report with a clear action plan.',
          deliverable: 'Audit report + roadmap',
        },
        {
          number:      '02',
          title:       'Custom Strategy',
          duration:    '1 week',
          desc:        'Building an SEO/GEO strategy tailored to your therapeutic niche, your growth objectives and the regulatory constraints of your sector in Québec.',
          deliverable: 'Content plan + target architecture',
        },
        {
          number:      '03',
          title:       'Implementation & Monitoring',
          duration:    'Monthly',
          desc:        'Rigorous execution, position and traffic tracking, transparent monthly reports. You have access to your real-time dashboard at any time.',
          deliverable: 'Live dashboard + monthly report',
        },
      ],
    },

    faq: {
      overline: 'Frequently asked questions',
      title:    'FAQ — Pharma SEO, YMYL and LLM Visibility',
      lead:     'New to SEO or do you have questions specific to the pharma sector? Here are honest answers.',
      items: [
        {
          q: 'Why a pharma SEO specialist rather than a general agency?',
          a: 'The health sector is classified as YMYL (Your Money Your Life) by Google, which means much stricter evaluation rules than for a standard e-commerce site. A specialized consultant understands Health Canada constraints, medical vocabulary, pharmaceutical advertising legal limits, and expected E-E-A-T signals. A general agency may create inappropriate content that harms your rankings.',
        },
        {
          q: 'How long before we can expect results?',
          a: 'SEO is a medium-term investment. Initial technical improvements are visible within weeks, but significant organic results (position growth, traffic increase) are generally seen between 3 and 6 months. Each case is unique depending on competition, current site state and allocated budget.',
        },
        {
          q: 'What is YMYL content and how does it affect me?',
          a: 'YMYL (Your Money Your Life) refers to pages whose content can affect users\' health, financial security or well-being. Google applies particularly rigorous evaluation criteria to these. Any pharmaceutical, natural health, or medical device website is concerned. Poorly structured content or content lacking demonstrated expertise can be penalized even if technically correct.',
        },
        {
          q: 'Can I cancel my monthly plan at any time?',
          a: 'Yes. No long-term contracts are imposed. Monthly plans work on a 30-day notice basis. My goal is for you to stay because results speak for themselves, not because a contract forces you to.',
        },
      ],
    },

    about: {
      overline: 'About',
      title:    'The only SEO/GEO consultant in Montréal who knows your SOPs',
      p1:       'Roche Pharmaceuticals (10 years), Pharmascience, Galderma, Oral Science — GMP, NHP, medical devices. Then 10 years in strategic digital marketing. Bilingual FR/EN.',
      credentials: [
        'AEC Pharmaceutical Quality Assurance — Collège Gérald-Godin',
        'Certified Quality Auditor',
        'Certified AI-driven SEO',
        'Certified Google Analytics 4',
      ],
      p2:       'What this means for you:',
      skills: [
        'An SEO strategy that performs on Google',
        'Content compliant with Health Canada requirements',
        'Visibility in LLMs (ChatGPT, Claude, Perplexity)',
        'Zero learning curve about your sector — at your expense',
      ],
      stats: [
        { value: '10 yrs',   label: 'Roche · Pharmascience · Galderma · Oral Science' },
        { value: 'AEC AQ',   label: 'Pharmaceutical Quality Assurance' },
        { value: 'GA4 + AI', label: 'Certified Google Analytics & AI SEO' },
        { value: 'FR / EN',  label: 'Bilingual · Montréal, QC' },
      ],
      quote:       '"While your competitors are explaining what an NHP is to their SEO agency, I\'m already working on your strategy."',
      quoteAuthor: '— Soulimane Farah',
      cta:         'Discuss your project',
    },

    pricing: {
      overline: 'Transparent pricing',
      title:    'Pharma SEO/GEO Pricing — Flexible, No Long-Term Contract',
      lead:     'No hidden long-term contracts. Monthly billing, cancel anytime. All prices in CAD, taxes not included.',
      note:     'All plans include an onboarding call. Need a custom offer?',
      noteLink: 'Contact me',
      plans: [
        {
          name:     'Health SEO Audit',
          price:    '997',
          period:   'one-time',
          tag:      null,
          desc:     'The ideal starting point to understand the state of your visibility and get a concrete roadmap.',
          features: [
            'Full technical audit (150+ points)',
            'YMYL content analysis',
            'Local GEO profile audit',
            'Competitive analysis (3 competitors)',
            'Prioritized report with action plan',
            'Presentation call (60 min)',
          ],
          cta:      'Order the audit',
          featured: false,
        },
        {
          name:     'Monthly SEO',
          price:    '1,497',
          period:   '/month',
          tag:      'Most popular',
          desc:     'Ongoing support for lasting results. Ideal for growing pharma SMEs.',
          features: [
            'Everything in the audit',
            'Monthly technical optimization',
            '2 YMYL content articles/month',
            'Google Business Profile management',
            'Weekly position tracking',
            'Real-time dashboard',
            'Detailed monthly report',
          ],
          cta:      'Get started',
          featured: true,
        },
        {
          name:     'Premium Support',
          price:    '2,997',
          period:   '/month',
          tag:      null,
          desc:     'Full SEO strategy with complete management of your health digital presence.',
          features: [
            'Everything in Monthly SEO',
            '4 articles + 1 service page/month',
            'Health link building strategy',
            'Complete site optimization',
            'Active competitive monitoring',
            'Priority support 48h',
            'Unlimited consultant access',
          ],
          cta:      'Request a quote',
          featured: false,
        },
      ],
    },

    contact: {
      overline:  'Free first consultation',
      title:     'Ready to dominate Google in your health sector?',
      subtitle:  'Share your situation in 2 minutes. I\'ll get back to you with a preliminary analysis and concrete recommendations — no commitment.',
      promises: [
        '24h guaranteed response (business hours)',
        'Complimentary preliminary analysis (value $250)',
        'No contractual commitment from the start',
        'Total confidentiality of your data',
      ],
      phone:        '+1 438 920 6377',
      directLabel:  'Direct contact',
      form: {
        title:       'Get my free SEO audit',
        subtitle:    'Fill out this form — I\'ll contact you within 24h.',
        prenom:      'First name',
        nom:         'Last name',
        entreprise:  'Company',
        email:       'Professional email',
        secteur:     'Industry',
        secteurOpts: [
          'Independent pharmacy',
          'Natural health products',
          'Medical devices',
          'Clinic / Medical practice',
          'Other health sector',
        ],
        message:     'Your current situation',
        messagePh:   'Briefly describe your SEO challenge or visibility goals...',
        submit:      'Get my free audit',
        privacy:     'Your data is confidential and will never be shared.',
      },
    },

    footer: {
      description:   'Freelance SEO/GEO consultant specializing in pharma, natural health and medical devices in Montréal, Québec.',
      navTitle:      'Navigation',
      servicesTitle: 'Services',
      copyright:     '© {year} SEO Pharma Montréal. All rights reserved.',
      privacy:       'Privacy Policy',
      terms:         'Terms of Use',
    },

    booking: {
      overline: 'Book a call',
      title:    'Schedule your free consultation',
      lead:     'Pick a time directly in my calendar. A 30-minute call, no commitment, to discuss your SEO/GEO project.',
    },

    blog: {
      overline:   'Blog',
      title:      'Pharma SEO Blog — Guides & Analysis for the Health Sector',
      lead:       'Articles, guides and analysis on medical SEO, YMYL content and local visibility for pharmaceutical businesses in Québec.',
      readMore:   'Read article',
      backHome:   '← Back to home',
      backBlog:   '← Back to blog',
      minRead:    'min read',
      noArticles: 'No articles yet. Check back soon.',
    },
  },
} as const;

export type UI = typeof ui;

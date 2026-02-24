// Données centralisées pour la page Contrôle d'accès
export const accessControlData = {
  // Hero section
  hero: {
    badge: "Sécurité Avancée",
    title: "Contrôle d'accès",
    highlight: "sécurisé & moderne",
    subheading:
      "Protégez votre entreprise avec une solution complète de contrôle d'accès. Gestion centralisée, biométrie avancée et suivi en temps réel pour une sécurité optimale.",
    ctaButtons: [
      {
        id: 1,
        label: "Demander une démo",
        link: "/devis",
        type: "primary",
      },
      {
        id: 2,
        label: "Nous contacter",
        link: "/contact",
        type: "secondary",
      },
    ],
    trustIndicators: [
      {
        id: 1,
        stat: "3500+",
        label: "Clients satisfaits",
      },
      {
        id: 2,
        stat: "24/7",
        label: "Support disponible",
      },
    ],
  },

  // Présentation section
  presentation: {
    badge: "QU'EST-CE QUE LE CONTRÔLE D'ACCÈS",
    title: "Une solution complète pour",
    highlight: "sécuriser votre entreprise",
    description:
      "Le contrôle d'accès est bien plus qu'une simple porte verrouillée. C'est un système intégré qui vous permet de :",
    keyPoints: [
      {
        id: 1,
        title: "Sécuriser vos locaux",
        description:
          "Contrôlez qui entre et sort, à quel moment, et depuis quel point d'accès",
      },
      {
        id: 2,
        title: "Protéger vos données",
        description:
          "Accès restreint aux zones sensibles et audit complet de tous les mouvements",
      },
      {
        id: 3,
        title: "Automatiser les tâches",
        description:
          "Intégration avec le pointage, les alertes et les rapports automatisés",
      },
      {
        id: 4,
        title: "Respecter la conformité",
        description:
          "Traçabilité complète et rapports de conformité pour vos auditeurs",
      },
    ],
    footer:
      "Optima, partenaire intégrateur de solutions de pointe depuis plus de 10 ans, vous propose une offre globale et modulable.",
  },

  // Features section
  features: [
    {
      id: 1,
      icon: "⏰",
      title: "Gestion des droits d'accès",
      description:
        "Contrôlez précisément qui accède à quels espaces et à quels moments",
    },
    {
      id: 2,
      icon: "📊",
      title: "Audit en temps réel",
      description:
        "Suivez chaque accès avec enregistrement détaillé des mouvements",
    },
    {
      id: 3,
      icon: "🔍",
      title: "Reconnaissance biométrique",
      description:
        "Empreinte, reconnaissance faciale, iris pour une sécurité maximale",
    },
    {
      id: 4,
      icon: "💳",
      title: "Badges et cartes magnétiques",
      description:
        "Authentification par cartes RFID ou magnétiques sécurisées",
    },
    {
      id: 5,
      icon: "📋",
      title: "Rapports détaillés",
      description:
        "Analytics avancées et rapports exportés pour vos analyses",
    },
    {
      id: 6,
      icon: "⚠️",
      title: "Alertes et notifications",
      description:
        "Alertes en temps réel en cas d'accès non autorisé ou d'anomalie. SMS et emails pour réagir immédiatement",
    },
  ],

  // Biometric section
  biometric: {
    badge: "TECHNOLOGIES BIOMÉTRIQUES",
    title: "Les dernières technologies",
    highlight: "au service de votre sécurité",
    description:
      "Choix multiples adaptés à vos besoins : de la simple carte à la reconnaissance facial avancée",
    technologies: [
      {
        id: 1,
        icon: "👤",
        title: "Reconnaissance faciale",
        description:
          "Technologie IA dernière génération pour une identification en 0.5 secondes",
      },
      {
        id: 2,
        icon: "👆",
        title: "Écran tactile",
        description:
          "Les lecteurs modernes offrent une ergonomie optimale pour les utilisateurs",
      },
      {
        id: 3,
        icon: "🔐",
        title: "Code PIN",
        description:
          "Authentification basique mais efficace, combinée aux autres méthodes",
      },
      {
        id: 4,
        icon: "👌",
        title: "Empreinte digitale",
        description:
          "Lecteur optique ou capacitif pour une sécurité renforcée et unique",
      },
      {
        id: 5,
        icon: "👁️",
        title: "Reconnaissance iris",
        description:
          "L'une des plus hautes formes de reconnaissance biométrique disponible",
      },
      {
        id: 6,
        icon: "💳",
        title: "Carte RFID",
        description:
          "Cartes sans contact rapides à traiter et sécurisées contre la duplication",
      },
    ],
    comparisonTable: [
      {
        id: 1,
        technology: "Reconnaissance faciale",
        security: 5,
        speed: 5,
        cost: 4,
        usage: "Premium",
      },
      {
        id: 2,
        technology: "Empreinte digitale",
        security: 5,
        speed: 4,
        cost: 3,
        usage: "Standard",
      },
      {
        id: 3,
        technology: "Reconnaissance iris",
        security: 5,
        speed: 4,
        cost: 5,
        usage: "Premium",
      },
      {
        id: 4,
        technology: "Carte RFID",
        security: 3,
        speed: 4,
        cost: 2,
        usage: "Économique",
      },
      {
        id: 5,
        technology: "Code PIN",
        security: 2,
        speed: 3,
        cost: 5,
        usage: "Basique",
      },
    ],
    expertTip: {
      title: "Conseil d'expert",
      icon: "💡",
      content:
        "Nous recommandons l'utilisation multi-facteurs : combinez par exemple la reconnaissance faciale avec un code PIN pour une sécurité optimale sans ralentir l'accès.",
    },
    optimaAdvantage: {
      title: "Avantage Optima",
      icon: "✓",
      content:
        "Optima propose l'intégration de tous ces systèmes dans une plateforme centralisée unique, simple à gérer et scalable selon vos besoins.",
    },
  },

  // Partners section
  partners: [
    {
      id: 1,
      name: "IDEMIA",
      title: "Solutions Biométriques Avancées",
      description:
        "Leader mondial de la biométrie, IDEMIA fournit les solutions de reconnaissance faciale et d'identification les plus fiables du marché.",
      features: [
        "Reconnaissance faciale sans contact",
        "Identification multi-biométrique",
        "Technologie AI dernière génération",
        "Certification internationale",
      ],
      color: "from-blue-500",
      logo: "🏢",
    },
    {
      id: 2,
      name: "ZKTeco",
      title: "Pointeuses et Terminaux Intelligents",
      description:
        "Spécialiste des solutions d'identification biométrique, ZKTeco propose des pointeuses et terminaux robustes et fiables adaptés à tous les secteurs.",
      features: [
        "Lecteur d'empreinte digitale haute résolution",
        "Terminaux tout-en-un 4G/WiFi",
        "Batterie longue durée",
        "Interface intuitive et multi-langues",
      ],
      color: "from-green-500",
      logo: "📱",
    },
    {
      id: 3,
      name: "MorphoManager",
      title: "Gestion Centralisée et Intégrée",
      description:
        "Solution de gestion complète des accès biométriques, MorphoManager offre une plateforme unifiée pour contrôler tous vos points d'accès.",
      features: [
        "Cloud sécurisé ou on-premise",
        "Gestion centralisée multi-sites",
        "Synchronisation temps réel",
        "Rapports analytics détaillés",
      ],
      color: "from-purple-500",
      logo: "🔐",
    },
  ],
  partnersIntegration: [
    {
      id: 1,
      icon: "🔗",
      title: "Interopérabilité",
      description:
        "Toutes nos solutions travaillent ensemble de manière transparente grâce à des APIs standardisées",
    },
    {
      id: 2,
      icon: "📊",
      title: "Gestion centralisée",
      description:
        "Pilotez tous vos points d'accès depuis un unique tableau de bord",
    },
    {
      id: 3,
      icon: "🚀",
      title: "Scalabilité",
      description:
        "Commencez petit et agrandissez facilement selon l'évolution de vos besoins",
    },
  ],
  partnersFooter:
    "Optima en tant que revendeur agréé assure l'installation, la configuration, la formation et le support technique pour garantir une intégration réussie. Nos équipes sont certifiées par tous nos partenaires.",

  // Benefits section
  benefits: [
    {
      id: 1,
      icon: "🛡️",
      title: "Sécurité renforcée",
      description:
        "Protégez vos collaborateurs, vos données et vos équipements contre les accès non autorisés",
      stats: "99.9% de fiabilité",
    },
    {
      id: 2,
      icon: "✓",
      title: "Conformité légale",
      description:
        "Respectez les normes RGPD, ISO27001 et vos obligations légales d'audit et de traçabilité",
      stats: "Audit complet",
    },
    {
      id: 3,
      icon: "⚡",
      title: "Productivité accrue",
      description:
        "Réduction des délais d'accès, gestion automatisée des droits, moins de réclamations",
      stats: "+30% efficacité",
    },
    {
      id: 4,
      icon: "💰",
      title: "Économies d'échelle",
      description:
        "Réduction des coûts de sécurité, moins de pertes matérielles, gestion RH simplifiée",
      stats: "-40% coûts",
    },
    {
      id: 5,
      icon: "🔓",
      title: "Flexibilité d'accès",
      description:
        "Gestion granulaire des droits : par zones, par horaires, par rôles, par projets",
      stats: "Multi-critères",
    },
    {
      id: 6,
      icon: "📞",
      title: "Support 24/7",
      description:
        "Notre équipe Optima est disponible pour techniquer, résoudre vos issues et améliorer votre système",
      stats: "Assistance garantie",
    },
  ],
  useCases: [
    {
      id: 1,
      sector: "Industrie & Manufactures",
      icon: "🏭",
      benefits: [
        "Contrôle strict des zones critiques",
        "Suivi de la présence par poste",
        "Alertes en temps réel",
      ],
    },
    {
      id: 2,
      sector: "Finance & Assurance",
      icon: "🏦",
      benefits: [
        "Conformité légale renforcée",
        "Audit de sécurité continu",
        "Rapports de conformité automatisés",
      ],
    },
    {
      id: 3,
      sector: "Santé & Pharmaceutique",
      icon: "⚕️",
      benefits: [
        "Accès aux zones stériles contrôlé",
        "Traçabilité des mouvements",
        "Respect de l'hygiène et sécurité",
      ],
    },
    {
      id: 4,
      sector: "Centre de Données",
      icon: "🖥️",
      benefits: [
        "Multi-facteurs obligatoires",
        "Journalisation détaillée",
        "Alertes d'accès anormal",
      ],
    },
    {
      id: 5,
      sector: "Bâtiments Intelligents",
      icon: "🏢",
      benefits: [
        "Intégration IoT complète",
        "Gestion unifié des accès",
        "Économies d'énergie",
      ],
    },
    {
      id: 6,
      sector: "Enseignement",
      icon: "🎓",
      benefits: [
        "Sécurité des élèves",
        "Gestion des présences",
        "Alertes aux parents",
      ],
    },
  ],
  roi: {
    title: "Un retour sur investissement rapide",
    description: "Avec notre solution :",
    advantages: [
      {
        id: 1,
        statistic: "Réduction de 90%",
        description:
          "des événements de sécurité dues aux accès non autorisés",
      },
      {
        id: 2,
        statistic: "Économies de 40%",
        description: "sur les coûts de sécurité physique",
      },
      {
        id: 3,
        statistic: "Augmentation de 25%",
        description: "de la productivité",
      },
      {
        id: 4,
        statistic: "ROI atteint en 18 mois",
        description: "en moyenne",
      },
    ],
    comparison: {
      traditional: {
        label: "Système traditionnel",
        amount: "100k€/an",
        percentage: 100,
      },
      optima: {
        label: "Notre solution Optima",
        amount: "60k€/an",
        percentage: 60,
      },
      savings: {
        label: "Économies",
        amount: "40k€",
      },
    },
  },

  // CTA section
  cta: {
    title: "Prêt à sécuriser votre entreprise ?",
    description:
      "Rejoignez les 3500+ entreprises qui font confiance à Optima pour leur contrôle d'accès. Bénéficiez d'une consultation gratuite et d'une démo personnalisée adaptée à vos besoins.",
    buttons: [
      {
        id: 1,
        label: "Demander une démo gratuite",
        link: "/devis",
        type: "primary",
      },
      {
        id: 2,
        label: "Parler avec nos experts",
        link: "/contact",
        type: "secondary",
      },
    ],
    trustBadges: [
      {
        id: 1,
        icon: "✓",
        label: "Gratuit et sans engagement",
      },
      {
        id: 2,
        icon: "💬",
        label: "Réponse en 24h",
      },
      {
        id: 3,
        icon: "🎯",
        label: "Conseil personnalisé",
      },
    ],
    processSteps: [
      {
        id: 1,
        step: "1",
        title: "Diagnostic",
        description:
          "Évaluation gratuite de votre infrastructure actuelle",
      },
      {
        id: 2,
        step: "2",
        title: "Proposition",
        description:
          "Solution sur-mesure avec devis transparent et compatible",
      },
      {
        id: 3,
        step: "3",
        title: "Mise en place",
        description:
          "Implémentation complète avec support et formation",
      },
    ],
    finalInfo: {
      about: {
        title: "Qui sommes-nous ?",
        icon: "📋",
        content:
          "Optima est partenaire intégrateur agréé depuis plus de 10 ans. Nous accompagnons les entreprises tunisiennes et internationales dans leur transformation digitale et leur sécurité.",
      },
      why: {
        title: "Pourquoi Optima ?",
        icon: "🌟",
        bullets: [
          "Expertise réelle et certifiée",
          "Support local 24/7",
          "Solutions complètes et intégrées",
        ],
      },
    },
  },
};

export const DISCIPLINES = [
  {
    title: "Lagree",
    slug: "lagree",
    description:
      "Notre méthode signature sur Megaformer. Mouvements lents et contrôlés pour un renforcement profond de tout le corps.",
    duration: "50 min",
    intensity: "Haute",
    image: "/images/photo1.png",
  },
  {
    title: "Sculpt",
    slug: "sculpt",
    description:
      "Entraînement full-body axé sur le tonus et la définition musculaire. Cardio léger et résistance ciblée.",
    duration: "45 min",
    intensity: "Moyenne-Haute",
    image: "/images/photo2.png",
  },
  {
    title: "Flow",
    slug: "flow",
    description:
      "Fusion de Pilates et de yoga inspiré. Mobilité, respiration et fluidité pour compléter vos séances intenses.",
    duration: "45 min",
    intensity: "Douce",
    image: "/images/photo3.png",
  },
];

export const PRICING = [
  {
    name: "Découverte",
    slug: "decouverte",
    price: "25€",
    period: "la séance",
    features: ["1 séance à l'unité", "Accès à tous les cours", "Tapis et équipement fournis"],
    highlighted: false,
    cta: "Réserver",
  },
  {
    name: "Essentiel",
    slug: "essentiel",
    price: "189€",
    period: "/ mois",
    features: [
      "8 séances / mois",
      "Réservation 7j à l'avance",
      "Accès à tous les cours",
      "Suivi personnalisé",
    ],
    highlighted: true,
    cta: "Commencer",
  },
  {
    name: "Illimité",
    slug: "illimite",
    price: "289€",
    period: "/ mois",
    features: [
      "Séances illimitées",
      "Réservation prioritaire",
      "Accès à tous les cours",
      "Suivi personnalisé",
      "1 séance offerte pour un ami",
    ],
    highlighted: false,
    cta: "Rejoindre",
  },
];

export const FONDATRICE = {
  name: "Lilas",
  role: "Fondatrice & Instructrice Certifiée Lagree",
  bio: [
    "Passionnée par le mouvement et le bien-être, Lilas a fondé Origin Studio Lagree avec une conviction : rendre le Pilates Lagree accessible tout en conservant son exigence.",
    "Formée aux États-Unis à la méthode Lagree Fitness, elle combine rigueur technique et approche bienveillante pour accompagner chaque corps — quel que soit son niveau.",
  ],
  quote:
    "Le Lagree n'est pas qu'un entraînement. C'est une discipline qui transforme la posture, l'esprit et la façon de se mouvoir au quotidien.",
  images: ["/images/fondatrice1.jpeg", "/images/fondatrice2.jpeg"],
};

export const NAV_LINKS = [
  { label: "Cours", href: "#disciplines" },
  { label: "Tarifs", href: "#tarifs" },
  { label: "Notre histoire", href: "#fondatrice" },
  { label: "Contact", href: "#contact" },
];

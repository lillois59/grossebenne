import type { LucideIcon } from "lucide-react";
import {
  Truck,
  HardHat,
  Trash2,
  Leaf,
  Factory,
  Recycle,
  TreeDeciduous,
  Package,
  Layers,
  Sparkles,
  Zap,
  CalendarClock,
} from "lucide-react";

export type Service = {
  slug: string;
  icon: LucideIcon;
  title: string;
  description: string;
  details: string[];
};

export const services: Service[] = [
  {
    slug: "location-bennes",
    icon: Truck,
    title: "Location de bennes",
    description:
      "Des bennes de 3 à 30 m³ livrées sur votre chantier, adaptées au volume et à la nature de vos déchets.",
    details: [
      "Large gamme de contenants",
      "Livraison et reprise planifiées",
      "Bon d'enlèvement et traçabilité",
    ],
  },
  {
    slug: "collecte-dechets",
    icon: Trash2,
    title: "Collecte de déchets",
    description:
      "Enlèvement régulier ou ponctuel de vos déchets professionnels, avec orientation vers les filières adaptées.",
    details: ["Tournées programmées", "Rotation multi-bennes", "Suivi des bordereaux"],
  },
  {
    slug: "dechets-chantier",
    icon: HardHat,
    title: "Déchets de chantier",
    description:
      "Gestion complète des déchets de construction, gros œuvre et second œuvre, du décaissement à l'évacuation.",
    details: ["Gravats et inertes", "Terres et matériaux de démolition", "Conformité réglementaire"],
  },
  {
    slug: "dechets-melanges",
    icon: Layers,
    title: "Déchets mélangés",
    description:
      "Une solution simple lorsque le tri en amont n'est pas possible : nous assurons le tri en centre agréé.",
    details: ["Tri post-collecte", "Traçabilité du taux de valorisation", "Solution rapide à mettre en œuvre"],
  },
  {
    slug: "dechets-verts",
    icon: Leaf,
    title: "Déchets verts",
    description:
      "Évacuation de déchets d'espaces verts pour les particuliers, paysagistes et collectivités.",
    details: ["Branchages et souches", "Tontes et résidus de taille", "Valorisation en compostage"],
  },
  {
    slug: "dechets-industriels",
    icon: Factory,
    title: "Déchets industriels",
    description:
      "Prise en charge de déchets industriels banals (DIB) pour sites de production et plateformes logistiques.",
    details: ["Contrats de collecte réguliers", "Registres de suivi", "Interlocuteur dédié"],
  },
  {
    slug: "ferraille-metaux",
    icon: Recycle,
    title: "Ferraille et métaux",
    description: "Collecte séparée des métaux ferreux et non ferreux en vue de leur valorisation.",
    details: ["Bennes dédiées métaux", "Filière de recyclage", "Bordereau de pesée"],
  },
  {
    slug: "bois",
    icon: TreeDeciduous,
    title: "Bois",
    description: "Bennes dédiées au bois de chantier, palettes et menuiseries en vue de leur valorisation énergétique.",
    details: ["Bois classe A, B, C", "Broyage et valorisation", "Réduction du volume enfoui"],
  },
  {
    slug: "cartons-emballages",
    icon: Package,
    title: "Cartons et emballages",
    description: "Collecte des cartons, plastiques et emballages générés sur site ou en zone logistique.",
    details: ["Compacteurs disponibles", "Filière papier-carton", "Fréquences adaptées à l'activité"],
  },
  {
    slug: "platre",
    icon: Layers,
    title: "Plâtre",
    description: "Benne dédiée au plâtre pour respecter les filières de valorisation spécifiques à ce matériau.",
    details: ["Séparation obligatoire du plâtre", "Filière de recyclage dédiée", "Conseil sur site"],
  },
  {
    slug: "encombrants",
    icon: Sparkles,
    title: "Encombrants",
    description: "Évacuation de mobilier, équipements hors d'usage et objets volumineux.",
    details: ["Débarras ponctuel", "Mobilier et électroménager", "Chantiers de rénovation"],
  },
  {
    slug: "nettoyage-chantier",
    icon: Sparkles,
    title: "Nettoyage de fin de chantier",
    description: "Remise en état et évacuation des déchets résiduels avant réception de chantier.",
    details: ["Débarras complet", "Intervention rapide", "Chantier livré propre"],
  },
  {
    slug: "livraison-express",
    icon: Zap,
    title: "Livraison express",
    description: "Mise à disposition d'une benne sous 24 à 48h pour les besoins urgents.",
    details: ["Disponibilité sous conditions", "Priorité chantiers en cours", "Contact direct avec l'exploitation"],
  },
  {
    slug: "collecte-planifiee",
    icon: CalendarClock,
    title: "Collecte planifiée",
    description: "Un calendrier de rotations défini avec vous pour lisser les coûts et sécuriser vos délais.",
    details: ["Rotations hebdomadaires ou mensuelles", "Facturation prévisible", "Adapté aux chantiers longs"],
  },
];
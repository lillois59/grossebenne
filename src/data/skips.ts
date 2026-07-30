// data/skips.ts
export const skips = [
  {
    id: 1,
    size: "3m³",
    price: "295 €",
    description: "Idéal pour les petites rénovations",
    dimensions: "1.8 × 1.4 × 1.2 m",
    tag: "Salle de bain",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=400&q=80",
    suitableFor: ["Salle de bain", "Petite rénovation", "Vidage maison"],
  },
  {
    id: 2,
    size: "8m³",
    price: "459 €",
    description: "Parfait pour les travaux moyens",
    dimensions: "3.6 × 1.8 × 1.5 m",
    tag: "Maison",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=400&q=80",
    suitableFor: ["Travaux moyens", "Rénovation maison", "Chantier"],
  },
  {
    id: 3,
    size: "10m³",
    price: "525 €",
    description: "Pour les rénovations complètes",
    dimensions: "4.2 × 2.0 × 1.6 m",
    tag: "Rénovation",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=400&q=80",
    suitableFor: ["Rénovation complète", "Grands projets", "Maison"],
  },
  {
    id: 4,
    size: "15m³",
    price: "685 €",
    description: "Pour les grands chantiers",
    dimensions: "5.0 × 2.2 × 1.8 m",
    tag: "Construction",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=400&q=80",
    suitableFor: ["Grands chantiers", "Construction", "Démolition"],
  },
  {
    id: 5,
    size: "30m³",
    price: "1 185 €",
    description: "Pour les projets industriels",
    dimensions: "6.0 × 2.4 × 2.2 m",
    tag: "Industrie",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=400&q=80",
    suitableFor: ["Industrie", "Grands travaux", "Démolition"],
  },
];

export const pricing = [
  { size: "3m³", mixed: "295 €", gravel: "275 €" },
  { size: "8m³", mixed: "459 €", gravel: "349 €" },
  { size: "10m³", mixed: "525 €", gravel: "395 €" },
  { size: "15m³", mixed: "685 €", gravel: "—" },
  { size: "30m³", mixed: "1 185 €", gravel: "—" },
];

export const skipCategories = [
  { id: "mixed", label: "Déchets mélangés" },
  { id: "gravel", label: "Gravats" },
  { id: "green", label: "Déchets verts" },
  { id: "wood", label: "Bois" },
  { id: "metal", label: "Métaux" },
  { id: "cardboard", label: "Carton" },
  { id: "plaster", label: "Plâtre" },
  { id: "industrial", label: "Déchets industriels" },
];

export const skipFeatures = [
  { id: "delivery", label: "Livraison express" },
  { id: "collection", label: "Collecte programmée" },
  { id: "recycling", label: "Valorisation des déchets" },
  { id: "certified", label: "Filières agréées" },
];
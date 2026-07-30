export type PriceItem = {
  skip: string;
  wasteType: string;
  price: string;
};

export const pricing: PriceItem[] = [
  { skip: "Benne 3 m³", wasteType: "Déchets mélangés", price: "295 € HT" },
  { skip: "Benne 3 m³", wasteType: "Gravats", price: "275 € HT" },
  { skip: "Benne 8 m³", wasteType: "Déchets mélangés", price: "459 € HT" },
  { skip: "Benne 8 m³", wasteType: "Gravats", price: "349 € HT" },
  { skip: "Benne 10 m³", wasteType: "Déchets mélangés", price: "525 € HT" },
  { skip: "Benne 10 m³", wasteType: "Gravats", price: "395 € HT" },
  { skip: "Benne 15 m³", wasteType: "Déchets mélangés", price: "685 € HT" },
  { skip: "Benne 30 m³", wasteType: "Déchets mélangés", price: "1 185 € HT" },
];
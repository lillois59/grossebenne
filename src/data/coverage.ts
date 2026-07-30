export type CoverageZone = {
  name: string;
  description: string;
  cities: string[];
};


export const coverage: CoverageZone[] = [

  {
    name: "Pas-de-Calais",
    description:
      "Notre secteur historique avec livraison de bennes pour chantiers, artisans et particuliers.",
    cities: [
      "Arras",
      "Lens",
      "Béthune",
      "Calais",
      "Liévin"
    ],
  },


  {
    name: "Nord",
    description:
      "Interventions pour entreprises du bâtiment, industriels et collectivités.",
    cities: [
      "Lille",
      "Douai",
      "Valenciennes",
      "Cambrai",
      "Maubeuge"
    ],
  },


  {
    name: "Somme",
    description:
      "Solutions adaptées aux besoins ponctuels et réguliers de collecte.",
    cities: [
      "Amiens",
      "Abbeville",
      "Péronne"
    ],
  },


  {
    name: "Hauts-de-France",
    description:
      "Une couverture régionale pour accompagner vos projets de rénovation et construction.",
    cities: [
      "Nord",
      "Pas-de-Calais",
      "Somme",
      "Oise",
      "Aisne"
    ],
  },

];
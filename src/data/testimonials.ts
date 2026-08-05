export type Testimonial = {
  name: string;
  role: string;
  quote: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Julien Mercier",
    role: "Conducteur de travaux, entreprise de gros Å“uvre",
    quote:
      "Les bennes arrivent au crÃ©neau annoncÃ© et les bordereaux nous sont transmis sans avoir Ã  les rÃ©clamer. C'est ce qu'on demande sur un chantier qui tourne.",
  },
  {
    name: "Aline Devos",
    role: "ParticuliÃ¨re, rÃ©novation Ã  Saint-Laurent-Blangy",
    quote:
      "J'ai eu ma benne de 8 mÂ³ le lendemain de ma demande. L'Ã©quipe m'a bien expliquÃ© ce que je pouvais mettre dedans avant la livraison.",
  },
  {
    name: "Marc Fontaine",
    role: "GÃ©rant, entreprise de dÃ©molition",
    quote:
      "On travaille avec NordBennes.fr sur plusieurs chantiers en rotation. La facturation est claire et on a un seul interlocuteur pour tout coordonner.",
  },
  {
    name: "Sophie Ledoux",
    role: "Responsable technique, collectivitÃ© locale",
    quote:
      "Le suivi des tonnages et la traÃ§abilitÃ© des filiÃ¨res nous permettent de tenir nos objectifs de valorisation sans y passer un temps fou.",
  },
];

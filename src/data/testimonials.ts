export type Testimonial = {
  name: string;
  role: string;
  quote: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Julien Mercier",
    role: "Conducteur de travaux, entreprise de gros œuvre",
    quote:
      "Les bennes arrivent au créneau annoncé et les bordereaux nous sont transmis sans avoir à les réclamer. C'est ce qu'on demande sur un chantier qui tourne.",
  },
  {
    name: "Aline Devos",
    role: "Particulière, rénovation à Saint-Laurent-Blangy",
    quote:
      "J'ai eu ma benne de 8 m³ le lendemain de ma demande. L'équipe m'a bien expliqué ce que je pouvais mettre dedans avant la livraison.",
  },
  {
    name: "Marc Fontaine",
    role: "Gérant, entreprise de démolition",
    quote:
      "On travaille avec DIB-TRADE sur plusieurs chantiers en rotation. La facturation est claire et on a un seul interlocuteur pour tout coordonner.",
  },
  {
    name: "Sophie Ledoux",
    role: "Responsable technique, collectivité locale",
    quote:
      "Le suivi des tonnages et la traçabilité des filières nous permettent de tenir nos objectifs de valorisation sans y passer un temps fou.",
  },
];
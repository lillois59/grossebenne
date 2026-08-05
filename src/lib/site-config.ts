export const siteConfig = {
  name: "NordBennes.fr | by Renovimo",
  shortName: "NordBennes.fr",

  tagline:
    "Votre partenaire pour la location de bennes et la valorisation des dÃ©chets.",

  url: "https://nordbennes.fr",

  phone: "+33 6 42 24 08 41",
  phoneHref: "+33642240841",

  emergencyPhone: "06 00 00 00 00",

  email: "contact@nordbennes.fr",

  address: {
    line1: "9 Place des HÃ©ros",
    postalCode: "62000",
    city: "Arras",
    country: "France",
  },

  hours: [
    {
      day: "Lundi â€“ Vendredi",
      value: "7h30 â€“ 18h00",
    },
    {
      day: "Samedi",
      value: "8h00 â€“ 12h00",
    },
    {
      day: "Dimanche",
      value: "FermÃ©",
    },
  ],

  social: {
    instagram: "",
    linkedin: "",
    tiktok: "",
  },

  siren: "000 000 000",

  legalForm: "Entreprise individuelle",

};

export type SiteConfig = typeof siteConfig;

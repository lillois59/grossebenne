export const siteConfig = {
  name: "DIB-TRADE Hauts-de-France",
  shortName: "DIB-TRADE",

  tagline:
    "Votre partenaire pour la location de bennes et la valorisation des déchets.",

  url: "https://www.dib-trade-hdf.fr",

  phone: "03 21 00 00 00",
  phoneHref: "+33321000000",

  emergencyPhone: "06 00 00 00 00",

  email: "contact@dib-trade-hdf.fr",

  address: {
    line1: "9 Place des Héros",
    postalCode: "62000",
    city: "Arras",
    country: "France",
  },

  hours: [
    {
      day: "Lundi – Vendredi",
      value: "7h30 – 18h00",
    },
    {
      day: "Samedi",
      value: "8h00 – 12h00",
    },
    {
      day: "Dimanche",
      value: "Fermé",
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
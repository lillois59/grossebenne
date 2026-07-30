export const siteConfig = {
  name: "DIB-TRADE Hauts-de-France",
  shortName: "DIB-TRADE",
  tagline: "Votre partenaire pour la location de bennes et la valorisation des déchets.",
  url: "https://www.dib-trade-hdf.fr",
  phone: "03 21 00 00 00",
  phoneHref: "+33321000000",
  emergencyPhone: "06 00 00 00 00",
  email: "contact@dib-trade-hdf.fr",
  address: {
    // PLACEHOLDER ADDRESS — to be replaced with the real registered address before publication.
    line1: "9 Place des Héros",
    postalCode: "62000",
    city: "Arras",
    country: "France",
  },
  hours: [
    { day: "Lundi – Vendredi", value: "7h30 – 18h00" },
    { day: "Samedi", value: "8h00 – 12h00 (sur rendez-vous)" },
    { day: "Dimanche", value: "Fermé — astreinte urgences" },
  ],
  social: {
    instagram: "https://instagram.com/",
    linkedin: "https://linkedin.com/",
    tiktok: "https://tiktok.com/",
  },
  siren: "000 000 000",
  legalForm: "SARL au capital de 50 000 €",
};

export type SiteConfig = typeof siteConfig;
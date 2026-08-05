export const siteConfig = {
  name: "NordBennes.fr | by Renovimo",
  shortName: "NordBennes.fr",
  tagline: "Votre partenaire pour la location de bennes et la valorisation des dÃ©chets.",
  url: "https://nordbennes.fr",
  phone: "+33 6 42 24 08 41",
  phoneHref: "+33642240841",
  emergencyPhone: "06 00 00 00 00",
  email: "contact@nordbennes.fr",
  address: {
    // PLACEHOLDER ADDRESS â€” to be replaced with the real registered address before publication.
    line1: "9 Place des HÃ©ros",
    postalCode: "62000",
    city: "Arras",
    country: "France",
  },
  hours: [
    { day: "Lundi â€“ Vendredi", value: "7h30 â€“ 18h00" },
    { day: "Samedi", value: "8h00 â€“ 12h00 (sur rendez-vous)" },
    { day: "Dimanche", value: "FermÃ© â€” astreinte urgences" },
  ],
  social: {
    instagram: "https://instagram.com/",
    linkedin: "https://linkedin.com/",
    tiktok: "https://tiktok.com/",
  },
  siren: "000 000 000",
  legalForm: "SARL au capital de 50 000 â‚¬",
};

export type SiteConfig = typeof siteConfig;

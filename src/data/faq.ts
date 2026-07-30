export type FaqItem = { question: string; answer: string; category: string };

export const faqItems: FaqItem[] = [
  {
    category: "Livraison",
    question: "Sous quel délai livrez-vous une benne ?",
    answer:
      "En dehors des périodes de forte activité, une benne est généralement livrée sous 24 à 48 heures ouvrées après validation de la commande. Une mise à disposition le jour même peut être étudiée selon la disponibilité de notre flotte.",
  },
  {
    category: "Livraison",
    question: "Ai-je besoin d'une autorisation pour poser une benne sur la voie publique ?",
    answer:
      "Oui, si la benne est déposée sur trottoir ou chaussée, une autorisation de voirie ou un arrêté de permission doit être demandé auprès de votre mairie. Nous pouvons vous indiquer la démarche et les délais à prévoir selon votre commune.",
  },
  {
    category: "Déchets",
    question: "Quels déchets pouvons-nous mettre dans la benne ?",
    answer:
      "Selon le type de benne réservé : gravats, déchets mélangés de chantier, bois, métaux, déchets verts ou encombrants. Le type de déchets accepté est précisé au moment du devis afin d'orienter votre benne vers la bonne filière de traitement.",
  },
  {
    category: "Déchets",
    question: "Quels déchets sont interdits ?",
    answer:
      "Les déchets dangereux (amiante, peintures, solvants, produits chimiques, bonbonnes de gaz, batteries, pneus, déchets médicaux) ne sont pas acceptés dans nos bennes standards. Contactez-nous pour ces déchets spécifiques, qui relèvent de filières réglementées distinctes.",
  },
  {
    category: "Location",
    question: "Quelle est la durée de location standard ?",
    answer:
      "Nos bennes sont mises à disposition pour une durée de 15 jours en moyenne. Une durée plus courte ou plus longue peut être convenue selon l'avancement de votre chantier, avec un tarif de prolongation le cas échéant.",
  },
  {
    category: "Facturation",
    question: "Quels moyens de paiement acceptez-vous ?",
    answer:
      "Le règlement s'effectue par virement, carte bancaire ou prélèvement pour nos clients sous contrat. Une facture avec bordereau de suivi des déchets vous est systématiquement transmise après collecte.",
  },
  {
    category: "Collecte",
    question: "Comment se déroule la reprise de la benne ?",
    answer:
      "Vous nous signalez que la benne est prête à être enlevée, ou nous respectons la date de reprise convenue au devis. Notre chauffeur intervient avec le même type de véhicule ampliroll utilisé pour la livraison.",
  },
  {
    category: "Poids",
    question: "Y a-t-il une limite de poids ?",
    answer:
      "Oui, chaque benne est associée à un tonnage maximal indiqué au devis selon le type de déchets. Un dépassement constaté à la pesée en centre de traitement fait l'objet d'une facturation complémentaire au tarif en vigueur.",
  },
  {
    category: "Urgence",
    question: "Proposez-vous des livraisons en urgence ?",
    answer:
      "Une astreinte est disponible pour les besoins urgents, notamment pour les entreprises et collectivités. Contactez notre ligne dédiée : nous étudions la faisabilité selon la disponibilité de nos équipes et de nos véhicules.",
  },
];
// app/services/page.tsx
export default function ServicesPage() {
  const services = [
    { title: "Location de bennes", desc: "De 3m³ à 30m³, livraison express sur chantier dans les Hauts-de-France." },
    { title: "Collecte de déchets", desc: "Collecte régulière ou ponctuelle pour tous types de déchets." },
    { title: "Valorisation & Recyclage", desc: "Filières agréées pour le traitement et le recyclage." },
    { title: "Déchets de chantier", desc: "Collecte et traitement des gravats, béton, terre et matériaux." },
    { title: "Déchets verts", desc: "Bennes spécifiques pour les déchets de jardin et espaces verts." },
    { title: "Déchets industriels", desc: "Solutions sur mesure pour l'industrie et les entreprises." },
  ];

  return (
    <div className="min-h-screen bg-white pt-20">
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
              Nos services
            </h1>
            <p className="text-lg text-gray-500">
              Des solutions complètes pour la gestion de vos déchets
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <div key={i} className="bg-white p-8 rounded-sm shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-500 text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
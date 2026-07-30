// app/bennes/page.tsx
export default function BennesPage() {
  const skips = [
    { size: "3m³", price: "295 €", desc: "Idéal pour les petites rénovations", dim: "1.8 × 1.4 × 1.2 m", tag: "Salle de bain" },
    { size: "8m³", price: "459 €", desc: "Parfait pour les travaux moyens", dim: "3.6 × 1.8 × 1.5 m", tag: "Maison" },
    { size: "10m³", price: "525 €", desc: "Pour les rénovations complètes", dim: "4.2 × 2.0 × 1.6 m", tag: "Rénovation" },
    { size: "15m³", price: "685 €", desc: "Pour les grands chantiers", dim: "5.0 × 2.2 × 1.8 m", tag: "Construction" },
    { size: "30m³", price: "1 185 €", desc: "Pour les projets industriels", dim: "6.0 × 2.4 × 2.2 m", tag: "Industrie" },
  ];

  return (
    <div className="min-h-screen bg-white pt-20">
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
              Catalogue de bennes
            </h1>
            <p className="text-lg text-gray-500">
              Choisissez la capacité adaptée à vos besoins
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skips.map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-sm shadow-sm border border-gray-100">
                <div className="flex justify-between items-start mb-3">
                  <span className="text-3xl font-bold text-gray-900">{item.size}</span>
                  <span className="text-xl font-bold text-[#0f5e3e]">{item.price}</span>
                </div>
                <p className="text-sm text-gray-500 mb-1">{item.desc}</p>
                <p className="text-sm text-gray-400 mb-2">{item.dim}</p>
                <span className="inline-block text-xs bg-gray-100 px-3 py-1 rounded-sm text-gray-600">{item.tag}</span>
                <a href="/devis" className="mt-4 w-full block text-center bg-[#0f5e3e] text-white py-2 rounded-sm text-sm font-medium hover:bg-[#1a7a52] transition">
                  Demander un devis
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
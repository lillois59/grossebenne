// app/page.tsx
export default function Home() {
  // Icônes SVG professionnelles
  const IconTruck = () => (
    <svg className="w-8 h-8 text-[#0f5e3e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 18a2 2 0 01-2 2m10-2a2 2 0 01-2 2m-6-2a2 2 0 01-2 2m10-2a2 2 0 01-2 2m-6-2a2 2 0 01-2 2m-6-2a2 2 0 01-2 2m0 0a2 2 0 01-2-2v-8a2 2 0 012-2h12a2 2 0 012 2v8a2 2 0 01-2 2m0 0a2 2 0 01-2-2v-4a2 2 0 012-2m0 0V6a2 2 0 012-2h4a2 2 0 012 2v12a2 2 0 01-2 2" />
    </svg>
  );

  const IconRecycle = () => (
    <svg className="w-8 h-8 text-[#0f5e3e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
    </svg>
  );

  const IconBuilding = () => (
    <svg className="w-8 h-8 text-[#0f5e3e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  );

  const IconLeaf = () => (
    <svg className="w-8 h-8 text-[#0f5e3e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 6.75A10.5 10.5 0 0112 3.75c4.5 0 7.5 2.25 9 6.75 1.5 4.5-1.5 9-4.5 11.25-3 2.25-6 1.5-7.5-1.5-1.5-3-2.25-6-4.5-9a9 9 0 00-1.5-4.5z" />
    </svg>
  );

  const IconIndustry = () => (
    <svg className="w-8 h-8 text-[#0f5e3e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 12c0-1.232-.57-2.34-1.47-3.15a10.5 10.5 0 00-5.28-3.15M19.5 12a10.5 10.5 0 01-9.75 9.75m9.75-9.75h-15m15 0c0-1.232-.57-2.34-1.47-3.15m0 0a10.5 10.5 0 00-5.28-3.15M3.75 12a10.5 10.5 0 019.75-9.75m-9.75 9.75c0 1.232.57 2.34 1.47 3.15m0 0a10.5 10.5 0 005.28 3.15M8.25 3.75a10.5 10.5 0 00-3.15 5.28" />
    </svg>
  );

  const IconDocument = () => (
    <svg className="w-8 h-8 text-[#0f5e3e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
    </svg>
  );

  const services = [
    { icon: IconTruck, title: "Location de bennes", desc: "De 3m³ à 30m³, livraison express sur chantier dans les Hauts-de-France." },
    { icon: IconRecycle, title: "Valorisation & Recyclage", desc: "Filières agréées pour le traitement et le recyclage de tous vos déchets." },
    { icon: IconBuilding, title: "Déchets de chantier", desc: "Collecte et traitement des gravats, béton, terre et matériaux de construction." },
    { icon: IconLeaf, title: "Déchets verts", desc: "Bennes spécifiques pour les déchets de jardin, tailles, feuilles et branches." },
    { icon: IconIndustry, title: "Déchets industriels", desc: "Solutions sur mesure pour l'industrie, la logistique et les entreprises." },
    { icon: IconDocument, title: "Devis en 2h", desc: "Réponse rapide, tarifs compétitifs et accompagnement personnalisé." },
  ];

  const skips = [
    { size: "3m³", price: "295 €", desc: "Idéal pour les petites rénovations", dim: "1.8 × 1.4 × 1.2 m", tag: "Salle de bain" },
    { size: "8m³", price: "459 €", desc: "Parfait pour les travaux moyens", dim: "3.6 × 1.8 × 1.5 m", tag: "Maison" },
    { size: "10m³", price: "525 €", desc: "Pour les rénovations complètes", dim: "4.2 × 2.0 × 1.6 m", tag: "Rénovation" },
    { size: "15m³", price: "685 €", desc: "Pour les grands chantiers", dim: "5.0 × 2.2 × 1.8 m", tag: "Construction" },
  ];

  const pricing = [
    { size: "3m³", mixed: "295 €", gravel: "275 €" },
    { size: "8m³", mixed: "459 €", gravel: "349 €" },
    { size: "10m³", mixed: "525 €", gravel: "395 €" },
    { size: "15m³", mixed: "685 €", gravel: "—" },
    { size: "30m³", mixed: "1 185 €", gravel: "—" },
  ];

  const testimonials = [
    { name: "SARL Bâtir", role: "Entreprise de construction", text: "Réactivité et professionnalisme. Benne livrée en moins de 4 heures. Un service qui nous fait gagner un temps précieux sur nos chantiers." },
    { name: "Les Jardins d'Artois", role: "Paysagiste", text: "Un partenaire fiable pour nos chantiers de rénovation. La collecte des déchets verts est rapide et efficace." },
    { name: "Mairie de Liévin", role: "Collectivité locale", text: "Devis clair, équipe disponible et à l'écoute. Une collaboration exemplaire pour la gestion des déchets de notre commune." },
  ];

  const faqs = [
    { q: "Quels types de déchets acceptez-vous ?", a: "Nous acceptons les déchets mélangés, gravats, déchets verts, bois, métaux, carton et plâtre. Les déchets dangereux (amiante, produits chimiques) ne sont pas acceptés." },
    { q: "Quel est le délai de livraison ?", a: "Nous livrons votre benne sous 4 heures en moyenne dans toute la région Hauts-de-France. Un délai précis vous sera communiqué lors de la confirmation de votre commande." },
    { q: "Ai-je besoin d'une autorisation ?", a: "Pour une benne sur voie publique, vous devez obtenir une autorisation de la mairie. Nous vous accompagnons dans ces démarches si nécessaire." },
    { q: "Quelle est la durée de location ?", a: "La durée standard est de 3 à 7 jours. Des prolongations sont possibles selon vos besoins." },
  ];

  return (
    <div className="min-h-screen bg-white pt-20">
      
      {/* ===== HERO ===== */}
      <section className="relative min-h-[90vh] flex items-center bg-[#1a1f2b] overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=1400&q=80')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1a14] via-transparent to-transparent"></div>
        <div className="container mx-auto px-6 max-w-7xl relative z-10 py-12">
          <div className="max-w-2xl">
            <div className="inline-block border-l-4 border-[#0f5e3e] pl-4 mb-6">
              <span className="text-sm font-medium text-[#0f5e3e] uppercase tracking-wider">Location de bennes · Hauts-de-France</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight">
              Votre partenaire pour la
              <span className="block text-[#0f5e3e] mt-2">
                location de bennes
              </span>
            </h1>
            <p className="text-lg text-white/70 mt-6 max-w-lg leading-relaxed">
              Devis personnalisé en 2 heures · Livraison express · Filières agréées · 
              De 3 à 30 m³ pour tous vos chantiers
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <a href="#devis" className="bg-[#0f5e3e] text-white px-8 py-3.5 rounded font-semibold hover:bg-[#1a7a52] transition shadow-lg shadow-[#0f5e3e]/25">
                Demander un devis
              </a>
              <a href="tel:0321000000" className="flex items-center gap-2 text-white px-6 py-3.5 rounded font-semibold border border-white/20 hover:bg-white/5 transition">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                03 21 00 00 00
              </a>
            </div>
            <div className="flex items-center gap-8 mt-10 pt-8 border-t border-white/10">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white/10 bg-white/5 flex items-center justify-center text-xs font-medium text-white/60">
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <div className="text-white/60 text-sm">
                <span className="font-semibold text-white">+500 clients</span> nous font confiance
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== STATS ===== */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-[#0f5e3e]">1 500+</div>
              <p className="text-sm text-gray-500 mt-1">Bennes livrées</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#0f5e3e]">98%</div>
              <p className="text-sm text-gray-500 mt-1">Taux de satisfaction</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#0f5e3e]">4h</div>
              <p className="text-sm text-gray-500 mt-1">Délai moyen de livraison</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#0f5e3e]">100%</div>
              <p className="text-sm text-gray-500 mt-1">Valorisation des déchets</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-sm font-semibold text-[#0f5e3e] uppercase tracking-wider bg-[#0f5e3e]/10 px-4 py-1.5 rounded-sm mb-4">
              Nos services
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
              Des solutions complètes pour tous vos besoins
            </h2>
            <p className="text-lg text-gray-500">
              Collecte, location et valorisation des déchets pour les particuliers,
              professionnels et collectivités
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => {
              const IconComponent = service.icon;
              return (
                <div key={i} className="group bg-white p-8 rounded-sm shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100/50 hover:border-[#0f5e3e]/20">
                  <div className="w-14 h-14 rounded-sm bg-[#0f5e3e]/5 flex items-center justify-center mb-5 group-hover:bg-[#0f5e3e]/10 transition">
                    <IconComponent />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-500 leading-relaxed text-sm">{service.desc}</p>
                  <a href="#" className="inline-flex items-center gap-2 mt-4 text-sm font-medium text-[#0f5e3e] group-hover:gap-3 transition-all">
                    En savoir plus
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== SKIP CATALOGUE ===== */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-sm font-semibold text-[#0f5e3e] uppercase tracking-wider bg-[#0f5e3e]/10 px-4 py-1.5 rounded-sm mb-4">
              Notre catalogue
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
              Des bennes pour tous vos projets
            </h2>
            <p className="text-lg text-gray-500">
              Choisissez la capacité adaptée à vos besoins, du petit chantier aux grands travaux
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skips.map((item, i) => (
              <div key={i} className="group bg-white rounded-sm overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100">
                <div className="relative h-48 overflow-hidden bg-gray-100">
                  <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center text-gray-400">
                    <svg className="w-20 h-20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M8 18a2 2 0 01-2 2m10-2a2 2 0 01-2 2m-6-2a2 2 0 01-2 2m10-2a2 2 0 01-2 2m-6-2a2 2 0 01-2 2m-6-2a2 2 0 01-2-2v-8a2 2 0 012-2h12a2 2 0 012 2v8a2 2 0 01-2 2m0 0a2 2 0 01-2-2v-4a2 2 0 012-2m0 0V6a2 2 0 012-2h4a2 2 0 012 2v12a2 2 0 01-2 2" />
                    </svg>
                  </div>
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-sm text-xs font-medium text-[#0f5e3e]">
                    {item.tag}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <span className="text-2xl font-bold text-gray-900">{item.size}</span>
                    </div>
                    <div className="text-right">
                      <span className="text-xl font-bold text-[#0f5e3e]">{item.price}</span>
                      <span className="text-xs text-gray-400 block">HT</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-500 mb-1">{item.desc}</p>
                  <p className="text-xs text-gray-400">{item.dim}</p>
                  <a href="#" className="mt-4 w-full block text-center bg-gray-50 hover:bg-[#0f5e3e] hover:text-white text-gray-700 font-medium py-2.5 rounded-sm transition-all text-sm border border-gray-200 hover:border-[#0f5e3e]">
                    Réserver
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PRICING ===== */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-sm font-semibold text-[#0f5e3e] uppercase tracking-wider bg-[#0f5e3e]/10 px-4 py-1.5 rounded-sm mb-4">
              Nos tarifs
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
              Des prix transparents
            </h2>
            <p className="text-lg text-gray-500">
              Tarifs indicatifs hors taxes. Contactez-nous pour un devis personnalisé
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {pricing.map((item, i) => (
              <div key={i} className={`bg-white p-6 rounded-sm shadow-sm border border-gray-100 flex items-center justify-between ${i === 4 ? 'md:col-span-2' : ''}`}>
                <div>
                  <span className="text-xl font-bold text-gray-900">{item.size}</span>
                  <div className="flex gap-4 mt-1">
                    <span className="text-xs font-medium text-gray-500">Mélangé: <span className="text-[#0f5e3e] font-bold">{item.mixed}</span></span>
                    {item.gravel !== "—" && (
                      <span className="text-xs font-medium text-gray-500">Gravats: <span className="text-[#0f5e3e] font-bold">{item.gravel}</span></span>
                    )}
                  </div>
                </div>
                <a href="#devis" className="text-[#0f5e3e] font-medium text-sm hover:underline">
                  Demander un devis →
                </a>
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-gray-400 mt-6">
            Prix indicatifs pouvant varier selon la localisation du chantier, la durée de location et la nature des déchets.
          </p>
        </div>
      </section>

      {/* ===== QUOTE FORM ===== */}
      <section className="py-24 bg-white" id="devis">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid lg:grid-cols-5 gap-12">
            <div className="lg:col-span-2">
              <span className="inline-block text-sm font-semibold text-[#0f5e3e] uppercase tracking-wider bg-[#0f5e3e]/10 px-4 py-1.5 rounded-sm mb-4">
                Devis en ligne
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
                Obtenez votre devis personnalisé en quelques minutes
              </h2>
              <p className="text-gray-500 mb-8">
                Location rapide de bennes partout dans les Hauts-de-France.
              </p>
              <div className="space-y-6">
                {[
                  "Complétez votre demande de devis",
                  "Notre équipe vous répond sous 2 heures ouvrées",
                  "Validez votre commande via notre plateforme sécurisée",
                  "Nous livrons votre benne à la date convenue",
                  "Nous récupérons les déchets et assurons leur traitement"
                ].map((step, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-sm bg-[#0f5e3e]/10 flex items-center justify-center text-[#0f5e3e] font-bold text-sm flex-shrink-0">
                      {i + 1}
                    </div>
                    <div>
                      <p className="text-sm text-gray-700">{step}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-3 bg-gray-50 p-8 rounded-sm shadow-sm border border-gray-100">
              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Type de client</label>
                    <select className="w-full px-4 py-3 bg-white border border-gray-200 rounded-sm text-sm focus:ring-1 focus:ring-[#0f5e3e] focus:border-[#0f5e3e] outline-none transition">
                      <option>Particulier</option>
                      <option>Professionnel</option>
                      <option>Collectivité</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Société</label>
                    <input type="text" className="w-full px-4 py-3 bg-white border border-gray-200 rounded-sm text-sm focus:ring-1 focus:ring-[#0f5e3e] focus:border-[#0f5e3e] outline-none transition" placeholder="Nom de l'entreprise" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Prénom</label>
                    <input type="text" className="w-full px-4 py-3 bg-white border border-gray-200 rounded-sm text-sm focus:ring-1 focus:ring-[#0f5e3e] focus:border-[#0f5e3e] outline-none transition" placeholder="Prénom" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Nom</label>
                    <input type="text" className="w-full px-4 py-3 bg-white border border-gray-200 rounded-sm text-sm focus:ring-1 focus:ring-[#0f5e3e] focus:border-[#0f5e3e] outline-none transition" placeholder="Nom" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input type="email" className="w-full px-4 py-3 bg-white border border-gray-200 rounded-sm text-sm focus:ring-1 focus:ring-[#0f5e3e] focus:border-[#0f5e3e] outline-none transition" placeholder="email@exemple.fr" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Téléphone</label>
                    <input type="tel" className="w-full px-4 py-3 bg-white border border-gray-200 rounded-sm text-sm focus:ring-1 focus:ring-[#0f5e3e] focus:border-[#0f5e3e] outline-none transition" placeholder="06 00 00 00 00" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Code postal</label>
                    <input type="text" className="w-full px-4 py-3 bg-white border border-gray-200 rounded-sm text-sm focus:ring-1 focus:ring-[#0f5e3e] focus:border-[#0f5e3e] outline-none transition" placeholder="62000" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Ville</label>
                    <input type="text" className="w-full px-4 py-3 bg-white border border-gray-200 rounded-sm text-sm focus:ring-1 focus:ring-[#0f5e3e] focus:border-[#0f5e3e] outline-none transition" placeholder="Arras" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Benne souhaitée</label>
                    <select className="w-full px-4 py-3 bg-white border border-gray-200 rounded-sm text-sm focus:ring-1 focus:ring-[#0f5e3e] focus:border-[#0f5e3e] outline-none transition">
                      <option>3 m³</option>
                      <option>8 m³</option>
                      <option>10 m³</option>
                      <option>15 m³</option>
                      <option>30 m³</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Type de déchet</label>
                    <select className="w-full px-4 py-3 bg-white border border-gray-200 rounded-sm text-sm focus:ring-1 focus:ring-[#0f5e3e] focus:border-[#0f5e3e] outline-none transition">
                      <option>Déchets mélangés</option>
                      <option>Gravats</option>
                      <option>Déchets verts</option>
                      <option>Bois</option>
                      <option>Métaux</option>
                      <option>Carton</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Date de livraison</label>
                    <input type="date" className="w-full px-4 py-3 bg-white border border-gray-200 rounded-sm text-sm focus:ring-1 focus:ring-[#0f5e3e] focus:border-[#0f5e3e] outline-none transition" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Date d'enlèvement</label>
                    <input type="date" className="w-full px-4 py-3 bg-white border border-gray-200 rounded-sm text-sm focus:ring-1 focus:ring-[#0f5e3e] focus:border-[#0f5e3e] outline-none transition" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea rows={3} className="w-full px-4 py-3 bg-white border border-gray-200 rounded-sm text-sm focus:ring-1 focus:ring-[#0f5e3e] focus:border-[#0f5e3e] outline-none transition" placeholder="Informations complémentaires..."></textarea>
                </div>
                <div className="flex items-start gap-3">
                  <input type="checkbox" required className="mt-1 w-4 h-4 border-gray-300 rounded-sm focus:ring-[#0f5e3e]" />
                  <span className="text-sm text-gray-500">J'accepte que mes données soient utilisées pour le traitement de ma demande.</span>
                </div>
                <button type="submit" className="w-full bg-[#0f5e3e] text-white py-3.5 rounded-sm text-lg font-semibold hover:bg-[#1a7a52] transition shadow-lg shadow-[#0f5e3e]/25">
                  Envoyer ma demande de devis
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-sm font-semibold text-[#0f5e3e] uppercase tracking-wider bg-[#0f5e3e]/10 px-4 py-1.5 rounded-sm mb-4">
              Témoignages
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
              Ils nous font confiance
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white p-8 rounded-sm shadow-sm border border-gray-100">
                <div className="flex gap-1 mb-4 text-[#0f5e3e]">
                  {[...Array(5)].map((_, j) => (
                    <svg key={j} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 italic leading-relaxed text-sm">"{t.text}"</p>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <p className="font-semibold text-gray-900">{t.name}</p>
                  <p className="text-sm text-gray-400">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== COVERAGE ===== */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block text-sm font-semibold text-[#0f5e3e] uppercase tracking-wider bg-[#0f5e3e]/10 px-4 py-1.5 rounded-sm mb-4">
                Notre zone
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
                Nous couvrons toute la région Hauts-de-France
              </h2>
              <p className="text-lg text-gray-500 mb-6">
                DIB-TRADE intervient sur l'ensemble du territoire, avec une base opérationnelle à Arras.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {["Arras", "Lille", "Valenciennes", "Amiens", "Béthune", "Dunkerque"].map((city) => (
                  <div key={city} className="flex items-center gap-2 text-sm text-gray-600">
                    <svg className="w-4 h-4 text-[#0f5e3e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {city}
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-[400px] bg-gray-100 rounded-sm overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                <div className="text-center">
                  <svg className="w-24 h-24 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                  <p>Carte de la région Hauts-de-France</p>
                  <p className="text-sm text-gray-400">(Carte interactive)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-sm font-semibold text-[#0f5e3e] uppercase tracking-wider bg-[#0f5e3e]/10 px-4 py-1.5 rounded-sm mb-4">
              FAQ
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
              Questions fréquentes
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white p-6 rounded-sm shadow-sm border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-gray-500 text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
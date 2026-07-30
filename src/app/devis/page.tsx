// app/devis/page.tsx
export default function DevisPage() {
  return (
    <div className="min-h-screen bg-white pt-20">
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
              Obtenez votre devis personnalisé
            </h1>
            <p className="text-lg text-gray-500">
              Location rapide de bennes partout dans les Hauts-de-France
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-sm shadow-sm border border-gray-100">
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

          {/* Process */}
          <div className="mt-16 grid md:grid-cols-5 gap-4 text-center">
            {[
              "Complétez votre demande",
              "Réponse sous 2h",
              "Validation de la commande",
              "Livraison de la benne",
              "Collecte et traitement"
            ].map((step, i) => (
              <div key={i} className="text-sm">
                <div className="w-10 h-10 bg-[#0f5e3e]/10 rounded-full flex items-center justify-center text-[#0f5e3e] font-bold mx-auto mb-2">
                  {i + 1}
                </div>
                {step}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
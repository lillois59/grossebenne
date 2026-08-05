// app/contact/page.tsx
export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white pt-20">
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
              Contactez-nous
            </h1>
            <p className="text-lg text-gray-500">
              Une question ? Un devis ? Notre équipe est à votre disposition
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Coordonnées */}
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-sm">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Téléphone
                </h3>

                <a
                  href="tel:+33642240841"
                  className="text-[#0f5e3e] font-medium"
                >
                  +33 6 42 24 08 41
                </a>

                <p className="text-sm text-gray-500 mt-1">
                  Du lundi au vendredi, 7h30 - 18h
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-sm">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Email
                </h3>

                <a
                  href="mailto:contact@nordbennes.fr"
                  className="text-[#0f5e3e] font-medium"
                >
                  contact@nordbennes.fr
                </a>
              </div>

              <div className="bg-gray-50 p-6 rounded-sm">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Adresse
                </h3>

                <p className="text-gray-600 text-sm">
                  Grand-Place, 62000 Arras
                </p>

                <p className="text-xs text-gray-400 mt-1">
                  * Adresse fictive à remplacer
                </p>
              </div>
            </div>

            {/* Formulaire */}
            <div className="lg:col-span-2 bg-gray-50 p-8 rounded-sm">
              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Prénom
                    </label>

                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-sm text-sm focus:ring-1 focus:ring-[#0f5e3e] focus:border-[#0f5e3e] outline-none transition"
                      placeholder="Prénom"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Nom
                    </label>

                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-sm text-sm focus:ring-1 focus:ring-[#0f5e3e] focus:border-[#0f5e3e] outline-none transition"
                      placeholder="Nom"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>

                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-sm text-sm focus:ring-1 focus:ring-[#0f5e3e] focus:border-[#0f5e3e] outline-none transition"
                    placeholder="email@exemple.fr"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>

                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-sm text-sm focus:ring-1 focus:ring-[#0f5e3e] focus:border-[#0f5e3e] outline-none transition"
                    placeholder="Votre message..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#0f5e3e] text-white py-3 rounded-sm font-semibold hover:bg-[#1a7a52] transition"
                >
                  Envoyer
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
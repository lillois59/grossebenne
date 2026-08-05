// components/sections/Hero.tsx
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Phone, Check } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-[#0a1a14]">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a1a14] via-[#0f2a1e] to-[#1a3a2a]" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=1400&q=80')] bg-cover bg-center opacity-20 mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a1a14] via-transparent to-transparent" />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10 py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full px-4 py-1.5 text-sm text-white/80 mb-6">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              Location de bennes en Hauts-de-France
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] tracking-tight">
              Votre partenaire pour la
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-emerald-400 to-green-300 block mt-2">
                location de bennes
              </span>
            </h1>
            
            <p className="text-base sm:text-lg text-white/70 mt-6 max-w-lg leading-relaxed">
              Devis personnalisé en 2h · Livraison express · Filières agréées · 
              De 3m³ à 30m³ pour tous vos chantiers
            </p>

            <div className="flex flex-wrap gap-3 sm:gap-4 mt-8">
              <Link
                href="/devis"
                className="group relative bg-white text-[#0f5e3e] px-6 sm:px-8 py-3 sm:py-3.5 rounded-full text-sm sm:text-lg font-semibold hover:bg-gray-100 transition-all shadow-2xl shadow-black/20"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Demander un devis
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              
              <a
                href="tel:+33642240841"
                className="flex items-center gap-2 text-white px-5 sm:px-6 py-3 sm:py-3.5 rounded-full text-sm sm:text-lg font-semibold border-2 border-white/20 hover:bg-white/10 transition-all"
              >
                <Phone className="w-4 h-4" />
                <span className="hidden sm:inline">Nous appeler</span>
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-6 mt-8 pt-8 border-t border-white/10">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-9 h-9 rounded-full border-2 border-white/20 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center text-xs font-bold text-gray-600"
                  >
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <div className="text-white/60 text-sm">
                <span className="font-semibold text-white">+500 clients</span> nous font confiance
              </div>
            </div>
          </div>

          {/* Right content - Image */}
          <div className="relative">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl shadow-black/30">
              <Image
                src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&q=80"
                alt="Benne de chantier"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#0a1a14]/60 to-transparent" />
              
              {/* Stats overlay */}
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6">
                <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-xl p-4 text-white">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center">
                      <p className="text-xs opacity-60">Livraison</p>
                      <p className="text-xl sm:text-2xl font-bold">4h</p>
                    </div>
                    <div className="text-center border-x border-white/10">
                      <p className="text-xs opacity-60">Satisfaction</p>
                      <p className="text-xl sm:text-2xl font-bold text-green-300">98%</p>
                    </div>
                    <div className="text-center">
                      <p className="text-xs opacity-60">Bennes</p>
                      <p className="text-xl sm:text-2xl font-bold">+1500</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-4 sm:bottom-8 sm:left-8 bg-white rounded-xl shadow-xl p-3 sm:p-4 hidden sm:block">
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-[#0f5e3e]" />
                <div>
                  <p className="text-xs text-gray-500">Certifié</p>
                  <p className="text-sm font-bold text-gray-900">Qualité & Environnement</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
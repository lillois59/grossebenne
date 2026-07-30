// components/layout/Header.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { label: 'Accueil', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Bennes', href: '/bennes' },
    { label: 'Devis', href: '/devis' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100/50">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-9 h-9 sm:w-10 sm:h-10 bg-gradient-to-br from-[#0f5e3e] to-[#1a8a5a] rounded-xl flex items-center justify-center text-white font-bold text-base sm:text-lg shadow-lg shadow-[#0f5e3e]/20 group-hover:shadow-xl group-hover:shadow-[#0f5e3e]/30 transition-all">
                DT
              </div>
              <div>
                <span className="text-xl font-bold text-[#0f5e3e] tracking-tight">DIB-TRADE</span>
                <span className="block text-[9px] font-medium text-gray-400 tracking-[0.15em] uppercase">
                  Hauts-de-France
                </span>
              </div>
            </Link>

            {/* Navigation desktop */}
            <nav className="hidden md:flex items-center gap-1">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`px-4 py-2 text-sm font-medium transition-all rounded-xl ${
                      isActive
                        ? 'text-[#0f5e3e] bg-[#0f5e3e]/5'
                        : 'text-gray-600 hover:text-[#0f5e3e] hover:bg-[#0f5e3e]/5'
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-2 sm:gap-4">
              <a
                href="tel:0321000000"
                className="hidden md:flex items-center gap-2 text-sm font-semibold text-[#0f5e3e] hover:bg-[#0f5e3e]/10 px-3 py-2 rounded-xl transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                <span className="hidden xl:inline">03 21 00 00 00</span>
              </a>

              <Link
                href="/devis"
                className="hidden sm:inline-block bg-[#0f5e3e] text-white px-5 sm:px-6 py-2 rounded-full text-sm font-semibold hover:bg-[#1a7a52] transition-all shadow-lg shadow-[#0f5e3e]/25 hover:shadow-xl hover:shadow-[#0f5e3e]/40"
              >
                Devis express
              </Link>

              {/* Bouton menu mobile */}
              <button
                onClick={() => setIsMenuOpen(true)}
                className="md:hidden w-10 h-10 rounded-full hover:bg-gray-100 flex items-center justify-center transition-colors"
                aria-label="Ouvrir le menu"
              >
                <Menu className="w-5 h-5 text-gray-700" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ===== MENU MOBILE ===== */}
      <div
        className={`fixed inset-0 z-[100] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Overlay */}
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-md"
          onClick={() => setIsMenuOpen(false)}
        />

        {/* Panel */}
        <div
          className={`absolute top-0 right-0 h-full w-full max-w-[400px] bg-white shadow-2xl transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {/* En-tête du menu */}
          <div className="flex items-center justify-between p-6 border-b border-gray-100">
            <Link href="/" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-[#0f5e3e] to-[#1a8a5a] rounded-xl flex items-center justify-center text-white font-bold text-lg">
                DT
              </div>
              <span className="text-xl font-bold text-[#0f5e3e] tracking-tight">DIB-TRADE</span>
            </Link>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="w-10 h-10 rounded-full hover:bg-gray-100 flex items-center justify-center transition-colors"
              aria-label="Fermer le menu"
            >
              <X className="w-6 h-6 text-gray-600" />
            </button>
          </div>

          {/* Navigation */}
          <nav className="p-6 overflow-y-auto h-[calc(100%-80px)]">
            <ul className="space-y-1">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={`flex items-center justify-between px-4 py-3 text-lg font-medium rounded-xl transition-all ${
                        isActive
                          ? 'text-[#0f5e3e] bg-[#0f5e3e]/5'
                          : 'text-gray-700 hover:text-[#0f5e3e] hover:bg-[#0f5e3e]/5'
                      }`}
                    >
                      <span>{item.label}</span>
                      <span className="text-gray-400 text-sm">→</span>
                    </Link>
                  </li>
                );
              })}
            </ul>

            {/* Contact rapide */}
            <div className="mt-8 pt-8 border-t border-gray-100">
              <div className="bg-[#0f5e3e]/5 rounded-2xl p-6">
                <p className="text-sm font-semibold text-[#0f5e3e] mb-2">Besoin d'aide ?</p>
                <a
                  href="tel:0321000000"
                  className="block text-2xl font-bold text-[#0f5e3e] mb-1"
                >
                  03 21 00 00 00
                </a>
                <p className="text-xs text-gray-500">Disponible 7j/7</p>
              </div>

              {/* Lien devis */}
              <Link
                href="/devis"
                onClick={() => setIsMenuOpen(false)}
                className="mt-4 w-full block text-center bg-[#0f5e3e] text-white py-3 rounded-xl font-semibold hover:bg-[#1a7a52] transition"
              >
                Demander un devis
              </Link>

              {/* Réseaux sociaux */}
              <div className="flex gap-4 mt-6">
                <a
                  href="https://linkedin.com/company/dib-trade"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center hover:bg-[#0f5e3e]/10 transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a
                  href="https://instagram.com/dib-trade"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center hover:bg-[#0f5e3e]/10 transition-colors"
                  aria-label="Instagram"
                >
                  <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0z"/>
                    <path d="M12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8z"/>
                    <circle cx="18.406" cy="5.594" r="1.44"/>
                  </svg>
                </a>
                <a
                  href="https://wa.me/33321000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center hover:bg-[#25D366]/10 transition-colors"
                  aria-label="WhatsApp"
                >
                  <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </a>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
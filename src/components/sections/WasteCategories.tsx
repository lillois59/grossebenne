// components/sections/WasteCategories.tsx
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { skips } from "@/data/skips";

export default function WasteCategories() {
  return (
    <section className="py-24 bg-gray-50">
      <Container>
        <SectionHeading
          eyebrow="Nos bennes"
          title="Des contenants adaptés à chaque chantier"
          description="Choisissez le volume nécessaire pour vos déchets : gravats, bois, déchets mélangés ou industriels."
          align="center"
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skips.slice(0, 8).map((skip) => (
            <article
              key={skip.id}
              className="bg-white p-6 rounded-sm shadow-sm border border-gray-100 transition hover:shadow-lg hover:-translate-y-1"
            >
              <p className="font-mono text-xs uppercase tracking-widest text-[#0f5e3e]">
                {skip.size}
              </p>

              <h3 className="mt-4 text-xl font-semibold text-gray-900">
                {skip.size} - {skip.dimensions}
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                {skip.description}
              </p>

              <div className="mt-4 flex items-center justify-between">
                <span className="text-lg font-bold text-[#0f5e3e]">
                  {skip.price}
                </span>
                <span className="text-xs font-medium text-gray-500">
                  {skip.tag}
                </span>
              </div>

              <div className="mt-5 pt-4 border-t border-gray-100">
                <div className="flex flex-wrap gap-2">
                  {skip.suitableFor.slice(0, 2).map((use, index) => (
                    <span key={index} className="text-xs bg-gray-100 px-2 py-1 rounded-sm text-gray-600">
                      {use}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-5 text-sm font-medium text-[#0f5e3e] border-t border-gray-100 pt-4">
                Disponible sur réservation
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
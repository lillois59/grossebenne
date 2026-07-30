import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { skips } from "@/data/skips";

export default function WasteCategories() {
  return (
    <section className="section bg-sand-200">
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
              key={skip.slug}
              className="card p-6 transition hover:-translate-y-1"
            >
              <p className="font-mono text-xs uppercase tracking-widest text-eco-600">
                {skip.volume}
              </p>

              <h3 className="mt-4 text-xl font-semibold">
                {skip.title}
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-anthracite-600">
                {skip.description}
              </p>

              <div className="mt-5 text-sm font-medium text-forest-700">
                Disponible sur réservation
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
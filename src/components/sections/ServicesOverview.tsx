import Link from "next/link";
import { ArrowRight } from "lucide-react";

import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { services } from "@/data/services";


export default function ServicesOverview() {
  const featured = services.slice(0, 6);

  return (
    <section className="section bg-sand-100">
      <Container>
        <SectionHeading
          eyebrow="Nos solutions"
          title="Des solutions adaptées à chaque type de déchet"
          description="DIB-TRADE accompagne les particuliers, entreprises et collectivités avec des solutions de collecte et de valorisation adaptées."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.slug}
                className="card group p-6 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xs bg-forest-600/10">
                    <Icon
                      size={22}
                      className="text-forest-600"
                      strokeWidth={1.7}
                    />
                  </div>
                </div>

                <h3 className="mt-6 text-xl font-semibold">
                  {service.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-anthracite-600">
                  {service.description}
                </p>

                <ul className="mt-5 space-y-2">
                  {service.details.map((detail) => (
                    <li
                      key={detail}
                      className="flex items-center gap-2 text-sm text-anthracite-700"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-eco-500" />
                      {detail}
                    </li>
                  ))}
                </ul>

                <Link
                  href={`/services/${service.slug}`}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-forest-700 transition hover:text-eco-600"
                >
                  En savoir plus
                  <ArrowRight size={15} />
                </Link>
              </article>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/services"
            className="btn-primary"
          >
            Voir toutes nos solutions
            <ArrowRight size={16} />
          </Link>
        </div>
      </Container>
    </section>
  );
}
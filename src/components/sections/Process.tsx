import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";


const steps = [
  {
    number: "01",
    title: "Analyse du besoin",
    text: "Nous évaluons le volume, le type de déchets et les contraintes de votre chantier."
  },
  {
    number: "02",
    title: "Livraison de la benne",
    text: "Une benne adaptée est livrée directement sur votre site selon vos disponibilités."
  },
  {
    number: "03",
    title: "Collecte et valorisation",
    text: "Les déchets sont évacués puis orientés vers les filières de traitement adaptées."
  }
];


export default function Process() {

  return (

    <section className="section bg-sand-200">

      <Container>

        <SectionHeading
          eyebrow="Notre méthode"
          title="Une gestion simple de vos déchets"
          description="De la livraison à la valorisation, nous vous accompagnons à chaque étape."
        />


        <div className="mt-12 grid gap-6 md:grid-cols-3">


          {steps.map((step) => (

            <article
              key={step.number}
              className="card p-7"
            >

              <span className="font-mono text-sm text-eco-600">
                {step.number}
              </span>


              <h3 className="mt-5 text-xl font-semibold">
                {step.title}
              </h3>


              <p className="mt-3 text-sm text-anthracite-600">
                {step.text}
              </p>


            </article>

          ))}


        </div>


      </Container>

    </section>

  );

}
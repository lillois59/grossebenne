export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  light = false,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
}) {
  return (
    <div className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <p className={`eyebrow mb-3 ${light ? "text-eco-400" : ""}`}>{eyebrow}</p>
      )}
      <h2
        className={`text-3xl sm:text-4xl font-semibold leading-[1.1] ${
          light ? "text-sand-100" : "text-anthracite-950"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-base leading-relaxed ${light ? "text-sand-300/80" : "text-anthracite-600"}`}>
          {description}
        </p>
      )}
    </div>
  );
}
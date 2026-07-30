export default function Logo({ light = false }: { light?: boolean }) {
  const primary = light ? "#F7F7F5" : "#1C2321";
  const accent = "#3F8F5F";

  return (
    <span className="inline-flex items-center gap-2.5 select-none">
      <svg
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Container / skip silhouette forming the environmental mark */}
        <path d="M4 10L6 22H24L26 10H4Z" stroke={primary} strokeWidth="1.6" strokeLinejoin="round" />
        <path
          d="M11 22C11 17 13.5 14 19.5 13.5"
          stroke={accent}
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <path d="M19.5 13.5L16.8 12.6M19.5 13.5L18.3 16" stroke={accent} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span className="flex flex-col leading-none">
        <span className={`font-display text-[17px] font-semibold tracking-tight ${light ? "text-sand-100" : "text-anthracite-950"}`}>
          DIB<span className="text-eco-500">-</span>TRADE
        </span>
        <span className={`font-mono text-[9px] tracking-widest2 uppercase mt-1 ${light ? "text-sand-300/70" : "text-anthracite-600"}`}>
          Hauts-de-France
        </span>
      </span>
    </span>
  );
}
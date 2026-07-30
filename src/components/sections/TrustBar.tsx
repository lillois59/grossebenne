import Container from "@/components/ui/Container";
import { ShieldCheck, Truck, FileCheck2, Clock } from "lucide-react";

const items = [
  { icon: Clock, label: "Réponse sous 2h ouvrées" },
  { icon: Truck, label: "Livraison partout en Hauts-de-France" },
  { icon: FileCheck2, label: "Bordereaux de suivi des déchets" },
  { icon: ShieldCheck, label: "Filières agréées et conformes" },
];

export default function TrustBar() {
  return (
    <div className="border-b border-anthracite-900/8 bg-sand-200">
      <Container className="grid grid-cols-2 gap-y-6 py-7 sm:grid-cols-4">
        {items.map((item) => (
          <div key={item.label} className="flex items-center gap-3">
            <item.icon size={18} className="shrink-0 text-forest-600" strokeWidth={1.75} />
            <span className="text-[13px] font-medium text-anthracite-800">{item.label}</span>
          </div>
        ))}
      </Container>
    </div>
  );
}
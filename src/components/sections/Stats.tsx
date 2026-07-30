// components/sections/Stats.tsx
export default function Stats() {
  return (
    <section className="py-16 bg-white border-b border-gray-100">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-[#0f5e3e]">+1500</div>
            <p className="text-sm text-gray-500 mt-1">Bennes livrées</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-[#0f5e3e]">98%</div>
            <p className="text-sm text-gray-500 mt-1">Satisfaction</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-[#0f5e3e]">4h</div>
            <p className="text-sm text-gray-500 mt-1">Délai de livraison</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-[#0f5e3e]">100%</div>
            <p className="text-sm text-gray-500 mt-1">Valorisation</p>
          </div>
        </div>
      </div>
    </section>
  );
}
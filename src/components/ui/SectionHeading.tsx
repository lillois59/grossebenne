// components/ui/SectionHeading.tsx
interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  className = '',
}: SectionHeadingProps) {
  const alignClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };

  return (
    <div className={`${alignClasses[align]} ${className}`}>
      {eyebrow && (
        <span className="inline-block text-sm font-semibold text-[#0f5e3e] uppercase tracking-wider bg-[#0f5e3e]/10 px-4 py-1.5 rounded-sm mb-4">
          {eyebrow}
        </span>
      )}
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
        {title}
      </h2>
      {description && (
        <p className="text-lg text-gray-500 max-w-3xl mx-auto">
          {description}
        </p>
      )}
    </div>
  );
}
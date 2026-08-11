interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
}

export default function SectionLabel({ children, className = "" }: SectionLabelProps) {
  return (
    <div
      className={`flex items-center gap-3 text-[0.72rem] font-bold tracking-[0.15em] uppercase text-[var(--accent)] mb-3.5 ${className}`}
    >
      <span className="w-[18px] h-px bg-[var(--accent)] shrink-0" />
      {children}
    </div>
  );
}

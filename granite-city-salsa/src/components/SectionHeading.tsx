interface SectionHeadingProps {
  eyebrow: string
  title: string
  subtitle?: string
  className?: string
}

export default function SectionHeading({ eyebrow, title, subtitle, className = '' }: SectionHeadingProps) {
  return (
    <div className={`text-center ${className}`}>
      <div className="flex items-center justify-center gap-3 mb-4">
        <span className="h-[2px] w-8 rounded bg-gradient-to-r from-brand-green to-brand-green-dark" />
        <span className="whitespace-nowrap uppercase text-brand-green font-medium text-sm tracking-[0.28em]">
          {eyebrow}
        </span>
      </div>
      <h2 className="text-4xl md:text-5xl font-bold text-white tracking-wide">
        {title}
      </h2>
      {subtitle && (
        <p className="text-xl text-brand-grey mt-4">
          {subtitle}
        </p>
      )}
    </div>
  )
}

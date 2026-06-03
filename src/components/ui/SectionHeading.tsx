interface SectionHeadingProps {
  pretitle: string
  title: string
  description?: string
}

export default function SectionHeading({ pretitle, title, description }: SectionHeadingProps) {
  return (
    <div className="max-w-2xl">
      <p className="mb-3 text-xs uppercase tracking-[0.35em] text-primary">{pretitle}</p>
      <h2 className="mb-4 text-3xl font-semibold leading-tight text-body sm:text-4xl">{title}</h2>
      {description ? <p className="text-base leading-7 text-muted">{description}</p> : null}
    </div>
  )
}

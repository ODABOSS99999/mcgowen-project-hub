const facts = [
  { label: 'Study', value: 'Mechanical Engineering' },
  { label: 'School', value: 'UT Dallas' },
  { label: 'Class of', value: '2030' },
  { label: 'Photography', value: 'McGowen Media' },
]

export function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="engineering-grid scroll-mt-20 border-b border-border">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 md:grid-cols-12 md:px-8 md:py-28">
        <div className="md:col-span-5">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-primary">Section 02</p>
          <h2 id="about-heading" className="font-serif text-5xl leading-none tracking-tight md:text-7xl">
            About
          </h2>
        </div>
        <div className="md:col-span-7">
          <p className="text-pretty font-serif text-3xl leading-snug md:text-4xl">
            {"I'm Owen McGowan, a Mechanical Engineering student at UT Dallas, class of 2030. I build web projects, and I photograph concerts as "}
            <span className="italic text-primary">McGowen Media</span>.
          </p>
          <dl className="mt-12 grid grid-cols-2 border-l border-t border-foreground">
            {facts.map((fact) => (
              <div key={fact.label} className="border-b border-r border-foreground bg-background/80 p-4 md:p-5">
                <dt className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">{fact.label}</dt>
                <dd className="mt-2 text-lg font-medium">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}

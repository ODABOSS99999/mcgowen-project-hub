import { ArrowDown, ArrowUpRight } from 'lucide-react'

export function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="engineering-grid relative border-b border-border"
    >
      <div className="mx-auto max-w-6xl px-5 pb-20 pt-16 md:px-8 md:pb-28 md:pt-24">
        <p className="mb-8 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
          <span aria-hidden="true" className="h-px w-10 bg-primary" />
          Owen McGowan: Project Hub
        </p>
        <h1
          id="hero-heading"
          className="max-w-5xl text-balance font-serif text-6xl leading-[0.92] tracking-tight sm:text-7xl md:text-8xl lg:text-[9.5rem]"
        >
          Built with <span className="italic text-primary">curiosity.</span>
        </h1>
        <div className="mt-10 flex flex-col gap-8 md:mt-14 md:flex-row md:items-end md:justify-between">
          <div className="flex flex-col gap-4">
            <p className="max-w-xl text-pretty text-lg leading-relaxed md:text-xl">
              Engineering, web experiments, and concert photography.
            </p>
            <a
              href="https://mcgowen.works"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex w-fit items-center gap-1.5 text-sm font-medium text-primary underline decoration-primary/40 underline-offset-4 transition-colors hover:decoration-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
            >
              Explore the full portfolio
              <ArrowUpRight
                className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          </div>
          <a
            href="#work"
            className="inline-flex w-fit items-center gap-2 border border-foreground bg-foreground px-5 py-3 text-sm font-medium text-background transition-colors hover:border-primary hover:bg-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
          >
            View selected work
            <ArrowDown className="size-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  )
}

import { ArrowUpRight } from 'lucide-react'

const projects = [
  {
    index: '01',
    title: 'The McGowen Library',
    category: 'Portfolio',
    description: 'A portfolio collecting Owen’s projects and work in one place.',
    href: 'https://mcgowen.works',
    linkLabel: 'mcgowen.works',
  },
  {
    index: '02',
    title: 'Dieckmingo',
    category: 'Web experiment',
    description: 'A live classroom bingo game built for the web.',
    href: 'https://github.com/ODABOSS99999/chem-bingo',
    linkLabel: 'View on GitHub',
  },
  {
    index: '03',
    title: 'Concert Photography',
    category: 'McGowen Media',
    description: 'Live music photography by Owen under the name McGowen Media.',
    href: 'https://mcgowen.works/photography',
    linkLabel: 'mcgowen.works/photography',
  },
]

export function SelectedWork() {
  return (
    <section id="work" aria-labelledby="work-heading" className="scroll-mt-20 border-b border-border">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <div className="mb-12 flex flex-col gap-4 md:mb-16 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-primary">Section 01</p>
            <h2 id="work-heading" className="font-serif text-5xl leading-none tracking-tight md:text-7xl">
              Selected Work
            </h2>
          </div>
          <p className="max-w-sm text-muted-foreground">Three projects across the web and the photo pit.</p>
        </div>

        <ul className="grid gap-px border border-border bg-border md:grid-cols-3">
          {projects.map((project) => (
            <li key={project.title} className="bg-card">
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full min-h-80 flex-col justify-between gap-10 p-6 transition-colors hover:bg-background focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-primary md:p-8"
              >
                <div className="flex items-start justify-between text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                  <span>{project.index}</span>
                  <span>{project.category}</span>
                </div>
                <div>
                  <h3 className="font-serif text-4xl leading-[1.05] tracking-tight transition-colors group-hover:text-primary">
                    {project.title}
                  </h3>
                  <p className="mt-4 leading-relaxed text-muted-foreground">{project.description}</p>
                  <span className="mt-8 flex items-center justify-between border-t border-border pt-4 text-sm font-medium">
                    <span className="truncate">{project.linkLabel}</span>
                    <ArrowUpRight
                      className="size-5 shrink-0 text-primary transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </span>
                  <span className="sr-only">(opens in a new tab)</span>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

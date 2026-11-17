import { ArrowUpRight } from 'lucide-react'

const links = [
  { label: 'GitHub', handle: 'ODABOSS99999', href: 'https://github.com/ODABOSS99999' },
  { label: 'Instagram', handle: '@mcgowen_media', href: 'https://www.instagram.com/mcgowen_media/' },
]

export function SiteFooter() {
  return (
    <footer id="contact" aria-labelledby="contact-heading" className="scroll-mt-20 bg-foreground text-background">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-24">
        <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-background/60">Section 03</p>
        <h2 id="contact-heading" className="font-serif text-5xl leading-none tracking-tight md:text-7xl">
          Find me <span className="italic text-[#8fa3ff]">online.</span>
        </h2>
        <ul className="mt-12 grid border-t border-background/20 md:grid-cols-2">
          {links.map((link) => (
            <li key={link.label} className="border-b border-background/20 md:odd:border-r">
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between gap-4 py-6 transition-colors hover:text-[#8fa3ff] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8fa3ff] md:px-6 md:first:pl-0"
              >
                <span>
                  <span className="block font-serif text-3xl">{link.label}</span>
                  <span className="mt-1 block text-sm text-background/60">{link.handle}</span>
                </span>
                <ArrowUpRight className="size-6 shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
                <span className="sr-only">(opens in a new tab)</span>
              </a>
            </li>
          ))}
        </ul>
        <div className="mt-16 flex flex-col gap-2 text-sm text-background/60 md:flex-row md:justify-between">
          <p>McGowen Works | Owen McGowan</p>
          <a href="#top" className="w-fit underline-offset-4 hover:text-background hover:underline">
            Back to top
          </a>
        </div>
      </div>
    </footer>
  )
}

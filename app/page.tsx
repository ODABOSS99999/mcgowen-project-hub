import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { SelectedWork } from '@/components/selected-work'
import { About } from '@/components/about'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-foreground focus:px-4 focus:py-2 focus:text-background"
      >
        Skip to content
      </a>
      <SiteHeader />
      <main id="main">
        <Hero />
        <SelectedWork />
        <About />
      </main>
      <SiteFooter />
    </>
  )
}

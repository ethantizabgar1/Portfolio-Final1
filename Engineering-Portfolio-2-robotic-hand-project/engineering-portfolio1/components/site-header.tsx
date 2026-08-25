'use client'

import { useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'
import { profile } from '@/lib/portfolio-data'

const links = [
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
]

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)
  const [hoverIndex, setHoverIndex] = useState<number | null>(null)
  const [indicator, setIndicator] = useState({ left: 0, width: 0, visible: false })
  const itemRefs = useRef<(HTMLAnchorElement | null)[]>([])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Track which section is currently in view to set the active tab.
  useEffect(() => {
    const sections = links
      .map((l) => document.querySelector(l.href))
      .filter(Boolean) as Element[]
    if (!sections.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = links.findIndex((l) => l.href === `#${entry.target.id}`)
            if (idx !== -1) setActiveIndex(idx)
          }
        })
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 },
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  // Slide the indicator to the hovered tab, or the active tab when not hovering.
  useEffect(() => {
    const target = hoverIndex ?? activeIndex
    const el = itemRefs.current[target]
    if (el) {
      setIndicator({ left: el.offsetLeft, width: el.offsetWidth, visible: true })
    }
  }, [hoverIndex, activeIndex])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-colors duration-300',
        scrolled ? 'border-b border-border bg-background/80 backdrop-blur-md' : 'border-b border-transparent',
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:px-8">
        <a href="#top" className="flex items-center gap-2.5">
          <span className="flex size-7 items-center justify-center rounded-sm border border-primary/50 font-mono text-xs font-bold text-primary">
            ET
          </span>
          <span className="hidden font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground sm:inline">
            {profile.name}
          </span>
        </a>

        <nav
          className="relative hidden items-center gap-1 md:flex"
          onMouseLeave={() => setHoverIndex(null)}
        >
          {/* sliding indicator pill */}
          <span
            aria-hidden
            className={cn(
              'absolute top-1/2 -z-0 h-8 -translate-y-1/2 rounded-sm border border-primary/40 bg-primary/10 transition-all duration-300 ease-out',
              indicator.visible ? 'opacity-100' : 'opacity-0',
            )}
            style={{ left: indicator.left, width: indicator.width }}
          />
          {links.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              ref={(el) => {
                itemRefs.current[i] = el
              }}
              onMouseEnter={() => setHoverIndex(i)}
              className={cn(
                'relative z-10 rounded-sm px-3 py-1.5 font-mono text-xs uppercase tracking-widest transition-colors',
                (hoverIndex ?? activeIndex) === i ? 'text-primary' : 'text-muted-foreground hover:text-foreground',
              )}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-8 items-center gap-2 rounded-sm border border-primary/40 bg-primary/10 px-3 font-mono text-xs uppercase tracking-widest text-primary transition-colors hover:bg-primary/20"
        >
          Resume
        </a>
      </div>
    </header>
  )
}

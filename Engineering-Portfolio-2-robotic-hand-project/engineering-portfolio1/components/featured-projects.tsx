import Image from 'next/image'
import { projects } from '@/lib/portfolio-data'
import { SectionHeading } from '@/components/section-heading'

export function FeaturedProjects() {
  return (
    <section id="projects" className="scroll-mt-16 border-b border-border">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <SectionHeading index="/ 01" title="Featured Projects" subtitle="Selected case studies from concept to working prototype." />

        <div className="mt-14 flex flex-col gap-16 md:gap-24">
          {projects.map((p, i) => (
            <article
              key={p.id}
              className="grid items-center gap-8 md:grid-cols-2 md:gap-12"
            >
              {/* Project imagery */}
              <div className={i % 2 === 1 ? 'md:order-2' : ''}>
                {p.images ? (
                  <div className="flex flex-col gap-4">
                    {p.images.map((img) => (
                      <figure
                        key={img.src}
                        className="group relative overflow-hidden rounded-md border border-border bg-card"
                      >
                        <Image
                          src={img.src || '/placeholder.svg'}
                          alt={img.alt}
                          width={800}
                          height={640}
                          className={`${img.aspect ?? 'aspect-[5/4]'} w-full bg-card object-contain transition-transform duration-500 group-hover:scale-105`}
                        />
                        <figcaption className="border-t border-border px-4 py-2.5 font-mono text-[11px] uppercase tracking-wide text-muted-foreground">
                          {img.caption}
                        </figcaption>
                      </figure>
                    ))}
                  </div>
                ) : (
                  <div className="group relative overflow-hidden rounded-md border border-border bg-card">
                    <Image
                      src={p.image || '/placeholder.svg'}
                      alt={`CAD render of ${p.title}`}
                      width={800}
                      height={640}
                      className="aspect-[5/4] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                )}
              </div>

              {/* Case study */}
              <div className={i % 2 === 1 ? 'md:order-1' : ''}>
                <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-primary">
                  <span className="text-2xl font-bold tabular-nums">{p.index}</span>
                  <span className="h-px flex-1 bg-border" />
                  <span className="text-muted-foreground">{p.category}</span>
                </div>

                <h3 className="mt-4 text-2xl font-bold tracking-tight md:text-3xl">{p.title}</h3>

                <div className="mt-5">
                  <p className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                    Problem
                  </p>
                  <p className="mt-1.5 leading-relaxed text-foreground/90">{p.problem}</p>
                </div>

                {/* engineering analysis */}
                <div className="mt-5 grid grid-cols-3 gap-px overflow-hidden rounded-md border border-border bg-border">
                  {p.analysis.map((a) => (
                    <div key={a.label} className="bg-card px-3 py-4 text-center">
                      <p className="font-mono text-lg font-bold text-primary md:text-xl">{a.value}</p>
                      <p className="mt-1 font-mono text-[10px] uppercase tracking-wide text-muted-foreground">
                        {a.label}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-5">
                  <p className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                    Prototype
                  </p>
                  <p className="mt-1.5 leading-relaxed text-foreground/90">{p.prototype}</p>
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {p.tools.map((t) => (
                    <span
                      key={t}
                      className="rounded-sm bg-secondary px-2.5 py-1 font-mono text-xs text-secondary-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

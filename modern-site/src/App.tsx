import './App.css'
import { motion } from 'framer-motion'
import { Footer } from './components/Footer'
import { GalleryCarousel } from './components/GalleryCarousel'
import { Hero } from './components/Hero'
import { Marquee } from './components/Marquee'
import { Navbar } from './components/Navbar'
import { ProductGrid } from './components/ProductGrid'
import { Section } from './components/Section'
import { gallerySlides } from './data/gallerySlides'
import { buildSteps, signatureItems } from './data/menu'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 dark:bg-ink-950 dark:text-white">
      <Navbar />
      <main className="overflow-x-hidden">
        <Hero />
        <section className="overflow-x-hidden px-4 pb-12 pt-6 sm:px-6 lg:px-8">
          <div className="mx-auto w-full max-w-6xl">
            <div className="mb-8 max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-white/60">Gallery</p>
              <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-900 dark:text-white sm:text-4xl">
                Export Highlights
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-white/70 sm:text-base">
                A quick look at our produce, packing, quality control, and shipment workflow.
              </p>
            </div>
            <GalleryCarousel slides={gallerySlides} />
          </div>
        </section>

        <Marquee
          items={[
            'Sri Lankan king coconuts',
            'Export-grade green papaya',
            'Tapioca pearls & starch',
            'Custom packing',
            'Quality inspection',
            'Air & sea freight',
            'Export documentation',
          ]}
        />

        <Section
          id="menu"
          className="py-16 sm:py-20"
          eyebrow="Our products"
          title={
            <>
              Export products, <span className="text-slate-600 dark:text-white/70">packed to your specifications</span>.
            </>
          }
          subtitle={
            <>
              We supply king coconut, green papaya, and tapioca products from Sri Lanka. Share your destination, packing
              requirements, and quantity, and we will respond with availability, lead time, and a quotation.
            </>
          }
        >
          <ProductGrid items={signatureItems} />
        </Section>

        <Section
          id="how"
          className="py-16 sm:py-20"
          eyebrow="Export process"
          title={
            <>
              Clear steps. <span className="text-slate-600 dark:text-white/70">Reliable deliveries</span>.
            </>
          }
          subtitle="From sourcing to shipment, we follow a structured process aligned with your requirements."
        >
          <div className="grid gap-4 md:grid-cols-2">
            {buildSteps.map((s, idx) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ type: 'spring', stiffness: 240, damping: 28, mass: 0.75, delay: idx * 0.05 }}
                className="relative overflow-hidden rounded-[1.75rem] bg-black/[0.03] p-6 dark:bg-white/5"
              >
                <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_15%,rgba(56,189,248,.22),transparent_45%)]" />
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-white/60">Step {idx + 1}</p>
                    <p className="mt-2 text-xl font-black tracking-tight text-slate-900 dark:text-white">{s.title}</p>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-white/70">{s.body}</p>
                  </div>
                  <span className="grid h-10 w-10 place-items-center rounded-2xl bg-black/5 text-sm font-black text-slate-900 dark:bg-white/10 dark:text-white">
                    {idx + 1}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </Section>

        <Section
          id="story"
          className="py-16 sm:py-20"
          eyebrow="Quality"
          title={
            <>
              Trusted sourcing, <span className="text-slate-600 dark:text-white/70">export-ready quality</span>.
            </>
          }
          subtitle="Sustainable practices, fair partnerships, and careful packing that protects products throughout transit."
        >
          <div className="grid gap-6 lg:grid-cols-2 lg:items-stretch">
            <div className="rounded-[2rem] bg-black/[0.03] p-7 dark:bg-white/5">
              <h3 className="text-xl font-black text-slate-900 dark:text-white">Quality you can rely on</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-white/70">
                Rajarata Plantation Export (Pvt) Ltd is committed to sustainable agricultural practices and fair trade
                partnerships, empowering farming communities while delivering the authentic taste of Sri Lanka to global
                markets. We combine modern export operations with traditional cultivation to ensure consistent quality,
                nutrition, and natural goodness.
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {[
                  { k: 'Product grading', v: 'Sorted and packed to specification' },
                  { k: 'Packing options', v: 'Bulk or retail-ready formats' },
                  { k: 'Dispatch confirmation', v: 'Photos and updates before shipment' },
                  { k: 'Documentation', v: 'Support based on destination needs' },
                ].map((row) => (
                  <div key={row.k} className="rounded-2xl bg-black/[0.03] p-4 dark:bg-black/20">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-white/60">{row.k}</p>
                    <p className="mt-1 text-sm font-semibold text-slate-800 dark:text-white/85">{row.v}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-black/[0.04] to-black/[0.02] p-7 dark:from-white/10 dark:to-white/5">
              <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_40%_30%,rgba(217,70,239,.28),transparent_55%)]" />
              <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_70%_60%,rgba(251,191,36,.22),transparent_55%)]" />
              <h3 className="text-xl font-black text-slate-900 dark:text-white">Share your requirements</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-white/70">
                Tell us the destination country, required pack style (cartons/labels), and expected quantity. We will respond
                with availability, lead time, and pricing.
              </p>

              <div className="mt-6 rounded-[1.75rem] bg-white/70 p-5 dark:bg-black/30">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-white/60">Quotation request example</p>
                <p className="mt-2 text-sm font-semibold text-slate-800 dark:text-white/85">
                  “King coconuts to UAE, air shipment, export cartons, quantity: 1×20ft (or your quantity). Please quote.”
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {['Destination', 'Packing spec', 'Quantity', 'Air / Sea', 'Documents', 'Incoterms'].map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-black/5 px-3 py-1 text-xs font-bold text-slate-700 dark:bg-white/10 dark:text-white/70"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Section>

        <Section
          id="locations"
          className="py-16 sm:py-20"
          eyebrow="Contact"
          title={
            <>
              Contact <span className="text-slate-600 dark:text-white/70">Rajarata Plantation Export (Pvt) Ltd</span>.
            </>
          }
          subtitle="Use the details below to request pricing, availability, and shipment options."
        >
          <div className="grid gap-4 lg:grid-cols-3">
            {[
              {
                name: 'Email',
                line1: 'rrpratnayake@gmail.com',
                line2: 'Response time: 24–48 hours',
                href: 'mailto:rrpratnayake@gmail.com',
                cta: 'Email us',
              },
              {
                name: 'Owner',
                line1: 'R.R.P. Rathnayake',
                line2: 'Owner • Rajarata Plantation Export (Pvt) Ltd',
                href: 'mailto:rrpratnayake@gmail.com',
                cta: 'Contact owner',
              },
              {
                name: 'Office',
                line1: 'No. 427/A, Wilimbula Waththa',
                line2: 'Radawana, Sri Lanka',
                href: 'https://www.google.com/maps/search/?api=1&query=No.%20427%2FA%2C%20Wilimbula%20Waththa%2C%20Radawana%2C%20Sri%20Lanka',
                cta: 'View location',
              },
            ].map((loc, idx) => (
              <motion.div
                key={loc.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ type: 'spring', stiffness: 240, damping: 28, mass: 0.75, delay: idx * 0.05 }}
                className="rounded-[1.75rem] bg-black/[0.03] p-6 dark:bg-white/5"
              >
                <p className="text-lg font-black text-slate-900 dark:text-white">{loc.name}</p>
                <p className="mt-2 text-sm text-slate-700 dark:text-white/70">{loc.line1}</p>
                <p className="mt-1 text-sm text-slate-500 dark:text-white/60">{loc.line2}</p>
                <a
                  href={loc.href}
                  target={loc.href.startsWith('http') ? '_blank' : undefined}
                  rel={loc.href.startsWith('http') ? 'noreferrer' : undefined}
                  className="btn-apple mt-5 inline-flex w-full items-center justify-center rounded-2xl bg-black/5 px-4 py-2 text-sm font-black text-slate-900 transition-colors hover:bg-black/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
                >
                  {loc.cta}
                </a>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 overflow-hidden rounded-[2rem] bg-black/[0.03] dark:bg-black/20">
            <div className="grid gap-0 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="p-7">
                <p className="text-sm font-black text-slate-900 dark:text-white">Get availability and pricing updates</p>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-white/70">
                  Optional email updates for seasonal availability, pricing changes, and shipment schedules.
                </p>
                <form className="mt-5 flex flex-col gap-3 sm:flex-row">
                  <input
                    type="email"
                    required
                    placeholder="you@example.com"
                    className="h-11 w-full rounded-2xl border border-black/10 bg-white px-4 text-sm text-slate-900 placeholder:text-slate-400 outline-none focus:border-black/20 dark:border-white/10 dark:bg-black/30 dark:text-white dark:placeholder:text-white/40 dark:focus:border-white/25"
                  />
                  <button
                    type="submit"
                    className="btn-apple h-11 rounded-2xl bg-white px-5 text-sm font-black text-black shadow-sm shadow-black/5 transition-shadow hover:shadow-md"
                  >
                    Subscribe
                  </button>
                </form>
                <p className="mt-3 text-xs text-slate-500 dark:text-white/50">No spam. Only relevant updates.</p>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/35 via-amber-400/25 to-sky-400/25" />
                <div className="absolute inset-0 opacity-[0.35] [background:radial-gradient(circle_at_1px_1px,rgba(0,0,0,.35)_1px,transparent_0)] [background-size:20px_20px]" />
                <div className="relative flex h-full items-end p-7">
                  <p className="text-balance text-2xl font-black tracking-tight text-black">
                    Reliable sourcing. Careful packing. On-time shipment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  )
}

export default App

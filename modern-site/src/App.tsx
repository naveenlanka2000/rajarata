import './App.css'
import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { ExportProcessSection } from './components/ExportProcessSection'
import { Footer } from './components/Footer'
import { GalleryCarousel } from './components/GalleryCarousel'
import { Hero } from './components/Hero'
import { Marquee } from './components/Marquee'
import { Navbar } from './components/Navbar'
import { ProductGrid } from './components/ProductGrid'
import { Section } from './components/Section'
import { gallerySlides } from './data/gallerySlides'
import { signatureItems } from './data/menu'

function IconMail(props: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={props.className}>
      <path
        d="M4.5 7.25h15a1.25 1.25 0 0 1 1.25 1.25v7a1.25 1.25 0 0 1-1.25 1.25h-15a1.25 1.25 0 0 1-1.25-1.25v-7A1.25 1.25 0 0 1 4.5 7.25Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path
        d="m5.4 8.4 5.37 4.2c.74.58 1.72.58 2.46 0l5.37-4.2"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function IconUserBadge(props: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={props.className}>
      <path d="M12 11.2a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4Z" stroke="currentColor" strokeWidth="1.7" />
      <path d="M6.1 18.4a5.9 5.9 0 0 1 11.8 0" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      <path
        d="M18.55 4.55h1.75m-.875-.88v1.76m-2.54 1.82.58-.58m3.66.58-.58-.58"
        stroke="currentColor"
        strokeWidth="1.55"
        strokeLinecap="round"
      />
    </svg>
  )
}

function IconMapPin(props: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={props.className}>
      <path
        d="M12 20.1s-5.1-4.82-5.1-9.02A5.1 5.1 0 1 1 17.1 11.08c0 4.2-5.1 9.02-5.1 9.02Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path d="M10.1 11.1h3.8M12 9.2v3.8" stroke="currentColor" strokeWidth="1.55" strokeLinecap="round" />
    </svg>
  )
}

function IconDestination(props: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={props.className}>
      <path d="M6 20V4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path
        d="M7 5.2h9.2l-1.9 3.3 1.9 3.3H7"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function IconPacking(props: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={props.className}>
      <path d="M4.5 8.2 12 4l7.5 4.2-7.5 4.1L4.5 8.2Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M4.5 8.2V16L12 20l7.5-4V8.2" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M12 12.3V20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )
}

function IconQuantity(props: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={props.className}>
      <path d="M6 7.5h12M6 12h12M6 16.5h12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M8.2 5.5v13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" opacity="0.55" />
    </svg>
  )
}

function IconAirSea(props: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={props.className}>
      <path d="M3.5 15.5h17" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M5 15.5 7.2 9h7.7l2.1 6.5" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M18 8l2.5-1.3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M9 18.3a1.3 1.3 0 1 0 0-2.6 1.3 1.3 0 0 0 0 2.6ZM15.4 18.3a1.3 1.3 0 1 0 0-2.6 1.3 1.3 0 0 0 0 2.6Z" fill="currentColor" />
    </svg>
  )
}

function IconDocuments(props: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={props.className}>
      <path d="M7 3.8h7l3 3V20H7V3.8Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M14 3.8v3h3" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M9.3 11h5.4M9.3 14h5.4M9.3 17h3.8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )
}

function IconIncoterms(props: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={props.className}>
      <circle cx="12" cy="12" r="7.5" stroke="currentColor" strokeWidth="1.8" />
      <path d="M12 8.3v4.1l2.7 1.6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function App() {
  useEffect(() => {
    const scrollToHash = () => {
      const hash = window.location.hash

      if (!hash) {
        return
      }

      const target = document.getElementById(decodeURIComponent(hash.slice(1)))

      if (!target) {
        return
      }

      target.scrollIntoView({ block: 'start' })
    }

    const runInitialScroll = () => {
      window.requestAnimationFrame(() => {
        window.requestAnimationFrame(scrollToHash)
      })
      window.setTimeout(scrollToHash, 180)
    }

    runInitialScroll()
    window.addEventListener('hashchange', scrollToHash)

    return () => {
      window.removeEventListener('hashchange', scrollToHash)
    }
  }, [])

  const requirementChips = [
    { label: 'Destination', Icon: IconDestination },
    { label: 'Packing spec', Icon: IconPacking },
    { label: 'Quantity', Icon: IconQuantity },
    { label: 'Air / Sea', Icon: IconAirSea },
    { label: 'Documents', Icon: IconDocuments },
    { label: 'Incoterms', Icon: IconIncoterms },
  ] as const
  const logisticsCards = [
    {
      title: 'Shipment planning',
      body: 'Destination, volume, and packing format are aligned early so export orders move with fewer delays and clearer booking decisions.',
      Icon: IconDestination,
    },
    {
      title: 'Document support',
      body: 'Commercial paperwork, packing references, and shipment details are organized around the buyer and destination requirements.',
      Icon: IconDocuments,
    },
    {
      title: 'Air and sea coordination',
      body: 'Rajarata Logistics supports the handover from packing to dispatch with practical coordination for air cargo and sea freight.',
      Icon: IconAirSea,
    },
  ] as const

  return (
    <div className="min-h-screen bg-transparent text-slate-900 dark:text-white">
      <Navbar />
      <main className="overflow-x-hidden">
        <Hero />

        <section className="overflow-x-hidden px-4 pb-12 pt-6 sm:px-6 lg:px-8">
          <div className="site-shell">
            <div className="mb-8 max-w-3xl xl:mb-10">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-white/60">Gallery</p>
              <h2 className="section-title-scale mt-3 max-w-[18ch] font-black tracking-tight text-slate-900 dark:text-white">
                Export Highlights
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-600 dark:text-white/70 sm:text-base xl:text-[1.05rem]">
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
              Product preview, <span className="text-slate-600 dark:text-white/70">with a dedicated catalog page</span>.
            </>
          }
          subtitle={
            <>
              The homepage now gives a quick product overview. Use the separate products page to browse the full catalog,
              review export support items, and prepare a clearer order brief.
            </>
          }
        >
          <div className="mb-6 flex justify-start">
            <a
              href="./products.html"
              className="btn-apple inline-flex items-center justify-center rounded-2xl bg-slate-900 px-5 py-3 text-sm font-black text-white shadow-sm shadow-black/10 transition-shadow hover:shadow-md dark:bg-white dark:text-black"
            >
              Open products page
            </a>
          </div>
          <ProductGrid items={signatureItems} />
        </Section>

        <ExportProcessSection />

        <Section
          id="story"
          className="pb-16 pt-8 sm:pb-20 sm:pt-10"
          eyebrow="Quality"
          title={
            <>
              Trusted sourcing, <span className="text-slate-600 dark:text-white/70">export-ready quality</span>.
            </>
          }
          subtitle="Sustainable practices, fair partnerships, and careful packing that protects products throughout transit."
        >
          <div className="mb-6 flex justify-start">
            <a
              href="./about.html"
              className="btn-apple inline-flex items-center justify-center rounded-2xl bg-slate-900 px-5 py-3 text-sm font-black text-white shadow-sm shadow-black/10 transition-shadow hover:shadow-md dark:bg-white dark:text-black"
            >
              Open about page
            </a>
          </div>

          <div className="grid gap-6 lg:grid-cols-2 lg:items-stretch">
            <div className="rounded-[2rem] border border-transparent bg-[color:var(--surface-base)] p-7 shadow-[var(--surface-shadow)] backdrop-blur-[18px] [-webkit-backdrop-filter:blur(18px)]">
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
                  <div key={row.k} className="theme-surface-muted rounded-2xl p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-white/60">
                      {row.k}
                    </p>
                    <p className="mt-1 text-sm font-semibold text-slate-800 dark:text-white/85">{row.v}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="theme-accent-panel rounded-[2rem] p-7">
              <h3 className="text-xl font-black text-slate-900 dark:text-white">Share your requirements</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-white/70">
                Tell us the destination country, required pack style (cartons/labels), and expected quantity. We will respond
                with availability, lead time, and pricing.
              </p>

              <div className="theme-surface-strong mt-6 rounded-[1.75rem] p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-white/60">
                  Quotation request example
                </p>
                <p className="mt-2 text-sm font-semibold text-slate-800 dark:text-white/85">
                  "King coconuts to UAE, air shipment, export cartons, quantity: 1x20ft (or your quantity). Please quote."
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {requirementChips.map(({ label, Icon }) => (
                    <span
                      key={label}
                      className="theme-chip inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-bold text-slate-700 dark:text-white/70"
                    >
                      <Icon className="h-3.5 w-3.5 opacity-80" />
                      {label}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Section>

        <Section
          id="logistics"
          className="pb-16 pt-4 sm:pb-20 sm:pt-6"
          eyebrow="Logistics"
          title={
            <>
              Rajarata Logistics, <span className="text-slate-600 dark:text-white/70">built around export movement</span>.
            </>
          }
          subtitle="A preview of the logistics service page for shipment planning, document support, and dispatch coordination after packing is complete."
        >
          <div className="grid gap-4 lg:grid-cols-[minmax(0,1.15fr)_minmax(300px,0.85fr)]">
            <div className="grid gap-4 sm:grid-cols-3">
              {logisticsCards.map(({ title, body, Icon }) => (
                <div key={title} className="theme-surface flex h-full flex-col rounded-none p-6">
                  <div className="theme-surface-strong inline-flex h-12 w-12 items-center justify-center rounded-xl text-slate-900 dark:text-white">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-lg font-black text-slate-900 dark:text-white">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-white/70">{body}</p>
                </div>
              ))}
            </div>

            <div className="theme-accent-panel rounded-[2rem] p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-white/60">
                Rajarata Logistics
              </p>
              <h3 className="mt-3 text-2xl font-black tracking-tight text-slate-900 dark:text-white">
                Clear coordination from packing floor to shipment handover.
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-white/70">
                Rajarata Logistics gives buyers a clearer view of pickup timing, shipment progress, and dispatch support
                once cargo is packed and ready to move.
              </p>
              <a
                href="./logistics.html"
                className="btn-apple mt-5 inline-flex items-center justify-center rounded-2xl bg-slate-900 px-5 py-3 text-sm font-black text-white shadow-sm shadow-black/10 transition-shadow hover:shadow-md dark:bg-white dark:text-black"
              >
                Open logistics page
              </a>
              <div className="mt-5 flex flex-wrap gap-2">
                {['Pickup planning', 'Port updates', 'Buyer coordination', 'Air / Sea dispatch'].map((item) => (
                  <span
                    key={item}
                    className="theme-chip inline-flex rounded-full px-3 py-1 text-xs font-bold text-slate-700 dark:text-white/70"
                  >
                    {item}
                  </span>
                ))}
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
                line2: 'Response time: 24-48 hours',
                href: 'mailto:rrpratnayake@gmail.com',
                cta: 'Email us',
                kind: 'email',
              },
              {
                name: 'Chairman',
                line1: 'R.R.P. Rathnayake',
                line2: 'Chairman - Rajarata Plantation Export (Pvt) Ltd',
                href: 'mailto:rrpratnayake@gmail.com',
                cta: 'Contact chairman',
                kind: 'chairman',
              },
              {
                name: 'Office',
                line1: 'Rajarata Plantation And Export PVT LTD',
                line2: '343Q+PQC, Hanwella - Kirindiwela - Urapola Rd, Sri Lanka',
                href: 'https://www.google.com/maps/search/?api=1&query=Rajarata%20Plantation%20And%20Export%20PVT%20LTD%2C%20343Q%2BPQC%2C%20Hanwella%20-%20Kirindiwela%20-%20Urapola%20Rd%2C%20Sri%20Lanka',
                cta: 'View location',
                kind: 'office',
              },
            ].map((loc, idx) => (
              <motion.div
                key={loc.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ type: 'spring', stiffness: 240, damping: 28, mass: 0.75, delay: idx * 0.05 }}
                className="theme-surface group flex h-full flex-col rounded-none p-6"
              >
                <div className="theme-surface-strong mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl text-slate-900 transition-transform duration-300 group-hover:scale-[1.22] dark:text-white">
                  {loc.kind === 'email' ? (
                    <IconMail className="h-6 w-6" />
                  ) : loc.kind === 'chairman' ? (
                    <IconUserBadge className="h-6 w-6" />
                  ) : (
                    <IconMapPin className="h-6 w-6" />
                  )}
                </div>
                <p className="text-lg font-black text-slate-900 dark:text-white">{loc.name}</p>
                <p className="mt-2 text-sm text-slate-700 dark:text-white/70">{loc.line1}</p>
                <p className="mt-1 text-sm text-slate-500 dark:text-white/60">{loc.line2}</p>
                <a
                  href={loc.href}
                  target={loc.href.startsWith('http') ? '_blank' : undefined}
                  rel={loc.href.startsWith('http') ? 'noreferrer' : undefined}
                  className="btn-apple theme-chip mt-auto inline-flex w-full items-center justify-center rounded-2xl px-4 py-2 text-sm font-black text-slate-900 dark:text-white"
                >
                  {loc.cta}
                </a>
              </motion.div>
            ))}
          </div>

          <div className="theme-surface mt-10 overflow-hidden rounded-[2rem]">
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
                    className="theme-input h-11 w-full rounded-2xl px-4 text-sm text-slate-900 placeholder:text-slate-400 outline-none focus:border-black/20 dark:text-white dark:placeholder:text-white/40 dark:focus:border-white/25"
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
              <div className="relative isolate border-t border-[color:var(--surface-border)] lg:border-l lg:border-t-0">
                <div className="theme-accent-mesh absolute inset-0" />
                <div className="absolute inset-0 opacity-[0.18] [background:radial-gradient(circle_at_1px_1px,rgba(15,23,42,.34)_1px,transparent_0)] [background-size:20px_20px] dark:opacity-[0.12] dark:[background:radial-gradient(circle_at_1px_1px,rgba(255,255,255,.18)_1px,transparent_0)]" />
                <div className="relative flex h-full items-end p-7">
                  <p className="text-balance text-2xl font-black tracking-tight text-slate-900 dark:text-white">
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

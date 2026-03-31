import { Footer } from './components/Footer'
import { Navbar } from './components/Navbar'

const overviewCards = [
  {
    title: 'Who we are',
    body: 'Rajarata Plantation Export (Pvt) Ltd is a Sri Lankan export company focused on fresh produce, practical packing, and reliable shipment readiness.',
  },
  {
    title: 'What we supply',
    body: 'Our work covers export-focused products such as king coconut, papaya, pineapple, tapioca, coconuts, and other fresh agricultural items.',
  },
  {
    title: 'How we work',
    body: 'We keep the process clear from sourcing and grading to packing, documentation support, and logistics coordination for buyers.',
  },
] as const

const capabilityChips = [
  'Sri Lankan produce',
  'Export packing',
  'Quality checks',
  'Buyer coordination',
  'Air and sea support',
  'Document guidance',
] as const

export default function AboutPage() {
  const baseUrl = import.meta.env.BASE_URL

  return (
    <div className="min-h-screen bg-transparent text-slate-900 dark:text-white">
      <Navbar page="about" />

      <main className="overflow-x-hidden">
        <section id="top" className="relative isolate overflow-hidden pt-28 sm:pt-32">
          <div className="hero-premium-bg absolute inset-0 -z-20" />

          <div className="site-shell px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8">
            <div className="max-w-4xl">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-amber-600 dark:text-amber-300">
                About Rajarata
              </p>
              <h1 className="section-title-scale font-black tracking-tight text-slate-900 dark:text-white">
                About Us
              </h1>
              <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600 dark:text-white/70 sm:text-lg">
                Rajarata Plantation Export (Pvt) Ltd connects Sri Lankan agricultural products with export buyers
                who need straightforward communication, clean packing, and dependable shipment support. Our goal is
                to present local produce with export discipline and practical service from inquiry to dispatch.
              </p>
            </div>

            <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {overviewCards.map((card) => (
                <article key={card.title} className="theme-surface p-6">
                  <h2 className="text-xl font-black tracking-tight text-slate-900 dark:text-white">{card.title}</h2>
                  <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-white/70">{card.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="pb-8 pt-2 sm:pb-12 sm:pt-4">
          <div className="site-shell px-4 sm:px-6 lg:px-8">
            <div className="grid gap-5 lg:grid-cols-[minmax(0,1.08fr)_minmax(300px,0.92fr)]">
              <div className="theme-surface p-7 sm:p-8">
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-amber-600 dark:text-amber-300">
                  Company Overview
                </p>
                <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-900 dark:text-white sm:text-4xl">
                  Export focused, buyer friendly, and built around real shipment work.
                </h2>
                <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-white/70 sm:text-base">
                  We combine local sourcing knowledge with export handling requirements so buyers get a clearer path
                  from product inquiry to shipment movement. That includes product selection, packing discussion,
                  commercial readiness, and the logistics support needed after cargo is prepared.
                </p>
                <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-white/70 sm:text-base">
                  Our approach stays practical. We focus on what buyers actually need: product clarity, packing
                  details, quality confidence, contact responsiveness, and shipment coordination that is easy to
                  understand.
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {capabilityChips.map((item) => (
                    <span
                      key={item}
                      className="theme-chip inline-flex px-3 py-1 text-xs font-bold uppercase tracking-[0.12em] text-slate-700 dark:text-white/70"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid gap-4">
                <article className="theme-surface flex items-center justify-between gap-4 p-5">
                  <div className="min-w-0">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-white/55">
                      Registration
                    </p>
                    <h3 className="mt-2 text-lg font-black text-slate-900 dark:text-white">
                      Industrial Development Board
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-white/70">
                      Registered company with IDB, Sri Lanka.
                    </p>
                  </div>
                  <img
                    src={`${baseUrl}idb-logo.png`}
                    alt="Industrial Development Board logo"
                    className="h-auto w-[5.4rem] shrink-0 object-contain rounded-xl bg-white p-2"
                    loading="lazy"
                    decoding="async"
                  />
                </article>

                <article className="theme-surface flex items-center justify-between gap-4 p-5">
                  <div className="min-w-0">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-white/55">
                      Registration
                    </p>
                    <h3 className="mt-2 text-lg font-black text-slate-900 dark:text-white">
                      Coconut Development Authority
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-white/70">
                      Registered with the Sri Lanka Coconut Development Authority.
                    </p>
                  </div>
                  <img
                    src={`${baseUrl}coconut-development-authority-logo.png`}
                    alt="Sri Lanka Coconut Development Authority logo"
                    className="h-auto w-[5.1rem] shrink-0 object-contain rounded-xl bg-white p-2"
                    loading="lazy"
                    decoding="async"
                  />
                </article>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="pb-16 pt-4 sm:pb-20 sm:pt-8">
          <div className="site-shell px-4 sm:px-6 lg:px-8">
            <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_320px]">
              <div className="theme-surface p-7 sm:p-8">
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-amber-600 dark:text-amber-300">
                  Contact
                </p>
                <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-900 dark:text-white sm:text-4xl">
                  Discuss products, packing, or export requirements.
                </h2>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600 dark:text-white/70 sm:text-base">
                  Reach out if you need pricing, availability, packing details, or export coordination support. We
                  can continue the discussion from product inquiry through shipment planning.
                </p>
              </div>

              <div className="theme-surface p-7 sm:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-white/55">
                  Email
                </p>
                <a
                  href="mailto:rrpratnayake@gmail.com"
                  className="mt-2 inline-block text-lg font-black tracking-tight text-slate-900 hover:text-amber-600 dark:text-white dark:hover:text-amber-300"
                >
                  rrpratnayake@gmail.com
                </a>
                <p className="mt-4 text-sm leading-6 text-slate-600 dark:text-white/70">
                  Rajarata Plantation Export (Pvt) Ltd
                  <br />
                  343Q+PQC, Hanwella - Kirindiwela - Urapola Rd, Sri Lanka
                </p>
                <div className="mt-5 flex flex-wrap gap-3">
                  <a
                    href="mailto:rrpratnayake@gmail.com"
                    className="btn-apple inline-flex items-center justify-center bg-slate-900 px-5 py-3 text-sm font-black text-white transition-colors hover:bg-slate-800 dark:bg-white dark:text-black dark:hover:bg-white/90"
                  >
                    Send email
                  </a>
                  <a
                    href="./index.html#locations"
                    className="theme-chip inline-flex items-center justify-center px-5 py-3 text-sm font-black text-slate-900 dark:text-white"
                  >
                    Main contact section
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer page="about" />
    </div>
  )
}

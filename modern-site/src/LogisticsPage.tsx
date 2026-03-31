import { Footer } from './components/Footer'
import { Navbar } from './components/Navbar'

type ServiceItem = {
  name: string
  image: string
  description: string
  points: string[]
}

const services: ServiceItem[] = [
  {
    name: 'Air Freight',
    image:
      'https://images.pexels.com/photos/4803814/pexels-photo-4803814.jpeg?auto=compress&cs=tinysrgb&w=1200',
    description:
      'Air freight support for urgent cargo, scheduled dispatches, and export loads that need faster transit planning.',
    points: ['Fast cargo movement', 'Airport handling coordination', 'Shipment status updates'],
  },
  {
    name: 'Sea Freight',
    image:
      'https://images.pexels.com/photos/20821680/pexels-photo-20821680.jpeg?auto=compress&cs=tinysrgb&w=1200',
    description:
      'Sea freight coordination for container-based exports where booking flow, vessel timing, and handover matter.',
    points: ['Container shipment planning', 'Port and vessel coordination', 'Bulk export support'],
  },
  {
    name: 'Prime Movers',
    image:
      'https://images.pexels.com/photos/6563903/pexels-photo-6563903.jpeg?auto=compress&cs=tinysrgb&w=1200',
    description:
      'Prime mover transport for inland cargo movement between farms, packing locations, warehouses, and port handover points.',
    points: ['Container haulage support', 'Road transport coordination', 'Pickup to port movement'],
  },
]

const briefItems = [
  'Destination country',
  'Cargo type',
  'Air freight or sea freight',
  'Required dispatch date',
  'Packing format',
  'Delivery point',
] as const

export default function LogisticsPage() {
  const baseUrl = import.meta.env.BASE_URL

  return (
    <div className="min-h-screen bg-transparent text-slate-900 dark:text-white">
      <Navbar page="logistics" />

      <main className="overflow-x-hidden">
        <section id="top" className="relative isolate overflow-hidden pt-28 sm:pt-32">
          <div className="hero-premium-bg absolute inset-0 -z-20" />

          <div className="site-shell px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8">
            <div className="max-w-5xl">
              <div className="max-w-4xl">
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-amber-600 dark:text-amber-300">
                  Rajarata Logistics
                </p>
                <div className="mt-3 flex items-center gap-4 sm:gap-5">
                  <img
                    src={`${baseUrl}rajarata-logistics-logo-cutout.png`}
                    alt="Rajarata Logistics logo"
                    className="block h-auto object-contain"
                    style={{ width: '138px', maxWidth: '138px' }}
                  />
                  <h1 className="section-title-scale font-black tracking-tight text-slate-900 dark:text-white">
                    Logistics
                  </h1>
                </div>
                <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600 dark:text-white/70 sm:text-lg">
                  Our logistics page focuses on the essential transport services buyers usually ask for. We support
                  air freight, sea freight, and prime mover coordination with practical shipment handling and clear
                  communication from dispatch planning to cargo movement.
                </p>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {['Air Freight', 'Sea Freight', 'Prime Movers', 'Dispatch Coordination'].map((item) => (
                <span
                  key={item}
                  className="theme-chip inline-flex px-3 py-1 text-xs font-bold uppercase tracking-[0.12em] text-slate-700 dark:text-white/70"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {services.map((service) => (
                <article key={service.name} className="theme-surface overflow-hidden">
                  <div className="aspect-[4/3] bg-white/70 dark:bg-white/5">
                    <img
                      src={service.image}
                      alt={service.name}
                      loading="lazy"
                      className="h-full w-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  <div className="p-6">
                    <h2 className="text-2xl font-black tracking-tight text-slate-900 dark:text-white">
                      {service.name}
                    </h2>
                    <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-white/70">
                      {service.description}
                    </p>

                    <ul className="mt-5 space-y-2 text-sm font-medium text-slate-700 dark:text-white/75">
                      {service.points.map((point) => (
                        <li key={point} className="border-t border-[color:var(--surface-border)] pt-2">
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="pb-16 pt-2 sm:pb-20 sm:pt-6">
          <div className="site-shell px-4 sm:px-6 lg:px-8">
            <div className="grid gap-5 lg:grid-cols-[minmax(0,1.15fr)_minmax(320px,0.85fr)]">
              <div className="theme-surface p-7 sm:p-8">
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-amber-600 dark:text-amber-300">
                  Shipment Brief
                </p>
                <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-900 dark:text-white sm:text-4xl">
                  Send the shipment details clearly.
                </h2>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600 dark:text-white/70 sm:text-base">
                  A complete brief helps logistics planning move faster. Share the destination, transport mode,
                  packing details, and dispatch timing so we can respond with the right handling approach.
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {briefItems.map((item) => (
                    <span
                      key={item}
                      className="theme-chip inline-flex px-3 py-1 text-xs font-bold uppercase tracking-[0.12em] text-slate-700 dark:text-white/70"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="theme-surface p-7 sm:p-8">
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-amber-600 dark:text-amber-300">
                  Contact
                </p>
                <div className="mt-4 space-y-5">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-white/55">
                      Email
                    </p>
                    <a
                      href="mailto:info@rajaratalogistics.com"
                      className="mt-2 inline-block text-lg font-black tracking-tight text-slate-900 hover:text-amber-600 dark:text-white dark:hover:text-amber-300"
                    >
                      info@rajaratalogistics.com
                    </a>
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-white/55">
                      Best for
                    </p>
                    <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-white/70">
                      Air freight requests, sea freight planning, prime mover coordination, and export dispatch
                      questions.
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <a
                      href="mailto:info@rajaratalogistics.com"
                      className="btn-apple inline-flex items-center justify-center bg-slate-900 px-5 py-3 text-sm font-black text-white transition-colors hover:bg-slate-800 dark:bg-white dark:text-black dark:hover:bg-white/90"
                    >
                      Send logistics email
                    </a>
                    <a
                      href="./index.html#top"
                      className="theme-chip inline-flex items-center justify-center px-5 py-3 text-sm font-black text-slate-900 dark:text-white"
                    >
                      Back to main page
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer page="logistics" />
    </div>
  )
}

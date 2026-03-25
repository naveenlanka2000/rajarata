import { motion } from 'framer-motion'
import { buildSteps } from '../data/menu'

const timelineTitles = [
  'Harvest-Sourced Selection',
  'Precision Grading & Packing',
  'Quality Checks & Compliance',
  'Dispatch & Delivery Updates',
] as const

export function ExportProcessSection() {
  const baseUrl = import.meta.env.BASE_URL

  const collageCards = [
    {
      src: `${baseUrl}export-process-papaya-farm-optimized.jpg`,
      alt: 'Papaya field prepared for harvest and sourcing',
      label: 'Field sourcing',
      className: 'right-[3%] top-[2%] w-[74%] rotate-[-10deg]',
      imageWrap: 'bg-slate-100 dark:bg-slate-900',
    },
    {
      src: `${baseUrl}export-process-pineapple-farm-optimized.jpg`,
      alt: 'Pineapple farm image showing field harvest',
      label: 'Harvest stage',
      className: 'left-[10%] top-[46%] w-[64%] rotate-[9deg]',
      imageWrap: 'bg-slate-100 dark:bg-slate-900',
    },
  ] as const

  return (
    <section
      id="how"
      className="scroll-mt-24 overflow-hidden bg-[linear-gradient(180deg,rgba(248,250,252,0.72)_0%,rgba(241,245,249,0.9)_100%)] py-16 dark:bg-[linear-gradient(180deg,rgba(0,0,0,1)_0%,rgba(0,0,0,1)_100%)] sm:scroll-mt-28 sm:py-24"
    >
      <div className="site-shell px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ type: 'spring', stiffness: 220, damping: 28, mass: 0.8 }}
          className="max-w-4xl"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-600 dark:text-white/70">
            Export process
          </p>
          <h2 className="mt-3 text-balance text-2xl font-black tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            From Sri Lankan Farms
            <br className="hidden sm:block" /> to Global Shipments.
          </h2>
          <p className="mt-5 max-w-2xl text-pretty text-[0.98rem] leading-relaxed text-slate-600 dark:text-white/70 sm:text-lg">
            Every order moves through a disciplined workflow that protects freshness, packing accuracy, and export
            readiness before dispatch.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(360px,0.94fr)] lg:gap-14 xl:grid-cols-[minmax(0,1fr)_minmax(420px,0.92fr)] xl:gap-16">
          <div className="relative">
            <div className="space-y-7 sm:space-y-8">
              {buildSteps.map((step, idx) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ type: 'spring', stiffness: 240, damping: 28, mass: 0.75, delay: idx * 0.05 }}
                  className="grid grid-cols-[3.6rem_minmax(0,1fr)] gap-4 md:grid-cols-[minmax(0,1fr)_4.75rem]"
                >
                  <div className="relative flex justify-center md:order-2">
                    {idx < buildSteps.length - 1 ? (
                      <span className="animate-gradient-pan absolute left-1/2 top-12 h-[calc(100%+1.6rem)] w-[2px] -translate-x-1/2 bg-[linear-gradient(180deg,#f59ab3_0%,#d86dea_52%,#7aa2ff_100%)] opacity-70 dark:opacity-80" />
                    ) : null}
                    <span className="animate-gradient-pan grid h-12 w-12 place-items-center rounded-full bg-[linear-gradient(135deg,#f59ab3_0%,#d86dea_48%,#7aa2ff_100%)] text-xl font-black text-white shadow-[0_18px_30px_-18px_rgba(122,102,255,0.58)]">
                      {idx + 1}
                    </span>
                  </div>

                  <div className="pt-1 md:order-1 md:pr-10 md:pt-0 md:text-right">
                    <p className="text-[1.45rem] font-black tracking-tight text-slate-900 dark:text-white sm:text-[1.7rem] lg:text-[2rem]">
                      {timelineTitles[idx]}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-white/68 sm:text-base lg:text-[1.08rem]">
                      {step.body}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 28, rotate: -1.5 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
            viewport={{ once: true, margin: '-90px' }}
            transition={{ type: 'spring', stiffness: 170, damping: 24, mass: 0.9 }}
            className="relative min-h-[30rem] sm:min-h-[38rem] lg:min-h-[44rem] xl:min-h-[47rem]"
          >
            {collageCards.map((card, idx) => (
              <motion.article
                key={card.label}
                initial={{ opacity: 0, y: 30, rotate: idx === 0 ? -14 : 14 }}
                whileInView={{ opacity: 1, y: 0, rotate: idx === 0 ? -10 : 9 }}
                viewport={{ once: true, margin: '-90px' }}
                transition={{ type: 'spring', stiffness: 190, damping: 22, mass: 0.85, delay: idx * 0.08 }}
                className={`theme-surface-strong absolute rounded-none p-4 !shadow-none ${card.className}`}
              >
                <div className={`overflow-hidden rounded-none ${card.imageWrap}`}>
                  <img
                    src={card.src}
                    alt={card.alt}
                    loading="lazy"
                    decoding="async"
                    className="h-[16rem] w-full object-cover sm:h-[18rem]"
                  />
                </div>
                <p className="mt-3 text-[0.72rem] font-black uppercase tracking-[0.18em] text-slate-800 dark:text-white/82 sm:text-[0.76rem]">
                  {card.label}
                </p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

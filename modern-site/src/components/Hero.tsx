import { motion } from 'framer-motion'

const heroHighlights = [
  { title: 'Packing', subtitle: 'export-ready' },
  { title: 'Quality', subtitle: 'inspection' },
  { title: 'Documentation', subtitle: 'export support' },
] as const

export function Hero() {
  const baseUrl = import.meta.env.BASE_URL
  const floatingProduce = [
    {
      src: `${baseUrl}produce-01.png`,
      className: 'left-[-2.75rem] top-4 w-28 sm:left-[1%] sm:top-4 sm:w-36 lg:left-[2%] lg:top-0 lg:w-48',
      haloClassName: 'hero-produce-halo-amber',
      enterY: -28,
      duration: 18,
      delay: 0.25,
      drift: {
        x: [0, 24, -10, 18, 0],
        y: [0, 16, -14, 12, 0],
        rotate: [-7, -2, -9, -4, -7],
        scale: [1, 1.03, 0.99, 1.04, 1],
      },
    },
    {
      src: `${baseUrl}produce-02.png`,
      className: 'right-[-2.5rem] top-12 w-28 sm:right-[2%] sm:top-8 sm:w-36 lg:right-[4%] lg:top-4 lg:w-44',
      haloClassName: 'hero-produce-halo-lime',
      enterY: -24,
      duration: 17,
      delay: 0.5,
      drift: {
        x: [0, -20, 14, -16, 0],
        y: [0, -14, 10, -18, 0],
        rotate: [8, 4, 10, 5, 8],
        scale: [1, 1.02, 0.98, 1.03, 1],
      },
    },
    {
      src: `${baseUrl}produce-03.png`,
      className: 'bottom-[-2.5rem] left-[4%] w-32 sm:bottom-[-1.75rem] sm:left-[10%] sm:w-40 lg:bottom-[-2.25rem] lg:left-[7%] lg:w-52',
      haloClassName: 'hero-produce-halo-sky',
      enterY: 32,
      duration: 20,
      delay: 0.15,
      drift: {
        x: [0, 18, -14, 16, 0],
        y: [0, -20, 12, -14, 0],
        rotate: [-6, -1, -8, -3, -6],
        scale: [1, 1.04, 0.99, 1.02, 1],
      },
    },
    {
      src: `${baseUrl}produce-04.png`,
      className: 'bottom-[-2.25rem] right-[1%] w-32 sm:bottom-[-1.25rem] sm:right-[9%] sm:w-40 lg:bottom-[-2rem] lg:right-[8%] lg:w-48',
      haloClassName: 'hero-produce-halo-rose',
      enterY: 28,
      duration: 19,
      delay: 0.4,
      drift: {
        x: [0, -22, 12, -18, 0],
        y: [0, 14, -12, 16, 0],
        rotate: [6, 2, 8, 3, 6],
        scale: [1, 1.02, 0.98, 1.03, 1],
      },
    },
  ]

  return (
    <section id="top" className="relative isolate overflow-hidden pt-24 sm:pt-32">
      <div className="hero-premium-bg absolute inset-0 -z-30" />
      <div className="pointer-events-none absolute inset-0 -z-20 opacity-[0.45] [background:radial-gradient(circle_at_1px_1px,rgba(15,23,42,.10)_1px,transparent_0)] [background-size:24px_24px] dark:opacity-[0.18]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-40 bg-gradient-to-b from-white/65 to-transparent dark:from-black/25 dark:to-transparent" />

      {floatingProduce.map((item, index) => (
        <motion.div
          key={item.src}
          initial={{ opacity: 0, scale: 0.86, y: item.enterY }}
          animate={{
            opacity: 1,
            x: item.drift.x,
            y: item.drift.y,
            rotate: item.drift.rotate,
            scale: item.drift.scale,
          }}
          transition={{
            duration: item.duration,
            delay: item.delay,
            ease: 'easeInOut',
            repeat: Infinity,
            repeatType: 'mirror',
          }}
          className={`pointer-events-none absolute z-10 ${item.className}`}
        >
          <div className={`hero-produce-halo ${item.haloClassName}`} />
          <img
            src={item.src}
            alt=""
            aria-hidden="true"
            className="hero-floating-produce relative w-full object-contain"
            loading={index < 2 ? 'eager' : 'lazy'}
            decoding="async"
          />
        </motion.div>
      ))}

      <div className="mx-auto flex min-h-[calc(100vh-7rem)] w-full max-w-6xl items-center px-4 pb-12 sm:px-6 lg:px-8">
        <div className="relative z-20 max-w-2xl py-8 lg:max-w-3xl lg:py-12">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 280, damping: 26, mass: 0.7 }}
            className="hero-frost-card inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-700 dark:text-white/80 sm:px-4 sm:py-2 sm:text-xs sm:tracking-[0.18em]"
          >
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            Sri Lanka origin | export-grade supply
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 240, damping: 26, mass: 0.8, delay: 0.03 }}
            className="hero-home-title mt-5 max-w-3xl text-balance font-black leading-[0.92] tracking-tight text-slate-900 dark:text-white"
          >
            Premium Tropical Produce
            <span className="block bg-gradient-to-r from-amber-300 via-fuchsia-400 to-sky-400 bg-clip-text text-transparent animate-gradient-pan">
              from Sri Lanka.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 220, damping: 26, mass: 0.8, delay: 0.08 }}
            className="mt-4 max-w-xl text-pretty text-[0.97rem] leading-relaxed text-slate-600 dark:text-white/70 sm:mt-5 sm:text-lg"
          >
            Rajarata Plantation Export (Pvt) Ltd supplies premium Sri Lankan produce with consistent quality and careful
            handling.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.18 }}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <a
              href="#menu"
              className="btn-apple inline-flex w-full items-center justify-center rounded-2xl bg-slate-900 px-6 py-3 text-sm font-black text-white shadow-sm shadow-black/10 transition-shadow hover:shadow-md dark:bg-white dark:text-black sm:w-auto"
            >
              View products
            </a>
            <a
              href="#how"
              className="btn-apple inline-flex w-full items-center justify-center rounded-2xl border border-black/10 bg-white/55 px-6 py-3 text-sm font-black text-slate-900 transition-colors hover:bg-white/70 dark:border-white/15 dark:bg-white/5 dark:text-white dark:hover:bg-white/10 sm:w-auto"
            >
              Export process
            </a>
          </motion.div>

          <div className="mt-10 grid max-w-3xl grid-cols-1 gap-3 text-slate-600 dark:text-white/70 min-[480px]:grid-cols-3 sm:gap-4">
            {heroHighlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.16 + index * 0.05 }}
                className="hero-frost-card rounded-[1.6rem] p-4 sm:p-5"
              >
                <p className="text-lg font-black text-slate-900 dark:text-white sm:text-xl">{item.title}</p>
                <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500 dark:text-white/60">
                  {item.subtitle}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-14">
        <div className="mx-auto h-px w-full max-w-6xl bg-gradient-to-r from-transparent via-white/15 to-transparent" />
      </div>
    </section>
  )
}

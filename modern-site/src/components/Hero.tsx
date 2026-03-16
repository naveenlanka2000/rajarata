import { motion } from 'framer-motion'

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 sm:pt-32">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-fuchsia-500/30 blur-3xl" />
        <div className="absolute -right-24 top-10 h-80 w-80 rounded-full bg-amber-400/25 blur-3xl" />
        <div className="absolute left-1/2 top-56 h-96 w-96 -translate-x-1/2 rounded-full bg-sky-400/15 blur-3xl" />
        <div className="absolute inset-0 opacity-[0.35] [background:radial-gradient(circle_at_1px_1px,rgba(255,255,255,.12)_1px,transparent_0)] [background-size:24px_24px]" />
      </div>

      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: 'spring', stiffness: 280, damping: 26, mass: 0.7 }}
              className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-black/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-white/80"
            >
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Sri Lanka origin • export-grade supply
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: 'spring', stiffness: 240, damping: 26, mass: 0.8, delay: 0.03 }}
              className="mt-5 text-balance text-5xl font-black tracking-tight text-slate-900 dark:text-white sm:text-6xl lg:text-7xl"
            >
              Export partner for
              <span className="block bg-gradient-to-r from-amber-300 via-fuchsia-400 to-sky-400 bg-clip-text text-transparent animate-gradient-pan">
                King Coconuts, Red Papaya, and Tapioca.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: 'spring', stiffness: 220, damping: 26, mass: 0.8, delay: 0.08 }}
              className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-slate-600 dark:text-white/70 sm:text-lg"
            >
              We supply export-grade produce and tapioca products with quality inspection, packing to specification, and
              shipment coordination. Share your destination and requirements, and we will prepare the appropriate packing
              and documentation.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.18 }}
              className="mt-8 flex flex-col gap-3 sm:flex-row"
            >
              <a
                href="#menu"
                className="btn-apple inline-flex items-center justify-center rounded-2xl bg-slate-900 px-6 py-3 text-sm font-black text-white shadow-sm shadow-black/10 transition-shadow hover:shadow-md dark:bg-white dark:text-black"
              >
                View products
              </a>
              <a
                href="#how"
                className="btn-apple inline-flex items-center justify-center rounded-2xl border border-black/10 bg-black/5 px-6 py-3 text-sm font-black text-slate-900 transition-colors hover:bg-black/10 dark:border-white/15 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
              >
                Export process
              </a>
            </motion.div>

            <div className="mt-10 grid max-w-xl grid-cols-3 gap-4 text-slate-600 dark:text-white/70">
              <div className="rounded-2xl bg-black/[0.03] p-4 dark:bg-white/5">
                <p className="text-2xl font-black text-slate-900 dark:text-white">Packing</p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.18em]">export-ready</p>
              </div>
              <div className="rounded-2xl bg-black/[0.03] p-4 dark:bg-white/5">
                <p className="text-2xl font-black text-slate-900 dark:text-white">Quality</p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.18em]">inspection</p>
              </div>
              <div className="rounded-2xl bg-black/[0.03] p-4 dark:bg-white/5">
                <p className="text-2xl font-black text-slate-900 dark:text-white">Documentation</p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.18em]">export support</p>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative"
          >
            <div className="absolute inset-0 -z-10 rounded-[2.5rem] bg-gradient-to-br from-white/10 to-white/0 blur-xl" />
            <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-black/[0.03] to-black/[0.02] p-6 dark:from-white/10 dark:to-white/5">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-600 dark:text-white/70">Featured product</p>
                  <p className="mt-2 text-2xl font-black tracking-tight text-slate-900 dark:text-white">King Coconuts</p>
                </div>
                <span className="rounded-full bg-black/5 px-3 py-1 text-xs font-bold text-slate-700 dark:bg-white/10 dark:text-white/80">
                  Export
                </span>
              </div>

              <div className="mt-6 grid gap-3">
                {[
                  { k: 'Origin', v: 'Sri Lanka' },
                  { k: 'Packing', v: 'To your specification' },
                  { k: 'Shipping', v: 'Air or sea freight' },
                  { k: 'Documents', v: 'Support as required' },
                ].map((row) => (
                  <div key={row.k} className="flex items-center justify-between rounded-2xl bg-white/60 px-4 py-3 dark:bg-black/20">
                    <span className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-white/60">{row.k}</span>
                    <span className="text-sm font-semibold text-slate-800 dark:text-white/85">{row.v}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex items-center justify-between">
                <p className="text-sm font-semibold text-slate-600 dark:text-white/70">Quotes based on quantity and destination</p>
                <a
                  href="#locations"
                  className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-amber-300 via-fuchsia-400 to-sky-400 px-4 py-2 text-sm font-black text-black"
                >
                  Contact us
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="mt-14">
        <div className="mx-auto h-px w-full max-w-6xl bg-gradient-to-r from-transparent via-white/15 to-transparent" />
      </div>
    </section>
  )
}

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

export function Hero() {
  const baseUrl = import.meta.env.BASE_URL
  const [activeSlideIndex, setActiveSlideIndex] = useState(0)
  const slideDurationMs = 6000

  const slides = [
    {
      key: 'coconut',
      badge: 'Sri Lanka origin | export-grade supply',
      titleLines: ['Premium Tropical', 'Produce', 'from Sri Lanka.'],
      description:
        'Rajarata Plantation Export (Pvt) Ltd supplies premium Sri Lankan produce with consistent quality and careful handling.',
      imageSrc: `${baseUrl}hero-side-image.png`,
      imageInitial: { opacity: 0, y: -180, scale: 0.94 },
      backgroundImageSrc: `${baseUrl}hero-coconut-bg.png`,
    },
    {
      key: 'papaya',
      badge: 'Red papaya | export-ready packing',
      titleLines: ['Red Papaya', 'for Export', 'from Sri Lanka.'],
      description:
        'Fresh Sri Lankan red papaya selected, packed, and prepared for export with reliable handling for international buyers.',
      imageSrc: `${baseUrl}hero-papaya-box.png`,
      imageInitial: { opacity: 0, y: -180, scale: 0.94 },
      backgroundImageSrc: `${baseUrl}gallery-red-papaya.png`,
    },
    {
      key: 'pineapple',
      badge: 'Fresh pineapple | export-ready packing',
      titleLines: ['Fresh Pineapple', 'for Export', 'from Sri Lanka.'],
      description:
        'Fresh Sri Lankan pineapple packed for export with dependable quality, careful sorting, and shipment-ready presentation.',
      imageSrc: `${baseUrl}hero-pineapple-box.png`,
      imageInitial: { opacity: 0, y: -180, scale: 0.94 },
      backgroundImageSrc: `${baseUrl}hero-pineapple-bg.png`,
    },
    {
      key: 'tapioca',
      badge: 'Fresh tapioca | export-ready packing',
      titleLines: ['Fresh Tapioca', 'for Export', 'from Sri Lanka.'],
      description:
        'Fresh Sri Lankan tapioca prepared for export with consistent grading, careful packing, and reliable shipment readiness.',
      imageSrc: `${baseUrl}hero-tapioca-box.png`,
      imageInitial: { opacity: 0, y: -180, scale: 0.94 },
      backgroundImageSrc: `${baseUrl}hero-tapioca-bg.png`,
    },
  ] as const
  const slideCount = slides.length

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveSlideIndex((currentIndex) => (currentIndex + 1) % slideCount)
    }, slideDurationMs)

    return () => {
      window.clearInterval(interval)
    }
  }, [slideCount, slideDurationMs])

  const currentSlide = slides[activeSlideIndex]

  return (
    <section id="top" className="relative isolate overflow-hidden pt-24 sm:pt-32">
      <div className="hero-premium-bg absolute inset-0 -z-30" />
      <AnimatePresence>
        {currentSlide.backgroundImageSrc ? (
          <motion.div
            key={`${currentSlide.key}-bg`}
            initial={{ opacity: 0, scale: 1.08, filter: 'blur(18px)' }}
            animate={{ opacity: 0.24, scale: 1, filter: 'blur(0px)' }}
            exit={{ opacity: 0, scale: 1.04, filter: 'blur(12px)' }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 -z-[25] overflow-hidden"
          >
            <div
              className="absolute left-1/2 top-1/2 h-[115vw] w-[170vh] -translate-x-1/2 -translate-y-1/2 rotate-90 bg-contain bg-center bg-no-repeat sm:left-0 sm:top-0 sm:h-full sm:w-full sm:translate-x-0 sm:translate-y-0 sm:rotate-0 sm:bg-cover"
              style={{ backgroundImage: `url(${currentSlide.backgroundImageSrc})` }}
            />
          </motion.div>
        ) : null}
      </AnimatePresence>
      <div className="pointer-events-none absolute inset-0 -z-20 opacity-[0.45] [background:radial-gradient(circle_at_1px_1px,rgba(15,23,42,.10)_1px,transparent_0)] [background-size:24px_24px] dark:opacity-[0.18]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-40 bg-gradient-to-b from-white/65 to-transparent dark:from-black/25 dark:to-transparent" />

      <div className="mx-auto grid min-h-[calc(100vh-7rem)] w-full max-w-6xl items-center gap-10 px-4 pb-12 sm:px-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(320px,0.95fr)] lg:gap-12 lg:px-8 xl:gap-16">
        <div className="relative z-10 max-w-2xl py-8 sm:-translate-y-2 lg:max-w-none lg:-translate-y-8 lg:py-12 xl:-translate-y-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide.key}
              initial={{ opacity: 0, x: -120 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -150 }}
              transition={{ type: 'spring', stiffness: 110, damping: 18, mass: 0.95 }}
            >
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: 'spring', stiffness: 280, damping: 26, mass: 0.7 }}
                className="hero-frost-card -mt-10 inline-flex max-w-full items-center gap-2 rounded-full px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-700 dark:text-white/80 sm:-mt-12 sm:w-fit sm:px-4 sm:py-2 sm:text-xs sm:tracking-[0.18em] sm:whitespace-nowrap lg:-mt-14"
              >
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                {currentSlide.badge}
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: 'spring', stiffness: 240, damping: 26, mass: 0.8, delay: 0.03 }}
                className="hero-home-title mt-5 font-black leading-[0.92] tracking-tight text-slate-900 dark:text-white"
              >
                <span className="block lg:whitespace-nowrap">{currentSlide.titleLines[0]}</span>
                <span className="block lg:whitespace-nowrap">{currentSlide.titleLines[1]}</span>
                <span className="block bg-gradient-to-r from-amber-300 via-fuchsia-400 to-sky-400 bg-clip-text text-transparent animate-gradient-pan lg:whitespace-nowrap">
                  {currentSlide.titleLines[2]}
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: 'spring', stiffness: 220, damping: 26, mass: 0.8, delay: 0.08 }}
                className="mt-4 max-w-xl text-pretty text-[0.97rem] leading-relaxed text-slate-600 dark:text-white/70 sm:mt-5 sm:text-lg"
              >
                {currentSlide.description}
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
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="pointer-events-none relative order-last mx-auto w-full max-w-[20rem] sm:max-w-[23rem] lg:order-none lg:max-w-none lg:self-center lg:-translate-y-4 xl:-translate-y-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide.key}
              initial={currentSlide.imageInitial}
              animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
              exit={{ opacity: 0, x: 160, scale: 0.96 }}
              transition={{ type: 'spring', stiffness: 120, damping: 16, mass: 0.95, delay: 0.12 }}
              className="relative mx-auto w-full max-w-[30rem] lg:ml-auto lg:mr-0 xl:max-w-[34rem]"
            >
              <div className="hero-spotlight-glow" />
              <div className="absolute inset-x-[12%] bottom-[8%] h-16 rounded-full bg-white/8 blur-3xl dark:bg-white/6" />
              <img
                src={currentSlide.imageSrc}
                alt=""
                aria-hidden="true"
                className="hero-floating-produce relative w-full object-contain"
                loading="eager"
                decoding="async"
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <div className="mt-14">
        <div className="mx-auto h-px w-full max-w-6xl bg-gradient-to-r from-transparent via-white/15 to-transparent" />
      </div>
    </section>
  )
}

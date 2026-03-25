import { motion } from 'framer-motion'
import type { MenuItem } from '../data/menu'

type ProductGridProps = {
  items: MenuItem[]
}

export function ProductGrid({ items }: ProductGridProps) {
  const baseUrl = import.meta.env.BASE_URL

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item, idx) => {
        const imageSrc = item.image
          ? item.image.startsWith('http://') || item.image.startsWith('https://')
            ? item.image
            : `${baseUrl}${item.image}`
          : null

        return (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ type: 'spring', stiffness: 240, damping: 28, mass: 0.7, delay: idx * 0.04 }}
            whileHover={{ y: -12, scale: 1.02, transition: { type: 'spring', stiffness: 420, damping: 26, mass: 0.6 } }}
            whileTap={{ scale: 0.995 }}
            className="theme-surface group relative overflow-hidden rounded-none p-5 transition-transform duration-300 ease-out will-change-transform"
          >
            <div
              className={`absolute inset-0 z-0 bg-gradient-to-br ${item.gradient} opacity-18 blur-2xl transition-opacity duration-300 ease-out group-hover:opacity-28 dark:opacity-15 dark:group-hover:opacity-24`}
            />
            <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.16),transparent_45%)] opacity-65 transition-opacity duration-300 ease-out group-hover:opacity-85 dark:opacity-20 dark:group-hover:opacity-30" />
            {imageSrc ? (
              <>
                <img
                  src={imageSrc}
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  decoding="async"
                  className={`pointer-events-none absolute inset-0 z-0 h-full w-full select-none object-cover opacity-[0.42] transition-opacity duration-300 ease-out group-hover:opacity-[0.52] dark:opacity-[0.18] dark:group-hover:opacity-[0.26] ${item.imageClassName ?? 'object-center'}`}
                />
                <div className="absolute inset-0 z-[1] bg-[linear-gradient(90deg,rgba(255,255,255,0.96)_0%,rgba(255,255,255,0.82)_28%,rgba(255,255,255,0.42)_56%,rgba(255,255,255,0.08)_100%)] dark:bg-[linear-gradient(90deg,rgba(0,0,0,0.97)_0%,rgba(0,0,0,0.9)_34%,rgba(0,0,0,0.72)_56%,rgba(0,0,0,0.46)_100%)]" />
              </>
            ) : null}

            <div className="relative z-10 flex h-full flex-col">
              <div className="flex items-start justify-between gap-4">
                <div className={item.image ? 'max-w-[76%] sm:max-w-[74%]' : ''}>
                  <h3 className="text-lg font-black tracking-tight text-slate-900 dark:text-white">{item.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-white/70">{item.description}</p>
                </div>
                {item.tag ? (
                  <span className="theme-chip shrink-0 rounded-full px-3 py-1 text-xs font-bold text-slate-700 dark:text-white/80">
                    {item.tag}
                  </span>
                ) : null}
              </div>

              <div className="mt-5 flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-white/60">
                  Product / service
                </span>
                <span className="text-sm font-black text-slate-900 transition-colors duration-200 group-hover:text-black dark:text-white/90 dark:group-hover:text-white">
                  Request details {'->'}
                </span>
              </div>
            </div>
          </motion.div>
        )
      })}
    </div>
  )
}

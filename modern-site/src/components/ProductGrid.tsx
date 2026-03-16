import { motion } from 'framer-motion'
import type { MenuItem } from '../data/menu'

type ProductGridProps = {
  items: MenuItem[]
}

export function ProductGrid({ items }: ProductGridProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item, idx) => (
        <motion.div
          key={item.name}
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ type: 'spring', stiffness: 240, damping: 28, mass: 0.7, delay: idx * 0.04 }}
          whileHover={{ y: -12, scale: 1.02, transition: { type: 'spring', stiffness: 420, damping: 26, mass: 0.6 } }}
          whileTap={{ scale: 0.995 }}
          className="group relative overflow-hidden rounded-[1.75rem] bg-black/[0.03] p-5 transition-transform duration-300 ease-out will-change-transform hover:bg-black/[0.05] dark:bg-white/5 dark:hover:bg-white/[0.08]"
        >
          <div
            className={`absolute inset-0 -z-10 bg-gradient-to-br ${item.gradient} opacity-25 blur-2xl transition-opacity duration-300 ease-out group-hover:opacity-40`}
          />
          <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.18),transparent_45%)] opacity-70 transition-opacity duration-300 ease-out group-hover:opacity-100" />

          <div className="flex h-full flex-col">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-lg font-black tracking-tight text-slate-900 dark:text-white">{item.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-white/70">{item.description}</p>
              </div>
            {item.tag ? (
              <span className="shrink-0 rounded-full bg-black/5 px-3 py-1 text-xs font-bold text-slate-700 dark:bg-white/10 dark:text-white/80">
                {item.tag}
              </span>
            ) : null}
            </div>

            <div className="mt-5 flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-white/60">
                Product / service
              </span>
              <span className="text-sm font-black text-slate-900 transition-colors duration-200 group-hover:text-black dark:text-white/90 dark:group-hover:text-white">
                Request details →
              </span>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

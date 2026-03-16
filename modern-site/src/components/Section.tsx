import type { PropsWithChildren, ReactNode } from 'react'
import { motion } from 'framer-motion'

type SectionProps = PropsWithChildren<{
  id?: string
  eyebrow?: string
  title: ReactNode
  subtitle?: ReactNode
  className?: string
}>

export function Section({ id, eyebrow, title, subtitle, className, children }: SectionProps) {
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.06,
      },
    },
  } as const

  const item = {
    hidden: { opacity: 0, y: 14 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 260,
        damping: 28,
        mass: 0.7,
      },
    },
  } as const

  return (
    <section id={id} className={`scroll-mt-28 ${className ?? ''}`.trim()}>
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-2xl"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
        >
          {eyebrow ? (
            <motion.p
              variants={item}
              className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-600 dark:text-white/70"
            >
              {eyebrow}
            </motion.p>
          ) : null}
          <motion.h2
            variants={item}
            className="mt-3 text-balance text-3xl font-black tracking-tight text-slate-900 dark:text-white sm:text-4xl"
          >
            {title}
          </motion.h2>
          {subtitle ? (
            <motion.p
              variants={item}
              className="mt-3 text-pretty text-base leading-relaxed text-slate-600 dark:text-white/70 sm:text-lg"
            >
              {subtitle}
            </motion.p>
          ) : null}
        </motion.div>

        {children ? <div className="mt-10">{children}</div> : null}
      </div>
    </section>
  )
}

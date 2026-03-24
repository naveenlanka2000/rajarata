function IconCoconut(props: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={props.className}>
      <path d="M9 7.5c.6-2 2.1-3.4 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M12.6 4.2c1.5-.3 2.8 0 4 .9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path
        d="M12 7c-4 0-6.8 2.7-6.8 6.5S8 20 12 20s6.8-2.7 6.8-6.5S16 7 12 7Z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path d="M10 10.5h.01M12 9.8h.01M14 10.7h.01" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" />
    </svg>
  )
}

function IconPapaya(props: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={props.className}>
      <path
        d="M12.7 5.4c4.2 0 7.1 2.8 7.1 6.3 0 4.3-3.5 7.3-8 7.3-4 0-7.6-2.7-7.6-6.8 0-3.8 3.5-6.8 8.5-6.8Z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path d="M12.7 5.4c.2-1.3 1-2.1 2.4-2.8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M11 10.4h.01M12.9 12.1h.01M10.5 13.6h.01M13.7 14.2h.01" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  )
}

function IconPearls(props: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={props.className}>
      <circle cx="7" cy="12" r="2.4" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="8" r="2.4" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="16" r="2.4" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17" cy="12" r="2.4" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  )
}

function IconBox(props: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={props.className}>
      <path d="M4.5 8.2 12 4l7.5 4.2-7.5 4.1L4.5 8.2Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M4.5 8.2V16L12 20l7.5-4V8.2" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M12 12.3V20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )
}

function IconCheck(props: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={props.className}>
      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.8" />
      <path d="m8.7 12.1 2.2 2.2 4.4-4.7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function IconFreight(props: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={props.className}>
      <path d="M3.5 15.5h17" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M5 15.5 7.2 9h7.7l2.1 6.5" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M9 18.3a1.3 1.3 0 1 0 0-2.6 1.3 1.3 0 0 0 0 2.6ZM15.4 18.3a1.3 1.3 0 1 0 0-2.6 1.3 1.3 0 0 0 0 2.6Z" fill="currentColor" />
      <path d="M18 8l2.5-1.3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )
}

function IconDocument(props: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={props.className}>
      <path d="M7 3.8h7l3 3V20H7V3.8Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M14 3.8v3h3" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M9.3 11h5.4M9.3 14h5.4M9.3 17h3.8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )
}

function getItemMeta(item: string) {
  if (item.includes('king coconuts')) {
    return { Icon: IconCoconut, tone: 'text-amber-400' }
  }
  if (item.includes('green papaya')) {
    return { Icon: IconPapaya, tone: 'text-lime-400' }
  }
  if (item.includes('tapioca')) {
    return { Icon: IconPearls, tone: 'text-sky-400' }
  }
  if (item.includes('packing')) {
    return { Icon: IconBox, tone: 'text-orange-400' }
  }
  if (item.includes('inspection')) {
    return { Icon: IconCheck, tone: 'text-emerald-400' }
  }
  if (item.includes('freight')) {
    return { Icon: IconFreight, tone: 'text-cyan-400' }
  }
  return { Icon: IconDocument, tone: 'text-fuchsia-400' }
}

type MarqueeProps = {
  items: string[]
}

export function Marquee({ items }: MarqueeProps) {
  const content = [...items, ...items]

  return (
    <div className="relative overflow-hidden border-y border-black/10 bg-black/[0.03] py-3 dark:border-white/10 dark:bg-black/20">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white via-transparent to-white dark:from-black dark:via-transparent dark:to-black" />
      <div className="marquee flex w-max gap-6 px-4">
        {content.map((t, idx) => (
          <div
            key={`${t}-${idx}`}
            className="inline-flex items-center gap-3 text-xs font-black uppercase tracking-[0.16em] text-slate-600 dark:text-white/70 sm:text-sm sm:tracking-[0.2em]"
          >
            {(() => {
              const { Icon, tone } = getItemMeta(t)
              return (
                <span className={`grid h-5 w-5 place-items-center ${tone}`}>
                  <Icon className="h-4 w-4" />
                </span>
              )
            })()}
            <span>{t}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

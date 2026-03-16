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
            className="inline-flex items-center gap-3 text-sm font-black uppercase tracking-[0.2em] text-slate-600 dark:text-white/70"
          >
            <span className="h-2 w-2 rounded-full bg-black/25 dark:bg-white/30" />
            <span>{t}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

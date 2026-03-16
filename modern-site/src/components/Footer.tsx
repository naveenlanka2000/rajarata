export function Footer() {
  const baseUrl = import.meta.env.BASE_URL

  return (
    <footer className="border-t border-black/10 bg-black/[0.03] py-10 dark:border-white/10 dark:bg-black/20">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center overflow-hidden rounded-full bg-black/5 dark:bg-white/10">
              <img
                src={`${baseUrl}logo.png`}
                alt="Rajarata Exports logo"
                className="h-full w-full object-contain"
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.src = `${baseUrl}logo-placeholder.svg`
                }}
              />
            </span>
            <div>
              <p className="text-sm font-black text-slate-900 dark:text-white">Rajarata Exports</p>
              <p className="mt-1 text-sm text-slate-600 dark:text-white/60">King coconuts • red papaya • tapioca products</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            {[
              { label: 'Products', href: '#menu' },
              { label: 'Export process', href: '#how' },
              { label: 'Quality', href: '#story' },
              { label: 'Contact', href: '#locations' },
            ].map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-semibold text-slate-600 hover:text-slate-900 dark:text-white/70 dark:hover:text-white"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
        <div className="mt-8 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-slate-500 dark:text-white/50">© {new Date().getFullYear()} Rajarata Exports. All rights reserved.</p>
          <p className="text-xs text-slate-500 dark:text-white/50">Made with Vite + React + Tailwind.</p>
        </div>
      </div>
    </footer>
  )
}

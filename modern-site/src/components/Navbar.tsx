import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { ThemeToggle } from './ThemeToggle'

function IconProducts(props: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={props.className}
    >
      <path
        d="M7 8.5V7a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M6.5 8.5h11A2.5 2.5 0 0 1 20 11v7a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-7a2.5 2.5 0 0 1 2.5-2.5Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path d="M10 13h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

function IconProcess(props: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={props.className}
    >
      <path
        d="M7 7h10M7 12h6M7 17h10"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M16 12l2-2m-2 2 2 2"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function IconQuality(props: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={props.className}
    >
      <path
        d="M12 3 4.5 6.5V12c0 5 3.2 8.6 7.5 10 4.3-1.4 7.5-5 7.5-10V6.5L12 3Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="m9.2 12.1 1.9 1.9 3.7-4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function IconContact(props: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={props.className}
    >
      <path
        d="M4.5 7.5 12 12.5l7.5-5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5 7h14a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  )
}

const links = [
  { label: 'Products', href: '#menu', Icon: IconProducts },
  { label: 'Export process', href: '#how', Icon: IconProcess },
  { label: 'Quality', href: '#story', Icon: IconQuality },
  { label: 'Contact', href: '#locations', Icon: IconContact },
] as const

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const baseUrl = import.meta.env.BASE_URL
  const providedLogo = `${baseUrl}rajarata-logo.png`

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const media = window.matchMedia('(min-width: 1024px)')
    const syncMenu = (event: MediaQueryListEvent | MediaQueryList) => {
      if (event.matches) {
        setOpen(false)
      }
    }

    syncMenu(media)

    if (typeof media.addEventListener === 'function') {
      media.addEventListener('change', syncMenu)
      return () => media.removeEventListener('change', syncMenu)
    }

    media.addListener(syncMenu)
    return () => media.removeListener(syncMenu)
  }, [])

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50">
      <div className="mx-auto w-full max-w-6xl px-3 sm:px-5 lg:px-8">
        <div
          className={
            'pointer-events-auto mt-3 flex items-center justify-between gap-3 rounded-2xl px-3 py-2.5 transition sm:px-4 sm:py-3 ' +
            (scrolled
              ? 'theme-nav-shell-strong'
              : 'theme-nav-shell')
          }
        >
          <a href="#top" className="flex min-w-0 flex-1 items-center gap-2.5 pr-2 sm:gap-3">
            <span className="theme-chip relative grid h-11 w-11 place-items-center overflow-hidden rounded-full sm:h-14 sm:w-14">
              <img
                src={`${baseUrl}logo.png`}
                alt="Rajarata Plantation Export logo"
                className="h-full w-full rounded-full object-contain p-1.5 sm:object-cover sm:p-0 sm:scale-[1.12]"
                loading="eager"
                onError={(e) => {
                  const img = e.currentTarget
                  const stage = img.dataset.fallbackStage
                  if (stage === 'provided') {
                    img.src = `${baseUrl}logo-placeholder.svg`
                    return
                  }
                  img.dataset.fallbackStage = 'provided'
                  img.src = providedLogo
                }}
              />
            </span>
            <span className="min-w-0 font-black leading-tight tracking-tight text-slate-900 dark:text-white">
              <span className="block truncate text-[0.82rem] min-[380px]:text-sm sm:hidden">
                Rajarata Export
              </span>
              <span className="hidden truncate text-sm sm:block lg:text-[0.95rem] xl:text-[1.05rem]">
                Rajarata Plantation Export
              </span>
            </span>
          </a>

          <nav className="hidden shrink-0 items-center gap-2.5 xl:gap-3 2xl:gap-4 lg:flex">
            {links.map((l) => (
              <motion.a
                key={l.href}
                href={l.href}
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: 'spring', stiffness: 500, damping: 30, mass: 0.4 }}
                className="group relative inline-flex items-center gap-1.5 text-sm font-semibold text-slate-700 transition-colors hover:text-slate-900 xl:gap-2 xl:text-[0.95rem] dark:text-white/80 dark:hover:text-white"
              >
                <motion.span
                  className="grid place-items-center"
                  whileHover={{ rotate: -6, scale: 1.06 }}
                  transition={{ type: 'spring', stiffness: 600, damping: 26, mass: 0.35 }}
                >
                  <l.Icon className="h-4 w-4 opacity-80 transition-opacity group-hover:opacity-100" />
                </motion.span>
                <span>{l.label}</span>
                <span className="pointer-events-none absolute -bottom-1 left-0 h-[2px] w-full origin-left scale-x-0 rounded-full bg-gradient-to-r from-amber-300 via-fuchsia-400 to-sky-400 transition-transform duration-200 ease-out group-hover:scale-x-100" />
              </motion.a>
            ))}
            <a
              href="#locations"
              className="btn-apple inline-flex items-center justify-center rounded-xl bg-slate-900 px-3 py-2 text-sm font-black text-white shadow-sm shadow-black/10 transition-shadow hover:shadow-md xl:px-4 dark:bg-white dark:text-black"
            >
              Request a quote
            </a>
            <ThemeToggle className="theme-chip inline-flex items-center justify-center rounded-xl px-2.5 py-2 text-sm font-semibold text-slate-900 xl:px-3 dark:text-white" />
          </nav>

          <div className="flex shrink-0 items-center gap-2 lg:hidden">
            <ThemeToggle className="theme-chip inline-flex items-center justify-center rounded-xl px-2.5 py-2 text-[0.8rem] font-semibold text-slate-900 dark:text-white sm:px-3 sm:text-sm" />
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="theme-chip inline-flex items-center justify-center rounded-xl px-2.5 py-2 text-[0.8rem] font-semibold text-slate-900 dark:text-white sm:px-3 sm:text-sm"
              aria-expanded={open}
              aria-controls="mobile-nav"
            >
              {open ? 'Close' : 'Menu'}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {open ? (
            <motion.div
              id="mobile-nav"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="pointer-events-auto overflow-hidden"
            >
              <div className="theme-surface-strong mt-2 max-h-[calc(100vh-5.5rem)] overflow-y-auto rounded-2xl p-2.5 sm:p-3">
                <div className="flex flex-col">
                  {links.map((l) => (
                    <motion.a
                      key={l.href}
                      href={l.href}
                      onClick={() => setOpen(false)}
                      whileTap={{ scale: 0.98 }}
                      transition={{ type: 'spring', stiffness: 520, damping: 32, mass: 0.35 }}
                      className="group inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-semibold text-slate-700 transition-colors hover:bg-black/5 hover:text-slate-900 dark:text-white/80 dark:hover:bg-white/5 dark:hover:text-white"
                    >
                      <span className="grid place-items-center">
                        <l.Icon className="h-4 w-4 opacity-80 transition-transform duration-200 ease-out group-hover:-rotate-6" />
                      </span>
                      <span>{l.label}</span>
                    </motion.a>
                  ))}
                  <a
                    href="#locations"
                    onClick={() => setOpen(false)}
                    className="btn-apple mt-2 inline-flex items-center justify-center rounded-xl bg-slate-900 px-4 py-2 text-sm font-black text-white shadow-sm shadow-black/10 transition-shadow hover:shadow-md dark:bg-white dark:text-black"
                  >
                    Request a quote
                  </a>
                </div>
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </header>
  )
}

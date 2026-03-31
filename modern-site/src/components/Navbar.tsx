import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { getHomeHref, getSiteLinks, type SiteNavKey, type SitePage } from '../siteNavigation'
import { ThemeToggle } from './ThemeToggle'
 

function IconHome(props: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={props.className}
    >
      <path
        d="m4.5 10 7.5-6 7.5 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.5 9.5V19a1 1 0 0 0 1 1H10v-5h4v5h2.5a1 1 0 0 0 1-1V9.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function IconAbout(props: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={props.className}>
      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="2" />
      <path d="M12 10.2v5.3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M12 7.4h.01" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </svg>
  )
}

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

function IconLogistics(props: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={props.className}
    >
      <path
        d="M3.5 15.5h11"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M14.5 9.5h2.6l3.4 3.5v2.5h-2.2"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.8 18.2a1.7 1.7 0 1 0 0-3.4 1.7 1.7 0 0 0 0 3.4ZM16.9 18.2a1.7 1.7 0 1 0 0-3.4 1.7 1.7 0 0 0 0 3.4Z"
        fill="currentColor"
      />
      <path
        d="M9 18h6.2"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
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

function IconMenu(props: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={props.className}>
      <path d="M4.5 7h15M4.5 12h15M4.5 17h15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

function IconClose(props: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={props.className}>
      <path d="m6 6 12 12M18 6 6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

const iconByKey: Record<SiteNavKey, typeof IconHome> = {
  main: IconHome,
  about: IconAbout,
  products: IconProducts,
  process: IconProcess,
  quality: IconQuality,
  logistics: IconLogistics,
  contact: IconContact,
}

type NavbarProps = {
  page?: SitePage
}

export function Navbar({ page = 'home' }: NavbarProps) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const baseUrl = import.meta.env.BASE_URL
  const providedLogo = `${baseUrl}rajarata-logo.png`
  const links = getSiteLinks(page)
  const homeHref = getHomeHref(page)

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

  useEffect(() => {
    if (!open) {
      document.body.style.overflow = ''
      return
    }

    document.body.style.overflow = 'hidden'

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false)
      }
    }

    window.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [open])

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50">
      <div
        className={
          'pointer-events-auto transition ' +
          (scrolled
            ? 'theme-nav-shell-strong'
            : 'theme-nav-shell')
        }
      >
        <div
          className="site-shell flex items-center justify-between gap-4 px-3 py-2.5 sm:px-5 sm:py-3 lg:gap-5 lg:px-8"
        >
          <a href={homeHref} className="flex min-w-0 flex-1 items-center gap-2.5 pr-2 sm:gap-3 lg:max-w-[21rem] xl:max-w-none">
            <span className="theme-chip relative grid h-11 w-11 shrink-0 place-items-center overflow-hidden rounded-full sm:h-14 sm:w-14">
              <img
                src={`${baseUrl}logo.png`}
                alt="Rajarata Plantation Export logo"
                className="h-full w-full rounded-full object-cover scale-[1.24] sm:scale-[1.12]"
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
              <span className="block truncate text-[0.76rem] min-[380px]:text-[0.84rem] sm:hidden lg:hidden">
                Rajarata Export
              </span>
              <span className="hidden truncate text-[0.9rem] sm:block xl:hidden">
                Rajarata Export
              </span>
              <span className="hidden truncate text-[0.9rem] xl:block 2xl:text-[0.96rem]">
                Rajarata Plantation Export
              </span>
            </span>
          </a>

          <nav className="hidden shrink-0 items-center gap-3 lg:ml-6 lg:flex xl:ml-8 xl:gap-4 2xl:gap-5">
            {links.map((l) => {
              const Icon = iconByKey[l.key]

              return (
                <motion.a
                  key={l.key}
                  href={l.href}
                  whileHover={{ y: -1 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: 'spring', stiffness: 500, damping: 30, mass: 0.4 }}
                  className="group relative inline-flex items-center gap-2 text-[0.84rem] font-semibold text-slate-700 transition-colors hover:text-slate-900 xl:gap-2 xl:text-[0.88rem] dark:text-white/80 dark:hover:text-white"
                >
                  <motion.span
                    className="grid place-items-center"
                    whileHover={{ rotate: -6, scale: 1.06 }}
                    transition={{ type: 'spring', stiffness: 600, damping: 26, mass: 0.35 }}
                  >
                    <Icon className="h-4 w-4 opacity-75 transition-opacity group-hover:opacity-100" />
                  </motion.span>
                  <span>{l.label}</span>
                  <span className="pointer-events-none absolute -bottom-1 left-0 h-[2px] w-full origin-left scale-x-0 rounded-full bg-gradient-to-r from-amber-300 via-fuchsia-400 to-sky-400 transition-transform duration-200 ease-out group-hover:scale-x-100" />
                </motion.a>
              )
            })}
            <ThemeToggle className="inline-flex h-8 w-8 items-center justify-center rounded-full text-slate-900 transition-opacity hover:opacity-70 dark:text-white" />
          </nav>

          <div className="flex shrink-0 items-center gap-2 lg:hidden">
            <ThemeToggle className="inline-flex h-8 w-8 items-center justify-center rounded-full text-slate-900 transition-opacity hover:opacity-70 dark:text-white sm:h-9 sm:w-9" />
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="inline-flex h-8 w-8 items-center justify-center rounded-full text-slate-900 transition-opacity hover:opacity-70 dark:text-white sm:h-9 sm:w-9"
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? 'Close menu' : 'Open menu'}
              title={open ? 'Close menu' : 'Open menu'}
            >
              <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
              {open ? <IconClose className="h-4 w-4" /> : <IconMenu className="h-4 w-4" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <>
            <motion.button
              type="button"
              aria-label="Close menu overlay"
              onClick={() => setOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="pointer-events-auto fixed inset-0 z-40 bg-black/40 backdrop-blur-[2px] lg:hidden"
            />
            <motion.div
              id="mobile-nav"
              initial={{ opacity: 0, y: -14, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.98 }}
              transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
              className="pointer-events-auto fixed inset-x-0 top-[4rem] z-50 px-3 lg:hidden sm:top-[4.8rem] sm:px-5"
            >
                <div className="theme-surface-strong max-h-[calc(100vh-5.4rem)] overflow-y-auto rounded-none p-2.5 shadow-[0_28px_60px_-36px_rgba(0,0,0,0.65)] sm:max-h-[calc(100vh-6.1rem)] sm:p-3">
                  <div className="site-shell flex flex-col">
                    {links.map((l) => (
                      (() => {
                        const Icon = iconByKey[l.key]

                        return (
                          <motion.a
                            key={l.key}
                            href={l.href}
                            onClick={() => setOpen(false)}
                            whileTap={{ scale: 0.98 }}
                            transition={{ type: 'spring', stiffness: 520, damping: 32, mass: 0.35 }}
                            className="group inline-flex items-center gap-2 rounded-xl px-3 py-3 text-[0.92rem] font-semibold text-slate-700 transition-colors hover:bg-black/5 hover:text-slate-900 dark:text-white/80 dark:hover:bg-white/5 dark:hover:text-white"
                          >
                            <span className="grid place-items-center">
                              <Icon className="h-4 w-4 opacity-80 transition-transform duration-200 ease-out group-hover:-rotate-6" />
                            </span>
                            <span>{l.label}</span>
                          </motion.a>
                        )
                      })()
                    ))}
                </div>
              </div>
            </motion.div>
          </>
        ) : null}
      </AnimatePresence>
    </header>
  )
}

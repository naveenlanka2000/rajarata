import type { ReactNode } from 'react'

function SocialIcon(props: {
  label: string
  href: string
  children: ReactNode
}) {
  return (
    <a
      href={props.href}
      target={props.href.startsWith('http') ? '_blank' : undefined}
      rel={props.href.startsWith('http') ? 'noreferrer' : undefined}
      aria-label={props.label}
      title={props.label}
      className="theme-chip group inline-flex h-10 w-10 items-center justify-center rounded-xl text-slate-700 transition-transform transition-colors duration-200 hover:-translate-y-0.5 dark:text-white/80"
    >
      <span className="sr-only">{props.label}</span>
      <span className="transition-transform duration-200 group-hover:scale-110">{props.children}</span>
    </a>
  )
}

function IconFacebook(props: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={props.className}>
      <path d="M13.5 22v-8h2.7l.4-3h-3.1V9.1c0-.9.3-1.6 1.7-1.6H16.7V4.8c-.3 0-1.4-.1-2.7-.1-2.7 0-4.6 1.6-4.6 4.6V11H6.7v3h2.7v8h4.1Z" />
    </svg>
  )
}

function IconInstagram(props: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={props.className}>
      <path
        d="M7.5 3.5h9A4 4 0 0 1 20.5 7.5v9a4 4 0 0 1-4 4h-9a4 4 0 0 1-4-4v-9a4 4 0 0 1 4-4Z"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M12 16.2a4.2 4.2 0 1 0 0-8.4 4.2 4.2 0 0 0 0 8.4Z"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path d="M17.2 6.8h.01" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </svg>
  )
}

function IconLinkedIn(props: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={props.className}>
      <path d="M6.5 9.5H3.8V20h2.7V9.5ZM5.1 3.8a1.6 1.6 0 1 0 0 3.2 1.6 1.6 0 0 0 0-3.2ZM20.2 20h-2.7v-5.7c0-1.4-.5-2.3-1.8-2.3-1 0-1.6.7-1.9 1.3-.1.2-.1.6-.1.9V20h-2.7s.04-9.1 0-10.5h2.7v1.5c.36-.56 1.01-1.36 2.47-1.36 1.8 0 3.1 1.2 3.1 3.7V20Z" />
    </svg>
  )
}

function IconWhatsApp(props: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={props.className}>
      <path
        d="M20.5 11.9a8.5 8.5 0 0 1-12.6 7.4L3.5 20.5l1.3-4.2A8.5 8.5 0 1 1 20.5 11.9Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M9.3 8.8c.2-.4.4-.4.7-.4h.6c.2 0 .4.1.5.4l.7 1.6c.1.3.1.5 0 .7l-.4.5c-.1.2-.2.3 0 .6.3.6 1.1 1.6 2.3 2.1.3.1.5.1.6 0l.7-.8c.2-.2.4-.2.7-.1l1.6.7c.3.1.4.3.4.5-.1.7-.6 1.4-1.2 1.6-.5.2-1.2.2-2.1-.1-2.8-.9-4.8-3.7-5.2-4.3-.4-.6-1.1-1.9-1.1-3 0-1 .5-1.6.8-2Z"
        fill="currentColor"
      />
    </svg>
  )
}

export function Footer() {
  const baseUrl = import.meta.env.BASE_URL
  const providedLogo = `${baseUrl}rajarata-logo.png`
  const idbLogo = `${baseUrl}idb-logo.png`

  const socials = [
    { label: 'Facebook', href: 'https://facebook.com/' },
    { label: 'Instagram', href: 'https://instagram.com/' },
    { label: 'LinkedIn', href: 'https://linkedin.com/' },
    { label: 'WhatsApp', href: 'https://wa.me/' },
  ] as const

  return (
    <footer className="theme-band border-t py-10">
      <div className="site-shell px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <span className="theme-chip grid h-16 w-16 place-items-center overflow-hidden rounded-full">
              <img
                src={`${baseUrl}logo.png`}
                alt="Rajarata Plantation Export logo"
                className="h-full w-full rounded-full object-contain p-2 sm:object-cover sm:p-0 sm:scale-[1.12]"
                loading="lazy"
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
            <div>
              <p className="text-sm font-black text-slate-900 dark:text-white">Rajarata Plantation Export (Pvt) Ltd</p>
              <p className="mt-1 text-sm text-slate-600 dark:text-white/60">King coconut | green papaya | tapioca products</p>
              <p className="mt-1 text-xs text-slate-500 dark:text-white/50">No. 427/A, Wilimbula Waththa, Radawana, Sri Lanka</p>
              <a
                href="mailto:rrpratnayake@gmail.com"
                className="mt-1 inline-block text-xs font-semibold text-slate-600 hover:text-slate-900 dark:text-white/60 dark:hover:text-white"
              >
                rrpratnayake@gmail.com
              </a>
            </div>
          </div>
          <div className="flex items-center gap-2">
            {socials.map((s) => (
              <SocialIcon key={s.label} label={s.label} href={s.href}>
                {s.label === 'Facebook' ? (
                  <IconFacebook className="h-5 w-5" />
                ) : s.label === 'Instagram' ? (
                  <IconInstagram className="h-5 w-5" />
                ) : s.label === 'LinkedIn' ? (
                  <IconLinkedIn className="h-5 w-5" />
                ) : (
                  <IconWhatsApp className="h-5 w-5" />
                )}
              </SocialIcon>
            ))}
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
        <div className="theme-surface-strong mt-8 rounded-2xl p-4 sm:p-5">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="min-w-0">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-white/60">
                Company Registration
              </p>
              <p className="mt-1 text-sm font-black text-slate-900 dark:text-white">
                Registered company with the Industrial Development Board (IDB), Sri Lanka
              </p>
            </div>
            <div className="overflow-hidden rounded-xl border border-black/10 bg-black dark:border-white/10">
              <img
                src={idbLogo}
                alt="Industrial Development Board IDB logo"
                className="h-auto w-[5.8rem] object-contain sm:w-[6.5rem]"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
        <div className="mt-8 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-slate-500 dark:text-white/50">(c) {new Date().getFullYear()} Rajarata Plantation Export (Pvt) Ltd. All rights reserved.</p>
          <p className="text-xs text-slate-500 dark:text-white/50">Made with Vite + React + Tailwind.</p>
        </div>
      </div>
    </footer>
  )
}

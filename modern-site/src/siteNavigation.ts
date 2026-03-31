export type SitePage = 'home' | 'about' | 'logistics' | 'products'

export type SiteNavKey = 'main' | 'about' | 'products' | 'process' | 'quality' | 'logistics' | 'contact'

export type SiteNavLink = {
  key: SiteNavKey
  label: string
  href: string
}

function homeSectionHref(page: SitePage, hash: string) {
  return page === 'home' ? hash : `./index.html${hash}`
}

export function getHomeHref(page: SitePage) {
  return homeSectionHref(page, '#top')
}

export function getAboutHref(page: SitePage) {
  return page === 'about' ? '#top' : './about.html'
}

export function getProductsHref(page: SitePage) {
  return page === 'products' ? '#top' : './products.html'
}

export function getQuoteHref(page: SitePage) {
  return page === 'home' ? '#locations' : '#contact'
}

export function getSiteLinks(page: SitePage): SiteNavLink[] {
  return [
    { key: 'main', label: 'Home', href: getHomeHref(page) },
    { key: 'about', label: 'About', href: getAboutHref(page) },
    { key: 'products', label: 'Products', href: getProductsHref(page) },
    { key: 'process', label: 'Process', href: homeSectionHref(page, '#how') },
    { key: 'quality', label: 'Quality', href: homeSectionHref(page, '#story') },
    { key: 'logistics', label: 'Logistics', href: page === 'logistics' ? '#top' : './logistics.html' },
    { key: 'contact', label: 'Contact', href: page === 'home' ? '#locations' : '#contact' },
  ]
}

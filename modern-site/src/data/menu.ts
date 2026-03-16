export type MenuItem = {
  name: string
  description: string
  tag?: string
  gradient: string
}

export const signatureItems: MenuItem[] = [
  {
    name: 'King Coconuts',
    description: 'Export-grade king coconuts with careful handling, sorting, and packing to your specification.',
    tag: 'Featured',
    gradient: 'from-amber-300 via-yellow-400 to-lime-400',
  },
  {
    name: 'Red Papaya',
    description: 'Red papaya selected by maturity and quality for consistent supply and arrival condition.',
    tag: 'Fresh produce',
    gradient: 'from-orange-400 via-rose-500 to-fuchsia-500',
  },
  {
    name: 'Tapioca Products',
    description: 'Food-grade tapioca options for retail or bulk: pearls and starch/flour, with custom packing available.',
    tag: 'Bulk supply',
    gradient: 'from-sky-300 via-cyan-400 to-emerald-400',
  },
  {
    name: 'Private Label Packing',
    description: 'Private label support including labels, barcodes, cartons, and packing configuration for your market.',
    gradient: 'from-violet-400 via-fuchsia-400 to-pink-400',
  },
  {
    name: 'Quality Assurance',
    description: 'Sorting and inspection with pre-dispatch updates and confirmation prior to shipment.',
    gradient: 'from-emerald-300 via-teal-400 to-sky-400',
  },
  {
    name: 'Logistics Options',
    description: 'Air or sea freight options with packing selected for transit time and destination conditions.',
    gradient: 'from-indigo-400 via-sky-400 to-emerald-300',
  },
]

export const buildSteps = [
  {
    title: 'Source & harvest',
    body: 'Sourced from partner farms and suppliers with consistent quality and traceable lots.',
  },
  {
    title: 'Sort & pack',
    body: 'Grading, cleaning, and packing based on your size/weight and carton requirements.',
  },
  {
    title: 'QA & compliance',
    body: 'Pre-dispatch inspection and export documentation support as required by the destination market.',
  },
  {
    title: 'Ship & deliver',
    body: 'Dispatch via air or sea with clear updates through each stage of shipment.',
  },
] as const

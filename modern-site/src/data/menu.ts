export type MenuItem = {
  name: string
  description: string
  tag?: string
  gradient: string
  image?: string
  imageClassName?: string
}

export const signatureItems: MenuItem[] = [
  {
    name: 'King Coconuts',
    description: 'Export-grade king coconuts with careful handling, sorting, and packing to your specification.',
    tag: 'Featured',
    gradient: 'from-amber-300 via-yellow-400 to-lime-400',
    image: 'https://images.pexels.com/photos/35499127/pexels-photo-35499127.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=1600',
    imageClassName: 'object-[72%_34%]',
  },
  {
    name: 'Green Papaya',
    description: 'Green papaya selected for maturity and quality, packed for consistency and arrival condition.',
    tag: 'Fresh produce',
    gradient: 'from-lime-300 via-emerald-400 to-teal-400',
    image: 'https://images.pexels.com/photos/20460741/pexels-photo-20460741.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=1600',
    imageClassName: 'object-[68%_34%]',
  },
  {
    name: 'Tapioca Products',
    description: 'Food-grade tapioca options for retail or bulk: pearls and starch/flour, with custom packing available.',
    tag: 'Bulk supply',
    gradient: 'from-sky-300 via-cyan-400 to-emerald-400',
    image: 'https://images.pexels.com/photos/7543161/pexels-photo-7543161.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=1600',
    imageClassName: 'object-[72%_54%]',
  },
  {
    name: 'Export Documentation',
    description: 'Support with shipment documents and export paperwork based on destination and buyer requirements.',
    gradient: 'from-violet-400 via-sky-400 to-cyan-400',
    image: 'https://images.pexels.com/photos/8152735/pexels-photo-8152735.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=1600',
    imageClassName: 'object-[74%_46%]',
  },
  {
    name: 'Quality Assurance',
    description: 'Sorting and inspection with pre-dispatch updates and confirmation prior to shipment.',
    gradient: 'from-emerald-300 via-teal-400 to-sky-400',
    image: 'https://images.pexels.com/photos/1543924/pexels-photo-1543924.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=1600',
    imageClassName: 'object-[72%_34%]',
  },
  {
    name: 'Logistics Options',
    description: 'Air or sea freight options with packing selected for transit time and destination conditions.',
    gradient: 'from-indigo-400 via-sky-400 to-emerald-300',
    image: 'https://images.pexels.com/photos/13025947/pexels-photo-13025947.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=1600',
    imageClassName: 'object-center',
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

export type GallerySlide = {
  image: string
  brand: string
  eyebrow: string
  title: string
  cta: string
}

type SlideArtworkConfig = {
  from: string
  to: string
  glow: string
  line: string
  motif: string
}

function createSlideArtwork({ from, to, glow, line, motif }: SlideArtworkConfig) {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 1200" fill="none">
      <defs>
        <linearGradient id="bg" x1="140" y1="120" x2="1440" y2="1080" gradientUnits="userSpaceOnUse">
          <stop stop-color="${from}" />
          <stop offset="1" stop-color="${to}" />
        </linearGradient>
        <linearGradient id="gloss" x1="0" y1="0" x2="1" y2="1">
          <stop stop-color="#FFFFFF" stop-opacity="0.34" />
          <stop offset="1" stop-color="#FFFFFF" stop-opacity="0.04" />
        </linearGradient>
      </defs>

      <rect width="1600" height="1200" fill="url(#bg)" />
      <circle cx="1260" cy="260" r="300" fill="${glow}" fill-opacity="0.3" />
      <circle cx="1380" cy="950" r="360" fill="${line}" fill-opacity="0.14" />
      <path d="M0 890C250 790 470 760 670 810C830 850 980 940 1180 974C1340 1004 1475 986 1600 930V1200H0V890Z" fill="#0F172A" fill-opacity="0.12" />
      <path d="M0 160C270 110 470 150 670 232C856 308 1006 410 1218 430C1350 444 1478 418 1600 370" stroke="${line}" stroke-opacity="0.18" stroke-width="18" stroke-linecap="round" />
      <path d="M0 250C240 200 430 224 630 302C812 372 958 474 1160 498C1326 518 1472 492 1600 448" stroke="${line}" stroke-opacity="0.1" stroke-width="10" stroke-linecap="round" />
      <rect x="46" y="46" width="1508" height="1108" rx="48" fill="url(#gloss)" />
      ${motif}
    </svg>
  `.trim()

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`
}

export const gallerySlides: GallerySlide[] = [
  {
    image: createSlideArtwork({
      from: '#F59E0B',
      to: '#FDE68A',
      glow: '#FDBA74',
      line: '#7C2D12',
      motif: `
        <g transform="translate(980 120) rotate(-8 220 340)">
          <ellipse cx="220" cy="340" rx="188" ry="292" fill="#0F172A" fill-opacity="0.14" />
          <path d="M178 70C258 18 358 48 406 152C454 256 456 490 382 640C322 760 182 796 102 710C8 608 -8 400 40 242C68 152 112 106 178 70Z" fill="#FFF7ED" fill-opacity="0.28" stroke="#7C2D12" stroke-opacity="0.42" stroke-width="10" />
          <path d="M296 48C314 12 350 -8 394 -8" stroke="#7C2D12" stroke-opacity="0.42" stroke-width="12" stroke-linecap="round" />
          <path d="M150 218C130 324 142 444 184 568" stroke="#7C2D12" stroke-opacity="0.24" stroke-width="8" stroke-linecap="round" />
          <path d="M242 180C214 300 228 448 274 602" stroke="#7C2D12" stroke-opacity="0.22" stroke-width="8" stroke-linecap="round" />
          <path d="M330 202C316 302 332 436 380 570" stroke="#7C2D12" stroke-opacity="0.2" stroke-width="8" stroke-linecap="round" />
        </g>
      `,
    }),
    brand: 'King Coconut',
    eyebrow: 'Sri Lanka origin',
    title: 'Export-ready king coconuts',
    cta: 'Request details',
  },
  {
    image: createSlideArtwork({
      from: '#34D399',
      to: '#BBF7D0',
      glow: '#86EFAC',
      line: '#14532D',
      motif: `
        <g transform="translate(935 170)">
          <ellipse cx="300" cy="350" rx="270" ry="198" fill="#0F172A" fill-opacity="0.14" />
          <path d="M118 360C118 222 214 120 344 120C470 120 564 220 564 350C564 486 468 592 344 592C212 592 118 490 118 360Z" fill="#14532D" fill-opacity="0.16" />
          <path d="M168 360C168 250 244 170 344 170C440 170 514 248 514 350C514 458 438 538 344 538C246 538 168 458 168 360Z" fill="#FEF3C7" fill-opacity="0.34" stroke="#14532D" stroke-opacity="0.42" stroke-width="10" />
          <ellipse cx="344" cy="360" rx="98" ry="116" fill="#92400E" fill-opacity="0.2" />
          <g fill="#78350F" fill-opacity="0.45">
            <circle cx="308" cy="304" r="10" />
            <circle cx="350" cy="286" r="10" />
            <circle cx="390" cy="314" r="10" />
            <circle cx="292" cy="356" r="10" />
            <circle cx="344" cy="344" r="10" />
            <circle cx="394" cy="364" r="10" />
            <circle cx="308" cy="408" r="10" />
            <circle cx="354" cy="422" r="10" />
            <circle cx="398" cy="402" r="10" />
          </g>
          <path d="M352 132C362 100 392 76 432 72" stroke="#14532D" stroke-opacity="0.4" stroke-width="12" stroke-linecap="round" />
        </g>
      `,
    }),
    brand: 'Green Papaya',
    eyebrow: 'Fresh produce',
    title: 'Selected for size, color, and maturity',
    cta: 'Check availability',
  },
  {
    image: createSlideArtwork({
      from: '#38BDF8',
      to: '#BAE6FD',
      glow: '#7DD3FC',
      line: '#0C4A6E',
      motif: `
        <g transform="translate(980 180)">
          <circle cx="120" cy="120" r="70" fill="#FFFFFF" fill-opacity="0.24" />
          <circle cx="290" cy="120" r="70" fill="#FFFFFF" fill-opacity="0.22" />
          <circle cx="460" cy="120" r="70" fill="#FFFFFF" fill-opacity="0.24" />
          <circle cx="205" cy="255" r="82" fill="#FFFFFF" fill-opacity="0.2" />
          <circle cx="375" cy="255" r="82" fill="#FFFFFF" fill-opacity="0.18" />
          <circle cx="120" cy="410" r="76" fill="#FFFFFF" fill-opacity="0.22" />
          <circle cx="290" cy="410" r="76" fill="#FFFFFF" fill-opacity="0.2" />
          <circle cx="460" cy="410" r="76" fill="#FFFFFF" fill-opacity="0.22" />
          <circle cx="205" cy="560" r="70" fill="#FFFFFF" fill-opacity="0.18" />
          <circle cx="375" cy="560" r="70" fill="#FFFFFF" fill-opacity="0.22" />
          <path d="M72 700H494" stroke="#0C4A6E" stroke-opacity="0.3" stroke-width="10" stroke-linecap="round" />
          <path d="M106 760H460" stroke="#0C4A6E" stroke-opacity="0.22" stroke-width="10" stroke-linecap="round" />
        </g>
      `,
    }),
    brand: 'Tapioca',
    eyebrow: 'Food-grade supply',
    title: 'Pearls and starch for retail or bulk packing',
    cta: 'View options',
  },
  {
    image: createSlideArtwork({
      from: '#A78BFA',
      to: '#DDD6FE',
      glow: '#C4B5FD',
      line: '#4C1D95',
      motif: `
        <g transform="translate(930 210)">
          <rect x="70" y="350" width="210" height="154" rx="18" fill="#FFFFFF" fill-opacity="0.18" stroke="#4C1D95" stroke-opacity="0.26" stroke-width="8" />
          <rect x="268" y="350" width="210" height="154" rx="18" fill="#FFFFFF" fill-opacity="0.16" stroke="#4C1D95" stroke-opacity="0.22" stroke-width="8" />
          <rect x="168" y="216" width="210" height="154" rx="18" fill="#FFFFFF" fill-opacity="0.22" stroke="#4C1D95" stroke-opacity="0.28" stroke-width="8" />
          <path d="M168 294H378" stroke="#4C1D95" stroke-opacity="0.2" stroke-width="10" />
          <path d="M70 426H280" stroke="#4C1D95" stroke-opacity="0.16" stroke-width="10" />
          <path d="M268 426H478" stroke="#4C1D95" stroke-opacity="0.16" stroke-width="10" />
          <path d="M166 176H380" stroke="#4C1D95" stroke-opacity="0.18" stroke-width="10" stroke-linecap="round" />
          <path d="M126 560H438" stroke="#4C1D95" stroke-opacity="0.18" stroke-width="12" stroke-linecap="round" />
        </g>
      `,
    }),
    brand: 'Packing',
    eyebrow: 'Cartons and labels',
    title: 'Produce packed to your market requirements',
    cta: 'See packing',
  },
  {
    image: createSlideArtwork({
      from: '#2DD4BF',
      to: '#CCFBF1',
      glow: '#5EEAD4',
      line: '#134E4A',
      motif: `
        <g transform="translate(980 180)">
          <rect x="74" y="80" width="408" height="544" rx="36" fill="#FFFFFF" fill-opacity="0.18" stroke="#134E4A" stroke-opacity="0.28" stroke-width="10" />
          <path d="M170 196H386" stroke="#134E4A" stroke-opacity="0.22" stroke-width="12" stroke-linecap="round" />
          <path d="M170 276H386" stroke="#134E4A" stroke-opacity="0.18" stroke-width="12" stroke-linecap="round" />
          <path d="M170 356H338" stroke="#134E4A" stroke-opacity="0.18" stroke-width="12" stroke-linecap="round" />
          <path d="M162 472L234 544L398 388" stroke="#134E4A" stroke-opacity="0.42" stroke-width="24" stroke-linecap="round" stroke-linejoin="round" />
          <circle cx="414" cy="146" r="26" fill="#14B8A6" fill-opacity="0.44" />
        </g>
      `,
    }),
    brand: 'Quality',
    eyebrow: 'Pre-dispatch workflow',
    title: 'Inspection and packing checks before shipment',
    cta: 'Learn more',
  },
  {
    image: createSlideArtwork({
      from: '#0F172A',
      to: '#60A5FA',
      glow: '#93C5FD',
      line: '#E0F2FE',
      motif: `
        <g transform="translate(900 250)">
          <path d="M70 504H520L464 616H176C136 616 102 592 84 556L70 504Z" fill="#E2E8F0" fill-opacity="0.18" stroke="#E0F2FE" stroke-opacity="0.28" stroke-width="8" />
          <rect x="184" y="324" width="108" height="92" rx="12" fill="#F97316" fill-opacity="0.44" />
          <rect x="300" y="324" width="108" height="92" rx="12" fill="#F8FAFC" fill-opacity="0.26" />
          <rect x="416" y="324" width="108" height="92" rx="12" fill="#38BDF8" fill-opacity="0.34" />
          <rect x="242" y="228" width="108" height="92" rx="12" fill="#F8FAFC" fill-opacity="0.24" />
          <rect x="358" y="228" width="108" height="92" rx="12" fill="#F97316" fill-opacity="0.38" />
          <path d="M116 664C154 638 192 638 230 664C268 690 306 690 344 664C382 638 420 638 458 664C496 690 534 690 572 664" stroke="#E0F2FE" stroke-opacity="0.32" stroke-width="12" stroke-linecap="round" />
          <path d="M430 126V212" stroke="#E0F2FE" stroke-opacity="0.34" stroke-width="12" stroke-linecap="round" />
          <path d="M430 126L506 160" stroke="#E0F2FE" stroke-opacity="0.22" stroke-width="12" stroke-linecap="round" />
        </g>
      `,
    }),
    brand: 'Logistics',
    eyebrow: 'Air and sea freight',
    title: 'Delivery planning matched to destination and volume',
    cta: 'Ask about shipping',
  },
]

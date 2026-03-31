import { Footer } from './components/Footer'
import { Navbar } from './components/Navbar'

type ProductItem = {
  name: string
  image: string
  description: string
}

function getProducts(): ProductItem[] {
  return [
    {
      name: 'King Coconut',
      image:
        'https://images.pexels.com/photos/2005824/pexels-photo-2005824.jpeg?auto=compress&cs=tinysrgb&w=1200',
      description:
        'Fresh king coconuts selected for export programs that need strong color, clean presentation, and dependable supply.',
    },
    {
      name: 'Tapioca',
      image:
        'https://images.pexels.com/photos/7543161/pexels-photo-7543161.jpeg?auto=compress&cs=tinysrgb&w=1200',
      description:
        'Firm cassava roots prepared for wholesale orders with practical grading, packing, and shipment readiness.',
    },
    {
      name: 'Red Papaya',
      image:
        'https://images.pexels.com/photos/5505394/pexels-photo-5505394.jpeg?auto=compress&cs=tinysrgb&w=1200',
      description:
        'Ripe red papaya with rich flesh and export-ready appearance for fresh fruit buyers and retail supply chains.',
    },
    {
      name: 'Green Papaya',
      image:
        'https://images.pexels.com/photos/20460741/pexels-photo-20460741.jpeg?auto=compress&cs=tinysrgb&w=1200',
      description:
        'Green papaya suited for cooking, processing, and bulk vegetable supply where firmness and consistency matter.',
    },
    {
      name: 'Pineapple',
      image:
        'https://images.pexels.com/photos/1171175/pexels-photo-1171175.jpeg?auto=compress&cs=tinysrgb&w=1200',
      description:
        'Fresh pineapples chosen for export with balanced sweetness, good shape, and reliable tropical produce quality.',
    },
    {
      name: 'Spices',
      image:
        'https://images.pexels.com/photos/2802527/pexels-photo-2802527.jpeg?auto=compress&cs=tinysrgb&w=1200',
      description:
        'Sri Lankan spices packed for buyers who need bold aroma, strong flavor, and clean export presentation.',
    },
    {
      name: 'Semi Husk Coconuts',
      image:
        'https://images.pexels.com/photos/7543134/pexels-photo-7543134.jpeg?auto=compress&cs=tinysrgb&w=1200',
      description:
        'Semi husk coconuts prepared for easier handling, storage, and shipping across wholesale and export channels.',
    },
  ]
}

export default function ProductsPage() {
  const products = getProducts()

  return (
    <div className="min-h-screen bg-transparent text-slate-900 dark:text-white">
      <Navbar page="products" />

      <main className="overflow-x-hidden">
        <section id="top" className="relative isolate overflow-hidden pt-28 sm:pt-32">
          <div className="hero-premium-bg absolute inset-0 -z-20" />

          <div className="site-shell px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8">
            <div className="max-w-4xl">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-amber-600 dark:text-amber-300">
                Rajarata Export
              </p>
              <h1 className="section-title-scale font-black tracking-tight text-slate-900 dark:text-white">
                Products
              </h1>
              <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600 dark:text-white/70 sm:text-lg">
                Our product range focuses on fresh produce and export-ready items that are easy for buyers
                to review. Each item below highlights the main products we currently present for inquiries and
                shipment discussions.
              </p>
            </div>

            <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {products.map((product) => (
                <article
                  key={product.name}
                  className="theme-surface overflow-hidden"
                >
                  <div className="aspect-[4/3] bg-white/70 dark:bg-white/5">
                    <img
                      src={product.image}
                      alt={product.name}
                      loading="lazy"
                      className="h-full w-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  <div className="p-5">
                    <h2 className="text-lg font-black tracking-tight text-slate-900 dark:text-white">
                      {product.name}
                    </h2>
                    <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-white/70">
                      {product.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer page="products" />
    </div>
  )
}

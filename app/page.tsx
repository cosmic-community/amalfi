import Link from 'next/link'
import { getMenuCategories, getMenuItems, getReviews, getMetafieldValue } from '@/lib/cosmic'
import Hero from '@/components/Hero'
import MenuItemCard from '@/components/MenuItemCard'
import ReviewCard from '@/components/ReviewCard'

export default async function HomePage() {
  const [categories, items, reviews] = await Promise.all([
    getMenuCategories(),
    getMenuItems(),
    getReviews(),
  ])

  const specials = items.filter((item) => item.metadata?.chefs_special === true).slice(0, 3)
  const featured = specials.length > 0 ? specials : items.slice(0, 3)
  const topReviews = reviews.slice(0, 3)

  return (
    <div>
      <Hero />

      {/* Categories preview */}
      {categories.length > 0 && (
        <section className="container-amalfi py-16">
          <div className="text-center mb-10">
            <h2 className="font-serif text-3xl font-semibold text-amalfi-seadeep">
              Explore Our Menu
            </h2>
            <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-amalfi-lemon" />
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((cat) => {
              const image = cat.metadata?.category_image
              const name = getMetafieldValue(cat.metadata?.name) || cat.title
              return (
                <Link
                  key={cat.id}
                  href={`/menu#${cat.slug}`}
                  className="group relative rounded-2xl overflow-hidden aspect-[4/3] shadow-sm hover:shadow-md transition-shadow"
                >
                  {image ? (
                    <img
                      src={`${image.imgix_url}?w=800&h=600&fit=crop&auto=format,compress`}
                      alt={name}
                      width={400}
                      height={300}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full bg-sea-gradient" />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-amalfi-seadeep/70 to-transparent" />
                  <h3 className="absolute bottom-4 left-4 font-serif text-2xl font-semibold text-white">
                    {name}
                  </h3>
                </Link>
              )
            })}
          </div>
        </section>
      )}

      {/* Featured dishes */}
      {featured.length > 0 && (
        <section className="bg-white/60 border-y border-amalfi-lemon/20">
          <div className="container-amalfi py-16">
            <div className="text-center mb-10">
              <h2 className="font-serif text-3xl font-semibold text-amalfi-seadeep">
                Chef's Favorites
              </h2>
              <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-amalfi-lemon" />
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {featured.map((item) => (
                <MenuItemCard key={item.id} item={item} />
              ))}
            </div>
            <div className="text-center mt-10">
              <Link
                href="/menu"
                className="inline-flex rounded-full bg-amalfi-sea px-6 py-3 font-semibold text-white hover:bg-amalfi-seadeep transition-colors"
              >
                See Full Menu
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Reviews */}
      {topReviews.length > 0 && (
        <section className="container-amalfi py-16">
          <div className="text-center mb-10">
            <h2 className="font-serif text-3xl font-semibold text-amalfi-seadeep">
              What Guests Are Saying
            </h2>
            <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-amalfi-lemon" />
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {topReviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/reviews"
              className="inline-flex rounded-full bg-white px-6 py-3 font-semibold text-amalfi-seadeep border border-amalfi-sea/30 hover:bg-amalfi-sea/5 transition-colors"
            >
              Read All Reviews
            </Link>
          </div>
        </section>
      )}
    </div>
  )
}
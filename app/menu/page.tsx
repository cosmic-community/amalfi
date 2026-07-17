import Link from 'next/link'
import { getMenuCategories, getMenuItems, getMetafieldValue } from '@/lib/cosmic'
import CategorySection from '@/components/CategorySection'
import MenuItemCard from '@/components/MenuItemCard'
import { MenuItem } from '@/types'

export const metadata = {
  title: 'Menu | Amalfi',
  description: 'Explore our full Italian menu grouped by category.',
}

export default async function MenuPage() {
  const [categories, items] = await Promise.all([
    getMenuCategories(),
    getMenuItems(),
  ])

  // Group items by category id
  const itemsByCategory: Record<string, MenuItem[]> = {}
  const uncategorized: MenuItem[] = []

  for (const item of items) {
    const categoryId = item.metadata?.category?.id
    if (categoryId) {
      const existing = itemsByCategory[categoryId]
      if (existing) {
        existing.push(item)
      } else {
        itemsByCategory[categoryId] = [item]
      }
    } else {
      uncategorized.push(item)
    }
  }

  return (
    <div className="container-amalfi py-14">
      <div className="text-center mb-12">
        <h1 className="font-serif text-4xl sm:text-5xl font-semibold text-amalfi-seadeep">
          Our Menu
        </h1>
        <p className="mt-3 text-amalfi-stone max-w-2xl mx-auto">
          A taste of the Amalfi Coast — fresh, seasonal, and made with love.
        </p>
      </div>

      {/* Category quick links */}
      {categories.length > 0 && (
        <div className="flex flex-wrap gap-3 justify-center mb-14">
          {categories.map((cat) => {
            const catItems = itemsByCategory[cat.id]
            if (!catItems || catItems.length === 0) return null
            return (
              <Link
                key={cat.id}
                href={`#${cat.slug}`}
                className="rounded-full bg-white border border-amalfi-sea/25 px-4 py-1.5 text-sm font-medium text-amalfi-sea hover:bg-amalfi-sea hover:text-white transition-colors"
              >
                {getMetafieldValue(cat.metadata?.name) || cat.title}
              </Link>
            )
          })}
        </div>
      )}

      <div className="space-y-16">
        {categories.map((cat) => {
          const catItems = itemsByCategory[cat.id]
          if (!catItems || catItems.length === 0) return null
          return <CategorySection key={cat.id} category={cat} items={catItems} />
        })}

        {uncategorized.length > 0 && (
          <section>
            <div className="mb-6 text-center">
              <h2 className="font-serif text-3xl font-semibold text-amalfi-seadeep">
                More Dishes
              </h2>
              <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-amalfi-lemon" />
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {uncategorized.map((item) => (
                <MenuItemCard key={item.id} item={item} />
              ))}
            </div>
          </section>
        )}
      </div>

      {items.length === 0 && (
        <p className="text-center text-amalfi-stone">No menu items available yet.</p>
      )}
    </div>
  )
}
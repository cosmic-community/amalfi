import { MenuCategory, MenuItem } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'
import MenuItemCard from '@/components/MenuItemCard'

interface CategorySectionProps {
  category: MenuCategory
  items: MenuItem[]
}

export default function CategorySection({ category, items }: CategorySectionProps) {
  if (!items || items.length === 0) return null

  const name = getMetafieldValue(category.metadata?.name) || category.title
  const description = getMetafieldValue(category.metadata?.description)

  return (
    <section id={category.slug} className="scroll-mt-24">
      <div className="mb-6 text-center">
        <h2 className="font-serif text-3xl font-semibold text-amalfi-seadeep">{name}</h2>
        {description && (
          <p className="mt-2 text-amalfi-stone max-w-2xl mx-auto">{description}</p>
        )}
        <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-amalfi-lemon" />
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <MenuItemCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  )
}
import { MenuItem } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'
import DietaryBadge from '@/components/DietaryBadge'

interface MenuItemCardProps {
  item: MenuItem
}

export default function MenuItemCard({ item }: MenuItemCardProps) {
  if (!item) return null

  const name = getMetafieldValue(item.metadata?.name) || item.title
  const description = getMetafieldValue(item.metadata?.description)
  const price = item.metadata?.price
  const image = item.metadata?.featured_image
  const dietary = item.metadata?.dietary_info || []
  const spice = getMetafieldValue(item.metadata?.spice_level)
  const chefsSpecial = item.metadata?.chefs_special === true

  return (
    <article className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-amalfi-lemon/20 flex flex-col">
      {image && (
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={`${image.imgix_url}?w=800&h=600&fit=crop&auto=format,compress`}
            alt={name}
            width={400}
            height={300}
            className="w-full h-full object-cover"
          />
          {chefsSpecial && (
            <span className="absolute top-3 left-3 rounded-full bg-amalfi-terracotta text-white text-xs font-semibold px-3 py-1 shadow">
              Chef's Special
            </span>
          )}
        </div>
      )}
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-serif text-lg font-semibold text-amalfi-ink">{name}</h3>
          {typeof price === 'number' && (
            <span className="font-semibold text-amalfi-sea whitespace-nowrap">
              ${price.toFixed(2)}
            </span>
          )}
        </div>
        {description && (
          <p className="mt-2 text-sm text-amalfi-stone leading-relaxed flex-1">
            {description}
          </p>
        )}
        <div className="mt-4 flex flex-wrap gap-2 items-center">
          {dietary.map((d, idx) => (
            <DietaryBadge key={idx} label={getMetafieldValue(d)} />
          ))}
          {spice && (
            <span className="inline-flex items-center rounded-full bg-amalfi-terracotta/10 text-amalfi-terracotta text-xs font-medium px-2.5 py-0.5">
              🌶 {spice}
            </span>
          )}
        </div>
      </div>
    </article>
  )
}
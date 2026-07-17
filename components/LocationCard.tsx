import Link from 'next/link'
import { Location } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

interface LocationCardProps {
  location: Location
}

export default function LocationCard({ location }: LocationCardProps) {
  if (!location) return null

  const name = getMetafieldValue(location.metadata?.name) || location.title
  const address = getMetafieldValue(location.metadata?.address)
  const phone = getMetafieldValue(location.metadata?.phone)
  const gallery = location.metadata?.photo_gallery || []
  const firstImage = gallery.length > 0 ? gallery[0] : undefined

  return (
    <article className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-amalfi-lemon/20">
      {firstImage && (
        <div className="aspect-[16/9] overflow-hidden">
          <img
            src={`${firstImage.imgix_url}?w=1000&h=560&fit=crop&auto=format,compress`}
            alt={name}
            width={500}
            height={280}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <div className="p-6">
        <h3 className="font-serif text-2xl font-semibold text-amalfi-seadeep">{name}</h3>
        {address && <p className="mt-2 text-sm text-amalfi-stone">{address}</p>}
        {phone && <p className="mt-1 text-sm text-amalfi-sea">{phone}</p>}
        <Link
          href={`/locations/${location.slug}`}
          className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-amalfi-sea hover:text-amalfi-seadeep transition-colors"
        >
          View details & reserve →
        </Link>
      </div>
    </article>
  )
}
import { Review } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'
import StarRating from '@/components/StarRating'

interface ReviewCardProps {
  review: Review
}

export default function ReviewCard({ review }: ReviewCardProps) {
  if (!review) return null

  const name = getMetafieldValue(review.metadata?.customer_name) || 'Guest'
  const text = getMetafieldValue(review.metadata?.review_text)
  const rating = review.metadata?.rating ?? 0
  const date = getMetafieldValue(review.metadata?.review_date)
  const location = review.metadata?.location

  const formattedDate = date
    ? new Date(date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    : ''

  return (
    <article className="bg-white rounded-2xl p-6 shadow-sm border border-amalfi-lemon/20">
      <StarRating rating={Number(rating)} />
      {text && (
        <p className="mt-4 text-amalfi-stone leading-relaxed italic">“{text}”</p>
      )}
      <div className="mt-5 flex items-center justify-between">
        <div>
          <p className="font-semibold text-amalfi-ink">{name}</p>
          {location && location.metadata?.name && (
            <p className="text-xs text-amalfi-sea">
              {getMetafieldValue(location.metadata.name)}
            </p>
          )}
        </div>
        {formattedDate && (
          <span className="text-xs text-amalfi-stone/70">{formattedDate}</span>
        )}
      </div>
    </article>
  )
}
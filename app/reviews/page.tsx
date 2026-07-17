import { getReviews } from '@/lib/cosmic'
import ReviewCard from '@/components/ReviewCard'

export const metadata = {
  title: 'Reviews | Amalfi',
  description: 'Read what our guests are saying about Amalfi.',
}

export default async function ReviewsPage() {
  const reviews = await getReviews()

  const avgRating =
    reviews.length > 0
      ? reviews.reduce((sum, r) => sum + (r.metadata?.rating ?? 0), 0) / reviews.length
      : 0

  return (
    <div className="container-amalfi py-14">
      <div className="text-center mb-12">
        <h1 className="font-serif text-4xl sm:text-5xl font-semibold text-amalfi-seadeep">
          Guest Reviews
        </h1>
        {reviews.length > 0 && (
          <p className="mt-3 text-amalfi-stone">
            Average rating{' '}
            <span className="font-semibold text-amalfi-sea">
              {avgRating.toFixed(1)}
            </span>{' '}
            from {reviews.length} review{reviews.length !== 1 ? 's' : ''}
          </p>
        )}
      </div>

      {reviews.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
      ) : (
        <p className="text-center text-amalfi-stone">No reviews available yet.</p>
      )}
    </div>
  )
}
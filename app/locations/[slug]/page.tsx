// app/locations/[slug]/page.tsx
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getLocation, getMetafieldValue } from '@/lib/cosmic'

export default async function LocationDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const location = await getLocation(slug)

  if (!location) {
    notFound()
  }

  const name = getMetafieldValue(location.metadata?.name) || location.title
  const address = getMetafieldValue(location.metadata?.address)
  const phone = getMetafieldValue(location.metadata?.phone)
  const email = getMetafieldValue(location.metadata?.email)
  const hours = getMetafieldValue(location.metadata?.opening_hours)
  const reservationPhone = getMetafieldValue(location.metadata?.reservation_phone)
  const reservationLink = getMetafieldValue(location.metadata?.reservation_link)
  const gallery = location.metadata?.photo_gallery || []

  return (
    <div>
      {gallery.length > 0 && gallery[0] && (
        <div className="relative h-[50vh] min-h-[320px] overflow-hidden">
          <img
            src={`${gallery[0].imgix_url}?w=2000&h=1000&fit=crop&auto=format,compress`}
            alt={name}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-amalfi-seadeep/80 to-transparent" />
          <div className="relative z-10 h-full flex items-end">
            <div className="container-amalfi pb-8">
              <h1 className="font-serif text-4xl sm:text-5xl font-semibold text-white drop-shadow">
                {name}
              </h1>
            </div>
          </div>
        </div>
      )}

      <div className="container-amalfi py-14">
        <Link
          href="/locations"
          className="text-sm font-medium text-amalfi-sea hover:text-amalfi-seadeep transition-colors"
        >
          ← All locations
        </Link>

        {gallery.length === 0 && (
          <h1 className="font-serif text-4xl font-semibold text-amalfi-seadeep mt-4">
            {name}
          </h1>
        )}

        <div className="mt-8 grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="font-serif text-2xl font-semibold text-amalfi-seadeep mb-3">
                Contact & Address
              </h2>
              <div className="space-y-2 text-amalfi-stone">
                {address && <p>{address}</p>}
                {phone && (
                  <p>
                    <span className="font-medium text-amalfi-ink">Phone: </span>
                    {phone}
                  </p>
                )}
                {email && (
                  <p>
                    <span className="font-medium text-amalfi-ink">Email: </span>
                    {email}
                  </p>
                )}
              </div>
            </div>

            {hours && (
              <div>
                <h2 className="font-serif text-2xl font-semibold text-amalfi-seadeep mb-3">
                  Opening Hours
                </h2>
                <p className="text-amalfi-stone whitespace-pre-line">{hours}</p>
              </div>
            )}

            {gallery.length > 1 && (
              <div>
                <h2 className="font-serif text-2xl font-semibold text-amalfi-seadeep mb-3">
                  Gallery
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {gallery.slice(1).map((img, idx) => (
                    <img
                      key={idx}
                      src={`${img.imgix_url}?w=600&h=600&fit=crop&auto=format,compress`}
                      alt={`${name} ${idx + 2}`}
                      width={300}
                      height={300}
                      className="w-full aspect-square object-cover rounded-xl"
                    />
                  ))}
                </div>
              </div>
            )}
          </div>

          <aside>
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-amalfi-lemon/20 sticky top-24">
              <h3 className="font-serif text-xl font-semibold text-amalfi-seadeep mb-4">
                Make a Reservation
              </h3>
              {reservationPhone && (
                <p className="text-amalfi-stone mb-4">
                  Call us at{' '}
                  <a
                    href={`tel:${reservationPhone}`}
                    className="font-semibold text-amalfi-sea"
                  >
                    {reservationPhone}
                  </a>
                </p>
              )}
              {reservationLink ? (
                <a
                  href={reservationLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center rounded-full bg-amalfi-sea px-6 py-3 font-semibold text-white hover:bg-amalfi-seadeep transition-colors"
                >
                  Book a Table
                </a>
              ) : (
                phone && (
                  <a
                    href={`tel:${phone}`}
                    className="block text-center rounded-full bg-amalfi-sea px-6 py-3 font-semibold text-white hover:bg-amalfi-seadeep transition-colors"
                  >
                    Call to Reserve
                  </a>
                )
              )}
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}
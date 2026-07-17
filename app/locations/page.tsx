import { getLocations } from '@/lib/cosmic'
import LocationCard from '@/components/LocationCard'

export const metadata = {
  title: 'Locations | Amalfi',
  description: 'Find our restaurant locations, hours, and reservation info.',
}

export default async function LocationsPage() {
  const locations = await getLocations()

  return (
    <div className="container-amalfi py-14">
      <div className="text-center mb-12">
        <h1 className="font-serif text-4xl sm:text-5xl font-semibold text-amalfi-seadeep">
          Our Locations
        </h1>
        <p className="mt-3 text-amalfi-stone max-w-2xl mx-auto">
          Visit us and experience the flavors of Italy. Reservations recommended.
        </p>
      </div>

      {locations.length > 0 ? (
        <div className="grid gap-8 sm:grid-cols-2">
          {locations.map((location) => (
            <LocationCard key={location.id} location={location} />
          ))}
        </div>
      ) : (
        <p className="text-center text-amalfi-stone">No locations available yet.</p>
      )}
    </div>
  )
}
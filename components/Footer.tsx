import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-amalfi-seadeep text-amalfi-cream mt-16">
      <div className="container-amalfi py-12 grid gap-8 sm:grid-cols-3">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="text-2xl">🍋</span>
            <span className="font-serif text-2xl font-semibold">Amalfi</span>
          </div>
          <p className="text-sm text-amalfi-sky/90 leading-relaxed">
            Authentic Italian dining inspired by the sun-drenched cliffs and
            lemon groves of the Amalfi Coast.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-3 text-amalfi-lemon">Explore</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/menu" className="hover:text-amalfi-lemon transition-colors">Menu</Link></li>
            <li><Link href="/locations" className="hover:text-amalfi-lemon transition-colors">Locations</Link></li>
            <li><Link href="/reviews" className="hover:text-amalfi-lemon transition-colors">Reviews</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3 text-amalfi-lemon">Visit Us</h4>
          <p className="text-sm text-amalfi-sky/90">
            Reservations recommended. See our locations page for hours and
            contact details.
          </p>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-amalfi py-4 text-xs text-amalfi-sky/70">
          © {new Date().getFullYear()} Amalfi. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
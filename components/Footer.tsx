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
          <div className="flex items-center gap-4 mt-4">
            <a
              href="https://instagram.com/amalfi"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow Amalfi on Instagram"
              className="text-amalfi-cream hover:text-amalfi-lemon transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
            <a
              href="https://facebook.com/amalfi"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow Amalfi on Facebook"
              className="text-amalfi-cream hover:text-amalfi-lemon transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
          </div>
        </div>
        <div>
          <h4 className="font-semibold mb-3 text-amalfi-lemon">Explore</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/menu" className="hover:text-amalfi-lemon transition-colors">Menu</Link></li>
            <li><Link href="/locations" className="hover:text-amalfi-lemon transition-colors">Locations</Link></li>
            <li><Link href="/reviews" className="hover:text-amalfi-lemon transition-colors">Reviews</Link></li>
            <li><Link href="/about" className="hover:text-amalfi-lemon transition-colors">About</Link></li>
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
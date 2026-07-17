import Link from 'next/link'

export default function Header() {
  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/menu', label: 'Menu' },
    { href: '/locations', label: 'Locations' },
    { href: '/reviews', label: 'Reviews' },
    { href: '/about', label: 'About' },
  ]

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b border-amalfi-lemon/30">
      <div className="container-amalfi flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl">🍋</span>
          <span className="font-serif text-2xl font-semibold text-amalfi-seadeep tracking-wide">
            Amalfi
          </span>
        </Link>
        <nav className="hidden sm:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-amalfi-stone hover:text-amalfi-sea transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/locations"
          className="hidden sm:inline-flex items-center rounded-full bg-amalfi-sea px-4 py-2 text-sm font-semibold text-white hover:bg-amalfi-seadeep transition-colors"
        >
          Reserve
        </Link>
      </div>
      <nav className="sm:hidden flex items-center justify-center gap-5 pb-3 pt-1">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-sm font-medium text-amalfi-stone hover:text-amalfi-sea transition-colors"
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  )
}
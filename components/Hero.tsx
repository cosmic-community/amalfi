import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative">
      <div className="relative h-[70vh] min-h-[420px] overflow-hidden">
        <img
          src="https://imgix.cosmicjs.com/99b42bb0-81ed-11f1-b063-03e379245aca-autopilot-photo-1533106497176-45ae19e68ba2-1784299291043.jpeg?w=2000&h=1200&fit=crop&auto=format,compress"
          alt="Amalfi Coast dining"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-amalfi-seadeep/80 via-amalfi-seadeep/30 to-transparent" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <span className="text-5xl mb-4">🍋</span>
          <h1 className="font-serif text-4xl sm:text-6xl font-semibold text-white drop-shadow-md">
            Amalfi
          </h1>
          <p className="mt-4 max-w-xl text-lg text-white/90 drop-shadow">
            Sun-kissed Italian cuisine inspired by the cliffs and lemon groves
            of the Amalfi Coast.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <Link
              href="/menu"
              className="rounded-full bg-amalfi-lemon px-6 py-3 font-semibold text-amalfi-ink hover:bg-amalfi-lemondeep transition-colors"
            >
              View Menu
            </Link>
            <Link
              href="/locations"
              className="rounded-full bg-white/90 px-6 py-3 font-semibold text-amalfi-seadeep hover:bg-white transition-colors"
            >
              Reserve a Table
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
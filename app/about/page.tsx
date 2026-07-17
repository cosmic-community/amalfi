import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About | Amalfi',
  description:
    'The story behind Amalfi — Italian dining inspired by the sun-drenched cliffs and lemon groves of the Amalfi Coast.',
}

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-sea-gradient">
        <div className="container-amalfi py-20 text-center">
          <span className="text-4xl">🍋</span>
          <h1 className="mt-4 font-serif text-4xl sm:text-5xl font-semibold text-amalfi-seadeep">
            Our Story
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-amalfi-stone leading-relaxed">
            A little piece of the Amalfi Coast, brought to your table.
          </p>
          <div className="mx-auto mt-6 h-1 w-16 rounded-full bg-amalfi-lemon" />
        </div>
      </section>

      {/* Story */}
      <section className="container-amalfi py-16">
        <div className="mx-auto max-w-3xl space-y-6 text-amalfi-stone leading-relaxed text-lg">
          <p>
            Amalfi was born from a love of the Italian coast — the terraced
            lemon groves clinging to cliffs, the glittering Tyrrhenian Sea, and
            long lunches that stretch lazily into the afternoon. We wanted to
            capture that feeling and serve it on a plate.
          </p>
          <p>
            Every dish begins with simple, honest ingredients: sun-ripened
            tomatoes, fragrant basil, olive oil pressed from centuries-old
            groves, and of course, the bright citrus that gives our name its
            spark. Our recipes are rooted in tradition and prepared with the
            care of a Sunday family meal.
          </p>
          <p>
            Whether you're joining us for a quiet dinner for two or a boisterous
            table of friends, our goal is the same — to welcome you like family
            and send you home a little happier than you arrived. Benvenuti ad
            Amalfi.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="bg-white/60 border-y border-amalfi-lemon/20">
        <div className="container-amalfi py-16">
          <div className="grid gap-8 sm:grid-cols-3 text-center">
            <div>
              <div className="text-3xl mb-3">🌿</div>
              <h3 className="font-serif text-xl font-semibold text-amalfi-seadeep mb-2">
                Fresh Ingredients
              </h3>
              <p className="text-sm text-amalfi-stone leading-relaxed">
                Locally sourced and seasonal, chosen at their peak for flavor.
              </p>
            </div>
            <div>
              <div className="text-3xl mb-3">👨‍🍳</div>
              <h3 className="font-serif text-xl font-semibold text-amalfi-seadeep mb-2">
                Time-Honored Recipes
              </h3>
              <p className="text-sm text-amalfi-stone leading-relaxed">
                Traditional Italian techniques passed down through generations.
              </p>
            </div>
            <div>
              <div className="text-3xl mb-3">💛</div>
              <h3 className="font-serif text-xl font-semibold text-amalfi-seadeep mb-2">
                Warm Hospitality
              </h3>
              <p className="text-sm text-amalfi-stone leading-relaxed">
                Every guest is family from the moment they walk through the door.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
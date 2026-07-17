import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact | Amalfi',
  description:
    'Get in touch with Amalfi — reservations, private dining enquiries, and general questions.',
}

export default function ContactPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-sea-gradient">
        <div className="container-amalfi py-20 text-center">
          <span className="text-4xl">✉️</span>
          <h1 className="mt-4 font-serif text-4xl sm:text-5xl font-semibold text-amalfi-seadeep">
            Contact Us
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-amalfi-stone leading-relaxed">
            We'd love to hear from you. Reach out for reservations, private
            dining, or any questions.
          </p>
          <div className="mx-auto mt-6 h-1 w-16 rounded-full bg-amalfi-lemon" />
        </div>
      </section>

      {/* Contact grid */}
      <section className="container-amalfi py-16">
        <div className="mx-auto max-w-5xl grid gap-12 lg:grid-cols-2">

          {/* Contact details */}
          <div className="space-y-8">
            <div>
              <h2 className="font-serif text-2xl font-semibold text-amalfi-seadeep mb-4">
                Get in Touch
              </h2>
              <ul className="space-y-4 text-amalfi-stone">
                <li className="flex items-start gap-3">
                  <span className="text-xl mt-0.5">📍</span>
                  <div>
                    <p className="font-semibold text-amalfi-seadeep">Address</p>
                    <p className="text-sm leading-relaxed">
                      123 Coastal Drive<br />Amalfi, CA 90210
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-xl mt-0.5">📞</span>
                  <div>
                    <p className="font-semibold text-amalfi-seadeep">Phone</p>
                    <a
                      href="tel:+15550001234"
                      className="text-sm hover:text-amalfi-sea transition-colors"
                    >
                      (555) 000-1234
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-xl mt-0.5">📧</span>
                  <div>
                    <p className="font-semibold text-amalfi-seadeep">Email</p>
                    <a
                      href="mailto:hello@amalfi.com"
                      className="text-sm hover:text-amalfi-sea transition-colors"
                    >
                      hello@amalfi.com
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-xl mt-0.5">🕐</span>
                  <div>
                    <p className="font-semibold text-amalfi-seadeep">Hours</p>
                    <p className="text-sm leading-relaxed">
                      Mon–Thu: 12pm – 10pm<br />
                      Fri–Sat: 12pm – 11pm<br />
                      Sunday: 12pm – 9pm
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-serif text-xl font-semibold text-amalfi-seadeep mb-2">
                Private Dining & Events
              </h3>
              <p className="text-sm text-amalfi-stone leading-relaxed">
                Planning a special occasion? Our private dining room seats up to
                30 guests. Email us at{' '}
                <a
                  href="mailto:events@amalfi.com"
                  className="text-amalfi-sea hover:underline"
                >
                  events@amalfi.com
                </a>{' '}
                and we'll take care of every detail.
              </p>
            </div>
          </div>

          {/* Contact form */}
          <div className="bg-white/80 border border-amalfi-lemon/20 rounded-2xl p-8 shadow-sm">
            <h2 className="font-serif text-2xl font-semibold text-amalfi-seadeep mb-6">
              Send a Message
            </h2>
            <form className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-amalfi-seadeep mb-1"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  className="w-full rounded-lg border border-amalfi-lemon/30 px-4 py-2.5 text-sm text-amalfi-seadeep placeholder:text-amalfi-stone/50 focus:outline-none focus:ring-2 focus:ring-amalfi-sea/40"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-amalfi-seadeep mb-1"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  className="w-full rounded-lg border border-amalfi-lemon/30 px-4 py-2.5 text-sm text-amalfi-seadeep placeholder:text-amalfi-stone/50 focus:outline-none focus:ring-2 focus:ring-amalfi-sea/40"
                />
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-amalfi-seadeep mb-1"
                >
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="Reservation, private dining, general enquiry…"
                  className="w-full rounded-lg border border-amalfi-lemon/30 px-4 py-2.5 text-sm text-amalfi-seadeep placeholder:text-amalfi-stone/50 focus:outline-none focus:ring-2 focus:ring-amalfi-sea/40"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-amalfi-seadeep mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="How can we help?"
                  className="w-full rounded-lg border border-amalfi-lemon/30 px-4 py-2.5 text-sm text-amalfi-seadeep placeholder:text-amalfi-stone/50 focus:outline-none focus:ring-2 focus:ring-amalfi-sea/40 resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-full bg-amalfi-sea px-6 py-3 text-sm font-semibold text-white hover:bg-amalfi-seadeep transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

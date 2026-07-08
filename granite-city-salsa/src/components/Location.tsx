import { MapPin, Navigation } from 'lucide-react'
import SectionHeading from './SectionHeading'
import Glow from './Glow'

export default function Location() {
  return (
    <section className="relative overflow-hidden py-20 px-6 bg-brand-black font-oswald">
      <Glow color="purple" pos="top-left" />
      <div className="relative z-10 max-w-6xl mx-auto">
        <SectionHeading
          eyebrow="Location"
          title="Find Us"
          subtitle="In the heart of Aberdeen"
          className="mb-16"
        />

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Venue Image + Map */}
          <div className="order-2 md:order-1 flex flex-col gap-6">
            <img
              src="/venue.png"
              alt="Dejavu Nightclub Aberdeen"
              className="w-full rounded-2xl shadow-2xl hover:scale-105 transform transition duration-500 border-2 border-brand-green/30"
            />
            <iframe
              title="Map to Dejavu Nightclub, Aberdeen"
              src="https://www.google.com/maps?q=1+Diamond+Street,+Aberdeen+AB10+1QX&output=embed"
              className="w-full h-60 rounded-2xl shadow-2xl border-2 border-brand-green/30 block"
              style={{ filter: 'invert(0.92) hue-rotate(180deg) contrast(0.9)' }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Venue Info */}
          <div className="order-1 md:order-2">
            <h3 className="text-3xl font-bold text-white mb-6">
              Dejavu Lounge & Nightclub
            </h3>

            <div className="space-y-6 text-brand-grey">
              <p className="text-lg leading-relaxed">
                Located in Aberdeen's city centre, just off Union Street, Dejavu is a spacious nightclub and lounge with a capacity of 450.
              </p>

              <p className="text-lg leading-relaxed">
                With plenty of room on the dance floor, a fully stocked bar, and a great sound system, Dejavu has everything we need for a brilliant night of dancing. Whether you're taking your first salsa steps or refining your technique, it's the ideal environment.
              </p>

              <div className="bg-gray-900 rounded-lg p-6 space-y-4 border border-gray-800">
                <div className="flex items-start gap-3">
                  <MapPin className="w-6 h-6 text-brand-green flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-bold text-white">Address</p>
                    <p>1 Diamond Street</p>
                    <p>Aberdeen AB10 1QX</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Navigation className="w-6 h-6 text-brand-green flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-bold text-white">Getting Here</p>
                    <p>Right in the city centre, just off Union Street</p>
                    <p>Easy access by bus, car, or on foot</p>
                  </div>
                </div>
              </div>

              <a
                href="https://www.google.com/maps/dir/?api=1&destination=Dejavu+Nightclub%2C+1+Diamond+Street%2C+Aberdeen+AB10+1QX"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-brand-green to-brand-green-dark text-brand-black font-bold px-8 py-4 rounded-full hover:scale-105 transform transition shadow-lg hover:shadow-brand-green/50"
              >
                📍 Get Directions
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

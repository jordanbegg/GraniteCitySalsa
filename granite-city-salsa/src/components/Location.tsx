import { MapPin, Navigation } from 'lucide-react'

export default function Location() {
  return (
    <section className="py-20 px-6 bg-brand-black font-oswald">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">
          Find Us
        </h2>
        <p className="text-xl text-brand-grey text-center mb-16">
          In the heart of Aberdeen's city centre
        </p>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Venue Image */}
          <div className="order-2 md:order-1">
            <img 
              src="/venue.png" 
              alt="Dejavu Nightclub Aberdeen"
              className="w-full rounded-2xl shadow-2xl hover:scale-105 transform transition duration-500 border-2 border-brand-green/30"
            />
          </div>

          {/* Venue Info */}
          <div className="order-1 md:order-2">
            <h3 className="text-3xl font-bold text-white mb-6">
              Dejavu Lounge & Nightclub
            </h3>
            
            <div className="space-y-6 text-brand-grey">
              <p className="text-lg leading-relaxed">
                Located in the heart of Aberdeen's city centre, just off Union Street, Dejavu is Aberdeen's classiest nightclub and lounge with a capacity of 450.
              </p>
              
              <p className="text-lg leading-relaxed">
                The venue boasts an amazing dance floor with top-notch sound systems and lighting, creating the perfect atmosphere for learning and social dancing. Whether you're taking your first salsa steps or perfecting your bachata, Dejavu provides the ideal environment.
              </p>

              <div className="bg-gray-900 rounded-lg p-6 space-y-4 border border-gray-800">
                <div className="flex items-start gap-3">
                  <MapPin className="w-6 h-6 text-brand-green flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-bold text-white">Address</p>
                    <p>1 Diamond Street</p>
                    <p>Aberdeen AB10 1QU</p>
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
                href="https://www.google.com/maps/place/Dejavu+Nightclub+Aberdeen/@57.1464755,-2.0986347,17z/data=!3m1!4b1!4m6!3m5!1s0x48840e2b35c5c5c5:0x5f5f5f5f5f5f5f5f!8m2!3d57.1464755!4d-2.0960598!16s%2Fg%2F11c5q7r7r7"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-brand-green to-brand-green-dark text-brand-black font-bold px-8 py-4 rounded-full hover:scale-105 transform transition shadow-lg hover:shadow-brand-green/50"
              >
                📍 Get Directions
              </a>
            </div>
          </div>
        </div>

        {/* Google Map Embed */}
        <div className="mt-16">
          <div className="rounded-2xl overflow-hidden shadow-2xl border-2 border-brand-green/30">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2164.7886788886884!2d-2.098634823716825!3d57.14647547485776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48840e2b35c5c5c5%3A0x5f5f5f5f5f5f5f5f!2s1%20Diamond%20St%2C%20Aberdeen%20AB10%201QU!5e0!3m2!1sen!2suk!4v1234567890123!5m2!1sen!2suk"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}
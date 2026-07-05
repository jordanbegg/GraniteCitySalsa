import { useState } from 'react'
import { Instagram, Facebook } from 'lucide-react'
import ClaimModal from './ClaimModel'

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-brand-black via-brand-purple-dark to-brand-black font-oswald">
        {/* Background pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          {/* Logo */}
          <img 
            src="/logo.png" 
            alt="Granite City Salsa Logo" 
            className="w-32 h-32 md:w-40 md:h-40 mx-auto mb-6 drop-shadow-2xl"
          />
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-wide">
            Granite City Salsa
          </h1>
          
          <p className="text-xl md:text-2xl text-brand-grey mb-4 font-light">
            Aberdeen's Newest Salsa & Bachata Community
          </p>
          
          <p className="text-lg text-gray-400 mb-8">
            Every Tuesday @ Dejavu Nightclub • All Levels Welcome
          </p>

          {/* Social Media Links */}
          <div className="flex justify-center gap-4 mb-12">
            <a 
              href="https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAN__sfk8i9UOUZaNzJWSDg2VkNTMzRZUkFENUNNTFZWSy4u"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-brand-purple to-brand-purple-dark p-4 rounded-full hover:scale-110 transform transition shadow-lg"
              aria-label="Follow us on Instagram"
            >
              <Instagram className="w-6 h-6 text-white" />
            </a>
            <a 
              href="https://www.facebook.com/profile.php?id=61581967402586"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-blue-500 to-blue-700 p-4 rounded-full hover:scale-110 transform transition shadow-lg"
              aria-label="Follow us on Facebook"
            >
              <Facebook className="w-6 h-6 text-white" />
            </a>
          </div>

          {/* CTA Button */}
          <button 
            onClick={() => setIsModalOpen(true)}
            className="bg-gradient-to-r from-brand-green to-brand-green-dark text-brand-black font-bold text-xl px-12 py-4 rounded-full hover:scale-105 transform transition shadow-2xl hover:shadow-brand-green/50"
          >
            🎉 Claim Your First Class FREE
          </button>

          <p className="text-sm text-gray-500 mt-6">
            No partner required • No experience needed
          </p>
        </div>
      </section>

      {/* Modal */}
      <ClaimModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}
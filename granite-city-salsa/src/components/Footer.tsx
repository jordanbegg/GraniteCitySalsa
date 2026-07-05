import { Instagram, Facebook } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-brand-black border-t border-brand-purple-dark/40 font-oswald">
      <div className="max-w-4xl mx-auto px-6 py-12 text-center">
        {/* Social Media Links */}
        <div className="flex justify-center gap-4 mb-6">
          <a
            href="https://www.instagram.com/granitecitysalsa"
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

        <p className="text-brand-grey font-light mb-1">
          Granite City Salsa
        </p>
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Granite City Salsa • Aberdeen's Salsa Community
        </p>
      </div>
    </footer>
  )
}

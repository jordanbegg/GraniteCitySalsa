import { Instagram, Facebook } from 'lucide-react'

interface FooterProps {
  onClaim: () => void
}

export default function Footer({ onClaim }: FooterProps) {
  return (
    <footer
      className="relative overflow-hidden font-oswald"
      style={{ background: 'radial-gradient(120% 130% at 50% 0%, #1a0b2e 0%, #06030a 60%)' }}
    >
      {/* Dot texture */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }}
      />

      {/* CTA band */}
      <div className="relative text-center px-6 pt-20 pb-16 border-b border-gray-800">
        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-wide mb-4">
          Your first class is on us
        </h2>
        <p className="text-xl font-light text-brand-grey mb-8">
          No partner, no experience — just come and dance. Every Tuesday at Dejavu.
        </p>
        <button
          onClick={onClaim}
          className="bg-gradient-to-r from-brand-green to-brand-green-dark text-brand-black font-bold text-xl px-12 py-4 rounded-full transition hover:scale-105 shadow-2xl hover:shadow-[0_20px_45px_-10px_rgba(90,186,50,0.5)]"
        >
          🎉 Claim Your First Class FREE
        </button>
      </div>

      {/* Brand bar */}
      <div className="relative max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-6 px-6 py-8">
        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="" className="w-12 h-12" />
          <span className="uppercase text-brand-grey font-semibold text-lg tracking-[0.1em]">
            Granite City Salsa
          </span>
        </div>

        <div className="flex gap-3">
          <a
            href="https://www.instagram.com/granitecitysalsa"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-12 w-12 items-center justify-center rounded-full border-[1.5px] border-white/30 transition duration-300 hover:scale-110 hover:border-transparent hover:bg-gradient-to-r hover:from-brand-purple hover:to-brand-purple-dark"
            aria-label="Follow us on Instagram"
          >
            <Instagram className="w-5 h-5 text-white" />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61581967402586"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-12 w-12 items-center justify-center rounded-full border-[1.5px] border-white/30 transition duration-300 hover:scale-110 hover:border-transparent hover:bg-gradient-to-r hover:from-brand-green hover:to-brand-green-dark"
            aria-label="Follow us on Facebook"
          >
            <Facebook className="w-5 h-5 text-white" />
          </a>
        </div>

        <div className="text-sm text-gray-500">
          © {new Date().getFullYear()} Granite City Salsa · Aberdeen's Salsa Community
        </div>
      </div>
    </footer>
  )
}

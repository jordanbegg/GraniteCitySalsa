import { Instagram, Facebook } from 'lucide-react'

interface HeroProps {
  onClaim: () => void
}

export default function Hero({ onClaim }: HeroProps) {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 font-oswald"
      style={{ background: 'radial-gradient(120% 90% at 50% -10%, #17092a 0%, #06030a 55%)' }}
    >
      {/* Green glow, top-centre */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 -translate-x-1/2 -top-40 h-[900px] w-[900px] rounded-full"
        style={{ background: 'radial-gradient(circle, color-mix(in srgb, #5aba32 18%, transparent), transparent 60%)' }}
      />
      {/* Purple glow, bottom-centre */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 -translate-x-1/2 -bottom-52 h-[760px] w-[760px] rounded-full"
        style={{ background: 'radial-gradient(circle, color-mix(in srgb, #c03be2 16%, transparent), transparent 60%)' }}
      />
      {/* Dot texture */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto py-20">
        <p className="uppercase text-brand-grey text-sm mb-6" style={{ letterSpacing: '0.34em' }}>
          Aberdeen · Est. 2023
        </p>

        <img
          src="/logo.png"
          alt="Granite City Salsa Logo"
          className="w-32 h-32 md:w-[8.25rem] md:h-[8.25rem] mb-6"
          style={{ filter: 'drop-shadow(0 0 40px rgba(90,186,50,0.55))' }}
        />

        <h1 className="text-5xl md:text-7xl font-bold text-white tracking-wide mb-6">
          Granite City Salsa
        </h1>

        <span
          className="block h-[3px] w-16 rounded mb-6"
          style={{ background: 'linear-gradient(to right, #5aba32, #4d9b2f)' }}
        />

        <p className="text-xl md:text-2xl font-light text-brand-grey mb-4">
          Fun and Friendly Salsa in Aberdeen
        </p>

        <p className="uppercase text-sm text-gray-400 mb-8" style={{ letterSpacing: '0.2em' }}>
          Every Tuesday @ Dejavu Nightclub · All Levels Welcome
        </p>

        {/* Social Media Links (ghost) */}
        <div className="flex justify-center gap-4 mb-12">
          <a
            href="https://www.instagram.com/granitecitysalsa"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-14 w-14 items-center justify-center rounded-full border-[1.5px] border-white/30 transition duration-300 hover:scale-110 hover:border-transparent hover:bg-gradient-to-r hover:from-brand-purple hover:to-brand-purple-dark"
            aria-label="Follow us on Instagram"
          >
            <Instagram className="w-6 h-6 text-white" />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61581967402586"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-14 w-14 items-center justify-center rounded-full border-[1.5px] border-white/30 transition duration-300 hover:scale-110 hover:border-transparent hover:bg-gradient-to-r hover:from-brand-green hover:to-brand-green-dark"
            aria-label="Follow us on Facebook"
          >
            <Facebook className="w-6 h-6 text-white" />
          </a>
        </div>

        {/* CTA Button */}
        <button
          onClick={onClaim}
          className="bg-gradient-to-r from-brand-green to-brand-green-dark text-brand-black font-bold text-xl px-12 py-4 rounded-full transition hover:scale-105 shadow-2xl hover:shadow-[0_20px_45px_-10px_rgba(90,186,50,0.5)]"
        >
          🎉 Claim Your First Class FREE
        </button>

        <p className="text-sm text-gray-500 mt-6">
          No partner required · No experience needed
        </p>
      </div>
    </section>
  )
}

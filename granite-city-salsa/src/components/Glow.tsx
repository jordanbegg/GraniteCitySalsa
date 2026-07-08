interface GlowProps {
  color?: 'green' | 'purple'
  pos?: 'top' | 'top-left' | 'top-right'
}

// Subtle radial glow layer that echoes the hero, tinting section backgrounds.
export default function Glow({ color = 'green', pos = 'top' }: GlowProps) {
  const c = color === 'purple' ? '#c03be2' : '#5aba32'
  const at =
    pos === 'top-left' ? '-5% -20%' : pos === 'top-right' ? '105% -20%' : '50% -15%'

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0"
      style={{
        backgroundImage: `radial-gradient(55% 50% at ${at}, color-mix(in srgb, ${c} 13%, transparent), transparent 70%)`,
      }}
    />
  )
}

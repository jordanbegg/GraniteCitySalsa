import SectionHeading from './SectionHeading'
import Glow from './Glow'

const NODE_GRADIENTS: Record<string, string> = {
  green: 'linear-gradient(to right, #5aba32, #4d9b2f)',
  'green-deep': 'linear-gradient(to right, #4d9b2f, #3e7629)',
  'green-darker': 'linear-gradient(to right, #3e7629, #2e5a1f)',
  purple: 'linear-gradient(to right, #c03be2, #5f1a85)',
}

const SPINE_COLOR = 'color-mix(in srgb, #5aba32 28%, #1f2937)'

export default function Schedule() {
  const classes = [
    { from: '7pm', to: '8pm', name: 'Beginners Salsa', instructors: 'Jordan & Yasmin', variant: 'green' },
    { from: '8pm', to: '9pm', name: 'Improvers Salsa', instructors: 'Jordan & Alexandra', variant: 'green-deep' },
    { from: '9pm', to: '10pm', name: 'Intermediate Salsa', instructors: 'Jordan & Alexandra', variant: 'green-darker' },
    { from: '10pm', to: '11pm', name: 'Social Dancing', instructors: 'Open floor — all welcome', variant: 'purple' },
  ]

  return (
    <section className="relative overflow-hidden py-20 px-6 bg-brand-black font-oswald">
      <Glow color="green" pos="top-left" />
      <div className="relative z-10 max-w-5xl mx-auto">
        <SectionHeading
          eyebrow="Timetable"
          title="New Timetable"
          subtitle="Every Tuesday at Dejavu Nightclub"
          className="mb-16"
        />

        <div className="max-w-2xl mx-auto">
          {classes.map((classItem, index) => {
            const timeColor = classItem.variant === 'purple' ? '#c03be2' : '#5aba32'
            const isLast = index === classes.length - 1
            return (
              <div
                key={index}
                className="grid grid-cols-[4rem_2rem_1fr] gap-x-4 pb-8 last:pb-0"
              >
                {/* Time */}
                <div className="text-right pt-1">
                  <div className="text-2xl font-bold leading-none" style={{ color: timeColor }}>
                    {classItem.from}
                  </div>
                  <div className="text-sm font-light text-gray-400 mt-1">
                    to {classItem.to}
                  </div>
                </div>

                {/* Node + spine */}
                <div className="relative flex flex-col items-center">
                  <span
                    className="mt-1 h-[1.15rem] w-[1.15rem] rounded-full border-[3px] border-brand-black z-10"
                    style={{
                      background: NODE_GRADIENTS[classItem.variant],
                      boxShadow: `0 0 0 1px ${timeColor}, 0 0 16px color-mix(in srgb, ${timeColor} 60%, transparent)`,
                    }}
                  />
                  {!isLast && (
                    <span className="mt-1 w-0.5 flex-1" style={{ background: SPINE_COLOR }} />
                  )}
                </div>

                {/* Card */}
                <div className="rounded-lg bg-gray-900 border border-gray-800 shadow-lg px-6 py-4 transition duration-300 hover:border-brand-green/60 hover:translate-x-1 hover:shadow-[0_20px_45px_-10px_rgba(90,186,50,0.5)]">
                  <h3 className="text-2xl font-bold text-white">
                    {classItem.name}
                  </h3>
                  <p className="text-brand-grey mt-1">
                    {classItem.instructors}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-brand-grey mb-2">
            📍 Dejavu Nightclub, 1 Diamond Street, Aberdeen AB10 1QX
          </p>
          <p className="text-gray-400">
            Still on every Tuesday — now with more classes!
          </p>
        </div>
      </div>
    </section>
  )
}

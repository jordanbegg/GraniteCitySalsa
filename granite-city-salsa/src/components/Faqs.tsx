import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import SectionHeading from './SectionHeading'
import Glow from './Glow'

export default function Faqs() {
  const items = [
    {
      q: 'Do I need a partner?',
      a: 'Not at all — come solo or bring friends. We rotate partners throughout the class so everyone gets to dance and nobody sits out.'
    },
    {
      q: 'Can total beginners come?',
      a: 'Absolutely — our 7pm Beginners Salsa assumes zero experience. We start from the very first step and build up gently. All levels are welcome every Tuesday.'
    },
    {
      q: 'What should I wear?',
      a: 'Comfy clothes you can move in and smooth-soled shoes that let you turn (trainers with grippy soles can stick). No special dance shoes needed to get started.'
    },
    {
      q: 'How do I pay?',
      a: 'Pay on the day — cash or card, from £8 a class (£6 students). Prefer to commit? Grab a 5- or 10-class pass and save. Your very first class is free.'
    }
  ]

  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="relative overflow-hidden py-20 px-6 bg-brand-black font-oswald">
      <Glow color="green" pos="top" />
      <div className="relative z-10 max-w-5xl mx-auto">
        <SectionHeading
          eyebrow="FAQ"
          title="Good To Know"
          subtitle="Everything a first-timer wonders before walking in"
          className="mb-12"
        />

        <div className="max-w-3xl mx-auto space-y-4">
          {items.map((item, index) => {
            const isOpen = openIndex === index
            return (
              <div
                key={index}
                className={`rounded-lg bg-gray-900 border shadow-lg transition ${
                  isOpen
                    ? 'border-brand-green/60 shadow-[0_20px_45px_-10px_rgba(90,186,50,0.5)]'
                    : 'border-gray-800'
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between gap-4 text-left px-6 py-5"
                  aria-expanded={isOpen}
                >
                  <span className="text-xl md:text-2xl font-semibold text-white">
                    {item.q}
                  </span>
                  <ChevronDown
                    className={`w-6 h-6 text-brand-green shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-300 ${
                    isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 text-brand-grey text-lg font-light leading-relaxed">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

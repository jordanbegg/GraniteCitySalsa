import SectionHeading from './SectionHeading'
import Glow from './Glow'

export default function Prices() {
  const categories = [
    {
      title: "Pay On The Day",
      subtitle: "No commitment — just turn up",
      color: "from-brand-green to-brand-green-dark",
      featured: false,
      options: [
        { name: "1 class", price: "£8", student: "£6" },
        { name: "2 classes", price: "£14", student: "£10" },
        { name: "3 classes", price: "£18", student: "£13" }
      ]
    },
    {
      title: "Class Passes",
      subtitle: "Save when you commit",
      color: "from-brand-purple to-brand-purple-dark",
      featured: true,
      options: [
        { name: "5 class pass", price: "£35", student: "£25" },
        { name: "10 class pass", price: "£60", student: "£48" }
      ]
    }
  ]

  return (
    <section className="relative overflow-hidden py-20 px-6 bg-gray-900 font-oswald">
      <Glow color="purple" pos="top-right" />
      <div className="relative z-10 max-w-5xl mx-auto">
        <SectionHeading
          eyebrow="Pricing"
          title="Prices"
          subtitle="Discounted student rates on every option"
          className="mb-12"
        />

        <div className="grid gap-8 md:grid-cols-2">
          {categories.map((category, index) => (
            <div
              key={index}
              className={`relative bg-brand-black rounded-lg p-8 shadow-2xl transition hover:scale-105 hover:border-brand-green/50 hover:shadow-brand-green/50 ${
                category.featured ? 'border border-brand-green/40' : 'border border-gray-800'
              }`}
            >
              {category.featured && (
                <span className="absolute top-[calc(2rem+3px)] right-8 bg-gradient-to-r from-brand-green to-brand-green-dark text-brand-black uppercase text-xs font-bold px-3 py-1 rounded-full">
                  Best value
                </span>
              )}

              <div className={`inline-block bg-gradient-to-r ${category.color} text-white px-4 py-2 rounded-full text-sm font-bold mb-2`}>
                {category.title}
              </div>
              <p className="text-brand-grey mb-6">
                {category.subtitle}
              </p>

              <ul className="space-y-4">
                {category.options.map((option, i) => (
                  <li
                    key={i}
                    className="flex items-start justify-between border-b border-gray-800 pb-4 last:border-b-0 last:pb-0"
                  >
                    <span className="text-lg text-white pt-1">{option.name}</span>
                    <span className="text-right">
                      <span className="block text-3xl font-bold text-white leading-none">
                        {option.price}
                      </span>
                      <span className="block text-sm text-brand-green mt-1">
                        {option.student} student
                      </span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="text-lg text-brand-grey text-center mt-12">
          💳 We accept cash or card
        </p>
      </div>
    </section>
  )
}

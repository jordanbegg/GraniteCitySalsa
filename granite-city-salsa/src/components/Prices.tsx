export default function Prices() {
  const categories = [
    {
      title: "Pay On The Day",
      subtitle: "No commitment — just turn up",
      color: "from-brand-green to-brand-green-dark",
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
      options: [
        { name: "5 class pass", price: "£35", student: "£25" },
        { name: "10 class pass", price: "£60", student: "£48" }
      ]
    }
  ]

  return (
    <section className="py-20 px-6 bg-gray-900 font-oswald">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">
          Prices
        </h2>
        <p className="text-xl text-brand-grey text-center mb-12">
          Student prices shown in brackets
        </p>

        <div className="grid gap-8 md:grid-cols-2">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-brand-black rounded-lg p-8 shadow-2xl border border-gray-800 hover:scale-105 transform transition hover:border-brand-green/50 hover:shadow-brand-green/50"
            >
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
                    className="flex items-baseline justify-between border-b border-gray-800 pb-3 last:border-b-0 last:pb-0"
                  >
                    <span className="text-lg text-white">{option.name}</span>
                    <span className="text-lg font-bold text-white">
                      {option.price}
                      <span className="text-brand-grey font-normal"> ({option.student})</span>
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

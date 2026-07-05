export default function Schedule() {
  const classes = [
    {
      time: "7pm - 8pm",
      name: "Beginners Salsa",
      instructors: "Jordan & Yasmin",
      color: "from-brand-green to-brand-green-dark"
    },
    {
      time: "8pm - 9pm",
      name: "Improvers Salsa",
      instructors: "Jordan & Alexandra",
      color: "from-brand-red to-brand-red-dark"
    },
    {
      time: "9pm - 10pm",
      name: "Intermediate Salsa",
      instructors: "Jordan & Alexandra",
      color: "from-brand-green-dark to-brand-green-darker"
    },
    {
      time: "10pm - 11pm",
      name: "Social Dancing",
      instructors: "Salsa",
      color: "from-brand-purple to-brand-purple-dark"
    }
  ]

  return (
    <section className="py-20 px-6 bg-brand-black font-oswald">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">
          New Timetable
        </h2>
        <p className="text-xl text-brand-grey text-center mb-12">
          Every Tuesday at Dejavu Nightclub
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          {classes.map((classItem, index) => (
            <div 
              key={index}
              className="bg-gray-900 rounded-lg p-6 hover:scale-105 transform transition shadow-lg border border-gray-800 hover:border-brand-green/50"
            >
              <div className={`inline-block bg-gradient-to-r ${classItem.color} text-white px-4 py-2 rounded-full text-sm font-bold mb-3`}>
                {classItem.time}
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">
                {classItem.name}
              </h3>
              <p className="text-brand-grey">
                {classItem.instructors}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-brand-grey mb-2">
            📍 Dejavu Nightclub, 1 Diamond Street, Aberdeen AB10 1QX
          </p>
          <p className="text-gray-400">
            Still on every Tuesday - now with more classes!
          </p>
        </div>
      </div>
    </section>
  )
}
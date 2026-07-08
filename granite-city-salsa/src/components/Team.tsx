import SectionHeading from './SectionHeading'
import Glow from './Glow'

export default function Team() {
  const instructors = [
    {
      name: "Jordan",
      role: "Salsa Instructor",
      bio: "Back in 2019, Jordan hung up his football boots and swapped them for Latin dance shoes. He quickly gained a passion for the fun, vibrant rhythms of salsa music and the technical details of the dance. Since then, he has pursued his passion by learning as much as possible, attending festivals around Europe to learn from the very best. Now in his fourth year of teaching, he is hoping to expand the Latin dance community and help make Aberdeen an even better place to dance.",
      image: "/team/jordan.png",
      color: "from-brand-green to-brand-green-dark"
    },
    {
      name: "Alexandra",
      role: "Salsa Instructor",
      bio: "Alexandra started dancing salsa seven years ago at the Aberdeen University Dance Society, adding salsa to her repertoire of dance styles including Ballet, Jazz, Contemporary, Ballroom & Latin. She found her passion in salsa dancing through the music and the non-verbal connection between leader and follower. She has been teaching dance classes for 6 years and is currently working towards her Diploma in Dance Education. Alexandra wants to bring beginners into the salsa community and share her love of salsa.",
      image: "/team/alexandra.png",
      color: "from-brand-purple to-brand-purple-dark"
    },
    {
      name: "Yasmin",
      role: "Salsa Instructor",
      bio: "Dancing has brought Yasmin joy all of her life. In her younger years she did ballet, jazz and highland dancing. During university, she discovered and fell in love with salsa. She brings strong dancing technique, lots of teaching experience, and infectious energy.",
      image: "/team/yasmin.jpg",
      color: "from-brand-red to-brand-red-dark"
    }
  ]

  return (
    <section className="relative overflow-hidden py-20 px-6 bg-gray-900 font-oswald">
      <Glow color="green" pos="top-right" />
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Group Photo */}
        <div className="mb-16 animate-fade-in">
          <img
            src="/team/team.png"
            alt="Granite City Salsa Team"
            className="w-full max-w-3xl mx-auto rounded-2xl shadow-2xl hover:scale-105 transform transition duration-500 border-2 border-brand-green/30"
          />
        </div>

        <SectionHeading
          eyebrow="The Team"
          title="Meet Your Instructors"
          subtitle="Experienced dancers passionate about sharing their love of salsa"
          className="mb-16"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {instructors.map((instructor, index) => (
            <div
              key={index}
              className="bg-brand-black rounded-lg overflow-hidden shadow-2xl hover:scale-105 hover:shadow-brand-green/50 transform transition duration-300 animate-slide-up border border-gray-800"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden group bg-gray-800">
                <img
                  src={instructor.image}
                  alt={instructor.name}
                  className="w-full h-80 object-cover object-top group-hover:scale-110 transition duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${instructor.color} opacity-20 group-hover:opacity-30 transition`}></div>
              </div>

              <div className="p-6">
                <h3 className="text-3xl font-bold text-white mb-2">
                  {instructor.name}
                </h3>
                <p className={`bg-gradient-to-r ${instructor.color} bg-clip-text text-transparent font-bold text-lg mb-4`}>
                  {instructor.role}
                </p>
                <p className="text-brand-grey leading-relaxed">
                  {instructor.bio}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-brand-grey">
            ✨ Dancing since 2019 · teaching and performing across Aberdeen since 2023
          </p>
        </div>
      </div>
    </section>
  )
}

export default function Team() {
  const instructors = [
    {
      name: "Jordan",
      role: "Salsa Instructor",
      bio: "Six years ago, Jordan hung up his football boots and swapped them for Latin dance shoes. He quickly gained a passion for the fun, vibrant rhythms of salsa music and the technical details of the dance. Since then, he has pursued his passion by learning as much as possible, attending festivals around Europe to learn from the very best. Now in his fourth year of teaching, he is hoping to expand the Latin dance community and help make Aberdeen an even better place to dance.",
      image: "/team/jordan.png",
      color: "from-green-500 to-green-600"
    },
    {
      name: "Alexandra",
      role: "Salsa & Bachata Instructor",
      bio: "Alexandra started dancing salsa seven years ago at the Aberdeen University Dance Society, adding salsa to her repertoire of dance styles including Ballet, Jazz, Contemporary, Ballroom & Latin. She found her passion in salsa dancing through the music and the non-verbal connection between leader and follower. She has been teaching dance classes for 6 years and is currently working towards her Diploma in Dance Education. Alexandra wants to bring beginners into the salsa community and share her love of salsa.",
      image: "/team/alexandra.png",
      color: "from-purple-500 to-pink-600"
    },
    {
      name: "Luis",
      role: "Bachata Instructor",
      bio: "Originally from Mexico, Luis brings authentic Latin flavour and passion to the dance floor. With his natural rhythm and engaging teaching style, he creates a welcoming environment for dancers of all levels. His energy and enthusiasm are infectious, making bachata accessible and fun for everyone.",
      image: "/team/luis.png",
      color: "from-red-500 to-orange-600"
    },
    {
      name: "Maria",
      role: "Bachata Instructor",
      bio: "Originally from Lithuania, Maria discovered her love for bachata four years ago and hasn't looked back. Her energetic and enthusiastic approach brings joy to every class. As a talented and passionate dancer, Maria excels at breaking down complex moves and making bachata fun and accessible for beginners whilst challenging intermediate dancers.",
      image: "/team/maria.png",
      color: "from-blue-500 to-purple-600"
    }
  ]

  return (
    <section className="py-20 px-6 bg-gray-800">
      <div className="max-w-6xl mx-auto">
        {/* Group Photo */}
        <div className="mb-16 animate-fade-in">
          <img 
            src="/team/team.png" 
            alt="Granite City Salsa Team"
            className="w-full max-w-3xl mx-auto rounded-2xl shadow-2xl hover:scale-105 transform transition duration-500"
          />
        </div>

        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">
          Meet Your Instructors
        </h2>
        <p className="text-xl text-gray-400 text-center mb-16">
          Experienced dancers passionate about sharing their love of salsa and bachata
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {instructors.map((instructor, index) => (
            <div 
              key={index}
              className="bg-gray-900 rounded-lg overflow-hidden shadow-2xl hover:scale-105 hover:shadow-green-500/50 transform transition duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden group">
                <img 
                  src={instructor.image} 
                  alt={instructor.name}
                  className="w-full h-80 object-cover group-hover:scale-110 transition duration-500"
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
                <p className="text-gray-300 leading-relaxed">
                  {instructor.bio}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-gray-300">
            ✨ Dancing together, performing and teaching at events since 2023
          </p>
        </div>
      </div>
    </section>
  )
}
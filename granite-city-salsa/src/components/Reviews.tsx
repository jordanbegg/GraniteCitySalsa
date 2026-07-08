import { Star } from 'lucide-react'
import SectionHeading from './SectionHeading'
import Glow from './Glow'

const GOOGLE_REVIEWS_URL = 'https://www.google.com/search?q=Granite+City+Salsa&kgmid=/g/11y_pv7k0c'
// Google Business Profile review short link — opens the write-a-review box directly.
const GOOGLE_WRITE_REVIEW_URL = 'https://g.page/r/CYnfIwr7E-fvEBM/review'
const FACEBOOK_URL = 'https://www.facebook.com/profile.php?id=61581967402586'

export default function Reviews() {
  const reviews = [
    {
      quote: "Amazing place to learn Latin dance! The instructors are patient and energetic, making every class fun — a wonderful way to learn, enjoy dancing, and meet new people. Highly recommended for both beginners and experienced dancers.",
      name: "Sandra Mikniute",
      source: "Google",
    },
    {
      quote: "Excellent teaching and atmosphere! Lovely people running the classes — perfect for learning from the basics right through to advanced moves in no time, with new steps every week. I'd recommend them 100% to anyone who loves salsa, even if you're just passing through Aberdeen!",
      name: "Susanna Quer",
      source: "Google",
    },
    {
      quote: "All the dance instructors are fab. I'd been out of dancing for years, saw these classes advertised and decided to go along — so glad I did. I was made to feel at ease and welcomed by everyone, and had lots of great dances at my first social. They're so patient with new starters. I'll definitely keep coming back!",
      name: "Andrea Livingston",
      source: "Facebook",
    },
    {
      quote: "Very friendly, helpful and enjoyable classes. If you're new to dancing, the beginner classes are easy to get into and suit all abilities — you don't even need a partner, as everyone swaps round every few minutes. The instructors create a really positive atmosphere, and there's a social after class to practise. Drop in any time of year. Highly recommended!",
      name: "Joe Leiper",
      source: "Facebook",
    },
    {
      quote: "I've been fortunate enough to have a few lessons from Jordan — would highly recommend! Not just talented at salsa, but highly experienced at teaching, making it feel easy to learn.",
      name: "Kern Tan",
      source: "Facebook",
    },
  ]

  return (
    <section className="relative overflow-hidden py-20 px-6 bg-brand-black font-oswald">
      <Glow color="green" pos="top" />
      <div className="relative z-10 max-w-6xl mx-auto">
        <SectionHeading
          eyebrow="Reviews"
          title="What People Are Saying"
          subtitle="From our dancers on Google and Facebook"
          className="mb-12"
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="flex flex-col bg-gray-900 border border-gray-800 rounded-lg shadow-lg p-6 transition duration-300 hover:-translate-y-1 hover:border-brand-green/60 hover:shadow-[0_20px_45px_-10px_rgba(90,186,50,0.5)]"
            >
              <div className="flex gap-1 text-brand-green mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>

              <p className="text-brand-grey leading-relaxed flex-1">
                “{review.quote}”
              </p>

              <div className="mt-4 pt-4 border-t border-gray-800">
                <p className="font-bold text-white">{review.name}</p>
                <p className="text-sm text-gray-400">via {review.source}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <a
            href={GOOGLE_WRITE_REVIEW_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-brand-green to-brand-green-dark text-brand-black font-bold px-8 py-4 rounded-full hover:scale-105 transform transition shadow-lg hover:shadow-brand-green/50"
          >
            ⭐ Leave a Review
          </a>
          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full border-[1.5px] border-white/30 text-white font-bold px-8 py-4 transition hover:scale-105 hover:border-white/60 hover:bg-white/5"
          >
            Read our Google reviews
          </a>
          <a
            href={FACEBOOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full border-[1.5px] border-white/30 text-white font-bold px-8 py-4 transition hover:scale-105 hover:border-transparent hover:bg-gradient-to-r hover:from-brand-purple hover:to-brand-purple-dark"
          >
            See us on Facebook
          </a>
        </div>
      </div>
    </section>
  )
}

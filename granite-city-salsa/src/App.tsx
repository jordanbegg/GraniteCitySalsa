import './App.css'
import Hero from './components/Hero'
import Schedule from './components/Schedule'
import Prices from './components/Prices'
import Team from './components/Team'
import Location from './components/Location'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Schedule />
      <Prices />
      <Team />
      <Location />
      <Footer />
    </div>
  )
}

export default App
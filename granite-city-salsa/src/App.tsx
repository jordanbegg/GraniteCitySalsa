import './App.css'
import Hero from './components/Hero'
import Schedule from './components/Schedule'
import Team from './components/Team'
import Location from './components/Location'

function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Schedule />
      <Team />
      <Location />
    </div>
  )
}

export default App
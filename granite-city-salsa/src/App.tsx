import { useState } from 'react'
import './App.css'
import Hero from './components/Hero'
import Schedule from './components/Schedule'
import Prices from './components/Prices'
import Faqs from './components/Faqs'
import Team from './components/Team'
import Location from './components/Location'
import Footer from './components/Footer'
import ClaimModal from './components/ClaimModel'

function App() {
  const [claimOpen, setClaimOpen] = useState(false)
  const openClaim = () => setClaimOpen(true)

  return (
    <div className="min-h-screen">
      <Hero onClaim={openClaim} />
      <Schedule />
      <Prices />
      <Faqs />
      <Team />
      <Location />
      <Footer onClaim={openClaim} />
      <ClaimModal isOpen={claimOpen} onClose={() => setClaimOpen(false)} />
    </div>
  )
}

export default App

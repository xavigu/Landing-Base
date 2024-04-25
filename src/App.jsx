import { useState, useEffect } from 'react'
import SmoothScroll from 'smooth-scroll'
import JsonData from './data/data.json'
// Layout components
import { Navbar } from './layout/navbar/navbar.jsx'
import { Footer } from './layout/footer/footer.jsx'
// Components
import { Header } from './components/header'
import { Features } from './components/features/features.jsx'
import { About } from './components/about/about.jsx'
import { Services } from './components/services'
import { Gallery } from './components/gallery/gallery.jsx'
import { GalleryHexa } from './components/gallery-hexagon/gallery-hexagon.jsx'
import { Testimonials } from './components/testimonials/testimonials.jsx'
import { TeamGrid } from './components/team-grid/team-grid'

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
})

const App = () => {
  const [landingPageData, setLandingPageData] = useState({})
  useEffect(() => {
    setLandingPageData(JsonData)
  }, [])

  return (
    <div>
      <Navbar />
      <Header data={landingPageData.Header} />
      <Features data={landingPageData.Features} />
      <About data={landingPageData.About} />
      <Services data={landingPageData.Services} />
      {/* <Team data={landingPageData.Team} /> */}
      <TeamGrid data={landingPageData.TeamGrid}/>
      <Gallery data={landingPageData.Gallery}/>
      <GalleryHexa data={landingPageData.GalleryHexa}/>
      <Testimonials data={landingPageData.Testimonials} />
      <Footer />
    </div>
  )
}

export default App

import { useState, useEffect } from 'react'
import SmoothScroll from 'smooth-scroll'
import JsonData from './data/data.json'
// Layout components
import { Navbar } from './layout/navbar/navbar.jsx'
import { Footer } from './layout/footer/footer.jsx'
// Components
import { Header } from './components/header/header.jsx'
import { Features } from './components/features/features.jsx'
import { About } from './components/about/about.jsx'
import { Services } from './components/services/services.jsx'
import { Testimonials } from './components/testimonials/testimonials.jsx'
import { TeamGrid } from './components/team-grid/team-grid.jsx'
import { Team } from './components/team/team.jsx'
import { Gallery } from './components/gallery/gallery.jsx'
import { GalleryHexa } from './components/gallery-hexagon/gallery-hexagon.jsx'
import { Contact } from './components/contact/contact.jsx'
import { GalleryRotate3D } from './components/gallery-rotate-3d/gallery-rotate-3d.jsx'

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
})

const App = () => {
  const [landingPageData, setLandingPageData] = useState({})
  // load data from json
  useEffect(() => {
    setLandingPageData(JsonData)
  }, [])

  return (
    <div>
      <Navbar />
      <Header data={landingPageData.Header} />
      <Features data={landingPageData.Features} />
      <About data={landingPageData.About} />
      <Services services={landingPageData.Services} />
      {/* <Team data={landingPageData.Team} /> */}
      <TeamGrid data={landingPageData.TeamGrid}/>
      {/* <Gallery data={landingPageData.Gallery}/> */}
      {/* <GalleryHexa data={landingPageData.GalleryHexa}/> */}
      <GalleryRotate3D data={landingPageData.GalleryRotate3D}/>
      <Testimonials data={landingPageData.Testimonials} />
      {/* <Contact data={landingPageData.Contact} /> */}
      <Footer />
    </div>
  )
}

export default App

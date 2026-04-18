import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/sections/Hero'
import { PhotographyGrid } from '@/components/sections/PhotographyGrid'
import { VideoSection } from '@/components/sections/VideoSection'
import { ContactSection } from '@/components/sections/ContactSection'

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <PhotographyGrid />
        <VideoSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}

export default App

import SideNavigation from './components/Header'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'
import FloatingBusinessCardButton from './components/FloatingBusinessCardButton'
import SEOHead from './components/SEOHead'
import Analytics from './components/Analytics'
import AnalyticsDebug from './components/AnalyticsDebug'

function App() {
  return (
    <>
      <SEOHead />
      <Analytics />
      <main className="min-h-screen bg-white">
        <SideNavigation />
        <Hero />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
        <FloatingBusinessCardButton />
        <Footer />
      </main>
    </>
  )
}

export default App

import Background from "./components/layout/Background"
import Navbar from "./components/layout/Navbar"
import Footer from "./components/layout/Footer"
import Hero from "./components/sections/Hero"
import Experience from "./components/sections/Experience"
import Projects from "./components/sections/Projects"
import Stack from "./components/sections/Stack"
import Contact from "./components/sections/Contact"

function App() {
  return (
    <main className="relative min-h-screen overflow-hidden text-white">
      <Background />

      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Experience />
        <Projects />
        <Stack />
        <Contact />
        <Footer />
      </div>
    </main>
  )
}

export default App
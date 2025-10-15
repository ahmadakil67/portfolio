import './App.css'
import Education from './components/Education'
import Experience from './components/Experience'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Research from './components/Research'
import Home from './components/Home'
import { Footer } from './components/Footer'
import { Achievements } from './components/Achievements'
import SkillsSection from './components/SkillsSection'

function App() {
 

  return (
    <>
      <Navbar />
      <Home />
      <Experience />
      <SkillsSection/>
      <Projects />
      <Education />
      <Research />
      <Achievements />
      <Footer />
    </>
  )
}

export default App

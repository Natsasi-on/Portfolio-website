import Nav from './components/0-nav'
import Hero from './components/1-hero'
import Skills from './components/2-skills'
import Project from './components/3-project'
import Experience from './components/5-experiences'
import Education from './components/6-education'
import { ContactUs } from './components/7-contact'
import Footer from './components/8-footer'
import '../src/components/3-project.css'
import './App.css'



import { Outlet } from 'react-router-dom';
function App(props) {
  return (
    <>
      <Nav />
      <Hero />
      <Skills />
      <Project />
      <Experience />
      <Education />
      <ContactUs />
      <Footer />
      <Outlet />
    </>
  )
}

export default App

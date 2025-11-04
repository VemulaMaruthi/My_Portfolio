import React from 'react'
import Header from "./Components/Header";
import ProfilePhoto from './Components/ProfilePhoto';
import About  from './Components/About';
import Skills from './Components/Skills';
import Education from './Components/Eductaion';
import Projects from './Components/Projects';
import Blog from './Components/Blog';
import Contact from './Components/Contact';

const App = () => {
  return (
    <>
      <div className="bg-[#00131c] xl:bg-[#00131c] min-h-screen flex flex-col">
          <section id="Home">
            <Header/>
          </section>
          
          <div className="flex flex-col md:flex-row  gap-10">
            <ProfilePhoto/>
            <About/>
          </div>
          <section id="skills">
            <Skills/>
          </section>
          <Education/>
          <Projects/>
          <Blog/>
          <Contact/>
          
      </div>
    </>
  )
}

export default App

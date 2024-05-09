import { useState } from 'react'
import DoCard from "./components/DoCard/DoCard"
import ProjectCard from "./components/ProjectCard/ProjectCard"
import portrait from "./assets/linkedin-image.jpg"
import './App.scss'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
      <nav>
        <h3>Stephen Man</h3>
          <ul>
            <li>About Me</li>
            <li>Projects</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>
      <main>
        <section className='about-me'>
          <div className='about-me-container'>
            <img src={portrait} className='about-me-container_portrait'/>
            <div className='about-me-container-text'>
              <h2 className='about-me-container-text_subheader'>Hi there, I'm</h2>
              <h1 className='about-me-container-text_header'><span className='about-me-container-text_name'>Stephen</span>. Full Stack Developer</h1>
            </div>
          </div>
        </section>
        <section className='skills'>
          <DoCard title="API Development" icon={portrait} description=""/>
          <DoCard title="Responsive Design" icon={portrait} description=""/>
          <DoCard title="Customized Solutions" icon={portrait} description=""/>
        </section>
        <section className='projects'>
          <ProjectCard title="Gaijin Arcade" image={portrait} description=""/>
          <ProjectCard title="Proxy Rabbit" image={portrait} description=""/>
        </section>
        <section className='contact'>
          <h1 className='contact_header'>Let's Build Something Together!</h1>
          <p className='contact_text'>Something appealing so people will want to click on the links</p>
          <div className='contact-links'>
            <a href='mailto:stephenman88@gmail.com'></a>
            <a href='https://www.linkedin.com/in/stephenman88'></a>
            <a href='https://github.com/stephenman88'></a>
          </div>
        </section>
      </main>
      <footer>

      </footer>
    </>
  )
}

export default App

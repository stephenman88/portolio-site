import { useState } from 'react'
import DoCard from "./components/DoCard/DoCard"
import ProjectCard from "./components/ProjectCard/ProjectCard"
import portrait from "./assets/linkedin-image.jpg"
import emailIcon from "./assets/email-icon.svg"
import githubIcon from "./assets/github-icon.svg"
import linkedInIcon from "./assets/linkedin-icon.svg"
import proxyRabbitIcon from "./assets/proxy-rabbit-mascot-shadowless.png"
import underDevelopIcon from "./assets/under-development.png"
import './App.scss'

function App() {

  return (
    <>
      <header className='header page-padding'>
        <nav className='nav-bar'>
          <h3 className='nav-bar_name'>Stephen</h3>
            <ul className='nav-bar-list'>
              <li className='nav-bar-list_item'>About Me</li>
              <li className='nav-bar-list_item'>Projects</li>
              <li className='nav-bar-list_item'>Contact</li>
            </ul>
          </nav>
        </header>
      <main className='main'>
        <section className='about-me page-padding'>
          <div className='about-me-container'>
            <img src={portrait} className='about-me-container_portrait'/>
            <div className='about-me-container-text'>
              <h2 className='about-me-container-text_subheader'>Hi there, I'm</h2>
              <h1 className='about-me-container-text_header'><span className='about-me-container-text_name'>Stephen</span>. Full Stack Developer</h1>
            </div>
          </div>
        </section>
        <section className='skills page-padding'>
          <h2 className='skills_header'>My Skills</h2>
          <p className='skills_hook'>This is a paragraph that I will fill out.</p>
          <ul className='skills-list'>
            <li className='skills-list_item'>Javascript</li>
            <li className="skills-list_item">NodeJs</li>
            <li className="skills-list_item">React</li>
            <li className="skills-list_item">HTML</li>
            <li className="skills-list_item">SCSS</li>
            <li className="skills-list_item">Git</li>
            <li className="skills-list_item">SQL</li>
            <li className="skills-list_item">Java</li>
          </ul>
        </section>
        <section className='projects page-padding'>
          <h2 className='projects_header'>Check Out My Work!</h2>
          <div className='projects-cards'>
            <ProjectCard title="Gaijin Arcade" image={underDevelopIcon} description="" className="projects-cards_card"/>
            <ProjectCard title="Proxy Rabbit" image={proxyRabbitIcon} description="A social media app that aims to connect people and allow them to discover the world! Learn about region-exclusive specialties and ask the locals to help you buy them." className="projects-cards_card"/>
          </div>
        </section>
        <section className='contact page-padding'>
          <h1 className='contact_header'>Let's Build Something Together!</h1>
          <p className='contact_text'>Something appealing so people will want to click on the links</p>
          <div className='contact-links'>
            <a href='mailto:stephenman88@gmail.com' className='contact-links_a'><img src={emailIcon} alt='Email me!' className='contact-links_icon'/></a>
            <a href='https://www.linkedin.com/in/stephenman88' className='contact-links_a'><img src={linkedInIcon} alt='Come to my LinkedIn!' className='contact-links_icon'/></a>
            <a href='https://github.com/stephenman88' className='contact-links_a'><img src={githubIcon} alt='Come see my Github!' className='contact-links_icon'/></a>
          </div>
        </section>
      </main>
      <footer>

      </footer>
    </>
  )
}

export default App

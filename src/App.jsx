import { useState } from 'react'
import DoCard from "./components/DoCard/DoCard"
import ProjectCard from "./components/ProjectCard/ProjectCard"
import portrait from "./assets/linkedin-image.jpg"
import emailIcon from "./assets/email-icon.svg"
import githubIcon from "./assets/github-icon.svg"
import linkedInIcon from "./assets/linkedin-icon.svg"
import proxyRabbitIcon from "./assets/proxy-rabbit-mascot-shadowless.png"
import underDevelopIcon from "./assets/under-development.png"
import jsIcon from "./assets/javascript-155-svgrepo-com.svg"
import javaIcon from "./assets/java-svgrepo-com.svg"
import cssIcon from "./assets/css3-01-svgrepo-com.svg"
import gitIcon from "./assets/git-svgrepo-com.svg"
import htmlIcon from "./assets/html5-01-svgrepo-com.svg"
import nodeIcon from "./assets/nodejs02-svgrepo-com.svg"
import reactIcon from "./assets/react-16-svgrepo-com.svg"
import sqlIcon from "./assets/database-svgrepo-com.svg"
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
              <h1 className='about-me-container-text_subheader'>Hi there, I'm Stephen Man,</h1>
              <h2 className='about-me-container-text_header'>Full Stack Developer</h2>
            </div>
          </div>
        </section>
        <section className='skills page-padding'>
          <h2 className='skills_header'>My Skills</h2>
          <ul className='skills-list'>
            <DoCard title="Javascript" icon={jsIcon} className={'skills-list_item'}/>
            <DoCard title="NodeJs" icon={nodeIcon} className={'skills-list_item'}/>
            <DoCard title="React" icon={reactIcon} className={'skills-list_item'}/>
            <DoCard title="HTML" icon={htmlIcon} className={'skills-list_item'}/>
            <DoCard title="CSS" icon={cssIcon} className={'skills-list_item'}/>
            <DoCard title="Git" icon={gitIcon} className={'skills-list_item'}/>
            <DoCard title="SQL" icon={sqlIcon} className={'skills-list_item'}/>
            <DoCard title="Java" icon={javaIcon} className={'skills-list_item'}/>
          </ul>
        </section>
        <section className='projects page-padding'>
          <h2 className='projects_header'>Check Out My Work</h2>
          <div className='projects-cards'>
            <ProjectCard title="Gaijin Arcade" image={underDevelopIcon} description="" className="projects-cards_card"/>
            <ProjectCard title="Proxy Rabbit" image={proxyRabbitIcon} description="A social media app that aims to connect people and allow them to discover the world! Learn about region-exclusive specialties and ask the locals to help you buy them." className="projects-cards_card"/>
          </div>
        </section>
      </main>
      <footer className='contact page-padding'>
          <h1 className='contact_header'>Let's Build Something Together</h1>
          <p className='contact_text'>Something appealing so people will want to click on the links</p>
          <div className='contact-links'>
            <a href='mailto:stephenman88@gmail.com' className='contact-links_a'><img src={emailIcon} alt='Email me!' className='contact-links_icon'/></a>
            <a href='https://www.linkedin.com/in/stephenman88' className='contact-links_a'><img src={linkedInIcon} alt='Come to my LinkedIn!' className='contact-links_icon'/></a>
            <a href='https://github.com/stephenman88' className='contact-links_a'><img src={githubIcon} alt='Come see my Github!' className='contact-links_icon'/></a>
          </div>
        </footer>
    </>
  )
}

export default App

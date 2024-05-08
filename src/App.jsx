import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
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
            <img src='./assets/linkedin-image.jpg' className='about-me-container_portrait'/>
            <div className='about-me-container-text'>
              <h2 className='about-me-container-text_subheader'>Hi there, I'm</h2>
              <h1 className='about-me-container-text_header'><span className='about-me-container-text_name'>Stephen</span>. Full Stack Developer</h1>
            </div>
          </div>
        </section>
        <section className='What I do'>
          
        </section>
        <section className='Projects'>

        </section>
        <section className='Contact'>

        </section>
      </main>
      <footer>

      </footer>
    </>
  )
}

export default App

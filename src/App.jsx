import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

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
              <h1 className='about-me-container-text_header'></h1>
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

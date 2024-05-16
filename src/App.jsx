import React from 'react'
import { HashLink } from 'react-router-hash-link'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Main from "./components/Main/Main"
import './App.scss'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App

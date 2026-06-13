import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Slides from './components/Slides'
import Movies from './components/Movies'
import About from './components/About'
import Footer from './components/Footer'


function App() {

  return (
    <>
    <Header />
    <Slides />
    <Movies />
    <About />
    <Footer />
    </>
  )
}

export default App

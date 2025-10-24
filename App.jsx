import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Videos from './pages/Videos'
import Contact from './pages/Contact'
import Footer from './components/Footer'

export default function App(){
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Home />
        <About />
        <Services />
        <Videos />
        <Contact />
      </main>
      <Footer />
      <a className="wa-float" href="https://wa.me/989900925811" target="_blank" rel="noreferrer">💬</a>
    </div>
  )
}

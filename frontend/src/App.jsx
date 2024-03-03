import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import About from './components/About'
import Contact from './components/Contact'
import Services from './components/Services'
import HeroSection from './components/HeroSection'
import { Toaster } from "react-hot-toast";
import Footer from './components/Footer'
const App = () => {
  return (
    <div>
    <BrowserRouter>
      <Navbar />
      <HeroSection />
      <About />
      <Services />
     
      <Contact />
      <Footer /> 
      <Toaster />
      </BrowserRouter>
    </div>
   
  )
}

export default App
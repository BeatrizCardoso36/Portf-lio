import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import Contactsection from './components/ContactSection'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <HeroSection />
    <AboutSection />
    <Contactsection/>
  </StrictMode>,
)

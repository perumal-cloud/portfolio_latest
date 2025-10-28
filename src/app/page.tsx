'use client'

import { useState, useEffect } from 'react'
import Navigation from '../components/Navigation'
import HeroSection from '../components/HeroSection'
import AboutSection from '../components/AboutSection'
import ServicesSection from '../components/ServicesSection'
import SkillsSection from '../components/SkillsSection'
import PortfolioSection from '../components/PortfolioSection'
import TestimonialsSection from '../components/TestimonialsSection'
// import BlogSection from '../components/BlogSection'
import ContactSection from '../components/ContactSection'
import Footer from '../components/Footer'
import ScrollToTop from '../components/ScrollToTop'
import ScrollProgress from '../components/ScrollProgress'
import { useSmoothScroll } from '../hooks/useSmoothScroll'

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home')
  const { smoothScrollTo } = useSmoothScroll()

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'portfolio', 'testimonials', 'contact']
      const current = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 150 && rect.bottom >= 150
        }
        return false
      })
      if (current) setActiveSection(current)
    }

    // Throttle scroll events for better performance
    let ticking = false
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', throttledScroll, { passive: true })
    return () => window.removeEventListener('scroll', throttledScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    smoothScrollTo(sectionId, {
      offset: 80,
    })
  }

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--text-primary)] transition-colors duration-300">
      <ScrollProgress />
      <Navigation activeSection={activeSection} scrollToSection={scrollToSection} />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <SkillsSection />
      <PortfolioSection />
      <TestimonialsSection />
      {/* <BlogSection /> */}
      <ContactSection />
      <Footer />
      <ScrollToTop />
    </div>
  )
}


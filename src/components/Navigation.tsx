'use client'

import { useState } from 'react'
import ThemeToggle from './ThemeToggle'
import Image from 'next/image'

interface NavigationProps {
  activeSection: string
  scrollToSection: (sectionId: string) => void
}

export default function Navigation({ activeSection, scrollToSection }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navigationItems = ['Home', 'About Us', 'Services', 'Portfolio', 'Testimonials', 'Contact']

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <nav className="fixed top-0 w-full bg-[var(--background)]/95 backdrop-blur-sm z-50 py-4 border-b border-[var(--border-color)] transition-colors duration-300">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#ff6b35] shadow-lg">
          <Image
            src="/images/logo.jpeg"
            alt="Logo"
            className="w-full h-full object-cover"
            width={100}
            height={100}
          />
        </div>

        
        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-6">
          {navigationItems.map((item) => {
            const sectionId = item.toLowerCase().replace(' ', '').replace('aboutus', 'about')
            return (
              <li key={item}>
                <button
                  onClick={() => scrollToSection(sectionId)}
                  className={`cursor-pointer hover:text-[#ff6b35] transition-all duration-300 transform hover:scale-105 ${
                    activeSection === sectionId ? 'text-[#ff6b35]' : 'text-[var(--text-primary)]'
                  }`}
                >
                  {item}
                </button>
              </li>
            )
          })}
        </ul>

        {/* Theme Toggle and Mobile Menu */}
        <div className="flex items-center space-x-4">
          <ThemeToggle />
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMobileMenu}
              className="text-[var(--text-primary)] text-2xl focus:outline-none transition-colors duration-300"
            >
              {isMobileMenuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[var(--background)] border-t border-[var(--border-color)] transition-colors duration-300">
          <ul className="flex flex-col space-y-2 px-4 py-4">
            {navigationItems.map((item) => {
              const sectionId = item.toLowerCase().replace(' ', '').replace('aboutus', 'about')
              return (
                <li key={item}>
                  <button
                    onClick={() => {
                      scrollToSection(sectionId)
                      setIsMobileMenuOpen(false)
                    }}
                    className={`block w-full text-left py-2 px-4 rounded-md hover:text-[#ff6b35] hover:bg-[#2a2a2a] transition-colors duration-300 ${
                      activeSection === sectionId ? 'text-[#ff6b35] bg-[#2a2a2a]' : 'text-white'
                    }`}
                  >
                    {item}
                  </button>
                </li>
              )
            })}
          </ul>
        </div>
      )}
    </nav>
  )
}

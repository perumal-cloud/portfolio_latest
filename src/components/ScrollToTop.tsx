'use client'

import { useState, useEffect } from 'react'
import { FaArrowUp } from 'react-icons/fa'
import { useSmoothScroll } from '../hooks/useSmoothScroll'
import { useTheme } from '../contexts/ThemeContext'

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)
  const { smoothScrollToTop } = useSmoothScroll()
  const { theme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset
      setIsVisible(scrollTop > 300)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleScrollToTop = () => {
    smoothScrollToTop()
  }

  return (
    <button
      onClick={handleScrollToTop}
      className={`fixed bottom-8 right-8 w-12 h-12 rounded-full shadow-lg transition-all duration-300 transform z-40 ${
        isVisible 
          ? 'translate-y-0 opacity-100 scale-100' 
          : 'translate-y-16 opacity-0 scale-75 pointer-events-none'
      } ${
        theme === 'dark'
          ? 'bg-[#ff6b35] hover:bg-[#e55a2b] text-white'
          : 'bg-[#ff6b35] hover:bg-[#e55a2b] text-white'
      } hover:scale-110 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#ff6b35] focus:ring-opacity-50`}
      aria-label="Scroll to top"
    >
      <FaArrowUp className="mx-auto text-lg" />
    </button>
  )
}

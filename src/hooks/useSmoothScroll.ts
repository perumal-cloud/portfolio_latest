'use client'

import { useCallback } from 'react'

interface ScrollOptions {
  offset?: number
}

export const useSmoothScroll = () => {
  const smoothScrollTo = useCallback((
    targetId: string, 
    options: ScrollOptions = {}
  ) => {
    const { offset = 80 } = options

    const targetElement = document.getElementById(targetId)
    if (!targetElement) return

    const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - offset
    
    // Instant scroll without animation
    window.scrollTo(0, targetPosition)
  }, [])

  const smoothScrollToTop = useCallback(() => {
    // Instant scroll to top without animation
    window.scrollTo(0, 0)
  }, [])

  return { smoothScrollTo, smoothScrollToTop }
}

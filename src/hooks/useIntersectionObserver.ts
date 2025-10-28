'use client'

import { useEffect, useRef, useState } from 'react'

interface UseIntersectionObserverOptions {
  threshold?: number
  rootMargin?: string
  triggerOnce?: boolean
}

export const useIntersectionObserver = (
  options: UseIntersectionObserverOptions = {}
) => {
  const {
    threshold = 0.1,
    rootMargin = '0px 0px -100px 0px',
    triggerOnce = true
  } = options

  const [isIntersecting, setIsIntersecting] = useState(false)
  const [hasBeenVisible, setHasBeenVisible] = useState(false)
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        const isVisible = entry.isIntersecting
        setIsIntersecting(isVisible)
        
        if (isVisible && !hasBeenVisible) {
          setHasBeenVisible(true)
        }
      },
      {
        threshold,
        rootMargin,
      }
    )

    observer.observe(element)

    return () => {
      observer.unobserve(element)
    }
  }, [threshold, rootMargin, hasBeenVisible])

  const shouldAnimate = triggerOnce ? hasBeenVisible : isIntersecting

  return { elementRef, isIntersecting, shouldAnimate }
}

// Custom hook for staggered animations
export const useStaggeredAnimation = (itemCount: number, delay = 100) => {
  const [visibleItems, setVisibleItems] = useState<number[]>([])
  const { elementRef, shouldAnimate } = useIntersectionObserver()

  useEffect(() => {
    if (shouldAnimate && visibleItems.length === 0) {
      // Stagger the animation of items
      for (let i = 0; i < itemCount; i++) {
        setTimeout(() => {
          setVisibleItems(prev => [...prev, i])
        }, i * delay)
      }
    }
  }, [shouldAnimate, itemCount, delay, visibleItems.length])

  return { elementRef, visibleItems, shouldAnimate }
}

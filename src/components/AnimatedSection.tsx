'use client'

import { ReactNode } from 'react'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  animation?: 'fade-in' | 'slide-in-left' | 'slide-in-right' | 'slide-in-up'
  delay?: number
}

export default function AnimatedSection({ 
  children, 
  className = '', 
  animation = 'fade-in',
  delay = 0
}: AnimatedSectionProps) {
  const { elementRef, shouldAnimate } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  })

  const animationClass = shouldAnimate ? animation : 'opacity-0'
  const delayStyle = delay > 0 ? { animationDelay: `${delay}ms` } : {}

  return (
    <div
      ref={elementRef as React.RefObject<HTMLDivElement>}
      className={`${className} ${animationClass} transition-opacity duration-500`}
      style={delayStyle}
    >
      {children}
    </div>
  )
}

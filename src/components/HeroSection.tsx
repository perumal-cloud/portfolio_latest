'use client'

import { useState, useEffect } from 'react'
import Image from "next/image"

export default function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ 
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      })
    }
    
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section id="home" className="min-h-screen relative overflow-hidden">
      {/* 3D Background Elements */}
      <div className="absolute inset-0">
        {/* Animated Background Shapes */}
        <div className="absolute top-0 left-0 w-full h-full opacity-30">
          <div 
            className="absolute w-96 h-96 bg-gradient-to-r from-orange-400/20 to-orange-600/30 rounded-full blur-3xl"
            style={{
              transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.3}px)`,
              top: '10%',
              left: '10%'
            }}
          ></div>
          <div 
            className="absolute w-64 h-64 bg-gradient-to-r from-gray-300/20 to-gray-500/30 rounded-full blur-2xl"
            style={{
              transform: `translate(${mousePosition.x * -0.3}px, ${mousePosition.y * 0.4}px)`,
              top: '60%',
              right: '15%'
            }}
          ></div>
          <div 
            className="absolute w-48 h-48 bg-gradient-to-r from-orange-500/15 to-orange-700/25 rounded-full blur-xl"
            style={{
              transform: `translate(${mousePosition.x * 0.2}px, ${mousePosition.y * -0.2}px)`,
              bottom: '20%',
              left: '20%'
            }}
          ></div>
        </div>

        {/* 3D Grid Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        
        {/* Floating Geometric Shapes */}
        <div className="absolute top-20 right-20 w-16 h-16 bg-orange-500/20 transform rotate-45 animate-float border border-orange-400/30"></div>
        <div className="absolute bottom-32 left-16 w-12 h-12 bg-gray-400/20 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-8 h-8 bg-orange-600/30 transform rotate-12 animate-spin-slow"></div>
        <div className="absolute bottom-20 right-32 w-20 h-20 border-2 border-orange-500/40 transform rotate-45 animate-bounce"></div>
      </div>

      <div className="relative z-20 container mx-auto px-4 py-20 grid md:grid-cols-2 gap-16 items-center min-h-screen">
        {/* Left Content with 3D Effects */}
        <div className="text-center md:text-left space-y-8 transform-gpu">
          {/* Animated Badge */}
          <div className="inline-block px-6 py-2 bg-white/80 backdrop-blur-lg border border-orange-200/60 rounded-full shadow-lg">
            <span className="text-sm font-medium bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
              ✨ Welcome to my Portfolio
            </span>
          </div>

          {/* 3D Title with Gradient */}
          <h1 className="text-5xl md:text-7xl font-black leading-tight">
            <span className="block transform hover:scale-105 transition-transform duration-300">
              I am 
            </span>
            <span className="block bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 bg-clip-text text-transparent transform hover:scale-105 transition-transform duration-300 filter drop-shadow-lg">
              PERUMAL
            </span>
          </h1>

          {/* Enhanced Description */}
          <p className="text-xl leading-relaxed max-w-xl">
            A passionate <span className="text-orange-500 font-semibold">front-end developer</span> creating amazing digital experiences with modern technologies. Crafting responsive, user-friendly interfaces that bring designs to life.
          </p>

          {/* 3D CTA Button */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button
              onClick={() =>
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
              }
              className="group relative px-8 py-4 cursor-pointer bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-2xl font-semibold text-lg overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/25"
            >
              <div className="absolute inset-0 bg-black translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
              <span className="relative flex items-center justify-center gap-2">
                Hire Me
                <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </button>
            
            <button
              onClick={() =>
                document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-8 py-4 cursor-pointer bg-white border-2 border-orange-500 text-orange-500 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:bg-orange-500 hover:text-white hover:shadow-lg"
            >
              View Work
            </button>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-3 gap-4 pt-8">
            <div className="text-center p-4 bg-white/60 backdrop-blur-lg rounded-2xl border border-gray-200/60 shadow-lg transform hover:scale-105 transition-transform duration-300">
              <div className="text-2xl font-bold text-white-500">8+</div>
              <div className="text-sm text-white-600">Projects</div>
            </div>
            <div className="text-center p-4 bg-white/60 backdrop-blur-lg rounded-2xl border border-gray-200/60 shadow-lg transform hover:scale-105 transition-transform duration-300">
              <div className="text-2xl font-bold text-white-500">1+</div>
              <div className="text-sm text-white-600">Years Exp</div>
            </div>
            <div className="text-center p-4 bg-white/60 backdrop-blur-lg rounded-2xl border border-gray-200/60 shadow-lg transform hover:scale-105 transition-transform duration-300">
              <div className="text-2xl font-bold text-white-500">100%</div>
              <div className="text-sm text-white-600">Satisfaction</div>
            </div>
          </div>
        </div>
        
        {/* Right Side - 3D Profile Image */}
        <div className="flex justify-center md:justify-end">
          <div className="relative group">
            {/* 3D Container */}
            <div className="relative w-80 md:w-96 h-80 md:h-96 transform-gpu transition-all duration-700 group-hover:scale-105">
              {/* Rotating Background Ring */}
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full animate-spin-slow opacity-20"></div>
              
              {/* Glow Effect */}
              <div className="absolute inset-4 bg-gradient-to-r from-orange-500/30 to-orange-600/40 rounded-full blur-xl animate-pulse"></div>
              
              {/* Main Image Container */}
              <div className="relative w-full h-full p-4">
                <div className="relative w-full h-full bg-white rounded-full shadow-2xl overflow-hidden border-4 border-white group-hover:border-orange-500/50 transition-all duration-500">
                  <Image
                    src="/images/perumal3.jpeg"
                    alt="Perumal - Frontend Developer"
                    width={400}
                    height={400}
                    className="w-full h-full object-contain transform transition-transform duration-700 group-hover:scale-110"
                    priority
                  />
                  
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-orange-500/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center shadow-xl transform rotate-12 group-hover:rotate-45 transition-transform duration-500">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gray-700 rounded-xl flex items-center justify-center shadow-lg transform -rotate-12 group-hover:rotate-12 transition-transform duration-500">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>

              {/* Orbiting Elements */}
              <div className="absolute top-1/4 -left-8 w-6 h-6 bg-orange-400 rounded-full animate-bounce shadow-lg"></div>
              <div className="absolute bottom-1/4 -right-8 w-4 h-4 bg-gray-500 rounded-full animate-pulse shadow-md"></div>
            </div>

            {/* Floating Shadow */}
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-2/3 h-8 bg-orange-500/20 blur-xl rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        .bg-grid-pattern {
          background-image: 
            linear-gradient(rgba(255, 107, 53, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 107, 53, 0.05) 1px, transparent 1px);
          background-size: 60px 60px;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </section>
  )
}

'use client'

import { useState, useEffect } from 'react'
import Image from "next/image"

export default function AboutSection() {
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

  const personalInfo = [
    { label: 'Name', value: 'Perumal R', icon: '👤' },
    { label: 'Age', value: '27', icon: '🎂' },
    { label: 'Job', value: 'Developer', icon: '💻' },
    { label: 'Phone', value: '+91 6369890217', icon: '📞' },
    { label: 'Email', value: 'pr657122@gmail.com', icon: '📧' },
    { label: 'Address', value: 'Madurai, TamilNadu', icon: '📍' }
  ]

  const skills = [
    { name: 'React', level: 90 },
    { name: 'Next.js', level: 85 },
    { name: 'JavaScript', level: 88 },
    { name: 'TypeScript', level: 80 },
    { name: 'Tailwind CSS', level: 92 },
    { name: 'Node.js', level: 75 }
  ]

  const handleDownloadCV = () => {
    const link = document.createElement('a')
    link.href = '/cv/Perumal_Resume.pdf'
    link.download = 'Perumal_R_Resume.pdf'
    link.target = '_blank'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section id="about" className="relative py-20 overflow-hidden bg-gradient-to-br from-white via-orange-50 to-orange-200">
      {/* 3D Background Elements */}
      <div className="absolute inset-0">
        {/* Animated Background Shapes */}
        <div 
          className="absolute w-64 h-64 bg-gradient-to-r from-orange-400/15 to-orange-600/20 rounded-full blur-3xl"
          style={{
            transform: `translate(${mousePosition.x * 0.3}px, ${mousePosition.y * 0.2}px)`,
            top: '20%',
            left: '10%'
          }}
        ></div>
        <div 
          className="absolute w-48 h-48 bg-gradient-to-r from-gray-300/10 to-gray-500/15 rounded-full blur-2xl"
          style={{
            transform: `translate(${mousePosition.x * -0.2}px, ${mousePosition.y * 0.3}px)`,
            bottom: '30%',
            right: '15%'
          }}
        ></div>
        
        {/* Floating Geometric Elements */}
        <div className="absolute top-32 right-20 w-12 h-12 bg-orange-500/20 transform rotate-45 animate-float"></div>
        <div className="absolute bottom-40 left-16 w-8 h-8 bg-gray-400/30 rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 right-1/4 w-6 h-6 bg-orange-600/25 transform rotate-12 animate-spin-slow"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* 3D Image Section */}
          <div className="relative group order-2 lg:order-1">
            {/* 3D Container */}
            <div className="relative transform-gpu transition-all duration-700 group-hover:scale-105">
              {/* Glow Effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-orange-500/20 to-orange-600/30 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              
              {/* Main Image Container */}
              <div className="relative bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-200/60">
                <Image
                  src="/images/perumal3.jpeg"
                  alt="About Perumal"
                  width={500}
                  height={600}
                  className="w-full h-[600px] object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-orange-500/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Floating Badge */}
                <div className="absolute top-6 left-6 px-4 py-2 bg-white/90 backdrop-blur-lg border border-orange-200/60 rounded-full shadow-lg">
                  <span className="text-sm font-semibold text-orange-600">Frontend Developer</span>
                </div>
              </div>

              {/* 3D Floating Elements */}
              <div className="absolute -top-6 -right-6 w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center shadow-xl transform rotate-12 group-hover:rotate-45 transition-transform duration-500">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              
              <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-gray-700 rounded-xl flex items-center justify-center shadow-lg transform -rotate-12 group-hover:rotate-12 transition-transform duration-500">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
            </div>
          </div>
          
          {/* Content Section */}
          <div className="space-y-8 order-1 lg:order-2">
            {/* Header */}
            <div className="space-y-4">
              <div className="inline-block px-6 py-2 bg-white/80 backdrop-blur-lg border border-orange-200/60 rounded-full shadow-lg">
                <span className="text-sm font-medium bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                  ✨ Get to know me
                </span>
              </div>
              
              <h2 className="text-5xl md:text-6xl font-black text-gray-900">
                About <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">Me</span>
              </h2>
              
              <p className="text-xl text-black leading-relaxed">
                I&apos;m a frontend developer focused on building clean, responsive, and accessible web experiences. I work with modern tools like React, Next.js, JavaScript, and Tailwind CSS, and love turning design ideas into real products.
              </p>
            </div>
            
            {/* Personal Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {personalInfo.map((info, index) => (
                <div 
                  key={index} 
                  className="group p-4 bg-white/60 backdrop-blur-lg border border-gray-200/60 rounded-2xl shadow-lg transform hover:scale-105 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">{info.icon}</span>
                    <div>
                      <span className="text-orange-500 font-semibold text-sm">{info.label}</span>
                      <p className="text-gray-700 font-medium">{info.value}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Skills Section */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">Technical Skills</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {skills.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-black">{skill.name}</span>
                      <span className="text-orange-500 font-semibold">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-orange-500 to-orange-600 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={handleDownloadCV}
                className="group relative px-8 cursor-pointer py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-2xl font-semibold overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/25"
              >
                <div className="absolute inset-0 bg-black translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                <span className="relative flex items-center justify-center space-x-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span>Download CV</span>
                </span>
              </button>
              
              <button 
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="px-8 py-4 bg-white border-2 border-orange-500 cursor-pointer text-orange-500 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 hover:bg-orange-500 hover:text-white hover:shadow-lg"
              >
                Let&apos;s Talk
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(180deg); }
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

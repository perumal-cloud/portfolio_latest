'use client'

import { useState, useEffect } from 'react'
import Image from "next/image";
import Link from "next/link";

export default function PortfolioSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])
  
const projects = [
  { 
    id: 1, 
    title: 'Medical Store', 
    category: 'Web', 
    type: 'E-commerce Platform', 
    image:'/images/Media.jpeg', 
    link:"https://your-medicalstore-link.com",
    description: "Modern healthcare e-commerce with AI-powered inventory management",
    gradient: "from-emerald-500/20 to-teal-600/20",
    accent: "emerald"
  },
  { 
    id: 2, 
    title: 'Retailer Portal', 
    category: 'Web', 
    type: 'B2B SaaS Platform', 
    image:'/images/image.png', 
    link:"https://your-retailerportal-link.com",
    description: "Enterprise-grade B2B platform connecting retailers globally",
    gradient: "from-blue-500/20 to-indigo-600/20",
    accent: "blue"
  },
  { 
    id: 3, 
    title: 'SARG Admin', 
    category: 'Web', 
    type: 'Dashboard System', 
    image:'/images/image.jpeg', 
    link:"https://adminanuragavigarments.vercel.app/login/",
    description: "Advanced analytics dashboard with real-time data visualization",
    gradient: "from-purple-500/20 to-pink-600/20",
    accent: "purple"
  },
  { 
    id: 4, 
    title: 'SPP Papad', 
    category: 'Web', 
    type: 'E-commerce', 
    image:'/images/papad.png', 
    link:"https://ecommerce-papad-glwu.vercel.app/",
    description: "Traditional papad business digitized with modern e-commerce solutions",
    gradient: "from-orange-500/20 to-yellow-600/20",
    accent: "orange"
  },
  { 
    id: 5, 
    title: 'Portfolio Website', 
    category: 'Web', 
    type: 'Web Development', 
    image:'/images/portfolio1.png', 
    link:"https://portfolio-perumal.vercel.app/",
    description: "Minimal, responsive personal portfolio showcasing projects and skills",
    gradient: "from-pink-500/20 to-rose-600/20",
    accent: "pink"
  }
]

  return (
    <section id="portfolio" className="relative min-h-screen py-20 overflow-hidden var(--background)">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Orbs - Subtle on white */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-orange-500/10 to-orange-600/15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-gradient-to-r from-orange-400/8 to-orange-500/12 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-gradient-to-r from-orange-600/10 to-orange-700/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
        
        {/* Dynamic Mouse Follower - Very subtle on white */}
        <div 
          className="absolute w-96 h-96 bg-gradient-to-r from-orange-500/5 to-orange-600/8 rounded-full blur-3xl transition-all duration-1000 ease-out pointer-events-none"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
          }}
        ></div>
        
        {/* Grid Pattern - Light gray on white */}
        <div className="absolute inset-0 bg-grid-gray/[0.03] bg-[size:60px_60px]"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4">
        {/* Hero Header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-4 px-6 py-2 bg-gray-100/80 backdrop-blur-lg border border-gray-200/60 rounded-full">
            <span className="text-sm font-medium bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
              ✨ Featured Projects
            </span>
          </div>
          <h2 className="text-6xl md:text-7xl font-black mb-6 text-[var(--text-primary)] bg-clip-text ">
            Latest <span className="text-[var(--text-primary)]">Work</span>
          </h2>
          <p className="text-[var(--text-primary)]  text-xl max-w-3xl mx-auto leading-relaxed">
            Crafting digital experiences with precision and modern aesthetics
          </p>
        </div>

        {/* 3D Floating Cards Grid */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group relative"
              style={{ 
                animationDelay: `${index * 200}ms`,
                animation: 'fadeInUp 0.8s ease-out forwards'
              }}
            >
              {/* Card Container with 3D Transform */}
              <div className="relative transform-gpu transition-all duration-700 group-hover:scale-105 group-hover:-translate-y-8">
                {/* Neon Glow Effect */}
                <div className={`absolute -inset-1 bg-gradient-to-r ${project.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500`}></div>
                
                {/* Main Card - White background with subtle shadows */}
                <div className="relative var(--background) backdrop-blur-2xl border border-gray-200/60 rounded-3xl overflow-hidden shadow-xl shadow-gray-300/20">
                  {/* Card Header with Image */}
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Gradient Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-60`}></div>
                    
                    {/* Floating Category Badge - Dark on white */}
                    <div className="absolute top-6 left-6">
                      <div className="px-4 py-2 bg-black/80 backdrop-blur-lg border border-gray-700/50 rounded-full">
                        <span className="text-white text-sm font-semibold">{project.category}</span>
                      </div>
                    </div>
                    
                    {/* 3D Icon - Orange on white */}
                    <div className="absolute top-6 right-6 w-12 h-12 bg-orange-500/90 backdrop-blur-lg border border-orange-400/60 rounded-2xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-500">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-8 space-y-6 bg-white">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-orange-500 group-hover:to-orange-600 group-hover:bg-clip-text transition-all duration-500">
                        {project.title}
                      </h3>
                      <p className="text-orange-500 font-semibold text-sm mb-3">{project.type}</p>
                      <p className="text-gray-600 leading-relaxed text-sm">
                        {project.description}
                      </p>
                    </div>
                    
                    {/* CTA Button - Orange with black hover */}
                    <Link href={project.link} target="_blank" className="block">
                      <button className="group/btn relative cursor-pointer w-full py-4 px-6 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl font-semibold text-white overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/25 border border-orange-400/30">
                        {/* Button Background Animation - Black */}
                        <div className="absolute inset-0 bg-black translate-x-full group-hover/btn:translate-x-0 transition-transform duration-500"></div>
                        <div className="relative flex items-center justify-center space-x-2 group-hover/btn:text-white transition-colors duration-500">
                          <span>View Project</span>
                          <svg className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </div>
                      </button>
                    </Link>
                  </div>

                  {/* Reflection Effect - Orange */}
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl"></div>
                </div>

                {/* Floating Shadow - Gray on white */}
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-3/4 h-8 bg-gray-400/30 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(60px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .bg-grid-gray\\/\\[0\\.03\\] {
          background-image: radial-gradient(circle, rgba(128, 128, 128, 0.03) 1px, transparent 1px);
        }
      `}</style>
    </section>
  )
}

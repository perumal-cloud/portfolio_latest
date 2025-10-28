'use client'

import { useState, useEffect } from 'react'

export default function TestimonialsSection() {
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

  const testimonials = [
    {
      name: 'Product Manager, Tarnea',
      role: 'Product Manager',
      rating: 5,
      text: 'Delivered pixel-perfect UI that was both responsive and accessible, enhancing the user experience across devices.',
      image: 'P',
      color: 'from-blue-500 to-blue-600',
      emoji: '🎯'
    },
    {
      name: 'Frontend Lead, Tarnea',
      role: 'Frontend Development Team Lead',
      rating: 5,
      text: 'Consistently writes clean and maintainable code, which made it easier for the team to iterate and scale the product.',
      image: 'F',
      color: 'from-purple-500 to-purple-600',
      emoji: '🚀'
    },
    {
      name: 'Self',
      role: 'Frontend Developer',
      rating: 5,
      text: "Passionate about creating seamless user experiences, Optimization and writing code that stands the test of time.",
      image: 'S',
      color: 'from-green-500 to-green-600',
      emoji: '💡'
    }
  ]

  return (
    <section id="testimonials" className="relative py-20 overflow-hidden bg-gradient-to-br from-white via-orange-50 to-orange-200">
      {/* 3D Background Elements */}
      <div className="absolute inset-0">
        {/* Animated Background Shapes */}
        <div 
          className="absolute w-72 h-72 bg-gradient-to-r from-orange-400/8 to-orange-600/12 rounded-full blur-3xl"
          style={{
            transform: `translate(${mousePosition.x * 0.3}px, ${mousePosition.y * 0.2}px)`,
            top: '15%',
            left: '5%'
          }}
        ></div>
        <div 
          className="absolute w-64 h-64 bg-gradient-to-r from-blue-400/8 to-blue-600/12 rounded-full blur-3xl"
          style={{
            transform: `translate(${mousePosition.x * -0.2}px, ${mousePosition.y * 0.25}px)`,
            bottom: '25%',
            right: '10%'
          }}
        ></div>
        <div 
          className="absolute w-48 h-48 bg-gradient-to-r from-purple-400/8 to-purple-600/12 rounded-full blur-2xl"
          style={{
            transform: `translate(${mousePosition.x * 0.15}px, ${mousePosition.y * -0.1}px)`,
            top: '50%',
            right: '30%'
          }}
        ></div>
        
        {/* Floating Quote Elements */}
        <div className="absolute top-32 right-20 text-4xl opacity-10 animate-float">💬</div>
        <div className="absolute bottom-40 left-16 text-3xl opacity-10 animate-pulse">⭐</div>
        <div className="absolute top-2/3 left-1/4 text-2xl opacity-10 animate-spin-slow">🎭</div>
        <div className="absolute bottom-1/3 right-1/3 text-3xl opacity-10 animate-bounce">👥</div>
      </div>

      <div className="relative z-10 container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-block mb-4 px-6 py-2 bg-white/80 backdrop-blur-lg border border-orange-200/60 rounded-full shadow-lg">
            <span className="text-sm font-medium bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
              💬 What people say
            </span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-black mb-6 text-gray-900">
            Client <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">Testimonials</span>
          </h2>
          
          <p className="text-xl max-w-3xl mx-auto text-black leading-relaxed">
            What my clients say about working with me and the results we achieved together
          </p>
        </div>
        
        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="group relative transform-gpu transition-all duration-700 hover:scale-105 hover:-translate-y-4"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Glow Effect */}
              <div className={`absolute -inset-1 bg-gradient-to-r ${testimonial.color} rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-all duration-500`}></div>
              
              {/* Main Card */}
              <div className="relative bg-white/80 backdrop-blur-2xl border border-gray-200/60 rounded-3xl p-8 shadow-xl">
                {/* Quote Icon */}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-xl transform rotate-12 group-hover:rotate-45 transition-transform duration-500">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                  </svg>
                </div>
                
                {/* Header with Avatar */}
                <div className="flex items-center mb-6">
                  <div className="relative">
                    <div className={`w-16 h-16 bg-gradient-to-br ${testimonial.color} rounded-2xl mr-4 flex items-center justify-center text-white font-bold text-xl shadow-lg transform group-hover:rotate-6 transition-transform duration-500`}>
                      {testimonial.image}
                    </div>
                    {/* Floating Emoji */}
                    <div className="absolute -top-2 -right-2 text-2xl animate-bounce">
                      {testimonial.emoji}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-gray-800 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-orange-500 group-hover:to-orange-600 group-hover:bg-clip-text transition-all duration-500">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-500 text-sm font-medium">{testimonial.role}</p>
                  </div>
                </div>
                
                {/* Testimonial Text */}
                <div className="relative mb-6">
                  <p className="text-gray-700 leading-relaxed text-lg italic">
                    &quot;{testimonial.text}&quot;
                  </p>
                  
                  {/* Decorative Quote Marks */}
                  <div className="absolute -top-2 -left-2 text-orange-200 text-4xl font-serif">&quot;</div>
                  <div className="absolute -bottom-4 -right-2 text-orange-200 text-4xl font-serif transform rotate-180">&quot;</div>
                </div>
                
                {/* Rating Stars */}
                <div className="flex items-center justify-between">
                  <div className="flex space-x-1">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <div 
                        key={i} 
                        className="relative group/star"
                        style={{ animationDelay: `${i * 100}ms` }}
                      >
                        <span className="text-2xl text-orange-400 hover:text-orange-500 transition-colors duration-300 cursor-pointer transform hover:scale-125">
                          ⭐
                        </span>
                      </div>
                    ))}
                  </div>
                  
                  {/* Trust Badge */}
                  <div className="px-3 py-1 bg-orange-100 text-orange-600 rounded-full text-xs font-semibold">
                    Verified
                  </div>
                </div>
                
                
                {/* Reflection Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl"></div>
              </div>

              {/* Floating Shadow */}
              <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-3/4 h-6 bg-gray-400/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-4 p-6 bg-white/60 backdrop-blur-lg border border-orange-200/60 rounded-2xl shadow-lg">
            <div className="text-3xl">🤝</div>
            <div className="text-left">
              <h3 className="text-xl font-bold text-gray-800">Ready to work together?</h3>
              <p className="text-gray-600">Let&apos;s create something amazing!</p>
            </div>
            <button 
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl font-semibold transform hover:scale-105 transition-all duration-300 hover:shadow-lg"
            >
              Get Started
            </button>
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

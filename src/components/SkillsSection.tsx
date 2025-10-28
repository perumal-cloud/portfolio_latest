'use client'

import { useState, useEffect, useRef } from 'react'
import { FaLaptopCode, FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { TiHtml5 } from "react-icons/ti";
import { SiTypescript } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { FaNode } from "react-icons/fa6";
import { SiPostgresql } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiAlpinelinux } from "react-icons/si";


export default function SkillsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const sectionRef = useRef<HTMLElement>(null)

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

  const skillCategories = [
    {
      title: "Frontend Technologies",
      icon: "🎨",
      skills: [
        { skill: 'HTML/CSS', level: 90, icon: <TiHtml5 style={{color:"red"}}/> },
        { skill: 'JavaScript', level: 85, icon: <FaNodeJs style={{color:"orange"}}/> },
        { skill: 'React.js', level: 88, icon: <FaReact style={{color:"blue"}}/> },
        { skill: 'Next.js', level: 65, icon: <SiNextdotjs style={{color:"black"}}/> },
        { skill: 'TypeScript', level: 70, icon: <SiTypescript style={{color:"blue"}}/> }
      ]
    },
    {
      title: "Development Tools",
      icon: "🛠️",
      skills: [
        { skill: 'Bootstrap/Tailwind/MaterialUI', level: 85, icon: <FaBootstrap style={{color:"blue"}}/> },
        { skill: 'Node.js/Express.js', level: 50, icon:<FaNode style={{color:"green"}}/> },
        { skill: 'PostgreSQL', level: 60, icon: <SiPostgresql style={{color:"blue"}}/> },
        { skill: 'MongoDB', level: 50, icon: <SiMongodb style={{color:"green"}}/> },
        { skill: 'UI/UX Design', level: 40, icon: <SiAlpinelinux style={{color:"black"}}/> }
      ]
    }
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])


  const SkillCard = ({ skill, level, delay, icon }: { skill: string; level: number; delay: string; icon: React.ReactNode }) => (
    <div 
      className="group p-6 bg-white/60 backdrop-blur-lg border border-gray-200/60 rounded-3xl shadow-lg transform hover:scale-105 hover:shadow-xl transition-all duration-500"
      style={{ animationDelay: delay }}
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <span className="text-2xl">{icon}</span>
          <span className="font-semibold text-lg text-gray-800">{skill}</span>
        </div>
        <span className="text-orange-500 font-bold text-lg bg-orange-100 px-3 py-1 rounded-full">{level}%</span>
      </div>
      
      {/* 3D Progress Bar */}
      <div className="relative">
        <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden shadow-inner">
          <div 
            className={`bg-gradient-to-r from-orange-500 to-orange-600 h-3 rounded-full transition-all duration-1500 ease-out relative overflow-hidden ${
              isVisible ? 'shadow-lg' : ''
            }`}
            style={{ 
              width: isVisible ? `${level}%` : '0%',
              transition: 'width 1.5s ease-out'
            }}
          >
            {/* Shimmer Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
          </div>
        </div>
        
        {/* Glow Effect */}
        <div 
          className="absolute top-0 left-0 h-3 bg-orange-500/50 rounded-full blur-sm transition-all duration-1500 ease-out"
          style={{ 
            width: isVisible ? `${level}%` : '0%',
            transition: 'width 1.5s ease-out'
          }}
        ></div>
      </div>
    </div>
  )

  return (
    <section ref={sectionRef} className="relative py-20 overflow-hidden bg-gradient-to-br from-white via-orange-50 to-orange-200">
      {/* 3D Background Elements */}
      <div className="absolute inset-0">
        {/* Animated Background Shapes */}
        <div 
          className="absolute w-80 h-80 bg-gradient-to-r from-orange-400/10 to-orange-600/15 rounded-full blur-3xl"
          style={{
            transform: `translate(${mousePosition.x * 0.2}px, ${mousePosition.y * 0.1}px)`,
            top: '10%',
            right: '10%'
          }}
        ></div>
        <div 
          className="absolute w-64 h-64 bg-gradient-to-r from-gray-300/8 to-gray-500/12 rounded-full blur-2xl"
          style={{
            transform: `translate(${mousePosition.x * -0.15}px, ${mousePosition.y * 0.2}px)`,
            bottom: '20%',
            left: '15%'
          }}
        ></div>
        
        {/* Floating Tech Icons */}
        <div className="absolute top-20 left-20 text-4xl opacity-20 animate-float"><FaLaptopCode style={{ color: 'orange' }} /></div>
        <div className="absolute bottom-32 right-16 text-3xl opacity-20 animate-pulse"><FaReact style={{ color: 'orange' }} /></div>
        <div className="absolute top-1/3 right-1/4 text-2xl opacity-20 animate-spin-slow">⚛️</div>
        <div className="absolute bottom-1/4 left-1/4 text-3xl opacity-20 animate-bounce">🎯</div>
      </div>

      <div className="relative z-10 container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-block mb-4 px-6 py-2 bg-white/80 backdrop-blur-lg border border-orange-200/60 rounded-full shadow-lg">
            <span className="text-sm font-medium bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
              🚀 Technical Expertise
            </span>
          </div>
          
          <h2 className="text-5xl md:text-6xl text-black font-black mb-6">
            My <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">Skills</span>
          </h2>
          
          <p className="text-xl max-w-3xl mx-auto leading-relaxed text-black">
            Technologies and tools I work with to bring ideas to life and create amazing digital experiences
          </p>
        </div>
        
        {/* Skills Grid */}
        <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="space-y-6">
              {/* Category Header */}
              <div className="text-center lg:text-left mb-8">
                <div className="inline-flex items-center space-x-3 p-4 bg-white/80 backdrop-blur-lg border border-orange-200/60 rounded-2xl shadow-lg">
                  <span className="text-3xl">{category.icon}</span>
                  <h3 className="text-2xl font-bold text-gray-800">{category.title}</h3>
                </div>
              </div>
              
              {/* Skills in Category */}
              <div className="space-y-6">
                {category.skills.map((item, index) => (
                  <SkillCard 
                    key={index} 
                    skill={item.skill} 
                    level={item.level} 
                    icon={item.icon}
                    delay={`${(categoryIndex * 5 + index) * 150}ms`}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {[
            { label: "Technologies", value: "10+", icon: "⚡" },
            { label: "Projects", value: "5+", icon: "🚀" },
            { label: "Experience", value: "1+ Years", icon: "📈" },
            { label: "Learning", value: "Always", icon: "🎯" }
          ].map((stat, index) => (
            <div 
              key={index} 
              className="text-center p-6 bg-white/60 backdrop-blur-lg border border-gray-200/60 rounded-2xl shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-2xl font-bold text-orange-500 mb-1">{stat.value}</div>
              <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </section>
  )
}

'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'
import { FaLinkedin, FaPhoneAlt } from "react-icons/fa"
import { FaInstagram, FaLocationDot, FaWhatsapp } from "react-icons/fa6"
import { IoIosMail } from "react-icons/io"

export default function Footer() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const currentYear = new Date().getFullYear()

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

  const quickLinks = [
    { name: 'Home', href: '#home', icon: '🏠' },
    { name: 'About', href: '#about', icon: '👨‍💻' },
    { name: 'Services', href: '#services', icon: '⚙️' },
    { name: 'Portfolio', href: '#portfolio', icon: '💼' }
  ]

  const services = [
    { name: 'Web Development', icon: '🌐' },
    { name: 'UI/UX Design', icon: '🎨' },
    { name: 'Consulting', icon: '💡' }
  ]

  const socialMedia = [
     { 
       icon: <FaLinkedin />, 
       name: 'LinkedIn', 
       url: 'https://www.linkedin.com/in/perumal-r-3291a1326',
       bgColor: 'from-[#0077B5] to-[#005885]',
       color: '#0077B5'
     },
     { 
       icon: <FaWhatsapp />, 
       name: 'WhatsApp', 
       url: 'https://wa.me/916369890217?text=Hi, I would like to connect with you!',
       bgColor: 'from-[#25D366] to-[#1DA851]',
       color: '#25D366'
     },
     { 
       icon: <FaInstagram />, 
       name: 'Instagram', 
       url: 'https://www.instagram.com/avinash_t_1302',
       bgColor: 'from-[#E4405F] to-[#833AB4]',
       color: '#E4405F'
     }
   ]

  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-white via-orange-50 to-orange-200">
      {/* 3D Background Elements */}
      <div className="absolute inset-0">
        {/* Animated Background Shapes */}
        <div 
          className="absolute w-80 h-80 bg-gradient-to-r from-orange-400/8 to-orange-600/12 rounded-full blur-3xl"
          style={{
            transform: `translate(${mousePosition.x * 0.2}px, ${mousePosition.y * 0.1}px)`,
            top: '10%',
            left: '5%'
          }}
        ></div>
        <div 
          className="absolute w-64 h-64 bg-gradient-to-r from-gray-300/8 to-gray-500/12 rounded-full blur-2xl"
          style={{
            transform: `translate(${mousePosition.x * -0.15}px, ${mousePosition.y * 0.2}px)`,
            bottom: '20%',
            right: '10%'
          }}
        ></div>
        
        {/* Floating Tech Elements */}
        <div className="absolute top-20 right-20 text-3xl opacity-10 animate-float">💻</div>
        <div className="absolute bottom-32 left-16 text-2xl opacity-10 animate-pulse">🚀</div>
        <div className="absolute top-1/2 right-1/3 text-xl opacity-10 animate-spin-slow">⚙️</div>
      </div>

      <div className="relative z-10 py-16">
        <div className="container mx-auto px-4">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {/* Brand Section */}
            <div className="space-y-6">
              <div className="group">
                <div className="relative">
                  <div className="w-20 h-20 rounded-3xl overflow-hidden border-4 border-orange-500/30 shadow-xl transform group-hover:scale-110 transition-all duration-500 bg-white/80 backdrop-blur-lg">
                    <Image 
                      src="/images/logo.jpeg" 
                      alt="Logo" 
                      width={100}
                      height={100}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  {/* Glow Effect */}
                  <div className="absolute -inset-2 bg-gradient-to-r from-orange-500/20 to-orange-600/30 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
              
              <p className="text-gray-600 leading-relaxed">
                Creating amazing digital experiences with passion and dedication. 
                Let&apos;s build something great together.
              </p>
              
              {/* Social Media Icons */}
              <div className="flex space-x-4">
                {socialMedia.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative w-12 h-12 rounded-2xl flex items-center justify-center transform hover:scale-110 transition-all duration-300 overflow-hidden"
                    title={social.name}
                  >
                    {/* Background */}
                    <div className="absolute inset-0 bg-white/80 backdrop-blur-lg border border-gray-200/60 rounded-2xl"></div>
                    <div className={`absolute inset-0 bg-gradient-to-r ${social.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl`}></div>
                    
                    {/* Icon */}
                    <span className="relative z-10 text-gray-600 group-hover:text-white transition-colors duration-300 text-lg">
                      {social.icon}
                    </span>
                    
                    {/* Glow Effect */}
                    <div 
                      className="absolute -inset-1 rounded-2xl blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300"
                      style={{ backgroundColor: social.color + '40' }}
                    ></div>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h4 className="text-2xl font-bold text-gray-900 mb-6">Quick Links</h4>
              <ul className="space-y-4">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href} 
                      className="group flex items-center space-x-3 p-3 bg-white/60 backdrop-blur-lg border border-gray-200/60 rounded-2xl hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                    >
                      <span className="text-lg">{link.icon}</span>
                      <span className="text-gray-700 group-hover:text-orange-500 transition-colors duration-300">{link.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="space-y-6">
              <h4 className="text-2xl font-bold text-gray-900 mb-6">Services</h4>
              <ul className="space-y-4">
                {services.map((service, index) => (
                  <li key={index} className="group flex items-center space-x-3 p-3 bg-white/60 backdrop-blur-lg border border-gray-200/60 rounded-2xl hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                    <span className="text-lg">{service.icon}</span>
                    <span className="text-gray-700 group-hover:text-orange-500 transition-colors duration-300">
                      {service.name}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <h4 className="text-2xl font-bold text-gray-900 mb-6">Contact Info</h4>
              <div className="space-y-4">
                <div className="group flex items-center space-x-3 p-3 bg-white/60 backdrop-blur-lg border border-gray-200/60 rounded-2xl hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                  <IoIosMail className="text-orange-500 text-lg" />
                  <span className="text-gray-700 text-sm">perumalavinash210@gmail.com</span>
                </div>
                <div className="group flex items-center space-x-3 p-3 bg-white/60 backdrop-blur-lg border border-gray-200/60 rounded-2xl hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                  <FaPhoneAlt className="text-orange-500 text-lg" />
                  <span className="text-gray-700">+91 6369890217</span>
                </div>
                <div className="group flex items-center space-x-3 p-3 bg-white/60 backdrop-blur-lg border border-gray-200/60 rounded-2xl hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                  <FaLocationDot className="text-orange-500 text-lg" />
                  <span className="text-gray-700">Madurai, TamilNadu</span>
                </div>
              </div>
              
              <div className="mt-8">
                <a 
                  href="#contact" 
                  className="group relative inline-block px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-2xl font-semibold overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/25"
                >
                  <div className="absolute inset-0 bg-black translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                  <span className="relative flex items-center space-x-2">
                    <span>Get In Touch</span>
                    <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-gray-200/60 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex items-center space-x-4 p-4 bg-white/60 backdrop-blur-lg border border-gray-200/60 rounded-2xl">
                <span className="text-2xl">©️</span>
                <p className="text-gray-600 font-medium">
                  {currentYear} Perumal. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

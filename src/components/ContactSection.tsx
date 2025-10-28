'use client'

import { useEffect, useState } from 'react'
import { FaWhatsapp, FaLinkedin, FaInstagram } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { useTheme } from '../contexts/ThemeContext';

export default function ContactSection() {
  const { theme } = useTheme()
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null
    message: string
  }>({ type: null, message: '' })

  const contactInfo = [
    { icon: <IoIosMail />, label: 'Email', value: 'perumalavinash210@gmail.com', link: '#' },
    { icon: <FaPhoneAlt />, label: 'Phone', value: '+91 6369890217', link: '#' },
    { icon: <FaWhatsapp />, label: 'WhatsApp', value: '+91 6369890217', link: 'https://wa.me/916369890217?text=Hi, I would like to connect with you!' },
    { icon: <FaLocationDot />, label: 'Location', value: 'Madurai, TamilNadu', link: '#' },
  ]

  const socialLinks = [
    { 
      icon: <FaLinkedin />, 
      name: 'LinkedIn', 
      url: 'https://www.linkedin.com/in/perumal-r-3291a1326',
      bgColor: 'hover:bg-[#0077B5]'
    },
    { 
      icon: <FaWhatsapp />, 
      name: 'WhatsApp', 
      url: 'https://wa.me/916369890217?text=Hi, I would like to connect with you!',
      bgColor: 'hover:bg-[#25D366]'
    },
    { 
      icon: <FaInstagram />, 
      name: 'Instagram', 
      url: 'https://www.instagram.com/avinash_t_1302',
      bgColor: 'hover:bg-gradient-to-r hover:from-[#E4405F] hover:to-[#833AB4]'
    }
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: '' })

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (result.success) {
        setSubmitStatus({
          type: 'success',
          message: 'Message sent successfully! I\'ll get back to you soon.'
        })
        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          subject: '',
          message: ''
        })
      } else {
        setSubmitStatus({
          type: 'error',
          message: 'Failed to send message. Please try again or contact me directly.'
        })
      }
    } catch (error) {
      console.error('Error sending email:', error)
      setSubmitStatus({
        type: 'error',
        message: 'Something went wrong. Please try again later.'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  useEffect(() => {
  if (submitStatus.type) {
    const timer = setTimeout(() => {
      // clear message after 2 seconds
      setSubmitStatus({ type: null, message: "" });
    }, 2000);

    return () => clearTimeout(timer); // cleanup
  }
}, [submitStatus]);


  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 ">
            Get In <span className="text-[#ff6b35]">Touch</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto">
            Ready to start your next project? Let&apos;s work together to bring your ideas to life
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div>
            <h3 className={`text-3xl font-semibold mb-8 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Contact Information</h3>
            <div className="space-y-6">
              {contactInfo.map((contact, index) => (
                contact.label === 'WhatsApp' ? (
                  <a
                    key={index}
                    href={contact.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 group cursor-pointer"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="w-14 h-14 bg-gradient-to-br from-[#25D366] to-[#128C7E] text-white rounded-full flex items-center justify-center text-xl group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      {contact.icon}
                    </div>
                    <div>
                      <p className={`font-semibold text-lg group-hover:text-[#25D366] transition-colors duration-300 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                        {contact.label}
                      </p>
                      <p className={`group-hover:text-gray-300 transition-colors duration-300 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                        {contact.value}
                      </p>
                    </div>
                  </a>
                ) : (
                  <div
                    key={index}
                    className="flex items-center space-x-4"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="w-14 h-14 bg-gradient-to-br from-[#ff6b35] to-[#e55a2b] text-white rounded-full flex items-center justify-center text-xl shadow-lg">
                      {contact.icon}
                    </div>
                    <div>
                      <p className={`font-semibold text-lg ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                        {contact.label}
                      </p>
                      <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                        {contact.value}
                      </p>
                    </div>
                  </div>
                )
              ))}
            </div>
            
            {/* Additional contact info */}
            <div className={`mt-12 p-6 rounded-lg ${theme === 'dark' ? 'bg-[#1a1a1a]' : 'bg-gray-100'}`}>
              <h4 className={`text-xl font-semibold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Let&apos;s Connect</h4>
              <p className={`mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                I&apos;m always interested in new opportunities and exciting projects. 
                Feel free to reach out if you&apos;d like to collaborate!
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 rounded-full flex items-center justify-center ${social.bgColor} transition-all duration-300 cursor-pointer transform hover:scale-110 text-white text-lg shadow-lg ${theme === 'dark' ? 'bg-[#2a2a2a]' : 'bg-gray-300'}`}
                    title={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="First Name"
                    className={`w-full p-4 border rounded-lg focus:border-[#ff6b35] focus:outline-none transition-colors ${
                      theme === 'dark' 
                        ? 'bg-[#1a1a1a] border-gray-600 text-white placeholder-gray-400' 
                        : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                    }`}
                    required
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="Last Name"
                    className={`w-full p-4 border rounded-lg focus:border-[#ff6b35] focus:outline-none transition-colors ${
                      theme === 'dark' 
                        ? 'bg-[#1a1a1a] border-gray-600 text-white placeholder-gray-400' 
                        : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                    }`}
                    required
                  />
                </div>
              </div>
              
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email Address"
                className={`w-full p-4 border rounded-lg focus:border-[#ff6b35] focus:outline-none transition-colors ${
                  theme === 'dark' 
                    ? 'bg-[#1a1a1a] border-gray-600 text-white placeholder-gray-400' 
                    : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                }`}
                required
              />
              
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                placeholder="Subject"
                className={`w-full p-4 border rounded-lg focus:border-[#ff6b35] focus:outline-none transition-colors ${
                  theme === 'dark' 
                    ? 'bg-[#1a1a1a] border-gray-600 text-white placeholder-gray-400' 
                    : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                }`}
                required
              />
              
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Your Message"
                rows={6}
                className={`w-full p-4 border rounded-lg focus:border-[#ff6b35] focus:outline-none transition-colors resize-none ${
                  theme === 'dark' 
                    ? 'bg-[#1a1a1a] border-gray-600 text-white placeholder-gray-400' 
                    : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                }`}
                required
              ></textarea>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 rounded-lg font-semibold transition-all duration-300 transform shadow-lg ${
                  isSubmitting
                    ? 'bg-gray-600 cursor-not-allowed'
                    : 'bg-gradient-to-r from-[#ff6b35] to-[#e55a2b] hover:from-[#e55a2b] hover:to-[#d54924] hover:scale-105 text-white'
                }`}
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Sending...</span>
                  </div>
                ) : (
                  'Send Message'
                )}
              </button>

              {/* Status Message */}
              {submitStatus.type && (
                <div
                  className={`p-4 rounded-lg ${
                    submitStatus.type === 'success'
                      ? theme === 'dark' 
                        ? 'bg-green-900 border border-green-600 text-green-300'
                        : 'bg-green-100 border border-green-400 text-green-700'
                      : theme === 'dark'
                        ? 'bg-red-900 border border-red-600 text-red-300'
                        : 'bg-red-100 border border-red-400 text-red-700'
                  }`}
                >
                  {submitStatus.message}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

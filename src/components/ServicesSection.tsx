export default function ServicesSection() {
  const services = [
    { 
      icon: '💻', 
      title: 'Web Development', 
      desc: 'Creating responsive and modern websites with latest technologies',
      delay: '0ms'
    },
   
    { 
      icon: '🎨', 
      title: 'UI/UX Design', 
      desc: 'Designing beautiful and user-friendly interfaces for better experience',
      delay: '200ms'
    },
    { 
      icon: '⚡', 
      title: 'Performance & Maintenance', 
      desc: 'Optimizing applications for speed and better user engagement',
      delay: '300ms'
    }
    
  ]

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 var(--background)">
            Our <span className="text-[#ff6b35]">Services</span>
          </h2>
          <p className="var(--background) text-lg max-w-2xl mx-auto">
            What I offer to my clients with passion and expertise
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-[#2a2a2a] p-8 rounded-lg hover:bg-[#333] transition-all duration-300 group cursor-pointer transform hover:scale-105 hover:shadow-2xl"
              style={{ animationDelay: service.delay }}
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300 text-center">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white text-center group-hover:text-[#ff6b35] transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-400 leading-relaxed text-center">
                {service.desc}
              </p>
              
              {/* Hover effect line */}
              <div className="w-0 h-0.5 bg-[#ff6b35] mx-auto mt-4 group-hover:w-full transition-all duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function BlogSection() {
  const blogPosts = [
    { 
      title: 'Best Practices for React Development', 
      date: 'Jan 15, 2025', 
      category: 'Development',
      excerpt: 'Learn the essential best practices for building scalable React applications...',
      readTime: '5 min read'
    },
    { 
      title: 'Modern CSS Techniques and Tips', 
      date: 'Jan 10, 2025', 
      category: 'Design',
      excerpt: 'Explore the latest CSS features and techniques for modern web design...',
      readTime: '7 min read'
    },
    { 
      title: 'Building Scalable Node.js Applications', 
      date: 'Jan 5, 2025', 
      category: 'Backend',
      excerpt: 'A comprehensive guide to building and scaling Node.js applications...',
      readTime: '10 min read'
    }
  ]

  const getCategoryColor = (category: string) => {
    const colors = {
      'Development': 'bg-blue-500',
      'Design': 'bg-purple-500',
      'Backend': 'bg-green-500'
    }
    return colors[category as keyof typeof colors] || 'bg-[#ff6b35]'
  }

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 text-white">
            My <span className="text-[#ff6b35]">Blog</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Latest articles, insights, and tutorials about web development and design
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article 
              key={index} 
              className="bg-[#2a2a2a] rounded-lg overflow-hidden hover:transform hover:translateY-[-8px] transition-all duration-300 group cursor-pointer"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Blog post image placeholder */}
              <div className="h-48 bg-gradient-to-br from-[#ff6b35]/30 to-[#ff6b35]/10 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300"></div>
                <div className="absolute top-4 left-4">
                  <span className={`${getCategoryColor(post.category)} text-white px-3 py-1 rounded-full text-sm font-semibold`}>
                    {post.category}
                  </span>
                </div>
                <div className="absolute bottom-4 right-4 text-white/80 text-sm">
                  {post.readTime}
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[#ff6b35] text-sm font-semibold">
                    {post.date}
                  </span>
                  <div className="w-8 h-0.5 bg-[#ff6b35]"></div>
                </div>
                
                <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-[#ff6b35] transition-colors duration-300 line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <button className="text-[#ff6b35] font-semibold hover:text-[#e55a2b] transition-colors duration-300 flex items-center group-hover:translate-x-2 transition-transform">
                  Read More 
                  <span className="ml-2 group-hover:ml-3 transition-all duration-300">→</span>
                </button>
              </div>

              {/* Hover effect overlay */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#ff6b35]/50 rounded-lg transition-all duration-300 pointer-events-none"></div>
            </article>
          ))}
        </div>
        
        {/* View All Posts Button */}
        <div className="text-center mt-12">
          <button className="bg-transparent border-2 border-[#ff6b35] text-[#ff6b35] px-8 py-3 rounded-md hover:bg-[#ff6b35] hover:text-white transition-all duration-300 font-semibold transform hover:scale-105">
            View All Posts
          </button>
        </div>
      </div>
    </section>
  )
}

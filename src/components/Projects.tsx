import { ExternalLink, ArrowRight } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'EduLearn Platform',
      category: 'AI-Powered Educational Platform',
      description: 'An AI-powered study companion for engineering students offering personalized learning, career guidance, and placement preparation.',
      image: 'https://images.pexels.com/photos/4145190/pexels-photo-4145190.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React Native', 'Node.js', 'AI/ML'],
      gradient: 'from-blue-400 to-cyan-500',
      links: [
        { label: 'Play Store', url: '#' },
        { label: 'Website', url: '#' },
      ],
    },
    {
      title: 'CodeMaster Academy',
      category: 'Educational Platform',
      description: 'An interactive learning platform designed for aspiring developers to master coding skills through hands-on projects and real-world challenges.',
      image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Next.js', 'TypeScript', 'PostgreSQL'],
      gradient: 'from-violet-600 to-blue-600',
      links: [
        { label: 'Website', url: '#' },
      ],
    },
    {
      title: 'Celebrations Hub',
      category: 'Wedding Planning Portal',
      description: 'A premium wedding planning platform connecting couples with top vendors, venues, and services. Features vendor management and booking systems.',
      image: 'https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['PHP', 'Laravel', 'MySQL'],
      gradient: 'from-pink-600 to-rose-500',
      links: [
        { label: 'Website', url: '#' },
      ],
    },
    {
      title: 'HealthTrack Pro',
      category: 'Healthcare Management',
      description: 'Comprehensive healthcare management system for clinics and hospitals with appointment scheduling, patient records, and telemedicine capabilities.',
      image: 'https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React', 'Express', 'MongoDB'],
      gradient: 'from-green-600 to-teal-500',
      links: [
        { label: 'Website', url: '#' },
      ],
    },
    {
      title: 'ShopSmart E-commerce',
      category: 'E-commerce Platform',
      description: 'Modern e-commerce platform with advanced features including AI-powered recommendations, real-time inventory, and seamless checkout experience.',
      image: 'https://images.pexels.com/photos/3944405/pexels-photo-3944405.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Vue.js', 'Django', 'Redis'],
      gradient: 'from-orange-600 to-amber-500',
      links: [
        { label: 'Website', url: '#' },
      ],
    },
    {
      title: 'TravelVista',
      category: 'Travel & Tourism',
      description: 'Complete travel booking platform featuring flight bookings, hotel reservations, tour packages, and personalized travel recommendations.',
      image: 'https://images.pexels.com/photos/1268855/pexels-photo-1268855.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Angular', 'Spring Boot', 'AWS'],
      gradient: 'from-cyan-600 to-blue-500',
      links: [
        { label: 'Website', url: '#' },
      ],
    },
  ];

  return (
    <section id="projects" className="py-24 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 right-20 w-96 h-96 bg-pink-400/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-cyan-400/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-2 bg-gradient-to-r from-pink-500/20 to-cyan-500/20 text-pink-300 rounded-full text-sm font-bold mb-4 border border-pink-500/30 glass-morphism">
            OUR PORTFOLIO
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 animate-slide-up">
            Our Featured{' '}
            <span className="text-gradient">
              Projects
            </span>
          </h2>
          <p className="text-lg text-white/80 max-w-3xl mx-auto animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Real solutions for real businesses - explore our successful projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group card-hover bg-gray-800/40 rounded-2xl overflow-hidden backdrop-blur border border-white/10 hover:border-white/20 transition-all duration-500 glass-morphism animate-slide-up transform"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-700"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-30 group-hover:opacity-20 transition-opacity duration-300`}></div>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-black/50 backdrop-blur-md rounded-full text-xs font-bold text-white/90 border border-white/20">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-pink-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all">
                  {project.title}
                </h3>
                <p className="text-white/70 mb-4 line-clamp-3 text-sm">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 bg-white/10 text-white/80 rounded-full text-xs font-medium border border-white/10 group-hover:border-white/20 transition-all"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3">
                  {project.links.map((link, idx) => (
                    <a
                      key={idx}
                      href={link.url}
                      className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 text-sm font-semibold transform hover:scale-105 ${
                        idx === 0
                          ? `bg-gradient-to-r ${project.gradient} text-white hover:shadow-lg hover:shadow-pink-500/30`
                          : 'bg-white/10 text-white/90 border border-white/20 hover:bg-white/20'
                      }`}
                    >
                      <span>{link.label}</span>
                      <ExternalLink size={14} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="px-8 py-4 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 text-white rounded-xl hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 font-bold inline-flex items-center space-x-2 group transform hover:scale-105">
            <span>View All Projects</span>
            <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}

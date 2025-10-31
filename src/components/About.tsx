import { CheckCircle, Award, Briefcase, Zap, Palette, Code, Users } from 'lucide-react';

export default function About() {
  const stats = [
    { icon: CheckCircle, value: '100%', label: 'Client Satisfaction', color: 'from-green-400 to-emerald-500' },
    { icon: Award, value: '15+', label: 'Projects Delivered', color: 'from-pink-500 to-rose-500' },
    { icon: Briefcase, value: '24/7', label: 'Support Available', color: 'from-orange-400 to-red-500' },
    { icon: Zap, value: 'Fast', label: 'Turnaround Time', color: 'from-yellow-400 to-amber-500' },
  ];

  const features = [
    {
      icon: Palette,
      title: 'User-Centric Design',
      description: 'Intuitive UI/UX that guarantees user satisfaction and engagement',
      color: 'bg-pink-100 text-pink-600',
    },
    {
      icon: Code,
      title: 'Cutting-Edge Technology',
      description: 'Latest frameworks and tools for scalable, robust solutions',
      color: 'bg-blue-100 text-blue-600',
    },
    {
      icon: Users,
      title: 'Client-Focused Approach',
      description: 'Your success is our priority, every step of the way',
      color: 'bg-cyan-100 text-cyan-600',
    },
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-pink-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-gradient-to-r from-pink-500/20 to-cyan-500/20 text-pink-300 rounded-full text-sm font-bold mb-4 border border-pink-500/30 glass-morphism">
            ABOUT DEVCRAFT
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 animate-slide-up">
            Your Trusted Partner for{' '}
            <span className="text-gradient">
              Complete Digital Transformation
            </span>
          </h2>
          <p className="text-lg text-white/80 max-w-3xl mx-auto leading-relaxed animate-slide-up" style={{ animationDelay: '0.2s' }}>
            DevCraft is your partner for complete digital transformation. Founded in 2025, we are a full-service
            IT solutions provider specializing in turning innovative ideas into powerful, market-ready products.
            Our expertise spans the entire development lifecycle, from intuitive UI/UX design to robust software development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="group card-hover bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-8 backdrop-blur border border-white/10 hover:border-white/20 transition-all duration-500 animate-slide-up glass-morphism"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg group-hover:shadow-xl`}>
                  <Icon className="text-white" size={32} />
                </div>
                <h3 className="text-4xl font-black text-white mb-2">
                  {stat.value}
                </h3>
                <p className="text-white/60 font-semibold">{stat.label}</p>
              </div>
            );
          })}
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group card-hover bg-gradient-to-br from-gray-800/40 to-gray-900/40 rounded-2xl p-8 border border-white/10 hover:border-white/20 backdrop-blur transition-all duration-500 glass-morphism animate-slide-up"
                style={{ animationDelay: `${0.15 * (index + 1)}s` }}
              >
                <div className={`w-14 h-14 ${feature.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-white/70">{feature.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <button className="px-8 py-4 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 text-white rounded-xl hover:shadow-2xl transition-all duration-300 font-bold inline-flex items-center space-x-2 transform hover:scale-105">
            <span>Discover Our Services</span>
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}

function ArrowRight({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12"></line>
      <polyline points="12 5 19 12 12 19"></polyline>
    </svg>
  );
}

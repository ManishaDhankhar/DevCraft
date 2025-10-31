import { Smartphone, Globe, Palette, Database, Cloud, Shield, CheckCircle } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Smartphone,
      title: 'Android App Development',
      description: 'Custom Android applications built with the latest technologies to bring your ideas to life.',
      features: ['Native & Hybrid Apps', 'Play Store Deployment', 'Maintenance & Support'],
      color: 'from-green-400 to-emerald-500',
      iconBg: 'bg-gradient-to-br from-green-400 to-emerald-500',
    },
    {
      icon: Globe,
      title: 'Web Development',
      description: 'Responsive and scalable web applications tailored to your business needs.',
      features: ['Responsive Design', 'E-commerce Solutions', 'Progressive Web Apps'],
      color: 'from-blue-400 to-cyan-500',
      iconBg: 'bg-gradient-to-br from-blue-400 to-cyan-500',
    },
    {
      icon: Palette,
      title: 'UI/UX Development',
      description: 'Beautiful, intuitive user interfaces that enhance user experience and engagement.',
      features: ['User Research', 'Wireframing', 'Brand Identity'],
      color: 'from-pink-500 to-rose-500',
      iconBg: 'bg-gradient-to-br from-pink-500 to-rose-500',
    },
    {
      icon: Database,
      title: 'CRM Software',
      description: 'Comprehensive CRM solutions to manage customer relationships and boost productivity.',
      features: ['Custom Development', 'Integration Services', 'Training & Support'],
      color: 'from-orange-400 to-amber-500',
      iconBg: 'bg-gradient-to-br from-orange-400 to-amber-500',
    },
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and migration services for modern businesses.',
      features: ['AWS, Azure, GCP', 'Migration Services', 'Performance Tuning'],
      color: 'from-cyan-400 to-blue-500',
      iconBg: 'bg-gradient-to-br from-cyan-400 to-blue-500',
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Protect your business with robust security solutions and best practices.',
      features: ['Security Audits', 'Penetration Testing', 'Compliance'],
      color: 'from-red-400 to-orange-500',
      iconBg: 'bg-gradient-to-br from-red-400 to-orange-500',
    },
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-0 w-96 h-96 bg-pink-400/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-400/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-2 bg-gradient-to-r from-pink-500/20 to-cyan-500/20 text-pink-300 rounded-full text-sm font-bold mb-4 border border-pink-500/30 glass-morphism">
            OUR SERVICES
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 animate-slide-up">
            Comprehensive{' '}
            <span className="text-gradient">
              Digital Solutions
            </span>
          </h2>
          <p className="text-lg text-white/80 max-w-3xl mx-auto animate-slide-up" style={{ animationDelay: '0.2s' }}>
            From concept to deployment, we offer end-to-end services to transform your digital vision into reality
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group card-hover bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-8 backdrop-blur border border-white/10 hover:border-white/20 transition-all duration-500 glass-morphism animate-slide-up transform"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <div className={`w-16 h-16 ${service.iconBg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:shadow-xl transition-all duration-300 text-white shadow-lg`}>
                  <Icon size={32} />
                </div>

                <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-white/70 mb-6">{service.description}</p>

                <div className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <CheckCircle size={18} className="text-green-400 flex-shrink-0" />
                      <span className="text-sm text-white/80">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className={`mt-6 h-1 w-full bg-gradient-to-r ${service.color} rounded-full opacity-40 group-hover:opacity-100 transition-opacity duration-300`}></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

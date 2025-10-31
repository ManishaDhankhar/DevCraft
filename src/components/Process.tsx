import { Search, Palette, Code, Rocket } from 'lucide-react';

export default function Process() {
  const steps = [
    {
      number: '01',
      icon: Search,
      title: 'Discovery & Planning',
      description: 'We deep dive into your requirements, understand your business goals, analyze competitors, and create a comprehensive project roadmap with clear milestones.',
      color: 'from-blue-600 to-cyan-500',
    },
    {
      number: '02',
      icon: Palette,
      title: 'Design & Prototype',
      description: 'Our design team creates intuitive wireframes, stunning UI mockups, and interactive prototypes that bring your vision to life before development begins.',
      color: 'from-cyan-500 to-teal-500',
    },
    {
      number: '03',
      icon: Code,
      title: 'Development & Testing',
      description: 'Expert developers write clean, scalable code while our QA team performs rigorous testing to ensure flawless functionality across all devices and platforms.',
      color: 'from-teal-500 to-green-500',
    },
    {
      number: '04',
      icon: Rocket,
      title: 'Deployment & Support',
      description: 'We handle the complete deployment process and provide ongoing maintenance, updates, and 24/7 technical support to keep your solution running smoothly.',
      color: 'from-green-500 to-emerald-500',
    },
  ];

  return (
    <section id="process" className="py-20 bg-gradient-to-br from-blue-600 via-cyan-500 to-teal-500 relative overflow-hidden">
      <div className="absolute inset-0 bg-black/10"></div>

      <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-semibold mb-4">
            OUR WORKFLOW
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Development Process
          </h2>
          <div className="w-24 h-1 bg-white mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-white/90 max-w-3xl mx-auto">
            A proven methodology that ensures quality, efficiency, and client satisfaction
          </p>
        </div>

        <div className="space-y-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isEven = index % 2 === 0;

            return (
              <div
                key={index}
                className={`flex items-center gap-8 ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
              >
                <div className="hidden lg:flex items-center justify-center w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full border-4 border-white/40 flex-shrink-0">
                  <div className={`w-20 h-20 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center`}>
                    <Icon className="text-white" size={32} />
                  </div>
                </div>

                <div className="flex-1 bg-white rounded-2xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="flex items-start gap-6">
                    <div className="lg:hidden flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-xl flex-shrink-0">
                      <Icon className="text-white" size={28} />
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-4">
                        <span className={`text-5xl font-bold bg-gradient-to-r ${step.color} bg-clip-text text-transparent`}>
                          {step.number}
                        </span>
                        <h3 className="text-2xl font-bold text-gray-900">{step.title}</h3>
                      </div>
                      <p className="text-gray-600 leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </div>

                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2">
                    <div className="w-1 h-16 bg-white/30 mx-auto"></div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-12 flex justify-center">
          <div className="inline-flex items-center space-x-8 bg-white/20 backdrop-blur-sm rounded-full px-8 py-4">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-white font-medium">Agile Methodology</span>
            </div>
            <div className="w-px h-6 bg-white/30"></div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
              <span className="text-white font-medium">Continuous Integration</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

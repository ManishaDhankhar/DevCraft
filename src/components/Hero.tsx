import { ArrowRight, CheckCircle, Shield, Clock, Monitor, Smartphone, Zap, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-animated"></div>
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-20 left-10 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-green-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-2 glass-morphism px-4 py-3 rounded-full shadow-lg border border-white/30 animate-slide-left">
              <Sparkles size={16} className="text-yellow-300 animate-pulse" />
              <span className="text-sm font-medium text-white">
                Premium IT Solutions Since 2025
              </span>
            </div>

            <div className="space-y-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <h1 className="text-6xl lg:text-7xl font-black leading-tight">
                <span className="text-white">Transform Your</span>
                <br />
                <span className="text-gradient text-white">Vision Into Reality</span>
              </h1>
            </div>

            <p className="text-lg text-white/90 leading-relaxed max-w-xl animate-slide-up" style={{ animationDelay: '0.4s' }}>
              Your trusted partner for comprehensive IT solutions. From mobile apps to enterprise software,
              we bring innovation and excellence to every project with our expert team of developers.
            </p>

            <div className="flex flex-wrap gap-4 pt-4 animate-slide-up" style={{ animationDelay: '0.6s' }}>
          
              <button className="px-8 py-4 bg-white/10 text-white rounded-xl border-2 border-white/30 glass-morphism hover:bg-white/20 transition-all duration-300 font-bold hover:scale-105">
                Get Free Consultation
              </button>
            </div>

            <div className="flex flex-wrap gap-8 pt-8 animate-slide-up" style={{ animationDelay: '0.8s' }}>
              <div className="flex items-center space-x-3 group">
                <div className="w-12 h-12 bg-green-400/20 rounded-lg flex items-center justify-center group-hover:animate-pulse transition-all">
                  <CheckCircle size={24} className="text-green-300" />
                </div>
                <div>
                  <p className="text-white/80 text-xs">100%</p>
                  <p className="text-white font-semibold">Client Satisfaction</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 group">
                <div className="w-12 h-12 bg-blue-400/20 rounded-lg flex items-center justify-center group-hover:animate-pulse transition-all">
                  <Shield size={24} className="text-blue-300" />
                </div>
                <div>
                  <p className="text-white/80 text-xs">Enterprise</p>
                  <p className="text-white font-semibold">Secure & Scalable</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 group">
                <div className="w-12 h-12 bg-cyan-400/20 rounded-lg flex items-center justify-center group-hover:animate-pulse transition-all">
                  <Clock size={24} className="text-cyan-300" />
                </div>
                <div>
                  <p className="text-white/80 text-xs">Always</p>
                  <p className="text-white font-semibold">24/7 Support</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative perspective">
            <div className="absolute inset-0 bg-gradient-to-tr from-pink-300 via-purple-300 to-cyan-300 rounded-3xl blur-3xl opacity-30 animate-pulse"></div>

            <div className="relative grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-blue-400 to-cyan-400 p-8 rounded-2xl shadow-2xl glass-morphism group hover:shadow-3xl transition-all duration-500 animate-float card-hover transform">
                  <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Monitor className="text-white" size={32} />
                  </div>
                  <h3 className="font-bold text-lg text-white mb-2">Web Development</h3>
                  <p className="text-white/90 font-semibold text-3xl">+10</p>
                  <p className="text-white/70 text-sm">Projects Delivered</p>
                </div>

                <div className="bg-gradient-to-br from-orange-400 to-red-400 p-8 rounded-2xl shadow-2xl glass-morphism group hover:shadow-3xl transition-all duration-500 animate-float-delay-2 card-hover">
                  <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Zap className="text-white" size={32} />
                  </div>
                  <h3 className="font-bold text-lg text-white mb-2">Fast Delivery</h3>
                  <p className="text-white/90 font-semibold text-3xl">100%</p>
                  <p className="text-white/70 text-sm">On Time Always</p>
                </div>
              </div>

              <div className="space-y-6 pt-12">
                <div className="bg-gradient-to-br from-cyan-400 to-teal-400 p-8 rounded-2xl shadow-2xl glass-morphism group hover:shadow-3xl transition-all duration-500 animate-float-delay-1 card-hover">
                  <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Smartphone className="text-white" size={32} />
                  </div>
                  <h3 className="font-bold text-lg text-white mb-2">Mobile Apps</h3>
                  <p className="text-white/90 font-semibold text-3xl">+4</p>
                  <p className="text-white/70 text-sm">Apps Launched</p>
                </div>

                <div className="bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-500 p-8 rounded-2xl shadow-2xl glass-morphism group hover:shadow-3xl transition-all duration-500 animate-float card-hover">
                  <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <CheckCircle className="text-white" size={32} />
                  </div>
                  <h3 className="font-bold text-lg text-white mb-2">Quality Assured</h3>
                  <p className="text-white/90 font-semibold text-3xl">100%</p>
                  <p className="text-white/70 text-sm">Client Happiness</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
}

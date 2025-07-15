import React from 'react';
import { ArrowRight, Download, Eye } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 lg:order-1">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium">
                👋 Available for opportunities
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                Hi, I'm{' '}
                <span className="text-blue-600 dark:text-blue-400">
                  Sandaruwan Wadiyage
                </span>
              </h1>
              <h2 className="text-2xl lg:text-3xl text-gray-600 dark:text-gray-300 font-medium">
                Full-Stack Developer & UI/UX Enthusiast
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl leading-relaxed">
                Crafting clean code and beautiful experiences with design thinking and industrial precision. 
                Transforming ideas into scalable digital solutions.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">15+</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">12+</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">2+</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Years Exp.</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">5+</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Certifications</div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollToSection('portfolio')}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center justify-center space-x-2 group"
              >
                <Eye size={20} />
                <span>View My Work</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-blue-600 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center justify-center space-x-2">
                <Download size={20} />
                <span>Download CV</span>
              </button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="lg:order-2 flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden bg-gradient-to-br from-blue-400 to-purple-500 p-1">
                <div className="w-full h-full rounded-full overflow-hidden bg-white dark:bg-gray-800">
                  <img
                    src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Sandaruwan Wadiyage"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-white dark:bg-gray-800 p-3 rounded-full shadow-lg">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg">
                <div className="text-blue-600 dark:text-blue-400 font-bold">UI/UX</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
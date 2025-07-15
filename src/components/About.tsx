import React from 'react';
import { ExternalLink, MapPin, Award, Calendar } from 'lucide-react';
import { stats } from '../data/portfolioData';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Passionate about creating meaningful digital experiences
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="prose prose-lg text-gray-600 dark:text-gray-300">
              <p className="leading-relaxed">
                I'm a passionate Software Engineer with a creative eye for UI/UX design and a strong foundation in full-stack development. After graduating with a BSc (Hons.) in Software Engineering from the University of Plymouth, I expanded my skill set through certifications in graphic design, enterprise design thinking, and user-centered design methodologies.
              </p>
              <p className="leading-relaxed">
                Currently, I'm enrolled in the iCD – iCET Certified Developer program, an immersive industrial training course focused on delivering real-world software solutions with modern development practices. I'm driven by a desire to craft meaningful digital experiences that merge technical precision with aesthetic intuition.
              </p>
            </div>

            {/* Highlights */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Award className="text-blue-600 dark:text-blue-400" size={20} />
                <span className="text-gray-700 dark:text-gray-300">Certified UI/UX Designer</span>
              </div>
              <div className="flex items-center space-x-3">
                <Calendar className="text-blue-600 dark:text-blue-400" size={20} />
                <span className="text-gray-700 dark:text-gray-300">6-Month Industrial Training (iCET Certified Developer)</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="text-blue-600 dark:text-blue-400" size={20} />
                <span className="text-gray-700 dark:text-gray-300">Based in Panadura, Sri Lanka</span>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-4">
              <a
                href="https://linkedin.com/in/sandaruwan-wadiyage"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                <span>Connect on LinkedIn</span>
                <ExternalLink size={16} />
              </a>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="text-3xl lg:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 dark:text-gray-300 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
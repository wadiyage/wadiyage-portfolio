import React from 'react';
import { Heart, Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const quickLinks = [
    { label: 'Home', href: 'hero' },
    { label: 'About', href: 'about' },
    { label: 'Work', href: 'portfolio' },
    { label: 'Contact', href: 'contact' }
  ];

  const socialLinks = [
    { name: 'GitHub', icon: Github, href: 'https://github.com/sandaruwan-wadiyage' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/in/sandaruwan-wadiyage' },
    { name: 'Email', icon: Mail, href: 'mailto:sandaruwan@example.com' }
  ];

  return (
    <footer className="bg-gray-900 text-white relative">
      {/* Back to top button */}
      <button
        onClick={scrollToTop}
        className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-colors"
      >
        <ArrowUp size={20} />
      </button>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Sandaruwan Wadiyage</h3>
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              Full-Stack Developer & UI/UX Enthusiast crafting clean code and beautiful experiences 
              with design thinking and industrial precision.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => {
                const IconComponent = link.icon;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
                  >
                    <IconComponent size={20} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Web Development</li>
              <li>UI/UX Design</li>
              <li>Mobile Apps</li>
              <li>Consulting</li>
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-300 text-sm">
              © 2025 Sandaruwan Wadiyage. All Rights Reserved.
            </div>
            <div className="flex items-center space-x-2 text-gray-300 text-sm">
              <span>Made with</span>
              <Heart className="text-red-500" size={16} />
              <span>and lots of coffee</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
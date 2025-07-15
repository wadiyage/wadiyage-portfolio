import React from 'react';
import { Calendar, MapPin, ExternalLink, Briefcase, GraduationCap } from 'lucide-react';
import { experiences } from '../data/portfolioData';

const Experience = () => {
  const getIcon = (type: string) => {
    switch (type) {
      case 'training':
        return GraduationCap;
      case 'freelance':
        return Briefcase;
      default:
        return Briefcase;
    }
  };

  const getIconColor = (type: string) => {
    switch (type) {
      case 'training':
        return 'text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-900/30';
      case 'freelance':
        return 'text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30';
      default:
        return 'text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-800';
    }
  };

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Experience
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Professional journey demonstrating industry readiness and growth
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gray-300 dark:bg-gray-600"></div>

          <div className="space-y-12">
            {experiences.map((experience, index) => {
              const IconComponent = getIcon(experience.type);
              return (
                <div
                  key={experience.id}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline icon */}
                  <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 z-10">
                    <div className={`p-3 rounded-full ${getIconColor(experience.type)}`}>
                      <IconComponent size={24} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                    <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ml-20 md:ml-0">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                            {experience.title}
                          </h3>
                          <div className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 mb-1">
                            <MapPin size={16} />
                            <span className="font-medium">{experience.company}</span>
                          </div>
                          <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
                            <Calendar size={16} />
                            <span>{experience.duration}</span>
                          </div>
                        </div>
                      </div>

                      <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                        {experience.description}
                      </p>

                      {/* Skills */}
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                          Skills Used:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {experience.skills.map((skill, skillIndex) => (
                            <span
                              key={skillIndex}
                              className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded text-sm"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Highlights */}
                      <div>
                        <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                          Key Highlights:
                        </h4>
                        <ul className="space-y-1">
                          {experience.highlights.map((highlight, highlightIndex) => (
                            <li
                              key={highlightIndex}
                              className="flex items-start space-x-2 text-gray-600 dark:text-gray-300 text-sm"
                            >
                              <div className="w-1.5 h-1.5 bg-blue-600 dark:bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Empty space for alternating layout */}
                  <div className="hidden md:block w-5/12"></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
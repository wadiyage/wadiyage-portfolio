import React from 'react';
import { Code, Palette, Users, Award } from 'lucide-react';
import { skills } from '../data/portfolioData';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Technical Skills',
      icon: Code,
      skills: skills.technical,
      color: 'blue'
    },
    {
      title: 'Design Tools',
      icon: Palette,
      skills: skills.design,
      color: 'purple'
    },
    {
      title: 'Soft Skills',
      icon: Users,
      skills: skills.soft,
      color: 'green'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-900/20',
      purple: 'border-purple-200 dark:border-purple-800 bg-purple-50 dark:bg-purple-900/20',
      green: 'border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-900/20'
    };
    return colors[color as keyof typeof colors];
  };

  const getTagColors = (color: string) => {
    const colors = {
      blue: 'bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-200',
      purple: 'bg-purple-100 dark:bg-purple-900/40 text-purple-800 dark:text-purple-200',
      green: 'bg-green-100 dark:bg-green-900/40 text-green-800 dark:text-green-200'
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Tools
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Technical and creative competencies I bring to every project
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div
                key={index}
                className={`p-6 rounded-xl border-2 ${getColorClasses(category.color)} hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}
              >
                <div className="flex items-center space-x-3 mb-6">
                  <div className="p-3 bg-white dark:bg-gray-700 rounded-lg">
                    <IconComponent className="text-gray-700 dark:text-gray-300" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className={`px-3 py-1 rounded-full text-sm font-medium ${getTagColors(category.color)}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Certifications */}
        <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg">
          <div className="flex items-center space-x-3 mb-6">
            <Award className="text-yellow-500" size={32} />
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              Certifications & Badges
            </h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              'IBM Enterprise Design Thinking',
              'Google UX Design Certificate',
              'BSc (Hons.) Software Engineering',
              'iCET Certified Developer (In Progress)',
              'Adobe Certified Expert',
              'Figma Design Certification'
            ].map((cert, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg"
              >
                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                <span className="text-gray-700 dark:text-gray-300">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
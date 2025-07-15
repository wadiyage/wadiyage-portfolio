import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { testimonials } from '../data/portfolioData';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            What Clients Say
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Testimonials from satisfied clients and mentors
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main testimonial */}
          <div className="bg-gray-50 dark:bg-gray-800 p-8 lg:p-12 rounded-2xl text-center relative overflow-hidden">
            {/* Quote icon */}
            <div className="absolute top-4 left-4 text-blue-200 dark:text-blue-800 opacity-50">
              <Quote size={48} />
            </div>
            
            {/* Stars */}
            <div className="flex justify-center space-x-1 mb-6">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star key={i} className="text-yellow-500 fill-current" size={20} />
              ))}
            </div>

            {/* Content */}
            <blockquote className="text-xl lg:text-2xl text-gray-700 dark:text-gray-200 font-medium mb-8 leading-relaxed">
              "{testimonials[currentIndex].content}"
            </blockquote>

            {/* Author */}
            <div className="flex items-center justify-center space-x-4">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">
                  {testimonials[currentIndex].name.charAt(0)}
                </span>
              </div>
              <div className="text-left">
                <div className="font-bold text-gray-900 dark:text-white">
                  {testimonials[currentIndex].name}
                </div>
                <div className="text-gray-600 dark:text-gray-300">
                  {testimonials[currentIndex].role} • {testimonials[currentIndex].company}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center space-x-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="p-3 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full transition-colors"
            >
              <ChevronLeft size={20} />
            </button>
            
            {/* Dots */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex
                      ? 'bg-blue-600'
                      : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="p-3 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full transition-colors"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          {/* All testimonials preview */}
          <div className="grid md:grid-cols-3 gap-6 mt-16">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`p-6 rounded-lg cursor-pointer transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-blue-50 dark:bg-blue-900/20 border-2 border-blue-200 dark:border-blue-800'
                    : 'bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
                onClick={() => setCurrentIndex(index)}
              >
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white text-sm">
                      {testimonial.name}
                    </div>
                    <div className="text-gray-600 dark:text-gray-300 text-xs">
                      {testimonial.company}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-3">
                  "{testimonial.content}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
import React from 'react';
import { Star, Quote } from 'lucide-react';

export default function TestimonialCard({ testimonial, visible, index }) {
  return (
    <div
      data-index={index}
      className={`group relative bg-gray-50 rounded-2xl p-8 transition-all duration-700 transform hover:scale-105 hover:shadow-2xl hover:bg-white hover:border hover:border-blue-200 ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      }`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500"></div>

      <div className="relative z-10">
        <Quote className="w-8 h-8 text-blue-600 mb-4 group-hover:scale-110 transition-transform duration-300" />
        <div className="flex items-center mb-4">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star
              key={i}
              className="w-5 h-5 text-yellow-400 fill-current group-hover:scale-110 transition-transform duration-300"
              style={{ transitionDelay: `${i * 50}ms` }}
            />
          ))}
        </div>
        <p className="text-gray-700 mb-6 leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
          "{testimonial.content}"
        </p>
        <div className="flex items-center">
          <div className="relative">
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-12 h-12 rounded-full mr-4 object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600/20 to-indigo-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          <div>
            <div className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
              {testimonial.name}
            </div>
            <div className="text-sm text-gray-600">
              {testimonial.role} at {testimonial.company}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
// CarouselTestimonials.tsx
import React, { useState, useEffect } from 'react';
import CountUpNumber from '../utility/CountUpNumber';
import TestimonialCard from './TestimonialCard';
import StatCard from './StatCard';
import BackgroundGlow from '../utility/background';

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'CTO',
    company: 'TechFlow Inc.',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
    content: 'SaaSify transformed our entire workflow. We saw a 300% increase in productivity within the first month. The AI-powered analytics gave us insights we never had before.',
    rating: 5
  },
  {
    name: 'Marcus Rodriguez',
    role: 'Founder & CEO',
    company: 'StartupLab',
    image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
    content: 'The platform is incredibly intuitive. Our team was up and running in minutes, not days. The customer support is outstanding - they truly care about our success.',
    rating: 5
  },
  {
    name: 'Emily Watson',
    role: 'Operations Director',
    company: 'Global Dynamics',
    image: 'https://images.pexels.com/photos/3184436/pexels-photo-3184436.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
    content: 'We reduced our operational costs by 40% while scaling our team by 200%. SaaSify handled our growth seamlessly. It\'s like having a whole IT department in one platform.',
    rating: 5
  },
  {
    name: 'David Park',
    role: 'VP of Engineering',
    company: 'InnovateCorp',
    image: 'https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
    content: 'The security features are top-notch. We needed SOC 2 compliance for our enterprise clients, and SaaSify delivered. The migration was smooth and stress-free.',
    rating: 5
  },
  {
    name: 'Lisa Thompson',
    role: 'Product Manager',
    company: 'CreativeStudio',
    image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
    content: 'The mobile experience is fantastic. Our remote team can collaborate just as effectively as if they were in the same room. Game-changer for our distributed workforce.',
    rating: 5
  },
  {
    name: 'James Wilson',
    role: 'Head of Operations',
    company: 'ScaleUp Ventures',
    image: 'https://images.pexels.com/photos/3184398/pexels-photo-3184398.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
    content: 'ROI was clear within 6 weeks. The automation features freed up our team to focus on strategic work instead of repetitive tasks. Couldn\'t imagine working without it now.',
    rating: 5
  }
];

const stats = [
  { value: '10K+', label: 'Happy Customers', color: 'text-blue-600' },
  { value: '99.9%', label: 'Uptime', color: 'text-green-600' },
  { value: '4.9/5', label: 'Customer Rating', color: 'text-yellow-600' },
  { value: '24/7', label: 'Support', color: 'text-purple-600' }
];



export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(1); // Center index
  const total = testimonials.length;

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  };

  useEffect(() => {
    const interval = setInterval(() => next(), 5000);
    return () => clearInterval(interval);
  }, []);

  const getVisibleTestimonials = () => {
    const prevIdx = (currentIndex - 1 + total) % total;
    const nextIdx = (currentIndex + 1) % total;
    return [
      testimonials[prevIdx],
      testimonials[currentIndex],
      testimonials[nextIdx]
    ];
  };

  return (
    <section id="testimonials" className="relative min-h-screen scroll-mt-24 py-24">
      <BackgroundGlow />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
          What Our Customers Say
        </h2>
        <p className="text-lg text-gray-400 mb-12">
          Real feedback from real users. Here’s what they have to say.
        </p>

        <div className="relative flex items-center justify-center">
          {/* Left Arrow */}
          <button
            onClick={prev}
            className="absolute left-0 z-10 text-white text-3xl px-3 py-1 bg-gray-800/30 hover:bg-gray-800/50 rounded-full"
          >
            ‹
          </button>

          {/* Carousel */}
          <div className="flex justify-center gap-6 items-center transition-all duration-500">
            {getVisibleTestimonials().map((testimonial, idx) => {
              const isCenter = idx === 1;
              return (
                <div
                  key={idx}
                  className={`transition-all duration-500 ${
                    isCenter ? 'scale-105 z-10' : 'scale-95 opacity-70'
                  }`}
                >
                  <TestimonialCard testimonial={testimonial} />
                </div>
              );
            })}
          </div>

          {/* Right Arrow */}
          <button
            onClick={next}
            className="absolute right-0 z-10 text-white text-3xl px-3 py-1 bg-gray-800/30 hover:bg-gray-800/50 rounded-full"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
}

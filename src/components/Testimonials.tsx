// import React, { useEffect, useRef, useState } from 'react';
// import { Star, Quote } from 'lucide-react';
// import CountUpNumber from './utility/CountUpNumber';

// const testimonials = [
//   {
//     name: 'Sarah Chen',
//     role: 'CTO',
//     company: 'TechFlow Inc.',
//     image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
//     content: 'SaaSify transformed our entire workflow. We saw a 300% increase in productivity within the first month. The AI-powered analytics gave us insights we never had before.',
//     rating: 5
//   },
//   {
//     name: 'Marcus Rodriguez',
//     role: 'Founder & CEO',
//     company: 'StartupLab',
//     image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
//     content: 'The platform is incredibly intuitive. Our team was up and running in minutes, not days. The customer support is outstanding - they truly care about our success.',
//     rating: 5
//   },
//   {
//     name: 'Emily Watson',
//     role: 'Operations Director',
//     company: 'Global Dynamics',
//     image: 'https://images.pexels.com/photos/3184436/pexels-photo-3184436.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
//     content: 'We reduced our operational costs by 40% while scaling our team by 200%. SaaSify handled our growth seamlessly. It\'s like having a whole IT department in one platform.',
//     rating: 5
//   },
//   {
//     name: 'David Park',
//     role: 'VP of Engineering',
//     company: 'InnovateCorp',
//     image: 'https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
//     content: 'The security features are top-notch. We needed SOC 2 compliance for our enterprise clients, and SaaSify delivered. The migration was smooth and stress-free.',
//     rating: 5
//   },
//   {
//     name: 'Lisa Thompson',
//     role: 'Product Manager',
//     company: 'CreativeStudio',
//     image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
//     content: 'The mobile experience is fantastic. Our remote team can collaborate just as effectively as if they were in the same room. Game-changer for our distributed workforce.',
//     rating: 5
//   },
//   {
//     name: 'James Wilson',
//     role: 'Head of Operations',
//     company: 'ScaleUp Ventures',
//     image: 'https://images.pexels.com/photos/3184398/pexels-photo-3184398.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
//     content: 'ROI was clear within 6 weeks. The automation features freed up our team to focus on strategic work instead of repetitive tasks. Couldn\'t imagine working without it now.',
//     rating: 5
//   }
// ];

// const stats = [
//   { value: '10K+', label: 'Happy Customers', color: 'text-blue-600' },
//   { value: '99.9%', label: 'Uptime', color: 'text-green-600' },
//   { value: '4.9/5', label: 'Customer Rating', color: 'text-yellow-600' },
//   { value: '24/7', label: 'Support', color: 'text-purple-600' }
// ];

// export default function Testimonials() {
//   const [visibleCards, setVisibleCards] = useState<number[]>([]);
//   const [visibleStats, setVisibleStats] = useState<number[]>([]);
//   const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
//   const statsRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.target === statsRef.current && entry.isIntersecting) {
//             stats.forEach((_, index) => {
//               setTimeout(() => {
//                 setVisibleStats(prev => [...prev.filter(i => i !== index), index]);
//               }, index * 200);
//             });
//           } else {
//             const index = parseInt(entry.target.getAttribute('data-index') || '0');
//             if (entry.isIntersecting) {
//               setTimeout(() => {
//                 setVisibleCards(prev => [...prev.filter(i => i !== index), index]);
//               }, index * 100);
//             }
//           }
//         });
//       },
//       { threshold: 0.2 }
//     );

//     if (statsRef.current) observer.observe(statsRef.current);
//     cardRefs.current.forEach((ref) => {
//       if (ref) observer.observe(ref);
//     });

//     return () => observer.disconnect();
//   }, []);

//   return (
//     <section id="testimonials" className="relative py-24">
//       {/* Background Elements */}
//       {/* <div className="absolute inset-0">
//         <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,rgba(59,130,246,0.05),transparent_50%)]"></div>
//         <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_70%,rgba(99,102,241,0.05),transparent_50%)]"></div>
//       </div> */}

//       <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Section Header */}
//         <div className="text-center max-w-3xl mx-auto mb-20">
//           <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
//             Loved by{' '}
//             <span className="relative inline-block">
//               {/* <span className="bg-gradient-to-r from-teal-200 to-cyan-400 bg-clip-text text-transparent">
//                 10,000+ teams
//               </span> */}
//               <CountUpNumber end={10000} suffix="+ teams" /> 
//               <div className="absolute -inset-2 bg-gradient-to-r from-blue-600/20 to-indigo-700/20 rounded-lg blur-xl opacity-30 animate-pulse"></div>
//             </span>
//           </h2>
//           <p className="text-xl text-gray-600 leading-relaxed">
//             See what our customers are saying about their experience with SaaSify.
//           </p>
//         </div>

//         {/* Animated Stats */}
//         <div ref={statsRef} className="grid md:grid-cols-4 gap-8 mb-20">
//           {stats.map((stat, index) => (
//             <div 
//               key={index}
//               className={`text-center transform transition-all duration-700 ${
//                 visibleStats.includes(index) 
//                   ? 'translate-y-0 opacity-100 scale-100' 
//                   : 'translate-y-8 opacity-0 scale-95'
//               }`}
//             >
//               <div className={`text-3xl md:text-4xl font-bold ${stat.color} mb-2 transition-all duration-300 hover:scale-110`}>
//                 {stat.value}
//               </div>
//               <div className="text-gray-600">{stat.label}</div>
//             </div>
//           ))}
//         </div>

//         {/* Testimonials Grid */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {testimonials.map((testimonial, index) => (
//             <div
//               key={index}
//               ref={el => cardRefs.current[index] = el}
//               data-index={index}
//               className={`group relative bg-gray-50 rounded-2xl p-8 transition-all duration-700 transform hover:scale-105 hover:shadow-2xl hover:bg-white hover:border hover:border-blue-200 ${
//                 visibleCards.includes(index) 
//                   ? 'translate-y-0 opacity-100' 
//                   : 'translate-y-8 opacity-0'
//               }`}
//             >
//               {/* Hover Gradient Background */}
//               <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500"></div>
              
//               <div className="relative z-10">
//                 {/* Quote Icon */}
//                 <Quote className="w-8 h-8 text-blue-600 mb-4 group-hover:scale-110 transition-transform duration-300" />
                
//                 {/* Rating */}
//                 <div className="flex items-center mb-4">
//                   {[...Array(testimonial.rating)].map((_, i) => (
//                     <Star 
//                       key={i} 
//                       className="w-5 h-5 text-yellow-400 fill-current group-hover:scale-110 transition-transform duration-300" 
//                       style={{ transitionDelay: `${i * 50}ms` }}
//                     />
//                   ))}
//                 </div>

//                 {/* Content */}
//                 <p className="text-gray-700 mb-6 leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
//                   "{testimonial.content}"
//                 </p>

//                 {/* Author */}
//                 <div className="flex items-center">
//                   <div className="relative">
//                     <img
//                       src={testimonial.image}
//                       alt={testimonial.name}
//                       className="w-12 h-12 rounded-full mr-4 object-cover group-hover:scale-110 transition-transform duration-300"
//                     />
//                     <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600/20 to-indigo-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//                   </div>
//                   <div>
//                     <div className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
//                       {testimonial.name}
//                     </div>
//                     <div className="text-sm text-gray-600">
//                       {testimonial.role} at {testimonial.company}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

import React, { useEffect, useRef, useState } from 'react';
import CountUpNumber from './utility/CountUpNumber';
import StatCard from './cards/StatCard';
import TestimonialCard from './cards/TestimonialCard';
import BackgroundGlow from './utility/background';

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
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const [visibleStats, setVisibleStats] = useState<number[]>([]);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const statsRef = useRef<HTMLDivElement>(null);

  const setCardRef = (el: HTMLDivElement | null, index: number) => {
    if (el) cardRefs.current[index] = el;
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === statsRef.current && entry.isIntersecting) {
            stats.forEach((_, index) => {
              setTimeout(() => {
                setVisibleStats((prev) => [...new Set([...prev, index])]);
              }, index * 200);
            });
          } else {
            const index = parseInt(entry.target.getAttribute('data-index') || '-1');
            if (entry.isIntersecting && index >= 0) {
              setTimeout(() => {
                setVisibleCards((prev) => [...new Set([...prev, index])]);
              }, index * 100);
            }
          }
        });
      },
      { threshold: 0.2 }
    );

    if (statsRef.current) observer.observe(statsRef.current);
    cardRefs.current.forEach((ref) => ref && observer.observe(ref));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="testimonials" className=" scroll-mt-24 min-h-screen ease-in scroll-smooth relative py-24">
      <BackgroundGlow/>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Loved by{' '}
            <span className="relative inline-block">
              <CountUpNumber end={10000} suffix="+ teams" />
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-600/20 to-indigo-700/20 rounded-lg blur-xl opacity-30 animate-pulse"></div>
            </span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            See what our customers are saying about their experience with SaaSify.
          </p>
        </div>

        {/* Stats */}
        <div ref={statsRef} className="grid md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              value={stat.value}
              label={stat.label}
              color={stat.color}
              visible={visibleStats.includes(index)}
            />
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              data-index={index}
              ref={(el) => setCardRef(el, index)}
            >
              <TestimonialCard
                testimonial={testimonial}
                visible={visibleCards.includes(index)}
                index={index}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

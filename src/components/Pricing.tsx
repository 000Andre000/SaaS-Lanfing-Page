// import React, { useEffect, useRef, useState } from 'react';
// import { Check, Star, ArrowRight, Zap } from 'lucide-react';

// const plans = [
//   {
//     name: 'Starter',
//     price: '$29',
//     period: '/month',
//     description: 'Perfect for small teams getting started',
//     features: [
//       'Up to 5 team members',
//       '10GB storage',
//       'Basic analytics',
//       'Email support',
//       'Mobile app access',
//       'Basic integrations'
//     ],
//     cta: 'Start Free Trial',
//     popular: false,
//     gradient: 'from-teal-100 to-green-200'
//   },
//   {
//     name: 'Professional',
//     price: '$79',
//     period: '/month',
//     description: 'Ideal for growing businesses',
//     features: [
//       'Up to 25 team members',
//       '100GB storage',
//       'Advanced analytics',
//       'Priority support',
//       'Mobile app access',
//       'All integrations',
//       'Custom workflows',
//       'API access'
//     ],
//     cta: 'Start Free Trial',
//     popular: true,
//     gradient: 'from-blue-500 to-indigo-600'
//   },
//   {
//     name: 'Enterprise',
//     price: 'Custom',
//     period: '',
//     description: 'For large organizations with specific needs',
//     features: [
//       'Unlimited team members',
//       'Unlimited storage',
//       'Custom analytics',
//       '24/7 dedicated support',
//       'White-label solution',
//       'Custom integrations',
//       'Advanced security',
//       'On-premise deployment'
//     ],
//     cta: 'Contact Sales',
//     popular: false,
//     gradient: 'from-purple-500 to-pink-600'
//   }
// ];

// export default function Pricing() {
//   const [visibleCards, setVisibleCards] = useState<number[]>([]);
//   const [hoveredCard, setHoveredCard] = useState<number | null>(null);
//   const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           const index = parseInt(entry.target.getAttribute('data-index') || '0');
//           if (entry.isIntersecting) {
//             setTimeout(() => {
//               setVisibleCards(prev => [...prev.filter(i => i !== index), index]);
//             }, index * 150);
//           }
//         });
//       },
//       { threshold: 0.2 }
//     );

//     cardRefs.current.forEach((ref) => {
//       if (ref) observer.observe(ref);
//     });

//     return () => observer.disconnect();
//   }, []);

//   return (
//     <section id="pricing" className="relative py-2">
//       {/* Background Elements
//       <div className="absolute inset-0">
//         <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.5),transparent_50%)]"></div>
//         <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(99,102,241,0.5),transparent_50%)]"></div>
//       </div> */}

//       <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Section Header */}
//         <div className="text-center max-w-3xl mx-auto mb-20">
//           <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
//             Simple, transparent{' '}
//             <span className="relative inline-block">
//               <span className="bg-gradient-to-r from-teal-200 to-cyan-400 bg-clip-text text-transparent">
//                 pricing
//               </span>
//               <div className="absolute -inset-2 bg-gradient-to-r from-blue-600/20 to-indigo-700/20 rounded-lg blur-xl opacity-30 animate-pulse"></div>
//             </span>
//           </h2>
//           <p className="text-xl text-gray-600 leading-relaxed">
//             Choose the perfect plan for your business. Upgrade or downgrade at any time.
//           </p>
//         </div>

//         {/* Pricing Cards */}
//         <div className="grid md:grid-cols-3 gap-8 mb-16">
//           {plans.map((plan, index) => (
//             <div
//               key={index}
//               ref={el => cardRefs.current[index] = el}
//               data-index={index}
//               onMouseEnter={() => setHoveredCard(index)}
//               onMouseLeave={() => setHoveredCard(null)}
//               className={`relative bg-white rounded-3xl p-8 transition-all duration-500 transform ${
//                 visibleCards.includes(index) 
//                   ? 'translate-y-0 opacity-100' 
//                   : 'translate-y-8 opacity-0'
//               } ${
//                 plan.popular
//                   ? 'border-2 border-blue-600 shadow-2xl scale-105 z-10'
//                   : 'border border-gray-200 hover:border-blue-200 hover:shadow-xl hover:scale-105'
//               }`}
//             >
//               {/* Popular Badge */}
//               {plan.popular && (
//                 <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
//                   <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center shadow-lg">
//                     <Star className="w-4 h-4 mr-1 fill-current" />
//                     Most Popular
//                   </div>
//                 </div>
//               )}

//               {/* Background Gradient on Hover */}
//               <div className={`absolute inset-0 bg-gradient-to-br ${plan.gradient} opacity-0 ${hoveredCard === index ? 'opacity-50' : ''} rounded-3xl transition-opacity duration-500`}></div>

//               <div className="relative z-10">
//                 {/* Plan Header */}
//                 <div className="text-center mb-8">
//                   <div className="flex items-center justify-center mb-4">
//                     <div className={`w-12 h-12 bg-gradient-to-br ${plan.gradient} rounded-xl flex items-center justify-center ${hoveredCard === index ? 'scale-110' : ''} transition-transform duration-300`}>
//                       <Zap className="w-6 h-6 text-white" />
//                     </div>
//                   </div>
                  
//                   <h3 className="text-xl font-bold text-gray-900 mb-2">
//                     {plan.name}
//                   </h3>
//                   <p className="text-gray-600 mb-4">
//                     {plan.description}
//                   </p>
//                   <div className="flex items-baseline justify-center mb-4">
//                     <span className={`text-4xl font-bold transition-colors duration-300 ${
//                       plan.popular ? 'text-blue-600' : 'text-gray-900'
//                     }`}>
//                       {plan.price}
//                     </span>
//                     <span className="text-gray-600 ml-1">
//                       {plan.period}
//                     </span>
//                   </div>
//                 </div>

//                 {/* Features List */}
//                 <ul className="space-y-4 mb-8">
//                   {plan.features.map((feature, idx) => (
//                     <li key={idx} className="flex items-start">
//                       <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
//                       <span className="text-gray-700">{feature}</span>
//                     </li>
//                   ))}
//                 </ul>

//                 {/* CTA Button */}
//                 <button
//                   className={`group w-full py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center justify-center relative overflow-hidden ${
//                     plan.popular
//                       ? 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white'
//                       : 'bg-slate-100 hover:bg-white text-gray-900'
//                   }`}
//                 >
//                   <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//                   <span className="relative z-10">{plan.cta}</span>
//                   <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1 relative z-10" />
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* FAQ Section */}
//         <div className="text-center bg-white rounded-2xl p-12 shadow-lg">
//           <h3 className="text-2xl font-bold text-gray-900 mb-4">
//             Questions about pricing?
//           </h3>
//           <p className="text-gray-600 mb-6">
//             Our team is here to help you find the right plan for your needs.
//           </p>
//           <button className="group text-blue-600 hover:text-blue-700 font-semibold text-lg transition-all duration-300 hover:scale-105 inline-flex items-center">
//             Contact our sales team
//             <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }



// Pricing.tsx
import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { PricingCard } from './cards/PricingCard';
import FeatureCTA from './CTA/FeatureCTA';
import BackgroundGlow from './utility/background';

const plans = [
  {
    name: 'Starter',
    price: '$29',
    period: '/month',
    description: 'Perfect for small teams getting started',
    features: [
      'Up to 5 team members',
      '10GB storage',
      'Basic analytics',
      'Email support',
      'Mobile app access',
      'Basic integrations'
    ],
    cta: 'Start Free Trial',
    popular: false,
    gradient: 'from-teal-500 to-green-600'
  },
  {
    name: 'Professional',
    price: '$79',
    period: '/month',
    description: 'Ideal for growing businesses',
    features: [
      'Up to 25 team members',
      '100GB storage',
      'Advanced analytics',
      'Priority support',
      'Mobile app access',
      'All integrations',
      'Custom workflows',
      'API access'
    ],
    cta: 'Start Free Trial',
    popular: true,
    gradient: 'from-blue-500 to-indigo-600'
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'For large organizations with specific needs',
    features: [
      'Unlimited team members',
      'Unlimited storage',
      'Custom analytics',
      '24/7 dedicated support',
      'White-label solution',
      'Custom integrations',
      'Advanced security',
      'On-premise deployment'
    ],
    cta: 'Contact Sales',
    popular: false,
    gradient: 'from-purple-500 to-pink-600'
  }
];

export default function Pricing() {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = parseInt(entry.target.getAttribute('data-index') || '0');
          if (entry.isIntersecting) {
            setTimeout(() => {
              setVisibleCards(prev => [...prev.filter(i => i !== index), index]);
            }, index * 150);
          }
        });
      },
      { threshold: 0.2 }
    );

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="pricing" className="scroll-mt-24 min-h-screen relative py-2">
       <BackgroundGlow/>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Simple, transparent{' '}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-teal-200 to-cyan-400 bg-clip-text text-transparent">pricing</span>
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-600/20 to-indigo-700/20 rounded-lg blur-xl opacity-30 animate-pulse"></div>
            </span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Choose the perfect plan for your business. Upgrade or downgrade at any time.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <PricingCard
              key={index}
              plan={plan}
              index={index}
              visible={visibleCards.includes(index)}
              hovered={hoveredCard === index}
              onHoverStart={() => setHoveredCard(index)}
              onHoverEnd={() => setHoveredCard(null)}
              cardRef={(el) => (cardRefs.current[index] = el)}
            />
          ))}
        </div>
        
     
      

        {/* FAQ Section */}
             <FeatureCTA
  title="Questions about pricing?"
  description="Our team is here to help you find the right plan for your needs."
  buttonText="Contact our sales team"
  gradient="from-cyan-400 via-blue-400 to-violet-400"
/>
        {/* <div className="text-center bg-white rounded-2xl p-12 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Questions about pricing?</h3>
          <p className="text-gray-600 mb-6">Our team is here to help you find the right plan for your needs.</p>
          <button className="group text-blue-600 hover:text-blue-700 font-semibold text-lg transition-all duration-300 hover:scale-105 inline-flex items-center">
            Contact our sales team
            <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>
        </div> */}
      </div>
      
    </section>
  );
}

// import React, { useEffect, useRef, useState } from 'react';
// import {
//   Zap,
//   Shield,
//   BarChart3,
//   Users,
//   Globe,
//   Smartphone,
//   ArrowRight,
//   CheckCircle,
//   Activity,
//   Code,
//   Layers,
//   Server,
//   Cloud,
//   Database
// } from 'lucide-react';


// import AwesomeButton from './buttons/AwesomeButton';

// const features = [
//   {
//     icon: Zap,
//     title: 'Lightning Fast Performance',
//     description: 'Experience blazing-fast speeds with our optimized infrastructure and edge computing technology.',
//     highlights: ['99.9% uptime guarantee', 'Sub-100ms response times', 'Global CDN network'],
//     gradient: 'from-yellow-400 to-orange-500'
//   },
//   {
//     icon: Shield,
//     title: 'Enterprise Security',
//     description: 'Bank-level security with end-to-end encryption, SOC 2 compliance, and regular security audits.',
//     highlights: ['256-bit encryption', 'SOC 2 Type II certified', 'GDPR compliant'],
//     gradient: 'from-green-400 to-emerald-500'
//   },
//   {
//     icon: BarChart3,
//     title: 'Advanced Analytics',
//     description: 'Get deep insights with AI-powered analytics, real-time dashboards, and predictive modeling.',
//     highlights: ['Real-time reporting', 'Predictive analytics', 'Custom dashboards'],
//     gradient: 'from-blue-400 to-indigo-500'
//   },
//   {
//     icon: Users,
//     title: 'Team Collaboration',
//     description: 'Seamless teamwork with role-based permissions, real-time collaboration, and workflow automation.',
//     highlights: ['Role-based access', 'Real-time sync', 'Workflow automation'],
//     gradient: 'from-purple-400 to-pink-500'
//   },
//   {
//     icon: Globe,
//     title: 'Global Scale',
//     description: 'Deploy globally with multi-region support, automatic scaling, and localization features.',
//     highlights: ['Multi-region deployment', 'Auto-scaling', '20+ languages'],
//     gradient: 'from-cyan-400 to-blue-500'
//   },
//   {
//     icon: Smartphone,
//     title: 'Mobile Ready',
//     description: 'Native mobile apps and responsive design ensure perfect experience across all devices.',
//     highlights: ['Native iOS & Android', 'Offline support', 'Push notifications'],
//     gradient: 'from-rose-400 to-red-500'
//   }
// ];

// export default function Features() {
//   const [visibleCards, setVisibleCards] = useState<number[]>([]);
//   const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           const index = parseInt(entry.target.getAttribute('data-index') || '0');
//           if (entry.isIntersecting) {
//             setVisibleCards(prev => [...prev.filter(i => i !== index), index]);
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
//     <section id="features" className="relative py-24 overflow-hidden">
//      {/* <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(31,41,55),transparent_50%)]"></div>
//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(55,65,81),transparent_50%)]"></div> */}

//       {/* <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute top-20 left-10 w-20 h-20 bg-gray-700/60 rounded-full blur-xl animate-pulse"></div>
//         <div className="absolute top-40 right-20 w-32 h-32 bg-gray-600/40 rounded-full blur-2xl animate-pulse delay-1000"></div>
//         <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-gray-500/80 rounded-full blur-lg animate-pulse delay-2000"></div>
//         <div className="absolute top-1/3 right-1/3 w-24 h-24 bg-gray-400/40 rounded-full blur-xl animate-pulse delay-500"></div>
//       </div> */}
//       <style>
// {`
// @keyframes shake {
//   0% { transform: translate(0, 0) rotate(0deg); }
//   25% { transform: translate(2px, -2px) rotate(-1deg); }
//   50% { transform: translate(-2px, 2px) rotate(1deg); }
//   75% { transform: translate(1px, -1px) rotate(0.5deg); }
//   100% { transform: translate(0, 0) rotate(-1deg); }
// }
// .shake {
//   animation: shake 3s ease-in-out infinite;
// }

//   @keyframes blink {
//   0%, 100% { opacity: 1; }
//   50% { opacity: 0.2; }
// }
// .blink {
//   animation: blink 3s ease-in-out infinite;
// }

// `}
// </style>

// <div className="absolute inset-0 pointer-events-none z-0">
//   {/* Decorative shaking icon circles */}
//   <div className="absolute top-56 left-10 blink">
//     <div className="w-40 h-40 bg-teal-500 blur-lg rounded-full flex items-center justify-center">
//       {/* <Activity className="w-6 h-6 text-white/80" /> */}
//     </div>
//   </div>

//   <div className="absolute top-1/4 right-16 blink">
//     <div className="w-32 h-32 bg-amber-500 blur-lg rounded-full flex items-center justify-center">
//       {/* <Code className="w-7 h-7 text-white/70" /> */}
//     </div>
//   </div>

//   <div className="absolute top-1/2 left-1/3 blink">
//     <div className="w-40 h-40 bg-cyan-400 blur-lg rounded-full flex items-center justify-center">
//       {/* <Layers className="w-6 h-6 text-white/8" /> */}
//     </div>
//   </div>

//   <div className="absolute bottom-10 right-1/4 blink">
//     <div className="w-48 h-48 bg-amber-400 blur-lg rounded-full flex items-center justify-center">
//       {/* <Cloud className="w-6 h-6 text-white/80" /> */}
//     </div>
//   </div>

//   <div className="absolute bottom-10 left-20 blink">
//     <div className="w-24 h-24 bg-cyan-200 blur-md rounded-full flex items-center justify-center">
//       {/* <Server className="w-8 h-8 text-white/60" /> */}
//     </div>
//   </div>

//   <div className="absolute top-[60%] right-16 blink">
//     <div className="w-36 h-36 bg-teal-500 blur-lg rounded-full flex items-center justify-center">
     
//     </div>
//   </div>
// </div>



//       {/* <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div> */}


//       <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Section Header */}
//         <div className="text-center max-w-3xl mx-auto mb-20">
//           <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
//             Everything you need to{' '}
//             <span className="relative inline-block">
//               <span className="bg-gradient-to-r from-teal-200 to-cyan-400 bg-clip-text text-transparent">
//                 succeed
//               </span>
//               <div className="absolute -inset-2 bg-gradient-to-r from-blue-600/20 to-indigo-700/20 rounded-lg blur-xl opacity-30 animate-pulse"></div>
//             </span>
//           </h2>
//           <p className="text-xl text-gray-600 leading-relaxed">
//             Powerful features designed to streamline your workflow and accelerate your business growth.
//           </p>
//         </div>

//         {/* Features Grid */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
//           {features.map((feature, index) => (
//             <div
//               key={index}
//               ref={el => cardRefs.current[index] = el}
//               data-index={index}
//               className={`group relative bg-black border border-cyan-200 rounded-2xl p-8 hover:shadow-2xl hover:border-transparent transition-all duration-500 transform ${
//                 visibleCards.includes(index) 
//                   ? 'translate-y-0 opacity-100' 
//                   : 'translate-y-8 opacity-0'
//               }`}
//               style={{ transitionDelay: `${index * 100}ms` }}
//             >
//               {/* Hover Gradient Background */}
//               <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`}></div>
              
//               {/* Animated Border */}
//               <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-600/20 via-indigo-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
              
//               <div className="relative z-10">
//                 <div className={`w-12 h-12 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg`}>
//                   <feature.icon className="w-6 h-6 text-white" />
//                 </div>
                
//                 <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-600 transition-colors duration-300">
//                   {feature.title}
//                 </h3>
                
//                 <p className="text-gray-500 mb-6 leading-relaxed">
//                   {feature.description}
//                 </p>

//                 <ul className="space-y-2">
//                   {feature.highlights.map((highlight, idx) => (
//                     <li key={idx} className="flex items-center text-sm text-gray-700 group-hover:text-gray-800 transition-colors duration-300">
//                       <CheckCircle className="w-4 h-4 group-hover:text-green-500 mr-2 flex-shrink-0" />
//                       <p className=' group-hover:text-green-400 ease-in'>{highlight}</p>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Enhanced CTA Section */}
//         <div className="relative text-center bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-3xl p-12 text-white overflow-hidden">
//           {/* Background Pattern */}
//           <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent_50%)]"></div>
//           <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.1),transparent_50%)]"></div>
          
//           <div className="relative z-10">
//             <h3 className="text-2xl md:text-3xl font-bold mb-4">
//               Ready to transform your business?
//             </h3>
//             <p className="text-blue-100 mb-8 text-lg max-w-2xl mx-auto">
//               Join thousands of companies already using our platform to scale their operations.
//             </p>
//             <button className="group bg-white text-blue-600 hover:bg-slate-50 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl inline-flex items-center">
//               <span className="relative z-10">Get Started Today</span>
//               {/* <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1 relative z-10" /> */}
//               <span className="svg group-hover:animate-jelloVertical origin-left pl-2">
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       width="50"
//       height="20"
//       viewBox="0 0 38 15"
//       fill="none"
//     >
//       <path
//         fill="blue"
//         d="M10 7.519l-.939-.344h0l.939.344zm14.386-1.205l-.981-.192.981.192zm1.276 5.509l.537.843.148-.094.107-.139-.792-.611zm4.819-4.304l-.385-.923h0l.385.923zm7.227.707a1 1 0 0 0 0-1.414L31.343.448a1 1 0 0 0-1.414 0 1 1 0 0 0 0 1.414l5.657 5.657-5.657 5.657a1 1 0 0 0 1.414 1.414l6.364-6.364zM1 7.519l.554.833.029-.019.094-.061.361-.23 1.277-.77c1.054-.609 2.397-1.32 3.629-1.787.617-.234 1.17-.392 1.623-.455.477-.066.707-.008.788.034.025.013.031.021.039.034a.56.56 0 0 1 .058.235c.029.327-.047.906-.39 1.842l1.878.689c.383-1.044.571-1.949.505-2.705-.072-.815-.45-1.493-1.16-1.865-.627-.329-1.358-.332-1.993-.244-.659.092-1.367.305-2.056.566-1.381.523-2.833 1.297-3.921 1.925l-1.341.808-.385.245-.104.068-.028.018c-.011.007-.011.007.543.84zm8.061-.344c-.198.54-.328 1.038-.36 1.484-.032.441.024.94.325 1.364.319.45.786.64 1.21.697.403.054.824-.001 1.21-.09.775-.179 1.694-.566 2.633-1.014l3.023-1.554c2.115-1.122 4.107-2.168 5.476-2.524.329-.086.573-.117.742-.115s.195.038.161.014c-.15-.105.085-.139-.076.685l1.963.384c.192-.98.152-2.083-.74-2.707-.405-.283-.868-.37-1.28-.376s-.849.069-1.274.179c-1.65.43-3.888 1.621-5.909 2.693l-2.948 1.517c-.92.439-1.673.743-2.221.87-.276.064-.429.065-.492.057-.043-.006.066.003.155.127.07.099.024.131.038-.063.014-.187.078-.49.243-.94l-1.878-.689zm14.343-1.053c-.361 1.844-.474 3.185-.413 4.161.059.95.294 1.72.811 2.215.567.544 1.242.546 1.664.459a2.34 2.34 0 0 0 .502-.167l.15-.076.049-.028.018-.011c.013-.008.013-.008-.524-.852l-.536-.844.019-.012c-.038.018-.064.027-.084.032-.037.008.053-.013.125.056.021.02-.151-.135-.198-.895-.046-.734.034-1.887.38-3.652l-1.963-.384zm2.257 5.701l.791.611.024-.031.08-.101.311-.377 1.093-1.213c.922-.954 2.005-1.894 2.904-2.27l-.771-1.846c-1.31.547-2.637 1.758-3.572 2.725l-1.184 1.314-.341.414-.093.117-.025.032c-.01.013-.01.013.781.624zm5.204-3.381c.989-.413 1.791-.42 2.697-.307.871.108 2.083.385 3.437.385v-2c-1.197 0-2.041-.226-3.19-.369-1.114-.139-2.297-.146-3.715.447l.771 1.846z"
//       ></path>
//     </svg>
//     </span>
//               </button>
//               {/* <div className='group px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 inline-flex items-center'>
//               <AwesomeButton/>
//               </div> */}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


// import React from 'react';
// import { Zap, Shield, BarChart3, Users, Globe, Smartphone } from 'lucide-react';
// import FeaturesGrid from './grids/FeatureGrid';
// import FeatureCTA from './CTA/FeatureCTA';

// const features = [
//   {
//     icon: Zap,
//     title: 'Lightning Fast Performance',
//     description: 'Experience blazing-fast speeds with our optimized infrastructure and edge computing technology.',
//     highlights: ['99.9% uptime guarantee', 'Sub-100ms response times', 'Global CDN network'],
//     gradient: 'from-yellow-400 to-orange-500'
//   },
//   {
//     icon: Shield,
//     title: 'Enterprise Security',
//     description: 'Bank-level security with end-to-end encryption, SOC 2 compliance, and regular security audits.',
//     highlights: ['256-bit encryption', 'SOC 2 Type II certified', 'GDPR compliant'],
//     gradient: 'from-green-400 to-emerald-500'
//   },
//   {
//     icon: BarChart3,
//     title: 'Advanced Analytics',
//     description: 'Get deep insights with AI-powered analytics, real-time dashboards, and predictive modeling.',
//     highlights: ['Real-time reporting', 'Predictive analytics', 'Custom dashboards'],
//     gradient: 'from-blue-400 to-indigo-500'
//   },
//   {
//     icon: Users,
//     title: 'Team Collaboration',
//     description: 'Seamless teamwork with role-based permissions, real-time collaboration, and workflow automation.',
//     highlights: ['Role-based access', 'Real-time sync', 'Workflow automation'],
//     gradient: 'from-purple-400 to-pink-500'
//   },
//   {
//     icon: Globe,
//     title: 'Global Scale',
//     description: 'Deploy globally with multi-region support, automatic scaling, and localization features.',
//     highlights: ['Multi-region deployment', 'Auto-scaling', '20+ languages'],
//     gradient: 'from-cyan-400 to-blue-500'
//   },
//   {
//     icon: Smartphone,
//     title: 'Mobile Ready',
//     description: 'Native mobile apps and responsive design ensure perfect experience across all devices.',
//     highlights: ['Native iOS & Android', 'Offline support', 'Push notifications'],
//     gradient: 'from-rose-400 to-red-500'
//   }
// ];

// export default function Features() {
//   return (
//     <section id="features" className="scroll-mt-24 min-h-screen relative py-24 overflow-hidden">
//        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(31,41,55),transparent_50%)]"></div>
//        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(55,65,81),transparent_50%)]"></div> */}
//        {/* <div className="absolute inset-0 overflow-hidden pointer-events-none">
//          <div className="absolute top-20 left-10 w-20 h-20 bg-gray-700/60 rounded-full blur-xl animate-pulse"></div>
//          <div className="absolute top-40 right-20 w-32 h-32 bg-gray-600/40 rounded-full blur-2xl animate-pulse delay-1000"></div>
//          <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-gray-500/80 rounded-full blur-lg animate-pulse delay-2000"></div>
//          <div className="absolute top-1/3 right-1/3 w-24 h-24 bg-gray-400/40 rounded-full blur-xl animate-pulse delay-500"></div>
//        </div> */}
//        <style>
//  {`
//  @keyframes shake {
//    0% { transform: translate(0, 0) rotate(0deg); }
//    25% { transform: translate(2px, -2px) rotate(-1deg); }
//    50% { transform: translate(-2px, 2px) rotate(1deg); }
//    75% { transform: translate(1px, -1px) rotate(0.5deg); }
//    100% { transform: translate(0, 0) rotate(-1deg); }
//  }
//  .shake {
//    animation: shake 3s ease-in-out infinite;
//  }
//    @keyframes blink {
//    0%, 100% { opacity: 1; }
//    50% { opacity: 0.2; }
//  }
//  .blink {
//    animation: blink 3s ease-in-out infinite;
//  }
//  `}
//  </style>
//  <div className="absolute inset-0 pointer-events-none z-0">
//    {/* Decorative shaking icon circles */}
//    <div className="absolute top-56 left-10 blink">
//      <div className="w-40 h-40 bg-teal-500 blur-lg rounded-full flex items-center justify-center">
//        {/* <Activity className="w-6 h-6 text-white/80" /> */}
//      </div>
//    </div>
//    <div className="absolute top-1/4 right-16 blink">
//      <div className="w-32 h-32 bg-amber-500 blur-lg rounded-full flex items-center justify-center">
//        {/* <Code className="w-7 h-7 text-white/70" /> */}
//     </div>
//   </div>
//    <div className="absolute top-1/2 left-1/3 blink">
//     <div className="w-40 h-40 bg-cyan-400 blur-lg rounded-full flex items-center justify-center">
//       {/* <Layers className="w-6 h-6 text-white/8" /> */}
//      </div>
//    </div>

//    <div className="absolute bottom-10 right-1/4 blink">
//      <div className="w-48 h-48 bg-amber-400 blur-lg rounded-full flex items-center justify-center">
//        {/* <Cloud className="w-6 h-6 text-white/80" /> */}
//      </div>
//    </div>

//   <div className="absolute bottom-10 left-20 blink">
//      <div className="w-24 h-24 bg-cyan-200 blur-md rounded-full flex items-center justify-center">
//        {/* <Server className="w-8 h-8 text-white/60" /> */}
//      </div>
//    </div>
//    <div className="absolute top-[60%] right-16 blink">
//      <div className="w-36 h-36 bg-teal-500 blur-lg rounded-full flex items-center justify-center">
   
//      </div>
//    </div>
//  </div>
//        {/* <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>

//       <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Section Header */}
//         <div className="text-center max-w-3xl mx-auto mb-20">
//           <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
//             Everything you need to{' '}
//             <span className="relative inline-block">
//               <span className="bg-gradient-to-r from-teal-200 to-cyan-400 bg-clip-text text-transparent">
//                 succeed
//               </span>
//               <div className="absolute -inset-2 bg-gradient-to-r from-blue-600/20 to-indigo-700/20 rounded-lg blur-xl opacity-30 animate-pulse" />
//             </span>
//           </h2>
//           <p className="text-xl text-gray-600 leading-relaxed">
//             Powerful features designed to streamline your workflow and accelerate your business growth.
//           </p>
//         </div>

//         <FeaturesGrid features={features} />
//         <FeatureCTA
//   title="Level Up Your Workflow"
//   description="Start using our platform today to supercharge your productivity and collaboration."
//   buttonText="Start Now"
//   gradient="from-pink-500 via-red-500 to-yellow-500"
// />

//       </div>
//     </section>
//   );
// }


import React from 'react';
import { Zap, Shield, BarChart3, Users, Globe, Smartphone } from 'lucide-react';
import FeaturesGrid from './grids/FeatureGrid';
import FeatureCTA from './CTA/FeatureCTA';
import BackgroundGlow from './utility/background';

const features = [
  {
    icon: Zap,
    title: 'Lightning Fast Performance',
    description: 'Experience blazing-fast speeds with our optimized infrastructure and edge computing technology.',
    highlights: ['99.9% uptime guarantee', 'Sub-100ms response times', 'Global CDN network'],
    gradient: 'from-yellow-400 to-orange-500'
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Bank-level security with end-to-end encryption, SOC 2 compliance, and regular security audits.',
    highlights: ['256-bit encryption', 'SOC 2 Type II certified', 'GDPR compliant'],
    gradient: 'from-green-400 to-emerald-500'
  },
  {
    icon: BarChart3,
    title: 'Advanced Analytics',
    description: 'Get deep insights with AI-powered analytics, real-time dashboards, and predictive modeling.',
    highlights: ['Real-time reporting', 'Predictive analytics', 'Custom dashboards'],
    gradient: 'from-blue-400 to-indigo-500'
  },
  {
    icon: Users,
    title: 'Team Collaboration',
    description: 'Seamless teamwork with role-based permissions, real-time collaboration, and workflow automation.',
    highlights: ['Role-based access', 'Real-time sync', 'Workflow automation'],
    gradient: 'from-purple-400 to-pink-500'
  },
  {
    icon: Globe,
    title: 'Global Scale',
    description: 'Deploy globally with multi-region support, automatic scaling, and localization features.',
    highlights: ['Multi-region deployment', 'Auto-scaling', '20+ languages'],
    gradient: 'from-cyan-400 to-blue-500'
  },
  {
    icon: Smartphone,
    title: 'Mobile Ready',
    description: 'Native mobile apps and responsive design ensure perfect experience across all devices.',
    highlights: ['Native iOS & Android', 'Offline support', 'Push notifications'],
    gradient: 'from-rose-400 to-red-500'
  }
];

export default function Features() {
  return (
    <section id="features" className=" min-h-screen relative py-24 ">

      {/* Radial background gradients */}
      {/* <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(31,41,55),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(55,65,81),transparent_50%)]"></div> */}

      {/* Animated blurred glow circles */}
      {/* <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-56 left-10 blink">
          <div className="w-40 h-40 bg-teal-500 blur-lg rounded-full" />
        </div>
        <div className="absolute top-1/4 right-16 blink">
          <div className="w-32 h-32 bg-amber-500 blur-lg rounded-full" />
        </div>
        <div className="absolute top-1/2 left-1/3 blink">
          <div className="w-40 h-40 bg-cyan-400 blur-lg rounded-full" />
        </div>
        <div className="absolute bottom-10 right-1/4 blink">
          <div className="w-48 h-48 bg-amber-400 blur-lg rounded-full" />
        </div>
        <div className="absolute bottom-10 left-20 blink">
          <div className="w-24 h-24 bg-cyan-200 blur-md rounded-full" />
        </div>
        <div className="absolute top-[60%] right-16 blink">
          <div className="w-36 h-36 bg-teal-500 blur-lg rounded-full" />
        </div>
      </div> */}

      {/* Background pattern
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div> */}

      {/* Keyframe styles */}
      {/* <style>{`
        @keyframes shake {
          0% { transform: translate(0, 0) rotate(0deg); }
          25% { transform: translate(2px, -2px) rotate(-1deg); }
          50% { transform: translate(-2px, 2px) rotate(1deg); }
          75% { transform: translate(1px, -1px) rotate(0.5deg); }
          100% { transform: translate(0, 0) rotate(-1deg); }
        }
        .shake {
          animation: shake 3s ease-in-out infinite;
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.2; }
        }
        .blink {
          animation: blink 3s ease-in-out infinite;
        }
      `}</style> */}
      <BackgroundGlow/>
      {/* Main content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Everything you need to{' '}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-teal-200 to-cyan-400 bg-clip-text text-transparent">
                succeed
              </span>
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-600/20 to-indigo-700/20 rounded-lg blur-xl opacity-30 animate-pulse" />
            </span>
          </h2>
          <p className="text-xl text-gray-400 leading-relaxed">
            Powerful features designed to streamline your workflow and accelerate your business growth.
          </p>
        </div>

        <FeaturesGrid features={features} />

        <FeatureCTA
          title="Level Up Your Workflow"
          description="Start using our platform today to supercharge your productivity and collaboration."
          buttonText="Start Now"
          gradient="from-pink-500 via-red-500 to-yellow-500"
        />
      </div>
    </section>
  );
}

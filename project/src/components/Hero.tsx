// import React, { useState, useEffect } from 'react';
// import { ArrowRight, Play, Sparkles } from 'lucide-react';

// const titleWords = [
//   'intelligent automation',
//   'seamless workflows',
//   'powerful analytics',
//   'smart integrations',
//   'advanced security'
// ];

// export default function Hero() {
//   const [currentWordIndex, setCurrentWordIndex] = useState(0);
//   const [displayedText, setDisplayedText] = useState('');
//   const [isDeleting, setIsDeleting] = useState(false);

//   useEffect(() => {
//     const fullText = titleWords[currentWordIndex];
//     let timeout;

//     if (isDeleting) {
//       timeout = setTimeout(() => {
//         setDisplayedText((prev) => prev.slice(0, -1));
//       }, 50);
//     } else {
//       timeout = setTimeout(() => {
//         setDisplayedText((prev) => fullText.slice(0, prev.length + 1));
//       }, 100);
//     }

//     if (!isDeleting && displayedText === fullText) {
//       timeout = setTimeout(() => setIsDeleting(true), 1500);
//     } else if (isDeleting && displayedText === '') {
//       setIsDeleting(false);
//       setCurrentWordIndex((prev) => (prev + 1) % titleWords.length);
//     }

//     return () => clearTimeout(timeout);
//   }, [displayedText, isDeleting, currentWordIndex]);

//   return (
//     <section className="relative pt-24 pb-12 min-h-screen flex items-center overflow-hidden">
//       {/* ... (other unchanged parts) */}

//       {/* Animated Background */}
//       <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246),transparent_50%)]"></div>
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(99,102,241),transparent_50%)]"></div>
//       </div>

//       {/* Floating Elements */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200/30 rounded-full blur-xl animate-pulse"></div>
//         <div className="absolute top-40 right-20 w-32 h-32 bg-indigo-200/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
//         <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-purple-200/40 rounded-full blur-lg animate-pulse delay-2000"></div>
//         <div className="absolute top-1/3 right-1/3 w-24 h-24 bg-blue-300/20 rounded-full blur-xl animate-pulse delay-500"></div>
//       </div>

//       {/* Grid Pattern */}
//       <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>

//       <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
//         <div className="text-center max-w-5xl mx-auto">
//           {/* Animated Badge */}
//           {/* <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-600/10 to-indigo-600/10 border border-blue-200/50 text-blue-700 text-sm font-medium mb-8 backdrop-blur-sm animate-fade-in">
//             <Sparkles className="w-4 h-4 mr-2 animate-pulse" />
//             <span className="relative">
//               New: AI-powered analytics now available
//               <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 rounded-full blur opacity-30 animate-pulse"></div>
//             </span>
//           </div> */}

//           {/* Dynamic Main Headline */}
//           {/* <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
//             <span className="block mb-2">Scale your business with</span>
//             <span className="relative inline-block">
//               <span 
//                 className={`bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent transition-all duration-500 ${
//                   isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'
//                 }`}
//               >
//                 {titleWords[currentWordIndex]}
//               </span>
//               <div className="absolute -inset-2 bg-gradient-to-r from-blue-600/20 via-indigo-600/20 to-purple-600/20 rounded-lg blur-xl opacity-30 animate-pulse"></div>
//             </span>
//           </h1> */}

//           <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
//         <span className="block mb-2">Scale your business with</span>
//         <span className="relative inline-block">
//           <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent transition-all duration-300">
//             {displayedText}
//             <span className="border-r-8 border-blue-600 ml-1 animate-blink"></span>
//           </span>
//         </span>
//       </h1>

//           {/* Enhanced Subtitle */}
//           <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in-up delay-300">
//             Transform your workflow with our cutting-edge SaaS platform. 
//             <span className="text-blue-600 font-semibold"> Increase productivity by 300%</span> and 
//             <span className="text-indigo-600 font-semibold"> reduce operational costs</span> while scaling effortlessly.
//           </p>

//           {/* Enhanced CTA Buttons */}
//           <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fade-in-up delay-500">
//             <button className="group relative w-full sm:w-auto bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center justify-center overflow-hidden">
//               <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//               <span className="relative z-10">Start Free Trial</span>
//               <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1 relative z-10" />
//               <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
//             </button>
            
//             <button className="group w-full sm:w-auto border-2 border-gray-300 hover:border-blue-400 text-gray-700 hover:text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center backdrop-blur-sm bg-white/50">
//               <Play className="mr-2 w-5 h-5 transition-transform group-hover:scale-110" />
//               Watch Demo
//             </button>
//           </div>

//           {/* Enhanced Social Proof */}
//           <div className="flex flex-col items-center space-y-8 animate-fade-in-up delay-700">
//             <p className="text-gray-500 text-sm font-medium">
//               Trusted by <span className="text-blue-600 font-semibold">10,000+</span> companies worldwide
//             </p>
//             <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
//               {/* Enhanced Company logos with hover effects */}
//               {/* {[24, 28, 20, 32, 24].map((width, index) => (
//                 <div 
//                   key={index}
//                   className={`h-8 bg-gradient-to-r from-gray-300 to-gray-400 rounded hover:from-blue-300 hover:to-indigo-300 transition-all duration-300 hover:scale-110`}
//                   style={{ width: `${width * 4}px` }}
//                 ></div>
//               ))} */}
//             </div>
//           </div>

//           {/* Scroll Indicator */}
//           {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
//             <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center">
//               <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
//             </div>
//           </div> */}
//         </div>
//       </div>
//     </section>
//   );
// }


import React, { useState, useEffect } from 'react';
import { ArrowRight, Play } from 'lucide-react';

const titleWords = [
  'intelligent automation',
  'seamless workflows',
  'powerful analytics',
  'smart integrations',
  'advanced security'
];

export default function Hero() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullText = titleWords[currentWordIndex];
    let timeout;

    if (isDeleting) {
      timeout = setTimeout(() => {
        setDisplayedText((prev) => prev.slice(0, -1));
      }, 50);
    } else {
      timeout = setTimeout(() => {
        setDisplayedText((prev) => fullText.slice(0, prev.length + 1));
      }, 100);
    }

    if (!isDeleting && displayedText === fullText) {
      timeout = setTimeout(() => setIsDeleting(true), 1500);
    } else if (isDeleting && displayedText === '') {
      setIsDeleting(false);
      setCurrentWordIndex((prev) => (prev + 1) % titleWords.length);
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentWordIndex]);

  return (
    <div id='hero' className="relative pt-24 pb-12 min-h-screen flex items-center overflow-hidden">
      {/* <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(31,41,55),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(55,65,81),transparent_50%)]"></div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 bg-gray-700/30 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-gray-600/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-gray-500/40 rounded-full blur-lg animate-pulse delay-2000"></div>
        <div className="absolute top-1/3 right-1/3 w-24 h-24 bg-gray-400/20 rounded-full blur-xl animate-pulse delay-500"></div>
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
      <div className="absolute bottom-0 left-0 rotate-180 bg-[linear-gradient(rgba(255,255,255)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div> */}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="text-center max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="block mb-2">Scale your business with</span>
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent transition-all duration-300">
                {displayedText}
                <span className="border-r-8 border-cyan-400 ml-1 animate-blink"></span>
              </span>
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in-up delay-300">
            Transform your workflow with our cutting-edge SaaS platform.
            <span className="text-cyan-400 font-semibold"> Increase productivity by 300%</span> and
            <span className="text-purple-400 font-semibold"> reduce operational costs</span> while scaling effortlessly.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fade-in-up delay-500">
            <a href='#features' className="ease-in-out transition-all duration-500">
            <button className="group relative w-full sm:w-auto bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative z-10">Know More</span>
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1 relative z-10" />
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-purple-600 blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
            </button>
            </a>

            <button className="group w-full sm:w-auto border-2 border-gray-600 hover:border-cyan-400 text-gray-300 hover:text-cyan-300 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center backdrop-blur-sm bg-white/10">
              <Play className="mr-2 w-5 h-5 transition-transform group-hover:scale-110" />
              Watch Demo
            </button>
          </div>

          <div className="flex flex-col items-center space-y-8 animate-fade-in-up delay-700">
            <p className="text-gray-400 text-sm font-medium">
              Trusted by <span className="text-cyan-300 font-semibold">10,000+</span> companies worldwide
            </p>
            {/* <div className="flex flex-wrap justify-center items-center gap-8 opacity-50">
              {[24, 28, 20, 32, 24].map((width, index) => (
                <div
                  key={index}
                  className={`h-8 bg-gradient-to-r from-gray-500 to-gray-600 rounded hover:from-cyan-500 hover:to-purple-500 transition-all duration-300 hover:scale-110`}
                  style={{ width: `${width * 4}px` }}
                ></div>
              ))}
            </div> */}
          </div>
          
        </div>
         
      </div>
      
    </div>
  );
}

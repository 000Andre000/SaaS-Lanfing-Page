// // // import React, { useState, useEffect } from 'react';
// // // import { Menu, X, Zap } from 'lucide-react';

// // // export default function Header() {
// // //   const [isMenuOpen, setIsMenuOpen] = useState(false);
// // //   const [scrolled, setScrolled] = useState(false);

// // //   useEffect(() => {
// // //     const handleScroll = () => {
// // //       setScrolled(window.scrollY > 50);
// // //     };

// // //     window.addEventListener('scroll', handleScroll);
// // //     return () => window.removeEventListener('scroll', handleScroll);
// // //   }, []);

// // //   return (
// // //     <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${
// // //       scrolled 
// // //         ? 'bg-white/90 backdrop-blur-xl border-b border-gray-200 shadow-lg' 
// // //         : 'bg-white/80 backdrop-blur-md border-b border-gray-200'
// // //     }`}>
// // //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// // //         <div className="flex justify-between items-center h-16">
// // //           {/* Logo */}
// // //           <div className="flex items-center space-x-2 group">
// // //             <div className="relative w-8 h-8 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
// // //               <Zap className="w-5 h-5 text-white" />
// // //               <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-lg blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
// // //             </div>
// // //             <span className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
// // //               SaaSify
// // //             </span>
// // //           </div>

// // //           {/* Desktop Navigation */}
// // //           <nav className="hidden md:flex items-center space-x-8">
// // //             {['Features', 'Pricing', 'Testimonials', 'Contact'].map((item) => (
// // //               <a 
// // //                 key={item}
// // //                 href={`#${item.toLowerCase()}`} 
// // //                 className="relative text-gray-600 hover:text-gray-900 transition-colors font-medium group"
// // //               >
// // //                 {item}
// // //                 <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 group-hover:w-full transition-all duration-300"></div>
// // //               </a>
// // //             ))}
// // //           </nav>

// // //           {/* Desktop CTA */}
// // //           <div className="hidden md:flex items-center space-x-4">
// // //             <button className="text-gray-600 hover:text-gray-900 font-medium transition-colors duration-300 hover:scale-105">
// // //               Sign In
// // //             </button>
// // //             <button className="group relative bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg overflow-hidden">
// // //               <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
// // //               <span className="relative z-10">Start Free Trial</span>
// // //             </button>
// // //           </div>

// // //           {/* Mobile Menu Button */}
// // //           <button
// // //             onClick={() => setIsMenuOpen(!isMenuOpen)}
// // //             className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-300 hover:scale-105"
// // //           >
// // //             <div className="relative w-6 h-6">
// // //               <Menu className={`absolute inset-0 w-6 h-6 transition-all duration-300 ${isMenuOpen ? 'opacity-0 rotate-180' : 'opacity-100 rotate-0'}`} />
// // //               <X className={`absolute inset-0 w-6 h-6 transition-all duration-300 ${isMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-180'}`} />
// // //             </div>
// // //           </button>
// // //         </div>

// // //         {/* Mobile Menu */}
// // //         <div className={`md:hidden transition-all duration-300 overflow-hidden ${
// // //           isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
// // //         }`}>
// // //           <div className="py-4 border-t border-gray-200 bg-white/95 backdrop-blur-sm">
// // //             <nav className="flex flex-col space-y-4">
// // //               {['Features', 'Pricing', 'Testimonials', 'Contact'].map((item, index) => (
// // //                 <a 
// // //                   key={item}
// // //                   href={`#${item.toLowerCase()}`} 
// // //                   className="text-gray-600 hover:text-gray-900 font-medium px-4 py-2 hover:bg-gray-50 rounded-lg transition-all duration-300 transform hover:translate-x-2"
// // //                   style={{ transitionDelay: `${index * 50}ms` }}
// // //                   onClick={() => setIsMenuOpen(false)}
// // //                 >
// // //                   {item}
// // //                 </a>
// // //               ))}
// // //               <div className="flex flex-col space-y-2 px-4 pt-4 border-t border-gray-200">
// // //                 <button className="text-gray-600 hover:text-gray-900 font-medium text-left hover:bg-gray-50 py-2 px-2 rounded-lg transition-all duration-300">
// // //                   Sign In
// // //                 </button>
// // //                 <button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:scale-105">
// // //                   Start Free Trial
// // //                 </button>
// // //               </div>
// // //             </nav>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </header>
// // //   );
// // // }


// // // import React, { useState, useEffect } from 'react';
// // // import { ArrowRight, Play, Menu, X, Zap } from 'lucide-react';


// // // function Header() {
// // //   const [isMenuOpen, setIsMenuOpen] = useState(false);
// // //   const [scrolled, setScrolled] = useState(false);

// // //   useEffect(() => {
// // //     const handleScroll = () => {
// // //       setScrolled(window.scrollY > 100);
// // //     };
// // //     window.addEventListener('scroll', handleScroll);
// // //     return () => window.removeEventListener('scroll', handleScroll);
// // //   }, []);

// // //   return (
// // //     <header
// // //       className={`fixed w-full top-0 z-50 transition-all ease-in duration-300 ${
// // //         scrolled
// // //           ? 'bg-gray-900/90 backdrop-blur-xl border-gray-800 shadow-md'
// // //           : ''
// // //       }`}
// // //     >
// // //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// // //         <div className="flex justify-between items-center h-16">
// // //           <div className="flex items-center space-x-2 group">
// // //             <div className="relative w-8 h-8 bg-gradient-to-br from-cyan-600 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
// // //               <Zap className="w-5 h-5 text-white" />
// // //               <div className="absolute inset-0 bg-gradient-to-br from-cyan-600 to-purple-600 rounded-lg blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
// // //             </div>
// // //             <span className="text-xl font-bold text-white group-hover:text-cyan-200 transition-colors duration-300">
// // //               NeuroScale
// // //             </span>
// // //           </div>

// // //           <nav className="hidden md:flex items-center space-x-8">
// // //             {['Features', 'Pricing', 'Testimonials', 'Contact'].map((item) => (
// // //               <a
// // //                 key={item}
// // //                 href={`#${item.toLowerCase()}`}
// // //                 className="relative text-gray-300 hover:text-white transition-colors font-medium group"
// // //               >
// // //                 {item}
// // //                 <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 group-hover:w-full transition-all duration-300"></div>
// // //               </a>
// // //             ))}
// // //           </nav>

// // //           <div className="hidden md:flex items-center space-x-4">
// // //             {/* <button className="text-gray-300 hover:text-white font-medium transition-colors duration-300 hover:scale-105">
// // //               Sign In
// // //             </button>
// // //             <button className="group relative bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg overflow-hidden">
// // //               <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
// // //               <span className="relative z-10">Start Free Trial</span>
// // //             </button> */}
// // //           </div>

// // //           <button
// // //             onClick={() => setIsMenuOpen(!isMenuOpen)}
// // //             className="md:hidden p-2 rounded-lg hover:bg-gray-800 transition-colors duration-300 hover:scale-105"
// // //           >
// // //             <div className="relative w-6 h-6">
// // //               <Menu className={`absolute inset-0 w-6 h-6 transition-all duration-300 ${isMenuOpen ? 'opacity-0 rotate-180' : 'opacity-100 rotate-0'}`} />
// // //               <X className={`absolute inset-0 w-6 h-6 transition-all duration-300 ${isMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-180'}`} />
// // //             </div>
// // //           </button>
// // //         </div>

// // //         <div className={`md:hidden transition-all duration-300 overflow-hidden ${
// // //           isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
// // //         }`}>
// // //           <div className="py-4 border-t border-gray-700 bg-gray-900/95 backdrop-blur-sm">
// // //             <nav className="flex flex-col space-y-4">
// // //               {['Features', 'Pricing', 'Testimonials', 'Contact'].map((item, index) => (
// // //                 <a
// // //                   key={item}
// // //                   href={`#${item.toLowerCase()}`}
// // //                   className="text-gray-300 hover:text-white font-medium px-4 py-2 hover:bg-gray-800 rounded-lg transition-all duration-300 transform hover:translate-x-2"
// // //                   style={{ transitionDelay: `${index * 50}ms` }}
// // //                   onClick={() => setIsMenuOpen(false)}
// // //                 >
// // //                   {item}
// // //                 </a>
// // //               ))}
// // //               {/* <div className="flex flex-col space-y-2 px-4 pt-4 border-t border-gray-700">
// // //                 <button className="text-gray-300 hover:text-white font-medium text-left hover:bg-gray-800 py-2 px-2 rounded-lg transition-all duration-300">
// // //                   Sign In
// // //                 </button>
// // //                 <button className="bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:scale-105">
// // //                   Start Free Trial
// // //                 </button>
// // //               </div> */}
// // //             </nav>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </header>
// // //   );
// // // }

// // // export default Header;

// // // // Add this component to your layout or page before <Hero />


// // import React, { useState, useEffect, useRef } from 'react';
// // import { Menu, X, Zap } from 'lucide-react';

// // function Header() {
// //   const [isMenuOpen, setIsMenuOpen] = useState(false);
// //   const [hasPassedFeatures, setHasPassedFeatures] = useState(false);
// //   const featuresRef = useRef<HTMLElement | null>(null);

// //   useEffect(() => {
// //     const featuresSection = document.querySelector('#hero');
// //     featuresRef.current = featuresSection as HTMLElement;

// //     const observer = new IntersectionObserver(
// //       ([entry]) => {
// //         // When features section leaves the viewport
// //         setHasPassedFeatures(!entry.isIntersecting);
// //       },
// //       {
// //         root: null,
// //         threshold: 0,
// //         rootMargin: '-60px' // adjust based on your header height
// //       }
// //     );

// //     if (featuresRef.current) {
// //       observer.observe(featuresRef.current);
// //     }

// //     return () => {
// //       if (featuresRef.current) {
// //         observer.unobserve(featuresRef.current);
// //       }
// //     };
// //   }, []);

// //   return (
// //     <header
// //       className={`fixed w-full top-0 z-50 transition-all duration-300 ${
// //         hasPassedFeatures
// //           ? 'bg-gray-900/90 backdrop-blur-xl  border-gray-800 shadow-md'
// //           : 'bg-transparent'
// //       }`}
// //     >
// //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //         <div className="flex justify-between items-center h-16">
// //           {/* Logo */}
// //           <div className="flex items-center space-x-2 group">
// //             <div className="relative w-8 h-8 bg-gradient-to-br from-cyan-600 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
// //               <Zap className="w-5 h-5 text-white" />
// //               <div className="absolute inset-0 bg-gradient-to-br from-cyan-600 to-purple-600 rounded-lg blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
// //             </div>
// //             <span className="text-xl font-bold text-white group-hover:text-cyan-200 transition-colors duration-300">
// //               NeuroScale
// //             </span>
// //           </div>

// //           {/* Desktop Nav */}
// //           <nav className="hidden md:flex items-center space-x-8">
// //             {['Features', 'Pricing', 'Testimonials', 'Contact'].map((item) => (
// //               <a
// //                 key={item}
// //                 href={`#${item.toLowerCase()}`}
// //                 className="relative text-gray-300 hover:text-white transition-colors font-medium group"
// //               >
// //                 {item}
// //                 <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 group-hover:w-full transition-all duration-300"></div>
// //               </a>
// //             ))}
// //           </nav>

// //           {/* Hamburger */}
// //           <button
// //             onClick={() => setIsMenuOpen(!isMenuOpen)}
// //             className="md:hidden p-2 rounded-lg hover:bg-gray-800 transition-colors duration-300 hover:scale-105"
// //           >
// //             <div className="relative w-6 h-6">
// //               <Menu className={`absolute inset-0 w-6 h-6 transition-all duration-300 ${isMenuOpen ? 'opacity-0 rotate-180' : 'opacity-100 rotate-0'}`} />
// //               <X className={`absolute inset-0 w-6 h-6 transition-all duration-300 ${isMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-180'}`} />
// //             </div>
// //           </button>
// //         </div>

// //         {/* Mobile Nav */}
// //         <div className={`md:hidden transition-all duration-300 overflow-hidden ${
// //           isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
// //         }`}>
// //           <div className="py-4 border-t border-gray-700 bg-gray-900/95 backdrop-blur-sm">
// //             <nav className="flex flex-col space-y-4">
// //               {['Features', 'Pricing', 'Testimonials', 'Contact'].map((item, index) => (
// //                 <a
// //                   key={item}
// //                   href={`#${item.toLowerCase()}`}
// //                   className="text-gray-300 hover:text-white font-medium px-4 py-2 hover:bg-gray-800 rounded-lg transition-all duration-300 transform hover:translate-x-2"
// //                   style={{ transitionDelay: `${index * 50}ms` }}
// //                   onClick={() => setIsMenuOpen(false)}
// //                 >
// //                   {item}
// //                 </a>
// //               ))}
// //             </nav>
// //           </div>
// //         </div>
// //       </div>
// //     </header>
// //   );
// // }

// // export default Header;



// import React, { useState, useEffect, useRef } from 'react';
// import { Menu, X, Zap } from 'lucide-react';
// import ScrollToTopButton from './buttons/ScrollToTop';

// export default function Header({ scrollRefs }) {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const [hasPassedFeatures, setHasPassedFeatures] = useState(false);
//   const featuresRef = useRef<HTMLElement | null>(null);


//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 100);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const scrollToSection = (key) => {
//     const sectionRef = scrollRefs[key];
//     if (sectionRef?.current) {
//       sectionRef.current.scrollIntoView({ behavior: 'smooth' });
//       setIsMenuOpen(false); // Close mobile menu after click
//     }
//   };

 
//   useEffect(() => {
//     const featuresSection = document.querySelector('#hero');
//     featuresRef.current = featuresSection as HTMLElement;

//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         // When features section leaves the viewport
//         setHasPassedFeatures(!entry.isIntersecting);
//       },
//       {
//         root: null,
//         threshold: 0,
//         rootMargin: '-60px' // adjust based on your header height
//       }
//     );

//     if (featuresRef.current) {
//       observer.observe(featuresRef.current);
//     }

//     return () => {
//       if (featuresRef.current) {
//         observer.unobserve(featuresRef.current);
//       }
//     };
//   }, []);


//   const navItems = ['features', 'pricing', 'testimonials', 'contact'];

//   return (
//    <header
//   className={`fixed w-full top-0 z-50 transition-all duration-300 ${
//     hasPassedFeatures || scrolled
//       ? 'bg-gray-900/90 backdrop-blur-xl border-gray-800 shadow-md'
//       : 'bg-transparent'
//   }`}
// >

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16">
//           {/* Logo */}
//           <div className="flex items-center space-x-2 group">
//             <div className="relative w-8 h-8 bg-gradient-to-br from-cyan-600 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
//               <Zap className="w-5 h-5 text-white" />
//             </div>
//             <span className="text-xl font-bold text-white">NeuroScale</span>
//           </div>

//           {/* Desktop Nav */}
//           <nav className="hidden md:flex items-center space-x-8">
//             {navItems.map((item) => (
//               <button
//                 key={item}
//                 onClick={() => scrollToSection(item)}
//                 className="text-gray-300 hover:text-white font-medium transition duration-300"
//               >
//                 {item.charAt(0).toUpperCase() + item.slice(1)}
//               </button>
//             ))}
//           </nav>

//           {/* Mobile Toggle */}
//           <button
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//             className="md:hidden p-2 rounded hover:bg-gray-800 transition"
//           >
//             <div className="relative w-6 h-6">
//               <Menu className={`absolute transition ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`} />
//               <X className={`absolute transition ${isMenuOpen ? 'opacity-100' : 'opacity-0'}`} />
//             </div>
//           </button>
//         </div>

//         {/* Mobile Nav */}
//         <div
//           className={`md:hidden transition-all overflow-hidden ${
//             isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
//           }`}
//         >
//           <nav className="flex flex-col space-y-4 py-4 bg-gray-900">
//             {navItems.map((item, index) => (
//               <button
//                 key={item}
//                 onClick={() => scrollToSection(item)}
//                 className="text-gray-300 hover:text-white px-4 text-left"
//                 style={{ transitionDelay: `${index * 50}ms` }}
//               >
//                 {item.charAt(0).toUpperCase() + item.slice(1)}
//               </button>
//             ))}
//           </nav>
//         </div>
        
//       </div>
//     </header>
//   );
// }


import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Zap } from 'lucide-react';
import ScrollToTopButton from './buttons/ScrollToTop';

export default function Header({ scrollRefs }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hasPassedFeatures, setHasPassedFeatures] = useState(false);
  const featuresRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (key) => {
    const sectionRef = scrollRefs[key];
    if (sectionRef?.current) {
      sectionRef.current.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    const featuresSection = document.querySelector('#hero');
    featuresRef.current = featuresSection;

    const observer = new IntersectionObserver(
      ([entry]) => setHasPassedFeatures(!entry.isIntersecting),
      { root: null, threshold: 0, rootMargin: '-60px' }
    );

    if (featuresRef.current) observer.observe(featuresRef.current);
    return () => {
      if (featuresRef.current) observer.unobserve(featuresRef.current);
    };
  }, []);

  const navItems = ['features', 'pricing', 'testimonials', 'contact'];

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        hasPassedFeatures || scrolled
          ? 'bg-gray-900/90 backdrop-blur-xl border-gray-800 shadow-md'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2 group">
            <div className="relative w-8 h-8 bg-gradient-to-br from-cyan-600 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white">NeuroScale</span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="relative text-gray-300 hover:text-white font-medium transition duration-300 group"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
          </nav>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded hover:bg-gray-800 transition"
          >
            <div className="relative w-6 h-6">
              <Menu
                className={`absolute inset-0 w-6 h-6 transition-all duration-300 ${
                  isMenuOpen ? 'opacity-0 rotate-180' : 'opacity-100 rotate-0'
                }`}
              />
              <X
                className={`absolute inset-0 w-6 h-6 transition-all duration-300 ${
                  isMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-180'
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Nav */}
        <div
          className={`md:hidden transition-all overflow-hidden duration-300 ${
            isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <nav className="flex flex-col space-y-4 py-4 bg-gray-900">
            {navItems.map((item, index) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="relative text-left text-gray-300 hover:text-white font-medium px-4 py-2 transition duration-300 group"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
                <span className="absolute left-4 bottom-0 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 group-hover:w-[calc(100%-2rem)] transition-all duration-300"></span>
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <ScrollToTopButton />
    </header>
  );
}

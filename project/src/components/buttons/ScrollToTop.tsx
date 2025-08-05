// // import React, { useEffect, useState } from 'react';
// // import { ArrowUp } from 'lucide-react';

// // export default function ScrollToTopButton() {
// //   const [isVisible, setIsVisible] = useState(false);

// //   // Show button when scroll position > 300px
// //   useEffect(() => {
// //     const handleScroll = () => {
// //       setIsVisible(window.scrollY > 300);
// //     };

// //     window.addEventListener('scroll', handleScroll);
// //     return () => window.removeEventListener('scroll', handleScroll);
// //   }, []);

// //   // Smooth scroll to top
// //   const scrollToTop = () => {
// //     window.scrollTo({ top: 0, behavior: 'smooth' });
// //   };

// //   return (
// //     <button
// //       onClick={scrollToTop}
// //       className={`fixed bottom-6 right-6 z-50 p-3 rounded-full shadow-lg bg-gradient-to-r from-cyan-600 to-purple-600 text-white hover:from-cyan-700 hover:to-purple-700 transition-transform duration-300 ${
// //         isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 pointer-events-none'
// //       }`}
// //       aria-label="Scroll to top"
// //     >
// //       <ArrowUp className="w-56 h-56" />
// //     </button>
// //   );
// // }


// import React, { useEffect, useState } from 'react';
// import { ChevronUp } from 'lucide-react';

// export default function ScrollToTopButton() {
//   const [isVisible, setIsVisible] = useState(false);

//   // Show button when page is scrolled down
//   useEffect(() => {
//     const toggleVisibility = () => {
//       setIsVisible(window.scrollY > 300);
//     };

//     window.addEventListener('scroll', toggleVisibility);
//     return () => window.removeEventListener('scroll', toggleVisibility);
//   }, []);

//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   };

//   return (
//     <button
//       onClick={scrollToTop}
//       className={`fixed bottom-6 right-6 z-50 bg-cyan-600 hover:bg-cyan-700 text-white p-3 rounded-full shadow-lg transition-opacity duration-300 ${
//         isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
//       }`}
//       aria-label="Scroll to top"
//     >
//       <ChevronUp className="w-5 h-5" />
//     </button>
//   );
// }


import React, { useEffect, useState } from 'react';
import { ChevronUp } from 'lucide-react';

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 z-50 bg-cyan-600 hover:bg-cyan-700 text-white p-3 rounded-full shadow-xl transition-all duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
      aria-label="Scroll to top"
    >
      <ChevronUp className="w-5 h-5" />
    </button>
  );
}

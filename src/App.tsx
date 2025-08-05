// import React from 'react';
// import Header from './components/Header';
// import Hero from './components/Hero';
// import Features from './components/Features';
// import Pricing from './components/Pricing';
// import Testimonials from './components/Testimonials';
// import Footer from './components/Footer';

// function App() {
//   return (
//     <div className="min-h-screen">
//       <Header />
//       <main>
//         <Hero />
//         <Features />
//         <Pricing />
//         <Testimonials />
//       </main>
//       <Footer />
//     </div>
//   );
// }

// export default App;


import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import ParallaxScroll from './components/parallax';

function App() {
  return (
    <ParallaxScroll/>
  );
}

export default App;

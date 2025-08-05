import React, { useRef } from 'react';
import Header from './Header';
import Hero from './Hero';
import Features from './Features';
import Pricing from './Pricing';
import Testimonials from './Testimonials';
import Footer from './Footer';
import ScrollToTopButton from './buttons/ScrollToTop';

export default function ParallaxScroll() {
    const sectionRefs = {
    features: useRef(null),
    pricing: useRef(null),
    testimonials: useRef(null),
    contact: useRef(null),
  };
  return (
    <div className="relative ease-in-out transition-all duration-500">
      {/* Fixed Background */}
      <div className="fixed inset-0 z-0 bg-black bg-fixed bg-cover" />
       <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(31,41,55),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(55,65,81),transparent_50%)]"></div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 bg-gray-700/30 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-gray-600/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-gray-500/40 rounded-full blur-lg animate-pulse delay-2000"></div>
        <div className="absolute top-1/3 right-1/3 w-24 h-24 bg-gray-400/20 rounded-full blur-xl animate-pulse delay-500"></div>
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
      {/* <div className="absolute bottom-0 left-0 rotate-180 bg-[linear-gradient(rgba(255,255,255)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div> */}

      {/* Foreground Content (Scrolls) */}
      <div className="relative z-10">
        <Header scrollRefs={sectionRefs} />
        <ScrollToTopButton/>

      <main>
        <Hero/>
        <section ref={sectionRefs.features}><Features /></section>
        <section ref={sectionRefs.pricing}><Pricing /></section>
        <section ref={sectionRefs.testimonials}><Testimonials /></section>
        <section ref={sectionRefs.contact}><Footer /></section>
      </main>
   {/* <Footer /> */}
      </div>
    </div>
  );
}

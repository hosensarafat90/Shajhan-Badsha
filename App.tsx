
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Advantages from './components/Advantages';
import Products from './components/Products';
import Partners from './components/Partners';
import RecentProjects from './components/RecentProjects';
import Estimator from './components/Estimator';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <About />
        <Advantages />
        <Partners />
        <Products />
        <Estimator />
        <RecentProjects />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      
      <div className="fixed bottom-6 right-6 flex flex-col gap-3 md:hidden z-50">
        <a 
          href="tel:+8801700000000" 
          className="bg-yellow-400 text-blue-900 p-4 rounded-full shadow-2xl animate-bounce"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 005.47 5.47l.772-1.547a1 1 0 011.06-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default App;

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
//import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-dark-500 text-primary-50 overflow-x-hidden">

      {/* Navbar */}
      <Navbar />

      {/* Main content */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      {/* Footer */}
      {/* <Footer /> */}

      {/* Back to top button */}
    </div>
  );
}

function BackToTop() {
  return (
    <a
      href="#home"
      className="fixed bottom-6 right-6 z-50 w-12 h-12 glass rounded-full flex items-center justify-center
        text-primary-300 hover:text-white hover:bg-primary-600/30 transition-all duration-300
        hover:-translate-y-1 shadow-lg shadow-primary-900/30"
      aria-label="Back to top"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m18 15-6-6-6 6" />
      </svg>
    </a>
  );
}

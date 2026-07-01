import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-dark-500 text-primary-50 overflow-x-hidden">
      {/* Particle-like background dots */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[10%] left-[15%] w-1 h-1 bg-primary-400/30 rounded-full animate-pulse" />
        <div className="absolute top-[25%] right-[20%] w-1.5 h-1.5 bg-accent-400/20 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-[45%] left-[8%] w-1 h-1 bg-primary-300/25 rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-[60%] right-[12%] w-1 h-1 bg-accent-400/20 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
        <div className="absolute top-[80%] left-[25%] w-1.5 h-1.5 bg-primary-400/20 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }} />
        <div className="absolute top-[35%] left-[50%] w-1 h-1 bg-primary-500/15 rounded-full animate-pulse" style={{ animationDelay: '3s' }} />
        <div className="absolute top-[70%] right-[35%] w-1 h-1 bg-accent-400/15 rounded-full animate-pulse" style={{ animationDelay: '2.5s' }} />
        <div className="absolute top-[15%] left-[70%] w-1.5 h-1.5 bg-primary-400/20 rounded-full animate-pulse" style={{ animationDelay: '4s' }} />
        <div className="absolute top-[90%] right-[60%] w-1 h-1 bg-primary-300/20 rounded-full animate-pulse" style={{ animationDelay: '3.5s' }} />
      </div>

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
      <Footer />

      {/* Back to top button */}
      <BackToTop />
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

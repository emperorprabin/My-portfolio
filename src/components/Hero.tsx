import { ArrowDown, Sparkles } from 'lucide-react';
import { useEffect, useState } from 'react';

const roles = ['Electronics,Information and Communication Engineering Student'];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const role = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (typing) {
      if (displayed.length < role.length) {
        timeout = setTimeout(() => setDisplayed(role.slice(0, displayed.length + 1)), 80);
      } else {
        timeout = setTimeout(() => setTyping(false), 2000);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
      } else {
        setRoleIndex((prev) => (prev + 1) % roles.length);
        setTyping(true);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, typing, roleIndex]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-bg.jpg"
          alt=""
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-linear-to-b from-dark-500/60 via-dark-500/80 to-dark-500" />
      </div>

      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary-600/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* Avatar */}
        <div className="mb-8 animate-fade-in-up">
          <div className="relative inline-block">
            <div className="w-36 h-36 rounded-full overflow-hidden border-4 border-primary-500/50 animate-pulse-glow mx-auto">
              <img src="/images/avatar.jpg" alt="Profile" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-2 -right-2 bg-green-500 w-6 h-6 rounded-full border-4 border-dark-500" />
          </div>
        </div>

        {/* Greeting */}
        <div className="animate-fade-in-up delay-100 opacity-0">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary-300 mb-6">
            <Sparkles size={16} className="text-primary-400" />
            Welcome to my portfolio
          </span>
        </div>

        {/* Name */}
        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black mt-6 mb-4 animate-fade-in-up delay-200 opacity-0">
          <span className="text-white">Hi, I'm </span>
          <span className="text-gradient">Prabin Joshi</span>
        </h1>

        {/* Typing role */}
        <div className="h-12 flex items-center justify-center animate-fade-in-up delay-300 opacity-0">
          <span className="text-xl sm:text-2xl lg:text-3xl font-mono text-primary-300">
            {displayed}
            <span className="inline-block w-0.5 h-7 bg-primary-400 ml-1 animate-pulse" />
          </span>
        </div>

        {/* Description */}
        <p className="mt-6 text-lg sm:text-xl text-primary-200/70 max-w-2xl mx-auto leading-relaxed animate-fade-in-up delay-400 opacity-0">
          I craft beautiful, performant web applications with modern technologies.
          Passionate about clean code, intuitive design, and solving complex problems.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-500 opacity-0">
          <a
            href="#projects"
            className="group px-8 py-4 bg-linear-to-r from-primary-600 to-primary-500 rounded-2xl text-white font-semibold
              hover:from-primary-500 hover:to-primary-400 transition-all duration-300 shadow-lg shadow-primary-600/30
              hover:shadow-primary-500/50 hover:-translate-y-1"
          >
            View My Work
            <span className="inline-block ml-2 transition-transform group-hover:translate-x-1">→</span>
          </a>
          <a
            href="#contact"
            className="px-8 py-4 glass rounded-2xl text-primary-200 font-semibold
              hover:bg-white/10 hover:text-white transition-all duration-300 hover:-translate-y-1"
          >
            Get in Touch
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <a href="#about" className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-primary-400/60 hover:text-primary-300 transition-colors">
        <ArrowDown size={28} />
      </a>
    </section>
  );
}

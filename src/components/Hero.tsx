import SectionBackground from './SectionBackground';
import { useEffect, useState } from 'react';

const roles = ['Enthusiastic Engineering Student'];

export default function Hero() {
  const [displayed, setDisplayed] = useState('');

  useEffect(() => {
    const role = roles[0];
    let timeout: ReturnType<typeof setTimeout>;

    if (displayed.length < role.length) {
      timeout = setTimeout(() => setDisplayed(role.slice(0, displayed.length + 1)), 30);
    }

    return () => clearTimeout(timeout);
  }, [displayed]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <SectionBackground />
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* Avatar */}
        <div className="mb-8 animate-fade-in-up">
          <div className="relative inline-block">
            <div className="w-50 h-50 rounded-full overflow-hidden">
              <img src="/images/avatar.jpg" alt="Profile" className="w-full h-full object-cover" />
            </div>
            {/*<div className="absolute -bottom-2 -right-2 bg-green-500 w-6 h-6 rounded-full border-4 border-dark-500" />*/}
          </div>
        </div>

        {/* Greeting
        <div className="animate-fade-in-up delay-100 opacity-0">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary-300 mb-6">
            <Sparkles size={16} className="text-primary-400" />
            Welcome to my portfolio
          </span>
        </div>*/}

        {/* Name */}
        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black mt-6 mb-4 animate-fade-in-up delay-200 opacity-0">
          <span className="text-white">Hi, I'm </span>
          <span className="text-white">Prabin Joshi</span>
        </h1>

        {/* Typing role */}
        <p className="mt-4 text-xl sm:text-2xl text-primary-200">
          {displayed}
          <span className=""></span>
        </p>

        {/* Description */}
        <p className="mt-6 text-lg sm:text-xl text-primary-200/70 max-w-2xl mx-auto leading-relaxed animate-fade-in-up delay-400 opacity-0">
          I craft beautiful, performant web applications with modern technologies.
          Passionate about clean code, intuitive design, and solving complex problems.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-500 opacity-0">
          <a
            href="#projects"
            className="px-8 py-4 glass rounded-2xl text-primary-200 font-semibold
              hover:bg-white/10 hover:text-white transition-all duration-300 hover:-translate-y-1"
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
    </section>
  );
}

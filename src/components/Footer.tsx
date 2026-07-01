import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative py-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <a href="#home" className="text-xl font-bold text-gradient">
            {'<Dev />'}
          </a>
          <p className="text-sm text-primary-300/60 flex items-center gap-1">
            Made with <Heart size={14} className="text-red-400 fill-red-400" /> by Prabin Joshi © {new Date().getFullYear()}
          </p>
          <div className="flex gap-6">
            {['Home', 'About', 'Skills', 'Projects', 'Contact'].map(link => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-sm text-primary-300/60 hover:text-white transition-colors"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

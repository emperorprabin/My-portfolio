import { Code2, Palette, Zap, Coffee } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const highlights = [
  { icon: Code2, label: 'Clean Code', value: 'Learning', color: 'from-purple-500 to-indigo-500' },
  { icon: Palette, label: 'UI/UX Design', value: 'Building Scalable Projects', color: 'from-pink-500 to-rose-500' },
  { icon: Zap, label: 'Performance', value: 'Overall Average', color: 'from-amber-500 to-orange-500' },
  { icon: Coffee, label: 'Coffee Consumed', value: '∞ Cups', color: 'from-emerald-500 to-teal-500' },
];

export default function About() {
  const { ref, inView } = useInView(0.2);

  return (
    <section id="about" className="relative py-24 sm:py-32 bg-mesh" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className={`text-center mb-16 ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <span className="text-primary-400 font-mono text-sm tracking-widest uppercase">About Me</span>
          <h2 className="text-4xl sm:text-5xl font-bold mt-3 text-white">
            Turning Ideas Into <span className="text-gradient">Reality</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div className={`space-y-6 ${inView ? 'animate-fade-in-left' : 'opacity-0'}`}>
            <p className="text-lg text-primary-200/80 leading-relaxed">
              I'm a passionate full-stack developer building web 
              applications that are both beautiful and functional. 
              I believe in writing clean, maintainable code that stands the test of time.
            </p>
            <p className="text-lg text-primary-200/80 leading-relaxed">
              My journey started with curiosity about how websites work, and it's grown into
              a deep love for crafting digital experiences. From responsive frontends to
              scalable backends, I enjoy every part of the development process.
            </p>
            <p className="text-lg text-primary-200/80 leading-relaxed">
              When I'm not coding, you'll find me contributing to open-source projects,
              writing technical blog posts, or exploring new technologies. I'm always eager
              to learn and grow as a developer.
            </p>

            <div className="flex flex-wrap gap-3 pt-4">
              {['React', 'TypeScript', 'Node.js', 'Python', 'AWS', 'Docker'].map(tech => (
                <span key={tech} className="px-4 py-2 glass rounded-full text-sm text-primary-300 font-medium hover:text-white hover:bg-primary-600/20 transition-all cursor-default">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Stats cards */}
          <div className={`grid grid-cols-2 gap-4 ${inView ? 'animate-fade-in-right' : 'opacity-0'}`}>
            {highlights.map((item, i) => (
              <div
                key={item.label}
                className="glass glass-hover rounded-2xl p-6 text-center group hover:-translate-y-2 transition-all duration-500"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className={`w-14 h-14 mx-auto mb-4 rounded-xl bg-linear-to-br ${item.color} flex items-center justify-center
                  group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <item.icon size={24} className="text-white" />
                </div>
                <div className="text-2xl font-bold text-white mb-1">{item.value}</div>
                <div className="text-sm text-primary-300">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

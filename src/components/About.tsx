//import { Code2, Palette, Zap, Coffee } from 'lucide-react';
import { useInView } from '../hooks/useInView';

/*const highlights = [
  { icon: Code2, label: 'Clean Code', value: 'Learning', color: 'from-purple-500 to-indigo-500' },
  { icon: Palette, label: 'UI/UX Design', value: 'Building Scalable Projects', color: 'from-pink-500 to-rose-500' },
  { icon: Zap, label: 'Performance', value: 'Overall Average', color: 'from-amber-500 to-orange-500' },
  { icon: Coffee, label: 'Coffee Consumed', value: '∞ Cups', color: 'from-emerald-500 to-teal-500' },
];*/

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

        <div className="flex flex-col items-center gap-12">
          {/* Text */}
          <div className={`space-y-6 ${inView ? 'animate-fade-in-left' : 'opacity-0'}`}>
          <div className="flex justify-center">
          <div className="max-w-2xl text-center">
            <p className="text-lg text-primary-200/80 leading-relaxed">
              I am a passionate Full-Stack Developer dedicated to building modern, scalable, and user-friendly web applications.
              I enjoy transforming ideas into seamless digital experiences by combining intuitive frontend design with powerful backend functionality.
              My focus is on creating applications that are visually appealing, responsive, efficient, and optimized to deliver exceptional user experiences across all devices.
            </p>

            <p className="text-lg text-primary-200/80 leading-relaxed">
              My development philosophy centers on writing clean, maintainable, and well-structured code that is easy to scale and adapt as projects grow.
              I continuously explore new technologies, frameworks, and best practices to improve my skills and deliver high-quality solutions.
              Every project is an opportunity to solve complex problems through thoughtful design and innovative development.
            </p>

            <p className="text-lg text-primary-200/80 leading-relaxed">
              Beyond coding, I am driven by curiosity, creativity, and a commitment to continuous learning.
              I enjoy collaborating with teams, tackling challenging projects, and turning ambitious ideas into reality.
              My goal is to build impactful software that not only meets technical requirements but also provides meaningful value and memorable experiences for users.
            </p>
          </div>
          </div>
        </div>

          <div className="flex justify-center">
            <div className="max-w-2xl text-center">
              {['React', 'TypeScript', 'Node.js', 'Python', 'C++'].map(tech => (
                <span key={tech} className="px-4 py-2 glass rounded-full text-sm text-primary-300 font-medium hover:text-white hover:bg-primary-600/20 transition-all cursor-default">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

          {/* Stats cards */}
          <div className={`grid grid-cols-2 gap-4 ${inView ? 'animate-fade-in-right' : 'opacity-0'}`}>
              {/*{highlights.map((item, i) => (
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
            ))}*/}
          </div>
        </div>
    </section>
  );
}

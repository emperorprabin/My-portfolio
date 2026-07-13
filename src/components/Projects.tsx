import { ExternalLink, Star, Code } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const projects = [
  {
    title: 'Auto-reply Chatbot System',
    description: 'An AI-powered chatbot system that automatically responds to user\'s messages using natural language processing and machine learning algorithms.',
    tech: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'Redis'],
    gradient: 'from-purple-600/20 to-pink-600/20',
    border: 'hover:border-purple-500/30',
    stars: 128,
    emoji: '💬',
  },
  {
    title: 'Virtual Assistant Jarvis',
    description: 'An intelligent AI enforced virtual assistant that can perform tasks, answer questions, and provide information using voice commands and natural language understanding.',
    tech: ['Python', 'TensorFlow', 'FastAPI', 'React', 'WebSocket'],
    gradient: 'from-blue-600/20 to-cyan-600/20',
    border: 'hover:border-blue-500/30',
    stars: 256,
    emoji: '🤖',
  },
];

export default function Projects() {
  const { ref, inView } = useInView(0.1);

  return (
    <section id="projects" className="relative py-24 sm:py-32 bg-mesh" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-16 ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <span className="text-primary-400 font-mono text-sm tracking-widest uppercase">Portfolio</span>
          <h2 className="text-4xl sm:text-5xl font-bold mt-3 text-white">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="mt-4 text-primary-200/60 text-lg max-w-2xl mx-auto">
            A selection of projects I've built and contributed to
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <div
              key={project.title}
              className={`group glass rounded-2xl overflow-hidden hover:-translate-y-2 transition-all duration-500 ${project.border} border border-transparent ${
                inView ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {/* Card top gradient */}
              <div className={`h-48 bg-linear-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden`}>
                <div className="absolute inset-0 bg-linear-to-b from-transparent to-dark-400/60" />
                <span className="text-7xl relative z-10 group-hover:scale-125 transition-transform duration-500">
                  {project.emoji}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-white group-hover:text-primary-300 transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-1 text-yellow-400 text-sm">
                    <Star size={14} fill="currentColor" />
                    <span>{project.stars}</span>
                  </div>
                </div>
                <p className="text-primary-200/60 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map(t => (
                    <span key={t} className="px-3 py-1 bg-primary-600/10 rounded-full text-xs text-primary-300 font-medium border border-primary-500/10">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <button className="flex items-center gap-2 px-4 py-2 glass rounded-xl text-sm text-primary-200 hover:text-white hover:bg-primary-600/20 transition-all">
                    <Code size={16} /> Code
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2 glass rounded-xl text-sm text-primary-200 hover:text-white hover:bg-primary-600/20 transition-all">
                    <ExternalLink size={16} /> Demo
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

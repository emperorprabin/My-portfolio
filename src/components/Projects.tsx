import { useInView } from '../hooks/useInView';
import SectionBackground from './SectionBackground';

const projects = [
  {
    title: 'Auto-reply Chatbot System',
    description: 'An AI-powered chatbot system that automatically responds to user\'s messages using natural language processing and machine learning algorithms.',
    tech: ['Python'],
    gradient: 'from-purple-600/20 to-pink-600/20',
    border: 'hover:border-purple-500/30',
    emoji: '💬',
    githubUrl:'https://github.com/emperorprabin/Autoreply-chatbot'
  },
  {
    title: 'Personal Virtual Assistant Jarvis',
    description: 'An intelligent AI enforced virtual assistant that can perform tasks, answer questions, and provide information using voice commands and natural language understanding.',
    tech: ['Python'],
    gradient: 'from-blue-600/20 to-cyan-600/20',
    border: 'hover:border-blue-500/30',
    emoji: '🤖',
    githubUrl:'https://github.com/emperorprabin/AI-enforced-chat-assistant-Jarvis'
  },
];

export default function Projects() {
  const { ref} = useInView(0.1);

  return (
    <section id="projects" className="relative py-24 sm:py-32" ref={ref}>
      <SectionBackground />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-primary-400 font-mono text-sm tracking-widest uppercase">Portfolio</span>
          <h2 className="text-4xl sm:text-5xl font-bold mt-3 text-white">
            Featured <span className="text-white">Projects</span>
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
              className={`group glass rounded-2xl overflow-hidden hover:-translate-y-2 transition-all duration-500 ${project.border} border`}
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
                  <h3 className="text-xl font-bold text-white transition-colors">
                    {project.title}
                  </h3>
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
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-1.5 bg-primary-600/10 hover:bg-primary-600/20 rounded-full text-sm place-items-center text-primary-300 transition-colors"
                  >
                    {"<Code>"}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

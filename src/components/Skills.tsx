import { useInView } from '../hooks/useInView';

interface Skill {
  name: string;
  level: number;
  color: string;
  icon: string;
  category: string;
}

const skills: Skill[] = [
  // Frontend
  { name: 'JavaScript', level: 95, color: 'from-yellow-400 to-yellow-600', icon: '⚡', category: 'Frontend' },
  { name: 'TypeScript', level: 90, color: 'from-blue-400 to-blue-600', icon: '🔷', category: 'Frontend' },
  { name: 'React', level: 92, color: 'from-cyan-400 to-cyan-600', icon: '⚛️', category: 'Frontend' },
  { name: 'HTML/CSS', level: 95, color: 'from-orange-400 to-red-500', icon: '🎨', category: 'Frontend' },
  { name: 'Next.js', level: 85, color: 'from-gray-400 to-gray-600', icon: '▲', category: 'Frontend' },
  { name: 'Tailwind CSS', level: 93, color: 'from-teal-400 to-teal-600', icon: '💨', category: 'Frontend' },

  // Backend
  { name: 'Python', level: 88, color: 'from-green-400 to-emerald-600', icon: '🐍', category: 'Backend' },
  { name: 'Node.js', level: 87, color: 'from-lime-400 to-green-600', icon: '🟢', category: 'Backend' },
  { name: 'Java', level: 75, color: 'from-red-400 to-red-600', icon: '☕', category: 'Backend' },
  { name: 'Go', level: 70, color: 'from-sky-400 to-sky-600', icon: '🔵', category: 'Backend' },
  { name: 'Rust', level: 60, color: 'from-orange-500 to-orange-700', icon: '🦀', category: 'Backend' },
  { name: 'C++', level: 65, color: 'from-indigo-400 to-indigo-600', icon: '⚙️', category: 'Backend' },

  // Tools & Others
  { name: 'SQL/PostgreSQL', level: 85, color: 'from-blue-500 to-indigo-600', icon: '🗄️', category: 'Tools' },
  { name: 'Docker', level: 80, color: 'from-blue-400 to-blue-500', icon: '🐳', category: 'Tools' },
  { name: 'Git', level: 92, color: 'from-orange-400 to-orange-600', icon: '📦', category: 'Tools' },
  { name: 'AWS', level: 78, color: 'from-amber-400 to-amber-600', icon: '☁️', category: 'Tools' },
  { name: 'GraphQL', level: 82, color: 'from-pink-400 to-pink-600', icon: '◈', category: 'Tools' },
  { name: 'MongoDB', level: 80, color: 'from-green-500 to-green-700', icon: '🍃', category: 'Tools' },
];

function SkillBar({ skill, delay, animate }: { skill: Skill; delay: number; animate: boolean }) {
  return (
    <div
      className={`glass glass-hover rounded-2xl p-5 group hover:-translate-y-1 transition-all duration-500 ${
        animate ? 'animate-fade-in-up' : 'opacity-0'
      }`}
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-3">
          <span className="text-2xl">{skill.icon}</span>
          <span className="font-semibold text-white text-sm sm:text-base">{skill.name}</span>
        </div>
        <span className="text-sm font-mono font-bold text-primary-300">{skill.level}%</span>
      </div>
      <div className="h-2.5 bg-dark-300 rounded-full overflow-hidden">
        <div
          className={`h-full rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ${
            animate ? 'animate-progress-fill' : ''
          }`}
          style={{ width: animate ? `${skill.level}%` : '0%', animationDelay: `${delay + 0.3}s` }}
        />
      </div>
    </div>
  );
}



export default function Skills() {
  const { ref, inView } = useInView(0.1);

  const categories = ['Frontend', 'Backend', 'Tools'];

  return (
    <section id="skills" className="relative py-24 sm:py-32" ref={ref}>
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-500/30 to-transparent" />
      <div className="absolute top-1/3 right-0 w-72 h-72 bg-primary-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 left-0 w-72 h-72 bg-accent-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className={`text-center mb-16 ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <span className="text-primary-400 font-mono text-sm tracking-widest uppercase">My Skills</span>
          <h2 className="text-4xl sm:text-5xl font-bold mt-3 text-white">
            Technologies & <span className="text-gradient">Expertise</span>
          </h2>
          <p className="mt-4 text-primary-200/60 text-lg max-w-2xl mx-auto">
            Here's a snapshot of the programming languages, frameworks, and tools I work with
          </p>
        </div>

        {/* Skills by category */}
        {categories.map((category) => {
          const categorySkills = skills.filter(s => s.category === category);
          return (
            <div key={category} className="mb-12">
              <h3 className={`text-xl font-bold text-primary-300 mb-6 flex items-center gap-3 ${inView ? 'animate-fade-in-left' : 'opacity-0'}`}>
                <span className="w-8 h-0.5 bg-gradient-to-r from-primary-500 to-transparent" />
                {category === 'Frontend' ? '🎯 Frontend' : category === 'Backend' ? '🛠️ Backend' : '🔧 Tools & DevOps'}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {categorySkills.map((skill, i) => (
                  <SkillBar
                    key={skill.name}
                    skill={skill}
                    delay={i * 0.1}
                    animate={inView}
                  />
                ))}
              </div>
            </div>
          );
        })}

        {/* Skill level legend */}
        <div className={`mt-12 glass rounded-2xl p-6 flex flex-wrap items-center justify-center gap-6 ${inView ? 'animate-fade-in-up delay-500' : 'opacity-0'}`}>
          <span className="text-sm text-primary-300 font-medium">Proficiency Level:</span>
          {[
            { label: 'Expert', range: '90-100%', color: 'bg-green-500' },
            { label: 'Advanced', range: '75-89%', color: 'bg-blue-500' },
            { label: 'Intermediate', range: '60-74%', color: 'bg-yellow-500' },
            { label: 'Learning', range: '<60%', color: 'bg-orange-500' },
          ].map(level => (
            <div key={level.label} className="flex items-center gap-2 text-sm text-primary-200/70">
              <span className={`w-3 h-3 rounded-full ${level.color}`} />
              <span>{level.label}</span>
              <span className="font-mono text-xs text-primary-400">({level.range})</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

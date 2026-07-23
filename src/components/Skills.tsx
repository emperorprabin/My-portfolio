import { useInView } from '../hooks/useInView';
import SectionBackground from './SectionBackground';

const categories = [
  {
    title: 'Frontend',
    icon: '🎯',
    skills: [
      { icon: '⚡', name: 'JavaScript' },
      { icon: '🔷', name: 'TypeScript' },
      { icon: '⚛️', name: 'React' },
      { icon: '🎨', name: 'HTML/CSS' },
    ],
  },
  {
    title: 'Backend',
    icon: '🛠️',
    skills: [
      { icon: '🐍', name: 'Python' },
      { icon: '🟢', name: 'Node.js' },
      { icon: '⚙️', name: 'C++' },
    ],
  },
  {
    title: 'Tools & DevOps',
    icon: '🔧',
    skills: [
      { icon: '🗄️', name: 'SQL' },
      { icon: '📦', name: 'Git' },
      { icon: '🔷', name: 'Numpy' },
      { icon: '📊', name: 'Pandas' },
      { icon: '🔥', name: 'PyTorch' },
    ],
  },
];

function SkillBox({ icon, name }: { icon: string; name: string }) {
  return (
    <div className="flex items-center gap-3 px-5 py-4 rounded-xl border border-white/10 bg-dark-300/40 hover:bg-dark-300/70 transition-all duration-300">
      <span className="text-2xl">{icon}</span>
      <span className="font-medium text-white text-sm sm:text-base">{name}</span>
    </div>
  );
}

export default function Skills() {
  const { ref } = useInView(0.1);

  return (
    <section id="skills" className="relative py-24 sm:py-32" ref={ref}>
      <SectionBackground />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <span className="text-primary-400 font-mono text-sm tracking-widest uppercase">Expertise</span>
          <h2 className="text-4xl sm:text-5xl font-bold mt-3 text-white">
            Skills & <span className="text-white">Tools</span>
          </h2>
        </div>

        <div className="space-y-14">
          {categories.map((cat) => (
            <div key={cat.title}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-px bg-primary-500/50" />
                <span className="text-lg">{cat.icon}</span>
                <h3 className="text-xl font-bold text-white">{cat.title}</h3>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {cat.skills.map((skill) => (
                  <SkillBox key={skill.name} icon={skill.icon} name={skill.name} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
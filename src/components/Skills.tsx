
import { useEffect, useState } from "react";

const skills = [
  { name: "C", level: 95 },
  { name: "C++", level: 90 },
  { name: "Linux", level: 85 },
  { name: "Data Structures", level: 88 },
  { name: "Algorithms", level: 85 },
  { name: "Git", level: 80 },
  { name: "Python", level: 70 },
  { name: "Java", level: 65 },
  { name: "Docker", level: 75 },
];

const Skills = () => {
  const [animateSkills, setAnimateSkills] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('skills');
      if (element) {
        const position = element.getBoundingClientRect();
        // If skills section is visible
        if (position.top < window.innerHeight && position.bottom >= 0) {
          setAnimateSkills(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Check on initial load too
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-terminal-dark to-black relative">
      {/* Matrix code rain effect in background */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <pre className="text-xs text-terminal-green font-mono leading-3">
          {Array(20).fill('').map((_, i) => (
            <div key={i} style={{ 
              animation: `scrollDown ${Math.random() * 10 + 5}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`,
              position: 'absolute',
              left: `${Math.random() * 100}%`,
            }}>
              {Array(20).fill('').map((_, j) => (
                <div key={j}>
                  {Math.random() > 0.5 ? '0' : '1'}
                  {Math.random() > 0.5 ? '0' : '1'}
                  {Math.random() > 0.5 ? '0' : '1'}
                </div>
              ))}
            </div>
          ))}
        </pre>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gradient-green text-center">
            <span className="text-terminal-muted">#</span> Technical Skills
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Skills bars */}
            <div className="glass-panel p-6">
              <h3 className="text-xl text-terminal-blue mb-6 font-semibold">Programming & Technologies</h3>
              <div className="space-y-6">
                {skills.slice(0, 5).map((skill, index) => (
                  <SkillBar 
                    key={skill.name} 
                    name={skill.name} 
                    level={skill.level} 
                    index={index}
                    animate={animateSkills}
                  />
                ))}
              </div>
            </div>

            <div className="glass-panel p-6">
              <h3 className="text-xl text-terminal-green mb-6 font-semibold">Tools & Frameworks</h3>
              <div className="space-y-6">
                {skills.slice(5).map((skill, index) => (
                  <SkillBar 
                    key={skill.name} 
                    name={skill.name} 
                    level={skill.level} 
                    index={index}
                    animate={animateSkills}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="mt-16">
            <div className="terminal-window">
              <div className="terminal-header">
                <div className="terminal-dot bg-red-500"></div>
                <div className="terminal-dot bg-yellow-500"></div>
                <div className="terminal-dot bg-green-500"></div>
                <div className="ml-4 text-xs text-terminal-muted">skills.json</div>
              </div>
              
              <div className="p-6 overflow-x-auto">
                <pre className="text-xs md:text-sm">
                  <code className="language-json">
                    <span className="text-terminal-muted">{'{'}</span><br />
                    <span className="text-terminal-green pl-4">"languages"</span>
                    <span className="text-terminal-muted">: [</span><br />
                    <span className="text-terminal-blue pl-8">"C", "C++", "Python", "Java", "JavaScript"</span><br />
                    <span className="text-terminal-muted pl-4">],</span><br />
                    <span className="text-terminal-green pl-4">"environments"</span>
                    <span className="text-terminal-muted">: [</span><br />
                    <span className="text-terminal-blue pl-8">"Linux", "Windows", "Embedded Systems"</span><br />
                    <span className="text-terminal-muted pl-4">],</span><br />
                    <span className="text-terminal-green pl-4">"tools"</span>
                    <span className="text-terminal-muted">: [</span><br />
                    <span className="text-terminal-blue pl-8">"Git", "Docker", "VS Code", "Vim"</span><br />
                    <span className="text-terminal-muted pl-4">],</span><br />
                    <span className="text-terminal-green pl-4">"specialization"</span>
                    <span className="text-terminal-muted">: [</span><br />
                    <span className="text-terminal-blue pl-8">"System Programming", "Big Data", "Multithreading", </span><br />
                    <span className="text-terminal-blue pl-8">"Networking", "Operating Systems", "Kernel Modules"</span><br />
                    <span className="text-terminal-muted pl-4">]</span><br />
                    <span className="text-terminal-muted">{'}'}</span>
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const SkillBar = ({ 
  name, 
  level, 
  index,
  animate
}: { 
  name: string; 
  level: number; 
  index: number;
  animate: boolean;
}) => {
  
  return (
    <div>
      <div className="flex justify-between mb-2">
        <span className="text-sm text-gray-300 font-medium">{name}</span>
        <span className="text-xs text-terminal-muted">{level}%</span>
      </div>
      <div className="h-2.5 bg-gray-700 rounded-full overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-terminal-green to-terminal-blue transition-all duration-1000 ease-out"
          style={{ 
            width: animate ? `${level}%` : '0%',
            transitionDelay: `${index * 150}ms`
          }}
        ></div>
      </div>
    </div>
  );
};

export default Skills;

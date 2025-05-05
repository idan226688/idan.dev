
import { Terminal, Code, Database, Server } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-terminal-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%226%22%20height%3D%226%22%20viewBox%3D%220%200%206%206%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22%230CFA68%22%20fill-opacity%3D%220.1%22%20fill-rule%3D%22evenodd%22%3E%3Cpath%20d%3D%22M5%200h1L0%205v1H0V0zm0%200v5h1V1L1%200z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-30"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient-green text-center">
            <span className="text-terminal-muted">//</span> About Me
          </h2>
          
          <div className="mb-10 terminal-window p-6">
            <div className="prose text-gray-300 space-y-4 max-w-none">
              <p>
                I'm a software developer with a bachelor's degree in Computer Science and specialized expertise
                in C and C++ programming. I have a passion for system-level programming, embedded systems, backend developement and creating
                efficient, high-performance solutions.
              </p>
              
              <p>
                With a strong foundation in data structures, algorithms, and operating systems,
                I approach complex problems with analytical thinking and creative problem-solving.
                I enjoy collaborating in dynamic team environments and continuously learning new
                technologies and methods.
              </p>
              
              <p>
                My background in Big Data gives me additional insights into handling and analyzing
                large-scale datasets, while my recent intensive bootcamp experience has further
                sharpened my skills in Linux environments, networking, and multithreading.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            <ExpertiseCard 
              icon={<Terminal className="h-8 w-8 text-terminal-green" />}
              title="System Programming"
              description="Developing efficient, low-level software that interacts directly with hardware and operating systems."
            />
            
            <ExpertiseCard 
              icon={<Code className="h-8 w-8 text-terminal-blue" />}
              title="C/C++ Development"
              description="Creating high-performance applications and libraries with a focus on memory management and optimization."
            />
            
            <ExpertiseCard 
              icon={<Database className="h-8 w-8 text-terminal-pink" />}
              title="Big Data Analysis"
              description="Processing and analyzing large-scale datasets to extract meaningful insights and patterns."
            />
            
            <ExpertiseCard 
              icon={<Server className="h-8 w-8 text-terminal-yellow" />}
              title="Embedded Systems"
              description="Building software for specialized computing systems with real-time constraints."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const ExpertiseCard = ({ icon, title, description }: { 
  icon: React.ReactNode; 
  title: string; 
  description: string 
}) => {
  return (
    <div className="glass-panel p-6 transition-all duration-300 hover:shadow-[0_0_15px_rgba(12,250,104,0.2)] group">
      <div className="flex flex-col items-center text-center">
        <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-3 text-terminal-green group-hover:text-glow">
          {title}
        </h3>
        <p className="text-gray-400 text-sm">
          {description}
        </p>
      </div>
    </div>
  );
};

export default About;

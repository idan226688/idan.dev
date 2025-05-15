
import { ArrowRight } from "lucide-react";
import { useState } from "react";

const projects = [
  {
    title: "IoT Cloud File Storage System",
    description: "Distributed IoT file storage system using RAID 0+1 architecture, written in C and C++",
    tags: ["C", "C++", "IoT", "Distributed Systems"],
    isPrivate: true,
  },
  {
    title: "Watchdog Software",
    description: "Fault-tolerant, multi-threaded watchdog program in C to monitor and restart critical processes",
    tags: ["C", "Multithreading", "Fault Tolerance"],
    isPrivate: true,
  },
  {
    title: "Bacteria Level Prediction in Water",
    description: "Predictive models using Python to estimate bacterial concentrations in water, leveraging data analysis and machine learning techniques",
    tags: ["Python", "Machine Learning", "Big Data", "Analytics"],
    isPrivate: true,
  },
  {
    title: "JobSeek – AI-Powered CV-to-Job Matcher",
    description: "AI-powered backend application that matches CVs to job descriptions using LLMs",
    tags: ["Java", "Spring Boot", "MySQL", "Ollama", "Backend Development"],
    isPrivate: false,
  },
  {
    title: "Portfolio Website",
    description: "Modern, responsive developer portfolio with terminal-inspired design",
    tags: ["React", "TypeScript", "TailwindCSS", "Web Development"],
    isPrivate: false,
  },
  {
    title: "Resume Website",
    description: "A website which shows my cv",
    tags: ["React", "TypeScript", "TailwindCSS", "Web Development"],
    isPrivate: false,
  }
];

const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="projects" className="py-20 bg-black relative">
      {/* Binary pattern background */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%230CFA68%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-50"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gradient-green text-center">
            <span className="text-terminal-muted">$</span> Featured Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div 
                key={project.title}
                className="project-card glass-panel h-full"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="p-6 h-full flex flex-col">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold text-terminal-green">
                      {project.title}
                    </h3>
                    {project.isPrivate && (
                      <span className="text-xs bg-terminal-muted/20 text-terminal-muted px-2 py-1 rounded-full">
                        Private
                      </span>
                    )}
                  </div>
                  
                  <p className="text-gray-400 mb-6 flex-grow">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map(tag => (
                      <span 
                        key={tag} 
                        className="text-xs px-2 py-1 rounded bg-terminal-dark/50 border border-terminal-muted/30 text-terminal-muted"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className={`transition-opacity ${
                    hoveredIndex === index ? 'opacity-100' : 'opacity-0'
                  } duration-300`}>
                    {!project.isPrivate ? (
                      <a 
                        href="#" 
                        className="flex items-center text-sm text-terminal-green hover:underline"
                      >
                        View Project <ArrowRight className="ml-1 h-4 w-4" />
                      </a>
                    ) : (
                      <span className="flex items-center text-sm text-terminal-muted">
                        Private Repository <span className="ml-2 text-xs">🔒</span>
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-terminal-muted mb-4">
              More projects available upon request
            </p>
            <a 
              href="#contact" 
              className="inline-flex items-center text-terminal-green hover:text-glow transition-colors"
            >
              Contact me for details <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

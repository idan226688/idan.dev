
import { useEffect, useState } from "react";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  const [typingComplete, setTypingComplete] = useState(false);
  const [showArrow, setShowArrow] = useState(false);

  useEffect(() => {
    // Simulate typing completion
    const timer = setTimeout(() => {
      setTypingComplete(true);
      // Show the arrow with a slight delay after typing completes
      setTimeout(() => setShowArrow(true), 1000);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden matrix-bg"
    >
      <div className="absolute inset-0 bg-[url('/lovable-uploads/4b0911e2-a243-4182-8fb8-b493dd99163a.png')] opacity-5 z-0"></div>
      
      {/* Matrix-like binary layer */}
      <div 
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%230CFA68' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E")`,
          backgroundSize: '8px 8px'
        }}
      ></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center justify-center">
          <div className="terminal-window w-full max-w-3xl shadow-[0_0_30px_rgba(12,250,104,0.3)]">
            <div className="terminal-header">
              <div className="terminal-dot bg-red-500"></div>
              <div className="terminal-dot bg-yellow-500"></div>
              <div className="terminal-dot bg-green-500"></div>
              <div className="ml-4 text-xs text-terminal-muted">bash ~ idan.hadad</div>
            </div>

            <div className="p-5 md:p-8 font-mono">
              {/* Animation for the first line */}
              <div className="mb-4 overflow-hidden whitespace-nowrap">
                <span className="text-terminal-muted">$</span>
                <span className="text-terminal-green inline-block animate-terminal-typing overflow-hidden whitespace-nowrap"> ./greet.sh</span>
              </div>

              {/* Animation for welcome text, visible after first animation */}
              <div className={`overflow-hidden transition-opacity ${typingComplete ? 'opacity-100' : 'opacity-0'} duration-500`}>
                <div className="mb-6">
                  <span className="text-terminal-pink">[INFO]</span> <span className="text-terminal-blue">Initializing...</span>
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                  <span className="text-gradient-green">Hello, I'm</span><br/>
                  <span className="text-white text-glow">Idan Hadad</span>
                </h1>
                
                <h2 className="text-xl md:text-2xl font-medium mb-6 text-terminal-muted">
                  <span className="text-terminal-yellow">&#123; </span>
                  Software Developer
                  <span className="text-terminal-yellow"> &#125;</span>
                </h2>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  <SkillTag>C/C++</SkillTag>
                  <SkillTag>Linux</SkillTag>
                  <SkillTag>System Programming</SkillTag>
                  <SkillTag>Embedded Systems</SkillTag>
                </div>

                <p className="text-gray-300 mb-8 max-w-xl">
                  I create efficient, high-quality solutions for system-level programming, 
                  application development, and performance optimization.
                </p>

                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
                  <a 
                    href="#contact" 
                    className="px-6 py-3 bg-terminal-green text-terminal-dark font-medium rounded transition-all hover:bg-opacity-90 hover:shadow-[0_0_15px_rgba(12,250,104,0.5)] text-center"
                  >
                    Contact Me
                  </a>
                  <a 
                    href="#projects" 
                    className="px-6 py-3 bg-transparent border border-terminal-green text-terminal-green font-medium rounded transition-all hover:bg-terminal-green/10 text-center"
                  >
                    View Projects
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll down indicator */}
      <div 
        className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-opacity duration-700 ${
          showArrow ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <a 
          href="#about" 
          className="flex flex-col items-center text-terminal-muted hover:text-terminal-green transition-colors"
          aria-label="Scroll down"
        >
          <span className="text-xs mb-2">Scroll Down</span>
          <ArrowDown className="h-5 w-5 animate-bounce" />
        </a>
      </div>
    </section>
  );
};

const SkillTag = ({ children }: { children: React.ReactNode }) => {
  return (
    <span className="px-3 py-1 bg-terminal-dark/80 border border-terminal-green/30 text-terminal-green text-sm rounded-md">
      {children}
    </span>
  );
};

export default Hero;

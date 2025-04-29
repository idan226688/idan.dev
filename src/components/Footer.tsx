
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-black py-8 border-t border-terminal-muted/20">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <div className="text-xl font-bold text-terminal-green">
                &lt;idan.hadad/&gt;
              </div>
              <div className="text-terminal-muted text-sm mt-1">
                Software Developer
              </div>
            </div>
            
            <div className="flex space-x-4">
              <a 
                href="https://github.com/idan226688" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-terminal-muted hover:text-terminal-green transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/idan-hadad-8793a2249/"
                target="_blank"
                rel="noopener noreferrer" 
                className="text-terminal-muted hover:text-terminal-green transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="mailto:idan226688@gmail.com"
                className="text-terminal-muted hover:text-terminal-green transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div className="mt-6 pt-6 border-t border-terminal-muted/20 text-center">
            <p className="text-terminal-muted text-sm">
              &copy; {currentYear} Idan Hadad. All rights reserved.
            </p>
            <p className="text-terminal-muted text-xs mt-2">
              <span className="text-terminal-green">$</span> Built with React & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

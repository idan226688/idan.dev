
import React from 'react';
import { Github, Linkedin, Mail, Phone } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-terminal-dark to-black relative">
      {/* Grid background pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%220%200%2040%2040%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22%230CFA68%22%20fill-opacity%3D%220.05%22%20fill-rule%3D%22evenodd%22%3E%3Cpath%20d%3D%22M0%2038.59l2.83-2.83%201.41%201.41L1.41%2040H0v-1.41zM0%2020.83l2.83-2.83%201.41%201.41L1.41%2022.24H0v-1.41zM0%203.07l2.83-2.83%201.41%201.41L1.41%204.48H0V3.07zm20.83%2036.34l2.83-2.83%201.41%201.41L22.24%2040h-1.41v-1.41zm0-17.76l2.83-2.83%201.41%201.41-2.83%202.83h-1.41v-1.41zM20.83%202.83l2.83-2.83%201.41%201.41-2.83%202.83h-1.41V2.83zM3.07%200v1.41L1.41%200H3.07zm17.76%200v1.41L19.17%200h1.66zm-17.76%2020.83v1.41L1.41%2020.83h1.66zm17.76%200v1.41l-1.66-1.41h1.66zM3.07%2038.59v1.41L1.41%2038.59h1.66zm17.76%200v1.41l-1.66-1.41h1.66z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-50"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gradient-green text-center">
            <span className="text-terminal-muted">@</span> Let's Connect
          </h2>

          <div className="flex justify-center">
            {/* Contact Info */}
            <div className="max-w-xl w-full">
              <div className="terminal-window h-full">
                <div className="terminal-header">
                  <div className="terminal-dot bg-red-500"></div>
                  <div className="terminal-dot bg-yellow-500"></div>
                  <div className="terminal-dot bg-green-500"></div>
                  <div className="ml-4 text-xs text-terminal-muted">contact_details.sh</div>
                </div>

                <div className="p-6 h-full flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-terminal-green mb-6">
                      Get in touch
                    </h3>
                    <p className="text-gray-300 mb-8">
                      Feel free to reach out for collaborations, job opportunities, or just to say hello!
                      I'm always open to discussing new projects and ideas.
                    </p>
                    
                    <div className="space-y-6">
                      <ContactItem 
                        icon={<Phone className="h-5 w-5" />} 
                        label="Phone" 
                        value="+972-50-4009634" 
                        href="tel:+972504009634"
                      />
                      
                      <ContactItem 
                        icon={<Mail className="h-5 w-5" />} 
                        label="Email" 
                        value="idan226688@gmail.com" 
                        href="mailto:idan226688@gmail.com"
                      />
                      
                      <ContactItem 
                        icon={<Github className="h-5 w-5" />} 
                        label="GitHub" 
                        value="github.com/idan226688" 
                        href="https://github.com/idan226688"
                      />
                      
                      <ContactItem 
                        icon={<Linkedin className="h-5 w-5" />} 
                        label="LinkedIn" 
                        value="linkedin.com/in/idan-hadad-8793a2249" 
                        href="https://www.linkedin.com/in/idan-hadad-8793a2249/"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactItem = ({ 
  icon, 
  label, 
  value, 
  href 
}: { 
  icon: React.ReactNode; 
  label: string; 
  value: string; 
  href: string;
}) => {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="flex items-center group hover:bg-terminal-dark/50 p-2 -mx-2 rounded-md transition-colors"
    >
      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-terminal-dark/50 text-terminal-green group-hover:text-terminal-blue transition-colors">
        {icon}
      </div>
      <div className="ml-4">
        <p className="text-xs text-terminal-muted">{label}</p>
        <p className="text-sm text-gray-300 group-hover:text-terminal-green transition-colors">
          {value}
        </p>
      </div>
    </a>
  );
};

export default Contact;

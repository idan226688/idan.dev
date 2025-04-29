
const education = [
  {
    degree: "Bachelor of Science (B.Sc.) in Computer Science",
    institution: "Ruppin Academic Center",
    period: "October 2019 – August 2022",
    details: [
      "Graduated with a GPA of 86.21.",
      "Big Data Specialization: Gained expertise in algorithms, tools, and technologies to process, analyze, and derive insights from large-scale datasets."
    ]
  },
  {
    degree: "Software Development Bootcamp",
    institution: "InfinityLabs R&D",
    period: "January 2024 – November 2024",
    details: [
      "Gained in-depth experience in C and C++ programming within a Linux environment, with a strong focus on data structures, embedded systems, networking, multithreading, operating systems, kernel modules, object-oriented programming (OOP), design patterns, and algorithms.",
      "Enhanced problem-solving and debugging skills by building real-world applications, practicing Agile methodologies and collaborating within a team to deliver quality software solutions."
    ]
  }
];

const Education = () => {
  return (
    <section id="education" className="py-20 bg-gradient-to-b from-black to-terminal-dark relative overflow-hidden">
      {/* Circuit pattern background */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%22100%22%20height%3D%22100%22%20viewBox%3D%220%200%20100%20100%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M11%2018c3.866%200%207-3.134%207-7s-3.134-7-7-7-7%203.134-7%207%203.134%207%207%207zm48%2025c3.866%200%207-3.134%207-7s-3.134-7-7-7-7%203.134-7%207%203.134%207%207%207zm-43-7c1.657%200%203-1.343%203-3s-1.343-3-3-3-3%201.343-3%203%201.343%203%203%203zm63%2031c1.657%200%203-1.343%203-3s-1.343-3-3-3-3%201.343-3%203%201.343%203%203%203zM34%2090c1.657%200%203-1.343%203-3s-1.343-3-3-3-3%201.343-3%203%201.343%203%203%203zm56-76c1.657%200%203-1.343%203-3s-1.343-3-3-3-3%201.343-3%203%201.343%203%203%203zM12%2086c2.21%200%204-1.79%204-4s-1.79-4-4-4-4%201.79-4%204%201.79%204%204%204zm28-65c2.21%200%204-1.79%204-4s-1.79-4-4-4-4%201.79-4%204%201.79%204%204%204zm23-11c2.76%200%205-2.24%205-5s-2.24-5-5-5-5%202.24-5%205%202.24%205%205%205zm-6%2060c2.21%200%204-1.79%204-4s-1.79-4-4-4-4%201.79-4%204%201.79%204%204%204zm29%2022c2.76%200%205-2.24%205-5s-2.24-5-5-5-5%202.24-5%205%202.24%205%205%205zM32%2063c2.76%200%205-2.24%205-5s-2.24-5-5-5-5%202.24-5%205%202.24%205%205%205zm57-13c2.76%200%205-2.24%205-5s-2.24-5-5-5-5%202.24-5%205%202.24%205%205%205zm-9-21c1.105%200%202-.895%202-2s-.895-2-2-2-2%20.895-2%202%20.895%202%202%202zM60%2091c1.105%200%202-.895%202-2s-.895-2-2-2-2%20.895-2%202%20.895%202%202%202zM35%2041c1.105%200%202-.895%202-2s-.895-2-2-2-2%20.895-2%202%20.895%202%202%202zM12%2060c1.105%200%202-.895%202-2s-.895-2-2-2-2%20.895-2%202%20.895%202%202%202z%22%20fill%3D%22%230CFA68%22%20fill-opacity%3D%220.05%22%20fill-rule%3D%22evenodd%22%2F%3E%3C%2Fsvg%3E')] opacity-40"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gradient-green text-center">
            <span className="text-terminal-muted">&gt;</span> Education
          </h2>

          <div className="terminal-window">
            <div className="terminal-header">
              <div className="terminal-dot bg-red-500"></div>
              <div className="terminal-dot bg-yellow-500"></div>
              <div className="terminal-dot bg-green-500"></div>
              <div className="ml-4 text-xs text-terminal-muted">education_timeline.md</div>
            </div>

            <div className="p-6">
              <div className="space-y-12">
                {education.map((item, index) => (
                  <div 
                    key={index} 
                    className={`relative pl-8 pb-8 ${
                      index !== education.length - 1 ? 'border-l border-terminal-green/30' : ''
                    }`}
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-terminal-green"></div>
                    
                    {/* Content */}
                    <div className="glass-panel p-6">
                      <h3 className="text-xl font-semibold text-terminal-green mb-1">
                        {item.degree}
                      </h3>
                      <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-4 text-sm">
                        <span className="text-white">{item.institution}</span>
                        <span className="hidden md:block text-terminal-muted">|</span>
                        <span className="text-terminal-blue">{item.period}</span>
                      </div>
                      <ul className="list-disc list-inside text-gray-300 space-y-2">
                        {item.details.map((detail, i) => (
                          <li key={i} className="text-sm md:text-base">
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <h3 className="text-xl font-semibold text-terminal-green mb-4">Languages</h3>
            <div className="flex flex-wrap justify-center gap-6">
              <LanguageItem name="Hebrew" level="Native" />
              <LanguageItem name="English" level="Fluent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const LanguageItem = ({ name, level }: { name: string; level: string }) => {
  return (
    <div className="flex flex-col items-center p-4 glass-panel min-w-[120px]">
      <span className="text-white font-medium mb-1">{name}</span>
      <span className="text-xs text-terminal-muted">{level}</span>
    </div>
  );
};

export default Education;

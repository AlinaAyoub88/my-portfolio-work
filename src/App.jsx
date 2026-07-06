import React from 'react';
import Navbar from './components/Navbar';

function App() {
  const email = "alinaayoub88@gmail.com";
  const linkedinUrl = "https://www.linkedin.com/in/alina-ayub-a32a242ba";
  const location = "Pasrur, Sialkot, Pakistan";

  // Agar local public folder mein image hai to uska path variable bana diya
  const profilePic = "/myPic.jpeg"; 

  const projects = [
    {
      title: "Enterprise Task Management System",
      desc: "Designed full SRS documentation and developed a collaborative project board featuring state management and interactive metrics dashboard.",
      tags: ["React", "Context API", "Tailwind CSS", "SRS Management"],
      link: "#"
    },
    {
      title: "E-Commerce Dashboard Framework",
      desc: "A premium frontend analytics control panel optimizing dynamic rendering with high-speed layout reflows.",
      tags: ["React.js", "Vite", "Tailwind v4", "Chart.js"],
      link: "#"
    },
    {
      title: "AI UI Generation Platform",
      desc: "Crafted complete functional specifications and implemented a pixel-perfect dark theme client interface integrated with rest endpoints.",
      tags: ["React", "Modular CSS", "Tailwind", "Git Flow"],
      link: "#"
    }
  ];

  const skills = [
    { name: "React.js & Hooks", level: "90%" },
    { name: "Tailwind CSS (v3/v4)", level: "95%" },
    { name: "Software Requirement Specification (SRS)", level: "88%" },
    { name: "JavaScript (ES6+) / Architecture", level: "85%" },
    { name: "Git Control & Workspace Optimization", level: "80%" }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans antialiased scroll-smooth">
      {/* Global Navbar */}
      <Navbar />
      
      {/* 1. HERO SECTION */}
      <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden">
        {/* Background Glowing Effects */}
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center text-left">
            
            {/* Hero Left Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <span className="text-emerald-400 font-mono tracking-widest text-sm md:text-base uppercase block font-semibold">
                {"< Software Engineer & Frontend Developer />"}
              </span>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
                Hi, I am <span className="text-emerald-400">Alina Ayub</span>. Engineering Scalable Web Experiences With React
              </h1>

              <p className="max-w-2xl mx-auto lg:mx-0 text-slate-400 text-base sm:text-lg leading-relaxed">
                I combine systematic software engineering core principles, architecture design, and comprehensive SRS frameworks with production-ready React and Tailwind structures.
              </p>

              {/* Quick Info Badges */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-3 text-xs font-mono text-slate-400 pt-2">
                <span className="bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-full flex items-center gap-2">
                  📍 {location}
                </span>
                <span className="bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-full flex items-center gap-2">
                  📧 {email}
                </span>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
                <a href="#projects" className="w-full sm:w-auto bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-slate-950 font-bold px-8 py-3.5 rounded-lg transition-all duration-300 shadow-lg shadow-emerald-500/20 text-center">
                  Explore Projects
                </a>
                <a href={linkedinUrl} target="_blank" rel="noreferrer" className="w-full sm:w-auto border border-slate-700 hover:border-emerald-400 hover:bg-slate-900 text-slate-300 hover:text-emerald-400 font-semibold px-8 py-3.5 rounded-lg transition-all duration-300 text-center">
                  LinkedIn Profile
                </a>
              </div>
            </div>

            {/* Hero Right: Modern Smooth Rounded Image Container */}
            <div className="lg:col-span-5 flex justify-center relative">
              <div className="relative w-64 h-64 sm:w-80 sm:h-80">
                {/* Clean soft background glow behind picture */}
                <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500 to-cyan-500 rounded-full blur-xl opacity-20 pointer-events-none"></div>
                
                {/* Border Ring container */}
                <div className="w-full h-full rounded-full p-1.5 bg-gradient-to-tr from-slate-800 via-emerald-500/40 to-slate-800 shadow-2xl">
                  <div className="w-full h-full rounded-full overflow-hidden bg-slate-900">
                    <img 
                      src={profilePic} 
                      alt="Alina Ayub" 
                      className="w-full h-full object-cover transition-all duration-500 transform hover:scale-105"
                      onError={(e) => {
                        // Agar file missing ho ya naam galat ho to fallback image load ho jaye crash na ho
                        e.target.src = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600";
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. ABOUT & SKILLS SECTION */}
      <section id="about" className="py-24 border-t border-slate-900 bg-slate-900/20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 flex items-center gap-3">
                <span className="text-emerald-400">01.</span> Professional Overview
              </h2>
              <p className="text-slate-400 leading-relaxed text-base sm:text-lg">
                As a software engineer, my core philosophy centers on writing clean, self-documenting code backed by strategic requirements analysis. I excel at parsing complex client specifications into functional SRS structures before executing frontend builds.
              </p>
              <p className="text-slate-400 leading-relaxed text-base sm:text-lg">
                Based out of {location}, I manage localized and remote system analysis workflows with complete dedication to high product quality and modern UI performance.
              </p>
            </div>

            <div className="space-y-6 bg-slate-900/80 p-6 sm:p-8 rounded-2xl border border-slate-800">
              <h3 className="text-xl font-bold mb-4 text-emerald-400 font-mono">Core Competencies</h3>
              {skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between text-sm font-medium mb-1.5">
                    <span className="text-slate-300">{skill.name}</span>
                    <span className="text-emerald-400 font-mono">{skill.level}</span>
                  </div>
                  <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                    <div 
                      className="bg-gradient-to-r from-emerald-500 to-cyan-400 h-full rounded-full"
                      style={{ width: skill.level }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* 3. PROJECTS SECTION */}
      <section id="projects" className="py-24 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 flex items-center gap-3">
              <span className="text-emerald-400">02.</span> Projects & Engineering Cases
            </h2>
            <p className="text-slate-400 mt-2 text-base sm:text-lg">A selection of recent applications built from full specs to deployment.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index} 
                className="group bg-slate-900/60 rounded-xl border border-slate-800/80 p-6 hover:border-emerald-500/50 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="text-emerald-400 mb-4 flex justify-between items-center">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                    </svg>
                    <a href={project.link} className="text-slate-400 hover:text-cyan-400 transition-colors">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>

                  <h3 className="text-xl font-bold mb-2 group-hover:text-emerald-400 transition-colors text-slate-100">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6">
                    {project.desc}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag, tIdx) => (
                    <span 
                      key={tIdx} 
                      className="bg-slate-800/60 text-slate-300 text-xs font-mono px-2.5 py-1 rounded border border-slate-700/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 border-t border-slate-900 bg-slate-950 text-center text-xs sm:text-sm text-slate-400 font-mono space-y-2">
        <p>© 2026 ALINA AYUB. Developed with Vite + React + Tailwind CSS.</p>
        <div className="flex justify-center gap-4 text-xs text-slate-500">
          <a href={`mailto:${email}`} className="hover:text-emerald-400 transition-colors">Email</a>
          <span>•</span>
          <a href={linkedinUrl} target="_blank" rel="noreferrer" className="hover:text-emerald-400 transition-colors">LinkedIn</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
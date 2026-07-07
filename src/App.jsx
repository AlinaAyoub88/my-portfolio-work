import React from 'react';

function App() {
  const email = "alinaayoub88@gmail.com";
  const linkedinUrl = "https://www.linkedin.com/in/alina-ayub-a32a242ba";
  const location = "Pasrur, Sialkot, Pakistan";
  const profilePic = "/myPic.jpeg"; 

  const projects = [
    {
      title: "SelfBuilder Mobile App",
      tech: "React Native & Node.js",
      category: "Mobile Application",
      desc: "A fully functional mobile application built from the ground up. It includes advanced systems for routine habit tracking, daily challenges, and a live leadership board to boost user engagement.",
    },
    {
      title: "Dream Home Platform",
      tech: "React.js & Tailwind CSS",
      category: "TechNexus Internship Project",
      desc: "Currently engineering an interactive real estate workspace. Designed and developed frontend search filters, property matching algorithms, and side-by-side comparison tables.",
    },
    {
      title: "Hospital Management System",
      tech: "Java (NetBeans) & MySQL",
      category: "Desktop Database App",
      desc: "Designed an automated application to manage patient workflows. Built secure entry modules, database configurations, and clean screens to record, fetch, and track medical files.",
    },
    {
      title: "3D Hostel Entry Simulation",
      tech: "3D Analogy & Simulation Tool",
      category: "System Simulation",
      desc: "Created a structural simulation to analyze traffic flow and security layouts within a campus hostel system, modeling paths using advanced architectural constraints.",
    }
  ];

  const skills = [
    "Software Engineering",
    "React.js (Frontend)",
    "React Native (Mobile Development)",
    "Node.js (Backend Basics)",
    "Java Programming & NetBeans",
    "MySQL Database Systems",
    "Software Requirement Specification (SRS)",
    "System Documentation"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-tr from-[#0b0c1e] via-[#141233] to-[#25123e] text-slate-100 font-sans overflow-x-hidden selection:bg-pink-500 selection:text-white relative">
      
      {/* Visual Ambient Glows */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none animate-pulse"></div>
      <div className="absolute bottom-20 right-1/4 w-[500px] h-[500px] bg-pink-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      {/* BIGGER & PREMIUM NAVBAR */}
      <nav className="sticky top-0 z-50 w-full py-6 px-8 md:px-16 flex justify-between items-center backdrop-blur-xl bg-[#0c0d21]/60 border-b border-white/10 shadow-lg shadow-black/20">
        <div className="text-3xl font-black tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 drop-shadow-[0_0_15px_rgba(236,72,153,0.3)]">
          ALINA.
        </div>
        <div className="hidden md:flex gap-12 text-base font-semibold tracking-wide text-purple-200">
          <a href="#home" className="hover:text-pink-400 transition-colors duration-300 relative group">
            Home <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-pink-400 transition-all group-hover:w-full"></span>
          </a>
          <a href="#about" className="hover:text-pink-400 transition-colors duration-300 relative group">
            About Me <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-pink-400 transition-all group-hover:w-full"></span>
          </a>
          <a href="#projects" className="hover:text-pink-400 transition-colors duration-300 relative group">
            Projects <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-pink-400 transition-all group-hover:w-full"></span>
          </a>
        </div>
        <a 
          href={`mailto:${email}`} 
          className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-bold px-7 py-3 rounded-full text-sm tracking-wide shadow-lg shadow-pink-500/20 transition-all duration-300 hover:scale-105"
        >
          Let's Talk
        </a>
      </nav>

      {/* 1. HERO SECTION */}
      <section id="home" className="relative z-10 max-w-7xl mx-auto px-8 md:px-16 py-16 md:py-28 flex flex-col-reverse lg:flex-row items-center justify-between gap-16">
        
        {/* Hero Left Content */}
        <div className="w-full lg:w-3/5 space-y-6 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider shadow-[0_0_15px_rgba(34,211,238,0.15)]">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            Frontend Intern at TechNexus
          </div>
          
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-none text-white">
            Software <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 drop-shadow-md">
              Engineer.
            </span>
          </h1>
          
          <p className="text-base sm:text-lg text-purple-200/80 leading-relaxed max-w-xl mx-auto lg:mx-0">
            Hi, my name is Alina Ayub. I am a Software Engineer who specializes in building smooth mobile applications and powerful responsive web systems. I combine logical problem solving with systematic documentation to engineer software that works beautifully.
          </p>
          
          {/* Information Badges */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-3 text-xs font-mono text-purple-200/60">
            <span className="bg-white/5 border border-white/10 px-4 py-2 rounded-xl">📍 {location}</span>
            <span className="bg-white/5 border border-white/10 px-4 py-2 rounded-xl">📧 {email}</span>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
            <a href="#projects" className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-pink-500 via-purple-600 to-cyan-500 text-white font-bold shadow-xl shadow-purple-500/20 transition-all duration-300 hover:scale-[1.03] text-center">
              Explore My Projects
            </a>
            <a href={linkedinUrl} target="_blank" rel="noreferrer" className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 text-white font-bold transition-all text-center">
              LinkedIn Network
            </a>
          </div>
        </div>

        {/* Hero Right: Neon Frame Image */}
        <div className="w-full lg:w-2/5 flex justify-center">
          <div className="relative group w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
            <div className="absolute -inset-2 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 rounded-full blur-xl opacity-40 group-hover:opacity-80 transition duration-700 animate-pulse"></div>
            
            <div className="relative w-full h-full rounded-full border-[6px] border-[#0c0d21] overflow-hidden bg-[#13142e] shadow-2xl">
              <img 
                src={profilePic} 
                alt="Alina Ayub" 
                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                onError={(e) => {
                  e.target.src = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600";
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. ABOUT & EXPERIENCE */}
      <section id="about" className="relative z-10 w-full bg-white/[0.01] border-t border-white/5 py-24">
        <div className="max-w-7xl mx-auto px-8 md:px-16 grid lg:grid-cols-12 gap-16 items-center">
          
          {/* About Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-pink-400 font-mono text-sm uppercase font-bold tracking-widest">Professional Overview</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Engineering Engineering-Grade Core Applications</h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-pink-500 to-cyan-400 rounded-full"></div>
            
            <p className="text-purple-200/80 text-base sm:text-lg leading-relaxed">
              Currently, I am working as a **Frontend Developer Intern at TechNexus**, where I am building the **Dream Home** platform. My responsibilities focus on writing complex logic patterns for comprehensive property searching, dynamic user profile matching, and clear comparison grids.
            </p>
            <p className="text-purple-200/80 text-base sm:text-lg leading-relaxed">
              I emphasize writing comprehensive **Software Requirement Specifications (SRS)** and absolute design guidelines before any production compilation. From building rich native system interfaces to managing desktop schemas, I value structural performance.
            </p>
          </div>

          {/* Skills Checklist Box */}
          <div className="lg:col-span-5 bg-gradient-to-b from-white/10 to-white/[0.02] border border-white/10 backdrop-blur-xl rounded-3xl p-8 shadow-2xl">
            <h3 className="text-xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-cyan-300 font-mono tracking-wider">
              Technical Capabilities
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {skills.map((skill, index) => (
                <div 
                  key={index} 
                  className="bg-[#0b0c1e]/60 border border-purple-500/20 text-purple-200/90 px-4 py-3 rounded-xl text-xs sm:text-sm font-medium flex items-center gap-2 hover:border-pink-500/40 transition-colors"
                >
                  <span className="text-pink-400">✔</span> {skill}
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 3. PROJECTS GRID SECTION */}
      <section id="projects" className="relative z-10 w-full max-w-7xl mx-auto px-8 md:px-16 py-24">
        <div className="text-center mb-16 space-y-4">
          <span className="text-cyan-400 font-mono text-sm uppercase font-bold tracking-widest">My Portfolio</span>
          <h2 className="text-3xl sm:text-5xl font-black text-white">System Applications & Work</h2>
          <p className="text-purple-300 max-w-lg mx-auto text-sm sm:text-base">A comprehensive record of my live cross-platform systems and engineering designs.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((proj, idx) => (
            <div 
              key={idx} 
              className="group relative bg-gradient-to-br from-white/5 to-transparent border border-white/10 backdrop-blur-md rounded-3xl p-8 hover:bg-white/10 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_15px_40px_rgba(236,72,153,0.1)] flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-pink-400 bg-pink-500/10 px-3 py-1 rounded-full border border-pink-500/20">
                    {proj.tech}
                  </span>
                  <span className="text-[11px] font-mono text-purple-400 font-semibold uppercase">
                    {proj.category}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                  {proj.title}
                </h3>
                <p className="text-purple-200/70 text-sm leading-relaxed mb-6">
                  {proj.desc}
                </p>
              </div>
              
              <div className="inline-flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-purple-300 group-hover:text-pink-400 transition-colors pt-4 border-t border-white/5">
                System Active <span>→</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. FOOTER */}
      <footer className="relative z-10 w-full border-t border-white/10 bg-[#070817] py-12 text-center">
        <p className="text-purple-300/50 text-sm mb-4 font-mono">
          © 2026 Alina Ayub. Built professionally with React & Tailwind CSS.
        </p>
        <div className="flex justify-center items-center gap-6 text-sm font-semibold font-mono">
          <a href={`mailto:${email}`} className="text-purple-300 hover:text-pink-400 transition-colors">Contact Email</a>
          <span className="text-slate-800">|</span>
          <a href={linkedinUrl} target="_blank" rel="noreferrer" className="text-purple-300 hover:text-cyan-400 transition-colors">LinkedIn</a>
        </div>
      </footer>

    </div>
  );
}

export default App;
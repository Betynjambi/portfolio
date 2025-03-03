//import React from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code2, Briefcase, User, ChevronDown } from 'lucide-react';
import profile from "/src/assets/images/profile.jpeg";

function App() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution built with React, Node.js, and PostgreSQL. Features include real-time inventory, payment processing, and admin dashboard.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80&w=500",
      tags: ["React", "Node.js", "PostgreSQL"],
      demoUrl: "#",
      codeUrl: "#"
    },
    {
      title: "Task Management App",
      description: "A collaborative task management tool with real-time updates, drag-and-drop interface, and team collaboration features.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=500",
      tags: ["TypeScript", "React", "Socket.io"],
      demoUrl: "#",
      codeUrl: "#"
    },
    {
      title: "AI Content Generator",
      description: "An AI-powered application that helps create and optimize content using natural language processing and machine learning.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=500",
      tags: ["Python", "React", "OpenAI"],
      demoUrl: "#",
      codeUrl: "#"
    },
    {
      title: "Financial Dashboard",
      description: "A comprehensive financial analytics dashboard with real-time data visualization, reporting, and predictive analysis features.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=500",
      tags: ["React", "D3.js", "AWS"],
      demoUrl: "#",
      codeUrl: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Hero Section */}
      <header className="min-h-screen flex flex-col items-center justify-center relative px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
            Betty Njambi
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Full Stack Developer
          </p>
          <div className="flex gap-4 justify-center mb-12">
            <a 
              href="https://github.com/Betynjambi" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
            <a 
              href="https://www.linkedin.com/in/betty-njambi-a934781a6/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a 
              href="mailto:mutungabett@gmail.com" 
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
        <a href="#about" className="absolute bottom-8 animate-bounce">
          <ChevronDown className="w-8 h-8" />
        </a>
      </header>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 mb-8">
            <User className="w-6 h-6 text-blue-400" />
            <h2 className="text-3xl font-bold">About Me</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
          <img
            src={profile}
            alt="Profile"
            className="rounded-lg shadow-xl"
          />
            <div>
              <p className="text-gray-300 leading-relaxed mb-6">
                I'm a results-driven Full Stack Developer passionate about building scalable and secure web applications.
                Proficient in React, Node.js, and modern web technologies, I thrive on solving complex problems and enhancing user experiences.
                Beyond coding, I explore emerging technologies, contribute to open source, and mentor aspiring developers.
              </p>
              <a 
                href="https://bit.ly/3Daitqh"  
                target="_blank"  
                rel="noopener noreferrer"  
                className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg transition-colors"
              >
                View CV
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 bg-gray-800/50">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 mb-12">
            <Code2 className="w-6 h-6 text-blue-400" />
            <h2 className="text-3xl font-bold">Skills</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {['Python', 'JavaScript', 'Node.js', 'Django', 'React', 'AWS'].map((skill) => (
              <div key={skill} className="bg-gray-700/50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">{skill}</h3>
                <div className="w-full bg-gray-600 rounded-full h-2">
                  <div className="bg-blue-500 h-2 rounded-full" style={{ width: '85%' }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 mb-12">
            <Briefcase className="w-6 h-6 text-blue-400" />
            <h2 className="text-3xl font-bold">Projects</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index} 
                className="group relative bg-gray-800 rounded-xl overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent z-10 opacity-60 group-hover:opacity-80 transition-opacity"></div>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="relative p-6 z-20">
                  <h3 className="text-xl font-bold mb-2 text-white group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className="px-3 py-1 text-xs font-medium bg-blue-500/10 text-blue-400 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a 
                      href={project.codeUrl}
                      className="text-gray-300 hover:text-blue-400 flex items-center gap-1 transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      <span className="text-sm">Code</span>
                    </a>
                    <a 
                      href={project.demoUrl}
                      className="text-gray-300 hover:text-blue-400 flex items-center gap-1 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span className="text-sm">Live Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-8 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Betty Njambi. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
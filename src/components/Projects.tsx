
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Database, Cloud, Cpu, Settings, Building, Eye, Heart, Star, Zap } from "lucide-react";

export const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [likedProjects, setLikedProjects] = useState<Set<number>>(new Set());
  const [viewCounts, setViewCounts] = useState<Record<number, number>>({
    1: 234, 2: 187, 3: 156, 4: 89, 5: 67
  });

  const projects = [
    {
      id: 1,
      title: "Drooda - Rental Platform",
      description: "A comprehensive rental platform featuring user authentication, property listings, booking system, and payment integration. Built with modern full-stack architecture.",
      image: "/lovable-uploads/b1557804-f032-4f70-9ab0-e4abc2920181.png",
      technologies: ["React.js", "Node.js", "MySQL", "AWS S3", "JWT"],
      github: "#",
      demo: "https://web.drooda.com",
      icon: Cloud,
      featured: true,
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      title: "Admin Panel - Product Management",
      description: "A comprehensive admin dashboard for product management featuring real-time analytics, inventory tracking, user management, and automated reporting with Material-UI components.",
      image: "/lovable-uploads/95aee955-2dfd-46b6-851e-c44d9e8bc45f.png",
      technologies: ["React.js", "Material-UI", "Node.js", "MySQL", "AWS S3"],
      github: "#",
      demo: "https://admin.drooda.com",
      icon: Settings,
      featured: true,
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 3,
      title: "Kitahara Constructions Portfolio",
      description: "Professional company portfolio website for Kitahara Constructions showcasing company profile, services, and construction projects. Built with modern web technologies for optimal performance.",
      image: "/lovable-uploads/0caf8821-9794-4fb6-9d7d-d95551fd7135.png",
      technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
      github: "#",
      demo: "https://zenith1997.github.io/kitahara-feature1/Kitahara-k/index.html",
      icon: Building,
      featured: true,
      color: "from-green-500 to-blue-500"
    },
    {
      id: 4,
      title: "Influencer Management System",
      description: "Advanced campaign tracking and influencer management platform with analytics dashboard, automated reporting, and real-time collaboration tools.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=300&fit=crop",
      technologies: ["MongoDB", "Campaign Tracking", "Analytics", "Dashboard"],
      github: "#",
      demo: "#",
      icon: Database,
      featured: true,
      color: "from-orange-500 to-red-500"
    },
    {
      id: 5,
      title: "Smart Glove - ATmega32",
      description: "IoT-based gesture recognition system for real-time sign language translation. Hardware integration with embedded programming for accessibility solutions.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=500&h=300&fit=crop",
      technologies: ["ATmega32", "C/C++", "IoT", "Gesture Recognition"],
      github: "#",
      demo: "#",
      icon: Cpu,
      featured: false,
      color: "from-teal-500 to-green-500"
    }
  ];

  const handleLike = (projectId: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setLikedProjects(prev => {
      const newSet = new Set(prev);
      if (newSet.has(projectId)) {
        newSet.delete(projectId);
      } else {
        newSet.add(projectId);
      }
      return newSet;
    });
  };

  const handleProjectClick = (project: any) => {
    setViewCounts(prev => ({
      ...prev,
      [project.id]: (prev[project.id] || 0) + 1
    }));
    window.open(project.demo, '_blank');
  };

  return (
    <section id="projects" className="py-20 px-4 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 relative">
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Featured Projects
            </span>
            <div className="absolute -top-4 -right-4 animate-spin">
              <Star className="h-8 w-8 text-purple-400" />
            </div>
          </h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            A collection of projects that showcase my expertise in full-stack development, 
            cloud architecture, and innovative problem-solving.
          </p>
          
          {/* Interactive project filter */}
          {/* <div className="flex justify-center gap-4 mb-8">
            <Button variant="outline" className="group border-blue-400/50 text-blue-400 hover:bg-blue-400/20">
              <Zap className="h-4 w-4 mr-2 group-hover:animate-pulse" />
              All Projects
            </Button>
            <Button variant="outline" className="border-purple-400/50 text-purple-400 hover:bg-purple-400/20">
              Featured Only
            </Button>
          </div> */}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.id}
              className="group relative overflow-hidden bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer"
              style={{ animationDelay: `${index * 200}ms` }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              onClick={() => handleProjectClick(project)}
            >
              {/* Dynamic gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
              
              {/* Project Image with advanced effects */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
                />
                
                {/* Overlay effects */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
                <div className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
                
                {/* Floating stats */}
                <div className="absolute top-4 left-4 flex gap-2">
                  <div className="flex items-center gap-1 bg-black/50 backdrop-blur-sm rounded-full px-2 py-1 text-xs text-white">
                    <Eye className="h-3 w-3" />
                    {viewCounts[project.id]}
                  </div>
                  {project.featured && (
                    <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white animate-pulse">
                      ⭐ Featured
                    </Badge>
                  )}
                </div>

                {/* Project icon with animation */}
                <div className="absolute top-4 right-4">
                  <div className={`p-3 bg-gradient-to-r ${project.color} backdrop-blur-sm rounded-lg group-hover:rotate-12 transition-transform duration-300`}>
                    <project.icon className="h-5 w-5 text-white" />
                  </div>
                </div>

                {/* Interactive overlay buttons */}
                <div className={`absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300 ${hoveredProject === project.id ? 'translate-y-0' : 'translate-y-4'}`}>
                  <Button
                    size="sm"
                    className="bg-black/70 backdrop-blur-sm hover:bg-black/90 text-white"
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(project.github, '_blank');
                    }}
                  >
                    <Github className="h-4 w-4" />
                  </Button>
                  <Button
                    size="sm"
                    className={`bg-gradient-to-r ${project.color} hover:scale-110 text-white transition-transform duration-200`}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleProjectClick(project);
                    }}
                  >
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Enhanced Project Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                    {project.title}
                  </h3>
                  
                  {/* Interactive like button */}
                  <button
                    onClick={(e) => handleLike(project.id, e)}
                    className={`p-2 rounded-full transition-all duration-300 hover:scale-125 ${
                      likedProjects.has(project.id) 
                        ? 'bg-red-500/20 text-red-400' 
                        : 'bg-gray-500/20 text-gray-400 hover:text-red-400'
                    }`}
                  >
                    <Heart className={`h-4 w-4 ${likedProjects.has(project.id) ? 'fill-current' : ''}`} />
                  </button>
                </div>
                
                <p className="text-gray-400 text-sm mb-4 line-clamp-3 group-hover:text-gray-300 transition-colors duration-300">
                  {project.description}
                </p>

                {/* Enhanced Technologies with hover effects */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="bg-purple-600/20 text-purple-300 border-purple-500/50 text-xs hover:bg-purple-500/30 hover:scale-105 transition-all duration-200 cursor-pointer"
                      style={{ animationDelay: `${techIndex * 100}ms` }}
                    >
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 3 && (
                    <Badge
                      variant="secondary"
                      className="bg-gray-600/20 text-gray-400 border-gray-500/50 text-xs hover:bg-gray-500/30 transition-all duration-200 cursor-pointer"
                    >
                      +{project.technologies.length - 3}
                    </Badge>
                  )}
                </div>

                {/* Enhanced Action Buttons */}
                <div className="flex gap-3">
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 border-blue-500/50 text-blue-400 hover:bg-blue-500/20 hover:border-blue-400 hover:scale-105 transition-all duration-200"
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(project.github, '_blank');
                    }}
                  >
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </Button>
                  <Button
                    size="sm"
                    className={`flex-1 bg-gradient-to-r ${project.color} hover:scale-105 hover:shadow-lg transition-all duration-200`}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleProjectClick(project);
                    }}
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Demo
                  </Button>
                </div>
              </div>

              {/* Animated border */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-gradient-to-r group-hover:from-blue-400/50 group-hover:to-purple-400/50 rounded-lg transition-all duration-500 pointer-events-none"></div>
            </Card>
          ))}
        </div>

        {/* Enhanced View More Button */}
        <div className="text-center mt-12">
          <Button
            size="lg"
            variant="outline"
            className="group border-2 border-blue-400 text-blue-400 hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-400 hover:text-white px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <span className="relative flex items-center">
              View All Projects on GitHub
              <Github className="ml-2 h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
            </span>
          </Button>
        </div>

        {/* Project analytics dashboard */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:bg-white/10 transition-all duration-300 group cursor-pointer">
            <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
              {Object.values(viewCounts).reduce((a, b) => a + b, 0)}
            </div>
            <div className="text-sm text-gray-400">Total Views</div>
          </div>
          <div className="text-center p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:bg-white/10 transition-all duration-300 group cursor-pointer">
            <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
              {likedProjects.size}
            </div>
            <div className="text-sm text-gray-400">Liked Projects</div>
          </div>
          <div className="text-center p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:bg-white/10 transition-all duration-300 group cursor-pointer">
            <div className="text-3xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
              {projects.filter(p => p.featured).length}
            </div>
            <div className="text-sm text-gray-400">Featured</div>
          </div>
          <div className="text-center p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:bg-white/10 transition-all duration-300 group cursor-pointer">
            <div className="text-3xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
              5+
            </div>
            <div className="text-sm text-gray-400">Technologies</div>
          </div>
        </div>
      </div>
    </section>
  );
};

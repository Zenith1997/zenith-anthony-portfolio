
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Database, Cloud, Cpu, Settings } from "lucide-react";

export const Projects = () => {
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
      featured: true
    },
    {
      id: 2,
      title: "Admin Panel - Product Management",
      description: "A comprehensive admin dashboard for product management featuring real-time analytics, inventory tracking, user management, and automated reporting with Material-UI components.",
      image: "/lovable-uploads/92b521f9-369c-4ad8-9b2b-1d030a012418.png",
      technologies: ["React.js", "Material-UI", "Node.js", "MySQL", "AWS S3"],
      github: "#",
      demo: "#",
      icon: Settings,
      featured: true
    },
    {
      id: 3,
      title: "Influencer Management System",
      description: "Advanced campaign tracking and influencer management platform with analytics dashboard, automated reporting, and real-time collaboration tools.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=300&fit=crop",
      technologies: ["MongoDB", "Campaign Tracking", "Analytics", "Dashboard"],
      github: "#",
      demo: "#",
      icon: Database,
      featured: true
    },
    {
      id: 4,
      title: "Smart Glove - ATmega32",
      description: "IoT-based gesture recognition system for real-time sign language translation. Hardware integration with embedded programming for accessibility solutions.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=500&h=300&fit=crop",
      technologies: ["ATmega32", "C/C++", "IoT", "Gesture Recognition"],
      github: "#",
      demo: "#",
      icon: Cpu,
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-4">
          Featured Projects
        </h2>
        <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
          A collection of projects that showcase my expertise in full-stack development, 
          cloud architecture, and innovative problem-solving.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.id}
              className="group overflow-hidden bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <div className="p-2 bg-blue-600/20 backdrop-blur-sm rounded-lg">
                    <project.icon className="h-5 w-5 text-blue-400" />
                  </div>
                </div>
                {project.featured && (
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                      Featured
                    </Badge>
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="bg-purple-600/20 text-purple-300 border-purple-500/50 text-xs"
                    >
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 3 && (
                    <Badge
                      variant="secondary"
                      className="bg-gray-600/20 text-gray-400 border-gray-500/50 text-xs"
                    >
                      +{project.technologies.length - 3}
                    </Badge>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 border-blue-500/50 text-blue-400 hover:bg-blue-500/20"
                    onClick={() => window.open(project.github, '_blank')}
                  >
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </Button>
                  <Button
                    size="sm"
                    className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                    onClick={() => window.open(project.demo, '_blank')}
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Demo
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-slate-900 px-8 py-3 rounded-full transition-all duration-300"
          >
            View All Projects on GitHub
            <Github className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

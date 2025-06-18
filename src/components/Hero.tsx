




import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, Star, Heart, Code, Zap } from "lucide-react";

export const Hero = () => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState<Array<{id: number, x: number, y: number, vx: number, vy: number, opacity: number}>>([]);
  const heroRef = useRef<HTMLElement>(null);
  
  const techStack = [
    "React.js Developer",
    "Node.js Expert", 
    "Spring Boot Architect",
    "AWS Cloud Engineer",
    "Full-Stack Creator",
    "Innovation Builder"
  ];

  // Interactive particle system
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        });
      }
    };

    const createParticle = (x: number, y: number) => {
      const newParticle = {
        id: Date.now() + Math.random(),
        x,
        y,
        vx: (Math.random() - 0.5) * 4,
        vy: (Math.random() - 0.5) * 4,
        opacity: 1
      };
      setParticles(prev => [...prev.slice(-20), newParticle]);
    };

    const handleClick = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        for (let i = 0; i < 5; i++) {
          setTimeout(() => {
            createParticle(
              e.clientX - rect.left + (Math.random() - 0.5) * 50,
              e.clientY - rect.top + (Math.random() - 0.5) * 50
            );
          }, i * 100);
        }
      }
    };

    if (heroRef.current) {
      heroRef.current.addEventListener('mousemove', handleMouseMove);
      heroRef.current.addEventListener('click', handleClick);
    }

    return () => {
      if (heroRef.current) {
        heroRef.current.removeEventListener('mousemove', handleMouseMove);
        heroRef.current.removeEventListener('click', handleClick);
      }
    };
  }, []);

  // Animate particles
  useEffect(() => {
    const interval = setInterval(() => {
      setParticles(prev => prev
        .map(particle => ({
          ...particle,
          x: particle.x + particle.vx,
          y: particle.y + particle.vy,
          opacity: particle.opacity - 0.02
        }))
        .filter(particle => particle.opacity > 0)
      );
    }, 50);

    return () => clearInterval(interval);
  }, []);

  // Enhanced typing animation
  useEffect(() => {
    const text = techStack[currentIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (currentText.length < text.length) {
          setCurrentText(text.slice(0, currentText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 3000);
        }
      } else {
        if (currentText.length === 0) {
          setIsDeleting(false);
          setCurrentIndex((prevIndex) => (prevIndex + 1) % techStack.length);
        } else {
          setCurrentText(currentText.slice(0, -1));
        }
      }
    }, isDeleting ? 80 : 120);

    return () => clearTimeout(timeout);
  }, [currentText, currentIndex, isDeleting, techStack]);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };
    const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" ref={heroRef} className="min-h-screen flex items-center justify-center px-4 py-4 relative overflow-hidden cursor-crosshair">
       {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-black bg-opacity-50 backdrop-blur-md shadow-md">
        <div className="max-w-6xl  px-4 py-6 flex justify-end items-center">
        
          <div className="flex gap-10">
            <a href="#home" className="text-gray-300 hover:text-white transition">Home</a>
            <a href="#education" className="text-gray-300 hover:text-white transition">Education</a>
            <a href="#projects" className="text-gray-300 hover:text-white transition">Projects</a>
            <a href="#about" className="text-gray-300 hover:text-white transition">About</a>
            <a href="#contact" className="text-gray-300 hover:text-white transition">Contact</a>
          </div>
        </div>
      </nav>

      {/* Interactive Background */}
      <div className="absolute inset-0">
        {/* Floating geometric shapes */}
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-r from-blue-400/30 to-purple-600/30 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-gradient-to-r from-purple-400/30 to-pink-600/30 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-700"></div>
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-gradient-to-r from-pink-400/30 to-blue-600/30 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        
        {/* Interactive cursor follower */}
        <div 
          className="absolute w-32 h-32 bg-gradient-to-r from-cyan-400/20 to-blue-600/20 rounded-full filter blur-xl transition-all duration-300 pointer-events-none"
          style={{
            left: mousePosition.x - 64,
            top: mousePosition.y - 64,
            transform: `scale(${mousePosition.x && mousePosition.y ? 1 : 0})`
          }}
        />
        
        {/* Dynamic particles */}
        {particles.map(particle => (
          <div
            key={particle.id}
            className="absolute w-3 h-3 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full pointer-events-none"
            style={{
              left: particle.x,
              top: particle.y,
              opacity: particle.opacity,
              transform: `scale(${particle.opacity})`
            }}
          />
        ))}
      </div>

      <div className="text-center z-10 max-w-4xl mx-auto">
        {/* Enhanced Avatar with interactive glow */}
        <div className="mb-8 relative group">
          <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 p-1 animate-scale-in group-hover:scale-110 transition-all duration-500">
            <div className="w-full h-full rounded-full bg-gradient-to-br from-cyan-400/20 to-purple-600/20 p-1">
             <img src="/zenith-anthony-portfolio/lovable-uploads/0e47ad5a-a6d8-429d-b78b-1ce33ac1d9a7.png"
                alt="Zenith Dabarera"
                className="w-full h-full rounded-full object-cover"/>

              
            </div>
          </div>
          
          {/* Floating status indicators */}
          <div className="absolute -top-2 -right-2 w-16 h-16 bg-green-500 rounded-full flex items-center justify-center animate-bounce group-hover:animate-pulse">
            <span className="text-2xl co">👋</span>
          </div>
          
          {/* Floating skill icons */}
        {/*   <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-blue-600/80 backdrop-blur-sm rounded-full flex items-center justify-center animate-pulse hover:scale-125 transition-transform duration-1300 cursor-pointer">
            <Code className="h-6 w-6 text-white" />
          </div> */}
          {/* <div className="absolute top-4 -right-8 w-10 h-10 bg-purple-600/80 backdrop-blur-sm rounded-full flex items-center justify-center animate-pulse delay-500 hover:scale-125 transition-transform duration-1300 cursor-pointer">
            <Zap className="h-5 w-5 text-white" />
          </div> */}
        </div>

        {/* Enhanced Hero Text with gradient animation */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          <span className="text-white">Hi, I'm </span>
          <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse bg-size-200 bg-pos-0 hover:bg-pos-100 transition-all duration-1000">
            Zenith
          </span>
        </h1>
        
        <h2 className="text-2xl md:text-3xl text-gray-300 mb-4 animate-fade-in delay-300">
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Full-Stack Developer
          </span>
          {" | "}
          <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            Cloud Native
          </span>
          {" | "}
          <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
            Innovation Builder
          </span>
        </h2>

        {/* Enhanced Animated Tech Stack */}
        <div className="text-xl md:text-2xl mb-12 h-8 animate-fade-in delay-500 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-400/20 to-transparent blur-sm"></div>
          <span className="relative bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent font-mono">
            {currentText}
          </span>
          <span className="animate-pulse text-cyan-400">|</span>
        </div>

        {/* Interactive CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in delay-700 mb-8">
          <Button 
            onClick={scrollToProjects}
            size="lg" 
            className="group relative bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/30 to-purple-600/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <span className="relative flex items-center">
              View Projects
              <ArrowDown  className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform duration-3300" />
            </span>
          </Button>
          
          <Button 
            size="lg" 
            variant="outline" 
            className="group border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-slate-900 px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 relative overflow-hidden"
            onClick={() => window.open('https://github.com/Zenith1997/CV/blob/main/Zenith_CV.pdf', '_blank')}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <span className="relative flex items-center">
              Download Resume
              <Star className="ml-2 h-5 w-5 group-hover:rotate-180 transition-transform duration-200" />
            </span>
          </Button>
        </div>

        {/* Interactive stats counter */}
        <div className="grid grid-cols-3 gap-8 max-w-md mx-auto animate-fade-in delay-1000">
          <div className="text-center group cursor-pointer">
            <div className="text-2xl font-bold text-cyan-400 group-hover:scale-125 transition-transform duration-300">2+</div>
            <div className="text-sm text-gray-400">Years Experience</div>
          </div>
          <div className="text-center group cursor-pointer">
            <div className="text-2xl font-bold text-purple-400 group-hover:scale-125 transition-transform duration-300">5+</div>
            <div className="text-sm text-gray-400">Projects Built</div>
          </div>
          <div className="text-center group cursor-pointer">
            <div className="text-2xl font-bold text-pink-400 group-hover:scale-125 transition-transform duration-300">10+</div>
            <div className="text-sm text-gray-400">Technologies</div>
          </div>
        </div>

        {/* Scroll Indicator with interaction */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hover:scale-125 transition-transform duration-1300 cursor-pointer">
          <div className="flex flex-col items-center gap-2">
            <ArrowDown onClick={scrollToAbout} className="h-6 w-6 text-gray-400" />
          </div>
        </div>
      </div>
    </section>
  );
};

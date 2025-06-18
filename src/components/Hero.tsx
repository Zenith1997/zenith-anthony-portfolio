
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Download, ArrowDown } from "lucide-react";

export const Hero = () => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const techStack = [
    "React.js",
    "Node.js", 
    "Spring Boot",
    "AWS",
    "PostgreSQL",
    "MongoDB"
  ];

  useEffect(() => {
    const text = techStack[currentIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (currentText.length < text.length) {
          setCurrentText(text.slice(0, currentText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (currentText.length === 0) {
          setIsDeleting(false);
          setCurrentIndex((prevIndex) => (prevIndex + 1) % techStack.length);
        } else {
          setCurrentText(currentText.slice(0, -1));
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [currentText, currentIndex, isDeleting, techStack]);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-700"></div>
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
      </div>

      <div className="text-center z-10 max-w-4xl mx-auto">
        {/* Avatar */}
        <div className="mb-8 relative">
          <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 p-1 animate-scale-in">
            <img 
              src="/lovable-uploads/0e47ad5a-a6d8-429d-b78b-1ce33ac1d9a7.png" 
              alt="Zenith Dabarera"
              className="w-full h-full rounded-full object-cover"
            />
          </div>
          <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-green-500 rounded-full flex items-center justify-center animate-bounce">
            <span className="text-2xl">👋</span>
          </div>
        </div>

        {/* Hero Text */}
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
          Hi, I'm <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">Zenith</span>
        </h1>
        
        <h2 className="text-2xl md:text-3xl text-gray-300 mb-4 animate-fade-in delay-300">
          Full-Stack Developer | Cloud Native | Builder of Clean & Scalable Systems
        </h2>

        {/* Animated Tech Stack */}
        <div className="text-xl md:text-2xl text-blue-400 mb-12 h-8 animate-fade-in delay-500">
          <span className="font-mono">{currentText}</span>
          <span className="animate-pulse">|</span>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in delay-700">
          <Button 
            onClick={scrollToProjects}
            size="lg" 
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
          >
            View Projects
            <ArrowDown className="ml-2 h-5 w-5" />
          </Button>
          
          <Button 
            size="lg" 
            variant="outline" 
            className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-slate-900 px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
            onClick={() => window.open('https://github.com/Zenith1997/CV/blob/main/Zenith_CV.pdf', '_blank')}
          >
            Download Resume
            <Download className="ml-2 h-5 w-5" />
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-6 w-6 text-gray-400" />
        </div>
      </div>
    </section>
  );
};

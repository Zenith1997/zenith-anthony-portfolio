
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

export const About = () => {
  const skills = {
    languages: ["JavaScript", "TypeScript", "Java", "SQL", "Python"],
    tools: ["Git", "Postman", "IntelliJ", "Figma", "AWS", "Cursor"]
  };

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
          About Me
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Description */}
          <Card className="p-8 bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300">
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Full-Stack Software Engineer with experience in building scalable and maintainable 
              applications using React.js, Node.js, Spring Boot, and AWS. Passionate about 
              delivering production-grade systems with strong debugging and collaboration skills.
            </p>
            
            <p className="text-gray-400">
              I love turning complex problems into simple, beautiful, and intuitive solutions. 
              When I'm not coding, you'll find me exploring new technologies or contributing to open-source projects.
            </p>
          </Card>

          {/* Skills */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Programming Languages</h3>
              <div className="flex flex-wrap gap-3">
                {skills.languages.map((skill, index) => (
                  <Badge 
                    key={skill} 
                    variant="secondary" 
                    className="bg-blue-600/20 text-blue-300 border-blue-500/50 px-4 py-2 text-sm hover:bg-blue-600/30 transition-all duration-300 transform hover:scale-105"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Tools & Technologies</h3>
              <div className="flex flex-wrap gap-3">
                {skills.tools.map((tool, index) => (
                  <Badge 
                    key={tool} 
                    variant="secondary" 
                    className="bg-purple-600/20 text-purple-300 border-purple-500/50 px-4 py-2 text-sm hover:bg-purple-600/30 transition-all duration-300 transform hover:scale-105"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {tool}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

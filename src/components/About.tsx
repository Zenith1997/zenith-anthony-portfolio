
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

export const About = () => {
  const skills = {
    frontend: ["React.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"],
    backend: ["Node.js", "Spring Boot", "Java", "Python", "RESTful APIs"],
    database: ["MySQL", "PostgreSQL", "MongoDB", "SQL"],
    cloud: ["AWS", "AWS S3", "EC2", "Lambda"],
    tools: ["Git", "Postman", "IntelliJ", "Figma", "Cursor", "Docker"]
  };

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
          About Me
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-start">
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

          {/* Skills Categories */}
          <div className="space-y-6">
            {/* Frontend */}
            <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300">
              <h3 className="text-lg font-semibold text-white mb-4">Frontend Development</h3>
              <div className="flex flex-wrap gap-2">
                {skills.frontend.map((skill, index) => (
                  <Badge 
                    key={skill} 
                    variant="secondary" 
                    className="bg-blue-600/20 text-blue-300 border-blue-500/50 px-3 py-1 text-xs hover:bg-blue-600/30 transition-all duration-300"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>

            {/* Backend */}
            <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300">
              <h3 className="text-lg font-semibold text-white mb-4">Backend Development</h3>
              <div className="flex flex-wrap gap-2">
                {skills.backend.map((skill, index) => (
                  <Badge 
                    key={skill} 
                    variant="secondary" 
                    className="bg-green-600/20 text-green-300 border-green-500/50 px-3 py-1 text-xs hover:bg-green-600/30 transition-all duration-300"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>

            {/* Database */}
            <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300">
              <h3 className="text-lg font-semibold text-white mb-4">Database & Storage</h3>
              <div className="flex flex-wrap gap-2">
                {skills.database.map((skill, index) => (
                  <Badge 
                    key={skill} 
                    variant="secondary" 
                    className="bg-orange-600/20 text-orange-300 border-orange-500/50 px-3 py-1 text-xs hover:bg-orange-600/30 transition-all duration-300"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>

            {/* Cloud & Infrastructure */}
            <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300">
              <h3 className="text-lg font-semibold text-white mb-4">Cloud & Infrastructure</h3>
              <div className="flex flex-wrap gap-2">
                {skills.cloud.map((skill, index) => (
                  <Badge 
                    key={skill} 
                    variant="secondary" 
                    className="bg-purple-600/20 text-purple-300 border-purple-500/50 px-3 py-1 text-xs hover:bg-purple-600/30 transition-all duration-300"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>

            {/* Tools & Technologies */}
            <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300">
              <h3 className="text-lg font-semibold text-white mb-4">Tools & Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {skills.tools.map((skill, index) => (
                  <Badge 
                    key={skill} 
                    variant="secondary" 
                    className="bg-pink-600/20 text-pink-300 border-pink-500/50 px-3 py-1 text-xs hover:bg-pink-600/30 transition-all duration-300"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

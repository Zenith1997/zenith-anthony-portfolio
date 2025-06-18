
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

export const About = () => {
  const skills = [
    { name: "React.js", category: "frontend", icon: "⚛️" },
    { name: "TypeScript", category: "frontend", icon: "📘" },
    { name: "JavaScript", category: "frontend", icon: "🟨" },
    { name: "HTML5", category: "frontend", icon: "🌐" },
    { name: "CSS3", category: "frontend", icon: "🎨" },
    { name: "Tailwind CSS", category: "frontend", icon: "💨" },
    { name: "Node.js", category: "backend", icon: "🟢" },
    { name: "Spring Boot", category: "backend", icon: "🍃" },
    { name: "Java", category: "backend", icon: "☕" },
    { name: "Python", category: "backend", icon: "🐍" },
    { name: "RESTful APIs", category: "backend", icon: "🔗" },
    { name: "MySQL", category: "database", icon: "🐬" },
    { name: "PostgreSQL", category: "database", icon: "🐘" },
    { name: "MongoDB", category: "database", icon: "🍃" },
    { name: "SQL", category: "database", icon: "📊" },
    { name: "AWS", category: "cloud", icon: "☁️" },
    { name: "AWS S3", category: "cloud", icon: "📦" },
    { name: "EC2", category: "cloud", icon: "💻" },
    { name: "Lambda", category: "cloud", icon: "⚡" },
    { name: "Git", category: "tools", icon: "📝" },
    { name: "Postman", category: "tools", icon: "📮" },
    { name: "IntelliJ", category: "tools", icon: "💡" },
    { name: "Figma", category: "tools", icon: "🎯" },
    { name: "Cursor", category: "tools", icon: "🖱️" },
    { name: "Docker", category: "tools", icon: "🐳" }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
          About Me
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
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

          {/* Skills Overview */}
          <Card className="p-8 bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300">
            <h3 className="text-2xl font-bold text-white mb-6">Technical Expertise</h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-lg font-semibold text-blue-400 mb-2">Frontend Development</h4>
                <p className="text-gray-300 text-sm">Building responsive and interactive user interfaces</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-green-400 mb-2">Backend Development</h4>
                <p className="text-gray-300 text-sm">Creating robust server-side applications and APIs</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-orange-400 mb-2">Database Management</h4>
                <p className="text-gray-300 text-sm">Designing and optimizing data storage solutions</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-purple-400 mb-2">Cloud & DevOps</h4>
                <p className="text-gray-300 text-sm">Deploying and managing applications in the cloud</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Skills Grid */}
        <div className="mb-8">
          <h3 className="text-3xl font-bold text-center text-white mb-12">Technologies & Tools</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {skills.map((skill, index) => (
              <Card 
                key={skill.name} 
                className="p-6 bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300 flex flex-col items-center justify-center text-center group hover:scale-105"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {skill.icon}
                </div>
                <h4 className="text-white font-medium text-sm">{skill.name}</h4>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

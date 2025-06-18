
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, Calendar, MapPin, ChevronRight } from "lucide-react";

export const Experience = () => {
  const [selectedExperience, setSelectedExperience] = useState(0);

  const experiences = [
    {
      id: 0,
      company: "LocalSEO.lk",
      position: "Full Stack Developer",
      duration: "Aug 2024 – Present",
      location: "Remote",
      description: "Leading development of comprehensive SEO dashboard platform with React SPA architecture and RESTful API integration.",
      achievements: [
        "Built responsive React SPA with Redux Toolkit for state management",
        "Implemented RESTful APIs with comprehensive CRUD operations",
        "Integrated React Query for efficient data fetching and caching",
        "Developed SEO analytics dashboards with real-time data visualization",
        "Optimized application performance resulting in 40% faster load times"
      ],
      technologies: ["React.js", "Redux Toolkit", "React Query", "Node.js", "RESTful APIs"]
    },
    {
      id: 1,
      company: "Virtusa Pvt Ltd",
      position: "Trainee Engineer",
      duration: "Dec 2022 – Jun 2023",
      location: "Colombo, Sri Lanka",
      description: "Contributed to large-scale enterprise projects focusing on cloud migration, database optimization, and system debugging.",
      achievements: [
        "Successfully migrated legacy systems to AWS EC2 and S3",
        "Executed PostgreSQL database migration with zero downtime",
        "Developed and optimized Apache Airflow data pipelines",
        "Debugged and resolved critical issues in Spring Boot applications",
        "Collaborated with cross-functional teams on enterprise-level solutions"
      ],
      technologies: ["AWS EC2", "AWS S3", "PostgreSQL", "Apache Airflow", "Spring Boot"]
    }
  ];

  return (
    <section id="experience"  className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
          Experience
        </h2>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Timeline */}
          <div className="lg:col-span-1">
            <div className="space-y-4">
              {experiences.map((exp, index) => (
                <Card
                  key={exp.id}
                  className={`p-4 cursor-pointer transition-all duration-300 border-2 ${
                    selectedExperience === index
                      ? 'bg-blue-600/20 border-blue-500'
                      : 'bg-white/5 border-white/10 hover:bg-white/10'
                  }`}
                  onClick={() => setSelectedExperience(index)}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold text-white">{exp.company}</h3>
                      <p className="text-sm text-gray-400">{exp.position}</p>
                      <div className="flex items-center gap-2 mt-2 text-xs text-gray-500">
                        <Calendar className="h-3 w-3" />
                        {exp.duration}
                      </div>
                    </div>
                    <ChevronRight className={`h-5 w-5 text-gray-400 transition-transform ${
                      selectedExperience === index ? 'rotate-90' : ''
                    }`} />
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Details */}
          <div className="lg:col-span-2">
            <Card className="p-8 bg-white/10 backdrop-blur-sm border-white/20">
              {experiences.map((exp, index) => (
                <div
                  key={exp.id}
                  className={`transition-all duration-500 ${
                    selectedExperience === index ? 'block' : 'hidden'
                  }`}
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className="p-3 bg-blue-600/20 rounded-lg">
                      <Building className="h-6 w-6 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">{exp.position}</h3>
                      <p className="text-lg text-blue-400">{exp.company}</p>
                      <div className="flex items-center gap-4 mt-2 text-sm text-gray-400">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {exp.duration}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {exp.location}
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-300 mb-6">{exp.description}</p>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Key Achievements</h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start gap-3 text-gray-300">
                          <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="bg-purple-600/20 text-purple-300 border-purple-500/50"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

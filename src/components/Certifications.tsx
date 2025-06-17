
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Award, Clock, CheckCircle } from "lucide-react";

export const Certifications = () => {
  const certifications = [
    {
      title: "AWS Cloud Essentials",
      provider: "Amazon Web Services",
      status: "completed",
      date: "2024",
      icon: "🏆"
    },
    {
      title: "Node.js RESTful APIs",
      provider: "Udemy",
      status: "completed", 
      date: "2023",
      icon: "🚀"
    },
    {
      title: "React Training",
      provider: "LinkedIn Learning",
      status: "completed",
      date: "2023",
      icon: "⚛️"
    },
    {
      title: "ASP.NET Core Development",
      provider: "Microsoft Learn",
      status: "in-progress",
      progress: 75,
      icon: "🔄"
    },
    {
      title: "Deep Learning Specialization", 
      provider: "Coursera",
      status: "in-progress",
      progress: 45,
      icon: "🧠"
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-4">
          Certifications
        </h2>
        <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
          Continuous learning and professional development through industry-recognized certifications and courses.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <Card
              key={cert.title}
              className="p-6 bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="text-3xl">{cert.icon}</div>
                <div className="flex items-center gap-2">
                  {cert.status === 'completed' ? (
                    <Badge className="bg-green-600/20 text-green-400 border-green-500/50">
                      <CheckCircle className="h-3 w-3 mr-1" />
                      Completed
                    </Badge>
                  ) : (
                    <Badge className="bg-blue-600/20 text-blue-400 border-blue-500/50">
                      <Clock className="h-3 w-3 mr-1" />
                      In Progress
                    </Badge>
                  )}
                </div>
              </div>

              <h3 className="text-lg font-semibold text-white mb-2">
                {cert.title}
              </h3>
              
              <p className="text-blue-400 text-sm mb-4">
                {cert.provider}
              </p>

              {cert.status === 'in-progress' && cert.progress && (
                <div className="mb-4">
                  <div className="flex justify-between text-sm text-gray-400 mb-2">
                    <span>Progress</span>
                    <span>{cert.progress}%</span>
                  </div>
                  <Progress value={cert.progress} className="h-2" />
                </div>
              )}

              {cert.date && (
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <Award className="h-3 w-3" />
                  {cert.date}
                </div>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

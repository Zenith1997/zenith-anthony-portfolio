
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

export const Education = () => {
  return (
    <section id ="education" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
          Education
        </h2>

        <div className="max-w-3xl mx-auto">
          <Card className="p-8 bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="flex items-start gap-6">
              {/* University Logo Placeholder */}
              <div className="flex-shrink-0">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <GraduationCap className="h-10 w-10 text-white" />
                </div>
              </div>

              {/* Education Details */}
              <div className="flex-1">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      BSc (Hons) Information Technology
                    </h3>
                    <p className="text-xl text-blue-400 mb-3">
                      University of Moratuwa
                    </p>
                  </div>
                  
                  <Badge className="bg-green-600/20 text-green-400 border-green-500/50 w-fit">
                    Graduated
                  </Badge>
                </div>

                <div className="flex flex-wrap gap-6 text-sm text-gray-400 mb-6">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>Jan 2020 – Aug 2024</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    <span>Moratuwa, Sri Lanka</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Key Areas of Study</h4>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "Software Engineering",
                        "Data Structures & Algorithms", 
                        "Database Systems",
                        "Web Development",
                        "Cloud Computing",
                        "System Design"
                      ].map((subject) => (
                        <Badge
                          key={subject}
                          variant="secondary"
                          className="bg-purple-600/20 text-purple-300 border-purple-500/50"
                        >
                          {subject}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Notable Projects</h4>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                        Final Year Project: NLP AI/ML project for sentiment analysis in TikTok
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                        Database Management System for University Library
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                        Mobile Application for Campus Navigation
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

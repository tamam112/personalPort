import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react";

const Education = () => {
  const education = [
    {
      institution: "Stanford University",
      degree: "Master of Science in Computer Science",
      specialization: "Artificial Intelligence & Machine Learning",
      location: "Stanford, CA",
      period: "2015 - 2017",
      gpa: "3.9/4.0",
      achievements: [
        "Summa Cum Laude graduate",
        "Teaching Assistant for Advanced Algorithms",
        "Published research on distributed systems optimization"
      ],
      coursework: ["Machine Learning", "Distributed Systems", "Advanced Algorithms", "Computer Vision", "Natural Language Processing"]
    },
    {
      institution: "University of California, Berkeley",
      degree: "Bachelor of Science in Computer Science",
      specialization: "Software Engineering",
      location: "Berkeley, CA",
      period: "2011 - 2015",
      gpa: "3.8/4.0",
      achievements: [
        "Dean's List for 6 consecutive semesters",
        "President of Computer Science Students Association",
        "Winner of Annual Hackathon 2014"
      ],
      coursework: ["Data Structures", "Software Engineering", "Database Systems", "Computer Networks", "Operating Systems"]
    }
  ];

  return (
    <section className="py-20 bg-section-bg">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 text-professional-navy">Education</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Academic foundation in computer science and continuous learning
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {education.map((edu, index) => (
            <Card key={index} className="p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                <div className="flex items-start gap-4 mb-4 lg:mb-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-professional-navy mb-1">{edu.degree}</h3>
                    <p className="text-lg font-medium text-muted-foreground mb-1">{edu.institution}</p>
                    <p className="text-sm text-primary font-medium">{edu.specialization}</p>
                    <div className="flex flex-wrap items-center gap-4 mt-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        <span>{edu.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        <span>{edu.period}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Award className="w-3 h-3" />
                        <span>GPA: {edu.gpa}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-professional-navy mb-3">Achievements & Honors</h4>
                  <ul className="space-y-1 text-muted-foreground">
                    {edu.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-professional-navy mb-3">Relevant Coursework</h4>
                  <div className="flex flex-wrap gap-2">
                    {edu.coursework.map((course, idx) => (
                      <Badge 
                        key={idx} 
                        variant="secondary" 
                        className="text-xs bg-gradient-to-r from-primary/10 to-accent/10 text-professional-navy border-primary/20"
                      >
                        {course}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
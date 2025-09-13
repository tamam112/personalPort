import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Building } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "TechCorp Solutions",
      position: "Senior Software Engineer & Team Lead",
      location: "San Francisco, CA",
      period: "2021 - Present",
      description: "Led a team of 8 engineers developing microservices architecture for e-commerce platform serving 2M+ users. Implemented CI/CD pipelines reducing deployment time by 60%.",
      achievements: [
        "Architected scalable microservices handling 10K+ requests/second",
        "Reduced system latency by 45% through performance optimization",
        "Mentored 5 junior developers, 3 received promotions"
      ],
      technologies: ["React", "Node.js", "AWS", "Docker", "Kubernetes", "PostgreSQL"]
    },
    {
      company: "Innovation Labs",
      position: "Full Stack Developer",
      location: "New York, NY",
      period: "2019 - 2021",
      description: "Developed and maintained web applications for fintech clients. Collaborated with UX/UI designers to create responsive, user-friendly interfaces.",
      achievements: [
        "Built real-time trading platform processing $1M+ daily volume",
        "Implemented automated testing reducing bugs by 70%",
        "Integrated payment systems for 50+ financial institutions"
      ],
      technologies: ["Python", "Django", "React", "PostgreSQL", "Redis", "AWS"]
    },
    {
      company: "StartupXYZ",
      position: "Frontend Developer",
      location: "Austin, TX",
      period: "2017 - 2019",
      description: "Developed responsive web applications and mobile-first designs. Worked in agile environment with rapid iteration cycles.",
      achievements: [
        "Created component library used across 10+ projects",
        "Improved page load speeds by 50% through optimization",
        "Collaborated with design team to implement pixel-perfect UIs"
      ],
      technologies: ["JavaScript", "Vue.js", "SCSS", "Webpack", "Firebase"]
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 text-professional-navy">Work Experience</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A journey of building innovative solutions and leading high-performing teams
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="relative">
              {/* Timeline line */}
              {index < experiences.length - 1 && (
                <div className="absolute left-8 top-24 w-0.5 h-full bg-gradient-to-b from-primary to-accent"></div>
              )}
              
              {/* Timeline dot */}
              <div className="absolute left-6 top-8 w-4 h-4 bg-gradient-to-br from-primary to-accent rounded-full border-4 border-white shadow-lg z-10"></div>
              
              <Card className="ml-20 mb-8 p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white">
                <div className="flex flex-wrap items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-professional-navy mb-1">{exp.position}</h3>
                    <div className="flex items-center gap-4 text-muted-foreground mb-2">
                      <div className="flex items-center gap-1">
                        <Building className="w-4 h-4" />
                        <span className="font-medium">{exp.company}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-primary font-medium">
                    <Calendar className="w-4 h-4" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                <p className="text-muted-foreground mb-4 leading-relaxed">{exp.description}</p>

                <div className="mb-4">
                  <h4 className="font-semibold text-professional-navy mb-2">Key Achievements:</h4>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx}>{achievement}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-professional-navy mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, idx) => (
                      <Badge 
                        key={idx} 
                        variant="outline" 
                        className="text-xs bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20 text-professional-navy"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
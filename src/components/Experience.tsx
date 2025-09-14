import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Building } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "Niagara Health",
      position: "Cybersecurity Systems Administrator",
      location: "St. Catharines, ON",
  period: "February 2025 – Present",
      description: null,
      achievements: [
  "Configure and enforce Role-Based Access Control policies in SailPoint to align access with job functions, reducing excessive privilege assignments",
        "Manage Privileged Access Management using CyberArk, monitoring elevated accounts, securing credentials, and mitigating insider threat risks",
        "Administer and troubleshoot authentication services through Azure AD and Duo, managing conditional access policies and identity federation for critical hospital systems"
      ],
      technologies: []
    },
    {
      company: "NSUS Group Inc.",
      position: "IT Specialist",
      location: "North York, ON",
      period: "July 2024 – February 2025",
      description: null,
      achievements: [
        "Developed shell scripts to automate routine tasks, leading to a 22% increase in operational efficiency and a reduction in repetitive work by 7 hours per week",
        "Established a tiered support system that prioritized urgent technical issues, handling over 25 critical cases per week, leading to improved service delivery and reduced downtime for key business operations by 20%",
        "Configured and managed endpoint protection using Bitdefender GravityZone, enhancing organizational security and reducing endpoint vulnerabilities by 14%"
      ],
      technologies: []
    },
    {
      company: "K-Line Group of Companies",
      position: "IT Support Specialist Intern",
      location: "Whitchurch-Stouffville, ON",
      period: "December 2022 – August 2023",
      description: null,
      achievements: [
        "Resolved 80% of support tickets within 1 hour, significantly enhancing response time and boosting end-user productivity by 18%",
        "Administered over 350 devices and managed user permissions via Azure AD, ensuring compliance with organizational security policies and reducing unauthorized access incidents by 12%",
        "Authored SOPs (technical documentation) for routine IT processes, streamlining workflows and reducing onboarding time for new team members by 34%"
      ],
      technologies: []
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
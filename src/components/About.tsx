import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Users, Lightbulb, Award } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Technical Excellence",
      description: "8+ years of experience in full-stack development with modern technologies"
    },
    {
      icon: Users,
      title: "Team Leadership",
      description: "Led cross-functional teams of 10+ developers on enterprise projects"
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Architected solutions that improved system performance by 40%"
    },
    {
      icon: Award,
      title: "Recognition",
      description: "AWS Certified Solutions Architect with multiple industry certifications"
    }
  ];

  const skills = [
    "JavaScript/TypeScript", "React", "Node.js", "Python", "AWS", "Docker", 
    "Kubernetes", "PostgreSQL", "MongoDB", "GraphQL", "CI/CD", "Microservices"
  ];

  return (
    <section className="py-20 bg-section-bg">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 text-professional-navy">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm a passionate software engineer with a proven track record of delivering 
            scalable solutions and leading high-performing teams. My expertise spans 
            full-stack development, cloud architecture, and DevOps practices.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon;
            return (
              <Card key={index} className="p-6 text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-professional-navy">{highlight.title}</h3>
                <p className="text-muted-foreground text-sm">{highlight.description}</p>
              </Card>
            );
          })}
        </div>

        <Card className="p-8 border-0 shadow-lg bg-white">
          <h3 className="text-2xl font-bold mb-6 text-professional-navy text-center">Technical Skills</h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {skills.map((skill, index) => (
              <Badge 
                key={index} 
                variant="secondary" 
                className="px-4 py-2 text-sm font-medium bg-gradient-to-r from-primary/10 to-accent/10 text-professional-navy border-primary/20 hover:bg-gradient-to-r hover:from-primary/20 hover:to-accent/20 transition-all duration-300"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
};

export default About;
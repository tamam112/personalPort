import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Calendar, ExternalLink, CheckCircle } from "lucide-react";

const Certifications = () => {
  const certifications = [
    {
      name: "AWS Certified Solutions Architect - Professional",
      issuer: "Amazon Web Services",
      date: "March 2023",
      status: "Active",
      credentialId: "AWS-ASA-2023-001234",
      description: "Advanced certification demonstrating expertise in designing distributed applications and systems on AWS platform.",
      skills: ["Cloud Architecture", "Security", "Migration", "Cost Optimization", "Well-Architected Framework"],
      logo: "🏆"
    },
    {
      name: "Certified Kubernetes Administrator (CKA)",
      issuer: "Cloud Native Computing Foundation",
      date: "January 2023",
      status: "Active",
      credentialId: "CKA-2023-567890",
      description: "Hands-on certification validating skills in Kubernetes administration and troubleshooting.",
      skills: ["Container Orchestration", "Cluster Management", "Networking", "Security", "Troubleshooting"],
      logo: "⚙️"
    },
    {
      name: "Google Cloud Professional Cloud Architect",
      issuer: "Google Cloud",
      date: "September 2022",
      status: "Active",
      credentialId: "GCP-PCA-2022-112233",
      description: "Professional-level certification for designing and managing robust, secure, scalable Google Cloud solutions.",
      skills: ["GCP Services", "Infrastructure Design", "Security", "Data Analytics", "Machine Learning"],
      logo: "☁️"
    },
    {
      name: "Certified ScrumMaster (CSM)",
      issuer: "Scrum Alliance",
      date: "June 2021",
      status: "Active",
      credentialId: "CSM-2021-445566",
      description: "Certification demonstrating understanding of Scrum framework and ability to facilitate Agile teams.",
      skills: ["Agile Methodology", "Team Facilitation", "Sprint Planning", "Retrospectives", "Stakeholder Management"],
      logo: "🎯"
    },
    {
      name: "MongoDB Certified Developer",
      issuer: "MongoDB University",
      date: "March 2021",
      status: "Active",
      credentialId: "MDB-DEV-2021-778899",
      description: "Certification validating proficiency in MongoDB database design, development, and administration.",
      skills: ["NoSQL Databases", "Data Modeling", "Aggregation", "Indexing", "Performance Optimization"],
      logo: "🗄️"
    },
    {
      name: "Docker Certified Associate (DCA)",
      issuer: "Docker, Inc.",
      date: "November 2020",
      status: "Active",
      credentialId: "DCA-2020-334455",
      description: "Certification demonstrating expertise in containerization and Docker platform management.",
      skills: ["Containerization", "Docker Compose", "Swarm", "Security", "Registry Management"],
      logo: "🐳"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 text-professional-navy">Certifications</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Professional certifications demonstrating expertise in cloud technologies and modern development practices
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {certifications.map((cert, index) => (
            <Card key={index} className="p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white group">
              <div className="flex items-start justify-between mb-4">
                <div className="text-3xl">{cert.logo}</div>
                <div className="flex items-center gap-1">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <Badge variant="secondary" className="text-xs bg-green-50 text-green-700 border-green-200">
                    {cert.status}
                  </Badge>
                </div>
              </div>

              <h3 className="text-lg font-bold text-professional-navy mb-2 group-hover:text-primary transition-colors">
                {cert.name}
              </h3>
              
              <div className="flex items-center gap-2 mb-2 text-sm text-muted-foreground">
                <Shield className="w-4 h-4" />
                <span className="font-medium">{cert.issuer}</span>
              </div>

              <div className="flex items-center gap-2 mb-4 text-sm text-muted-foreground">
                <Calendar className="w-4 h-4" />
                <span>Certified {cert.date}</span>
              </div>

              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                {cert.description}
              </p>

              <div className="mb-4">
                <h4 className="font-semibold text-professional-navy mb-2 text-sm">Key Skills:</h4>
                <div className="flex flex-wrap gap-1">
                  {cert.skills.slice(0, 3).map((skill, idx) => (
                    <Badge 
                      key={idx} 
                      variant="outline" 
                      className="text-xs bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20 text-professional-navy"
                    >
                      {skill}
                    </Badge>
                  ))}
                  {cert.skills.length > 3 && (
                    <Badge variant="outline" className="text-xs text-muted-foreground">
                      +{cert.skills.length - 3} more
                    </Badge>
                  )}
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <span className="text-xs text-muted-foreground font-mono">
                  ID: {cert.credentialId}
                </span>
                <ExternalLink className="w-4 h-4 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
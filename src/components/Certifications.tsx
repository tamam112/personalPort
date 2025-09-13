import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Calendar, ExternalLink, CheckCircle } from "lucide-react";

const Certifications = () => {
  const certifications = [
    {
  name: "Systems Security Certified Practicioner (SSCP)",
  issuer: "ISC2",
  date: "July 2025 (Associate Status)",
  status: "Active",
  credentialId: "AWS-ASA-2023-001234",
  description: "need to add description",
      skills: ["Cloud Architecture", "Security", "Migration", "Cost Optimization", "Well-Architected Framework"],
      logo: "🏆"
    },
    {
      name: "Security+",
      issuer: "CompTIA",
      date: "October 2024",
      status: "Active",
      credentialId: "CKA-2023-567890",
  description: "need to add description",
      skills: ["Container Orchestration", "Cluster Management", "Networking", "Security", "Troubleshooting"],
      logo: "⚙️"
    },
    {
  name: "A+",
  issuer: "CompTIA",
  date: "June 2024",
      status: "Active",
      credentialId: "GCP-PCA-2022-112233",
  description: "need to add description",
      skills: ["GCP Services", "Infrastructure Design", "Security", "Data Analytics", "Machine Learning"],
      logo: "☁️"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 text-professional-navy">Certifications</h2>
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
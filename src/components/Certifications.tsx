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
      skills: [
        "Access control & account management",
        "Security operations & monitoring",
        "Risk identification & mitigation",
        "Network & system security",
        "Disaster recovery & business continuity"
      ],
      logo: "🏆"
    },
    {
      name: "Security+",
      issuer: "CompTIA",
      date: "October 2024",
      status: "Active",
      credentialId: "CKA-2023-567890",
  description: "need to add description",
      skills: [
        "Threat & vulnerability management",
        "Network security & firewalls",
        "Identity & access management (IAM)",
        "Cryptography & secure protocols",
        "Risk assessment & incident response"
      ],
      logo: "⚙️"
    },
    {
  name: "A+",
  issuer: "CompTIA",
  date: "June 2024",
      status: "Active",
      credentialId: "GCP-PCA-2022-112233",
  description: "need to add description",
      skills: [
        "Hardware & software troubleshooting",
        "Operating system installation & configuration",
        "Basic networking (TCP/IP, Wi-Fi, LAN/WAN)",
        "Device & peripheral support",
        "IT operational procedures & best practices"
      ],
      logo: "☁️"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 text-professional-navy dark:text-white">Certifications</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {certifications.map((cert, index) => (
            <Card key={index} className="p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-card group">
              <div className="flex items-start justify-between mb-4">
                <div className="text-3xl">{cert.logo}</div>
                <div className="flex items-center gap-1">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <Badge variant="secondary" className="text-xs bg-green-50 text-green-700 border-green-200">
                    {cert.status}
                  </Badge>
                </div>
              </div>

              <h3 className="text-lg font-bold text-professional-navy dark:text-white mb-2">
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
                <h4 className="font-semibold text-professional-navy dark:text-white mb-2 text-sm">Key Skills:</h4>
                <div className="flex flex-wrap gap-1">
                  {cert.skills.map((skill, idx) => (
                    <Badge 
                      key={idx} 
                      variant="outline" 
                      className="text-xs bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20 text-professional-navy dark:text-muted-foreground"
                    >
                      {skill}
                    </Badge>
                  ))}
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
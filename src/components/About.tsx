import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Code, Users, Lightbulb, Award } from "lucide-react";

const About = () => {


  const skills = [
  "SailPoint IdentityNow",
    "CyberArk Privileged Access Management",
    "Azure Active Directory (Entra ID)",
    "Bitdefender GravityZone",
    "Active Directory & Group Policy",
    "Okta Workforce Identity",
    "PowerShell Scripting",
    "Python Scripting",
    "ServiceNow Integration",
    "RESTful API Integration",
    "Identity Governance & Administration (IGA)",
    "Privileged Access Management (PAM)",
    "Single Sign-On (SSO) & MFA",
    "ITIL Foundation Principles",
    "Windows Server Administration",
    "Linux Administration",
    "Technical Documentation & Training"
  ];

  return (
    <section className="py-20 bg-section-bg">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 text-professional-navy">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I’m a passionate IT professional with a strong foundation in cybersecurity and system administration. My skills include identity and access management, network and system security, troubleshooting, and implementing best practices to keep systems safe and reliable.
          </p>
        </div>



        <Card className="p-8 border-0 shadow-lg bg-white">
          <h3 className="text-2xl font-bold mb-6 text-professional-navy text-center">Technical Skills</h3>
          <div className="flex flex-wrap gap-3 justify-center mb-4">
            {skills.slice(0, 7).map((skill, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="px-4 py-2 text-sm font-medium bg-gradient-to-r from-primary/10 to-accent/10 text-professional-navy border-primary/20 hover:bg-gradient-to-r hover:from-primary/20 hover:to-accent/20 transition-all duration-300"
              >
                {skill}
              </Badge>
            ))}
          </div>
          {skills.length > 7 && (
            <Accordion type="single" collapsible className="w-full max-w-md mx-auto">
              <AccordionItem value="more-skills">
                <AccordionTrigger className="justify-center text-primary font-semibold text-base">
                  See more
                </AccordionTrigger>
                <AccordionContent>
                  <div className="flex flex-wrap gap-3 justify-center">
                    {skills.slice(7).map((skill, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className="px-4 py-2 text-sm font-medium bg-gradient-to-r from-primary/10 to-accent/10 text-professional-navy border-primary/20 hover:bg-gradient-to-r hover:from-primary/20 hover:to-accent/20 transition-all duration-300"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          )}
        </Card>
      </div>
    </section>
  );
};

export default About;
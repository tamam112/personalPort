import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Linkedin, Github, Twitter, ExternalLink } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
    label: "Email",
  value: "tamammakki@yahoo.com",
  link: "mailto:tamammakki@yahoo.com"
    },
    // Phone entry removed
    {
      icon: MapPin,
  label: "Location",
  value: "Toronto, ON",
  link: null
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/tamammakki/",
      color: "text-blue-600"
    },
    {
      icon: Github,
      label: "GitHub",
  url: "https://github.com/tamammakki",
      color: "text-gray-800"
    },
    {
      icon: Twitter,
      label: "Twitter",
  url: "https://twitter.com/tamammakki",
      color: "text-blue-400"
    }
  ];

  return (
    <section className="py-20 bg-section-bg">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 id="contact" className="text-4xl font-bold mb-6 text-professional-navy">Get In Touch</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Let's connect and discuss opportunities, collaborations, or just have a great conversation about technology
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Information */}
            <Card className="p-8 border-0 shadow-lg bg-white">
              <h3 className="text-2xl font-bold text-professional-navy mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                {contactInfo.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="font-medium text-professional-navy">{item.label}</p>
                        {item.link ? (
                          <a 
                            href={item.link} 
                            className="text-muted-foreground hover:text-primary transition-colors"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-muted-foreground">{item.value}</p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-8 pt-8 border-t border-gray-100">
                <h4 className="font-semibold text-professional-navy mb-4">Follow Me</h4>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gradient-to-br hover:from-primary hover:to-accent hover:text-white transition-all duration-300 group"
                      >
                        <Icon className="w-5 h-5 text-muted-foreground group-hover:text-white transition-colors" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </Card>

            {/* Call to Action */}
            <Card className="p-8 border-0 shadow-lg bg-gradient-to-br from-primary to-accent text-white">
              <h3 className="text-2xl font-bold mb-6">Let's Work Together</h3>
              
              <p className="mb-8 text-white/90 leading-relaxed">
                I’m passionate about technology and always eager to expand my skills in cybersecurity and technology. I enjoy tackling challenges, learning new tools, and contributing to projects that make a real impact. If you’re looking for someone motivated, detail-oriented, and ready to grow with your team, I’d love to connect and hear about your vision.
              </p>

              {/* Buttons removed as requested */}

              <div className="mt-8 pt-8 border-t border-white/20">
                <p className="text-sm text-white/80">
                  <strong>Response Time:</strong> I typically respond within 24 hours
                </p>
                <p className="text-sm text-white/80 mt-1">
                  <strong>Availability:</strong> Currently employed — always open to collaboration and knowledge sharing.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
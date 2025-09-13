import { Button } from "@/components/ui/button";
import { ArrowDown, Download, Mail } from "lucide-react";
import heroImage from "@/assets/personalPortrait2.jpeg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-accent"></div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-20 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <img 
              src={heroImage} 
              alt="Professional portrait" 
              className="w-48 h-48 rounded-full mx-auto mb-8 border-4 border-white/20 shadow-2xl object-cover"
            />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-white/90 bg-clip-text text-transparent">
            Tamam Makki
          </h1>
          
          <p className="text-xl md:text-2xl mb-4 text-white/90 font-medium">
            Cybersecurity Systems Adminstrator - IAM
          </p>
          
          <p className="text-lg mb-12 text-white/80 max-w-2xl mx-auto leading-relaxed">
            Bridging security and usability through robust IAM, cloud, and infrastructure solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="#contact">
              <Button size="lg" variant="secondary" className="group bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 transition-all duration-300">
                <Mail className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Get In Touch
              </Button>
            </a>
            <a href="/TamamM_Resume_AUG2025.pdf" download target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="bg-transparent border-white/30 text-white hover:bg-white/10 hover:border-white/50 transition-all duration-300">
                <Download className="w-5 h-5 mr-2" />
                Download Resume
              </Button>
            </a>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-white/70" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
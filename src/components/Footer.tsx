import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-professional-navy text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0">
            <p className="text-white/80 text-sm">
              © 2024 Tamam Makki. All rights reserved.
            </p>
          </div>
          
          <div className="flex items-center gap-2 text-sm text-white/80">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-400 fill-current" />
            <span>and lots of coffee</span>
          </div>
        </div>
        
        <div className="mt-6 pt-6 border-t border-white/10 text-center">
          <p className="text-xs text-white/60">
            This portfolio was built with React, TypeScript, Tailwind CSS, and modern web technologies.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
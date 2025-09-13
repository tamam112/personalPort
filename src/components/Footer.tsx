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
          
          {/* Removed 'Made with and lots of coffee' */}
        </div>
        
        {/* Removed 'This portfolio was built with...' */}
      </div>
    </footer>
  );
};

export default Footer;
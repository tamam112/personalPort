import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur z-50 shadow-md">
      <div className="container mx-auto flex justify-center items-center py-3 px-6">
        <ul className="flex gap-10 text-professional-navy font-medium justify-center w-full">
          <li><a href="#hero" className="hover:text-accent transition-colors">Home</a></li>
          <li><a href="#about" className="hover:text-accent transition-colors">About</a></li>
          <li><a href="#experience" className="hover:text-accent transition-colors">Experience</a></li>
          <li><a href="#certifications" className="hover:text-accent transition-colors">Certifications</a></li>
          <li><a href="#education" className="hover:text-accent transition-colors">Education</a></li>
          <li><a href="#contact" className="hover:text-accent transition-colors">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

import React, { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/80 dark:bg-[#101624]/90 backdrop-blur z-50 shadow-md">
      <div className="container mx-auto flex items-center py-3 px-6">
        <button
          aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
          onClick={() => setDarkMode((d) => !d)}
          className="mr-6 p-2 rounded-full border border-transparent hover:border-accent bg-white/70 dark:bg-[#232b3a] text-professional-navy dark:text-white shadow transition-colors"
        >
          {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </button>
        <ul className="flex gap-10 text-professional-navy dark:text-white font-medium justify-center w-full">
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

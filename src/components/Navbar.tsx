import React, { useEffect, useState, useContext } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";
import TypewriterResetContext from "@/context/TypewriterResetContext";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const resetTypewriter = useContext(TypewriterResetContext);
  const navLinks = [
    { href: "#hero", label: "Home", onClick: () => resetTypewriter && resetTypewriter() },
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#certifications", label: "Certifications" },
    { href: "#education", label: "Education" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/80 dark:bg-[#101624]/90 backdrop-blur z-50 shadow-md">
      <div className="container mx-auto flex items-center py-3 px-6 justify-between">
        {/* Dark mode toggle */}
        <button
          aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
          onClick={() => setDarkMode((d) => !d)}
          className="p-2 rounded-full border border-transparent hover:border-accent bg-white/70 dark:bg-[#232b3a] text-professional-navy dark:text-white shadow transition-colors"
        >
          {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </button>

        {/* Desktop nav */}
        <ul className="hidden md:flex gap-10 text-professional-navy dark:text-white font-medium justify-center w-full">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="hover:text-accent transition-colors"
                onClick={e => {
                  setMenuOpen(false);
                  if (link.onClick) link.onClick();
                }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger menu for mobile */}
        <button
          className="md:hidden p-2 ml-2 rounded-full text-professional-navy dark:text-white"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Mobile menu dropdown */}
        {menuOpen && (
          <div className="fixed inset-0 top-[60px] bg-black/60 z-50 md:hidden" onClick={() => setMenuOpen(false)}>
            <div className="absolute right-4 top-4 bg-white dark:bg-[#232b3a] rounded-lg shadow-lg p-6 flex flex-col gap-6 min-w-[180px] text-professional-navy dark:text-white" onClick={e => e.stopPropagation()}>
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="hover:text-accent transition-colors text-lg"
                  onClick={e => {
                    setMenuOpen(false);
                    if (link.onClick) link.onClick();
                  }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

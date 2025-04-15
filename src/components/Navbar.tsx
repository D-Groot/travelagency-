
import React, { useState, useEffect } from "react";
import { Menu, X, Globe, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className={cn(
        "fixed w-full z-50 transition-all duration-300",
        isScrolled
          ? "bg-white shadow-md py-2"
          : "bg-transparent py-4"
      )}
    >
      <div className="container flex items-center justify-between">
        <div className="flex items-center">
          <a href="/" className="flex items-center">
            <span className={cn(
              "font-bold text-3xl transition-colors",
              isScrolled ? "text-india-saffron" : "text-white"
            )}>
              Desire<span className="text-india-green">4</span>Travels
            </span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex space-x-8">
          {["Home", "Destinations", "Experiences", "About Us", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
              className={cn(
                "font-medium transition-colors hover:text-india-saffron",
                isScrolled ? "text-gray-700" : "text-white"
              )}
            >
              {item}
            </a>
          ))}
        </div>

        <div className="hidden lg:flex items-center space-x-4">
          <div className={cn(
            "flex items-center cursor-pointer",
            isScrolled ? "text-gray-700" : "text-white"
          )}>
            <Globe className="h-4 w-4 mr-1" />
            <span>EN</span>
            <ChevronDown className="h-4 w-4 ml-1" />
          </div>
          <button className="btn-primary">Book Now</button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className={cn(
            "lg:hidden transition-colors",
            isScrolled ? "text-gray-700" : "text-white"
          )}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "lg:hidden fixed inset-0 bg-white z-40 flex flex-col pt-20 px-6",
          isMenuOpen ? "translate-x-0" : "translate-x-full",
          "transition-transform duration-300 ease-in-out"
        )}
      >
        <div className="flex flex-col space-y-6">
          {["Home", "Destinations", "Experiences", "About Us", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
              className="text-gray-800 font-medium text-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              {item}
            </a>
          ))}
        </div>
        <div className="mt-8">
          <button className="btn-primary w-full">Book Now</button>
        </div>
        <div className="flex items-center mt-6 text-gray-700 cursor-pointer">
          <Globe className="h-4 w-4 mr-2" />
          <span>English</span>
          <ChevronDown className="h-4 w-4 ml-2" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

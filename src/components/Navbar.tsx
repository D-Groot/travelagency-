
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Globe } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

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

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Destinations", path: "/destinations" },
    { name: "Services", path: "/services" },
    { name: "Blog", path: "/blog" },
    { name: "Gallery", path: "/gallery" },
    { name: "Testimonials", path: "/testimonials" },
    { name: "FAQ", path: "/faq" },
    { name: "Contact", path: "/contact" }
  ];

  return (
    <nav
      className={cn(
        "fixed w-full z-50 transition-all duration-300",
        isScrolled
          ? "bg-white shadow-md py-2"
          : "bg-black/50 backdrop-blur-sm py-4"
      )}
    >
      <div className="container flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <span className={cn(
            "font-bold text-4xl transition-colors duration-300",
            isScrolled ? "text-india-saffron" : "text-india-saffron"
          )}>
            Desire<span className="text-india-green">4</span>Travels
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={cn(
                "font-medium transition-colors hover:text-india-saffron",
                isScrolled ? "text-gray-700" : "text-white"
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Mobile Navigation with Sheet */}
        <Sheet>
          <SheetTrigger asChild>
            <button
              className={cn(
                "lg:hidden transition-colors p-2 rounded-lg",
                isScrolled ? "text-gray-700" : "text-white"
              )}
            >
              <Menu className="h-6 w-6" />
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <SheetHeader>
              <SheetTitle className="text-left text-xl font-bold text-india-saffron">
                Navigation
              </SheetTitle>
            </SheetHeader>
            <div className="flex flex-col gap-4 mt-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="text-gray-700 hover:text-india-saffron transition-colors py-2 px-4 rounded-lg hover:bg-gray-100"
                >
                  {item.name}
                </Link>
              ))}
              <Link 
                to="/booking" 
                className="bg-india-saffron text-white py-2 px-4 rounded-lg hover:bg-india-saffron/90 text-center mt-4"
              >
                Book Now
              </Link>
            </div>
          </SheetContent>
        </Sheet>

        <div className="hidden lg:flex items-center space-x-4">
          <Link to="/booking" className="btn-primary">Book Now</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


import React from "react";
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="mb-4">
              <a href="/" className="flex items-center">
                <span className="font-bold text-2xl">
                  Desire<span className="text-india-saffron">4</span>Travels
                </span>
              </a>
            </div>
            <p className="text-gray-400 mb-6">
              Crafting personalized travel experiences across India, connecting you to authentic adventures and unforgettable moments.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 hover:bg-india-saffron p-2 rounded-full transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-india-saffron p-2 rounded-full transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-india-saffron p-2 rounded-full transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-india-saffron p-2 rounded-full transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-xl mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {["Home", "Destinations", "Experiences", "About Us", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-gray-400 hover:text-india-saffron transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-xl mb-4">Popular Destinations</h3>
            <ul className="space-y-2">
              {["Rajasthan", "Kerala", "Himachal Pradesh", "Goa", "Uttarakhand", "Ladakh"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-india-saffron transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-xl mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex">
                <MapPin className="h-5 w-5 text-india-saffron mr-3 flex-shrink-0" />
                <span className="text-gray-400">123 Travel Street, Delhi, India 110001</span>
              </li>
              <li className="flex">
                <Phone className="h-5 w-5 text-india-saffron mr-3 flex-shrink-0" />
                <span className="text-gray-400">+91 98765 43210</span>
              </li>
              <li className="flex">
                <Mail className="h-5 w-5 text-india-saffron mr-3 flex-shrink-0" />
                <span className="text-gray-400">info@desire4travels.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 py-6">
        <div className="container flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 mb-4 md:mb-0">
            © {new Date().getFullYear()} Desire4Travels. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-india-saffron transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-500 hover:text-india-saffron transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-gray-500 hover:text-india-saffron transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

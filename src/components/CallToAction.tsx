
import React from "react";
import { ArrowRight } from "lucide-react";

const CallToAction: React.FC = () => {
  return (
    <section className="section-padding">
      <div className="container">
        <div className="relative bg-india-saffron rounded-lg overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="small-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                  <circle cx="2" cy="2" r="1" fill="currentColor" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#small-pattern)" />
            </svg>
          </div>
          
          <div className="relative p-8 md:p-12 lg:p-16 flex flex-col md:flex-row items-center justify-between">
            <div className="mb-8 md:mb-0 md:max-w-xl">
              <h2 className="text-white mb-4">Ready to Start Your Indian Adventure?</h2>
              <p className="text-white/90 text-lg mb-6">
                Let us craft a personalized journey that matches your travel style, preferences, and dreams. From cultural immersion to thrilling adventures, we'll make it happen.
              </p>
              <div className="flex space-x-4">
                <button className="bg-white text-india-saffron hover:bg-white/90 px-6 py-3 rounded-md font-medium transition-all shadow-md hover:shadow-lg flex items-center">
                  Plan My Trip
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
                <button className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-6 py-3 rounded-md font-medium transition-all">
                  Contact Us
                </button>
              </div>
            </div>
            <div className="w-full md:w-1/3">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Get a Custom Quote</h3>
                <form>
                  <div className="space-y-4">
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-india-saffron"
                    />
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-india-saffron"
                    />
                    <select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-india-saffron">
                      <option value="">Select Destination</option>
                      <option value="rajasthan">Rajasthan</option>
                      <option value="kerala">Kerala</option>
                      <option value="himachal">Himachal Pradesh</option>
                      <option value="goa">Goa</option>
                      <option value="other">Other</option>
                    </select>
                    <button
                      type="submit"
                      className="w-full bg-india-saffron text-white hover:bg-india-saffron/90 px-4 py-2 rounded-md font-medium transition-all"
                    >
                      Get Quote
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;

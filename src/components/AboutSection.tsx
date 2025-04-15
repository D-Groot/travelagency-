
import React from "react";
import { ArrowRight } from "lucide-react";

const AboutSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1469474968028-56623f02e42e"
              alt="Memorable travel experience"
              className="rounded-lg shadow-xl w-full h-[500px] object-cover"
            />
            <div className="absolute -bottom-6 -right-6 bg-india-saffron p-8 rounded-lg shadow-lg hidden md:block">
              <p className="text-4xl font-bold text-white">10+</p>
              <p className="text-white">Years of Excellence</p>
            </div>
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Creating Unforgettable Travel Experiences Since 2014
            </h2>
            <p className="text-lg text-gray-600">
              At Desire4Travels, we believe that every journey should be transformative. 
              Our passion is crafting personalized travel experiences that go beyond 
              typical tourism, connecting you with India's rich cultural heritage, 
              breathtaking landscapes, and authentic local experiences.
            </p>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="bg-india-saffron/10 p-3 rounded-lg">
                  <ArrowRight className="h-6 w-6 text-india-saffron" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Personalized Journeys</h3>
                  <p className="text-gray-600">Every itinerary is tailored to your preferences and travel style.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-india-saffron/10 p-3 rounded-lg">
                  <ArrowRight className="h-6 w-6 text-india-saffron" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Local Expertise</h3>
                  <p className="text-gray-600">Our guides are locals who share authentic insights and hidden gems.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-india-saffron/10 p-3 rounded-lg">
                  <ArrowRight className="h-6 w-6 text-india-saffron" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">24/7 Support</h3>
                  <p className="text-gray-600">Dedicated assistance throughout your journey for peace of mind.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

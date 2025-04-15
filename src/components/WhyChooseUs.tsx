
import React from "react";
import { Map, Heart, UserCheck, Award } from "lucide-react";

interface Feature {
  icon: React.ElementType;
  title: string;
  description: string;
}

const WhyChooseUs: React.FC = () => {
  const features: Feature[] = [
    {
      icon: Map,
      title: "Expertly Crafted Journeys",
      description: "Our travel experts design immersive experiences that showcase the authentic heart of India.",
    },
    {
      icon: Heart,
      title: "Personalized Attention",
      description: "We tailor every detail of your trip to match your preferences, interests, and travel style.",
    },
    {
      icon: UserCheck,
      title: "Local Insights & Access",
      description: "Our local connections provide unique access to experiences not available to regular tourists.",
    },
    {
      icon: Award,
      title: "Quality Assured",
      description: "We personally vet all accommodations and experiences to ensure the highest standards of quality.",
    },
  ];

  return (
    <section className="section-padding">
      <div className="container">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <p className="text-india-saffron font-medium mb-2">WHY CHOOSE US</p>
          <h2 className="mb-6">Creating Unforgettable Travel Experiences</h2>
          <p className="text-gray-600 text-lg">
            At Desire4Travels, we believe in crafting journeys that go beyond ordinary tourism. Our dedication to authenticity, sustainability, and personalized service sets us apart.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow border border-gray-100 flex flex-col items-center text-center animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-india-saffron/10 p-4 rounded-full mb-6">
                <feature.icon className="h-8 w-8 text-india-saffron" />
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

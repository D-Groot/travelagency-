
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Check, MapPin, Plane, Hotel, Utensils, Compass, HeartHandshake, ShieldCheck, Camera } from "lucide-react";

const Services: React.FC = () => {
  const services = [
    {
      icon: <Plane className="h-12 w-12 text-india-saffron" />,
      title: "Transportation",
      description: "From airport pickups to private cars and train bookings, we handle all your travel logistics within India."
    },
    {
      icon: <Hotel className="h-12 w-12 text-india-saffron" />,
      title: "Accommodation",
      description: "Handpicked hotels, heritage properties, and homestays that offer authentic experiences and comfort."
    },
    {
      icon: <Compass className="h-12 w-12 text-india-saffron" />,
      title: "Guided Tours",
      description: "Expert local guides who bring destinations to life with their knowledge and stories."
    },
    {
      icon: <Utensils className="h-12 w-12 text-india-saffron" />,
      title: "Culinary Experiences",
      description: "Food tours, cooking classes, and reservations at the best local restaurants for authentic Indian cuisine."
    },
    {
      icon: <MapPin className="h-12 w-12 text-india-saffron" />,
      title: "Custom Itineraries",
      description: "Personalized travel plans based on your interests, preferences, and travel style."
    },
    {
      icon: <Camera className="h-12 w-12 text-india-saffron" />,
      title: "Photography Tours",
      description: "Specialized tours for photographers, with expert guides to help capture the perfect shots."
    },
  ];

  const includedFeatures = [
    "24/7 travel support during your journey",
    "Personalized itinerary planning",
    "Local guides who speak your language",
    "Handpicked accommodation options",
    "Private transportation arrangements",
    "Airport transfers and assistance",
    "Dining recommendations and reservations",
    "Cultural experience coordination",
    "Emergency assistance and support",
    "Detailed travel documentation"
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="bg-gray-50 py-20">
        <div className="container text-center">
          <h1 className="mb-4">Our Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer comprehensive travel services to ensure your Indian adventure is seamless, authentic, and unforgettable.
          </p>
        </div>
      </div>
      
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col items-center text-center"
            >
              <div className="mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
      
      <section className="bg-gray-50 py-16">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="mb-4">The Desire4Travels Difference</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We're not just another travel agency. Our commitment to personalized service and authentic experiences sets us apart.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
              <div className="bg-india-saffron/10 p-4 rounded-full inline-flex mb-6">
                <HeartHandshake className="h-8 w-8 text-india-saffron" />
              </div>
              <h3 className="text-xl font-bold mb-3">Personalized Attention</h3>
              <p className="text-gray-600">
                From the first inquiry to your return home, our dedicated travel consultants ensure every detail is tailored to your preferences.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
              <div className="bg-india-saffron/10 p-4 rounded-full inline-flex mb-6">
                <MapPin className="h-8 w-8 text-india-saffron" />
              </div>
              <h3 className="text-xl font-bold mb-3">Local Expertise</h3>
              <p className="text-gray-600">
                Our team's deep knowledge of India allows us to offer insider access and authentic experiences beyond typical tourist routes.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
              <div className="bg-india-saffron/10 p-4 rounded-full inline-flex mb-6">
                <ShieldCheck className="h-8 w-8 text-india-saffron" />
              </div>
              <h3 className="text-xl font-bold mb-3">Quality Assured</h3>
              <p className="text-gray-600">
                We personally vet all accommodations, guides, and experiences to ensure they meet our high standards of quality and authenticity.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="container py-16">
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/2">
            <h2 className="mb-6">What's Included in Our Service</h2>
            <p className="text-gray-600 mb-8">
              When you book with Desire4Travels, our comprehensive service ensures a hassle-free travel experience from planning through execution. Here's what's included in our standard packages:
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {includedFeatures.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <Check className="h-5 w-5 text-india-green mr-2 flex-shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1586105449897-20b5efeb3233?auto=format&fit=crop&q=80&w=2068" 
              alt="Tourist with guide" 
              className="rounded-lg shadow-lg w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
      
      <section className="bg-india-saffron py-16">
        <div className="container text-center text-white">
          <h2 className="mb-6">Ready to Plan Your Dream Indian Journey?</h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto">
            Contact us today to start planning your personalized travel experience across India's diverse and stunning landscapes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="bg-white text-india-saffron hover:bg-white/90 px-8 py-3 rounded-md font-medium transition-all shadow-md hover:shadow-lg">
              Contact Us
            </a>
            <a href="/booking" className="bg-india-green text-white hover:bg-india-green/90 px-8 py-3 rounded-md font-medium transition-all shadow-md hover:shadow-lg">
              Book Now
            </a>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Services;

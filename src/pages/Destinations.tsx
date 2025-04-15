
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Star, Clock, MapPin, Users, CalendarDays } from "lucide-react";

interface Destination {
  id: number;
  name: string;
  image: string;
  location: string;
  price: number;
  duration: string;
  rating: number;
  category: string;
  description: string;
}

const Destinations: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  
  const destinations: Destination[] = [
    {
      id: 1,
      name: "Royal Rajasthan Tour",
      image: "https://images.unsplash.com/photo-1599661046827-e143d1d8bba2?auto=format&fit=crop&q=80&w=2070",
      location: "Jaipur, Jodhpur, Udaipur",
      price: 45000,
      duration: "7 Days / 6 Nights",
      rating: 4.8,
      category: "cultural",
      description: "Experience the royal heritage of Rajasthan with visits to magnificent palaces, forts, and traditional villages."
    },
    {
      id: 2,
      name: "Kerala Backwaters Cruise",
      image: "https://images.unsplash.com/photo-1609340711189-69036fe6e121?auto=format&fit=crop&q=80&w=1974",
      location: "Alleppey, Kumarakom, Kochi",
      price: 35000,
      duration: "5 Days / 4 Nights",
      rating: 4.9,
      category: "relaxation",
      description: "Cruise through the serene backwaters of Kerala on a traditional houseboat, enjoying the lush landscapes and local cuisine."
    },
    {
      id: 3,
      name: "Himalayan Adventure",
      image: "https://images.unsplash.com/photo-1626015365107-2cea3c5bd253?auto=format&fit=crop&q=80&w=2070",
      location: "Manali, Kasol, Tosh",
      price: 28000,
      duration: "6 Days / 5 Nights",
      rating: 4.7,
      category: "adventure",
      description: "Trek through the stunning Himalayan trails, experience river rafting, and camp under the stars."
    },
    {
      id: 4,
      name: "Golden Triangle Tour",
      image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&q=80&w=2071",
      location: "Delhi, Agra, Jaipur",
      price: 30000,
      duration: "5 Days / 4 Nights",
      rating: 4.6,
      category: "cultural",
      description: "Visit the iconic Taj Mahal, Red Fort, and Amber Fort on this classic introduction to India's rich heritage."
    },
    {
      id: 5,
      name: "Goa Beach Retreat",
      image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&q=80&w=2074",
      location: "North & South Goa",
      price: 25000,
      duration: "4 Days / 3 Nights",
      rating: 4.5,
      category: "relaxation",
      description: "Relax on pristine beaches, enjoy water sports, and experience the vibrant nightlife of Goa."
    },
    {
      id: 6,
      name: "Wildlife Safari Tour",
      image: "https://images.unsplash.com/photo-1576481564666-054a41b29109?auto=format&fit=crop&q=80&w=2070",
      location: "Ranthambore, Kanha, Bandhavgarh",
      price: 42000,
      duration: "8 Days / 7 Nights",
      rating: 4.8,
      category: "wildlife",
      description: "Embark on jungle safaris to spot tigers, leopards, and other wildlife in India's premier national parks."
    },
    {
      id: 7,
      name: "Ladakh Explorer",
      image: "https://images.unsplash.com/photo-1589049216803-a407eebdbe48?auto=format&fit=crop&q=80&w=2029",
      location: "Leh, Nubra Valley, Pangong Lake",
      price: 38000,
      duration: "7 Days / 6 Nights",
      rating: 4.9,
      category: "adventure",
      description: "Discover the breathtaking landscapes, ancient monasteries, and unique culture of the Himalayan desert."
    },
    {
      id: 8,
      name: "South Indian Temple Tour",
      image: "https://images.unsplash.com/photo-1621232082074-1a7751d983e3?auto=format&fit=crop&q=80&w=2070",
      location: "Chennai, Madurai, Rameshwaram",
      price: 32000,
      duration: "6 Days / 5 Nights",
      rating: 4.7,
      category: "cultural",
      description: "Visit ancient temples with stunning architecture and learn about the rich spiritual heritage of South India."
    },
    {
      id: 9,
      name: "Andaman Island Getaway",
      image: "https://images.unsplash.com/photo-1606856110002-d0991ce78250?auto=format&fit=crop&q=80&w=1974",
      location: "Port Blair, Havelock, Neil Island",
      price: 40000,
      duration: "6 Days / 5 Nights",
      rating: 4.8,
      category: "beach",
      description: "Experience crystal clear waters, pristine beaches, and amazing underwater marine life in the Andaman Islands."
    }
  ];
  
  const filteredDestinations = selectedCategory === "all" 
    ? destinations 
    : destinations.filter(dest => dest.category === selectedCategory);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="bg-gray-50 py-20">
        <div className="container text-center">
          <h1 className="mb-4">Destinations & Packages</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our carefully curated travel packages designed to showcase the best of India's diverse landscapes and cultures.
          </p>
        </div>
      </div>
      
      <div className="container py-16">
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          <button 
            onClick={() => setSelectedCategory("all")}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
              selectedCategory === "all" ? "bg-india-saffron text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            All Packages
          </button>
          <button 
            onClick={() => setSelectedCategory("cultural")}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
              selectedCategory === "cultural" ? "bg-india-saffron text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            Cultural
          </button>
          <button 
            onClick={() => setSelectedCategory("adventure")}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
              selectedCategory === "adventure" ? "bg-india-saffron text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            Adventure
          </button>
          <button 
            onClick={() => setSelectedCategory("relaxation")}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
              selectedCategory === "relaxation" ? "bg-india-saffron text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            Relaxation
          </button>
          <button 
            onClick={() => setSelectedCategory("wildlife")}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
              selectedCategory === "wildlife" ? "bg-india-saffron text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            Wildlife
          </button>
          <button 
            onClick={() => setSelectedCategory("beach")}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
              selectedCategory === "beach" ? "bg-india-saffron text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            Beach
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDestinations.map((destination) => (
            <div key={destination.id} className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform hover:translate-y-[-5px]">
              <div className="relative">
                <img 
                  src={destination.image} 
                  alt={destination.name} 
                  className="w-full h-60 object-cover"
                />
                <div className="absolute top-4 right-4 bg-white rounded-full px-3 py-1.5 text-sm font-bold flex items-center">
                  <Star className="h-4 w-4 text-yellow-500 mr-1 fill-yellow-500" />
                  {destination.rating}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center mb-2">
                  <MapPin className="h-4 w-4 text-india-saffron mr-1" />
                  <span className="text-gray-600 text-sm">{destination.location}</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{destination.name}</h3>
                <p className="text-gray-600 mb-4">{destination.description}</p>
                <div className="flex items-center justify-between text-gray-600 mb-4">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{destination.duration}</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-1" />
                    <span>Max 12 people</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-gray-500 text-sm">Starting from</span>
                    <p className="text-xl font-bold">₹{destination.price.toLocaleString()}</p>
                  </div>
                  <a 
                    href={`/booking?package=${destination.id}`}
                    className="btn-primary text-sm"
                  >
                    Book Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <section className="container py-16">
        <div className="bg-gradient-to-r from-india-saffron to-india-earth rounded-xl overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 p-8 md:p-12 text-white">
              <h2 className="mb-4">Custom Travel Package</h2>
              <p className="mb-6">
                Can't find what you're looking for? Let us design a personalized travel experience just for you, tailored to your preferences and interests.
              </p>
              <button className="bg-white text-india-saffron hover:bg-white/90 px-6 py-3 rounded-md font-medium transition-all shadow-md hover:shadow-lg">
                Request Custom Package
              </button>
            </div>
            <div className="md:w-1/2 flex items-center justify-center">
              <img 
                src="https://images.unsplash.com/photo-1623867321012-027dbd0e1e18?auto=format&fit=crop&q=80&w=2070" 
                alt="Custom travel experience" 
                className="w-full md:h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Destinations;

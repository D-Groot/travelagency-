
import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight, ArrowRight } from "lucide-react";

interface Destination {
  id: number;
  name: string;
  image: string;
  description: string;
  price: string;
}

const FeaturedDestinations: React.FC = () => {
  const destinations: Destination[] = [
    {
      id: 1,
      name: "Rajasthan",
      image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&w=2070&auto=format&fit=crop",
      description: "Experience the royal heritage of magnificent palaces and forts",
      price: "From ₹35,000",
    },
    {
      id: 2,
      name: "Kerala",
      image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=2070&auto=format&fit=crop",
      description: "Relax in the serene backwaters and lush green landscapes",
      price: "From ₹28,000",
    },
    {
      id: 3,
      name: "Himachal Pradesh",
      image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=2070&auto=format&fit=crop",
      description: "Discover the majestic mountains and peaceful valleys",
      price: "From ₹32,000",
    },
    {
      id: 4,
      name: "Goa",
      image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=2074&auto=format&fit=crop",
      description: "Enjoy the vibrant beaches and exciting nightlife",
      price: "From ₹25,000",
    },
  ];

  return (
    <section id="destinations" className="section-padding bg-gray-50">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-12">
          <div>
            <p className="text-india-saffron font-medium mb-2">EXPLORE INDIA</p>
            <h2 className="text-gray-900">Popular Destinations</h2>
          </div>
          <Button variant="ghost" className="hidden md:flex items-center mt-4 md:mt-0 text-india-saffron hover:text-india-saffron/90 hover:bg-india-saffron/10">
            View All Destinations
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((dest) => (
            <div key={dest.id} className="destination-card group">
              <div className="relative h-80">
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="w-full h-full object-cover"
                />
                <div className="destination-card-overlay flex flex-col justify-end p-6">
                  <h3 className="text-white text-xl font-bold mb-2">{dest.name}</h3>
                  <p className="text-gray-200 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {dest.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-india-saffron font-medium">{dest.price}</span>
                    <button className="bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors">
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 text-center md:hidden">
          <Button variant="ghost" className="flex items-center mx-auto text-india-saffron hover:text-india-saffron/90 hover:bg-india-saffron/10">
            View All Destinations
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedDestinations;

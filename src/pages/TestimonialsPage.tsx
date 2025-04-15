
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Star, User, Quote } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  location: string;
  image: string;
  rating: number;
  testimonial: string;
  trip: string;
  date: string;
}

const TestimonialsPage: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Sarah Johnson",
      location: "United States",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=1887",
      rating: 5,
      testimonial: "Our trip to Rajasthan was absolutely magical! The team at Desire4Travels took care of every detail, from our beautiful heritage hotels to our knowledgeable local guides. They even arranged special experiences like a private dinner in a 400-year-old haveli that we never would have found on our own. This was truly the trip of a lifetime.",
      trip: "Royal Rajasthan Tour",
      date: "March 2025"
    },
    {
      id: 2,
      name: "James & Emily Wilson",
      location: "Australia",
      image: "https://images.unsplash.com/photo-1603871165848-0aa92c869fa1?auto=format&fit=crop&q=80&w=1936",
      rating: 5,
      testimonial: "We cannot say enough good things about our experience with Desire4Travels. From the moment we started planning our honeymoon in Kerala, they were attentive to our preferences and created the perfect balance of relaxation and adventure. The houseboat stay was the highlight - so peaceful and the food was incredible!",
      trip: "Kerala Backwaters Cruise",
      date: "February 2025"
    },
    {
      id: 3,
      name: "Akira Tanaka",
      location: "Japan",
      image: "https://images.unsplash.com/photo-1595152452543-e5fc28ebc2b8?auto=format&fit=crop&q=80&w=1780",
      rating: 4,
      testimonial: "My solo trip through the Golden Triangle was made so much easier with Desire4Travels' help. As someone who doesn't speak Hindi, having their support and local expertise was invaluable. The guide they arranged spoke excellent English and was very knowledgeable about the history and architecture. I felt safe and well taken care of throughout.",
      trip: "Golden Triangle Tour",
      date: "January 2025"
    },
    {
      id: 4,
      name: "The Martinez Family",
      location: "Spain",
      image: "https://images.unsplash.com/photo-1569913486515-b74bf7751574?auto=format&fit=crop&q=80&w=1989",
      rating: 5,
      testimonial: "Traveling to India with three children seemed daunting, but Desire4Travels made it seamless and fun for the whole family. They suggested activities that kept our kids engaged while also allowing us to experience the culture. The cooking class they arranged was a hit with everyone, and we still make those recipes at home!",
      trip: "Family Adventure across North India",
      date: "December 2024"
    },
    {
      id: 5,
      name: "David Chen",
      location: "Singapore",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1974",
      rating: 5,
      testimonial: "As a photographer, I was looking for a tour that would take me to both iconic locations and hidden gems. Desire4Travels exceeded my expectations, arranging for us to be at key sites during the best lighting conditions and introducing us to local photographic opportunities I would never have found in a guidebook. Their attention to detail is remarkable.",
      trip: "Photography Tour of Rajasthan",
      date: "November 2024"
    },
    {
      id: 6,
      name: "Lisa & Mark Taylor",
      location: "United Kingdom",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=1964",
      rating: 4,
      testimonial: "We were initially hesitant about the logistics of traveling through the Himalayas, but Desire4Travels made everything smooth and comfortable. The accommodations they selected were perfect - each with stunning views and excellent service. The trek guides were knowledgeable about the local flora, fauna, and culture. A truly immersive experience.",
      trip: "Himalayan Adventure Trek",
      date: "October 2024"
    },
    {
      id: 7,
      name: "Michael Robinson",
      location: "Canada",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=1974",
      rating: 5,
      testimonial: "I've traveled to over 50 countries and worked with many travel agencies, but Desire4Travels stands out for their responsiveness and ability to handle unexpected changes. When a festival coincided with our visit to Varanasi, they quickly adjusted our itinerary to include this once-in-a-lifetime experience. Their local connections are unmatched.",
      trip: "Spiritual Journey through North India",
      date: "September 2024"
    },
    {
      id: 8,
      name: "Sophie Martin",
      location: "France",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=1961",
      rating: 5,
      testimonial: "The culinary tour arranged by Desire4Travels was a gastronomic delight! From street food walks with local experts to cooking classes with renowned chefs, every experience was authentic and delicious. They accommodated my dietary preferences without compromising on the traditional flavors. I came back with recipes and memories to last a lifetime.",
      trip: "Culinary Exploration of India",
      date: "August 2024"
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="bg-gray-50 py-20">
        <div className="container text-center">
          <h1 className="mb-4">Testimonials</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Read what our travelers have to say about their experiences with Desire4Travels.
          </p>
        </div>
      </div>
      
      <div className="container py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                {testimonial.image ? (
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                ) : (
                  <div className="w-16 h-16 rounded-full bg-india-saffron/10 flex items-center justify-center mr-4">
                    <User className="w-8 h-8 text-india-saffron" />
                  </div>
                )}
                <div>
                  <h3 className="font-bold text-lg">{testimonial.name}</h3>
                  <p className="text-gray-600">{testimonial.location}</p>
                  <div className="flex mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i}
                        className={`w-4 h-4 ${
                          i < testimonial.rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <Quote className="absolute top-0 left-0 w-10 h-10 text-india-saffron/20 -translate-x-2 -translate-y-2" />
                <p className="text-gray-700 mb-4 pl-4">
                  {testimonial.testimonial}
                </p>
              </div>
              
              <div className="mt-6 pt-4 border-t border-gray-100 flex justify-between items-center text-sm text-gray-500">
                <div>{testimonial.trip}</div>
                <div>{testimonial.date}</div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-india-saffron/10 rounded-xl p-8 text-center">
          <h2 className="mb-6">Share Your Experience</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            We'd love to hear about your journey with Desire4Travels. Your feedback helps us improve and inspires other travelers to create their own unforgettable memories.
          </p>
          <button className="btn-primary">
            Submit Your Testimonial
          </button>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default TestimonialsPage;

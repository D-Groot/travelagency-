
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  avatar: string;
  location: string;
  rating: number;
  text: string;
}

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Sophia Bennett",
      avatar: "https://randomuser.me/api/portraits/women/65.jpg",
      location: "United Kingdom",
      rating: 5,
      text: "My trip to Rajasthan was absolutely magical! The team at Desire4Travels arranged everything perfectly. From the palace stays to the local experiences, everything felt authentic and personal. I'll cherish these memories forever.",
    },
    {
      id: 2,
      name: "David Chen",
      avatar: "https://randomuser.me/api/portraits/men/44.jpg",
      location: "United States",
      rating: 5,
      text: "Kerala's backwaters were a dream come true. Our guide was knowledgeable and passionate about showing us the true Kerala. The itinerary was perfectly balanced between relaxation and cultural experiences. Highly recommended!",
    },
    {
      id: 3,
      name: "Aisha Patel",
      avatar: "https://randomuser.me/api/portraits/women/26.jpg",
      location: "Australia",
      rating: 5,
      text: "As an Indian living abroad, I wanted to show my children the beauty of the Himalayas. Desire4Travels created an adventure that was safe for kids but still exciting. The personal touches made all the difference.",
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="section-padding relative bg-gradient-to-br from-india-blue/90 to-india-blue/70 text-white">
      <div className="absolute inset-0 opacity-10">
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
          <defs>
            <pattern id="quotation-marks" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <text x="10" y="50" fontSize="60" fill="currentColor">"</text>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#quotation-marks)" />
        </svg>
      </div>
      
      <div className="container relative">
        <div className="text-center mb-16">
          <p className="text-india-saffron font-medium mb-2">TESTIMONIALS</p>
          <h2>What Our Travelers Say</h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="min-w-full">
                  <div className="flex flex-col items-center">
                    <div className="mb-6">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-20 h-20 rounded-full border-4 border-india-saffron object-cover"
                      />
                    </div>
                    <div className="flex mb-4 space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-india-saffron fill-india-saffron" />
                      ))}
                    </div>
                    <blockquote className="text-center text-xl italic mb-8">
                      "{testimonial.text}"
                    </blockquote>
                    <div className="text-center">
                      <h4 className="font-bold">{testimonial.name}</h4>
                      <p className="text-gray-300">{testimonial.location}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                className={cn(
                  "h-2 rounded-full transition-all",
                  i === currentIndex ? "w-8 bg-india-saffron" : "w-2 bg-white/60"
                )}
                onClick={() => setCurrentIndex(i)}
              />
            ))}
          </div>

          <div className="flex justify-between mt-8">
            <button
              onClick={prevSlide}
              className="bg-white/20 hover:bg-white/30 p-3 rounded-full transition-colors"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={nextSlide}
              className="bg-white/20 hover:bg-white/30 p-3 rounded-full transition-colors"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

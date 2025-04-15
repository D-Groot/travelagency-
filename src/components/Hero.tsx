import React, { useState, useEffect } from "react";
import { ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface HeroImage {
  url: string;
  title: string;
  subtitle: string;
}

const Hero: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const navigate = useNavigate();

  const heroImages: HeroImage[] = [
    {
      url: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=2071&auto=format&fit=crop",
      title: "Discover India's Magic",
      subtitle: "Explore the vibrant colors and rich heritage",
    },
    {
      url: "https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?q=80&w=2070&auto=format&fit=crop",
      title: "Experience Incredible India",
      subtitle: "From majestic mountains to golden beaches",
    },
    {
      url: "https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&w=2070&auto=format&fit=crop",
      title: "Journey Through Tradition",
      subtitle: "Authentic experiences in the heart of India",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 6000);

    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Hero Images */}
      {heroImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentImageIndex ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url(${image.url})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="hero-overlay"></div>
        </div>
      ))}

      {/* Content */}
      <div className="relative h-full flex items-center justify-start container">
        <div className="max-w-2xl text-white z-10 animate-fade-in">
          <p className="mb-2 text-india-saffron font-semibold tracking-wider">
            PERSONALIZED TRAVEL EXPERIENCES
          </p>
          <h1 className="mb-4">{heroImages[currentImageIndex].title}</h1>
          <p className="text-xl mb-8">{heroImages[currentImageIndex].subtitle}</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              className="btn-primary flex items-center justify-center gap-2"
              onClick={() => navigate('/destinations')}
            >
              Explore Destinations
              <ChevronRight className="h-4 w-4" />
            </button>
            <button 
              className="border-2 border-white hover:border-india-saffron text-white px-6 py-3 rounded-md font-medium hover:text-india-saffron transition-all"
              onClick={() => navigate('/booking')}
            >
              Plan Your Trip
            </button>
          </div>
        </div>
      </div>

      {/* Image Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {heroImages.map((_, index) => (
          <button
            key={index}
            className={`h-2 rounded-full transition-all ${
              index === currentImageIndex
                ? "w-8 bg-india-saffron"
                : "w-2 bg-white/60"
            }`}
            onClick={() => setCurrentImageIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;


import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { X } from "lucide-react";

interface GalleryItem {
  id: number;
  image: string;
  title: string;
  location: string;
  category: string;
}

const Gallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  
  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&q=80&w=2071",
      title: "Taj Mahal at Sunrise",
      location: "Agra, Uttar Pradesh",
      category: "monuments"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1514222134-b57cbb8ce073?auto=format&fit=crop&q=80&w=1974",
      title: "Holi Festival Celebrations",
      location: "Vrindavan, Uttar Pradesh",
      category: "culture"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1589493753822-7d1370f9ca9b?auto=format&fit=crop&q=80&w=2074",
      title: "Varanasi Ghats",
      location: "Varanasi, Uttar Pradesh",
      category: "spiritual"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1609340711189-69036fe6e121?auto=format&fit=crop&q=80&w=1974",
      title: "Kerala Backwaters Cruise",
      location: "Alleppey, Kerala",
      category: "nature"
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1618481187862-904021f56177?auto=format&fit=crop&q=80&w=2070",
      title: "Jaisalmer Desert Safari",
      location: "Jaisalmer, Rajasthan",
      category: "adventure"
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1598091383021-15ddea10925d?auto=format&fit=crop&q=80&w=2070",
      title: "Mountain Views at Spiti Valley",
      location: "Spiti Valley, Himachal Pradesh",
      category: "nature"
    },
    {
      id: 7,
      image: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&q=80&w=1935",
      title: "Amber Fort Architecture",
      location: "Jaipur, Rajasthan",
      category: "monuments"
    },
    {
      id: 8,
      image: "https://images.unsplash.com/photo-1624456735729-03594a40c5fb?auto=format&fit=crop&q=80&w=1974",
      title: "Local Market Experience",
      location: "Delhi",
      category: "culture"
    },
    {
      id: 9,
      image: "https://images.unsplash.com/photo-1585264550248-1778be3b6368?auto=format&fit=crop&q=80&w=1974",
      title: "Traditional Dance Performance",
      location: "Udaipur, Rajasthan",
      category: "culture"
    },
    {
      id: 10,
      image: "https://images.unsplash.com/photo-1606561960465-60c921dfaa9f?auto=format&fit=crop&q=80&w=1974",
      title: "Golden Temple",
      location: "Amritsar, Punjab",
      category: "spiritual"
    },
    {
      id: 11,
      image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&q=80&w=2074",
      title: "Goa Beach Sunset",
      location: "Palolem, Goa",
      category: "beach"
    },
    {
      id: 12,
      image: "https://images.unsplash.com/photo-1576426863848-c21f53c60b19?auto=format&fit=crop&q=80&w=2070",
      title: "Himalayan Trekking",
      location: "Manali, Himachal Pradesh",
      category: "adventure"
    },
  ];
  
  const filteredGallery = selectedCategory === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  const openLightbox = (item: GalleryItem) => {
    setSelectedImage(item);
    document.body.style.overflow = 'hidden';
  };
  
  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="bg-gray-50 py-20">
        <div className="container text-center">
          <h1 className="mb-4">Experience Gallery</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore beautiful moments from our travelers' journeys across India's diverse landscapes and vibrant culture.
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
            All
          </button>
          <button 
            onClick={() => setSelectedCategory("nature")}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
              selectedCategory === "nature" ? "bg-india-saffron text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            Nature
          </button>
          <button 
            onClick={() => setSelectedCategory("culture")}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
              selectedCategory === "culture" ? "bg-india-saffron text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            Culture
          </button>
          <button 
            onClick={() => setSelectedCategory("monuments")}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
              selectedCategory === "monuments" ? "bg-india-saffron text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            Monuments
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
            onClick={() => setSelectedCategory("spiritual")}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
              selectedCategory === "spiritual" ? "bg-india-saffron text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            Spiritual
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
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredGallery.map((item) => (
            <div 
              key={item.id} 
              className="relative overflow-hidden rounded-lg shadow-md cursor-pointer group"
              onClick={() => openLightbox(item)}
            >
              <img 
                src={item.image} 
                alt={item.title}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 text-white">
                <h3 className="font-bold text-lg">{item.title}</h3>
                <p>{item.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <button 
            className="absolute top-6 right-6 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-70"
            onClick={closeLightbox}
          >
            <X className="h-6 w-6" />
          </button>
          <div className="w-full max-w-5xl">
            <img 
              src={selectedImage.image} 
              alt={selectedImage.title}
              className="w-full max-h-[80vh] object-contain mx-auto"
            />
            <div className="text-white mt-4 text-center">
              <h2 className="text-2xl font-bold">{selectedImage.title}</h2>
              <p className="text-gray-300">{selectedImage.location}</p>
            </div>
          </div>
        </div>
      )}
      
      <section className="bg-gray-50 py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2>Share Your Experience</h2>
            <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
              Have you traveled with us? We'd love to see your photos and hear about your experiences. Share them on social media using #Desire4Travels or submit them directly to us.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <button className="bg-india-saffron text-white hover:bg-india-saffron/90 px-6 py-3 rounded-md font-medium transition-all shadow-md hover:shadow-lg">
              Upload Your Photos
            </button>
            <button className="bg-white text-india-saffron border border-india-saffron hover:bg-india-saffron/10 px-6 py-3 rounded-md font-medium transition-all">
              Submit Your Story
            </button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Gallery;

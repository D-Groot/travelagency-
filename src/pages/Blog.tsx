
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BookOpen, Calendar, Tag, User } from "lucide-react";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  author: string;
  category: string;
}

const Blog: React.FC = () => {
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "10 Hidden Gems in Kerala's Backwaters",
      excerpt: "Discover the lesser-known spots along Kerala's picturesque backwaters that most tourists miss but locals treasure.",
      image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&q=80&w=2070",
      date: "April 12, 2025",
      author: "Priya Sharma",
      category: "Destinations"
    },
    {
      id: 2,
      title: "A Culinary Journey Through Rajasthan",
      excerpt: "From Dal Baati Churma to Laal Maas, explore the rich flavors and culinary traditions of royal Rajasthan.",
      image: "https://images.unsplash.com/photo-1517244683847-7456b63c5969?auto=format&fit=crop&q=80&w=1988",
      date: "April 5, 2025",
      author: "Vikram Kapoor",
      category: "Food & Culture"
    },
    {
      id: 3,
      title: "Monsoon Trekking: Tips for Hiking in the Western Ghats",
      excerpt: "Essential advice for making the most of monsoon treks while staying safe and responsible in these biodiversity hotspots.",
      image: "https://images.unsplash.com/photo-1470104240373-bc1812eddc9f?auto=format&fit=crop&q=80&w=2070",
      date: "March 28, 2025",
      author: "Rahul Mehta",
      category: "Adventure"
    },
    {
      id: 4,
      title: "Photography Guide: Capturing India's Festivals",
      excerpt: "Tips and techniques to capture the vibrant colors, emotions, and energy of India's diverse festivals.",
      image: "https://images.unsplash.com/photo-1564509143629-5a9209e86d77?auto=format&fit=crop&q=80&w=1887",
      date: "March 20, 2025",
      author: "Anjali Desai",
      category: "Photography"
    },
    {
      id: 5,
      title: "Sustainable Tourism Practices for Himalayan Travel",
      excerpt: "How to minimize your environmental impact while exploring the fragile ecosystems of the Indian Himalayas.",
      image: "https://images.unsplash.com/photo-1607836046730-3317b4721b80?auto=format&fit=crop&q=80&w=2070",
      date: "March 15, 2025",
      author: "Nitin Singh",
      category: "Eco-Tourism"
    },
    {
      id: 6,
      title: "Budget Guide: Exploring Varanasi for Under ₹10,000",
      excerpt: "A complete guide to experiencing the spiritual capital of India without breaking the bank.",
      image: "https://images.unsplash.com/photo-1561361058-c24cecee4148?auto=format&fit=crop&q=80&w=2070",
      date: "March 8, 2025",
      author: "Meera Joshi",
      category: "Budget Travel"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="bg-gray-50 py-20">
        <div className="container text-center">
          <h1 className="mb-4">Travel Blogs & Tips</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover insights, stories, and practical advice for your Indian adventures from our expert travelers.
          </p>
        </div>
      </div>
      
      <div className="container py-16">
        <div className="mb-12 flex flex-wrap items-center justify-between">
          <h2>Latest Articles</h2>
          <div className="flex gap-4 mt-4 md:mt-0">
            <select className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-india-saffron">
              <option>All Categories</option>
              <option>Destinations</option>
              <option>Food & Culture</option>
              <option>Adventure</option>
              <option>Photography</option>
              <option>Eco-Tourism</option>
              <option>Budget Travel</option>
            </select>
            <input 
              type="text" 
              placeholder="Search articles..." 
              className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-india-saffron"
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform hover:translate-y-[-5px]">
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-52 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <span className="bg-india-saffron/10 text-india-saffron text-sm font-semibold px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>
                <h3 className="mb-3 text-xl font-bold">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-1" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>{post.date}</span>
                  </div>
                </div>
                <a 
                  href={`/blog/${post.id}`}
                  className="mt-4 inline-flex items-center text-india-saffron font-medium hover:text-india-saffron/80"
                >
                  Read More 
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 flex justify-center">
          <div className="flex space-x-2">
            <button className="px-4 py-2 rounded-md bg-india-saffron text-white">1</button>
            <button className="px-4 py-2 rounded-md bg-white text-gray-700 hover:bg-gray-100">2</button>
            <button className="px-4 py-2 rounded-md bg-white text-gray-700 hover:bg-gray-100">3</button>
            <button className="px-4 py-2 rounded-md bg-white text-gray-700 hover:bg-gray-100">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
            </button>
          </div>
        </div>
      </div>
      
      <section className="container py-16">
        <div className="bg-india-saffron/10 rounded-xl p-8">
          <div className="text-center mb-8">
            <h2 className="mb-4">Subscribe to Our Newsletter</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Stay updated with our latest travel guides, tips, and exclusive offers delivered straight to your inbox.
            </p>
          </div>
          <div className="max-w-md mx-auto flex">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="px-4 py-3 rounded-l-md flex-1 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-india-saffron"
            />
            <button className="bg-india-saffron text-white px-6 py-3 rounded-r-md font-medium hover:bg-india-saffron/90">
              Subscribe
            </button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Blog;

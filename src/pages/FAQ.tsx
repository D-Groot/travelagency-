
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ChevronDown, ChevronUp, Search } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  
  const faqItems: FAQItem[] = [
    {
      question: "How far in advance should I book my trip to India?",
      answer: "We recommend booking at least 3-6 months in advance, especially if you're planning to travel during peak season (October to March). This ensures availability of the best accommodations and experiences. For festival periods like Diwali or Holi, booking 6-8 months ahead is advisable.",
      category: "booking"
    },
    {
      question: "Do I need a visa to visit India?",
      answer: "Yes, most foreign nationals require a visa to enter India. Many countries are eligible for e-Visa, which can be applied for online. We recommend checking the official Indian government visa website for the most current requirements specific to your nationality. We can provide guidance on the application process but cannot apply for visas on your behalf.",
      category: "practical"
    },
    {
      question: "What's the best time to visit India?",
      answer: "The ideal time to visit India depends on the regions you want to explore. Generally, October to March offers pleasant weather across most of the country. Summer (April to June) can be very hot in most regions but is good for visiting the Himalayas. The monsoon season (July to September) brings heavy rains to most parts, though it makes Kerala and some hill stations lush and beautiful.",
      category: "planning"
    },
    {
      question: "Are your trips customizable?",
      answer: "Absolutely! While we offer curated packages, we specialize in creating personalized itineraries based on your interests, preferences, and travel style. Whether you want to focus on cultural experiences, adventure activities, wildlife, spirituality, or culinary delights, we can tailor a journey specifically for you.",
      category: "booking"
    },
    {
      question: "What vaccinations do I need for India?",
      answer: "We recommend consulting your doctor or a travel medicine specialist 4-8 weeks before your trip. Typically, vaccinations for Hepatitis A and B, Typhoid, and Tetanus are advised. Depending on your activities and the regions you'll visit, additional vaccinations may be recommended. Yellow fever vaccination certificates are required if you're arriving from an infected area.",
      category: "health"
    },
    {
      question: "Is it safe to travel in India?",
      answer: "India is generally safe for travelers, but like any destination, it's important to take common-sense precautions. We work with trusted local partners and experienced guides who prioritize your safety. We also provide comprehensive pre-departure information including safety tips specific to the regions you'll be visiting. Our 24/7 support ensures assistance whenever you need it.",
      category: "safety"
    },
    {
      question: "What's included in your package prices?",
      answer: "Our standard packages typically include accommodation, domestic transportation, guided tours, entrance fees to attractions, and some meals as specified in the itinerary. International flights, visa fees, travel insurance, personal expenses, and some meals are usually not included. Each package details exactly what's included and excluded to avoid any surprises.",
      category: "booking"
    },
    {
      question: "What types of accommodation do you offer?",
      answer: "We offer a range of accommodations to suit different preferences and budgets, from luxury 5-star hotels and heritage palaces to boutique properties, eco-resorts, and authentic homestays. All accommodations are personally vetted by our team to ensure they meet our standards of cleanliness, comfort, service, and authenticity.",
      category: "planning"
    },
    {
      question: "How much spending money should I bring?",
      answer: "This depends on your personal spending habits and what's included in your package. As a rough guide, for incidentals, shopping, and meals not included in your package, budgeting $30-50 USD per day is reasonable for most travelers. Major cities accept credit cards widely, but it's good to carry some cash for smaller establishments and rural areas.",
      category: "practical"
    },
    {
      question: "Can you accommodate dietary restrictions?",
      answer: "Yes, we can accommodate various dietary requirements including vegetarian, vegan, gluten-free, and allergies. India has a rich tradition of vegetarian cuisine, making it an excellent destination for non-meat eaters. Please inform us about any dietary restrictions when booking so we can make appropriate arrangements.",
      category: "health"
    },
    {
      question: "What's your cancellation policy?",
      answer: "Our standard cancellation policy provides a full refund (minus processing fees) for cancellations made 60 days or more before departure. Cancellations between 30-59 days receive a 50% refund, while those less than 30 days before departure are non-refundable. We strongly recommend purchasing comprehensive travel insurance that includes cancellation coverage. For detailed terms specific to your booking, please refer to your travel agreement.",
      category: "booking"
    },
    {
      question: "Do I need travel insurance?",
      answer: "Yes, comprehensive travel insurance is mandatory for all our trips. Your policy should cover medical expenses, emergency evacuation, trip cancellation, and lost or stolen belongings. We recommend purchasing insurance as soon as you book your trip. We can suggest insurance providers suitable for travel in India if needed.",
      category: "practical"
    },
  ];
  
  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  
  // Filter FAQs based on search term and active category
  const filteredFAQs = faqItems.filter((item) => {
    const matchesSearch = item.question.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         item.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === "all" || item.category === activeCategory;
    
    return matchesSearch && matchesCategory;
  });
  
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="bg-gray-50 py-20">
        <div className="container text-center">
          <h1 className="mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions about traveling with Desire4Travels.
          </p>
        </div>
      </div>
      
      <div className="container py-16">
        <div className="max-w-4xl mx-auto mb-12">
          <div className="relative mb-8">
            <input 
              type="text"
              placeholder="Search for questions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full p-4 pl-12 pr-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-india-saffron"
            />
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          </div>
          
          <div className="flex flex-wrap gap-3 mb-10">
            <button 
              onClick={() => setActiveCategory("all")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === "all" ? "bg-india-saffron text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              All
            </button>
            <button 
              onClick={() => setActiveCategory("booking")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === "booking" ? "bg-india-saffron text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Booking & Payments
            </button>
            <button 
              onClick={() => setActiveCategory("planning")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === "planning" ? "bg-india-saffron text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Trip Planning
            </button>
            <button 
              onClick={() => setActiveCategory("practical")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === "practical" ? "bg-india-saffron text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Practical Info
            </button>
            <button 
              onClick={() => setActiveCategory("health")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === "health" ? "bg-india-saffron text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Health & Safety
            </button>
            <button 
              onClick={() => setActiveCategory("safety")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === "safety" ? "bg-india-saffron text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Safety
            </button>
          </div>
          
          <div className="space-y-4">
            {filteredFAQs.length > 0 ? (
              filteredFAQs.map((faq, index) => (
                <div 
                  key={index} 
                  className="border border-gray-200 rounded-lg overflow-hidden bg-white"
                >
                  <button
                    className="flex justify-between items-center w-full p-5 text-left"
                    onClick={() => toggleFAQ(index)}
                  >
                    <h3 className="font-medium text-lg">{faq.question}</h3>
                    {activeIndex === index ? (
                      <ChevronUp className="h-5 w-5 text-india-saffron" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-500" />
                    )}
                  </button>
                  
                  <div 
                    className={`px-5 pb-5 ${activeIndex === index ? 'block' : 'hidden'}`}
                  >
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-10">
                <p className="text-gray-500 text-lg">No results found for your search. Please try different keywords.</p>
              </div>
            )}
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto mt-16 bg-india-saffron/10 rounded-xl p-8 text-center">
          <h2 className="mb-4">Still Have Questions?</h2>
          <p className="text-gray-600 mb-8">
            If you couldn't find the answer to your question, please don't hesitate to reach out to us directly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="btn-primary">
              Contact Us
            </a>
            <a href="tel:+919876543210" className="bg-white text-india-saffron border border-india-saffron hover:bg-india-saffron/10 px-6 py-3 rounded-md font-medium transition-all">
              Call Us Now
            </a>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default FAQ;


import React from "react";
import { Shield, Award, Users, Heart } from "lucide-react";

const TrustSection: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Travelers Trust Us</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join thousands of satisfied travelers who have experienced the magic of India with us.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:transform hover:scale-105 transition-transform">
            <div className="inline-flex p-4 rounded-full bg-india-saffron/10 mb-4">
              <Shield className="h-8 w-8 text-india-saffron" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Licensed & Insured</h3>
            <p className="text-gray-600">
              Fully licensed travel operator with comprehensive insurance coverage.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:transform hover:scale-105 transition-transform">
            <div className="inline-flex p-4 rounded-full bg-india-saffron/10 mb-4">
              <Award className="h-8 w-8 text-india-saffron" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Award Winning</h3>
            <p className="text-gray-600">
              Recognized for excellence in Indian tourism and customer satisfaction.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:transform hover:scale-105 transition-transform">
            <div className="inline-flex p-4 rounded-full bg-india-saffron/10 mb-4">
              <Users className="h-8 w-8 text-india-saffron" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Expert Team</h3>
            <p className="text-gray-600">
              Experienced local guides and travel professionals at your service.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:transform hover:scale-105 transition-transform">
            <div className="inline-flex p-4 rounded-full bg-india-saffron/10 mb-4">
              <Heart className="h-8 w-8 text-india-saffron" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Happy Travelers</h3>
            <p className="text-gray-600">
              Over 10,000+ satisfied customers and counting.
            </p>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <div className="inline-grid grid-cols-3 gap-8 px-8 py-6 bg-white rounded-lg shadow-lg">
            <div className="text-center">
              <p className="text-3xl font-bold text-india-saffron">98%</p>
              <p className="text-sm text-gray-600">Satisfaction Rate</p>
            </div>
            <div className="text-center border-x border-gray-200">
              <p className="text-3xl font-bold text-india-saffron">10K+</p>
              <p className="text-sm text-gray-600">Happy Travelers</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-india-saffron">150+</p>
              <p className="text-sm text-gray-600">Destinations</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;

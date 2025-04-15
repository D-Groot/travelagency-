
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Phone, Mail, MapPin, Clock, Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import { Label } from "@/components/ui/label";

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="bg-gray-50 py-20">
        <div className="container text-center">
          <h1 className="mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have questions about our travel services? Ready to start planning your Indian adventure? Get in touch with our team today.
          </p>
        </div>
      </div>
      
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="mb-6">Get In Touch</h2>
            <p className="text-gray-600 mb-8">
              Fill out the form, and one of our travel experts will contact you shortly to discuss your travel plans and answer any questions you may have.
            </p>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="first_name">First Name</Label>
                  <input 
                    id="first_name" 
                    type="text"
                    className="mt-1 w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-india-saffron"
                  />
                </div>
                
                <div>
                  <Label htmlFor="last_name">Last Name</Label>
                  <input 
                    id="last_name" 
                    type="text"
                    className="mt-1 w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-india-saffron"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <input 
                    id="email" 
                    type="email"
                    className="mt-1 w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-india-saffron"
                  />
                </div>
                
                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <input 
                    id="phone" 
                    type="tel"
                    className="mt-1 w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-india-saffron"
                  />
                </div>
              </div>
              
              <div>
                <Label htmlFor="subject">Subject</Label>
                <input 
                  id="subject" 
                  type="text"
                  className="mt-1 w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-india-saffron"
                />
              </div>
              
              <div>
                <Label htmlFor="message">Message</Label>
                <textarea 
                  id="message" 
                  rows={5}
                  className="mt-1 w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-india-saffron"
                />
              </div>
              
              <div>
                <button type="submit" className="btn-primary">
                  Send Message
                </button>
              </div>
            </form>
          </div>
          
          <div>
            <h2 className="mb-6">Contact Information</h2>
            <p className="text-gray-600 mb-8">
              You can reach us directly using the following information, or visit our office in Delhi.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-india-saffron/10 p-3 rounded-full mr-4">
                  <MapPin className="h-6 w-6 text-india-saffron" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Our Office</h3>
                  <p className="text-gray-600">123 Travel Street, Connaught Place<br />New Delhi, India 110001</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-india-saffron/10 p-3 rounded-full mr-4">
                  <Phone className="h-6 w-6 text-india-saffron" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Phone</h3>
                  <p className="text-gray-600">+91 98765 43210<br />+91 87654 32109</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-india-saffron/10 p-3 rounded-full mr-4">
                  <Mail className="h-6 w-6 text-india-saffron" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Email</h3>
                  <p className="text-gray-600">info@desire4travels.com<br />bookings@desire4travels.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-india-saffron/10 p-3 rounded-full mr-4">
                  <Clock className="h-6 w-6 text-india-saffron" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Working Hours</h3>
                  <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM<br />Saturday: 10:00 AM - 4:00 PM<br />Sunday: Closed</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h3 className="font-semibold text-lg mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="bg-gray-100 hover:bg-india-saffron/10 p-3 rounded-full transition-colors">
                  <Facebook className="h-5 w-5 text-india-saffron" />
                </a>
                <a href="#" className="bg-gray-100 hover:bg-india-saffron/10 p-3 rounded-full transition-colors">
                  <Twitter className="h-5 w-5 text-india-saffron" />
                </a>
                <a href="#" className="bg-gray-100 hover:bg-india-saffron/10 p-3 rounded-full transition-colors">
                  <Instagram className="h-5 w-5 text-india-saffron" />
                </a>
                <a href="#" className="bg-gray-100 hover:bg-india-saffron/10 p-3 rounded-full transition-colors">
                  <Youtube className="h-5 w-5 text-india-saffron" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="w-full h-96">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.690685839459!2d77.21759812452803!3d28.632978186394257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd37b741d057%3A0xcdee88e47393c3f1!2sConnaught%20Place%2C%20New%20Delhi%2C%20Delhi%20110001!5e0!3m2!1sen!2sin!4v1686127117907!5m2!1sen!2sin" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Desire4Travels Office Location"
        />
      </div>
      
      <Footer />
    </div>
  );
};

export default Contact;

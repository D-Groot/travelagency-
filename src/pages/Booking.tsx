
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Calendar, Users, CreditCard, Check } from "lucide-react";
import { Label } from "@/components/ui/label";

const Booking: React.FC = () => {
  const [step, setStep] = useState(1);
  const [totalSteps] = useState(3);
  
  const nextStep = () => {
    setStep(step + 1);
    window.scrollTo(0, 0);
  };
  
  const prevStep = () => {
    setStep(step - 1);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="bg-gray-50 py-20">
        <div className="container text-center">
          <h1 className="mb-4">Book Your Journey</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Complete the form below to book your personalized travel experience with Desire4Travels.
          </p>
        </div>
      </div>
      
      <div className="container py-16">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <div className="flex justify-between items-center relative">
              {[...Array(totalSteps)].map((_, index) => (
                <div key={index} className="relative z-10 flex items-center flex-col">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    step > index + 1 ? "bg-india-green text-white" :
                    step === index + 1 ? "bg-india-saffron text-white" :
                    "bg-gray-200 text-gray-600"
                  }`}>
                    {step > index + 1 ? <Check className="h-5 w-5" /> : index + 1}
                  </div>
                  <span className="text-sm font-medium mt-2 text-gray-600">
                    {index === 0 ? "Trip Details" : index === 1 ? "Personal Information" : "Payment"}
                  </span>
                </div>
              ))}
              <div className="absolute top-5 left-0 right-0 h-0.5 bg-gray-200 -z-0">
                <div 
                  className="h-full bg-india-saffron transition-all" 
                  style={{ width: `${((step - 1) / (totalSteps - 1)) * 100}%` }}
                />
              </div>
            </div>
          </div>
          
          {step === 1 && (
            <div className="bg-white rounded-xl p-8 shadow-md">
              <h2 className="text-2xl font-bold mb-6">Trip Details</h2>
              
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="destination">Destination/Package</Label>
                    <select 
                      id="destination" 
                      className="mt-1 w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-india-saffron"
                    >
                      <option value="">Select a destination or package</option>
                      <option value="rajasthan">Royal Rajasthan Tour</option>
                      <option value="kerala">Kerala Backwaters Cruise</option>
                      <option value="himalaya">Himalayan Adventure</option>
                      <option value="golden">Golden Triangle Tour</option>
                      <option value="goa">Goa Beach Retreat</option>
                      <option value="custom">Custom Package</option>
                    </select>
                  </div>
                  
                  <div>
                    <Label htmlFor="travellers">Number of Travelers</Label>
                    <div className="mt-1 relative">
                      <select 
                        id="travellers" 
                        className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-india-saffron appearance-none"
                      >
                        <option value="1">1 Person</option>
                        <option value="2">2 People</option>
                        <option value="3">3 People</option>
                        <option value="4">4 People</option>
                        <option value="5">5+ People</option>
                      </select>
                      <Users className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500 pointer-events-none" />
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="start_date">Trip Start Date</Label>
                    <div className="mt-1 relative">
                      <input 
                        id="start_date" 
                        type="date"
                        className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-india-saffron"
                      />
                      <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500 pointer-events-none" />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="end_date">Trip End Date</Label>
                    <div className="mt-1 relative">
                      <input 
                        id="end_date" 
                        type="date"
                        className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-india-saffron"
                      />
                      <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500 pointer-events-none" />
                    </div>
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="preferences">Special Preferences or Requirements</Label>
                  <textarea 
                    id="preferences" 
                    rows={4}
                    placeholder="Tell us about any special requirements, interests, or preferences for your trip..."
                    className="mt-1 w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-india-saffron"
                  />
                </div>
                
                <div className="flex justify-end">
                  <button 
                    onClick={nextStep}
                    className="btn-primary"
                  >
                    Continue
                  </button>
                </div>
              </div>
            </div>
          )}
          
          {step === 2 && (
            <div className="bg-white rounded-xl p-8 shadow-md">
              <h2 className="text-2xl font-bold mb-6">Personal Information</h2>
              
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                  <Label htmlFor="address">Address</Label>
                  <input 
                    id="address" 
                    type="text"
                    className="mt-1 w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-india-saffron"
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <Label htmlFor="city">City</Label>
                    <input 
                      id="city" 
                      type="text"
                      className="mt-1 w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-india-saffron"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="country">Country</Label>
                    <select 
                      id="country" 
                      className="mt-1 w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-india-saffron"
                    >
                      <option value="">Select Country</option>
                      <option value="in">India</option>
                      <option value="us">United States</option>
                      <option value="uk">United Kingdom</option>
                      <option value="ca">Canada</option>
                      <option value="au">Australia</option>
                      <option value="sg">Singapore</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <Label htmlFor="zip">Postal/Zip Code</Label>
                    <input 
                      id="zip" 
                      type="text"
                      className="mt-1 w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-india-saffron"
                    />
                  </div>
                </div>
                
                <div className="flex justify-between">
                  <button 
                    onClick={prevStep}
                    className="px-6 py-3 bg-gray-200 text-gray-700 hover:bg-gray-300 rounded-md font-medium transition-all"
                  >
                    Back
                  </button>
                  <button 
                    onClick={nextStep}
                    className="btn-primary"
                  >
                    Continue
                  </button>
                </div>
              </div>
            </div>
          )}
          
          {step === 3 && (
            <div className="bg-white rounded-xl p-8 shadow-md">
              <h2 className="text-2xl font-bold mb-6">Payment Details</h2>
              
              <div className="mb-8 p-4 bg-gray-50 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Booking Summary</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Package:</span>
                    <span className="font-medium">Royal Rajasthan Tour</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Duration:</span>
                    <span className="font-medium">7 Days / 6 Nights</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Travelers:</span>
                    <span className="font-medium">2 Adults</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Dates:</span>
                    <span className="font-medium">May 15, 2023 - May 21, 2023</span>
                  </div>
                  <div className="border-t border-gray-200 mt-2 pt-2 flex justify-between">
                    <span className="font-semibold">Total Amount:</span>
                    <span className="font-bold">₹90,000</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div>
                  <Label htmlFor="card_name">Name on Card</Label>
                  <input 
                    id="card_name" 
                    type="text"
                    className="mt-1 w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-india-saffron"
                  />
                </div>
                
                <div>
                  <Label htmlFor="card_number">Card Number</Label>
                  <div className="mt-1 relative">
                    <input 
                      id="card_number" 
                      type="text"
                      placeholder="XXXX XXXX XXXX XXXX"
                      className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-india-saffron"
                    />
                    <CreditCard className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500" />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="expiry">Expiry Date</Label>
                    <input 
                      id="expiry" 
                      type="text"
                      placeholder="MM/YY"
                      className="mt-1 w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-india-saffron"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="cvv">CVV</Label>
                    <input 
                      id="cvv" 
                      type="text"
                      placeholder="XXX"
                      className="mt-1 w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-india-saffron"
                    />
                  </div>
                </div>
                
                <div className="flex items-start mt-6">
                  <input 
                    id="terms" 
                    type="checkbox"
                    className="h-5 w-5 mt-0.5 text-india-saffron rounded border-gray-300 focus:ring-india-saffron"
                  />
                  <label htmlFor="terms" className="ml-2 text-gray-600">
                    I accept the <a href="#" className="text-india-saffron hover:underline">Terms and Conditions</a> and <a href="#" className="text-india-saffron hover:underline">Privacy Policy</a>
                  </label>
                </div>
                
                <div className="flex justify-between mt-8">
                  <button 
                    onClick={prevStep}
                    className="px-6 py-3 bg-gray-200 text-gray-700 hover:bg-gray-300 rounded-md font-medium transition-all"
                  >
                    Back
                  </button>
                  <button 
                    className="btn-primary"
                  >
                    Complete Booking
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Booking;

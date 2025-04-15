import React, { useState } from "react";
import { ChevronDown, Users, Package, Clock, MessageSquare, BarChart3, Settings, LogOut, Home, Menu, X, PlusCircle, Edit, Trash2, Search } from "lucide-react";

interface SidebarItemProps {
  icon: React.ElementType;
  text: string;
  active?: boolean;
  onClick?: () => void;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ icon: Icon, text, active, onClick }) => {
  return (
    <li>
      <button
        className={`flex items-center w-full px-3 py-2 rounded-md ${
          active 
            ? "bg-india-saffron text-white" 
            : "text-gray-700 hover:bg-gray-100"
        }`}
        onClick={onClick}
      >
        <Icon className="h-5 w-5 mr-3" />
        <span>{text}</span>
      </button>
    </li>
  );
};

const Admin: React.FC = () => {
  const [activeSection, setActiveSection] = useState("dashboard");
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  
  const renderDashboard = () => (
    <div>
      <h2 className="text-2xl font-bold mb-6">Dashboard</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-india-saffron">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-gray-600 font-medium">Total Bookings</h3>
            <Package className="h-8 w-8 text-india-saffron" />
          </div>
          <p className="text-3xl font-bold">248</p>
          <p className="text-green-600 text-sm font-medium mt-2">+12% from last month</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-india-green">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-gray-600 font-medium">Active Customers</h3>
            <Users className="h-8 w-8 text-india-green" />
          </div>
          <p className="text-3xl font-bold">1,842</p>
          <p className="text-green-600 text-sm font-medium mt-2">+8% from last month</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-gray-600 font-medium">Upcoming Tours</h3>
            <Clock className="h-8 w-8 text-blue-500" />
          </div>
          <p className="text-3xl font-bold">32</p>
          <p className="text-yellow-600 text-sm font-medium mt-2">Same as last month</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-purple-500">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-gray-600 font-medium">New Inquiries</h3>
            <MessageSquare className="h-8 w-8 text-purple-500" />
          </div>
          <p className="text-3xl font-bold">78</p>
          <p className="text-red-600 text-sm font-medium mt-2">-5% from last month</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-md">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-bold text-lg">Booking Analytics</h3>
            <div className="relative">
              <select className="bg-gray-100 border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded-md focus:outline-none focus:ring-2 focus:ring-india-saffron appearance-none">
                <option>Last 7 Days</option>
                <option>Last 30 Days</option>
                <option>Last 3 Months</option>
                <option>Last 12 Months</option>
              </select>
              <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500 pointer-events-none" />
            </div>
          </div>
          
          <div className="h-64 flex items-center justify-center bg-gray-50 rounded-md">
            <p className="text-gray-500">Chart placeholder - Booking trends over time</p>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="font-bold text-lg mb-6">Top Destinations</h3>
          
          <div className="space-y-4">
            <div>
              <div className="flex justify-between items-center mb-1">
                <span className="font-medium">Rajasthan</span>
                <span className="text-sm text-gray-600">28%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-india-saffron h-2 rounded-full" style={{ width: "28%" }}></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between items-center mb-1">
                <span className="font-medium">Kerala</span>
                <span className="text-sm text-gray-600">23%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-india-saffron h-2 rounded-full" style={{ width: "23%" }}></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between items-center mb-1">
                <span className="font-medium">Golden Triangle</span>
                <span className="text-sm text-gray-600">18%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-india-saffron h-2 rounded-full" style={{ width: "18%" }}></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between items-center mb-1">
                <span className="font-medium">Goa</span>
                <span className="text-sm text-gray-600">15%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-india-saffron h-2 rounded-full" style={{ width: "15%" }}></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between items-center mb-1">
                <span className="font-medium">Himalayas</span>
                <span className="text-sm text-gray-600">12%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-india-saffron h-2 rounded-full" style={{ width: "12%" }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  
  const renderBookings = () => (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Bookings</h2>
        <div className="flex items-center space-x-2">
          <div className="relative">
            <input 
              type="text" 
              placeholder="Search bookings..." 
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-india-saffron"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          </div>
          <button className="btn-primary flex items-center">
            <PlusCircle className="h-5 w-5 mr-2" /> New Booking
          </button>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Destination</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Travel Dates</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">#B12345</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Sarah Johnson</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Royal Rajasthan Tour</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">May 15, 2025 - May 21, 2025</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    Confirmed
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">₹90,000</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <div className="flex space-x-2">
                    <button className="text-blue-600 hover:text-blue-900">
                      <Edit className="h-5 w-5" />
                    </button>
                    <button className="text-red-600 hover:text-red-900">
                      <Trash2 className="h-5 w-5" />
                    </button>
                  </div>
                </td>
              </tr>
              
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">#B12344</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">James Wilson</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Kerala Backwaters Cruise</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">June 02, 2025 - June 06, 2025</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                    Pending
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">₹35,000</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <div className="flex space-x-2">
                    <button className="text-blue-600 hover:text-blue-900">
                      <Edit className="h-5 w-5" />
                    </button>
                    <button className="text-red-600 hover:text-red-900">
                      <Trash2 className="h-5 w-5" />
                    </button>
                  </div>
                </td>
              </tr>
              
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">#B12343</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Akira Tanaka</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Golden Triangle Tour</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">June 10, 2025 - June 14, 2025</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    Confirmed
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">₹30,000</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <div className="flex space-x-2">
                    <button className="text-blue-600 hover:text-blue-900">
                      <Edit className="h-5 w-5" />
                    </button>
                    <button className="text-red-600 hover:text-red-900">
                      <Trash2 className="h-5 w-5" />
                    </button>
                  </div>
                </td>
              </tr>
              
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">#B12342</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Martinez Family</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Family Adventure North India</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">July 05, 2025 - July 15, 2025</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                    Cancelled
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">₹120,000</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <div className="flex space-x-2">
                    <button className="text-blue-600 hover:text-blue-900">
                      <Edit className="h-5 w-5" />
                    </button>
                    <button className="text-red-600 hover:text-red-900">
                      <Trash2 className="h-5 w-5" />
                    </button>
                  </div>
                </td>
              </tr>
              
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">#B12341</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">David Chen</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Photography Tour Rajasthan</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">August 12, 2025 - August 22, 2025</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                    Draft
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">₹85,000</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <div className="flex space-x-2">
                    <button className="text-blue-600 hover:text-blue-900">
                      <Edit className="h-5 w-5" />
                    </button>
                    <button className="text-red-600 hover:text-red-900">
                      <Trash2 className="h-5 w-5" />
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div className="px-6 py-3 flex justify-between items-center border-t border-gray-200">
          <div className="text-sm text-gray-700">
            Showing <span className="font-medium">1</span> to <span className="font-medium">5</span> of <span className="font-medium">42</span> results
          </div>
          <div className="flex space-x-2">
            <button className="px-3 py-1 border border-gray-300 rounded-md bg-white text-gray-700 hover:bg-gray-50">
              Previous
            </button>
            <button className="px-3 py-1 border border-india-saffron rounded-md bg-india-saffron text-white">
              1
            </button>
            <button className="px-3 py-1 border border-gray-300 rounded-md bg-white text-gray-700 hover:bg-gray-50">
              2
            </button>
            <button className="px-3 py-1 border border-gray-300 rounded-md bg-white text-gray-700 hover:bg-gray-50">
              3
            </button>
            <button className="px-3 py-1 border border-gray-300 rounded-md bg-white text-gray-700 hover:bg-gray-50">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
  
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-white shadow-sm sticky top-0 z-30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <button 
                className="lg:hidden mr-4"
                onClick={() => setIsMobileSidebarOpen(!isMobileSidebarOpen)}
              >
                {isMobileSidebarOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
              <a href="/admin" className="font-bold text-2xl">
                Desire<span className="text-india-saffron">4</span>Travels Admin
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <a href="/" className="flex items-center text-gray-600 hover:text-india-saffron">
                <Home className="h-5 w-5 mr-1" />
                <span className="hidden md:inline">View Website</span>
              </a>
              <div className="flex items-center">
                <img 
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=2070"
                  alt="Admin User"
                  className="h-8 w-8 rounded-full"
                />
                <span className="ml-2 hidden md:inline font-medium">Admin User</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 flex">
        {/* Mobile Sidebar */}
        <aside 
          className={`fixed inset-0 transform ${
            isMobileSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } lg:hidden z-20 bg-white h-full w-64 py-4 px-2 overflow-y-auto transition-transform duration-300 ease-in-out`}
        >
          <ul className="space-y-2 mt-8">
            <SidebarItem 
              icon={BarChart3} 
              text="Dashboard" 
              active={activeSection === "dashboard"}
              onClick={() => {
                setActiveSection("dashboard");
                setIsMobileSidebarOpen(false);
              }}
            />
            <SidebarItem 
              icon={Package} 
              text="Bookings" 
              active={activeSection === "bookings"}
              onClick={() => {
                setActiveSection("bookings");
                setIsMobileSidebarOpen(false);
              }}
            />
            <SidebarItem 
              icon={Users} 
              text="Customers" 
              active={activeSection === "customers"}
              onClick={() => {
                setActiveSection("customers");
                setIsMobileSidebarOpen(false);
              }}
            />
            <SidebarItem 
              icon={MessageSquare} 
              text="Inquiries" 
              active={activeSection === "inquiries"}
              onClick={() => {
                setActiveSection("inquiries");
                setIsMobileSidebarOpen(false);
              }}
            />
            <SidebarItem 
              icon={Settings} 
              text="Settings" 
              active={activeSection === "settings"}
              onClick={() => {
                setActiveSection("settings");
                setIsMobileSidebarOpen(false);
              }}
            />
            <SidebarItem 
              icon={LogOut} 
              text="Logout" 
              onClick={() => {
                // Logout functionality would go here
                window.location.href = "/";
              }}
            />
          </ul>
        </aside>
        
        {/* Desktop Sidebar */}
        <aside className="hidden lg:block w-64 bg-white rounded-lg shadow-md p-4 mr-8 h-fit">
          <ul className="space-y-2">
            <SidebarItem 
              icon={BarChart3} 
              text="Dashboard" 
              active={activeSection === "dashboard"}
              onClick={() => setActiveSection("dashboard")}
            />
            <SidebarItem 
              icon={Package} 
              text="Bookings" 
              active={activeSection === "bookings"}
              onClick={() => setActiveSection("bookings")}
            />
            <SidebarItem 
              icon={Users} 
              text="Customers" 
              active={activeSection === "customers"}
              onClick={() => setActiveSection("customers")}
            />
            <SidebarItem 
              icon={MessageSquare} 
              text="Inquiries" 
              active={activeSection === "inquiries"}
              onClick={() => setActiveSection("inquiries")}
            />
            <SidebarItem 
              icon={Settings} 
              text="Settings" 
              active={activeSection === "settings"}
              onClick={() => setActiveSection("settings")}
            />
            <SidebarItem 
              icon={LogOut} 
              text="Logout" 
              onClick={() => {
                // Logout functionality would go here
                window.location.href = "/";
              }}
            />
          </ul>
        </aside>
        
        {/* Main Content */}
        <div className="flex-1">
          {/* Overlay for mobile sidebar */}
          {isMobileSidebarOpen && (
            <div 
              className="fixed inset-0 bg-black bg-opacity-50 lg:hidden z-10"
              onClick={() => setIsMobileSidebarOpen(false)}
            />
          )}
          
          <main>
            {activeSection === "dashboard" && renderDashboard()}
            {activeSection === "bookings" && renderBookings()}
            {/* Other sections would be rendered here based on activeSection */}
            {activeSection === "customers" && (
              <div>
                <h2 className="text-2xl font-bold mb-6">Customers</h2>
                <p className="text-gray-600">Customer management interface would go here.</p>
              </div>
            )}
            {activeSection === "inquiries" && (
              <div>
                <h2 className="text-2xl font-bold mb-6">Inquiries</h2>
                <p className="text-gray-600">Inquiries management interface would go here.</p>
              </div>
            )}
            {activeSection === "settings" && (
              <div>
                <h2 className="text-2xl font-bold mb-6">Settings</h2>
                <p className="text-gray-600">Settings interface would go here.</p>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default Admin;

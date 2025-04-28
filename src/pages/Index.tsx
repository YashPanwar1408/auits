import React from "react";
import { Button } from "@/components/ui/button";
import { useNavigate, Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Shield, Sun, Upload } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted">
      {/* Hero Section */}
      <div className="hero-gradient text-white">
        <div className="container mx-auto px-4 py-20 lg:py-32 flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 space-y-6">
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              AUITS Customer Engagement & Support Application
            </h1>
            <p className="text-xl opacity-90">
              A comprehensive platform designed for solar energy customers to access support, 
              track service requests, and manage their solar systems effectively.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="bg-white text-auits-600 hover:bg-gray-100"
                onClick={() => navigate("/login")}
              >
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
             
            </div>
          </div>
          <div className="lg:w-1/2">
            <img 
              src="/lovable-uploads/fcdb3daa-a6e7-444e-83e8-70fd88ba62ba.png" 
              alt="Solar Energy Solution" 
              className="w-full rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
      
      {/* Features */}
      <div className="container mx-auto px-4 py-20 bg-[#0f172a]">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-white">
            Core Features
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Our platform is designed to streamline your solar energy experience with powerful tools 
            and intuitive interfaces.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              title: "Customer Support",
              description: "Raise and track service tickets with our intuitive ticketing system",
              icon: <CheckCircle className="h-10 w-10 text-purple-500" />
            },
            {
              title: "User Account",
              description: "Secure login with personalized dashboard for your solar system",
              icon: <Shield className="h-10 w-10 text-blue-500" />
            },
            {
              title: "Admin Dashboard",
              description: "Monitor and manage customer interactions and support requests",
              icon: <Sun className="h-10 w-10 text-yellow-500" />
            },
            {
              title: "Payment Integration",
              description: "Make secure payments for services and maintenance",
              icon: <Upload className="h-10 w-10 text-green-500" />
            }
          ].map((feature, index) => (
            <div 
              key={index}
              className="bg-[#1e293b] p-6 rounded-xl border border-gray-800 hover:border-purple-500/50 transition-all"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="bg-[#1e293b] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-gray-400">
            Join thousands of satisfied customers who are already using our platform 
            to manage their solar energy systems.
          </p>
          <Button 
            size="lg" 
            className="bg-purple-600 hover:bg-purple-700 text-white"
            onClick={() => navigate("/login")}
          >
            Sign Up Now
          </Button>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="bg-[#0f172a] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-8 px-4 pt-6">
                <img src="/lovable-uploads/logo.png" alt="AUITS Logo" className="w-10 h-10 rounded-full object-cover border-2 border-white" />
                <h1 className="font-bold text-2xl text-white">AUITS Connect</h1>
              </div>
              <p className="text-gray-400">
                A leader in sustainable solar energy solutions since 2013, specializing in providing 
                high-efficiency solar systems for residential, commercial, and industrial needs.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-lg">Quick Links</h3>
              <div className="space-y-2">
                <Link to="/about" className="block text-gray-400 hover:text-white">About Us</Link>
                <Link to="/services" className="block text-gray-400 hover:text-white">Services</Link>
                <Link to="/support" className="block text-gray-400 hover:text-white">Support</Link>
                <Link to="/contact" className="block text-gray-400 hover:text-white">Contact</Link>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-lg">Contact Information</h3>
              <div className="space-y-2 text-gray-400">
                <p>Email: info@auitspl.com</p>
                <p>Phone/WhatsApp: +91 9911791555</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
            <p>© 2025 AUITS Pvt Ltd. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

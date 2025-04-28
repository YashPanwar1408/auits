import React from "react";
import { CheckCircle, Wrench, BarChart, Users, CreditCard } from "lucide-react";

const Services = () => (
  <div className="min-h-screen bg-gradient-to-b from-[#0f172a] to-[#1e293b] flex flex-col items-center justify-center p-8">
    <div className="bg-[#1e293b] rounded-2xl shadow-2xl p-10 max-w-3xl w-full border border-blue-700/30">
      <h1 className="text-4xl font-bold mb-8 text-center text-white">Our Services</h1>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="flex items-start gap-4 p-6 bg-[#232946] rounded-xl border border-purple-700/20 shadow hover:shadow-lg transition">
          <CheckCircle className="h-8 w-8 text-purple-400 mt-1" />
          <div>
            <h2 className="text-xl font-semibold text-white mb-1">Solar System Installation</h2>
            <p className="text-gray-300">For Residential, Commercial, and Industrial Clients</p>
          </div>
        </div>
        <div className="flex items-start gap-4 p-6 bg-[#232946] rounded-xl border border-purple-700/20 shadow hover:shadow-lg transition">
          <Wrench className="h-8 w-8 text-blue-400 mt-1" />
          <div>
            <h2 className="text-xl font-semibold text-white mb-1">Maintenance & Support</h2>
            <p className="text-gray-300">Comprehensive care for your solar energy systems</p>
          </div>
        </div>
        <div className="flex items-start gap-4 p-6 bg-[#232946] rounded-xl border border-purple-700/20 shadow hover:shadow-lg transition">
          <BarChart className="h-8 w-8 text-yellow-400 mt-1" />
          <div>
            <h2 className="text-xl font-semibold text-white mb-1">Energy Monitoring</h2>
            <p className="text-gray-300">Analytics and insights for optimal performance</p>
          </div>
        </div>
        <div className="flex items-start gap-4 p-6 bg-[#232946] rounded-xl border border-purple-700/20 shadow hover:shadow-lg transition">
          <Users className="h-8 w-8 text-green-400 mt-1" />
          <div>
            <h2 className="text-xl font-semibold text-white mb-1">Customer Support</h2>
            <p className="text-gray-300">Service ticketing and dedicated assistance</p>
          </div>
        </div>
        <div className="flex items-start gap-4 p-6 bg-[#232946] rounded-xl border border-purple-700/20 shadow hover:shadow-lg transition md:col-span-2">
          <CreditCard className="h-8 w-8 text-pink-400 mt-1" />
          <div>
            <h2 className="text-xl font-semibold text-white mb-1">Payment Integration</h2>
            <p className="text-gray-300">Secure payments for services and maintenance</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Services; 
import React from "react";
import { Sun } from "lucide-react";

const AboutUs = () => (
  <div className="min-h-screen bg-gradient-to-b from-[#0f172a] to-[#1e293b] flex flex-col items-center justify-center p-8">
    <div className="bg-[#1e293b] rounded-2xl shadow-2xl p-10 max-w-2xl w-full border border-purple-700/30 flex flex-col items-center">
      <div className="bg-purple-600 rounded-full p-3 mb-4 shadow-lg">
        <Sun className="h-8 w-8 text-white" />
      </div>
      <h1 className="text-4xl font-bold mb-4 text-white text-center">About Us</h1>
      <p className="text-lg text-gray-300 text-center mb-2">
        <span className="font-semibold text-purple-400">AUITS Connect</span> is a leader in sustainable solar energy solutions since 2013, specializing in providing high-efficiency solar systems for residential, commercial, and industrial needs.
      </p>
      <p className="text-md text-gray-400 text-center">
        Our mission is to empower customers with reliable, clean, and affordable solar energy through innovative technology and dedicated support.
      </p>
    </div>
  </div>
);

export default AboutUs; 
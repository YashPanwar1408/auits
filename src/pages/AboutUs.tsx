import React from "react";
import { Sun, Zap, Globe, BatteryFull, Lightbulb, ShieldCheck, Users, Wrench, Star } from "lucide-react";

const heroImg = "/lovable-uploads/43bdef48-c3ad-42fe-8ae5-fd7f4e37c15a.png";
const productImg = "/lovable-uploads/fcdb3daa-a6e7-444e-83e8-70fd88ba62ba.png";
const placeholder = "/placeholder.svg";

const services = [
  { icon: <Zap className="h-8 w-8 text-yellow-400" />, title: "Solar Solutions", desc: "Tailored solar EPC services, ensuring transparency and quality from project conception to execution." },
  { icon: <Globe className="h-8 w-8 text-blue-400" />, title: "Electrification", desc: "Rural electrification initiatives under Saubhagya Yojana for universal electricity access." },
  { icon: <BatteryFull className="h-8 w-8 text-green-400" />, title: "DTR & Meter Installation", desc: "Comprehensive site assessment to commissioning for efficient power distribution." },
  { icon: <Lightbulb className="h-8 w-8 text-yellow-300" />, title: "Energy Auditing", desc: "Identify inefficiencies and develop strategies to optimize energy usage." },
  { icon: <Wrench className="h-8 w-8 text-indigo-400" />, title: "RO Installation", desc: "RO installation services for clean and drinkable water in rural and urban areas." },
  { icon: <Wrench className="h-8 w-8 text-pink-400" />, title: "Water Heater Installation", desc: "End-to-end water heater installation in rural and urban areas." },
];

const products = [
  { img: productImg, title: "Solar Essentials", desc: "Panels, inverters, batteries, and structures for efficient energy solutions." },
  { icon: <Sun className="h-8 w-8 text-yellow-400" />, title: "Panels", desc: "Poly, mono, mono half-cut, and bifacial panels for diverse energy needs." },
  { icon: <Zap className="h-8 w-8 text-blue-400" />, title: "Inverters", desc: "High-quality inverters for reliable energy conversion and efficiency." },
  { icon: <BatteryFull className="h-8 w-8 text-green-400" />, title: "Batteries", desc: "Advanced solar batteries for high storage capacity." },
  { icon: <Lightbulb className="h-8 w-8 text-yellow-300" />, title: "Street Lights", desc: "Solar-powered street lighting solutions to reduce carbon footprint." },
  { icon: <Star className="h-8 w-8 text-gray-300" />, title: "High Mast Light", desc: "Durable high mast lighting for wide-area applications." },
  { icon: <Lightbulb className="h-8 w-8 text-blue-300" />, title: "DC Lights", desc: "Efficient DC lighting for remote solar systems." },
  { icon: <Lightbulb className="h-8 w-8 text-purple-400" />, title: "AC Lights", desc: "Reliable AC lighting for residential and commercial use." },
];

const reasons = [
  { icon: <ShieldCheck className="h-7 w-7 text-green-400" />, title: "Expertise & Experience", desc: "Over a decade of experience in solar technologies ensures top-tier service." },
  { icon: <Wrench className="h-7 w-7 text-indigo-400" />, title: "End-to-End Solutions", desc: "Comprehensive service from concept to maintenance." },
  { icon: <Users className="h-7 w-7 text-blue-400" />, title: "Exclusive Partnerships", desc: "Access to premier solar products through top manufacturer partnerships." },
  { icon: <Star className="h-7 w-7 text-yellow-400" />, title: "Customized Solutions", desc: "Tailored solar solutions for optimal performance and satisfaction." },
];

const AboutUs = () => (
  <div className="min-h-screen bg-gradient-to-b from-[#0f172a] to-[#1e293b] flex flex-col items-center">
    {/* Hero Section */}
    <div className="w-full flex items-center justify-center h-64 md:h-80 bg-gradient-to-b from-[#232946] to-[#1e293b] mb-8">
      <div className="flex flex-col items-center justify-center w-full h-full">
        <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg mb-2">About Us</h1>
        <p className="text-lg md:text-xl text-gray-200 text-center max-w-2xl drop-shadow">Empowering customers with reliable, clean, and affordable solar energy through innovation and dedicated support.</p>
      </div>
    </div>

    {/* Services Section */}
    <section className="w-full max-w-5xl px-4 mb-12">
      <h2 className="text-3xl font-bold text-purple-400 mb-6 text-center">End to End Services We Provide</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, idx) => (
          <div key={idx} className="bg-[#232946] rounded-xl shadow-lg p-6 flex flex-col items-center hover:scale-105 transition-transform">
            {service.icon}
            <h3 className="text-xl font-semibold text-white mt-3 mb-1 text-center">{service.title}</h3>
            <p className="text-gray-300 text-center text-base">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>

    {/* Products Section */}
    <section className="w-full max-w-5xl px-4 mb-12">
      <h2 className="text-3xl font-bold text-purple-400 mb-6 text-center">Our Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product, idx) => (
          <div key={idx} className="bg-[#232946] rounded-xl shadow-lg p-6 flex flex-col items-center hover:scale-105 transition-transform">
            {product.img ? (
              <img src={product.img} alt={product.title} className="w-16 h-16 object-contain mb-2 rounded-full border-2 border-purple-300 bg-white" />
            ) : (
              product.icon || <img src={placeholder} alt="Placeholder" className="w-16 h-16 mb-2" />
            )}
            <h3 className="text-xl font-semibold text-white mt-2 mb-1 text-center">{product.title}</h3>
            <p className="text-gray-300 text-center text-base">{product.desc}</p>
          </div>
        ))}
      </div>
    </section>

    {/* Why Choose Us Section */}
    <section className="w-full max-w-4xl px-4 mb-16">
      <h2 className="text-3xl font-bold text-purple-400 mb-6 text-center">Why Choose AUITS?</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {reasons.map((reason, idx) => (
          <div key={idx} className="flex items-start gap-4 bg-[#232946] rounded-xl shadow p-5 hover:bg-[#312e81] transition-colors">
            <div>{reason.icon}</div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-1">{reason.title}</h4>
              <p className="text-gray-300 text-base">{reason.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  </div>
);

export default AboutUs;
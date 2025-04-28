import React from "react";
import { Mail } from "lucide-react";

const Contact = () => (
  <div className="min-h-screen bg-gradient-to-b from-[#0f172a] to-[#1e293b] flex flex-col items-center justify-center p-8">
    <div className="bg-[#1e293b] rounded-2xl shadow-2xl p-10 max-w-xl w-full border border-pink-700/30 flex flex-col items-center">
      <div className="bg-pink-600 rounded-full p-3 mb-4 shadow-lg">
        <Mail className="h-8 w-8 text-white" />
      </div>
      <h1 className="text-4xl font-bold mb-4 text-white text-center">Contact Us</h1>
      <p className="max-w-2xl text-lg text-center text-gray-300 mb-6">
        Have questions or want to get in touch? Fill out the form below or use our contact details to reach us.
      </p>
      <form className="w-full max-w-md bg-[#232946] p-6 rounded-lg shadow-lg mb-6 border border-pink-400/20">
        <input className="w-full mb-4 p-2 rounded bg-gray-800 text-white focus:ring-2 focus:ring-pink-500 outline-none transition" type="text" placeholder="Your Name" required />
        <input className="w-full mb-4 p-2 rounded bg-gray-800 text-white focus:ring-2 focus:ring-pink-500 outline-none transition" type="email" placeholder="Your Email" required />
        <textarea className="w-full mb-4 p-2 rounded bg-gray-800 text-white focus:ring-2 focus:ring-pink-500 outline-none transition" placeholder="Your Message" rows={4} required />
        <button className="w-full bg-pink-600 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded transition" type="submit">Send Message</button>
      </form>
      <div className="text-gray-400 text-center">
        <p>Email: <span className="text-pink-300">info@auitspl.com</span></p>
        <p>Phone: <span className="text-pink-300">+91 9911791555</span></p>
        <p>WhatsApp: <span className="text-pink-300">+91 9911791555</span></p>
      </div>
    </div>
  </div>
);

export default Contact; 
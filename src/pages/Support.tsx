import React from "react";
import { LifeBuoy } from "lucide-react";

const Support = () => (
  <div className="min-h-screen bg-gradient-to-b from-[#0f172a] to-[#1e293b] flex flex-col items-center justify-center p-8">
    <div className="bg-[#1e293b] rounded-2xl shadow-2xl p-10 max-w-2xl w-full border border-green-700/30 flex flex-col items-center">
      <div className="bg-green-600 rounded-full p-3 mb-4 shadow-lg">
        <LifeBuoy className="h-8 w-8 text-white" />
      </div>
      <h1 className="text-4xl font-bold mb-4 text-white text-center">Support</h1>
      <p className="max-w-2xl text-lg text-center text-gray-300 mb-4">
        Need help? Our support team is here to assist you with any issues or questions regarding your solar energy system. You can raise a service ticket, browse our knowledge base, or contact us directly for personalized support.
      </p>
      <ul className="max-w-xl text-gray-300 list-disc list-inside space-y-2">
        <li><span className="font-semibold text-green-400">Raise a service ticket</span> from your dashboard</li>
        <li>Browse our <a href="/knowledgebase" className="text-green-400 underline">Knowledge Base</a></li>
        <li>Email us at <span className="text-green-300">support@auits.com</span></li>
        <li>Call us at <span className="text-green-300">(123) 456-7890</span></li>
      </ul>
    </div>
  </div>
);

export default Support; 
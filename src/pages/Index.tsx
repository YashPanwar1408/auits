import React from "react";
import { Button } from "@/components/ui/button";
import { useNavigate, Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Shield, Sun, Upload } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    title: "Customer Support",
    description: "Raise and track service tickets with our intuitive ticketing system",
    icon: <CheckCircle className="h-10 w-10 text-purple-400" />,
  },
  {
    title: "User Account",
    description: "Secure login with personalized dashboard for your solar system",
    icon: <Shield className="h-10 w-10 text-blue-400" />,
  },
  {
    title: "Admin Dashboard",
    description: "Monitor and manage customer interactions and support requests",
    icon: <Sun className="h-10 w-10 text-yellow-300" />,
  },
  {
    title: "Payment Integration",
    description: "Make secure payments for services and maintenance",
    icon: <Upload className="h-10 w-10 text-green-400" />,
  },
];

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0a1a] via-[#18182f] to-[#0a0a1a] flex flex-col">
      {/* Hero Section with Spline Bulb on the right, seamless background */}
      <div className="relative w-full h-[95vh] min-h-[600px] flex flex-col lg:flex-row items-center justify-between overflow-hidden px-4 lg:px-16 bg-gradient-to-br from-[#0a0a1a] via-[#18182f] to-[#0a0a1a]">
        {/* Hero Content Left */}
        <div className="relative z-10 flex-1 flex flex-col items-center lg:items-start justify-center text-center lg:text-left">
          <motion.h1
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl lg:text-7xl font-extrabold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-600 mb-6 drop-shadow"
          >
            AUITS Solar Platform
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-2xl text-white/90 max-w-2xl mb-10"
          >
            The next-gen 3D platform for support, monitoring, and seamless management of your solar systems.
          </motion.p>
          <motion.div
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.97 }}
            className="inline-block"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400 text-white px-10 py-4 text-2xl font-bold rounded-full shadow-lg border-0"
              onClick={() => navigate("/login")}
              style={{ boxShadow: "0 0 24px 4px #a78bfa" }}
            >
              Get Started <ArrowRight className="ml-2 h-7 w-7" />
            </Button>
          </motion.div>
        </div>
        {/* Spline Bulb on the right, with glow and seamless background */}
        {/* Spline Bulb on the right, with matching background and glow effect */}
<div className="flex-1 flex items-center justify-center w-full h-[350px] lg:h-[500px] mt-12 lg:mt-0">
  <div className="w-full h-full max-w-xl max-h-[500px] rounded-3xl overflow-hidden flex items-center justify-center relative shadow-2xl border border-purple-500/20">
    {/* Soft background gradient based on uploaded image */}
    <div
      className="absolute inset-0 z-0 rounded-3xl"
      style={{
        background: 'linear-gradient(135deg, #0a0a1a 0%, #18182f 40%, #44345c 75%, #facc15 100%)',
        opacity: 0.3,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    />

    {/* Optional: subtle glow behind the bulb */}
    <div className="absolute inset-0 m-auto w-[90%] h-[90%] rounded-full pointer-events-none bg-gradient-radial from-yellow-300/20 via-transparent to-transparent blur-2xl opacity-70 z-10" />

    {/* Spline iframe */}
    <iframe
      src="https://my.spline.design/lightningbulb-IUiVaMAoaWtqDxp0ZVhKpSgv/"
      frameBorder="0"
      width="100%"
      height="100%"
      title="AUITS 3D Bulb"
      loading="lazy"
      allowFullScreen
      style={{
        width: '100%',
        height: '100%',
        minHeight: 350,
        minWidth: 320,
        background: 'transparent',
        zIndex: 20,
      }}
    />
  </div>
</div>

      </div>

      {/* Features Section with 3D/tilt animation */}
      <div className="container mx-auto px-4 py-24">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-4xl font-bold text-center mb-16 text-white drop-shadow-lg"
        >
          Why Choose AUITS?
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((feature, idx) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              whileHover={{ scale: 1.07, rotateY: 8 }}
              className="bg-white/10 backdrop-blur-lg border border-purple-400/30 rounded-2xl p-8 flex flex-col items-center shadow-xl hover:shadow-purple-400/40 hover:scale-105 transition-transform duration-300"
              style={{ perspective: 1000 }}
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-white text-center drop-shadow">
                {feature.title}
              </h3>
              <p className="text-gray-200 text-center">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Animated CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="relative bg-gradient-to-r from-[#18182f] via-[#2d2250] to-[#18182f] py-20 text-white text-center overflow-hidden"
      >
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl font-bold mb-4 drop-shadow-lg">Ready to Shine with Solar?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-white/80">
            Join thousands of satisfied customers who are already using our platform to manage their solar energy systems.
          </p>
          <motion.div
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.97 }}
            className="inline-block"
          >
            <Button
              size="lg"
              className="bg-white text-purple-700 font-bold px-10 py-4 rounded-full shadow-2xl hover:bg-yellow-400 hover:text-purple-900 transition-colors text-xl border-0"
              onClick={() => navigate("/login")}
              style={{ boxShadow: "0 0 24px 4px #facc15" }}
            >
              Sign Up Now
            </Button>
          </motion.div>
        </div>
        {/* Animated background shapes */}
        <motion.div
          className="absolute -top-20 -left-20 w-96 h-96 bg-pink-400 rounded-full opacity-30 blur-3xl z-0"
          animate={{ x: [0, 40, 0], y: [0, 40, 0] }}
          transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-20 -right-20 w-96 h-96 bg-yellow-300 rounded-full opacity-30 blur-3xl z-0"
          animate={{ x: [0, -40, 0], y: [0, -40, 0] }}
          transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
        />
      </motion.div>

      {/* Footer */}
      <footer className="bg-[#18182f] text-white py-12 mt-auto">
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

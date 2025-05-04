import React from "react";
import { LoginForm } from "@/components/LoginForm";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0a0a1a] via-[#18182f] to-[#0a0a1a] p-4">
      <div className="flex w-full max-w-[900px] rounded-xl shadow-2xl overflow-hidden backdrop-blur-xl border border-purple-500/20 bg-white/5">
        <div className="hidden md:block w-1/2 bg-gradient-to-br from-[#18182f] via-[#44345c] to-[#0a0a1a] p-12 text-white relative">
          <div className="absolute inset-0 bg-black/30 rounded-xl" />
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-6">
              <div className="h-10 w-10 rounded-full bg-white flex items-center justify-center shadow-lg">
                <img
                  src="/lovable-uploads/43bdef48-c3ad-42fe-8ae5-fd7f4e37c15a.png"
                  alt="AUITS Logo"
                  className="h-6 w-6"
                />
              </div>
              <h1 className="font-bold text-2xl">AUITS Connect</h1>
            </div>
            <h2 className="text-3xl font-bold mb-4">Welcome Back!</h2>
            <p className="mb-6 text-white/80">
              Sign in to access your solar system dashboard, track service requests,
              and manage your account.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center text-purple-400 text-lg shadow">
                  ✓
                </div>
                <span>Monitor real-time solar production</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center text-purple-400 text-lg shadow">
                  ✓
                </div>
                <span>Access support services 24/7</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center text-purple-400 text-lg shadow">
                  ✓
                </div>
                <span>View and manage your service tickets</span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 p-8 bg-[#18182f] flex items-center justify-center">
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default Login;

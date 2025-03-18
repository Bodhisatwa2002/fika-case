'use client'
import React, { useState } from "react";
import { Mail } from "lucide-react";
import LogoIcon from "./icons/LogoIcon";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle email submission here
    console.log("Email submitted:", email);
    setEmail("");
  };

  return (
    <footer className="bg-white border-t">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
          {/* Logo and Copyright Section */}
          <div className="flex flex-col items-start">
            <div className="flex items-center">
              <LogoIcon className="h-8 w-8 text-gray-900" />
              <span className="ml-2 text-xl font-semibold">Fika Case</span>
            </div>
            <p className="text-sm text-gray-600 mt-2">
              Copyright © 2025 Fika Case. Patent Pending.
            </p>
          </div>

          {/* Email Subscription Form */}
          <div className="w-full sm:w-auto max-w-md">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-2"
            >
              <div className="flex-grow relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-200 focus:border-gray-400 outline-none transition-all"
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-gray-900 text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition-colors flex-shrink-0"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

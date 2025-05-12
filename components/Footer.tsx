"use client";
import React, { useState } from "react";
import { Mail } from "lucide-react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("email", email);

    try {
      const response = await fetch("https://formspree.io/f/mzzekrjz", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setSubmitted(true);
        setEmail("");
      } else {
        alert("There was an error submitting the form. Please try again.");
      }
    } catch (error) {
      alert("There was an error submitting the form. Please try again.");
    }
  };

  return (
    <footer className="bg-black border-t border-white">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
          {/* Logo and Copyright */}
          <div className="flex flex-col items-start">
            <div className="flex items-center font-display text-h3">
              <img src="logo.png" alt="Logo" className="h-8 w-auto" />
            </div>
            <p className="text-small font-body text-white mt-2">
              Copyright © 2025 Fika Case. Patent Pending.
            </p>
          </div>

          {/* Email Subscription */}
          <div className="w-full sm:w-auto max-w-md">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-2"
            >
              <div className="flex-grow relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white" />
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full pl-10 pr-4 py-2 border border-white text-white placeholder-gray-400 bg-black rounded-lg focus:ring-2 focus:ring-white focus:border-white outline-none transition-all font-body text-body"
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-[#FF9900] text-black px-6 py-2 rounded-lg hover:bg-[#e68a00] transition-colors flex-shrink-0 cursor-pointer font-body text-body"
              >
                Subscribe
              </button>
            </form>
            {submitted && (
              <p className="text-green-400 mt-2 text-small font-body">
                Thanks for subscribing!
              </p>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

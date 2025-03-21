"use client";

import { useState } from "react";
import Head from "next/head";
import LogoIcon from "./icons/LogoIcon";

interface FormData {
  name: string;
  email: string;
  phone: string;
  organization: string;
  role: string;
  message: string;
}

export default function ContactUsSection() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    organization: "",
    role: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <>
      {/* SEO Meta Tags */}
      <Head>
        <title>Contact Us - Get in Touch</title>
        <meta
          name="description"
          content="Have questions or suggestions? Reach out to us through our contact form."
        />
        <meta
          name="keywords"
          content="Contact, Support, Inquiry, Get in Touch"
        />
        <meta name="author" content="Your Company Name" />
      </Head>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-24">
            <div className="flex items-center lg:mb-0 mb-10">
              <div className="w-full">
                <h4 className="inline-block py-1 px-3 mb-4 text-lg font-semibold text-orange-900 bg-orange-50 rounded-full">
                  Contact Us
                </h4>
                <h2 className="text-gray-900 font-manrope text-4xl font-semibold leading-10 mb-9 lg:text-left text-center">
                  Have questions? Want to share your thoughts? Talk to us
                </h2>

                <form onSubmit={handleSubmit}>
                  {/** Name Input */}
                  <label className="sr-only" htmlFor="name">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    className="w-full h-14 shadow-sm text-gray-600 placeholder-gray-400 text-lg font-normal leading-7 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500 py-2 px-4 mb-8"
                    placeholder="Name (First and Last)"
                    required
                    value={formData.name}
                    onChange={handleChange}
                  />

                  {/** Email Input */}
                  <label className="sr-only" htmlFor="email">
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className="w-full h-14 shadow-sm text-gray-600 placeholder-gray-400 text-lg font-normal leading-7 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500 py-2 px-4 mb-8"
                    placeholder="Email Address (Required)"
                    required
                    value={formData.email}
                    onChange={handleChange}
                  />

                  {/** Phone Input */}
                  <label className="sr-only" htmlFor="phone">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    className="w-full h-14 shadow-sm text-gray-600 placeholder-gray-400 text-lg font-normal leading-7 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500 py-2 px-4 mb-8"
                    placeholder="Phone Number (Required)"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                  />

                  {/** Organization Input */}
                  <label className="sr-only" htmlFor="organization">
                    Organization Name
                  </label>
                  <input
                    id="organization"
                    name="organization"
                    type="text"
                    className="w-full h-14 shadow-sm text-gray-600 placeholder-gray-400 text-lg font-normal leading-7 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500 py-2 px-4 mb-8"
                    placeholder="School/Organization Name (Optional)"
                    value={formData.organization}
                    onChange={handleChange}
                  />

                  {/** Role Input */}
                  <label className="sr-only" htmlFor="role">
                    Your Role
                  </label>
                  <input
                    id="role"
                    name="role"
                    type="text"
                    className="w-full h-14 shadow-sm text-gray-600 placeholder-gray-400 text-lg font-normal leading-7 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500 py-2 px-4 mb-8"
                    placeholder="Your Role (Required)"
                    required
                    value={formData.role}
                    onChange={handleChange}
                  />

                  {/** Message Input */}
                  <label className="sr-only" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="w-full h-48 shadow-sm resize-none text-gray-600 placeholder-gray-400 text-lg font-normal leading-7 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500 px-4 py-4 mb-8"
                    placeholder="Message/Questions"
                    value={formData.message}
                    onChange={handleChange}
                  />

                  {/** Submit Button */}
                  <button className="w-full h-12 text-center text-white text-base font-semibold leading-6 rounded-full bg-indigo-600 shadow transition-all duration-700 hover:bg-indigo-800">
                    Submit
                  </button>
                </form>
              </div>
            </div>

            {/** Right Side Info Card */}
            <div className="lg:max-w-xl w-full h-[600px] flex items-center justify-center rounded-2xl p-8">
              <div className="w-full max-w-md bg-white shadow-xl p-8 rounded-xl">
                <div className="flex items-center justify-center mb-6">
                  <LogoIcon />
                </div>
                <h3 className="text-2xl font-semibold text-center mb-6">
                  Join Our Community
                </h3>
                <p className="text-gray-600 text-center mb-8">
                  Join a community of educators dedicated to focused learning.
                  Share your information, and let's explore Fika together.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

"use client";

import { useState } from "react";
import Head from "next/head";

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

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await fetch("https://formspree.io/f/mzzekrjz", {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: new FormData(e.target as HTMLFormElement),
    });

    if (response.ok) {
      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        organization: "",
        role: "",
        message: "",
      });
    } else {
      alert("There was an error submitting the form. Please try again.");
    }
  };

  return (
    <>
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

      <section className="py-24 bg-white text-gray-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-24">
            <div className="flex items-center lg:mb-0 mb-10">
              <div className="w-full">
                <h2 className="font-display text-h2 font-semibold leading-10 mb-9 lg:text-left text-center">
                  Have questions? Want to share your thoughts? Talk to us
                </h2>

                {submitted ? (
                  <div className="text-green-600 text-body font-body font-semibold">
                    Thank you for reaching out! We'll get back to you soon.
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Name (First and Last)"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-4/5 h-14 bg-white text-gray-900 shadow-sm placeholder-gray-400 text-body font-body leading-7 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 py-2 px-4 mb-8"
                    />

                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Email Address (Required)"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-4/5 h-14 bg-white text-gray-900 shadow-sm placeholder-gray-400 text-body font-body leading-7 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 py-2 px-4 mb-8"
                    />

                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="Phone Number (Required)"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-4/5 h-14 bg-white text-gray-900 shadow-sm placeholder-gray-400 text-body font-body leading-7 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 py-2 px-4 mb-8"
                    />

                    <input
                      id="organization"
                      name="organization"
                      type="text"
                      placeholder="School/Organization Name (Optional)"
                      value={formData.organization}
                      onChange={handleChange}
                      className="w-4/5 h-14 bg-white text-gray-900 shadow-sm placeholder-gray-400 text-body font-body leading-7 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 py-2 px-4 mb-8"
                    />

                    <input
                      id="role"
                      name="role"
                      type="text"
                      placeholder="Your Role (Required)"
                      required
                      value={formData.role}
                      onChange={handleChange}
                      className="w-4/5 h-14 bg-white text-gray-900 shadow-sm placeholder-gray-400 text-body font-body leading-7 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 py-2 px-4 mb-8"
                    />

                    <textarea
                      id="message"
                      name="message"
                      placeholder="Message/Questions"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-4/5 h-48 bg-white text-gray-900 shadow-sm resize-none placeholder-gray-400 text-body font-body leading-7 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 px-4 py-4 mb-8"
                    />

                    <button
                      type="submit"
                      className="w-4/5 h-12 text-center text-white text-body font-body font-semibold leading-6 rounded-xl cursor-pointer"
                      style={{ backgroundColor: "#FF9900" }}
                    >
                      Submit
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Right Section */}
            <div className="lg:max-w-xl w-full h-[600px] flex items-center justify-center rounded-2xl p-8">
              <div
                className="w-full max-w-md bg-white shadow-xl p-8 rounded-xl text-black"
                style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.08)" }}
              >
                <div className="flex items-center justify-center mb-6">
                  <a href="/">
                    <img
                      src="logoblack.png"
                      alt="Logo"
                      className="h-20 w-auto"
                    />
                  </a>
                </div>
                <h3 className="text-h3 font-display font-semibold text-center mb-6">
                  Join Our Community
                </h3>
                <p className="text-body font-body text-gray-600 text-center mb-8">
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

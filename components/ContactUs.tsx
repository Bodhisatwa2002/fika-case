"use client";

import { useState } from "react";
import { BookOpen } from "lucide-react";
import LogoIcon from "./icons/LogoIcon";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    role: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-24">
          <div className="flex items-center lg:mb-0 mb-10">
            <div className="w-full">
              <h4 className="text-indigo-600 text-base font-medium leading-6 mb-4 lg:text-left text-center">
                Contact Us
              </h4>
              <h2 className="text-gray-900 font-manrope text-4xl font-semibold leading-10 mb-9 lg:text-left text-center">
                Have questions? Want to share your thoughts? Talk to us
              </h2>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  className="w-full h-14 shadow-sm text-gray-600 placeholder-gray-400 text-lg font-normal leading-7 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 py-2 px-4 mb-8"
                  placeholder="Name (First and Last)"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
                <input
                  type="email"
                  className="w-full h-14 shadow-sm text-gray-600 placeholder-gray-400 text-lg font-normal leading-7 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 py-2 px-4 mb-8"
                  placeholder="Email Address (Required)"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
                <input
                  type="tel"
                  className="w-full h-14 shadow-sm text-gray-600 placeholder-gray-400 text-lg font-normal leading-7 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 py-2 px-4 mb-8"
                  placeholder="Phone Number (Required)"
                  required
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                />
                <input
                  type="text"
                  className="w-full h-14 shadow-sm text-gray-600 placeholder-gray-400 text-lg font-normal leading-7 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 py-2 px-4 mb-8"
                  placeholder="School/Organization Name (Optional)"
                  value={formData.organization}
                  onChange={(e) =>
                    setFormData({ ...formData, organization: e.target.value })
                  }
                />
                <input
                  type="text"
                  className="w-full h-14 shadow-sm text-gray-600 placeholder-gray-400 text-lg font-normal leading-7 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 py-2 px-4 mb-8"
                  placeholder="Your Role (Required)"
                  required
                  value={formData.role}
                  onChange={(e) =>
                    setFormData({ ...formData, role: e.target.value })
                  }
                />
                <textarea
                  className="w-full h-48 shadow-sm resize-none text-gray-600 placeholder-gray-400 text-lg font-normal leading-7 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 px-4 py-4 mb-8"
                  placeholder="Message/Questions"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                />
                <button className="w-full h-12 text-center text-white text-base font-semibold leading-6 rounded-full bg-indigo-600 shadow transition-all duration-700 hover:bg-indigo-800">
                  Submit
                </button>
              </form>
            </div>
          </div>
          <div className="lg:max-w-xl w-full h-[600px] flex items-center justify-center rounded-2xl p-8">
            <div className="w-full max-w-md bg-white shadow-xl p-8 rounded-xl">
              <div className="flex items-center justify-center mb-6">
                <LogoIcon/>
              </div>
              <h3 className="text-2xl font-semibold text-center mb-6">
                Join Our Community
              </h3>
              <p className="text-gray-600 text-center mb-8">
                Join a community of educators dedicated to focused learning.
                Share your information, and let's explore Fika together.
              </p>
              <div className="flex items-center justify-center space-x-4 pt-6 border-t border-gray-100">
                <a href="#" className="text-gray-600 hover:text-indigo-600">
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-600 hover:text-indigo-600">
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-600 hover:text-indigo-600">
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import React from "react";

const GetInTouch = () => {
  return (
    <div className="w-full bg-white py-20 flex flex-col items-center justify-center text-center">
      <div className="max-w-2xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-4 text-black">
          We can help you transform your school into a distraction-free learning
          zone.
        </h2>

        <p className="text-lg text-gray-700 mb-8">
          Have questions? Want to share your thoughts? Talk to us
        </p>

        <div className="flex flex-col items-center sm:flex-row gap-4 justify-center">
          <a
            href="/faq"
            title=""
            className="inline-flex items-center justify-center w-full sm:w-auto px-6 py-4 font-semibold text-black transition-all duration-200 bg-[#FF9900] rounded-full hover:bg-[#ff9900cd] focus:bg-yellow-400"
            role="button"
          >
            Read The FAQ's
          </a>
          <a
            href="/contact-us"
            title=""
            className="inline-flex items-center justify-center w-full sm:w-auto px-6 py-4 font-semibold text-black transition-all duration-200 bg-[#FF9900] rounded-full hover:bg-[#ff9900cd] focus:bg-yellow-400"
            role="button"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;

"use client";
import React, { useEffect, useRef, useState } from "react";

const GetInTouch = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Set up intersection observer for fade-in effect
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 } // Trigger when 20% of the element is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="w-full bg-white py-20 flex flex-col items-center justify-center text-center"
    >
      <div className="max-w-3xl mx-auto px-4">
        <h2
          className={`sm:text-4xl text-3xl font-display text-h2 font-bold mb-4 text-black transition-all duration-1000 ease-in-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          We can help you transform your school into a distraction-free learning
          zone.
        </h2>

        <p
          className={`text-h3 font-body text-gray-700 mb-8 transition-all duration-1000 ease-in-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: "200ms" }}
        >
          Have questions? Want to share your thoughts? Talk to us
        </p>

        <div
          className={`flex flex-col items-center sm:flex-row gap-4 justify-center transition-all duration-1000 ease-in-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: "400ms" }}
        >
          <a
            href="/faq"
            title=""
            className="inline-flex items-center justify-center w-full sm:w-auto px-6 py-4 font-body text-h3 text-black transition-all duration-200 bg-[#FF9900] rounded-full hover:bg-[#ff9900cd] focus:bg-yellow-400 cursor-pointer"
            role="button"
          >
            Read The FAQ's
          </a>
          <a
            href="/contact-us"
            title=""
            className="inline-flex items-center justify-center w-full sm:w-auto px-6 py-4 font-body text-h3 text-black transition-all duration-200 bg-[#FF9900] rounded-full hover:bg-[#ff9900cd] focus:bg-yellow-400 cursor-pointer"
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

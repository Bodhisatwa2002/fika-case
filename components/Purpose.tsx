"use client";
import React, { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";

const Purpose = () => {
  const sectionRefs = useRef([]);
  const buttonRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in-visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    // Get all elements with the fade-in class
    const fadeElements = document.querySelectorAll(".fade-in");
    fadeElements.forEach((el) => {
      observer.observe(el);
    });

    // Observe the button specifically
    if (buttonRef.current) {
      observer.observe(buttonRef.current);
    }

    return () => {
      fadeElements.forEach((el) => {
        observer.unobserve(el);
      });
      if (buttonRef.current) {
        observer.unobserve(buttonRef.current);
      }
    };
  }, []);

  return (
    <>
      {/* Add a style block for animations */}
      <style jsx>{`
        .fade-in {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }
        .fade-in-visible {
          opacity: 1;
          transform: translateY(0);
        }
        .button-animation.fade-in-visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>

      <section className="bg-white text-black pt-24 px-6 md:px-12 overflow-hidden">
        <div className="max-w-[60%] mx-auto flex flex-col lg:flex-row items-center gap-12">
          {/* First row - keeping original positioning */}
          <div className="lg:w-1/2 space-y-8 fade-in">
            <div className="space-y-3">
              <h2 className="text-4xl md:text-5xl font-light flex items-baseline mb-10">
                Bringing Fika values to the classroom
              </h2>

              <p className="text-gray-700 leading-relaxed text-xl max-w-lg">
                Classrooms, at their heart, are vibrant social spaces where
                learning thrives on interaction and collaboration. We recognized
                that the core principles of Fika – focus, connection, and
                mindful presence – are precisely what's often missing in today's
                classrooms.
              </p>
            </div>
          </div>

          <div className="lg:w-5/12 relative fade-in">
            <div className="rounded-3xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=1200&q=80"
                alt="Team members working on a project"
                className="w-full h-auto object-cover rounded-3xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white text-black py-24 px-6 md:px-12 overflow-hidden">
        <div className="max-w-[60%] mx-auto">
          {/* Second row - container without flex to allow custom positioning */}
          <div className="flex flex-col-reverse lg:flex-row gap-12">
            {/* Image column - same width as first row image */}
            <div className="lg:w-5/12 relative fade-in">
              <div className="rounded-3xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=1200&q=80"
                  alt="Creative collaboration"
                  className="w-full h-auto object-cover rounded-3xl"
                />
              </div>
            </div>

            {/* Text column - aligned with image in first row */}
            <div className="lg:w-1/2 space-y-8 lg:ml-auto pl-10">
              <div className="space-y-3 fade-in">
                <h2 className="text-4xl md:text-5xl font-light flex items-baseline mb-10">
                  The FIKA difference
                </h2>

                <p className="text-gray-700 leading-relaxed text-xl max-w-lg">
                  The Fika Case was born from a simple, yet powerful idea: what
                  if we could bring the spirit of Fika into the classroom? What
                  if we could create a space where students and teachers could
                  focus, connect, and engage in meaningful learning?
                </p>
              </div>

              <div className="space-y-3 fade-in">
                <p className="text-gray-700 leading-relaxed text-xl max-w-lg">
                  Join us in creating classrooms where learning thrives and
                  students reach their full potential.
                </p>
              </div>

              <div className="fade-in mt-6">
                <a href="/contact-us">
                  <button
                    ref={buttonRef}
                    className="cursor-pointer bg-black rounded-full px-8 py-4 text-lg md:text-xl text-white font-medium flex items-center button-animation"
                  >
                    Get in Touch <ArrowRight className="ml-3 h-5 w-5" />
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Purpose;

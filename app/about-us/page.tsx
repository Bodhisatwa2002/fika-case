import React from "react";
import Image from "next/image";
import PurposeSection from "@/components/Purpose";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const AboutUs: React.FC = () => {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <div className="relative w-full min-h-screen overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1920&q=80"
            alt="Background"
            layout="fill"
            objectFit="cover"
            priority
          />
          {/* Overlay for readability */}
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 p-8 md:p-16 lg:p-24 flex flex-col justify-center h-screen">
          <div className="max-w-3xl">
            <div className="mb-5 font-bold text-white text-5xl uppercase tracking-wide">
              fika /ˈfēkə/
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-white mb-8 leading-tight tracking-normal max-w-3xl">
              <span className="inline-block bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent mr-2">
                A Swedish practice
              </span>
              that creates an environment of
              <span className="italic mx-2">mindful presence,</span>
              <span className="relative inline-block mx-2">
                <span className="relative z-10 after:absolute after:bottom-1 after:left-0 after:h-3 after:w-full after:bg-blue-500/20 after:-z-10">
                  focused attention,
                </span>
              </span>
              and genuine connection in shared spaces.
            </h2>
          </div>
        </div>
      </div>
      <PurposeSection />
      <Footer />
    </div>
  );
};

export default AboutUs;

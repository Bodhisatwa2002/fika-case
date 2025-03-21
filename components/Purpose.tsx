import React from "react";

const Purpose = () => {
  return (
    <>
      <section className="bg-black text-white pt-24 px-6 md:px-12 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 space-y-8">
            <div className="space-y-3">
              <h2 className="text-4xl md:text-5xl font-light flex items-baseline">
                Bringing Fika values to the classroom
              </h2>

              <p className="text-gray-300 leading-relaxed max-w-lg">
                Classrooms, at their heart, are vibrant social spaces where
                learning thrives on interaction and collaboration. We recognized
                that the core principles of Fika – focus, connection, and
                mindful presence – are precisely what's often missing in today's
                classrooms.
              </p>
            </div>
          </div>

          <div className="lg:w-1/2 relative">
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

      <section className="bg-black text-white py-24 px-6 md:px-12 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 relative">
            <div className="rounded-3xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=1200&q=80"
                alt="Creative collaboration"
                className="w-full h-auto object-cover rounded-3xl"
              />
            </div>
          </div>

          <div className="lg:w-1/2 space-y-8">
            <div className="space-y-3">
              <h2 className="text-4xl md:text-5xl font-light flex items-baseline">
                The FIKA difference
              </h2>

              <p className="text-gray-300 leading-relaxed max-w-lg">
                The Fika Case was born from a simple, yet powerful idea: what if
                we could bring the spirit of Fika into the classroom? What if we
                could create a space where students and teachers could focus,
                connect, and engage in meaningful learning?
              </p>
            </div>

            <div className="space-y-3">
              <p className="text-gray-300 leading-relaxed max-w-lg">
                Join us in creating classrooms where learning thrives and
                students reach their full potential.
              </p>
            </div>

            
            <a
              href="/contact-us"
              title=""
              className="inline-flex items-center px-6 py-4 font-semibold text-black transition-all duration-200 bg-[#FF9900] rounded-full mt-6 hover:bg-[#ff9900cd] focus:bg-yellow-400"
              role="button"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Purpose;

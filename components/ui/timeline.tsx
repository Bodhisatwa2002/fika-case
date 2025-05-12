"use client";
import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  image: string;
  alt: string;
  description: string;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="w-full font-sans md:px-10 bg-white" ref={containerRef}>
      <div ref={ref} className="relative w-full mx-auto pb-20">
        {/* Timeline Line */}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute left-1/2 top-0 -translate-x-1/2 overflow-hidden w-[6px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-[#FF9900] to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[6px] bg-gradient-to-t from-[#FF9900] via-[#FFB84D] to-transparent from-[0%] via-[10%] rounded-full"
            initial={{ height: 0 }}
            animate={{ height: "100%" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
        </div>

        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-center pt-20 md:pt-60 relative"
          >
            {/* Left Side - Image */}
            <div className="w-1/2 pr-24">
              {index % 2 === 0 ? (
                <motion.div
                  initial={{ x: -200, opacity: 0, scale: 0.8 }}
                  whileInView={{ x: 0, opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ 
                    type: "spring",
                    stiffness: 100,
                    damping: 20,
                    mass: 1
                  }}
                  className="relative h-[300px] md:h-[500px] rounded-3xl overflow-hidden shadow-xl transform transition-transform duration-500 hover:scale-[1.02]"
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent z-10"></div>
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="absolute inset-0 object-cover w-full h-full transform transition-transform duration-700 hover:scale-105"
                  />
                </motion.div>
              ) : (
                <motion.div
                  initial={{ x: -200, opacity: 0, scale: 0.8 }}
                  whileInView={{ x: 0, opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ 
                    type: "spring",
                    stiffness: 100,
                    damping: 20,
                    mass: 1
                  }}
                  className="space-y-6"
                >
                  <h3 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                    {item.title}
                  </h3>
                  <p className="text-2xl md:text-3xl text-gray-600 font-medium leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              )}
            </div>

            {/* Center Timeline with Step */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-10">
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ 
                  type: "spring",
                  stiffness: 200,
                  damping: 20,
                  mass: 1
                }}
                className="h-24 w-24 rounded-full bg-[#FF9900] flex items-center justify-center shadow-lg transform transition-transform duration-300 hover:scale-110 mb-6"
              >
                <span className="text-3xl md:text-4xl font-bold text-white">{index + 1}</span>
              </motion.div>
            </div>

            {/* Right Side - Text */}
            <div className="w-1/2 pl-24">
              {index % 2 === 0 ? (
                <motion.div
                  initial={{ x: 200, opacity: 0, scale: 0.8 }}
                  whileInView={{ x: 0, opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ 
                    type: "spring",
                    stiffness: 100,
                    damping: 20,
                    mass: 1
                  }}
                  className="space-y-6"
                >
                  <h3 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                    {item.title}
                  </h3>
                  <p className="text-2xl md:text-3xl text-gray-600 font-medium leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ x: 200, opacity: 0, scale: 0.8 }}
                  whileInView={{ x: 0, opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ 
                    type: "spring",
                    stiffness: 100,
                    damping: 20,
                    mass: 1
                  }}
                  className="relative h-[300px] md:h-[500px] rounded-3xl overflow-hidden shadow-xl transform transition-transform duration-500 hover:scale-[1.02]"
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent z-10"></div>
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="absolute inset-0 object-cover w-full h-full transform transition-transform duration-700 hover:scale-105"
                  />
                </motion.div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

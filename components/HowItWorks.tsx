"use client";

import { useEffect, useRef } from "react";
import ColourfulText from "./ui/colourful-text";
import { Timeline } from "./ui/timeline";
import { cn, commonClasses } from "@/lib/styles/utils";

const processSteps = [
  {
    number: "Step 1",
    title: "Phone Placement",
    description:
      "Upon entering the phone-free zone, your phone will be placed inside your Fika case",
    image:
      "https://images.unsplash.com/photo-1533994966954-5a39c74889a4?q=80&w=3164&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Phone placement in Fika case",
  },
  {
    number: "Step 2",
    title: "Secure Locking ",
    description:
      "Once inside the phone-free zone, the case is locked. You will always maintain possession of your phone. ",
    image:
      "https://images.unsplash.com/photo-1533994966954-5a39c74889a4?q=80&w=3164&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Secure case locking",
  },
  {
    number: "Step 3",
    title: "Unlocking & Returns",
    description:
      "To use your phone at any time, step outside the phone-free zone and tap your case on an Fika unlocking base",
    image:
      "https://images.unsplash.com/photo-1533994966954-5a39c74889a4?q=80&w=3164&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Unlocking the Fika case",
  },
];

// Transform processSteps into the format expected by the Timeline component
const timelineData = processSteps.map((step) => ({
  title: step.title,
  image: step.image,
  alt: step.alt,
  description: step.description,
}));

export function HowItWorksComponent() {
  return (
    <section className={cn(commonClasses.section, "mt-20 pb-24 pt-32 md:pb-32 md:pt-40 border-b border-[#333333] overflow-hidden")}>
      <div className={cn(commonClasses.container, "px-4 md:px-8 lg:px-12")}>
        <div className="mb-16 md:mb-32">
          <h1 className={cn(commonClasses.h1, "text-black mb-8")}>
            <span className="font-light">
              <img
                src="logoOrange.png"
                alt="Fika Orange Logo"
                className="inline h-[1.2em] mx-3 align-middle translate-y-[-8px]"
              />
              <span className={cn(commonClasses.gradient.orange, commonClasses.gradient.text)}>Case</span>
            </span>{" "}
            in Action
          </h1>
        </div>

        <div className="relative w-full">
          <Timeline data={timelineData} />
        </div>
      </div>

      <style>
        {`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        `}
      </style>
    </section>
  );
}

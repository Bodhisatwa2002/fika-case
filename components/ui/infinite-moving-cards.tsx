"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    quote: string;
    name: string;
    title: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };
  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden h-[300px] [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]  p-4 rounded-lg",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li
            className="relative w-[280px] max-w-full shrink-0 rounded-2xl border border-blue-100 bg-white px-6 py-5 sm:w-[350px] md:w-[450px] md:px-8 md:py-6 flex items-center h-[260px] hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
            key={item.name}
            style={{
              background: "linear-gradient(135deg, #ffffff 0%, #eef5ff 100%)",
            }}
          >
            <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-blue-200 to-blue-400"></div>
            <blockquote className="h-full flex flex-col justify-center pl-3">
              <div
                aria-hidden="true"
                className="user-select-none pointer-events-none absolute -top-4 -right-4 w-20 h-20 rounded-full bg-gradient-to-br from-blue-100 to-indigo-100 opacity-50 blur-xl"
              ></div>
              <span className="font-extrabold relative z-20 text-1xl sm:text-2xl leading-[1.6] bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text">
                {item.name}
              </span>
              <div className="relative z-20 mt-4 sm:mt-6 flex flex-row items-center">
                <span className="flex flex-col gap-1">
                  <span className="text-sm sm:text-xl leading-[1.6] font-normal text-gray-800">
                    "{item.quote}"
                  </span>
                  <span className="text-sm sm:text-md leading-[1.6] font-normal text-blue-500 mt-2 italic">
                    {item.title}
                  </span>
                </span>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};

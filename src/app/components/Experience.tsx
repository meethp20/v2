"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export interface Experience {
  title: string;
  description: string;
  icon?: string; // optional
}

export default function ExperienceBar() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const experiences: Experience[] = [
    {
      title: "Freelance • May 2025 – Present",
      description:
        "Working on full-stack applications with a focus on modern web technologies and scalable backend solutions.",
      icon: "/self-employed.png", // ✅ make sure this is in /public
    },
    // {
    //   title: "Internship • Jan 2025 – Apr 2025",
    //   description:
    //     "Contributed to building internal tools, optimized APIs, and collaborated with the frontend team.",
    //   icon: "/internship.png",
    // },
  ];

  return (
    <motion.div
      className="grid grid-cols-1 pt-[50px] gap-1 relative max-w-xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        staggerChildren: 0.1,
        delayChildren: 0.2,
      }}
    >
      {/* Section Title */}
      <motion.h2
        className="text-lg font-bold mb-4 text-neutral-300"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Experience
      </motion.h2>

      {experiences.map((item, idx) => (
        <motion.div
          key={idx}
          className="px-4 py-3 rounded-md cursor-pointer relative"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: idx * 0.1 }}
          onHoverStart={() => setHoveredIndex(idx)}
          onHoverEnd={() => setHoveredIndex(null)}
        >
          {/* Background hover overlay */}
          <motion.div
            className="absolute inset-0 bg-neutral-900/80 rounded-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: hoveredIndex === idx ? 1 : 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
          />

          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-1">
              {/* ✅ Icon */}
              {item.icon && (
                <motion.img
                  src={item.icon}
                  alt={item.title}
                  className="w-5 h-5 brightness-0 invert object-contain"
                  animate={
                    hoveredIndex === idx
                      ? { rotate: [0, -8, 8, 0] }
                      : { rotate: 0 }
                  }
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                />
              )}

              <motion.h3
                className="font-semibold text-neutral-500 text-base tracking-tight"
                animate={{
                  color:
                    hoveredIndex === idx
                      ? "rgb(229 229 229)"
                      : "rgb(115 115 115)",
                }}
                transition={{ duration: 0.2 }}
              >
                {item.title}
              </motion.h3>
            </div>

            <motion.p
              className="text-gray-300 text-sm tracking-wide leading-relaxed ml-8"
              animate={{ opacity: hoveredIndex === idx ? 1 : 0.75 }}
              transition={{ duration: 0.2 }}
            >
              {item.description}
            </motion.p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}

"use client";
import { motion } from "framer-motion";
import { useState } from "react";

interface Stackie {
  header: string;
  icon: string;
  description: string;
}

export default function StackBar() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  const work: Stackie[] = [
    {
      header: "Frontend",
      icon: "/smartphone.svg",
      description: "React, Nextjs, Sveltejs, Tailwind, Streamlit",
    },
    {
      header: "Backend",
      icon: "/file.svg",
      description: "Nodejs, Express, PostgreSQL, Prisma, MongoDb",
    },
    {
      header: "Languages",
      icon: "/code.svg",
      description: "Typescript, Javascript, Rust, Java, C, Python",
    },
    {
      header: "Tools",
      icon: "/hammer.svg",
      description: "Git, Github, Vercel, Docker",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 15
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  const iconVariants = {
    hover: {
      rotate: [0, -8, 8, 0],
      transition: {
        duration: 0.35,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div 
      className="grid grid-cols-1 gap-0.5 relative max-w-md"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {work.map((item, idx) => (
        <motion.div
          key={idx}
          className="px-3 py-2.5 rounded-md cursor-pointer relative"
          variants={itemVariants}
          onHoverStart={() => setHoveredIndex(idx)}
          onHoverEnd={() => setHoveredIndex(null)}
        >
          {/* Individual background for each item */}
          <motion.div
            className="absolute inset-0 bg-neutral-900/80 rounded-md"
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: hoveredIndex === idx ? 1 : 0 
            }}
            transition={{ 
              duration: 0.25,
              ease: "easeInOut"
            }}
          />
          
          <div className="relative z-10">
            <div className="flex items-center gap-2.5 mb-1">
              <motion.img
                src={item.icon}
                alt={item.header}
                className="w-5 h-5 brightness-0 invert"
                variants={iconVariants}
                animate={hoveredIndex === idx ? "hover" : ""}
              />
              <motion.h3 
                className="font-semibold text-neutral-500 text-base tracking-tight"
                animate={{
                  color: hoveredIndex === idx ? "rgb(229 229 229)" : "rgb(115 115 115)"
                }}
                transition={{ duration: 0.2 }}
              >
                {item.header}
              </motion.h3>
            </div>
            <motion.p 
              className="text-gray-300 text-xs tracking-wide leading-relaxed ml-7"
              animate={{
                opacity: hoveredIndex === idx ? 1 : 0.7
              }}
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
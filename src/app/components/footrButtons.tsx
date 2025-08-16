"use client";
import { motion } from "framer-motion";

export default function FooterButtons() {
  const Main = [
    { name: "GitHub", link: "https://github.com/meethp20" },
    { name: "LinkedIn", link: "https://www.linkedin.com/in/meeth-patel-b35b652b2/" },
  ];

  return (
    <div className="flex border-b border-white/20 gap-3 pt-[20px] pb-4 mb-4">
      {Main.map((obj, idx) => (
        <motion.a
          href={obj.link}
          key={idx}
          target="_blank"
          rel="noopener noreferrer"
          className="flex gap-x-2 items-center text-zinc-100 bg-zinc-800 rounded-2xl text-xs px-4 py-1.5 group overflow-hidden relative"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.3, 
            delay: idx * 0.08,
            ease: "easeOut"
          }}
          whileHover={{ 
            scale: 1.03,
            backgroundColor: "#52525b",
            transition: { duration: 0.15 }
          }}
          whileTap={{ 
            scale: 0.97,
            transition: { duration: 0.1 }
          }}
        >
          {obj.name}
          <motion.img 
            src="/move-up-right.svg" 
            alt="arrow"  
            className="w-3.5 h-3.5 filter invert"
            whileHover={{
              scale: 1.15,
              rotate: 12,
              transition: { duration: 0.15 }
            }}
          />
        </motion.a>
      ))}
    </div>
  );
}

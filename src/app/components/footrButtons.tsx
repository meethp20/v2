"use client";
import { motion } from "framer-motion";

export default function FooterButtons() {
  const Main = [
    { name: "github", link: "/" },
    { name: "Twitter", link: "/" },
  ];

  return (
   <div className="flex border-b border-white/20 gap-3 pt-[20px] pb-4 mb-4">
      {Main.map((Object, idx) => (
        <motion.button
          className="text-zinc-100 bg-zinc-800 rounded-2xl text-xs px-4 py-1.5 group overflow-hidden relative"
          key={idx}
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
          <motion.div className="flex gap-x-2 items-center">
            <motion.a 
              href={Object.link} 
              className=""
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.15 }
              }}
            >
              {Object.name}
            </motion.a>
            <motion.img 
              src="/move-up-right.svg" 
              alt="arrow"  
              className="w-3.5 h-3.5 filter invert brightness-0 invert"
              whileHover={{
                scale: 1.15,
                rotate: 12,
                transition: { duration: 0.15 }
              }}
            />
          </motion.div>
        </motion.button>
      ))}
    </div>
  );
}
"use client";
import { motion } from "framer-motion";
import { FlipWords } from "@/components/ui/flip-words";
import Image from "next/image";

export default function Hero() {
  const words = ["Code", "Design"];

  return (
    <motion.div
      className="pt-[70px] flex justify-between "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div>
        <motion.div
          className="flex justify-between item-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div>Meeth Patel</div>
        </motion.div>

        <motion.div
          className="pr-10 text-[13px] w-full text-gray-500"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          {/* <FlipWords className="text-gray-300" words={words} /> */}
          Developer
        </motion.div>

        <motion.div
          className="flex pt-[20px]"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
        >
          <p className="text-neutral-500">The only thing I do is</p>{" "}
          <span>
            {" "}
            <FlipWords className="text-neutral-400 pr-1" words={words} />{" "}
          </span>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.4 }}
      >
        <Image
          src={"/pic2.jpg"}
          className="rounded-3xl hover:cursor-pointer "
          style={{
            maskImage:
              "radial-gradient(ellipse at center, black 60%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(ellipse at center, black 60%, transparent 100%)",
          }}
          width={120}
          height={70}
          alt="Dark"
        />
      </motion.div>
    </motion.div>
  );
}

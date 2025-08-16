'use client'
import StackBar from "./StackBar"
import { motion } from "framer-motion"

export default function Stacks() {
  return (
    <motion.div
      className="pt-[50px]"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.3,
        delayChildren: 0.2,
      }}
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: -20, scale: 0.9 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div>Stacks</div>
      </motion.div>

      {/* StackBar */}
      <motion.div
        className="pt-3"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
      >
        <StackBar />
      </motion.div>
    </motion.div>
  )
}

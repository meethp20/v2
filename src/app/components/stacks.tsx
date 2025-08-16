'use client'
import StackBar from "./StackBar"
import { motion } from "framer-motion"

export default function Stacks() {
    // Animation variants for the main container
    const containerVariants = {
        hidden: { 
            opacity: 0,
            y: 30 
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut",
                staggerChildren: 0.3, // Delay between child animations
                delayChildren: 0.2    // Initial delay before children start animating
            }
        }
    }

    // Animation variants for the "Stacks" title
    const titleVariants = {
        hidden: { 
            opacity: 0,
            y: -20,
            scale: 0.9
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    }

    // Animation variants for the StackBar container
    const stackBarVariants = {
        hidden: { 
            opacity: 0,
            y: 20
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.7,
                ease: "easeOut",
                delay: 0.2 // Slight delay so title animates first
            }
        }
    }

    return (
        <motion.div 
            className="pt-[50px]"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            // Optional: Add viewport-based animation
            viewport={{ once: true, amount: 0.3 }}
            whileInView="visible"
        >
            {/* Animated title with glowing effect */}
            <motion.div 
                className=""
                variants={titleVariants}
            >
                <div>
                    Stacks
                </div>
            </motion.div>

            {/* Animated StackBar container */}
            <motion.div 
                className="pt-3"
                variants={stackBarVariants}
            >
                <StackBar />
            </motion.div>
        </motion.div>
    )
}
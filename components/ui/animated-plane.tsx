"use client"

import { useEffect, useRef } from "react"
import { motion, useAnimation, useInView } from "framer-motion"

interface AnimatedPlaneProps {
  className?: string
  size?: number
  color?: string
  delay?: number
}

export function AnimatedPlane({ className = "", size = 40, color = "#ffffff", delay = 0 }: AnimatedPlaneProps) {
  const controls = useAnimation()
  const ref = useRef(null)
  const inView = useInView(ref, { once: false, threshold: 0.1 })

  useEffect(() => {
    if (inView) {
      controls.start({
        x: ["-100%", "120%"],
        y: [0, -20, 0, -30, 0],
        transition: {
          x: {
            duration: 15,
            ease: "linear",
            repeat: Number.POSITIVE_INFINITY,
            repeatDelay: 2,
            delay,
          },
          y: {
            duration: 5,
            ease: "easeInOut",
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          },
        },
      })
    }
  }, [controls, inView, delay])

  return (
    <div ref={ref} className={`absolute pointer-events-none ${className}`}>
      <motion.div animate={controls} initial={{ x: "-100%" }}>
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M21.5 4.5L12.5 9.5M12.5 9.5L9.5 12.5M12.5 9.5L15.5 19.5M4.5 10.5L9.5 12.5M9.5 12.5L7.5 17.5"
            stroke={color}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path d="M12 19V19.01" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </motion.div>
    </div>
  )
}

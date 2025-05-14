"use client"

import type React from "react"

import { useRef, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Send } from "lucide-react"
import { toast } from "@/components/ui/use-toast"
import Image from "next/image"

export default function NewsletterSection() {
  const [email, setEmail] = useState("")
  const containerRef = useRef<HTMLDivElement>(null)
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  })

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    // In a real app, you would send this to your API
    toast({
      title: "Subscription successful!",
      description: "Thank you for subscribing to our newsletter.",
    })

    setEmail("")
  }

  return (
    <div ref={containerRef} className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/20 to-brand-teal/20" />
        <Image
          src="/images/newsletter.jpeg"
          alt="Newsletter background"
          fill
          className="object-cover mix-blend-overlay opacity-20"
        />
      </div>

      <motion.div style={{ y }} className="container mx-auto px-4">
        <div
          ref={ref}
          className="max-w-3xl mx-auto bg-white/80 dark:bg-gray-900/80 backdrop-blur-md rounded-2xl p-8 md:p-12 shadow-xl"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get Travel Inspiration</h2>
            <p className="text-lg text-muted-foreground">
              Subscribe to our newsletter for exclusive deals, travel tips, and destination guides.
            </p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3"
          >
            <Input
              type="email"
              placeholder="Enter your email address"
              className="h-12 text-base"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Button type="submit" className="h-12 px-8 bg-brand-teal hover:bg-brand-navy">
              Subscribe <Send className="ml-2 h-4 w-4" />
            </Button>
          </motion.form>

          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-sm text-muted-foreground mt-4 text-center"
          >
            By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
          </motion.p>
        </div>
      </motion.div>
    </div>
  )
}

"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { X, MessageSquare } from "lucide-react"

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 5000)

    return () => clearTimeout(timer)
  }, [])

  const toggleOpen = () => {
    setIsOpen(!isOpen)
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed bottom-6 right-6 z-50"
        >
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 10 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl p-6 mb-4 w-[320px]"
              >
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-bold text-lg">Need Help Planning?</h3>
                  <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                    <X className="h-4 w-4" />
                  </Button>
                </div>
                <p className="text-muted-foreground mb-4">
                  Our travel experts are ready to create your perfect itinerary. Get in touch for personalized
                  assistance.
                </p>
                <div className="space-y-2">
                  <Button className="w-full bg-brand-teal hover:bg-brand-navy">Chat with an Expert</Button>
                  <Button variant="outline" className="w-full">
                    Schedule a Call
                  </Button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleOpen}
            className="bg-brand-teal hover:bg-brand-navy text-white rounded-full h-14 w-14 flex items-center justify-center shadow-lg cursor-pointer"
          >
            <MessageSquare className="h-6 w-6" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

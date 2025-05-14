"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function TestimonialSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [50, -50])

  const [titleRef, titleInView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  })

  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "New York, USA",
      image: "/placeholder.svg?height=100&width=100",
      text: "EasyOurTour made our family vacation to Greece absolutely seamless. From the personalized itinerary to the knowledgeable guides, every detail was perfect. We'll definitely be booking our next adventure with them!",
      rating: 5,
    },
    {
      name: "David Chen",
      location: "Toronto, Canada",
      image: "/placeholder.svg?height=100&width=100",
      text: "I was hesitant about booking a solo trip to Japan, but the team at EasyOurTour made it so easy. They arranged everything perfectly and were always available when I needed assistance. Truly a 5-star experience!",
      rating: 5,
    },
    {
      name: "Emma Rodriguez",
      location: "Barcelona, Spain",
      image: "/placeholder.svg?height=100&width=100",
      text: "Our honeymoon in Bali was everything we dreamed of and more. EasyOurTour understood exactly what we wanted and delivered an unforgettable experience. The private villa they booked for us had the most stunning views!",
      rating: 5,
    },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  return (
    <section ref={containerRef} className="relative py-20 md:py-32 overflow-hidden bg-brand-navy/5">
      <motion.div style={{ y }} className="container mx-auto px-4">
        <div ref={titleRef} className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Travelers Say</h2>
            <p className="text-muted-foreground">Real experiences from travelers who have explored the world with us</p>
          </motion.div>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            {testimonials.map(
              (testimonial, index) =>
                currentSlide === index && (
                  <motion.div
                    key={testimonial.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-10"
                  >
                    <div className="flex flex-col md:flex-row md:items-center gap-6">
                      <div className="flex-shrink-0">
                        <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-4 border-brand-teal/20">
                          <Image
                            src={testimonial.image || "/placeholder.svg"}
                            alt={testimonial.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>
                      <div className="flex-1">
                        <Quote className="h-10 w-10 text-brand-teal/20 mb-4" />
                        <p className="text-lg mb-6 italic">{testimonial.text}</p>
                        <div>
                          <h4 className="font-bold text-lg">{testimonial.name}</h4>
                          <p className="text-muted-foreground">{testimonial.location}</p>
                          <div className="flex mt-2">
                            {[...Array(5)].map((_, i) => (
                              <svg
                                key={i}
                                className={cn(
                                  "w-5 h-5",
                                  i < testimonial.rating ? "text-brand-teal" : "text-gray-300 dark:text-gray-600",
                                )}
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ),
            )}
          </AnimatePresence>

          <div className="flex justify-center mt-8 gap-4">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              className="rounded-full border-brand-teal/20 hover:bg-brand-teal/10 hover:text-brand-teal"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentSlide === index ? "bg-brand-teal w-8" : "bg-brand-teal/30 hover:bg-brand-teal/50"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              className="rounded-full border-brand-teal/20 hover:bg-brand-teal/10 hover:text-brand-teal"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

"use client"

import { useRef, useState, useEffect } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Compass, Briefcase, Utensils, Camera, Mountain, Plane } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function ExperienceShowcase() {
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

  const experiences = [
    {
      title: "Adventure Tours",
      description: "Thrilling experiences for the bold traveler",
      icon: Mountain,
      color: "bg-brand-navy text-white",
    },
    {
      title: "Cultural Immersion",
      description: "Connect with local traditions and heritage",
      icon: Compass,
      color: "bg-brand-teal text-white",
    },
    {
      title: "Luxury Getaways",
      description: "Premium experiences with exceptional service",
      icon: Briefcase,
      color: "bg-brand-navy text-white",
    },
    {
      title: "Culinary Journeys",
      description: "Taste authentic flavors from around the world",
      icon: Utensils,
      color: "bg-brand-teal text-white",
    },
    {
      title: "Photography Tours",
      description: "Capture stunning landscapes and moments",
      icon: Camera,
      color: "bg-brand-navy text-white",
    },
    {
      title: "Island Hopping",
      description: "Explore multiple destinations in one trip",
      icon: Plane,
      color: "bg-brand-teal text-white",
    },
  ]

  const [experienceInView, setExperienceInView] = useState<boolean[]>([])
  const experienceRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    // Initialize the state with false values for each experience
    setExperienceInView(new Array(experiences.length).fill(false))
    // Initialize the refs array
    experienceRefs.current = experienceRefs.current.slice(0, experiences.length)
  }, [experiences.length])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = experienceRefs.current.findIndex((ref) => ref === entry.target)
          if (index !== -1 && entry.isIntersecting) {
            setExperienceInView((prev) => {
              const newState = [...prev]
              newState[index] = true
              return newState
            })
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: "50px",
      },
    )

    experienceRefs.current.forEach((ref) => {
      if (ref) {
        observer.observe(ref)
      }
    })

    return () => observer.disconnect()
  }, [experiences.length])

  return (
    <section ref={containerRef} className="relative py-20 md:py-32 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-32 wave-animation transform rotate-180" />

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div style={{ y }} className="relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/placeholder.svg?height=800&width=600"
                alt="Travel experiences"
                width={600}
                height={800}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-2/3 h-2/3 rounded-2xl overflow-hidden border-8 border-white dark:border-gray-900 shadow-xl">
              <Image
                src="/placeholder.svg?height=400&width=300"
                alt="Travel experiences detail"
                width={300}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -z-10 top-1/4 -left-10 w-64 h-64 bg-brand-teal/10 rounded-full blur-3xl" />
            <div className="absolute -z-10 bottom-1/4 right-0 w-40 h-40 bg-brand-navy/10 rounded-full blur-2xl" />
          </motion.div>

          <div>
            <div ref={titleRef} className="mb-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Unforgettable Travel Experiences</h2>
                <p className="text-muted-foreground mb-6">
                  We curate exceptional travel experiences tailored to your preferences. From adrenaline-pumping
                  adventures to serene retreats, discover the world your way.
                </p>
                <Button className="bg-brand-teal hover:bg-brand-navy">Explore Experiences</Button>
              </motion.div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {experiences.map((experience, index) => (
                <motion.div
                  key={experience.title}
                  ref={(el) => (experienceRefs.current[index] = el)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={experienceInView[index] ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
                    <CardContent className="p-4 flex items-start space-x-4">
                      <div className={`p-2 rounded-lg ${experience.color}`}>
                        <experience.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-medium">{experience.title}</h3>
                        <p className="text-sm text-muted-foreground">{experience.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

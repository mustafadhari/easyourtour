"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function InstagramFeed() {
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

  const instagramPosts = [
    {
      id: 1,
      image: "/placeholder.svg?height=600&width=600",
      likes: 245,
      comments: 18,
    },
    {
      id: 2,
      image: "/placeholder.svg?height=600&width=600",
      likes: 189,
      comments: 24,
    },
    {
      id: 3,
      image: "/placeholder.svg?height=600&width=600",
      likes: 321,
      comments: 32,
    },
    {
      id: 4,
      image: "/placeholder.svg?height=600&width=600",
      likes: 178,
      comments: 14,
    },
    {
      id: 5,
      image: "/placeholder.svg?height=600&width=600",
      likes: 267,
      comments: 29,
    },
    {
      id: 6,
      image: "/placeholder.svg?height=600&width=600",
      likes: 203,
      comments: 21,
    },
  ]

  return (
    <section ref={containerRef} className="relative py-20 overflow-hidden">
      <motion.div style={{ y }} className="container mx-auto px-4">
        <div ref={titleRef} className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            <Instagram className="h-8 w-8 text-brand-teal mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Follow Our Adventures</h2>
            <p className="text-muted-foreground">
              Join our community of travelers and get inspired by our latest destinations
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {instagramPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-lg aspect-square"
            >
              <Image
                src={post.image || "/placeholder.svg"}
                alt={`Instagram post ${post.id}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <div className="flex justify-between text-white text-sm">
                  <span>❤️ {post.likes}</span>
                  <span>💬 {post.comments}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button variant="outline" className="border-brand-teal text-brand-teal hover:bg-brand-teal/10">
            Follow us on Instagram
          </Button>
        </div>
      </motion.div>
    </section>
  )
}

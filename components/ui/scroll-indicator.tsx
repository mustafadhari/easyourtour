"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"
import { ChevronDown } from "lucide-react"

interface ScrollIndicatorProps {
  className?: string
  color?: string
  size?: number
  targetId?: string
}

export function ScrollIndicator({ className, color = "white", size = 24, targetId }: ScrollIndicatorProps) {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleClick = () => {
    if (targetId) {
      const element = document.getElementById(targetId)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    } else {
      window.scrollBy({
        top: window.innerHeight,
        behavior: "smooth",
      })
    }
  }

  return (
    <div
      className={cn(
        "flex flex-col items-center transition-opacity duration-300 cursor-pointer",
        isVisible ? "opacity-100" : "opacity-0",
        className,
      )}
      onClick={handleClick}
    >
      <div className="animate-bounce">
        <ChevronDown size={size} color={color} />
      </div>
    </div>
  )
}

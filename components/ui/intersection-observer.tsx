"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"

interface IntersectionObserverProps {
  children: (isIntersecting: boolean) => React.ReactNode
  threshold?: number
  rootMargin?: string
  triggerOnce?: boolean
}

const IntersectionObserverComponent: React.FC<IntersectionObserverProps> = ({
  children,
  threshold = 0.1,
  rootMargin = "0px",
  triggerOnce = false,
}) => {
  const [isIntersecting, setIsIntersecting] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting)

        // If triggerOnce is true and the element is intersecting, disconnect the observer
        if (triggerOnce && entry.isIntersecting) {
          observer.disconnect()
        }
      },
      {
        threshold,
        rootMargin,
      },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [threshold, rootMargin, triggerOnce])

  return <div ref={ref}>{children(isIntersecting)}</div>
}

export default IntersectionObserverComponent

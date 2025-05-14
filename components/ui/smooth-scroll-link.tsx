"use client"

import type React from "react"
import Link from "next/link"

interface SmoothScrollLinkProps {
  href: string
  children: React.ReactNode
  className?: string
  duration?: number
  offset?: number
  onClick?: () => void
}

const SmoothScrollLink: React.FC<SmoothScrollLinkProps> = ({
  href,
  children,
  className = "",
  duration = 800,
  offset = 0,
  onClick,
}) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Only handle smooth scroll for same-page links
    if (href.startsWith("#")) {
      e.preventDefault()

      const targetId = href.substring(1)
      const targetElement = document.getElementById(targetId)

      if (targetElement) {
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - offset
        const startPosition = window.pageYOffset
        const distance = targetPosition - startPosition
        let startTime: number | null = null

        const animation = (currentTime: number) => {
          if (startTime === null) startTime = currentTime
          const timeElapsed = currentTime - startTime
          const progress = Math.min(timeElapsed / duration, 1)

          // Easing function: easeInOutQuad
          const ease = (t: number) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t)

          window.scrollTo(0, startPosition + distance * ease(progress))

          if (timeElapsed < duration) {
            requestAnimationFrame(animation)
          }
        }

        requestAnimationFrame(animation)

        if (onClick) {
          onClick()
        }
      }
    } else if (onClick) {
      onClick()
    }
  }

  return (
    <Link href={href} className={className} onClick={handleClick}>
      {children}
    </Link>
  )
}

export default SmoothScrollLink

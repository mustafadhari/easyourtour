import type React from "react"
import { cn } from "@/lib/utils"

interface GlassmorphismCardProps {
  children: React.ReactNode
  className?: string
  blur?: string
  opacity?: string
  border?: boolean
  shadow?: boolean
}

export function GlassmorphismCard({
  children,
  className,
  blur = "backdrop-blur-md",
  opacity = "bg-white/30 dark:bg-black/30",
  border = true,
  shadow = true,
}: GlassmorphismCardProps) {
  return (
    <div
      className={cn("rounded-xl", blur, opacity, border && "border border-white/20", shadow && "shadow-lg", className)}
    >
      {children}
    </div>
  )
}

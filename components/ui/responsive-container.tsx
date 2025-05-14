import type React from "react"

interface ResponsiveContainerProps {
  children: React.ReactNode
  className?: string
  as?: React.ElementType
  maxWidth?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "full" | "none"
  padding?: boolean
}

const ResponsiveContainer: React.FC<ResponsiveContainerProps> = ({
  children,
  className = "",
  as: Component = "div",
  maxWidth = "xl",
  padding = true,
}) => {
  const maxWidthClasses = {
    xs: "max-w-xs",
    sm: "max-w-sm",
    md: "max-w-md",
    lg: "max-w-lg",
    xl: "max-w-xl",
    "2xl": "max-w-2xl",
    full: "max-w-full",
    none: "",
  }

  return (
    <Component
      className={`w-full mx-auto ${maxWidthClasses[maxWidth]} ${padding ? "px-4 sm:px-6 md:px-8" : ""} ${className}`}
    >
      {children}
    </Component>
  )
}

export default ResponsiveContainer

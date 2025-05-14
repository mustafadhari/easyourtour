import type React from "react"

interface ResponsiveGridProps {
  children: React.ReactNode
  className?: string
  cols?: {
    default: number
    sm?: number
    md?: number
    lg?: number
    xl?: number
  }
  gap?: string
}

const ResponsiveGrid: React.FC<ResponsiveGridProps> = ({
  children,
  className = "",
  cols = { default: 1, sm: 2, md: 3, lg: 4 },
  gap = "gap-6",
}) => {
  const getGridCols = () => {
    const gridClasses = [`grid-cols-${cols.default}`]

    if (cols.sm) gridClasses.push(`sm:grid-cols-${cols.sm}`)
    if (cols.md) gridClasses.push(`md:grid-cols-${cols.md}`)
    if (cols.lg) gridClasses.push(`lg:grid-cols-${cols.lg}`)
    if (cols.xl) gridClasses.push(`xl:grid-cols-${cols.xl}`)

    return gridClasses.join(" ")
  }

  return <div className={`grid ${getGridCols()} ${gap} ${className}`}>{children}</div>
}

export default ResponsiveGrid

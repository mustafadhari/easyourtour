"use client"

import { useEffect, useRef } from "react"

interface WaveAnimationProps {
  className?: string
  color?: string
  height?: number
  width?: number
  speed?: number
  amplitude?: number
}

export function WaveAnimation({
  className = "",
  color = "#0ea5e9",
  height = 100,
  width = 1000,
  speed = 0.15,
  amplitude = 20,
}: WaveAnimationProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = width
    canvas.height = height

    let animationFrameId: number
    let offset = 0

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.beginPath()

      // Start the wave from the left edge
      ctx.moveTo(0, height / 2)

      // Draw the wave
      for (let i = 0; i < canvas.width; i++) {
        const y = Math.sin(i * 0.01 + offset) * amplitude + height / 2
        ctx.lineTo(i, y)
      }

      // Complete the path to fill the area below the wave
      ctx.lineTo(canvas.width, canvas.height)
      ctx.lineTo(0, canvas.height)
      ctx.closePath()

      // Fill with gradient
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height)
      gradient.addColorStop(0, `${color}80`) // Semi-transparent at top
      gradient.addColorStop(1, `${color}10`) // More transparent at bottom
      ctx.fillStyle = gradient
      ctx.fill()

      // Animate
      offset += speed
      animationFrameId = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      cancelAnimationFrame(animationFrameId)
    }
  }, [color, height, width, speed, amplitude])

  return (
    <canvas
      ref={canvasRef}
      className={`absolute bottom-0 left-0 w-full pointer-events-none ${className}`}
      style={{ height: `${height}px` }}
    />
  )
}

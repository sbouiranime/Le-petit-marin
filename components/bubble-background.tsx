"use client"

import { useEffect, useRef } from "react"

export function BubbleBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return 

    const width = (canvas.width = window.innerWidth)
    const height = (canvas.height = window.innerHeight)
    const bubbles = Array.from({ length: 50 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height + height, 
      radius: Math.random() * 8 + 2,
      speed: Math.random() * 2 + 1,
      opacity: Math.random() * 0.5 + 0.1,
    }))

    let animationFrameId: number | undefined

    const render = () => {
      ctx.clearRect(0, 0, width, height)

      bubbles.forEach((bubble) => {
        ctx.beginPath()
        ctx.arc(bubble.x, bubble.y, bubble.radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(165, 213, 252, ${bubble.opacity})`
        ctx.fill()
        ctx.beginPath()
        ctx.arc(bubble.x - bubble.radius * 0.3, bubble.y - bubble.radius * 0.3, bubble.radius * 0.2, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 255, 255, ${bubble.opacity + 0.2})`
        ctx.fill()

        bubble.y -= bubble.speed

        if (bubble.y < -bubble.radius * 2) {
          bubble.y = height + bubble.radius
          bubble.x = Math.random() * width
        }
      })

      animationFrameId = window.requestAnimationFrame(render)
    }

    render()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("resize", handleResize)

    return () => {
      if (animationFrameId !== undefined) {
        window.cancelAnimationFrame(animationFrameId)
      }
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full pointer-events-none z-0" />
}
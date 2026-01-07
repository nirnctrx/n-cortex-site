"use client"

import { useEffect, useRef } from "react"

export function RadarWaves() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size
    const updateCanvasSize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    updateCanvasSize()
    window.addEventListener("resize", updateCanvasSize)

    // Wave parameters
    const waves: Array<{
      x: number
      y: number
      radius: number
      maxRadius: number
      speed: number
      opacity: number
    }> = []

    // Create initial waves
    const createWave = () => {
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: 0,
        maxRadius: Math.random() * 300 + 200,
        speed: Math.random() * 0.5 + 0.3,
        opacity: Math.random() * 0.3 + 0.1,
      }
    }

    // Initialize waves
    for (let i = 0; i < 5; i++) {
      waves.push(createWave())
    }

    // Animation loop
    let animationId: number
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update and draw waves
      waves.forEach((wave, index) => {
        wave.radius += wave.speed

        // Reset wave when it reaches max radius
        if (wave.radius >= wave.maxRadius) {
          waves[index] = createWave()
          return
        }

        // Calculate opacity fade
        const fadeStart = wave.maxRadius * 0.7
        let currentOpacity = wave.opacity
        if (wave.radius > fadeStart) {
          const fadeProgress = (wave.radius - fadeStart) / (wave.maxRadius - fadeStart)
          currentOpacity = wave.opacity * (1 - fadeProgress)
        }

        // Draw wave circles
        ctx.strokeStyle = `rgba(114, 213, 188, ${currentOpacity})`
        ctx.lineWidth = 2
        ctx.beginPath()
        ctx.arc(wave.x, wave.y, wave.radius, 0, Math.PI * 2)
        ctx.stroke()

        if (wave.radius > 15) {
          ctx.strokeStyle = `rgba(114, 213, 188, ${currentOpacity * 0.5})`
          ctx.lineWidth = 1
          ctx.beginPath()
          ctx.arc(wave.x, wave.y, wave.radius - 10, 0, Math.PI * 2)
          ctx.stroke()
        }
      })

      animationId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", updateCanvasSize)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <canvas ref={canvasRef} className="pointer-events-none absolute inset-0 z-0" style={{ mixBlendMode: "screen" }} />
  )
}

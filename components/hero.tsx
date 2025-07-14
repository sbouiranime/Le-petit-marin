"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"

export function Hero() {
  // État pour le carrousel
  const [currentSlide, setCurrentSlide] = useState(0)
  // Référence pour le canvas
  const canvasRef = useRef<HTMLCanvasElement>(null)

  // Images du restaurant (utilisation d'images placeholder)
  const images = [
    "/equipe.jpg",
    "/k.jpg",
    "/l.jpg",
    "/m.jpg"
  ]

  // Fonction pour passer à la diapositive suivante
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  // Fonction pour passer à la diapositive précédente
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  useEffect(() => {
    // Configurer l'intervalle pour faire défiler automatiquement les images
    const slideInterval = setInterval(nextSlide, 5000)
    return () => clearInterval(slideInterval)
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return
    
    const width = (canvas.width = window.innerWidth)
    const height = (canvas.height = 200)

    // Wave parameters
    const waves = [
      { y: height * 0.7, length: 0.01, amplitude: 20, speed: 0.003 },
      { y: height * 0.6, length: 0.02, amplitude: 15, speed: 0.002 },
      { y: height * 0.5, length: 0.03, amplitude: 10, speed: 0.001 },
    ]

    let animationFrameId: number
    let time = 0

    const render = () => {
      ctx.clearRect(0, 0, width, height)

      // Draw waves
      waves.forEach((wave, index) => {
        ctx.beginPath()

        // Create gradient for each wave
        const gradient = ctx.createLinearGradient(0, 0, 0, height)

        if (index === 0) {
          gradient.addColorStop(0, "rgba(12, 46, 96, 0.7)") // navy blue
          gradient.addColorStop(1, "rgba(12, 46, 96, 0.2)")
        } else if (index === 1) {
          gradient.addColorStop(0, "rgba(10, 37, 80, 0.6)") // darker navy
          gradient.addColorStop(1, "rgba(10, 37, 80, 0.2)")
        } else {
          gradient.addColorStop(0, "rgba(8, 28, 64, 0.5)") // darkest navy
          gradient.addColorStop(1, "rgba(8, 28, 64, 0.2)")
        }

        ctx.fillStyle = gradient

        // Draw wave path
        ctx.moveTo(0, height)

        for (let x = 0; x < width; x++) {
          const y = wave.y + Math.sin(x * wave.length + time * wave.speed) * wave.amplitude
          ctx.lineTo(x, y)
        }

        ctx.lineTo(width, height)
        ctx.closePath()
        ctx.fill()
      })

      time += 1
      animationFrameId = window.requestAnimationFrame(render)
    }

    render()

    const handleResize = () => {
      canvas.width = window.innerWidth
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.cancelAnimationFrame(animationFrameId)
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center items-center pt-16 pb-20 px-4">
      <div className="absolute bottom-0 left-0 w-full">
        <canvas ref={canvasRef} className="w-full h-[200px]"></canvas>
      </div>

      <motion.div
        className="container mx-auto text-center z-10 max-w-4xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-6 text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <span className="text-blue-200">LE PETIT</span> MARIN
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl mb-6 text-blue-100"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Restaurant - Pizzeria 
        </motion.p>

        <motion.p
          className="text-lg md:text-xl mb-8 text-blue-100"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Un voyage culinaire entre la mer, la terre et la flamme
        </motion.p>

        {/* Carrousel agrandi */}
        <motion.div
          className="relative mt-8 mb-8 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <div className="overflow-hidden rounded-lg shadow-xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out" 
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {images.map((src, index) => (
                <div key={index} className="min-w-full">
                  <img 
                    src={src} 
                    alt={`Vue du restaurant ${index + 1}`} 
                    className="w-full h-96 md:h-112 lg:h-128 object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
          
          {/* Contrôles du carrousel */}
          <button 
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full p-3 hover:bg-opacity-75 transition-colors"
            aria-label="Image précédente"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full p-3 hover:bg-opacity-75 transition-colors"
            aria-label="Image suivante"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          
          {/* Indicateurs */}
          <div className="flex justify-center mt-6 gap-3">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-4 h-4 rounded-full ${
                  index === currentSlide ? "bg-white" : "bg-white bg-opacity-50"
                }`}
                aria-label={`Aller à l'image ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </motion.div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12 5V19M12 19L5 12M12 19L19 12"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </section>
  )
}
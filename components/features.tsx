"use client"

import { useRef } from "react"
import { useInView } from "framer-motion"
import { Fish, Award, UtensilsCrossed, Clock } from "lucide-react"

export function Features() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const features = [
    {
      icon: <Fish className="w-8 h-8 md:w-10 md:h-10" />,
      title: "Fruits de Mer Frais",
      description: "Poissons et fruits de mer sourcés quotidiennement auprès des pêcheurs locaux.",
    },
    {
      icon: <UtensilsCrossed className="w-8 h-8 md:w-10 md:h-10" />,
      title: "Cuisine Authentique",
      description: "Recettes traditionnelles méditerranéennes préparées avec passion et savoir-faire.",
    },
    {
      icon: <Award className="w-8 h-8 md:w-10 md:h-10" />,
      title: "Qualité Exceptionnelle",
      description: "Sélection rigoureuse des meilleurs ingrédients pour une expérience d'exception.",
    },
    {
      icon: <Clock className="w-8 h-8 md:w-10 md:h-10" />,
      title: "Service Attentionné",
      description: "Notre équipe dévouée vous accueille dans une ambiance chaleureuse et conviviale.",
    },
  ]

  return (
    <section id="features" className="py-20 px-4 bg-gradient-to-b from-[#081c40]/50 to-[#0c2e60]/50 relative">
      <div className="container mx-auto max-w-6xl">
        <div ref={ref} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Nos Spécialités</h2>
          <div className="w-20 h-1 bg-[#3a6ea5] mx-auto mb-6"></div>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            Découvrez ce qui fait la renommée du Petit Marin et pourquoi nos clients reviennent régulièrement.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-[#2a4d7c] to-[#1e3a5f] p-4 md:p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
            >
              <div className="bg-white/10 w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-white">{feature.title}</h3>
              <p className="text-white/90 text-sm md:text-base">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative wave */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-0 transform rotate-180">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-12"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-[#081c40]"
          ></path>
        </svg>
      </div>

      {/* Decorative wave */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-0">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-12"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-[#0c2e60]"
          ></path>
        </svg>
      </div>
    </section>
  )
}

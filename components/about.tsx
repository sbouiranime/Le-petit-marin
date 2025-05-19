"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section id="about" className="py-20 px-4 relative overflow-hidden">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">À Propos</h2>
          <div className="w-20 h-1 bg-[#3a6ea5] mx-auto mb-6"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-[#0c2e60]/40 backdrop-blur-sm p-6 rounded-lg border border-[#0a2550]/50"
          >
           <h3 className="text-xl font-bold mb-4 text-white">Notre Histoire</h3>
<p className="mb-4 text-blue-100">
  Le Petit Marin est un restaurant situé à Nabeul, spécialisé dans la cuisine marine et connu pour ses plats à base de poissons frais.
</p>
<p className="mb-4 text-blue-100">
  Fondé le 7 juin 2024, notre établissement est né d'une grande passion pour la mer et pour la richesse culinaire qu'elle inspire.
</p>
<p className="text-blue-100">
  Chaque jour, nous sélectionnons des produits frais auprès de pêcheurs locaux pour vous offrir des plats savoureux dans un cadre chaleureux et authentique.
</p>


          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="aspect-square rounded-full bg-gradient-to-br from-[#0c2e60] to-[#081c40] p-1">
              <div className="w-full h-full rounded-full overflow-hidden bg-[#081c40] flex items-center justify-center">
                <img
                  src="/serveur.jpg?height=400&width=400"
                  alt="Chef préparant des fruits de mer"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 rounded-full bg-[#0c2e60]/20 backdrop-blur-sm z-[-1]"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-full bg-[#0c2e60]/20 backdrop-blur-sm z-[-1]"></div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

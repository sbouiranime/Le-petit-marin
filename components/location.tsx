"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { MapPin, Clock, CalendarDays } from "lucide-react"

export function Location() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section id="location" className="py-20 px-4 bg-gradient-to-b from-[#081c40]/50 to-[#0c2e60]/50 relative">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Nous Trouver</h2>
          <div className="w-20 h-1 bg-[#3a6ea5] mx-auto mb-6"></div>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            Venez nous rendre visite et découvrez notre restaurant au cadre marin enchanteur
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          <motion.div
  initial={{ opacity: 0, x: -50 }}
  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
  transition={{ duration: 0.8, delay: 0.2 }}
  className="bg-[#0c2e60]/40 backdrop-blur-sm p-6 rounded-lg border border-[#0a2550]/50"
>
  <h3 className="text-xl font-bold mb-6 text-white">Informations Pratiques</h3>

  <div className="space-y-6">
    <div className="flex items-start">
      <div className="bg-[#0c2e60]/60 p-3 rounded-full mr-4">
        <MapPin className="w-5 h-5 text-white" />
      </div>
      <div>
        <h4 className="font-medium text-white">Adresse</h4>
        <p className="text-blue-100">Cité El Wafa AFH 2, Nabeul, Tunisie</p>
      </div>
    </div>

    <div className="flex items-start">
      <div className="bg-[#0c2e60]/60 p-3 rounded-full mr-4">
        <Clock className="w-5 h-5 text-white" />
      </div>
      <div>
        <h4 className="font-medium text-white">Heures d'Ouverture</h4>
        <p className="text-blue-100">Lundi - Vendredi : 09h00 - 23h00</p>
        <p className="text-blue-100">Samedi - Dimanche : 09h00 - 12h00</p>
      </div>
    </div>

    <div className="flex items-start">
      <div className="bg-[#0c2e60]/60 p-3 rounded-full mr-4">
        <CalendarDays className="w-5 h-5 text-white" />
      </div>
      <div>
        <h4 className="font-medium text-white">Réservations</h4>
        <p className="text-blue-100">Recommandées, surtout les week-ends, lors d'événements ou pour les groupes</p>
        <p className="text-blue-100">Appelez au: 22 725 177</p>
      </div>
    </div>
  </div>
</motion.div>


          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="bg-[#0c2e60]/40 backdrop-blur-sm p-2 rounded-lg border border-[#0a2550]/50 h-full">
              <div className="bg-[#0c2e60]/30 rounded-lg h-full overflow-hidden">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3286878.5447866605!2d5.8135315124999885!3d36.437195100000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13029f00397f39f3%3A0x66c4e3d493081bb!2sLe%20petit%20marin!5e0!3m2!1sfr!2stn!4v1747604042457!5m2!1sfr!2stn"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "300px" }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg"
                  title="Carte du restaurant Le Petit Marin"
                ></iframe>
              </div>
            </div>
          </motion.div>
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
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            className="fill-[#0c2e60]"
            opacity=".25"
          ></path>
        </svg>
      </div>
    </section>
  )
}
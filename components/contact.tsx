"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MessageSquare } from "lucide-react"
import { FormEvent } from "react"

export function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Handle form submission
    alert("Formulaire envoyé ! (Ceci est une démo)")
  }

  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-b from-[#0c2e60]/50 to-[#081c40]/50 relative">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Contact</h2>
          <div className="w-20 h-1 bg-[#3a6ea5] mx-auto mb-6"></div>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            Des questions ou envie de réserver une table ? N'hésitez pas à nous contacter.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold mb-6 text-white">Contactez-Nous</h3>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-[#0c2e60]/60 p-3 rounded-full mr-4">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-medium text-white">Téléphone</h4>
                  <p className="text-blue-100">+33 1 23 45 67 89</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-[#0c2e60]/60 p-3 rounded-full mr-4">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-medium text-white">Email</h4>
                  <p className="text-blue-100">contact@lepetitmarin.fr</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-[#0c2e60]/60 p-3 rounded-full mr-4">
                  <MessageSquare className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-medium text-white">Réservations</h4>
                  <p className="text-blue-100">
                    Pour les groupes de plus de 6 personnes, veuillez nous contacter par téléphone.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-[#0c2e60]/40 backdrop-blur-sm p-6 rounded-lg border border-[#0a2550]/50"
          >
            <h3 className="text-xl font-bold mb-6 text-white">Envoyez un Message</h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1 text-blue-100">Nom</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 bg-[#0a2550]/50 border border-[#081c40] rounded-md text-white"
                  placeholder="Votre nom"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1 text-blue-100">Email</label>
                <input
                  type="email"
                  className="w-full px-3 py-2 bg-[#0a2550]/50 border border-[#081c40] rounded-md text-white"
                  placeholder="votre@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1 text-blue-100">Message</label>
                <textarea
                  className="w-full px-3 py-2 bg-[#0a2550]/50 border border-[#081c40] rounded-md text-white h-24"
                  placeholder="Votre message"
                ></textarea>
              </div>

              <Button type="submit" className="w-full bg-[#0c2e60] hover:bg-[#0a2550] text-white border border-white">
                Envoyer Message
              </Button>
            </form>
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
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            className="fill-[#0c2e60]"
            opacity=".5"
          ></path>
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            className="fill-[#0c2e60]"
          ></path>
        </svg>
      </div>
    </section>
  )
}
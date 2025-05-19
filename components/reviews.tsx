"use client"

import React, { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Star, ArrowRight, Quote } from "lucide-react"

// Définition du type pour un avis client
interface Review {
  name: string;
  location: string;
  rating: number;
  comment: string;
  date: string;
}

export function Reviews() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  // Données des avis clients
  const reviews: Review[] = [
  {
    name: "Nour M.",
    location: "Tunis",
    rating: 5,
    comment: "Lieu exceptionnel ! Le cadre est magnifique, le service rapide et les plats sont vraiment délicieux. Une adresse à ne pas manquer.",
    date: "18 mai 2025"
  },
  {
    name: "Mohamed Ali",
    location: "Sousse",
    rating: 5,
    comment: "J’ai adoré ! Une belle découverte. Le poisson était frais et très bien préparé. Personnel accueillant et souriant.",
    date: "10 mai 2025"
  },
  {
    name: "Sarra B.",
    location: "La Marsa",
    rating: 4.5,
    comment: "Très bon restaurant, bien situé. L’ambiance est conviviale et la nourriture délicieuse. Un petit bémol sur l’attente.",
    date: "8 mai 2025"
  },
  {
    name: "Yassine G.",
    location: "Ariana",
    rating: 5,
    comment: "Top top top ! Rien à dire, service impeccable, plats généreux, et le cadre est superbe. On reviendra très vite.",
    date: "4 mai 2025"
  },
  {
    name: "Linda K.",
    location: "Gabès",
    rating: 5,
    comment: "Un vrai coup de cœur. Une équipe au petit soin et une cuisine pleine de saveurs. Merci pour ce moment !",
    date: "1 mai 2025"
  },
  {
    name: "Amine R.",
    location: "Monastir",
    rating: 4.5,
    comment: "Très bon accueil, produits frais et bien cuisinés. L’emplacement est idéal pour une sortie en famille ou entre amis.",
    date: "28 avril 2025"
  }
];

  // Fonction pour générer les étoiles en fonction de la note
  const renderStars = (rating: number) => {
    const stars: React.ReactNode[] = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    // Étoiles pleines
    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={`full-${i}`} className="w-5 h-5 fill-yellow-400 text-yellow-400" />);
    }
    
    // Demi-étoile si nécessaire
    if (hasHalfStar) {
      stars.push(
        <div key="half" className="relative">
          <Star className="w-5 h-5 text-yellow-400" />
          <div className="absolute top-0 left-0 overflow-hidden w-1/2">
            <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
          </div>
        </div>
      );
    }
    
    // Étoiles vides
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<Star key={`empty-${i}`} className="w-5 h-5 text-yellow-400" />);
    }
    
    return (
      <div className="flex">
        {stars}
      </div>
    );
  };

  return (
    <section id="reviews" className="py-20 px-4 bg-gradient-to-b from-[#0c2e60]/50 to-[#081c40]/50 relative">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Ce que disent nos clients</h2>
          <div className="w-20 h-1 bg-[#3a6ea5] mx-auto mb-6"></div>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            Découvrez les expériences de nos clients qui ont partagé leur satisfaction après avoir visité Le Petit Marin.
          </p>
          
          <div className="flex justify-center gap-2 mt-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-white font-bold">4.8/5</span>
            <span className="text-blue-200">basé sur 127 avis</span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="bg-[#0c2e60]/40 backdrop-blur-sm p-6 rounded-lg border border-[#0a2550]/50 relative overflow-hidden group"
            >
              <div className="absolute -top-5 -left-5 opacity-10 text-white">
                <Quote className="w-20 h-20" />
              </div>

              <div className="flex justify-between items-center mb-3">
                <h4 className="font-bold text-lg text-white">{review.name}</h4>
                <span className="text-xs text-blue-200">{review.location}</span>
              </div>

              <div className="flex mb-4">
                {renderStars(review.rating)}
                <span className="ml-2 text-blue-100 text-sm">({review.rating})</span>
              </div>

              <p className="text-blue-100 mb-4 relative z-10">"{review.comment}"</p>
              
              <div className="text-blue-300 text-xs">{review.date}</div>
              
              <div className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-r from-blue-500/0 via-blue-500/50 to-blue-500/80 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </motion.div>
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
"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"

// Define the image type interface
interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  title: string;
  description: string;
}

export function Gallery() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null)

  const images: GalleryImage[] = [
  {
    id: 0,
    src: "/1.jpg",
    alt: "Image de galerie 1",
    title: "Risotto œuf et encre de seiche",
    description: "Un risotto crémeux à l'encre de seiche, surmonté d’un œuf mollet pour une touche gourmande.",
  },
  {
    id: 1,
    src: "/2.jpg",
    alt: "Image de galerie 2",
    title: "Spaghetti fruits de mer",
    description: "Des spaghetti al dente accompagnés de crevettes, moules et calamars dans une sauce légèrement épicée.",
  },
  {
    id: 2,
    src: "/3.jpg",
    alt: "Image de galerie 3",
    title: "Linguine au saumon",
    description: "Linguine enrobées d’une sauce crémeuse au saumon frais et herbes aromatiques.",
  },
  {
    id: 3,
    src: "/4.jpg",
    alt: "Image de galerie 4",
    title: "Plat sauté à l’ail",
    description: "Un mélange de légumes croquants et fruits de mer sautés à l’ail et aux fines herbes.",
  },
  {
    id: 4,
    src: "/5.jpg",
    alt: "Image de galerie 5",
    title: "Risotto fruits de mer",
    description: "Un risotto onctueux garni de moules, crevettes et calamars, relevé de citron et persil frais.",
  },
  {
    id: 5,
    src: "/6.jpg",
    alt: "Image de galerie 6",
    title: "Plat Loup",
    description: "Filet de loup grillé, servi avec des légumes de saison et une sauce citronnée délicate.",
  },
]




  return (
    <section id="gallery" className="py-20 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Galerie</h2>
          <div className="w-20 h-1 bg-[#3a6ea5] mx-auto mb-6"></div>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            Explorez notre collection de plats délicieux et l'ambiance unique de notre restaurant
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
              onClick={() => setSelectedImage(image)}
            >
              <div className="overflow-hidden rounded-lg bg-gradient-to-br from-[#0c2e60] to-[#081c40] p-1 cursor-pointer">
                <div className="relative overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full aspect-[4/3] object-cover transform transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c2e60]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <h3 className="text-white font-bold">{image.title}</h3>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal for selected image */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="bg-[#0c2e60] rounded-lg overflow-hidden max-w-3xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="w-full object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold text-white mb-2">{selectedImage.title}</h3>
              <p className="text-blue-100">{selectedImage.description}</p>
            </div>
          </div>
          <button className="absolute top-4 right-4 text-white text-2xl" onClick={() => setSelectedImage(null)}>
            ×
          </button>
        </div>
      )}
    </section>
  )
}
"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Fish, Coffee, Salad, Utensils, ChefHat, Soup } from "lucide-react"
import { Button } from "@/components/ui/button"

// Define types for menu items
type MenuItem = {
  name: string;
  description: string;
  price: string;
  popular?: boolean;
}

// Define type for menu categories
type MenuCategories = {
  plats: MenuItem[];
  garniture: MenuItem[];
  sauces: MenuItem[];
  pasta: MenuItem[];
  "petit-marin": MenuItem[];
}

// Define type for full menu (includes additional categories)
type FullMenu = MenuCategories & {
  boissons: MenuItem[];
}

// Define category type
type CategoryId = keyof MenuCategories;

export function Menu() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [activeCategory, setActiveCategory] = useState<CategoryId>("plats")
  const [showFullMenu, setShowFullMenu] = useState(false)

  const categories = [
    { id: "plats" as CategoryId, label: "Plats", icon: <Utensils className="w-5 h-5" /> },
    { id: "garniture" as CategoryId, label: "Garniture", icon: <Salad className="w-5 h-5" /> },
    { id: "sauces" as CategoryId, label: "Sauces", icon: <Soup className="w-5 h-5" /> },
    { id: "pasta" as CategoryId, label: "Pasta", icon: <ChefHat className="w-5 h-5" /> },
    { id: "petit-marin" as CategoryId, label: "Plat Petit Marin", icon: <Fish className="w-5 h-5" /> },
  ]

  const menuItems: MenuCategories = {
    plats: [
      {
        name: "Plat Daurade",
        description: "(300g)",
        price: "20 Dt",
      },
      {
        name: "Plat Loup",
        description: "(300g)",
        price: "22 Dt",
      },
      {
        name: "Plat sauté à l'ail",
        description: "oeuf de seiche, crevette, calamar",
        price: "48 Dt",
        popular: true,
      },
    ],
    garniture: [
      {
        name: "Soupe au lentille gratuite",
        description: "Soupe traditionnelle aux lentilles",
        price: "0 Dt",
      },
      {
        name: "Légumes, riz & frites",
        description: "Accompagnement complet",
        price: "12 Dt",
      },
      {
        name: "Légumes",
        description: "Légumes frais de saison",
        price: "5 Dt",
      },
      {
        name: "Frites",
        description: "Pommes de terre frites maison",
        price: "5 Dt",
        popular: true,
      },
      {
        name: "Riz",
        description: "Riz blanc parfumé",
        price: "5 Dt",
      },
      {
        name: "Grillade Par Kilogramme",
        description: "Sélection de viandes grillées au poids",
        price: "10 Dt",
      },
    ],
    sauces: [
      {
        name: "Sauce Truffe",
        description: "Sauce crémeuse à la truffe",
        price: "15 Dt",
        popular: true,
      },
      {
        name: "Sauce Parmesan",
        description: "Sauce onctueuse au parmesan",
        price: "15 Dt",
      },
      {
        name: "Sauce à l'ail",
        description: "Sauce à base d'ail frais",
        price: "15 Dt",
      },
      {
        name: "Sauce citron",
        description: "Sauce légère au citron",
        price: "10 Dt",
      },
      {
        name: "Sauce curry",
        description: "Sauce épicée au curry",
        price: "15 Dt",
      },
      {
        name: "Sauce Chili",
        description: "Sauce piquante au chili",
        price: "15 Dt",
      },
    ],
    pasta: [
      {
        name: "Spaghetti fruits de mer",
        description: "Spaghetti avec assortiment de fruits de mer",
        price: "38 Dt",
        popular: true,
      },
      {
        name: "Linguine aux crevettes",
        description: "Linguine avec crevettes sautées",
        price: "35 Dt",
      },
      {
        name: "Risotto fruits de mer",
        description: "Risotto crémeux aux fruits de mer variés",
        price: "49 Dt",
        popular: true,
      },
      {
        name: "Risotto oeuf et ancre de seiche",
        description: "Risotto avec œuf et encre de seiche",
        price: "58 Dt",
      },
      {
        name: "Risotto oeuf de seiche",
        description: "Risotto spécial aux œufs de seiche",
        price: "52 Dt",
      },
      {
        name: "Fusilli crevette et moule",
        description: "Pâtes fusilli avec crevettes et moules",
        price: "39 Dt",
      },
      {
        name: "Pate fruits de mer sauce truffe",
        description: "Pâtes aux fruits de mer avec sauce à la truffe",
        price: "54 Dt",
        popular: true,
      },
      {
        name: "Feli au Merou",
        description: "Pâtes avec mérou frais",
        price: "50 Dt",
      },
      {
        name: "Spaghetti Alle Vongoli",
        description: "Spaghetti aux palourdes",
        price: "28 Dt",
      },
      {
        name: "Calamarata",
        description: "Pâtes avec calamar",
        price: "50 Dt",
      },
    ],
    "petit-marin": [
      {
        name: "Plat Petit Marin",
        description: "Suivant la disponibilité du jour",
        price: "120 Dt",
        popular: true,
      },
      {
        name: "Plat 2 Pax",
        description: "Plat à partager pour 2 personnes",
        price: "160 Dt",
      },
      {
        name: "Plat 3 Pax",
        description: "Plat à partager pour 3 personnes",
        price: "220 Dt",
      },
      {
        name: "Plat 4 Pax",
        description: "Plat à partager pour 4 personnes",
        price: "380 Dt",
        popular: true,
      },
    ],
  }

  const fullMenu: FullMenu = {
    ...menuItems,
    boissons: [
      {
        name: "Eau Minérale",
        description: "Bouteille d'eau plate",
        price: "3 Dt",
      },
      {
        name: "Soda",
        description: "Coca-Cola, Fanta, Boga",
        price: "3 Dt",
      }
    ]
  }

  // Helper function to find the label for a category
  const getCategoryLabel = (categoryId: string): string => {
    const category = categories.find(cat => cat.id === categoryId);
    if (category) return category.label;
  
    if (categoryId === "boissons") return "Boissons";
    
    return categoryId;
  }

  // Helper function to find the icon for a category
  const getCategoryIcon = (categoryId: string) => {
    const category = categories.find(cat => cat.id === categoryId);
    return category?.icon || null;
  }

  return (
    <section id="menu" className="py-20 px-4 relative bg-gradient-to-b from-[#0c2e60]/50 to-[#081c40]/50">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Notre Menu</h2>
          <div className="w-20 h-1 bg-[#3a6ea5] mx-auto mb-6"></div>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            Découvrez notre sélection de plats de fruits de mer frais préparés avec les meilleurs ingrédients de l'océan
          </p>
        </motion.div>

        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-10">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              className={`mb-2 ${
                activeCategory === category.id
                  ? "bg-[#1e88e5] hover:bg-[#1976d2] text-white border border-[#1e88e5]"
                  : "border-[#64b5f6] text-[#64b5f6]"
              }`}
              onClick={() => setActiveCategory(category.id)}
            >
              <span className="mr-2">{category.icon}</span>
              {category.label}
            </Button>
          ))}
        </div>

        {/* Menu Items */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-2 gap-6"
        >
          {menuItems[activeCategory].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="bg-[#0c2e60]/60 backdrop-blur-sm p-6 rounded-lg border border-[#1e88e5]/30 relative overflow-hidden hover:shadow-lg hover:shadow-[#1e88e5]/10 transition-all duration-300"
            >
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold text-white">{item.name}</h3>
                <span className="text-[#64b5f6] font-bold">{item.price}</span>
              </div>
              <p className="text-blue-100 mb-2">{item.description}</p>

              {item.popular && (
                <div className="absolute top-0 right-0">
                  <div className="bg-[#1e88e5] text-white text-xs px-3 py-1 transform rotate-45 translate-x-2 translate-y-2">
                    Populaire
                  </div>
                </div>
              )}

              {/* Decorative elements */}
              <div className="absolute -bottom-4 -right-4 w-16 h-16 rounded-full bg-[#1e88e5]/10 z-0"></div>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-12">
          <p className="text-blue-100 italic mb-4">
            Tous nos fruits de mer sont sourcés quotidiennement auprès des pêcheurs locaux et de fournisseurs durables.
          </p>
          <Button 
            className="bg-[#1e88e5] hover:bg-[#1976d2] text-white border border-[#1e88e5]"
            onClick={() => setShowFullMenu(true)}
          >
            <Fish className="w-4 h-4 mr-2" />
            Voir Menu Complet
          </Button>
        </div>
      </div>

      {/* Full Menu Modal with styled scrollbar */}
      {showFullMenu && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-[#0c2e60] rounded-xl w-full max-w-4xl relative border border-[#1e88e5]/30 modal-content"
            style={{
              maxHeight: '90vh',
              overflowY: 'auto',
              scrollbarWidth: 'thin',
              scrollbarColor: '#1e88e5 #0c2e60'
            }}
          >
            {/* Custom scrollbar styles */}
            <style jsx global>{`
              /* For Webkit browsers like Chrome/Safari */
              .modal-content::-webkit-scrollbar {
                width: 8px;
              }
              
              .modal-content::-webkit-scrollbar-track {
                background: #0c2e60;
                border-radius: 4px;
              }
              
              .modal-content::-webkit-scrollbar-thumb {
                background-color: #1e88e5;
                border-radius: 4px;
                border: 2px solid #0c2e60;
              }

              /* For Firefox */
              .modal-content {
                scrollbar-width: thin;
                scrollbar-color: #1e88e5 #0c2e60;
              }
            `}</style>
            
            <Button 
              variant="ghost" 
              className="absolute right-4 top-4 text-white hover:bg-[#1e88e5]/20 z-10"
              onClick={() => setShowFullMenu(false)}
            >
              ✕
            </Button>
            
            <div className="p-6 md:p-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-[#1e88e5] mb-2">Menu Complet</h2>
                <div className="w-20 h-1 bg-[#1e88e5] mx-auto mb-4"></div>
              </div>
              
              <div className="space-y-10">
                {Object.entries(fullMenu).map(([categoryId, items]) => (
                  <div key={categoryId} className="border-b border-[#1e88e5]/30 pb-8 last:border-b-0">
                    <h3 className="text-2xl font-bold text-[#1e88e5] mb-4 flex items-center">
                      {getCategoryIcon(categoryId) && (
                        <span className="mr-2">
                          {getCategoryIcon(categoryId)}
                        </span>
                      )}
                      {getCategoryLabel(categoryId)}
                    </h3>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      {items.map((item, idx) => (
                        <div 
                          key={idx} 
                          className="p-4 bg-[#0c2e60]/80 border border-[#1e88e5]/20 rounded-lg relative"
                        >
                          <div className="flex justify-between items-start mb-1">
                            <h4 className="text-lg font-semibold text-white">{item.name}</h4>
                            <span className="text-[#64b5f6] font-bold">{item.price}</span>
                          </div>
                          <p className="text-blue-100 text-sm">{item.description}</p>
                          
                          {item.popular && (
                            <div className="absolute -top-1 -right-1">
                              <div className="bg-[#1e88e5] text-white text-xs px-2 py-0.5 rounded-full">
                                ★ Populaire
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 flex justify-center">
                <Button 
                  className="bg-[#1e88e5] hover:bg-[#1976d2] text-white"
                  onClick={() => setShowFullMenu(false)}
                >
                  Fermer
                </Button>
              </div>
            </div>
            
            {/* Decorative seafood illustrations */}
            <div className="absolute top-2 left-4 opacity-10">
              <svg width="60" height="60" viewBox="0 0 512 512" fill="#64b5f6">
                <path d="M256 32C114.6 32 0 146.6 0 288c0 32 6.1 62.6 17 91c4.5 11.8 10 23.1 16.3 33.9c.4-.9 .9-1.8 1.4-2.7C49.8 378.9 79.7 352 114.9 336c13.9-6.3 29-10.3 44.5-11.9c-13.1 8.1-25 18.1-35.3 29.3c-9.4 10.2-17.4 21.8-23.4 34.3c-6.1 12.4-9.9 25.7-11.9 39.4C146.7 388.9 198.7 363 256 363c57.3 0 109.3 25.9 167.1 64.1c-1.9-13.7-5.8-27-11.9-39.4c-6-12.5-14-24.1-23.4-34.3c-10.4-11.2-22.2-21.2-35.3-29.3c15.5 1.6 30.6 5.6 44.5 11.9c35.2 16 65.1 42.9 80.2 74.2c.5 .9 1 1.8 1.4 2.7c6.3-10.9 11.8-22.1 16.3-33.9c10.9-28.4 17-59 17-91C512 146.6 397.4 32 256 32zM128 192a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm224 0a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/>
              </svg>
            </div>
            <div className="absolute bottom-2 right-4 opacity-10">
              <svg width="60" height="60" viewBox="0 0 512 512" fill="#64b5f6">
                <path d="M150.6 169.1C140.3 175.2 132 183.9 126.7 194.5c-4.8 9.5-7.2 19.3-7.2 28.7c0 19.7 8.3 38.5 22.1 54.6c13.9 16.2 33.6 30 57.3 40.3c23.9 10.4 51.1 16.4 79.1 16.4c39.5 0 77.2-10.8 108.5-27.9L309.8 135.8c-27.9 19.4-57.5 41.3-87.2 64.3c-2.9 2.3-5.8 4.5-8.7 6.8c-20.5-17.8-45.7-37.8-63.2-37.8zm52.7 17.3c10.9 8.5 22 17.6 33.1 27.1c-17.2 16-34.2 32.4-51.1 49.2c-12.1-5.7-22.9-12.4-31.1-19.6C107 201.8 138.8 183.4 167.2 176c12.2-3.2 24.8-5.3 36.1-5.3v15.7zM256 400c-28 0-55.2-6-79.1-16.4c-23.8-10.3-43.4-24.2-57.3-40.3c-13.8-16.1-22.1-34.9-22.1-54.6c0-9.4 2.5-19.2 7.2-28.7c5.3-10.6 13.6-19.3 23.9-25.4c-31.9 7.3-100.6 24.5-100.6 93.9C28 391.3 72.1 449.9 128 477.4V496h64l0-109.2c3.4 .2 6.9 .3 10.4 .3l13.6-.3V496h64V477.4c55.9-27.5 100-86.1 100-148.9c0-69.4-68.7-86.6-100.6-93.9c10.3 6.1 18.6 14.8 23.9 25.4c4.8 9.5 7.2 19.3 7.2 28.7c0 19.7-8.3 38.5-22.1 54.6c-13.9 16.2-33.5 30-57.3 40.3C311.2 394 284 400 256 400zM183.8 167.8c-31.6 7.3-59.3 21.5-78.1 39.4c-5.9 5.6-11 11.4-15.2 17.6c-4.2 6.1-7.5 12.7-9.6 19.5c-1.7 5.5-2.5 11-2.5 16.3c0 32.5 25.6 64 73.2 86.9c21.9 10.5 47.5 17.6 72.6 19.9C246.1 317.8 264.5 264.8 288 215C243.9 194 204.5 175.9 183.8 167.8zM161.4 187.2L162.4 189.5l76.1 33.9c-7.6 31.3-16.8 60.6-28 88C155.2 296.7 114.3 262.9 114.3 228.8c0-14.7 10.4-29.2 28.3-41.6l18.9-15.9-25.5 3c-17 2-34.6 8.4-49.6 17.9C89.9 164.7 116.1 152.5 147 145.3c32.8-7.6 70.1-9.3 108.2-3.1c38 6.1 75.6 19.5 108.8 39.2c16.6 9.8 32 21.1 45.6 33.5c13.5 12.3 25.2 25.9 33.6 40.4c-15-9.5-32.5-15.9-49.5-17.9l-25.5-3 18.9 15.9c17.9 12.4 28.3 26.9 28.3 41.6c0 34.1-40.8 67.9-96.1 82.6c-11.2-27.4-20.4-56.7-28-88l76.1-33.9 1.1-2.4c-20.8-8.1-60.1-26.2-104.3-47.2c23.5 49.8 41.9 102.8 63.7 152.3c25.1-2.3 50.7-9.3 72.6-19.9c47.6-22.9 73.2-54.4 73.2-86.9c0-5.4-.9-10.9-2.5-16.3c-2.1-6.8-5.4-13.4-9.6-19.5c-4.2-6.1-9.3-12-15.2-17.6c-18.9-17.9-46.5-32.1-78.1-39.4C382 143.7 323.8 138.9 264.9 148.7c-29.2 4.9-58.3 13.1-84.5 24.8c-13.2 5.8-25.8 12.5-37.5 20C150.2 188.9 156.3 185.8 161.4 187.2zM96 192c-17.7 0-32 14.3-32 32s14.3 32 32 32s32-14.3 32-32s-14.3-32-32-32z"/>
              </svg>
            </div>
          </motion.div>
        </div>
      )}

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
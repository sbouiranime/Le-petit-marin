"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Fish, Coffee, Salad, Utensils, ChefHat, Soup, Pizza, Beef, Wine, IceCream } from "lucide-react"
import { Button } from "@/components/ui/button"

// Define types for menu items
type MenuItem = {
  name: string;
  description?: string;
  price: string;
  popular?: boolean;
}

// Define type for menu categories
type MenuCategories = {
  [key: string]: MenuItem[];
}

// Define category type
type CategoryId = string;

export function Menu() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [activeCategory, setActiveCategory] = useState<CategoryId>("pates-classiques")

  const categories = [
    { id: "pates-classiques", label: "Pâtes Classiques", icon: <ChefHat className="w-5 h-5" /> },
    { id: "pates-fraiches", label: "Pâtes Fraîches", icon: <Utensils className="w-5 h-5" /> },
    { id: "spaghetti-pasta", label: "Spaghetti & Pasta", icon: <ChefHat className="w-5 h-5" /> },
    { id: "risottos", label: "Risottos", icon: <Soup className="w-5 h-5" /> },
    { id: "paellas", label: "Paellas", icon: <Fish className="w-5 h-5" /> },
    { id: "viandes", label: "Viandes", icon: <Beef className="w-5 h-5" /> },
    { id: "grillades", label: "Grillades", icon: <Beef className="w-5 h-5" /> },
    { id: "volailles", label: "Volailles", icon: <ChefHat className="w-5 h-5" /> },
    { id: "poissons", label: "Poissons & Fruits de Mer", icon: <Fish className="w-5 h-5" /> },
    { id: "pizzas", label: "Pizzas", icon: <Pizza className="w-5 h-5" /> },
    { id: "panuozzo", label: "Panuozzo", icon: <Utensils className="w-5 h-5" /> },
    { id: "sauces", label: "Sauces", icon: <Soup className="w-5 h-5" /> },
    { id: "entrees-froides", label: "Entrées Froides", icon: <Salad className="w-5 h-5" /> },
    { id: "entrees-chaudes", label: "Entrées Chaudes", icon: <Utensils className="w-5 h-5" /> },
    { id: "desserts", label: "Desserts", icon: <IceCream className="w-5 h-5" /> },
    { id: "boissons", label: "Boissons", icon: <Coffee className="w-5 h-5" /> },
  ]

  const menuItems: MenuCategories = {
    "pates-classiques": [
      { name: "Penne Alfredo", price: "45 Dt", popular: true },
      { name: "Rigatoni truffe et champignons", price: "42 Dt", popular: true },
      { name: "Rigatoni crevettes, champignons et moules", price: "44 Dt" },
      { name: "Rigatoni bœuf", price: "45 Dt" },
      { name: "Linguine crevettes et artichauts", price: "35 Dt" },
      { name: "Calamarata", price: "45 Dt" },
    ],
    "pates-fraiches": [
      { name: "Mafaldine crevettes et champignons", price: "44 Dt" },
      { name: "Ravioli 5 fromages", price: "34 Dt" },
      { name: "Ravioli saumon", price: "35 Dt", popular: true },
      { name: "Ravioli à la viande", price: "35 Dt" },
      { name: "Pappardelle truffes", price: "45 Dt", popular: true },
      { name: "Pappardelle à l'encre de seiche", price: "39 Dt" },
      { name: "Pappardelle pesto", price: "45 Dt" },
      { name: "Gnocchi truffes et champignons", price: "40 Dt" },
      { name: "Gnocchi 5 fromages", price: "45 Dt" },
      { name: "Gnocchi pesto", price: "40 Dt" },
    ],
    "spaghetti-pasta": [
      { name: "Spaghetti Pescatore", price: "38 Dt", popular: true },
      { name: "Spaghetti crevettes, champignons et moules", price: "38 Dt" },
      { name: "Spaghetti Puttanesca", price: "30 Dt" },
      { name: "Spaghetti Bianco", price: "38 Dt" },
      { name: "Spaghetti alle vongole", price: "28 Dt" },
      { name: "Spaghetti bolognaise", price: "28 Dt" },
      { name: "Fusilli poulet, champignons et pesto", price: "39 Dt" },
      { name: "Tagliatelles saumon et crevettes, sauce cajun", price: "35 Dt" },
      { name: "Lasagnes à la viande hachée", price: "20 Dt" },
    ],
    "risottos": [
      { name: "Risotto Pescatore", price: "49 Dt", popular: true },
      { name: "Risotto truffes", price: "44 Dt" },
      { name: "Risotto à l'encre de seiche", price: "39 Dt" },
      { name: "Risotto 5 fromages", price: "45 Dt" },
      { name: "Risotto betterave", price: "40 Dt" },
      { name: "Risotto cavolo rosso", price: "49 Dt" },
    ],
    "paellas": [
      { name: "Paella Pescatore", price: "49 Dt", popular: true },
      { name: "Paella L'Aragosta", price: "98 Dt", popular: true },
      { name: "Paella à l'encre de seiche", price: "45 Dt" },
    ],
    "viandes": [
      { name: "Filet Rossini", price: "50 Dt", popular: true },
      { name: "Filet Roquefort", price: "45 Dt" },
      { name: "Filet 3 poivres", price: "40 Dt" },
      { name: "Filet miel et moutarde", price: "45 Dt" },
    ],
    "grillades": [
      { name: "Côte à l'os Tomahawk", price: "59 Dt", popular: true },
      { name: "Côte à l'os grillée", price: "45 Dt" },
      { name: "T-bone steak", price: "60 Dt", popular: true },
      { name: "Osso Buco", price: "45 Dt" },
      { name: "Côte de veau", price: "45 Dt" },
      { name: "Entrecôte", price: "48 Dt" },
    ],
    "volailles": [
      { name: "Blanc de poulet Caprese", price: "35 Dt" },
      { name: "Escalope gratinée à l'italienne", price: "39 Dt" },
      { name: "Cuisse de poulet Pescatore", price: "40 Dt" },
    ],
    "poissons": [
      { name: "Fritto misto", price: "45 Dt" },
      { name: "Daurade grillée", price: "25 Dt" },
      { name: "Loup grillé", price: "28 Dt" },
      { name: "Saumon et crevettes, sauce cajun", price: "45 Dt", popular: true },
      { name: "Plateau Mère de Monte", description: "Pour 2 personnes", price: "120 Dt", popular: true },
      { name: "Autres plats disponibles selon la pêche du jour", price: "Variable" },
    ],
    "pizzas": [
      { name: "Pizza Pescatore", price: "25 Dt", popular: true },
      { name: "Pizza Burrata", price: "23 Dt" },
      { name: "Pizza 5 fromages", price: "25 Dt" },
      { name: "Pizza Al Tonno", price: "20 Dt" },
      { name: "Pizza mexicaine", price: "25 Dt" },
      { name: "Pizza Margherita", price: "15 Dt" },
      { name: "Pizza Pepperoni", price: "20 Dt" },
    ],
    "panuozzo": [
      { name: "Panuozzo kebab", price: "15 Dt" },
      { name: "Panuozzo poulet", price: "15 Dt" },
      { name: "Panuozzo crevettes panées", price: "15 Dt" },
    ],
    "sauces": [
      { name: "Roquefort", price: "10 Dt" },
      { name: "3 poivres", price: "10 Dt" },
      { name: "Parmigiano", price: "10 Dt" },
      { name: "Champignons", price: "10 Dt" },
      { name: "5 fromages", price: "10 Dt" },
      { name: "Citron", price: "10 Dt" },
      { name: "Orange", price: "10 Dt" },
      { name: "Miel et moutarde", price: "10 Dt" },
      { name: "Curry", price: "10 Dt" },
    ],
    "entrees-froides": [
      { name: "Salade César", price: "20 Dt" },
      { name: "Salade Pescatore", price: "25 Dt", popular: true },
      { name: "Salade betterave et Burrata", price: "23 Dt" },
      { name: "Salade fichi Burrata", price: "25 Dt" },
      { name: "Salade Caprese", price: "20 Dt" },
    ],
    "entrees-chaudes": [
      { name: "Crevettes, sauce cajun", price: "35 Dt", popular: true },
      { name: "Calamars grillés, sauce vierge", price: "39 Dt" },
      { name: "Calamars, sauce cajun", price: "39 Dt" },
    ],
    "desserts": [
      { name: "Crème brûlée", price: "15 Dt", popular: true },
      { name: "Fondant au chocolat", price: "14 Dt" },
    ],
    "boissons": [
      { name: "Eau minérale 1L", price: "3 Dt" },
      { name: "Boisson gazeuse", price: "4 Dt" },
      { name: "Citronnade maison", price: "8 Dt", popular: true },
    ]
  }

  const handleViewFullMenu = () => {
    window.location.href = "/menu";
  }

  return (
    <section id="menu" className="py-20 px-4 relative bg-gradient-to-b from-[#0c2e60]/50 to-[#081c40]/50">
      <div className="container mx-auto max-w-6xl">
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
            Découvrez notre sélection de plats italiens authentiques et de fruits de mer frais
          </p>
        </motion.div>

        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              className={`mb-2 text-sm ${
                activeCategory === category.id
                  ? "bg-[#1e88e5] hover:bg-[#1976d2] text-white border border-[#1e88e5]"
                  : "border-[#64b5f6] text-[#64b5f6] hover:bg-[#1e88e5]/10"
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
          {menuItems[activeCategory]?.map((item, index) => (
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
              {item.description && (
                <p className="text-blue-100 mb-2">{item.description}</p>
              )}

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
            Tous nos plats sont préparés avec des ingrédients frais et de qualité supérieure
          </p>
          <Button 
            className="bg-[#1e88e5] hover:bg-[#1976d2] text-white border border-[#1e88e5]"
            onClick={handleViewFullMenu}
          >
            <Fish className="w-4 h-4 mr-2" />
            Voir Menu Complet
          </Button>
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
"use client"

import { motion } from "framer-motion"
import { useEffect } from "react"
import {  Menu, X, ChevronRight } from "lucide-react"
import Image from "next/image"
import React, { useState } from "react"
import { ArrowLeft, Home, Clock, Star, Crown } from "lucide-react"

// Define types for menu items
type MenuItem = {
  name: string;
  description?: string;
  ingredients?: string;
  price: string;
  popular?: boolean;
}

// Define type for menu categories
type MenuCategories = {
  "pates-classiques": MenuItem[];
  "pates-fraiches": MenuItem[];
  "spaghetti-pasta": MenuItem[];
  "risottos": MenuItem[];
  "paellas": MenuItem[];
  "viandes": MenuItem[];
  "grillades": MenuItem[];
  "volailles": MenuItem[];
  "poissons": MenuItem[];
  "pizzas": MenuItem[];
  "panuozzo": MenuItem[];
  "sauces": MenuItem[];
  "entrees-froides": MenuItem[];
  "entrees-chaudes": MenuItem[];
  "desserts": MenuItem[];
  "boissons": MenuItem[];
}

// Define category type
type CategoryId = keyof MenuCategories;

export default function MinimalistMenu() {
  const [activeCategory, setActiveCategory] = useState<CategoryId | null>(null)
  const [showScrollTop, setShowScrollTop] = useState(false)

  // Handle scroll to show/hide scroll to top button
  const handleScroll = () => {
    if (window.scrollY > 300) {
      setShowScrollTop(true)
    } else {
      setShowScrollTop(false)
    }
  }

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // Add scroll listener
  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const categories = [
    { 
      id: "pates-classiques" as CategoryId, 
      label: "PÂTES CLASSIQUES",
      emoji: "🍝",
      imageRef: "/pasta-classique.jpeg",
      bgColor: "bg-gradient-to-br from-blue-50 to-blue-100"
    },
    { 
      id: "pates-fraiches" as CategoryId, 
      label: "PÂTES FRAÎCHES",
      emoji: "🥟",
      imageRef: "/pasta-fraiche.jpeg",
      bgColor: "bg-gradient-to-br from-green-50 to-emerald-100"
    },
    { 
      id: "spaghetti-pasta" as CategoryId, 
      label: "SPAGHETTI & PASTA",
      emoji: "🍜",
      imageRef: "spaghetti.png",
      bgColor: "bg-gradient-to-br from-yellow-50 to-amber-100"
    },
    { 
      id: "risottos" as CategoryId, 
      label: "RISOTTOS",
      emoji: "🍚",
      imageRef: "risotto.jpeg",
      bgColor: "bg-gradient-to-br from-purple-50 to-purple-100"
    },
    { 
      id: "paellas" as CategoryId, 
      label: "PAELLAS",
      emoji: "🥘",
      imageRef: "paella.jpg",
      bgColor: "bg-gradient-to-br from-red-50 to-pink-100"
    },
    { 
      id: "viandes" as CategoryId, 
      label: "VIANDES",
      emoji: "🥩",
      imageRef: "viande.jpg",
      bgColor: "bg-gradient-to-br from-red-50 to-red-100"
    },
    { 
      id: "grillades" as CategoryId, 
      label: "GRILLADES",
      emoji: "🔥",
      imageRef: "grillade.jpg",
      bgColor: "bg-gradient-to-br from-orange-50 to-red-100"
    },
    { 
      id: "volailles" as CategoryId, 
      label: "VOLAILLES",
      emoji: "🍗",
      imageRef: "volaille.jpg",
      bgColor: "bg-gradient-to-br from-yellow-50 to-orange-100"
    },
    { 
      id: "poissons" as CategoryId, 
      label: "POISSONS",
      emoji: "🐟",
      imageRef: "poisson.jpg",
      bgColor: "bg-gradient-to-br from-cyan-50 to-blue-100"
    },
    { 
      id: "pizzas" as CategoryId, 
      label: "PIZZAS",
      emoji: "🍕",
      imageRef: "pizza.jpg",
      bgColor: "bg-gradient-to-br from-red-50 to-orange-100"
    },
    { 
      id: "panuozzo" as CategoryId, 
      label: "PANUOZZO",
      emoji: "🥪",
      imageRef: "panuozzo.jpg",
      bgColor: "bg-gradient-to-br from-amber-50 to-yellow-100"
    },
    { 
      id: "sauces" as CategoryId, 
      label: "SAUCES",
      emoji: "🍯",
      imageRef: "sauce.jpg",
      bgColor: "bg-gradient-to-br from-purple-50 to-pink-100"
    },
    { 
      id: "entrees-froides" as CategoryId, 
      label: "ENTRÉES FROIDES",
      emoji: "🥗",
      imageRef: "entree-froide.jpg",
      bgColor: "bg-gradient-to-br from-green-50 to-cyan-100"
    },
    { 
      id: "entrees-chaudes" as CategoryId, 
      label: "ENTRÉES CHAUDES",
      emoji: "🍤",
      imageRef: "entree-chaude.jpg",
      bgColor: "bg-gradient-to-br from-orange-50 to-red-100"
    },
    { 
      id: "desserts" as CategoryId, 
      label: "DESSERTS",
      emoji: "🍰",
      imageRef: "dessert.jpg",
      bgColor: "bg-gradient-to-br from-pink-50 to-purple-100"
    },
    { 
      id: "boissons" as CategoryId, 
      label: "BOISSONS",
      emoji: "🥤",
      imageRef: "boisson.jpeg",
      bgColor: "bg-gradient-to-br from-cyan-50 to-blue-100"
    },
  ]

  const menuItems: MenuCategories = {
    "pates-classiques": [
      { name: "Penne Alfredo", ingredients: "Penne, crème fraîche, parmesan, beurre", price: "45.00", popular: true },
      { name: "Rigatoni truffe et champignons", ingredients: "Rigatoni, truffe, champignons, crème, parmesan", price: "42.00", popular: true },
      { name: "Rigatoni crevettes, champignons et moules", ingredients: "Rigatoni, crevettes, champignons, moules, ail, persil", price: "44.00" },
      { name: "Rigatoni bœuf", ingredients: "Rigatoni, bœuf, tomates, oignons, basilic", price: "45.00" },
      { name: "Linguine crevettes et artichauts", ingredients: "Linguine, crevettes, artichauts, ail, huile d'olive", price: "35.00" },
      { name: "Calamarata", ingredients: "Calamarata, calmars, tomates, ail, persil", price: "45.00" },
    ],
    "pates-fraiches": [
      { name: "Mafaldine crevettes et champignons", ingredients: "Mafaldine fraîches, crevettes, champignons, crème", price: "44.00", popular: true },
      { name: "Ravioli 5 fromages", ingredients: "Ravioli frais, mozzarella, parmesan, gorgonzola, ricotta, mascarpone", price: "34.00" },
      { name: "Ravioli saumon", ingredients: "Ravioli frais, saumon, crème, aneth", price: "35.00" },
      { name: "Ravioli à la viande", ingredients: "Ravioli frais, viande hachée, tomates, basilic", price: "35.00" },
      { name: "Pappardelle truffes", ingredients: "Pappardelle fraîches, truffes, parmesan, beurre", price: "45.00", popular: true },
      { name: "Pappardelle à l'encre de seiche", ingredients: "Pappardelle à l'encre de seiche, fruits de mer, ail", price: "39.00" },
      { name: "Pappardelle pesto", ingredients: "Pappardelle fraîches, pesto de basilic, pignons, parmesan", price: "45.00" },
      { name: "Gnocchi truffes et champignons", ingredients: "Gnocchi maison, truffes, champignons, crème", price: "40.00" },
      { name: "Gnocchi 5 fromages", ingredients: "Gnocchi maison, 5 fromages italiens, crème", price: "45.00" },
      { name: "Gnocchi pesto", ingredients: "Gnocchi maison, pesto de basilic, tomates cerises", price: "40.00" },
    ],
    "spaghetti-pasta": [
      { name: "Spaghetti Pescatore", ingredients: "Spaghetti, fruits de mer, tomates, ail, persil", price: "38.00", popular: true },
      { name: "Spaghetti crevettes, champignons et moules", ingredients: "Spaghetti, crevettes, champignons, moules, vin blanc", price: "38.00" },
      { name: "Spaghetti Puttanesca", ingredients: "Spaghetti, anchois, olives, câpres, tomates, ail", price: "30.00" },
      { name: "Spaghetti Bianco", ingredients: "Spaghetti, fruits de mer, ail, huile d'olive, persil", price: "38.00" },
      { name: "Spaghetti alle vongole", ingredients: "Spaghetti, palourdes, ail, vin blanc, persil", price: "28.00" },
      { name: "Spaghetti bolognaise", ingredients: "Spaghetti, sauce bolognaise, parmesan, basilic", price: "28.00" },
      { name: "Fusilli poulet, champignons et pesto", ingredients: "Fusilli, poulet, champignons, pesto, crème", price: "39.00" },
      { name: "Tagliatelles saumon et crevettes, sauce cajun", ingredients: "Tagliatelles, saumon, crevettes, épices cajun, crème", price: "35.00" },
      { name: "Lasagnes à la viande hachée", ingredients: "Pâtes, viande hachée, béchamel, tomates, mozzarella", price: "20.00" },
    ],
    "risottos": [
      { name: "Risotto Pescatore", ingredients: "Riz arborio, fruits de mer, safran, vin blanc", price: "49.00", popular: true },
      { name: "Risotto truffes", ingredients: "Riz arborio, truffes, parmesan, beurre, vin blanc", price: "44.00", popular: true },
      { name: "Risotto à l'encre de seiche", ingredients: "Riz arborio, encre de seiche, calmars, ail", price: "39.00" },
      { name: "Risotto 5 fromages", ingredients: "Riz arborio, 5 fromages italiens, crème", price: "45.00" },
      { name: "Risotto betterave", ingredients: "Riz arborio, betterave, chèvre, noix", price: "40.00" },
      { name: "Risotto cavolo rosso", ingredients: "Riz arborio, chou rouge, pancetta, parmesan", price: "49.00" },
    ],
    "paellas": [
      { name: "Paella Pescatore", ingredients: "Riz bomba, fruits de mer, safran, poivrons", price: "49.00", popular: true },
      { name: "Paella L'Aragosta", ingredients: "Riz bomba, homard, langoustines, safran, petits pois", price: "98.00", popular: true },
      { name: "Paella à l'encre de seiche", ingredients: "Riz bomba, encre de seiche, calmars, ail", price: "45.00" },
    ],
    "viandes": [
      { name: "Filet Rossini", ingredients: "Filet de bœuf, foie gras, truffe, sauce madère", price: "50.00", popular: true },
      { name: "Filet Roquefort", ingredients: "Filet de bœuf, sauce roquefort, noix", price: "45.00" },
      { name: "Filet 3 poivres", ingredients: "Filet de bœuf, 3 poivres, crème, cognac", price: "40.00" },
      { name: "Filet miel et moutarde", ingredients: "Filet de bœuf, miel, moutarde à l'ancienne", price: "45.00" },
    ],
    "grillades": [
      { name: "Côte à l'os Tomahawk", ingredients: "Côte de bœuf 800g, marinade aux herbes", price: "59.00", popular: true },
      { name: "Côte à l'os grillée", ingredients: "Côte de bœuf, sel, poivre, herbes de Provence", price: "45.00" },
      { name: "T-bone steak", ingredients: "T-bone 500g, beurre à l'ail, thym", price: "60.00", popular: true },
      { name: "Osso Buco", ingredients: "Jarret de veau, tomates, vin blanc, légumes", price: "45.00" },
      { name: "Côte de veau", ingredients: "Côte de veau, beurre, herbes fraîches", price: "45.00" },
      { name: "Entrecôte", ingredients: "Entrecôte 300g, échalotes, beurre maître d'hôtel", price: "48.00" },
    ],
    "volailles": [
      { name: "Blanc de poulet Caprese", ingredients: "Blanc de poulet, mozzarella, tomates, basilic", price: "35.00" },
      { name: "Escalope gratinée à l'italienne", ingredients: "Escalope de poulet, tomates, mozzarella, origan", price: "39.00" },
      { name: "Cuisse de poulet Pescatore", ingredients: "Cuisse de poulet, fruits de mer, tomates, ail", price: "40.00" },
    ],
    "poissons": [
      { name: "Fritto misto", ingredients: "Mélange de poissons et fruits de mer frits", price: "45.00", popular: true },
      { name: "Daurade grillée", ingredients: "Daurade fraîche, citron, herbes de Provence", price: "25.00" },
      { name: "Loup grillé", ingredients: "Loup de mer, huile d'olive, ail, persil", price: "28.00" },
      { name: "Saumon et crevettes, sauce cajun", ingredients: "Saumon, crevettes, épices cajun, crème", price: "45.00" },
      { name: "Plateau Mère de Monte", ingredients: "Assortiment de poissons et fruits de mer", description: "Pour 2 personnes", price: "120.00", popular: true },
      { name: "Autres plats", ingredients: "Poisson du jour selon arrivage", description: "Selon la pêche du jour", price: "Sur demande" },
    ],
    "pizzas": [
      { name: "Pizza Pescatore", ingredients: "Pâte maison, fruits de mer, tomates, mozzarella", price: "25.00", popular: true },
      { name: "Pizza Burrata", ingredients: "Pâte maison, burrata, roquette, tomates cerises", price: "23.00" },
      { name: "Pizza 5 fromages", ingredients: "Pâte maison, 5 fromages italiens", price: "25.00" },
      { name: "Pizza Al Tonno", ingredients: "Pâte maison, thon, olives, câpres, tomates", price: "20.00" },
      { name: "Pizza mexicaine", ingredients: "Pâte maison, chorizo, poivrons, oignons, piment", price: "25.00" },
      { name: "Pizza Margherita", ingredients: "Pâte maison, tomates, mozzarella, basilic", price: "15.00" },
      { name: "Pizza Pepperoni", ingredients: "Pâte maison, pepperoni, mozzarella, tomates", price: "20.00" },
    ],
    "panuozzo": [
      { name: "Panuozzo kebab", ingredients: "Pain panuozzo, kebab, crudités, sauce", price: "15.00" },
      { name: "Panuozzo poulet", ingredients: "Pain panuozzo, poulet grillé, légumes, sauce", price: "15.00" },
      { name: "Panuozzo crevettes panées", ingredients: "Pain panuozzo, crevettes panées, salade, sauce", price: "15.00" },
    ],
    "sauces": [
      { name: "Roquefort", ingredients: "Roquefort, crème, noix", price: "10.00" },
      { name: "3 poivres", ingredients: "3 poivres, crème, cognac", price: "10.00" },
      { name: "Parmigiano", ingredients: "Parmesan, crème, beurre", price: "10.00" },
      { name: "Champignons", ingredients: "Champignons, crème, persil", price: "10.00" },
      { name: "5 fromages", ingredients: "5 fromages italiens, crème", price: "10.00" },
      { name: "Citron", ingredients: "Citron, beurre, herbes", price: "10.00" },
      { name: "Orange", ingredients: "Orange, beurre, thym", price: "10.00" },
      { name: "Miel et moutarde", ingredients: "Miel, moutarde à l'ancienne", price: "10.00" },
      { name: "Curry", ingredients: "Curry, lait de coco, épices", price: "10.00" },
    ],
    "entrees-froides": [
      { name: "Salade César", ingredients: "Salade, poulet, parmesan, croûtons, sauce César", price: "20.00" },
      { name: "Salade Pescatore", ingredients: "Salade, fruits de mer, tomates, olives", price: "25.00", popular: true },
      { name: "Salade betterave et Burrata", ingredients: "Betterave, burrata, roquette, noix", price: "23.00" },
      { name: "Salade fichi Burrata", ingredients: "Figues, burrata, miel, amandes", price: "25.00" },
      { name: "Salade Caprese", ingredients: "Tomates, mozzarella, basilic, huile d'olive", price: "20.00" },
    ],
    "entrees-chaudes": [
      { name: "Crevettes, sauce cajun", ingredients: "Crevettes, épices cajun, crème, coriandre", price: "35.00", popular: true },
      { name: "Calamars grillés, sauce vierge", ingredients: "Calamars, tomates, basilic, huile d'olive", price: "39.00" },
      { name: "Calamars, sauce cajun", ingredients: "Calamars, épices cajun, crème, piment", price: "39.00" },
    ],
    "desserts": [
      { name: "Crème brûlée", ingredients: "Crème, vanille, sucre caramélisé", price: "15.00", popular: true },
      { name: "Fondant au chocolat", ingredients: "Chocolat noir, beurre, œufs, sucre", price: "14.00" },
    ],
    "boissons": [
      { name: "Eau minérale 1L", ingredients: "Eau minérale naturelle", price: "3.00" },
      { name: "Boisson gazeuse", ingredients: "Soda au choix", price: "4.00" },
      { name: "Citronnade maison", ingredients: "Citron frais, sucre, menthe", price: "8.00" },
    ],
  }

  const getCurrentCategory = () => {
    if (!activeCategory) return null
    return categories.find(cat => cat.id === activeCategory) || categories[0]
  }

  const currentCategory = getCurrentCategory()

  const handleCategoryClick = (categoryId: CategoryId) => {
    setActiveCategory(categoryId)
  }

  const handleBackToMenu = () => {
    setActiveCategory(null)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-3 sm:px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 sm:space-x-3">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-[#0c2e60] to-blue-800 rounded-lg flex items-center justify-center shadow-lg">
                <img 
                  src="logoo.jpg" 
                  alt="Le Petit Marin" 
                  className="w-6 h-6 sm:w-8 sm:h-8 object-contain"
                />
              </div>
              <div>
                <h1 className="text-lg sm:text-xl font-bold text-gray-900">LE PETIT MARIN</h1>
                <p className="text-xs sm:text-sm text-gray-600">Cuisine Méditerranéenne</p>
              </div>
            </div>
            <button 
  onClick={() => window.location.href = "/#home"}
  className="flex items-center space-x-1 sm:space-x-2 text-gray-600 hover:text-gray-800 transition-colors"
>
  <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
  <span className="text-sm sm:text-base">Retour</span>
</button>

          </div>
        </div>
      </div>

      {/* Welcome Banner */}
      <div className="bg-gradient-to-r from-[#0c2e60] to-blue-700 text-white py-6 sm:py-8">
        <div className="container mx-auto px-3 sm:px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-2">
              BIENVENUE AU PETIT MARIN
            </h2>
            <p className="text-lg sm:text-xl opacity-90">
              Découvrez notre menu authentique et savoureux
            </p>
          </motion.div>
        </div>
      </div>

      {/* Category Navigation or Menu Items */}
      {!activeCategory ? (
        // Category Grid
        <div className="container mx-auto px-3 sm:px-4 py-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => handleCategoryClick(category.id)}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6 text-left group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center space-x-4 mb-3">
                  <div className="text-3xl">{category.emoji}</div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 text-lg mb-1">
                      {category.label}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {menuItems[category.id].length} plat{menuItems[category.id].length > 1 ? 's' : ''}
                    </p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-[#0c2e60] transition-colors" />
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      ) : (
        // Menu Items for Selected Category
        <div className="container mx-auto px-3 sm:px-4 py-4 sm:py-6">
          {/* Back Button and Category Header */}
          <div className="mb-6">
            <button
              onClick={handleBackToMenu}
              className="flex items-center space-x-2 text-[#0c2e60] hover:text-blue-800 transition-colors mb-4"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="font-medium">Retour au menu</span>
            </button>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-xl sm:rounded-2xl shadow-lg overflow-hidden"
            >
              <div className="relative">
                <div className="relative h-32 sm:h-48 overflow-hidden rounded-t-xl sm:rounded-t-2xl">
  <Image
    src={currentCategory?.imageRef || "/default.jpg"}
    alt={currentCategory?.label || "Image de la catégorie"}
    fill
    className="object-cover"
    priority
  />
  <div className="absolute inset-0 bg-black bg-opacity-30" />
  <div className="absolute inset-0 flex items-center justify-center">
  
  </div>
</div>

                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-3 sm:p-6">
                  <h2 className="text-xl sm:text-3xl font-bold text-white mb-1 sm:mb-2">
                    {currentCategory?.label}
                  </h2>
                  <p className="text-white opacity-90 text-sm sm:text-base">
                    {menuItems[activeCategory].length} plat{menuItems[activeCategory].length > 1 ? 's' : ''} disponible{menuItems[activeCategory].length > 1 ? 's' : ''}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Menu Items */}
          <div className="grid gap-3 sm:gap-4 md:gap-6">
            {menuItems[activeCategory].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="bg-white rounded-lg sm:rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden relative"
              >
                {/* Popular Badge */}
                {item.popular && (
                  <div className="absolute top-0 right-0 z-10">
                    <div className="bg-gradient-to-r from-yellow-400 to-amber-400 text-white text-xs font-bold px-2 sm:px-3 py-1 rounded-bl-lg rounded-tr-lg sm:rounded-tr-xl flex items-center space-x-1">
                      <Crown className="w-3 h-3" />
                      <span>POPULAIRE</span>
                    </div>
                  </div>
                )}

                <div className="p-4 sm:p-6">
                  <div className="flex justify-between items-start">
                    <div className="flex-1 pr-3">
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1 sm:mb-2">
                        {item.name}
                      </h3>
                      {item.description && (
                        <p className="text-gray-600 text-sm mb-2 sm:mb-3 italic">
                          {item.description}
                        </p>
                      )}
                      {item.ingredients && (
                        <p className="text-gray-600 text-sm mb-2 sm:mb-3">
                          <span className="font-medium">Ingrédients:</span> {item.ingredients}
                        </p>
                      )}
                      {item.popular && (
                        <div className="flex items-center space-x-1 text-yellow-500 text-sm">
                          <Star className="w-4 h-4 fill-current" />
                          <span className="font-medium">Choix populaire</span>
                        </div>
                      )}
                    </div>
                    <div className="text-right">
                      <div className="text-xl sm:text-2xl font-bold text-[#0c2e60]">
                        {item.price}
                      </div>
                      <div className="text-sm text-gray-500">DT</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {/* Footer */}
      <div className="mt-8 sm:mt-12 bg-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-8 text-center mx-3 sm:mx-4">
        <div className="flex items-center justify-center space-x-2 sm:space-x-3 mb-3 sm:mb-4">
          <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-[#0c2e60] to-blue-800 rounded-full flex items-center justify-center">
            <img 
              src="logoo.jpg" 
              alt="Le Petit Marin" 
              className="w-4 h-4 sm:w-5 sm:h-5 object-contain"
            />
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900">LE PETIT MARIN</h3>
        </div>
        <p className="text-gray-600 mb-4 sm:mb-6 max-w-2xl mx-auto text-sm sm:text-base">
          Tous nos plats sont préparés avec des ingrédients frais et de qualité premium. 
          Notre équipe vous souhaite un excellent repas et vous remercie de votre visite.
        </p>
        <div className="flex justify-center items-center space-x-2 text-gray-500">
          <Clock className="w-4 h-4" />
          <span className="text-sm">Service continu - Bon appétit !</span>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 bg-[#0c2e60] hover:bg-blue-800 text-white p-3 rounded-full shadow-lg transition-all duration-200 z-50"
        >
          <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 transform rotate-90" />
        </motion.button>
      )}
    </div>
  )
}
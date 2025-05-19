"use client"
import React from "react"
import { useState, useEffect } from "react"
import { Menu, X, Anchor, Info, Layers, ImageIcon, MessageSquare, MapPin } from "lucide-react"
import Image from "next/image"

// Define a type for menu items
type MenuItem = {
  id: string;
  label: string;
  icon: React.ReactNode;
}

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  
  const menuItems: MenuItem[] = [
    { id: "home", label: "Accueil", icon: <Anchor className="w-4 h-4 mr-2" /> },
    { id: "about", label: "À Propos", icon: <Info className="w-4 h-4 mr-2" /> },
    { id: "menu", label: "Menu", icon: <Layers className="w-4 h-4 mr-2" /> },
    { id: "gallery", label: "Galerie", icon: <ImageIcon className="w-4 h-4 mr-2" /> },
    { id: "location", label: "Localisation", icon: <MapPin className="w-4 h-4 mr-2" /> },
    { id: "reviews", label: "Avis", icon: <MessageSquare className="w-4 h-4 mr-2" /> },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Add type to id parameter
  const scrollToSection = (id: string) => {
    setIsOpen(false)
    const element = document.getElementById(id)
    if (element) {
      const offset = 80 // Account for fixed header
      const bodyRect = document.body.getBoundingClientRect().top
      const elementRect = element.getBoundingClientRect().top
      const elementPosition = elementRect - bodyRect
      const offsetPosition = elementPosition - offset
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
  }

  return (
    <nav
      className={`fixed top-0 left-0 w-full px-4 py-3 z-50 transition-all duration-300 ${
        isScrolled ? "bg-[#0c2e60]/80 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Image src="/images/black_logo.png" alt="Le Petit Marin" width={120} height={60} className="h-12 w-auto" />
        </div>
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="flex items-center text-sm font-medium transition-colors text-white hover:text-blue-200"
            >
              {item.icon}
              {item.label}
            </button>
          ))}
        </div>
        {/* Mobile Navigation Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-14 left-0 right-0 bg-[#0c2e60]/95 backdrop-blur-md z-50 border-t border-[#0a2550]">
          <div className="container mx-auto py-4 px-4 flex flex-col space-y-4">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="flex items-center text-sm font-medium transition-colors text-white hover:text-blue-200"
              >
                {item.icon}
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
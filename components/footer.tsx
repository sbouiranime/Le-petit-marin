import { Facebook, Instagram, Phone, Mail, MapPin, Clock } from "lucide-react"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-[#081c40] text-white py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          {/* Logo et description */}
          <div className="flex flex-col items-center md:items-start">
            <div className="mb-4">
              <Image
                src="/images/black_logo.png"
                alt="Le Petit Marin"
                width={120}
                height={100}
                className="h-32 w-auto"
              />
            </div>
            <div className="text-blue-100 max-w-xs text-center md:text-left">
              <p className="italic">Restaurant tunisien proposant une cuisine riche et variée, entre fruits de mer, poissons frais, grillades, pizzas et spécialités maison.</p>
              <p className="mt-2 text-sm">Fondé le 7 juin 2024</p>
            </div>
          </div>

          {/* Contact et heures d'ouverture */}
          <div className="mt-6 md:mt-0">
            <h4 className="font-medium text-lg uppercase tracking-wider mb-4 text-blue-200 border-b border-blue-700 pb-2">Contact</h4>
            <ul className="space-y-3 text-blue-100">
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-blue-300 flex-shrink-0" />
                <span>22 725 177</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-blue-300 flex-shrink-0" />
                <span>Lepetitmarin34@gmail.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-blue-300 flex-shrink-0 mt-1" />
                <span>Cité El Wafa AFH2 Nabeul<br />Immeuble Taj El Bahr 2</span>
              </li>
            </ul>
          </div>

          {/* Heures d'ouverture */}
          <div className="mt-6 md:mt-0">
            <h4 className="font-medium text-lg uppercase tracking-wider mb-4 text-blue-200 border-b border-blue-700 pb-2">Horaires</h4>
            <ul className="space-y-3 text-blue-100">
              <li className="flex items-center gap-3">
                <Clock size={18} className="text-blue-300 flex-shrink-0" />
                <div>
                  <p>Lundi - Jeudi: 9h - 23h</p>
                  <p>Vendredi - Dimanche: 12h - 23h</p>
                </div>
              </li>
            </ul>
            <div className="mt-6">
              <h4 className="font-medium text-lg uppercase tracking-wider mb-4 text-blue-200 border-b border-blue-700 pb-2">Suivez-nous</h4>
              <div className="flex space-x-4">
                <a 
                  href="https://www.facebook.com/profile.php?id=61558165452448" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-blue-300 hover:text-white transition-colors flex items-center gap-2"
                >
                  <Facebook className="w-6 h-6" />
                  <span className="text-sm">Facebook</span>
                </a>
                <a 
                  href="https://www.instagram.com/lepetitmarin_/?hl=en" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-blue-300 hover:text-white transition-colors flex items-center gap-2"
                >
                  <Instagram className="w-6 h-6" />
                  <span className="text-sm">Instagram</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-8 pt-6 text-center text-sm text-blue-200">
          <p>&copy; {new Date().getFullYear()} LE PETIT MARIN. Restaurant - Pizzeria. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}
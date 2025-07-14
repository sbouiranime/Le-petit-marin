import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Menu } from "@/components/menu"
import { Gallery } from "@/components/gallery"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { BubbleBackground } from "@/components/bubble-background"
import { Location } from "@/components/location"
import { Features } from "@/components/features"
import { Reviews } from "@/components/reviews"


export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0c2e60] via-[#0a2550] to-[#081c40] text-white relative overflow-hidden">
      <BubbleBackground />
      <Navigation />
      <Hero />
      <About />
      <Features />
      <Menu />
      <Gallery />
      <Location />
      <Reviews />
      <Footer />
    </main>
  )
}

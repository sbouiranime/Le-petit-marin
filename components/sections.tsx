"use client"

import { Html, Float, Text } from "@react-three/drei"
import { Button } from "@/components/ui/button"

export function Sections({ activeSection, isMobile }) {
  return (
    <group>
      {/* About Section */}
      <group position={[-8, 0, 0]} visible={activeSection === "about"}>
        <Float speed={2} rotationIntensity={0.2} floatIntensity={0.2}>
          <Text
            font="/fonts/Geist_Bold.json"
            position={[0, 3, 0]}
            fontSize={isMobile ? 0.6 : 0.8}
            color="#a5f3fc"
            anchorX="center"
            anchorY="middle"
          >
            ABOUT US
          </Text>

          <Html transform position={[0, 0, 0]} rotation={[0, 0, 0]} distanceFactor={10} zIndexRange={[100, 0]}>
            <div className="w-[300px] md:w-[400px] bg-cyan-900/80 backdrop-blur-md p-6 rounded-lg border border-cyan-700 text-white">
              <h3 className="text-xl font-bold mb-4 text-teal-300">Dive Into Our World</h3>
              <p className="mb-4">
                Marine Depths is a pioneering underwater exploration company dedicated to discovering the mysteries of
                the ocean.
              </p>
              <p className="mb-4">
                Founded in 2020, our team of marine biologists, oceanographers, and tech innovators work together to
                create sustainable solutions for ocean conservation.
              </p>
              <p>
                Our mission is to explore, document, and protect the incredible biodiversity of our planet's oceans for
                future generations.
              </p>
            </div>
          </Html>
        </Float>
      </group>

      {/* Features Section */}
      <group position={[8, 0, 0]} visible={activeSection === "features"}>
        <Float speed={2} rotationIntensity={0.2} floatIntensity={0.2}>
          <Text
            font="/fonts/Geist_Bold.json"
            position={[0, 3, 0]}
            fontSize={isMobile ? 0.6 : 0.8}
            color="#a5f3fc"
            anchorX="center"
            anchorY="middle"
          >
            FEATURES
          </Text>

          <Html transform position={[0, 0, 0]} rotation={[0, 0, 0]} distanceFactor={10} zIndexRange={[100, 0]}>
            <div className="w-[300px] md:w-[400px] grid grid-cols-1 gap-4">
              <FeatureCard
                title="Deep Sea Exploration"
                description="Advanced submersibles capable of reaching the deepest ocean trenches."
                color="from-blue-600 to-blue-800"
              />
              <FeatureCard
                title="Marine Conservation"
                description="Initiatives to protect endangered marine species and habitats."
                color="from-teal-600 to-teal-800"
              />
              <FeatureCard
                title="Scientific Research"
                description="Cutting-edge laboratories for marine biology and oceanography studies."
                color="from-cyan-600 to-cyan-800"
              />
            </div>
          </Html>
        </Float>
      </group>

      {/* Gallery Section */}
      <group position={[0, -8, 0]} visible={activeSection === "gallery"}>
        <Float speed={2} rotationIntensity={0.2} floatIntensity={0.2}>
          <Text
            font="/fonts/Geist_Bold.json"
            position={[0, 3, 0]}
            fontSize={isMobile ? 0.6 : 0.8}
            color="#a5f3fc"
            anchorX="center"
            anchorY="middle"
          >
            GALLERY
          </Text>

          <Html transform position={[0, 0, 0]} rotation={[0, 0, 0]} distanceFactor={10} zIndexRange={[100, 0]}>
            <div className="w-[300px] md:w-[500px] grid grid-cols-2 md:grid-cols-3 gap-2">
              {Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className="aspect-square overflow-hidden rounded-lg bg-gradient-to-br from-cyan-800 to-blue-900 p-1"
                >
                  <div className="w-full h-full bg-cyan-950 rounded flex items-center justify-center">
                    <img
                      src={`/placeholder.svg?height=150&width=150`}
                      alt={`Gallery image ${i + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
          </Html>
        </Float>
      </group>

      {/* Contact Section */}
      <group position={[0, 8, 0]} visible={activeSection === "contact"}>
        <Float speed={2} rotationIntensity={0.2} floatIntensity={0.2}>
          <Text
            font="/fonts/Geist_Bold.json"
            position={[0, 3, 0]}
            fontSize={isMobile ? 0.6 : 0.8}
            color="#a5f3fc"
            anchorX="center"
            anchorY="middle"
          >
            CONTACT US
          </Text>

          <Html transform position={[0, 0, 0]} rotation={[0, 0, 0]} distanceFactor={10} zIndexRange={[100, 0]}>
            <div className="w-[300px] md:w-[400px] bg-cyan-900/80 backdrop-blur-md p-6 rounded-lg border border-cyan-700 text-white">
              <h3 className="text-xl font-bold mb-4 text-teal-300">Get In Touch</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Name</label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 bg-cyan-800/50 border border-cyan-700 rounded-md text-white"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Email</label>
                  <input
                    type="email"
                    className="w-full px-3 py-2 bg-cyan-800/50 border border-cyan-700 rounded-md text-white"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Message</label>
                  <textarea
                    className="w-full px-3 py-2 bg-cyan-800/50 border border-cyan-700 rounded-md text-white h-24"
                    placeholder="Your message"
                  ></textarea>
                </div>
                <Button className="w-full bg-teal-600 hover:bg-teal-700">Send Message</Button>
              </form>
            </div>
          </Html>
        </Float>
      </group>

      {/* Home Section - Welcome content */}
      <group position={[0, 0, 2]} visible={activeSection === "home"}>
        <Float speed={2} rotationIntensity={0.2} floatIntensity={0.2}>
          <Html transform position={[0, -2, 0]} rotation={[0, 0, 0]} distanceFactor={10} zIndexRange={[100, 0]}>
            <div className="w-[300px] md:w-[500px] text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Explore the Ocean Depths</h2>
              <p className="text-cyan-100 mb-6">
                Discover the wonders beneath the waves with our immersive marine experiences and cutting-edge underwater
                technology.
              </p>
              <div className="flex justify-center space-x-4">
                <Button className="bg-teal-600 hover:bg-teal-700">Get Started</Button>
                <Button variant="outline" className="border-teal-500 text-teal-300 hover:bg-teal-950">
                  Learn More
                </Button>
              </div>
            </div>
          </Html>
        </Float>
      </group>
    </group>
  )
}

function FeatureCard({ title, description, color }) {
  return (
    <div className={`bg-gradient-to-br ${color} p-4 rounded-lg shadow-lg`}>
      <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
      <p className="text-white/90 text-sm">{description}</p>
    </div>
  )
}

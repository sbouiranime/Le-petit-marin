"use client"

import { useRef, useState, useEffect } from "react"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import {
  Environment,
  PerspectiveCamera,
  Float,
  Text3D,
  Cloud,
  Html,
  MeshTransmissionMaterial,
  MeshDistortMaterial,
  Sphere,
  OrbitControls,
} from "@react-three/drei"
import { Navigation } from "./navigation"
import { Bubbles } from "./bubbles"
import { Fish } from "./fish"
import { Corals } from "./corals"
import { Sections } from "./sections"

export default function MarineScene() {
  const [activeSection, setActiveSection] = useState("home")
  const [isMobile, setIsMobile] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    // Set loading to false after a short delay
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 500)

    return () => {
      window.removeEventListener("resize", checkMobile)
      clearTimeout(timer)
    }
  }, [])

  if (isLoading) {
    return (
      <div className="w-full h-screen flex items-center justify-center bg-gradient-to-b from-cyan-900 to-blue-950">
        <div className="text-white text-xl">Initializing 3D scene...</div>
      </div>
    )
  }

  return (
    <Canvas shadows dpr={[1, 1.5]} gl={{ antialias: true }}>
      <fog attach="fog" args={["#0c4a6e", 5, 30]} />
      <color attach="background" args={["#0c4a6e"]} />

      <PerspectiveCamera makeDefault position={[0, 0, 10]} fov={isMobile ? 75 : 60} />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        rotateSpeed={0.5}
        maxPolarAngle={Math.PI / 1.8}
        minPolarAngle={Math.PI / 3}
      />

      <ambientLight intensity={0.4} />
      <directionalLight
        position={[5, 8, 3]}
        intensity={1.5}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />

      <Environment preset="sunset" />

      <SceneContent activeSection={activeSection} setActiveSection={setActiveSection} isMobile={isMobile} />

      <Bubbles count={isMobile ? 20 : 50} />
      <Fish count={isMobile ? 3 : 8} />
      <Corals />

      <Html fullscreen zIndexRange={[100, 0]}>
        <div className="fixed top-0 left-0 w-full z-50">
          <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
        </div>
      </Html>
    </Canvas>
  )
}

function SceneContent({ activeSection, setActiveSection, isMobile }) {
  const groupRef = useRef()
  const { camera } = useThree()

  useEffect(() => {
    // Camera positions for different sections
    const positions = {
      home: [0, 0, 10],
      about: [-8, 0, 5],
      features: [8, 0, 5],
      gallery: [0, -8, 5],
      contact: [0, 8, 5],
    }

    // Animate camera to the active section
    const targetPosition = positions[activeSection]
    if (targetPosition) {
      const duration = 2000
      const startPosition = camera.position.clone()
      const startTime = Date.now()

      const animate = () => {
        const now = Date.now()
        const elapsed = now - startTime
        const progress = Math.min(elapsed / duration, 1)

        // Ease in-out function
        const easeProgress = progress < 0.5 ? 2 * progress * progress : -1 + (4 - 2 * progress) * progress

        camera.position.x = startPosition.x + (targetPosition[0] - startPosition.x) * easeProgress
        camera.position.y = startPosition.y + (targetPosition[1] - startPosition.y) * easeProgress
        camera.position.z = startPosition.z + (targetPosition[2] - startPosition.z) * easeProgress

        if (progress < 1) {
          requestAnimationFrame(animate)
        }
      }

      animate()
    }
  }, [activeSection, camera])

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.05
    }
  })

  return (
    <group>
      {/* Title */}
      <group position={[0, 2, 0]}>
        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
          <Text3D
            font="/fonts/Geist_Bold.json"
            size={isMobile ? 0.8 : 1.2}
            height={0.2}
            curveSegments={12}
            bevelEnabled
            bevelThickness={0.02}
            bevelSize={0.02}
            bevelOffset={0}
            bevelSegments={5}
            position={[isMobile ? -3.5 : -5, 0, 0]}
          >
            MARINE DEPTHS
            <MeshDistortMaterial
              color="#06b6d4"
              envMapIntensity={1}
              clearcoat={1}
              clearcoatRoughness={0.1}
              metalness={0.5}
              distort={0.2}
              speed={0.5}
            />
          </Text3D>
        </Float>
      </group>

      {/* Floating sphere in the center */}
      <group ref={groupRef} position={[0, 0, -2]}>
        <Sphere args={[1.5, 64, 64]}>
          <MeshTransmissionMaterial
            backside
            samples={16}
            thickness={0.5}
            chromaticAberration={0.1}
            anisotropy={0.5}
            distortion={0.5}
            distortionScale={0.5}
            temporalDistortion={0.1}
            iridescence={1}
            iridescenceIOR={1}
            iridescenceThicknessRange={[0, 1400]}
            color="#0891b2"
          />
        </Sphere>
      </group>

      {/* Content sections */}
      <Sections activeSection={activeSection} isMobile={isMobile} />

      {/* Decorative clouds as underwater mist */}
      <Cloud position={[-4, -2, -10]} speed={0.2} opacity={0.2} color="#0e7490" />
      <Cloud position={[5, 3, -8]} speed={0.1} opacity={0.15} color="#0e7490" />
      <Cloud position={[0, -5, -5]} speed={0.3} opacity={0.2} color="#0e7490" />
    </group>
  )
}

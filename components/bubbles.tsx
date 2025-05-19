"use client"

import { useRef, useMemo } from "react"
import { useFrame } from "@react-three/fiber"
import { Sphere, MeshTransmissionMaterial } from "@react-three/drei"
import { MathUtils } from "three"

export function Bubbles({ count = 50 }) {
  const bubbles = useMemo(() => {
    return Array.from({ length: count }).map(() => ({
      position: [MathUtils.randFloatSpread(30), MathUtils.randFloatSpread(30), MathUtils.randFloatSpread(30)],
      scale: MathUtils.randFloat(0.1, 0.5),
      speed: MathUtils.randFloat(0.2, 1),
      rotationSpeed: MathUtils.randFloat(0.1, 0.5),
      offset: Math.random() * Math.PI * 2,
    }))
  }, [count])

  return (
    <group>
      {bubbles.map((bubble, i) => (
        <Bubble key={i} {...bubble} />
      ))}
    </group>
  )
}

function Bubble({ position, scale, speed, rotationSpeed, offset }) {
  const ref = useRef()
  const initialY = position[1]

  useFrame((state, delta) => {
    if (ref.current) {
      // Move bubble upward
      ref.current.position.y += speed * delta

      // Add slight horizontal movement
      ref.current.position.x += Math.sin(state.clock.elapsedTime * 0.5 + offset) * 0.02
      ref.current.position.z += Math.cos(state.clock.elapsedTime * 0.5 + offset) * 0.02

      // Rotate bubble
      ref.current.rotation.x += rotationSpeed * delta
      ref.current.rotation.y += rotationSpeed * 0.8 * delta

      // Reset position when bubble goes too high
      if (ref.current.position.y > 15) {
        ref.current.position.y = initialY - 15
      }
    }
  })

  return (
    <Sphere ref={ref} args={[scale, 16, 16]} position={position}>
      <MeshTransmissionMaterial
        backside
        samples={4}
        thickness={0.5}
        chromaticAberration={0.1}
        anisotropy={0.1}
        distortion={0.1}
        distortionScale={0.1}
        temporalDistortion={0.1}
        color="#a5f3fc"
        opacity={0.6}
        transparent
      />
    </Sphere>
  )
}

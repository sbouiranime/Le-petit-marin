"use client"

import { useRef, useMemo } from "react"
import { useFrame } from "@react-three/fiber"
import { MathUtils } from "three"
import { Float } from "@react-three/drei"

export function Fish({ count = 8 }) {
  const fishes = useMemo(() => {
    return Array.from({ length: count }).map(() => ({
      position: [MathUtils.randFloatSpread(40), MathUtils.randFloatSpread(20), MathUtils.randFloatSpread(30) - 10],
      rotation: [0, Math.random() > 0.5 ? 0 : Math.PI, 0],
      scale: MathUtils.randFloat(0.2, 0.8),
      speed: MathUtils.randFloat(0.5, 2),
      wiggleSpeed: MathUtils.randFloat(1, 3),
      color: [MathUtils.randFloat(0, 1), MathUtils.randFloat(0.3, 1), MathUtils.randFloat(0.5, 1)],
      offset: Math.random() * Math.PI * 2,
    }))
  }, [count])

  return (
    <group>
      {fishes.map((fish, i) => (
        <SimpleFish key={i} {...fish} />
      ))}
    </group>
  )
}

function SimpleFish({ position, rotation, scale, speed, wiggleSpeed, color, offset }) {
  const fishRef = useRef()
  const tailRef = useRef()
  const finLeftRef = useRef()
  const finRightRef = useRef()

  const direction = rotation[1] === 0 ? 1 : -1
  const boundaryX = 20

  useFrame((state, delta) => {
    if (fishRef.current) {
      // Move fish forward
      fishRef.current.position.x += direction * speed * delta

      // Add slight vertical movement
      fishRef.current.position.y += Math.sin(state.clock.elapsedTime * 0.5 + offset) * 0.02

      // Wiggle tail
      if (tailRef.current) {
        tailRef.current.rotation.y = Math.sin(state.clock.elapsedTime * wiggleSpeed) * 0.3
      }

      // Move fins
      if (finLeftRef.current && finRightRef.current) {
        finLeftRef.current.rotation.z = Math.sin(state.clock.elapsedTime * wiggleSpeed * 0.7) * 0.2 - 0.2
        finRightRef.current.rotation.z = -Math.sin(state.clock.elapsedTime * wiggleSpeed * 0.7) * 0.2 + 0.2
      }

      // Reset position when fish goes out of bounds
      if (
        (direction > 0 && fishRef.current.position.x > boundaryX) ||
        (direction < 0 && fishRef.current.position.x < -boundaryX)
      ) {
        fishRef.current.position.x = -direction * boundaryX
        fishRef.current.position.z = MathUtils.randFloatSpread(30) - 10
        fishRef.current.position.y = MathUtils.randFloatSpread(20)
      }
    }
  })

  return (
    <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
      <group ref={fishRef} position={position} rotation={rotation} scale={scale}>
        {/* Fish body */}
        <mesh scale={[1, 0.5, 0.3]}>
          <sphereGeometry args={[0.5, 16, 16]} />
          <meshStandardMaterial color={`rgb(${color[0] * 255}, ${color[1] * 255}, ${color[2] * 255})`} />
        </mesh>

        {/* Fish tail */}
        <mesh ref={tailRef} position={[-1, 0, 0]}>
          <coneGeometry args={[0.5, 1, 2, 1, false, Math.PI / 2, Math.PI]} />
          <meshStandardMaterial color={`rgb(${color[0] * 255}, ${color[1] * 255}, ${color[2] * 255})`} />
        </mesh>

        {/* Fish fins */}
        <mesh ref={finLeftRef} position={[0, 0, 0.3]}>
          <coneGeometry args={[0.3, 0.6, 2, 1, false, 0, Math.PI]} />
          <meshStandardMaterial color={`rgb(${color[0] * 255}, ${color[1] * 255}, ${color[2] * 255})`} />
        </mesh>

        <mesh ref={finRightRef} position={[0, 0, -0.3]}>
          <coneGeometry args={[0.3, 0.6, 2, 1, false, 0, Math.PI]} />
          <meshStandardMaterial color={`rgb(${color[0] * 255}, ${color[1] * 255}, ${color[2] * 255})`} />
        </mesh>

        {/* Fish eye */}
        <mesh position={[0.5, 0.2, 0.25]}>
          <sphereGeometry args={[0.1, 16, 16]} />
          <meshStandardMaterial color="black" />
        </mesh>
      </group>
    </Float>
  )
}

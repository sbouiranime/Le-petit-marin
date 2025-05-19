"use client"

import { useRef, useMemo } from "react"
import { useFrame } from "@react-three/fiber"
import { MathUtils, Group } from "three"
import { Float } from "@react-three/drei"

export function Corals() {
  const coralPositions = useMemo(() => {
    return Array.from({ length: 10 }).map(() => ({
      position: [
        MathUtils.randFloatSpread(30),
        -10 + MathUtils.randFloat(0, 3),
        MathUtils.randFloatSpread(30) - 5
      ] as [number, number, number],
      rotation: [
        MathUtils.randFloat(-0.2, 0.2),
        MathUtils.randFloat(0, Math.PI * 2),
        MathUtils.randFloat(-0.2, 0.2)
      ] as [number, number, number],
      scale: MathUtils.randFloat(0.5, 1.5),
      type: Math.floor(MathUtils.randFloat(0, 3)),
      color: [
        MathUtils.randFloat(0.8, 1),
        MathUtils.randFloat(0.2, 0.6),
        MathUtils.randFloat(0.4, 0.8)
      ] as [number, number, number],
    }))
  }, [])

  return (
    <group>
      {coralPositions.map((coral, i) => (
        <Coral key={i} {...coral} />
      ))}
    </group>
  )
}

interface CoralProps {
  position: [number, number, number];
  rotation: [number, number, number];
  scale: number;
  type: number;
  color: [number, number, number];
}

function Coral({ position, rotation, scale, type, color }: CoralProps) {
  const coralRef = useRef<Group>(null)

  useFrame((state) => {
    if (coralRef.current) {
      // Gentle swaying motion
      coralRef.current.rotation.x = rotation[0] + Math.sin(state.clock.elapsedTime * 0.3) * 0.05
      coralRef.current.rotation.z = rotation[2] + Math.cos(state.clock.elapsedTime * 0.2) * 0.05
    }
  })

  return (
    <Float speed={1} rotationIntensity={0.2} floatIntensity={0.2}>
      <group ref={coralRef} position={position} rotation={rotation} scale={scale}>
        {type === 0 && (
          // Branching coral
          <group>
            <mesh position={[0, 1, 0]}>
              <cylinderGeometry args={[0.1, 0.2, 2, 8]} />
              <meshStandardMaterial color={`rgb(${color[0] * 255}, ${color[1] * 255}, ${color[2] * 255})`} />
            </mesh>
            <mesh position={[0.4, 1.5, 0]} rotation={[0, 0, -Math.PI / 4]}>
              <cylinderGeometry args={[0.05, 0.1, 1, 8]} />
              <meshStandardMaterial color={`rgb(${color[0] * 255}, ${color[1] * 255}, ${color[2] * 255})`} />
            </mesh>
            <mesh position={[-0.4, 1.5, 0]} rotation={[0, 0, Math.PI / 4]}>
              <cylinderGeometry args={[0.05, 0.1, 1, 8]} />
              <meshStandardMaterial color={`rgb(${color[0] * 255}, ${color[1] * 255}, ${color[2] * 255})`} />
            </mesh>
            <mesh position={[0, 2, 0.3]} rotation={[Math.PI / 6, 0, 0]}>
              <cylinderGeometry args={[0.05, 0.1, 1, 8]} />
              <meshStandardMaterial color={`rgb(${color[0] * 255}, ${color[1] * 255}, ${color[2] * 255})`} />
            </mesh>
          </group>
        )}

        {type === 1 && (
          // Fan coral
          <group>
            <mesh position={[0, 0.5, 0]}>
              <cylinderGeometry args={[0.1, 0.2, 1, 8]} />
              <meshStandardMaterial color={`rgb(${color[0] * 255}, ${color[1] * 255}, ${color[2] * 255})`} />
            </mesh>
            <mesh position={[0, 1.2, 0]}>
              <torusGeometry args={[0.8, 0.1, 8, 16, Math.PI]} />
              <meshStandardMaterial color={`rgb(${color[0] * 255}, ${color[1] * 255}, ${color[2] * 255})`} />
            </mesh>
            {Array.from({ length: 8 }).map((_, i) => (
              <mesh key={i} position={[0, 1.2, 0]} rotation={[0, 0, (i / 8) * Math.PI]}>
                <boxGeometry args={[0.05, 0.8, 0.02]} />
                <meshStandardMaterial color={`rgb(${color[0] * 255}, ${color[1] * 255}, ${color[2] * 255})`} />
              </mesh>
            ))}
          </group>
        )}

        {type === 2 && (
          // Brain coral
          <group>
            <mesh>
              <sphereGeometry args={[0.8, 16, 16]} />
              <meshStandardMaterial color={`rgb(${color[0] * 255}, ${color[1] * 255}, ${color[2] * 255})`} />
            </mesh>
            {Array.from({ length: 12 }).map((_, i) => (
              <mesh
                key={i}
                position={[
                  0.8 * Math.sin((i / 12) * Math.PI * 2) * Math.cos((i / 6) * Math.PI),
                  0.8 * Math.sin((i / 12) * Math.PI * 2) * Math.sin((i / 6) * Math.PI),
                  0.8 * Math.cos((i / 12) * Math.PI * 2),
                ]}
              >
                <torusGeometry args={[0.2, 0.05, 8, 16]} />
                <meshStandardMaterial
                  color={`rgb(${color[0] * 255 * 0.8}, ${color[1] * 255 * 0.8}, ${color[2] * 255 * 0.8})`}
                />
              </mesh>
            ))}
          </group>
        )}
      </group>
    </Float>
  )
}
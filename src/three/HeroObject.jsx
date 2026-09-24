import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Float, MeshDistortMaterial } from '@react-three/drei'
import * as THREE from 'three'

export default function HeroObject({ position = [2.2, 0.2, 2] }) {
  const ref = useRef()
  useFrame(({ pointer }, dt) => {
    ref.current.rotation.y = THREE.MathUtils.damp(ref.current.rotation.y, pointer.x * 1.2, 3, dt)
    ref.current.rotation.x = THREE.MathUtils.damp(ref.current.rotation.x, -pointer.y * 0.8, 3, dt)
  })
  return (
    <Float speed={1.5} floatIntensity={1.2} rotationIntensity={0.4}>
      <mesh ref={ref} position={position} scale={1.5}>
        <icosahedronGeometry args={[1, 8]} />
        <MeshDistortMaterial color="#7c3aed" emissive="#22d3ee" emissiveIntensity={0.35} roughness={0.15} metalness={0.7} distort={0.45} speed={2} />
      </mesh>
    </Float>
  )
}

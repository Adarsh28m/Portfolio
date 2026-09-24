import { Float, Text } from '@react-three/drei'
import { projects } from '../data/data'
import { curve } from './CameraRig'

// Each project floats as a glowing monitor beside the camera path.
export default function ProjectMonitors() {
  return projects.map((p, i) => {
    const c = curve.getPointAt(0.47 + i * 0.06)
    const side = i % 2 ? 2.8 : -2.8
    return (
      <Float key={p.name} speed={1.2} floatIntensity={1} rotationIntensity={0.15}>
        <group position={[c.x + side, c.y + 0.3, c.z]} rotation={[0, -side * 0.12, 0]}>
          <mesh><boxGeometry args={[3.2, 2, 0.12]} /><meshStandardMaterial color="#14112a" metalness={0.8} roughness={0.3} /></mesh>
          <mesh position={[0, 0, 0.07]}><planeGeometry args={[3, 1.8]} /><meshStandardMaterial color="#0a0a0f" emissive={i % 2 ? '#22d3ee' : '#8b5cf6'} emissiveIntensity={0.35} /></mesh>
          <Text position={[0, 0, 0.09]} fontSize={0.24} maxWidth={2.6} textAlign="center" color="#ffffff" anchorX="center" anchorY="middle">{p.name}</Text>
        </group>
      </Float>
    )
  })
}

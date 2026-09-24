import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Billboard, Text } from '@react-three/drei'
import { skills } from '../data/data'
import { curve } from './CameraRig'
import { scroll } from './scroll'

const COLORS = ['#8b5cf6', '#22d3ee', '#a78bfa', '#67e8f9', '#c4b5fd', '#38bdf8']
const center = curve.getPointAt(0.36)

// One orbiting ring per skill group; ring spin is driven by time plus scroll progress.
export default function SkillRings() {
  const refs = useRef([])
  const groups = Object.entries(skills)
  useFrame(({ clock }) => {
    refs.current.forEach((g, i) => { if (g) g.rotation.y = clock.elapsedTime * (0.08 + i * 0.03) * (i % 2 ? -1 : 1) + scroll.progress * 14 * (i % 2 ? -1 : 1) })
  })
  return (
    <group position={[center.x + 3, center.y, center.z - 2]}>
      {groups.map(([name, items], i) => {
        const r = 2 + i * 0.55
        return (
          <group key={name} rotation={[(i - 2.5) * 0.35, 0, i * 0.4]}>
            <group ref={(el) => (refs.current[i] = el)}>
              <mesh rotation={[Math.PI / 2, 0, 0]}><torusGeometry args={[r, 0.008, 8, 128]} /><meshBasicMaterial color={COLORS[i]} transparent opacity={0.5} /></mesh>
              {items.map((s, j) => {
                const a = (j / items.length) * Math.PI * 2
                return (
                  <Billboard key={s} position={[Math.cos(a) * r, 0, Math.sin(a) * r]}>
                    <Text fontSize={0.26} color={COLORS[i]} anchorX="center" anchorY="middle">{s}</Text>
                  </Billboard>
                )
              })}
            </group>
          </group>
        )
      })}
    </group>
  )
}

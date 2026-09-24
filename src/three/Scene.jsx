import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import { Float } from '@react-three/drei'
import CameraRig, { curve } from './CameraRig'
import Particles from './Particles'
import HeroObject from './HeroObject'
import SkillRings from './SkillRings'
import ProjectMonitors from './ProjectMonitors'
import { isMobile } from './scroll'

// Floating shapes beside the path so the camera flies between them.
const shapes = [0.14, 0.72, 0.78, 0.84, 0.9, 0.95].map((t, i) => {
  const p = curve.getPointAt(t)
  return { p: [p.x + (i % 2 ? 2.5 : -2.5), p.y + 0.6, p.z], kind: i % 3 }
})

export default function Scene() {
  const mobile = isMobile()
  return (
    <div className="fixed inset-0" aria-hidden="true">
      <Canvas dpr={[1, Math.min(window.devicePixelRatio, 2)]} camera={{ fov: 60, near: 0.1, far: 120, position: [0, 0, 8] }} gl={{ antialias: !mobile, powerPreference: 'high-performance' }}>
        <color attach="background" args={['#0a0a0f']} />
        <fog attach="fog" args={['#0a0a0f', 8, 40]} />
        <ambientLight intensity={0.4} />
        <pointLight position={[5, 5, 5]} intensity={40} color="#8b5cf6" />
        <pointLight position={[-5, -3, 2]} intensity={30} color="#22d3ee" />
        <Suspense fallback={null}>
          <CameraRig />
          <Particles />
          <HeroObject />
          <SkillRings />
          <ProjectMonitors />
          {shapes.map((s, i) => (
            <Float key={i} speed={1 + i * 0.2} floatIntensity={1.5}>
              <mesh position={s.p}>
                {s.kind === 0 ? <octahedronGeometry args={[0.8]} /> : s.kind === 1 ? <torusGeometry args={[0.7, 0.22, 16, 48]} /> : <dodecahedronGeometry args={[0.7]} />}
                <meshStandardMaterial color="#1a1530" emissive={i % 2 ? '#22d3ee' : '#8b5cf6'} emissiveIntensity={0.5} metalness={0.8} roughness={0.25} wireframe={i % 3 === 2} />
              </mesh>
            </Float>
          ))}
          {/* Contact scene: glowing object the camera settles on */}
          <Float speed={2}><mesh position={[2.4, 0, -49]}><torusKnotGeometry args={[1, 0.3, 128, 16]} /><meshStandardMaterial color="#8b5cf6" emissive="#22d3ee" emissiveIntensity={1.2} /></mesh></Float>
          {!mobile && <EffectComposer><Bloom intensity={0.9} luminanceThreshold={0.25} mipmapBlur /></EffectComposer>}
        </Suspense>
      </Canvas>
    </div>
  )
}

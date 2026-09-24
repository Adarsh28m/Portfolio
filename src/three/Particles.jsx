import { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { isMobile } from './scroll'

// A single Points draw call: the cheap equivalent of instancing for thousands of stars.
export default function Particles() {
  const ref = useRef()
  const count = isMobile() ? 700 : 2600
  const positions = useMemo(() => {
    const a = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      a[i * 3] = (Math.random() - 0.5) * 60
      a[i * 3 + 1] = (Math.random() - 0.5) * 30
      a[i * 3 + 2] = 12 - Math.random() * 70
    }
    return a
  }, [count])
  useFrame((_, dt) => { ref.current.rotation.z += dt * 0.008 })
  return (
    <points ref={ref}>
      <bufferGeometry><bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} /></bufferGeometry>
      <pointsMaterial size={0.05} color="#a5b4fc" sizeAttenuation transparent opacity={0.8} depthWrite={false} />
    </points>
  )
}

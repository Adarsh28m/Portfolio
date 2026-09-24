import { useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { scroll, reducedMotion } from './scroll'

// One waypoint per section: hero, about, skills, projects x2, experience/education, contact.
export const PATH = [
  [0, 0, 8], [0, 0.4, 2], [-3, 1, -6], [3, -0.5, -15], [-2.5, 1, -24], [2, 0, -33], [0, 0, -41], [0, 0, -46],
]
export const curve = new THREE.CatmullRomCurve3(PATH.map((p) => new THREE.Vector3(...p)), false, 'catmullrom', 0.5)

export default function CameraRig() {
  const pos = useMemo(() => new THREE.Vector3(), [])
  const look = useMemo(() => new THREE.Vector3(), [])
  const smooth = useMemo(() => ({ t: 0 }), [])
  const reduce = reducedMotion()
  useFrame(({ camera, pointer }, dt) => {
    smooth.t = reduce ? scroll.progress : THREE.MathUtils.damp(smooth.t, scroll.progress, 4, dt)
    const t = Math.min(smooth.t, 0.999)
    curve.getPointAt(t, pos)
    curve.getPointAt(Math.min(t + 0.03, 1), look)
    camera.position.copy(pos)
    camera.lookAt(look)
    if (!reduce) { camera.rotateY(-pointer.x * 0.06); camera.rotateX(pointer.y * 0.04) } // mouse tilt
  })
  return null
}

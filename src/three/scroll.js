// Shared scroll state read by the camera rig (no React re-renders).
export const scroll = { progress: 0 }
export const isMobile = () => typeof window !== 'undefined' && window.matchMedia('(max-width: 768px)').matches
export const reducedMotion = () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

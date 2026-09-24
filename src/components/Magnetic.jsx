import { useRef } from 'react'
export default function Magnetic({ children, className = '', ...rest }) {
  const ref = useRef()
  const move = (e) => { const r = ref.current.getBoundingClientRect(); ref.current.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * 0.25}px,${(e.clientY - r.top - r.height / 2) * 0.25}px)` }
  const leave = () => { ref.current.style.transform = '' }
  return <a ref={ref} onPointerMove={move} onPointerLeave={leave} className={`inline-block transition-transform duration-200 ${className}`} {...rest}>{children}</a>
}

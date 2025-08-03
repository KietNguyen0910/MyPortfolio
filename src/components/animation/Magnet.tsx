/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import { useState, useEffect, useRef } from 'react'

const lerp = (a: number, b: number, n: number) => a + (b - a) * n

type MagnetProps = {
  children: any
  padding?: number
  disabled?: boolean
  magnetStrength?: number
  activeTransition?: string
  inactiveTransition?: string
  wrapperClassName?: string
  innerClassName?: string
}

const Magnet = ({
  children,
  padding = 100,
  disabled = false,
  magnetStrength = 2,
  activeTransition = 'none',
  inactiveTransition = 'transform 0.5s ease-out',
  wrapperClassName = '',
  innerClassName = '',
}: MagnetProps) => {
  const magnetRef = useRef<HTMLDivElement>(null)
  const target = useRef({ x: 0, y: 0 })
  const current = useRef({ x: 0, y: 0 })
  const [isActive, setIsActive] = useState(false)
  const [style, setStyle] = useState<React.CSSProperties>({
    transform: 'translate3d(0px, 0px, 0)',
  })

  useEffect(() => {
    if (disabled) return

    const handleMouseMove = (e: MouseEvent) => {
      if (!magnetRef.current) return

      const { left, top, width, height } = magnetRef.current.getBoundingClientRect()
      const centerX = left + width / 2
      const centerY = top + height / 2

      const distX = Math.abs(centerX - e.clientX)
      const distY = Math.abs(centerY - e.clientY)

      if (distX < width / 2 + padding && distY < height / 2 + padding) {
        setIsActive(true)
        target.current.x = (e.clientX - centerX) / magnetStrength
        target.current.y = (e.clientY - centerY) / magnetStrength
      } else {
        setIsActive(false)
        target.current.x = 0
        target.current.y = 0
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [disabled, padding, magnetStrength])

  useEffect(() => {
    let animationFrameId: number

    const animate = () => {
      current.current.x = lerp(current.current.x, target.current.x, 0.1)
      current.current.y = lerp(current.current.y, target.current.y, 0.1)

      const x = current.current.x.toFixed(2)
      const y = current.current.y.toFixed(2)

      setStyle({
        transform: `translate3d(${x}px, ${y}px, 0)`,
        transition: isActive ? activeTransition : inactiveTransition,
        willChange: 'transform',
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()
    return () => cancelAnimationFrame(animationFrameId)
  }, [isActive, activeTransition, inactiveTransition])

  return (
    <div
      ref={magnetRef}
      className={wrapperClassName}
      style={{ position: 'relative', display: 'inline-block' }}
    >
      <div className={innerClassName} style={style}>
        {children}
      </div>
    </div>
  )
}

export default Magnet

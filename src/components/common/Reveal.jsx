import React, { useEffect, useRef } from 'react'
import { gsap } from '../../lib/gsap'

export default function Reveal({
  children,
  y = 40,
  x = 0,
  scale = 1,
  duration = 1.1,
  delay = 0,
  stagger = 0,
  className = '',
  ease = 'power3.out',
  start = 'top 85%',
}) {
  const containerRef = useRef(null)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    const ctx = gsap.context(() => {
      gsap.from(el, {
        y,
        x,
        scale: scale !== 1 ? scale : undefined,
        opacity: 0,
        duration,
        delay,
        stagger,
        ease,
        scrollTrigger: {
          trigger: el,
          start,
          toggleActions: 'play none none none',
        },
      })
    }, el)

    return () => ctx.revert()
  }, [y, x, scale, duration, delay, stagger, ease, start])

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  )
}

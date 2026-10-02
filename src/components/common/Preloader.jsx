import React, { useEffect, useRef, useState } from 'react'
import { gsap } from '../../lib/gsap'

export default function Preloader({ onComplete }) {
  const containerRef = useRef(null)
  const logoRef = useRef(null)
  const textRef = useRef(null)
  const progressRef = useRef(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          setLoading(false)
          if (onComplete) onComplete()
        },
      })

      tl.to(progressRef.current, {
        width: '100%',
        duration: 1.2,
        ease: 'power2.inOut',
      })
        .to(logoRef.current, {
          scale: 1.15,
          rotate: 360,
          duration: 0.8,
          ease: 'back.out(1.7)',
        }, '-=0.6')
        .to(textRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.5,
        }, '-=0.4')
        .to(containerRef.current, {
          yPercent: -100,
          duration: 0.8,
          ease: 'power4.inOut',
          delay: 0.2,
        })
    })

    return () => ctx.revert()
  }, [onComplete])

  if (!loading) return null

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-dark text-white select-none"
    >
      <div className="relative flex flex-col items-center gap-6">
        <div ref={logoRef} className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-white shadow-2xl shadow-primary/50">
          <svg className="w-8 h-8 rotate-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3.5c-.5-.5-2.5 0-4 1.5L13.5 8.5 5.3 6.7c-.5-.1-.9.1-1.2.5l-.8 1 5.3 3.8-3 3-2.2-.6c-.3-.1-.7 0-.9.3l-.5.6 2.8 1.9 1.9 2.8.6-.5c.3-.2.4-.6.3-.9l-.6-2.2 3-3 3.8 5.3 1-.8c.4-.3.6-.7.5-1.2z" />
          </svg>
        </div>
        
        <h2 ref={textRef} className="opacity-0 translate-y-4 font-serif text-3xl md:text-4xl tracking-tight text-white font-bold">
          Travacations <span className="font-script text-primary text-4xl">Luxury Tours</span>
        </h2>

        <div className="w-48 h-1 bg-white/20 rounded-full overflow-hidden mt-2">
          <div ref={progressRef} className="w-0 h-full bg-primary rounded-full" />
        </div>
      </div>
    </div>
  )
}

import { useEffect, useState, useRef } from 'react'
import { gsap, ScrollTrigger } from '../lib/gsap'

export function useCounter(endValue, duration = 2.5) {
  const [count, setCount] = useState(0)
  const elementRef = useRef(null)

  useEffect(() => {
    const el = elementRef.current
    if (!el) return

    const targetObj = { val: 0 }

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: el,
        start: 'top 85%',
        once: true,
        onEnter: () => {
          gsap.to(targetObj, {
            val: endValue,
            duration: duration,
            ease: 'power2.out',
            onUpdate: () => {
              setCount(Math.floor(targetObj.val))
            },
          })
        },
      })
    })

    return () => ctx.revert()
  }, [endValue, duration])

  return { count, ref: elementRef }
}

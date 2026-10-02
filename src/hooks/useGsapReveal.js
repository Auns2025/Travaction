import { useEffect, useRef } from 'react'
import { gsap } from '../lib/gsap'

export function useGsapReveal(options = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const {
      y = 40,
      x = 0,
      scale = 1,
      opacity = 0,
      duration = 1,
      delay = 0,
      stagger = 0.1,
      start = 'top 85%',
      ease = 'power3.out',
      childrenSelector = null,
    } = options

    const ctx = gsap.context(() => {
      const targets = childrenSelector ? el.querySelectorAll(childrenSelector) : el
      if (!targets || (targets.length === 0 && childrenSelector)) return

      gsap.from(targets, {
        y,
        x,
        scale: scale !== 1 ? scale : undefined,
        opacity,
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
  }, [JSON.stringify(options)])

  return ref
}

import React, { useState, useRef, useEffect, useLayoutEffect, useCallback } from 'react'
import { ArrowRight, Star, MapPin, ChevronLeft, ChevronRight } from 'lucide-react'
import SectionHeading from '../common/SectionHeading'
import { emiratesList, uaeDestinations } from '../../data/destinations'
import { gsap } from '../../lib/gsap'

const GAP = 24 // must match gap-6
const DURATION = 0.9
const EASE = 'power3.out'

// Same breakpoints/vw values as the original Tailwind classes, in pixels
function getSizes() {
  const w = typeof window === 'undefined' ? 1280 : window.innerWidth
  if (w >= 1024) return { active: Math.round(w * 0.64), inactive: Math.round(w * 0.25) }
  if (w >= 768) return { active: Math.round(w * 0.66), inactive: Math.round(w * 0.28) }
  if (w >= 640) return { active: Math.round(w * 0.7), inactive: Math.round(w * 0.32) }
  return { active: Math.round(w * 0.75), inactive: Math.round(w * 0.4) }
}

export default function Destinations() {
  const [activeEmirate, setActiveEmirate] = useState('Dubai')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [sizes, setSizes] = useState(getSizes)

  const trackRef = useRef(null)
  const tabRefs = useRef([])
  const pillRef = useRef(null)
  const tabsContainerRef = useRef(null)
  const snapRef = useRef(true) // true = jump instantly (mount / tab change / resize)
  const prevSizesRef = useRef(sizes)
  const dragRef = useRef({ startX: 0, moved: false, active: false })
  const rafRef = useRef(null)

  const filteredItems = uaeDestinations.filter(
    (item) => item.emirate.toLowerCase() === activeEmirate.toLowerCase()
  )

  // ===== PILL UPDATE FUNCTION (single source of truth) =====
  const updatePill = useCallback((animate = true) => {
    const activeIdx = emiratesList.indexOf(activeEmirate)
    const activeTab = tabRefs.current[activeIdx]
    const pill = pillRef.current
    if (!activeTab || !pill) return

    const x = activeTab.offsetLeft
    const width = activeTab.offsetWidth

    if (animate) {
      gsap.to(pill, {
        x,
        width,
        duration: 0.4,
        ease: 'power3.out',
        overwrite: 'auto',
      })
    } else {
      gsap.killTweensOf(pill)
      gsap.set(pill, { x, width })
    }
  }, [activeEmirate])

  // Keep pixel sizes in sync with the viewport
  useEffect(() => {
    const onResize = () => {
      const next = getSizes()
      setSizes((prev) =>
        prev.active === next.active && prev.inactive === next.inactive ? prev : next
      )
      // Recalculate pill on resize (instant, no animation)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      rafRef.current = requestAnimationFrame(() => {
        updatePill(false)
      })
    }
    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('resize', onResize)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [updatePill])

  // Entrance animation on tab change
  useEffect(() => {
    if (trackRef.current) {
      gsap.fromTo(
        trackRef.current.children,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.05, ease: 'power3.out' }
      )
    }
  }, [activeEmirate])

  // Animated pill indicator + auto-scroll into view on mobile
  useEffect(() => {
    // Animate pill to active tab
    updatePill(true)

    // Auto-scroll active tab into view on smaller screens
    const activeIdx = emiratesList.indexOf(activeEmirate)
    const activeTab = tabRefs.current[activeIdx]
    if (tabsContainerRef.current && activeTab && window.innerWidth < 1024) {
      const container = tabsContainerRef.current
      const tabLeft = activeTab.offsetLeft
      const tabWidth = activeTab.offsetWidth
      const containerWidth = container.clientWidth
      const targetScroll = tabLeft - containerWidth / 2 + tabWidth / 2

      container.scrollTo({
        left: Math.max(0, targetScroll),
        behavior: 'smooth',
      })
    }
  }, [activeEmirate, updatePill])

  // ===== SETUP: ResizeObserver + Font load + initial mount =====
  useLayoutEffect(() => {
    // Initial position (no animation)
    updatePill(false)

    // Recalculate after fonts load (font change => width change)
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(() => updatePill(false))
    }

    // ResizeObserver on the tabs container (handles any layout shift)
    let ro
    if (tabsContainerRef.current && typeof ResizeObserver !== 'undefined') {
      ro = new ResizeObserver(() => {
        updatePill(false)
      })
      ro.observe(tabsContainerRef.current)
      // Also observe each tab (in case text changes)
      tabRefs.current.forEach((tab) => tab && ro.observe(tab))
    }

    // Recalculate on orientation change (mobile rotate)
    const onOrientation = () => {
      setTimeout(() => updatePill(false), 100)
    }
    window.addEventListener('orientationchange', onOrientation)

    return () => {
      if (ro) ro.disconnect()
      window.removeEventListener('orientationchange', onOrientation)
    }
  }, [updatePill])

  // Single source of truth for slider motion: track position + card widths
  useLayoutEffect(() => {
    const track = trackRef.current
    if (!track) return

    const cards = Array.from(track.children)
    const { active, inactive } = sizes
    const x = -currentIndex * (inactive + GAP)

    const sizesChanged = prevSizesRef.current !== sizes
    prevSizesRef.current = sizes

    if (snapRef.current || sizesChanged) {
      snapRef.current = false
      gsap.killTweensOf([track, ...cards], 'x,width')
      gsap.set(track, { x })
      cards.forEach((card, i) => {
        gsap.set(card, { width: i === currentIndex ? active : inactive })
      })
      return
    }

    gsap.to(track, { x, duration: DURATION, ease: EASE, overwrite: 'auto' })
    cards.forEach((card, i) => {
      gsap.to(card, {
        width: i === currentIndex ? active : inactive,
        duration: DURATION,
        ease: EASE,
        overwrite: 'auto',
      })
    })
  }, [currentIndex, activeEmirate, sizes])

  const handlePrev = () => setCurrentIndex((prev) => Math.max(0, prev - 1))
  const handleNext = () =>
    setCurrentIndex((prev) => Math.min(filteredItems.length - 1, prev + 1))

  const handleTabChange = (emirate) => {
    if (emirate === activeEmirate) return
    snapRef.current = true
    setActiveEmirate(emirate)
    setCurrentIndex(0)
  }

  // Swipe / drag support
  const onPointerDown = (e) => {
    dragRef.current = { startX: e.clientX, moved: false, active: true }
  }
  const onPointerMove = (e) => {
    const d = dragRef.current
    if (d.active && Math.abs(e.clientX - d.startX) > 8) d.moved = true
  }
  const onPointerUp = (e) => {
    const d = dragRef.current
    if (!d.active) return
    d.active = false
    const dx = e.clientX - d.startX
    if (Math.abs(dx) > 50) {
      if (dx < 0) handleNext()
      else handlePrev()
    }
  }
  const onPointerLeave = () => {
    dragRef.current.active = false
  }

  return (
    <section
      className="relative py-16 sm:py-20 md:py-28 bg-gradient-to-br from-[#fff4ee] via-[#fff7eb] to-[#fa9c24]/25 text-slate-900 overflow-hidden"
      id="destinations"
    >
      {/* Background Ambient Glows */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#fa9c24]/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[500px] h-[500px] bg-[#015fc9]/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Header Container */}
      <div className="max-w-7xl mx-auto px-4 xs:px-5 sm:px-6 md:px-12 lg:px-16 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 sm:gap-8 mb-8 sm:mb-10">
          <SectionHeading
            align="left"
            eyebrow="Cinematic Journey"
            titlePrefix="Places to visit in"
            accentText="UAE Emirates"
            description="Embark on a grand visual tour across Dubai, Abu Dhabi, and the 7 UAE emirates with full-width landscape destinations."
          />

          {/* Controls: Counter & Prev/Next Arrows */}
          <div className="flex items-center justify-between lg:justify-end gap-4 sm:gap-6 shrink-0 w-full lg:w-auto">
            <div className="text-xs sm:text-sm font-mono tracking-widest text-[#fa9c24]">
              <span className="text-xl sm:text-2xl font-bold text-slate-900">
                {String(currentIndex + 1).padStart(2, '0')}
              </span>
              <span className="text-gray-400 mx-1">/</span>
              <span className="text-gray-500">
                {String(filteredItems.length).padStart(2, '0')}
              </span>
            </div>

            <div className="flex items-center gap-2.5 sm:gap-3">
              <button
                type="button"
                onClick={handlePrev}
                disabled={currentIndex === 0}
                aria-label="Previous destination"
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-slate-300 bg-white/80 backdrop-blur-md flex items-center justify-center text-slate-800 hover:bg-[#fa9c24] hover:text-white hover:border-[#fa9c24] disabled:opacity-30 disabled:pointer-events-none transition-all duration-300 cursor-pointer shadow-md active:scale-95"
              >
                <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                disabled={currentIndex === filteredItems.length - 1}
                aria-label="Next destination"
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-slate-300 bg-white/80 backdrop-blur-md flex items-center justify-center text-slate-800 hover:bg-[#fa9c24] hover:text-white hover:border-[#fa9c24] disabled:opacity-30 disabled:pointer-events-none transition-all duration-300 cursor-pointer shadow-lg active:scale-95"
              >
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* ===== Emirates Filter Tabs — Fully Responsive ===== */}
        <div className="relative mb-8 sm:mb-10 md:mb-12">
          {/* Wrapper with fade edges on mobile */}
          <div className="relative">
            {/* Left fade gradient (mobile only) */}
            <div className="lg:hidden absolute left-0 top-0 bottom-0 w-6 bg-gradient-to-r from-[#fff7eb] to-transparent z-20 pointer-events-none" />
            {/* Right fade gradient (mobile only) */}
            <div className="lg:hidden absolute right-0 top-0 bottom-0 w-6 bg-gradient-to-l from-[#fff7eb] to-transparent z-20 pointer-events-none" />

            {/* Scroll container */}
            <div
              ref={tabsContainerRef}
              className="relative inline-flex lg:inline-flex items-center gap-1 sm:gap-1.5 p-1 sm:p-1.5 bg-white/90 backdrop-blur-md rounded-full border border-slate-300/60 overflow-x-auto no-scrollbar max-w-full shadow-sm scroll-smooth"
              style={{ WebkitOverflowScrolling: 'touch' }}
            >
              {/* Animated pill background */}
              <div
                ref={pillRef}
                className="absolute top-1 sm:top-1.5 bottom-1 sm:bottom-1.5 bg-[#fa9c24] rounded-full shadow-md shadow-[#fa9c24]/30 z-0 pointer-events-none"
              />

              {emiratesList.map((emirate, idx) => {
                const isActive = activeEmirate === emirate
                return (
                  <button
                    key={emirate}
                    ref={(el) => (tabRefs.current[idx] = el)}
                    onClick={() => handleTabChange(emirate)}
                    className={`relative z-10 px-3.5 xs:px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-[11px] xs:text-xs sm:text-sm font-semibold tracking-wide transition-colors duration-300 whitespace-nowrap cursor-pointer ${
                      isActive
                        ? 'text-white'
                        : 'text-slate-700 lg:hover:text-slate-900'
                    }`}
                  >
                    {emirate}
                  </button>
                )
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Slider: viewport clips, track moves via transform */}
      <div className="w-full pl-4 xs:pl-5 sm:pl-6 md:pl-12 lg:pl-16 relative z-10">
        <div
          className="overflow-hidden pb-8"
          style={{ touchAction: 'pan-y' }}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerLeave}
          onPointerLeave={onPointerLeave}
        >
          <div
            ref={trackRef}
            className="flex items-center gap-4 sm:gap-6 will-change-transform"
          >
            {filteredItems.map((item, index) => {
              const isActiveCard = index === currentIndex

              return (
                <div
                  key={item.id}
                  className="shrink-0 h-[52vh] xs:h-[56vh] sm:h-[62vh] md:h-[68vh]"
                >
                  <div
                    onClick={() => {
                      if (dragRef.current.moved) return
                      setCurrentIndex(index)
                    }}
                    style={{ transition: 'opacity 0.6s ease' }}
                    className={`relative w-full h-full rounded-2xl sm:rounded-3xl md:rounded-[2.2rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.55)] border border-white/20 cursor-pointer select-none group transform-gpu ${
                      isActiveCard
                        ? 'ring-2 ring-[#fa9c24] opacity-100 z-20'
                        : 'opacity-75 hover:opacity-95 z-10'
                    }`}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      draggable={false}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 transform-gpu"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-black/10 pointer-events-none" />

                    <div className="absolute top-4 sm:top-6 left-4 sm:left-6 z-10">
                      <span className="px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-semibold bg-black/40 backdrop-blur-md text-white border border-white/20 flex items-center gap-1.5 shadow-md">
                        <MapPin className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#fa9c24]" />
                        {item.emirate}
                      </span>
                    </div>

                    <div className="absolute top-4 sm:top-6 right-4 sm:right-6 z-10">
                      <span className="px-2.5 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold bg-[#fa9c24] text-white flex items-center gap-1 shadow-md">
                        <Star className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-white text-white" />
                        {item.rating}
                      </span>
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 p-4 xs:p-5 sm:p-6 md:p-12 z-10 text-white flex flex-col justify-end transform-gpu">
                      <div className="flex items-center gap-2 mb-1.5 sm:mb-2">
                        <span className="w-5 sm:w-6 h-[2.5px] bg-[#fa9c24] rounded-full" />
                        <span className="text-[10px] sm:text-xs uppercase font-extrabold tracking-[0.2em] text-[#fa9c24]">
                          {item.category}
                        </span>
                      </div>

                      <h3
                        className={`font-black uppercase tracking-tight leading-[0.95] text-white drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)] font-sans max-w-4xl transform-gpu transition-all duration-500 ${
                          isActiveCard
                            ? 'text-2xl xs:text-3xl sm:text-5xl md:text-6xl lg:text-7xl'
                            : 'text-lg xs:text-xl sm:text-2xl md:text-3xl line-clamp-1'
                        }`}
                      >
                        {item.title}
                      </h3>

                      <div className="mt-3 sm:mt-4 pt-2.5 sm:pt-3 border-t border-white/20 flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
                        <p
                          className={`text-slate-100 font-medium leading-relaxed drop-shadow-sm ${
                            isActiveCard
                              ? 'text-[11px] sm:text-sm line-clamp-2 max-w-xl'
                              : 'text-[10px] sm:text-[11px] line-clamp-1 max-w-xs opacity-80'
                          }`}
                        >
                          {item.tagline}
                        </p>

                        {isActiveCard && (
                          <button
                            type="button"
                            className="inline-flex items-center gap-2 sm:gap-2.5 bg-[#fa9c24] hover:bg-[#e08b1d] text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-full text-[10px] sm:text-xs md:text-sm font-bold uppercase tracking-wider shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 shrink-0 cursor-pointer self-start sm:self-auto"
                          >
                            <span>Discover Experience</span>
                            <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-300 group-hover:translate-x-1" />
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Bottom Progress Bar */}
      <div className="max-w-7xl mx-auto px-4 xs:px-5 sm:px-6 md:px-12 lg:px-16 mt-6 sm:mt-8 flex items-center gap-3 sm:gap-4">
        <div className="flex-1 h-1 sm:h-1.5 bg-slate-300/70 rounded-full overflow-hidden">
          <div
            className="h-full bg-[#fa9c24] transition-all duration-500 ease-out rounded-full shadow-sm"
            style={{
              width: `${((currentIndex + 1) / filteredItems.length) * 100}%`,
            }}
          />
        </div>
        <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-slate-600 whitespace-nowrap">
          SCROLL / DRAG JOURNEY
        </span>
      </div>
    </section>
  )
}
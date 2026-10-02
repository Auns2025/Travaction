import React from 'react'

export default function Marquee({ children, speed = 25, direction = 'left', className = '' }) {
  return (
    <div className={`group relative flex overflow-hidden select-none ${className}`}>
      <div
        className="flex shrink-0 items-center gap-6 sm:gap-8 pr-6 sm:pr-8 py-4 animate-marquee group-hover:[animation-play-state:paused]"
        style={{
          animationDuration: `${speed}s`,
          animationDirection: direction === 'right' ? 'reverse' : 'normal',
        }}
      >
        {children}
      </div>
      <div
        aria-hidden="true"
        className="flex shrink-0 items-center gap-6 sm:gap-8 pr-6 sm:pr-8 py-4 animate-marquee group-hover:[animation-play-state:paused]"
        style={{
          animationDuration: `${speed}s`,
          animationDirection: direction === 'right' ? 'reverse' : 'normal',
        }}
      >
        {children}
      </div>
    </div>
  )
}

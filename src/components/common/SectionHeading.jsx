import React from 'react'

export default function SectionHeading({
  eyebrow,
  titlePrefix = '',
  accentText = '',
  titleSuffix = '',
  description = '',
  align = 'center', // 'center' | 'left'
  dark = false,
  className = '',
}) {
  const alignClass = align === 'left' ? 'text-left items-start' : 'text-center items-center'

  return (
    <div className={`flex flex-col ${alignClass} max-w-3xl ${align === 'center' ? 'mx-auto' : ''} ${className}`}>
      {/* Eyebrow Label with Thin Line */}
      {eyebrow && (
        <div className="flex items-center gap-3 mb-3">
          <span className="w-8 h-[2px] bg-primary rounded-full" />
          <span className="text-xs md:text-sm font-bold tracking-[0.2em] uppercase text-primary">
            {eyebrow}
          </span>
          {align === 'center' && <span className="w-8 h-[2px] bg-primary rounded-full" />}
        </div>
      )}

      {/* Main Heading */}
      <h2
        className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15] ${
          dark ? 'text-white' : 'text-dark'
        }`}
      >
        {titlePrefix && <span>{titlePrefix} </span>}
        {accentText && (
          <span className="font-serif italic font-normal text-primary inline-block px-1">
            {accentText}
          </span>
        )}
        {titleSuffix && <span> {titleSuffix}</span>}
      </h2>

      {/* Description */}
      {description && (
        <p className={`mt-4 text-base sm:text-lg font-normal leading-relaxed ${dark ? 'text-gray-300' : 'text-muted-brown'}`}>
          {description}
        </p>
      )}
    </div>
  )
}

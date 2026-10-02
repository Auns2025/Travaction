import React, { useState } from 'react'
import { Search, ArrowRight, Plane } from 'lucide-react'

export default function Header() {
  const [activeNav, setActiveNav] = useState('Home')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navItems = [
    { name: 'Home', href: '#' },
    { name: 'Destinations', href: '#destinations' },
    { name: 'Packages', href: '#packages' },
    { name: 'About Us', href: '#about' },
    { name: 'Contact', href: '#cta' },
  ]

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev)
  }

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
  }

  return (
    <header className="relative z-50 w-full bg-[#FFF9F3] text-[#0B192C]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 pt-6 pb-3 flex items-center justify-between">
        
        {/* BRAND LOGO */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-full bg-[#FF6B35] flex items-center justify-center text-white shadow-md shadow-[#FF6B35]/25 group-hover:scale-105 transition-transform duration-300">
            <Plane className="w-5 h-5 rotate-[30deg] transform group-hover:rotate-[45deg] transition-transform duration-300 fill-current" />
          </div>
          <span className="font-serif text-2xl font-extrabold tracking-tight text-[#0B192C]">
            Travacations
          </span>
        </a>

        {/* DESKTOP NAVIGATION LINKS */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-10" aria-label="Main Navigation">
          {navItems.map((item) => {
            const isActive = activeNav === item.name
            return (
              <a
                key={item.name}
                href={item.href}
                className={`relative text-sm font-semibold transition-colors duration-200 py-1 ${
                  isActive ? 'text-[#FF6B35]' : 'text-[#0B192C]/80 hover:text-[#FF6B35]'
                }`}
                onClick={() => setActiveNav(item.name)}
              >
                {item.name}
                {isActive && (
                  <span
                    className="absolute -bottom-1 left-0 right-0 h-[2.5px] bg-[#FF6B35] rounded-full"
                    aria-hidden="true"
                  />
                )}
              </a>
            )
          })}
        </nav>

        {/* DESKTOP RIGHT ACTIONS */}
        <div className="hidden md:flex items-center gap-4">
          <button
            type="button"
            className="w-10 h-10 rounded-full border border-[#0B192C]/15 flex items-center justify-center text-[#0B192C]/75 hover:text-[#FF6B35] hover:border-[#FF6B35]/40 hover:bg-white transition-all duration-200 cursor-pointer shadow-sm"
            aria-label="Search"
          >
            <Search className="w-4 h-4" />
          </button>

          <a
            href="#book"
            className="inline-flex items-center gap-2 bg-[#FF6B35] hover:bg-[#E05A2B] text-white text-sm font-semibold px-6 py-2.5 rounded-full shadow-lg shadow-[#FF6B35]/25 hover:shadow-xl hover:shadow-[#FF6B35]/35 transform hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
          >
            <span>Book Now</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* MOBILE HAMBURGER BUTTON */}
        <button
          type="button"
          className="md:hidden text-[#0B192C] p-2 rounded-lg focus:outline-none z-50 cursor-pointer"
          onClick={toggleMobileMenu}
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? (
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 6h16" />
              <path d="M4 12h16" />
              <path d="M4 18h16" />
            </svg>
          )}
        </button>

        {/* MOBILE OVERLAY */}
        <div
          className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300 ${
            mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
          onClick={closeMobileMenu}
          aria-hidden="true"
        />

        {/* MOBILE DRAWER */}
        <div
          className={`fixed top-0 right-0 w-72 h-full bg-[#FFF9F3] shadow-2xl p-8 pt-20 flex flex-col gap-5 z-40 md:hidden transform transition-transform duration-300 ease-in-out ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`text-base font-semibold py-2 border-b border-[#0B192C]/10 ${
                activeNav === item.name ? 'text-[#FF6B35]' : 'text-[#0B192C]'
              }`}
              onClick={() => {
                setActiveNav(item.name)
                closeMobileMenu()
              }}
            >
              {item.name}
            </a>
          ))}
          <div className="mt-4">
            <button
              type="button"
              className="w-full bg-[#FF6B35] hover:bg-[#E05A2B] text-white py-3 rounded-full text-sm font-semibold tracking-wide shadow-md transition-all cursor-pointer"
              onClick={closeMobileMenu}
            >
              Book Now →
            </button>
          </div>
        </div>

      </div>
    </header>
  )
}

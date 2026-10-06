import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [destinationsOpen, setDestinationsOpen] = useState(false)
  const [mobileDestinationsOpen, setMobileDestinationsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  const destinationItems = [
    { name: 'Europe', href: '/destinations/europe' },
    { name: 'Asia', href: '/destinations/asia' },
    { name: 'Middle East', href: '/destinations/middle-east' },
    { name: 'Africa', href: '/destinations/africa' },
    { name: 'Far East', href: '/destinations/far-east' },
    { name: 'USA & Canada', href: '/destinations/usa-canada' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileMenuOpen])

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false)
    setMobileDestinationsOpen(false)
  }, [location.pathname])

  const toggleMobileMenu = () => setMobileMenuOpen((p) => !p)
  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
    setMobileDestinationsOpen(false)
  }

  const isDestinationActive = location.pathname.includes('/destinations')
  const isHome = location.pathname === '/'

  const textColor = 'text-[#1d343e]'
  const hoverColor = 'hover:text-[#fa9c24]'
  const activeColor = 'text-[#fa9c24]'

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-500 ease-in-out ${
          scrolled || !isHome
            ? 'bg-[#FFF9F3]/95 shadow-md border-b border-[#1d343e]/10'
            : 'bg-transparent'
        }`}
      >
        <div className="flex items-center justify-between w-full h-[75px] md:h-[85px] px-4 md:px-12 lg:px-16">
          {/* Logo */}
         <Link
  to="/"
  className={`group flex items-center font-serif text-xl md:text-3xl font-bold tracking-tight transition-colors ${textColor}`}
  aria-label="Travacations Home"
>
  <img
    src="/favicon.webp"
    alt="Travacations Logo"
className="w-19 h-14 md:w-20 md:h-16 lg:w-29 lg:h-20 object-contain transition-transform duration-300 group-hover:scale-110"  />
</Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-7 lg:gap-10">
            {[
              { name: 'Home', href: '/', match: location.pathname === '/' },
              { name: 'About Us', href: '/about', match: location.pathname.includes('about') },
              { name: 'Services', href: '/services', match: location.pathname.includes('service') },
            ].map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`relative text-sm font-medium transition-colors py-1 ${
                  item.match ? activeColor + ' font-bold' : `${textColor} ${hoverColor}`
                }`}
              >
                {item.name}
                {item.match && (
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-6 h-[2.5px] bg-[#fa9c24] rounded-full" />
                )}
              </Link>
            ))}

            {/* Destinations Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setDestinationsOpen(true)}
              onMouseLeave={() => setDestinationsOpen(false)}
            >
              <button
                className={`flex items-center gap-1 text-sm font-medium transition-colors py-1 cursor-pointer ${
                  isDestinationActive ? activeColor + ' font-bold' : `${textColor} ${hoverColor}`
                }`}
              >
                OutBound Destinations
                <svg
                  className={`w-4 h-4 transition-transform ${destinationsOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {destinationsOpen && (
                <div className="absolute top-full left-0 w-52 bg-white shadow-xl rounded-xl py-2 mt-2 border border-[#1d343e]/10 flex flex-col z-50">
                  {destinationItems.map((sub) => (
                    <Link
                      key={sub.name}
                      to={sub.href}
                      className="px-4 py-2.5 text-sm font-medium text-[#1d343e] hover:bg-[#fa9c24]/10 hover:text-[#fa9c24] transition-colors"
                      onClick={() => setDestinationsOpen(false)}
                    >
                      {sub.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {[
              { name: 'Our FAQs', href: '/faqs', match: location.pathname.includes('faq') },
              { name: 'Contact Us', href: '/contact', match: location.pathname.includes('contact') },
            ].map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`relative text-sm font-medium transition-colors py-1 ${
                  item.match ? activeColor + ' font-bold' : `${textColor} ${hoverColor}`
                }`}
              >
                {item.name}
                {item.match && (
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-6 h-[2.5px] bg-[#fa9c24] rounded-full" />
                )}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center">
            <Link
              to="/contact"
              className="bg-[#fa9c24] hover:bg-[#e08b1d] text-white px-6 py-2.5 rounded-full text-sm font-medium shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile Hamburger (only when menu closed) */}
          {!mobileMenuOpen && (
            <button
              type="button"
              className={`md:hidden p-2 rounded-lg cursor-pointer ${textColor}`}
              onClick={toggleMobileMenu}
              aria-label="Open menu"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 6h16" />
                <path d="M4 12h16" />
                <path d="M4 18h16" />
              </svg>
            </button>
          )}
        </div>
      </header>

      {/* ================= MOBILE DRAWER OVERLAY ================= */}
      <div
        className={`fixed inset-0 bg-[#1d343e]/40 backdrop-blur-[2px] z-[60] md:hidden transition-opacity duration-300 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeMobileMenu}
        aria-hidden="true"
      />

      {/* ================= MOBILE DRAWER ================= */}
      <div
        className={`fixed top-0 right-0 w-72 h-full bg-white shadow-2xl z-[70] md:hidden transform transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } overflow-y-auto`}
      >
        {/* Drawer Header with Logo + Close Button */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-[#1d343e]/10 sticky top-0 bg-white z-10">
          <Link
            to="/"
            className="flex items-center gap-2 font-serif text-lg font-bold text-[#1d343e]"
            onClick={closeMobileMenu}
          >
            <img
              src="/favicon.webp"
              alt="Travacations Logo"
              className="w-7 h-7 object-contain"
            />
            <span>Travacations</span>
          </Link>
          <button
            type="button"
            onClick={closeMobileMenu}
            className="p-2 rounded-lg text-[#1d343e] hover:bg-[#fa9c24]/10 hover:text-[#fa9c24] transition-colors"
            aria-label="Close menu"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </button>
        </div>

        {/* Drawer Body */}
        <div className="flex flex-col gap-1 px-6 py-4">
          {[
            { name: 'Home', href: '/', match: location.pathname === '/' },
            { name: 'About Us', href: '/about', match: location.pathname.includes('about') },
            { name: 'Services', href: '/services', match: location.pathname.includes('service') },
          ].map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`text-base font-medium py-3 border-b border-[#1d343e]/10 transition-colors ${
                item.match
                  ? 'text-[#fa9c24] font-semibold'
                  : 'text-[#1d343e] hover:text-[#fa9c24]'
              }`}
              onClick={closeMobileMenu}
            >
              {item.name}
            </Link>
          ))}

          {/* Destinations Accordion */}
          <div className="border-b border-[#1d343e]/10 py-3">
            <button
              onClick={() => setMobileDestinationsOpen((p) => !p)}
              className="flex items-center justify-between w-full text-base font-medium text-[#1d343e]"
            >
              <span className={isDestinationActive ? 'text-[#fa9c24] font-semibold' : ''}>
                OutBound Destinations
              </span>
              <svg
                className={`w-4 h-4 transition-transform ${mobileDestinationsOpen ? 'rotate-180' : ''}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {mobileDestinationsOpen && (
              <div className="flex flex-col pl-4 pt-3 pb-1 space-y-1 mt-2 bg-[#1d343e]/5 rounded-lg">
                {destinationItems.map((sub) => (
                  <Link
                    key={sub.name}
                    to={sub.href}
                    className="text-sm font-medium text-[#1d343e]/80 hover:text-[#fa9c24] py-2 transition-colors"
                    onClick={closeMobileMenu}
                  >
                    {sub.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {[
            { name: 'Our FAQs', href: '/faqs', match: location.pathname.includes('faq') },
            { name: 'Contact Us', href: '/contact', match: location.pathname.includes('contact') },
          ].map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`text-base font-medium py-3 border-b border-[#1d343e]/10 transition-colors ${
                item.match
                  ? 'text-[#fa9c24] font-semibold'
                  : 'text-[#1d343e] hover:text-[#fa9c24]'
              }`}
              onClick={closeMobileMenu}
            >
              {item.name}
            </Link>
          ))}

          <div className="mt-6">
            <Link
              to="/contact"
              className="block text-center w-full bg-[#fa9c24] hover:bg-[#e08b1d] text-white py-3 rounded-full text-sm font-medium shadow-md transition-colors"
              onClick={closeMobileMenu}
            >
              Book Now
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
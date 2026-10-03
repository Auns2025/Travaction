import React, { useEffect, useRef } from 'react'
import {
  MapPin,
  Phone,
  Mail,
  Send,
} from 'lucide-react'
import { gsap } from '../../lib/gsap'

export default function Footer() {
  const footerRef = useRef(null)

  useEffect(() => {
    const el = footerRef.current
    if (!el) return

    const ctx = gsap.context(() => {
      gsap.from('.footer-col', {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
        },
      })
    }, el)

    return () => ctx.revert()
  }, [])

  return (
    <footer ref={footerRef} className="relative bg-dark text-white pt-20 pb-10 overflow-hidden border-t border-white/10">
      {/* Top subtle glow background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-primary/10 blur-[100px] pointer-events-none" />

      {/* Main container – centered on large screens */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 md:gap-12 pb-16 border-b border-white/10">
          
          {/* Column 1: Brand Info – takes full width on small, 2 cols on large */}
          <div className="footer-col sm:col-span-2 lg:col-span-2 space-y-6">
            <a
              href="#"
              className="inline-flex items-center gap-2.5 font-serif text-3xl font-bold tracking-tight text-white group"
            >
              <span className="flex items-center justify-center text-primary">
                <svg
                  className="w-7 h-7 rotate-[20deg] transition-transform duration-300 group-hover:rotate-[40deg]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3.5c-.5-.5-2.5 0-4 1.5L13.5 8.5 5.3 6.7c-.5-.1-.9.1-1.2.5l-.8 1 5.3 3.8-3 3-2.2-.6c-.3-.1-.7 0-.9.3l-.5.6 2.8 1.9 1.9 2.8.6-.5c.3-.2.4-.6.3-.9l-.6-2.2 3-3 3.8 5.3 1-.8c.4-.3.6-.7.5-1.2z" />
                </svg>
              </span>
              <span>Travacations</span>
            </a>
            
            <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-md mx-auto sm:mx-0">
              Premium UAE-based travel & tour company crafting unforgettable bespoke journeys, luxury desert adventures, and seamless global travel experiences.
            </p>

            {/* Newsletter Subscription */}
            <div className="pt-2">
              <h4 className="text-xs uppercase tracking-widest font-semibold text-primary mb-3 text-center sm:text-left">
                Subscribe to Exclusive Offers
              </h4>
              <form onSubmit={(e) => e.preventDefault()} className="flex items-center gap-2 max-w-md mx-auto sm:mx-0">
                <div className="relative flex-1">
                  <input
                    type="email"
                    placeholder="Enter your email..."
                    className="w-full bg-white/5 border border-white/15 rounded-full px-5 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="bg-primary hover:bg-primary-dark text-white p-3.5 rounded-full transition-transform duration-300 hover:scale-105 active:scale-95 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>

          {/* Column 2: Useful Links */}
          <div className="footer-col space-y-4 text-center sm:text-left">
            <h3 className="text-lg font-bold text-white tracking-wide">Useful Links</h3>
            <ul className="space-y-2.5 text-sm text-gray-400">
              {['Home', 'About Us', 'Services', 'Our FAQs', 'Contact Us'].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="hover:text-primary transition-colors duration-200 inline-block py-1 hover:translate-x-1 transform transition-transform"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Outbound Destinations */}
          <div className="footer-col space-y-4 text-center sm:text-left">
            <h3 className="text-lg font-bold text-white tracking-wide">Outbound Tours</h3>
            <ul className="space-y-2.5 text-sm text-gray-400">
              {['Europe Escapes', 'Asia Wonders', 'Middle East Jewels', 'Africa Safaris', 'Far East Adventures', 'USA & Canada'].map((dest) => (
                <li key={dest}>
                  <a
                    href="#"
                    className="hover:text-primary transition-colors duration-200 inline-block py-1 hover:translate-x-1 transform transition-transform"
                  >
                    {dest}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info & Socials */}
          <div className="footer-col space-y-5 text-center sm:text-left">
            <h3 className="text-lg font-bold text-white tracking-wide">Get In Touch</h3>
            <div className="space-y-3 text-sm text-gray-400">
              <div className="flex items-start gap-3 justify-center sm:justify-start">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>Suite 402, Business Bay Tower, Downtown Dubai, UAE</span>
              </div>
              <div className="flex items-center gap-3 justify-center sm:justify-start">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span>+971 58 586 0078</span>
              </div>
              <div className="flex items-center gap-3 justify-center sm:justify-start">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <span>Holidays@travacations.ae</span>
              </div>
            </div>

            {/* Social Icons with hover pop */}
            <div className="pt-2 flex flex-wrap items-center gap-3 justify-center sm:justify-start">
              {/* Instagram */}
              <a
                href="https://www.instagram.com/travacationsae?stkn=MTc3YnYzMWc2Nzdnbg%3D%3D"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:bg-primary hover:border-primary transition-all duration-300 transform hover:-translate-y-1 hover:scale-110 shadow-md"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              {/* Facebook */}
              <a
                href="https://www.facebook.com/TravacationsAE?rdid=uDdOpQJnqcSTeh9U&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1GKc3k35Xy%2F"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:bg-primary hover:border-primary transition-all duration-300 transform hover:-translate-y-1 hover:scale-110 shadow-md"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>

              {/* Twitter / X */}
              <a
  href="https://whatsapp.com/channel/0029VbDCrRh4tRru4lqeIn16 "
  target="_blank"
  rel="noopener noreferrer"
  aria-label="WhatsApp"
  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:bg-primary hover:border-primary transition-all duration-300 transform hover:-translate-y-1 hover:scale-110 shadow-md"
>
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.198-.198.347-.764.966-.937 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
  </svg>
</a>

            </div>
          </div>

        </div>

        {/* Bottom Bar – centered */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-center gap-4 text-xs text-gray-500 text-center">
          <p>© 2026 Travacations UAE. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}
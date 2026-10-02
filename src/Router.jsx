import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import ContactUs from './pages/ContactUs'
import FaqsPage from './pages/FaqsPage'
import ServicesPage from './pages/ServicesPage'
import EuropePage from './pages/EuropePage'
import AsiaPage from './pages/AsiaPage'
import MiddleEastPage from './pages/MiddleEastPage'
import AfricaPage from './pages/AfricaPage'
import FarEastPage from './pages/FarEastPage'
import UsaCanadaPage from './pages/UsaCanadaPage'

// Scroll to top helper on route change
function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
        return
      }
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])

  return null
}

export default function Router() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/faqs" element={<FaqsPage />} />
        <Route path="/faq" element={<FaqsPage />} />
        <Route path="/our-faqs" element={<FaqsPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/service" element={<ServicesPage />} />
        <Route path="/our-services" element={<ServicesPage />} />
        <Route path="/europe" element={<EuropePage />} />
        <Route path="/destinations/europe" element={<EuropePage />} />
        <Route path="/europe-tours" element={<EuropePage />} />
        <Route path="/asia" element={<AsiaPage />} />
        <Route path="/destinations/asia" element={<AsiaPage />} />
        <Route path="/asia-tours" element={<AsiaPage />} />
        <Route path="/middle-east" element={<MiddleEastPage />} />
        <Route path="/destinations/middle-east" element={<MiddleEastPage />} />
        <Route path="/middle-east-tours" element={<MiddleEastPage />} />
        <Route path="/uae" element={<MiddleEastPage />} />
        <Route path="/africa" element={<AfricaPage />} />
        <Route path="/destinations/africa" element={<AfricaPage />} />
        <Route path="/africa-tours" element={<AfricaPage />} />
        <Route path="/far-east" element={<FarEastPage />} />
        <Route path="/destinations/far-east" element={<FarEastPage />} />
        <Route path="/far-east-tours" element={<FarEastPage />} />
        <Route path="/usa-canada" element={<UsaCanadaPage />} />
        <Route path="/destinations/usa-canada" element={<UsaCanadaPage />} />
        <Route path="/usa-canada-tours" element={<UsaCanadaPage />} />
        <Route path="/usa" element={<UsaCanadaPage />} />
        <Route path="/canada" element={<UsaCanadaPage />} />
        <Route path="/destinations" element={<Home />} />
        <Route path="/packages" element={<Home />} />
        {/* Fallback route */}
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

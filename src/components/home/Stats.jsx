import React from 'react'
import { Globe, MapPin, Plane, Users } from 'lucide-react'
import { statsData } from '../../data/stats'
import { useCounter } from '../../hooks/useCounter'

const iconMap = {
  Globe: Globe,
  MapPin: MapPin,
  Plane: Plane,
  Users: Users,
}

function StatItem({ item }) {
  const { count, ref } = useCounter(item.value, 2.5)
  const IconComponent = iconMap[item.iconName] || Globe

  return (
    <div
      ref={ref}
      className="flex flex-col items-center text-center p-1.5 xs:p-2 sm:p-4 group relative"
    >
      {/* Icon size responsive for small screens */}
      <div className="w-8 h-8 xs:w-9 xs:h-9 sm:w-12 sm:h-12 rounded-full bg-white/25 backdrop-blur-md flex items-center justify-center text-white mb-1 sm:mb-2 shadow-inner transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
        <IconComponent className="w-3.5 h-3.5 xs:w-4 xs:h-4 sm:w-6 sm:h-6" />
      </div>

      {/* Font size responsive – tighter on very small screens */}
      <h3 className="text-lg xs:text-xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-none font-sans">
        {count.toLocaleString()}
        <span className="text-white/90">{item.suffix}</span>
      </h3>

      <p className="mt-0.5 sm:mt-1 text-[9px] xs:text-[10px] sm:text-sm font-bold text-white/95 uppercase tracking-wider leading-tight">
        {item.label}
      </p>

      {/* Hide description on very small screens to save space */}
      <p className="mt-0.5 text-[8px] xs:text-[9px] sm:text-xs text-white/80 font-medium line-clamp-1 hidden xs:block">
        {item.description}
      </p>
    </div>
  )
}

export default function Stats() {
  return (
    <section className="relative z-20 max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 md:px-12 lg:px-16 -mt-6 xs:-mt-8 sm:-mt-12 md:-mt-16">
      {/* Banner padding responsive for small screens */}
      <div className="relative rounded-xl xs:rounded-2xl sm:rounded-3xl bg-gradient-to-r from-[#fa9c24] via-[#fa9c24] to-[#015fc9] p-3 xs:p-4 sm:p-6 md:p-8 shadow-2xl shadow-[#fa9c24]/25 border border-white/20 overflow-hidden">
        
        <div className="absolute -top-12 -left-12 w-48 h-48 bg-white/10 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-white/10 rounded-full blur-2xl pointer-events-none" />

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 xs:gap-3 sm:gap-6 lg:divide-x divide-white/20">
          {statsData.map((stat) => (
            <StatItem key={stat.id} item={stat} />
          ))}
        </div>
      </div>
    </section>
  )
}
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
      className="flex flex-col items-center text-center p-2 sm:p-4 group relative"
    >
      {/* Icon size chota kiya w-12 h-12 */}
      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/25 backdrop-blur-md flex items-center justify-center text-white mb-2 shadow-inner transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
        <IconComponent className="w-5 h-5 sm:w-6 sm:h-6" />
      </div>

      {/* Font size thoda adjust kiya */}
      <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-none font-sans">
        {count.toLocaleString()}
        <span className="text-white/90">{item.suffix}</span>
      </h3>

      <p className="mt-1 text-xs sm:text-sm font-bold text-white/95 uppercase tracking-wide">
        {item.label}
      </p>

      <p className="mt-0.5 text-[10px] sm:text-xs text-white/80 font-medium">
        {item.description}
      </p>
    </div>
  )
}

export default function Stats() {
  return (
    <section className="relative z-20 max-w-7xl mx-auto px-6 md:px-12 lg:px-16 -mt-12 md:-mt-16">
      {/* Banner padding p-5 md:p-8 kar di taake height kam ho */}
      <div className="relative rounded-3xl bg-gradient-to-r from-[#fa9c24] via-[#fa9c24] to-[#015fc9] p-5 md:p-8 shadow-2xl shadow-[#fa9c24]/25 border border-white/20 overflow-hidden">
        
        <div className="absolute -top-12 -left-12 w-48 h-48 bg-white/10 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-white/10 rounded-full blur-2xl pointer-events-none" />

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 divide-y lg:divide-y-0 lg:divide-x divide-white/20">
          {statsData.map((stat) => (
            <StatItem key={stat.id} item={stat} />
          ))}
        </div>
      </div>
    </section>
  )
}
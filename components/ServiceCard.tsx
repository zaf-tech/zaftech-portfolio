import { ReactNode } from 'react'

interface ServiceCardProps {
  icon: ReactNode
  title: string
  description: string
}

export default function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <div className="card text-center group animate-scale-in">
      <div className="flex justify-center mb-4">
        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500/20 to-blue-400/10 flex items-center justify-center text-blue-400 group-hover:from-blue-500/30 group-hover:to-blue-400/20 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 relative border border-blue-500/30">
          <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-400/0 to-blue-300/0 group-hover:from-blue-400/10 group-hover:to-blue-300/10 transition-all duration-500 blur-sm"></div>
          <div className="relative z-10">{icon}</div>
        </div>
      </div>
      <h3 className="text-xl font-heading font-semibold text-blue-200 mb-2 group-hover:text-blue-300 transition-colors duration-300">{title}</h3>
      <p className="text-blue-300/60 group-hover:text-blue-300/80 transition-colors duration-300 text-sm leading-relaxed">{description}</p>
    </div>
  )
}

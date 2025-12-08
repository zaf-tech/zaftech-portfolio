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
        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent/10 to-accent-teal/10 flex items-center justify-center text-accent group-hover:from-accent/25 group-hover:to-accent-teal/25 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 relative">
          <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-accent/0 to-accent-teal/0 group-hover:from-accent/10 group-hover:to-accent-teal/10 transition-all duration-500 blur-sm"></div>
          <div className="relative z-10">{icon}</div>
        </div>
      </div>
      <h3 className="text-xl font-heading font-semibold text-primary mb-2 group-hover:text-accent transition-colors duration-300">{title}</h3>
      <p className="text-text-light group-hover:text-text transition-colors duration-300">{description}</p>
    </div>
  )
}


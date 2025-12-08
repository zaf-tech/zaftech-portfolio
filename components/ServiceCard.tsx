import { ReactNode } from 'react'

interface ServiceCardProps {
  icon: ReactNode
  title: string
  description: string
}

export default function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <div className="card text-center group">
      <div className="flex justify-center mb-4">
        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent/10 to-accent-teal/10 flex items-center justify-center text-accent group-hover:from-accent/20 group-hover:to-accent-teal/20 transition-all duration-300 group-hover:scale-110">
          {icon}
        </div>
      </div>
      <h3 className="text-xl font-heading font-semibold text-primary mb-2 group-hover:text-accent transition-colors">{title}</h3>
      <p className="text-text-light">{description}</p>
    </div>
  )
}


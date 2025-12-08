import { ReactNode } from 'react'

interface ServiceCardProps {
  icon: ReactNode
  title: string
  description: string
}

export default function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <div className="card text-center">
      <div className="flex justify-center mb-4">
        <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center text-accent">
          {icon}
        </div>
      </div>
      <h3 className="text-xl font-heading font-semibold text-primary mb-2">{title}</h3>
      <p className="text-text-light">{description}</p>
    </div>
  )
}


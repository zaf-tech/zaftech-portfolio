interface ProcessStepProps {
  number: string
  title: string
  description: string
}

export default function ProcessStep({ number, title, description }: ProcessStepProps) {
  return (
    <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6">
      <div className="flex-shrink-0">
        <div className="w-12 h-12 rounded-full bg-accent text-white flex items-center justify-center font-heading font-bold text-lg">
          {number}
        </div>
      </div>
      <div className="flex-1">
        <h3 className="text-xl font-heading font-semibold text-primary mb-2">{title}</h3>
        <p className="text-text-light">{description}</p>
      </div>
    </div>
  )
}


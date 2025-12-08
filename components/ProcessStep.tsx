interface ProcessStepProps {
  number: string
  title: string
  description: string
}

export default function ProcessStep({ number, title, description }: ProcessStepProps) {
  return (
    <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6 group">
      <div className="flex-shrink-0 relative">
        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-accent to-accent-teal text-white flex items-center justify-center font-heading font-bold text-lg shadow-lg shadow-accent/25 group-hover:scale-110 transition-transform duration-300">
          {number}
        </div>
        {number !== "5" && (
          <div className="hidden md:block absolute top-14 left-1/2 transform -translate-x-1/2 w-0.5 h-12 bg-gradient-to-b from-accent/30 to-transparent"></div>
        )}
      </div>
      <div className="flex-1">
        <h3 className="text-xl font-heading font-semibold text-primary mb-2 group-hover:text-accent transition-colors">{title}</h3>
        <p className="text-text-light">{description}</p>
      </div>
    </div>
  )
}


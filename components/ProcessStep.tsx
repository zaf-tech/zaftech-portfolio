interface ProcessStepProps {
  number: string
  title: string
  description: string
}

export default function ProcessStep({ number, title, description }: ProcessStepProps) {
  return (
    <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6 group hover:translate-x-2 transition-transform duration-300">
      <div className="flex-shrink-0 relative">
        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-blue-400 text-white flex items-center justify-center font-heading font-bold text-lg shadow-lg shadow-blue-500/30 group-hover:scale-110 group-hover:shadow-xl group-hover:shadow-blue-400/40 transition-all duration-300 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-white/0 group-hover:from-white/20 group-hover:to-white/0 transition-all duration-300"></div>
          <span className="relative z-10">{number}</span>
        </div>
        {number !== "5" && (
          <div className="hidden md:block absolute top-14 left-1/2 transform -translate-x-1/2 w-0.5 h-12 bg-gradient-to-b from-blue-400/40 via-blue-300/20 to-transparent group-hover:from-blue-400/60 transition-all duration-300"></div>
        )}
      </div>
      <div className="flex-1">
        <h3 className="text-xl font-heading font-semibold text-blue-200 mb-2 group-hover:text-blue-300 transition-colors duration-300">{title}</h3>
        <p className="text-blue-300/60 group-hover:text-blue-300/80 transition-colors duration-300 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  )
}

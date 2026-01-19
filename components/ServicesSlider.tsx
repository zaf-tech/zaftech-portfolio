"use client";

import { useEffect, useState } from "react";

const services = [
  {
    type: "service",
    content: "End-to-End IAC Build Pipelines"
  },
  {
    type: "service",
    content: "Ready-to-Deploy Kubernetes & Cloud Infrastructure (AWS EKS, GKE, IAM)"
  },
  {
    type: "service",
    content: "GPU Pipelines for AI Projects"
  },
  {
    type: "service",
    content: "Auto-Scaling Azure Infrastructure On-Demand"
  },
  {
    type: "service",
    content: "Rapid MVP & POC Deployment - Cloud Migration Ready"
  },
  {
    type: "service",
    content: "Secure Workload Migration with Zero Data Breach Risk"
  },
  {
    type: "mlops",
    title: "MLOps / DevOps Solutions",
    content: "Streamline your ML model deployment and software delivery. We automate CI/CD pipelines, implement monitoring, and ensure seamless integration between development and operations teams."
  },
  {
    type: "ai",
    title: "Private AI Solutions You Own & Control",
    content: "Build your own AI solution for your team to avoid data breach. We help you deploy secure, private AI systems that you fully own and control."
  },
  {
    type: "ai",
    title: "Complete Data Privacy & Sovereignty",
    content: "Your sensitive data never leaves your infrastructure. Deploy AI models on-premises or in your private cloud, maintaining full control over your intellectual property."
  },
  {
    type: "ai",
    title: "Advanced AI Technology Stack",
    content: "Leverage the latest AI technologies including Large Language Models, Computer Vision, and Machine Learning - all running securely within your environment."
  },
  {
    type: "ai",
    title: "Enterprise-Grade Security & Compliance",
    content: "Security-first architecture with end-to-end encryption, granular access controls, comprehensive audit logging, and full compliance with industry regulations including GDPR, HIPAA, and SOC 2."
  }
];

export default function ServicesSlider() {
  const [currentService, setCurrentService] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentService((prev) => (prev + 1) % services.length);
    }, 3500); // Change service every 3.5 seconds

    return () => clearInterval(interval);
  }, []);

  const goToNext = () => {
    setCurrentService((prev) => (prev + 1) % services.length);
  };

  const goToPrev = () => {
    setCurrentService((prev) => (prev - 1 + services.length) % services.length);
  };

  return (
    <div className="relative overflow-hidden">
      {/* Previous Button */}
      <button
        onClick={goToPrev}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-cyan-500/20 hover:bg-cyan-500/40 text-cyan-300 p-2 rounded-full transition-all duration-300 backdrop-blur-sm border border-cyan-400/30"
        aria-label="Previous service"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Next Button */}
      <button
        onClick={goToNext}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-cyan-500/20 hover:bg-cyan-500/40 text-cyan-300 p-2 rounded-full transition-all duration-300 backdrop-blur-sm border border-cyan-400/30"
        aria-label="Next service"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      <div className="flex items-center justify-center min-h-[120px] md:min-h-[160px] px-12">
        {services.map((service, index) => (
          <div
            key={index}
            className={`absolute inset-0 flex items-center justify-center transition-all duration-700 px-12 ${
              index === currentService
                ? "opacity-100 translate-x-0"
                : index < currentService
                ? "opacity-0 -translate-x-full"
                : "opacity-0 translate-x-full"
            }`}
          >
            {service.type === "service" ? (
              <div className="flex items-start gap-3 md:gap-4 w-full max-w-4xl">
                <span className="text-green-400 text-2xl md:text-3xl font-bold flex-shrink-0 animate-pulse">
                  ✓
                </span>
                <p className="text-xl md:text-2xl lg:text-3xl font-bold text-cyan-100 leading-relaxed">
                  {service.content}
                </p>
              </div>
            ) : service.type === "mlops" ? (
              <div className="w-full max-w-4xl">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl">⚙️</span>
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-blue-300">
                    {service.title}
                  </h3>
                </div>
                <p className="text-base md:text-lg text-cyan-100 leading-relaxed">
                  {service.content}
                </p>
              </div>
            ) : (
              <div className="w-full max-w-4xl">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl">🤖</span>
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-cyan-300">
                    {service.title}
                  </h3>
                </div>
                <p className="text-base md:text-lg text-cyan-100 leading-relaxed">
                  {service.content}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Service Counter Dots */}
      <div className="flex justify-center gap-2 mt-4">
        {services.map((service, index) => (
          <button
            key={index}
            onClick={() => setCurrentService(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentService
                ? "w-8 " + (service.type === "ai" ? "bg-cyan-400" : service.type === "mlops" ? "bg-blue-400" : "bg-cyan-400")
                : "w-2 " + (service.type === "ai" ? "bg-cyan-600 hover:bg-cyan-500" : service.type === "mlops" ? "bg-blue-600 hover:bg-blue-500" : "bg-cyan-600 hover:bg-cyan-500")
            }`}
            aria-label={`Go to service ${index + 1}`}
          ></button>
        ))}
      </div>
    </div>
  );
}

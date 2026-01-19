"use client";

import { useEffect, useState } from "react";

const aiContent = [
  {
    title: "Your Own AI Solution",
    description: "Build your own AI solution for your team to avoid data breach. We help you deploy secure, private AI systems that you fully own and control."
  },
  {
    title: "Complete Data Privacy",
    description: "Your sensitive data never leaves your infrastructure. Deploy AI models on-premises or in your private cloud, maintaining full control over your intellectual property."
  },
  {
    title: "Cutting-Edge AI Capabilities",
    description: "Leverage the latest AI technologies including Large Language Models, Computer Vision, and Machine Learning - all running securely within your environment."
  },
  {
    title: "Enterprise-Grade Security",
    description: "Built with security-first approach. Every AI solution includes encryption, access controls, audit logging, and compliance with industry standards."
  }
];

export default function AISlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % aiContent.length);
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, []);

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % aiContent.length);
  };

  const goToPrev = () => {
    setCurrentSlide((prev) => (prev - 1 + aiContent.length) % aiContent.length);
  };

  return (
    <div className="relative overflow-hidden">
      {/* Previous Button */}
      <button
        onClick={goToPrev}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-purple-500/20 hover:bg-purple-500/40 text-purple-300 p-2 rounded-full transition-all duration-300 backdrop-blur-sm border border-purple-400/30"
        aria-label="Previous slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Next Button */}
      <button
        onClick={goToNext}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-purple-500/20 hover:bg-purple-500/40 text-purple-300 p-2 rounded-full transition-all duration-300 backdrop-blur-sm border border-purple-400/30"
        aria-label="Next slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      <div className="flex items-center justify-center min-h-[140px] md:min-h-[160px] px-12">
        {aiContent.map((content, index) => (
          <div
            key={index}
            className={`absolute inset-0 flex items-center justify-center transition-all duration-700 px-12 ${
              index === currentSlide
                ? "opacity-100 translate-x-0"
                : index < currentSlide
                ? "opacity-0 -translate-x-full"
                : "opacity-0 translate-x-full"
            }`}
          >
            <div className="w-full max-w-4xl">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-3xl">🤖</span>
                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-purple-300">
                  {content.title}
                </h3>
              </div>
              <p className="text-base md:text-lg text-cyan-100 leading-relaxed">
                {content.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Slide Counter Dots */}
      <div className="flex justify-center gap-2 mt-4">
        {aiContent.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "w-8 bg-purple-400"
                : "w-2 bg-purple-600 hover:bg-purple-500"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </div>
  );
}

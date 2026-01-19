"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const services = [
  "End-to-End IAC Build Pipelines",
  "Kubernetes Clusters • IAM Roles • AWS EKS & GKE",
  "GPU Pipelines for AI Projects",
  "VM Scale Sets in Azure",
  "MVP & POC Services for Cloud Migration",
  "Workload Migration with Full Privacy"
];

export default function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true);
  const [currentService, setCurrentService] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Service rotation - change every 1.2 seconds
    const serviceInterval = setInterval(() => {
      setCurrentService((prev) => {
        if (prev >= services.length - 1) {
          clearInterval(serviceInterval);
          return prev;
        }
        return prev + 1;
      });
    }, 1200);

    // Progress animation
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 1.5;
      });
    }, 30);

    // Hide splash screen after all services shown (7.5 seconds)
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 7500);

    return () => {
      clearTimeout(timer);
      clearInterval(progressInterval);
      clearInterval(serviceInterval);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black splash-screen overflow-hidden">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 ai-grid"></div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-blue-900/30 to-purple-900/20"></div>
      
      {/* Floating Particles */}
      <div className="absolute inset-0 ai-particles"></div>
      
      {/* Scanning Lines */}
      <div className="absolute inset-0 scan-lines"></div>
      
      {/* Main Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* AI Hexagon Frame with Logo */}
        <div className="relative mb-8 flex items-center justify-center">
          <div className="ai-hexagon-frame">
            <div className="ai-rotating-border"></div>
            <div className="ai-logo-container">
              <Image
                src="/images/logo.svg"
                alt="ZAFTECH Logo"
                width={100}
                height={100}
                className="relative z-10 ai-logo-pulse"
                priority
              />
              {/* Glowing Core */}
              <div className="ai-glow-core"></div>
            </div>
          </div>
        </div>

        {/* AI System Text */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 mb-2 ai-glitch-text">
            ZAFTECH
          </h1>
          <p className="text-cyan-400 text-sm md:text-base tracking-[0.3em] font-mono mb-2 ai-typing">
            CLOUD INFRASTRUCTURE AS CODE
          </p>
        </div>
        
        {/* Rotating Services Display */}
        <div className="mb-8 min-h-[120px] flex items-center justify-center">
          <div className="bg-gradient-to-r from-cyan-500/10 via-blue-500/15 to-purple-500/10 backdrop-blur-sm border border-cyan-400/30 rounded-lg p-6 md:p-8 w-full max-w-3xl">
            <div className="flex items-start gap-4 justify-center">
              <span className="text-green-400 text-2xl md:text-3xl font-bold flex-shrink-0 animate-pulse">✓</span>
              <div className="text-left flex-1">
                <p 
                  key={currentService}
                  className="text-xl md:text-2xl lg:text-3xl font-bold text-cyan-100 leading-relaxed animate-fade-in"
                >
                  {services[currentService]}
                </p>
              </div>
            </div>
            
            {/* Service Counter */}
            <div className="mt-4 flex justify-center gap-2">
              {services.map((_, index) => (
                <div
                  key={index}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    index === currentService
                      ? 'w-8 bg-cyan-400'
                      : index < currentService
                      ? 'w-4 bg-cyan-600'
                      : 'w-2 bg-cyan-900'
                  }`}
                ></div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Progress Bar */}
        <div className="max-w-md mx-auto mb-4">
          <div className="ai-progress-container">
            <div 
              className="ai-progress-bar"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <div className="flex justify-between mt-2 text-xs text-cyan-400/70 font-mono">
            <span>LOADING SERVICES</span>
            <span>{Math.round(progress)}%</span>
          </div>
        </div>
        
        {/* System Status */}
        <div className="text-sm text-cyan-400/60 font-mono">
          <p className="ai-typing">Initializing cloud infrastructure solutions...</p>
        </div>
      </div>
      
      {/* Corner Brackets */}
      <div className="ai-corner ai-corner-tl"></div>
      <div className="ai-corner ai-corner-tr"></div>
      <div className="ai-corner ai-corner-bl"></div>
      <div className="ai-corner ai-corner-br"></div>
    </div>
  );
}

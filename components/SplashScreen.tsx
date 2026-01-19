"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Progress animation
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    // Hide splash screen after 8 seconds (extended for reading time)
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 8000);

    return () => {
      clearTimeout(timer);
      clearInterval(progressInterval);
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
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        {/* AI Hexagon Frame with Logo */}
        <div className="relative mb-6 flex items-center justify-center">
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
        <div className="mb-6">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 mb-2 ai-glitch-text">
            ZAFTECH
          </h1>
          <p className="text-cyan-400 text-xs md:text-sm tracking-[0.3em] font-mono mb-4 ai-typing">
            CLOUD INFRASTRUCTURE AS CODE SOLUTIONS
          </p>
        </div>
        
        {/* Main Message */}
        <div className="mb-6 max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-cyan-400/30 rounded-lg p-6 md:p-8 shadow-2xl">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-cyan-300 mb-4">
              Pre-Built Cloud Based IAC Solutions
            </h2>
            <div className="text-sm md:text-base text-cyan-100/90 space-y-3 text-left">
              <p className="leading-relaxed">
                <span className="text-green-400 font-bold">✓</span> End-to-End IAC Build Pipelines
              </p>
              <p className="leading-relaxed">
                <span className="text-green-400 font-bold">✓</span> Kubernetes Clusters • IAM Roles • AWS EKS & GKE
              </p>
              <p className="leading-relaxed">
                <span className="text-green-400 font-bold">✓</span> GPU Pipelines for Your Next AI Project
              </p>
              <p className="leading-relaxed">
                <span className="text-green-400 font-bold">✓</span> VM Scale Sets in Azure • Fully Code-Based Solutions
              </p>
              <p className="text-center mt-4 text-cyan-200 font-semibold">
                We help small, medium, and enterprise environments setup POC to production-level infrastructure in days on any cloud!
              </p>
            </div>
            
            {/* CTA Button */}
            <div className="mt-6">
              <a
                href="https://calendly.com/talha-jilal-zaftech/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/50 text-sm md:text-base"
              >
                📅 Book Your FREE 30-Min Consultation
              </a>
              <p className="text-xs md:text-sm text-cyan-300/70 mt-3">
                One-click away • Full privacy guaranteed • Meet with a leading IT professional
              </p>
            </div>
          </div>
        </div>
        
        {/* Progress Bar */}
        <div className="max-w-md mx-auto mb-3">
          <div className="ai-progress-container">
            <div 
              className="ai-progress-bar"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <div className="flex justify-between mt-2 text-xs text-cyan-400/70 font-mono">
            <span>LOADING SERVICES</span>
            <span>{progress}%</span>
          </div>
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

'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-accent to-accent-teal rounded-lg opacity-20 group-hover:opacity-30 blur transition-opacity"></div>
              <span className="relative text-2xl md:text-3xl font-heading font-bold text-primary">
                ZafTech
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-text hover:text-accent transition-colors font-medium">
              Home
            </Link>
            <Link href="/services" className="text-text hover:text-accent transition-colors font-medium">
              Services
            </Link>
            <Link href="/about" className="text-text hover:text-accent transition-colors font-medium">
              About
            </Link>
            <Link href="/contact" className="btn-primary">
              Free IT Assessment
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col space-y-4">
              <Link
                href="/"
                onClick={() => setIsOpen(false)}
                className="text-text hover:text-accent transition-colors font-medium py-2"
              >
                Home
              </Link>
              <Link
                href="/services"
                onClick={() => setIsOpen(false)}
                className="text-text hover:text-accent transition-colors font-medium py-2"
              >
                Services
              </Link>
              <Link
                href="/about"
                onClick={() => setIsOpen(false)}
                className="text-text hover:text-accent transition-colors font-medium py-2"
              >
                About
              </Link>
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="btn-primary inline-block text-center"
              >
                Free IT Assessment
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}


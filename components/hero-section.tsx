"use client"

import { ArrowDown } from "lucide-react"

export function HeroSection() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center px-6 pt-20 relative"
    >
      <div className="max-w-4xl mx-auto w-full text-center">
        <div className="space-y-8">
          <p className="text-muted-foreground text-lg tracking-wide">
            Hello, I&apos;m Andrei
          </p>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight font-serif">
            Engineering solutions
            <br />
            <span className="text-primary">with purpose.</span>
          </h1>

          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Computer Engineering graduate passionate about building 
            software and networks that make a difference.
          </p>
        </div>
      </div>

      {/* Scroll indicator */}
      <a 
        href="#about" 
        className="absolute bottom-12 right-12 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary/90 transition-colors"
        aria-label="Scroll to about section"
      >
        <ArrowDown className="h-5 w-5" />
      </a>
    </section>
  )
}

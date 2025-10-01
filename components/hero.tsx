"use client"

import { useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handleTimeUpdate = () => {
      if (video.duration - video.currentTime < 0.2) {
        video.currentTime = 0.05 // rewind slightly before start to avoid flash
        video.play()
      }
    }

    video.addEventListener("timeupdate", handleTimeUpdate)
    return () => video.removeEventListener("timeupdate", handleTimeUpdate)
  }, [])

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0 bg-black/40 z-10"></div>
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        playsInline
        loop={false} // disable native loop to control ourselves
        src="/videos/solar_hero.mp4"
        poster="/placeholder.svg?height=1080&width=1920"
      >
        {/* fallback */}
        <source src="#" type="video/mp4" />
        <img
          src="/placeholder.svg?height=1080&width=1920"
          alt="Solar panels"
          className="w-full h-full object-cover"
        />
      </video>

      <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            India's Leading Solar Consulting
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-10 leading-relaxed">
            Empowering businesses with sustainable energy solutions that reduce costs and environmental impact
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-6 text-lg rounded-full"
              asChild
            >
              <Link href="/contact">Book Now</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

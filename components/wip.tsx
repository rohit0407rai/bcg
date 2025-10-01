"use client"

import { useRef, useEffect, useState } from "react"

export default function HomeWIP() {
    const videoRef = useRef<HTMLVideoElement>(null)
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
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
        <div className="flex flex-col min-h-screen bg-white">
            {/* Navbar */}
            <nav className="bg-white shadow-sm sticky top-0 z-50">
                <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        <svg className="w-8 h-8 text-amber-500" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                        </svg>
                        <span className="text-2xl font-bold text-gray-900">BC Global</span>
                    </div>
                    <div className="hidden md:flex gap-8 items-center">
                        <a href="#" className="text-amber-500 font-medium">Home</a>
                        <a href="#" className="text-gray-700 hover:text-gray-900">Onsite Solar</a>
                        <a href="#" className="text-gray-700 hover:text-gray-900">Offsite Solar</a>
                        <a href="#" className="text-gray-700 hover:text-gray-900">Key Transactions</a>
                        <a href="#" className="text-gray-700 hover:text-gray-900">Blog</a>
                        <button className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-2.5 rounded-full font-medium transition-colors">
                            Book Now
                        </button>
                    </div>
                </div>
            </nav>

            {/* Hero Section with Video Background */}
            <div className="relative h-screen w-full overflow-hidden">
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/40 z-10"></div>

                {/* Video Background */}
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

                {/* Content with Animations */}
                <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center">
                    <div className={`max-w-3xl transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                            India's Leading Solar Consulting
                        </h1>
                        <p className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed">
                            Empowering businesses with sustainable energy solutions that reduce costs and environmental impact
                        </p>

                        {/* Work in Progress Card with Animation */}
                        <div className="bg-white/95 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-white/20 transform hover:scale-105 transition-transform duration-300">
                            <div className="flex items-center gap-4 mb-6">
                                {/* Animated Solar Icon */}
                                <div className="relative w-16 h-16">
                                    <div className="absolute inset-0 border-4 border-amber-500/30 rounded-full animate-ping"></div>
                                    <svg className="relative w-16 h-16 text-amber-500 animate-spin-slow" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                                    </svg>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-bold text-gray-900 mb-1">Work in Progress</h2>
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-amber-500 rounded-full animate-bounce"></div>
                                        <div className="w-2 h-2 bg-amber-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                                        <div className="w-2 h-2 bg-amber-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                                    </div>
                                </div>
                            </div>

                            <p className="text-gray-700 text-lg mb-6">
                                We're building something amazing for you. Our team is working hard to enhance your experience with cutting-edge solar solutions.
                            </p>

                            {/* Animated Progress Bar */}
                            <div className="bg-gray-200 rounded-full h-3 overflow-hidden mb-4">
                                <div className="bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 h-full rounded-full animate-progress shadow-lg"></div>
                            </div>

                            <div className="flex items-center justify-between text-sm">
                                <div className="flex items-center gap-2 text-gray-600">
                                    <svg className="w-5 h-5 text-amber-500 animate-spin" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    <span className="font-medium">Building in progress...</span>
                                </div>
                                <span className="text-amber-600 font-semibold">Coming Soon</span>
                            </div>
                        </div>

                        {/* Floating Animation Elements */}
                        <div className="absolute top-20 right-10 w-20 h-20 bg-amber-500/20 rounded-full blur-2xl animate-float"></div>
                        <div className="absolute bottom-32 left-20 w-32 h-32 bg-amber-400/20 rounded-full blur-3xl animate-float-delayed"></div>
                    </div>
                </div>
            </div>

            <style jsx>{`
        @keyframes progress {
          0% { width: 0%; }
          50% { width: 80%; }
          100% { width: 0%; }
        }

        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-30px); }
        }

        .animate-progress {
          animation: progress 2.5s ease-in-out infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 6s linear infinite;
        }

        .animate-float {
          animation: float 4s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 5s ease-in-out infinite 1s;
        }
      `}</style>
        </div>
    )
}
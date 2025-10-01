"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Sun, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { usePathname } from "next/navigation"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Onsite Solar", href: "/onsite" },
    { name: "Offsite Solar", href: "/offsite" },
    { name: "Key Transactions", href: "/transactions" },
    { name: "Blog", href: "/blog" },
  ]

  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true
    if (path !== "/" && pathname.startsWith(path)) return true
    return false
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Sun className="h-8 w-8 text-amber-500" />
            <span className={`text-xl font-bold ${scrolled ? "text-gray-900" : "text-white"}`}>BC Global</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-amber-500 ${
                  isActive(item.href) ? "text-amber-500" : scrolled ? "text-gray-700" : "text-white"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <Button
              className="hidden md:inline-flex bg-amber-500 hover:bg-amber-600 text-white"
              onClick={() => (window.location.href = "/contact")}
            >
              Book Now
            </Button>

            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className={`h-6 w-6 ${scrolled ? "text-gray-900" : "text-white"}`} />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px]">
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between py-4">
                    <Link href="/" className="flex items-center space-x-2">
                      <Sun className="h-6 w-6 text-amber-500" />
                      <span className="text-lg font-bold">BC Global</span>
                    </Link>
                  </div>
                  <nav className="flex-1 py-8">
                    <ul className="space-y-6">
                      {navItems.map((item) => (
                        <li key={item.name}>
                          <Link
                            href={item.href}
                            className={`text-lg font-medium transition-colors hover:text-amber-500 ${
                              isActive(item.href) ? "text-amber-500" : "text-gray-900"
                            }`}
                          >
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </nav>
                  <div className="py-6">
                    <Button
                      className="w-full bg-amber-500 hover:bg-amber-600 text-white"
                      onClick={() => (window.location.href = "/contact")}
                    >
                      Book Now
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}

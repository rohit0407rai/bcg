import Link from "next/link"
import { Sun, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center space-x-2 mb-8">
              <Sun className="h-8 w-8 text-amber-400" />
              <span className="text-xl font-bold">BC Global</span>
            </div>
            <p className="text-gray-300 mb-8 leading-relaxed">
              India's leading solar consulting company helping businesses achieve sustainability goals and reduce energy
              costs.
            </p>
            <div className="flex space-x-5">
              <Link href="#" className="text-gray-400 hover:text-amber-400 transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-amber-400 transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-amber-400 transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-amber-400 transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-8">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/" className="text-gray-300 hover:text-amber-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/onsite" className="text-gray-300 hover:text-amber-400 transition-colors">
                  Onsite Solar
                </Link>
              </li>
              <li>
                <Link href="/offsite" className="text-gray-300 hover:text-amber-400 transition-colors">
                  Offsite Solar
                </Link>
              </li>
              <li>
                <Link href="/transactions" className="text-gray-300 hover:text-amber-400 transition-colors">
                  Key Transactions
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-amber-400 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-amber-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-8">Contact Us</h3>
            <ul className="space-y-5">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-amber-400 shrink-0 mt-0.5" />
                <span className="text-gray-300">123 Solar Street, New Delhi, India 110001</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-amber-400 shrink-0" />
                <span className="text-gray-300">+91 98765 43210</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-amber-400 shrink-0" />
                <span className="text-gray-300">info@bcglobal.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-8">Newsletter</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Subscribe to our newsletter for the latest updates on renewable energy solutions.
            </p>
            <div className="space-y-4">
              <Input
                type="email"
                placeholder="Your email address"
                className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400 focus:border-amber-400"
              />
              <Button className="w-full bg-amber-500 hover:bg-amber-600 text-white">Subscribe</Button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-16 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} BC Global. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative h-[400px] overflow-hidden">
          <div className="absolute inset-0 bg-black/50 z-10"></div>
          <img
            src="/images/contact.jpg"
            alt="Contact BC Global"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Contact Us</h1>
            <p className="text-xl text-white/90 max-w-3xl">
              Get in touch with our team of solar energy experts to discuss your renewable energy needs.
            </p>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-gray-900">Get in Touch</h2>
                <p className="text-gray-700 mb-8">
                  Fill out the form below and our team will get back to you within 24 hours to discuss your solar energy
                  needs.
                </p>

                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                        First Name
                      </label>
                      <Input id="firstName" placeholder="Enter your first name" className="w-full" />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name
                      </label>
                      <Input id="lastName" placeholder="Enter your last name" className="w-full" />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <Input id="email" type="email" placeholder="Enter your email address" className="w-full" />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <Input id="phone" placeholder="Enter your phone number" className="w-full" />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Company Name
                    </label>
                    <Input id="company" placeholder="Enter your company name" className="w-full" />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your energy needs and requirements"
                      className="w-full min-h-[120px]"
                    />
                  </div>

                  <Button className="w-full bg-amber-500 hover:bg-amber-600 text-white py-6">Submit Inquiry</Button>
                </form>
              </div>

              <div>
                <div className="bg-gray-50 rounded-2xl p-8 mb-8">
                  <h3 className="text-xl font-bold mb-6 text-gray-900">Contact Information</h3>
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <MapPin className="h-6 w-6 text-amber-500 mr-4 mt-1" />
                      <div>
                        <p className="font-medium text-gray-900 mb-1">Registered Office:</p>
                        <p className="text-gray-700">A-115, Third Floor, Shivalik, New Delhi – 110017</p>
                        <p className="font-medium text-gray-900 mt-4 mb-1">Corporate Office:</p>
                        <p className="text-gray-700">
                          BC Global, Plot No. 1, Second Floor, BGR Building, Filmcity, Sector 16A, Noida 201301
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Phone className="h-6 w-6 text-amber-500 mr-4" />
                      <div>
                        <p className="font-medium text-gray-900 mb-1">Phone:</p>
                        <p className="text-gray-700">+91 98765 43210</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Mail className="h-6 w-6 text-amber-500 mr-4" />
                      <div>
                        <p className="font-medium text-gray-900 mb-1">Email:</p>
                        <p className="text-gray-700">info@bcglobal.com</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-2xl overflow-hidden">
                  <iframe
                    src="about:blank"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="BC Global Office Location"
                    className="w-full"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

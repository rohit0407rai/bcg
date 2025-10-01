import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { CheckCircle } from "lucide-react"

export default function OffsiteSolarPage() {
  const stateData = [
    { state: "TAMIL NADU", capacity: "370.48", projects: "10" },
    { state: "UTTAR PRADESH", capacity: "132.04", projects: "21" },
    { state: "MAHARASHTRA", capacity: "96.47", projects: "7" },
    { state: "GOA", capacity: "80", projects: "1" },
    { state: "RAJASTHAN", capacity: "66.64", projects: "3" },
    { state: "GUJARAT", capacity: "53.9", projects: "4" },
    { state: "MADHYA PRADESH", capacity: "50", projects: "1" },
    { state: "PUDUCHERRY", capacity: "50", projects: "1" },
    { state: "CHHATTISGARH", capacity: "25", projects: "1" },
    { state: "TELANGANA", capacity: "22.74", projects: "2" },
    { state: "PUNJAB", capacity: "22", projects: "3" },
    { state: "UTTARAKHAND", capacity: "20.5", projects: "2" },
    { state: "KERELA", capacity: "14.84", projects: "1" },
    { state: "HARYANA", capacity: "11.68", projects: "2" },
    { state: "ANDHRA PRADESH", capacity: "5", projects: "1" },
  ]

  const totalCapacity = stateData.reduce((sum, item) => sum + Number.parseFloat(item.capacity), 0).toFixed(2)
  const totalProjects = stateData.reduce((sum, item) => sum + Number.parseInt(item.projects), 0)

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative h-[500px] overflow-hidden">
          <div className="absolute inset-0 bg-black/50 z-10"></div>
          <img
            src="/images/solar_plant.jpg"
            alt="Large scale solar park"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Offsite Solar Solutions</h1>
            <p className="text-xl text-white/90 max-w-3xl">
              If you don't have enough area for onsite solar installation, then you can wheel electricity from large
              scale solar parks at a remote facility away from your site.
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto mb-16">
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                This is the ideal solution when the industries are space restricted and have huge energy requirements.
                BC Global is India's leading Off-Site Solar and Wind-Solar Hybrid Solution Marketplace.
              </p>
            </div>

            {/* Benefits */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
              <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle className="h-7 w-7 text-amber-500" />
                </div>
                <p className="text-gray-700">Solar / Wind-solar park located away from client's facility</p>
              </div>
              <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle className="h-7 w-7 text-amber-500" />
                </div>
                <p className="text-gray-700">Savings of 30-60% per unit electricity</p>
              </div>
              <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle className="h-7 w-7 text-amber-500" />
                </div>
                <p className="text-gray-700">
                  Ideal for BULK consumers of electricity; To meet RPOs/Energy Transition goals
                </p>
              </div>
              <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle className="h-7 w-7 text-amber-500" />
                </div>
                <p className="text-gray-700">
                  No restriction on capacity of electricity supplied from Solar/ Wind-Solar park
                </p>
              </div>
              <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle className="h-7 w-7 text-amber-500" />
                </div>
                <p className="text-gray-700">ZERO capital investment under THIRD PARTY model</p>
              </div>
            </div>

            {/* India Presence */}
            <div className="mb-20">
              <h2 className="text-3xl md:text-4xl font-bold mb-16 text-gray-900 text-center">
                BC Global's Pan-India Presence
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full min-w-[600px] border-collapse">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-200 p-4 text-left font-bold text-gray-900">State</th>
                      <th className="border border-gray-200 p-4 text-left font-bold text-gray-900">Capacity (MWp)</th>
                      <th className="border border-gray-200 p-4 text-left font-bold text-gray-900">No of Projects</th>
                    </tr>
                  </thead>
                  <tbody>
                    {stateData.map((item, index) => (
                      <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                        <td className="border border-gray-200 p-4 text-gray-700">{item.state}</td>
                        <td className="border border-gray-200 p-4 text-gray-700">{item.capacity}</td>
                        <td className="border border-gray-200 p-4 text-gray-700">{item.projects}</td>
                      </tr>
                    ))}
                    <tr className="bg-amber-50">
                      <td className="border border-gray-200 p-4 font-bold text-gray-900">Total</td>
                      <td className="border border-gray-200 p-4 font-bold text-gray-900">{totalCapacity}</td>
                      <td className="border border-gray-200 p-4 font-bold text-gray-900">{totalProjects}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Map */}
            <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-gray-900 text-center">Our Nationwide Coverage</h2>
              <div className="aspect-[16/9] bg-white rounded-xl overflow-hidden">
                <img
                  src="/images/india_coverage.png"
                  alt="India map showing project locations"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

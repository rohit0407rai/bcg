import { Sun, CloudSun } from "lucide-react"

export default function Services() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-20 text-gray-900">What We Offer</h2>

        <div className="grid md:grid-cols-2 gap-16">
          <div className="group">
            <div className="overflow-hidden rounded-2xl mb-8">
              <div className="w-full h-[300px]">
                <img
                  src="/images/onsite_solar.jpg"
                  alt="On-site solar installation"
                  className="object-fit w-full h-full"
                />
              </div>

            </div>
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mr-4">
                <Sun className="h-6 w-6 text-amber-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">On-Site Solar</h3>
            </div>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Generate clean energy right where you need it. Our on-site solar solutions are designed to maximize
              efficiency and minimize your carbon footprint, all while reducing your energy costs.
            </p>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <span className="text-amber-500 mr-2">•</span>
                <span>Rooftop solar installations</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-500 mr-2">•</span>
                <span>Ground-mounted systems</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-500 mr-2">•</span>
                <span>Carport solar structures</span>
              </li>
            </ul>
          </div>

          <div className="group">
            <div className="overflow-hidden rounded-2xl mb-8">
              <div className="w-full h-[300px]">
                <img
                  src="/images/offsite_solar.jpg"
                  alt="On-site solar installation"
                  className="object-fit w-full h-full"
                  
                />
              </div>
            </div>
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                <CloudSun className="h-6 w-6 text-blue-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Off-Site Solar</h3>
            </div>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Access renewable energy without space constraints. Our off-site solar solutions allow you to benefit from
              solar power even when your facility doesn't have adequate space for installation.
            </p>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <span className="text-amber-500 mr-2">•</span>
                <span>Power Purchase Agreements (PPAs)</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-500 mr-2">•</span>
                <span>Virtual net metering</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-500 mr-2">•</span>
                <span>Community solar projects</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

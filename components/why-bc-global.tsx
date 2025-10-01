import { FileCheck, Users, Sun } from "lucide-react"

export default function WhyBcGlobal() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-20 text-gray-900">Why BC Global?</h2>

        <div className="grid md:grid-cols-3 gap-10">
          <div className="bg-white rounded-2xl p-10 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center mb-8">
              <div className="w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center mr-4">
                <FileCheck className="h-7 w-7 text-amber-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">141+ PPAs Executed</h3>
            </div>
            <ul className="space-y-4 text-gray-600">
              <li className="flex items-start">
                <span className="text-amber-500 mr-2">•</span>
                <span>
                  Benefit from our rich history of delivering 141+ successful Power Purchase Agreements (PPAs)
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-500 mr-2">•</span>
                <span>Customized contract terms as per your industry benchmarks</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-500 mr-2">•</span>
                <span>Take advantage with our insights of developers' working dynamics and negotiation tactics</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-10 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center mb-8">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                <Users className="h-7 w-7 text-blue-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">53+ Customers Across India</h3>
            </div>
            <ul className="space-y-4 text-gray-600">
              <li className="flex items-start">
                <span className="text-amber-500 mr-2">•</span>
                <span>Served over 53+ clients across 18 states across industries</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-500 mr-2">•</span>
                <span>Access to all Marquee Developers across India</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-500 mr-2">•</span>
                <span>High repeat orders showcasing massive value add</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-10 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center mb-8">
              <div className="w-14 h-14 bg-emerald-100 rounded-full flex items-center justify-center mr-4">
                <Sun className="h-7 w-7 text-emerald-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">1052+ MW of Projects Delivered</h3>
            </div>
            <ul className="space-y-4 text-gray-600">
              <li className="flex items-start">
                <span className="text-amber-500 mr-2">•</span>
                <span>Meet your 100% energy goals with hassle free delivery</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-500 mr-2">•</span>
                <span>One Stop Shop – Access to New Green Energy Solutions</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-500 mr-2">•</span>
                <span>Continuous project monitoring & support after delivery</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

import { Banknote, Leaf, Award } from "lucide-react"

export default function WhyRenewable() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-20 text-gray-900">
          Why Buy Renewable Energy Solution?
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          <div className="bg-white rounded-2xl p-10 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center mb-8">
              <Banknote className="h-7 w-7 text-amber-500" />
            </div>
            <h3 className="text-xl font-bold mb-6 text-gray-900">Cost Efficiency and Profitability</h3>
            <ul className="space-y-4 text-gray-600">
              <li className="flex items-start">
                <span className="text-amber-500 mr-2">•</span>
                <span>Achieve up to 50% savings in electricity costs</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-500 mr-2">•</span>
                <span>Reinvest the saved money into profitable projects to boost profitability after tax (PAT)</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-10 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-14 h-14 bg-emerald-100 rounded-full flex items-center justify-center mb-8">
              <Leaf className="h-7 w-7 text-emerald-500" />
            </div>
            <h3 className="text-xl font-bold mb-6 text-gray-900">Sustainability and Impact</h3>
            <ul className="space-y-4 text-gray-600">
              <li className="flex items-start">
                <span className="text-amber-500 mr-2">•</span>
                <span>Achieve up to 80% energy replacement through renewable solutions</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-500 mr-2">•</span>
                <span>Create a competitive edge over competitors</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-500 mr-2">•</span>
                <span>Actively contribute to a sustainable future and gain recognition for achieving RE100 goals</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-10 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-8">
              <Award className="h-7 w-7 text-blue-500" />
            </div>
            <h3 className="text-xl font-bold mb-6 text-gray-900">Industry Competitive Edge</h3>
            <ul className="space-y-4 text-gray-600">
              <li className="flex items-start">
                <span className="text-amber-500 mr-2">•</span>
                <span>Experience a sense of pride in adopting cleaner energy solutions</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-500 mr-2">•</span>
                <span>Gain Competitive Edge by showcasing commitment to sustainability</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-500 mr-2">•</span>
                <span>Build a green image among investors, employees, vendors, customers, and more</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

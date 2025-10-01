import { LightbulbIcon, Users, FileText } from "lucide-react"

export default function WhyConsultation() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-20 text-gray-900">
          Why Buy Renewable Energy Consultation?
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          <div className="group">
            <div className="w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center mb-8 transition-transform duration-300 group-hover:scale-110">
              <LightbulbIcon className="h-7 w-7 text-amber-500" />
            </div>
            <h3 className="text-xl font-bold mb-6 text-gray-900">Right Renewable Solution</h3>
            <ul className="space-y-4 text-gray-600">
              <li className="flex items-start">
                <span className="text-amber-500 mr-2">•</span>
                <span>Expert in-depth regulatory, load, and capacity analysis</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-500 mr-2">•</span>
                <span>Optimal capacity tailored to your consumption needs</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-500 mr-2">•</span>
                <span>Save 4-6 months of management time by letting experts handle your renewable needs</span>
              </li>
            </ul>
          </div>

          <div className="group">
            <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-8 transition-transform duration-300 group-hover:scale-110">
              <Users className="h-7 w-7 text-blue-500" />
            </div>
            <h3 className="text-xl font-bold mb-6 text-gray-900">Right Renewable Partner</h3>
            <ul className="space-y-4 text-gray-600">
              <li className="flex items-start">
                <span className="text-amber-500 mr-2">•</span>
                <span>Scientific Method to navigate through a plethora of developers and select the very best</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-500 mr-2">•</span>
                <span>Perfect Matchmaking with the right developer</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-500 mr-2">•</span>
                <span>WIN-WIN Terms for both parties</span>
              </li>
            </ul>
          </div>

          <div className="group">
            <div className="w-14 h-14 bg-emerald-100 rounded-full flex items-center justify-center mb-8 transition-transform duration-300 group-hover:scale-110">
              <FileText className="h-7 w-7 text-emerald-500" />
            </div>
            <h3 className="text-xl font-bold mb-6 text-gray-900">Right Renewable Terms</h3>
            <ul className="space-y-4 text-gray-600">
              <li className="flex items-start">
                <span className="text-amber-500 mr-2">•</span>
                <span>Stay updated on market benchmarks and secure the best possible terms</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-500 mr-2">•</span>
                <span>Ensure a competitive environment for developers, leading to the best possible terms</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-500 mr-2">•</span>
                <span>Ensure contract alignment with your business needs</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

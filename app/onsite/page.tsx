import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { CheckCircle } from "lucide-react"

export default function OnsiteSolarPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative h-[500px] overflow-hidden">
          <div className="absolute inset-0 bg-black/50 z-10"></div>
          <img
            src="/images/onsite_solar.jpg"
            alt="Rooftop solar installation"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Onsite Solar Solutions</h1>
            <p className="text-xl text-white/90 max-w-3xl">
              Convert your vacant roof or ground into electricity generating asset. Achieve significant savings on
              energy costs and reduce your emissions with on-site solar solutions.
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto mb-16">
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                A Rooftop Solar Solution helps Industrial and Commercial consumers who are willing to reduce the power
                cost through clean and green technology.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                This solution for industrial consumers with no investment enables them to generate power to reduce their
                electricity bill, while at the same time contributing to the nation's renewable energy goals through the
                concept of green power.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                We at BC Global help you choose the Right Rooftop Solar Solution to meet your power needs at
                significantly cheaper costs.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                We offer you customized solar solutions as per your needs to help you get huge cost savings and achieve
                your sustainability goals.
              </p>
            </div>

            {/* Benefits */}
            <div className="grid md:grid-cols-3 gap-8 mb-20">
              <div className="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-md transition-shadow">
                <CheckCircle className="h-12 w-12 text-amber-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2 text-gray-900">No Investment</h3>
                <p className="text-gray-600">Start saving without any upfront capital investment</p>
              </div>
              <div className="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-md transition-shadow">
                <CheckCircle className="h-12 w-12 text-amber-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2 text-gray-900">Customized Solutions</h3>
                <p className="text-gray-600">Tailored to your specific energy needs and facility constraints</p>
              </div>
              <div className="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-md transition-shadow">
                <CheckCircle className="h-12 w-12 text-amber-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2 text-gray-900">Assured Savings</h3>
                <p className="text-gray-600">Guaranteed reduction in your electricity costs</p>
              </div>
              <div className="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-md transition-shadow">
                <CheckCircle className="h-12 w-12 text-amber-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2 text-gray-900">End-to-end Solution</h3>
                <p className="text-gray-600">From design and installation to monitoring and optimization</p>
              </div>
              <div className="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-md transition-shadow">
                <CheckCircle className="h-12 w-12 text-amber-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2 text-gray-900">Complete Maintenance</h3>
                <p className="text-gray-600">Full service maintenance to ensure optimal performance</p>
              </div>
              <div className="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-md transition-shadow">
                <CheckCircle className="h-12 w-12 text-amber-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2 text-gray-900">No Techno-Financial Risk</h3>
                <p className="text-gray-600">We handle all technical and financial aspects of your solar project</p>
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="bg-gray-50 rounded-2xl p-10 md:p-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-900 text-center">Why BC Global</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="flex items-start">
                  <span className="text-amber-500 mr-3 text-xl font-bold">01</span>
                  <p className="text-gray-700">
                    Perfect Matchmaking for C&I customers with the Solar and Wind Developers in terms of projects
                    availability, timely delivery and the PPA terms
                  </p>
                </div>
                <div className="flex items-start">
                  <span className="text-amber-500 mr-3 text-xl font-bold">02</span>
                  <p className="text-gray-700">
                    Access to all Marquee Developers through BC Global Platform brings in the comparison to you at one
                    place
                  </p>
                </div>
                <div className="flex items-start">
                  <span className="text-amber-500 mr-3 text-xl font-bold">03</span>
                  <p className="text-gray-700">
                    We understand your needs and bring in the Right Solar & Wind Solution as per the State Regulations
                    with timely delivery and assured savings
                  </p>
                </div>
                <div className="flex items-start">
                  <span className="text-amber-500 mr-3 text-xl font-bold">04</span>
                  <p className="text-gray-700">
                    We save your time because we bring the Right Market Intelligence to you in terms of Developers, key
                    terms to negotiate and regulations
                  </p>
                </div>
                <div className="flex items-start">
                  <span className="text-amber-500 mr-3 text-xl font-bold">05</span>
                  <p className="text-gray-700">
                    We are your trusted Renewable Transaction Advisor of the projects that we have closed till now for
                    on-site
                  </p>
                </div>
                <div className="flex items-start">
                  <span className="text-amber-500 mr-3 text-xl font-bold">06</span>
                  <p className="text-gray-700">
                    We have closed these projects along with our RE Developers and helped these customers start their
                    green energy and save their electricity cost
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-16 text-gray-900 text-center">Our Projects</h2>
            <div className="grid md:grid-cols-2 gap-10">
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <img
                  src="/images/solar_project.jpg"
                  alt="Dixon Plant"
                  className="w-full h-64 object-cover"
                />
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">Dixon Plant</h3>
                  <p className="text-gray-700 mb-4">
                    Implemented a comprehensive rooftop solar solution for Dixon's manufacturing facility, resulting in
                    significant energy cost savings and reduced carbon footprint.
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <img
                  src="/images/project2.jpg"
                  alt="Ashoka Plant"
                  className="w-full h-64 object-cover"
                />
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">Ashoka On-Site Solar Plant</h3>
                  <p className="text-gray-700 mb-4">
                    Designed and implemented a custom solar solution for Ashoka's facility, helping them achieve their
                    sustainability goals while reducing operational costs.
                  </p>
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

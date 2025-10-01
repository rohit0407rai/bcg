import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function KeyTransactionsPage() {
  const transactions = [
    {
      customer: "Moon Beverages",
      value: "422",
      capacity: "9375",
      industry: "BEVERAGES",
      state: "UTTAR PRADESH",
      developer: "AMPLUS",
      image: "/images/p1.jpg",
    },
    {
      customer: "FMCG Leader",
      value: "135",
      capacity: "3000",
      industry: "FMCG",
      state: "UTTAR PRADESH",
      developer: "4PEL",
      image: "/images/p2.jpg",
    },
    {
      customer: "Tech Industries",
      value: "210",
      capacity: "4500",
      industry: "TECHNOLOGY",
      state: "MAHARASHTRA",
      developer: "CLEANMAX",
      image: "/images/p3.jpg",
    },
    {
      customer: "Automotive Solutions",
      value: "185",
      capacity: "4100",
      industry: "AUTOMOTIVE",
      state: "TAMIL NADU",
      developer: "FOURTH PARTNER",
      image: "/images/p4.jpg",
    },
    {
      customer: "Pharma Innovations",
      value: "156",
      capacity: "3450",
      industry: "PHARMACEUTICAL",
      state: "GUJARAT",
      developer: "AMPLUS",
      image: "/images/p5.jpg",
    },
    {
      customer: "Textile Manufacturers",
      value: "112",
      capacity: "2500",
      industry: "TEXTILE",
      state: "RAJASTHAN",
      developer: "CLEANTECH",
      image: "/images/p6.jpg",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative h-[400px] overflow-hidden">
          <div className="absolute inset-0 bg-black/50 z-10"></div>
          <img
            src="/images/solar_sunny.jpg"
            alt="Solar transactions"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Key Transactions</h1>
            <p className="text-xl text-white/90 max-w-3xl">
              Using our deep-domain expertise and understanding of Cross Sector & State Regulatory knowledge has led us
              to successfully close 2,850 INR MILLION worth of complex transactions.
            </p>
          </div>
        </section>

        {/* Transactions */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {transactions.map((transaction, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100"
                >
                  <img
                    src={transaction.image || "/placeholder.svg"}
                    alt={transaction.customer}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-bold text-gray-900">{transaction.customer}</h3>
                      <div className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-medium">
                        {transaction.value} INR MLN
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <p className="text-xs text-gray-500 mb-1">CAPACITY (kWp)</p>
                        <p className="text-gray-900 font-medium">{transaction.capacity}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 mb-1">INDUSTRY</p>
                        <p className="text-gray-900 font-medium">{transaction.industry}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 mb-1">STATE</p>
                        <p className="text-gray-900 font-medium">{transaction.state}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 mb-1">RE DEVELOPER</p>
                        <p className="text-gray-900 font-medium">{transaction.developer}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <p className="text-4xl font-bold text-amber-500 mb-2">2,850+</p>
                <p className="text-gray-700">INR MILLION TRANSACTIONS</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-amber-500 mb-2">1,021+</p>
                <p className="text-gray-700">MWp CAPACITY</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-amber-500 mb-2">60+</p>
                <p className="text-gray-700">PROJECTS</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-amber-500 mb-2">15+</p>
                <p className="text-gray-700">STATES</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

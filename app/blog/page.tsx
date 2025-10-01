'use client';
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Link from "next/link"
import { Calendar, Clock, ArrowRight } from "lucide-react"

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of Solar Energy in India: Trends and Predictions",
      excerpt:
        "India's solar energy sector is experiencing unprecedented growth. Explore the latest trends and what the future holds for solar energy in the country.",
      date: "April 25, 2025",
      readTime: "5 min read",
      image: "/images/future.jpg",
      category: "Industry Trends",
    },
    {
      id: 2,
      title: "Understanding Power Purchase Agreements (PPAs) for Solar Projects",
      excerpt:
        "Power Purchase Agreements are crucial for solar energy projects. Learn about the key components, benefits, and considerations when entering into a PPA.",
      date: "April 20, 2025",
      readTime: "7 min read",
      image: "/images/agreement.jpg",

      category: "Business",
    },
    {
      id: 3,
      title: "How Businesses Can Achieve Sustainability Goals Through Solar Energy",
      excerpt:
        "More companies are turning to solar energy to meet their sustainability targets. Discover how your business can benefit from renewable energy solutions.",
      date: "April 15, 2025",
      readTime: "6 min read",
      image: "/images/sustainable.jpg",
      category: "Sustainability",
    },
    {
      id: 4,
      title: "The Economics of Solar: Understanding ROI and Payback Periods",
      excerpt:
        "Investing in solar energy makes financial sense. This article breaks down the economics, ROI calculations, and typical payback periods for solar installations.",
      date: "April 10, 2025",
      readTime: "8 min read",
      image: "/images/roi.jpg",
      category: "Finance",
    },
    {
      id: 5,
      title: "Solar Policy Updates: What's New in India's Renewable Energy Regulations",
      excerpt:
        "Stay updated on the latest policy changes affecting the solar energy sector in India, including incentives, subsidies, and regulatory frameworks.",
      date: "April 5, 2025",
      readTime: "4 min read",
      image: "/images/parliament.jpg",
      category: "Policy",
    },
    {
      id: 6,
      title: "Comparing On-Site and Off-Site Solar Solutions: Which is Right for Your Business?",
      excerpt:
        "Both on-site and off-site solar solutions offer unique advantages. This guide helps you determine which option is best suited for your specific needs.",
      date: "April 1, 2025",
      readTime: "6 min read",
      image: "/images/revolution.jpg",
      category: "Solutions",
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
            src="images/blog.jpg"
            alt="Solar energy blog"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Our Blog</h1>
            <p className="text-xl text-white/90 max-w-3xl">
              Stay updated with the latest insights, trends, and news from the world of solar energy and renewable
              solutions.
            </p>
          </div>
        </section>

        {/* Featured Post */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="bg-gray-50 rounded-2xl overflow-hidden">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <div className="mb-4">
                    <span className="inline-block bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
                    Solar Energy Revolution: How India is Leading the Charge in Renewable Energy
                  </h2>
                  <p className="text-gray-700 mb-6">
                    India has set ambitious targets for renewable energy adoption, with solar playing a central role.
                    Learn how the country is positioning itself as a global leader in the solar revolution.
                  </p>
                  <div className="flex items-center text-sm text-gray-500 mb-6">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span className="mr-4">April 28, 2025</span>
                    <Clock className="h-4 w-4 mr-2" />
                    <span>10 min read</span>
                  </div>
                  <Link
                    href="/blog/solar-energy-revolution"
                    onClick={(e) => e.preventDefault()}
                    className="inline-flex items-center text-amber-600 font-medium hover:text-amber-700"
                  >
                    Read Article <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
                <div className="h-64 md:h-auto">
                  <img
                    src="/images/p7.jpg"
                    alt="Solar Energy Revolution"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <div
                  key={post.id}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <div className="mb-4">
                      <span className="inline-block bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-xs font-medium">
                        {post.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-gray-900">{post.title}</h3>
                    <p className="text-gray-700 mb-4 line-clamp-3">{post.excerpt}</p>
                    <div className="flex items-center text-sm text-gray-500 mb-4">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span className="mr-4">{post.date}</span>
                      <Clock className="h-4 w-4 mr-2" />
                      <span>{post.readTime}</span>
                    </div>
                    <Link
                      href={`/blog/${post.id}`}
                      onClick={(e) => e.preventDefault()}
                      className="inline-flex items-center text-amber-600 font-medium hover:text-amber-700"
                    >
                      Read More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>

                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

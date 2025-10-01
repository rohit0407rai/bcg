// import Hero from "@/components/hero"
// import Navbar from "@/components/navbar"
// import Services from "@/components/services"
// import WhyRenewable from "@/components/why-renewable"
// import WhyConsultation from "@/components/why-consultation"
// import WhyBcGlobal from "@/components/why-bc-global"
// import Footer from "@/components/footer"

// export default function Home() {
//   return (
//     <div className="flex flex-col min-h-screen">
//       <Navbar />
//       <main>
//         <Hero />
//         <Services />
//         <WhyRenewable />
//         <WhyConsultation />
//         <WhyBcGlobal />
//       </main>
//       <Footer />
//     </div>
//   )
// }
import Hero from "@/components/hero"
import Navbar from "@/components/navbar"
import HomeWIP from "@/components/wip"
// Temporarily commented out for Work in Progress
// import Services from "@/components/services"
// import WhyRenewable from "@/components/why-renewable"
// import WhyConsultation from "@/components/why-consultation"
// import WhyBcGlobal from "@/components/why-bc-global"
// import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main>
        <HomeWIP />
        {/* Other sections temporarily hidden for Work in Progress */}
        {/* <Services />
        <WhyRenewable />
        <WhyConsultation />
        <WhyBcGlobal /> */}
      </main>
      {/* <Footer /> */}
    </div>
  )
}
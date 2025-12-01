import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import Stats from "@/components/stats"
import Strengths from "@/components/strengths"
import WhyChoose from "@/components/why-choose"
import Services from "@/components/services"
import AboutUs from "@/components/aboutus"
import TrustedTech from "@/components/trusted-tech"
import Ourwork from "@/components/ourwork"
import Footer from "@/components/footer"


export default function Page() {
  return (
    <>
      <Navbar />

      <section id="home">
        <Hero />
      </section>

      <section id="stats">
        <Stats />
      </section>

      <section id="strengths">
        <Strengths />
      </section>

      <section id="about">
        <WhyChoose />
      </section>

      <section id="services">
        <Services />
      </section>

       <section id="aboutus">
        <AboutUs />
      </section>


      <section id="trusted">
        <TrustedTech />
      </section>

      <section id="ourwork">
        <Ourwork />
      </section>

      <section id="contact">
        <Footer />
      </section>
    </>
  )
}



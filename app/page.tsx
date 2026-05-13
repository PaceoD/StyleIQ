import { Header } from "@/components/landing/header"
import { Hero } from "@/components/landing/hero"
import { About } from "@/components/landing/about"
import { Features } from "@/components/landing/features"
import { VideoSection } from "@/components/landing/video-section"
import { HowItWorks } from "@/components/landing/how-it-works"
import { Testimonials } from "@/components/landing/testimonials"
import { Gallery } from "@/components/landing/gallery"
import { Newsletter } from "@/components/landing/newsletter"
import { Footer } from "@/components/landing/footer"

export default function LandingPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Features />
      <VideoSection />
      <HowItWorks />
      <Testimonials />
      <Gallery />
      <Newsletter />
      <Footer />
    </main>
  )
}

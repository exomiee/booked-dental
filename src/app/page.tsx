import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Strategy from "@/components/Strategy";
import CaseStudies from "@/components/CaseStudies";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Strategy />
      <CaseStudies />
      <Testimonials />
      <CTA />
    </main>
  );
}

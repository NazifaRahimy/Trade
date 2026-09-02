// import Hero from "../../components/home/Hero"
import Hero from "../../components/home/Hero";
import AboutAcademy from "../../components/home/AboutAcademy";
import Features from "../../components/home/Features";
import Stats from "../../components/home/Stats";
import HowItWorks from "../../components/home/HowItWorks";
import Testimonials from "../../components/home/Testimonials";
import FAQ from "../../components/home/FAQ";
import CTA from "../../components/home/CTA";
const Home = () => {
  return (
    <main className="overflow-x-hidden">
      <Hero />

      <AboutAcademy />

      <Features />

      <Stats />

      <HowItWorks />

      <Testimonials />

      <FAQ />

      <CTA />
    </main>
  );
};

export default Home;
